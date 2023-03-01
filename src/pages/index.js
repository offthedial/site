import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout, { DiscordSvg } from "src/components/Layout"
import Waves from "src/components/Waves"
import hero from "src/static/hero.webp"
import useTourney from "src/app/useTourney"
import logo from "src/static/logo.svg"
import slateBg from "src/static/slate-bg.svg"
import { AnimationOnScroll } from "react-animation-on-scroll"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "src/app"

const Index = () => (
  <Layout>
    <div className="bg-slate-200 dark:bg-slate-900">
      <div className="flex flex-col items-stretch">
        <div className="px-6 pt-12 sm:px-12">
          <Hero />
        </div>
        <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center sm:px-12">
          <div className="rounded-full pb-6">
            <img className="h-28 rounded-full" src={logo} alt="Off the Dial" />
          </div>
          <h2 className="pb-1 text-3xl font-medium sm:text-4xl">
            What is Off the Dial?
          </h2>
          <p className="text-xl text-slate-700 dark:text-slate-300 sm:text-2xl">
            Off the Dial is a unique tournament organisation for Splatoon 3,
            dedicated to providing fresh tournament opportunities for free
            agents!
          </p>
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <Waves
          fill={[
            "text-slate-100 dark:text-slate-850",
            "text-slate-50 dark:text-slate-800",
          ]}
        />
      </div>
    </div>
    <div className="bg-slate-50 px-6 py-12 dark:bg-slate-800 sm:px-12">
      <AnimationOnScroll
        animateOnce={true}
        animateIn="animate-in fade-in slide-in-from-bottom-8"
        duration={0.5}
      >
        <div className="mx-auto mb-16 flex w-full max-w-5xl flex-col items-center justify-between gap-12 md:mb-0 md:flex-row">
          <div className="flex flex-1 flex-col items-stretch md:max-w-md">
            <h2 className="text-3xl font-medium sm:text-4xl">Recent Posts</h2>
            <p className="pt-2 pb-4 text-xl text-slate-700 dark:text-slate-300 sm:text-2xl">
              Stay up to date with the latest blog posts, news, and updates for
              everything Off the Dial!
            </p>
            <Link to="/posts">
              <button className="rounded-lg bg-slate-200 py-2.5 px-5 text-xl font-semibold hover:bg-slate-300 dark:bg-slate-700 hover:dark:bg-slate-600">
                See All Posts
              </button>
            </Link>
          </div>
          <div className="flex-1 md:max-w-md">
            <RecentPost />
          </div>
        </div>
      </AnimationOnScroll>
    </div>
    <div
      className="flex flex-col items-center bg-cover bg-center px-6 py-12 text-slate-100 sm:px-12 lg:p-16"
      style={{ backgroundImage: `url(${slateBg})` }}
    >
      <div className="flex max-w-6xl flex-col items-start md:flex-row md:items-center">
        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate-in fade-in slide-in-from-bottom-16 spin-in-[-2deg]"
          duration={0.5}
          delay={1}
        >
          <div className="h-32 -translate-y-32 pr-12 md:-translate-y-20 lg:pr-16">
            <StaticImage
              src="../static/community.webp"
              alt=""
              placeholder="none"
              className="w-52 flex-shrink-0 md:w-80"
            />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate-in fade-in slide-in-from-bottom-8"
          duration={0.5}
        >
          <h2 className="text-3xl font-medium sm:text-4xl">Our Community</h2>
          <p className="pt-3 pb-6 text-xl text-otd-slate-50 sm:text-2xl md:pb-12">
            Come hang out! Talk to your fellow players and participants, and
            share your kirby memes with us. We post announcements and other news
            regularly.
          </p>
          <button className="rounded-lg bg-[#446C72] py-2.5 px-5 text-xl font-semibold ring-2 ring-[#2d494f]/75 hover:bg-[#5865F2]">
            <div className="flex items-center gap-4">
              <DiscordSvg className="h-4" />
              <p>Join the Server</p>
            </div>
          </button>
        </AnimationOnScroll>
      </div>
    </div>
    <div className="px-6 py-12 sm:px-12 lg:p-24">
      <AnimationOnScroll
        animateOnce={true}
        animateIn="animate-in fade-in slide-in-from-bottom-8"
        duration={0.5}
      >
        <div className="mx-auto flex max-w-5xl flex-col sm:flex-row sm:items-center sm:gap-12 lg:gap-24">
          <div className="py-2">
            <h2 className="text-3xl font-medium sm:text-4xl">Ready to play?</h2>
            <p className="pt-2 text-xl text-slate-700 dark:text-slate-300 sm:text-2xl">
              Sign up with your Discord account, set up your profile, and get
              ready for your the next tournament!
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link to="/profile">
              <button className="rounded-lg bg-slate-800 py-2.5 px-16 text-xl font-semibold text-slate-100 hover:bg-slate-700 dark:bg-slate-200 dark:text-slate-800 hover:dark:bg-slate-300">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  </Layout>
)

const Hero = () => {
  let props = {
    title: (
      <>
        Welcome to <span className="whitespace-nowrap">Off the Dial!</span>
      </>
    ),
    desc: (
      <>
        The current season has ended, but keep your eyes peeled for the next
        one!
      </>
    ),
  }
  const [user] = useAuthState(auth)
  const tourney = useTourney()
  if (tourney.data?.hasEnded() === false) {
    props = {
      title: tourney.data.smashgg.name,
      desc: tourney.data?.whitelist ? (
        <>
          This is an invite-only tournament, Make sure to sign up if you've been
          invited!
        </>
      ) : (
        <>
          Signups are currently open for this season! Make sure to register
          before it's too late!
        </>
      ),
    }
  }
  return (
    <div
      className="mx-auto flex w-full max-w-6xl items-center rounded-xl bg-cover bg-left-top p-6 text-center text-slate-100 sm:p-12 sm:text-left lg:gap-12 lg:bg-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="flex max-w-lg flex-1 flex-col items-stretch">
        <h2 className="text-3xl font-medium sm:text-4xl">{props.title}</h2>
        <p className="pt-2 pb-12 text-xl sm:text-2xl">{props.desc}</p>
        <div className="flex flex-wrap justify-center gap-4 self-center text-xl font-semibold sm:self-start">
          <Link to="/signup">
            <button
              className="flex-shrink-0 rounded-lg bg-slate-100 py-2.5 px-5 text-slate-800 hover:enabled:bg-slate-200 disabled:opacity-60"
              disabled={
                tourney.data?.hasEnded() ||
                (tourney.data && !tourney.data.isInvited(user?.uid))
              }
            >
              Signup Now
            </button>
          </Link>
          <Link to={tourney.data?.type || "idtga"}>
            <button className="flex-shrink-0 rounded-lg py-2.5 px-5 text-slate-100 hover:bg-slate-100/[.15]">
              Learn More
            </button>
          </Link>
        </div>
      </div>
      <div className="lg:flex-1" />
    </div>
  )
}

const RecentPost = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { internal: { contentFilePath: { glob: "**/pages/posts/*" } } }
        sort: { frontmatter: { date: DESC } }
        limit: 1
      ) {
        totalCount
        nodes {
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
          excerpt(pruneLength: 160)
        }
      }
    }
  `)
  const node = data.allMdx.nodes[0]
  return (
    <Link to={"/posts/" + node.parent.name} key={node.parent.name}>
      <div className="rounded-lg border-2 border-slate-100 p-8 text-lg transition-all ease-out hover:bg-slate-100 hover:shadow-xl dark:border-slate-850 dark:hover:bg-slate-850 dark:hover:shadow-2xl">
        <h3 className="text-2xl font-medium">{node.frontmatter.title}</h3>
        <div className="mb-6 flex flex-wrap items-baseline text-lg text-slate-600 dark:text-slate-400">
          <p>{node.frontmatter.author}</p>
          <span className="mx-2.5">·</span>
          <p>{node.frontmatter.date}</p>
        </div>
        <article className="prose prose-slate dark:prose-invert">
          <blockquote className="font-medium text-slate-700 dark:text-slate-300">
            {node.excerpt}
          </blockquote>
        </article>
      </div>
    </Link>
  )
}

export default Index
