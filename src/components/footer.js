import React from "react"

const Footer = ({ msg }) => (
  <footer>
    <br />
    <hr />
    <div
      style={{
        fontSize: `80%`,
        opacity: `80%`,
        fontStyle: `italic`,
      }}
    >
      {msg}
    </div>
    <br />
  </footer>
)

export default Footer
