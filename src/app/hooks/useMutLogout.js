import { useMutation } from "react-query"
import { queryClient } from ".."
import { auth } from "../firebase"

export default () =>
  useMutation(
    async () => {
      return await auth.signOut()
    },
    {
      onSuccess: () => queryClient.invalidateQueries("user"),
      onSettled: (data, error, variables) =>
        variables.callback({ data, error }),
    }
  )
