import React from "react"

import Layout from "src/components/Layout"
import PageContainer from "src/components/PageContainer"
import MediaFooter from "src/components/MediaFooter"

import Mention from "src/components/Mention"

const Bot = () => (
  <Layout pageTitle="Bot">
    <PageContainer>
      <h1>Off the Dial Bot</h1>
      <div class="columns">
        <div class="column is-7">
          <p>
            A custom made bot, it’s built from the ground up by LeptoFlare and
            used for all kinds of stuff, tournament management, profile storage,
            and generating minesweepers at your convenience.
          </p>
          <h3>Getting Started</h3>
          <p>Some commands to get you started:</p>
          <ul>
            <li>
              Use <code>$profile create</code> to create your profile so you
              don’t have to create one when you sign up for a tournament.
            </li>
            <li>
              Use <code>$flairme [flair]</code> to give yourself roles
              surrounding things you would like to get notified for things.
            </li>
          </ul>
          <h3>Help</h3>
          <p>
            For assistance, you can use <code>$help</code>. You can also add
            help to the beginning of any command for more specific help.
          </p>
          <p>
            All directions are in the embed, to navigate the commands, simply
            read the bot message! If you are still stuck, you can ask for help
            in <Mention>#helpdesk</Mention>.
          </p>
        </div>
        <div class="column is-hidden-mobile">
          <img src="https://assets.otd.ink/bot/logo.png" alt="" />
        </div>
      </div>
      <h2>Contributing</h2>
      <p>
        This bot is <a href="https://github.com/offthedial/bot">open-sourced</a>{" "}
        on Github.
      </p>
      <p>
        If you have a suggestion/bug report for Off the Dial Bot, please make a
        Github Issue. This lets us track all of the suggestions and reports
        permanently in one place, as opposed to the{" "}
        <Mention>#suggestions</Mention> channel, where the messages can get
        easily lost.
      </p>
    </PageContainer>
    <MediaFooter />
  </Layout>
)

export default Bot
