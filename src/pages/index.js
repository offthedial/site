import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout, { DiscordSvg } from "src/components/Layout"
import hero from "src/static/hero.png"
import useTourney from "src/app/useTourney"
import logo from "src/static/logo.svg"
import slateBg from "src/static/slate-bg.svg"
import { AnimationOnScroll } from "react-animation-on-scroll"

const Index = () => (
  <Layout>
    <div className="bg-slate-200 dark:bg-slate-900">
      <div className="flex flex-col items-stretch px-12 pt-12">
        <div className="mx-auto w-full max-w-7xl">
          <Hero />
        </div>
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center py-24 text-center">
          <div className="rounded-full pb-6">
            <img className="h-28 rounded-full" src={logo} />
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
      <Waves className="translate-y-[1px]" />
    </div>
    <div className="bg-slate-50 p-12 dark:bg-slate-800 lg:p-24">
      <AnimationOnScroll
        animateOnce={true}
        animateIn="animate-in fade-in slide-in-from-bottom-8"
        duration={0.5}
      >
        <div className="mx-auto mb-16 flex w-full max-w-5xl flex-col items-center justify-between gap-12 md:mb-0 md:flex-row lg:gap-24">
          <div className="flex flex-1 flex-col items-stretch md:max-w-md">
            <h2 className="text-3xl font-medium sm:text-4xl">Recent Posts</h2>
            <p className="pt-2 pb-4 text-2xl text-slate-700 dark:text-slate-300">
              Stay up to date with the latest blog posts, news, and updates on
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
      className="flex flex-col items-center bg-cover bg-center p-12 text-slate-100 lg:p-16"
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
              src="../static/community.png"
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
          <h2 className="text-3xl font-medium sm:text-4xl">
            Join our Community
          </h2>
          <p className="pt-3 pb-6 text-2xl text-otd-slate-50 md:pb-12">
            Come hang out! Talk to your fellow players and participants, and
            share your kirby memes with us. We post announcements and other news
            regularly.
          </p>
          <button className="rounded-lg bg-slate-200 py-2.5 px-5 text-xl font-semibold text-slate-800 hover:bg-slate-300">
            <div className="flex items-center gap-4">
              <DiscordSvg className="h-4" />
              <p>Join the Server</p>
            </div>
          </button>
        </AnimationOnScroll>
      </div>
    </div>
    <div className="p-12 lg:p-24">
      <AnimationOnScroll
        animateOnce={true}
        animateIn="animate-in fade-in slide-in-from-bottom-8"
        duration={0.5}
      >
        <div className="mx-auto flex max-w-5xl flex-col sm:flex-row sm:items-center sm:gap-12 lg:gap-24">
          <div>
            <h2 className="text-3xl font-medium sm:text-4xl">Ready to play?</h2>
            <p className="pt-2 pb-4 text-2xl text-slate-700 dark:text-slate-300">
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
    title: "Welcome to Off the Dial!",
    desc: (
      <>
        The current season has ended, but keep your eyes peeled for the next
        one!
      </>
    ),
  }
  const tourney = useTourney()
  if (tourney.data?.hasEnded() === false) {
    props = {
      title: tourney.data.smashgg.name,
      desc: (
        <>
          Signups are currently open for this season's IDTGA! Our flagship,{" "}
          <i>solo registration</i> tournament, focused on creating balanced
          teams, and being accessible to everyone.
        </>
      ),
    }
  }
  return (
    <div
      className="flex flex-col items-center rounded-xl bg-cover bg-center p-12 text-center text-slate-100"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <h2 className="pb-2 text-3xl font-medium sm:text-4xl">{props.title}</h2>
      <p className="max-w-4xl text-xl">{props.desc}</p>
      {/* {tourney.data?.hasEnded() === false && ( */}
      <div className="flex flex-wrap justify-center gap-4 pt-12 text-xl font-semibold">
        <Link to="/signup">
          <button
            className="flex-shrink-0 rounded-lg bg-slate-100 py-2.5 px-5 text-slate-800 hover:enabled:bg-slate-200 disabled:opacity-60"
            disabled={tourney.data?.hasEnded()}
          >
            Signup Now!
          </button>
        </Link>
        <Link to={`/${tourney.data?.type}`}>
          <button className="flex-shrink-0 rounded-lg py-2.5 px-5 text-slate-100 hover:bg-slate-100/[.15]">
            Learn More
          </button>
        </Link>
      </div>
      {/* )} */}
    </div>
  )
}

const Waves = ({ className }) => {
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 900 50"
      version="1.1"
      className={className}
    >
      <path
        d="M0 0.757489L8.30002 2.42396C16.7 4.0147 33.3001 7.34764 50.0001 13.4833C66.7002 19.6947 83.3002 28.7846 100 32.9508C116.7 37.117 133.3 36.3595 150 30.5269C166.7 24.7699 183.3 13.862 200 8.86263C216.701 3.78745 233.301 4.54494 250.001 10.7563C266.701 16.892 283.301 28.5573 300.001 29.3906C316.701 30.2995 333.301 20.4522 350.001 17.5737C366.701 14.6195 383.301 18.71 400.001 22.1944C416.701 25.7546 425.818 32.9499 444.436 32.9499C463.055 32.9498 468.315 27 484.446 27C500.576 26.9999 514.229 43.9998 531.456 43.9998C562.466 43.9997 583.301 17.195 600.001 14.5438C616.702 11.8926 633.301 17.6495 650.002 23.3306C666.702 29.0118 683.301 34.6173 700.001 31.2085C716.701 27.7998 733.302 16.4371 750.002 14.5434C766.702 12.6497 783.302 21.8153 800.002 23.3303C816.702 24.8453 833.302 10.3761 850.002 10.7548C866.702 11.1336 900.002 14.5431 900.002 14.5431L900.002 0L891.702 0C883.302 0 866.702 0 850.002 0C833.302 0 816.702 0 800.002 0C783.302 0 766.702 0 750.002 0C733.302 0 716.701 0 700.001 0C683.301 0 666.702 0 650.002 0C633.301 0 616.702 0 600.001 0C583.301 0 566.702 0 550.001 0C533.301 0 516.701 0 500.001 0C483.301 0 466.701 0 450.001 0C433.301 0 416.701 0 400.001 0C383.301 0 366.701 0 350.001 0C333.301 0 316.701 0 300.001 0C283.301 0 266.701 0 250.001 0C233.301 0 216.701 0 200 0C183.3 0 166.7 0 150 0C133.3 0 116.7 0 100 0C83.3002 0 66.7002 0 50.0001 0C33.3001 0 16.7 0 8.30002 0L0 0L0 0.757489L0 0.757489Z"
        transform="matrix(-1 -2.5351817E-06 2.5351817E-06 -1 900.00476 44.00208)"
        fill="currentColor"
        className="text-slate-100 dark:text-slate-850"
        fillRule="evenodd"
        stroke="none"
      />
      <path
        d="M6.10352e-05 21C6.10352e-05 21 10.3124 24.4723 35.5 24.4723C60.6876 24.4722 111.069 8.50087 137 8.5008C162.931 8.50074 176.781 20.0224 200 20.0224C223.22 20.0223 233.301 11.4262 250 11.6284C266.701 11.8306 283.301 12.4373 300.001 16.9876C316.701 21.5378 333.301 30.0316 350.001 31.6494C366.701 33.3684 383.301 28.3126 400.001 26.2903C416.701 24.2679 441.8 25.2791 458.5 23.5601C475.2 21.9423 483.301 17.4931 500.001 14.6619C516.701 11.8306 533.301 10.415 550.001 12.6396C566.701 14.8641 583.301 23.3574 600.001 26.2898C616.701 29.1211 633.301 29.1211 650.001 28.3121C666.702 27.4021 683.301 22.9534 700.001 20.0211C716.702 17.1898 733.302 13.1451 750.002 11.4262C766.702 9.80829 783.302 10.415 800.001 13.4485C816.701 16.482 848.929 37.2367 900.001 28.8433C900.001 19.1519 900.001 0 900.001 0L891.702 0C883.302 0 866.702 0 850.002 0C833.302 0 816.701 0 800.001 0C783.302 0 766.702 0 750.002 0C733.302 0 716.702 0 700.001 0C683.301 0 666.702 0 650.001 0C633.301 0 616.701 0 600.001 0C583.301 0 566.701 0 550.001 0C533.301 0 516.701 0 500.001 0C483.301 0 466.701 0 450.001 0C433.301 0 416.701 0 400.001 0C383.301 0 366.701 0 350.001 0C333.301 0 316.701 0 300.001 0C283.301 0 266.701 0 250 0C233.301 0 216.701 0 200 0C183.3 0 166.7 0 150 0C133.3 0 116.7 0 100 0C83.3002 0 66.7002 0 50.0001 0C33.3001 0 16.7 0 8.30001 0L0 0L6.10352e-05 21Z"
        transform="matrix(-1 -2.5351817E-06 2.5351817E-06 -1 900.00134 50.00099)"
        fill="currentColor"
        className="text-slate-50 dark:text-slate-800"
        fillRule="evenodd"
        stroke="none"
      />
    </svg>
  )
}

const RecentPost = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: {
          internal: { contentFilePath: { regex: "/(pages)/(posts)/" } }
        }
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
