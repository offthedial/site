import React from "react"

import * as Chakra from "@chakra-ui/react"
import Layout from "src/components/Layout"
import PrivateRoute from "src/components/PrivateRoute"
import {
  useForm,
  useFormContext,
  useController,
  FormProvider,
} from "react-hook-form"
import Cleave from "cleave.js/react"

const Signup = ({ location }) => (
  <PrivateRoute location={location}>
    <Layout layerStyle="tint">
      <Chakra.Box
        px={[0, 16, 16, 32]}
        pt={[0, 16]}
        mx="auto"
        maxWidth="container.xl"
      >
        <Chakra.Box rounded={[null, "lg"]} layerStyle={[null, "lifted"]}>
          <Form />
        </Chakra.Box>
      </Chakra.Box>
    </Layout>
  </PrivateRoute>
)

const Form = () => {
  const formMethods = useForm({
    mode: "onTouched",
  })

  return (
    <FormProvider {...formMethods}>
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
        <Input
          name="IGN"
          desc={`What is your switch in-game name?`}
          validationRules={{
            required: "This field is required",
            minLength: {
              value: 1,
              message: "This field is required",
            },
          }}
          cleaveOptions={{ blocks: [10] }}
        />
        <hr />
        <Input
          name="Friend-code"
          desc={`What is your switch friend-code?`}
          validationRules={{
            required: "This field is required",
            minLength: {
              value: 17,
              message: "This field is required",
            },
          }}
          cleaveOptions={{
            blocks: [2, 4, 4, 4],
            prefix: "SW",
            delimiter: "-",
            numericOnly: true,
          }}
        />
        <hr />
        <Input
          name="Peak Rank"
          desc={`What is the highest rank you've achieved in the last 4 months? (If applicable, include X power)`}
          validationRules={{
            required: "This field is required",
            pattern: {
              value: /(^C-$)|(^C$)|(^C\+$)|(^B-$)|(^B$)|(^B\+$)|(^A-$)|(^A$)|(^A\+$)|(^S$)|(^S\+\d$)|(^X[1-9]\d{3}(\.\d)?$)/,
              message: (
                <>
                  Invalid Rank. Please use the format{" "}
                  {["C", "A-", "S+0", "X2350.1"].map((field, index) => (
                    <span key={index}>
                      <Chakra.Text as="code">{field}</Chakra.Text>
                      {index !== 3 && ", "}
                    </span>
                  ))}
                </>
              ),
            },
          }}
          cleaveOptions={{ delimiter: ".", blocks: [5, 1], uppercase: true }}
        />
        <hr />
        <InputContainer
          name="Weapon Pool"
          desc={`List up to 5 weapons that you would be comfortable playing during the tournament`}
        >
          <Chakra.Input size="lg" />
        </InputContainer>
        <hr />
        <InputContainer
          name="Competitive Experience"
          desc={`You can also paste your free agent post if you do not have any team experience.`}
        >
          <Chakra.Textarea size="lg" />
        </InputContainer>
        <hr />
        <Input
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
          validationRules={{
            pattern: {
              value: /^smash\.gg\/user\/[0-9A-Fa-f]{8}$/,
              message: "Invalid user slug",
            },
            minLength: {
              value: 15,
              message: "This field is required",
            },
          }}
          cleaveOptions={{
            lowercase: true,
            prefix: "smash.gg/user/",
            blocks: [22],
          }}
        />
        <hr />
        <InputContainer signup={true}>
          <Chakra.Box display="flex" justifyContent="flex-end">
            <Chakra.Button colorScheme="otd.slate" size="lg">
              Signup
            </Chakra.Button>
          </Chakra.Box>
        </InputContainer>
      </Chakra.Box>
    </FormProvider>
  )
}

const Input = ({ name, desc, validationRules, cleaveOptions }) => {
  const idName = name.toLowerCase().replace(/ /g, "-")
  const { control } = useFormContext()
  const {
    field,
    fieldState: { invalid, error },
  } = useController({
    name: idName,
    control,
    rules: validationRules,
    defaultValue: "",
  })

  return (
    <InputContainer name={name} desc={desc}>
      <StyledCleave {...field} isInvalid={invalid} options={cleaveOptions} />
      <Chakra.Box pt={2}>
        {invalid && (
          <Chakra.Text textStyle="error" fontSize="sm">
            {error.message}
          </Chakra.Text>
        )}
      </Chakra.Box>
    </InputContainer>
  )
}

const InputContainer = ({ name, desc, children, signup = false }) => (
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

const StyledCleave = ({ isInvalid, ...rest }) => {
  const styles = Chakra.useMultiStyleConfig("Input", { size: "lg" })
  return (
    <ChakraCleave {...rest} __css={styles.field} aria-invalid={isInvalid} />
  )
}

const ChakraCleave = Chakra.chakra(Cleave, {})

export default Signup
