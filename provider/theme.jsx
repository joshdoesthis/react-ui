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
      'html': { '@apply': 'min-h-full' },
      'html[data-theme=dark]': theme.dark,
      'html[data-theme=light]': theme.light,
      'body': { '@apply': 'h-full' },
      '#root': { '@apply': 'h-full' }
    },
    rules: [
      ['row', { '@apply': 'flex flex-row' }],
      ['col', { '@apply': 'flex flex-col' }],
      [
        '(start|end|center|baseline|stretch)-(normal|start|end|center|between|around|evenly|stretch)',
        match => ({ '@apply': `items-${match[1]} justify-${match[2]}` })
      ],
      ['safe-top', { paddingTop: 'env(safe-area-inset-top)' }],
      ['safe-bottom', { paddingBottom: 'env(safe-area-inset-bottom)' }],
      ['safe-left', { paddingLeft: 'env(safe-area-inset-left)' }],
      ['safe-right', { paddingRight: 'env(safe-area-inset-right)' }],
      ['safe-v', { '@apply': 'safe-top safe-bottom' }],
      ['safe-h', { '@apply': 'safe-left safe-right' }]
    ]
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
