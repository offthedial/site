import { auth as app } from "../apps"
import { handleLogin } from "../db/db"

const login = (customToken, callback) => {
  app
    .signInWithCustomToken(customToken)
    .then(user => {
      console.log("USER", user)
      handleLogin(currentUser()).then(data => {
        callback(data)
      })
    })
    .catch(error => {
      console.log("ERROR", error)
    })
}

const logout = callback => {
  app.signOut().then(() => callback())
}

const currentUser = () => {
  return app.currentUser
}

export { login, logout, currentUser }
