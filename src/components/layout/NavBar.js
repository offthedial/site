import React from "react"
import discord from "src/static/images/discord.svg"
import brand from "src/static/images/brand.svg"

const NavBar = ({ siteTitle }) => (
  <nav class="navbar is-primary is-transparent" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item py-0" href="/">
          <img src={brand} />
        </a>
      </div>
      <div class="navbar-menu is-paddingless">
        <div class="navbar-end">
          <a href="/idtga" class="navbar-item">
            It's Dangerous to go Alone
          </a>
          <a href="/idtga" class="navbar-item">
            Weakest Link
          </a>
          <a class="navbar-item py-0" href="/">
            <img src={discord} />
          </a>
        </div>
      </div>
    </div>
  </nav>
)
export default NavBar
