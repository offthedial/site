import { useQuery } from "react-query"
import { getUserToken } from "../firebase"

export default () =>
  useQuery(["user", "discord"], async () => {
    // Depend on auth user
    const jwt = await getUserToken()
    if (!jwt) {
      return {}
    }

    // Call discord api
    const userRes = await fetch(`https://discord.com/api/users/@me`, {
      method: "GET",
      headers: { Authorization: `Bearer ${jwt.claims.access_token}` },
    })
    const userData = await userRes.json()
    return {
      ...userData,
      avatarUrl: `https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}`,
    }
  })
