import { useMutation } from "react-query"
import { queryClient } from ".."
import { auth, db } from "../firebase"

export default () =>
  useMutation(
    async signup => {
      // Add registration to tournament
      await db
        .collection("tournaments")
        .doc("2Kn")
        .collection("signups")
        .doc(auth.currentUser.id)
        .set(signup)
    },
    {
      onSuccess: queryClient.invalidateQueries(["user", "signup"]),
    }
  )
