/**
 * Create context provider
 */
import React from "react"

import DBContext from "src/context/DBContext"
import { db } from "../apps"
import { handleLogin, handleSignup } from "./db"

const DBProvider = ({ children }) => {
  return (
    <DBContext.Provider value={{ handleLogin, handleSignup }}>
      {children}
    </DBContext.Provider>
  )
}

export { DBProvider }
