import { useState, useEffect } from "react"
import { currentUser } from "src/services/firebase/auth/auth"

const useServerState = () => {
  const [inServer, setInServer] = useState(true)

  const refreshInServer = () => {
    currentUser()
      .getIdTokenResult()
      .then(jwt => {
        fetch("https://discord.com/api/users/@me/guilds", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${jwt.claims.access_token}`,
          },
        })
          .then(res => res.json())
          .then(data => {
            const guilds = data.filter(
              guild => guild.id === "374715620052172800"
            )
            setInServer(guilds.length)
          })
      })
  }

  useEffect(() => {
    refreshInServer()
  }, [])

  return [inServer, refreshInServer]
}

export default useServerState
