# React UI

## Installation

Using [npm](https://www.npmjs.com/):

```sh
$ npm i @joshdoesthis/react-ui
```

Using [yarn](https://yarnpkg.com/):

```sh
$ yarn add @joshdoesthis/react-ui
```

## Usage

```js
import {
  AppBar,
  Box,
  Button,
  DarkMode,
  Drawer,
  Input,
  Typography
} from '@joshdoesthis/react-ui'
import { useStore } from '../provider/store'

const App = () => {
  const { state, set } = useStore()
  const open_drawer = () => set('is_drawer_open', true)
  const close_drawer = () => set('is_drawer_open', false)
  const change = e => set('text', e.target.value)
  const click = () => alert(state.text)

  const style = {
    link: `
      flex items-center
      rounded
      text-base
      px-4 py-2
      h-10
    `
  }

  return (
    <>
      <AppBar>
        <Box tw='justify-between safe-right safe-left'>
          <Box>
            <Link url='/' tw={style.link}>
              Home
            </Link>
          </Box>
          <Box>
            <DarkMode />
            <Button click={open_drawer}>Open Drawer</Button>
          </Box>
        </Box>
      </AppBar>
      <Drawer isOpen={state.is_drawer_open} close={close_drawer}>
        <Box tw='flex-col'>
          <Box>
            <Button click={close}>Close Drawer</Button>
          </Box>
          <Box>
            <Link url='/about' tw={style.link}>
              About
            </Link>
          </Box>
        </Box>
      </Drawer>
      <Box>
        <Typography variant='h1'>React UI</Typography>
        <Box tw='flex-col gap-2'>
          <Input type='text' change={change} />
          <Button click={click}>Click Me</Button>
        </Box>
      </Box>
    </>
  )
}
```
