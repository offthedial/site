import React from "react"
import { Link, navigate } from "gatsby"
import Layout from "src/components/Layout"
import PrivateRoute from "src/components/PrivateRoute"
import Alert from "src/components/Alert"
import {
  useUserData,
  useUserDiscord,
  useUserJoined,
  useUserSignup,
  useMutLogout,
} from "src/app/hooks"

const Profile = ({ location }) => {
  const user = useUserData()
  const userDiscord = useUserDiscord()
  const userJoined = useUserJoined()
  const userSignup = useUserSignup()
  const mutLogout = useMutLogout()

  return (
    <PrivateRoute location={location}>
      <Layout pageTitle="Profile">
        <div class="section">
          <div class="container">
            <div class="columns is-centered">
              <div class="column is-9">
                <JoinedAlert {...{ userJoined, userSignup }} />
                <div class="mb-5 is-size-4 has-text-weight-bold">
                  My Profile
                </div>
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
                            {userSignup.data && (
                              <div class="control">
                                <div class="tags has-addons">
                                  <span class="tag is-rounded is-orange is-size-7">
                                    <span class="icon is-medium pr-1">
                                      <i class="fas fa-user-check" />
                                    </span>
                                    Signed Up!
                                  </span>
                                  {userSignup.data?.type === "sub" && (
                                    <span class="tag is-rounded is-orange is-light is-size-7">
                                      As a Sub
                                    </span>
                                  )}
                                </div>
                              </div>
                            )}
                            <div class="control">
                              <div class="tags has-addons">
                                <span class="tag is-rounded is-cyan is-size-7">
                                  <span class="icon is-medium pr-1">
                                    <i class="fas fa-signal" />
                                  </span>
                                  Signal Strength
                                </span>
                                <span class="tag is-rounded is-cyan is-light is-size-7">
                                  <span class="is-family-monospace">
                                    {user.data?.meta?.signal || 0}
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* OTD Profile Data */}
                  <blockquote class="is-size-3 my-6">
                    Under construction
                  </blockquote>
                  {/* <div
                  class="block has-background-white-bis"
                  style={{ borderRadius: 4 }}
                ></div> */}
                  <div class="buttons">
                    {/* <button class="button is-cyan" onClick={userDiscord.refetch}>
                    Refresh Profile
                  </button> */}
                    <button
                      class="button is-danger is-inverted is-light"
                      onClick={() => {
                        mutLogout.mutate()
                        navigate("/")
                      }}
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
    </PrivateRoute>
  )
}

const JoinedAlert = ({ userJoined, userSignup }) => {
  if (userSignup.isLoading || userJoined.isLoading) {
    return <></>
  }
  let type
  if (!userJoined.data) {
    if (!!userSignup.data?.type) {
      type = "danger"
    } else {
      type = "warning"
    }
  } else {
    return <></>
  }
  return (
    <Alert type={type}>
      <div>
        <div>
          {type === "warning"
            ? "You are not in the Off the Dial discord server. This is required before you sign up for any tournaments."
            : "You are not in the Off the Dial discord server, but you have signed up. You will be removed if you do not join the server."}
        </div>
        <div class="pt-3">
          <Link
            class="has-text-weight-bold"
            style={{ textDecoration: "none" }}
            to="/discord"
          >
            Join Server
          </Link>
        </div>
      </div>
    </Alert>
  )
}

export default Profile
