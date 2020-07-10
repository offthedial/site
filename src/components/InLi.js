import React from "react"
import { Link } from "gatsby"
import { rhythm } from "src/utils/typography"

const InLi = ({ link, children }) => (
  <Link style={{ display: `InLine-block`, marginRight: rhythm(1) }} to={link}>
    <h2>{children}</h2>
  </Link>
)

export default InLi
