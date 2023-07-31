const rules = () => [
  ['row', { '@apply': 'flex flex-row' }],
  ['row-reverse', { '@apply': 'flex flex-row-reverse' }],
  ['col', { '@apply': 'flex flex-col' }],
  ['col-reverse', { '@apply': 'flex flex-col-reverse' }],
  [
    '(start|end|center|baseline|stretch)-(normal|start|end|center|between|around|evenly|stretch)',
    match => ({ '@apply': `items-${match[1]} justify-${match[2]}` })
  ],
  ['safe-l', { paddingLeft: 'env(safe-area-inset-left)' }],
  ['safe-r', { paddingRight: 'env(safe-area-inset-right)' }],
  ['safe-t', { paddingTop: 'env(safe-area-inset-top)' }],
  ['safe-b', { paddingBottom: 'env(safe-area-inset-bottom)' }],
  ['safe-x', { '@apply': 'safe-l safe-r' }],
  ['safe-y', { '@apply': 'safe-t safe-b' }]
]

export default rules
