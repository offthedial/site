import React from "react"
import emoji from "react-easy-emoji"

import Layout from "src/components/Layout"
import Promoted from "src/components/Promoted"
import Footer from "src/components/Footer"
import Highlight from "src/components/Highlight"

/**
 * This variable decides which post to display on the index page.
 * Set the variable to the slug of the post.
 * Or set it to null to remove the section entirely.
 */
const promoted = "a-brief-hiatus";

const Index = () => (
  <Layout mediaFooter={false}>
    <div class="section is-medium has-background-white-ter">
      <Highlight>
        <div class="column is-9">
          <h1 class="title is-1 has-text-white">Who are we?</h1>
          <p class="subtitle is-4 has-text-white">
            A unique tournament organisation for Splatoon 2,
            dedicated to providing fresh tournament opportunities for free
            agents and teams alike.
          </p>
        </div>
        <div class="column is-3 is-hidden-mobile">
          <img
            src="https://assets.otd.ink/logo-nobg.png"
            alt=""
          />
        </div>
      </Highlight>
    </div>
    {
      promoted && (
        <Section>
          <Promoted slug={promoted} />
        </Section>
      )
    }
    <Section>
      <div class="column">
        <h2 class="title is-2">FAQ</h2>
        <p class="subtitle is-5">
          We get asked a lot of questions, so a FAQ necessary. We highly
          recommend you check out this page.
        </p>
        <a href="/faq" class="button is-link">
          Go to FAQ
        </a>
      </div>
      <div class="column">{/*  */}</div>
    </Section>
    <Section>
      <div class="column">{/*  */}</div>
      <div class="column has-text-right">
        <h2 class="title is-2">Posts</h2>
        <p class="subtitle is-5">
          Stay up to date with the latest blog posts, news, and updates on
          everything Off the Dial!
        </p>
        <a href="/posts" class="button is-primary">
          View Posts
        </a>
      </div>
    </Section>
    <SectionBackground>
      <div class="column is-8 has-text-centered">
        <h2 class="title is-2">Assets</h2>
        <p class="subtitle is-5">
          Many of our assets are public and free. Assets include logos and
          banners related to Off the Dial and its tournaments. You can find them
          all right here!
        </p>
        <a href="/assets" class="button is-primary">
          Assets Repository
        </a>
      </div>
    </SectionBackground>
    <Section>
      <div class="column">
        <h2 class="title is-2">Bot</h2>
        <p class="subtitle is-5">
          Our server has a custom Off the Dial Bot used for tournament running
          assistance. If you would like to know more, we have a page dedicated
          to about the bot!
        </p>
        <a href="/bot" class="button is-primary">
          About the Bot
        </a>
      </div>
      <div class="column">{/*  */}</div>
    </Section>
    <Section>
      <div class="column">{/*  */}</div>
      <div class="column has-text-right">
        <h2 class="title is-2">Staff</h2>
        <p class="subtitle is-5">
          Off the Dial is thankful to have such an awesome staff team!
          You can find out more about everyone here!
        </p>
        <a href="/staff" class="button is-primary">
          Our Staff
        </a>
      </div>
    </Section>
    <SectionBackground>
      <div class="column is-8 has-text-centered">
        <h2 class="title is-2" id="media">
          Media
        </h2>
        <p class="subtitle is-5">
          Off the Dial has many media outlets, Here's a list of all the
          platforms you can catch us on. We'd appreciate if you supported us
          there.
        </p>
        <div class="columns is-mobile">
          <div class="column">
            <h1>
              <a href="/twitch">
                <i class="fab fa-twitch" />
              </a>
            </h1>
          </div>
          <div class="column">
            <h1>
              <a href="/twitter">
                <i class="fab fa-twitter" />
              </a>
            </h1>
          </div>
          <div class="column">
            <h1>
              <a href="/youtube">
                <i class="fab fa-youtube" />
              </a>
            </h1>
          </div>
          <div class="column">
            <h1>
              <a href="/patreon">
                <i class="fab fa-patreon" />
              </a>
            </h1>
          </div>
          <div class="column">
            <h1>
              <a href="/github">
                <i class="fab fa-github" />
              </a>
            </h1>
          </div>
        </div>
      </div>
    </SectionBackground>

    <Footer>
      Built with{" "}
      <span class="has-a-hover-translucent">
        <a href="https://github.com/offthedial/site">{emoji("\u2764")}</a>
      </span>{" "}
      & <a href="https://www.gatsbyjs.org/">Gatsby</a>. This website is
      currently in beta, more features are to come. Stay tuned!
    </Footer>
  </Layout>
)

const Section = ({ children }) => (
  <div class="section">
    <div class="container">
      <div class="columns is-vcentered">{children}</div>
    </div>
  </div>
)

const SectionBackground = ({ children }) => (
  <div class="section is-medium has-background-white-ter">
    <div class="container">
      <div class="columns is-centered is-vcentered">{children}</div>
    </div>
  </div>
)

export default Index
