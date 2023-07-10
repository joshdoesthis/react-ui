import React from 'react'
import { useState, useEffect } from 'react'
import { Button } from './button'
import { Text } from './text'
import { toFirstUpper } from '../lib/helpers'
import { useTheme } from '../provider/theme'

const DefaultSwitchComponent = ({ mode, cycle }) => {
  return (
    <Button press={cycle}>
      <Text>{toFirstUpper(mode)} mode</Text>
    </Button>
  )
}

export const Torch = ({
  defaultMode = 'auto',
  SwitchComponent = DefaultSwitchComponent
}) => {
  const theme = useTheme()
  const [mode, setMode] = useState(localStorage.getItem('mode') ?? defaultMode)

  const change = () => {
    console.log('change')
    localStorage.setItem('mode', mode)
    const autoMode = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
    const meta = document.querySelector('meta[name="theme-color"]')
    meta.setAttribute(
      'content',
      {
        light: theme.light.background,
        dark: theme.dark.background
      }[mode === 'auto' ? autoMode : mode]
    )
    document.documentElement.setAttribute(
      'data-theme',
      mode === 'auto' ? autoMode : mode
    )
  }

  const next = () => {
    const nextMode = {
      light: 'dark',
      dark: 'auto',
      auto: 'light'
    }[mode]
    setMode(nextMode)
  }

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

  useEffect(() => change(), [mode])

  return <SwitchComponent mode={mode} cycle={next} />
}
