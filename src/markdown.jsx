import React from 'react'
import { Text } from './text'
import MDX from 'markdown-to-jsx'

export const Markdown = ({ children }) => {
  const style = {
    img: 'w-full h-auto my-4 rounded',
    video: 'w-full h-auto my-4 rounded',
    audio: 'w-full h-auto my-4 rounded',
    strong: 'font-bold',
    i: 'italic',
    em: 'italic',
    mark: 'bg-(yellow-200 opacity-50 dark:(yellow-800 opacity-50)) text-(yellow-800 dark:yellow-200)',
    small: 'text-sm',
    del: 'line-through',
    ins: 'underline',
    sub: 'sub',
    sup: 'super',
    a: 'text-(blue-500 dark:blue-400) hover:underline',
    span: 'inline-block',
    q: 'italic',
    blockquote: 'italic border-(l-1 black dark:white) pl-4 my-4',
    abbrev: 'italic',
    address: 'italic',
    cite: 'italic',
    bdo: 'italic',
    ul: 'list-disc list-inside',
    ol: 'list-decimal list-inside',
    li: 'list-item pl-4',
    h1: 'text-4xl font-bold font-sans',
    h2: 'text-3xl font-bold font-sans',
    h3: 'text-2xl font-bold font-sans',
    h4: 'text-xl font-bold font-sans',
    h5: 'text-lg font-bold font-sans',
    h6: 'text-base font-bold font-sans',
    p: 'my-4',
    br: 'block',
    pre: 'my-4',
    code: '[pre_&]:(block px-1 py-0.5) text-sm font-mono bg-(green-200 opacity-50 dark:(green-800 opacity-50)) text-(green-800 dark:green-200)',
    hr: 'border-(0 b zinc-300 dark:zinc-700) my-4',
    table: 'table-auto',
    thead: 'bg-(zinc-300 dark:zinc-700)',
    tbody: 'bg-(white dark:black)',
    tfoot: 'bg-(zinc-300 dark:zinc-700)',
    tr: 'bg-(white dark:black)',
    th: 'px-4 py-2',
    td: 'px-4 py-2'
  }

  return (
    <MDX
      className='text-(zinc-700 dark:zinc-300))'
      options={{
        forceWrapper: true,
        createElement: (type, props, children) => {
          if (type === 'img') return <img {...props} className={style.img} />
          if (type === 'video')
            return <video {...props} className={style.video} />
          if (type === 'audio')
            return <audio {...props} className={style.audio} />
          if (type === 'hr') return <hr {...props} className={style.hr} />
          return (
            <Text {...{ ...props, [type]: true, style: style[type] }}>
              {children}
            </Text>
          )
        }
      }}
    >
      {children}
    </MDX>
  )
}
