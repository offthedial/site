import React, { useContext } from "react"
import { navigate } from "gatsby"
import Layout from "src/components/Layout"
import PageContainer from "src/components/PageContainer"
import AuthContext from "src/context/AuthContext"

const Profile = () => {
  const { auth, currentUser } = useContext(AuthContext)

  return (
    <Layout pageTitle="Profile">
      <PageContainer>
        <h1>{currentUser?.uid}</h1>
        {currentUser && (
          <button
            class="button is-medium is-danger is-outlined"
            onClick={() => auth.logout(() => navigate("/"))}
          >
            Logout
          </button>
        )}
      </PageContainer>
    </Layout>
  )
}

export default Profile
