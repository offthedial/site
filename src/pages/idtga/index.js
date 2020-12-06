import React from "react"

import { Link } from "gatsby"
import Layout from "src/components/Layout"
import PageContainer from "src/components/PageContainer"
import Highlight from "src/components/Highlight"
import ScheduleTime from "src/components/ScheduleTime"

const Idtga = () => (
  <Layout pageTitle="It's Dangerous to go Alone">
    <PageContainer>
      <Highlight>
        <div class="column is-8 has-text-white">
          <h1 class="has-text-white">About It's Dangerous to go Alone</h1>
          <p>
            <u>It's Dangerous to go Alone</u> is our flagship, free agent
            tournament. Focused on creating balanced teams, and being accessible
            to everyone.
          </p>
          <p>All you need to do is sign up! The world is waiting…</p>
          <div class="buttons">
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
            <ScheduleTime date="3 Days">
              Check-in opens and registration remains <strong>open</strong>.
            </ScheduleTime>
            <ScheduleTime date="2 Days">
              Check-in and registration will close, invalid attendees will be
              removed, and team creation will start.
            </ScheduleTime>
            <ScheduleTime date="24 Hours">
              Players will receive their teams, and maplist is released.
            </ScheduleTime>
            <ScheduleTime date="1 Hour">
              Players will be alerted and preparations will commence.
            </ScheduleTime>
            <ScheduleTime date="30 Minutes">
              Players are requested to be online on both Splatoon 2 and Discord.
            </ScheduleTime>
            <ScheduleTime date="10 Minutes">
              Stream begins on <Link to="/twitch">twitch</Link>.
            </ScheduleTime>
          </tbody>
        </table>
      </div>
    </PageContainer>
  </Layout>
)

export default Idtga
