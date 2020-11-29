const getUser = () =>
  typeof window !== "undefined" && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {}

const setUser = user => {
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user))
}

const isLoggedIn = () => {
  const user = getUser()
  return user !== {}
}

export { getUser, setUser, isLoggedIn }
