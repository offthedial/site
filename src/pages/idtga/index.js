import React, { useState } from "react"
import clsx from "clsx"
import { useStaticQuery, graphql, Link } from "gatsby"
import { format, formatDuration, intervalToDuration } from "date-fns"
import * as Collapsible from "@radix-ui/react-collapsible"
import useTourney from "src/app/useTourney"
import Layout from "src/components/Layout"
import logo from "src/static/idtga.svg"
import skater from "src/static/skater.webp"
import promoInvite from "src/static/promo_invite.webp"
import promoBlaster from "src/static/promo_blaster.webp"
import promoFriends from "src/static/promo_friends.webp"
import InfoMdx from "./info.mdx"
import { AnimationOnScroll } from "react-animation-on-scroll"

const Idtga = () => (
  <Layout helmet={{ title: "IDTGA" }}>
    <div className="bg-otd-slate">
      <div className="mx-3 border-t-2 border-otd-slate-300" />
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between sm:gap-10 sm:p-10 lg:flex-row">
        <div className="flex w-fit flex-col items-center p-8 sm:p-0 lg:items-stretch">
          <img src={logo} alt="" className="mb-6 h-28 lg:self-start" />
          <p className="text-center text-lg font-medium uppercase tracking-wider text-otd-slate-100 lg:text-left">
            This Season Of
          </p>
          <h1 className="text-center text-2xl font-medium text-slate-50 sm:text-3xl lg:text-left">
            It's Dangerous to go Alone
          </h1>
        </div>
        <TourneyCard />
      </div>
    </div>
    <div className="relative flex flex-col md:flex-row">
      <div className="ml-auto max-w-[calc(72rem+((100vw-72rem)/2))] pt-16 pl-5">
        <img src={skater} alt="" />
      </div>
      <div className="mx-auto flex max-w-6xl md:absolute md:inset-0">
        <div className="md:flex-1" />
        <div className="flex-[2_2_0%]">
          <div className="flex flex-col gap-1.5 p-12 md:p-16">
            <h2 className="text-xl font-medium uppercase tracking-wider text-otd-slate-500 dark:text-otd-slate-300">
              About the tournament
            </h2>
            <p className="text-2xl font-semibold sm:text-3xl">
              Our flagship <i>solo registration</i> tournament.
            </p>
            <p className="text-2xl text-slate-600 dark:text-slate-300 sm:text-3xl">
              Focused on creating balanced teams, and being accessible to
              everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="my-12 flex flex-col items-center">
      <Blurb
        heading="No team, no problem"
        desc="Whether you are brand new to the scene, or a skilled free agent. We make it always accessible to gain competitive experience."
        src={promoInvite}
      />
      <Blurb
        heading="Put yourself out there"
        desc="Test your chemistry with different folks, and show the scene what you're made of. You might just find your new teammates."
        src={promoBlaster}
        className="sm:!flex-row-reverse"
      />
      <Blurb
        heading="Have some fun"
        desc="Got an open weekend? Meet new people, make new friends, and just have a really great time."
        src={promoFriends}
      />
    </div>
  </Layout>
)

const TourneyCard = () => {
  const tourney = useTourney()
  const duration = date =>
    formatDuration(
      intervalToDuration({
        start: new Date(),
        end: date,
      })
    )
      .split(" ")
      .slice(0, 2)
      .join(" ")

  return (
    <div className="bg-default flex w-full flex-col items-stretch rounded-t-xl sm:max-w-lg sm:rounded-xl sm:shadow-xl">
      <div className="rounded-t-xl bg-slate-200 px-8 py-8 dark:bg-slate-800">
        <h2 className="text-center text-xl font-semibold">
          {tourney.data ? (
            tourney.data.smashgg.name
          ) : (
            <div className="mx-auto h-7 w-96 animate-pulse rounded-full bg-slate-300 dark:bg-slate-700" />
          )}
        </h2>
      </div>
      <div className="mx-auto flex w-full max-w-lg flex-col items-stretch gap-8 px-8 py-8">
        {tourney.data && <TourneyStatus data={tourney.data} />}
        <div className="flex flex-col items-stretch gap-2">
          <CardInfo
            icon={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
              />
            }
            left="Tournament starts:"
          >
            <div className={tourney.data?.hasEnded() && "line-through"}>
              {tourney.data ? (
                format(tourney.data.startDate, "MMM d, h:mm aa")
              ) : (
                <div className="mx-auto h-6 w-32 animate-pulse rounded-full bg-slate-300 dark:bg-slate-700" />
              )}
            </div>
          </CardInfo>
          <CardInfo
            icon={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            }
            left="Registration closes:"
          >
            <div className={tourney.data?.hasClosed() && "line-through"}>
              {tourney.data ? (
                tourney.data?.hasClosed() ? (
                  `${duration(tourney.data?.closeDate)} ago`
                ) : (
                  `in ${duration(tourney.data?.closeDate)}`
                )
              ) : (
                <div className="mx-auto h-6 w-32 animate-pulse rounded-full bg-slate-300 dark:bg-slate-700" />
              )}
            </div>
          </CardInfo>
        </div>
        <Details />
        <div className="flex flex-wrap items-center justify-between gap-3 sm:rounded-b-xl">
          <Link to="/signup" className="rounded-lg">
            <button
              disabled={!(tourney.data?.hasEnded() === false)}
              className="rounded-lg bg-otd-cyan-200 py-2 px-6 text-lg font-medium hover:enabled:bg-otd-cyan-300 disabled:opacity-50 disabled:grayscale-[50%] dark:bg-otd-cyan-700 hover:enabled:dark:bg-otd-cyan-600"
            >
              {tourney.data?.hasClosed() && !tourney.data?.hasEnded()
                ? "Signup as a sub!"
                : "Signup!"}
            </button>
          </Link>
          <Link to="rules">
            <button className="rounded-lg bg-slate-200 py-2 px-6 text-lg font-medium hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700">
              Rules
            </button>
          </Link>
          <p className="text-sm text-slate-500">
            Times are listed in your timezone, see rules for format and
            schedule.
          </p>
        </div>
      </div>
      <div className="h-2 w-full rounded-b-xl border-b-2 border-slate-300 dark:border-slate-600 sm:hidden" />
    </div>
  )
}

const TourneyStatus = ({ data }) => {
  let props = {
    color:
      "bg-green-600/20 text-green-700 dark:bg-green-400/20 dark:text-green-400",
    underline:
      "decoration-green-700/50 dark:decoration-green-400/50 hover:decoration-green-700 hover:dark:decoration-green-400",
    message: "Registration is currently open!",
  }
  if (data.hasClosed()) {
    props = {
      color:
        "bg-lime-600/20 text-lime-700 dark:bg-lime-400/20 dark:text-lime-400",
      underline:
        "decoration-lime-700/50 dark:decoration-lime-400/50 hover:decoration-lime-700 hover:dark:decoration-lime-400",
      message: "Signups have closed, but you can still register as a sub!",
    }
  }
  if (data.hasEnded()) {
    props = {
      color: "bg-red-600/20 text-red-700 dark:bg-red-400/20 dark:text-red-400",
      underline:
        "decoration-red-700/5k0 dark:decoration-red-400/50 hover:decoration-red-700 hover:dark:decoration-red-400",
      message: "This season has concluded, thanks for playing!",
    }
  }

  return (
    <div
      className={clsx(
        "flex items-center gap-4 rounded-lg p-4 font-medium",
        props.color
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6 flex-shrink-0"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
        />
      </svg>
      {props.message}
    </div>
  )
}

const CardInfo = ({ icon, left, className, children }) => (
  <div
    className={clsx(
      "flex flex-wrap items-center gap-2 text-xl text-slate-600 dark:text-slate-300",
      className
    )}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6 flex-shrink-0 text-slate-500 dark:text-slate-400"
    >
      {icon}
    </svg>
    <div className="mr-auto">{left}</div>
    <div className="font-medium">{children}</div>
  </div>
)

const Details = () => {
  const [open, setOpen] = useState(false)
  const [hover, setHover] = useState(false)

  const data = useStaticQuery(graphql`
    query {
      mdx(internal: { contentFilePath: { glob: "**/pages/idtga/info.mdx" } }) {
        frontmatter {
          hidden
        }
      }
    }
  `)
  if (data.mdx.frontmatter.hidden) {
    return null
  }

  return (
    <Collapsible.Root
      open={open}
      onOpenChange={setOpen}
      className={clsx(
        "rounded-lg border-2 border-slate-300 dark:border-slate-600",
        hover && "bg-slate-100 dark:bg-slate-800"
      )}
    >
      <Collapsible.Trigger
        className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-lg font-medium"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <h3>Season Info</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className={clsx("h-6 w-6 transition-transform", open && "rotate-180")}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </Collapsible.Trigger>
      <Collapsible.Content asChild>
        <>
          <div className="mx-4 border-t-2 border-slate-200 dark:border-slate-700" />
          <article className="prose prose-slate p-4 dark:prose-invert">
            <InfoMdx />
          </article>
        </>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}

const Blurb = ({ heading, desc, src, className }) => (
  <AnimationOnScroll
    animateOnce={true}
    animateIn="animate-in fade-in slide-in-from-bottom-12"
    duration={0.5}
  >
    <div
      className={clsx(
        "flex max-w-6xl flex-col-reverse justify-between p-12 sm:flex-row sm:items-center sm:gap-0 sm:p-0",
        className
      )}
    >
      <div className="flex-1 sm:p-12">
        <h3 className="mb-2 text-2xl font-medium md:text-3xl">{heading}</h3>
        <p className="text-xl text-slate-600 dark:text-slate-300 md:text-2xl">
          {desc}
        </p>
      </div>
      <div className="flex-1">
        <img src={src} alt="" className="w-64 sm:w-auto" />
      </div>
    </div>
  </AnimationOnScroll>
)

export default Idtga
