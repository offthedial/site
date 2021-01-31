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
      image: "https://assets.otd.ink/idtga/logo.svg",
      description: `It's Dangerous to go Alone is our flagship, solo registration tournament. Focused on creating balanced teams, and being accessible to everyone.`,
    }}
  >
    <PageContainer>
      <Highlight>
        <div class="column is-8 has-text-white">
          <h1 class="has-text-white">About It's Dangerous to go Alone</h1>
          <p class="is-size-6">
            <u>It's Dangerous to go Alone</u> is our flagship, solo registration
            tournament. Focused on creating balanced teams, and being accessible
            to everyone.
          </p>
          <p>All you need to do is sign up! The world is waiting…</p>
          <div class="buttons">
            <Link to="/signup" class="button is-medium is-orange is-inverted">
              Signup
            </Link>
            <Link to="/idtga/rules" class="button is-medium is-primary is-text">
              Rules
            </Link>
          </div>
        </div>
        <div class="column is-4">
          <img src="https://assets.otd.ink/idtga/logo-nobg.svg" alt="" />
        </div>
      </Highlight>
      <div class="section px-0">
        <h2>Registration Details</h2>
        <p>
          Since this is a solo registration event, you sign up alone. The
          tournament organisers will handle assembling teams for you.
        </p>
        <h3>Registering as a sub</h3>
        <p>
          If you missed the registration deadline, you can still sign up as a
          sub by going to the same signup link. I highly recommend doing this if
          you miss the signup date, as many players end up either dropping out
          or needing a sub.
        </p>
        <p>
          If you are needed, you will recieve a dm asking whether you are
          available to sub and specific details about what team you will be
          subbing for. Once you agree, you will be given the competing and team
          roles, then you should get in contact with your other team members.
        </p>
        <p>
          Please make sure you have turned on DMs for the server, and try your
          best to avaliable to reply during the tournament.
        </p>
      </div>
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
