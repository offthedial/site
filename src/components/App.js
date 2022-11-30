import React from "react"
import { ThemeProvider } from "src/components/theme"
import "src/globals.css"

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

const App = ({ children }) => <ThemeProvider>{children}</ThemeProvider>

export default App
