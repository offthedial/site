import React from "react"
import toast from "utils/toast"
import { useTheme } from "utils/theme"

const Index = () => {
  const [theme, setTheme] = useTheme()
  return (
    <div className="p-4 flex flex-col gap-4">
      <button
        onClick={() => {
          toast({
            style: "success",
            title: "Toast Success",
            description: "This is a description",
          })
        }}
      >
        toast
      </button>
      <button
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark")
        }}
      >
        theme: {theme}
      </button>
    </div>
  )
}

export default Index
