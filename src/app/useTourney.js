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
  useQuery(["tourney"], async () => {
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
    result.data.closeDate = fromUnixTime(
      result.data.smashgg.registrationClosesAt
    )
    result.data.endDate = fromUnixTime(result.data.smashgg.endAt)
    result.data.hasEnded = () => isPast(result.data.endDate)
    result.data.hasClosed = () => isPast(result.data.closeDate)
    result.data.whitelist =
      result.data?.whitelist?.length > 0 ? result.data.whitelist : null
    result.data.isInvited = id =>
      result.data.whitelist ? result.data.whitelist.includes(id) : true
    return result?.data
  })

export default useTourney
