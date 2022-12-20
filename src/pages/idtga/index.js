import React, { useState } from "react"
import clsx from "clsx"
import { useStaticQuery, graphql, Link } from "gatsby"
import { format, formatDuration, intervalToDuration } from "date-fns"
import * as Collapsible from "@radix-ui/react-collapsible"
import useTourney from "src/app/useTourney"
import Layout from "src/components/Layout"
import logo from "src/static/idtga.svg"
import InfoMdx from "./info.mdx"

const Idtga = () => (
  <Layout helmet={{ title: "IDTGA" }}>
    <div className="bg-otd-slate">
      <div className="flex flex-col items-center justify-evenly gap-10 p-10 lg:flex-row">
        <div className="flex w-fit flex-col items-center lg:items-stretch">
          <img src={logo} className="mb-6 h-28 lg:self-start" />
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
    <div className="bg-default flex w-full max-w-lg flex-col items-stretch rounded-xl shadow-xl">
      <div className="rounded-t-xl bg-slate-200 px-12 py-8 dark:bg-slate-800">
        <h2 className="text-center text-xl font-semibold">
          {tourney.data ? (
            tourney.data.smashgg.name
          ) : (
            <div className="mx-auto h-7 w-96 animate-pulse rounded-full bg-slate-300 dark:bg-slate-700" />
          )}
        </h2>
      </div>
      <div className="flex flex-col items-stretch gap-8 px-12 py-8">
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
            {tourney.data ? (
              format(tourney.data.startDate, "MMM d, h:mm aa")
            ) : (
              <div className="mx-auto h-6 w-32 animate-pulse rounded-full bg-slate-300 dark:bg-slate-700" />
            )}
          </CardInfo>
          <CardInfo
            className={tourney.data?.hasClosed() && "line-through"}
            icon={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            }
            left="Registration closes:"
          >
            {tourney.data ? (
              tourney.data?.hasClosed() ? (
                `${duration(tourney.data?.closeDate)} ago`
              ) : (
                `in ${duration(tourney.data?.closeDate)}`
              )
            ) : (
              <div className="mx-auto h-6 w-32 animate-pulse rounded-full bg-slate-300 dark:bg-slate-700" />
            )}
          </CardInfo>
        </div>
        <Details />
        <div>
          <div className="flex items-center justify-between gap-4 rounded-b-xl">
            <Link to="/signup" className="rounded-lg">
              <button
                disabled={!(tourney.data?.hasEnded() === false)}
                className="rounded-lg bg-otd-cyan-200 py-2.5 px-7 text-lg font-medium hover:enabled:bg-otd-cyan-300 disabled:opacity-50 disabled:grayscale-[50%] dark:bg-otd-cyan-700 hover:enabled:dark:bg-otd-cyan-600"
              >
                Signup!
              </button>
            </Link>
            <Link to="rules">
              <button className="rounded-lg bg-slate-200 py-2.5 px-7 text-lg font-medium hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700">
                Rules
              </button>
            </Link>
          </div>
          <div className="mt-3 text-sm text-slate-400 dark:text-slate-500">
            Times are listed in your timezone, see the rules for the schedule
            and format.
          </div>
        </div>
      </div>
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
    <p className="mr-auto">{left}</p>
    <p className="font-medium">{children}</p>
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

export default Idtga
