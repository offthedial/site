import React from "react"
import toast from "utils/toast"
import { useTheme } from "utils/theme"
import Layout from "src/components/Layout"

const Index = () => {
  const [theme, setTheme] = useTheme()
  return (
    <Layout className="flex flex-col items-center gap-4 p-4">
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
    </Layout>
  )
}

export default Index
