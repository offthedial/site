import { auth } from "src/services/firebase/apps"
import * as userAuth from "./user"

const login = ({ email, password }) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then(user => userAuth.setUser(user))
}

const logout = () => {
  auth.signOut()
  userAuth.setUser({})
}

export { userAuth, login, logout }
