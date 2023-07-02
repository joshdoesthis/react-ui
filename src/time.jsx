import React, { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { Box } from './box.jsx'
import { Input } from './input.jsx'
import { Text } from './text.jsx'

export const Time = ({ change = () => {}, blur = () => {}, tw = '' }) => {
  const [state, set_state] = useState({
    day: new Date().getDate().toString().padStart(2, '0'),
    month: new Date().getMonth().toString().padStart(2, '0'),
    year: new Date().getFullYear().toString().padStart(4, '0'),
    hour: new Date().getHours().toString(),
    minute: new Date().getMinutes().toString(),
    second: new Date().getSeconds().toString()
  })

  useEffect(() => {
    const date = new Date(
      state.year,
      state.month,
      state.day,
      state.hour,
      state.minute,
      state.second
    ).toISOString()
    change(date)
  }, [state])

  const change_time = e => {
    set_state({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Box tw='max-w-sm gap-1'>
      <Box tw='flex-col gap-1'>
        <Text tw='text-sm'>Day</Text>
        <Input name='day' change={change_time} value={state.day} size='sm' />
      </Box>
      <Box tw='flex-col gap-1'>
        <Text tw='text-sm'>Month</Text>
        <Input
          name='month'
          change={change_time}
          value={state.month}
          size='sm'
        />
      </Box>
      <Box tw='flex-col gap-1'>
        <Text tw='text-sm'>Year</Text>
        <Input name='year' change={change_time} value={state.year} size='sm' />
      </Box>
      <Box tw='flex-col gap-1'>
        <Text tw='text-sm'>Hour</Text>
        <Input name='hour' change={change_time} value={state.hour} size='sm' />
      </Box>
      <Box tw='flex-col gap-1'>
        <Text tw='text-sm'>Minute</Text>
        <Input
          name='minute'
          change={change_time}
          value={state.minute}
          size='sm'
        />
      </Box>
      <Box tw='flex-col gap-1'>
        <Text tw='text-sm'>Second</Text>
        <Input
          name='second'
          change={change_time}
          value={state.second}
          size='sm'
        />
      </Box>
    </Box>
  )
}
