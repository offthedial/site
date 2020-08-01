import React from "react"

const Footer = ({ children }) => (
  <footer class="section">
    <br />
    <hr />
    <div
      class="container"
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
