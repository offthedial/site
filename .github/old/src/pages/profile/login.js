import { navigate } from "gatsby"
import { parse } from "query-string"
import { auth } from "src/app"
import { createStandaloneToast } from "@chakra-ui/react"

const api = process.env.GATSBY_API_URL

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
    if (typeof window !== "undefined") {
      if (auth.currentUser) {
        navigate("/profile")
      } else {
        from && localStorage.setItem("otd__from", from)
        window.location.replace(`${api}/auth/redirect`)
      }
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

const navigateError = (error, redirect) => {
  const toast = createStandaloneToast()
  navigate("/")
  toast({
    title: "Login Error",
    description: error,
    status: "error",
    duration: null,
    isClosable: true,
  })
}

export default ProfileLogin
