/**
 * Create context provider
 */
import React, { useState, useContext, useEffect } from "react"

import Loading from "src/components/Loading"
import AuthContext from "src/context/AuthContext"
import DBContext from "src/context/DBContext"
// import { db } from "../apps"
import { auth } from "../apps"
import { handleLogin, handleSignup, getUser } from "./db"

const DBProvider = ({ children }) => {
  const [user, setUser] = useState()
  const [pending, setPending] = useState(true)

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        getUser()
          .get()
          .then(doc => {
            setUser(doc.data())
            setPending(false)
          })
      } else {
        setUser({})
        setPending(false)
      }
    })
  }, [])

  if (pending) {
    return <Loading />
  }
  return (
    <DBContext.Provider
      value={{
        user,
        handleLogin,
        handleSignup,
      }}
    >
      {children}
    </DBContext.Provider>
  )
}

export { DBProvider }
