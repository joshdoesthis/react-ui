import React from 'react'
import { useState, useEffect } from 'react'
import { Button } from './button'
import { Input } from './input'
import { Text } from './text'

const DefaultSwitchComponent = ({ darkMode, toggleDarkMode }) => {
  return (
    <Button press={toggleDarkMode}>
      <Input type='checkbox' checked={darkMode} readOnly />
      <Text>Dark Mode</Text>
    </Button>
  )
}

export const Torch = ({ SwitchComponent = DefaultSwitchComponent }) => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem('dark_mode')) ??
      window.matchMedia('(prefers-color-scheme: dark)').matches
  )

  const toggle = mode => {
    localStorage.setItem('dark_mode', mode)
    setDarkMode(mode)
  }

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      darkMode ? 'dark' : 'light'
    )
    const meta = document.querySelector('meta[name="theme-color"]')
    meta.setAttribute('content', darkMode ? '#27272a' : '#f4f4f5')
  }, [darkMode])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const change = e => toggle(e.matches)
    mediaQuery.addEventListener('change', change)
    return () => mediaQuery.removeEventListener('change', change)
  }, [])

  return SwitchComponent ? (
    <SwitchComponent
      darkMode={darkMode}
      toggleDarkMode={() => toggle(!darkMode)}
    />
  ) : null
}
