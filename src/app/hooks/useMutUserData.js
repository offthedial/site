import { useMutation } from "react-query"
import { queryClient } from ".."
import { auth, db } from "../firebase"

export default () =>
  useMutation(
    async profile => {
      const doc = db.collection("users").doc(auth.currentUser.uid)
      await doc.update({ profile })
    },
    {
      onSuccess: () => queryClient.invalidateQueries(["user", "data"]),
    }
  )
