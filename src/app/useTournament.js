import { useFirestoreQuery } from "@react-query-firebase/firestore"
import { fromUnixTime, isPast } from "date-fns"
import {
  collection,
  limit,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore"
import { db } from "app"

const useTournament = () => {
  const ref = query(
    collection(db, "tournaments"),
    orderBy("date", "desc"),
    limit(1)
  )
  const queryResult = useFirestoreQuery(["tournament"], ref)
  if (!queryResult.data) return queryResult

  const data = queryResult.data.docs[0].data()
  const timestamp = new Timestamp(data.date.seconds, data.date.nanoseconds)

  return {
    ...queryResult,
    data: {
      ...data,
      creationDate: timestamp.toDate(),
      startDate: fromUnixTime(data.smashgg.startAt),
      hasEnded: () => isPast(fromUnixTime(data.smashgg.endAt)),
      hasClosed: () => isPast(fromUnixTime(data.smashgg.registrationClosesAt)),
    },
  }
}

export default useTournament
