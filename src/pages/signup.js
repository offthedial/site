import React from "react"

import * as Chakra from "@chakra-ui/react"
import { format } from "date-fns"
import Layout from "src/components/Layout"
import PrivateRoute from "src/components/PrivateRoute"
import {
  useForm,
  useFormContext,
  useFormState,
  useController,
  FormProvider,
} from "react-hook-form"
import Cleave from "cleave.js/react"
import {
  useUserData,
  useMutUserData,
  useUserJoined,
  useUserSignup,
  useMutUserSignup,
  useTourney,
} from "src/app/hooks"
import Link from "src/components/Link"

const Signup = ({ location }) => (
  <PrivateRoute location={location}>
    <Layout layerStyle="tint">
      <Chakra.Box
        px={[0, 16, 16, 32]}
        pt={[0, 16]}
        mx="auto"
        maxWidth="container.xl"
      >
        <TopAlerts />
        <Chakra.Box rounded={[null, "lg"]} layerStyle={[null, "lifted"]}>
          <Form />
        </Chakra.Box>
      </Chakra.Box>
    </Layout>
  </PrivateRoute>
)

const TopAlerts = () => {
  const tourneyQuery = useTourney()
  const userSignupQuery = useUserSignup()
  const userJoinedQuery = useUserJoined()
  const alerts = getAlerts(tourneyQuery, userSignupQuery, userJoinedQuery)

  return (
    <>
      {alerts.map((alert, i) => (
        <Chakra.Alert
          status={alert.status}
          mb={[0, 8]}
          rounded={[null, "lg"]}
          key={i}
        >
          <Chakra.AlertIcon />
          <Chakra.Text fontSize="lg">{alert.message}</Chakra.Text>
        </Chakra.Alert>
      ))}
    </>
  )
}

const Form = () => {
  const formMethods = useForm({
    mode: "onTouched",
  })

  // Prepopulate data
  const userDataQuery = useUserData()
  React.useEffect(() => {
    formMethods.reset(userDataQuery.data?.profile)
  }, [userDataQuery.data])

  // Submitting form
  const userDataMut = useMutUserData()
  const userSignupMut = useMutUserSignup()
  const onSubmit = data => {
    userDataMut.mutate(data)
    userSignupMut.mutate(format(new Date(), "yyyy-MM-dd HH:mm:ss zzzz"))
  }

  console.log(formMethods.formState.isDirty)

  return (
    <FormProvider {...formMethods}>
      <Chakra.Box
        onSubmit={formMethods.handleSubmit(onSubmit)}
        flexBasis="0"
        flexGrow="4"
        display="flex"
        flexDir="column"
        gridGap={8}
        p={8}
        rounded={[null, "lg"]}
        layerStyle="normal"
        as="form"
        autocomplete="off"
      >
        <Input
          name="ign"
          title="IGN"
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
          name="sw"
          title="Friend-code"
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
          name="rank"
          title="Peak Rank"
          desc={`What is the highest rank you've achieved in the last 4 months? (If applicable, include X power)`}
          validationRules={{
            required: "This field is required",
            validate: value => {
              if (value.startsWith("X")) {
                if (/^X[1-9]\d{3}(\.\d)?$/.test(value)) return true
              }
              if (value.startsWith("S+")) {
                if (/^S\+\d$/.test(value)) return true
              }
              if (value === "S") {
                return true
              }
              if (["A", "B", "C"].includes(value[0])) {
                if (value.length === 2 && ["+", "-"].includes(value.at(-1)))
                  return true
                if (value.length === 1) return true
              }
              return (
                <>
                  Invalid Rank. Please use the format{" "}
                  <Chakra.Text as="code">C</Chakra.Text>,{" "}
                  <Chakra.Text as="code">A-</Chakra.Text>,{" "}
                  <Chakra.Text as="code">S+0</Chakra.Text>,{" "}
                  <Chakra.Text as="code">X2350.1</Chakra.Text>
                </>
              )
            },
          }}
          cleaveOptions={{ delimiter: ".", blocks: [5, 1], uppercase: true }}
        />
        <hr />
        <Input
          name="weapons"
          title="Weapon Pool"
          desc={`List up to 5 weapons that you would be comfortable playing during the tournament`}
          validationRules={{ required: "This field is required" }}
        >
          {props => <Chakra.Input size="lg" {...props} />}
        </Input>
        <hr />
        <Input
          name="cxp"
          title="Competitive Experience"
          desc={`You can also paste your free agent post if you do not have any team experience.`}
          validationRules={{ required: "This field is required" }}
        >
          {props => <Chakra.Textarea size="lg" {...props} />}
        </Input>
        <hr />
        <Input
          name="smashgg"
          title="Smash.gg User Slug"
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
            required: "This field is required",
            minLength: { value: 22, message: "This field is required" },
            pattern: {
              value: /^smash\.gg\/user\/[0-9A-Fa-f]{8}$/,
              message: "Invalid user slug",
            },
          }}
          cleaveOptions={{
            lowercase: true,
            prefix: "smash.gg/user/",
            blocks: [22],
          }}
        />
        <hr />
        <Chakra.Box>
          <SubmitArea />
        </Chakra.Box>
      </Chakra.Box>
    </FormProvider>
  )
}

const SubmitArea = () => {
  const tourneyQuery = useTourney()
  const userSignupQuery = useUserSignup()
  const userJoinedQuery = useUserJoined()
  // Get alert
  const alerts = getAlerts(tourneyQuery, userSignupQuery, userJoinedQuery)
  let alert = alerts ? alerts[alerts.length - 1] : null
  // Set alert style
  const colorWeight = Chakra.useColorModeValue("600", "200")
  const alertColor = {
    success: "green",
    error: "red",
    info: "blue",
  }[alert?.status]
  // Get form state
  const { isDirty } = useFormState()

  return (
    <Chakra.Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Chakra.Box>
        {alert && (
          <Chakra.Alert status={alert.status} bg="none" pl={0} pr={3}>
            <Chakra.AlertIcon />
            <Chakra.Text
              color={`${alertColor}.${colorWeight}`}
              fontSize="lg"
              fontWeight="semibold"
            >
              {alert.message}
            </Chakra.Text>
          </Chakra.Alert>
        )}
      </Chakra.Box>
      <Chakra.Box>
        <Chakra.Button
          colorScheme="otd.slate"
          size="lg"
          type="submit"
          isDisabled={alert?.status === "error" || !isDirty}
        >
          {userSignupQuery.data?.type ? "Update Profile" : "Signup"}
        </Chakra.Button>
      </Chakra.Box>
    </Chakra.Box>
  )
}

const getAlerts = (tourneyQuery, userSignupQuery, userJoinedQuery) => {
  const alerts = []
  if (tourneyQuery.data?.hasEnded()) {
    alerts.push({
      status: "error",
      message: (
        <>
          <b>Registration is closed</b>. Be on the look out for tournaments in
          the future!
        </>
      ),
    })
  } else if (!tourneyQuery.isLoading) {
    if (userSignupQuery.data?.type) {
      alerts.push({
        status: "success",
        message: (
          <>
            <b>You are currently signed up!</b> To update your profile
            information, re-submit this form.
          </>
        ),
      })
    } else if (!userSignupQuery.isLoading && tourneyQuery.data?.hasClosed()) {
      alerts.push({
        status: "info",
        message: (
          <>
            <b>Signups are closed</b>. Don't worry, you can still sign up as a
            sub!
          </>
        ),
      })
    }
  }
  if (userJoinedQuery.data === false) {
    alerts.push({
      status: "error",
      message: (
        <>
          You must be in the Off the Dial discord server to participate.{" "}
          <Link to="/discord" fontWeight="black" textDecoration="underline">
            Join the Server
          </Link>
          !
        </>
      ),
    })
  }
  return alerts
}

const Input = ({
  name,
  title,
  desc,
  validationRules,
  cleaveOptions,
  children,
}) => {
  const { control } = useFormContext()
  const {
    field,
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    rules: validationRules,
    defaultValue: "",
  })

  return (
    <InputContainer name={title} desc={desc}>
      {children ? (
        children({ isInvalid: invalid, ...field })
      ) : (
        <StyledCleave {...field} isInvalid={invalid} options={cleaveOptions} />
      )}
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

const InputContainer = ({ name, desc, children }) => (
  <Chakra.Box
    display="flex"
    flexDir={["column", null, "row"]}
    justifyContent="space-between"
  >
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
