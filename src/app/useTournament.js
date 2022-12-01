import { useFirestoreQuery } from "@react-query-firebase/firestore"
import {
  query,
  collection,
  limit,
  orderBy,
  Timestamp,
} from "firebase/firestore"
import { db } from "./firebase"
import { fromUnixTime, isPast } from "date-fns"

const useTournament = () => {
  const ref = query(
    collection(db, "tournaments"),
    orderBy("date", "desc"),
    limit(1)
  )
  const result = useFirestoreQuery(["tournament"], ref)

  if (!result.data) {
    return result
  }

  const tourneyData = result.data.docs[0].data()
  const timestamp = new Timestamp(
    tourneyData.date.seconds,
    tourneyData.date.nanoseconds
  )

  return {
    ...result,
    data: {
      ...tourneyData,
      creationDate: timestamp.toDate(),
      startDate: fromUnixTime(tourneyData.smashgg.startAt),
      hasEnded: () => isPast(fromUnixTime(tourneyData.smashgg.endAt)),
      hasClosed: () =>
        isPast(fromUnixTime(tourneyData.smashgg.registrationClosesAt)),
    },
  }
}

export default useTournament
