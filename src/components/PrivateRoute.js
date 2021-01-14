import React, { useEffect, useState } from "react"

import { navigate } from "gatsby"
import { auth } from "src/app/firebase"

const PrivateRoute = ({ location, children }) => {
  const loginRoute = "/profile/login"
  const [user, setUser] = useState("pending")
  const unsub = auth.onAuthStateChanged(setUser)

  if (user === "pending") {
    return null
  } else {
    unsub()
    if (!user && typeof window !== "undefined") {
      navigate(loginRoute, { state: { from: location.pathname } })
      return null
    }
  }
  return <>{children}</>
}

export default PrivateRoute
