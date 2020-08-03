import React from "react"

import Layout from "src/components/Layout"
import PageContainer from "src/components/PageContainer"

const NotFound = () => (
  <Layout pageTitle="404">
    <div>
      <PageContainer>
        <div class="columns mt-5 is-centered">
          <div class="column is-5">
            <h1 class="title is-1 has-text-weight-bold">404</h1>
            <h2 class="subtitle is-2 has-text-weight-bold">
              There's nothing here.
            </h2>
          </div>
        </div>
      </PageContainer>
    </div>
  </Layout>
)

export default NotFound
