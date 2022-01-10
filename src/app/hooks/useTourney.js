import { useQuery } from "react-query"
import { queryClient } from ".."
import firebase, { db } from "../firebase"
import { fromUnixTime, isPast } from "date-fns"

export default () =>
  useQuery(
    ["tourney"],
    async () => {
      const tourneyCol = db.collection("tournaments")
      tourneyCol.onSnapshot(() => {
        queryClient.invalidateQueries(["tourney"])
      })
      const tourney = (await tourneyCol.orderBy("date", "desc").limit(1).get())
        .docs[0]
      const tourneyData = tourney.data()
      const timestamp = new firebase.firestore.Timestamp(
        tourneyData.date.seconds,
        tourneyData.date.nanoseconds
      )

      return {
        ...tourneyData,
        date: timestamp.toDate(),
        hasEnded: () => isPast(fromUnixTime(tourneyData.smashgg.endAt)),
        hasClosed: () =>
          isPast(fromUnixTime(tourneyData.smashgg.registrationClosesAt)),
        ref: tourney.ref,
      }
    },
    {}
  )
