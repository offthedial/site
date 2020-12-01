import React from "react"

import { AuthProvider } from "src/services/firebase/auth/contextProvider"
import "src/static/globals.scss"

export const wrapRootElement = ({ element }) => (
  <AuthProvider>{element}</AuthProvider>
)
