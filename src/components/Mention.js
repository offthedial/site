import React from "react"

const Mention = ({ children }) => (
  <span
    style={{
      fontSize: "87.5%",
      lineHeight: "1.5",
      color: "#7289da",
      padding: "1px",
      borderRadius: "2px",
      background: "rgba(114,137,218,.1)",
    }}
  >
    {children}
  </span>
)

export default Mention
