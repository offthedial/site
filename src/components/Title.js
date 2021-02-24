import React from "react"
import * as Chakra from "@chakra-ui/react"

const Title = ({ title, children }) => (
  <Chakra.Box py={12} textAlign="center" fontSize="xl">
    <Chakra.Text as="h1" fontSize="3xl" fontWeight="bold" lineHeight="none">
      {title}
    </Chakra.Text>
    <Chakra.Container maxW="container.lg" color="gray.500">
      {children}
    </Chakra.Container>
  </Chakra.Box>
)

export default Title
