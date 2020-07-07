import React from "react"
import { Link } from "gatsby"

import { rhythm } from "src/utils/typography"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: rhythm(1) }}>
    <Link to={props.to} style={props.style}>
      {props.children}
    </Link>
  </li>
)

export default ListLink