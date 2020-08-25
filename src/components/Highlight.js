import React from "react"

const Highlight = ({ children }) => (
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-9">
        <div
          class="py-6 px-6 has-background-primary"
          style={{ borderRadius: 4 }}
        >
          <div class="columns is-vcentered">{children}</div>
        </div>
      </div>
    </div>
  </div>
)

export default Highlight
