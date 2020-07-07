import React from "react"
import { Link } from "gatsby"
import { Row, Col } from "react-bootstrap"

import Layout from "src/components/layout"
import ListLink from "src/components/listlink"

const WeakestLink = () => (
  <Layout pageTitle="Weakest Link">
    <h1>About Weakest link</h1>
    <blockquote>
      <ListLink
        to="rules"
      >
        <h3>Rules</h3>
      </ListLink>
      <ListLink
        to="https://smash.gg/wl"
      >
        <h3>smash.gg Page</h3>
      </ListLink>
    </blockquote>
    <h4><u>Weakest Link</u> is a unique, Off the Dial exclusive, free agent <b>and</b> team tournament for Splatoon 2! Sign up as a 3-player team or a lone free agent, and we will pair each team to each link. This tournament provides the opportunity for free agents to get coaching experience in a team setting, and for teams to test their communication and teaching skills.</h4>
    <h4>All you need to do is sign up! The world is waiting…</h4>

    <h2>Registration</h2>
    <p>To register, simply enter <code>$signup</code> in <code>#bot-commands</code> on <Link to="/discord">Discord</Link>! The bot will guide you through the complete process. If you have any questions or issues with the bot, feel free to ask in <code>#helpdesk</code>.</p>
    <p>There are 2 ways to register, either as an FA (free agent), or a 3-player team.</p>
    <Row>
      <Col>
        <h3>Registering as a 3-player-team</h3>
        <p>
          Each member of your team must have at least 1 X rank.
        </p>
        <p>
          If your team does not meet those requirements, each member of your team can sign up as an individual FA.
        </p>
      </Col>
      <Col>
        <h3>Registering as an FA (the Weakest Link)</h3>
        <p>
          FA’s have a skill ceiling of no X ranks.
        </p>
        <p>
          If your rank is too high, you can create a pickup team. Pickups can be formed in the <code>#build-a-team</code> channel or any of the pickup channels/servers listed on the <Link to="https://discord.io/inkademy">Inkademy</Link> discord server.
        </p>
      </Col>
    </Row>
    <p>Exceptions can be made! Contact the TO’s for more details.</p>
    <p>If you are unsure of what category you are, contact one of the Organisers and we’ll sort you out.</p>
  </Layout>
)

export default WeakestLink