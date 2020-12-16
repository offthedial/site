/**
 * Create context provider
 */
import React, { useEffect, useState } from "react"

import Loading from "src/components/Loading"
import AuthContext from "src/context/AuthContext"
import { auth } from "../apps"
import { currentUser, login, logout } from "./auth"

const AuthProvider = ({ children }) => {
  const [pending, setPending] = useState(true)

  useEffect(() => {
    auth.onAuthStateChanged(() => {
      setPending(false)
    })
  }, [])

  if (pending) {
    return <Loading />
  }

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider }
