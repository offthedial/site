import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    otd: {
      DEFAULT: {
        DEFAULT: "#5D9194",
        dark: "#305252",
        light: "#B7D5D4",
      },
      cyan: {
        DEFAULT: "#1ABFC7",
        dark: "#1C6C70",
        light: "#8DEBF0"
      }
    },
  },
})

export default theme
