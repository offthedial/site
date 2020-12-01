import React from "react"

import { AuthProvider } from "src/services/firebase/auth"
import "src/static/globals.scss"

export const wrapRootElement = ({ element }) => (
  <AuthProvider>{element}</AuthProvider>
)
