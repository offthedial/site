import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

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
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1000,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontSize: `2rem`,
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
