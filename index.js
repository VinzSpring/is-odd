/*!
 * is-odd <https://github.com/jonschlinkert/is-odd>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

const isNumber = require('is-number');

module.exports = function isOdd(value) {
  if (!isNumber(value)) {
    throw new TypeError('expected a number');
  }
  if (!Number.isInteger(value)) {
    throw new Error('expected an integer');
  }
  if (!Number.isSafeInteger(value)) {
    throw new Error('value exceeds maximum safe integer');
  }
  return value & 1;
};

