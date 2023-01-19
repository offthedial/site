import { useMutation } from "@tanstack/react-query"
import { navigate } from "gatsby"
import { deleteUser } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, queryClient } from "src/app"
import toast from "src/components/toast"

const useDeleteUser = () => {
  const [user] = useAuthState(auth)
  return useMutation(async () => await deleteUser(user), {
    onSuccess: () => {
      navigate("/")
      toast({
        style: "success",
        title: "Delete Successful",
        description: "Your account has been deleted",
      })
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
}

export default useDeleteUser
