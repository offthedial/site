import React, { useEffect, useState } from "react"

import { graphql } from "gatsby"
import { useTourney, useUserSignup } from "src/app/hooks"
import {
  fromUnixTime,
  format,
  formatDuration,
  intervalToDuration,
  addHours,
  addMinutes,
} from "date-fns"

import Link from "src/components/Link"
import { MDXRenderer } from "gatsby-plugin-mdx"
import * as Chakra from "@chakra-ui/react"
import { InfoOutlineIcon } from "@chakra-ui/icons"
import Layout from "src/components/Layout"
import skate from "src/static/skate.svg"
import idtga from "src/static/idtga.svg"

const Idtga = ({ data }) => {
  const tourney = useTourney()

  return (
    <Layout
      pageTitle="It's Dangerous to go Alone"
      meta={{
        image: idtga,
        description: `It's Dangerous to go Alone is our flagship, solo registration tournament. Focused on creating balanced teams, and being accessible to everyone.`,
      }}
    >
      <Chakra.Box bg="otd.slate.0">
        <Chakra.Box mx={3} bgColor="otd.slate.300" minH="1px" />
        <Card
          tourney={tourney}
          signupButton={<SignupButton tourney={tourney} />}
        />
      </Chakra.Box>
      <Chakra.Box py={[8, null, null, 16]} pl={[8, null, null, 16]}>
        <Chakra.Grid templateColumns="repeat(12, minmax(0, 1fr))">
          <Chakra.GridItem rowStart={1} colStart={1} colEnd={13}>
            <Chakra.Image src={skate} />
          </Chakra.GridItem>
          <Chakra.GridItem
            pt={[4, 0]}
            fontSize={["2xl", "3xl"]}
            rowStart={[2, null, null, 1]}
            colStart={[1, null, null, 5]}
            colEnd={[13, null, null, 12]}
            zIndex={1}
          >
            <Chakra.Text fontWeight="black">
              Our flagship,{" "}
              <Chakra.Text as="span" fontStyle="italic">
                solo registration
              </Chakra.Text>{" "}
              tournament.
            </Chakra.Text>
            <Chakra.Text fontSize={["2xl", "3xl"]} textStyle="semimute">
              Focused on creating balanced teams, and being accessible to
              everyone.
            </Chakra.Text>
          </Chakra.GridItem>
        </Chakra.Grid>
      </Chakra.Box>
      <Whoosh>
        <WhooshPromo
          title="No team, no problem"
          description="Whether you are brand new to the scene, or a skilled free agent. We make it always accessible to gain competitive experience."
        >
          <Chakra.Box p={12} bg="otd.slate.300" />
        </WhooshPromo>
        <WhooshPromo
          title="Put yourself out there"
          description="Test your chemistry with different folks, and show the scene what you're made of. You might just find your new teammates."
          reversed={true}
        >
          <Chakra.Box p={12} bg="otd.slate.300" />
        </WhooshPromo>
        <WhooshPromo
          title="Have some fun"
          description="Got an open weekend? Meet new people, make new friends, and just have a whole lot of fun!"
        >
          <Chakra.Box p={12} bg="otd.slate.300" />
        </WhooshPromo>
      </Whoosh>
      <Chakra.Box py={[8, null, null, 20]} px={[8, null, null, 40]}>
        <DetailsCard tourney={tourney} mdx={data.mdx} />
      </Chakra.Box>
    </Layout>
  )
}

const Card = ({ tourney, signupButton }) => {
  let state = {}
  if (tourney.isLoading) {
    state = {
      date: "...",
      days: 0,
      hours: 0,
      minutes: 0,
    }
  } else {
    const duration = formatDuration(
      intervalToDuration({
        start: fromUnixTime(tourney.data?.smashgg.registrationClosesAt),
        end: new Date(),
      }),
      {
        format: ["days", "hours", "minutes"],
        zero: true,
      }
    ).split(" ")
    state = {
      date: tourney.data ? format(tourney.data?.date, "MMM d, h:mm aa") : "...",
      days: duration[duration.indexOf("days") - 1],
      hours: duration[duration.indexOf("hours") - 1],
      minutes: duration[duration.indexOf("minutes") - 1],
    }
  }
  return (
    <Chakra.Stack
      direction={["column", "row"]}
      py={[8, null, null, 16]}
      px={4}
      justify="space-evenly"
      align="center"
      maxW="container.lg"
      mx="auto"
    >
      <Chakra.Box
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        maxW={["full", "52"]}
        pb={[8, 0]}
      >
        <Chakra.Image maxW={["32", "48"]} src={idtga} />
        <Chakra.Text
          fontSize={["2xl", "3xl"]}
          fontWeight="black"
          color="white"
          lineHeight="shorter"
          textAlign="center"
        >
          It's Dangerous to go Alone
        </Chakra.Text>
      </Chakra.Box>
      <Chakra.Box maxW="80">
        <Chakra.Flex
          direction="column"
          align="center"
          justify="center"
          textAlign="center"
        >
          <CardSection>
            <CardHeading>Tournament Date:</CardHeading>
            <CardText>{state.date}</CardText>
          </CardSection>
          <CardSection>
            <CardHeading>Registration Closes:</CardHeading>
            <Chakra.Stack
              mx="auto"
              direction={["column", "row"]}
              justify={["space-around", "center"]}
              spacing={4}
            >
              <CardCount value={state.days} text="Days" />
              <CardCount value={state.hours} text="Hours" />
              <CardCount value={state.minutes} text="Minutes" />
            </Chakra.Stack>
          </CardSection>
          <CardSection>{signupButton}</CardSection>
          <Chakra.Text color="otd.slate.200">
            Times are listed in your timezone. For more information, see{" "}
            <Link to="/idtga#details" color="otd.slate.100">
              details
            </Link>
            .
          </Chakra.Text>
        </Chakra.Flex>
      </Chakra.Box>
    </Chakra.Stack>
  )
}

const WhooshPromo = ({ title, description, reversed = false, children }) => {
  const props = reversed
    ? [
        { colStart: [1, null, 2], colEnd: 3, rowStart: [2, null, 1] },
        { colStart: 1, colEnd: [3, null, 2] },
      ]
    : [
        { colStart: 1, colEnd: [3, null, 2], rowStart: [2, null, 1] },
        { colStart: [1, null, 2], colEnd: 3 },
      ]
  return (
    <Chakra.Box px={[4, null, 8, 16]} py={[16, null, 32, 44]}>
      <Chakra.Grid
        gap={[4, null, 12, 36]}
        templateColumns="repeat(2, minmax(0, 1fr))"
      >
        <Chakra.GridItem {...props[0]}>
          <Chakra.Box>
            <Chakra.Text fontSize={["2xl", "3xl"]} fontWeight="bold" mb={2}>
              {title}
            </Chakra.Text>
            <Chakra.Text fontSize="2xl" textStyle="semimute">
              {description}
            </Chakra.Text>
          </Chakra.Box>
        </Chakra.GridItem>
        <Chakra.GridItem alignSelf="center" {...props[1]}>
          {children}
        </Chakra.GridItem>
      </Chakra.Grid>
    </Chakra.Box>
  )
}

const DetailsCard = ({ tourney, mdx }) => {
  const state =
    tourney?.data?.hasEnded() !== false
      ? {
          title: "It's Dangerous to go Alone",
          details:
            "There's no tournament currently happening, but here's some general information!",
          changelogTitle: "Changes from last season",
        }
      : {
          title: tourney.data.smashgg.name,
          details: (
            <article>
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </article>
          ),
          changelogTitle: "What's New",
        }
  const dates = [
    [
      "4 days before",
      date => addHours(date, -24),
      <>
        Check-in begins for 24 hours, if you are registered, don't forget to
        check in!
      </>,
    ],
    [
      "3 days before",
      date => date,
      <>
        Check-in and registration closes, invalid attendees will be removed, and
        we start assembling teams.
      </>,
    ],
    [
      "2 days before",
      date => addHours(date, 24),
      <>
        Players recieve their teams, and the maplist is published. You can now
        start practicing with your team
      </>,
    ],
    [
      "1 hour before",
      date => addHours(date, 71),
      <>
        The tournament is about to begin! We request that you be online on both
        Splatoon 2 and Discord.
      </>,
    ],
    [
      "10 minutes before",
      date => addMinutes(addHours(date, 72), -10),
      <>
        The stream goes live on <Link to="/twitch">twitch</Link>!
      </>,
    ],
  ]

  return (
    <Chakra.Box p={[8, null, null, 12]} layerStyle="lifted">
      <Chakra.Stack spacing={8}>
        <Chakra.Box>
          <Chakra.Text id="details" fontSize="2xl" textStyle="semimute">
            Details for...
          </Chakra.Text>
          <Chakra.Text lineHeight="1.125" fontSize="4xl">
            {state.title}
          </Chakra.Text>
        </Chakra.Box>
        <Chakra.Text
          fontSize="xl"
          textStyle="semimute"
          as="blockquote"
          fontStyle="italic"
        >
          {state.details}
        </Chakra.Text>
        <Chakra.Box
          display="flex"
          flexDirection="column"
          alignItems="stretch"
          gridGap={[8, null, null, 12]}
        >
          <Chakra.Box flexGrow="1" flexBasis="0">
            <Chakra.Table fontSize="lg" variant="unstyled">
              <Chakra.Thead>
                <Chakra.Tr>
                  <Chakra.Th></Chakra.Th>
                  <Chakra.Th lineHeight="1.5" fontSize="lg" textStyle="mute">
                    Schedule
                  </Chakra.Th>
                </Chakra.Tr>
              </Chakra.Thead>
              <Chakra.Tbody>
                {dates.map((row, i) => (
                  <Chakra.Tr key={i}>
                    <Chakra.Td
                      lineHeight="1.5"
                      verticalAlign="top"
                      pr={0}
                      fontWeight="bold"
                      textAlign="right"
                      width="25%"
                    >
                      {tourney?.data?.hasEnded() !== false
                        ? row[0]
                        : format(
                            row[1](
                              fromUnixTime(
                                tourney.data.smashgg.registrationClosesAt
                              )
                            ),
                            "MMM d, h:mm aa"
                          )}
                    </Chakra.Td>
                    <Chakra.Td lineHeight="1.5" verticalAlign="top">
                      {row[2]}
                    </Chakra.Td>
                  </Chakra.Tr>
                ))}
              </Chakra.Tbody>
            </Chakra.Table>
          </Chakra.Box>
          <Chakra.Box flexGrow="1" flexBasis="0">
            <Chakra.Table fontSize="lg" variant="unstyled">
              <Chakra.Thead>
                <Chakra.Tr>
                  <Chakra.Th></Chakra.Th>
                  <Chakra.Th lineHeight="1.5" fontSize="lg" textStyle="mute">
                    {state.changelogTitle}
                  </Chakra.Th>
                </Chakra.Tr>
              </Chakra.Thead>
              <Chakra.Tbody>
                {mdx.frontmatter.changelog.map((row, i) => (
                  <Chakra.Tr key={i}>
                    <Chakra.Td
                      width="25%"
                      lineHeight="1.5"
                      verticalAlign="top"
                      pr={0}
                    >
                      <Chakra.Box
                        display="flex"
                        justifyContent="flex-end"
                        alignItems="center"
                        height="1.5em"
                      >
                        <InfoOutlineIcon />
                      </Chakra.Box>
                    </Chakra.Td>
                    <Chakra.Td lineHeight="1.5" verticalAlign="top">
                      {row}
                    </Chakra.Td>
                  </Chakra.Tr>
                ))}
              </Chakra.Tbody>
            </Chakra.Table>
          </Chakra.Box>
        </Chakra.Box>
      </Chakra.Stack>
    </Chakra.Box>
  )
}

const CardSection = ({ children }) => (
  <Chakra.Box pb={8} w="full">
    {children}
  </Chakra.Box>
)

const CardHeading = ({ children }) => (
  <Chakra.Text
    color="otd.slate.200"
    fontSize={["xl"]}
    fontFamily="mono"
    fontWeight="light"
    letterSpacing={2}
    lineHeight="sm"
    textTransform="uppercase"
    pb={[2, 0]}
  >
    {children}
  </Chakra.Text>
)

const CardText = ({ children, ...rest }) => (
  <Chakra.Text
    color="white"
    fontSize={["2xl", "3xl"]}
    lineHeight="none"
    fontWeight="bold"
    {...rest}
  >
    {children}
  </Chakra.Text>
)

const CardCount = ({ text, value }) => (
  <Chakra.Box flexGrow="1" flexShrink="1" flexBasis="0">
    <Chakra.Stack>
      <CardText color="otd.slate.100" fontFamily="mono">
        {value}
      </CardText>
      <CardText fontSize={["2xl"]} fontWeight="normal">
        {text}
      </CardText>
    </Chakra.Stack>
  </Chakra.Box>
)

const SignupButton = ({ tourney }) => {
  const userSignup = useUserSignup()

  const [signupButtonText, setSignupButtonText] = useState("Signup")
  useEffect(() => {
    if (userSignup.data?.type === "signup") {
      setSignupButtonText("Update Signup Form")
    } else if (userSignup.data?.type === "sub") {
      setSignupButtonText("Update Sub Form")
    } else if (tourney.data?.hasClosed() && !tourney.data?.hasEnded()) {
      setSignupButtonText("Signup as a Sub")
    } else {
      setSignupButtonText("Signup")
    }
  }, [tourney, userSignup])

  return (
    <Link to={tourney.data?.hasEnded() ? undefined : "/signup"}>
      <Chakra.Button
        variant="outline"
        borderColor="white"
        color="white"
        bg="otd.purple.0"
        _hover={{ bg: "otd.purple.500" }}
        _active={{ bg: "otd.purple.500" }}
        size="lg"
        disabled={tourney.data?.hasEnded()}
      >
        {signupButtonText}
      </Chakra.Button>
    </Link>
  )
}

const Whoosh = ({ children }) => (
  <>
    <WhooshWave />
    <Chakra.Box layerStyle="tint">
      <Chakra.Container maxW="container.xl">{children}</Chakra.Container>
    </Chakra.Box>
    <WhooshWave reversed={true} />
  </>
)

const WhooshWave = ({ reversed = false }) => (
  <Chakra.Box textStyle="tinted">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 500 42"
      xmlSpace="preserve"
      fill="currentColor"
    >
      <g
        transform={
          reversed &&
          "matrix(-1 -2.2967631E-06 2.2967631E-06 -1 500.5 42.501152)"
        }
      >
        <path
          d="M499.99 27.4921C484.7 30.6021 480.16 31.7321 464.87 34.8521C463.32 35.1721 461.67 35.4721 460.2 34.9021C455.64 33.1421 457.58 26.0321 461.21 22.7521C464.84 19.4721 469.85 16.1721 469.38 11.3121C468.78 5.13207 460.33 3.79207 454.19 4.74207C420.53 9.96207 391.43 31.8921 357.97 38.2921C354.28 39.0021 349.24 38.7121 348.3 35.0721C347.92 33.6121 348.42 32.0221 347.99 30.5721C346.93 26.9521 341.79 27.1121 338.13 28.0521C328.88 30.4221 319.64 32.8021 310.39 35.1721C304.87 36.5921 297.37 37.1121 295.12 31.8821C291.57 23.6221 307.05 14.2421 301.2 7.42207C299.12 5.00207 295.45 4.93207 292.28 5.23207C253.08 8.87206 218.42 37.9921 179.1 36.0321C174.62 35.8121 168.79 33.5221 169.46 29.0821C169.84 26.5621 172.32 24.8621 173.1 22.4421C175.1 16.1821 165.67 12.9221 159.15 13.7121C130.68 17.1521 104.94 33.2621 76.49 36.7921C72.55 37.2821 67.83 37.1921 65.55 33.9421C60.58 26.8521 73.69 19.7121 74.33 11.0821C74.73 5.71207 69.72 1.11207 64.42 0.22207C59.11 -0.667931 53.75 1.25207 48.9 3.58207C29.08 13.0721 21.89 24.8121 0 26.6921L0 45.3121L499.99 45.3121L499.99 27.4921L499.99 27.4921Z"
          transform="translate(-6.1035156E-05 3.6879349)"
        />
        <path
          d="M0.95504 6.23343C0.255043 7.35343 -0.29496 8.73343 0.175041 9.97343C0.535042 10.9234 1.43504 11.5834 2.40504 11.8634C3.37505 12.1534 4.40504 12.1134 5.41505 12.0234C7.59505 11.8134 9.82504 11.2934 11.605 10.0134C15.195 7.43342 15.455 1.77343 10.735 0.183425C7.25504 -0.976574 2.57504 3.64343 0.95504 6.23343L0.95504 6.23343Z"
          transform="translate(81.16496 1.0065727)"
        />
        <path
          d="M0.634155 4.06522C0.314148 4.57521 0.0441589 5.13522 0.00415039 5.73521C-0.0358582 6.33521 0.214142 6.97522 0.734161 7.28521C1.08417 7.49521 1.50415 7.52522 1.91415 7.52522C4.80417 7.53521 7.55417 6.27522 9.96414 4.69521C10.6342 4.25521 11.3441 3.69521 11.4541 2.90521C11.8041 0.405212 7.86414 -0.294788 6.15414 0.105213C3.89417 0.635216 1.85416 2.10522 0.634155 4.06522L0.634155 4.06522Z"
          transform="translate(317.92584 17.934784)"
        />
        <path
          d="M0.00765991 2.9814C0.0676575 3.5114 0.667664 3.7714 1.18765 3.8914C2.71765 4.2314 4.93765 4.3214 6.34766 3.4814C7.44766 2.8214 7.82767 1.2914 6.71765 0.401402C5.22766 -0.778599 -0.232361 0.811401 0.00765991 2.9814L0.00765991 2.9814Z"
          transform="translate(338.25235 16.118599)"
        />
      </g>
    </svg>
  </Chakra.Box>
)

export const query = graphql`
  query {
    mdx(slug: { eq: "idtga/_details" }) {
      frontmatter {
        changelog
      }
      body
    }
  }
`

export default Idtga
