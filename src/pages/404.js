import React from "react"

import Layout from "src/components/Layout"
import PageContainer from "src/components/PageContainer"
import JumboPad from "src/components/JumboPad"

const NotFound = () => (
  <Layout pageTitle="404">
    <PageContainer>
      <JumboPad>
        <div class="is-hidden-mobile">
          <div class="title has-text-weight-bold" style={{ fontSize: "10em" }}>
            404
          </div>
          <div
            class="subtitle has-text-weight-medium"
            style={{ fontSize: "5em" }}
          >
            There's nothing here.
          </div>
        </div>
        <div class="is-hidden-tablet">
          <div class="title has-text-weight-bold" style={{ fontSize: "8em" }}>
            404
          </div>
          <div
            class="subtitle has-text-weight-medium"
            style={{ fontSize: "4em" }}
          >
            There's nothing here.
          </div>
        </div>
      </JumboPad>
    </PageContainer>
  </Layout>
)

export default NotFound
