import React from "react"

import { AuthProvider } from "src/services/firebase/auth"
import { DBProvider } from "src/services/firebase/db"
import "src/static/globals.scss"

export const wrapRootElement = ({ element }) => (
  <AuthProvider>
    <DBProvider>{element}</DBProvider>
  </AuthProvider>
)
