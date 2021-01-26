import { useMutation } from "react-query"
import { auth } from "../firebase"
import { queryClient } from ".."
import useTourney from "./useTourney"
import useUserSignup from "./useUserSignup"

export default () => {
  useTourney()
  useUserSignup()
  return useMutation(
    async signup => {
      const tourney = queryClient.getQueryData(["tourney"])
      const userSignup = queryClient.getQueryData(["user", "signup"])
      if (tourney.hasEnded()) {
        throw Error("Registration is closed.")
      }

      if (userSignup?.type) {
        // Set existing signup
        return await userSignup.ref.set(signup)
      } else {
        // Add document to "signups" or "subs" based on registration status
        return await tourney.ref
          .collection(tourney.hasClosed() ? "subs" : "signups")
          .doc(auth.currentUser.uid)
          .set(signup)
      }
    },
    {
      onSuccess: () => queryClient.invalidateQueries(["user", "signup"]),
    }
  )
}
