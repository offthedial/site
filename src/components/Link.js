import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Link as ChakraLink } from "@chakra-ui/react"

const Link = ({ children, to = "/", ...rest }) => (
  <ChakraLink
    to={to}
    as={GatsbyLink}
    _hover={{ textDecoration: "none" }}
    _focus="none"
    {...rest}
  >
    {children}
  </ChakraLink>
)

export default Link
