import React, { useState } from "react"

import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as Chakra from "@chakra-ui/react"
import useUserDiscord from "src/app/hooks/useUserDiscord"
import title from "src/static/title.svg"
import abbv from "src/static/abbreviation.svg"

const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const { data } = useUserDiscord()

  return (
    <NavBarContainer {...props}>
      <Link to="/">
        <Logo src={title} display={["none", "block"]} />
        <Logo src={abbv} display={[null, "none"]} />
      </Link>
      <MenuToggle {...{ isOpen, toggle }} />
      <MenuLinks {...{ isOpen, avatar: data?.avatarUrl }} />
    </NavBarContainer>
  )
}

const NavBarContainer = ({ children, ...props }) => (
  <Chakra.Flex
    as="nav"
    align="center"
    justify="space-between"
    shrink="1"
    wrap="wrap"
    w="full"
    p={3}
    bg="otd.slate.0"
    color="white"
    {...props}
  >
    {children}
  </Chakra.Flex>
)

const MenuLinks = ({ isOpen, avatar }) => (
  <Chakra.Box
    display={{ base: isOpen ? "block" : "none", lg: "block" }}
    flexBasis={{ base: "full", lg: "auto" }}
  >
    <Chakra.Stack
      spacing={8}
      align="center"
      justify={["center", "space-between", "space-between", "flex-end"]}
      direction={["column", "row", "row", "row"]}
      pt={[4, 4, 4, 0]}
    >
      <MenuItem to="/idtga">
        <Chakra.Text fontWeight="bold">It's Dangerous to go Alone</Chakra.Text>
      </MenuItem>
      <MenuItem to="/wl">
        <Chakra.Text fontWeight="bold">Weakest Link</Chakra.Text>
      </MenuItem>
      <MenuItem to="/discord">
        <Chakra.Button
          color="otd.slate.50"
          leftIcon={<FontAwesomeIcon icon={["fab", "discord"]} />}
          rightIcon={<FontAwesomeIcon icon={["fas", "chevron-right"]} />}
          variant="outline"
          _hover={{ background: "#7289DA" }}
          _active={{ background: "#7289DA" }}
          _focus="none"
        >
          <Chakra.Text color="white">Discord</Chakra.Text>
        </Chakra.Button>
      </MenuItem>
      <MenuItem to="/profile">
        {avatar ? (
          <Logo src={avatar} image={{ borderRadius: "full" }} />
        ) : (
          <UserDefault />
        )}
      </MenuItem>
    </Chakra.Stack>
  </Chakra.Box>
)

const MenuItem = ({ children, to = "/" }) => (
  <Chakra.Link
    to={to}
    as={Link}
    _hover={{ textDecoration: "none" }}
    _focus="none"
  >
    {children}
  </Chakra.Link>
)

const MenuToggle = ({ toggle, isOpen }) => (
  <Chakra.Box display={{ base: "block", lg: "none" }} onClick={toggle}>
    {isOpen ? <CloseIcon /> : <OpenIcon />}
  </Chakra.Box>
)

const Logo = ({ src, image, ...rest }) => (
  <Chakra.Box h={10} {...rest}>
    <Chakra.Image maxH="full" src={src} {...image} />
  </Chakra.Box>
)

const OpenIcon = () => (
  <Chakra.IconButton
    aria-label="open navigation"
    variant="unstyled"
    icon={
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    }
  />
)

const CloseIcon = () => (
  <Chakra.IconButton
    aria-label="close navigation"
    variant="unstyled"
    icon={
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    }
  />
)

const UserDefault = () => (
  <Chakra.IconButton
    aria-label="profile"
    isRound={true}
    bg="white"
    borderWidth={0}
    colorScheme="otd.slate"
    color="otd.slate.0"
    _hover={{ color: "otd.slate.600" }}
    _active={{ color: "otd.slate.700" }}
    icon={
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
          clipRule="evenodd"
        />
      </svg>
    }
  />
)

export default NavBar
