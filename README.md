# pure [![npm package](https://img.shields.io/npm/v/pure-ui.svg?style=flat-square)](https://www.npmjs.org/package/pure-ui)

> elegant and lovely components

## Docs

https://pure.js.org

## Playground

https://jsfiddle.net/fengzilong/bc7rnqn5/

## Installation

```bash
$ npm install pure-ui
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
<link rel="stylesheet" href="pure.css">
```

```html
<script type="text/javascript" src="regular.js"></script>
<script type="text/javascript" src="pure.js"></script>
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
