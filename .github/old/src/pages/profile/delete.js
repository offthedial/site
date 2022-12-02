import { navigate } from "gatsby"
import { auth } from "src/app"
import { createStandaloneToast } from "@chakra-ui/react"

const ProfileDelete = () => {
  if (typeof window === "undefined") {
    return null
  }
  auth.onAuthStateChanged(user => {
    if (!user) {
      navigate("/")
    } else {
      user
        .delete()
        .then(() => {
          const toast = createStandaloneToast()
          navigate("/")
          toast({
            title: "Delete Successful",
            description: "Your account has been deleted.",
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

export default ProfileDelete
