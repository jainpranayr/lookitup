import React, { createContext, useContext, useState } from "react"

const DarkModeContext = createContext()

export const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true)

  const handleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <DarkModeContext.Provider value={{ darkMode, handleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export const useDarkModeContext = () => useContext(DarkModeContext)
