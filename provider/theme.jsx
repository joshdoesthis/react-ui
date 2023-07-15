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
      'html': { '@apply': 'h-full min-h-full' },
      'html[data-theme=dark]': theme.dark,
      'html[data-theme=light]': theme.light,
      'body': { '@apply': 'h-full' },
      '#root': { '@apply': 'col h-full' },
      'span': { '@apply': 'text-base' },
      'p': { '@apply': 'text-base' },
      'h1': { '@apply': 'text-6xl font-bold' },
      'h2': { '@apply': 'text-5xl font-bold' },
      'h3': { '@apply': 'text-4xl font-bold' },
      'h4': { '@apply': 'text-3xl font-bold' },
      'h5': { '@apply': 'text-2xl font-bold' },
      'h6': { '@apply': 'text-xl font-bold' },
      'ol': { '@apply': 'list-decimal' },
      'ul': { '@apply': 'list-disc' },
      'li': { '@apply': 'text-base' }
    },
    rules: [
      ['row', { '@apply': 'flex flex-row' }],
      ['row-reverse', { '@apply': 'flex flex-row-reverse' }],
      ['col', { '@apply': 'flex flex-col' }],
      ['col-reverse', { '@apply': 'flex flex-col-reverse' }],
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
