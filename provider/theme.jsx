import React from 'react'
import { createContext, useContext, useEffect, useState } from 'react'
import { defaultTheme } from '../lib/theme'

const ThemeContext = createContext()
export const useTheme = () => useContext(ThemeContext)

export const Theme = ({ children, theme = defaultTheme }) => {
  const [state, setState] = useState(theme)

  useEffect(() => {
    setState(theme)
  }, [theme])

  return (
    <ThemeContext.Provider
      value={{
        ...state
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
