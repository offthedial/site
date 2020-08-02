import React from "react"

import Layout from "src/components/Layout"
import PageContainer from "src/components/PageContainer"

const NotFound = () => (
  <Layout pageTitle="404">
    <PageContainer>
      <h1>404</h1>
      <h2>There's nothing here.</h2>
    </PageContainer>
  </Layout>
)

export default NotFound
