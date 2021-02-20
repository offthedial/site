import { extendTheme } from "@chakra-ui/react"

import "@fontsource/dm-sans/400.css"
import "@fontsource/dm-sans/500.css"
import "@fontsource/dm-sans/700.css"
import "@fontsource/dm-sans/400-italic.css"
import "@fontsource/dm-sans/500-italic.css"
import "@fontsource/dm-sans/700-italic.css"

import "@fontsource/dm-mono/300.css"
import "@fontsource/dm-mono/400.css"
import "@fontsource/dm-mono/500.css"
import "@fontsource/dm-mono/300-italic.css"
import "@fontsource/dm-mono/400-italic.css"
import "@fontsource/dm-mono/500-italic.css"

const theme = extendTheme({
  fonts: {
    body: `"DM Sans", system-ui, sans-serif`,
    heading: `"DM Sans", Georgia, serif`,
    mono: `"DM Mono", Menlo, monospace`,
  },
  b: {
    fontWeight: "500",
  },
  colors: {
    otd: {
      slate: {
        0: "#5D9194",
        light: "#B7D5D4",
        dark: "#305252",
      },
      cyan: {
        0: "#1ABFC7",
        light: "#8DEBF0",
        dark: "#1C6C70",
      },
    },
  },
})

export default theme
