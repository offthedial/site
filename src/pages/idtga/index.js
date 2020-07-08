import React from "react"
import { Link } from "gatsby"

import { rhythm } from "src/utils/typography"
import Layout from "src/components/layout"

const Idtga = () => (
  <Layout pageTitle="It's Dangerous to Go Alone">
    <h1>About It's Dangerous to Go Alone</h1>
    <blockquote>
      <Link style={{ display: `inline-block`, marginRight: rhythm(1) }} to="rules">
        <h3>Rules</h3>
      </Link>
      <Link style={{ display: `inline-block`, marginRight: rhythm(1) }} to="https://smash.gg/idtga">
        <h3>smash.gg Page</h3>
      </Link>
    </blockquote>
    <h4>
      <u>It’s Dangerous to go Alone</u> is a free agent tournament for Splatoon
      2! In a free agent tournament, you don’t sign up with a team. We place you
      into teams balanced by playstyles, tournament experience and ranks. This
      tournament is open to anyone, no matter the skill level. Better yet, each
      team has a chance of winning.
    </h4>
    <h4>All you need to do is sign up! The world is waiting…</h4>

    <h2>Registration</h2>
    <p>
      To register, simply enter <code>$signup</code> in{" "}
      <code>#bot-commands</code> on <Link to="/discord">Discord</Link>! The bot
      will guide you through the complete process. If you have any questions or
      issues with the bot, feel free to ask in <code>#helpdesk</code>.
    </p>
  </Layout>
)

export default Idtga
