import { useQuery } from "react-query"
import { auth, db } from "../firebase"

export default () =>
  useQuery(["user", "data"], async () => {
    const doc = await db.collection("users").doc(auth.currentUser.uid).get()
    return doc.data()
  })
