import React from "react"

import { Link } from "gatsby"
import Layout from "src/components/Layout"
import PageContainer from "src/components/PageContainer"
import ScheduleTime from "src/components/ScheduleTime"
import Highlight from "src/components/Highlight"

const Idtga = () => (
  <Layout
    pageTitle="It's Dangerous to go Alone"
    meta={{
      image: "https://assets.otd.ink/idtga/logo.png",
      description: `It's Dangerous to go Alone is our flagship, solo registration tournament. Focused on creating balanced teams, and being accessible to everyone.`,
    }}
  >
    <PageContainer>
      <Highlight>
        <div class="column is-8 has-text-white">
          <h1 class="has-text-white">About It's Dangerous to go Alone</h1>
          <p>
            <u>It's Dangerous to go Alone</u> is our flagship, solo registration
            tournament. Focused on creating balanced teams, and being accessible
            to everyone.
          </p>
          <p>All you need to do is sign up! The world is waiting…</p>
          <div class="buttons">
            <Link to="/signup" class="button is-orange is-inverted">
              Signup
            </Link>
            <Link
              to="/idtga/rules"
              class="button is-primary is-outlined is-inverted"
            >
              Rules
            </Link>
          </div>
        </div>
        <div class="column is-4">
          <img src="https://assets.otd.ink/idtga/logo-nobg.png" alt="" />
        </div>
      </Highlight>
      <div class="section px-0">
        <h2>Schedule</h2>
        <table class="table">
          <tbody>
            <ScheduleTime date="4 Days">
              Check-in opens and registration <strong>remains open</strong>.
            </ScheduleTime>
            <ScheduleTime date="3 Days">
              Both check-in and registration will close, invalid attendees will
              be removed, and we start assembling teams.
            </ScheduleTime>
            <ScheduleTime date="2 Days">
              Players receive their teams, and the maplist is published. You can
              now practice with your team.
            </ScheduleTime>
            <ScheduleTime date="1 Hour">
              Players will be alerted and preparations will commence. We request
              that you be online on both Splatoon 2 and Discord.
            </ScheduleTime>
            <ScheduleTime date="10 Minutes">
              Stream begins on <Link to="/twitch">twitch</Link>, check it out if
              you're not playing!
            </ScheduleTime>
          </tbody>
        </table>
      </div>
    </PageContainer>
  </Layout>
)

export default Idtga
