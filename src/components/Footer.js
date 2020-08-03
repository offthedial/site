import React from "react"

const Footer = ({ children }) => (
  <footer class="section py-1">
    <br />
    <hr />
    <div class="container">
      <p class="is-size-7 has-text-grey is-italic">{children}</p>
    </div>
    <br />
  </footer>
)

export default Footer
