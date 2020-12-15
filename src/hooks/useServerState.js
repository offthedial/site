import { useState, useEffect } from "react"
import { currentUser } from "src/services/firebase/auth/auth"

const useServerState = () => {
  const [serverState, setServerState] = useState(true)

  const refreshServerState = () => {
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
            setServerState(guilds.length)
          })
      })
  }

  useEffect(() => {
    refreshServerState()
  }, [])

  return [serverState, refreshServerState]
}

export default useServerState
