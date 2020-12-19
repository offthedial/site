import React, { useContext } from "react"
import { navigate } from "gatsby"
import PrivateRoute from "src/components/PrivateRoute"
import Layout from "src/components/Layout"
import Alert from "src/components/Alert"
import AuthContext from "src/context/AuthContext"
import DBContext from "src/context/DBContext"
import useServerState from "src/hooks/useServerState"
import useSignedUp from "src/hooks/useSignedUp"
import Twemoji from "react-twemoji"

const ProfileRoute = () => {
  const { currentUser, logout } = useContext(AuthContext)
  const { user } = useContext(DBContext)
  const [inServer, refreshInServer] = useServerState()
  const [signedUp] = useSignedUp()

  return (
    <Layout pageTitle="Profile">
      <div class="section">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-9">
              <NotInServerAlert
                inServer={refreshInServer}
                refreshInServer={inServer}
                signedUp={signedUp}
              />
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
                          alt=""
                        />
                      </p>
                    </div>
                    <div class="level-item">
                      <div>
                        <div class="is-size-2 has-text-weight-semibold">
                          {currentUser()?.displayName}
                        </div>
                        <div class="field is-grouped is-grouped-multiline">
                          {signedUp && <SignedUp />}
                          <SignalStrength value={user().meta?.signal} />
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

const NotInServerAlert = ({ inServer, refreshInServer, signedUp }) => {
  let type
  if (!inServer) {
    type = signedUp ? "danger" : "warning"
  } else {
    type = null
  }
  if (!type) {
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
        <p class="control m-0">
          <button
            class={`button is-${type} is-outlined`}
            onClick={refreshInServer}
          >
            Refresh
          </button>
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

const Profile = ({ location }) => (
  <PrivateRoute location={location} component={ProfileRoute} />
)

export default Profile
