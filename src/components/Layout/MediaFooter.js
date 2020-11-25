import React from "react"

import { Link } from "gatsby"

const MediaFooter = () => (
  <footer class="has-background-white-bis py-5">
    <div class="container">
      <div class="columns my-0 is-centered has-text-centered is-mobile">
        <div class="column py-0 is-narrow">
          <p class="is-size-5">
            <Link to="/twitch">
              <i class="fab fa-twitch" />
            </Link>
          </p>
        </div>
        <div class="column py-0 is-narrow">
          <p class="is-size-5">
            <Link to="/twitter">
              <i class="fab fa-twitter" />
            </Link>
          </p>
        </div>
        <div class="column py-0 is-narrow">
          <p class="is-size-5">
            <Link to="/youtube">
              <i class="fab fa-youtube" />
            </Link>
          </p>
        </div>
        <div class="column py-0 is-narrow">
          <p class="is-size-5">
            <Link to="/patreon">
              <i class="fab fa-patreon" />
            </Link>
          </p>
        </div>
        <div class="column py-0 is-narrow">
          <p class="is-size-5">
            <Link to="/github">
              <i class="fab fa-github" />
            </Link>
          </p>
        </div>
      </div>
    </div>
  </footer>
)

export default MediaFooter
