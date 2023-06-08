import React from 'react'

export const AppBar = ({ children, ...props }) => {
  const style = {
    base: `
      sticky top-0 z-40
      bg-(zinc-100 dark:zinc-800)
      border-(b zinc-200 dark:zinc-700)
    `
  }

  return <div className={style.base}>{children}</div>
}
