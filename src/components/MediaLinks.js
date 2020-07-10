import React from "react"

import InLi from "src/components/InLi"

const Links = () => (
  <>
    <p>These are all the places you can catch Off the Dial.</p>
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
