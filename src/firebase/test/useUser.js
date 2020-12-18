import { useState, useLayoutEffect } from "react"
import { currentUser } from "src/services/firebase/auth/auth"
import { getUser } from "src/services/firebase/db/db"

const useServerState = () => {
  const [user, setUser] = useState(true)

  const refreshUser = () => {
    if (currentUser() !== null) {
      getUser()
        .get()
        .then(doc => {
          setUser(doc.data())
        })
    } else {
      setUser({})
    }
  }

  useLayoutEffect(() => {
    refreshUser()
  }, [])

  return [user, refreshUser]
}

export default useServerState
