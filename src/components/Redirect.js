import React from "react"

const Redirect = ({ to }) => {
  const content = `0; url=${to}`
  return <meta http-equiv="refresh" content={content} />
}

export default Redirect
