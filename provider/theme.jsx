import React, { createContext, useContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import install from '@twind/with-react'
import { defineConfig } from '@twind/core'
import presetAutoprefix from '@twind/preset-autoprefix'
import presetTailwind from '@twind/preset-tailwind'
import presetExt from '@twind/preset-ext'
import presetLineClamp from '@twind/preset-line-clamp'
import preflight from '../lib/preflight'
import rules from '../lib/rules'

const ThemeContext = createContext({})

const Theme = ({ children, theme = {} }) => {
  const [state, setState] = useState({})
  const [listeners, setListeners] = useState([])

  const subscribe = listener => {
    const newId = uuidv4()
    setListeners(listeners => [...listeners, { id: newId, listener }])
    return newId
  }

  const unsubscribe = id => {
    setListeners(listeners => listeners.filter(listener => listener.id !== id))
  }

  const set = newState => {
    if (typeof newState === 'function') setState(state => newState(state))
    else setState(state => ({ ...state, ...newState }))
  }

  const get = () => state

  useEffect(() => listeners.forEach(({ listener }) => listener(state)), [state])

  const setup = () => {
    const config = defineConfig({
      presets: [
        presetAutoprefix(),
        presetTailwind(),
        presetExt(),
        presetLineClamp()
      ],
      darkMode: ['class', '[data-theme="dark"]'],
      preflight: preflight(),
      rules: rules()
    })
    install(config)
  }

  useEffect(() => {
    setup()
  }, [])

  return (
    <ThemeContext.Provider value={{ subscribe, unsubscribe, set, get }}>
      {children}
    </ThemeContext.Provider>
  )
}

const useTheme = () => {
  const { subscribe, unsubscribe, set, get } = useContext(ThemeContext)
  const [state, setState] = useState(get())

  useEffect(() => {
    const id = subscribe(state => setState(state))
    return () => unsubscribe(id)
  }, [])

  return { state, set }
}

export { Theme, useTheme }
