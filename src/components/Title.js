import React from "react"

const Title = ({ title, children }) => (
  <div className="my-14 flex flex-col items-center text-center text-xl">
    <h1 className="pb-1 text-3xl font-bold">{title}</h1>
    <h2 className="max-w-4xl text-slate-500 dark:text-slate-400">{children}</h2>
  </div>
)

export default Title
