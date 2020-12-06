import React, { useContext } from "react"
import { navigate } from "gatsby"
import Layout from "src/components/Layout"
import AuthContext from "src/context/AuthContext"

const Profile = () => {
  const { auth, currentUser } = useContext(AuthContext)

  return (
    <Layout pageTitle="Profile">
      <div class="section">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-10">
              <div class="mb-0 is-size-3 has-text-grey">Profile</div>
              <div
                class="pb-6 pt-6 px-6 has-background-white-ter"
                style={{ borderRadius: 4 }}
              >
                <div class="level">
                  <div class="level-left">
                    <div class="level-item">
                      <p class="image is-64x64">
                        <img class="is-rounded" src={currentUser()?.photoURL} />
                      </p>
                    </div>
                    <div class="level-item">
                      <div class="is-size-2">{currentUser()?.displayName}</div>
                    </div>
                  </div>
                </div>
                <div
                  class="pb-6 pt-6 px-6 has-background-white-bis"
                  style={{ borderRadius: 4 }}
                ></div>
                <h1 class="subtitle is-inlig"></h1>
                <div class="buttons">
                  <button disabled class="button is-primary">
                    Update Profile
                  </button>
                  {currentUser && (
                    <button
                      class="button is-danger is-outlined"
                      onClick={() => auth.logout(() => navigate("/"))}
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

export default Profile
