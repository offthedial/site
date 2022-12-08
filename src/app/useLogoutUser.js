import { useMutation } from "@tanstack/react-query"
import { navigate } from "gatsby"
import { signOut } from "firebase/auth"
import { auth, queryClient } from "src/app"
import toast from "src/utils/toast"

const useLogoutUser = () =>
  useMutation(async () => await signOut(auth), {
    onSuccess: () => {
      navigate("/")
      toast({
        style: "success",
        title: "Logout Successful",
        description: "You have been logged out",
      })
      queryClient.invalidateQueries(["user"])
    },
    onError: error => {
      toast({
        style: "error",
        title: error.name,
        description: error.message,
      })
    },
  })

export default useLogoutUser
