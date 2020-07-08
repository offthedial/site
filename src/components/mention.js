import React from "react"

import { rhythm } from "src/utils/typography"

const Mention = ({ at }) => (
  <div
    style={{
      color: "#7289da",
      padding: rhythm(0.2),
      borderRadius: rhythm(0.3),
      background: "rgba(114,137,218,.1)",
    }}
  >
    {at}
  </div>
)

export default Mention
