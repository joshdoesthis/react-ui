import React from 'react'
import { Box } from './box'
import MDX from 'markdown-to-jsx'

export const Markdown = ({ children }) => {
  return (
    <Box>
      <MDX>{children}</MDX>
    </Box>
  )
}
