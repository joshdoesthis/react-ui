import { install, defineConfig } from '@twind/core'
import autoprefix from '@twind/preset-autoprefix'
import tailwind from '@twind/preset-tailwind'

install(
  defineConfig({
    presets: [autoprefix(), tailwind()],
    darkMode: ['class', '[data-theme="dark"]'],
    preflight: {
      '@layer base': {
        'html': {
          '-webkit-tap-highlight-color': 'transparent',
          '@apply': 'h-full',
          '&[data-theme="dark"]': { '@apply': 'bg-zinc-800 text-zinc-100' },
          '&[data-theme="light"]': { '@apply': 'bg-zinc-100 text-zinc-800' }
        },
        'body': { '@apply': 'h-full' },
        '#root': { '@apply': 'h-full flex flex-col' }
      }
    },
    rules: [
      [/^fa-/],
      [
        /-fa$/,
        {
          'width': '1em',
          'height': '1em',
          'boxSizing': 'content-box',
          'verticalAlign': '-0.125em',
          'overflow': 'visible',
          '&:not(:root)': { overflow: 'hidden' }
        }
      ],
      ['safe-top', { paddingTop: 'env(safe-area-inset-top)' }],
      ['safe-right', { paddingRight: 'env(safe-area-inset-right)' }],
      ['safe-bottom', { paddingBottom: 'env(safe-area-inset-bottom)' }],
      ['safe-left', { paddingLeft: 'env(safe-area-inset-left)' }]
    ]
  })
)

export * from './src/app-bar'
export * from './src/box'
export * from './src/button'
export * from './src/dark-mode'
export * from './src/drawer'
export * from './src/typography'
export * from './src/input'
