import { navigate } from "gatsby"
import { useEffect } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "src/app"

const PrivateRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth)

  useEffect(() => {
    if (!user && !loading) {
      navigate("/profile/login", { state: { from: window.location.pathname } })
    }
  }, [loading])

  if (!user) return null

  return children
}

export default PrivateRoute
