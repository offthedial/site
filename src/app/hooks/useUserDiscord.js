import { useQuery } from "react-query"
import { auth } from "../firebase"

export default () =>
  useQuery(
    ["user", "discord"],
    async () => {
      if (!auth.currentUser) {
        return {}
      }
      const jwt = await auth.currentUser.getIdTokenResult()

      const userRes = await fetch(`https://discord.com/api/users/@me`, {
        method: "GET",
        headers: { Authorization: `Bearer ${jwt.claims.token.access_token}` },
      })
      const userData = await userRes.json()

      return {
        ...userData,
        avatarUrl: `https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}`,
      }
    },
    {}
  )
