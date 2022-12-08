import { useQuery } from "@tanstack/react-query"
import { doc, getDoc } from "firebase/firestore"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, db } from "src/app"
import useTourney from "src/app/useTourney"

const useUserSignup = () => {
  const [user] = useAuthState(auth)
  const tourneyQuery = useTourney()
  return useQuery(
    ["user", "signup"],
    async () => {
      const signupsRef = doc(
        db,
        "tournaments",
        tourneyQuery.data.id,
        "signups",
        user.uid
      )
      const signupsDoc = await getDoc(signupsRef)
      if (signupsDoc.exists()) {
        return { ...signupsDoc.data(), ref: signupsDoc.ref, type: "signup" }
      }

      const subsRef = doc(
        db,
        "tournaments",
        tourneyQuery.data.id,
        "subs",
        user.uid
      )
      const subsDoc = await getDoc(subsRef)
      if (subsDoc.exists()) {
        return { ...subsDoc.data(), ref: subsDoc.ref, type: "sub" }
      }
      return null
    },
    {
      enabled: !!user && tourneyQuery.data?.hasEnded() === false,
    }
  )
}

export default useUserSignup
