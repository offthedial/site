import React from "react"
import { Link, navigate } from "gatsby"
import Layout from "src/components/Layout"
import Loading from "src/components/Loading"

const Complete = ({ location }) => {
  if (!location.state?.complete && typeof window !== "undefined") {
    navigate("/")
    return <Loading />
  }
  return (
    <Layout pageTitle="Thank you for registering">
      <section class="my-6 py-6">
        <div class="hero is-medium">
          <div class="hero-body has-text-centered">
            <h1 class="title is-size-1">Thank you for registering!</h1>
            <Link to="/profile">
              <button class="button is-large is-primary">
                View your profile
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Complete
