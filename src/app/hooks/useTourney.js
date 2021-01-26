import { useQuery } from "react-query"
import { queryClient } from ".."
import { db } from "../firebase"
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

      return {
        ...tourneyData,
        hasEnded: isPast(fromUnixTime(tourneyData.smashgg.endAt)),
        hasClosed: isPast(
          fromUnixTime(tourneyData.smashgg.registrationClosesAt)
        ),
        ref: tourney.ref,
      }
    },
    {}
  )
