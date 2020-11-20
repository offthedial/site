import React from "react"

import Footer from "src/components/Footer"

const MediaFooter = () => (
  <Footer>
    <div class="columns my-0 is-centered has-text-centered is-mobile">
      <div class="column py-0 is-narrow">
        <p class="is-size-5">
          <a href="/twitch">
            <i class="fab fa-twitch" />
          </a>
        </p>
      </div>
      <div class="column py-0 is-narrow">
        <p class="is-size-5">
          <a href="/twitter">
            <i class="fab fa-twitter" />
          </a>
        </p>
      </div>
      <div class="column py-0 is-narrow">
        <p class="is-size-5">
          <a href="/youtube">
            <i class="fab fa-youtube" />
          </a>
        </p>
      </div>
      <div class="column py-0 is-narrow">
        <p class="is-size-5">
          <a href="/patreon">
            <i class="fab fa-patreon" />
          </a>
        </p>
      </div>
      <div class="column py-0 is-narrow">
        <p class="is-size-5">
          <a href="/github">
            <i class="fab fa-github" />
          </a>
        </p>
      </div>
    </div>
  </Footer>
)

export default MediaFooter
