import React from "react"
import { Link, navigate } from "gatsby"
import Layout from "src/components/Layout"

const ProfileLoginError = ({ location }) => {
  if (!location.state?.error && typeof window !== "undefined") {
    navigate("/")
  }
  console.log(location.state?.from)
  return (
    <Layout pageTitle="Login Error" class="is-flex">
      <section class="my-6">
        <div class="hero is-medium">
          <div class="hero-body has-text-centered">
            <h1 class="title is-size-1">Error</h1>
            <div class="subtitle is-size-3">{location.state?.error}</div>
            <Link to=".." state={{ from: location.state?.from }}>
              <button class="button is-large is-primary">Retry</button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ProfileLoginError
