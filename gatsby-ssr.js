import React from "react"
import QueryClientProvider from "src/app"

export const wrapRootElement = ({ element }) => (
  <QueryClientProvider>{element}</QueryClientProvider>
)

import "src/static/globals.scss"
