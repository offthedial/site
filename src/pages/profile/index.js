import React from "react"

import {
  useUserJoined,
  useUserDiscord,
  useUserData,
  useUserSignup,
  useTourney,
} from "src/app/hooks"
import * as Chakra from "@chakra-ui/react"
import {
  addHours,
  format,
  fromUnixTime,
  formatDuration,
  intervalToDuration,
} from "date-fns"
import Layout from "src/components/Layout"
import PrivateRoute from "src/components/PrivateRoute"
import Link from "src/components/Link"
import { useColorModeValue } from "@chakra-ui/react"
import { navigate } from "gatsby"

const Profile = ({ location }) => (
  <PrivateRoute location={location}>
    <Layout>
      <Chakra.Box
        px={[0, 16, 16, 32]}
        pt={[0, 16]}
        pb={[0, 8]}
        mx="auto"
        maxWidth="container.xl"
      >
        <TopAlert />
        <UserProfile />
      </Chakra.Box>
    </Layout>
  </PrivateRoute>
)

const TopAlert = () => {
  const userJoinedQuery = useUserJoined()

  if (!userJoinedQuery.isLoading && !userJoinedQuery.data) {
    return (
      <Chakra.Alert
        status="warning"
        mb={[0, 8]}
        rounded={[null, "lg"]}
        alignItems={"flex-start"}
      >
        <Chakra.AlertIcon marginTop={0.5} />
        <Chakra.Box
          display="flex"
          alignItems="flex-start"
          justifyContent="space-between"
          flexDirection="column"
          width="100%"
          fontSize="lg"
        >
          <Chakra.Text>
            You are not currently in the Off the Dial discord server. This is
            required to sign up for tournaments.
          </Chakra.Text>
          <Link
            mt={3}
            to="/discord"
            fontWeight="bold"
            _hover={{ textDecoration: "underline" }}
          >
            Join the Server
          </Link>
        </Chakra.Box>
      </Chakra.Alert>
    )
  }
  return null
}

const UserProfile = () => {
  const userDiscordQuery = useUserDiscord()

  return (
    <Chakra.Box rounded={[null, "lg"]} p={8} layerStyle="tint">
      <Chakra.Flex alignItems="center" justifyContent="space-between">
        <Chakra.Flex alignItems="center" gridGap={6}>
          <Chakra.Avatar src={userDiscordQuery.data?.avatarUrl} size="lg" />
          <Chakra.Text fontSize="3xl" fontWeight="bold">
            {userDiscordQuery.data?.username || "..."}
          </Chakra.Text>
        </Chakra.Flex>
        <Chakra.IconButton
          aria-label="Logout"
          _hover={{
            textStyle: "error",
          }}
          onClick={() => {
            navigate("/profile/logout")
          }}
          icon={
            <Chakra.Icon
              height={6}
              width={6}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </Chakra.Icon>
          }
          size="lg"
        />
      </Chakra.Flex>
      <Chakra.Box h="2px" my={8} layerStyle="mute" />
      <SignalStrength />
      <Chakra.Text
        fontSize="lg"
        fontWeight="medium"
        textStyle="semimute"
        mt={8}
        mb={2}
      >
        Tournament Dashboard
      </Chakra.Text>
      <TournamentDashboard />
      <Chakra.Flex justifyContent="space-between" pt={3}>
        <Chakra.Box />
        <DeleteAccount />
      </Chakra.Flex>
    </Chakra.Box>
  )
}

const DeleteAccount = () => {
  const [confirm, setConfirm] = React.useState(false)
  return (
    <Chakra.Flex
      gridGap={3}
      textStyle="silent"
      lineHeight="1"
      alignItems="baseline"
    >
      {confirm ? (
        <>
          <Chakra.Text as="span">Are you sure?</Chakra.Text>
          <Chakra.Button
            minWidth={0}
            fontWeight="medium"
            textStyle="silent"
            _hover={{
              textStyle: "error",
            }}
            textDecoration="underline"
            variant="link"
            onClick={() => {
              navigate("/profile/delete")
            }}
          >
            Yes
          </Chakra.Button>
          <Chakra.Button
            minWidth={0}
            fontWeight="medium"
            textStyle="silent"
            _hover={{
              textStyle: "semimute",
            }}
            textDecoration="underline"
            variant="link"
            onClick={() => {
              setConfirm(false)
            }}
          >
            No
          </Chakra.Button>
        </>
      ) : (
        <Chakra.Button
          minWidth={0}
          fontWeight="normal"
          textStyle="silent"
          _hover={{
            textStyle: "error",
            textDecoration: "underline",
          }}
          variant="link"
          onClick={() => {
            setConfirm(true)
          }}
        >
          Delete Account
        </Chakra.Button>
      )}
    </Chakra.Flex>
  )
}

const SignalStrength = () => {
  const userDataQuery = useUserData()

  return (
    <Chakra.Flex
      alignItems="center"
      justifyContent="space-between"
      layerStyle="mute"
      px={8}
      py={5}
      gridGap={8}
      rounded="lg"
    >
      <Chakra.Flex alignItems="center" gridGap={8}>
        <Chakra.Icon
          color="otd.pink.0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          height={8}
          width={8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
          />
        </Chakra.Icon>
        <Chakra.Text fontSize={["xl", null, null, "2xl"]}>
          Signal Strength
        </Chakra.Text>
      </Chakra.Flex>
      <Chakra.Text fontSize={["xl", null, null, "2xl"]} fontFamily="mono">
        {userDataQuery.data?.meta?.signal || "0"}
      </Chakra.Text>
    </Chakra.Flex>
  )
}

const TournamentDashboard = () => {
  const tourneyQuery = useTourney()
  return (
    <Chakra.Flex
      gridGap={8}
      flexDirection="column"
      layerStyle="normal"
      rounded="lg"
      p={8}
    >
      <Chakra.Box>
        <Chakra.Text
          fontSize="xl"
          fontWeight="bold"
          textTransform="uppercase"
          letterSpacing="wide"
          textStyle="mute"
          mb={2}
        >
          Registration Status
        </Chakra.Text>
        <TournamentStatus tourneyQuery={tourneyQuery} />
      </Chakra.Box>
      <Chakra.Box>
        <Chakra.Text
          fontSize="xl"
          fontWeight="bold"
          textTransform="uppercase"
          letterSpacing="wide"
          textStyle="mute"
          mb={2}
        >
          Timeline
        </Chakra.Text>
        <Timeline tourneyQuery={tourneyQuery} />
      </Chakra.Box>
    </Chakra.Flex>
  )
}

const TournamentStatus = ({ tourneyQuery }) => {
  const userSignupQuery = useUserSignup()
  let status = {
    color: "green",
    message: "You are registered for the tournament!",
    button: "Update Profile",
  }
  if (!tourneyQuery.data || tourneyQuery.data.hasEnded()) {
    status = {
      color: "blue",
      message: "There is no tournament going on right now.",
      button: null,
    }
  } else {
    if (userSignupQuery.data?.type === "sub") {
      status.message = "You are registered for the tournament as a sub!"
    }
    if (userSignupQuery.data?.type === undefined) {
      if (tourneyQuery.data.hasClosed()) {
        status = {
          color: "red",
          message:
            "Registration is closed, but you can still sign up as a sub!",
          button: "Register as a Sub",
        }
      } else {
        status = {
          color: "red",
          message: "You are not registered for the tournament yet!",
          button: "Register",
        }
      }
    }
  }

  const textColorValue = Chakra.useColorModeValue("700", "200")
  const borderColorValue = Chakra.useColorModeValue("600", "300")
  const bgColorValue = Chakra.useColorModeValue("50", "900")
  const iconColorValue = Chakra.useColorModeValue("500", "400")

  return (
    <Chakra.Flex
      rounded="lg"
      p={8}
      alignItems={["flex-start", null, null, "center"]}
      borderWidth="1px"
      color={`${status.color}.${textColorValue}`}
      borderColor={`${status.color}.${borderColorValue}`}
      bgColor={`${status.color}.${bgColorValue}`}
      gridGap={[4, null, null, 8]}
      flexDirection={["column", null, null, "row"]}
    >
      <Chakra.Icon
        color={`${status.color}.${iconColorValue}`}
        height={7}
        width={7}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
        />
      </Chakra.Icon>
      <Chakra.Flex
        alignItems="center"
        width="100%"
        justifyContent="space-between"
        alignItems={["flex-start", null, null, "center"]}
        flexDirection={["column", null, null, "row"]}
        gridGap={[4, null, null, 0]}
      >
        <Chakra.Text fontSize="xl">{status.message}</Chakra.Text>
        <Link to="/signup">
          <Chakra.Button
            colorScheme={`${status.color}`}
            size="lg"
            fontSize="xl"
            variant="link"
            color={`${status.color}.${textColorValue}`}
            isDisabled={!status.button}
          >
            {status.button || "Register"}
          </Chakra.Button>
        </Link>
      </Chakra.Flex>
    </Chakra.Flex>
  )
}

const Timeline = ({ tourneyQuery }) => {
  const now = new Date()
  const registrationCloses = tourneyQuery?.isLoading
    ? null
    : fromUnixTime(tourneyQuery.data?.smashgg?.registrationClosesAt)
  const steps = tourneyQuery?.isLoading
    ? null
    : [
        tourneyQuery.data?.dateCreated,
        addHours(registrationCloses, -24),
        registrationCloses,
        addHours(registrationCloses, 24),
        tourneyQuery.data?.date,
      ]
  const getPhase = i => {
    if (steps === null) return { phase: "future", time: null }
    let phase = 0
    steps.forEach((step, index) => {
      if (now > step) {
        phase = index
      }
    })
    if (i < phase) {
      return { phase: "past", time: steps[i], countdown: steps[i] }
    }
    if (i > phase) {
      return {
        phase: "future",
        time: steps[i],
        countdown: steps[i],
        nextPhase: i - 1 === phase,
      }
    }
    return { phase: "now", time: steps[i], countdown: steps[i] }
  }

  return (
    <Chakra.Flex gridGap={2} flexDirection="column">
      <TimelineStep title="Registration opens" {...getPhase(0)}>
        It's a new season! Sign up if you haven't already, and tell your friends
        to sign up too!
      </TimelineStep>
      <TimelineStep title="Check-in opens" {...getPhase(1)}>
        Remember to check in on discord with the <code>$checkin</code> command
        in{" "}
        <Chakra.Text textStyle="mention" as="span">
          #check-in
        </Chakra.Text>
        . You will be disqualified if you fail to do so.
      </TimelineStep>
      <TimelineStep title="Registration closes" {...getPhase(2)}>
        Get hype, just a little longer now! Teams will be released shortly.
        While you're waiting, make sure to review the rules at{" "}
        <Link
          textStyle="slate"
          textDecoration="underline"
          _hover={{ textDecoration: "none" }}
          to="/idtga/rules"
        >
          otd.ink/idtga/rules
        </Link>
      </TimelineStep>
      <TimelineStep title="Teams are released" {...getPhase(3)}>
        Start practicing! Contact your fellow teammates and create a Group DM.
        If you have an issue with one of your team members, you can create
        player reports 24 hours after teams are released.
      </TimelineStep>
      <TimelineStep title="Tournament begins" {...getPhase(4)} final={true}>
        Good luck in the tournament! Tune into the official broadcast at{" "}
        <Link
          textStyle="slate"
          textDecoration="underline"
          _hover={{ textDecoration: "none" }}
          to="https://twitch.tv/offthedial"
        >
          twitch.tv/offthedial
        </Link>
        .
        <br />
        Don't forget to go to{" "}
        <Link
          textStyle="slate"
          textDecoration="underline"
          _hover={{ textDecoration: "none" }}
          to="https://smash.gg/idtga"
        >
          smash.gg/idtga
        </Link>{" "}
        to report your scores and organize your brackets.
      </TimelineStep>
    </Chakra.Flex>
  )
}

const TimelineStep = ({
  title,
  phase,
  time,
  final,
  nextPhase,
  countdown,
  children,
}) => {
  const timelineBg = useColorModeValue("100", "700")
  const timelineColor = useColorModeValue("700", "200")
  const timelineLine = useColorModeValue("500", "400")

  return (
    <Chakra.Flex alignItems="stretch">
      <Chakra.Flex
        gridGap={2}
        flexDirection="column"
        alignItems="center"
        mr={4}
      >
        <Chakra.Box
          minW={10}
          minH={10}
          display="flex"
          justifyContent="center"
          alignItems="center"
          textStyle={phase === "past" ? "silent" : "mute"}
          bg={
            phase === "now" ? `otd.slate.${timelineBg}` : `gray.${timelineBg}`
          }
          rounded="lg"
        >
          <Chakra.Icon
            height={6}
            width={6}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            color={phase === "now" ? `otd.slate.${timelineColor}` : undefined}
          >
            {phase === "past" && (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            )}
            {phase === "now" && (
              <>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </>
            )}
            {phase === "future" && (
              <>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </>
            )}
          </Chakra.Icon>
        </Chakra.Box>
        {(!final || phase === "now") && (
          <Chakra.Box
            bg={
              phase === "now"
                ? `otd.slate.${timelineLine}`
                : `gray.${timelineBg}`
            }
            width={1}
            height="100%"
          />
        )}
      </Chakra.Flex>
      <Chakra.Flex flexDirection="column">
        <Chakra.Box>
          <Chakra.Text
            fontSize={["xl", null, null, "2xl"]}
            fontWeight="medium"
            lineHeight="1"
            textStyle={phase === "past" ? "silent" : "mute"}
          >
            <Chakra.Text
              color={phase === "now" ? `otd.slate.${timelineColor}` : undefined}
            >
              <Chakra.Flex
                alignItems={["flex-start", "center"]}
                flexDirection={["column", "row"]}
              >
                {title}
                {nextPhase && countdown && (
                  <StepCountdown
                    time={countdown}
                    bgColor={`gray.${timelineBg}`}
                    color={`gray.${timelineColor}`}
                  />
                )}
              </Chakra.Flex>
            </Chakra.Text>
          </Chakra.Text>
          <Chakra.Text
            fontSize="md"
            fontWeight="normal"
            textStyle={phase === "past" ? "silent" : "mute"}
          >
            {time ? format(time, "MMMM d, h:mm aa") : "..."}
          </Chakra.Text>
        </Chakra.Box>
        {(!final || phase === "now") && (
          <Chakra.Text fontSize="xl" my={4}>
            {phase === "now" && <>{children}</>}
          </Chakra.Text>
        )}
      </Chakra.Flex>
    </Chakra.Flex>
  )
}

const StepCountdown = ({ time, ...rest }) => {
  const duration = formatDuration(
    intervalToDuration({
      start: time,
      end: new Date(),
    })
  )
    .split(" ")
    .slice(0, 2)
    .join(" ")
  return (
    <Chakra.Box
      fontSize="lg"
      fontWeight="normal"
      as="span"
      rounded="md"
      {...rest}
      py={1}
      px={2}
      mx={[0, 2]}
      mt={[1, 0]}
    >
      in {duration}
    </Chakra.Box>
  )
}

export default Profile
