import React, { useEffect, useState } from 'react'
import { Box } from './box'
import { Input } from './input'
import { Text } from './text'
import { toFirstUpper } from '../lib/utils'
import { getDaysInMonth } from 'date-fns'

export const DateTime = ({ label = '', change = () => {} }) => {
  const [state, setState] = useState({
    day: { ok: true, data: new Date().getDate() },
    month: { ok: true, data: new Date().getMonth() + 1 },
    year: { ok: true, data: new Date().getFullYear() }
  })

  useEffect(() => {
    const ok = state.day.ok && state.month.ok && state.year.ok
    const message =
      state.day.message || state.month.message || state.year.message
        ? 'Invalid date'
        : ''
    const date = new Date(
      state.year.data,
      state.month.data - 1,
      state.day.data
    ).toISOString()
    change({ ok, message, data: { value: ok ? date : null } })
  }, [state])

  const set = e => {
    const { name, value } = e.target
    setState(state => ({
      ...state,
      [name]: {
        ...state[name],
        data: value
      }
    }))
  }

  const validate = () => {
    for (const [name, { data }] of Object.entries(state)) {
      const maxD = getDaysInMonth(
        new Date(state.year.data, state.month.data - 1)
      )
      const minY = new Date().getFullYear()
      const maxY = minY + 100
      const [ok, message] = {
        day: data < 1 || data > maxD ? [false, 'Invalid day'] : null,
        month: data < 1 || data > 12 ? [false, 'Invalid month'] : null,
        year: data < minY || data > maxY ? [false, 'Invalid year'] : null
      }[name] ?? [true, '']
      state[name] = { data, ok, message }
    }
    setState({ ...state })
  }

  return (
    <>
      {label ? <Text>{toFirstUpper(label)}</Text> : null}
      <Box>
        {Object.entries(state).map(([name, { ok, message, data }]) => (
          <Input
            key={name}
            name={name}
            value={data}
            ok={!ok}
            message={message}
            change={set}
            blur={validate}
          />
        ))}
      </Box>
    </>
  )
}
