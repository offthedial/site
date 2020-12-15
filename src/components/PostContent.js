import React from "react"

const PostContent = ({ children }) => (
  <div class="columns is-centered">
    <div class="column is-size-6" style={{ maxWidth: "65ch" }}>
      {children}
    </div>
  </div>
)

export default PostContent
