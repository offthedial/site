import React from "react"
import discord from "src/static/images/discord.svg"
import brand from "src/static/images/brand.svg"

const NavBrand = () => (
  <div class="navbar-brand">
    <div class="is-hidden-desktop">
      <a class="navbar-item py-0 px-5" href="/">
        <img src={brand} alt="" />
      </a>
    </div>
    <div class="is-hidden-touch">
      <a class="navbar-item py-0" href="/">
        <img src={brand} alt="" />
      </a>
    </div>
  </div>
)

const NavBar = () => (
  <nav
    class="navbar is-transparent is-primary"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container has-a-hover-translucent">
      <NavBrand />
      <div class="navbar-menu is-paddingless">
        <div class="navbar-end">
          <a href="/idtga" class="navbar-item has-text-weight-medium">
            It's Dangerous to go Alone
          </a>
          <a href="/wl" class="navbar-item has-text-weight-medium">
            Weakest Link
          </a>
          <a class="navbar-item py-0" href="/discord">
            <img src={discord} alt="" />
          </a>
        </div>
      </div>
    </div>
  </nav>
)

export default NavBar
