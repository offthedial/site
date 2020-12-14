import React, { useState, useEffect, useContext } from "react"
import { useForm, Controller } from "react-hook-form"
import { Link, navigate } from "gatsby"
import Cleave from "cleave.js/react"
import Layout from "src/components/Layout"
import Alert from "src/components/Alert"
import PrivateRoute from "src/components/PrivateRoute"
import DBContext from "src/context/DBContext"

const smashgg = "https://smash.gg/idtga/register/embed"

const sliders = [
  ["Supportive", "Aggresive", "How would you characterize your play?"],
  ["Objective", "Slayer", "What do you focus on when playing?"],
  ["Anchor", "Mobile", "What does your position look like?"],
  ["Flexible", "Focused", "How would you describe your weapon pool?"],
]

const Form = () => {
  const { handleSignup, user, userSignedUp } = useContext(DBContext)
  const [signedUp, setSignedUp] = useState()

  useEffect(() => {
    userSignedUp().then(result => {
      setSignedUp(result)
    })
  })

  const { control, errors, register, watch, handleSubmit } = useForm({
    mode: "onTouched",
    defaultValues: defaultValues(user.profile),
  })

  const onSubmit = submitted => {
    handleSignup(submitted)
    navigate("complete", { state: { complete: true } })
  }

  const smashggCode = watch("smashgg.code", "#dbdbdb")

  return (
    <FormContainer>
      <Alert type="info" condition={() => signedUp}>
        <span>
          <b>You've already signed up</b>. Re-submitting this form will update
          your current signup.
        </span>
      </Alert>
      <form class="form">
        <div class="section px-0">
          <div class="title">In-game Info</div>
          <blockquote class="subtitle">
            What are your in-game name and stats?
          </blockquote>
          <div class="columns is-2 is-variable">
            <div class="column">
              <Field label="IGN" expanded={true}>
                <Input
                  name="ign"
                  control={control}
                  errors={errors}
                  options={{
                    blocks: [10],
                  }}
                  rules={{ required: "This field is required" }}
                />
                <ErrorMessage options={[errors, "ign"]} />
              </Field>
            </div>
            <div class="column is-7">
              <Field label="Friend Code" expanded={true}>
                <Input
                  name="sw"
                  control={control}
                  errors={errors}
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
                <ErrorMessage options={[errors, "sw"]} />
              </Field>
            </div>
          </div>
          <div class="field">
            <Field label="Ranks">
              <div class="columns is-2 is-variable">
                <div class="column">
                  <div class="columns is-2 is-variable is-mobile">
                    <RankField label="Splat Zones">
                      <Input {...rankProps("ranks.sz", control, errors)} />
                      <ErrorMessage
                        options={[errors, "ranks.sz", <InvalidRank />]}
                      />
                    </RankField>
                    <RankField label="Tower Control">
                      <Input {...rankProps("ranks.tc", control, errors)} />
                      <ErrorMessage
                        options={[errors, "ranks.tc", <InvalidRank />]}
                      />
                    </RankField>
                  </div>
                </div>
                <div class="column">
                  <div class="columns is-2 is-variable is-mobile">
                    <RankField label="Rainmaker">
                      <Input {...rankProps("ranks.rm", control, errors)} />
                      <ErrorMessage
                        options={[errors, "ranks.rm", <InvalidRank />]}
                      />
                    </RankField>
                    <RankField label="Clam Blitz">
                      <Input {...rankProps("ranks.cb", control, errors)} />
                      <ErrorMessage
                        options={[errors, "ranks.cb", <InvalidRank />]}
                      />
                    </RankField>
                  </div>
                </div>
              </div>
            </Field>
          </div>
        </div>

        <div class="section px-0 pt-5">
          <div class="title">Stylepoints</div>
          <blockquote class="subtitle">What's your playstyle?</blockquote>
          {sliders.map((field, index) => (
            <div key={index} class="section px-0 py-4">
              <Field label={field[2]}>
                <div class="is-size-5 is-pulled-right">{field[1]}</div>
                <div class="is-size-5">{field[0]}</div>
                <div class="field">
                  <Controller
                    control={control}
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
          <div class="title">Competitive Experience</div>
          <blockquote class="subtitle">
            What's your past Splatoon competitive experience?
          </blockquote>
          <div class="section px-0 py-4">
            <Field label="How many tournaments have you competed in?">
              {[
                "This is my first tournament :0",
                "I've played in one or two tournaments.",
                "I've played in some tournaments.",
                "I've played in a lot of tournaments.",
              ].map((field, index) => (
                <div key={index} class="field">
                  <input
                    ref={register({ required: "This field is required" })}
                    value={field}
                    class="is-checkradio is-medium"
                    name="cxp.amount"
                    type="radio"
                    id={field}
                  />
                  <label htmlFor={field}>{field}</label>
                </div>
              ))}
              <ErrorMessage options={[errors, "cxp.amount"]} />
            </Field>
          </div>
          <div class="section px-0 py-4">
            <Field label="What is the highest number of teams you've placed above?">
              <div style={{ maxWidth: "15rem" }}>
                <Input
                  name="cxp.placement"
                  control={control}
                  errors={errors}
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
          <div class="title">Smash.gg</div>
          <blockquote class="subtitle">
            Register on smash.gg, copy the confirmation code when it pops up.
          </blockquote>
          <div style={{ height: "600px" }}>
            {/* <iframe title="smashgg" src={smashgg} height="100%" width="100%" /> */}
          </div>
          <div class="field">
            <div class="section px-0 py-4">
              <div class="columns">
                <div class="column is-7">
                  <Field label="User ID">
                    <Input
                      name="smashgg.link"
                      control={control}
                      errors={errors}
                      defaultValue="smash.gg/user/"
                      options={{
                        prefix: "smash.gg/user/",
                      }}
                      rules={{
                        minLength: {
                          value: 15,
                          message: "This field is required",
                        },
                      }}
                    />
                    <p class="help">
                      Go to your{" "}
                      <a
                        href="https://smash.gg/profile"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        smash.gg profile
                      </a>{" "}
                      and copy your ID from the url.
                    </p>
                    <ErrorMessage options={[errors, "smashgg.link"]} />
                  </Field>
                </div>
                <div class="column">
                  <Field label="Confirmation Code">
                    <div class="field has-addons">
                      <div class="control is-expanded">
                        <Input
                          name="smashgg.code"
                          control={control}
                          errors={errors}
                          defaultValue="#"
                          options={{
                            lowercase: true,
                            blocks: [7],
                            prefix: "#",
                          }}
                          rules={{
                            pattern: {
                              value: /^#[0-9A-Fa-f]+$/,
                              message: "Invalid confirmation code",
                            },
                            minLength: {
                              value: 7,
                              message: "This field is required",
                            },
                          }}
                        />
                      </div>
                      <div class="control">
                        <span
                          class="input ease is-medium px-5 is-static"
                          style={{ backgroundColor: smashggCode }}
                        />
                      </div>
                    </div>
                    <ErrorMessage options={[errors, "smashgg.code"]} />
                  </Field>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section px-0 pt-5">
          <div class="title">Final steps</div>
          <blockquote class="subtitle">
            Misc stuff, are donuts considered bagels.
          </blockquote>
          <div class="section px-0 py-4">
            <Field>
              <input
                ref={register}
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
                ref={register({
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
              <ErrorMessage options={[errors, "legal"]} />
            </Field>
          </div>
        </div>
        <Field>
          <button
            type="button"
            onClick={handleSubmit(onSubmit)}
            class="button is-centered is-primary is-large"
          >
            Submit
          </button>
        </Field>
      </form>
    </FormContainer>
  )
}

const FormContainer = ({ children }) => (
  <Layout>
    <div class="section">
      <div class="container is-desktop">
        <div class="columns is-centered">
          <div class="column is-8">{children}</div>
        </div>
      </div>
    </div>
  </Layout>
)

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
      <div class="has-text-weight-medium is-size-7">{label}</div>
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

const defaultValues = obj => ({
  ...obj,
  stylepoints: {
    "sup-agg": obj.stylepoints["aggressive"],
    "obj-sla": obj.stylepoints["slayer"],
    "anc-mob": obj.stylepoints["mobile"],
    "fle-foc": obj.stylepoints["focused"],
  },
  smashgg: { link: `smash.gg/user/${obj.smashgg}` },
})

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

const Signup = ({ location }) => (
  <PrivateRoute location={location} component={Form} />
)

export default Signup
