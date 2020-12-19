import React from "react"

import { navigate } from "gatsby"
import Loading from "src/components/Loading"
import AuthContext from "src/context/AuthContext"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const { currentUser } = React.useContext(AuthContext)
  const loginRoute = "/profile/login"

  if (
    !currentUser() &&
    location.pathname !== loginRoute &&
    typeof window !== "undefined"
  ) {
    navigate(loginRoute, { state: { from: location.pathname } })
    return <Loading />
  } else {
    return <Component {...rest} />
  }
}

export default PrivateRoute
