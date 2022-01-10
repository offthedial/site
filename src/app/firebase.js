import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

firebase.initializeApp({
  apiKey: process.env.GATSBY_FIREBASE_APIKEY,
  authDomain: process.env.GATSBY_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.GATSBY_FIREBASE_DATABASEURL,
  projectId: process.env.GATSBY_FIREBASE_PROJECTID,
  storageBucket: process.env.GATSBY_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.GATSBY_FIREBASE_APPID,
})

// Initialize apps
let auth
if (typeof window !== "undefined") {
  auth = firebase.auth()
}
const db = firebase.firestore()

export { auth, db }
export default firebase
