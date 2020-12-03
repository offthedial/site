import React from "react"

import Layout from "src/components/Layout"
import PageContainer from "src/components/PageContainer"
import JumboPad from "src/components/JumboPad"

const NotFound = () => (
  <Layout pageTitle="404">
    <PageContainer>
      <JumboPad>
        <h1 class="title is-1 has-text-weight-bold">404</h1>
        <h2 class="subtitle is-2 has-text-weight-bold">
          There's nothing here.
        </h2>
      </JumboPad>
    </PageContainer>
  </Layout>
)

export default NotFound
