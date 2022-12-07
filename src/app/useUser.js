import { doc, getDoc } from "firebase/firestore"
import { useAuthState } from "react-firebase-hooks/auth"
import { useQuery } from "@tanstack/react-query"
import { auth, db } from "src/app"

const useUser = () => {
  const [authState] = useAuthState(auth)
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const ref = doc(db, "users", authState.uid)
      const snapshot = await getDoc(ref)
      let data = snapshot.data()
      if (!data) return
      return { ...authState, ...data, ref: snapshot?.ref }
    },
    enabled: !!authState,
  })
}

export default useUser
