import React from "react"
import * as RadixToast from "@radix-ui/react-toast"
import createToast, { useToaster } from "react-hot-toast/headless"
import clsx from "clsx"

export const Toaster = () => {
  const {
    toasts,
    handlers: { startPause, endPause },
  } = useToaster()

  return (
    <RadixToast.Viewport
      className="pointer-events-none fixed inset-x-0 bottom-0 flex flex-col items-center justify-end"
      onMouseEnter={startPause}
      onMouseLeave={endPause}
    >
      {toasts.map(toast => toast.message(toast))}
    </RadixToast.Viewport>
  )
}

export const ToastProvider = ({ children }) => (
  <RadixToast.Provider duration={Infinity} swipeDirection="down">
    {children}
    <Toaster />
  </RadixToast.Provider>
)

const color = {
  success: "bg-green-400/50",
  error: "bg-red-400/50",
}

const icons = {
  success: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6 flex-shrink-0 flex-grow-0"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  ),
  error: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
        clipRule="evenodd"
      />
    </svg>
  ),
}

const toast = ({ style, title, description }) =>
  createToast.custom(
    t => (
      <RadixToast.Root
        key={t.id}
        className={clsx(
          "bg-default pointer-events-auto m-4 max-w-lg rounded-md fade-in-0 fade-out-0 slide-in-from-bottom-2 slide-out-to-bottom-2",
          t.visible ? "animate-in" : "animate-out"
        )}
      >
        <div
          className={clsx(
            "flex items-start gap-4 rounded-md p-4 shadow-lg",
            color[style]
          )}
        >
          <>{icons[style]}</>
          <div className="flex min-w-0 flex-1 flex-col gap-2 break-words">
            <RadixToast.Title className="font-bold">{title}</RadixToast.Title>
            <RadixToast.Description>{description}</RadixToast.Description>
          </div>
          <RadixToast.Close onClick={() => createToast.dismiss(t.id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </RadixToast.Close>
        </div>
      </RadixToast.Root>
    ),
    {
      duration: Infinity,
    }
  )

export default toast
