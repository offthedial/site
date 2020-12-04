import React from "react"
import { Router } from "@reach/router"

import PrivateRoute from "src/components/PrivateRoute"

import ProfileRoute from "src/routes/Profile"
import Login from "src/routes/Login"

const Profile = () => (
  <Router basepath="/">
    <PrivateRoute path="/profile" component={ProfileRoute} />
    <Login path="/profile/login" />
  </Router>
)

export default Profile
