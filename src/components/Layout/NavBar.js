import React, { useContext } from "react"

import { Link } from "gatsby"

import styled from "styled-components"
import AuthContext from "src/context/AuthContext"
import userDefault from "src/static/images/user_default.svg"
import discord from "src/static/images/discord.svg"
import discordi from "src/static/images/discordi.svg"
import discordw from "src/static/images/discordw.svg"

const NavArrow = styled.div.attrs(() => ({
  className: "px-3",
}))`
  &:hover {
    background: transparent !important;
  }
`

const NavIcon = styled.span.attrs(() => ({
  className: "icon",
}))`
  display: flex;
  align-items: center;
  justify-content: center;
`

const NavLink = styled(Link).attrs(props => ({
  to: props.to,
  color: props.color,
}))`
  ${props => !props.nocolor && "color: white;"}
  &:hover {
    ${props => !props.nocolor && "color: white;"}
    opacity: 0.75;
  }
  line-height: 0;
  text-decoration: none;
`

const NavWrapper = styled.div.attrs(() => ({
  className: "is-hover-translucent",
}))`
  line-height: 0;
`

const DropdownItem = styled.div.attrs(props => ({
  className: "mb-2 is-size-5 dropdown-item py-0",
}))``

const ProfileImg = styled.img.attrs(() => ({ className: "p-1" }))`
  border-radius: 50%;
`

const ProfileLogo = ({ href }) => {
  const { currentUser } = useContext(AuthContext)

  return (
    <NavWrapper>
      <a href={href}>
        <ProfileImg src={currentUser()?.photoURL || userDefault} />
      </a>
    </NavWrapper>
  )
}

const NavBar = () => {
  return (
    <nav
      class="navbar is-transparent is-primary is-flex-touch"
      role="navigation"
      aria-label="main"
    >
      <div class="container is-fullhd">
        <div class="navbar-brand">
          <div class="navbar-item py-0" style={{ flexShrink: 1 }}>
            <NavLink to="/">
              <img
                class="py-3"
                src="https://assets.otd.ink/title.png"
                alt=""
              ></img>
            </NavLink>
          </div>
          <div
            style={{ flexShrink: 1, marginLeft: "auto" }}
            class="navbar-item is-transparent p-0 is-hidden-desktop"
          >
            <div class="py-0">
              <div class="dropdown is-right is-hoverable">
                <div class="dropdown-trigger">
                  <NavArrow>
                    <NavIcon>
                      <i class="fa fa-angle-down fa-2x" />
                    </NavIcon>
                  </NavArrow>
                </div>
                <div class="dropdown-menu" id="dropdown-menu2" role="menu">
                  <div class="dropdown-content has-text-centered has-text-weight-medium">
                    <div class="dropdown-item p-0" style={{ lineHeight: 0 }}>
                      <NavLink nocolor="true" to="/discord">
                        <img class="px-6 py-1" src={discordw} alt="" />
                      </NavLink>
                    </div>
                    <hr class="dropdown-divider" />
                    <DropdownItem>
                      <NavLink nocolor="true" to="/wl">
                        Weakest Link
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink nocolor="true" to="/idtga">
                        It's Dangerous to go Alone
                      </NavLink>
                    </DropdownItem>
                  </div>
                </div>
              </div>
            </div>
            <div class="py-0">
              <ProfileLogo href="/profile" />
            </div>
          </div>
        </div>
        <div class="navbar-menu is-paddingless">
          <div class="navbar-end">
            <div class="navbar-item py-0 has-text-weight-medium">
              <NavLink to="/idtga">It's Dangerous to go Alone</NavLink>
            </div>
            <div class="navbar-item py-0 has-text-weight-medium">
              <NavLink to="/wl">Weakest Link</NavLink>
            </div>
            <a
              class="navbar-item py-0 is-hover-translucent is-hidden-desktop-only"
              href="/discord"
            >
              <img class="py-2" src={discord} alt="" />
            </a>
            <a
              class="navbar-item py-0 is-hover-translucent is-hidden-widescreen"
              href="/discord"
            >
              <img class="py-2" src={discordi} alt="" />
            </a>
            <div class="navbar-item py-0">
              <ProfileLogo href="/profile" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
