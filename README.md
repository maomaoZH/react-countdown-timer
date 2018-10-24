# react-countdonw-timer

This is a react UI component of displaying countdown timer

## demo

<img src="https://github.com/maomaoZH/countdown-timer/blob/master/demo.gif" alt="demo" />

You can also find deployed version here: https://maomaozh.github.io/countdown-timer/

## Installation

```
yarn add react-countdown-timer
```

or

```
npm install react-countdown-timer
```

## How to use it

```js
import React from "react";
import { render } from "react-dom";
import CountdownTimer from "react-countdown-timer";

render(
  <CountdownTimer
    seconds={80}
    isDisplayEndTime={false}
    isDisplayResetButton={true}
  />,
  document.getElementById("root")
);
```

### Props

##### `seconds`: number

overall countdown seconds

##### `isDisplayEndTime`: bool

this will display a string with endtime, eg "Be back at ${endtime}"

##### `isDisplayResetButton`: bool

this will display a button to reset timer to "00:00:00"

##### `timerWrapperClass`: string

You can define your timer wrapper class

##### `timerClass`: string

You can define your timer class

## License

MIT
