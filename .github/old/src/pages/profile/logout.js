import { navigate } from "gatsby"
import { auth } from "src/app"
import { createStandaloneToast } from "@chakra-ui/react"

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
          const toast = createStandaloneToast()
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
          const toast = createStandaloneToast()
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
