import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import { Navbar, Nav } from "react-bootstrap"

import { rhythm } from "src/utils/typography"
import colors from "src/utils/colors"

const NavBar = ({ siteTitle }) => (
  <header style={{
    background: `${colors.primary}`,
    marginBottom: rhythm(1),
  }}>
    <Navbar collapseOnSelect expand="lg" variant="dark" className="container" style={{ fontWeight: "bolder" }}>
      <Navbar.Brand href="/" css={css`font-size: ${rhythm(1.5)}`}>
        {siteTitle}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
        <Nav>
          <Nav.Link css={css`font-size: ${rhythm(.8)}; color: white !important`} href="/idtga">It's Dangerous to go Alone</Nav.Link>
          <Nav.Link css={css`font-size: ${rhythm(.8)}; color: white !important`} href="/wl">Weakest Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
)

NavBar.propTypes = {
  siteTitle: PropTypes.string,
}

NavBar.defaultProps = {
  siteTitle: ``,
}

export default NavBar
