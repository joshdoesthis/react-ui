import React from 'react'
import { useState, useEffect } from 'react'
import { Button } from './button'
import { Text } from './text'
import { toFirstUpper } from '../lib/helpers'
import { useTheme } from '../provider/theme'

const DefaultSwitchComponent = ({ darkMode, cycle }) => {
  return (
    <Button press={cycle}>
      <Text>{toFirstUpper(darkMode)} mode</Text>
    </Button>
  )
}

export const Torch = ({
  defaultMode = 'auto',
  SwitchComponent = DefaultSwitchComponent
}) => {
  const theme = useTheme()
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') ?? defaultMode
  )

  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', change)
    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', change)
    }
  }, [])

  useEffect(() => change, [darkMode])

  const change = () => {
    localStorage.setItem('darkMode', darkMode)
    const autoMode = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
    const meta = document.querySelector('meta[name="theme-color"]')
    meta.setAttribute(
      'content',
      {
        light: theme.light.background,
        dark: theme.dark.background
      }[darkMode === 'auto' ? autoMode : darkMode]
    )
    document.documentElement.setAttribute(
      'data-theme',
      darkMode === 'auto' ? autoMode : darkMode
    )
  }

  const next = () => {
    const mode = {
      light: 'dark',
      dark: 'auto',
      auto: 'light'
    }[darkMode]
    setDarkMode(mode)
  }

  return <SwitchComponent darkMode={darkMode} cycle={next} />
}
