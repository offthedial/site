import { useMutation } from "@tanstack/react-query"
import { signOut } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "src/app"

const useLogoutUser = () => {
  const [authState] = useAuthState(auth)
  return useMutation({
    mutationFn: async () => await signOut(authState),
  })
}

export default useLogoutUser
