import React from "react"
import { Container, Navbar, Nav } from "react-bootstrap"
import Image from "react-bootstrap/Image"

import { rhythm } from "src/utils/typography"
import colors from "src/utils/colors"

import discord from "src/static/images/discord.svg"
import logo from "src/static/images/brand.svg"

import Navlink from "./navlink"

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
          className="m-0 p-0"
          style={{
            fontSize: rhythm(1.5),
            fontWeight: "700",
            maxHeight: rhythm(8 / 3)
          }}
        >
          <Image
            className="m-0 p-0"
            style={{ maxHeight: rhythm(8 / 3)}}
            src={logo}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <Nav>
            <Navlink href="discord" className="d-lg-none">Discord</Navlink>
            <Navlink href="idtga">It's Dangerous to go Alone</Navlink>
            <Navlink href="wl">Weakest Link</Navlink>
          </Nav>
        </Navbar.Collapse>
        <a
          className="d-none d-lg-block"
          href="/discord"
          style={{ maxHeight: rhythm(8 / 3) }}
        >
          <Image
          className="m-0 ml-4"
            style={{ maxHeight: rhythm(8 / 3) }}
            src={discord}
          />
        </a>
      </Navbar>
    </Container>
  </header>
)

export default NavBar
