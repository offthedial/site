import React, { useEffect } from "react"

import { auth } from "./firebase"

import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
})

export default ({ children }) => {
  useEffect(() => {
    auth.onAuthStateChanged(() => {
      queryClient.invalidateQueries("user")
    })
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
