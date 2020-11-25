import React from "react"

import { Link } from "gatsby"

import discord from "src/static/images/discord.svg"

const NavBrand = () => (
  <div class="navbar-brand">
    <Link to="/">
      <div class="navbar-item py-0 is-hover-translucent">
        <img class="py-3" src="https://assets.otd.ink/title.png" alt="" />
      </div>
    </Link>
  </div>
)

const NavBar = () => (
  <nav
    class="navbar is-transparent is-primary"
    role="navigation"
    aria-label="main"
  >
    <div class="container">
      <NavBrand />
      <div class="navbar-menu is-paddingless">
        <div class="navbar-end">
          <div class="navbar-item has-text-weight-medium is-hover-translucent">
            <Link
              to="/idtga"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              It's Dangerous to go Alone
            </Link>
          </div>
          <div class="navbar-item has-text-weight-medium is-hover-translucent">
            <Link
              to="/wl"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Weakest Link
            </Link>
          </div>
          <a class="navbar-item py-0 is-hover-translucent" href="/discord">
            <img src={discord} alt="" />
          </a>
        </div>
      </div>
    </div>
  </nav>
)

export default NavBar
