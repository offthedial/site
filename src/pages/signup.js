import React from "react"

import * as Chakra from "@chakra-ui/react"
import Layout from "src/components/Layout"

const Signup = () => (
  <Layout layerStyle="tint">
    <Chakra.Box px={48} pt={24}>
      <Chakra.Box rounded="lg" layerStyle="lifted">
        <Chakra.Box display="flex">
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
            <FormField name="IGN" desc={`Your in-game name on your switch`}>
              <Chakra.Input />
            </FormField>
            <hr />
            <FormField name="Peak Rank" desc={`The highest rank you've had`}>
              <Chakra.Input />
            </FormField>
            <hr />
            <FormField
              name="Weapon Pool"
              desc={`Up to 5 weapons that you would be comfortable with playing during the tournament`}
            >
              <Chakra.Input />
            </FormField>
            <hr />
            <FormField
              name="Comp Exp"
              desc={`You can also paste your free agent post if you do not have experience`}
            >
              <Chakra.Input />
            </FormField>
            <hr />
            <FormField
              name="Smash.gg User Slug"
              desc={`The 8 characters that can be seen on your smash.gg profile page.`}
            >
              <Chakra.Input />
            </FormField>
          </Chakra.Box>
          <Chakra.Box
            roundedRight="lg"
            bgColor="gray.700"
            flexBasis="0"
            flexGrow="1"
          ></Chakra.Box>
        </Chakra.Box>
      </Chakra.Box>
    </Chakra.Box>
  </Layout>
)

const FormField = ({ name, desc, children }) => {
  return (
    <Chakra.Box display="flex" justifyContent="space-between">
      <Chakra.Box flexBasis="0" flexGrow="2" display="flex" flexDir="column">
        <Chakra.Text fontSize="4xl">{name}</Chakra.Text>
        <Chakra.Text fontSize="xl" textStyle="semimute">
          {desc}
        </Chakra.Text>
      </Chakra.Box>
      <Chakra.Box flexBasis="0" flexGrow="1" />
      <Chakra.Box flexBasis="0" flexGrow="2">
        {children}
      </Chakra.Box>
    </Chakra.Box>
  )
}

export default Signup
