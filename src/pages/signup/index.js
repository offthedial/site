import React, { useEffect } from "react"
import { useForm, Controller } from "react-hook-form"
import { Link, navigate } from "gatsby"
import Cleave from "cleave.js/react"
import Layout from "src/components/Layout"
import Alert from "src/components/Alert"
import PrivateRoute from "src/components/PrivateRoute"
import {
  useUserData,
  useMutUserData,
  useUserJoined,
  useUserSignup,
  useMutUserSignup,
  useTourney,
} from "src/app/hooks"

const Signup = ({ location }) => {
  const form = useForm({ mode: "onTouched" })
  const tourneyQuery = useTourney()
  const userSignupMut = useMutUserSignup()
  const userDataMut = useMutUserData()
  const userJoinedQuery = useUserJoined()

  // Prepopulate data
  const userDataQuery = useUserData()
  const userSignupQuery = useUserSignup()
  useEffect(() => {
    const profile = userDataQuery.data?.profile
    const signup = userSignupQuery.data?.data
    form.reset({
      ...profile,
      stylepoints: {
        "sup-agg": profile?.stylepoints?.aggressive,
        "obj-sla": profile?.stylepoints?.slayer,
        "anc-mob": profile?.stylepoints?.mobile,
        "fle-foc": profile?.stylepoints?.focused,
      },
      smashgg: {
        link: profile?.smashgg
          ? `smash.gg/user/${profile?.smashgg}`
          : undefined,
        code: signup?.confirmationCode,
      },
      recruiting: signup?.recruiting,
      legal: signup?.legal,
    })
  }, [userDataQuery.data, userSignupQuery.data])

  // Handle form submit
  const handleSignup = reg => {
    const div = n => [Math.abs(n), Number(n)]
    const [support, aggressive] = div(reg.stylepoints["sup-agg"])
    const [objective, slayer] = div(reg.stylepoints["obj-sla"])
    const [anchor, mobile] = div(reg.stylepoints["anc-mob"])
    const [flex, focused] = div(reg.stylepoints["fle-foc"])
    const profile = {
      ign: reg.ign,
      sw: reg.sw,
      ranks: {
        sz: reg.ranks.sz,
        tc: reg.ranks.tc,
        rm: reg.ranks.rm,
        cb: reg.ranks.cb,
      },
      stylepoints: {
        support,
        aggressive,
        objective,
        slayer,
        anchor,
        mobile,
        flex,
        focused,
      },
      cxp: {
        amount: reg.cxp.amount,
        placement: Number(reg.cxp.placement),
      },
      smashgg: reg.smashgg.link.split("/").slice(-1)[0],
    }
    const signup = {
      tzOffset: new Date().getTimezoneOffset(),
      recruiting: Boolean(reg.recruiting),
      confirmationCode: reg.smashgg?.code || "[sub]",
      legal: Boolean(reg.legal),
    }
    userDataMut.mutate(profile)
    userSignupMut.mutate(signup)
    navigate("complete", { state: { complete: true } })
  }

  return (
    <FormContainer location={location}>
      <FromStatusAlerts
        {...{ tourneyQuery, userSignupQuery, userJoinedQuery }}
      />
      <form class="form">
        <div class="section px-0">
          <div class="title">Enter your in-game info</div>
          <div class="columns is-2 is-variable">
            <div class="column">
              <Field label="In-game name" expanded={true}>
                <Input
                  name="ign"
                  control={form.control}
                  errors={form.errors}
                  options={{
                    blocks: [10],
                  }}
                  rules={{ required: "This field is required" }}
                />
                <ErrorMessage options={[form.errors, "ign"]} />
              </Field>
            </div>
            <div class="column is-7">
              <Field label="Friend-code" expanded={true}>
                <Input
                  name="sw"
                  control={form.control}
                  errors={form.errors}
                  defaultValue="SW-"
                  options={{
                    prefix: "SW",
                    blocks: [2, 4, 4, 4],
                    delimiter: "-",
                    numericOnly: true,
                  }}
                  rules={{
                    minLength: {
                      value: 17,
                      message: "This field is required",
                    },
                  }}
                />
                <ErrorMessage options={[form.errors, "sw"]} />
              </Field>
            </div>
          </div>
          <div class="field">
            <Field label="Ranks">
              <div class="columns is-2 is-variable">
                <div class="column">
                  <div class="columns is-2 is-variable is-mobile">
                    <RankField label="Splat Zones">
                      <Input
                        {...rankProps("ranks.sz", form.control, form.errors)}
                      />
                      <ErrorMessage
                        options={[form.errors, "ranks.sz", <InvalidRank />]}
                      />
                    </RankField>
                    <RankField label="Tower Control">
                      <Input
                        {...rankProps("ranks.tc", form.control, form.errors)}
                      />
                      <ErrorMessage
                        options={[form.errors, "ranks.tc", <InvalidRank />]}
                      />
                    </RankField>
                  </div>
                </div>
                <div class="column">
                  <div class="columns is-2 is-variable is-mobile">
                    <RankField label="Rainmaker">
                      <Input
                        {...rankProps("ranks.rm", form.control, form.errors)}
                      />
                      <ErrorMessage
                        options={[form.errors, "ranks.rm", <InvalidRank />]}
                      />
                    </RankField>
                    <RankField label="Clam Blitz">
                      <Input
                        {...rankProps("ranks.cb", form.control, form.errors)}
                      />
                      <ErrorMessage
                        options={[form.errors, "ranks.cb", <InvalidRank />]}
                      />
                    </RankField>
                  </div>
                </div>
              </div>
            </Field>
          </div>
        </div>

        <div class="section px-0 pt-5">
          <div class="title">Set your stylepoints (playstyle)</div>
          {[
            [
              "Supportive",
              "Aggressive",
              "How would you characterize your play?",
            ],
            ["Objective", "Slayer", "What do you focus on when playing?"],
            ["Anchor", "Mobile", "What does your position look like?"],
            ["Flexible", "Focused", "How would you describe your weapon pool?"],
          ].map((field, index) => (
            <div key={index} class="section px-0 py-4">
              <Field label={field[2]}>
                <div class="is-size-5 is-pulled-right">{field[1]}</div>
                <div class="is-size-5">{field[0]}</div>
                <div class="field">
                  <Controller
                    control={form.control}
                    as={<input />}
                    defaultValue={5}
                    class="slider is-fullwidth is-large is-circle mt-0"
                    type="range"
                    name={stylepointsName(field)}
                    id={field[0]}
                    min="1"
                    max="9"
                    step="1"
                  />
                </div>
              </Field>
            </div>
          ))}
        </div>

        <div class="section px-0">
          <div class="title">Enter your competitive experience</div>
          <div class="section px-0 py-4">
            <Field label="How many tournaments have you competed in?">
              <div class="py-3">
                {[
                  "This is my first tournament :0",
                  "I've played in one or two tournaments.",
                  "I've played in some tournaments.",
                  "I've played in a lot of tournaments.",
                ].map((field, index) => (
                  <div key={index} class="field">
                    <input
                      ref={form.register({
                        required: "This field is required",
                      })}
                      value={field}
                      class="is-checkradio is-medium"
                      name="cxp.amount"
                      type="radio"
                      id={field}
                    />
                    <label htmlFor={field}>{field}</label>
                  </div>
                ))}
              </div>
              <ErrorMessage options={[form.errors, "cxp.amount"]} />
            </Field>
          </div>
          <div class="section px-0 py-4">
            <Field label="What is the highest number of teams you've placed above?">
              <div style={{ maxWidth: "15rem" }}>
                <Input
                  name="cxp.placement"
                  control={form.control}
                  errors={form.errors}
                  options={{
                    numericOnly: true,
                    blocks: [4],
                  }}
                />
                <div class="help">You can skip this if it's not applicable</div>
              </div>
            </Field>
          </div>
        </div>

        <div class="section px-0">
          <div class="title">Set up smash.gg</div>
          {(tourneyQuery.data?.isRegistrationOpen ||
            tourneyQuery.data?.hasEnded ||
            userSignupQuery.data?.type === "signup") && (
            <>
              <Field label="Register on smash.gg, copy the confirmation code when it pops up.">
                <div class="input is-normal p-1" style={{ height: "600px" }}>
                  <div
                    style={{
                      borderRadius: "4px",
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                    }}
                  >
                    {/* <iframe
                style={{ borderWidth: "10px" }}
                title="smashgg"
                src={`https://smash.gg/${tourneyQuery.data?.smashgg}/register/embed`}
                height="100%"
                width="100%"
              /> */}
                  </div>
                </div>
              </Field>
              <div class="field">
                <div class="section px-0 py-4">
                  <Field label="Enter your smash.gg confirmation code.">
                    <div style={{ maxWidth: "20em" }}>
                      <div class="field has-addons">
                        <div class="control is-expanded">
                          <Input
                            name="smashgg.code"
                            control={form.control}
                            errors={form.errors}
                            defaultValue="#"
                            options={{
                              lowercase: true,
                              blocks: [7],
                              prefix: "#",
                            }}
                            rules={{
                              pattern: {
                                value: /^#[0-9A-Fa-f]{6}$/,
                                message: "Invalid confirmation code",
                              },
                              minLength: {
                                value: 2,
                                message: "This field is required",
                              },
                            }}
                          />
                        </div>
                        <div class="control">
                          <span
                            class="input ease is-medium px-5 is-static"
                            style={{
                              backgroundColor: form.watch(
                                "smashgg.code",
                                "#dbdbdb"
                              ),
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <ErrorMessage options={[form.errors, "smashgg.code"]} />
                  </Field>
                </div>
              </div>
            </>
          )}
          <Field
            label={
              <div class="is-size-4">
                Paste the url of your{" "}
                <a
                  href="https://smash.gg/profile"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  smash.gg profile
                </a>
                .
              </div>
            }
          >
            <div style={{ maxWidth: "20em" }}>
              <div class="control is-medium has-icons-right">
                <Input
                  name="smashgg.link"
                  control={form.control}
                  errors={form.errors}
                  defaultValue="smash.gg/user/"
                  options={{
                    lowercase: true,
                    prefix: "smash.gg/user/",
                    blocks: [22],
                  }}
                  rules={{
                    pattern: {
                      value: /^smash\.gg\/user\/[0-9A-Fa-f]{8}$/,
                      message: "Invalid user slug",
                    },
                    minLength: {
                      value: 15,
                      message: "This field is required",
                    },
                  }}
                />
                {/* <span class="icon is-right">
                  <i class="fas fa-user-check" />
                </span> */}
              </div>
            </div>
            <ErrorMessage options={[form.errors, "smashgg.link"]} />
          </Field>
        </div>
        <div class="section px-0 pt-5">
          <div class="title">Final steps</div>
          <blockquote class="subtitle">
            Misc stuff, are donuts considered bagels.
          </blockquote>
          <div class="section px-0 py-4">
            <Field>
              <input
                ref={form.register}
                value={true}
                class="is-checkradio is-medium"
                name="recruiting"
                type="checkbox"
                id="cx-1"
              />
              <label htmlFor="cx-1">Are you currently recruiting?</label>
            </Field>
            <Field>
              <input
                ref={form.register({
                  required: "Please accept the terms and conditions",
                })}
                value={true}
                class="is-checkradio is-medium"
                name="legal"
                type="checkbox"
                id="cx-2"
              />
              <label htmlFor="cx-2">
                I agree to the <Link to="/legal">terms and conditions</Link>.
              </label>
              <ErrorMessage options={[form.errors, "legal"]} />
            </Field>
          </div>
        </div>
        <Field>
          <button
            type="button"
            onClick={form.handleSubmit(handleSignup)}
            class="button is-centered is-primary is-large"
            disabled={!userJoinedQuery.data || tourneyQuery.data?.hasEnded}
          >
            Submit
          </button>
          {!userJoinedQuery.data && (
            <ErrorMessage
              options={[
                {
                  submit: {
                    message:
                      "You must be in the Off the Dial discord server to participate",
                  },
                },
                "submit",
              ]}
            />
          )}
          {tourneyQuery.data?.hasEnded && (
            <ErrorMessage
              options={[
                {
                  submit: {
                    message: "Tournament has ended",
                  },
                },
                "submit",
              ]}
            />
          )}
        </Field>
      </form>
    </FormContainer>
  )
}

const FormContainer = ({ location, children }) => (
  <PrivateRoute location={location}>
    <Layout pageTitle="Signup">
      <div class="section">
        <div class="container is-fullhd">
          <div class="columns is-centered">
            <div class="column is-9">{children}</div>
          </div>
        </div>
      </div>
    </Layout>
  </PrivateRoute>
)

const FromStatusAlerts = ({
  tourneyQuery,
  userSignupQuery,
  userJoinedQuery,
}) => {
  const alerts = []
  if (tourneyQuery.data?.hasEnded) {
    alerts.push({
      type: "info",
      message: (
        <>
          <b>Tournament has ended</b>. Be on the look out for tournaments in the
          future!
        </>
      ),
    })
  } else if (!tourneyQuery.isLoading) {
    if (userSignupQuery.data?.data) {
      alerts.push({
        type: "info",
        message: (
          <>
            <b>You have already signed up</b>. To update your signup
            information, re-submit this form.
          </>
        ),
      })
    } else if (!userSignupQuery.isLoading) {
      if (!tourneyQuery.data?.isRegistrationOpen) {
        alerts.push({
          type: "warning",
          message: (
            <>
              <b>Signups have closed</b>. You can still submit this form and
              sign up as a sub.
            </>
          ),
        })
      }
    }
    if (userJoinedQuery.data === false) {
      alerts.push({
        type: "danger",
        message: (
          <>You must be in the Off the Dial discord server to participate.</>
        ),
      })
    }
  }

  return (
    <>
      {alerts.map((alert, i) => (
        <Alert type={alert.type} key={i}>
          <span>{alert.message}</span>
        </Alert>
      ))}
    </>
  )
}

const Field = ({ label, expanded, children }) => (
  <div class="field">
    <div class={`control ${expanded && "is-expanded"}`}>
      {label && <div class="is-size-4">{label}</div>}
      {children}
    </div>
  </div>
)

const RankField = ({ label, children }) => (
  <div class="column">
    <div class="control is-expanded">
      <div class="is-size-5">{label}</div>
      {children}
    </div>
  </div>
)

const Input = input => (
  <Controller
    defaultValue=""
    {...input}
    className={`input is-medium ${
      get(input.errors, input.name) && "is-danger"
    }`}
    as={<Cleave />}
  />
)

const ErrorMessage = ({ options: [errors, name, longest] }) => {
  const error = get(errors, name)

  if (error) {
    return <p class="help is-danger">{error.message}</p>
  } else {
    return <p class="help is-danger is-invisible">{longest || <br />}</p>
  }
}

const get = (obj, path) => path.split(".").reduce((acc, cur) => acc?.[cur], obj)

const stylepointsName = ([left, right]) => {
  const parse = field => field.toLowerCase().slice(0, 3)
  return `stylepoints.${parse(left)}-${parse(right)}`
}

const rankProps = (name, control, errors) => {
  return {
    name,
    control,
    errors,
    options: { delimiter: ".", blocks: [5, 1], uppercase: true },
    rules: {
      required: (
        <>
          This field is required
          <br />
          <br />
        </>
      ),
      pattern: {
        value: /(^C-$)|(^C$)|(^C\+$)|(^B-$)|(^B$)|(^B\+$)|(^A-$)|(^A$)|(^A\+$)|(^S$)|(^S\+\d$)|(^X[1-9]\d{3}(\.\d)?$)/,
        message: <InvalidRank />,
      },
    },
  }
}

const InvalidRank = () => (
  <>
    Invalid Rank
    <br />
    ex:{" "}
    {["C", "A-", "S+0", "X2350.1"].map((field, index) => (
      <span key={index}>
        <code class="has-text-danger" key={index}>
          {field}
        </code>
        {index !== 3 && ", "}
      </span>
    ))}
  </>
)

// const Signup = ({ location }) => (
//   <PrivateRoute location={location} redirect="/signup" component={Form} />
// )

export default Signup
