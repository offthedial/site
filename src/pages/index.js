import React from "react"
import { useTheme } from "components/theme"

const Index = () => {
  const [theme, setTheme] = useTheme()
  return (
    <div>
      <button
        onClick={() => {
          theme === "light" ? setTheme("dark") : setTheme("light")
        }}
      >
        change mode
      </button>
      <div>preference: {localStorage.getItem("set-color-mode")}</div>
    </div>
  )
}

export default Index
