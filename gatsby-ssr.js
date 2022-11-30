// import React from "react"
// import Terser from "terser"
// import App from "src/components/App"

// const darkModeScript = () => {
//   const mql = window.matchMedia("(prefers-color-scheme: dark)")
//   const prefersDarkFromMQ = mql.matches
//   const persistedPreference = localStorage.getItem("set-color-mode")

//   let colorMode = "light"
//   const hasUsedToggle = typeof persistedPreference === "string"

//   if (hasUsedToggle) {
//     colorMode = persistedPreference
//   } else {
//     colorMode = prefersDarkFromMQ ? "dark" : "light"
//   }

//   let root = document.documentElement
//   if (colorMode === "dark") root.classList.add("dark")
//   if (colorMode === "light") root.classList.remove("dark")
// }

// export const onRenderBody = ({ setPreBodyComponents }) => {
//   setPreBodyComponents(
//     <script
//       dangerouslySetInnerHTML={{
//         __html: Terser.minify(`(${String(darkModeScript)})()`).code,
//       }}
//     />
//   )
// }

// export const wrapPageElement = ({ element }) => {
//   return <App>{element}</App>
// }
