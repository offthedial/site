import React from "react"
import QueryClientProvider from "src/app"
import "src/static/globals.scss"

export const wrapRootElement = ({ element }) => (
  <QueryClientProvider>{element}</QueryClientProvider>
)
