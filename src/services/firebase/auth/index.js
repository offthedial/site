/**
 * Create context provider and export auth
 */
import React, { useEffect, useState } from "react"

import AuthContext from "src/context/AuthContext"
import { auth as app } from "../apps"
import * as auth from "./auth"

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    app.onAuthStateChanged(setCurrentUser)
  }, [])

  return (
    <AuthContext.Provider value={{ auth, currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider }
export default auth
