import React from "react"

const ScheduleTime = ({ date, children }) => (
  <tr>
    <td>
      <strong>{date} Before:</strong>
    </td>
    <td>{children}</td>
  </tr>
)

export default ScheduleTime
