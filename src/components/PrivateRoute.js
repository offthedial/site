import { navigate } from "gatsby"
import useAuthUser from "app/useAuthUser"

const PrivateRoute = ({ location, children }) => {
  const userQuery = useAuthUser(["user"], auth)

  if (typeof window === "undefined") {
    return null
  }

  if (userQuery.isLoading) {
    return null
  } else if (!userQuery.data) {
    navigate("/profile/login", { state: { from: location.pathname } })
    return null
  }
  return children
}

export default PrivateRoute
