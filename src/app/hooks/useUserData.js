import { useQuery } from "react-query"
import { queryClient } from ".."
import { auth, db } from "../firebase"

export default () =>
  useQuery(
    ["user", "data"],
    async () => {
      if (!auth.currentUser) {
        return {}
      }
      const ref = db.collection("users").doc(auth.currentUser.uid)
      ref.onSnapshot(doc => {
        queryClient.invalidateQueries(["user", "data"])
      })
      const doc = await ref.get()

      return { ...doc.data(), ref: doc.ref }
    },
    {}
  )
