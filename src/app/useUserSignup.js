import { useQuery } from "@tanstack/react-query"
import { collection, doc, getDoc } from "firebase/firestore"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, db } from "src/app"
import useTourney from "src/app/useTourney"

const useUserSignup = () => {
  const [authState] = useAuthState(auth)
  const tourneyQuery = useTourney()
  return useQuery({
    queryKey: ["user", "signup"],
    queryFn: async () => {
      const signupsRef = doc(
        collection(db, "tournaments", tourneyQuery.data.id, "signups"),
        authState.uid
      )
      const signupsDoc = await getDoc(signupsRef)
      if (signupsDoc.exists) {
        return { ...signupsDoc.data(), ref: signupsDoc.ref, type: "signup" }
      }

      const subsRef = doc(
        collection(db, "tournaments", tourneyQuery.data.id, "subs"),
        authState.uid
      )
      const subsDoc = await getDoc(subsRef)
      if (subsDoc.exists) {
        return { ...subsDoc.data(), ref: subsDoc.ref, type: "subs" }
      }
    },
    enabled: !!authState && tourneyQuery.data?.hasEnded() === false,
  })
}

export default useUserSignup
