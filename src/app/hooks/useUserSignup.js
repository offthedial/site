import { useQuery } from "react-query"
import { auth } from "../firebase"
import { queryClient } from ".."

export default () =>
  useQuery(
    ["user", "signup"],
    async () => {
      if (!auth.currentUser) {
        return {}
      }
      const doc = queryClient.getQueryData(["tourney"]).ref

      const signupsRef = doc.collection("signups").doc(auth.currentUser?.uid)
      const signupsDoc = await signupsRef.get()
      if (signupsDoc.exists) {
        return { type: "signup", data: signupsDoc.data(), ref: signupsRef }
      }

      const subsRef = doc.collection("subs").doc(auth.currentUser?.uid)
      const subsDoc = await subsRef.get()
      if (subsDoc.exists) {
        return { type: "sub", data: subsDoc.data(), ref: subsRef }
      }

      return {}
    },
    {}
  )
