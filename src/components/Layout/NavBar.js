import React from "react"

import { Link } from "gatsby"

import styled from "styled-components"
import userDefault from "src/static/images/user_default.svg"
import discord from "src/static/images/discord.svg"
import discordi from "src/static/images/discordi.svg"
import discordw from "src/static/images/discordw.svg"
import useUserDiscord from "src/app/hooks/useUserDiscord"

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

const ProfileImage = ({ props }) => (
  <NavWrapper>
    <Link to="/profile">
      <img
        class={`p-1 ${props.query.isLoading && "is-invisible"}`}
        style={{ borderRadius: "50%" }}
        src={props.query.data?.avatarUrl || props.userDefault}
      />
    </Link>
  </NavWrapper>
)

const NavBar = () => {
  const query = useUserDiscord()

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
              <img class="py-3" src="https://assets.otd.ink/title.png" alt="" />
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
              <ProfileImage props={{ query, userDefault }} />
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
            <Link
              class="navbar-item py-0 is-hover-translucent is-hidden-desktop-only"
              to="/discord"
            >
              <img class="py-2" src={discord} alt="" />
            </Link>
            <Link
              class="navbar-item py-0 is-hover-translucent is-hidden-widescreen"
              to="/discord"
            >
              <img class="py-2" src={discordi} alt="" />
            </Link>
            <div class="navbar-item py-0">
              <ProfileImage props={{ query, userDefault }} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
