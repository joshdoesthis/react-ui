import React from 'react'
import { Text } from './text'
import { Image } from './image'
import MDX from 'markdown-to-jsx'

export const Markdown = ({ children }) => {
  return (
    <MDX
      options={{
        createElement: (type, props, children) => {
          if (type === 'img') return <Image {...props} />
          if (type === 'hr') return <hr {...props} />
          return <Text {...{ ...props, [type]: true }}>{children}</Text>
        }
      }}
    >
      {children}
    </MDX>
  )
}
