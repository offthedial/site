import React from "react"
import { Link } from "gatsby"

import Layout from "src/components/Layout"
import Mention from "src/components/Mention"
import InLi from "src/components/InLi"

const Idtga = () => (
  <Layout pageTitle="It's Dangerous to Go Alone">
    <h1>About It's Dangerous to Go Alone</h1>
    <blockquote>
      <InLi link="rules">
        <h2>Rules</h2>
      </InLi>
      <InLi link="https://smash.gg/idtga">
        <h2>smash.gg Page</h2>
      </InLi>
    </blockquote>
    <p>
      <u>It's Dangerous to go Alone</u> is our flagship, free agent tournament.
      Focused on creating balanced teams, and being accessible to everyone.
    </p>
    <p>All you need to do is sign up! The world is waiting…</p>

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
