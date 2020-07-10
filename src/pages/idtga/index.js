import React from "react"
import { Link } from "gatsby"

import Layout from "src/components/Layout"
import Mention from "src/components/Mention"
import TourneyLink from "src/components/TourneyLink"

const Idtga = () => (
  <Layout pageTitle="It's Dangerous to Go Alone">
    <h1>About It's Dangerous to Go Alone</h1>
    <blockquote>
      <TourneyLink link="rules">
        <h2>Rules</h2>
      </TourneyLink>
      <TourneyLink link="https://smash.gg/idtga">
        <h2>smash.gg Page</h2>
      </TourneyLink>
    </blockquote>
    <h4>
      <u>It's Dangerous to go Alone</u> is our flagship, free agent tournament.
      Focused on creating balanced teams, and being accessible to everyone.
    </h4>
    <h4>All you need to do is sign up! The world is waiting…</h4>

    <h2>Registration</h2>
    <p>
      To register, simply enter <code>$signup</code> in{" "}
      <Mention>#bot-commands</Mention> on <Link to="/discord">Discord</Link>!
      The bot will guide you through the complete process. If you have any
      questions or issues with the bot, feel free to ask in{" "}
      <Mention>#helpdesk</Mention>.
    </p>
  </Layout>
)

export default Idtga
