import React, { useContext } from "react"

import { navigate } from "gatsby"
import { parse } from "query-string"
import AuthContext from "src/context/AuthContext"
import { cloudFunctionsApi } from "src/services/firebase/config"

const LoginRoute = ({ location }) => {
  const { auth } = useContext(AuthContext)
  const params = parse(location.search)

  if (isFlowStart(params)) {
    authorizeEndpoint()
  } else {
    if (params.error) {
      loginError("Authorize Endpoint", params.error)
    } else {
      tokenEndpoint(auth, params)
    }
  }

  return <></>
}

const authorizeEndpoint = () => {
  const endpoint = `${cloudFunctionsApi}/authorize`
  window.location.href = endpoint
}

const tokenEndpoint = (auth, { code, state }) => {
  const endpoint = `${cloudFunctionsApi}/token?code=${code}&state=${state}`

  const callback = ({ token, error }) => {
    if (!error && token) {
      auth.login(token)
      navigate("/profile")
    } else {
      loginError("Token Endpoint", error)
    }
  }

  fetch(endpoint, { credentials: "include" })
    .then(res => res.json())
    .then(data => callback(data))
}

const loginError = (location, error) => {
  navigate("/profile/login/error", {
    state: { error: { value: error, location } },
  })
}

const isFlowStart = ({ code, state, error }) => {
  return !code && !state && !error
}

export default LoginRoute
