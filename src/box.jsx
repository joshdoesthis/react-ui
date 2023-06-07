import { twMerge } from 'tailwind-merge'

export const Box = ({ children, tw = '' }) => {
  const style = {
    base: `
      flex
    `
  }

  return (
    <div
      className={twMerge(`
        ${style.base}
        ${tw}
      `)}
    >
      {children}
    </div>
  )
}
