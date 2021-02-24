import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

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
  fontWeights: {
    semibold: 500,
    bold: 500,
    extrabold: 700,
    black: 700,
  },
  fontSizes: {
    sl: "1.1rem",
  },
  breakpoints: createBreakpoints({
    sm: "608px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
  }),
  layerStyles: {
    card: {
      borderRadius: "lg",
      borderWidth: 1,
      borderColor: "gray.100",
      boxShadow: "lg",
    },
  },
  styles: {
    global: {
      ".mention": {
        fontSize: "87.5%",
        borderRadius: "sm",
        padding: 0.5,
        color: "#7289da",
        bg: "rgba(114,137,218,.1)",
      },
      code: {
        fontFamily: "mono",
        fontSize: "87.5%",
        borderRadius: "sm",
        padding: 0.5,
        color: "gray.800",
        bg: "gray.100",
      },
      blockquote: {
        pl: [3, 6],
        ml: 0.5,
        borderLeftWidth: 2,
        borderColor: "otd.slate.0",
      },
      article: {
        a: { color: "otd.slate.600", _hover: { color: "otd.slate.0" } },
        h1: { fontSize: "4xl" },
        h2: { fontSize: "3xl" },
        h3: { fontSize: "2xl" },
        h4: { fontSize: "xl" },
        h5: { fontSize: "lg" },
        h6: { fontSize: "md" },
        "h1, h2, h3, h4, h5, h6": { mt: 4, fontWeight: "bold" },
        "p, blockquote, ul, ol": { mb: 4 },
        "ul, ol": { mt: 2 },
        li: { mt: -2, mb: 2, ml: [6, 12] },
        hr: { my: 8 },
      },
      main: {
        flex: "1 1 0%",
      },
      ".layout": {
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
      },
      "html, body": {
        color: "gray.700",
      },
      "img.emoji": {
        height: "1em",
        width: "1em",
        margin: "0 0.05em 0 0.1em",
        verticalAlign: "-0.1em",
        display: "inline",
      },
    },
  },
  colors: {
    otd: {
      slate: {
        0: "#5D9194",
        50: "#e1f5f8",
        100: "#c9dfe3",
        200: "#adc9cf",
        300: "#8fb5ba",
        400: "#72a2a6",
        500: "#598a8d",
        600: "#43686e",
        700: "#2d494f",
        800: "#172a31",
        900: "#000c15",
      },
      cyan: {
        0: "#1ABFC7",
        50: "#E8FBFC",
        100: "#C0F4F7",
        200: "#97EDF1",
        300: "#6FE6EC",
        400: "#46DFE7",
        500: "#1DD8E2",
        600: "#18ADB4",
        700: "#128287",
        800: "#0C575A",
        900: "#062B2D",
      },
      green: {
        0: "39FA96",
        50: "#ddfff2",
        100: "#b0fedb",
        200: "#81fcc1",
        300: "#51fba3",
        400: "#25f997",
        500: "#12e08b",
        600: "#04ae78",
        700: "#007c5e",
        800: "#004b3c",
        900: "#001b12",
      },
      pink: {
        0: "#FB788B",
        50: "#ffe3e9",
        100: "#ffb4bf",
        200: "#fb8395",
        300: "#f9536a",
        400: "#f62540",
        500: "#dd1027",
        600: "#ac091f",
        700: "#7c0415",
        800: "#4b000c",
        900: "#1f0002",
      },
      purple: {
        0: "#C71A8A",
        50: "#ffe5fe",
        100: "#fab9ec",
        200: "#f28dd9",
        300: "#eb60c4",
        400: "#e434ac",
        500: "#cb1b8d",
        600: "#9f1377",
        700: "#720b5c",
        800: "#47043d",
        900: "#1d001b",
      },
    },
  },
})

export default theme
