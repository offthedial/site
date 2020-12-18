/**
 * Initialize firebase and it's apps.
 * Exports should be used internally throughout the service.
 */
import firebase from "gatsby-plugin-firebase"
import "firebase/auth"
import "firebase/firestore"

// Initialize auth
let auth
if (typeof window !== "undefined") {
  auth = firebase.auth()
}

// Initialize firestore
const db = firebase.firestore()

export { auth, db }
export default firebase
