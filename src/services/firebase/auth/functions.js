import { auth } from "../apps"

const login = ({ email, password }) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      console.log("USER", user)
    })
    .catch(error => {
      console.log("ERROR", error)
    })
}

const logout = () => {
  auth.signOut()
}

export { login, logout }
