import React from "react"
import { Link } from "gatsby"
import useTourney from "src/app/useTourney"
import useUser from "src/app/useUser"
import useDiscord from "src/app/useDiscord"
import useUserSignup from "src/app/useUserSignup"
import Layout, { Avatar } from "src/components/Layout"
import PrivateRoute from "src/components/PrivateRoute"
import useLogoutUser from "src/app/useLogoutUser"
import {
  addHours,
  format,
  formatDuration,
  fromUnixTime,
  intervalToDuration,
} from "date-fns"
import Mention from "src/components/Mention"
import useDeleteUser from "src/app/useDeleteUser"

const Profile = () => {
  const user = useUser()

  return (
    <div className="flex flex-col items-stretch gap-8">
      <div className="flex items-center gap-6">
        <Avatar className="h-14 w-14" />
        <h2 className="mr-auto text-2xl font-medium sm:text-3xl">
          {user.data?.displayName}
        </h2>
        <ActionButtons />
      </div>
      <Seperator />
      <InnerSection className="flex items-center gap-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          fill="currentColor"
          className="h-5 flex-shrink-0 text-otd-pink sm:h-6"
        >
          <path d="M544 0c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V32c0-17.7 14.3-32 32-32zM416 96c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V128c0-17.7 14.3-32 32-32zM320 224V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32s32 14.3 32 32zM160 288c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V320c0-17.7 14.3-32 32-32zM64 416v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V416c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
        </svg>
        <p className="text-xl sm:text-2xl">Signal Strength</p>
        <p className="ml-auto font-mono text-xl sm:text-2xl">
          {user.data?.meta?.signal}
        </p>
      </InnerSection>
      <div className="flex items-center gap-4">
        <Seperator />
        <p className="flex-shrink-0 text-slate-600 dark:text-slate-400">
          Tournament Dashboard
        </p>
        <Seperator />
      </div>
      <InnerSection className="flex flex-col gap-12">
        <TournamentDashboard />
      </InnerSection>
    </div>
  )
}

const TournamentDashboard = () => {
  const signup = useUserSignup()
  const tourney = useTourney()
  let props = {
    style: null,
    message: null,
    button: null,
  }

  if (!tourney.data || tourney.data.hasEnded()) {
    props = {
      style: "blue",
      message: "There's no tournament going on at the moment, stay tuned!",
    }
  } else if (signup.data) {
    if (signup.data.type === "sub") {
      props = {
        style: "lime",
        message: "You're registered for the tournament as a sub!",
        button: "Update Profile",
      }
    } else {
      props = {
        style: "green",
        message: "You're registered for the tournament!",
        button: "Update Profile",
      }
    }
  } else {
    if (tourney.data.hasClosed()) {
      props = {
        style: "orange",
        message: "Signups have closed, but you can still sign up as a sub!",
        button: "Signup as a Sub",
      }
    } else {
      props = {
        style: "red",
        message: "You're not registered for the tournament yet.",
        button: "Signup",
      }
    }
  }

  return (
    <>
      <StatusCallout {...props} />
      <div>
        <div className="text-lg font-medium uppercase tracking-wider text-slate-600 dark:text-slate-400">
          Timeline
        </div>
        {allPhases(tourney).map(phase => (
          <TimelineEvent key={phase.title} {...phase} />
        ))}
      </div>
    </>
  )
}

const StatusCallout = ({ style, message, button }) => {
  const colorStyle = {
    blue: "bg-blue-600/20 text-blue-700 dark:bg-blue-400/20 dark:text-blue-400",
    lime: "bg-lime-600/20 text-lime-700 dark:bg-lime-400/20 dark:text-lime-400",
    green:
      "bg-green-600/20 text-green-700 dark:bg-green-400/20 dark:text-green-400",
    orange:
      "bg-orange-600/20 text-orange-700 dark:bg-orange-400/20 dark:text-orange-400",
    red: "bg-red-600/20 text-red-700 dark:bg-red-400/20 dark:text-red-400",
  }
  const underlineStyle = {
    blue: "decoration-blue-700/50 dark:decoration-blue-400/50 hover:decoration-blue-700 hover:dark:decoration-blue-400",
    lime: "decoration-lime-700/50 dark:decoration-lime-400/50 hover:decoration-lime-700 hover:dark:decoration-lime-400",
    green:
      "decoration-green-700/50 dark:decoration-green-400/50 hover:decoration-green-700 hover:dark:decoration-green-400",
    orange:
      "decoration-orange-700/50 dark:decoration-orange-400/50 hover:decoration-orange-700 hover:dark:decoration-orange-400",
    red: "decoration-red-700/50 dark:decoration-red-400/50 hover:decoration-red-700 hover:dark:decoration-red-400",
  }

  return (
    <div className={"flex flex-col gap-4 rounded-lg p-4 " + colorStyle[style]}>
      <div className="flex flex-wrap items-center gap-3 font-medium">
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
        <p className="mr-auto">Registration Status:</p>
        <div
          className={
            "text-default font-bold uppercase tracking-wider underline decoration-2 " +
            underlineStyle[style]
          }
        >
          <Link to="/signup">{button}</Link>
        </div>
      </div>
      <div className="text-default text-lg">{message}</div>
    </div>
  )
}

const TimelineEvent = ({ title, desc, status, date, countdown, last }) => {
  const statusIcons = {
    past: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path
          fillRule="evenodd"
          d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
          clipRule="evenodd"
        />
      </svg>
    ),
    present: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path
          fillRule="evenodd"
          d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
          clipRule="evenodd"
        />
      </svg>
    ),
    future: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path
          fillRule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
          clipRule="evenodd"
        />
      </svg>
    ),
  }
  const iconStyles = {
    past: "bg-slate-200 text-slate-400 dark:bg-slate-800 dark:text-slate-500",
    present: "bg-otd-slate/40 text-otd-slate-600 dark:text-otd-slate-300",
    future: "bg-slate-300 text-slate-600 dark:bg-slate-700 dark:text-slate-400",
  }
  const titleStyles = {
    past: "text-slate-400 dark:text-slate-500",
    present: "text-otd-slate-800 dark:text-otd-slate-200",
    future: "text-slate-600 dark:text-slate-400",
  }
  const dateStyles = {
    past: "text-slate-400 dark:text-slate-500",
    present: "text-slate-600 dark:text-slate-400",
    future: "text-slate-600 dark:text-slate-400",
  }

  return (
    <section className="flex flex-col">
      <div className="my-2 flex items-center gap-4">
        <div
          className={
            "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg " +
            iconStyles[status]
          }
        >
          {statusIcons[status]}
        </div>
        <div className={titleStyles[status]}>
          <div className="flex items-center pb-0.5">
            <p className="text-2xl font-medium leading-none">{title}</p>
            {countdown && <TimelineCountdown countdown={countdown} />}
          </div>
          <p className={dateStyles[status]}>
            {date ? format(date, "MMMM d, h:mm aa") : "..."}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div
          className={
            "flex w-11 shrink-0 justify-center self-stretch " +
            (!last ? "min-h-[2rem]" : "min-h-0")
          }
        >
          <div
            className={
              "h-full w-1 shrink-0 " +
              iconStyles[status] +
              (status === "present" &&
                " !bg-otd-slate-600 dark:!bg-otd-slate-300")
            }
          ></div>
        </div>
        {status === "present" && <div className="py-4 text-xl">{desc}</div>}
      </div>
    </section>
  )
}

const TimelineCountdown = ({ countdown }) => {
  const duration = formatDuration(
    intervalToDuration({
      start: countdown,
      end: new Date(),
    })
  )
    .split(" ")
    .slice(0, 2)
    .join(" ")

  return (
    <span className="text-default mx-2 rounded-md bg-slate-300 px-2 text-lg font-normal dark:bg-slate-700">
      in {duration}
    </span>
  )
}

const allPhases = tourney => {
  const phases = [
    {
      title: "Registration Opens",
      desc: (
        <>
          It's a new season! Sign up if you haven't already, and tell your
          friends to sign up too!
        </>
      ),
      status: "past",
      date: null,
      countdown: null,
    },
    {
      title: "Check-in Opens",
      desc: (
        <>
          Remember to check in on discord with the <code>$checkin</code> command
          in <Mention>#check-in</Mention>. You will be disqualified if you fail
          to do so.
        </>
      ),
      status: "past",
      date: null,
      countdown: null,
    },
    {
      title: "Registration Closes",
      desc: (
        <>
          Get hype, just a little longer now! Teams will be released shortly.
          While you're waiting, make sure to review the rules at{" "}
          <Link
            className="text-otd-slate-600 hover:underline dark:text-otd-slate-300"
            to="/idtga/rules"
          >
            otd.ink/idtga/rules
          </Link>
        </>
      ),
      status: "past",
      date: null,
      countdown: null,
    },
    {
      title: "Teams are released",
      desc: (
        <>
          Start practicing! Contact your fellow teammates and create a Group DM.
          If you have an issue with one of your team members, you can create
          player reports 24 hours after teams are released.
        </>
      ),
      status: "past",
      date: null,
      countdown: null,
    },
    {
      title: "Tournament begins",
      desc: (
        <>
          Good luck in the tournament! Head to xxx to organize your matches and
          report your scores. Tune into the official broadcast at
          <a
            className="text-otd-slate-600 hover:underline dark:text-otd-slate-300"
            href="https://twitch.tv/offthedial"
          >
            twitch.tv/offthedial
          </a>
          .
        </>
      ),
      status: "past",
      date: null,
      countdown: null,
      last: true,
    },
  ]

  // Set date and status
  if (!tourney.data) {
    return phases
  }
  const now = new Date()
  const registrationCloses = fromUnixTime(
    tourney.data.smashgg.registrationClosesAt
  )
  const steps = [
    tourney.data?.creationDate,
    addHours(registrationCloses, -24),
    registrationCloses,
    addHours(registrationCloses, 24),
    tourney.data?.startDate,
    fromUnixTime(tourney.data?.smashgg.endAt),
  ]
  let currentStep = 0
  steps.forEach((step, index) => {
    if (now > step) {
      currentStep = index
    }
  })
  phases.forEach((_, i) => {
    phases[i].date = steps[i]
    if (i < currentStep) {
      phases[i].status = "past"
    } else if (i > currentStep) {
      phases[i].status = "future"
      if (i === currentStep + 1) {
        phases[i].countdown = steps[i]
      }
    } else {
      phases[i].status = "present"
    }
  })
  return phases
}

const ActionButtons = () => {
  const logoutUser = useLogoutUser()
  const deleteUser = useDeleteUser()
  return (
    <>
      <button
        onClick={deleteUser.mutate}
        className="flex items-center justify-center rounded-lg border-2 border-transparent p-3 text-slate-400 hover:border-slate-300 hover:bg-slate-300 hover:text-red-700 dark:text-slate-700 dark:hover:border-slate-800 dark:hover:bg-slate-800 dark:hover:text-red-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </button>
      <button
        onClick={logoutUser.mutate}
        className="flex items-center justify-center rounded-lg border-2 border-slate-300 p-3 hover:bg-slate-300 hover:text-red-700 dark:border-slate-800 dark:hover:bg-slate-800 dark:hover:text-red-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
          />
        </svg>
      </button>
    </>
  )
}

const TopAlerts = ({}) => {
  const discord = useDiscord()
  return null
}

const Seperator = () => (
  <div className="w-full flex-1 border-t-2 border-slate-300 dark:border-slate-800" />
)

const InnerSection = ({ className, children }) => (
  <div
    className={
      "rounded-xl sm:bg-slate-50 sm:p-8 sm:dark:bg-slate-850 " + className
    }
  >
    {children}
  </div>
)

const Page = () => (
  <Layout className="m-8">
    <PrivateRoute>
      <TopAlerts />
      <div className="mx-auto max-w-3xl rounded-xl sm:bg-slate-200 sm:p-8 dark:sm:bg-slate-900">
        <Profile />
      </div>
    </PrivateRoute>
  </Layout>
)

export default Page
