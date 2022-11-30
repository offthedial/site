import React from "react"

export const ThemeContext = React.createContext()

export const ThemeProvider = ({ children }) => {
  const [colorMode, rawSetColorMode] = React.useState(undefined)

  React.useEffect(() => {
    const root = window.document.documentElement
    const initialColorValue = root.classList.contains("dark") ? "dark" : "light"
    rawSetColorMode(initialColorValue)
  }, [])

  const contextValue = React.useMemo(() => {
    const setColorMode = colorMode => {
      const root = window.document.documentElement

      localStorage.setItem("set-color-mode", colorMode)
      if (colorMode === "dark") root.classList.add("dark")
      if (colorMode === "light") root.classList.remove("dark")
      rawSetColorMode(colorMode)
    }

    return {
      colorMode,
      setColorMode,
    }
  }, [colorMode, rawSetColorMode])

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

const useTheme = () => {
  const context = React.useContext(ThemeContext)
  return context
}

export default useTheme
