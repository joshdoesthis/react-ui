import ReactMarkdown from 'react-markdown'
import { Box } from './box'

export const Markdown = ({ children }) => {
  return (
    <Box>
      <ReactMarkdown children={children} />
    </Box>
  )
}
