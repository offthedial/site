import React, { useState } from "react"

import { Link } from "gatsby"
import { Box, Image, Flex, Text, Stack } from "@chakra-ui/react"
import useUserDiscord from "src/app/hooks/useUserDiscord"

const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const { data } = useUserDiscord()

  return (
    <NavBarContainer {...props}>
      <Link to="/">
        <Logo src="https://assets.otd.ink/title.svg" />
      </Link>
      <MenuToggle {...{ isOpen, toggle }} />
      <MenuLinks {...{ isOpen, avatar: data?.avatarUrl }} />
    </NavBarContainer>
  )
}

const Logo = ({ src, ...rest }) => (
  <Box h={10}>
    <Image style={{ maxHeight: "100%" }} src={src} {...rest} />
  </Box>
)

const MenuToggle = ({ toggle, isOpen }) => (
  <Box display={{ base: "block", md: "none" }} onClick={toggle}>
    {isOpen ? <CloseIcon /> : <MenuIcon />}
  </Box>
)

const MenuItem = ({ children, isLast, to = "/", ...rest }) => (
  <Link to={to}>
    <Text display="block" as="b" {...rest}>
      {children}
    </Text>
  </Link>
)

const MenuLinks = ({ isOpen, avatar }) => (
  <Box
    display={{ base: isOpen ? "block" : "none", md: "block" }}
    flexBasis={{ base: "100%", md: "auto" }}
  >
    <Stack
      spacing={8}
      align="center"
      justify={["center", "space-between", "flex-end", "flex-end"]}
      direction={["column", "row", "row", "row"]}
      pt={[4, 4, 0, 0]}
    >
      <MenuItem to="/idtga">It's Dangerous to go Alone</MenuItem>
      <MenuItem to="/wl">Weakest Link</MenuItem>
      <MenuItem to="/profile" isLast>
        <Logo src={avatar} rounded="full" />
      </MenuItem>
    </Stack>
  </Box>
)

const NavBarContainer = ({ children, ...props }) => (
  <Flex
    as="nav"
    align="center"
    justify="space-between"
    wrap="wrap"
    w="100%"
    p={3}
    bg="otd.slate.0"
    color="white"
    {...props}
  >
    {children}
  </Flex>
)

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width="24"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      fill="white"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
)

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width="24"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      fill="white"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
)

export default NavBar
