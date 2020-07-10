import React from "react"

const Footer = ({ children }) => (
  <footer>
    <br />
    <hr />
    <div
      className="mx-1"
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
