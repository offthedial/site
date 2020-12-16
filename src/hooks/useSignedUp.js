import { useState, useEffect } from "react"
import { currentUser } from "src/services/firebase/auth/auth"
import { userSignedUp } from "src/services/firebase/db/db"

const useSignedUp = () => {
  const [signedUp, setSignedUp] = useState()

  const refreshSignedUp = () => {
    if (currentUser() !== null) {
      userSignedUp().then(result => {
        setSignedUp(result)
      })
    } else {
      setSignedUp(null)
    }
  }

  useEffect(() => {
    refreshSignedUp()
  }, [])

  return [signedUp, refreshSignedUp]
}

export default useSignedUp
