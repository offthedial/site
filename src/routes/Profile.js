import React, { useContext } from "react"
import { Link, navigate } from "gatsby"
import Layout from "src/components/Layout"
import Alert from "src/components/Alert"
import AuthContext from "src/context/AuthContext"
import Twemoji from "react-twemoji"

const Profile = () => {
  const { currentUser, logout } = useContext(AuthContext)
  const inServer = true
  const signalStrength = 120

  return (
    <Layout pageTitle="Profile">
      <div class="section">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-9">
              {!inServer && (
                <Alert type="warning">
                  <span>
                    You are not in the Off the Dial Discord server, this is
                    required to sign up for any tournaments.{" "}
                    <Link to="/discord">Join the discord</Link>.
                  </span>
                </Alert>
              )}
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
                          src={currentUser()?.photoURL}
                          alt="Profile"
                        />
                      </p>
                    </div>
                    <div class="level-item">
                      <div>
                        <div class="is-size-2 has-text-weight-semibold">
                          {currentUser()?.displayName}
                        </div>
                        {/* Tags maybe? Idk what to put here */}
                        <div class="field is-grouped is-grouped-multiline">
                          <SignalStrength value={signalStrength} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <blockquote class="is-size-3 my-6">
                  <Twemoji>
                    <span>🚧</span>{" "}
                    <span class="has-text-weight-medium">
                      Under construction
                    </span>{" "}
                    <span>🏗️</span>
                  </Twemoji>
                </blockquote>
                {/* <div
                  class="block has-background-white-bis"
                  style={{ borderRadius: 4 }}
                >
                  OTD Profile Data (firestore)
                </div> */}
                <div class="buttons">
                  {/* <button class="button is-primary">Refresh Profile</button> TODO: support this */}
                  {currentUser() && (
                    <button
                      class="button is-danger is-outlined"
                      onClick={() => logout(() => navigate("/"))}
                    >
                      Logout
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

const SignalStrength = ({ value }) => (
  <div class="control">
    <div class="tags has-addons">
      <span class="tag is-rounded is-cyan is-size-7">
        <span class="icon is-large">
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

export default Profile
