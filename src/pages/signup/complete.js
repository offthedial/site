import React from "react"
import { Link, navigate } from "gatsby"
import Layout from "src/components/Layout"
import styled from "styled-components"

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Content = styled.div`
  flex-direction: column;
`

const Complete = ({ location }) => {
  if (!location.state?.complete) {
    navigate("/")
    return <></>
  }
  return (
    <Layout pageTitle="Thank you for registering">
      <section class="my-6 py-6">
        <div class="hero is-medium">
          <div class="hero-body has-text-centered">
            <h1 class="title is-size-1">Thank you for registering!</h1>
            <Link to="/">
              <button class="button is-large is-primary">Back to Home</button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Complete
