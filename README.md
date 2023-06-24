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
  Text
} from '@joshdoesthis/react-ui'
import { useRouter } from '@joshdoesthis/react-router'
import { useStore } from '../provider/store'

const App = () => {
  const { navigate } = useRouter()
  const { state, set } = useStore()
  const open_drawer = () => set('is_drawer_open', true)
  const close_drawer = () => set('is_drawer_open', false)
  const change = e => set('text', e.target.value)
  const click = () => alert(state.text)
  const naigate_home = () => navigate('/')

  const style = {
    header: `
      sticky top-0 z-40
      flex flex-col
    `,
    container: `
      justify-between
      bg-(zinc-100 dark:zinc-800)
      border-(b zinc-200 dark:zinc-700)
      safe-right safe-left
    `
  }

  return (
    <>
      <Box tw={style.header}>
        <Box tw={style.container}>
          <Box>
            <Button click={navigate_home}>Home</Button>
          </Box>
          <Box>
            <DarkMode />
            <Button click={open_drawer}>Open Drawer</Button>
          </Box>
        </Box>
      </Box>
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
        <Text variant='h1'>React UI</Text>
        <Box tw='flex-col gap-2'>
          <Input type='text' change={change} />
          <Button click={click}>Click Me</Button>
        </Box>
      </Box>
    </>
  )
}
```
