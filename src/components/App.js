import React from "react"
import { ThemeProvider } from "components/theme"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { useToaster } from "react-hot-toast/headless"
import Toast from "components/Toast"
import "globals.css"

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

const queryClient = new QueryClient()

const Toaster = () => {
  const {
    toasts,
    handlers: { startPause, endPause },
  } = useToaster()

  return (
    <div
      className="fixed inset-0 pointer-events-none flex flex-col items-center justify-end"
      onMouseEnter={startPause}
      onMouseLeave={endPause}
    >
      {toasts
        .filter(toast => toast.visible)
        .map(toast => (
          <Toast key={toast.id} {...toast.message} />
        ))}
    </div>
  )
}

const App = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        {children}
        <Toaster />
      </ThemeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
