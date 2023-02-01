import { navigate } from "gatsby"
import React, { useEffect, useState } from "react"
import { parse } from "query-string"
import { signInWithCustomToken } from "firebase/auth"
import { auth } from "src/app"
import clsx from "clsx"

const api = process.env.GATSBY_API_URL

const ProfileLogin = ({ location }) => {
  const [error, setError] = useState(parse(location.search)?.error_description)

  useEffect(() => {
    login({
      params: parse(location.search),
      from: location.state?.from,
      setError,
    })
  }, [])

  const textClass = error
    ? "text-slate-600 dark:text-slate-400"
    : "text-slate-500"
  const bgClass = error
    ? "dark:bg-red-400/25 dark:text-red-400 bg-red-600/25 text-red-600"
    : "bg-slate-200 dark:bg-slate-800"

  return (
    <div
      className={clsx(
        "flex h-screen flex-col items-center justify-center p-8 text-center",
        textClass
      )}
    >
      <div
        className={clsx(
          "mb-4 flex h-12 w-12 items-center justify-center rounded-lg",
          bgClass
        )}
      >
        <Icon error={error} />
      </div>
      {error && (
        <div className="text-2xl font-bold text-red-600 dark:text-red-400">
          An error has occurred:
        </div>
      )}
      <div className="text-2xl">
        {error
          ? error
          : Object.keys(parse(location.search)).length === 0
          ? "Redirecting..."
          : "Logging in..."}
      </div>
    </div>
  )
}

const Icon = ({ error }) => {
  return error ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
      />
    </svg>
  )
}

const login = ({ params, from, setError }) => {
  if (Object.keys(params).length === 0) {
    redirectEndpoint(from)
  } else if (!params.error) {
    tokenEndpoint(params, setError)
  }
}

const redirectEndpoint = from => {
  // First pass, redirect user to api
  if (typeof window === "undefined") return
  from && localStorage.setItem("login-redirect", from)
  window.location.replace(`${api}/auth/redirect`)
}

const tokenEndpoint = ({ code, state }, setError) => {
  const endpoint = `${api}/auth/token?code=${code}&state=${state}`
  const redirect = localStorage.getItem("login-redirect")
  localStorage.removeItem("login-redirect")

  // Fetch token endpoint data, and send it to callback
  fetch(endpoint, { credentials: "include" })
    .then(res => res.json())
    .then(({ token, error }) => {
      // Use token from data to log in, and redirect
      if (token && !error) {
        localStorage.removeItem("discordToken")
        signInWithCustomToken(auth, token).then(() => {
          navigate(redirect || "/profile")
        })
      } else {
        setError(error)
      }
    })
    .catch(error => setError(error.message))
}

export default ProfileLogin
