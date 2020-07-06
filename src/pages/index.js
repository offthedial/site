import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout seo="Welcome">
    <p>
      Off the Dial is a unique tournament organisation for Splatoon 2, dedicated
      to providing fresh tournament opportunities for free agents and teams
      alike.
    </p>
    <h2>
      <Link to="/faq">faq</Link>
    </h2>
    <p>
      We get asked a lot of questions, so a FAQ necessary. You will find
      everything from "What is IDTGA" to what is does FA stand for. We highly
      recommend you check out this page.
    </p>
    <h2>
      <Link to="/posts">posts</Link>
    </h2>
    <p>Stay up to date with the newest updates on Off the Dial!</p>

    <h2>More Information</h2>
    <ul>
      <li>
        <Link to="/bot">Off the Dial Bot</Link>
        <blockquote>
          Our server has a custom Off the Dial Bot used for tournament running
          assistance. If you would like to know more, we have a page dedicated
          to about the bot right here!
        </blockquote>
      </li>
      <li>
        <Link to="/community">Community</Link>
        <blockquote>
          Off the Dial is thankful to have such an awesome team and community!
          And you can check each one of them out right here!
        </blockquote>
      </li>
      <li>
        <Link to="/media">Media</Link>
        <blockquote>
          Off the Dial has many media outlets, you can find a list of all of
          them right here!
        </blockquote>
      </li>
      <li>
        <Link to="https://github.com/offthedial/assets">Assets</Link>
        <blockquote>
          Many of our assets are public and free. Assets include logos and
          banners related to Off the Dial and its tournaments. You can find them
          all right here!
        </blockquote>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
