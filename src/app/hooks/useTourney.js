import { useQuery } from "react-query"
import { db } from "../firebase"

export default () =>
  useQuery(
    ["tourney"],
    async () => {
      const doc = await db
        .collection("tournaments")
        .doc("2KnLtpnPNjz2AE0OxwX5")
        .get()
      return doc.data()
    },
    {
      staleTime: Infinity,
    }
  )
