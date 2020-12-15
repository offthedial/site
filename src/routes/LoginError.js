import React from "react"
import { Link, navigate } from "gatsby"
import Layout from "src/components/Layout"

const LoginError = ({ location }) => {
  if (!location.state?.error && typeof window !== "undefined") {
    navigate("/")
    return <></>
  }
  return (
    <Layout pageTitle="Login Error">
      <section class="my-6 py-6">
        <div class="hero is-medium">
          <div class="hero-body has-text-centered">
            <h1 class="title is-size-1">Error</h1>
            <h1 class="subtitle is-size-2">{location.state?.error}</h1>
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
