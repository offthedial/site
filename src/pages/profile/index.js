import React from "react"
import useTourney from "src/app/useTourney"
import useUser from "src/app/useUser"
import useDiscord from "src/app/useDiscord"
import useUserSignup from "src/app/useUserSignup"
import Layout from "src/components/Layout"
import PrivateRoute from "src/components/PrivateRoute"

const Profile = () => {
  const user = useUser()
  const discord = useDiscord()
  const tourney = useTourney()
  const signup = useUserSignup()
  return (
    <PrivateRoute>
      <Layout>piss</Layout>
    </PrivateRoute>
  )
}

export default Profile
