import { useQuery } from "react-query"
import { queryClient } from ".."
import { db } from "../firebase"
import { fromUnixTime, isPast } from "date-fns"

export default () =>
  useQuery(
    ["tourney"],
    async () => {
      const tourney = (
        await db
          .collection("tournaments")
          .orderBy("date", "desc")
          .limit(1)
          .get()
      ).docs[0]
      tourney.ref.onSnapshot(doc => {
        queryClient.invalidateQueries(["tourney"])
      })
      const tourneyData = tourney.data()

      const smashggRes = await fetch("https://api.smash.gg/gql/alpha", {
        method: "POST",
        headers: {
          Authorization: `Bearer 6e2e86a15c206caf9550f9046a7ac1f9`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `query {
            tournament(slug:"${tourneyData.smashgg}") {
              isRegistrationOpen
              endAt
            }
          }`,
        }),
      })
      const smashggData = (await smashggRes.json()).data?.tournament

      return {
        ...tourneyData,
        hasEnded: isPast(fromUnixTime(smashggData?.endAt)),
        isRegistrationOpen: smashggData?.isRegistrationOpen,
        ref: tourney.ref,
      }
    },
    {}
  )
