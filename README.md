# pure

[![build status][build-status-image]][build-status-url] [![npm package][npm-package-image]][npm-package-url]

> elegant and lovely components

## Docs

https://pure.js.org

## Playground

[jsfiddle](https://jsfiddle.net/fengzilong/bc7rnqn5/)

## Installation

```bash
$ npm install pure-ui --save
```

## Usage

**Option 1**: with webpack

```js
import Regular from 'regularjs';
import Pure from 'pure-ui';
// import css
import 'pure-ui/dist/pure.css';

Regular.use( Pure );
```

**Option 2**: add hot-link

```html
<link rel="stylesheet" href="https://unpkg.com/pure-ui/dist/pure.css">
```

```html
<script type="text/javascript" src="https://unpkg.com/regularjs@0.5.2/dist/regular.js"></script>
<script type="text/javascript" src="https://unpkg.com/pure-ui/dist/pure.js"></script>
```

```js
Regular.use( Pure );
```

Alternatively, you can register pure components in another namespace

```js
var Another = Regular.extend( {} );
Another.use( Pure );
```

## CDN

[pure.js](https://unpkg.com/pure-ui/dist/pure.js) | [pure.css](https://unpkg.com/pure-ui/dist/pure.css)

## License

MIT &copy; [fengzilong](https://github.com/fengzilong)

[build-status-image]: https://img.shields.io/circleci/project/fengzilong/pure/master.svg?style=flat-square
[build-status-url]: https://circleci.com/gh/fengzilong/pure

[npm-package-image]: https://img.shields.io/npm/v/pure-ui.svg?style=flat-square
[npm-package-url]: https://www.npmjs.org/package/pure-ui
