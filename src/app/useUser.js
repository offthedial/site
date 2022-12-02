import { useAuthUser } from "@react-query-firebase/auth"
import { useFirestoreDocumentData } from "@react-query-firebase/firestore"
import { auth } from "app"

const useAuthUser = () => {
  const authUserQuery = useAuthUser(["user", "auth"], auth)
  const dbUserQuery = useFirestoreDocumentData()
}

export default useAuthUser
