# pure [![npm package](https://img.shields.io/npm/v/pure-ui.svg?style=flat-square)](https://www.npmjs.org/package/pure-ui)

> elegant and lovely components

## Docs

https://fengzilong.github.io/pure/

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

// it's all done
Regular.use( Pure );
```

if you want to register pure components in another namespace

```js
var AnotherNameSpace = Regular.extend({});
AnotherNameSpace.use( Pure );
```

it works

**Option 2**: add hot-link in your page

```html
<link rel="stylesheet" href="pure.css">
```

```html
<script type="text/javascript" src="regular.js"></script>
<script type="text/javascript" src="pure.js"></script>
```

the order of regular and pure doesn't matter

```js
Regular.use( Pure );
// or
// var AnotherNameSpace = Regular.extend({});
// AnotherNameSpace.use( Pure );
```

enjoy!

## CDN

pure.css: https://unpkg.com/pure-ui/dist/pure.css

pure.js: https://unpkg.com/pure-ui/dist/pure.js

## License

MIT &copy; [fengzilong](https://github.com/fengzilong)
