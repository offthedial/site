import { app } from "../apps"

const login = customToken => {
  app
    .signInWithCustomToken(customToken)
    .then(user => {
      console.log("USER", user)
    })
    .catch(error => {
      console.log("ERROR", error)
    })
}

const logout = callback => {
  app.signOut()
  callback()
}

export { login, logout }
