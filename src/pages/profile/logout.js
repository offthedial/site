import { navigate } from "gatsby"
import { auth } from "src/app/firebase"

const ProfileLogout = () => {
  if (typeof window === "undefined") {
    return null
  }
  auth.onAuthStateChanged(user => {
    if (!user) {
      navigate("/")
    } else {
      auth
        .signOut()
        .then(() => {
          const toast = undefined
          navigate("/")
          toast({
            title: "Logout Successful",
            description: "You have been logged out.",
            status: "success",
            duration: 5000,
            isClosable: true,
          })
        })
        .catch(error => {
          const toast = undefined
          navigate("/")
          toast({
            title: error.name,
            description: error.message,
            status: "error",
            isClosable: true,
          })
        })
    }
  })
  return null
}

export default ProfileLogout
