import React from "react"
import App from "src/root"

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>
}
