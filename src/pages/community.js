import React from "react"

import Layout from "src/components/Layout"
import PageContainer from "src/components/PageContainer"

const Community = () => (
  <Layout pageTitle="Community">
    <PageContainer>
      <h1>Our Community</h1>
      <p>
        Off the Dial is thankful to have such an awesome team and community of
        Moderators, including Streamers & Organisers! They are a crucial part of
        Off the Dial and the server would not be where it is today without them.
        Each person in the community also has their own unique skills and
        backgrounds. If you want to learn more about them, or if they interest
        you, you can check each one of them out, right here!
      </p>
      <hr />
      <CommunityCard
        name="DJam98"
        role={`Owner & Twitter Addict`}
        link="Twitter"
        linkRef="https://twitter.com/djam987"
      >
        <p>
          Hey there! I'm DJam98 and I am the creator of this little discord
          server on the internet.
        </p>
        <p>
          I spend most of my spare time on Off the Dial and playing games on the
          Switch (and spending way too much time in Splatoon.
        </p>
        <p>
          I have a twitter, if you want to check that out, where I sometimes
          post upcoming updates that may be coming to the server and
          tournaments. Follows appreciated!
        </p>
      </CommunityCard>
      <CommunityCard
        name="LeptoFlare"
        role={`Bot Developer & Open Source Supporter`}
        link="Website"
        linkRef="https://lepto.tech"
      >
        <p>
          You may know me as the rewriter of Off the Dial Bot, and my decision
          to make it open-sourced. I've saved DJam98 lots of headaches, and made
          it much easier to track ranks, manage profiles, and generate
          minesweepers at your convenience.
        </p>
        <p>
          I'm currently a junior software developer, working on many different
          side projects. Including the bot, this site, and many other things.
        </p>
        <p>If you're curious who I am, check out my website!</p>
      </CommunityCard>
      <CommunityCard
        name="Zada"
        role={`Commentator/Streamer & World Traveler`}
        link="Twitch"
        linkRef="https://twitch.tv/zadafrex"
      >
        <p>I'm the main streamer and commentator for Off the Dial.</p>
        <p>
          I've been streaming since 2018 and hosts a weekly on-stream 1v1
          Splatoon tournaments. In the last two years I have participated in
          several Splatoon LANs around the United States.
        </p>
        <p>
          Outside of streaming Splatoon and a few other Nintendo Switch games, I
          serve on two boards of directors and works full-time as an information
          technology manager.
        </p>
      </CommunityCard>
    </PageContainer>
  </Layout>
)

const CommunityCard = ({ name, role, link, linkRef, children }) => (
  <div class="card mx-3 my-3">
    <div class="card-content">
      <div class="mb-3">
        <div class="has-text-grey">{role}</div>
        <h2 class="my-1">{name}</h2>
        <a
          class="is-link is-hover-underline has-text-weight-medium"
          href={linkRef}
        >
          {link}
        </a>
      </div>

      {children}
    </div>
  </div>
)

export default Community
