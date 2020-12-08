import { db } from "../apps"

const upsertProfile = (id, profile, metaprofile) => {
  db.collection("profiles").doc(id).set(profile)
  db.collection("metaprofiles").doc(id).set(metaprofile)
}

export { upsertProfile }
