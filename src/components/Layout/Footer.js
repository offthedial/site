import React from "react"
import { Link } from "gatsby"
import * as Chakra from "@chakra-ui/react"
import { SunIcon, MoonIcon } from "@chakra-ui/icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
  const { colorMode, toggleColorMode } = Chakra.useColorMode()
  const githubColor = Chakra.useColorModeValue("#24292e", "white")

  return (
    <Chakra.Box textStyle="silent" layerStyle="tint" px={4} py={8} mt={8}>
      <Chakra.Stack spacing={8} align={["stretch", "stretch", "center"]}>
        <Chakra.HStack
          color="gray.500"
          justify={["space-evenly"]}
          spacing={[null, null, 10]}
          wrap="wrap"
          fontSize="sl"
        >
          {[
            ["/faq", "FAQ"],
            ["/posts", "Posts"],
            ["/staff", "Staff"],
            ["/bot", "Bot"],
            ["/legal", "Terms"],
            ["https://assets.otd.ink", "Assets"],
          ].map(([to, name]) => (
            <Chakra.Link as={Link} to={to} key={to}>
              {name}
            </Chakra.Link>
          ))}
          <Chakra.IconButton
            onClick={toggleColorMode}
            variant="ghost"
            color="inherit"
            icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
          />
        </Chakra.HStack>
        <Chakra.HStack
          justify={["space-evenly"]}
          spacing={[null, null, 8]}
          wrap="wrap"
        >
          <MediaLink to="/patreon" brand="#f96854" icon={["fab", "patreon"]} />
          <MediaLink to="/twitch" brand="#9146ff" icon={["fab", "twitch"]} />
          <MediaLink to="/twitter" brand="#1da1f2" icon={["fab", "twitter"]} />
          <MediaLink to="/youtube" brand="#ff0000" icon={["fab", "youtube"]} />
          <MediaLink
            to="/github"
            brand={githubColor}
            icon={["fab", "github"]}
          />
        </Chakra.HStack>
        <Chakra.Text align="center">
          Built by Lepto, supported by the community.{" "}
          <Chakra.Link
            color="gray.500"
            href="https://github.com/offthedial/site"
          >
            Source Code
          </Chakra.Link>
          .
          {/*
          in memory of myself, to the community, for everything i tried, yet never acknowledged for.

          whoever is maintaining this site, please don't delete this.
          */}
        </Chakra.Text>
      </Chakra.Stack>
    </Chakra.Box>
  )
}

const MediaLink = ({ to, brand, icon }) => (
  <Chakra.Button
    variant="link"
    as={Link}
    to={to}
    color="inherit"
    _hover={{ color: `${brand}` }}
  >
    <FontAwesomeIcon icon={icon} size="lg" />
  </Chakra.Button>
)

export default Footer
