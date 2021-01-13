import { useMutation } from "react-query"
import { queryClient } from ".."
import { auth } from "../firebase"

export default () =>
  useMutation(
    async signup => {
      const tourney = queryClient.getQueryData(["tourney"])
      const userSignup = queryClient.getQueryData(["user", "signup"])
      if (tourney.hasEnded) {
        throw Error("Tournament has ended.")
      }

      if (userSignup?.type) {
        return await userSignup.ref.set(signup)
      } else {
        return await tourney.ref
          .collection(tourney.isRegistrationOpen ? "signups" : "subs")
          .doc(auth.currentUser.uid)
          .set(signup)
      }
    },
    {
      onSuccess: () => queryClient.invalidateQueries(["user", "signup"]),
    }
  )
