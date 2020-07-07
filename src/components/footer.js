import React from "react"

const Footer = ({ msg }) => (
  <footer>
    <br></br>
    <hr></hr>
    <div
      style={{
        fontSize: `80%`,
        opacity: `80%`,
        fontStyle: `italic`,
      }}
    >
      {msg}
    </div>
  </footer>
)

export default Footer
