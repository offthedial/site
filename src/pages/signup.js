import clsx from "clsx"
import React from "react"
import { Link } from "gatsby"
import { Controller, useForm } from "react-hook-form"
import { useAuthState } from "react-firebase-hooks/auth"
import { matchSorter } from "match-sorter"
import { Combobox, RadioGroup } from "@headlessui/react"
import { useMutation } from "@tanstack/react-query"
import Cleave from "cleave.js/react"
import Layout from "src/components/Layout"
import weapons from "src/components/weapons"
import PrivateRoute from "src/components/PrivateRoute"
import { auth, db, queryClient } from "src/app"
import useTourney from "src/app/useTourney"
import useDiscord from "src/app/useDiscord"
import useUserSignup from "src/app/useUserSignup"
import useUser from "src/app/useUser"
import { format } from "date-fns"
import { doc, setDoc, updateDoc } from "firebase/firestore"

const Signup = () => {
  // Initialize form
  const form = useForm({ mode: "onTouched", shouldUnregister: true })
  const formErrors = form.formState.errors

  // Autofill form with profile data
  const user = useUser({ staleTime: Infinity })
  React.useEffect(() => {
    form.reset(user.data?.profile)
  }, [user.data])

  // Handle form submit
  const onSubmit = useMutation(
    async profile => {
      const tourney = queryClient.getQueryData(["tourney"])
      const user = queryClient.getQueryData(["user"])
      const userSignup = queryClient.getQueryData(["user", "signup"])
      // Update profile to database
      await updateDoc(user.ref, { profile })
      queryClient.setQueryData(["user"], old => ({ ...old, profile }))

      // Upsert signup to database
      if (tourney.hasEnded()) throw Error("The tournament has ended")
      const signup = {
        signupDate:
          userSignup?.signupDate ||
          format(new Date(), "yyyy-MM-dd HH:mm:ss zzzz"),
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        modifiedDate: format(new Date(), "yyyy-MM-dd HH:mm:ss zzzz"),
      }
      await setDoc(
        userSignup
          ? userSignup.ref
          : doc(
              db,
              "tournaments",
              tourney.id,
              tourney.hasClosed() ? "subs" : "signups",
              user.uid
            ),
        signup
      )
      queryClient.setQueryData(["user", "signup"], old => ({
        ...old,
        signup,
      }))
      return { user, userSignup }
    },
    {
      onError: (e, v, context) => {
        queryClient.setQueryData(["user"], context.user)
        queryClient.setQueryData(["user", "signup"], context.userSignup)
      },
      onSettled: () => queryClient.invalidateQueries(["user"]),
    }
  )

  return (
    <form
      onSubmit={form.handleSubmit(data => onSubmit.mutate(data))}
      className="bg-default flex w-full max-w-4xl flex-col gap-12 p-8 shadow sm:m-12 sm:rounded-xl sm:p-12"
    >
      <FormItem
        title="SplashTag"
        desc="Enter your full Splash Tag, including the hashtag and the 4 numbers at the end."
      >
        <input
          type="text"
          autoComplete="off"
          placeholder="Link#2347"
          className={clsx(
            "w-full",
            formErrors.splashtag && "!border-red-600 dark:!border-red-400"
          )}
          {...form.register("splashtag", {
            required: "This field is required",
            pattern: {
              value: /^.{1,10}#\d{4}$/,
              message:
                "Invalid splash tag, remember to include the hashtag and the 4 numbers at the end",
            },
          })}
        />
        <Error error={formErrors.splashtag} />
      </FormItem>
      <Border />
      <FormItem
        title="Friend-Code"
        desc="Enter your full friend-code, this won't be shared publically."
      >
        <Controller
          name="sw"
          control={form.control}
          rules={{
            required: { value: true, message: "This field is required" },
            minLength: { value: 4, message: "This field is required" },
            pattern: {
              value: /^SW-\d{4}-\d{4}-\d{4}$/,
              message: "Invalid friend-code",
            },
          }}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <Cleave
              onChange={onChange}
              onBlur={onBlur}
              htmlRef={ref}
              value={value}
              type="text"
              autoComplete="off"
              options={{
                prefix: "SW",
                delimiter: "-",
                blocks: [2, 4, 4, 4],
                numericOnly: true,
              }}
              className={clsx(
                "w-full",
                formErrors.sw && "!border-red-600 dark:!border-red-400"
              )}
            />
          )}
        />
        <Error error={formErrors.sw} />
      </FormItem>
      <Border />
      <RankItem
        control={form.control}
        error={formErrors.isUnlocked}
        yes={isNo => (
          <div className="grid grid-cols-2 gap-2">
            {["sz", "tc", "rm", "cb"].map((v, i) => (
              <label key={v}>
                <p className="text-sm font-medium uppercase tracking-wider text-slate-400">
                  {
                    ["Splat Zones", "Tower Control", "Rainmaker", "Clam Blitz"][
                      i
                    ]
                  }
                </p>
                <Controller
                  name={`rank.${v}`}
                  control={form.control}
                  rules={{
                    minLength: {
                      value: 6,
                      message: "Invalid X Power",
                    },
                    validate: (value) => {
                      const formValues = form.getValues()
                      if (
                        formValues?.rank?.sz ||
                        formValues?.rank?.tc ||
                        formValues?.rank?.rm ||
                        formValues?.rank?.cb ||
                        isNo
                      ) {
                        if (value === "0000.0") {
                          return "Invalid X Power. If you have never done calculations for this mode yet, please leave it completely blank"
                        }
                        return true
                      }
                      return "At least one calculation is required"
                    },
                  }}
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <Cleave
                      onChange={onChange}
                      onBlur={onBlur}
                      htmlRef={ref}
                      value={value}
                      type="text"
                      placeholder="2000.0"
                      autoComplete="off"
                      options={{
                        numericOnly: true,
                        blocks: [4, 1],
                        delimiter: ".",
                      }}
                      className={clsx(
                        "w-full",
                        formErrors?.rank?.[v] &&
                          "!border-red-600 dark:!border-red-400"
                      )}
                    />
                  )}
                />
                <Error error={formErrors?.rank?.[v]} />
              </label>
            ))}
          </div>
        )}
        no={isYes => (
          <div className="flex w-full gap-2">
            {[
              <>
                <input
                  className={clsx(
                    "w-full flex-1 uppercase",
                    formErrors?.rank?.letter &&
                      "!border-red-600 dark:!border-red-400"
                  )}
                  type="text"
                  size="1"
                  placeholder="A+"
                  autoComplete="off"
                  {...form.register("rank.letter", {
                    required: isYes ? false : "This field is required",
                    setValueAs: v => v.toUpperCase(),
                    validate: value => {
                      if (isYes) return true
                      if (value.startsWith("S+"))
                        return "You have X Battles unlocked"
                      if (/^[ABC][+-]?$|^S$/.test(value)) return true
                      return "Invalid rank"
                    },
                  })}
                />
                <Error error={formErrors?.rank?.letter} />
              </>,
              <>
                <Controller
                  name="rank.points"
                  control={form.control}
                  rules={{
                    required: isYes ? false : "This field is required",
                  }}
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <Cleave
                      onChange={onChange}
                      onBlur={onBlur}
                      htmlRef={ref}
                      value={value}
                      type="text"
                      autoComplete="off"
                      placeholder="478"
                      size="1"
                      options={{
                        numeral: true,
                      }}
                      className={clsx(
                        "w-full flex-1 uppercase",
                        formErrors?.rank?.points &&
                          "!border-red-600 dark:!border-red-400"
                      )}
                    />
                  )}
                />
                <Error error={formErrors?.rank?.points} />
              </>,
            ].map((v, i) => (
              <div className="w-full" key={i}>
                <label>
                  <p className="text-sm font-medium uppercase tracking-wider text-slate-400">
                    {["Rank", "Points"][i]}
                  </p>
                  {v}
                </label>
              </div>
            ))}
          </div>
        )}
      />
      <Border />
      <FormItem
        title="Weapon Pool"
        desc="List up to 5 weapons that you would be comfortable playing during the tournament."
      >
        <Controller
          name="weapons"
          type="select"
          control={form.control}
          rules={{
            required: "This field is required",
            validate: v => v.length <= 5 || "Too many weapons selected",
          }}
          defaultValue={[]}
          render={({ field }) => (
            <WeaponSelect
              error={formErrors.weapons}
              field={field}
              onX={weapon => {
                form.setValue(
                  "weapons",
                  form.getValues("weapons").filter(p => p.id !== weapon.id),
                  { shouldValidate: true }
                )
              }}
            />
          )}
        />
        <Error error={formErrors.weapons} />
      </FormItem>
      <Border />
      <FormItem
        title="Competitive Experience"
        desc="List any relevant competitive experience. For example: LUTI division, tournament placements, team experience."
      >
        <textarea
          {...form.register("cxp")}
          type="text"
          autoComplete="off"
          rows={4}
          className="w-full"
          placeholder={`Captain of Team Triforce since 1987`}
        />
      </FormItem>
      <Border />
      <FormItem
        title="start.gg User Slug"
        desc={
          <>
            Enter the 8 characters that are listed on your{" "}
            <a
              className="text-default font-medium underline decoration-otd-slate hover:decoration-transparent"
              href="https://start.gg/profile"
            >
              start.gg profile
            </a>
            .
          </>
        }
      >
        <div className="flex flex-row-reverse items-stretch">
          <input
            {...form.register("slug", {
              required: { value: true, message: "This field is required" },
              pattern: {
                value: /^[0-9A-Fa-f]{8}$/,
                message: "Invalid user slug",
              },
            })}
            type="text"
            autoComplete="off"
            className={clsx(
              "peer w-full rounded-l-none border-l-0",
              formErrors.slug && "!border-red-600 dark:!border-red-400"
            )}
          />
          <input
            type="text"
            className={clsx(
              "min-w-0 rounded-lg rounded-r-none border-2 border-r-0 border-slate-400 !bg-slate-200 bg-transparent px-1.5 text-center text-base peer-focus:!border-otd-slate-600 peer-focus:ring-transparent dark:border-slate-700 dark:!bg-slate-800 dark:peer-focus:!border-otd-slate-400",
              formErrors.slug && "!border-red-600 dark:!border-red-400"
            )}
            placeholder="start.gg/user/"
            disabled
          />
        </div>
        <Error error={formErrors.slug} />
      </FormItem>
      <Border />
      <WithAlert>
        {({ style, message, button }) => (
          <div className="flex w-full flex-col justify-center">
            <button
              type="submit"
              disabled={
                !button ||
                form.formState.isSubmitting ||
                (button === "Update Profile" && !form.formState.isDirty)
              }
              className="w-full rounded-lg bg-otd-slate/50 py-3.5 text-xl font-semibold uppercase tracking-wider enabled:cursor-pointer hover:enabled:bg-otd-slate/75 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-600 disabled:dark:bg-slate-800 disabled:dark:text-slate-400"
            >
              {button || "Signup"}
            </button>
            <p
              className={clsx("mt-4 text-center text-lg font-semibold", style)}
            >
              {message}
            </p>
          </div>
        )}
      </WithAlert>
    </form>
  )
}

const WithAlert = ({ children }) => {
  const signup = useUserSignup()
  const tourney = useTourney()
  const discord = useDiscord()
  let props

  if (!tourney.data) {
    props = {}
  } else if (tourney.data.hasEnded()) {
    props = {
      style: "text-blue-600 dark:text-blue-400",
      message:
        "There's no tournament going on at the moment, stay tuned for the next one!",
    }
  } else if (discord.data?.hasJoined === false) {
    props = {
      style: "text-red-600 dark:text-red-400",
      message: (
        <>
          You must be in the{" "}
          <Link to="/discord" className="underline hover:no-underline">
            Off the Dial discord server
          </Link>{" "}
          to participate!
        </>
      ),
    }
  } else if (signup.data) {
    props =
      signup.data.type === "sub"
        ? {
            style: "text-lime-600 dark:text-lime-400",
            message: "You're registered for the tournament as a sub!",
            button: "Update Profile",
          }
        : {
            style: "text-green-600 dark:text-green-400",
            message: "You're registered for the tournament!",
            button: "Update Profile",
          }
  } else {
    props = tourney.data.hasClosed()
      ? {
          style: "text-amber-600 dark:text-amber-400",
          message: "Signups have closed, but you can still sign up as a sub!",
          button: "Signup as a Sub",
        }
      : { button: "Signup" }
  }
  return children(props)
}

const RankItem = ({ control, error, yes, no }) => {
  return (
    <div className="flex flex-col gap-8">
      <Controller
        name="isUnlocked"
        control={control}
        defaultValue=""
        rules={{
          required: "This field is required",
          setValueAs: v => {
            if (v === "yes") return true
            if (v === "no") return false
          },
        }}
        render={({ field }) => (
          <>
            <RadioGroup {...field}>
              <div className="flex flex-row flex-wrap items-end justify-between gap-4 md:items-start md:gap-0">
                <div className="min-w-min md:flex-[3_3_0%]">
                  <h2 className="mr-auto text-2xl font-medium">Rank</h2>
                  <RadioGroup.Label className="text-xl text-slate-700 dark:text-slate-300">
                    Do you have X Battles unlocked?
                    <br />
                    <span className="font-black">Or</span>{" "}
                    completed{" "}
                    <span className="font-black">any</span>{" "}
                    x calculations in past seasons?
                  </RadioGroup.Label>
                </div>
                <div className="hidden md:block md:flex-1"></div>
                <div className="justify-stretch flex md:flex-[3_3_0%]">
                  <div className="flex flex-col items-end md:items-start">
                    <div
                      className={clsx(
                        "relative flex shrink-0 items-center gap-0.5 overflow-hidden rounded-lg border-2 border-slate-400 bg-slate-400 dark:border-slate-700 dark:bg-slate-700",
                        error && "!border-red-600 dark:!border-red-400"
                      )}
                    >
                      {["yes", "no"].map(v => (
                        <RadioGroup.Option value={v} key={v}>
                          {({ checked }) => (
                            <div
                              className={clsx(
                                "text-semibold cursor-pointer rounded-md py-1.5 px-3 text-lg capitalize",
                                checked
                                  ? "bg-slate-100 shadow-sm dark:bg-slate-900"
                                  : "hover:bg-slate-300 dark:hover:bg-slate-800"
                              )}
                            >
                              {v}
                            </div>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                    <Error error={error} />
                  </div>
                </div>
              </div>
            </RadioGroup>
            <div className="flex flex-col gap-2 md:flex-row md:justify-between md:gap-0">
              <div className="flex-[3_3_0%] text-xl text-slate-700 dark:text-slate-300">
                {field.value === "yes" && (
                  <>
                    <p>Enter your most recent X powers for each mode.</p>
                    <p>
                      If you haven't done x calculations for this season,
                      enter your X powers for the latest season you played
                    </p>
                    <p>
                      If you haven't done x calculations ever,
                      please do them before signing up
                    </p>
                  </>
                )}
                {field.value === "no" && (
                  <p>Enter your current rank, and your ranking points.</p>
                )}
              </div>
              <div className="flex-1"></div>
              <div className="flex-[3_3_0%]">
                <div className={clsx({ hidden: field.value !== "yes" })}>
                  {yes(field.value !== "yes")}
                </div>
                <div className={clsx({ hidden: field.value !== "no" })}>
                  {no(field.value !== "no")}
                </div>
              </div>
            </div>
          </>
        )}
      />
    </div>
  )
}

const WeaponSelect = ({ error, field, onX }) => {
  let [query, setQuery] = React.useState("")

  return (
    <Combobox multiple by="id" {...field}>
      <div className="relative">
        <div
          className={clsx(
            "inline-block w-full cursor-text rounded-lg border-2 border-slate-400 bg-transparent px-3 py-2 text-lg focus-within:!border-otd-slate-600 focus-within:ring-transparent dark:border-slate-700 focus-within:dark:!border-otd-slate-400",
            error && "!border-red-600 dark:!border-red-400"
          )}
        >
          <span className="flex flex-wrap gap-2">
            {field.value.map(weapon => (
              <span
                key={weapon.id}
                className="flex h-7 items-center gap-2 rounded bg-slate-200 px-2 py-0.5 text-sm dark:bg-slate-700"
              >
                <img
                  src={`https://raw.githubusercontent.com/Sendouc/sendou.ink/HEAD/public/static-assets/img/main-weapons-outlined/${weapon.id}.png`}
                  alt=""
                  className="h-5 w-5"
                />
                <span>{weapon.name}</span>
                <svg
                  className="h-4 w-4 cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={e => {
                    e.stopPropagation()
                    e.preventDefault()
                    onX(weapon)
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            ))}
            <Combobox.Input
              type="text"
              onChange={event => setQuery(event.target.value)}
              onFocus={() => query !== "" && setQuery("")}
              className="min-w-0 grow border-none p-0 focus:ring-0"
              size="6"
              placeholder="Search..."
            />
          </span>
        </div>

        <div className="absolute my-2 w-full rounded-md bg-slate-300 dark:bg-slate-800">
          <Combobox.Options className="max-h-60 overflow-auto rounded-md text-base leading-6 shadow-lg focus:outline-none sm:text-sm sm:leading-5">
            {matchSorter(weapons, query, { keys: ["name"] }).map(weapon => (
              <Combobox.Option
                key={weapon.id}
                value={weapon}
                className={({ active }) =>
                  clsx(
                    "relative cursor-default select-none bg-clip-padding py-2 px-3 focus:outline-none",
                    active && "bg-otd-slate-500"
                  )
                }
              >
                {({ active, selected }) => (
                  <div className="flex justify-between">
                    <div className="flex items-center gap-3 truncate">
                      <img
                        src={`https://raw.githubusercontent.com/Sendouc/sendou.ink/HEAD/public/static-assets/img/main-weapons-outlined/${weapon.id}.png`}
                        alt=""
                        className="h-6 w-6"
                      />
                      <span
                        className={selected ? "font-semibold" : "font-normal"}
                      >
                        {weapon.name}
                      </span>
                    </div>
                    {selected && (
                      <span
                        className={clsx(
                          "flex items-center",
                          active
                            ? "text-white"
                            : "text-otd-slate-500 dark:text-otd-slate-400"
                        )}
                      >
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    )}
                  </div>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </div>
      </div>
    </Combobox>
  )
}

const FormItem = ({ title, desc, children }) => (
  <label className="flex flex-col gap-2 md:flex-row md:justify-between md:gap-0">
    <div className="flex-[3_3_0%]">
      <h2 className="text-2xl font-medium">{title}</h2>
      <div className="text-xl text-slate-700 dark:text-slate-300">{desc}</div>
    </div>
    <div className="flex-1"></div>
    <div className="flex-[3_3_0%]">{children}</div>
  </label>
)

const Error = ({ error }) => {
  return (
    error && (
      <p className="mt-1 text-red-600 dark:text-red-400">{error.message}</p>
    )
  )
}

const Border = () => (
  <div className="border-t-2 border-slate-300 dark:border-slate-800" />
)

const SignupPage = () => {
  const [user] = useAuthState(auth)
  const tourney = useTourney()
  const blocked = tourney.data && !tourney.data.isInvited(user?.uid)

  return (
    <Layout
      className={clsx(
        "flex items-start justify-center",
        !blocked && "bg-slate-200 dark:bg-slate-900"
      )}
    >
      <PrivateRoute>
        {blocked ? (
          <div className="flex max-w-3xl flex-col items-center justify-center gap-4 self-center p-8 text-center text-2xl text-slate-700 dark:text-slate-300">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-700 text-slate-50 dark:bg-slate-300 dark:text-slate-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                />
              </svg>
            </div>
            <p className="font-semibold">
              You are not whitelisted for this tournament!
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              If you think this is a mistake, please contact one of the
              Tournament Organisers
            </p>
          </div>
        ) : (
          <Signup />
        )}
      </PrivateRoute>
    </Layout>
  )
}

export default SignupPage
