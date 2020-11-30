import React, { useContext } from "react"
import { navigate } from "gatsby"
import Layout from "src/components/Layout"
import PageContainer from "src/components/PageContainer"
import { AuthContext } from "src/components/AuthProvider"
import { auth } from "src/services/firebase"

const Firebase = () => {
  const { currentUser } = useContext(AuthContext)
  return (
    <Layout pageTitle="Firebase Dashboard">
      <PageContainer>
        <h1>{currentUser?.email || "No User"}</h1>
        <div class="buttons">
          <button class="button is-primary" onClick={auth.logout}>
            Logout
          </button>
          <button class="button is-primary" onClick={() => navigate("login")}>
            Login
          </button>
        </div>
      </PageContainer>
    </Layout>
  )
}

export default Firebase
