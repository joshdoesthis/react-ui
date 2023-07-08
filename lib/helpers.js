export const to_title_case = str => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}

export const to_first_upper = str => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}