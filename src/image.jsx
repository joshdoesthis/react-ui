import React from 'react'

export const Image = ({ src, alt, style = '' }) => {
  return <img src={src} alt={alt} className={style} />
}
