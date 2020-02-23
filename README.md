# HTTP-Alert

Make an `alert()`-style pop-up with Node.js and your browser.

## Usage

Pass a string or type that implements `.toString()`. Streams are fine too.

```js
const httpAlert = require("http-alert");

httpAlert("hello world");
```

This should open your browser and display:

> hello world

You can also run this module from the command-line:

```console
$ http-alert hello world
hello world
$ echo hello world | http-alert -
hello world
```

## Install

With [npm](https://npmjs.org/) installed, run

```shell
npm install christianbundy/http-alert
```

## License

AGPL-3.0
