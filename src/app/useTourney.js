import { fromUnixTime, isPast } from "date-fns"
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore"
import { db } from "app"
import { useQuery } from "@tanstack/react-query"

const useTourney = () =>
  useQuery({
    queryKey: ["tourney"],
    queryFn: async () => {
      const q = query(
        collection(db, "tournaments"),
        orderBy("date", "desc"),
        limit(1)
      )
      const result = await getDocs(q)
      result.data = result.docs[0].data()
      result.data.id = result.docs[0].id
      result.data.timestamp = new Timestamp(
        result.data.date.seconds,
        result.data.date.nanoseconds
      )
      result.data.creationDate = result.data.timestamp.toDate()
      result.data.startDate = fromUnixTime(result.data.smashgg.startAt)
      result.data.hasEnded = () =>
        isPast(fromUnixTime(result.data.smashgg.endAt))
      result.data.hasClosed = () =>
        isPast(fromUnixTime(result.data.smashgg.registrationClosesAt))
      return result?.data
    },
  })

export default useTourney
