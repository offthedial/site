import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { rhythm } from "src/utils/typography"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1.5rem` }}>
    <Link to={props.to} style={props.style}>
      {props.children}
    </Link>
  </li>
)

const NavBar = ({ siteTitle }) => (
  <header
    style={{
      background: `#5d9194`,
      marginBottom: `${rhythm(1)}`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1000,
        padding: `${rhythm(1)} 0`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontSize: `${rhythm(3 / 2)}`,
          }}
        >
          {siteTitle}
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink
            to="/idtga"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <h3>It's Dangerous to Go Alone</h3>
          </ListLink>
          <ListLink
            to="/wl"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <h3>Weakest Link</h3>
          </ListLink>
        </ul>
      </h1>
    </div>
  </header>
)

NavBar.propTypes = {
  siteTitle: PropTypes.string,
}

NavBar.defaultProps = {
  siteTitle: ``,
}

export default NavBar
