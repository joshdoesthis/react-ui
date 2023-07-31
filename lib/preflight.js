const preflight = () => ({
  'html': { '@apply': 'h-full' },
  'body': {
    '@apply': 'h-full bg-(white dark:black) text-(black dark:white) antialiased'
  },
  '#root': { '@apply': 'col min-h-full' }
})

export default preflight
