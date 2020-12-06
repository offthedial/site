import { auth as app } from "../apps"

const login = (customToken, callback) => {
  app
    .signInWithCustomToken(customToken)
    .then(user => {
      console.log("USER", user)
      callback()
    })
    .catch(error => {
      console.log("ERROR", error)
    })
}

const logout = callback => {
  app.signOut().then(() => {
    callback()
  })
}

const currentUser = () => {
  return app.currentUser
}

export { login, logout, currentUser }
