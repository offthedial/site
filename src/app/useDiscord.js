import { useQuery } from "@tanstack/react-query"
import { signOut } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "src/app"

const useDiscord = () => {
  const [authState] = useAuthState(auth)
  return useQuery(
    ["discord"],
    async () => {
      const userData = await fetchDiscord(
        authState,
        "https://discord.com/api/users/@me",
        data => ({
          ...data,
          avatarUrl: `https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}`,
        })
      )
      const hasJoined = await fetchDiscord(
        authState,
        "https://discord.com/api/users/@me/guilds",
        data => !!data.filter(guild => guild.id === "374715620052172800").length
      )
      return { ...userData, hasJoined }
    },
    {
      enabled: !!authState,
      onError: async () => {
        await signOut(auth)
      },
    }
  )
}

const fetchDiscord = async (authState, endpoint, callback) => {
  const discordToken = await getDiscordToken(authState)
  const resp = await fetch(endpoint, {
    method: "GET",
    headers: { Authorization: `Bearer ${discordToken.access_token}` },
  })
  const data = await resp.json()
  if (resp.status === 401) await refreshDiscordToken(authState)
  if (!resp.ok) throw new Error(data.message)
  return callback(data)
}

const getDiscordToken = async authState => {
  // Get existing discordToken
  let discordToken = JSON.parse(localStorage.getItem("discordToken"))
  // Set discordToken (from token, if it doesn't exist)
  if (discordToken === null) {
    const jwt = await authState.getIdTokenResult()
    if (jwt.claims.token) {
      localStorage.setItem("discordToken", JSON.stringify(jwt.claims.token))
      discordToken = jwt.claims.token
    }
  }
  if (!discordToken?.access_token || !discordToken?.refresh_token) {
    await signOut(auth)
    localStorage.removeItem("discordToken")
    discordToken = null
  }
  return discordToken
}

const refreshDiscordToken = async authState => {
  const discordToken = await getDiscordToken(authState)
  const resp = await fetch(`${process.env.GATSBY_API_URL}/auth/refresh`, {
    method: "POST",
    body: JSON.stringify(discordToken),
  })
  const { token, error } = await resp.json()
  if (!resp.ok) throw new Error(error)
  localStorage.setItem("discordToken", JSON.stringify(token))
  return token
}

export default useDiscord
