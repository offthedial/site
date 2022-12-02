import React from "react"
import useTournament from "app/useTournament"
import toast from "utils/toast"
import { useTheme } from "utils/theme"

const Index = () => {
  const query = useTournament()
  const [theme, setTheme] = useTheme()
  console.log(query.data)
  return (
    <div className="p-4 flex flex-col gap-4">
      <button
        onClick={() => {
          toast({
            style: "success",
            title: "Success",
            description: "tonehsanotheus aasotnhu asotenhu ",
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
        set theme to {theme}
      </button>
    </div>
  )
}

export default Index
