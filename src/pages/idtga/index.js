import React from "react"

import Layout from "src/components/Layout"
import PageContainer from "src/components/PageContainer"
import MediaFooter from "src/components/MediaFooter"
import Highlight from "src/components/Highlight"
import ScheduleTime from "src/components/ScheduleTime"

import logo from "src/static/images/idtga.png"

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
            <a href="/idtga/rules" class="button is-white is-outlined">
              Rules
            </a>
            <a href="/signup" class="button is-white is-outlined">
              Register
            </a>
          </div>
        </div>
        <div class="column is-4">
          <img src={logo} alt="" />
        </div>
      </Highlight>
      <div class="section px-0">
        <h2>Registration Details</h2>
        <p>
          As this is a Free Agent tournament, you must register as a free-agent.
          There are no skill caps or ceilings.
        </p>
      </div>
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
              Stream begins on <a href="/twitch">twitch</a>.
            </ScheduleTime>
          </tbody>
        </table>
      </div>
    </PageContainer>
    <MediaFooter />
  </Layout>
)

export default Idtga
