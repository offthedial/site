import { useMutation } from "@tanstack/react-query"
import { navigate } from "gatsby"
import { signOut } from "firebase/auth"
import { auth, queryClient } from "src/app"
import toast from "src/components/toast"

const useLogoutUser = () =>
  useMutation(async () => await signOut(auth), {
    onSuccess: () => {
      navigate("/")
      toast({
        style: "success",
        title: "Logout Successful",
        description: "You have been logged out",
      })
      localStorage.removeItem("discordToken")
      queryClient.invalidateQueries(["user"])
    },
    onError: error => {
      toast({
        style: "error",
        title: "An error has occurred",
        description: error.message,
      })
    },
  })

export default useLogoutUser
