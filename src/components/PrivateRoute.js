import React from "react"

import { navigate } from "gatsby"
import AuthContext from "src/context/AuthContext"

const PrivateRoute = ({ children, location }) => {
  const { currentUser } = React.useContext(AuthContext)
  const loginRoute = "/profile/login"

  if (!currentUser && location.pathname !== loginRoute) {
    navigate(loginRoute)
    return null
  }
  return <>{children}</>
}

export default PrivateRoute
