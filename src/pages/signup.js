import clsx from "clsx"
import React, { useEffect } from "react"
import { Controller, useForm } from "react-hook-form"
import { Combobox, RadioGroup } from "@headlessui/react"
import Cleave from "cleave.js/react"
import Layout from "src/components/Layout"
import weapons from "src/components/weapons"
import { matchSorter } from "match-sorter"
import PrivateRoute from "src/components/PrivateRoute"
import useUser from "src/app/useUser"
import useTourney from "src/app/useTourney"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "src/app"

const Signup = () => {
  const form = useForm({ mode: "onTouched", shouldUnregister: true })
  const formErrors = form.formState.errors
  console.log(form)

  const onSubmit = form.handleSubmit((data, e) => {})

  return (
    <form
      onSubmit={onSubmit}
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
        yes={
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
                    validate: () => {
                      const values = form.getValues()
                      if (
                        values?.rank?.sz ||
                        values?.rank?.tc ||
                        values?.rank?.rm ||
                        values?.rank?.cb
                      ) {
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
        }
        no={
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
                    required: "This field is required",
                    setValueAs: v => v.toUpperCase(),
                    validate: value => {
                      if (value.startsWith("S+"))
                        return "You have X Battles unlocked"
                      if (/^[ABC][\+-]?$|^S$/.test(value)) return true
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
                    required: "This field is required",
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
        }
      />
      <Border />
      <FormItem
        title="Weapon Pool"
        desc="List up to 5 weapons that you would be comfortable playing during the tournament."
      >
        <WeaponSelect
          error={formErrors.weapons}
          setValue={form.setValue}
          getValues={form.getValues}
          register={form.register("weapons", {
            required: "This field is required",
            validate: v =>
              v.length <= 5 || "You can't select more than 5 weapons",
          })}
        />
        <Error error={formErrors.weapons} />
      </FormItem>
      <Border />
      <FormItem
        title="Competitive Experience"
        desc="Put in your relevant competitive experience, such as tournament placements, how long you've been playing competitively, your LUTI division, etc."
      >
        <textarea
          {...form.register("cxp")}
          type="text"
          autoComplete="off"
          rows={5}
          className="w-full"
          placeholder={`Captain of Team Triforce since 1987\nPlayed in the last 4 IDTGAs\nDefeated Ganon in a scrim`}
        />
      </FormItem>
      <Border />
      <FormItem
        title="start.gg User Slug"
        desc="Enter the 8 characters that are listed on your start.gg profile."
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
      signup
    </form>
  )
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
                      If you haven't done calculations for this season, enter
                      last season's powers instead.
                    </p>
                  </>
                )}
                {field.value === "no" && (
                  <p>Enter your current rank, and your ranking points.</p>
                )}
              </div>
              <div className="flex-1"></div>
              <div className="flex-[3_3_0%]">
                {field.value === "yes" && yes}
                {field.value === "no" && no}
              </div>
            </div>
          </>
        )}
      />
    </div>
  )
}

const WeaponSelect = ({ getValues, setValue, error }) => {
  let [query, setQuery] = React.useState("")
  let [activeWeapons, setActiveWeapons] = React.useState([])

  useEffect(() => {
    setValue("weapons", activeWeapons, {
      shouldValidate: Array.isArray(getValues()?.weapons),
    })
  }, [activeWeapons])

  return (
    <Combobox
      value={activeWeapons}
      onChange={weapons => setActiveWeapons(weapons)}
      multiple
    >
      <div className="relative">
        <div
          className={clsx(
            "inline-block w-full cursor-text rounded-lg border-2 border-slate-400 bg-transparent px-3 py-2 text-lg focus-within:!border-otd-slate-600 focus-within:ring-transparent dark:border-slate-700 focus-within:dark:!border-otd-slate-400",
            error && "!border-red-600 dark:!border-red-400"
          )}
        >
          <span className="flex flex-wrap gap-2">
            {activeWeapons.map(weapon => (
              <span
                key={weapon.id}
                className="flex h-7 items-center gap-2 rounded bg-slate-200 px-2 py-0.5 text-sm dark:bg-slate-700"
              >
                <img src={weapon.img} alt="" className="h-5 w-5" />
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
                    setActiveWeapons(existing =>
                      existing.filter(p => p !== weapon)
                    )
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
              onBlur={() =>
                setActiveWeapons(
                  Array.isArray(getValues()?.weapons) ? [...activeWeapons] : []
                )
              }
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
                      <img src={weapon.img} alt="" className="h-6 w-6" />
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

  return (
    <Layout className="flex items-start justify-center bg-slate-200 dark:bg-slate-900">
      <PrivateRoute>
        {!tourney.data?.isWhitelist() &&
        !tourney.data?.whitelist?.includes(user?.uid) ? (
          <div className="flex max-w-2xl flex-col items-center justify-center self-center p-8 text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-300 dark:bg-slate-800">
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
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <article className="prose prose-2xl prose-slate dark:prose-invert">
              <p>This is a whitelisted tournament</p>
              <p>
                If you think this is a mistake, try contacting one of the
                Tournament Organisers
              </p>
            </article>
          </div>
        ) : (
          <Signup />
        )}
      </PrivateRoute>
    </Layout>
  )
}

export default SignupPage
