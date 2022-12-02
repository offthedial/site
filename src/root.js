import React from "react"
import { QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { ThemeProvider } from "utils/theme"
import { ToastProvider } from "utils/toast"
import { queryClient } from "app"
import "root.css"

import "@fontsource/dm-sans/400-italic.css"
import "@fontsource/dm-sans/400.css"
import "@fontsource/dm-sans/500-italic.css"
import "@fontsource/dm-sans/500.css"
import "@fontsource/dm-sans/700-italic.css"
import "@fontsource/dm-sans/700.css"

import "@fontsource/dm-mono/300-italic.css"
import "@fontsource/dm-mono/300.css"
import "@fontsource/dm-mono/400-italic.css"
import "@fontsource/dm-mono/400.css"
import "@fontsource/dm-mono/500-italic.css"
import "@fontsource/dm-mono/500.css"

const App = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <ToastProvider>{children}</ToastProvider>
      </ThemeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
