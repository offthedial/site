import { createContext } from "react"

const defaultState = {
  handleLogin: () => {},
  handleSignup: () => {},
  user: {},
  signedUp: false,
}

const DBContext = createContext(defaultState)

export default DBContext
