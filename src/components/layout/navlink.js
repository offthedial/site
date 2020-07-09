import React from "react"
import { Nav } from "react-bootstrap"
import { css } from "@emotion/core"

import { rhythm } from "src/utils/typography"

const Navlink = ({ className, children }) => (
  <Nav.Link
    className={ className }
    css={css`
      font-size: ${rhythm(0.8)};
      color: white !important;
    `}
    href="/discord"
  >
    { children }
  </Nav.Link>
)

export default Navlink
