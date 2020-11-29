import { auth } from "src/services/firebase/apps"
import { getUser, setUser, isLoggedIn } from "./user"

const login = ({ email, password }) => {
  auth.signInWithEmailAndPassword(email, password).then(user => setUser(user))
  // .catch(error => {
  //   return [false, error]
  // })
}

const logout = () => {
  auth
    .signOut()
    .then(() => {
      return true
    })
    .catch(error => {
      return error
    })
}

export { getUser, login, logout }
