import React, { useState } from "react"

import { navigate } from "gatsby"
import { auth } from "src/app"

const PrivateRoute = ({ location, children }) => {
  const loginRoute = "/profile/login"
  const [user, setUser] = useState("pending")
  if (typeof window === "undefined") {
    return null
  }
  const unsub = auth.onAuthStateChanged(setUser)

  if (user === "pending") {
    return null
  } else {
    unsub()
    if (!user) {
      navigate(loginRoute, { state: { from: location.pathname } })
      return null
    }
  }
  return <>{children}</>
}

export default PrivateRoute
