import clsx from "clsx"
import React from "react"
import { Controller, useForm } from "react-hook-form"
import { Combobox } from "@headlessui/react"
import Cleave from "cleave.js/react"
import Layout from "src/components/Layout"
import weapons from "src/components/weapons"
import { matchSorter } from "match-sorter"

const Signup = () => {
  const { handleSubmit, control, register, formState } = useForm({
    mode: "onTouched",
  })
  let errors = formState.errors
  console.log(formState)
  return (
    <Layout className="flex items-start justify-center bg-slate-200 dark:bg-slate-900">
      <form className="bg-default m-12 flex w-full max-w-4xl flex-col gap-12 rounded-xl p-12 shadow">
        <FormItem
          title="SplashTag"
          desc="Enter your full Splash Tag, including the hashtag and the 4 numbers at the end."
        >
          <input
            type="text"
            autoComplete="off"
            className={clsx(
              "w-full",
              errors.splashtag && "!border-red-600 dark:!border-red-400"
            )}
            {...register("splashtag", {
              required: "This field is required",
              pattern: {
                value: /^.{1,10}#\d{4}$/,
                message:
                  "Invalid splash tag, remember to include the hashtag and the 4 numbers at the end",
              },
            })}
          />
          <Error error={errors.splashtag} />
        </FormItem>
        <Border />
        <FormItem
          title="Friend-Code"
          desc="Enter your full friend-code, this won't be shared publically."
        >
          <Controller
            name="sw"
            control={control}
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
                  errors.sw && "!border-red-600 dark:!border-red-400"
                )}
              />
            )}
          />
          <Error error={errors.sw} />
        </FormItem>
        <Border />
        <FormItem title="Rank" desc="very fancy rank thing.">
          <input type="text" autoComplete="off" className="w-full" />
          {/* first check s+0, require at least 1 x power, suggest previous season */}
        </FormItem>
        <Border />
        <FormItem
          title="Weapon Pool"
          desc="List up to 5 weapons that you would be comfortable playing during the tournament."
        >
          <WeaponSelect error={errors.weapons} control={control} />
          {/* downshift usemultiselect */}
        </FormItem>
        <Border />
        <FormItem
          title="Competitive Experience"
          desc="Put in your relevant competitive experience, such as tournament placements, how long you've been playing competitively, your LUTI division, etc."
        >
          <textarea
            {...register("cxp")}
            type="text"
            autoComplete="off"
            rows={5}
            className="w-full"
          />
        </FormItem>
        <Border />
        <FormItem
          title="start.gg User Slug"
          desc="The 8 characters that are listed on your start.gg profile page."
        >
          <div className="flex flex-row-reverse items-stretch">
            <input
              {...register("slug", {
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
                errors.slug && "!border-red-600 dark:!border-red-400"
              )}
            />
            <input
              type="text"
              className={clsx(
                "min-w-0 rounded-lg rounded-r-none border-2 border-r-0 border-slate-400 !bg-slate-200 bg-transparent px-1.5 text-center text-base peer-focus:!border-otd-slate-600 peer-focus:ring-transparent dark:border-slate-700 dark:!bg-slate-800 dark:peer-focus:!border-otd-slate-400",
                errors.slug && "!border-red-600 dark:!border-red-400"
              )}
              placeholder="start.gg/user/"
              disabled
            />
          </div>
          <Error error={errors.slug} />
        </FormItem>
        <Border />
        signup
      </form>
    </Layout>
  )
}

const FormItem = ({ title, desc, children }) => (
  <div className="flex flex-col gap-2 md:flex-row md:justify-between md:gap-0">
    <div className="flex-[3_3_0%]">
      <h2 className="text-2xl font-medium">{title}</h2>
      <div className="text-xl text-slate-700 dark:text-slate-300">{desc}</div>
    </div>
    <div className="flex-1"></div>
    <div className="flex-[3_3_0%]">{children}</div>
  </div>
)

const WeaponSelect = ({ error, control }) => {
  let [query, setQuery] = React.useState("")
  let [activeWeapons, setActiveWeapons] = React.useState([])

  return (
    <Controller
      name="weapons"
      control={control}
      rules={{
        validate: {
          required: v => v.length > 0 || "You must select at least 1 weapon",
          tooMany: v => v.length <= 5 || "You can't select more than 5 weapons",
        },
      }}
      render={({ field }) => (
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
              onClick={() => {
                document.getElementById("weapon-input").focus()
              }}
            >
              <span className="flex flex-wrap gap-2">
                {activeWeapons.map(weapon => (
                  <span
                    key={weapon.id}
                    className="flex h-7 items-center gap-2 rounded bg-slate-200 px-2 py-0.5 text-sm dark:bg-slate-700"
                  >
                    <img src={weapon.img} className="h-5 w-5" />
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
                  id="weapon-input"
                  onChange={event => setQuery(event.target.value)}
                  onFocus={() => query != "" && setQuery("")}
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
                          <img src={weapon.img} className="h-6 w-6" />
                          <span
                            className={
                              selected ? "font-semibold" : "font-normal"
                            }
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
      )}
    ></Controller>
  )
}

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

export default Signup
