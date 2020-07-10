import React from "react"

import InLi from "src/components/InLi"

const Links = () => (
  <>
    <p>Off the Dial has many media outlets, Here's a list of all the platforms you can catch us on. We'd appreciate if you supported us there.</p>
    <blockquote>
      <InLi link="twitch">
        <h3>Twitch</h3>
      </InLi>
      <InLi link="discord">
        <h3>Discord</h3>
      </InLi>
      <InLi link="twitter">
        <h3>Twitter</h3>
      </InLi>
      <InLi link="youtube">
        <h3>YouTube</h3>
      </InLi>
      <InLi link="patreon">
        <h3>Patreon</h3>
      </InLi>
      <InLi link="github">
        <h3>Github</h3>
      </InLi>
    </blockquote>
  </>
)

export default Links
