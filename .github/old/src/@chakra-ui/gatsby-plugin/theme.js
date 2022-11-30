import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints, mode } from "@chakra-ui/theme-tools"

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
  textStyles: {
    semimute: {
      color: "gray.600",
      ".chakra-ui-dark &": {
        color: "gray.300",
      },
    },
    mute: {
      color: "gray.500",
      ".chakra-ui-dark &": {
        color: "gray.400",
      },
    },
    silent: {
      color: "gray.400",
      ".chakra-ui-dark &": {
        color: "gray.600",
      },
    },
    tinted: {
      color: "gray.50",
      ".chakra-ui-dark &": {
        color: "gray.900",
      },
    },
    slate: {
      color: "otd.slate.600",
      ".chakra-ui-dark &": {
        color: "otd.slate.300",
      },
    },
    error: {
      color: "red.500",
      ".chakra-ui-dark &": {
        color: "red.300",
      },
    },
    mention: {
      fontSize: "87.5%",
      borderRadius: "3px",
      fontWeight: "bold",
      p: 0.5,
      my: -0.5,
      bg: "rgba(114, 137, 218, 0.3)",
      display: "inline",
    },
  },
  layerStyles: {
    normal: {
      bg: "white",
      ".chakra-ui-dark &": {
        bg: "gray.800",
      },
    },
    tint: {
      bg: "gray.50",
      ".chakra-ui-dark &": {
        bg: "gray.900",
      },
    },
    mute: {
      bg: "gray.100",
      ".chakra-ui-dark &": {
        bg: "gray.800",
      },
    },
    lifted: {
      borderRadius: "lg",
      borderWidth: 1,
      boxShadow: "lg",
      borderColor: "gray.100",
      ".chakra-ui-dark &": {
        borderColor: "gray.900",
      },
    },
  },
  styles: {
    global: props => ({
      code: {
        fontSize: "87.5%",
        borderRadius: "3px",
        fontFamily: "mono",
        p: 0.5,
        my: -0.5,
        layerStyle: "tint",
      },
      blockquote: {
        pl: [3, 6],
        ml: 0.5,
        borderLeftWidth: 2,
        borderColor: mode("otd.slate.500", "otd.slate.400")(props),
      },
      "img.emoji": {
        height: "1em",
        width: "1em",
        margin: "0 0.05em 0 0.1em",
        verticalAlign: "-0.1em",
        display: "inline",
      },
      article: {
        a: {
          textStyle: "slate",
          _hover: { textDecoration: "underline" },
        },
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
      "html, body": {
        color: mode("gray.800", "gray.100")(props),
      },
      ".layout": {
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
      },
    }),
  },
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
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  }),
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
  components: {
    Button: {
      baseStyle: {
        fontWeight: "black",
      },
    },
  },
})

export default theme
