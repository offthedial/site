import React from "react"

import * as Chakra from "@chakra-ui/react"
import Layout from "src/components/Layout"

const Signup = () => (
  <Layout layerStyle="tint">
    <Chakra.Box px={60} pt={20}>
      <Chakra.Box rounded="lg" layerStyle="lifted">
        <Chakra.Box
          flexBasis="0"
          flexGrow="4"
          display="flex"
          flexDir="column"
          gridGap={8}
          p={8}
          roundedLeft="lg"
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
            desc={`What is the highest rank you've achieved? (Include X power)`}
          >
            <Chakra.Input size="lg" />
          </FormField>
          <hr />
          <FormField
            name="Weapon Pool"
            desc={`You can list up to 5 weapons that you would be comfortable playing during the tournament`}
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
          <FormField>
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

const FormField = ({ name, desc, children }) => {
  return (
    <Chakra.Box display="flex" justifyContent="space-between">
      <Chakra.Box
        flexBasis="0"
        flexGrow="4"
        gridGap="4"
        display="flex"
        flexDir="column"
      >
        <Chakra.Text fontSize="4xl" lineHeight="none">
          {name}
        </Chakra.Text>
        <Chakra.Text fontSize="xl" textStyle="semimute">
          {desc}
        </Chakra.Text>
      </Chakra.Box>
      <Chakra.Box flexBasis="0" flexGrow="2" />
      <Chakra.Box flexBasis="0" flexGrow="3">
        {children}
      </Chakra.Box>
    </Chakra.Box>
  )
}

export default Signup
