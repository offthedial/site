import { createContext } from "react"

const defaultState = {
  currentUser: () => {},
  login: () => {},
  logout: () => {},
}

const AuthContext = createContext(defaultState)

export default AuthContext
