import React from "react"
import { Link } from "gatsby"
import { rhythm } from "src/utils/typography"

const TourneyLink = ({ link, children }) => (
  <Link
    style={{ display: `inline-block`, marginRight: rhythm(1) }}
    to={ link }
  >
    <h2>{ children }</h2>
  </Link>
)

export default TourneyLink
