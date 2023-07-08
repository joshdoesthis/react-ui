import React from 'react'
import { useState, useEffect } from 'react'

const DefaultSwitchComponent = ({ isDarkMode, click }) => {
  const styles = { button: `flex items-center gap-1` }

  return (
    <button className={styles.button} onClick={click}>
      <input type='checkbox' checked={isDarkMode} readOnly />
      <span>Dark Mode</span>
    </button>
  )
}

export const DarkMode = ({ SwitchComponent = DefaultSwitchComponent }) => {
  const [dark_mode, set_dark_mode] = useState(
    JSON.parse(localStorage.getItem('dark_mode')) ??
      window.matchMedia('(prefers-color-scheme: dark)').matches
  )

  const change_mode = mode => {
    localStorage.setItem('dark_mode', mode)
    set_dark_mode(mode)
  }

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      dark_mode ? 'dark' : 'light'
    )
    const meta = document.querySelector('meta[name="theme-color"]')
    meta.setAttribute('content', dark_mode ? '#27272a' : '#f4f4f5')
  }, [dark_mode])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handle_change = e => change_mode(e.matches)
    mediaQuery.addEventListener('change', handle_change)
    return () => mediaQuery.removeEventListener('change', handle_change)
  }, [])

  return SwitchComponent ? (
    <SwitchComponent
      isDarkMode={dark_mode}
      toggleDarkMode={() => change_mode(!dark_mode)}
    />
  ) : null
}
