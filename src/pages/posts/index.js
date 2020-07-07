import React from "react"

import Layout from "src/components/layout"

export default function Posts({ data }) {
    console.log(data)
    return (
        <Layout pageTitle="Posts">
            <h1>Posts</h1>

        </Layout>
    )
}