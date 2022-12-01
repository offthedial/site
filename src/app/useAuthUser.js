import { useAuthUser } from "@react-query-firebase/auth"
import { auth } from "./firebase"

const useAuthUser = () => {
  return useAuthUser(["user"], auth)
}

export default useAuthUser
