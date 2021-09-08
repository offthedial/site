import React from "react"
import Layout from "src/components/Layout"
import PrivateRoute from "src/components/PrivateRoute"

const Profile = ({ location }) => (
  <PrivateRoute location={location}>
    <Layout></Layout>
  </PrivateRoute>
)

export default Profile
