import { doc, getDoc } from "firebase/firestore"
import { useAuthState } from "react-firebase-hooks/auth"
import { useQuery } from "@tanstack/react-query"
import { auth, db } from "src/app"

const useUser = () => {
  const [user, loading, error] = useAuthState(auth)
  const query = useQuery(
    ["user"],
    async () => {
      if (!user) return null
      if (error) throw error
      const ref = doc(db, "users", user.uid)
      const snapshot = await getDoc(ref)
      let data = snapshot.data()
      if (!data) return
      return { ...user, ...data, ref: snapshot?.ref }
    },
    {
      enabled: loading === false,
    }
  )
  if (user && !query.data) {
    return { ...query, data: user }
  }
  return query
}

export default useUser
