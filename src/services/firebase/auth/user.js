const getUser = () =>
  typeof window !== "undefined" && window.localStorage.getItem("user")
    ? JSON.parse(window.localStorage.getItem("user"))
    : {}

const setUser = user => {
  window.localStorage.setItem("user", JSON.stringify(user))
}

const isLoggedIn = () => {
  return getUser() !== {}
}

export { getUser, setUser, isLoggedIn }
