import React from 'react'

export const Image = ({ src = '', style = '', alt = '' }) => {
  const {
    width = 'auto',
    height = 'auto',
    fit = 'contain',
    size = 'auto'
  } = Object.fromEntries(new URLSearchParams(src.split('?')[1]))

  return <img src={src} alt={alt} className={style} />
}
