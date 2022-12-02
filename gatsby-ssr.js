import React from "react"
import App from "src/root"

const darkModeScript = () => {
  const mql = window.matchMedia("(prefers-color-scheme: dark)")
  const prefersDarkScheme = mql.matches
  const storedColorMode = localStorage.getItem("set-color-mode")

  let colorMode
  if (typeof storedColorMode === "string") {
    colorMode = storedColorMode
  } else {
    colorMode = prefersDarkScheme ? "dark" : "light"
  }

  let root = document.documentElement
  if (colorMode === "dark") root.classList.add("dark")
  if (colorMode === "light") root.classList.remove("dark")
}

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(
    <script
      key="no-flash"
      dangerouslySetInnerHTML={{
        __html: `(${String(darkModeScript)})()`,
      }}
    />
  )
}

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>
}
