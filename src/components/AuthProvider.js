import React, { useEffect, useState } from "react"
import { auth } from "src/services/firebase/apps"

const AuthContext = React.createContext()

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged(setCurrentUser)
  }, [])

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext }
export default AuthProvider
