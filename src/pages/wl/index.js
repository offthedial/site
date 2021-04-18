import React from "react"

import { Link } from "gatsby"
import Layout from "src/components/Layout"
import PageContainer from "src/components/PageContainer"
import ScheduleTime from "src/components/ScheduleTime"
import Highlight from "src/components/Highlight"
import Mention from "src/components/Mention"

const WeakestLink = () => (
  <Layout
    pageTitle="Weakest Link"
    meta={{
      image: "https://assets.otd.ink/wl/logo.svg",
      description: `Weakest Link is a unique, Off the Dial exclusive, free agent and team tournament. Originally an experiment, It focuses on providing learning opportunities for free agents, and coaching opportunities for teams.`,
    }}
  >
    <PageContainer>
      <Highlight>
        <div class="column is-8 has-text-white">
          <h1 class="has-text-white">About Weakest link</h1>
          <p class="is-size-6">
            <u>Weakest Link</u> is a unique, Off the Dial exclusive, free agent{" "}
            <i>and</i> team tournament. Originally an experiment, It focuses on
            providing learning opportunities for free agents, and coaching
            opportunities for teams.
          </p>
          <p>All you need to do is sign up! The world is waiting…</p>
          <div class="buttons">
            <Link to="/signup" class="button is-medium is-orange is-inverted">
              Signup
            </Link>
            <Link to="/wl/rules" class="button is-medium is-primary is-text">
              Rules
            </Link>
          </div>
        </div>
        <div class="column is-4">
          <img src="https://assets.otd.ink/wl/logo-nobg.svg" alt="" />
        </div>
      </Highlight>
      <div class="section px-0">
        <h2>Registration Details</h2>
        <p>
          There are 2 ways to register, either as an FA (free agent), or a
          3-player team.
          <br />
          If you are unsure of what category you are, contact one of the
          Organisers and we’ll sort you out.
        </p>
        <p>Exceptions can be made! Contact the TO’s for more details.</p>
        <div class="columns">
          <div class="column">
            <h3>Registering as a 3-player-team</h3>
            <p>Each member of your team must have at least 1 X rank.</p>
            <p>
              If your team does not meet those requirements, each member of your
              team can sign up as an individual FA.
            </p>
            <p>
              You can also sign up with 1 sub. You are completely in control how
              you manage your sub. The sub cannot substitute for the Weakest
              Link.
            </p>
          </div>
          <div class="column">
            <h3>Registering as an FA (the Weakest Link)</h3>
            <p>FA’s have a skill ceiling of no X ranks.</p>
            <p>
              If your rank is too high, you can create a pickup team. Pickups
              can be formed in the <Mention>#build-a-team</Mention> channel or
              any of the pickup channels/servers listed on the{" "}
              <a href="https://discord.io/inkademy">Inkademy</a> discord server.
            </p>
          </div>
        </div>
      </div>
      <div class="section px-0">
        <h2>Schedule</h2>
        <table class="table">
          <tbody>
            <ScheduleTime date="9 Days">
              Check-in opens and registration <strong>remains open</strong>.
            </ScheduleTime>
            <ScheduleTime date="8 Days">
              Both check-in and registration will close, invalid attendees will
              be removed, and we start assembling teams.
            </ScheduleTime>
            <ScheduleTime date="7 Days">
              Players receive their teams, and the maplist is published. You can
              now practice with your team.
            </ScheduleTime>
            <ScheduleTime date="1 Hour">
              Players will be alerted and preparations will commence. We request
              that you be online on both Splatoon 2 and Discord.
            </ScheduleTime>
            <ScheduleTime date="10 Minutes">
              Stream begins on <Link to="/twitch">Twitch</Link>, check it out if
              you're not playing!
            </ScheduleTime>
          </tbody>
        </table>
      </div>
    </PageContainer>
  </Layout>
)

export default WeakestLink
