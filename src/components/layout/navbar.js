import React from "react"
import { css } from "@emotion/core"
import { Container, Navbar, Nav } from "react-bootstrap"
import Image from "react-bootstrap/Image"

import { rhythm } from "src/utils/typography"
import colors from "src/utils/colors"

import discord from "src/static/images/discord.svg"

const NavBar = ({ siteTitle }) => (
  <header
    style={{
      background: `${colors.primary}`,
      marginBottom: rhythm(1),
    }}
  >
    <Container>
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className="p-0"
      style={{ fontWeight: 500 }}
    >
      <Navbar.Brand
        href="/"
        css={css`
          font-size: ${rhythm(1.5)};
          font-weight: 700;
        `}
      >
        {siteTitle}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        className="justify-content-end"
        id="responsive-navbar-nav"
      >
        <Nav>
          <Nav.Link
            className="d-lg-none"
            css={css`
              font-size: ${rhythm(0.8)};
              color: white !important;
            `}
            href="/discord"
          >
            Discord
          </Nav.Link>
          <Nav.Link
            css={css`
              font-size: ${rhythm(0.8)};
              color: white !important;
            `}
            href="/idtga"
          >
            It's Dangerous to go Alone
          </Nav.Link>
          <Nav.Link
            css={css`
              font-size: ${rhythm(0.8)};
              color: white !important;
            `}
            href="/wl"
          >
            Weakest Link
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
        <a className="d-none d-lg-block" href="/discord" style={{maxHeight: rhythm(8 / 3)}}>
          <Image style={{ margin: `auto auto 0 ${rhythm(3 / 2)}`, maxHeight: rhythm(8 / 3)}} src={discord}/>
        </a>
    </Navbar>
    </Container>
  </header>
)

export default NavBar
