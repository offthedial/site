import React from "react"

import { navigate } from "gatsby"
import AuthContext from "src/context/AuthContext"

const PrivateRoute = ({
  component: Component,
  location,
  redirect,
  ...rest
}) => {
  const { currentUser } = React.useContext(AuthContext)
  const loginRoute = "/profile/login"

  if (
    !currentUser() &&
    location.pathname !== loginRoute &&
    typeof window !== "undefined"
  ) {
    navigate(loginRoute, { state: { redirect }, replace: true })
    return <></>
  } else {
    return <Component {...rest} />
  }
}

export default PrivateRoute
