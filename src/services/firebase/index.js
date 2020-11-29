/**
 * Export front-facing firebase modules
 */
import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

import config from "./config"

// Initialize firebase
if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase
