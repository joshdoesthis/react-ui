import React from 'react'

export const Image = ({ src, alt, height, width, style = '' }) => {
  return (
    <img src={src} alt={alt} height={height} width={width} className={style} />
  )
}
