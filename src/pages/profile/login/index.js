import { useContext } from "react"

import { navigate } from "gatsby"
import { parse } from "query-string"
import AuthContext from "src/context/AuthContext"
import { cloudFunctionsApi } from "src/services/firebase/config"

const ProfileLogin = ({ location }) => {
  login({
    auth: useContext(AuthContext),
    params: parse(location.search),
  })
  return null
}

const login = ({ auth, params }) => {
  if (Object.keys(params).length === 0) {
    if (typeof window !== "undefined") {
      window.location.replace(`${cloudFunctionsApi}/authorize`)
    }
  } else if (params.error) {
    navigateError(params.error_description)
  } else {
    tokenEndpoint(auth, params)
  }
}

const tokenEndpoint = ({ login }, { code, state }) => {
  const endpoint = `${cloudFunctionsApi}/token?code=${code}&state=${state}`
  // Fetch token endpoint data, and send it to callback
  fetch(endpoint, { credentials: "include" })
    .then(res => res.json())
    .then(data => callback(data))
  // Use token from data to log in, and redirect
  const callback = ({ token, error }) => {
    if (token && !error) {
      login(token, () => navigate(-2))
    } else {
      navigateError(error)
    }
  }
}

const navigateError = error => {
  navigate("error", { state: { error } })
}

export default ProfileLogin
