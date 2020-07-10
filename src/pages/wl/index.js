import React from "react"
import { Link } from "gatsby"
import { Row, Col } from "react-bootstrap"

import Layout from "src/components/Layout"
import Mention from "src/components/Mention"
import TourneyLink from "src/components/TourneyLink"

const WeakestLink = () => (
  <Layout pageTitle="Weakest Link">
    <h1>About Weakest link</h1>
    <blockquote>
      <TourneyLink link="rules">
        <h2>Rules</h2>
      </TourneyLink>
      <TourneyLink link="https://smash.gg/wl">
        <h2>smash.gg Page</h2>
      </TourneyLink>
    </blockquote>
    <h4>
      <u>Weakest Link</u> is a unique, Off the Dial exclusive, free agent{" "}
      <i>and</i> team tournament. Originally an experiment, this unique
      tournament provides coaching opportunities for free agents, and teaching
      opportunities for teams.
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
    <p>
      There are 2 ways to register, either as an FA (free agent), or a 3-player
      team.
    </p>
    <Row>
      <Col>
        <h3>Registering as a 3-player-team</h3>
        <p>Each member of your team must have at least 1 X rank.</p>
        <p>
          If your team does not meet those requirements, each member of your
          team can sign up as an individual FA.
        </p>
      </Col>
      <Col>
        <h3>Registering as an FA (the Weakest Link)</h3>
        <p>FA’s have a skill ceiling of no X ranks.</p>
        <p>
          If your rank is too high, you can create a pickup team. Pickups can be
          formed in the <Mention>#build-a-team</Mention> channel or any of the
          pickup channels/servers listed on the{" "}
          <Link to="https://discord.io/inkademy">Inkademy</Link> discord server.
        </p>
      </Col>
    </Row>
    <p>Exceptions can be made! Contact the TO’s for more details.</p>
    <p>
      If you are unsure of what category you are, contact one of the Organisers
      and we’ll sort you out.
    </p>
  </Layout>
)

export default WeakestLink
