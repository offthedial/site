import React from "react"
import { Link } from "gatsby"
import useTourney from "src/app/useTourney"
import useUser from "src/app/useUser"
import useDiscord from "src/app/useDiscord"
import useUserSignup from "src/app/useUserSignup"
import Layout, { Avatar } from "src/components/Layout"
import PrivateRoute from "src/components/PrivateRoute"
import useLogoutUser from "src/app/useLogoutUser"

const Profile = () => {
  const user = useUser()
  const discord = useDiscord()

  return (
    <div className="flex flex-col items-stretch gap-8">
      <div className="flex items-center gap-6">
        <Avatar className="h-14 w-14" />
        <h2 className="text-2xl font-medium sm:text-3xl">
          {user.data?.displayName}
        </h2>
        <div className="ml-auto">
          <Logout />
        </div>
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

const Seperator = () => (
  <div className="w-full flex-1 border-t-2 border-slate-300 dark:border-slate-800" />
)

const InnerSection = ({ className, children }) => (
  <div className={"rounded-xl bg-slate-200 p-6 dark:bg-slate-900 " + className}>
    {children}
  </div>
)

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

  return [
    {
      style: "blue",
      message: "There's no tournament going on at the moment, stay tuned!",
    },
    {
      style: "lime",
      message: "You're registered for the tournament as a sub!",
      button: "Update Profile",
    },
    {
      style: "green",
      message: "You're registered for the tournament!",
      button: "Update Profile",
    },
    {
      style: "orange",
      message: "Signups have closed, but you can still sign up as a sub!",
      button: "Signup as a Sub",
    },
    {
      style: "red",
      message: "You're not registered for the tournament yet.",
      button: "Signup",
    },
  ].map(p => <StatusCallout {...p} />)

  return (
    <>
      <StatusCallout {...props} />
      <div className="text-lg font-medium uppercase tracking-wider text-slate-600 dark:text-slate-400">
        Timeline
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
            "font-bold uppercase tracking-wider text-slate-800 underline decoration-2 dark:text-slate-100 " +
            underlineStyle[style]
          }
        >
          <Link to="/signup">{button}</Link>
        </div>
      </div>
      <div className="text-lg text-slate-800 dark:text-slate-100">
        {message}
      </div>
    </div>
  )
}

const Logout = () => {
  const logout = useLogoutUser()
  return (
    <button
      onClick={logout.mutate}
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
  )
}

const TopAlerts = ({}) => {
  return null
}

const Page = () => (
  <Layout className="m-8">
    <PrivateRoute>
      <TopAlerts />
      <div className="mx-auto max-w-3xl rounded-xl border-slate-300 dark:border-slate-800 sm:border-2 sm:p-8">
        <Profile />
      </div>
    </PrivateRoute>
  </Layout>
)

export default Page
