import { useContext } from "react"

import { navigate } from "gatsby"
import { parse } from "query-string"
import AuthContext from "src/context/AuthContext"
import { cloudFunctionsApi } from "src/services/firebase/config"

const ProfileLogin = ({ location }) => {
  login({
    auth: useContext(AuthContext),
    params: parse(location.search),
    from: location.state?.from,
  })
  return null
}

const login = ({ auth, params, from }) => {
  if (Object.keys(params).length === 0) {
    if (auth.currentUser()) {
      navigate("/profile")
    } else if (typeof window !== "undefined") {
      from && localStorage.setItem("loginFrom", from)
      window.location.replace(`${cloudFunctionsApi}/auth/redirect`)
    }
  } else {
    const redirect = localStorage.getItem("loginFrom")
    localStorage.removeItem("loginFrom")
    if (params.error) {
      navigateError(params.error_description)
    } else {
      tokenEndpoint(auth, params, redirect)
    }
  }
}

const tokenEndpoint = ({ login }, { code, state }, redirect) => {
  const endpoint = `${cloudFunctionsApi}/auth/token?code=${code}&state=${state}`
  // Fetch token endpoint data, and send it to callback
  fetch(endpoint, { credentials: "include" })
    .then(res => res.json())
    .then(data => callback(data))
  // Use token from data to log in, and redirect
  const callback = ({ token, error }) => {
    if (token && !error) {
      login(token, () => {
        navigate(redirect || "/profile")
      })
    } else {
      navigateError(error)
    }
  }
}

const navigateError = error => {
  navigate("error", { state: { error } })
}

export default ProfileLogin
