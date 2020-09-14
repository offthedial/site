import React from "react"

import Layout from "src/components/Layout"
import PageContainer from "src/components/PageContainer"
import MediaFooter from "src/components/MediaFooter"
import ScheduleTime from "src/components/ScheduleTime"
import Mention from "src/components/Mention"
import Highlight from "src/components/Highlight"

const WeakestLink = () => (
  <Layout pageTitle="Weakest Link">
    <PageContainer>
      <Highlight>
        <div class="column is-8 has-text-white">
          <h1 class="has-text-white">About Weakest link</h1>
          <p>
            <u>Weakest Link</u> is a unique, Off the Dial exclusive, free agent{" "}
            <i>and</i> team tournament. Originally an experiment, this unique
            tournament provides coaching opportunities for free agents, and
            teaching opportunities for teams.
          </p>
          <p>All you need to do is sign up! The world is waiting…</p>
          <div class="buttons">
            <a href="/wl/rules" class="button is-white is-outlined">
              Rules
            </a>
          </div>
        </div>
        <div class="column is-4">
          <img src="https://assets.otd.ink/wl/logo-nobg.png" alt="" />
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
	  <div class="section px-0">
        <h2>How to Register</h2>
		<p>1. Head to our <a href="/discord">Discord</a> server<p>
		<p>2. Say <strong>$signup</strong> in an open bot commands.<p>
		<p>3. Follow the prompts<p>
      </div>
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
              Check-in opens and registration remains <strong>open</strong>.
            </ScheduleTime>
            <ScheduleTime date="8 Days">
              Check-in and registration will close, invalid attendees will be
              removed, and team creation will start.
            </ScheduleTime>
            <ScheduleTime date="7 Days">
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

export default WeakestLink
