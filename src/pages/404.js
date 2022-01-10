import React from "react"

import Layout from "src/components/Layout"
import * as Chakra from "@chakra-ui/react"

const choose = choices => {
  var index = Math.floor(Math.random() * choices.length)
  return choices[index]
}

const NotFound = () => (
  <Layout pageTitle="404" main={{ position: "relative" }}>
    <Chakra.Flex
      direction="column"
      h="full"
      sx={{ top: 0, bottom: 0, left: 0, right: 0 }}
      align="center"
      position="absolute"
      p={6}
      justify="space-between"
    >
      <Chakra.Spacer />
      <Chakra.Box>
        <Chakra.Container maxW="container.xl">
          <Chakra.Text
            fontFamily="mono"
            fontSize={["7xl", "8xl", "9xl"]}
            fontWeight="light"
            lineHeight="none"
            letterSpacing={10}
            textStyle="mute"
          >
            404
          </Chakra.Text>
          <Chakra.Text
            fontSize={["4xl", "6xl", "7xl"]}
            fontWeight="bold"
            lineHeight="none"
            textStyle="silent"
          >
            {choose([
              "There's nothing here.",
              "Lost, bud?",
              "Looks pretty empty.",
            ])}
          </Chakra.Text>
        </Chakra.Container>
      </Chakra.Box>

      <Chakra.Spacer />
    </Chakra.Flex>
  </Layout>
)

export default NotFound
