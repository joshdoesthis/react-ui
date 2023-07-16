import React from 'react'
import { useEffect, useState } from 'react'
import { Box } from './box'

export const Passcode = ({ ok, style = '', change = () => {} }) => {
  const [passcode, setPasscode] = useState({
    0: '',
    1: '',
    2: '',
    3: '',
    4: '',
    5: ''
  })

  useEffect(() => {
    const value = Object.values(passcode).join('')
    if (value.match(/^\d{6}$/)) {
      change({ ok: true, message: '', data: { value } })
    } else {
      change({ ok: false, message: 'Invalid passcode', data: { value } })
    }
  }, [passcode])

  const set = i => e => {
    const eventType = e.nativeEvent.inputType
    const value = e.nativeEvent.data
    if (eventType === 'insertFromPaste' && value.match(/^\d{6}$/)) {
      value.split('').forEach((v, i) => {
        passcode[i] = v
      })
      setPasscode({ ...passcode })
      document.getElementById(`p5`).focus()
    }
    if (eventType === 'insertText' && value.match(/^\d$/)) {
      passcode[i] = value
      setPasscode({ ...passcode })
      if (value && i < 5) {
        document.getElementById(`p${i + 1}`).focus()
      }
    }
    if (eventType === 'deleteContentBackward') {
      passcode[i] = ''
      setPasscode({ ...passcode })
      if (i > 0) {
        document.getElementById(`p${i - 1}`).focus()
      }
    }
  }

  return (
    <Box style='row gap-1'>
      {[0, 1, 2, 3, 4, 5].map(i => (
        <input
          key={i}
          id={`p${i}`}
          type={'text'}
          value={passcode[i]}
          data-ok={ok}
          className={style}
          onBlur={blur}
          onChange={set(i)}
        />
      ))}
    </Box>
  )
}
