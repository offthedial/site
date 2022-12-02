import React from "react"

const Title = ({ title, children }) => (
  <div className="py-14 text-center text-xl">
    <h1 className="text-3xl font-bold pb-1">{title}</h1>
    <div className="max-w-4xl text-slate-500 dark:text-slate-400">
      {children}
    </div>
  </div>
)

export default Title
