const Redirect = ({ pageContext }) => {
  if (typeof window !== "undefined") {
    window.location.replace(pageContext.to)
  }
  return null
}

export default Redirect
