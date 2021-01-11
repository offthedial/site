import React from "react"
import { navigate } from "gatsby"
import Layout from "src/components/Layout"
import Alert from "src/components/Alert"
import {
  useLogoutMut,
  useUserData,
  useUserDiscord,
  useUserJoined,
  useUserSignup,
} from "src/app/hooks"

const Profile = () => {
  const user = useUserData()
  const userDiscord = useUserDiscord()
  const userJoined = useUserJoined()
  const userSignup = useUserSignup()
  const logoutMut = useLogoutMut()

  return (
    <Layout pageTitle="Profile">
      <div class="section">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-9">
              <NotInServerAlert {...{ userJoined, userSignup }} />
              <div class="mb-5 is-size-4 has-text-weight-bold">My Profile</div>
              <div
                class="p-4 has-background-white-bis"
                style={{ borderRadius: 4 }}
              >
                <div class="level">
                  <div class="level-left">
                    <div class="level-item">
                      <p class="image is-96x96">
                        <img
                          class="is-rounded"
                          src={userDiscord.data?.avatarUrl}
                          alt=""
                        />
                      </p>
                    </div>
                    <div class="level-item">
                      <div>
                        <div class="is-size-2 has-text-weight-semibold has-text-centered-mobile">
                          {userDiscord.data?.username}
                        </div>
                        <div class="field is-grouped is-grouped-multiline">
                          {userSignup.data && <SignedUp />}
                          <SignalStrength value={user.data?.meta?.signal} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <blockquote class="is-size-3 my-6">
                  Under construction
                </blockquote>
                {/* <div
                  class="block has-background-white-bis"
                  style={{ borderRadius: 4 }}
                >
                  OTD Profile Data (firestore)
                </div> */}
                <div class="buttons">
                  <button class="button is-cyan" onClick={userDiscord.refetch}>
                    Refresh Profile
                  </button>
                  <button
                    class="button is-danger is-outlined"
                    onClick={() =>
                      logoutMut.mutate({ callback: () => navigate("/") })
                    }
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

const NotInServerAlert = ({ userJoined, userSignup }) => {
  if (userSignup.isLoading || userJoined.isLoading) {
    return <></>
  }
  let type
  if (!userJoined.data) {
    if (!userSignup.data) {
      type = "danger"
    } else {
      type = "warning"
    }
  } else {
    return <></>
  }
  return (
    <Alert type={type}>
      <span>
        {type === "warning"
          ? "You are not in the Off the Dial discord server. This is required to sign up for any tournaments."
          : "You are not in the Off the Dial discord server, but you have signed up. You will be removed if you do not join the server."}
      </span>
      <div class="field has-addons pl-4">
        <p class="control m-0">
          <a
            href="/discord"
            target="_blank"
            rel="noreferrer"
            class={`button is-${type} is-outlined`}
          >
            Join
          </a>
        </p>
      </div>
    </Alert>
  )
}

const SignalStrength = ({ value }) => (
  <div class="control">
    <div class="tags has-addons">
      <span class="tag is-rounded is-cyan is-size-7">
        <span class="icon is-medium pr-1">
          <i class="fas fa-signal" />
        </span>
        Signal Strength
      </span>
      <span class="tag is-rounded is-cyan is-light is-size-7">
        <span class="is-family-monospace">{value}</span>
      </span>
    </div>
  </div>
)

const SignedUp = () => (
  <div class="control">
    <span class="tag is-rounded is-orange is-size-7">
      <span class="icon is-medium pr-1">
        <i class="fas fa-user-check" />
      </span>
      Signed Up!
    </span>
  </div>
)

// const Profile = ({ location }) => (
//   <PrivateRoute location={location} component={ProfileRoute} />
// )

export default Profile
