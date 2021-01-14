import React, { useEffect } from "react"

import { navigate } from "gatsby"
import { auth } from "src/app/firebase"

const PrivateRoute = ({ location, children }) => {
  const loginRoute = "/profile/login"

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (
        !user &&
        location.pathname !== loginRoute &&
        typeof window !== "undefined"
      ) {
        navigate(loginRoute, { state: { from: location.pathname } })
        return <></>
      }
    })
    unsubscribe()
  }, [])

  return <>{children}</>
}

export default PrivateRoute
