import React from "react"

const Footer = ({ children }) => (
  <footer class="py-5">
    <hr />
    <div class="container">
      <p class="is-size-7 has-text-grey is-italic">{children}</p>
    </div>
  </footer>
)

export default Footer
