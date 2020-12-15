import React from "react"
import { Router } from "@reach/router"

import PrivateRoute from "src/components/PrivateRoute"

import ProfileRoute from "src/routes/Profile"
import Login from "src/routes/Login"
import LoginError from "src/routes/LoginError"

const Profile = () => (
  <Router basepath="/">
    <PrivateRoute path="/profile" component={ProfileRoute} />
    <Login path="/profile/login" />
    <LoginError path="/profile/login/error" />
  </Router>
)

export default Profile
