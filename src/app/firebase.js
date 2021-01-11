import firebase from "gatsby-plugin-firebase"
import "firebase/auth"
import "firebase/firestore"

// Initialize apps
let auth
if (typeof window !== "undefined") {
  auth = firebase.auth()
}
const db = firebase.firestore()

// Helper functions
const getUserToken = async () => {
  if (auth.currentUser) {
    return await auth.currentUser.getIdTokenResult()
  } else {
    return null
  }
}

export { auth, db }
export { getUserToken }
export default firebase
