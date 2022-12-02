import React from "react"
import * as RadixToast from "@radix-ui/react-toast"
import createToast, { useToaster } from "react-hot-toast/headless"

export const Toaster = () => {
  const {
    toasts,
    handlers: { startPause, endPause },
  } = useToaster()

  console.log(toasts)
  return (
    <RadixToast.Viewport
      className="fixed inset-x-0 bottom-0 pointer-events-none flex flex-col items-center justify-end"
      onMouseEnter={startPause}
      onMouseLeave={endPause}
    >
      {toasts.filter(toast => toast.visible).map(toast => toast.message(toast))}
    </RadixToast.Viewport>
  )
}

export const ToastProvider = ({ children }) => (
  <RadixToast.Provider duration={Infinity}>
    {children}
    <Toaster />
  </RadixToast.Provider>
)

const icons = {
  success: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 flex-shrink-0"
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
      className="w-6 h-6 flex-shrink-0"
    >
      <path
        fillRule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
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
        className="pointer-events-auto max-w-xs rounded-md m-4"
      >
        <div className="bg-green-400/50 max-w-xs rounded-md flex p-4 gap-4 shadow-lg items-start">
          <>{icons[style]}</>
          <div className="flex flex-col gap-2">
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
              className="w-6 h-6"
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
