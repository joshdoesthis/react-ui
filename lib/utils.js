import { twMerge } from 'tailwind-merge'

export const toTitleCase = str => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}

export const toFirstUpper = str => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const mergeCommon = (target, source) => {
  for (const key of Object.keys(source)) {
    if (source[key] instanceof Object) {
      if (!target[key]) continue

      mergeCommon(target[key], source[key])
    } else {
      target[key] = source[key]
    }
  }
  return target
}

export const mergeStyles = (defaultStyle, style) => {
  const uniqueStyles = [
    ...new Set(
      [...defaultStyle.split(' '), ...style.split(' ')].filter(Boolean)
    )
  ].join(' ')
  return twMerge(uniqueStyles)
}
