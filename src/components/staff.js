import React from "react"
import { useToasterStore } from "react-hot-toast/headless"

export const Card = ({ name, iconUrl, role, hobby, links = [], children }) => (
  <div className="overflow-hidden rounded-xl border-2 border-slate-200 bg-slate-200 text-lg shadow-xl dark:border-slate-700 dark:bg-slate-700 dark:shadow-2xl">
    <div className="flex h-20 w-full justify-center">
      <div className="mt-auto flex h-20 w-20 translate-y-[50%] items-center justify-center overflow-hidden rounded-full bg-slate-400 dark:bg-slate-500">
        <img
          src={iconUrl}
          alt=""
          className="h-full w-full shrink-0 object-cover"
        />
      </div>
    </div>
    <div className="bg-default flex w-full flex-col items-center rounded-t-xl p-8 pt-10">
      <div className="not-prose py-8 text-center">
        <div className="text-3xl font-semibold">{name}</div>
        <div className="flex flex-wrap items-center justify-center gap-x-2 text-lg text-slate-500 dark:text-slate-400">
          <span>{role}</span>
          <span className="text-xl">·</span>
          <span>{hobby}</span>
        </div>
        {links
          .map((link, i) => (
            <a
              key={link[0]}
              href={link[1]}
              className="font-semibold text-otd-slate-500 hover:underline dark:text-otd-slate-300"
            >
              {link[0]}
            </a>
          ))
          .reduce((acc, x) => (acc === null ? [x] : [acc, ", ", x]), null)}
      </div>
      <div className="-my-6 w-full">{children}</div>
    </div>
  </div>
)

export const Secret = ({ children }) => {
  const { toasts } = useToasterStore()
  if (toasts.filter(t => t?.secret === true).length > 0) {
    setTimeout(() => window.scrollBy({ top: document.body.scrollHeight }), 0)
    return (
      <div className="rotate-1 scale-105 animate-in fade-in-0 zoom-in-75 duration-300">
        {children}
      </div>
    )
  }
  return null
}

export const Stack = ({ children }) => (
  <div className="mx-auto flex max-w-2xl flex-col gap-16">{children}</div>
)
