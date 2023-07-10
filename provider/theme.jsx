import React from 'react'
import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext()
export const useTheme = () => useContext(ThemeContext)

export const Theme = ({ children, config }) => {
  const [state, setState] = useState({})

  const set = obj => {
    if (obj instanceof Function) return setState(obj)
    setState({ ...state, ...obj })
  }

  return (
    <ThemeContext.Provider
      value={{
        ...state,
        set
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
