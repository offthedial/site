/**
 * Initialize firebase and it's apps.
 * Exports should be used internally throughout the service.
 */
import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

import config from "./config"
if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

// Initialize auth
let auth
if (typeof window !== "undefined") {
  auth = firebase.auth()
}

// Initialize firestore
const db = firebase.firestore()

export { auth, db }
export default firebase
