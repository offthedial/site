import { useQuery } from "@tanstack/react-query"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "src/app"

const useDiscord = () => {
  const [authState] = useAuthState(auth)
  return useQuery({
    queryKey: ["discord"],
    queryFn: async () => {
      const jwt = await authState.getIdTokenResult()
      const userData = await fetchUser(jwt.claims.access_token)
      const hasJoined = await fetchJoined(jwt.claims.access_token)
      return { ...userData, hasJoined }
    },
    enabled: !!authState,
  })
}

const fetchUser = async token => {
  const resp = await fetch(`https://discord.com/api/users/@me`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  })
  const data = await resp.json()
  if (!resp.ok) throw new Error(data.message)
  return {
    ...data,
    avatarUrl: `https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}`,
  }
}

const fetchJoined = async token => {
  const resp = await fetch("https://discord.com/api/users/@me/guilds", {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  })
  const data = await resp.json()
  if (!resp.ok) throw new Error(data.message)
  const joined = !!data.filter(guild => guild.id === "374715620052172800")
    .length
  return joined
}

export default useDiscord
