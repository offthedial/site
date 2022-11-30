import React from "react"
import useTheme from "src/components/theme"

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
    </div>
  )
}

export default Index
