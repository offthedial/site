import React from "react"
import { Link, navigate } from "gatsby"
import Layout from "src/components/Layout"

const LoginError = ({ location }) => {
  if (!location.state?.error && typeof window !== "undefined") {
    navigate("/")
    return <></>
  }
  return (
    <Layout pageTitle="Login Error" class="is-flex">
      <section class="my-6">
        <div class="hero is-medium">
          <div class="hero-body has-text-centered">
            <h1 class="title is-size-1">Error</h1>
            <h1 class="subtitle is-size-2">
              <code>{location.state?.error}</code>
            </h1>
            <Link to="..">
              <button class="button is-large is-primary">Retry</button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default LoginError
