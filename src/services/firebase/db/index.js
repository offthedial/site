/**
 * Create context provider
 */
import React, { useState, useEffect } from "react"

import DBContext from "src/context/DBContext"
// import { db } from "../apps"
import { handleLogin, handleSignup, getUser } from "./db"

const DBProvider = ({ children }) => {
  const [user, setUser] = useState(undefined)
  useEffect(() => {
    getUser()
      .get()
      .then(doc => {
        setUser(doc.data())
      })
  }, [])
  if (user === undefined) {
    return <></>
  }

  return (
    <DBContext.Provider value={{ handleLogin, handleSignup, user }}>
      {children}
    </DBContext.Provider>
  )
}

export { DBProvider }
