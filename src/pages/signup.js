import React from "react"

import * as Chakra from "@chakra-ui/react"
import Layout from "src/components/Layout"

const Signup = () => (
  <Layout layerStyle="tint">
    <Chakra.Box
      px={[0, 16, 16, 32]}
      pt={[0, 16]}
      mx="auto"
      maxWidth="container.xl"
    >
      <Chakra.Box rounded={[null, "lg"]} layerStyle={[null, "lifted"]}>
        <Chakra.Box
          flexBasis="0"
          flexGrow="4"
          display="flex"
          flexDir="column"
          gridGap={8}
          p={8}
          rounded={[null, "lg"]}
          layerStyle="normal"
        >
          <FormField
            name="IGN"
            desc={`What is the in-game name you use on your switch?`}
          >
            <Chakra.Input size="lg" />
          </FormField>
          <hr />
          <FormField
            name="Friend-code"
            desc={`What is your switch friend-code?`}
          >
            <Chakra.Input size="lg" />
          </FormField>
          <hr />
          <FormField
            name="Peak Rank"
            desc={`What is the highest rank you've achieved in the last 4 months? (If applicable, include X power)`}
          >
            <Chakra.Input size="lg" />
          </FormField>
          <hr />
          <FormField
            name="Weapon Pool"
            desc={`List up to 5 weapons that you would be comfortable playing during the tournament`}
          >
            <Chakra.Input size="lg" />
          </FormField>
          <hr />
          <FormField
            name="Competitive Experience"
            desc={`You can also paste your free agent post if you do not have any team experience.`}
          >
            <Chakra.Input size="lg" />
          </FormField>
          <hr />
          <FormField
            name="Smash.gg User Slug"
            desc={
              <>
                The 8 characters that are listed on your{" "}
                <Chakra.Link textStyle="slate" href="https://smash.gg/profile">
                  smash.gg profile page
                </Chakra.Link>
                .
              </>
            }
          >
            <Chakra.Input size="lg" />
          </FormField>
          <hr />
          <FormField signup={true}>
            <Chakra.Box display="flex" justifyContent="flex-end">
              <Chakra.Button colorScheme="otd.slate" size="lg">
                Signup
              </Chakra.Button>
            </Chakra.Box>
          </FormField>
        </Chakra.Box>
      </Chakra.Box>
    </Chakra.Box>
  </Layout>
)

const FormField = ({ name, desc, children, signup = false }) => {
  return (
    <Chakra.Box
      display="flex"
      flexDir={["column", null, "row"]}
      justifyContent="space-between"
    >
      {signup ? (
        <Chakra.Box />
      ) : (
        <Chakra.Box
          flexBasis="0"
          flexGrow="4"
          gridGap="4"
          display="flex"
          flexDir="column"
          paddingBottom={[4, null, 0]}
        >
          <Chakra.Text fontSize={["3xl", "4xl"]} lineHeight="none">
            {name}
          </Chakra.Text>
          <Chakra.Text fontSize={["lg", "xl"]} textStyle="semimute">
            {desc}
          </Chakra.Text>
        </Chakra.Box>
      )}
      <Chakra.Box flexBasis="0" flexGrow="2" />
      <Chakra.Box flexBasis="0" flexGrow="3">
        {children}
      </Chakra.Box>
    </Chakra.Box>
  )
}

export default Signup
