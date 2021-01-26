import { useQuery } from "react-query"
import { auth } from "../firebase"
import { queryClient } from ".."
import useTourney from "./useTourney"

export default () => {
  const tourney = useTourney()
  return useQuery(
    ["user", "signup"],
    async () => {
      if (!auth.currentUser) {
        return {}
      }
      const tourney = queryClient.getQueryData(["tourney"])
      if (tourney.hasEnded()) {
        return {}
      }
      const doc = tourney.ref

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
    { enabled: !!tourney.data }
  )
}
