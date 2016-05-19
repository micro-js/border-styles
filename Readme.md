
# border-styles

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

CSS Border styles. Just exports an array containing all valid CSS `border-style` property values.

## Installation

    $ npm install @f/border-styles

## Usage

```js
var borderStyles = require('@f/border-styles')

function isValidBorderStyle (str) {
  return borderStyles.indexOf(str) !== -1
}
```

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/border-styles.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/border-styles
[git-image]: https://img.shields.io/github/tag/micro-js/border-styles.svg?style=flat-square
[git-url]: https://github.com/micro-js/border-styles
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/border-styles.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/border-styles
