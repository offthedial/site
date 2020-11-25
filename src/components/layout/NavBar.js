import React from "react"
import discord from "src/static/images/discord.svg"

import { Link } from "gatsby"

const NavBrand = () => (
  <div class="navbar-brand">
    <Link to="/">
      <div class="navbar-item py-0">
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
    <div class="container has-a-hover-translucent">
      <NavBrand />
      <div class="navbar-menu is-paddingless">
        <div class="navbar-end">
          <div class="navbar-item has-text-weight-medium">
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
          <div class="navbar-item has-text-weight-medium">
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
          <a class="navbar-item py-0" href="/discord">
            <img src={discord} alt="" />
          </a>
        </div>
      </div>
    </div>
  </nav>
)

export default NavBar
