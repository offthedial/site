import React from "react"

import * as Chakra from "@chakra-ui/react"
import { graphql, Link } from "gatsby"
import Layout from "src/components/Layout"
import slateblobs from "src/static/slateblobs.svg"
import community from "src/static/community.png"

const Index = ({ data }) => (
  <Layout>
    <Chakra.Box layerStyle="tint" px={[8, null, null, 24]}>
      <Chakra.Box pt={14} maxWidth="container.xl" mx="auto">
        <Hero />
      </Chakra.Box>
      <Chakra.Box py={28} maxWidth="container.xl" mx="auto">
        <About />
      </Chakra.Box>
    </Chakra.Box>
    <Chakra.Box layerStyle="tint">
      <Waves />
    </Chakra.Box>
    <Chakra.Box
      py={28}
      maxWidth="container.xl"
      mx="auto"
      px={[8, null, null, 24]}
    >
      <Posts>
        <PostCard node={data.allMdx.edges[0].node} />
      </Posts>
    </Chakra.Box>
    <Chakra.Box
      px={[8, null, null, 24]}
      backgroundSize="cover"
      backgroundPosition="center"
      style={{ backgroundImage: `url(${slateblobs})` }}
    >
      <Community />
    </Chakra.Box>
    <Chakra.Box
      py={28}
      maxWidth="container.xl"
      mx="auto"
      px={[8, null, null, 24]}
    >
      <MakeAccount />
    </Chakra.Box>
  </Layout>
)

const Hero = () => (
  <Chakra.Box
    minHeight="xs"
    rounded="xl"
    bgColor="otd.slate.800"
    display="flex"
    justifyContent="center"
    alignItems="stretch"
    p={8}
  >
    <Chakra.Box
      display="flex"
      minHeight="100%"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      textAlign="center"
    >
      <Chakra.Text fontSize={["3xl", "4xl"]} fontWeight="bold" color="white">
        Susver my Beloved
      </Chakra.Text>
      <Chakra.Text fontSize="xl" color="white">
        Showing in OTD theatres April 1st, 2022
      </Chakra.Text>
      <Chakra.Box
        pt={20}
        display="flex"
        gridGap={4}
        flexWrap="wrap"
        justifyContent="center"
      >
        <Chakra.Button
          size="lg"
          colorScheme="whiteAlpha"
          backgroundColor="white"
          _hover={{ backgroundColor: "whiteAlpha.900" }}
          _active={{ backgroundColor: "whiteAlpha.800" }}
          textColor="black"
        >
          Signup Now!
        </Chakra.Button>
        <Chakra.Button
          size="lg"
          colorScheme="whiteAlpha"
          textColor="black"
          textColor="white"
          borderColor="white"
          variant="outline"
        >
          More Info
        </Chakra.Button>
      </Chakra.Box>
    </Chakra.Box>
  </Chakra.Box>
)

const About = () => (
  <Chakra.Box
    display="flex"
    minHeight="100%"
    alignItems="center"
    justifyContent="center"
    flexDir="column"
  >
    <Chakra.Box pb={6}>
      <Chakra.Box h={28}>
        <Chakra.Image
          maxH="full"
          rounded="full"
          src="https://assets.otd.ink/logo.svg"
        />
      </Chakra.Box>
    </Chakra.Box>
    <Chakra.Text fontSize={["3xl", "4xl"]} textAlign="center" fontWeight="bold">
      What is Off the Dial?
    </Chakra.Text>
    <Chakra.Text fontSize={["xl", "2xl"]} textAlign="center">
      We are a team of enthusiastic organisers, running a unique tournament
      organisation for Splatoon 2, dedicated to providing fresh tournament
      opportunities for free agents!
    </Chakra.Text>
  </Chakra.Box>
)

const Posts = ({ children }) => (
  <Chakra.Box
    display="flex"
    alignItems="center"
    flexDir={["column", null, "row"]}
    gridGap={[8, null, null, 24]}
  >
    <Chakra.Box
      flexBasis={0}
      flexGrow={1}
      display="flex"
      flexDir="column"
      gridGap={4}
      alignItems="flex-start"
    >
      <Chakra.Text
        fontSize={["3xl", "4xl"]}
        fontWeight="bold"
        lineHeight="none"
      >
        Recent Posts
      </Chakra.Text>
      <Chakra.Text fontSize={["xl", "2xl"]}>
        Stay up to date with the latest blog posts, news, and updates on
        everything Off the Dial!
      </Chakra.Text>
      <Link to="/posts">
        <Chakra.Button size="lg">See All Posts</Chakra.Button>
      </Link>
    </Chakra.Box>
    <Chakra.Box flexBasis={0} flexGrow={1}>
      {children}
    </Chakra.Box>
  </Chakra.Box>
)

const Community = () => (
  <Chakra.Box
    maxWidth="container.xl"
    mx="auto"
    py={20}
    display="flex"
    flexDir={["column", null, "row"]}
    alignItems={["flex-start", null, "center"]}
    gridGap={[0, null, 8, 24]}
  >
    <Chakra.Box
      height={20}
      display="flex"
      flexDir="column"
      transform={["translateY(-5rem)", null, "translateY(2.5rem)"]}
      justifyContent="center"
      flexShrink={0}
    >
      <Chakra.Image
        height={[48, null, 96]}
        filter="drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04)) drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1))"
        src={community}
      />
    </Chakra.Box>
    <Chakra.Box
      display="flex"
      flexDir="column"
      gridGap={3}
      alignItems="flex-start"
    >
      <Chakra.Text
        color="white"
        fontSize={["3xl", "4xl"]}
        fontWeight="bold"
        lineHeight="none"
      >
        Join our Community
      </Chakra.Text>
      <Chakra.Text color="white" fontSize={["xl", "2xl"]}>
        Here's what we have to say! Listen to us or we'll break your kneecaps!
      </Chakra.Text>
      <Chakra.Box pt={[2, null, null, 8]}>
        <Link to="/posts">
          <Chakra.LightMode>
            <Chakra.Button color="black" leftIcon={<DiscordIcon />} size="lg">
              <Chakra.Box display="flex">
                <Chakra.Box pl={1.5} />
                <Chakra.Text>Join the Server</Chakra.Text>
              </Chakra.Box>
            </Chakra.Button>
          </Chakra.LightMode>
        </Link>
      </Chakra.Box>
    </Chakra.Box>
  </Chakra.Box>
)

const MakeAccount = () => (
  <Chakra.Box
    display="flex"
    alignItems={["flex-start", null, "center"]}
    flexDir={["column", null, "row"]}
    gridGap={[4, 8, null, 24]}
  >
    <Chakra.Box
      display="flex"
      flexDir="column"
      gridGap={4}
      alignItems="flex-start"
    >
      <Chakra.Text
        fontSize={["3xl", "4xl"]}
        fontWeight="bold"
        lineHeight="none"
      >
        Ready to play?
      </Chakra.Text>
      <Chakra.Text fontSize={["xl", "2xl"]}>
        Sign up with your Discord account to set up your profile so you can be
        ready for the next tournament.
      </Chakra.Text>
    </Chakra.Box>
    <Chakra.Box display="flex" justifyContent="flex-end">
      <Link to="/posts">
        <InvertedButton px={[6, 20]} py={1} size="lg">
          Sign Up
        </InvertedButton>
      </Link>
    </Chakra.Box>
  </Chakra.Box>
)

const PostCard = ({ node }) => (
  <Link to={`posts/${node.parent.name}`}>
    <Chakra.Box
      borderRadius="lg"
      p={8}
      transition="all 250ms"
      layerStyle="lifted"
      _hover={{ layerStyle: "tint" }}
    >
      <Chakra.Box fontSize="lg">
        <Chakra.Text fontSize={["xl", "2xl"]} fontWeight="bold">
          {node.frontmatter.title}
        </Chakra.Text>
        <Chakra.Text textStyle="mute" mb={6}>
          {node.frontmatter.author} · {node.frontmatter.date}
        </Chakra.Text>
      </Chakra.Box>
      <Chakra.Text textStyle="semimute" as="blockquote" fontStyle="italic">
        {node.excerpt}
      </Chakra.Text>
    </Chakra.Box>
  </Link>
)

const InvertedButton = ({ children, ...props }) => {
  const { colorMode } = Chakra.useColorMode()
  return (
    <Chakra.Button
      {...props}
      backgroundColor={colorMode === "light" ? "gray.800" : "white"}
      _hover={{
        backgroundColor: colorMode === "light" ? "gray.900" : "gray.50",
      }}
      _active={{
        backgroundColor: colorMode === "light" ? "black" : "gray.100",
      }}
      color={colorMode === "light" ? "white" : "gray.800"}
    >
      {children}
    </Chakra.Button>
  )
}

const Waves = () => {
  const subfill = Chakra.useColorModeValue("#FBFCFD", "#191C27")
  const mainfill = Chakra.useColorModeValue("#FFFFFF", "#1A202C")
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 900 50"
      version="1.1"
    >
      <path
        d="M0 0.757489L8.30002 2.42396C16.7 4.0147 33.3001 7.34764 50.0001 13.4833C66.7002 19.6947 83.3002 28.7846 100 32.9508C116.7 37.117 133.3 36.3595 150 30.5269C166.7 24.7699 183.3 13.862 200 8.86263C216.701 3.78745 233.301 4.54494 250.001 10.7563C266.701 16.892 283.301 28.5573 300.001 29.3906C316.701 30.2995 333.301 20.4522 350.001 17.5737C366.701 14.6195 383.301 18.71 400.001 22.1944C416.701 25.7546 425.818 32.9499 444.436 32.9499C463.055 32.9498 468.315 27 484.446 27C500.576 26.9999 514.229 43.9998 531.456 43.9998C562.466 43.9997 583.301 17.195 600.001 14.5438C616.702 11.8926 633.301 17.6495 650.002 23.3306C666.702 29.0118 683.301 34.6173 700.001 31.2085C716.701 27.7998 733.302 16.4371 750.002 14.5434C766.702 12.6497 783.302 21.8153 800.002 23.3303C816.702 24.8453 833.302 10.3761 850.002 10.7548C866.702 11.1336 900.002 14.5431 900.002 14.5431L900.002 0L891.702 0C883.302 0 866.702 0 850.002 0C833.302 0 816.702 0 800.002 0C783.302 0 766.702 0 750.002 0C733.302 0 716.701 0 700.001 0C683.301 0 666.702 0 650.002 0C633.301 0 616.702 0 600.001 0C583.301 0 566.702 0 550.001 0C533.301 0 516.701 0 500.001 0C483.301 0 466.701 0 450.001 0C433.301 0 416.701 0 400.001 0C383.301 0 366.701 0 350.001 0C333.301 0 316.701 0 300.001 0C283.301 0 266.701 0 250.001 0C233.301 0 216.701 0 200 0C183.3 0 166.7 0 150 0C133.3 0 116.7 0 100 0C83.3002 0 66.7002 0 50.0001 0C33.3001 0 16.7 0 8.30002 0L0 0L0 0.757489L0 0.757489Z"
        transform="matrix(-1 -2.5351817E-06 2.5351817E-06 -1 900.00476 44.00208)"
        fill={subfill}
        fillRule="evenodd"
        stroke="none"
      />
      <path
        d="M6.10352e-05 21C6.10352e-05 21 10.3124 24.4723 35.5 24.4723C60.6876 24.4722 111.069 8.50087 137 8.5008C162.931 8.50074 176.781 20.0224 200 20.0224C223.22 20.0223 233.301 11.4262 250 11.6284C266.701 11.8306 283.301 12.4373 300.001 16.9876C316.701 21.5378 333.301 30.0316 350.001 31.6494C366.701 33.3684 383.301 28.3126 400.001 26.2903C416.701 24.2679 441.8 25.2791 458.5 23.5601C475.2 21.9423 483.301 17.4931 500.001 14.6619C516.701 11.8306 533.301 10.415 550.001 12.6396C566.701 14.8641 583.301 23.3574 600.001 26.2898C616.701 29.1211 633.301 29.1211 650.001 28.3121C666.702 27.4021 683.301 22.9534 700.001 20.0211C716.702 17.1898 733.302 13.1451 750.002 11.4262C766.702 9.80829 783.302 10.415 800.001 13.4485C816.701 16.482 848.929 37.2367 900.001 28.8433C900.001 19.1519 900.001 0 900.001 0L891.702 0C883.302 0 866.702 0 850.002 0C833.302 0 816.701 0 800.001 0C783.302 0 766.702 0 750.002 0C733.302 0 716.702 0 700.001 0C683.301 0 666.702 0 650.001 0C633.301 0 616.701 0 600.001 0C583.301 0 566.701 0 550.001 0C533.301 0 516.701 0 500.001 0C483.301 0 466.701 0 450.001 0C433.301 0 416.701 0 400.001 0C383.301 0 366.701 0 350.001 0C333.301 0 316.701 0 300.001 0C283.301 0 266.701 0 250 0C233.301 0 216.701 0 200 0C183.3 0 166.7 0 150 0C133.3 0 116.7 0 100 0C83.3002 0 66.7002 0 50.0001 0C33.3001 0 16.7 0 8.30001 0L0 0L6.10352e-05 21Z"
        transform="matrix(-1 -2.5351817E-06 2.5351817E-06 -1 900.00134 50.00099)"
        fill={mainfill}
        fillRule="evenodd"
        stroke="none"
      />
    </svg>
  )
}

const DiscordIcon = () => (
  <Chakra.Icon viewBox="0 0 71 65">
    <path
      fill="currentColor"
      d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
    />
  </Chakra.Icon>
)

export const query = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/(pages)/(posts)/" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            author
          }
          parent {
            ... on File {
              name
            }
          }
          excerpt(pruneLength: 200)
        }
      }
    }
  }
`

export default Index
