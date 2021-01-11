import { useQuery } from "react-query"
import { auth, db } from "../firebase"

export default () =>
  useQuery(["user", "signup"], async () => {
    const tourney = db.collection("tournaments").doc("2Kn")

    const signupsRef = tourney.collection("signups").doc(auth.currentUser?.uid)
    const signupsDoc = await signupsRef.get()
    if (signupsDoc.exists) {
      return { type: "signup", data: signupsDoc.data() }
    }
    const subsRef = tourney.collection("subs").doc(auth.currentUser?.uid)
    const subsDoc = await subsRef.get()
    if (subsDoc.exists) {
      return { type: "sub", data: subsDoc.data() }
    }
    return {}
  })
