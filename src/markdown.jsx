import React from 'react'
import { twMerge } from 'tailwind-merge'
import ReactMarkdown from 'react-markdown'
import { Text } from './text'
import { Box } from './box'

// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// import {
//   oneLight,
//   oneDark
// } from 'react-syntax-highlighter/dist/esm/styles/prism'
// import prettier from 'prettier/standalone'
// import parserMarkdown from 'prettier/parser-markdown'
// import parserBabel from 'prettier/parser-babel'

// const prettier_markdown = md => {
//   return prettier.format(md, {
//     parser: 'markdown',
//     plugins: [parserBabel, parserMarkdown],
//     proseWrap: 'preserve',
//     printWidth: 120,
//     tabWidth: 2,
//     useTabs: false,
//     semi: false,
//     singleQuote: true,
//     trailingComma: 'none',
//     bracketSpacing: true,
//     jsxBracketSameLine: true,
//     jsxSingleQuote: true,
//     arrowParens: 'avoid'
//   })
// }

export const Markdown = ({ children, tw = '' }) => {
  return (
    <Box tw={twMerge('block', tw)}>
      <ReactMarkdown
        children={children}
        components={{
          h1: props => <Text variant='h1'>{props.children}</Text>,
          h2: props => <Text variant='h2'>{props.children}</Text>,
          h3: props => <Text variant='h3'>{props.children}</Text>,
          ul: props => {
            // console.log('props', props)
            return <Text variant='ul'>{props.children}</Text>
          },
          ol: props => <Text variant='ol'>{props.children}</Text>,
          p: props => <Text variant='p'>{props.children}</Text>
          // code: props => {
          //   const language = props.className?.replace('language-', '')
          //   return (
          //     <SyntaxHighlighter
          //       language={language}
          //       children={props.children}
          //       style={theme === 'light' ? oneLight : oneDark}
          //     />
          //   )
          // }
        }}
      />
    </Box>
  )
}
