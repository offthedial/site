import React from "react"
import { QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { queryClient } from "src/app"
import { ThemeProvider } from "src/components/theme"
import { ToastProvider } from "src/components/toast"
import "src/root.css"

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
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <ToastProvider>{children}</ToastProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
