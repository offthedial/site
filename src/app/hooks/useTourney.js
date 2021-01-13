import { useQuery } from "react-query"
import { db } from "../firebase"
import { fromUnixTime, isPast } from "date-fns"

export default () =>
  useQuery(
    ["tourney"],
    async () => {
      const docs = await db
        .collection("tournaments")
        .orderBy("date", "desc")
        .limit(1)
        .get()
      let doc
      docs.forEach(d => {
        doc = d
      })
      const tourneyData = doc.data()
      console.log(doc.id, tourneyData)

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
      const endAt = fromUnixTime(smashggData?.endAt)

      return {
        ...tourneyData,
        isEnded: isPast(endAt),
        isRegistrationOpen: smashggData?.isRegistrationOpen,
        ref: tourney.ref,
      }
    },
    {
      staleTime: 5 * 60 * 1000,
    }
  )
