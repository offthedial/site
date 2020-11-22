import React from "react"
import discord from "src/static/images/discord.svg"

const NavBrand = () => (
  <div class="navbar-brand">
    <a class="navbar-item py-0" href="/">
      <img class="py-3" src="https://assets.otd.ink/title.png" alt="" />
    </a>
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
