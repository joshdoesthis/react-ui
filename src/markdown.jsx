import React from 'react'
import { Box } from './box'
import { Text } from './text'
import MDX from 'markdown-to-jsx'

export const Markdown = ({ children }) => {
  return (
    <Box>
      <MDX
        options={{
          createElement: (type, props, children) => {
            return <Text {...{ ...props, [type]: true }}>{children}</Text>
          }
        }}
      >
        {children}
      </MDX>
    </Box>
  )
}
