import React from "react"

import AuthProvider from "src/components/AuthProvider"
import "src/static/globals.scss"

export const wrapRootElement = ({ element }) => (
  <AuthProvider>{element}</AuthProvider>
)
