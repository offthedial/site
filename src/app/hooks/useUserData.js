import { useQuery } from "react-query"
import { auth, db } from "../firebase"

export default () =>
  useQuery(
    ["user", "data"],
    async () => {
      if (!auth.currentUser) {
        return {}
      }

      return { ...doc.data(), ref: doc.ref }
    },
    {
      cacheTime: Infinity,
    }
  )
