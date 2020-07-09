import React from "react"
import { Nav } from "react-bootstrap"
import { css } from "@emotion/core"

import { rhythm } from "src/utils/typography"

const Navlink = ({ className, href, children }) => (
  <Nav.Link
    className={ className }
    href={ href }
    css={css`
      font-size: ${rhythm(0.8)};
      color: white !important;
    `}
  >
    { children }
  </Nav.Link>
)

export default Navlink
