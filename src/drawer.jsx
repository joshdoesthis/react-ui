import React from 'react'
import { useEffect, useState, useRef } from 'react'

const DefaultTopComponent = ({ close }) => {
  const style = {
    container: `
      flex justify-end
      safe-l safe-r
    `,
    button: `
      text-(zinc-800 dark:zinc-100) 
      font-bold
      px-4 py-2
      opacity-(100 active:75)
      cursor-pointer
    `
  }

  return (
    <div className={style.container}>
      <button className={style.button} onClick={close}>
        Close
      </button>
    </div>
  )
}

export const Drawer = ({
  children,
  isOpen = false,
  close,
  TopComponent = DefaultTopComponent
}) => {
  const [drawer_open, set_drawer_open] = useState(isOpen)
  const ref = useRef(null)

  useEffect(() => {
    set_drawer_open(isOpen)
  }, [isOpen])

  useEffect(() => {
    const handle_click = e => {
      if (drawer_open && ref.current && !ref.current.contains(e.target)) {
        close()
      }
    }
    document.addEventListener('click', handle_click)
    return () => document.removeEventListener('click', handle_click)
  }, [drawer_open])

  const style = {
    base: `
      fixed top-0 right-0 z-50
      max-sm:w-full w-96
      h-full
      bg-zinc-200 dark:bg-zinc-700
      flex flex-col
      data-[open=false]:hidden
    `
  }

  return (
    <div ref={ref} className={style.base} data-open={isOpen}>
      <TopComponent close={close} />
      {children}
    </div>
  )
}
