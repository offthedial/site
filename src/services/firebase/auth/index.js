/**
 * Create context provider and export auth functions
 */
import React, { useEffect, useState } from "react"

import AuthContext from "src/context/AuthContext"
import { auth } from "../apps"
import * as functions from "./functions"

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged(setCurrentUser)
  }, [])

  return (
    <AuthContext.Provider value={{ auth: functions, currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export { functions }
export default AuthProvider
