import firebase from "gatsby-plugin-firebase"
import "firebase/auth"
import "firebase/firestore"

// Initialize apps
let auth
if (typeof window !== "undefined") {
  auth = firebase.auth()
}
const db = firebase.firestore()

export { auth, db }
export default firebase
