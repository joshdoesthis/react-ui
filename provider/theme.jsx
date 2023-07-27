import React from 'react'
import { createContext, useContext } from 'react'
import install from '@twind/with-react'
import { defineConfig } from '@twind/core'
import presetAutoprefix from '@twind/preset-autoprefix'
import presetTailwind from '@twind/preset-tailwind'
import presetExt from '@twind/preset-ext'
import presetLineClamp from '@twind/preset-line-clamp'

const setup = () => {
  const config = defineConfig({
    presets: [
      presetAutoprefix(),
      presetTailwind(),
      presetExt(),
      presetLineClamp()
    ],
    darkMode: ['class', '[data-theme="dark"]'],
    preflight: {
      'html': { '@apply': 'h-full' },
      'body': { '@apply': 'h-full' },
      '#root': {
        '@apply': 'col min-h-full bg-(white dark:black) text-(black dark:white)'
      },
      'span': { '@apply': 'text-base' },
      'p': { '@apply': 'text-base leading-relaxed my-4' },
      'h1': { '@apply': 'text-6xl font-bold leading-tight my-4' },
      'h2': { '@apply': 'text-5xl font-bold leading-tight my-4' },
      'h3': { '@apply': 'text-4xl font-bold leading-tight my-4' },
      'h4': { '@apply': 'text-3xl font-bold leading-tight my-4' },
      'h5': { '@apply': 'text-2xl font-bold leading-tight my-4' },
      'h6': { '@apply': 'text-xl font-bold leading-tight my-4' },
      'ol': { '@apply': 'list-decimal pl-8' },
      'ul': { '@apply': 'list-disc pl-8' },
      'li': { '@apply': 'list-item leading-relaxed' },
      'code': {
        '@apply':
          'text-sm font-mono bg-(zinc-300 dark:zinc-700) px-1 py-0.5 rounded'
      },
      'pre code': { '@apply': 'inline-flex px-2 py-1' },
      'hr': { '@apply': 'border-(b t-0 zinc-300 dark:zinc-700)' },
      'blockquote': {
        '@apply':
          'border-l-4 border-(zinc-300 dark:zinc-700) pl-4 text-base leading-relaxed my-4'
      }
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

const ThemeContext = createContext()
export const useTheme = () => useContext(ThemeContext)

export const Theme = ({ children, theme = {} }) => {
  setup() // TODO: theme
  return <ThemeContext.Provider value={{}}>{children}</ThemeContext.Provider>
}
