import React from "react"
import { Link } from "gatsby"
import * as Chakra from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => (
  <Chakra.Box px={4} py={8} mt={8} bg="gray.50" color="gray.500">
    <Chakra.Stack spacing={8} align={["stretch", "stretch", "center"]}>
      <Chakra.HStack
        justify={["space-evenly"]}
        spacing={[null, null, 10]}
        wrap="wrap"
        fontSize="sl"
      >
        <Chakra.Link as={Link} to="/faq">
          FAQ
        </Chakra.Link>
        <Chakra.Link as={Link} to="/posts">
          Posts
        </Chakra.Link>
        <Chakra.Link as={Link} to="/staff">
          Staff
        </Chakra.Link>
        <Chakra.Link as={Link} to="/bot">
          Bot
        </Chakra.Link>
        <Chakra.Link as={Link} to="https://assets.otd.ink">
          Assets
        </Chakra.Link>
        <Chakra.Link as={Link} to="/legal">
          Terms
        </Chakra.Link>
      </Chakra.HStack>
      <Chakra.HStack
        justify={["space-evenly"]}
        spacing={[null, null, 8]}
        wrap="wrap"
      >
        <MediaLink to="/patreon" color="#f96854" icon={["fab", "patreon"]} />
        <MediaLink to="/twitch" color="#9146ff" icon={["fab", "twitch"]} />
        <MediaLink to="/twitter" color="#1da1f2" icon={["fab", "twitter"]} />
        <MediaLink to="/youtube" color="#ff0000" icon={["fab", "youtube"]} />
        <MediaLink to="/github" color="#24292e" icon={["fab", "github"]} />
      </Chakra.HStack>
      <Chakra.Text color="gray.400">
        This website is{" "}
        <Chakra.Link color="gray.500" href="https://github.com/offthedial/site">
          open source
        </Chakra.Link>
        , contributions are welcome! Built with Gatsby & Chakra. More features
        to come!
      </Chakra.Text>
    </Chakra.Stack>
  </Chakra.Box>
)

const MediaLink = ({ to, color, icon }) => (
  <Chakra.Button
    variant="link"
    as={Link}
    to={to}
    color="gray.400"
    _hover={{ color: `${color}` }}
  >
    <FontAwesomeIcon icon={icon} size="lg" />
  </Chakra.Button>
)

export default Footer
