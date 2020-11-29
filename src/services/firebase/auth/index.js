import firebase from "src/services/firebase"

let auth
if (typeof window !== "undefined") {
  auth = firebase.auth()
}

const login = ({ email, password }) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      return [true, user]
    })
    .catch(error => {
      return [false, error]
    })
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

export { login, logout }
