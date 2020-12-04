import React from "react"

import { navigate } from "gatsby"
import AuthContext from "src/context/AuthContext"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const { currentUser } = React.useContext(AuthContext)
  const loginRoute = "/profile/login"

  if (!currentUser && location.pathname !== loginRoute) {
    navigate(loginRoute)
  }
  return <Component {...rest} />
}

export default PrivateRoute
