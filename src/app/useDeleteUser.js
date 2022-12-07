import { useMutation } from "@tanstack/react-query"
import { deleteUser } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "src/app"

const useDeleteUser = () => {
  const [authState] = useAuthState(auth)
  return useMutation({
    mutationFn: async () => await deleteUser(authState),
  })
}

export default useDeleteUser
