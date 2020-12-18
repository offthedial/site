import { db, auth } from "../apps"

const handleSignup = reg => {
  // Create profile
  const div = n => [Math.abs(n), Number(n)]
  const [support, aggressive] = div(reg.stylepoints["sup-agg"])
  const [objective, slayer] = div(reg.stylepoints["obj-sla"])
  const [anchor, mobile] = div(reg.stylepoints["anc-mob"])
  const [flex, focused] = div(reg.stylepoints["fle-foc"])
  const profile = {
    ign: reg.ign,
    sw: reg.sw,
    ranks: {
      sz: reg.ranks.tc,
      tc: reg.ranks.rm,
      rm: reg.ranks.cb,
      cb: reg.ranks.sz,
    },
    stylepoints: {
      support,
      aggressive,
      objective,
      slayer,
      anchor,
      mobile,
      flex,
      focused,
    },
    cxp: {
      amount: reg.cxp.amount,
      placement: Number(reg.cxp.placement),
    },
    smashgg: reg.smashgg.link.split("/").slice(-1)[0],
  }
  // Update user profile
  getUser().update({ profile })

  // Add registration to tournament
  currentTourney()
    .collection("signups")
    .doc(auth.currentUser.uid)
    .set({
      tzOffset: new Date().getTimezoneOffset(),
      recruiting: Boolean(reg.recruiting),
      confirmationCode: reg.smashgg.code,
      legal: Boolean(reg.legal),
    })
}

const handleLogin = ({ uid }) => {
  const user = getUser(uid)
  return user.get().then(doc => {
    return doc.data()
  })
}

const currentTourney = () => {
  return db.collection("tournaments").doc("2KnLtpnPNjz2AE0OxwX5")
}

const getUser = id => {
  const user = db.collection("users").doc(id || auth.currentUser?.uid)
  user.get().then(doc => {
    if (!doc.exists) {
      user.set({ profile: {}, meta: { signal: 0 } })
    }
  })
  return user
}

const userSignedUp = async () => {
  const ref = currentTourney().collection("signups").doc(auth.currentUser?.uid)
  const doc = await ref.get()
  return doc.exists
}

// const updateUserMeta = (id, meta) => {
//   const user = db.collection("users").doc(id)
//   user.update({ meta })
// }

// What will this client need to do?
// log in users and, for the first time, create and new user
// or if it exists already, get user

export { handleLogin, handleSignup, getUser, userSignedUp }
