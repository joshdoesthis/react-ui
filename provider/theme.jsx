import React from 'react'
import { createContext, useContext, useEffect, useState } from 'react'
import { defaultStyle } from '../lib/theme'
import { mergeCommon } from '../lib/util'

const ThemeContext = createContext()
export const useTheme = () => useContext(ThemeContext)

export const Theme = ({ children, style = {} }) => {
  const theme = mergeCommon(defaultStyle, style)

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}
