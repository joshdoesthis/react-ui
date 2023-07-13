import React from 'react'
import { createContext, useContext } from 'react'
import { mergeCommon } from '../lib/util'
import install from '@twind/with-react'
import { defineConfig } from '@twind/core'
import presetAutoprefix from '@twind/preset-autoprefix'
import presetTailwind from '@twind/preset-tailwind'
import presetExt from '@twind/preset-ext'

const setup = theme => {
  const config = defineConfig({
    presets: [presetAutoprefix(), presetTailwind(), presetExt()],
    darkMode: 'class',
    preflight: {
      'html': { height: '100%' },
      'html[data-theme=dark]': theme.dark,
      'html[data-theme=light]': theme.light,
      'body': { height: '100%' }
    }
  })
  install(config)
}

const defaultTheme = {
  dark: {
    backgroundColor: 'black',
    color: 'white'
  },
  light: {
    backgroundColor: 'white',
    color: 'black'
  }
}

const ThemeContext = createContext()
export const useTheme = () => useContext(ThemeContext)

export const Theme = ({ children, theme = {} }) => {
  setup(mergeCommon(defaultTheme, theme))
  return <ThemeContext.Provider value={{}}>{children}</ThemeContext.Provider>
}
