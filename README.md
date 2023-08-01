# React UI

A simple UI library for React apps.

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

**`Theme` is required in the top-level of the app as it initialises tailwind and provides context to components.**

```jsx
import { Theme, Box, Text, Button } from '@joshdoesthis/react-ui'

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(() => count + 1)
  }

  return (
    <Theme>
      <Box>
        <Text h1>React UI</Text>
        <Text p>A simple UI library for React apps.</Text>
        <Text p>Count: {count}</Text>
        <Button press={increment}>Click me!</Button>
      </Box>
    </Theme>
  )
}
```

## Theme

| Prop    | Type     | Description           |
| ------- | -------- | --------------------- |
| `theme` | `object` | The theme of the app. |

## Box

| Prop         | Type     | Description                               |
| ------------ | -------- | ----------------------------------------- |
| `forwardRef` | `object` | A ref to the underlying HTML element.     |
| `style`      | `string` | Any tailwind classes to apply to the Box. |

## Button

| Prop         | Type       | Description                                                 |
| ------------ | ---------- | ----------------------------------------------------------- |
| `forwardRef` | `object`   | A ref to the underlying HTML element.                       |
| `name`       | `string`   | The name of the button for accessibility purposes.          |
| `active`     | `boolean`  | Whether or not the Button is active. Defaults to `false`.   |
| `disabled`   | `boolean`  | Whether or not the Button is disabled. Defaults to `false`. |
| `style`      | `string`   | Any tailwind classes to apply to the Button.                |
| `press`      | `function` | A function to call when the Button is pressed.              |

## Cassette

| Prop              | Type       | Description                                                              |
| ----------------- | ---------- | ------------------------------------------------------------------------ |
| `defaultValue`    | `string`   | The default value of the Cassette.                                       |
| `options`         | `array`    | An array of options to display in the Cassette.                          |
| `change`          | `function` | A function to call when the Cassette's value changes.                    |
| `OptionComponent` | `function` | A component to render each option. Defaults to `DefaultOptionComponent`. |

### OptionComponent

| Prop     | Type       | Description                                                                     |
| -------- | ---------- | ------------------------------------------------------------------------------- |
| `name`   | `string`   | The name of the option.                                                         |
| `value`  | `string`   | The value of the option.                                                        |
| `active` | `boolean`  | Whether or not the option is active. Defaults to `false`.                       |
| `select` | `function` | A function to call when the option is selected. References Cassette's `change`. |

## Drawer

| Prop           | Type       | Description                                                                        |
| -------------- | ---------- | ---------------------------------------------------------------------------------- |
| `visible`      | `boolean`  | Whether or not the Drawer is visible. Defaults to `false`.                         |
| `close`        | `function` | A function to call when the Drawer is closed.                                      |
| `style`        | `string`   | Any tailwind classes to apply to the Drawer.                                       |
| `TopComponent` | `function` | A component to render at the top of the Drawer. Defaults to `DefaultTopComponent`. |

### TopComponent

| Prop    | Type       | Description                                                                |
| ------- | ---------- | -------------------------------------------------------------------------- |
| `close` | `function` | A function to call when the Drawer is closed. References Drawer's `close`. |

## Input

| Prop           | Type       | Description                                                                |
| -------------- | ---------- | -------------------------------------------------------------------------- |
| `id`           | `string`   | The id of the Input.                                                       |
| `type`         | `string`   | The type of the Input. Defaults to `text`.                                 |
| `name`         | `string`   | The name of the Input.                                                     |
| `defaultValue` | `string`   | The default value of the Input.                                            |
| `ok`           | `boolean`  | Whether or not the Input is ok. Defaults to `true`.                        |
| `style`        | `string`   | Any tailwind classes to apply to the Input.                                |
| `blur`         | `function` | A function to call when the Input is blurred. References Input's `change`. |
| `change`       | `function` | A function to call when the Input's value changes.                         |

## Markdown

| Prop       | Type     | Description             |
| ---------- | -------- | ----------------------- |
| `children` | `string` | The markdown to render. |

## Passcode

| Prop     | Type       | Description                                            |
| -------- | ---------- | ------------------------------------------------------ |
| `ok`     | `boolean`  | Whether or not the Passcode is ok. Defaults to `true`. |
| `change` | `function` | A function to call when the Passcode's value changes.  |

## Select

| Prop              | Type       | Description                                                              |
| ----------------- | ---------- | ------------------------------------------------------------------------ |
| `defaultValue`    | `string`   | The default value of the Select.                                         |
| `options`         | `array`    | An array of options to display in the Select.                            |
| `OptionComponent` | `function` | A component to render each option. Defaults to `DefaultOptionComponent`. |
| `change`          | `function` | A function to call when the Select's value changes.                      |

### OptionComponent

| Prop     | Type       | Description                                                                   |
| -------- | ---------- | ----------------------------------------------------------------------------- |
| `name`   | `string`   | The name of the option.                                                       |
| `value`  | `string`   | The value of the option.                                                      |
| `active` | `boolean`  | Whether or not the option is active. Defaults to `false`.                     |
| `select` | `function` | A function to call when the option is selected. References Select's `change`. |

## Text

| Prop                                                                                                                                               | Type      | Description                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------------------------------------------------------------------------------------- |
| `children`                                                                                                                                         | `string`  | The text to render.                                                                      |
| `style`                                                                                                                                            | `string`  | Any tailwind classes to apply to the text.                                               |
| `b, strong, i, em, mark, small, del, ins, sub, sup, span, q, blockquote, abbr, address, cite, bdo, ul, ol, li, h1, h2, h3, h4, h5, h6, p, br, pre` | `boolean` | Whether or not to render the text as the corresponding HTML element. Defaults to `span`. |

## DateTime

| Prop     | Type       | Description                                       |
| -------- | ---------- | ------------------------------------------------- |
| `change` | `function` | A function to call when DateTime's value changes. |

## DarkMode

| Prop              | Type       | Description                                                                                |
| ----------------- | ---------- | ------------------------------------------------------------------------------------------ |
| `defaultMode`     | `enum`     | The default mode of the DarkMode. Options are `auto`, `light`, `dark`. Defaults to `auto`. |
| `SwitchComponent` | `function` | A component to render the Switch. Defaults to `DefaultSwitchComponent`.                    |

### SwitchComponent

| Prop    | Type       | Description                                 |
| ------- | ---------- | ------------------------------------------- |
| `mode`  | `enum`     | The current mode of the DarkMode.           |
| `cycle` | `function` | A function to call when the mode is cycled. |
