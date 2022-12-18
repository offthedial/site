import clsx from "clsx"
import {
  format,
  fromUnixTime,
  formatDuration,
  intervalToDuration,
} from "date-fns"
import React from "react"
import useTourney from "src/app/useTourney"
import Layout from "src/components/Layout"
import logo from "src/static/idtga.svg"

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
  return tourney.data ? (
    <div className="bg-default flex w-full max-w-lg flex-col items-stretch gap-6 rounded-lg p-12 shadow-xl">
      <h2 className="text-center text-xl font-medium">
        {tourney.data.smashgg.name}
      </h2>
      <div className="border-t-2 border-slate-300 dark:border-slate-600" />
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
          {format(tourney.data?.startDate, "MMM d, h:mm aa")}
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
          {tourney.data?.hasClosed()
            ? `${duration(tourney.data?.closeDate)} ago`
            : `in ${duration(tourney.data?.closeDate)}`}
        </CardInfo>
      </div>
      <div className="border-t-2 border-slate-300 dark:border-slate-600" />
    </div>
  ) : null
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

export default Idtga
