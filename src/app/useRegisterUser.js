import { useMutation } from "@tanstack/react-query"
import { collection, setDoc, updateDoc } from "firebase/firestore"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, queryClient } from "src/app"
import useTourney from "src/app/useTourney"
import useUserSignup from "src/app/useUserSignup"

const useRegisterUser = () => {
  const [authState] = useAuthState(auth)
  const tourneyQuery = useTourney()
  const signupQuery = useUserSignup()
  return useMutation({
    mutationFn: async ({ profile, date }) => {
      if (!authState) throw new Error("Not authenticated")
      if (tourneyQuery.data.hasEnded()) throw new Error("Tournament has ended")

      await updateDoc(doc(db, "users", authState.uid), { profile })
      await setDoc(
        signupQuery.data
          ? signupQuery.data.ref
          : collection(
              "tournaments",
              tourneyQuery.data.id,
              tourneyQuery.data.hasClosed() ? "subs" : "signups",
              authState.uid
            ),
        {
          signupDate: signupQuery.data.signupDate,
          modifiedDate: date,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        }
      )
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["user"])
    },
  })
}

export default useRegisterUser
