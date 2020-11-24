import React from "react"
import PostContent from "./PostContent"

const PageHero = ({ title, children }) => (
  <div class="section has-text-centered">
    <div class="container">
      <h1>{title}</h1>
      <PostContent>{children}</PostContent>
    </div>
  </div>
)

export default PageHero
