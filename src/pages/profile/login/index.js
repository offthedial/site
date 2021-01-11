import { navigate } from "gatsby"
import { parse } from "query-string"
import { useLoginMut } from "src/app/hooks"
import { auth } from "src/app/firebase"

const api = "http://localhost:5000"

const ProfileLogin = ({ location }) => {
  const loginMut = useLoginMut()
  login({
    loginMut,
    auth,
    params: parse(location.search),
    from: location.state?.from,
  })
  return null
}

const login = ({ loginMut, auth, params, from }) => {
  if (Object.keys(params).length === 0) {
    if (auth.currentUser) {
      navigate("/profile")
    } else if (typeof window !== "undefined") {
      from && localStorage.setItem("loginFrom", from)
      window.location.replace(`${api}/auth/redirect`)
    }
  } else {
    const redirect = localStorage.getItem("loginFrom")
    localStorage.removeItem("loginFrom")
    if (params.error) {
      navigateError(params.error_description)
    } else {
      tokenEndpoint(loginMut, params, redirect)
    }
  }
}

const tokenEndpoint = (loginMut, { code, state }, redirect) => {
  const endpoint = `${api}/auth/token?code=${code}&state=${state}`
  // Fetch token endpoint data, and send it to callback
  fetch(endpoint, { credentials: "include" })
    .then(res => res.json())
    .then(data => callback(data))
  // Use token from data to log in, and redirect
  const callback = ({ token, error }) => {
    if (token && !error) {
      loginMut.mutate(token, {
        callback: () => navigate(redirect || "/profile"),
      })
    } else {
      navigateError(error, redirect)
    }
  }
}

const navigateError = (error, redirect) => {
  navigate("error", { state: { error, redirect } })
}

export default ProfileLogin
