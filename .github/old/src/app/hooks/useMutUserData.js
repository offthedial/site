import { useMutation } from "react-query"
import { queryClient } from ".."
import useUserData from "./useUserData"

export default () => {
  useUserData()
  return useMutation(
    async profile => {
      const doc = queryClient.getQueryData(["user", "data"]).ref
      return await doc.update({ profile })
    },
    {
      onSuccess: () => queryClient.invalidateQueries(["user", "data"]),
    }
  )
}
