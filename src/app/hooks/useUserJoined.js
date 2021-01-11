import { useQuery } from "react-query"
import { getUserToken } from "../firebase"

export default () =>
  useQuery(["user", "joined"], async () => {
    // Depend on auth user
    const jwt = await getUserToken()
    if (!jwt) {
      return null
    }

    // Call discord api
    const guildRes = await fetch("https://discord.com/api/users/@me/guilds", {
      method: "GET",
      headers: { Authorization: `Bearer ${jwt.claims.access_token}` },
    })
    const guildData = await guildRes.json()
    const inGuilds = guildData.filter(
      guild => guild.id === "374715620052172800"
    )
    return inGuilds.length
  })
