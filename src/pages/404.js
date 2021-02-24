import React from "react"

import Layout from "src/components/Layout"
import * as Chakra from "@chakra-ui/react"

const choose = choices => {
  var index = Math.floor(Math.random() * choices.length)
  return choices[index]
}

const NotFound = () => (
  <Layout pageTitle="404">
    <Chakra.Flex align="center" justify="center">
      <Chakra.Box py={16}>
        <Chakra.Container maxW="container.xl">
          <Chakra.Text
            as="kbd"
            fontSize={["7xl", "8xl", "9xl"]}
            fontWeight="light"
            lineHeight="none"
            letterSpacing={10}
            color="gray.400"
          >
            404
          </Chakra.Text>
          <Chakra.Text
            fontSize={["4xl", "6xl", "7xl"]}
            fontWeight="bold"
            lineHeight="none"
            color="gray.600"
          >
            {choose([
              "There's nothing here.",
              "Lost, bud?",
              "Looks pretty empty.",
            ])}
          </Chakra.Text>
        </Chakra.Container>
      </Chakra.Box>
    </Chakra.Flex>
  </Layout>
)

export default NotFound
