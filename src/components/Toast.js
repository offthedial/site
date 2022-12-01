import React from "react"

const Toast = ({ title, description }) => {
  return (
    <div className="pointer-events-auto dark:bg-slate-700 bg-slate-200 max-w-xs rounded-md flex flex-col items-stretch p-4 m-4 gap-4 shadow-lg">
      <div className="font-bold">{title}</div>
      <div>{description}</div>
    </div>
  )
}

export default Toast
