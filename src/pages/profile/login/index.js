import { navigate } from "gatsby"
import { parse } from "query-string"
import { auth } from "src/app/firebase"

const api = "http://localhost:5000"

const ProfileLogin = ({ location }) => {
  login({
    auth,
    params: parse(location.search),
    from: location.state?.from,
  })
  return null
}

const login = ({ auth, params, from }) => {
  if (Object.keys(params).length === 0) {
    if (auth.currentUser) {
      navigate("/profile")
    } else if (typeof window !== "undefined") {
      from && localStorage.setItem("otd__from", from)
      window.location.replace(`${api}/auth/redirect`)
    }
  } else {
    const redirect = localStorage.getItem("otd__from")
    localStorage.removeItem("otd__from")
    if (params.error) {
      navigateError(params.error_description, redirect)
    } else {
      tokenEndpoint(auth, params, redirect)
    }
  }
}

const tokenEndpoint = (auth, { code, state }, redirect) => {
  const endpoint = `${api}/auth/token?code=${code}&state=${state}`
  // Fetch token endpoint data, and send it to callback
  fetch(endpoint, { credentials: "include" })
    .then(res => res.json())
    .then(data => callback(data))
  // Use token from data to log in, and redirect
  const callback = ({ token, error }) => {
    if (token && !error) {
      auth.signInWithCustomToken(token).then(() => {
        navigate(redirect || "/profile")
      })
    } else {
      navigateError(error, redirect)
    }
  }
}

const navigateError = (error, from) => {
  navigate("error", { state: { error, from } })
}

export default ProfileLogin
