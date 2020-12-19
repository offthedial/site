import { createContext } from "react"

const defaultState = {
  user: () => {},
  handleLogin: () => {},
  handleSignup: () => {},
}

const DBContext = createContext(defaultState)

export default DBContext
