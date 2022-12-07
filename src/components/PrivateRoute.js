import { navigate } from "gatsby"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "src/app"
import toast from "src/utils/toast"

const PrivateRoute = ({ children }) => {
  const [user, loading, error] = useAuthState(auth)

  if (loading) return null
  if (error) {
    navigate("/")
    toast({
      style: "error",
      title: "An error has occurred",
      description: error.message,
    })
    return null
  }
  if (!user) {
    navigate("/profile/login", { state: { from: window.location.pathname } })
    return null
  }
  return children
}

export default PrivateRoute
