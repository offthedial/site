import React from "react"

const Footer = ({ children }) => (
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
      {children}
    </div>
    <br />
  </footer>
)

export default Footer
