import React from "react"

import { Link } from "gatsby"

import discord from "src/static/images/discord.svg"

const NavBar = () => (
  <nav
    class="navbar is-transparent is-primary is-flex-touch"
    role="navigation"
    aria-label="main"
  >
    <div class="container">
      <div class="navbar-brand">
        <Link to="/">
          <div class="navbar-item py-0 is-hover-translucent">
            <img class="py-3" src="https://assets.otd.ink/title.png" alt="" />
          </div>
        </Link>
      </div>
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
              <span class="is-hidden-desktop-only">
                It's Dangerous to go Alone
              </span>
              <span class="is-hidden-widescreen">IDTGA</span>
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
              <span class="is-hidden-desktop-only">Weakest Link</span>
              <span class="is-hidden-widescreen">WL</span>
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
