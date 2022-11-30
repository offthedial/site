import React from "react"
import QueryClientProvider from "src/app"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"

library.add(fas, fab, far)

export const wrapRootElement = ({ element }) => (
  <QueryClientProvider>{element}</QueryClientProvider>
)
