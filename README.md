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

## Theme

(WIP)

| Prop    | Type     | Description           |
| ------- | -------- | --------------------- |
| `theme` | `object` | The theme of the app. |

## Box

| Prop         | Type      | Description                           |
| ------------ | --------- | ------------------------------------- |
| `forwardRef` | `object`  | A ref to the underlying HTML element. |
| `visible`    | `boolean` | Whether or not the Box is visible.    |

## Button

| Prop         | Type       | Description                                                 |
| ------------ | ---------- | ----------------------------------------------------------- |
| `forwardRef` | `object`   | A ref to the underlying HTML element.                       |
| `active`     | `boolean`  | Whether or not the Button is active. Defaults to `false`.   |
| `disabled`   | `boolean`  | Whether or not the Button is disabled. Defaults to `false`. |
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
| `TopComponent` | `function` | A component to render at the top of the Drawer. Defaults to `DefaultTopComponent`. |

### TopComponent

| Prop    | Type       | Description                                                                |
| ------- | ---------- | -------------------------------------------------------------------------- |
| `close` | `function` | A function to call when the Drawer is closed. References Drawer's `close`. |

## Input

| Prop           | Type       | Description                                                                |
| -------------- | ---------- | -------------------------------------------------------------------------- |
| `id`           | `string`   | The id of the Input.                                                       |
| `label`        | `string`   | The label of the Input.                                                    |
| `name`         | `string`   | The name of the Input.                                                     |
| `type`         | `string`   | The type of the Input. Defaults to `text`.                                 |
| `defaultValue` | `string`   | The default value of the Input.                                            |
| `ok`           | `boolean`  | Whether or not the Input is ok. Defaults to `true`.                        |
| `message`      | `string`   | The message of the Input.                                                  |
| `change`       | `function` | A function to call when the Input's value changes.                         |
| `blur`         | `function` | A function to call when the Input is blurred. References Input's `change`. |

## Markdown

| Prop       | Type     | Description             |
| ---------- | -------- | ----------------------- |
| `children` | `string` | The markdown to render. |

## Passcode

| Prop      | Type       | Description                                            |
| --------- | ---------- | ------------------------------------------------------ |
| `label`   | `string`   | The label of the Passcode.                             |
| `ok`      | `boolean`  | Whether or not the Passcode is ok. Defaults to `true`. |
| `message` | `string`   | The message of the Passcode.                           |
| `change`  | `function` | A function to call when the Passcode's value changes.  |

## Select

| Prop              | Type       | Description                                                              |
| ----------------- | ---------- | ------------------------------------------------------------------------ |
| `label`           | `string`   | The label of the Select.                                                 |
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

(wip)

| Prop | Type | Description |
| ---- | ---- | ----------- |

## DateTime

| Prop     | Type       | Description                                                              |
| -------- | ---------- | ------------------------------------------------------------------------ |
| `label`  | `string`   | The label of the Time.                                                   |
| `change` | `function` | A function to call when the Time's value changes.                        |
| `blur`   | `function` | A function to call when the Time is blurred. References Time's `change`. |

## DarkMode

defaultMode = 'auto'

| Prop              | Type       | Description                                                             |
| ----------------- | ---------- | ----------------------------------------------------------------------- |
| `defaultMode`     | `enum`     | The default mode of the Torch. Options are `auto`, `light`, and `dark`. |
| `SwitchComponent` | `function` | A component to render the Switch. Defaults to `DefaultSwitchComponent`. |

### SwitchComponent

| Prop    | Type       | Description                                 |
| ------- | ---------- | ------------------------------------------- |
| `mode`  | `enum`     | The mode of the Torch.                      |
| `cycle` | `function` | A function to call when the mode is cycled. |
