/**
 * Create context provider
 */
import React, { useState, useContext, useEffect } from "react"

import AuthContext from "src/context/AuthContext"
import DBContext from "src/context/DBContext"
// import { db } from "../apps"
import { handleLogin, handleSignup, getUser, userSignedUp } from "./db"

const DBProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext)
  const [user, setUser] = useState(undefined)
  const [signedUp, setSignedUp] = useState()

  useEffect(() => {
    if (currentUser() !== null) {
      setSignedUp(null)
    } else {
      userSignedUp().then(result => {
        setSignedUp(result)
      })
    }
  }, [])
  useEffect(() => {
    if (currentUser() !== null) {
      getUser()
        .get()
        .then(doc => {
          setUser(doc.data())
        })
    } else {
      setUser({})
    }
  }, [])

  if (user === undefined) {
    return <></>
  }
  return (
    <DBContext.Provider value={{ handleLogin, handleSignup, user, signedUp }}>
      {children}
    </DBContext.Provider>
  )
}

export { DBProvider }
