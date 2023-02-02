import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore, initializeFirestore } from "firebase/firestore"
import { getFunctions } from "firebase/functions"
import { QueryClient } from "@tanstack/react-query"

const firebaseConfig = {
  apiKey: process.env.GATSBY_FIREBASE_APIKEY,
  authDomain: process.env.GATSBY_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.GATSBY_FIREBASE_DATABASEURL,
  projectId: process.env.GATSBY_FIREBASE_PROJECTID,
  storageBucket: process.env.GATSBY_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.GATSBY_FIREBASE_APPID,
}

export const app = initializeApp(firebaseConfig)

initializeFirestore(app, { ignoreUndefinedProperties: true })

export const auth = getAuth(app)
export const db = getFirestore(app)
export const functions = getFunctions(app)

export const queryClient = new QueryClient()
