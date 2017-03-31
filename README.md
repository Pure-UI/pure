# pure

[![build status][build-status-image]][build-status-url]
[![npm package][npm-package-image]][npm-package-url]
[![license][license-image]][license-url]

> elegant and lovely components

| [:book: Docs](https://pure.js.org) | [:snowboarder: Playground](https://jsfiddle.net/7krkLg5g/) |
| :---: | :---: |

## Installation

```bash
$ npm install pure-ui --save
```

## Usage

**Option 1**: with webpack ( Recommended )

```js
import Regular from 'regularjs';
import Pure from 'pure-ui';
// import css
import 'pure-ui/lib/index.css';

Regular.use( Pure );
```

**Option 2**: hot-link

```html
<link rel="stylesheet" href="//unpkg.com/pure-ui/lib/index.css">
```

```html
<script type="text/javascript" src="//unpkg.com/regularjs/dist/regular.js"></script>
<script type="text/javascript" src="//unpkg.com/pure-ui/lib/index.js"></script>
```

```js
Regular.use( Pure );
```

Alternatively, you can also register pure-ui in another namespace

```js
var Another = Regular.extend( {} );
Another.use( Pure );
```

## CDN

| [pure.js](https://unpkg.com/pure-ui/lib/index.js) | [pure.css](https://unpkg.com/pure-ui/lib/index.css) |
| :---: | :---: |

## Contributing

Every contribution is appreciated! But before you start working on your pull request, please read [CONTRIBUTING.md](CONTRIBUTING.md) first. There are some guidelines and tips you may want to know :)

## License

MIT

[build-status-image]: https://img.shields.io/circleci/project/fengzilong/pure/master.svg?style=flat-square
[build-status-url]: https://circleci.com/gh/fengzilong/pure

[npm-package-image]: https://img.shields.io/npm/v/pure-ui.svg?style=flat-square
[npm-package-url]: https://www.npmjs.org/package/pure-ui

[license-image]: https://img.shields.io/badge/license-MIT-000000.svg?style=flat-square
[license-url]: LICENSE
