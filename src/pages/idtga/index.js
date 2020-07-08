import React from "react"
import { Link } from "gatsby"

import { rhythm } from "src/utils/typography"
import Layout from "src/components/layout"
import Mention from "../../components/mention"

const Idtga = () => (
  <Layout pageTitle="It's Dangerous to Go Alone">
    <h1>About It's Dangerous to Go Alone</h1>
    <blockquote>
      <Link
        style={{ display: `inline-block`, marginRight: rhythm(1) }}
        to="rules"
      >
        <h2>Rules</h2>
      </Link>
      <Link
        style={{ display: `inline-block`, marginRight: rhythm(1) }}
        to="https://smash.gg/idtga"
      >
        <h2>smash.gg Page</h2>
      </Link>
    </blockquote>
    <h4>
      <u>It's Dangerous to go Alone</u> is a free agent tournament focused on
      creating balanced teams, and being accessible to everyone.
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
