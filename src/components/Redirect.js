import React from "react"

const Redirect = ({ to }) => {
  if (typeof window !== "undefined") {
    window.location.replace(to)
  }
  return <></>
}

export default Redirect
