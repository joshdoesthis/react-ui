import { createElement } from 'react'
import { twMerge } from 'tailwind-merge'

export const Typography = ({ children, varient = 'span', tw = '' }) => {
  const styles = {
    base: `mt-2 mb-2`,
    varient: {
      h1: `text-4xl font-bold`,
      h2: `text-3xl font-bold`,
      h3: `text-2xl font-bold`,
      h4: `text-xl font-bold`,
      h5: `text-lg font-bold`,
      h6: `text-base font-bold`,
      p: `text-base`,
      span: `
        text-base
        mt-0 mb-0
      `
    }
  }

  const Varient = () =>
    createElement(
      varient,
      {
        className: twMerge(`
        ${styles.base}
        ${styles.varient[varient]}
        ${tw}
      `)
      },
      children
    )

  return <Varient />
}
