import { useQuery } from "react-query"
import { auth } from "../firebase"

export default () =>
  useQuery(
    ["user", "joined"],
    async () => {
      if (!auth.currentUser) {
        return null
      }
      const jwt = await auth.currentUser.getIdTokenResult()

      const guildRes = await fetch("https://discord.com/api/users/@me/guilds", {
        method: "GET",
        headers: { Authorization: `Bearer ${jwt.claims.access_token}` },
      })
      const guildData = await guildRes.json()
      const inGuilds = guildData.filter(
        guild => guild.id === "374715620052172800"
      )

      return !!inGuilds.length
    },
    {
      staleTime: 0,
    }
  )
