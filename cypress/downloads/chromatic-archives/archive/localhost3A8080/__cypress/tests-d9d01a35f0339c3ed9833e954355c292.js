/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/.pnpm/@chromatic-com+cypress@0.8.0_esbuild@0.23.1_typescript@5.6.2_webpack-sources@3.2.3/node_modules/@chromatic-com/cypress/dist/support.mjs":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@chromatic-com+cypress@0.8.0_esbuild@0.23.1_typescript@5.6.2_webpack-sources@3.2.3/node_modules/@chromatic-com/cypress/dist/support.mjs ***!
  \********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chromaui_rrweb_snapshot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chromaui/rrweb-snapshot */ "./node_modules/.pnpm/@chromaui+rrweb-snapshot@2.0.0-alpha.17-noAbsolute_ypg4xlajkbes4cqkt364ekjkcq/node_modules/@chromaui/rrweb-snapshot/dist/rrweb-snapshot.js");


Cypress.Commands.add("takeSnapshot",e=>{Cypress.config("isTextTerminal")&&cy.document().then(s=>{let r=(0,_chromaui_rrweb_snapshot__WEBPACK_IMPORTED_MODULE_0__.snapshot)(s);cy.get("@manualSnapshots").then(o=>[...o,{name:e,snapshot:r}]).as("manualSnapshots");});});beforeEach(()=>{Cypress.config("isTextTerminal")&&(cy.wrap([]).as("manualSnapshots"),cy.task("prepareArchives",{action:"setup-network-listener",payload:{allowedDomains:Cypress.env("assetDomains")}}));});afterEach(()=>{Cypress.config("isTextTerminal")&&cy.document().then(e=>{let s=Cypress.env("disableAutoSnapshot")?[]:[{snapshot:(0,_chromaui_rrweb_snapshot__WEBPACK_IMPORTED_MODULE_0__.snapshot)(e)}];cy.get("@manualSnapshots").then((r=[])=>{cy.url().then(o=>{cy.task("prepareArchives",{action:"save-archives",payload:{testTitlePath:[Cypress.spec.relativeToCommonRoot,...Cypress.currentTest.titlePath],domSnapshots:[...r,...s],chromaticStorybookParams:{...Cypress.env("diffThreshold")&&{diffThreshold:Cypress.env("diffThreshold")},...Cypress.env("delay")&&{delay:Cypress.env("delay")},...Cypress.env("diffIncludeAntiAliasing")&&{diffIncludeAntiAliasing:Cypress.env("diffIncludeAntiAliasing")},...Cypress.env("diffThreshold")&&{diffThreshold:Cypress.env("diffThreshold")},...Cypress.env("forcedColors")&&{forcedColors:Cypress.env("forcedColors")},...Cypress.env("pauseAnimationAtEnd")&&{pauseAnimationAtEnd:Cypress.env("pauseAnimationAtEnd")},...Cypress.env("prefersReducedMotion")&&{prefersReducedMotion:Cypress.env("prefersReducedMotion")},...Cypress.env("cropToViewport")&&{cropToViewport:Cypress.env("cropToViewport")},...Cypress.env("ignoreSelectors")&&{ignoreSelectors:Cypress.env("ignoreSelectors")}},pageUrl:o,viewport:{height:Cypress.config("viewportHeight"),width:Cypress.config("viewportWidth")},outputDir:Cypress.config("downloadsFolder")}});});});});});
//# sourceMappingURL=out.js.map
//# sourceMappingURL=support.mjs.map

/***/ }),

/***/ "./node_modules/.pnpm/base64-js@1.5.1/node_modules/base64-js/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.pnpm/base64-js@1.5.1/node_modules/base64-js/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/.pnpm/buffer@5.7.1/node_modules/buffer/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/.pnpm/buffer@5.7.1/node_modules/buffer/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/.pnpm/base64-js@1.5.1/node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/.pnpm/ieee754@1.2.1/node_modules/ieee754/index.js")
var customInspectSymbol =
  (typeof Symbol === 'function' && typeof Symbol['for'] === 'function') // eslint-disable-line dot-notation
    ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
    : null

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

var K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    var arr = new Uint8Array(1)
    var proto = { foo: function () { return 42 } }
    Object.setPrototypeOf(proto, Uint8Array.prototype)
    Object.setPrototypeOf(arr, proto)
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.buffer
  }
})

Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.byteOffset
  }
})

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  // Return an augmented `Uint8Array` instance
  var buf = new Uint8Array(length)
  Object.setPrototypeOf(buf, Buffer.prototype)
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayView(value)
  }

  if (value == null) {
    throw new TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }

  if (isInstance(value, ArrayBuffer) ||
      (value && isInstance(value.buffer, ArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof SharedArrayBuffer !== 'undefined' &&
      (isInstance(value, SharedArrayBuffer) ||
      (value && isInstance(value.buffer, SharedArrayBuffer)))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    )
  }

  var valueOf = value.valueOf && value.valueOf()
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length)
  }

  var b = fromObject(value)
  if (b) return b

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
      typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(
      value[Symbol.toPrimitive]('string'), encodingOrOffset, length
    )
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype)
Object.setPrototypeOf(Buffer, Uint8Array)

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  var length = byteLength(string, encoding) | 0
  var buf = createBuffer(length)

  var actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  var buf = createBuffer(length)
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayView (arrayView) {
  if (isInstance(arrayView, Uint8Array)) {
    var copy = new Uint8Array(arrayView)
    return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength)
  }
  return fromArrayLike(arrayView)
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  var buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  Object.setPrototypeOf(buf, Buffer.prototype)

  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    var buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true &&
    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
}

Buffer.compare = function compare (a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    )
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (isInstance(buf, Uint8Array)) {
      if (pos + buf.length > buffer.length) {
        Buffer.from(buf).copy(buffer, pos)
      } else {
        Uint8Array.prototype.set.call(
          buffer,
          buf,
          pos
        )
      }
    } else if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    } else {
      buf.copy(buffer, pos)
    }
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
      'Received type ' + typeof string
    )
  }

  var len = string.length
  var mustMatch = (arguments.length > 2 && arguments[2] === true)
  if (!mustMatch && len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
        }
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
  if (this.length > max) str += ' ... '
  return '<Buffer ' + str + '>'
}
if (customInspectSymbol) {
  Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength)
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError(
      'The "target" argument must be one of type Buffer or Uint8Array. ' +
      'Received type ' + (typeof target)
    )
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  var strLen = string.length

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
      case 'latin1':
      case 'binary':
        return asciiWrite(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF)
      ? 4
      : (firstByte > 0xDF)
          ? 3
          : (firstByte > 0xBF)
              ? 2
              : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += hexSliceLookupTable[buf[i]]
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
  for (var i = 0; i < bytes.length - 1; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  Object.setPrototypeOf(newBuf, Buffer.prototype)

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUintLE =
Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUintBE =
Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUint8 =
Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUint16LE =
Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUint16BE =
Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUint32LE =
Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUint32BE =
Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUintLE =
Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUintBE =
Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUint8 =
Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUint16LE =
Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUint16BE =
Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUint32LE =
Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUint32BE =
Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end)
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  } else if (typeof val === 'boolean') {
    val = Number(val)
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : Buffer.from(val, encoding)
    var len = bytes.length
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance (obj, type) {
  return obj instanceof type ||
    (obj != null && obj.constructor != null && obj.constructor.name != null &&
      obj.constructor.name === type.name)
}
function numberIsNaN (obj) {
  // For IE11 support
  return obj !== obj // eslint-disable-line no-self-compare
}

// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
var hexSliceLookupTable = (function () {
  var alphabet = '0123456789abcdef'
  var table = new Array(256)
  for (var i = 0; i < 16; ++i) {
    var i16 = i * 16
    for (var j = 0; j < 16; ++j) {
      table[i16 + j] = alphabet[i] + alphabet[j]
    }
  }
  return table
})()


/***/ }),

/***/ "./node_modules/.pnpm/ieee754@1.2.1/node_modules/ieee754/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/.pnpm/ieee754@1.2.1/node_modules/ieee754/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "../../Library/Caches/Cypress/13.15.0/Cypress.app/Contents/Resources/app/node_modules/process/browser.js":
/*!***************************************************************************************************************!*\
  !*** ../../Library/Caches/Cypress/13.15.0/Cypress.app/Contents/Resources/app/node_modules/process/browser.js ***!
  \***************************************************************************************************************/
/***/ ((module) => {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./cypress/support/commands.ts":
/*!*************************************!*\
  !*** ./cypress/support/commands.ts ***!
  \*************************************/
/***/ (() => {

"use strict";

/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }


/***/ }),

/***/ "./node_modules/.pnpm/@chromaui+rrweb-snapshot@2.0.0-alpha.17-noAbsolute_ypg4xlajkbes4cqkt364ekjkcq/node_modules/@chromaui/rrweb-snapshot/dist/rrweb-snapshot.js":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@chromaui+rrweb-snapshot@2.0.0-alpha.17-noAbsolute_ypg4xlajkbes4cqkt364ekjkcq/node_modules/@chromaui/rrweb-snapshot/dist/rrweb-snapshot.js ***!
  \***********************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IGNORED_NODE: () => (/* binding */ IGNORED_NODE),
/* harmony export */   Mirror: () => (/* binding */ Mirror),
/* harmony export */   NodeType: () => (/* binding */ NodeType),
/* harmony export */   absolutifyURLs: () => (/* binding */ absolutifyURLs),
/* harmony export */   adaptCssForReplay: () => (/* binding */ adaptCssForReplay),
/* harmony export */   buildNodeWithSN: () => (/* binding */ buildNodeWithSN),
/* harmony export */   classMatchesRegex: () => (/* binding */ classMatchesRegex),
/* harmony export */   cleanupSnapshot: () => (/* binding */ cleanupSnapshot),
/* harmony export */   createCache: () => (/* binding */ createCache),
/* harmony export */   createMirror: () => (/* binding */ createMirror),
/* harmony export */   escapeImportStatement: () => (/* binding */ escapeImportStatement),
/* harmony export */   extractFileExtension: () => (/* binding */ extractFileExtension),
/* harmony export */   fixSafariColons: () => (/* binding */ fixSafariColons),
/* harmony export */   genId: () => (/* binding */ genId),
/* harmony export */   getInputType: () => (/* binding */ getInputType),
/* harmony export */   ignoreAttribute: () => (/* binding */ ignoreAttribute),
/* harmony export */   is2DCanvasBlank: () => (/* binding */ is2DCanvasBlank),
/* harmony export */   isCSSImportRule: () => (/* binding */ isCSSImportRule),
/* harmony export */   isCSSStyleRule: () => (/* binding */ isCSSStyleRule),
/* harmony export */   isElement: () => (/* binding */ isElement),
/* harmony export */   isNativeShadowDom: () => (/* binding */ isNativeShadowDom),
/* harmony export */   isNodeMetaEqual: () => (/* binding */ isNodeMetaEqual),
/* harmony export */   isShadowRoot: () => (/* binding */ isShadowRoot),
/* harmony export */   markCssSplits: () => (/* binding */ markCssSplits),
/* harmony export */   maskInputValue: () => (/* binding */ maskInputValue),
/* harmony export */   needMaskingText: () => (/* binding */ needMaskingText),
/* harmony export */   normalizeCssString: () => (/* binding */ normalizeCssString),
/* harmony export */   rebuild: () => (/* binding */ rebuild),
/* harmony export */   serializeNodeWithId: () => (/* binding */ serializeNodeWithId),
/* harmony export */   snapshot: () => (/* binding */ snapshot),
/* harmony export */   splitCssText: () => (/* binding */ splitCssText),
/* harmony export */   stringifyRule: () => (/* binding */ stringifyRule),
/* harmony export */   stringifyStylesheet: () => (/* binding */ stringifyStylesheet),
/* harmony export */   toLowerCase: () => (/* binding */ toLowerCase),
/* harmony export */   transformAttribute: () => (/* binding */ transformAttribute),
/* harmony export */   visitSnapshot: () => (/* binding */ visitSnapshot)
/* harmony export */ });
/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ "./node_modules/.pnpm/buffer@5.7.1/node_modules/buffer/index.js")["Buffer"];
/* provided dependency */ var process = __webpack_require__(/*! ../../Library/Caches/Cypress/13.15.0/Cypress.app/Contents/Resources/app/node_modules/process/browser.js */ "../../Library/Caches/Cypress/13.15.0/Cypress.app/Contents/Resources/app/node_modules/process/browser.js");
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var NodeType = /* @__PURE__ */ ((NodeType2) => {
  NodeType2[NodeType2["Document"] = 0] = "Document";
  NodeType2[NodeType2["DocumentType"] = 1] = "DocumentType";
  NodeType2[NodeType2["Element"] = 2] = "Element";
  NodeType2[NodeType2["Text"] = 3] = "Text";
  NodeType2[NodeType2["CDATA"] = 4] = "CDATA";
  NodeType2[NodeType2["Comment"] = 5] = "Comment";
  return NodeType2;
})(NodeType || {});
const testableAccessors = {
  Node: ["childNodes", "parentNode", "parentElement", "textContent"],
  ShadowRoot: ["host", "styleSheets"],
  Element: ["shadowRoot", "querySelector", "querySelectorAll"],
  MutationObserver: []
};
const testableMethods = {
  Node: ["contains", "getRootNode"],
  ShadowRoot: ["getSelection"],
  Element: [],
  MutationObserver: ["constructor"]
};
const untaintedBasePrototype = {};
function getUntaintedPrototype(key) {
  if (untaintedBasePrototype[key])
    return untaintedBasePrototype[key];
  const defaultObj = globalThis[key];
  const defaultPrototype = defaultObj.prototype;
  const accessorNames = key in testableAccessors ? testableAccessors[key] : void 0;
  const isUntaintedAccessors = Boolean(
    accessorNames && // @ts-expect-error 2345
    accessorNames.every(
      (accessor) => {
        var _a, _b;
        return Boolean(
          (_b = (_a = Object.getOwnPropertyDescriptor(defaultPrototype, accessor)) == null ? void 0 : _a.get) == null ? void 0 : _b.toString().includes("[native code]")
        );
      }
    )
  );
  const methodNames = key in testableMethods ? testableMethods[key] : void 0;
  const isUntaintedMethods = Boolean(
    methodNames && methodNames.every(
      // @ts-expect-error 2345
      (method) => {
        var _a;
        return typeof defaultPrototype[method] === "function" && ((_a = defaultPrototype[method]) == null ? void 0 : _a.toString().includes("[native code]"));
      }
    )
  );
  if (isUntaintedAccessors && isUntaintedMethods) {
    untaintedBasePrototype[key] = defaultObj.prototype;
    return defaultObj.prototype;
  }
  try {
    const iframeEl = document.createElement("iframe");
    document.body.appendChild(iframeEl);
    const win = iframeEl.contentWindow;
    if (!win) return defaultObj.prototype;
    const untaintedObject = win[key].prototype;
    document.body.removeChild(iframeEl);
    if (!untaintedObject) return defaultPrototype;
    return untaintedBasePrototype[key] = untaintedObject;
  } catch {
    return defaultPrototype;
  }
}
const untaintedAccessorCache = {};
function getUntaintedAccessor(key, instance, accessor) {
  var _a;
  const cacheKey = `${key}.${String(accessor)}`;
  if (untaintedAccessorCache[cacheKey])
    return untaintedAccessorCache[cacheKey].call(
      instance
    );
  const untaintedPrototype = getUntaintedPrototype(key);
  const untaintedAccessor = (_a = Object.getOwnPropertyDescriptor(
    untaintedPrototype,
    accessor
  )) == null ? void 0 : _a.get;
  if (!untaintedAccessor) return instance[accessor];
  untaintedAccessorCache[cacheKey] = untaintedAccessor;
  return untaintedAccessor.call(instance);
}
const untaintedMethodCache = {};
function getUntaintedMethod(key, instance, method) {
  const cacheKey = `${key}.${String(method)}`;
  if (untaintedMethodCache[cacheKey])
    return untaintedMethodCache[cacheKey].bind(
      instance
    );
  const untaintedPrototype = getUntaintedPrototype(key);
  const untaintedMethod = untaintedPrototype[method];
  if (typeof untaintedMethod !== "function") return instance[method];
  untaintedMethodCache[cacheKey] = untaintedMethod;
  return untaintedMethod.bind(instance);
}
function childNodes(n) {
  return getUntaintedAccessor("Node", n, "childNodes");
}
function parentNode(n) {
  return getUntaintedAccessor("Node", n, "parentNode");
}
function parentElement(n) {
  return getUntaintedAccessor("Node", n, "parentElement");
}
function textContent(n) {
  return getUntaintedAccessor("Node", n, "textContent");
}
function contains(n, other) {
  return getUntaintedMethod("Node", n, "contains")(other);
}
function getRootNode(n) {
  return getUntaintedMethod("Node", n, "getRootNode")();
}
function host(n) {
  if (!n || !("host" in n)) return null;
  return getUntaintedAccessor("ShadowRoot", n, "host");
}
function styleSheets(n) {
  return n.styleSheets;
}
function shadowRoot(n) {
  if (!n || !("shadowRoot" in n)) return null;
  return getUntaintedAccessor("Element", n, "shadowRoot");
}
function querySelector(n, selectors) {
  return getUntaintedAccessor("Element", n, "querySelector")(selectors);
}
function querySelectorAll(n, selectors) {
  return getUntaintedAccessor("Element", n, "querySelectorAll")(selectors);
}
function mutationObserverCtor() {
  return getUntaintedPrototype("MutationObserver").constructor;
}
const index = {
  childNodes,
  parentNode,
  parentElement,
  textContent,
  contains,
  getRootNode,
  host,
  styleSheets,
  shadowRoot,
  querySelector,
  querySelectorAll,
  mutationObserver: mutationObserverCtor
};
function isElement(n) {
  return n.nodeType === n.ELEMENT_NODE;
}
function isShadowRoot(n) {
  const hostEl = (
    // anchor and textarea elements also have a `host` property
    // but only shadow roots have a `mode` property
    n && "host" in n && "mode" in n && index.host(n) || null
  );
  return Boolean(
    hostEl && "shadowRoot" in hostEl && index.shadowRoot(hostEl) === n
  );
}
function isNativeShadowDom(shadowRoot2) {
  return Object.prototype.toString.call(shadowRoot2) === "[object ShadowRoot]";
}
function fixBrowserCompatibilityIssuesInCSS(cssText) {
  if (cssText.includes(" background-clip: text;") && !cssText.includes(" -webkit-background-clip: text;")) {
    cssText = cssText.replace(
      /\sbackground-clip:\s*text;/g,
      " -webkit-background-clip: text; background-clip: text;"
    );
  }
  return cssText;
}
function escapeImportStatement(rule2) {
  const { cssText } = rule2;
  if (cssText.split('"').length < 3) return cssText;
  const statement = ["@import", `url(${JSON.stringify(rule2.href)})`];
  if (rule2.layerName === "") {
    statement.push(`layer`);
  } else if (rule2.layerName) {
    statement.push(`layer(${rule2.layerName})`);
  }
  if (rule2.supportsText) {
    statement.push(`supports(${rule2.supportsText})`);
  }
  if (rule2.media.length) {
    statement.push(rule2.media.mediaText);
  }
  return statement.join(" ") + ";";
}
function stringifyStylesheet(s) {
  try {
    const rules = s.rules || s.cssRules;
    if (!rules) {
      return null;
    }
    let sheetHref = s.href;
    if (!sheetHref && s.ownerNode && s.ownerNode.ownerDocument) {
      sheetHref = s.ownerNode.ownerDocument.location.href;
    }
    const stringifiedRules = Array.from(
      rules,
      (rule2) => stringifyRule(rule2, sheetHref)
    ).join("");
    return fixBrowserCompatibilityIssuesInCSS(stringifiedRules);
  } catch (error) {
    return null;
  }
}
function stringifyRule(rule2, sheetHref) {
  if (isCSSImportRule(rule2)) {
    let importStringified;
    try {
      importStringified = // for same-origin stylesheets,
      // we can access the imported stylesheet rules directly
      stringifyStylesheet(rule2.styleSheet) || // work around browser issues with the raw string `@import url(...)` statement
      escapeImportStatement(rule2);
    } catch (error) {
      importStringified = rule2.cssText;
    }
    if (rule2.styleSheet.href) {
      return absolutifyURLs(importStringified, rule2.styleSheet.href);
    }
    return importStringified;
  } else {
    let ruleStringified = rule2.cssText;
    if (isCSSStyleRule(rule2) && rule2.selectorText.includes(":")) {
      ruleStringified = fixSafariColons(ruleStringified);
    }
    if (sheetHref) {
      return absolutifyURLs(ruleStringified, sheetHref);
    }
    return ruleStringified;
  }
}
function fixSafariColons(cssStringified) {
  const regex = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
  return cssStringified.replace(regex, "$1\\$2");
}
function isCSSImportRule(rule2) {
  return "styleSheet" in rule2;
}
function isCSSStyleRule(rule2) {
  return "selectorText" in rule2;
}
class Mirror {
  constructor() {
    __publicField(this, "idNodeMap", /* @__PURE__ */ new Map());
    __publicField(this, "nodeMetaMap", /* @__PURE__ */ new WeakMap());
  }
  getId(n) {
    var _a;
    if (!n) return -1;
    const id = (_a = this.getMeta(n)) == null ? void 0 : _a.id;
    return id ?? -1;
  }
  getNode(id) {
    return this.idNodeMap.get(id) || null;
  }
  getIds() {
    return Array.from(this.idNodeMap.keys());
  }
  getMeta(n) {
    return this.nodeMetaMap.get(n) || null;
  }
  // removes the node from idNodeMap
  // doesn't remove the node from nodeMetaMap
  removeNodeFromMap(n) {
    const id = this.getId(n);
    this.idNodeMap.delete(id);
    if (n.childNodes) {
      n.childNodes.forEach(
        (childNode) => this.removeNodeFromMap(childNode)
      );
    }
  }
  has(id) {
    return this.idNodeMap.has(id);
  }
  hasNode(node2) {
    return this.nodeMetaMap.has(node2);
  }
  add(n, meta) {
    const id = meta.id;
    this.idNodeMap.set(id, n);
    this.nodeMetaMap.set(n, meta);
  }
  replace(id, n) {
    const oldNode = this.getNode(id);
    if (oldNode) {
      const meta = this.nodeMetaMap.get(oldNode);
      if (meta) this.nodeMetaMap.set(n, meta);
    }
    this.idNodeMap.set(id, n);
  }
  reset() {
    this.idNodeMap = /* @__PURE__ */ new Map();
    this.nodeMetaMap = /* @__PURE__ */ new WeakMap();
  }
}
function createMirror() {
  return new Mirror();
}
function maskInputValue({
  element,
  maskInputOptions,
  tagName,
  type,
  value,
  maskInputFn
}) {
  let text = value || "";
  const actualType = type && toLowerCase(type);
  if (maskInputOptions[tagName.toLowerCase()] || actualType && maskInputOptions[actualType]) {
    if (maskInputFn) {
      text = maskInputFn(text, element);
    } else {
      text = "*".repeat(text.length);
    }
  }
  return text;
}
function toLowerCase(str) {
  return str.toLowerCase();
}
const ORIGINAL_ATTRIBUTE_NAME = "__rrweb_original__";
function is2DCanvasBlank(canvas) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return true;
  const chunkSize = 50;
  for (let x2 = 0; x2 < canvas.width; x2 += chunkSize) {
    for (let y = 0; y < canvas.height; y += chunkSize) {
      const getImageData = ctx.getImageData;
      const originalGetImageData = ORIGINAL_ATTRIBUTE_NAME in getImageData ? getImageData[ORIGINAL_ATTRIBUTE_NAME] : getImageData;
      const pixelBuffer = new Uint32Array(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
        originalGetImageData.call(
          ctx,
          x2,
          y,
          Math.min(chunkSize, canvas.width - x2),
          Math.min(chunkSize, canvas.height - y)
        ).data.buffer
      );
      if (pixelBuffer.some((pixel) => pixel !== 0)) return false;
    }
  }
  return true;
}
function isNodeMetaEqual(a, b) {
  if (!a || !b || a.type !== b.type) return false;
  if (a.type === NodeType.Document)
    return a.compatMode === b.compatMode;
  else if (a.type === NodeType.DocumentType)
    return a.name === b.name && a.publicId === b.publicId && a.systemId === b.systemId;
  else if (a.type === NodeType.Comment || a.type === NodeType.Text || a.type === NodeType.CDATA)
    return a.textContent === b.textContent;
  else if (a.type === NodeType.Element)
    return a.tagName === b.tagName && JSON.stringify(a.attributes) === JSON.stringify(b.attributes) && a.isSVG === b.isSVG && a.needBlock === b.needBlock;
  return false;
}
function getInputType(element) {
  const type = element.type;
  return element.hasAttribute("data-rr-is-password") ? "password" : type ? (
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    toLowerCase(type)
  ) : null;
}
function extractFileExtension(path, baseURL) {
  let url;
  try {
    url = new URL(path, baseURL ?? window.location.href);
  } catch (err) {
    return null;
  }
  const regex = /\.([0-9a-z]+)(?:$)/i;
  const match = url.pathname.match(regex);
  return (match == null ? void 0 : match[1]) ?? null;
}
function extractOrigin(url) {
  let origin = "";
  if (url.indexOf("//") > -1) {
    origin = url.split("/").slice(0, 3).join("/");
  } else {
    origin = url.split("/")[0];
  }
  origin = origin.split("?")[0];
  return origin;
}
const URL_IN_CSS_REF = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm;
const URL_PROTOCOL_MATCH = /^(?:[a-z+]+:)?\/\//i;
const URL_WWW_MATCH = /^www\..*/i;
const DATA_URI = /^(data:)([^,]*),(.*)/i;
function absolutifyURLs(cssText, href) {
  return (cssText || "").replace(
    URL_IN_CSS_REF,
    (origin, quote1, path1, quote2, path2, path3) => {
      const filePath = path1 || path2 || path3;
      const maybeQuote = quote1 || quote2 || "";
      if (!filePath) {
        return origin;
      }
      if (URL_PROTOCOL_MATCH.test(filePath) || URL_WWW_MATCH.test(filePath)) {
        return `url(${maybeQuote}${filePath}${maybeQuote})`;
      }
      if (DATA_URI.test(filePath)) {
        return `url(${maybeQuote}${filePath}${maybeQuote})`;
      }
      if (filePath[0] === "/") {
        return `url(${maybeQuote}${extractOrigin(href) + filePath}${maybeQuote})`;
      }
      const stack = href.split("/");
      const parts = filePath.split("/");
      stack.pop();
      for (const part of parts) {
        if (part === ".") {
          continue;
        } else if (part === "..") {
          stack.pop();
        } else {
          stack.push(part);
        }
      }
      return `url(${maybeQuote}${stack.join("/")}${maybeQuote})`;
    }
  );
}
function normalizeCssString(cssText) {
  return cssText.replace(/(\/\*[^*]*\*\/)|[\s;]/g, "");
}
function splitCssText(cssText, style) {
  const childNodes2 = Array.from(style.childNodes);
  const splits = [];
  if (childNodes2.length > 1 && cssText && typeof cssText === "string") {
    const cssTextNorm = normalizeCssString(cssText);
    for (let i = 1; i < childNodes2.length; i++) {
      if (childNodes2[i].textContent && typeof childNodes2[i].textContent === "string") {
        const textContentNorm = normalizeCssString(childNodes2[i].textContent);
        for (let j = 3; j < textContentNorm.length; j++) {
          const bit = textContentNorm.substring(0, j);
          if (cssTextNorm.split(bit).length === 2) {
            const splitNorm = cssTextNorm.indexOf(bit);
            for (let k = splitNorm; k < cssText.length; k++) {
              if (normalizeCssString(cssText.substring(0, k)).length === splitNorm) {
                splits.push(cssText.substring(0, k));
                cssText = cssText.substring(k);
                break;
              }
            }
            break;
          }
        }
      }
    }
  }
  splits.push(cssText);
  return splits;
}
function markCssSplits(cssText, style) {
  return splitCssText(cssText, style).join("/* rr_split */");
}
let _id = 1;
const tagNameRegex = new RegExp("[^a-z0-9-_:]");
const IGNORED_NODE = -2;
function genId() {
  return _id++;
}
function getValidTagName(element) {
  if (element instanceof HTMLFormElement) {
    return "form";
  }
  const processedTagName = toLowerCase(element.tagName);
  if (tagNameRegex.test(processedTagName)) {
    return "div";
  }
  return processedTagName;
}
let canvasService;
let canvasCtx;
const SRCSET_NOT_SPACES = /^[^ \t\n\r\u000c]+/;
const SRCSET_COMMAS_OR_SPACES = /^[, \t\n\r\u000c]+/;
function getAbsoluteSrcsetString(doc, attributeValue) {
  if (attributeValue.trim() === "") {
    return attributeValue;
  }
  let pos = 0;
  function collectCharacters(regEx) {
    let chars;
    const match = regEx.exec(attributeValue.substring(pos));
    if (match) {
      chars = match[0];
      pos += chars.length;
      return chars;
    }
    return "";
  }
  const output = [];
  while (true) {
    collectCharacters(SRCSET_COMMAS_OR_SPACES);
    if (pos >= attributeValue.length) {
      break;
    }
    let url = collectCharacters(SRCSET_NOT_SPACES);
    if (url.slice(-1) === ",") {
      url = absoluteToDoc(doc, url.substring(0, url.length - 1));
      output.push(url);
    } else {
      let descriptorsStr = "";
      url = absoluteToDoc(doc, url);
      let inParens = false;
      while (true) {
        const c = attributeValue.charAt(pos);
        if (c === "") {
          output.push((url + descriptorsStr).trim());
          break;
        } else if (!inParens) {
          if (c === ",") {
            pos += 1;
            output.push((url + descriptorsStr).trim());
            break;
          } else if (c === "(") {
            inParens = true;
          }
        } else {
          if (c === ")") {
            inParens = false;
          }
        }
        descriptorsStr += c;
        pos += 1;
      }
    }
  }
  return output.join(", ");
}
const cachedDocument = /* @__PURE__ */ new WeakMap();
function absoluteToDoc(doc, attributeValue) {
  if (!attributeValue || attributeValue.trim() === "") {
    return attributeValue;
  }
  return getHref(doc, attributeValue);
}
function isSVGElement(el) {
  return Boolean(el.tagName === "svg" || el.ownerSVGElement);
}
function getHref(doc, customHref) {
  let a = cachedDocument.get(doc);
  if (!a) {
    a = doc.createElement("a");
    cachedDocument.set(doc, a);
  }
  if (!customHref) {
    customHref = "";
  } else if (customHref.startsWith("blob:") || customHref.startsWith("data:")) {
    return customHref;
  }
  a.setAttribute("href", customHref);
  return a.href;
}
function transformAttribute(doc, tagName, name, value) {
  if (!value) {
    return value;
  }
  if (name === "src" || name === "href" && !(tagName === "use" && value[0] === "#")) {
    return absoluteToDoc(doc, value);
  } else if (name === "xlink:href" && value[0] !== "#") {
    return absoluteToDoc(doc, value);
  } else if (name === "background" && (tagName === "table" || tagName === "td" || tagName === "th")) {
    return absoluteToDoc(doc, value);
  } else if (name === "srcset") {
    return getAbsoluteSrcsetString(doc, value);
  } else if (name === "style") {
    return absolutifyURLs(value, getHref(doc));
  } else if (tagName === "object" && name === "data") {
    return absoluteToDoc(doc, value);
  }
  return value;
}
function ignoreAttribute(tagName, name, _value) {
  return (tagName === "video" || tagName === "audio") && name === "autoplay";
}
function _isBlockedElement(element, blockClass, blockSelector) {
  try {
    if (typeof blockClass === "string") {
      if (element.classList.contains(blockClass)) {
        return true;
      }
    } else {
      for (let eIndex = element.classList.length; eIndex--; ) {
        const className = element.classList[eIndex];
        if (blockClass.test(className)) {
          return true;
        }
      }
    }
    if (blockSelector) {
      return element.matches(blockSelector);
    }
  } catch (e) {
  }
  return false;
}
function classMatchesRegex(node2, regex, checkAncestors) {
  if (!node2) return false;
  if (node2.nodeType !== node2.ELEMENT_NODE) {
    if (!checkAncestors) return false;
    return classMatchesRegex(index.parentNode(node2), regex, checkAncestors);
  }
  for (let eIndex = node2.classList.length; eIndex--; ) {
    const className = node2.classList[eIndex];
    if (regex.test(className)) {
      return true;
    }
  }
  if (!checkAncestors) return false;
  return classMatchesRegex(index.parentNode(node2), regex, checkAncestors);
}
function needMaskingText(node2, maskTextClass, maskTextSelector, checkAncestors) {
  let el;
  if (isElement(node2)) {
    el = node2;
    if (!index.childNodes(el).length) {
      return false;
    }
  } else if (index.parentElement(node2) === null) {
    return false;
  } else {
    el = index.parentElement(node2);
  }
  try {
    if (typeof maskTextClass === "string") {
      if (checkAncestors) {
        if (el.closest(`.${maskTextClass}`)) return true;
      } else {
        if (el.classList.contains(maskTextClass)) return true;
      }
    } else {
      if (classMatchesRegex(el, maskTextClass, checkAncestors)) return true;
    }
    if (maskTextSelector) {
      if (checkAncestors) {
        if (el.closest(maskTextSelector)) return true;
      } else {
        if (el.matches(maskTextSelector)) return true;
      }
    }
  } catch (e) {
  }
  return false;
}
function onceIframeLoaded(iframeEl, listener, iframeLoadTimeout) {
  const win = iframeEl.contentWindow;
  if (!win) {
    return;
  }
  let fired = false;
  let readyState;
  try {
    readyState = win.document.readyState;
  } catch (error) {
    return;
  }
  if (readyState !== "complete") {
    const timer = setTimeout(() => {
      if (!fired) {
        listener();
        fired = true;
      }
    }, iframeLoadTimeout);
    iframeEl.addEventListener("load", () => {
      clearTimeout(timer);
      fired = true;
      listener();
    });
    return;
  }
  const blankUrl = "about:blank";
  if (win.location.href !== blankUrl || iframeEl.src === blankUrl || iframeEl.src === "") {
    setTimeout(listener, 0);
    return iframeEl.addEventListener("load", listener);
  }
  iframeEl.addEventListener("load", listener);
}
function onceStylesheetLoaded(link, listener, styleSheetLoadTimeout) {
  let fired = false;
  let styleSheetLoaded;
  try {
    styleSheetLoaded = link.sheet;
  } catch (error) {
    return;
  }
  if (styleSheetLoaded) return;
  const timer = setTimeout(() => {
    if (!fired) {
      listener();
      fired = true;
    }
  }, styleSheetLoadTimeout);
  link.addEventListener("load", () => {
    clearTimeout(timer);
    fired = true;
    listener();
  });
}
function serializeNode(n, options) {
  const {
    doc,
    mirror,
    blockClass,
    blockSelector,
    needsMask,
    inlineStylesheet,
    maskInputOptions = {},
    maskTextFn,
    maskInputFn,
    dataURLOptions = {},
    inlineImages,
    recordCanvas,
    keepIframeSrcFn,
    newlyAddedElement = false,
    cssCaptured = false
  } = options;
  const rootId = getRootId(doc, mirror);
  switch (n.nodeType) {
    case n.DOCUMENT_NODE:
      if (n.compatMode !== "CSS1Compat") {
        return {
          type: NodeType.Document,
          childNodes: [],
          compatMode: n.compatMode
          // probably "BackCompat"
        };
      } else {
        return {
          type: NodeType.Document,
          childNodes: []
        };
      }
    case n.DOCUMENT_TYPE_NODE:
      return {
        type: NodeType.DocumentType,
        name: n.name,
        publicId: n.publicId,
        systemId: n.systemId,
        rootId
      };
    case n.ELEMENT_NODE:
      return serializeElementNode(n, {
        doc,
        blockClass,
        blockSelector,
        inlineStylesheet,
        maskInputOptions,
        maskInputFn,
        dataURLOptions,
        inlineImages,
        recordCanvas,
        keepIframeSrcFn,
        newlyAddedElement,
        rootId
      });
    case n.TEXT_NODE:
      return serializeTextNode(n, {
        doc,
        needsMask,
        maskTextFn,
        rootId,
        cssCaptured
      });
    case n.CDATA_SECTION_NODE:
      return {
        type: NodeType.CDATA,
        textContent: "",
        rootId
      };
    case n.COMMENT_NODE:
      return {
        type: NodeType.Comment,
        textContent: index.textContent(n) || "",
        rootId
      };
    default:
      return false;
  }
}
function getRootId(doc, mirror) {
  if (!mirror.hasNode(doc)) return void 0;
  const docId = mirror.getId(doc);
  return docId === 1 ? void 0 : docId;
}
function serializeTextNode(n, options) {
  const { needsMask, maskTextFn, rootId, cssCaptured } = options;
  const parent = index.parentNode(n);
  const parentTagName = parent && parent.tagName;
  let textContent2 = "";
  const isStyle = parentTagName === "STYLE" ? true : void 0;
  const isScript = parentTagName === "SCRIPT" ? true : void 0;
  if (isScript) {
    textContent2 = "SCRIPT_PLACEHOLDER";
  } else if (!cssCaptured) {
    textContent2 = index.textContent(n);
    if (isStyle && textContent2) {
      textContent2 = absolutifyURLs(textContent2, getHref(options.doc));
    }
  }
  if (!isStyle && !isScript && textContent2 && needsMask) {
    textContent2 = maskTextFn ? maskTextFn(textContent2, index.parentElement(n)) : textContent2.replace(/[\S]/g, "*");
  }
  return {
    type: NodeType.Text,
    textContent: textContent2 || "",
    rootId
  };
}
function serializeElementNode(n, options) {
  const {
    doc,
    blockClass,
    blockSelector,
    inlineStylesheet,
    maskInputOptions = {},
    maskInputFn,
    dataURLOptions = {},
    inlineImages,
    recordCanvas,
    keepIframeSrcFn,
    newlyAddedElement = false,
    rootId
  } = options;
  const needBlock = _isBlockedElement(n, blockClass, blockSelector);
  const tagName = getValidTagName(n);
  let attributes = {};
  const len = n.attributes.length;
  for (let i = 0; i < len; i++) {
    const attr = n.attributes[i];
    if (!ignoreAttribute(tagName, attr.name, attr.value)) {
      attributes[attr.name] = transformAttribute(
        doc,
        tagName,
        toLowerCase(attr.name),
        attr.value
      );
    }
  }
  if (tagName === "link" && inlineStylesheet) {
    const stylesheet = Array.from(doc.styleSheets).find((s) => {
      return s.href === n.href;
    });
    let cssText = null;
    if (stylesheet) {
      cssText = stringifyStylesheet(stylesheet);
    }
    if (cssText) {
      delete attributes.rel;
      delete attributes.href;
      attributes._cssText = cssText;
    }
  }
  if (tagName === "style" && n.sheet) {
    let cssText = stringifyStylesheet(
      n.sheet
    );
    if (cssText) {
      if (n.childNodes.length > 1) {
        cssText = markCssSplits(cssText, n);
      }
      attributes._cssText = cssText;
    }
  }
  if (tagName === "input" || tagName === "textarea" || tagName === "select") {
    const value = n.value;
    const checked = n.checked;
    if (attributes.type !== "radio" && attributes.type !== "checkbox" && attributes.type !== "submit" && attributes.type !== "button" && value) {
      attributes.value = maskInputValue({
        element: n,
        type: getInputType(n),
        tagName,
        value,
        maskInputOptions,
        maskInputFn
      });
    } else if (checked) {
      attributes.checked = checked;
    }
  }
  if (tagName === "option") {
    if (n.selected && !maskInputOptions["select"]) {
      attributes.selected = true;
    } else {
      delete attributes.selected;
    }
  }
  if (tagName === "dialog" && n.open) {
    attributes.rr_open_mode = n.matches("dialog:modal") ? "modal" : "non-modal";
  }
  if (tagName === "canvas" && recordCanvas) {
    if (n.__context === "2d") {
      if (!is2DCanvasBlank(n)) {
        attributes.rr_dataURL = n.toDataURL(
          dataURLOptions.type,
          dataURLOptions.quality
        );
      }
    } else if (!("__context" in n)) {
      const canvasDataURL = n.toDataURL(
        dataURLOptions.type,
        dataURLOptions.quality
      );
      const blankCanvas = doc.createElement("canvas");
      blankCanvas.width = n.width;
      blankCanvas.height = n.height;
      const blankCanvasDataURL = blankCanvas.toDataURL(
        dataURLOptions.type,
        dataURLOptions.quality
      );
      if (canvasDataURL !== blankCanvasDataURL) {
        attributes.rr_dataURL = canvasDataURL;
      }
    }
  }
  if (tagName === "img" && inlineImages) {
    if (!canvasService) {
      canvasService = doc.createElement("canvas");
      canvasCtx = canvasService.getContext("2d");
    }
    const image = n;
    const imageSrc = image.currentSrc || image.getAttribute("src") || "<unknown-src>";
    const priorCrossOrigin = image.crossOrigin;
    const recordInlineImage = () => {
      image.removeEventListener("load", recordInlineImage);
      try {
        canvasService.width = image.naturalWidth;
        canvasService.height = image.naturalHeight;
        canvasCtx.drawImage(image, 0, 0);
        attributes.rr_dataURL = canvasService.toDataURL(
          dataURLOptions.type,
          dataURLOptions.quality
        );
      } catch (err) {
        if (image.crossOrigin !== "anonymous") {
          image.crossOrigin = "anonymous";
          if (image.complete && image.naturalWidth !== 0)
            recordInlineImage();
          else image.addEventListener("load", recordInlineImage);
          return;
        } else {
          console.warn(
            `Cannot inline img src=${imageSrc}! Error: ${err}`
          );
        }
      }
      if (image.crossOrigin === "anonymous") {
        priorCrossOrigin ? attributes.crossOrigin = priorCrossOrigin : image.removeAttribute("crossorigin");
      }
    };
    if (image.complete && image.naturalWidth !== 0) recordInlineImage();
    else image.addEventListener("load", recordInlineImage);
  }
  if (tagName === "audio" || tagName === "video") {
    const mediaAttributes = attributes;
    mediaAttributes.rr_mediaState = n.paused ? "paused" : "played";
    mediaAttributes.rr_mediaCurrentTime = n.currentTime;
    mediaAttributes.rr_mediaPlaybackRate = n.playbackRate;
    mediaAttributes.rr_mediaMuted = n.muted;
    mediaAttributes.rr_mediaLoop = n.loop;
    mediaAttributes.rr_mediaVolume = n.volume;
  }
  if (!newlyAddedElement) {
    if (n.scrollLeft) {
      attributes.rr_scrollLeft = n.scrollLeft;
    }
    if (n.scrollTop) {
      attributes.rr_scrollTop = n.scrollTop;
    }
  }
  if (needBlock) {
    const { width, height } = n.getBoundingClientRect();
    attributes = {
      class: attributes.class,
      rr_width: `${width}px`,
      rr_height: `${height}px`
    };
  }
  if (tagName === "iframe" && !keepIframeSrcFn(attributes.src)) {
    if (!n.contentDocument) {
      attributes.rr_src = attributes.src;
    }
    delete attributes.src;
  }
  let isCustomElement;
  try {
    if (customElements.get(tagName)) isCustomElement = true;
  } catch (e) {
  }
  return {
    type: NodeType.Element,
    tagName,
    attributes,
    childNodes: [],
    isSVG: isSVGElement(n) || void 0,
    needBlock,
    rootId,
    isCustom: isCustomElement
  };
}
function lowerIfExists(maybeAttr) {
  if (maybeAttr === void 0 || maybeAttr === null) {
    return "";
  } else {
    return maybeAttr.toLowerCase();
  }
}
function slimDOMExcluded(sn, slimDOMOptions) {
  if (slimDOMOptions.comment && sn.type === NodeType.Comment) {
    return true;
  } else if (sn.type === NodeType.Element) {
    if (slimDOMOptions.script && // script tag
    (sn.tagName === "script" || // (module)preload link
    sn.tagName === "link" && (sn.attributes.rel === "preload" || sn.attributes.rel === "modulepreload") && sn.attributes.as === "script" || // prefetch link
    sn.tagName === "link" && sn.attributes.rel === "prefetch" && typeof sn.attributes.href === "string" && extractFileExtension(sn.attributes.href) === "js")) {
      return true;
    } else if (slimDOMOptions.headFavicon && (sn.tagName === "link" && sn.attributes.rel === "shortcut icon" || sn.tagName === "meta" && (lowerIfExists(sn.attributes.name).match(
      /^msapplication-tile(image|color)$/
    ) || lowerIfExists(sn.attributes.name) === "application-name" || lowerIfExists(sn.attributes.rel) === "icon" || lowerIfExists(sn.attributes.rel) === "apple-touch-icon" || lowerIfExists(sn.attributes.rel) === "shortcut icon"))) {
      return true;
    } else if (sn.tagName === "meta") {
      if (slimDOMOptions.headMetaDescKeywords && lowerIfExists(sn.attributes.name).match(/^description|keywords$/)) {
        return true;
      } else if (slimDOMOptions.headMetaSocial && (lowerIfExists(sn.attributes.property).match(/^(og|twitter|fb):/) || // og = opengraph (facebook)
      lowerIfExists(sn.attributes.name).match(/^(og|twitter):/) || lowerIfExists(sn.attributes.name) === "pinterest")) {
        return true;
      } else if (slimDOMOptions.headMetaRobots && (lowerIfExists(sn.attributes.name) === "robots" || lowerIfExists(sn.attributes.name) === "googlebot" || lowerIfExists(sn.attributes.name) === "bingbot")) {
        return true;
      } else if (slimDOMOptions.headMetaHttpEquiv && sn.attributes["http-equiv"] !== void 0) {
        return true;
      } else if (slimDOMOptions.headMetaAuthorship && (lowerIfExists(sn.attributes.name) === "author" || lowerIfExists(sn.attributes.name) === "generator" || lowerIfExists(sn.attributes.name) === "framework" || lowerIfExists(sn.attributes.name) === "publisher" || lowerIfExists(sn.attributes.name) === "progid" || lowerIfExists(sn.attributes.property).match(/^article:/) || lowerIfExists(sn.attributes.property).match(/^product:/))) {
        return true;
      } else if (slimDOMOptions.headMetaVerification && (lowerIfExists(sn.attributes.name) === "google-site-verification" || lowerIfExists(sn.attributes.name) === "yandex-verification" || lowerIfExists(sn.attributes.name) === "csrf-token" || lowerIfExists(sn.attributes.name) === "p:domain_verify" || lowerIfExists(sn.attributes.name) === "verify-v1" || lowerIfExists(sn.attributes.name) === "verification" || lowerIfExists(sn.attributes.name) === "shopify-checkout-api-token")) {
        return true;
      }
    }
  }
  return false;
}
function serializeNodeWithId(n, options) {
  const {
    doc,
    mirror,
    blockClass,
    blockSelector,
    maskTextClass,
    maskTextSelector,
    skipChild = false,
    inlineStylesheet = true,
    maskInputOptions = {},
    maskTextFn,
    maskInputFn,
    slimDOMOptions,
    dataURLOptions = {},
    inlineImages = false,
    recordCanvas = false,
    onSerialize,
    onIframeLoad,
    iframeLoadTimeout = 5e3,
    onStylesheetLoad,
    stylesheetLoadTimeout = 5e3,
    keepIframeSrcFn = () => false,
    newlyAddedElement = false,
    cssCaptured = false
  } = options;
  let { needsMask } = options;
  let { preserveWhiteSpace = true } = options;
  if (!needsMask) {
    const checkAncestors = needsMask === void 0;
    needsMask = needMaskingText(
      n,
      maskTextClass,
      maskTextSelector,
      checkAncestors
    );
  }
  const _serializedNode = serializeNode(n, {
    doc,
    mirror,
    blockClass,
    blockSelector,
    needsMask,
    inlineStylesheet,
    maskInputOptions,
    maskTextFn,
    maskInputFn,
    dataURLOptions,
    inlineImages,
    recordCanvas,
    keepIframeSrcFn,
    newlyAddedElement,
    cssCaptured
  });
  if (!_serializedNode) {
    console.warn(n, "not serialized");
    return null;
  }
  let id;
  if (mirror.hasNode(n)) {
    id = mirror.getId(n);
  } else if (slimDOMExcluded(_serializedNode, slimDOMOptions) || !preserveWhiteSpace && _serializedNode.type === NodeType.Text && !_serializedNode.textContent.replace(/^\s+|\s+$/gm, "").length) {
    id = IGNORED_NODE;
  } else {
    id = genId();
  }
  const serializedNode = Object.assign(_serializedNode, { id });
  mirror.add(n, serializedNode);
  if (id === IGNORED_NODE) {
    return null;
  }
  if (onSerialize) {
    onSerialize(n);
  }
  let recordChild = !skipChild;
  if (serializedNode.type === NodeType.Element) {
    recordChild = recordChild && !serializedNode.needBlock;
    delete serializedNode.needBlock;
    const shadowRootEl = index.shadowRoot(n);
    if (shadowRootEl && isNativeShadowDom(shadowRootEl)) {
      serializedNode.isShadowHost = true;
      if (shadowRootEl.adoptedStyleSheets.length > 0) {
        serializedNode.chromaticAdoptedStylesheets = shadowRootEl.adoptedStyleSheets.map(
          (stylesheet) => stringifyStylesheet(stylesheet)
        );
      }
    }
  }
  if ((serializedNode.type === NodeType.Document || serializedNode.type === NodeType.Element) && recordChild) {
    if (slimDOMOptions.headWhitespace && serializedNode.type === NodeType.Element && serializedNode.tagName === "head") {
      preserveWhiteSpace = false;
    }
    const bypassOptions = {
      doc,
      mirror,
      blockClass,
      blockSelector,
      needsMask,
      maskTextClass,
      maskTextSelector,
      skipChild,
      inlineStylesheet,
      maskInputOptions,
      maskTextFn,
      maskInputFn,
      slimDOMOptions,
      dataURLOptions,
      inlineImages,
      recordCanvas,
      preserveWhiteSpace,
      onSerialize,
      onIframeLoad,
      iframeLoadTimeout,
      onStylesheetLoad,
      stylesheetLoadTimeout,
      keepIframeSrcFn,
      cssCaptured: false
    };
    if (serializedNode.type === NodeType.Element && serializedNode.tagName === "textarea" && serializedNode.attributes.value !== void 0) ;
    else {
      if (serializedNode.type === NodeType.Element && serializedNode.attributes._cssText !== void 0 && typeof serializedNode.attributes._cssText === "string") {
        bypassOptions.cssCaptured = true;
      }
      for (const childN of Array.from(index.childNodes(n))) {
        const serializedChildNode = serializeNodeWithId(childN, bypassOptions);
        if (serializedChildNode) {
          serializedNode.childNodes.push(serializedChildNode);
        }
      }
    }
    let shadowRootEl = null;
    if (isElement(n) && (shadowRootEl = index.shadowRoot(n))) {
      for (const childN of Array.from(index.childNodes(shadowRootEl))) {
        const serializedChildNode = serializeNodeWithId(childN, bypassOptions);
        if (serializedChildNode) {
          isNativeShadowDom(shadowRootEl) && (serializedChildNode.isShadow = true);
          serializedNode.childNodes.push(serializedChildNode);
        }
      }
    }
  }
  const parent = index.parentNode(n);
  if (parent && isShadowRoot(parent) && isNativeShadowDom(parent)) {
    serializedNode.isShadow = true;
  }
  if (serializedNode.type === NodeType.Element && serializedNode.tagName === "iframe") {
    onceIframeLoaded(
      n,
      () => {
        const iframeDoc = n.contentDocument;
        if (iframeDoc && onIframeLoad) {
          const serializedIframeNode = serializeNodeWithId(iframeDoc, {
            doc: iframeDoc,
            mirror,
            blockClass,
            blockSelector,
            needsMask,
            maskTextClass,
            maskTextSelector,
            skipChild: false,
            inlineStylesheet,
            maskInputOptions,
            maskTextFn,
            maskInputFn,
            slimDOMOptions,
            dataURLOptions,
            inlineImages,
            recordCanvas,
            preserveWhiteSpace,
            onSerialize,
            onIframeLoad,
            iframeLoadTimeout,
            onStylesheetLoad,
            stylesheetLoadTimeout,
            keepIframeSrcFn
          });
          if (serializedIframeNode) {
            onIframeLoad(
              n,
              serializedIframeNode
            );
          }
        }
      },
      iframeLoadTimeout
    );
  }
  if (serializedNode.type === NodeType.Element && serializedNode.tagName === "link" && typeof serializedNode.attributes.rel === "string" && (serializedNode.attributes.rel === "stylesheet" || serializedNode.attributes.rel === "preload" && typeof serializedNode.attributes.href === "string" && extractFileExtension(serializedNode.attributes.href) === "css")) {
    onceStylesheetLoaded(
      n,
      () => {
        if (onStylesheetLoad) {
          const serializedLinkNode = serializeNodeWithId(n, {
            doc,
            mirror,
            blockClass,
            blockSelector,
            needsMask,
            maskTextClass,
            maskTextSelector,
            skipChild: false,
            inlineStylesheet,
            maskInputOptions,
            maskTextFn,
            maskInputFn,
            slimDOMOptions,
            dataURLOptions,
            inlineImages,
            recordCanvas,
            preserveWhiteSpace,
            onSerialize,
            onIframeLoad,
            iframeLoadTimeout,
            onStylesheetLoad,
            stylesheetLoadTimeout,
            keepIframeSrcFn
          });
          if (serializedLinkNode) {
            onStylesheetLoad(
              n,
              serializedLinkNode
            );
          }
        }
      },
      stylesheetLoadTimeout
    );
  }
  return serializedNode;
}
function snapshot(n, options) {
  const {
    mirror = new Mirror(),
    blockClass = "rr-block",
    blockSelector = null,
    maskTextClass = "rr-mask",
    maskTextSelector = null,
    inlineStylesheet = true,
    inlineImages = false,
    recordCanvas = false,
    maskAllInputs = false,
    maskTextFn,
    maskInputFn,
    slimDOM = false,
    dataURLOptions,
    preserveWhiteSpace,
    onSerialize,
    onIframeLoad,
    iframeLoadTimeout,
    onStylesheetLoad,
    stylesheetLoadTimeout,
    keepIframeSrcFn = () => false
  } = options || {};
  const maskInputOptions = maskAllInputs === true ? {
    color: true,
    date: true,
    "datetime-local": true,
    email: true,
    month: true,
    number: true,
    range: true,
    search: true,
    tel: true,
    text: true,
    time: true,
    url: true,
    week: true,
    textarea: true,
    select: true,
    password: true
  } : maskAllInputs === false ? {
    password: true
  } : maskAllInputs;
  const slimDOMOptions = slimDOM === true || slimDOM === "all" ? (
    // if true: set of sensible options that should not throw away any information
    {
      script: true,
      comment: true,
      headFavicon: true,
      headWhitespace: true,
      headMetaDescKeywords: slimDOM === "all",
      // destructive
      headMetaSocial: true,
      headMetaRobots: true,
      headMetaHttpEquiv: true,
      headMetaAuthorship: true,
      headMetaVerification: true
    }
  ) : slimDOM === false ? {} : slimDOM;
  return serializeNodeWithId(n, {
    doc: n,
    mirror,
    blockClass,
    blockSelector,
    maskTextClass,
    maskTextSelector,
    skipChild: false,
    inlineStylesheet,
    maskInputOptions,
    maskTextFn,
    maskInputFn,
    slimDOMOptions,
    dataURLOptions,
    inlineImages,
    recordCanvas,
    preserveWhiteSpace,
    onSerialize,
    onIframeLoad,
    iframeLoadTimeout,
    onStylesheetLoad,
    stylesheetLoadTimeout,
    keepIframeSrcFn,
    newlyAddedElement: false
  });
}
function visitSnapshot(node2, onVisit) {
  function walk(current) {
    onVisit(current);
    if (current.type === NodeType.Document || current.type === NodeType.Element) {
      current.childNodes.forEach(walk);
    }
  }
  walk(node2);
}
function cleanupSnapshot() {
  _id = 1;
}
const MEDIA_SELECTOR = /(max|min)-device-(width|height)/;
const MEDIA_SELECTOR_GLOBAL = new RegExp(MEDIA_SELECTOR.source, "g");
const mediaSelectorPlugin = {
  postcssPlugin: "postcss-custom-selectors",
  prepare() {
    return {
      postcssPlugin: "postcss-custom-selectors",
      AtRule: function(atrule) {
        if (atrule.params.match(MEDIA_SELECTOR_GLOBAL)) {
          atrule.params = atrule.params.replace(MEDIA_SELECTOR_GLOBAL, "$1-$2");
        }
      }
    };
  }
};
const pseudoClassPlugin = {
  postcssPlugin: "postcss-hover-classes",
  prepare: function() {
    const fixed = [];
    return {
      Rule: function(rule2) {
        if (fixed.indexOf(rule2) !== -1) {
          return;
        }
        fixed.push(rule2);
        rule2.selectors.forEach(function(selector) {
          if (!selector.includes(":")) {
            return;
          }
          const selectorParts = selector.replace(/\n/g, " ").split(" ");
          const pseudoedSelectorParts = [];
          selectorParts.forEach(function(selectorPart) {
            const pseudos = selectorPart.match(/::?([^:]+)/g);
            if (!pseudos) {
              pseudoedSelectorParts.push(selectorPart);
              return;
            }
            const baseSelector = selectorPart.substr(
              0,
              selectorPart.length - pseudos.join("").length
            );
            const classPseudos = pseudos.map(function(pseudo) {
              const pseudoToCheck = pseudo.replace(/\(.*/g, "");
              if (pseudoToCheck !== ":hover") {
                return pseudo;
              }
              if (pseudo.match(/^::/)) {
                return pseudo;
              }
              pseudo = pseudo.substr(1);
              pseudo = pseudo.replace(/\(/g, "\\(");
              pseudo = pseudo.replace(/\)/g, "\\)");
              return ".\\:" + pseudo;
            });
            pseudoedSelectorParts.push(baseSelector + classPseudos.join(""));
          });
          addSelector(pseudoedSelectorParts.join(" "));
          function addSelector(newSelector) {
            if (newSelector && newSelector !== selector) {
              rule2.selector += ",\n" + newSelector;
            }
          }
        });
      }
    };
  }
};
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var f = n.default;
  if (typeof f == "function") {
    var a = function a2() {
      if (this instanceof a2) {
        return Reflect.construct(f, arguments, this.constructor);
      }
      return f.apply(this, arguments);
    };
    a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
var picocolors_browser = { exports: {} };
var x = String;
var create = function() {
  return { isColorSupported: false, reset: x, bold: x, dim: x, italic: x, underline: x, inverse: x, hidden: x, strikethrough: x, black: x, red: x, green: x, yellow: x, blue: x, magenta: x, cyan: x, white: x, gray: x, bgBlack: x, bgRed: x, bgGreen: x, bgYellow: x, bgBlue: x, bgMagenta: x, bgCyan: x, bgWhite: x };
};
picocolors_browser.exports = create();
picocolors_browser.exports.createColors = create;
var picocolors_browserExports = picocolors_browser.exports;
const __viteBrowserExternal = {};
const __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" }));
const require$$2 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
let pico = picocolors_browserExports;
let terminalHighlight$1 = require$$2;
let CssSyntaxError$3 = class CssSyntaxError extends Error {
  constructor(message, line, column, source, file, plugin2) {
    super(message);
    this.name = "CssSyntaxError";
    this.reason = message;
    if (file) {
      this.file = file;
    }
    if (source) {
      this.source = source;
    }
    if (plugin2) {
      this.plugin = plugin2;
    }
    if (typeof line !== "undefined" && typeof column !== "undefined") {
      if (typeof line === "number") {
        this.line = line;
        this.column = column;
      } else {
        this.line = line.line;
        this.column = line.column;
        this.endLine = column.line;
        this.endColumn = column.column;
      }
    }
    this.setMessage();
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CssSyntaxError);
    }
  }
  setMessage() {
    this.message = this.plugin ? this.plugin + ": " : "";
    this.message += this.file ? this.file : "<css input>";
    if (typeof this.line !== "undefined") {
      this.message += ":" + this.line + ":" + this.column;
    }
    this.message += ": " + this.reason;
  }
  showSourceCode(color) {
    if (!this.source) return "";
    let css = this.source;
    if (color == null) color = pico.isColorSupported;
    if (terminalHighlight$1) {
      if (color) css = terminalHighlight$1(css);
    }
    let lines = css.split(/\r?\n/);
    let start = Math.max(this.line - 3, 0);
    let end = Math.min(this.line + 2, lines.length);
    let maxWidth = String(end).length;
    let mark, aside;
    if (color) {
      let { bold, gray, red } = pico.createColors(true);
      mark = (text) => bold(red(text));
      aside = (text) => gray(text);
    } else {
      mark = aside = (str) => str;
    }
    return lines.slice(start, end).map((line, index2) => {
      let number = start + 1 + index2;
      let gutter = " " + (" " + number).slice(-maxWidth) + " | ";
      if (number === this.line) {
        let spacing = aside(gutter.replace(/\d/g, " ")) + line.slice(0, this.column - 1).replace(/[^\t]/g, " ");
        return mark(">") + aside(gutter) + line + "\n " + spacing + mark("^");
      }
      return " " + aside(gutter) + line;
    }).join("\n");
  }
  toString() {
    let code = this.showSourceCode();
    if (code) {
      code = "\n\n" + code + "\n";
    }
    return this.name + ": " + this.message + code;
  }
};
var cssSyntaxError = CssSyntaxError$3;
CssSyntaxError$3.default = CssSyntaxError$3;
var symbols = {};
symbols.isClean = Symbol("isClean");
symbols.my = Symbol("my");
const DEFAULT_RAW = {
  after: "\n",
  beforeClose: "\n",
  beforeComment: "\n",
  beforeDecl: "\n",
  beforeOpen: " ",
  beforeRule: "\n",
  colon: ": ",
  commentLeft: " ",
  commentRight: " ",
  emptyBody: "",
  indent: "    ",
  semicolon: false
};
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}
let Stringifier$2 = class Stringifier {
  constructor(builder) {
    this.builder = builder;
  }
  atrule(node2, semicolon) {
    let name = "@" + node2.name;
    let params = node2.params ? this.rawValue(node2, "params") : "";
    if (typeof node2.raws.afterName !== "undefined") {
      name += node2.raws.afterName;
    } else if (params) {
      name += " ";
    }
    if (node2.nodes) {
      this.block(node2, name + params);
    } else {
      let end = (node2.raws.between || "") + (semicolon ? ";" : "");
      this.builder(name + params + end, node2);
    }
  }
  beforeAfter(node2, detect) {
    let value;
    if (node2.type === "decl") {
      value = this.raw(node2, null, "beforeDecl");
    } else if (node2.type === "comment") {
      value = this.raw(node2, null, "beforeComment");
    } else if (detect === "before") {
      value = this.raw(node2, null, "beforeRule");
    } else {
      value = this.raw(node2, null, "beforeClose");
    }
    let buf = node2.parent;
    let depth = 0;
    while (buf && buf.type !== "root") {
      depth += 1;
      buf = buf.parent;
    }
    if (value.includes("\n")) {
      let indent = this.raw(node2, null, "indent");
      if (indent.length) {
        for (let step = 0; step < depth; step++) value += indent;
      }
    }
    return value;
  }
  block(node2, start) {
    let between = this.raw(node2, "between", "beforeOpen");
    this.builder(start + between + "{", node2, "start");
    let after;
    if (node2.nodes && node2.nodes.length) {
      this.body(node2);
      after = this.raw(node2, "after");
    } else {
      after = this.raw(node2, "after", "emptyBody");
    }
    if (after) this.builder(after);
    this.builder("}", node2, "end");
  }
  body(node2) {
    let last = node2.nodes.length - 1;
    while (last > 0) {
      if (node2.nodes[last].type !== "comment") break;
      last -= 1;
    }
    let semicolon = this.raw(node2, "semicolon");
    for (let i = 0; i < node2.nodes.length; i++) {
      let child = node2.nodes[i];
      let before = this.raw(child, "before");
      if (before) this.builder(before);
      this.stringify(child, last !== i || semicolon);
    }
  }
  comment(node2) {
    let left = this.raw(node2, "left", "commentLeft");
    let right = this.raw(node2, "right", "commentRight");
    this.builder("/*" + left + node2.text + right + "*/", node2);
  }
  decl(node2, semicolon) {
    let between = this.raw(node2, "between", "colon");
    let string = node2.prop + between + this.rawValue(node2, "value");
    if (node2.important) {
      string += node2.raws.important || " !important";
    }
    if (semicolon) string += ";";
    this.builder(string, node2);
  }
  document(node2) {
    this.body(node2);
  }
  raw(node2, own, detect) {
    let value;
    if (!detect) detect = own;
    if (own) {
      value = node2.raws[own];
      if (typeof value !== "undefined") return value;
    }
    let parent = node2.parent;
    if (detect === "before") {
      if (!parent || parent.type === "root" && parent.first === node2) {
        return "";
      }
      if (parent && parent.type === "document") {
        return "";
      }
    }
    if (!parent) return DEFAULT_RAW[detect];
    let root2 = node2.root();
    if (!root2.rawCache) root2.rawCache = {};
    if (typeof root2.rawCache[detect] !== "undefined") {
      return root2.rawCache[detect];
    }
    if (detect === "before" || detect === "after") {
      return this.beforeAfter(node2, detect);
    } else {
      let method = "raw" + capitalize(detect);
      if (this[method]) {
        value = this[method](root2, node2);
      } else {
        root2.walk((i) => {
          value = i.raws[own];
          if (typeof value !== "undefined") return false;
        });
      }
    }
    if (typeof value === "undefined") value = DEFAULT_RAW[detect];
    root2.rawCache[detect] = value;
    return value;
  }
  rawBeforeClose(root2) {
    let value;
    root2.walk((i) => {
      if (i.nodes && i.nodes.length > 0) {
        if (typeof i.raws.after !== "undefined") {
          value = i.raws.after;
          if (value.includes("\n")) {
            value = value.replace(/[^\n]+$/, "");
          }
          return false;
        }
      }
    });
    if (value) value = value.replace(/\S/g, "");
    return value;
  }
  rawBeforeComment(root2, node2) {
    let value;
    root2.walkComments((i) => {
      if (typeof i.raws.before !== "undefined") {
        value = i.raws.before;
        if (value.includes("\n")) {
          value = value.replace(/[^\n]+$/, "");
        }
        return false;
      }
    });
    if (typeof value === "undefined") {
      value = this.raw(node2, null, "beforeDecl");
    } else if (value) {
      value = value.replace(/\S/g, "");
    }
    return value;
  }
  rawBeforeDecl(root2, node2) {
    let value;
    root2.walkDecls((i) => {
      if (typeof i.raws.before !== "undefined") {
        value = i.raws.before;
        if (value.includes("\n")) {
          value = value.replace(/[^\n]+$/, "");
        }
        return false;
      }
    });
    if (typeof value === "undefined") {
      value = this.raw(node2, null, "beforeRule");
    } else if (value) {
      value = value.replace(/\S/g, "");
    }
    return value;
  }
  rawBeforeOpen(root2) {
    let value;
    root2.walk((i) => {
      if (i.type !== "decl") {
        value = i.raws.between;
        if (typeof value !== "undefined") return false;
      }
    });
    return value;
  }
  rawBeforeRule(root2) {
    let value;
    root2.walk((i) => {
      if (i.nodes && (i.parent !== root2 || root2.first !== i)) {
        if (typeof i.raws.before !== "undefined") {
          value = i.raws.before;
          if (value.includes("\n")) {
            value = value.replace(/[^\n]+$/, "");
          }
          return false;
        }
      }
    });
    if (value) value = value.replace(/\S/g, "");
    return value;
  }
  rawColon(root2) {
    let value;
    root2.walkDecls((i) => {
      if (typeof i.raws.between !== "undefined") {
        value = i.raws.between.replace(/[^\s:]/g, "");
        return false;
      }
    });
    return value;
  }
  rawEmptyBody(root2) {
    let value;
    root2.walk((i) => {
      if (i.nodes && i.nodes.length === 0) {
        value = i.raws.after;
        if (typeof value !== "undefined") return false;
      }
    });
    return value;
  }
  rawIndent(root2) {
    if (root2.raws.indent) return root2.raws.indent;
    let value;
    root2.walk((i) => {
      let p = i.parent;
      if (p && p !== root2 && p.parent && p.parent === root2) {
        if (typeof i.raws.before !== "undefined") {
          let parts = i.raws.before.split("\n");
          value = parts[parts.length - 1];
          value = value.replace(/\S/g, "");
          return false;
        }
      }
    });
    return value;
  }
  rawSemicolon(root2) {
    let value;
    root2.walk((i) => {
      if (i.nodes && i.nodes.length && i.last.type === "decl") {
        value = i.raws.semicolon;
        if (typeof value !== "undefined") return false;
      }
    });
    return value;
  }
  rawValue(node2, prop) {
    let value = node2[prop];
    let raw = node2.raws[prop];
    if (raw && raw.value === value) {
      return raw.raw;
    }
    return value;
  }
  root(node2) {
    this.body(node2);
    if (node2.raws.after) this.builder(node2.raws.after);
  }
  rule(node2) {
    this.block(node2, this.rawValue(node2, "selector"));
    if (node2.raws.ownSemicolon) {
      this.builder(node2.raws.ownSemicolon, node2, "end");
    }
  }
  stringify(node2, semicolon) {
    if (!this[node2.type]) {
      throw new Error(
        "Unknown AST node type " + node2.type + ". Maybe you need to change PostCSS stringifier."
      );
    }
    this[node2.type](node2, semicolon);
  }
};
var stringifier = Stringifier$2;
Stringifier$2.default = Stringifier$2;
let Stringifier$1 = stringifier;
function stringify$4(node2, builder) {
  let str = new Stringifier$1(builder);
  str.stringify(node2);
}
var stringify_1 = stringify$4;
stringify$4.default = stringify$4;
let { isClean: isClean$2, my: my$2 } = symbols;
let CssSyntaxError$2 = cssSyntaxError;
let Stringifier2 = stringifier;
let stringify$3 = stringify_1;
function cloneNode(obj, parent) {
  let cloned = new obj.constructor();
  for (let i in obj) {
    if (!Object.prototype.hasOwnProperty.call(obj, i)) {
      continue;
    }
    if (i === "proxyCache") continue;
    let value = obj[i];
    let type = typeof value;
    if (i === "parent" && type === "object") {
      if (parent) cloned[i] = parent;
    } else if (i === "source") {
      cloned[i] = value;
    } else if (Array.isArray(value)) {
      cloned[i] = value.map((j) => cloneNode(j, cloned));
    } else {
      if (type === "object" && value !== null) value = cloneNode(value);
      cloned[i] = value;
    }
  }
  return cloned;
}
let Node$4 = class Node {
  constructor(defaults = {}) {
    this.raws = {};
    this[isClean$2] = false;
    this[my$2] = true;
    for (let name in defaults) {
      if (name === "nodes") {
        this.nodes = [];
        for (let node2 of defaults[name]) {
          if (typeof node2.clone === "function") {
            this.append(node2.clone());
          } else {
            this.append(node2);
          }
        }
      } else {
        this[name] = defaults[name];
      }
    }
  }
  addToError(error) {
    error.postcssNode = this;
    if (error.stack && this.source && /\n\s{4}at /.test(error.stack)) {
      let s = this.source;
      error.stack = error.stack.replace(
        /\n\s{4}at /,
        `$&${s.input.from}:${s.start.line}:${s.start.column}$&`
      );
    }
    return error;
  }
  after(add) {
    this.parent.insertAfter(this, add);
    return this;
  }
  assign(overrides = {}) {
    for (let name in overrides) {
      this[name] = overrides[name];
    }
    return this;
  }
  before(add) {
    this.parent.insertBefore(this, add);
    return this;
  }
  cleanRaws(keepBetween) {
    delete this.raws.before;
    delete this.raws.after;
    if (!keepBetween) delete this.raws.between;
  }
  clone(overrides = {}) {
    let cloned = cloneNode(this);
    for (let name in overrides) {
      cloned[name] = overrides[name];
    }
    return cloned;
  }
  cloneAfter(overrides = {}) {
    let cloned = this.clone(overrides);
    this.parent.insertAfter(this, cloned);
    return cloned;
  }
  cloneBefore(overrides = {}) {
    let cloned = this.clone(overrides);
    this.parent.insertBefore(this, cloned);
    return cloned;
  }
  error(message, opts = {}) {
    if (this.source) {
      let { end, start } = this.rangeBy(opts);
      return this.source.input.error(
        message,
        { column: start.column, line: start.line },
        { column: end.column, line: end.line },
        opts
      );
    }
    return new CssSyntaxError$2(message);
  }
  getProxyProcessor() {
    return {
      get(node2, prop) {
        if (prop === "proxyOf") {
          return node2;
        } else if (prop === "root") {
          return () => node2.root().toProxy();
        } else {
          return node2[prop];
        }
      },
      set(node2, prop, value) {
        if (node2[prop] === value) return true;
        node2[prop] = value;
        if (prop === "prop" || prop === "value" || prop === "name" || prop === "params" || prop === "important" || /* c8 ignore next */
        prop === "text") {
          node2.markDirty();
        }
        return true;
      }
    };
  }
  markDirty() {
    if (this[isClean$2]) {
      this[isClean$2] = false;
      let next = this;
      while (next = next.parent) {
        next[isClean$2] = false;
      }
    }
  }
  next() {
    if (!this.parent) return void 0;
    let index2 = this.parent.index(this);
    return this.parent.nodes[index2 + 1];
  }
  positionBy(opts, stringRepresentation) {
    let pos = this.source.start;
    if (opts.index) {
      pos = this.positionInside(opts.index, stringRepresentation);
    } else if (opts.word) {
      stringRepresentation = this.toString();
      let index2 = stringRepresentation.indexOf(opts.word);
      if (index2 !== -1) pos = this.positionInside(index2, stringRepresentation);
    }
    return pos;
  }
  positionInside(index2, stringRepresentation) {
    let string = stringRepresentation || this.toString();
    let column = this.source.start.column;
    let line = this.source.start.line;
    for (let i = 0; i < index2; i++) {
      if (string[i] === "\n") {
        column = 1;
        line += 1;
      } else {
        column += 1;
      }
    }
    return { column, line };
  }
  prev() {
    if (!this.parent) return void 0;
    let index2 = this.parent.index(this);
    return this.parent.nodes[index2 - 1];
  }
  rangeBy(opts) {
    let start = {
      column: this.source.start.column,
      line: this.source.start.line
    };
    let end = this.source.end ? {
      column: this.source.end.column + 1,
      line: this.source.end.line
    } : {
      column: start.column + 1,
      line: start.line
    };
    if (opts.word) {
      let stringRepresentation = this.toString();
      let index2 = stringRepresentation.indexOf(opts.word);
      if (index2 !== -1) {
        start = this.positionInside(index2, stringRepresentation);
        end = this.positionInside(index2 + opts.word.length, stringRepresentation);
      }
    } else {
      if (opts.start) {
        start = {
          column: opts.start.column,
          line: opts.start.line
        };
      } else if (opts.index) {
        start = this.positionInside(opts.index);
      }
      if (opts.end) {
        end = {
          column: opts.end.column,
          line: opts.end.line
        };
      } else if (typeof opts.endIndex === "number") {
        end = this.positionInside(opts.endIndex);
      } else if (opts.index) {
        end = this.positionInside(opts.index + 1);
      }
    }
    if (end.line < start.line || end.line === start.line && end.column <= start.column) {
      end = { column: start.column + 1, line: start.line };
    }
    return { end, start };
  }
  raw(prop, defaultType) {
    let str = new Stringifier2();
    return str.raw(this, prop, defaultType);
  }
  remove() {
    if (this.parent) {
      this.parent.removeChild(this);
    }
    this.parent = void 0;
    return this;
  }
  replaceWith(...nodes) {
    if (this.parent) {
      let bookmark = this;
      let foundSelf = false;
      for (let node2 of nodes) {
        if (node2 === this) {
          foundSelf = true;
        } else if (foundSelf) {
          this.parent.insertAfter(bookmark, node2);
          bookmark = node2;
        } else {
          this.parent.insertBefore(bookmark, node2);
        }
      }
      if (!foundSelf) {
        this.remove();
      }
    }
    return this;
  }
  root() {
    let result2 = this;
    while (result2.parent && result2.parent.type !== "document") {
      result2 = result2.parent;
    }
    return result2;
  }
  toJSON(_, inputs) {
    let fixed = {};
    let emitInputs = inputs == null;
    inputs = inputs || /* @__PURE__ */ new Map();
    let inputsNextIndex = 0;
    for (let name in this) {
      if (!Object.prototype.hasOwnProperty.call(this, name)) {
        continue;
      }
      if (name === "parent" || name === "proxyCache") continue;
      let value = this[name];
      if (Array.isArray(value)) {
        fixed[name] = value.map((i) => {
          if (typeof i === "object" && i.toJSON) {
            return i.toJSON(null, inputs);
          } else {
            return i;
          }
        });
      } else if (typeof value === "object" && value.toJSON) {
        fixed[name] = value.toJSON(null, inputs);
      } else if (name === "source") {
        let inputId = inputs.get(value.input);
        if (inputId == null) {
          inputId = inputsNextIndex;
          inputs.set(value.input, inputsNextIndex);
          inputsNextIndex++;
        }
        fixed[name] = {
          end: value.end,
          inputId,
          start: value.start
        };
      } else {
        fixed[name] = value;
      }
    }
    if (emitInputs) {
      fixed.inputs = [...inputs.keys()].map((input2) => input2.toJSON());
    }
    return fixed;
  }
  toProxy() {
    if (!this.proxyCache) {
      this.proxyCache = new Proxy(this, this.getProxyProcessor());
    }
    return this.proxyCache;
  }
  toString(stringifier2 = stringify$3) {
    if (stringifier2.stringify) stringifier2 = stringifier2.stringify;
    let result2 = "";
    stringifier2(this, (i) => {
      result2 += i;
    });
    return result2;
  }
  warn(result2, text, opts) {
    let data = { node: this };
    for (let i in opts) data[i] = opts[i];
    return result2.warn(text, data);
  }
  get proxyOf() {
    return this;
  }
};
var node = Node$4;
Node$4.default = Node$4;
let Node$3 = node;
let Declaration$4 = class Declaration extends Node$3 {
  constructor(defaults) {
    if (defaults && typeof defaults.value !== "undefined" && typeof defaults.value !== "string") {
      defaults = { ...defaults, value: String(defaults.value) };
    }
    super(defaults);
    this.type = "decl";
  }
  get variable() {
    return this.prop.startsWith("--") || this.prop[0] === "$";
  }
};
var declaration = Declaration$4;
Declaration$4.default = Declaration$4;
let urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let customAlphabet = (alphabet, defaultSize = 21) => {
  return (size = defaultSize) => {
    let id = "";
    let i = size;
    while (i--) {
      id += alphabet[Math.random() * alphabet.length | 0];
    }
    return id;
  };
};
let nanoid$1 = (size = 21) => {
  let id = "";
  let i = size;
  while (i--) {
    id += urlAlphabet[Math.random() * 64 | 0];
  }
  return id;
};
var nonSecure = { nanoid: nanoid$1, customAlphabet };
let { SourceMapConsumer: SourceMapConsumer$2, SourceMapGenerator: SourceMapGenerator$2 } = require$$2;
let { existsSync, readFileSync } = require$$2;
let { dirname: dirname$1, join } = require$$2;
function fromBase64(str) {
  if (Buffer) {
    return Buffer.from(str, "base64").toString();
  } else {
    return window.atob(str);
  }
}
let PreviousMap$2 = class PreviousMap {
  constructor(css, opts) {
    if (opts.map === false) return;
    this.loadAnnotation(css);
    this.inline = this.startWith(this.annotation, "data:");
    let prev = opts.map ? opts.map.prev : void 0;
    let text = this.loadMap(opts.from, prev);
    if (!this.mapFile && opts.from) {
      this.mapFile = opts.from;
    }
    if (this.mapFile) this.root = dirname$1(this.mapFile);
    if (text) this.text = text;
  }
  consumer() {
    if (!this.consumerCache) {
      this.consumerCache = new SourceMapConsumer$2(this.text);
    }
    return this.consumerCache;
  }
  decodeInline(text) {
    let baseCharsetUri = /^data:application\/json;charset=utf-?8;base64,/;
    let baseUri = /^data:application\/json;base64,/;
    let charsetUri = /^data:application\/json;charset=utf-?8,/;
    let uri = /^data:application\/json,/;
    if (charsetUri.test(text) || uri.test(text)) {
      return decodeURIComponent(text.substr(RegExp.lastMatch.length));
    }
    if (baseCharsetUri.test(text) || baseUri.test(text)) {
      return fromBase64(text.substr(RegExp.lastMatch.length));
    }
    let encoding = text.match(/data:application\/json;([^,]+),/)[1];
    throw new Error("Unsupported source map encoding " + encoding);
  }
  getAnnotationURL(sourceMapString) {
    return sourceMapString.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
  }
  isMap(map) {
    if (typeof map !== "object") return false;
    return typeof map.mappings === "string" || typeof map._mappings === "string" || Array.isArray(map.sections);
  }
  loadAnnotation(css) {
    let comments = css.match(/\/\*\s*# sourceMappingURL=/gm);
    if (!comments) return;
    let start = css.lastIndexOf(comments.pop());
    let end = css.indexOf("*/", start);
    if (start > -1 && end > -1) {
      this.annotation = this.getAnnotationURL(css.substring(start, end));
    }
  }
  loadFile(path) {
    this.root = dirname$1(path);
    if (existsSync(path)) {
      this.mapFile = path;
      return readFileSync(path, "utf-8").toString().trim();
    }
  }
  loadMap(file, prev) {
    if (prev === false) return false;
    if (prev) {
      if (typeof prev === "string") {
        return prev;
      } else if (typeof prev === "function") {
        let prevPath = prev(file);
        if (prevPath) {
          let map = this.loadFile(prevPath);
          if (!map) {
            throw new Error(
              "Unable to load previous source map: " + prevPath.toString()
            );
          }
          return map;
        }
      } else if (prev instanceof SourceMapConsumer$2) {
        return SourceMapGenerator$2.fromSourceMap(prev).toString();
      } else if (prev instanceof SourceMapGenerator$2) {
        return prev.toString();
      } else if (this.isMap(prev)) {
        return JSON.stringify(prev);
      } else {
        throw new Error(
          "Unsupported previous source map format: " + prev.toString()
        );
      }
    } else if (this.inline) {
      return this.decodeInline(this.annotation);
    } else if (this.annotation) {
      let map = this.annotation;
      if (file) map = join(dirname$1(file), map);
      return this.loadFile(map);
    }
  }
  startWith(string, start) {
    if (!string) return false;
    return string.substr(0, start.length) === start;
  }
  withContent() {
    return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
  }
};
var previousMap = PreviousMap$2;
PreviousMap$2.default = PreviousMap$2;
let { SourceMapConsumer: SourceMapConsumer$1, SourceMapGenerator: SourceMapGenerator$1 } = require$$2;
let { fileURLToPath, pathToFileURL: pathToFileURL$1 } = require$$2;
let { isAbsolute, resolve: resolve$1 } = require$$2;
let { nanoid } = nonSecure;
let terminalHighlight = require$$2;
let CssSyntaxError$1 = cssSyntaxError;
let PreviousMap$1 = previousMap;
let fromOffsetCache = Symbol("fromOffsetCache");
let sourceMapAvailable$1 = Boolean(SourceMapConsumer$1 && SourceMapGenerator$1);
let pathAvailable$1 = Boolean(resolve$1 && isAbsolute);
let Input$4 = class Input {
  constructor(css, opts = {}) {
    if (css === null || typeof css === "undefined" || typeof css === "object" && !css.toString) {
      throw new Error(`PostCSS received ${css} instead of CSS string`);
    }
    this.css = css.toString();
    if (this.css[0] === "\uFEFF" || this.css[0] === "￾") {
      this.hasBOM = true;
      this.css = this.css.slice(1);
    } else {
      this.hasBOM = false;
    }
    if (opts.from) {
      if (!pathAvailable$1 || /^\w+:\/\//.test(opts.from) || isAbsolute(opts.from)) {
        this.file = opts.from;
      } else {
        this.file = resolve$1(opts.from);
      }
    }
    if (pathAvailable$1 && sourceMapAvailable$1) {
      let map = new PreviousMap$1(this.css, opts);
      if (map.text) {
        this.map = map;
        let file = map.consumer().file;
        if (!this.file && file) this.file = this.mapResolve(file);
      }
    }
    if (!this.file) {
      this.id = "<input css " + nanoid(6) + ">";
    }
    if (this.map) this.map.file = this.from;
  }
  error(message, line, column, opts = {}) {
    let result2, endLine, endColumn;
    if (line && typeof line === "object") {
      let start = line;
      let end = column;
      if (typeof start.offset === "number") {
        let pos = this.fromOffset(start.offset);
        line = pos.line;
        column = pos.col;
      } else {
        line = start.line;
        column = start.column;
      }
      if (typeof end.offset === "number") {
        let pos = this.fromOffset(end.offset);
        endLine = pos.line;
        endColumn = pos.col;
      } else {
        endLine = end.line;
        endColumn = end.column;
      }
    } else if (!column) {
      let pos = this.fromOffset(line);
      line = pos.line;
      column = pos.col;
    }
    let origin = this.origin(line, column, endLine, endColumn);
    if (origin) {
      result2 = new CssSyntaxError$1(
        message,
        origin.endLine === void 0 ? origin.line : { column: origin.column, line: origin.line },
        origin.endLine === void 0 ? origin.column : { column: origin.endColumn, line: origin.endLine },
        origin.source,
        origin.file,
        opts.plugin
      );
    } else {
      result2 = new CssSyntaxError$1(
        message,
        endLine === void 0 ? line : { column, line },
        endLine === void 0 ? column : { column: endColumn, line: endLine },
        this.css,
        this.file,
        opts.plugin
      );
    }
    result2.input = { column, endColumn, endLine, line, source: this.css };
    if (this.file) {
      if (pathToFileURL$1) {
        result2.input.url = pathToFileURL$1(this.file).toString();
      }
      result2.input.file = this.file;
    }
    return result2;
  }
  fromOffset(offset) {
    let lastLine, lineToIndex;
    if (!this[fromOffsetCache]) {
      let lines = this.css.split("\n");
      lineToIndex = new Array(lines.length);
      let prevIndex = 0;
      for (let i = 0, l = lines.length; i < l; i++) {
        lineToIndex[i] = prevIndex;
        prevIndex += lines[i].length + 1;
      }
      this[fromOffsetCache] = lineToIndex;
    } else {
      lineToIndex = this[fromOffsetCache];
    }
    lastLine = lineToIndex[lineToIndex.length - 1];
    let min = 0;
    if (offset >= lastLine) {
      min = lineToIndex.length - 1;
    } else {
      let max = lineToIndex.length - 2;
      let mid;
      while (min < max) {
        mid = min + (max - min >> 1);
        if (offset < lineToIndex[mid]) {
          max = mid - 1;
        } else if (offset >= lineToIndex[mid + 1]) {
          min = mid + 1;
        } else {
          min = mid;
          break;
        }
      }
    }
    return {
      col: offset - lineToIndex[min] + 1,
      line: min + 1
    };
  }
  mapResolve(file) {
    if (/^\w+:\/\//.test(file)) {
      return file;
    }
    return resolve$1(this.map.consumer().sourceRoot || this.map.root || ".", file);
  }
  origin(line, column, endLine, endColumn) {
    if (!this.map) return false;
    let consumer = this.map.consumer();
    let from = consumer.originalPositionFor({ column, line });
    if (!from.source) return false;
    let to;
    if (typeof endLine === "number") {
      to = consumer.originalPositionFor({ column: endColumn, line: endLine });
    }
    let fromUrl;
    if (isAbsolute(from.source)) {
      fromUrl = pathToFileURL$1(from.source);
    } else {
      fromUrl = new URL(
        from.source,
        this.map.consumer().sourceRoot || pathToFileURL$1(this.map.mapFile)
      );
    }
    let result2 = {
      column: from.column,
      endColumn: to && to.column,
      endLine: to && to.line,
      line: from.line,
      url: fromUrl.toString()
    };
    if (fromUrl.protocol === "file:") {
      if (fileURLToPath) {
        result2.file = fileURLToPath(fromUrl);
      } else {
        throw new Error(`file: protocol is not available in this PostCSS build`);
      }
    }
    let source = consumer.sourceContentFor(from.source);
    if (source) result2.source = source;
    return result2;
  }
  toJSON() {
    let json = {};
    for (let name of ["hasBOM", "css", "file", "id"]) {
      if (this[name] != null) {
        json[name] = this[name];
      }
    }
    if (this.map) {
      json.map = { ...this.map };
      if (json.map.consumerCache) {
        json.map.consumerCache = void 0;
      }
    }
    return json;
  }
  get from() {
    return this.file || this.id;
  }
};
var input = Input$4;
Input$4.default = Input$4;
if (terminalHighlight && terminalHighlight.registerInput) {
  terminalHighlight.registerInput(Input$4);
}
let { SourceMapConsumer, SourceMapGenerator } = require$$2;
let { dirname, relative, resolve, sep } = require$$2;
let { pathToFileURL } = require$$2;
let Input$3 = input;
let sourceMapAvailable = Boolean(SourceMapConsumer && SourceMapGenerator);
let pathAvailable = Boolean(dirname && resolve && relative && sep);
let MapGenerator$2 = class MapGenerator {
  constructor(stringify2, root2, opts, cssString) {
    this.stringify = stringify2;
    this.mapOpts = opts.map || {};
    this.root = root2;
    this.opts = opts;
    this.css = cssString;
    this.originalCSS = cssString;
    this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute;
    this.memoizedFileURLs = /* @__PURE__ */ new Map();
    this.memoizedPaths = /* @__PURE__ */ new Map();
    this.memoizedURLs = /* @__PURE__ */ new Map();
  }
  addAnnotation() {
    let content;
    if (this.isInline()) {
      content = "data:application/json;base64," + this.toBase64(this.map.toString());
    } else if (typeof this.mapOpts.annotation === "string") {
      content = this.mapOpts.annotation;
    } else if (typeof this.mapOpts.annotation === "function") {
      content = this.mapOpts.annotation(this.opts.to, this.root);
    } else {
      content = this.outputFile() + ".map";
    }
    let eol = "\n";
    if (this.css.includes("\r\n")) eol = "\r\n";
    this.css += eol + "/*# sourceMappingURL=" + content + " */";
  }
  applyPrevMaps() {
    for (let prev of this.previous()) {
      let from = this.toUrl(this.path(prev.file));
      let root2 = prev.root || dirname(prev.file);
      let map;
      if (this.mapOpts.sourcesContent === false) {
        map = new SourceMapConsumer(prev.text);
        if (map.sourcesContent) {
          map.sourcesContent = null;
        }
      } else {
        map = prev.consumer();
      }
      this.map.applySourceMap(map, from, this.toUrl(this.path(root2)));
    }
  }
  clearAnnotation() {
    if (this.mapOpts.annotation === false) return;
    if (this.root) {
      let node2;
      for (let i = this.root.nodes.length - 1; i >= 0; i--) {
        node2 = this.root.nodes[i];
        if (node2.type !== "comment") continue;
        if (node2.text.indexOf("# sourceMappingURL=") === 0) {
          this.root.removeChild(i);
        }
      }
    } else if (this.css) {
      this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, "");
    }
  }
  generate() {
    this.clearAnnotation();
    if (pathAvailable && sourceMapAvailable && this.isMap()) {
      return this.generateMap();
    } else {
      let result2 = "";
      this.stringify(this.root, (i) => {
        result2 += i;
      });
      return [result2];
    }
  }
  generateMap() {
    if (this.root) {
      this.generateString();
    } else if (this.previous().length === 1) {
      let prev = this.previous()[0].consumer();
      prev.file = this.outputFile();
      this.map = SourceMapGenerator.fromSourceMap(prev, {
        ignoreInvalidMapping: true
      });
    } else {
      this.map = new SourceMapGenerator({
        file: this.outputFile(),
        ignoreInvalidMapping: true
      });
      this.map.addMapping({
        generated: { column: 0, line: 1 },
        original: { column: 0, line: 1 },
        source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
      });
    }
    if (this.isSourcesContent()) this.setSourcesContent();
    if (this.root && this.previous().length > 0) this.applyPrevMaps();
    if (this.isAnnotation()) this.addAnnotation();
    if (this.isInline()) {
      return [this.css];
    } else {
      return [this.css, this.map];
    }
  }
  generateString() {
    this.css = "";
    this.map = new SourceMapGenerator({
      file: this.outputFile(),
      ignoreInvalidMapping: true
    });
    let line = 1;
    let column = 1;
    let noSource = "<no source>";
    let mapping = {
      generated: { column: 0, line: 0 },
      original: { column: 0, line: 0 },
      source: ""
    };
    let lines, last;
    this.stringify(this.root, (str, node2, type) => {
      this.css += str;
      if (node2 && type !== "end") {
        mapping.generated.line = line;
        mapping.generated.column = column - 1;
        if (node2.source && node2.source.start) {
          mapping.source = this.sourcePath(node2);
          mapping.original.line = node2.source.start.line;
          mapping.original.column = node2.source.start.column - 1;
          this.map.addMapping(mapping);
        } else {
          mapping.source = noSource;
          mapping.original.line = 1;
          mapping.original.column = 0;
          this.map.addMapping(mapping);
        }
      }
      lines = str.match(/\n/g);
      if (lines) {
        line += lines.length;
        last = str.lastIndexOf("\n");
        column = str.length - last;
      } else {
        column += str.length;
      }
      if (node2 && type !== "start") {
        let p = node2.parent || { raws: {} };
        let childless = node2.type === "decl" || node2.type === "atrule" && !node2.nodes;
        if (!childless || node2 !== p.last || p.raws.semicolon) {
          if (node2.source && node2.source.end) {
            mapping.source = this.sourcePath(node2);
            mapping.original.line = node2.source.end.line;
            mapping.original.column = node2.source.end.column - 1;
            mapping.generated.line = line;
            mapping.generated.column = column - 2;
            this.map.addMapping(mapping);
          } else {
            mapping.source = noSource;
            mapping.original.line = 1;
            mapping.original.column = 0;
            mapping.generated.line = line;
            mapping.generated.column = column - 1;
            this.map.addMapping(mapping);
          }
        }
      }
    });
  }
  isAnnotation() {
    if (this.isInline()) {
      return true;
    }
    if (typeof this.mapOpts.annotation !== "undefined") {
      return this.mapOpts.annotation;
    }
    if (this.previous().length) {
      return this.previous().some((i) => i.annotation);
    }
    return true;
  }
  isInline() {
    if (typeof this.mapOpts.inline !== "undefined") {
      return this.mapOpts.inline;
    }
    let annotation = this.mapOpts.annotation;
    if (typeof annotation !== "undefined" && annotation !== true) {
      return false;
    }
    if (this.previous().length) {
      return this.previous().some((i) => i.inline);
    }
    return true;
  }
  isMap() {
    if (typeof this.opts.map !== "undefined") {
      return !!this.opts.map;
    }
    return this.previous().length > 0;
  }
  isSourcesContent() {
    if (typeof this.mapOpts.sourcesContent !== "undefined") {
      return this.mapOpts.sourcesContent;
    }
    if (this.previous().length) {
      return this.previous().some((i) => i.withContent());
    }
    return true;
  }
  outputFile() {
    if (this.opts.to) {
      return this.path(this.opts.to);
    } else if (this.opts.from) {
      return this.path(this.opts.from);
    } else {
      return "to.css";
    }
  }
  path(file) {
    if (this.mapOpts.absolute) return file;
    if (file.charCodeAt(0) === 60) return file;
    if (/^\w+:\/\//.test(file)) return file;
    let cached = this.memoizedPaths.get(file);
    if (cached) return cached;
    let from = this.opts.to ? dirname(this.opts.to) : ".";
    if (typeof this.mapOpts.annotation === "string") {
      from = dirname(resolve(from, this.mapOpts.annotation));
    }
    let path = relative(from, file);
    this.memoizedPaths.set(file, path);
    return path;
  }
  previous() {
    if (!this.previousMaps) {
      this.previousMaps = [];
      if (this.root) {
        this.root.walk((node2) => {
          if (node2.source && node2.source.input.map) {
            let map = node2.source.input.map;
            if (!this.previousMaps.includes(map)) {
              this.previousMaps.push(map);
            }
          }
        });
      } else {
        let input2 = new Input$3(this.originalCSS, this.opts);
        if (input2.map) this.previousMaps.push(input2.map);
      }
    }
    return this.previousMaps;
  }
  setSourcesContent() {
    let already = {};
    if (this.root) {
      this.root.walk((node2) => {
        if (node2.source) {
          let from = node2.source.input.from;
          if (from && !already[from]) {
            already[from] = true;
            let fromUrl = this.usesFileUrls ? this.toFileUrl(from) : this.toUrl(this.path(from));
            this.map.setSourceContent(fromUrl, node2.source.input.css);
          }
        }
      });
    } else if (this.css) {
      let from = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
      this.map.setSourceContent(from, this.css);
    }
  }
  sourcePath(node2) {
    if (this.mapOpts.from) {
      return this.toUrl(this.mapOpts.from);
    } else if (this.usesFileUrls) {
      return this.toFileUrl(node2.source.input.from);
    } else {
      return this.toUrl(this.path(node2.source.input.from));
    }
  }
  toBase64(str) {
    if (Buffer) {
      return Buffer.from(str).toString("base64");
    } else {
      return window.btoa(unescape(encodeURIComponent(str)));
    }
  }
  toFileUrl(path) {
    let cached = this.memoizedFileURLs.get(path);
    if (cached) return cached;
    if (pathToFileURL) {
      let fileURL = pathToFileURL(path).toString();
      this.memoizedFileURLs.set(path, fileURL);
      return fileURL;
    } else {
      throw new Error(
        "`map.absolute` option is not available in this PostCSS build"
      );
    }
  }
  toUrl(path) {
    let cached = this.memoizedURLs.get(path);
    if (cached) return cached;
    if (sep === "\\") {
      path = path.replace(/\\/g, "/");
    }
    let url = encodeURI(path).replace(/[#?]/g, encodeURIComponent);
    this.memoizedURLs.set(path, url);
    return url;
  }
};
var mapGenerator = MapGenerator$2;
let Node$2 = node;
let Comment$4 = class Comment extends Node$2 {
  constructor(defaults) {
    super(defaults);
    this.type = "comment";
  }
};
var comment = Comment$4;
Comment$4.default = Comment$4;
let { isClean: isClean$1, my: my$1 } = symbols;
let Declaration$3 = declaration;
let Comment$3 = comment;
let Node$1 = node;
let parse$4, Rule$4, AtRule$4, Root$6;
function cleanSource(nodes) {
  return nodes.map((i) => {
    if (i.nodes) i.nodes = cleanSource(i.nodes);
    delete i.source;
    return i;
  });
}
function markDirtyUp(node2) {
  node2[isClean$1] = false;
  if (node2.proxyOf.nodes) {
    for (let i of node2.proxyOf.nodes) {
      markDirtyUp(i);
    }
  }
}
let Container$7 = class Container extends Node$1 {
  append(...children) {
    for (let child of children) {
      let nodes = this.normalize(child, this.last);
      for (let node2 of nodes) this.proxyOf.nodes.push(node2);
    }
    this.markDirty();
    return this;
  }
  cleanRaws(keepBetween) {
    super.cleanRaws(keepBetween);
    if (this.nodes) {
      for (let node2 of this.nodes) node2.cleanRaws(keepBetween);
    }
  }
  each(callback) {
    if (!this.proxyOf.nodes) return void 0;
    let iterator = this.getIterator();
    let index2, result2;
    while (this.indexes[iterator] < this.proxyOf.nodes.length) {
      index2 = this.indexes[iterator];
      result2 = callback(this.proxyOf.nodes[index2], index2);
      if (result2 === false) break;
      this.indexes[iterator] += 1;
    }
    delete this.indexes[iterator];
    return result2;
  }
  every(condition) {
    return this.nodes.every(condition);
  }
  getIterator() {
    if (!this.lastEach) this.lastEach = 0;
    if (!this.indexes) this.indexes = {};
    this.lastEach += 1;
    let iterator = this.lastEach;
    this.indexes[iterator] = 0;
    return iterator;
  }
  getProxyProcessor() {
    return {
      get(node2, prop) {
        if (prop === "proxyOf") {
          return node2;
        } else if (!node2[prop]) {
          return node2[prop];
        } else if (prop === "each" || typeof prop === "string" && prop.startsWith("walk")) {
          return (...args) => {
            return node2[prop](
              ...args.map((i) => {
                if (typeof i === "function") {
                  return (child, index2) => i(child.toProxy(), index2);
                } else {
                  return i;
                }
              })
            );
          };
        } else if (prop === "every" || prop === "some") {
          return (cb) => {
            return node2[prop](
              (child, ...other) => cb(child.toProxy(), ...other)
            );
          };
        } else if (prop === "root") {
          return () => node2.root().toProxy();
        } else if (prop === "nodes") {
          return node2.nodes.map((i) => i.toProxy());
        } else if (prop === "first" || prop === "last") {
          return node2[prop].toProxy();
        } else {
          return node2[prop];
        }
      },
      set(node2, prop, value) {
        if (node2[prop] === value) return true;
        node2[prop] = value;
        if (prop === "name" || prop === "params" || prop === "selector") {
          node2.markDirty();
        }
        return true;
      }
    };
  }
  index(child) {
    if (typeof child === "number") return child;
    if (child.proxyOf) child = child.proxyOf;
    return this.proxyOf.nodes.indexOf(child);
  }
  insertAfter(exist, add) {
    let existIndex = this.index(exist);
    let nodes = this.normalize(add, this.proxyOf.nodes[existIndex]).reverse();
    existIndex = this.index(exist);
    for (let node2 of nodes) this.proxyOf.nodes.splice(existIndex + 1, 0, node2);
    let index2;
    for (let id in this.indexes) {
      index2 = this.indexes[id];
      if (existIndex < index2) {
        this.indexes[id] = index2 + nodes.length;
      }
    }
    this.markDirty();
    return this;
  }
  insertBefore(exist, add) {
    let existIndex = this.index(exist);
    let type = existIndex === 0 ? "prepend" : false;
    let nodes = this.normalize(add, this.proxyOf.nodes[existIndex], type).reverse();
    existIndex = this.index(exist);
    for (let node2 of nodes) this.proxyOf.nodes.splice(existIndex, 0, node2);
    let index2;
    for (let id in this.indexes) {
      index2 = this.indexes[id];
      if (existIndex <= index2) {
        this.indexes[id] = index2 + nodes.length;
      }
    }
    this.markDirty();
    return this;
  }
  normalize(nodes, sample) {
    if (typeof nodes === "string") {
      nodes = cleanSource(parse$4(nodes).nodes);
    } else if (typeof nodes === "undefined") {
      nodes = [];
    } else if (Array.isArray(nodes)) {
      nodes = nodes.slice(0);
      for (let i of nodes) {
        if (i.parent) i.parent.removeChild(i, "ignore");
      }
    } else if (nodes.type === "root" && this.type !== "document") {
      nodes = nodes.nodes.slice(0);
      for (let i of nodes) {
        if (i.parent) i.parent.removeChild(i, "ignore");
      }
    } else if (nodes.type) {
      nodes = [nodes];
    } else if (nodes.prop) {
      if (typeof nodes.value === "undefined") {
        throw new Error("Value field is missed in node creation");
      } else if (typeof nodes.value !== "string") {
        nodes.value = String(nodes.value);
      }
      nodes = [new Declaration$3(nodes)];
    } else if (nodes.selector) {
      nodes = [new Rule$4(nodes)];
    } else if (nodes.name) {
      nodes = [new AtRule$4(nodes)];
    } else if (nodes.text) {
      nodes = [new Comment$3(nodes)];
    } else {
      throw new Error("Unknown node type in node creation");
    }
    let processed = nodes.map((i) => {
      if (!i[my$1]) Container.rebuild(i);
      i = i.proxyOf;
      if (i.parent) i.parent.removeChild(i);
      if (i[isClean$1]) markDirtyUp(i);
      if (typeof i.raws.before === "undefined") {
        if (sample && typeof sample.raws.before !== "undefined") {
          i.raws.before = sample.raws.before.replace(/\S/g, "");
        }
      }
      i.parent = this.proxyOf;
      return i;
    });
    return processed;
  }
  prepend(...children) {
    children = children.reverse();
    for (let child of children) {
      let nodes = this.normalize(child, this.first, "prepend").reverse();
      for (let node2 of nodes) this.proxyOf.nodes.unshift(node2);
      for (let id in this.indexes) {
        this.indexes[id] = this.indexes[id] + nodes.length;
      }
    }
    this.markDirty();
    return this;
  }
  push(child) {
    child.parent = this;
    this.proxyOf.nodes.push(child);
    return this;
  }
  removeAll() {
    for (let node2 of this.proxyOf.nodes) node2.parent = void 0;
    this.proxyOf.nodes = [];
    this.markDirty();
    return this;
  }
  removeChild(child) {
    child = this.index(child);
    this.proxyOf.nodes[child].parent = void 0;
    this.proxyOf.nodes.splice(child, 1);
    let index2;
    for (let id in this.indexes) {
      index2 = this.indexes[id];
      if (index2 >= child) {
        this.indexes[id] = index2 - 1;
      }
    }
    this.markDirty();
    return this;
  }
  replaceValues(pattern, opts, callback) {
    if (!callback) {
      callback = opts;
      opts = {};
    }
    this.walkDecls((decl) => {
      if (opts.props && !opts.props.includes(decl.prop)) return;
      if (opts.fast && !decl.value.includes(opts.fast)) return;
      decl.value = decl.value.replace(pattern, callback);
    });
    this.markDirty();
    return this;
  }
  some(condition) {
    return this.nodes.some(condition);
  }
  walk(callback) {
    return this.each((child, i) => {
      let result2;
      try {
        result2 = callback(child, i);
      } catch (e) {
        throw child.addToError(e);
      }
      if (result2 !== false && child.walk) {
        result2 = child.walk(callback);
      }
      return result2;
    });
  }
  walkAtRules(name, callback) {
    if (!callback) {
      callback = name;
      return this.walk((child, i) => {
        if (child.type === "atrule") {
          return callback(child, i);
        }
      });
    }
    if (name instanceof RegExp) {
      return this.walk((child, i) => {
        if (child.type === "atrule" && name.test(child.name)) {
          return callback(child, i);
        }
      });
    }
    return this.walk((child, i) => {
      if (child.type === "atrule" && child.name === name) {
        return callback(child, i);
      }
    });
  }
  walkComments(callback) {
    return this.walk((child, i) => {
      if (child.type === "comment") {
        return callback(child, i);
      }
    });
  }
  walkDecls(prop, callback) {
    if (!callback) {
      callback = prop;
      return this.walk((child, i) => {
        if (child.type === "decl") {
          return callback(child, i);
        }
      });
    }
    if (prop instanceof RegExp) {
      return this.walk((child, i) => {
        if (child.type === "decl" && prop.test(child.prop)) {
          return callback(child, i);
        }
      });
    }
    return this.walk((child, i) => {
      if (child.type === "decl" && child.prop === prop) {
        return callback(child, i);
      }
    });
  }
  walkRules(selector, callback) {
    if (!callback) {
      callback = selector;
      return this.walk((child, i) => {
        if (child.type === "rule") {
          return callback(child, i);
        }
      });
    }
    if (selector instanceof RegExp) {
      return this.walk((child, i) => {
        if (child.type === "rule" && selector.test(child.selector)) {
          return callback(child, i);
        }
      });
    }
    return this.walk((child, i) => {
      if (child.type === "rule" && child.selector === selector) {
        return callback(child, i);
      }
    });
  }
  get first() {
    if (!this.proxyOf.nodes) return void 0;
    return this.proxyOf.nodes[0];
  }
  get last() {
    if (!this.proxyOf.nodes) return void 0;
    return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
  }
};
Container$7.registerParse = (dependant) => {
  parse$4 = dependant;
};
Container$7.registerRule = (dependant) => {
  Rule$4 = dependant;
};
Container$7.registerAtRule = (dependant) => {
  AtRule$4 = dependant;
};
Container$7.registerRoot = (dependant) => {
  Root$6 = dependant;
};
var container = Container$7;
Container$7.default = Container$7;
Container$7.rebuild = (node2) => {
  if (node2.type === "atrule") {
    Object.setPrototypeOf(node2, AtRule$4.prototype);
  } else if (node2.type === "rule") {
    Object.setPrototypeOf(node2, Rule$4.prototype);
  } else if (node2.type === "decl") {
    Object.setPrototypeOf(node2, Declaration$3.prototype);
  } else if (node2.type === "comment") {
    Object.setPrototypeOf(node2, Comment$3.prototype);
  } else if (node2.type === "root") {
    Object.setPrototypeOf(node2, Root$6.prototype);
  }
  node2[my$1] = true;
  if (node2.nodes) {
    node2.nodes.forEach((child) => {
      Container$7.rebuild(child);
    });
  }
};
let Container$6 = container;
let LazyResult$4, Processor$3;
let Document$3 = class Document extends Container$6 {
  constructor(defaults) {
    super({ type: "document", ...defaults });
    if (!this.nodes) {
      this.nodes = [];
    }
  }
  toResult(opts = {}) {
    let lazy = new LazyResult$4(new Processor$3(), this, opts);
    return lazy.stringify();
  }
};
Document$3.registerLazyResult = (dependant) => {
  LazyResult$4 = dependant;
};
Document$3.registerProcessor = (dependant) => {
  Processor$3 = dependant;
};
var document$1 = Document$3;
Document$3.default = Document$3;
let printed = {};
var warnOnce$2 = function warnOnce(message) {
  if (printed[message]) return;
  printed[message] = true;
  if (typeof console !== "undefined" && console.warn) {
    console.warn(message);
  }
};
let Warning$2 = class Warning {
  constructor(text, opts = {}) {
    this.type = "warning";
    this.text = text;
    if (opts.node && opts.node.source) {
      let range = opts.node.rangeBy(opts);
      this.line = range.start.line;
      this.column = range.start.column;
      this.endLine = range.end.line;
      this.endColumn = range.end.column;
    }
    for (let opt in opts) this[opt] = opts[opt];
  }
  toString() {
    if (this.node) {
      return this.node.error(this.text, {
        index: this.index,
        plugin: this.plugin,
        word: this.word
      }).message;
    }
    if (this.plugin) {
      return this.plugin + ": " + this.text;
    }
    return this.text;
  }
};
var warning = Warning$2;
Warning$2.default = Warning$2;
let Warning$1 = warning;
let Result$3 = class Result {
  constructor(processor2, root2, opts) {
    this.processor = processor2;
    this.messages = [];
    this.root = root2;
    this.opts = opts;
    this.css = void 0;
    this.map = void 0;
  }
  toString() {
    return this.css;
  }
  warn(text, opts = {}) {
    if (!opts.plugin) {
      if (this.lastPlugin && this.lastPlugin.postcssPlugin) {
        opts.plugin = this.lastPlugin.postcssPlugin;
      }
    }
    let warning2 = new Warning$1(text, opts);
    this.messages.push(warning2);
    return warning2;
  }
  warnings() {
    return this.messages.filter((i) => i.type === "warning");
  }
  get content() {
    return this.css;
  }
};
var result = Result$3;
Result$3.default = Result$3;
const SINGLE_QUOTE = "'".charCodeAt(0);
const DOUBLE_QUOTE = '"'.charCodeAt(0);
const BACKSLASH = "\\".charCodeAt(0);
const SLASH = "/".charCodeAt(0);
const NEWLINE = "\n".charCodeAt(0);
const SPACE = " ".charCodeAt(0);
const FEED = "\f".charCodeAt(0);
const TAB = "	".charCodeAt(0);
const CR = "\r".charCodeAt(0);
const OPEN_SQUARE = "[".charCodeAt(0);
const CLOSE_SQUARE = "]".charCodeAt(0);
const OPEN_PARENTHESES = "(".charCodeAt(0);
const CLOSE_PARENTHESES = ")".charCodeAt(0);
const OPEN_CURLY = "{".charCodeAt(0);
const CLOSE_CURLY = "}".charCodeAt(0);
const SEMICOLON = ";".charCodeAt(0);
const ASTERISK = "*".charCodeAt(0);
const COLON = ":".charCodeAt(0);
const AT = "@".charCodeAt(0);
const RE_AT_END = /[\t\n\f\r "#'()/;[\\\]{}]/g;
const RE_WORD_END = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g;
const RE_BAD_BRACKET = /.[\r\n"'(/\\]/;
const RE_HEX_ESCAPE = /[\da-f]/i;
var tokenize = function tokenizer(input2, options = {}) {
  let css = input2.css.valueOf();
  let ignore = options.ignoreErrors;
  let code, next, quote, content, escape;
  let escaped, escapePos, prev, n, currentToken;
  let length = css.length;
  let pos = 0;
  let buffer = [];
  let returned = [];
  function position() {
    return pos;
  }
  function unclosed(what) {
    throw input2.error("Unclosed " + what, pos);
  }
  function endOfFile() {
    return returned.length === 0 && pos >= length;
  }
  function nextToken(opts) {
    if (returned.length) return returned.pop();
    if (pos >= length) return;
    let ignoreUnclosed = opts ? opts.ignoreUnclosed : false;
    code = css.charCodeAt(pos);
    switch (code) {
      case NEWLINE:
      case SPACE:
      case TAB:
      case CR:
      case FEED: {
        next = pos;
        do {
          next += 1;
          code = css.charCodeAt(next);
        } while (code === SPACE || code === NEWLINE || code === TAB || code === CR || code === FEED);
        currentToken = ["space", css.slice(pos, next)];
        pos = next - 1;
        break;
      }
      case OPEN_SQUARE:
      case CLOSE_SQUARE:
      case OPEN_CURLY:
      case CLOSE_CURLY:
      case COLON:
      case SEMICOLON:
      case CLOSE_PARENTHESES: {
        let controlChar = String.fromCharCode(code);
        currentToken = [controlChar, controlChar, pos];
        break;
      }
      case OPEN_PARENTHESES: {
        prev = buffer.length ? buffer.pop()[1] : "";
        n = css.charCodeAt(pos + 1);
        if (prev === "url" && n !== SINGLE_QUOTE && n !== DOUBLE_QUOTE && n !== SPACE && n !== NEWLINE && n !== TAB && n !== FEED && n !== CR) {
          next = pos;
          do {
            escaped = false;
            next = css.indexOf(")", next + 1);
            if (next === -1) {
              if (ignore || ignoreUnclosed) {
                next = pos;
                break;
              } else {
                unclosed("bracket");
              }
            }
            escapePos = next;
            while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
              escapePos -= 1;
              escaped = !escaped;
            }
          } while (escaped);
          currentToken = ["brackets", css.slice(pos, next + 1), pos, next];
          pos = next;
        } else {
          next = css.indexOf(")", pos + 1);
          content = css.slice(pos, next + 1);
          if (next === -1 || RE_BAD_BRACKET.test(content)) {
            currentToken = ["(", "(", pos];
          } else {
            currentToken = ["brackets", content, pos, next];
            pos = next;
          }
        }
        break;
      }
      case SINGLE_QUOTE:
      case DOUBLE_QUOTE: {
        quote = code === SINGLE_QUOTE ? "'" : '"';
        next = pos;
        do {
          escaped = false;
          next = css.indexOf(quote, next + 1);
          if (next === -1) {
            if (ignore || ignoreUnclosed) {
              next = pos + 1;
              break;
            } else {
              unclosed("string");
            }
          }
          escapePos = next;
          while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
            escapePos -= 1;
            escaped = !escaped;
          }
        } while (escaped);
        currentToken = ["string", css.slice(pos, next + 1), pos, next];
        pos = next;
        break;
      }
      case AT: {
        RE_AT_END.lastIndex = pos + 1;
        RE_AT_END.test(css);
        if (RE_AT_END.lastIndex === 0) {
          next = css.length - 1;
        } else {
          next = RE_AT_END.lastIndex - 2;
        }
        currentToken = ["at-word", css.slice(pos, next + 1), pos, next];
        pos = next;
        break;
      }
      case BACKSLASH: {
        next = pos;
        escape = true;
        while (css.charCodeAt(next + 1) === BACKSLASH) {
          next += 1;
          escape = !escape;
        }
        code = css.charCodeAt(next + 1);
        if (escape && code !== SLASH && code !== SPACE && code !== NEWLINE && code !== TAB && code !== CR && code !== FEED) {
          next += 1;
          if (RE_HEX_ESCAPE.test(css.charAt(next))) {
            while (RE_HEX_ESCAPE.test(css.charAt(next + 1))) {
              next += 1;
            }
            if (css.charCodeAt(next + 1) === SPACE) {
              next += 1;
            }
          }
        }
        currentToken = ["word", css.slice(pos, next + 1), pos, next];
        pos = next;
        break;
      }
      default: {
        if (code === SLASH && css.charCodeAt(pos + 1) === ASTERISK) {
          next = css.indexOf("*/", pos + 2) + 1;
          if (next === 0) {
            if (ignore || ignoreUnclosed) {
              next = css.length;
            } else {
              unclosed("comment");
            }
          }
          currentToken = ["comment", css.slice(pos, next + 1), pos, next];
          pos = next;
        } else {
          RE_WORD_END.lastIndex = pos + 1;
          RE_WORD_END.test(css);
          if (RE_WORD_END.lastIndex === 0) {
            next = css.length - 1;
          } else {
            next = RE_WORD_END.lastIndex - 2;
          }
          currentToken = ["word", css.slice(pos, next + 1), pos, next];
          buffer.push(currentToken);
          pos = next;
        }
        break;
      }
    }
    pos++;
    return currentToken;
  }
  function back(token) {
    returned.push(token);
  }
  return {
    back,
    endOfFile,
    nextToken,
    position
  };
};
let Container$5 = container;
let AtRule$3 = class AtRule extends Container$5 {
  constructor(defaults) {
    super(defaults);
    this.type = "atrule";
  }
  append(...children) {
    if (!this.proxyOf.nodes) this.nodes = [];
    return super.append(...children);
  }
  prepend(...children) {
    if (!this.proxyOf.nodes) this.nodes = [];
    return super.prepend(...children);
  }
};
var atRule = AtRule$3;
AtRule$3.default = AtRule$3;
Container$5.registerAtRule(AtRule$3);
let Container$4 = container;
let LazyResult$3, Processor$2;
let Root$5 = class Root extends Container$4 {
  constructor(defaults) {
    super(defaults);
    this.type = "root";
    if (!this.nodes) this.nodes = [];
  }
  normalize(child, sample, type) {
    let nodes = super.normalize(child);
    if (sample) {
      if (type === "prepend") {
        if (this.nodes.length > 1) {
          sample.raws.before = this.nodes[1].raws.before;
        } else {
          delete sample.raws.before;
        }
      } else if (this.first !== sample) {
        for (let node2 of nodes) {
          node2.raws.before = sample.raws.before;
        }
      }
    }
    return nodes;
  }
  removeChild(child, ignore) {
    let index2 = this.index(child);
    if (!ignore && index2 === 0 && this.nodes.length > 1) {
      this.nodes[1].raws.before = this.nodes[index2].raws.before;
    }
    return super.removeChild(child);
  }
  toResult(opts = {}) {
    let lazy = new LazyResult$3(new Processor$2(), this, opts);
    return lazy.stringify();
  }
};
Root$5.registerLazyResult = (dependant) => {
  LazyResult$3 = dependant;
};
Root$5.registerProcessor = (dependant) => {
  Processor$2 = dependant;
};
var root = Root$5;
Root$5.default = Root$5;
Container$4.registerRoot(Root$5);
let list$2 = {
  comma(string) {
    return list$2.split(string, [","], true);
  },
  space(string) {
    let spaces = [" ", "\n", "	"];
    return list$2.split(string, spaces);
  },
  split(string, separators, last) {
    let array = [];
    let current = "";
    let split = false;
    let func = 0;
    let inQuote = false;
    let prevQuote = "";
    let escape = false;
    for (let letter of string) {
      if (escape) {
        escape = false;
      } else if (letter === "\\") {
        escape = true;
      } else if (inQuote) {
        if (letter === prevQuote) {
          inQuote = false;
        }
      } else if (letter === '"' || letter === "'") {
        inQuote = true;
        prevQuote = letter;
      } else if (letter === "(") {
        func += 1;
      } else if (letter === ")") {
        if (func > 0) func -= 1;
      } else if (func === 0) {
        if (separators.includes(letter)) split = true;
      }
      if (split) {
        if (current !== "") array.push(current.trim());
        current = "";
        split = false;
      } else {
        current += letter;
      }
    }
    if (last || current !== "") array.push(current.trim());
    return array;
  }
};
var list_1 = list$2;
list$2.default = list$2;
let Container$3 = container;
let list$1 = list_1;
let Rule$3 = class Rule extends Container$3 {
  constructor(defaults) {
    super(defaults);
    this.type = "rule";
    if (!this.nodes) this.nodes = [];
  }
  get selectors() {
    return list$1.comma(this.selector);
  }
  set selectors(values) {
    let match = this.selector ? this.selector.match(/,\s*/) : null;
    let sep2 = match ? match[0] : "," + this.raw("between", "beforeOpen");
    this.selector = values.join(sep2);
  }
};
var rule = Rule$3;
Rule$3.default = Rule$3;
Container$3.registerRule(Rule$3);
let Declaration$2 = declaration;
let tokenizer2 = tokenize;
let Comment$2 = comment;
let AtRule$2 = atRule;
let Root$4 = root;
let Rule$2 = rule;
const SAFE_COMMENT_NEIGHBOR = {
  empty: true,
  space: true
};
function findLastWithPosition(tokens) {
  for (let i = tokens.length - 1; i >= 0; i--) {
    let token = tokens[i];
    let pos = token[3] || token[2];
    if (pos) return pos;
  }
}
let Parser$1 = class Parser {
  constructor(input2) {
    this.input = input2;
    this.root = new Root$4();
    this.current = this.root;
    this.spaces = "";
    this.semicolon = false;
    this.createTokenizer();
    this.root.source = { input: input2, start: { column: 1, line: 1, offset: 0 } };
  }
  atrule(token) {
    let node2 = new AtRule$2();
    node2.name = token[1].slice(1);
    if (node2.name === "") {
      this.unnamedAtrule(node2, token);
    }
    this.init(node2, token[2]);
    let type;
    let prev;
    let shift;
    let last = false;
    let open = false;
    let params = [];
    let brackets = [];
    while (!this.tokenizer.endOfFile()) {
      token = this.tokenizer.nextToken();
      type = token[0];
      if (type === "(" || type === "[") {
        brackets.push(type === "(" ? ")" : "]");
      } else if (type === "{" && brackets.length > 0) {
        brackets.push("}");
      } else if (type === brackets[brackets.length - 1]) {
        brackets.pop();
      }
      if (brackets.length === 0) {
        if (type === ";") {
          node2.source.end = this.getPosition(token[2]);
          node2.source.end.offset++;
          this.semicolon = true;
          break;
        } else if (type === "{") {
          open = true;
          break;
        } else if (type === "}") {
          if (params.length > 0) {
            shift = params.length - 1;
            prev = params[shift];
            while (prev && prev[0] === "space") {
              prev = params[--shift];
            }
            if (prev) {
              node2.source.end = this.getPosition(prev[3] || prev[2]);
              node2.source.end.offset++;
            }
          }
          this.end(token);
          break;
        } else {
          params.push(token);
        }
      } else {
        params.push(token);
      }
      if (this.tokenizer.endOfFile()) {
        last = true;
        break;
      }
    }
    node2.raws.between = this.spacesAndCommentsFromEnd(params);
    if (params.length) {
      node2.raws.afterName = this.spacesAndCommentsFromStart(params);
      this.raw(node2, "params", params);
      if (last) {
        token = params[params.length - 1];
        node2.source.end = this.getPosition(token[3] || token[2]);
        node2.source.end.offset++;
        this.spaces = node2.raws.between;
        node2.raws.between = "";
      }
    } else {
      node2.raws.afterName = "";
      node2.params = "";
    }
    if (open) {
      node2.nodes = [];
      this.current = node2;
    }
  }
  checkMissedSemicolon(tokens) {
    let colon = this.colon(tokens);
    if (colon === false) return;
    let founded = 0;
    let token;
    for (let j = colon - 1; j >= 0; j--) {
      token = tokens[j];
      if (token[0] !== "space") {
        founded += 1;
        if (founded === 2) break;
      }
    }
    throw this.input.error(
      "Missed semicolon",
      token[0] === "word" ? token[3] + 1 : token[2]
    );
  }
  colon(tokens) {
    let brackets = 0;
    let token, type, prev;
    for (let [i, element] of tokens.entries()) {
      token = element;
      type = token[0];
      if (type === "(") {
        brackets += 1;
      }
      if (type === ")") {
        brackets -= 1;
      }
      if (brackets === 0 && type === ":") {
        if (!prev) {
          this.doubleColon(token);
        } else if (prev[0] === "word" && prev[1] === "progid") {
          continue;
        } else {
          return i;
        }
      }
      prev = token;
    }
    return false;
  }
  comment(token) {
    let node2 = new Comment$2();
    this.init(node2, token[2]);
    node2.source.end = this.getPosition(token[3] || token[2]);
    node2.source.end.offset++;
    let text = token[1].slice(2, -2);
    if (/^\s*$/.test(text)) {
      node2.text = "";
      node2.raws.left = text;
      node2.raws.right = "";
    } else {
      let match = text.match(/^(\s*)([^]*\S)(\s*)$/);
      node2.text = match[2];
      node2.raws.left = match[1];
      node2.raws.right = match[3];
    }
  }
  createTokenizer() {
    this.tokenizer = tokenizer2(this.input);
  }
  decl(tokens, customProperty) {
    let node2 = new Declaration$2();
    this.init(node2, tokens[0][2]);
    let last = tokens[tokens.length - 1];
    if (last[0] === ";") {
      this.semicolon = true;
      tokens.pop();
    }
    node2.source.end = this.getPosition(
      last[3] || last[2] || findLastWithPosition(tokens)
    );
    node2.source.end.offset++;
    while (tokens[0][0] !== "word") {
      if (tokens.length === 1) this.unknownWord(tokens);
      node2.raws.before += tokens.shift()[1];
    }
    node2.source.start = this.getPosition(tokens[0][2]);
    node2.prop = "";
    while (tokens.length) {
      let type = tokens[0][0];
      if (type === ":" || type === "space" || type === "comment") {
        break;
      }
      node2.prop += tokens.shift()[1];
    }
    node2.raws.between = "";
    let token;
    while (tokens.length) {
      token = tokens.shift();
      if (token[0] === ":") {
        node2.raws.between += token[1];
        break;
      } else {
        if (token[0] === "word" && /\w/.test(token[1])) {
          this.unknownWord([token]);
        }
        node2.raws.between += token[1];
      }
    }
    if (node2.prop[0] === "_" || node2.prop[0] === "*") {
      node2.raws.before += node2.prop[0];
      node2.prop = node2.prop.slice(1);
    }
    let firstSpaces = [];
    let next;
    while (tokens.length) {
      next = tokens[0][0];
      if (next !== "space" && next !== "comment") break;
      firstSpaces.push(tokens.shift());
    }
    this.precheckMissedSemicolon(tokens);
    for (let i = tokens.length - 1; i >= 0; i--) {
      token = tokens[i];
      if (token[1].toLowerCase() === "!important") {
        node2.important = true;
        let string = this.stringFrom(tokens, i);
        string = this.spacesFromEnd(tokens) + string;
        if (string !== " !important") node2.raws.important = string;
        break;
      } else if (token[1].toLowerCase() === "important") {
        let cache = tokens.slice(0);
        let str = "";
        for (let j = i; j > 0; j--) {
          let type = cache[j][0];
          if (str.trim().indexOf("!") === 0 && type !== "space") {
            break;
          }
          str = cache.pop()[1] + str;
        }
        if (str.trim().indexOf("!") === 0) {
          node2.important = true;
          node2.raws.important = str;
          tokens = cache;
        }
      }
      if (token[0] !== "space" && token[0] !== "comment") {
        break;
      }
    }
    let hasWord = tokens.some((i) => i[0] !== "space" && i[0] !== "comment");
    if (hasWord) {
      node2.raws.between += firstSpaces.map((i) => i[1]).join("");
      firstSpaces = [];
    }
    this.raw(node2, "value", firstSpaces.concat(tokens), customProperty);
    if (node2.value.includes(":") && !customProperty) {
      this.checkMissedSemicolon(tokens);
    }
  }
  doubleColon(token) {
    throw this.input.error(
      "Double colon",
      { offset: token[2] },
      { offset: token[2] + token[1].length }
    );
  }
  emptyRule(token) {
    let node2 = new Rule$2();
    this.init(node2, token[2]);
    node2.selector = "";
    node2.raws.between = "";
    this.current = node2;
  }
  end(token) {
    if (this.current.nodes && this.current.nodes.length) {
      this.current.raws.semicolon = this.semicolon;
    }
    this.semicolon = false;
    this.current.raws.after = (this.current.raws.after || "") + this.spaces;
    this.spaces = "";
    if (this.current.parent) {
      this.current.source.end = this.getPosition(token[2]);
      this.current.source.end.offset++;
      this.current = this.current.parent;
    } else {
      this.unexpectedClose(token);
    }
  }
  endFile() {
    if (this.current.parent) this.unclosedBlock();
    if (this.current.nodes && this.current.nodes.length) {
      this.current.raws.semicolon = this.semicolon;
    }
    this.current.raws.after = (this.current.raws.after || "") + this.spaces;
    this.root.source.end = this.getPosition(this.tokenizer.position());
  }
  freeSemicolon(token) {
    this.spaces += token[1];
    if (this.current.nodes) {
      let prev = this.current.nodes[this.current.nodes.length - 1];
      if (prev && prev.type === "rule" && !prev.raws.ownSemicolon) {
        prev.raws.ownSemicolon = this.spaces;
        this.spaces = "";
      }
    }
  }
  // Helpers
  getPosition(offset) {
    let pos = this.input.fromOffset(offset);
    return {
      column: pos.col,
      line: pos.line,
      offset
    };
  }
  init(node2, offset) {
    this.current.push(node2);
    node2.source = {
      input: this.input,
      start: this.getPosition(offset)
    };
    node2.raws.before = this.spaces;
    this.spaces = "";
    if (node2.type !== "comment") this.semicolon = false;
  }
  other(start) {
    let end = false;
    let type = null;
    let colon = false;
    let bracket = null;
    let brackets = [];
    let customProperty = start[1].startsWith("--");
    let tokens = [];
    let token = start;
    while (token) {
      type = token[0];
      tokens.push(token);
      if (type === "(" || type === "[") {
        if (!bracket) bracket = token;
        brackets.push(type === "(" ? ")" : "]");
      } else if (customProperty && colon && type === "{") {
        if (!bracket) bracket = token;
        brackets.push("}");
      } else if (brackets.length === 0) {
        if (type === ";") {
          if (colon) {
            this.decl(tokens, customProperty);
            return;
          } else {
            break;
          }
        } else if (type === "{") {
          this.rule(tokens);
          return;
        } else if (type === "}") {
          this.tokenizer.back(tokens.pop());
          end = true;
          break;
        } else if (type === ":") {
          colon = true;
        }
      } else if (type === brackets[brackets.length - 1]) {
        brackets.pop();
        if (brackets.length === 0) bracket = null;
      }
      token = this.tokenizer.nextToken();
    }
    if (this.tokenizer.endOfFile()) end = true;
    if (brackets.length > 0) this.unclosedBracket(bracket);
    if (end && colon) {
      if (!customProperty) {
        while (tokens.length) {
          token = tokens[tokens.length - 1][0];
          if (token !== "space" && token !== "comment") break;
          this.tokenizer.back(tokens.pop());
        }
      }
      this.decl(tokens, customProperty);
    } else {
      this.unknownWord(tokens);
    }
  }
  parse() {
    let token;
    while (!this.tokenizer.endOfFile()) {
      token = this.tokenizer.nextToken();
      switch (token[0]) {
        case "space":
          this.spaces += token[1];
          break;
        case ";":
          this.freeSemicolon(token);
          break;
        case "}":
          this.end(token);
          break;
        case "comment":
          this.comment(token);
          break;
        case "at-word":
          this.atrule(token);
          break;
        case "{":
          this.emptyRule(token);
          break;
        default:
          this.other(token);
          break;
      }
    }
    this.endFile();
  }
  precheckMissedSemicolon() {
  }
  raw(node2, prop, tokens, customProperty) {
    let token, type;
    let length = tokens.length;
    let value = "";
    let clean = true;
    let next, prev;
    for (let i = 0; i < length; i += 1) {
      token = tokens[i];
      type = token[0];
      if (type === "space" && i === length - 1 && !customProperty) {
        clean = false;
      } else if (type === "comment") {
        prev = tokens[i - 1] ? tokens[i - 1][0] : "empty";
        next = tokens[i + 1] ? tokens[i + 1][0] : "empty";
        if (!SAFE_COMMENT_NEIGHBOR[prev] && !SAFE_COMMENT_NEIGHBOR[next]) {
          if (value.slice(-1) === ",") {
            clean = false;
          } else {
            value += token[1];
          }
        } else {
          clean = false;
        }
      } else {
        value += token[1];
      }
    }
    if (!clean) {
      let raw = tokens.reduce((all, i) => all + i[1], "");
      node2.raws[prop] = { raw, value };
    }
    node2[prop] = value;
  }
  rule(tokens) {
    tokens.pop();
    let node2 = new Rule$2();
    this.init(node2, tokens[0][2]);
    node2.raws.between = this.spacesAndCommentsFromEnd(tokens);
    this.raw(node2, "selector", tokens);
    this.current = node2;
  }
  spacesAndCommentsFromEnd(tokens) {
    let lastTokenType;
    let spaces = "";
    while (tokens.length) {
      lastTokenType = tokens[tokens.length - 1][0];
      if (lastTokenType !== "space" && lastTokenType !== "comment") break;
      spaces = tokens.pop()[1] + spaces;
    }
    return spaces;
  }
  // Errors
  spacesAndCommentsFromStart(tokens) {
    let next;
    let spaces = "";
    while (tokens.length) {
      next = tokens[0][0];
      if (next !== "space" && next !== "comment") break;
      spaces += tokens.shift()[1];
    }
    return spaces;
  }
  spacesFromEnd(tokens) {
    let lastTokenType;
    let spaces = "";
    while (tokens.length) {
      lastTokenType = tokens[tokens.length - 1][0];
      if (lastTokenType !== "space") break;
      spaces = tokens.pop()[1] + spaces;
    }
    return spaces;
  }
  stringFrom(tokens, from) {
    let result2 = "";
    for (let i = from; i < tokens.length; i++) {
      result2 += tokens[i][1];
    }
    tokens.splice(from, tokens.length - from);
    return result2;
  }
  unclosedBlock() {
    let pos = this.current.source.start;
    throw this.input.error("Unclosed block", pos.line, pos.column);
  }
  unclosedBracket(bracket) {
    throw this.input.error(
      "Unclosed bracket",
      { offset: bracket[2] },
      { offset: bracket[2] + 1 }
    );
  }
  unexpectedClose(token) {
    throw this.input.error(
      "Unexpected }",
      { offset: token[2] },
      { offset: token[2] + 1 }
    );
  }
  unknownWord(tokens) {
    throw this.input.error(
      "Unknown word",
      { offset: tokens[0][2] },
      { offset: tokens[0][2] + tokens[0][1].length }
    );
  }
  unnamedAtrule(node2, token) {
    throw this.input.error(
      "At-rule without name",
      { offset: token[2] },
      { offset: token[2] + token[1].length }
    );
  }
};
var parser = Parser$1;
let Container$2 = container;
let Parser2 = parser;
let Input$2 = input;
function parse$3(css, opts) {
  let input2 = new Input$2(css, opts);
  let parser2 = new Parser2(input2);
  try {
    parser2.parse();
  } catch (e) {
    if (true) {
      if (e.name === "CssSyntaxError" && opts && opts.from) {
        if (/\.scss$/i.test(opts.from)) {
          e.message += "\nYou tried to parse SCSS with the standard CSS parser; try again with the postcss-scss parser";
        } else if (/\.sass/i.test(opts.from)) {
          e.message += "\nYou tried to parse Sass with the standard CSS parser; try again with the postcss-sass parser";
        } else if (/\.less$/i.test(opts.from)) {
          e.message += "\nYou tried to parse Less with the standard CSS parser; try again with the postcss-less parser";
        }
      }
    }
    throw e;
  }
  return parser2.root;
}
var parse_1 = parse$3;
parse$3.default = parse$3;
Container$2.registerParse(parse$3);
let { isClean, my } = symbols;
let MapGenerator$1 = mapGenerator;
let stringify$2 = stringify_1;
let Container$1 = container;
let Document$2 = document$1;
let warnOnce$1 = warnOnce$2;
let Result$2 = result;
let parse$2 = parse_1;
let Root$3 = root;
const TYPE_TO_CLASS_NAME = {
  atrule: "AtRule",
  comment: "Comment",
  decl: "Declaration",
  document: "Document",
  root: "Root",
  rule: "Rule"
};
const PLUGIN_PROPS = {
  AtRule: true,
  AtRuleExit: true,
  Comment: true,
  CommentExit: true,
  Declaration: true,
  DeclarationExit: true,
  Document: true,
  DocumentExit: true,
  Once: true,
  OnceExit: true,
  postcssPlugin: true,
  prepare: true,
  Root: true,
  RootExit: true,
  Rule: true,
  RuleExit: true
};
const NOT_VISITORS = {
  Once: true,
  postcssPlugin: true,
  prepare: true
};
const CHILDREN = 0;
function isPromise(obj) {
  return typeof obj === "object" && typeof obj.then === "function";
}
function getEvents(node2) {
  let key = false;
  let type = TYPE_TO_CLASS_NAME[node2.type];
  if (node2.type === "decl") {
    key = node2.prop.toLowerCase();
  } else if (node2.type === "atrule") {
    key = node2.name.toLowerCase();
  }
  if (key && node2.append) {
    return [
      type,
      type + "-" + key,
      CHILDREN,
      type + "Exit",
      type + "Exit-" + key
    ];
  } else if (key) {
    return [type, type + "-" + key, type + "Exit", type + "Exit-" + key];
  } else if (node2.append) {
    return [type, CHILDREN, type + "Exit"];
  } else {
    return [type, type + "Exit"];
  }
}
function toStack(node2) {
  let events;
  if (node2.type === "document") {
    events = ["Document", CHILDREN, "DocumentExit"];
  } else if (node2.type === "root") {
    events = ["Root", CHILDREN, "RootExit"];
  } else {
    events = getEvents(node2);
  }
  return {
    eventIndex: 0,
    events,
    iterator: 0,
    node: node2,
    visitorIndex: 0,
    visitors: []
  };
}
function cleanMarks(node2) {
  node2[isClean] = false;
  if (node2.nodes) node2.nodes.forEach((i) => cleanMarks(i));
  return node2;
}
let postcss$2 = {};
let LazyResult$2 = class LazyResult {
  constructor(processor2, css, opts) {
    this.stringified = false;
    this.processed = false;
    let root2;
    if (typeof css === "object" && css !== null && (css.type === "root" || css.type === "document")) {
      root2 = cleanMarks(css);
    } else if (css instanceof LazyResult || css instanceof Result$2) {
      root2 = cleanMarks(css.root);
      if (css.map) {
        if (typeof opts.map === "undefined") opts.map = {};
        if (!opts.map.inline) opts.map.inline = false;
        opts.map.prev = css.map;
      }
    } else {
      let parser2 = parse$2;
      if (opts.syntax) parser2 = opts.syntax.parse;
      if (opts.parser) parser2 = opts.parser;
      if (parser2.parse) parser2 = parser2.parse;
      try {
        root2 = parser2(css, opts);
      } catch (error) {
        this.processed = true;
        this.error = error;
      }
      if (root2 && !root2[my]) {
        Container$1.rebuild(root2);
      }
    }
    this.result = new Result$2(processor2, root2, opts);
    this.helpers = { ...postcss$2, postcss: postcss$2, result: this.result };
    this.plugins = this.processor.plugins.map((plugin2) => {
      if (typeof plugin2 === "object" && plugin2.prepare) {
        return { ...plugin2, ...plugin2.prepare(this.result) };
      } else {
        return plugin2;
      }
    });
  }
  async() {
    if (this.error) return Promise.reject(this.error);
    if (this.processed) return Promise.resolve(this.result);
    if (!this.processing) {
      this.processing = this.runAsync();
    }
    return this.processing;
  }
  catch(onRejected) {
    return this.async().catch(onRejected);
  }
  finally(onFinally) {
    return this.async().then(onFinally, onFinally);
  }
  getAsyncError() {
    throw new Error("Use process(css).then(cb) to work with async plugins");
  }
  handleError(error, node2) {
    let plugin2 = this.result.lastPlugin;
    try {
      if (node2) node2.addToError(error);
      this.error = error;
      if (error.name === "CssSyntaxError" && !error.plugin) {
        error.plugin = plugin2.postcssPlugin;
        error.setMessage();
      } else if (plugin2.postcssVersion) {
        if (true) {
          let pluginName = plugin2.postcssPlugin;
          let pluginVer = plugin2.postcssVersion;
          let runtimeVer = this.result.processor.version;
          let a = pluginVer.split(".");
          let b = runtimeVer.split(".");
          if (a[0] !== b[0] || parseInt(a[1]) > parseInt(b[1])) {
            console.error(
              "Unknown error from PostCSS plugin. Your current PostCSS version is " + runtimeVer + ", but " + pluginName + " uses " + pluginVer + ". Perhaps this is the source of the error below."
            );
          }
        }
      }
    } catch (err) {
      if (console && console.error) console.error(err);
    }
    return error;
  }
  prepareVisitors() {
    this.listeners = {};
    let add = (plugin2, type, cb) => {
      if (!this.listeners[type]) this.listeners[type] = [];
      this.listeners[type].push([plugin2, cb]);
    };
    for (let plugin2 of this.plugins) {
      if (typeof plugin2 === "object") {
        for (let event in plugin2) {
          if (!PLUGIN_PROPS[event] && /^[A-Z]/.test(event)) {
            throw new Error(
              `Unknown event ${event} in ${plugin2.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`
            );
          }
          if (!NOT_VISITORS[event]) {
            if (typeof plugin2[event] === "object") {
              for (let filter in plugin2[event]) {
                if (filter === "*") {
                  add(plugin2, event, plugin2[event][filter]);
                } else {
                  add(
                    plugin2,
                    event + "-" + filter.toLowerCase(),
                    plugin2[event][filter]
                  );
                }
              }
            } else if (typeof plugin2[event] === "function") {
              add(plugin2, event, plugin2[event]);
            }
          }
        }
      }
    }
    this.hasListener = Object.keys(this.listeners).length > 0;
  }
  async runAsync() {
    this.plugin = 0;
    for (let i = 0; i < this.plugins.length; i++) {
      let plugin2 = this.plugins[i];
      let promise = this.runOnRoot(plugin2);
      if (isPromise(promise)) {
        try {
          await promise;
        } catch (error) {
          throw this.handleError(error);
        }
      }
    }
    this.prepareVisitors();
    if (this.hasListener) {
      let root2 = this.result.root;
      while (!root2[isClean]) {
        root2[isClean] = true;
        let stack = [toStack(root2)];
        while (stack.length > 0) {
          let promise = this.visitTick(stack);
          if (isPromise(promise)) {
            try {
              await promise;
            } catch (e) {
              let node2 = stack[stack.length - 1].node;
              throw this.handleError(e, node2);
            }
          }
        }
      }
      if (this.listeners.OnceExit) {
        for (let [plugin2, visitor] of this.listeners.OnceExit) {
          this.result.lastPlugin = plugin2;
          try {
            if (root2.type === "document") {
              let roots = root2.nodes.map(
                (subRoot) => visitor(subRoot, this.helpers)
              );
              await Promise.all(roots);
            } else {
              await visitor(root2, this.helpers);
            }
          } catch (e) {
            throw this.handleError(e);
          }
        }
      }
    }
    this.processed = true;
    return this.stringify();
  }
  runOnRoot(plugin2) {
    this.result.lastPlugin = plugin2;
    try {
      if (typeof plugin2 === "object" && plugin2.Once) {
        if (this.result.root.type === "document") {
          let roots = this.result.root.nodes.map(
            (root2) => plugin2.Once(root2, this.helpers)
          );
          if (isPromise(roots[0])) {
            return Promise.all(roots);
          }
          return roots;
        }
        return plugin2.Once(this.result.root, this.helpers);
      } else if (typeof plugin2 === "function") {
        return plugin2(this.result.root, this.result);
      }
    } catch (error) {
      throw this.handleError(error);
    }
  }
  stringify() {
    if (this.error) throw this.error;
    if (this.stringified) return this.result;
    this.stringified = true;
    this.sync();
    let opts = this.result.opts;
    let str = stringify$2;
    if (opts.syntax) str = opts.syntax.stringify;
    if (opts.stringifier) str = opts.stringifier;
    if (str.stringify) str = str.stringify;
    let map = new MapGenerator$1(str, this.result.root, this.result.opts);
    let data = map.generate();
    this.result.css = data[0];
    this.result.map = data[1];
    return this.result;
  }
  sync() {
    if (this.error) throw this.error;
    if (this.processed) return this.result;
    this.processed = true;
    if (this.processing) {
      throw this.getAsyncError();
    }
    for (let plugin2 of this.plugins) {
      let promise = this.runOnRoot(plugin2);
      if (isPromise(promise)) {
        throw this.getAsyncError();
      }
    }
    this.prepareVisitors();
    if (this.hasListener) {
      let root2 = this.result.root;
      while (!root2[isClean]) {
        root2[isClean] = true;
        this.walkSync(root2);
      }
      if (this.listeners.OnceExit) {
        if (root2.type === "document") {
          for (let subRoot of root2.nodes) {
            this.visitSync(this.listeners.OnceExit, subRoot);
          }
        } else {
          this.visitSync(this.listeners.OnceExit, root2);
        }
      }
    }
    return this.result;
  }
  then(onFulfilled, onRejected) {
    if (true) {
      if (!("from" in this.opts)) {
        warnOnce$1(
          "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
        );
      }
    }
    return this.async().then(onFulfilled, onRejected);
  }
  toString() {
    return this.css;
  }
  visitSync(visitors, node2) {
    for (let [plugin2, visitor] of visitors) {
      this.result.lastPlugin = plugin2;
      let promise;
      try {
        promise = visitor(node2, this.helpers);
      } catch (e) {
        throw this.handleError(e, node2.proxyOf);
      }
      if (node2.type !== "root" && node2.type !== "document" && !node2.parent) {
        return true;
      }
      if (isPromise(promise)) {
        throw this.getAsyncError();
      }
    }
  }
  visitTick(stack) {
    let visit2 = stack[stack.length - 1];
    let { node: node2, visitors } = visit2;
    if (node2.type !== "root" && node2.type !== "document" && !node2.parent) {
      stack.pop();
      return;
    }
    if (visitors.length > 0 && visit2.visitorIndex < visitors.length) {
      let [plugin2, visitor] = visitors[visit2.visitorIndex];
      visit2.visitorIndex += 1;
      if (visit2.visitorIndex === visitors.length) {
        visit2.visitors = [];
        visit2.visitorIndex = 0;
      }
      this.result.lastPlugin = plugin2;
      try {
        return visitor(node2.toProxy(), this.helpers);
      } catch (e) {
        throw this.handleError(e, node2);
      }
    }
    if (visit2.iterator !== 0) {
      let iterator = visit2.iterator;
      let child;
      while (child = node2.nodes[node2.indexes[iterator]]) {
        node2.indexes[iterator] += 1;
        if (!child[isClean]) {
          child[isClean] = true;
          stack.push(toStack(child));
          return;
        }
      }
      visit2.iterator = 0;
      delete node2.indexes[iterator];
    }
    let events = visit2.events;
    while (visit2.eventIndex < events.length) {
      let event = events[visit2.eventIndex];
      visit2.eventIndex += 1;
      if (event === CHILDREN) {
        if (node2.nodes && node2.nodes.length) {
          node2[isClean] = true;
          visit2.iterator = node2.getIterator();
        }
        return;
      } else if (this.listeners[event]) {
        visit2.visitors = this.listeners[event];
        return;
      }
    }
    stack.pop();
  }
  walkSync(node2) {
    node2[isClean] = true;
    let events = getEvents(node2);
    for (let event of events) {
      if (event === CHILDREN) {
        if (node2.nodes) {
          node2.each((child) => {
            if (!child[isClean]) this.walkSync(child);
          });
        }
      } else {
        let visitors = this.listeners[event];
        if (visitors) {
          if (this.visitSync(visitors, node2.toProxy())) return;
        }
      }
    }
  }
  warnings() {
    return this.sync().warnings();
  }
  get content() {
    return this.stringify().content;
  }
  get css() {
    return this.stringify().css;
  }
  get map() {
    return this.stringify().map;
  }
  get messages() {
    return this.sync().messages;
  }
  get opts() {
    return this.result.opts;
  }
  get processor() {
    return this.result.processor;
  }
  get root() {
    return this.sync().root;
  }
  get [Symbol.toStringTag]() {
    return "LazyResult";
  }
};
LazyResult$2.registerPostcss = (dependant) => {
  postcss$2 = dependant;
};
var lazyResult = LazyResult$2;
LazyResult$2.default = LazyResult$2;
Root$3.registerLazyResult(LazyResult$2);
Document$2.registerLazyResult(LazyResult$2);
let MapGenerator2 = mapGenerator;
let stringify$1 = stringify_1;
let warnOnce2 = warnOnce$2;
let parse$1 = parse_1;
const Result$1 = result;
let NoWorkResult$1 = class NoWorkResult {
  constructor(processor2, css, opts) {
    css = css.toString();
    this.stringified = false;
    this._processor = processor2;
    this._css = css;
    this._opts = opts;
    this._map = void 0;
    let root2;
    let str = stringify$1;
    this.result = new Result$1(this._processor, root2, this._opts);
    this.result.css = css;
    let self = this;
    Object.defineProperty(this.result, "root", {
      get() {
        return self.root;
      }
    });
    let map = new MapGenerator2(str, root2, this._opts, css);
    if (map.isMap()) {
      let [generatedCSS, generatedMap] = map.generate();
      if (generatedCSS) {
        this.result.css = generatedCSS;
      }
      if (generatedMap) {
        this.result.map = generatedMap;
      }
    } else {
      map.clearAnnotation();
      this.result.css = map.css;
    }
  }
  async() {
    if (this.error) return Promise.reject(this.error);
    return Promise.resolve(this.result);
  }
  catch(onRejected) {
    return this.async().catch(onRejected);
  }
  finally(onFinally) {
    return this.async().then(onFinally, onFinally);
  }
  sync() {
    if (this.error) throw this.error;
    return this.result;
  }
  then(onFulfilled, onRejected) {
    if (true) {
      if (!("from" in this._opts)) {
        warnOnce2(
          "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
        );
      }
    }
    return this.async().then(onFulfilled, onRejected);
  }
  toString() {
    return this._css;
  }
  warnings() {
    return [];
  }
  get content() {
    return this.result.css;
  }
  get css() {
    return this.result.css;
  }
  get map() {
    return this.result.map;
  }
  get messages() {
    return [];
  }
  get opts() {
    return this.result.opts;
  }
  get processor() {
    return this.result.processor;
  }
  get root() {
    if (this._root) {
      return this._root;
    }
    let root2;
    let parser2 = parse$1;
    try {
      root2 = parser2(this._css, this._opts);
    } catch (error) {
      this.error = error;
    }
    if (this.error) {
      throw this.error;
    } else {
      this._root = root2;
      return root2;
    }
  }
  get [Symbol.toStringTag]() {
    return "NoWorkResult";
  }
};
var noWorkResult = NoWorkResult$1;
NoWorkResult$1.default = NoWorkResult$1;
let NoWorkResult2 = noWorkResult;
let LazyResult$1 = lazyResult;
let Document$1 = document$1;
let Root$2 = root;
let Processor$1 = class Processor {
  constructor(plugins = []) {
    this.version = "8.4.38";
    this.plugins = this.normalize(plugins);
  }
  normalize(plugins) {
    let normalized = [];
    for (let i of plugins) {
      if (i.postcss === true) {
        i = i();
      } else if (i.postcss) {
        i = i.postcss;
      }
      if (typeof i === "object" && Array.isArray(i.plugins)) {
        normalized = normalized.concat(i.plugins);
      } else if (typeof i === "object" && i.postcssPlugin) {
        normalized.push(i);
      } else if (typeof i === "function") {
        normalized.push(i);
      } else if (typeof i === "object" && (i.parse || i.stringify)) {
        if (true) {
          throw new Error(
            "PostCSS syntaxes cannot be used as plugins. Instead, please use one of the syntax/parser/stringifier options as outlined in your PostCSS runner documentation."
          );
        }
      } else {
        throw new Error(i + " is not a PostCSS plugin");
      }
    }
    return normalized;
  }
  process(css, opts = {}) {
    if (!this.plugins.length && !opts.parser && !opts.stringifier && !opts.syntax) {
      return new NoWorkResult2(this, css, opts);
    } else {
      return new LazyResult$1(this, css, opts);
    }
  }
  use(plugin2) {
    this.plugins = this.plugins.concat(this.normalize([plugin2]));
    return this;
  }
};
var processor = Processor$1;
Processor$1.default = Processor$1;
Root$2.registerProcessor(Processor$1);
Document$1.registerProcessor(Processor$1);
let Declaration$1 = declaration;
let PreviousMap2 = previousMap;
let Comment$1 = comment;
let AtRule$1 = atRule;
let Input$1 = input;
let Root$1 = root;
let Rule$1 = rule;
function fromJSON$1(json, inputs) {
  if (Array.isArray(json)) return json.map((n) => fromJSON$1(n));
  let { inputs: ownInputs, ...defaults } = json;
  if (ownInputs) {
    inputs = [];
    for (let input2 of ownInputs) {
      let inputHydrated = { ...input2, __proto__: Input$1.prototype };
      if (inputHydrated.map) {
        inputHydrated.map = {
          ...inputHydrated.map,
          __proto__: PreviousMap2.prototype
        };
      }
      inputs.push(inputHydrated);
    }
  }
  if (defaults.nodes) {
    defaults.nodes = json.nodes.map((n) => fromJSON$1(n, inputs));
  }
  if (defaults.source) {
    let { inputId, ...source } = defaults.source;
    defaults.source = source;
    if (inputId != null) {
      defaults.source.input = inputs[inputId];
    }
  }
  if (defaults.type === "root") {
    return new Root$1(defaults);
  } else if (defaults.type === "decl") {
    return new Declaration$1(defaults);
  } else if (defaults.type === "rule") {
    return new Rule$1(defaults);
  } else if (defaults.type === "comment") {
    return new Comment$1(defaults);
  } else if (defaults.type === "atrule") {
    return new AtRule$1(defaults);
  } else {
    throw new Error("Unknown node type: " + json.type);
  }
}
var fromJSON_1 = fromJSON$1;
fromJSON$1.default = fromJSON$1;
let CssSyntaxError2 = cssSyntaxError;
let Declaration2 = declaration;
let LazyResult2 = lazyResult;
let Container2 = container;
let Processor2 = processor;
let stringify = stringify_1;
let fromJSON = fromJSON_1;
let Document2 = document$1;
let Warning2 = warning;
let Comment2 = comment;
let AtRule2 = atRule;
let Result2 = result;
let Input2 = input;
let parse = parse_1;
let list = list_1;
let Rule2 = rule;
let Root2 = root;
let Node2 = node;
function postcss(...plugins) {
  if (plugins.length === 1 && Array.isArray(plugins[0])) {
    plugins = plugins[0];
  }
  return new Processor2(plugins);
}
postcss.plugin = function plugin(name, initializer) {
  let warningPrinted = false;
  function creator(...args) {
    if (console && console.warn && !warningPrinted) {
      warningPrinted = true;
      console.warn(
        name + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration"
      );
      if (process.env.LANG && process.env.LANG.startsWith("cn")) {
        console.warn(
          name + ": 里面 postcss.plugin 被弃用. 迁移指南:\nhttps://www.w3ctech.com/topic/2226"
        );
      }
    }
    let transformer = initializer(...args);
    transformer.postcssPlugin = name;
    transformer.postcssVersion = new Processor2().version;
    return transformer;
  }
  let cache;
  Object.defineProperty(creator, "postcss", {
    get() {
      if (!cache) cache = creator();
      return cache;
    }
  });
  creator.process = function(css, processOpts, pluginOpts) {
    return postcss([creator(pluginOpts)]).process(css, processOpts);
  };
  return creator;
};
postcss.stringify = stringify;
postcss.parse = parse;
postcss.fromJSON = fromJSON;
postcss.list = list;
postcss.comment = (defaults) => new Comment2(defaults);
postcss.atRule = (defaults) => new AtRule2(defaults);
postcss.decl = (defaults) => new Declaration2(defaults);
postcss.rule = (defaults) => new Rule2(defaults);
postcss.root = (defaults) => new Root2(defaults);
postcss.document = (defaults) => new Document2(defaults);
postcss.CssSyntaxError = CssSyntaxError2;
postcss.Declaration = Declaration2;
postcss.Container = Container2;
postcss.Processor = Processor2;
postcss.Document = Document2;
postcss.Comment = Comment2;
postcss.Warning = Warning2;
postcss.AtRule = AtRule2;
postcss.Result = Result2;
postcss.Input = Input2;
postcss.Rule = Rule2;
postcss.Root = Root2;
postcss.Node = Node2;
LazyResult2.registerPostcss(postcss);
var postcss_1 = postcss;
postcss.default = postcss;
const postcss$1 = /* @__PURE__ */ getDefaultExportFromCjs(postcss_1);
postcss$1.stringify;
postcss$1.fromJSON;
postcss$1.plugin;
postcss$1.parse;
postcss$1.list;
postcss$1.document;
postcss$1.comment;
postcss$1.atRule;
postcss$1.rule;
postcss$1.decl;
postcss$1.root;
postcss$1.CssSyntaxError;
postcss$1.Declaration;
postcss$1.Container;
postcss$1.Processor;
postcss$1.Document;
postcss$1.Comment;
postcss$1.Warning;
postcss$1.AtRule;
postcss$1.Result;
postcss$1.Input;
postcss$1.Rule;
postcss$1.Root;
postcss$1.Node;
const tagMap = {
  script: "noscript",
  // camel case svg element tag names
  altglyph: "altGlyph",
  altglyphdef: "altGlyphDef",
  altglyphitem: "altGlyphItem",
  animatecolor: "animateColor",
  animatemotion: "animateMotion",
  animatetransform: "animateTransform",
  clippath: "clipPath",
  feblend: "feBlend",
  fecolormatrix: "feColorMatrix",
  fecomponenttransfer: "feComponentTransfer",
  fecomposite: "feComposite",
  feconvolvematrix: "feConvolveMatrix",
  fediffuselighting: "feDiffuseLighting",
  fedisplacementmap: "feDisplacementMap",
  fedistantlight: "feDistantLight",
  fedropshadow: "feDropShadow",
  feflood: "feFlood",
  fefunca: "feFuncA",
  fefuncb: "feFuncB",
  fefuncg: "feFuncG",
  fefuncr: "feFuncR",
  fegaussianblur: "feGaussianBlur",
  feimage: "feImage",
  femerge: "feMerge",
  femergenode: "feMergeNode",
  femorphology: "feMorphology",
  feoffset: "feOffset",
  fepointlight: "fePointLight",
  fespecularlighting: "feSpecularLighting",
  fespotlight: "feSpotLight",
  fetile: "feTile",
  feturbulence: "feTurbulence",
  foreignobject: "foreignObject",
  glyphref: "glyphRef",
  lineargradient: "linearGradient",
  radialgradient: "radialGradient"
};
function getTagName(n) {
  let tagName = tagMap[n.tagName] ? tagMap[n.tagName] : n.tagName;
  if (tagName === "link" && n.attributes._cssText) {
    tagName = "style";
  }
  return tagName;
}
function adaptCssForReplay(cssText, cache) {
  const cachedStyle = cache == null ? void 0 : cache.stylesWithHoverClass.get(cssText);
  if (cachedStyle) return cachedStyle;
  const ast = postcss$1([
    mediaSelectorPlugin,
    pseudoClassPlugin
  ]).process(cssText);
  const result2 = ast.css;
  cache == null ? void 0 : cache.stylesWithHoverClass.set(cssText, result2);
  return result2;
}
function createCache() {
  const stylesWithHoverClass = /* @__PURE__ */ new Map();
  return {
    stylesWithHoverClass
  };
}
function applyCssSplits(n, cssText, hackCss, cache) {
  const childTextNodes = [];
  for (const scn of n.childNodes) {
    if (scn.type === NodeType.Text) {
      childTextNodes.push(scn);
    }
  }
  const cssTextSplits = cssText.split("/* rr_split */");
  while (cssTextSplits.length > 1 && cssTextSplits.length > childTextNodes.length) {
    cssTextSplits.splice(-2, 2, cssTextSplits.slice(-2).join(""));
  }
  for (let i = 0; i < childTextNodes.length; i++) {
    const childTextNode = childTextNodes[i];
    const cssTextSection = cssTextSplits[i];
    if (childTextNode && cssTextSection) {
      childTextNode.textContent = hackCss ? adaptCssForReplay(cssTextSection, cache) : cssTextSection;
    }
  }
}
function buildStyleNode(n, styleEl, cssText, options) {
  const { doc, hackCss, cache } = options;
  if (n.childNodes.length) {
    applyCssSplits(n, cssText, hackCss, cache);
  } else {
    if (hackCss) {
      cssText = adaptCssForReplay(cssText, cache);
    }
    styleEl.appendChild(doc.createTextNode(cssText));
  }
}
function buildNode(n, options) {
  var _a, _b;
  const { doc, hackCss, cache } = options;
  switch (n.type) {
    case NodeType.Document:
      return doc.implementation.createDocument(null, "", null);
    case NodeType.DocumentType:
      return doc.implementation.createDocumentType(
        n.name || "html",
        n.publicId,
        n.systemId
      );
    case NodeType.Element: {
      const tagName = getTagName(n);
      let node2;
      if (n.isSVG) {
        node2 = doc.createElementNS("http://www.w3.org/2000/svg", tagName);
      } else {
        if (
          // If the tag name is a custom element name
          n.isCustom && // If the browser supports custom elements
          ((_a = doc.defaultView) == null ? void 0 : _a.customElements) && // If the custom element hasn't been defined yet
          !doc.defaultView.customElements.get(n.tagName)
        )
          doc.defaultView.customElements.define(
            n.tagName,
            class extends doc.defaultView.HTMLElement {
            }
          );
        node2 = doc.createElement(tagName);
      }
      const specialAttributes = {};
      for (const name in n.attributes) {
        if (!Object.prototype.hasOwnProperty.call(n.attributes, name)) {
          continue;
        }
        let value = n.attributes[name];
        if (tagName === "option" && name === "selected" && value === false) {
          continue;
        }
        if (value === null) {
          continue;
        }
        if (value === true) value = "";
        if (name.startsWith("rr_")) {
          specialAttributes[name] = value;
          continue;
        }
        if (typeof value !== "string") ;
        else if (tagName === "style" && name === "_cssText") {
          buildStyleNode(n, node2, value, options);
          continue;
        } else if (tagName === "textarea" && name === "value") {
          node2.appendChild(doc.createTextNode(value));
          n.childNodes = [];
          continue;
        }
        try {
          if (n.isSVG && name === "xlink:href") {
            node2.setAttributeNS(
              "http://www.w3.org/1999/xlink",
              name,
              value.toString()
            );
          } else if (name === "onload" || name === "onclick" || name.substring(0, 7) === "onmouse") {
            node2.setAttribute("_" + name, value.toString());
          } else if (tagName === "meta" && n.attributes["http-equiv"] === "Content-Security-Policy" && name === "content") {
            node2.setAttribute("csp-content", value.toString());
            continue;
          } else if (tagName === "link" && (n.attributes.rel === "preload" || n.attributes.rel === "modulepreload") && n.attributes.as === "script") {
          } else if (tagName === "link" && n.attributes.rel === "prefetch" && typeof n.attributes.href === "string" && n.attributes.href.endsWith(".js")) {
          } else if (tagName === "img" && n.attributes.srcset && n.attributes.rr_dataURL) {
            node2.setAttribute(
              "rrweb-original-srcset",
              n.attributes.srcset
            );
          } else {
            node2.setAttribute(name, value.toString());
          }
        } catch (error) {
        }
      }
      for (const name in specialAttributes) {
        const value = specialAttributes[name];
        if (tagName === "canvas" && name === "rr_dataURL") {
          const image = doc.createElement("img");
          image.onload = () => {
            const ctx = node2.getContext("2d");
            if (ctx) {
              ctx.drawImage(image, 0, 0, image.width, image.height);
            }
          };
          image.src = value.toString();
          if (node2.RRNodeType)
            node2.rr_dataURL = value.toString();
        } else if (tagName === "img" && name === "rr_dataURL") {
          const image = node2;
          if (!image.currentSrc.startsWith("data:")) {
            image.setAttribute(
              "rrweb-original-src",
              n.attributes.src
            );
            image.src = value.toString();
          }
        }
        if (name === "rr_width") {
          node2.style.width = value.toString();
        } else if (name === "rr_height") {
          node2.style.height = value.toString();
        } else if (name === "rr_mediaCurrentTime" && typeof value === "number") {
          node2.currentTime = value;
        } else if (name === "rr_mediaState") {
          switch (value) {
            case "played":
              node2.play().catch((e) => console.warn("media playback error", e));
              break;
            case "paused":
              node2.pause();
              break;
          }
        } else if (name === "rr_mediaPlaybackRate" && typeof value === "number") {
          node2.playbackRate = value;
        } else if (name === "rr_mediaMuted" && typeof value === "boolean") {
          node2.muted = value;
        } else if (name === "rr_mediaLoop" && typeof value === "boolean") {
          node2.loop = value;
        } else if (name === "rr_mediaVolume" && typeof value === "number") {
          node2.volume = value;
        } else if (name === "rr_open_mode") {
          node2.setAttribute(
            "rr_open_mode",
            value
          );
        }
      }
      if (n.isShadowHost) {
        if (!node2.shadowRoot) {
          node2.attachShadow({ mode: "open" });
          (_b = n.chromaticAdoptedStylesheets) == null ? void 0 : _b.forEach(
            (chromaticAdoptedStylesheet) => {
              var _a2;
              const styleSheet = new CSSStyleSheet();
              styleSheet.replaceSync(chromaticAdoptedStylesheet);
              (_a2 = node2.shadowRoot) == null ? void 0 : _a2.adoptedStyleSheets.push(styleSheet);
            }
          );
        } else {
          while (node2.shadowRoot.firstChild) {
            node2.shadowRoot.removeChild(node2.shadowRoot.firstChild);
          }
        }
      }
      return node2;
    }
    case NodeType.Text:
      if (n.isStyle && hackCss) {
        return doc.createTextNode(adaptCssForReplay(n.textContent, cache));
      }
      return doc.createTextNode(n.textContent);
    case NodeType.CDATA:
      return doc.createCDATASection(n.textContent);
    case NodeType.Comment:
      return doc.createComment(n.textContent);
    default:
      return null;
  }
}
function buildNodeWithSN(n, options) {
  const {
    doc,
    mirror,
    skipChild = false,
    hackCss = true,
    afterAppend,
    cache
  } = options;
  if (mirror.has(n.id)) {
    const nodeInMirror = mirror.getNode(n.id);
    const meta = mirror.getMeta(nodeInMirror);
    if (isNodeMetaEqual(meta, n)) return mirror.getNode(n.id);
  }
  let node2 = buildNode(n, { doc, hackCss, cache });
  if (!node2) {
    return null;
  }
  if (n.rootId && mirror.getNode(n.rootId) !== doc) {
    mirror.replace(n.rootId, doc);
  }
  if (n.type === NodeType.Document) {
    doc.close();
    doc.open();
    if (n.compatMode === "BackCompat" && n.childNodes && n.childNodes[0].type !== NodeType.DocumentType) {
      if (n.childNodes[0].type === NodeType.Element && "xmlns" in n.childNodes[0].attributes && n.childNodes[0].attributes.xmlns === "http://www.w3.org/1999/xhtml") {
        doc.write(
          '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">'
        );
      } else {
        doc.write(
          '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">'
        );
      }
    }
    node2 = doc;
  }
  mirror.add(node2, n);
  if ((n.type === NodeType.Document || n.type === NodeType.Element) && !skipChild) {
    for (const childN of n.childNodes) {
      const childNode = buildNodeWithSN(childN, {
        doc,
        mirror,
        skipChild: false,
        hackCss,
        afterAppend,
        cache
      });
      if (!childNode) {
        console.warn("Failed to rebuild", childN);
        continue;
      }
      if (childN.isShadow && isElement(node2) && node2.shadowRoot) {
        node2.shadowRoot.appendChild(childNode);
      } else if (n.type === NodeType.Document && childN.type == NodeType.Element) {
        const htmlElement = childNode;
        let body = null;
        htmlElement.childNodes.forEach((child) => {
          if (child.nodeName === "BODY") body = child;
        });
        if (body) {
          htmlElement.removeChild(body);
          node2.appendChild(childNode);
          htmlElement.appendChild(body);
        } else {
          node2.appendChild(childNode);
        }
      } else {
        node2.appendChild(childNode);
      }
      if (afterAppend) {
        afterAppend(childNode, childN.id);
      }
    }
  }
  return node2;
}
function visit(mirror, onVisit) {
  function walk(node2) {
    onVisit(node2);
  }
  for (const id of mirror.getIds()) {
    if (mirror.has(id)) {
      walk(mirror.getNode(id));
    }
  }
}
function handleScroll(node2, mirror) {
  const n = mirror.getMeta(node2);
  if ((n == null ? void 0 : n.type) !== NodeType.Element) {
    return;
  }
  const el = node2;
  for (const name in n.attributes) {
    if (!(Object.prototype.hasOwnProperty.call(n.attributes, name) && name.startsWith("rr_"))) {
      continue;
    }
    const value = n.attributes[name];
    if (name === "rr_scrollLeft") {
      el.scrollLeft = value;
    }
    if (name === "rr_scrollTop") {
      el.scrollTop = value;
    }
  }
}
function rebuild(n, options) {
  const {
    doc,
    onVisit,
    hackCss = true,
    afterAppend,
    cache,
    mirror = new Mirror()
  } = options;
  const node2 = buildNodeWithSN(n, {
    doc,
    mirror,
    skipChild: false,
    hackCss,
    afterAppend,
    cache
  });
  visit(mirror, (visitedNode) => {
    if (onVisit) {
      onVisit(visitedNode);
    }
    handleScroll(visitedNode, mirror);
  });
  return node2;
}

//# sourceMappingURL=rrweb-snapshot.js.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************************!*\
  !*** ./cypress/support/e2e.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _commands__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commands */ "./cypress/support/commands.ts");
/* harmony import */ var _commands__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_commands__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chromatic_com_cypress_support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chromatic-com/cypress/support */ "./node_modules/.pnpm/@chromatic-com+cypress@0.8.0_esbuild@0.23.1_typescript@5.6.2_webpack-sources@3.2.3/node_modules/@chromatic-com/cypress/dist/support.mjs");
// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
// Import commands.js using ES2015 syntax:

// Alternatively you can use CommonJS syntax:
// require('./commands')


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZTJlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFvRDs7QUFFcEQsd0NBQXdDLHlEQUF5RCxNQUFNLGtFQUFRLElBQUksMENBQTBDLGtCQUFrQiwwQkFBMEIsR0FBRyxFQUFFLGdCQUFnQixnR0FBZ0cseUNBQXlDLDRDQUE0QyxJQUFJLEVBQUUsZUFBZSx5REFBeUQsOENBQThDLFNBQVMsa0VBQVEsSUFBSSxFQUFFLHlDQUF5QyxrQkFBa0IsMkJBQTJCLGdDQUFnQyxzSUFBc0ksa0NBQWtDLDJDQUEyQywyQkFBMkIsMkJBQTJCLDZDQUE2QywrREFBK0QsbUNBQW1DLDJDQUEyQyxrQ0FBa0MseUNBQXlDLHlDQUF5Qyx1REFBdUQsMENBQTBDLHlEQUF5RCxvQ0FBb0MsNkNBQTZDLHFDQUFxQyxnREFBZ0QscUJBQXFCLDhFQUE4RSw4Q0FBOEMsR0FBRyxHQUFHLEdBQUcsR0FBRztBQUNockQ7QUFDQTs7Ozs7Ozs7Ozs7QUNKWTs7QUFFWixrQkFBa0I7QUFDbEIsbUJBQW1CO0FBQ25CLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsU0FBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJDQUEyQyxVQUFVO0FBQ3JEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3JKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFWTs7QUFFWixhQUFhLG1CQUFPLENBQUMsdUZBQVc7QUFDaEMsY0FBYyxtQkFBTyxDQUFDLGlGQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWM7QUFDZCxrQkFBa0I7QUFDbEIseUJBQXlCOztBQUV6QjtBQUNBLGtCQUFrQjs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG1CQUFtQjtBQUNyQztBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixZQUFZO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxpQkFBaUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsU0FBUztBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaURBQWlELEVBQUU7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQixTQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZUFBZTtBQUN4QztBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSx5QkFBeUIsUUFBUTtBQUNqQztBQUNBLHNCQUFzQixlQUFlO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFlBQVk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixTQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsU0FBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsU0FBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixzQkFBc0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUI7QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLFlBQVk7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixnQkFBZ0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsZ0JBQWdCO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixZQUFZO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsUUFBUTtBQUMxQjtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7QUN4eEREO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUyxXQUFXOztBQUVwQjtBQUNBO0FBQ0E7QUFDQSxTQUFTLFdBQVc7O0FBRXBCO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVMsV0FBVzs7QUFFcEI7QUFDQTtBQUNBLFNBQVMsVUFBVTs7QUFFbkI7QUFDQTs7Ozs7Ozs7Ozs7QUNwRkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixzQkFBc0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNDQUFzQzs7QUFFdEM7QUFDQTtBQUNBOztBQUVBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7Ozs7Ozs7Ozs7Ozs7QUN2TDdCLGlDQUFpQztBQUNqQyxrREFBa0Q7QUFDbEQsNENBQTRDO0FBQzVDLCtDQUErQztBQUMvQyxxQkFBcUI7QUFDckIsRUFBRTtBQUNGLDRDQUE0QztBQUM1QyxrQ0FBa0M7QUFDbEMsd0NBQXdDO0FBQ3hDLGtEQUFrRDtBQUNsRCxFQUFFO0FBQ0YsRUFBRTtBQUNGLGlDQUFpQztBQUNqQyw4REFBOEQ7QUFDOUQsRUFBRTtBQUNGLEVBQUU7QUFDRixnQ0FBZ0M7QUFDaEMseUZBQXlGO0FBQ3pGLEVBQUU7QUFDRixFQUFFO0FBQ0YsK0JBQStCO0FBQy9CLDZGQUE2RjtBQUM3RixFQUFFO0FBQ0YsRUFBRTtBQUNGLGdEQUFnRDtBQUNoRCw2RUFBNkU7QUFDN0UsRUFBRTtBQUNGLG1CQUFtQjtBQUNuQix3QkFBd0I7QUFDeEIsNEJBQTRCO0FBQzVCLGdFQUFnRTtBQUNoRSxrRkFBa0Y7QUFDbEYscUZBQXFGO0FBQ3JGLDhHQUE4RztBQUM5RyxRQUFRO0FBQ1IsTUFBTTtBQUNOLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENKO0FBQ0EsOEVBQThFLDZEQUE2RDtBQUMzSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdCQUFnQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixJQUFJLEdBQUcsaUJBQWlCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixJQUFJLEdBQUcsZUFBZTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyx3REFBd0Q7QUFDdkc7QUFDQSxpQ0FBaUM7QUFDakMsdUNBQXVDLHNCQUFzQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxVQUFVO0FBQ3BCO0FBQ0EsdUNBQXVDLDJCQUEyQjtBQUNsRTtBQUNBO0FBQ0EsSUFBSTtBQUNKLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBLCtCQUErQixtQkFBbUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBbUI7QUFDdEMsb0JBQW9CLG1CQUFtQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixXQUFXLEVBQUUsU0FBUyxFQUFFLFdBQVc7QUFDekQ7QUFDQTtBQUNBLHNCQUFzQixXQUFXLEVBQUUsU0FBUyxFQUFFLFdBQVc7QUFDekQ7QUFDQTtBQUNBLHNCQUFzQixXQUFXLEVBQUUsK0JBQStCLEVBQUUsV0FBVztBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsV0FBVyxFQUFFLGdCQUFnQixFQUFFLFdBQVc7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHdCQUF3QjtBQUM1QztBQUNBO0FBQ0Esd0JBQXdCLDRCQUE0QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msb0JBQW9CO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLGtEQUFrRCxVQUFVO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsVUFBVTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixjQUFjO0FBQ3pDLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsNkNBQTZDO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixTQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLHFDQUFxQyxTQUFTLFdBQVcsSUFBSTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksZ0JBQWdCO0FBQzVCO0FBQ0E7QUFDQSxtQkFBbUIsTUFBTTtBQUN6QixvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixRQUFRLFlBQVk7QUFDcEIsUUFBUSw0QkFBNEI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLDBEQUEwRCxJQUFJO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osMkNBQTJDLGFBQWE7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyx3QkFBd0IsaUJBQWlCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxrQkFBa0I7QUFDOUI7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTiw0REFBNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixjQUFjO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix3QkFBd0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwrQkFBK0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxFQUFFO0FBQzlDO0FBQ0E7QUFDQSxjQUFjLEVBQUU7QUFDaEIsYUFBYSxhQUFhLEdBQUcsYUFBYSxHQUFHLGVBQWU7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBLFlBQVksYUFBYTtBQUN6QjtBQUNBO0FBQ0EsVUFBVSx3Q0FBd0M7QUFDbEQsVUFBVSxvQ0FBb0M7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLE1BQU0sbUZBQW1GO0FBQ3pGLE1BQU0sMkJBQTJCO0FBQ2pDLE1BQU0sMkJBQTJCO0FBQ2pDO0FBQ0EsTUFBTSxNQUFNO0FBQ1osV0FBVyxNQUFNO0FBQ2pCLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGVBQWU7QUFDakUsMkNBQTJDO0FBQzNDLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxtRkFBbUY7QUFDekYsTUFBTSxnREFBZ0Q7QUFDdEQsTUFBTSxpQ0FBaUM7QUFDdkMsTUFBTSxTQUFTO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQSwwQ0FBMEMsS0FBSztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCwwQ0FBMEM7QUFDOUYsc0RBQXNELGdEQUFnRDtBQUN0RztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0Esc0NBQXNDLGNBQWM7QUFDcEQsd0NBQXdDLGtDQUFrQztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsT0FBTztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLGtDQUFrQztBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sd0NBQXdDO0FBQzlDLE1BQU0sa0NBQWtDO0FBQ3hDLE1BQU0sZ0JBQWdCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EscUJBQXFCLG9CQUFvQjtBQUN6QyxvQkFBb0Isb0JBQW9CO0FBQ3hDO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG9CQUFvQjtBQUN2QyxrQkFBa0Isb0JBQW9CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsTUFBTTtBQUNkLGFBQWEsTUFBTTtBQUNuQixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sK0JBQStCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLCtCQUErQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixzQkFBc0I7QUFDdEIsb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxPQUFPO0FBQzNDLHVDQUF1QyxRQUFRO0FBQy9DO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFFBQVE7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsd0JBQXdCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9CQUFvQjtBQUM1Qix3QkFBd0I7QUFDeEIsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsb0JBQW9CO0FBQzlCO0FBQ0E7QUFDQSxVQUFVLG9CQUFvQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixRQUFRO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFFBQVE7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtCQUFrQjtBQUMxQixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0NBQStDO0FBQ3ZEO0FBQ0Esd0JBQXdCO0FBQ3hCLFFBQVE7QUFDUix1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxVQUFVLG9CQUFvQjtBQUM5QjtBQUNBO0FBQ0EsVUFBVSxvQkFBb0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvQkFBb0I7QUFDNUIsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLFFBQVEsa0JBQWtCO0FBQzFCLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzQkFBc0I7QUFDOUIsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtCQUFrQjtBQUMxQixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTtBQUNBLGdGQUFnRjtBQUNoRixVQUFVO0FBQ1YsZ0ZBQWdGO0FBQ2hGLFVBQVU7QUFDVixnRkFBZ0Y7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGNBQWM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLFlBQVksSUFBcUM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixPQUFPLEtBQUssc0JBQXNCLDJCQUEyQix3QkFBd0I7QUFDcEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IseUJBQXlCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHdCQUF3QjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSLFlBQVksSUFBcUM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUNBQWlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUscUJBQXFCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxPQUFPLGFBQWEsT0FBTztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxzQkFBc0I7QUFDaEM7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxzQkFBc0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxZQUFZO0FBQ1osWUFBWTtBQUNaLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixjQUFjO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixxQkFBcUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQXNDRTtBQUNGOzs7Ozs7O1VDNXlLQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTkEsOERBQThEO0FBQzlELCtDQUErQztBQUMvQywrQ0FBK0M7QUFDL0MsRUFBRTtBQUNGLHdEQUF3RDtBQUN4RCxrQ0FBa0M7QUFDbEMsRUFBRTtBQUNGLHVEQUF1RDtBQUN2RCwrQ0FBK0M7QUFDL0Msc0NBQXNDO0FBQ3RDLEVBQUU7QUFDRiwwQkFBMEI7QUFDMUIsc0NBQXNDO0FBQ3RDLDhEQUE4RDtBQUU5RCwwQ0FBMEM7QUFDdEI7QUFFcEIsNkNBQTZDO0FBQzdDLHdCQUF3QjtBQUNnQiIsInNvdXJjZXMiOlsid2VicGFjazovL2N5cHJlc3MtdGVzdC8uL25vZGVfbW9kdWxlcy8ucG5wbS9AY2hyb21hdGljLWNvbStjeXByZXNzQDAuOC4wX2VzYnVpbGRAMC4yMy4xX3R5cGVzY3JpcHRANS42LjJfd2VicGFjay1zb3VyY2VzQDMuMi4zL25vZGVfbW9kdWxlcy9AY2hyb21hdGljLWNvbS9jeXByZXNzL2Rpc3Qvc3VwcG9ydC5tanMiLCJ3ZWJwYWNrOi8vY3lwcmVzcy10ZXN0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL2Jhc2U2NC1qc0AxLjUuMS9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2luZGV4LmpzIiwid2VicGFjazovL2N5cHJlc3MtdGVzdC8uL25vZGVfbW9kdWxlcy8ucG5wbS9idWZmZXJANS43LjEvbm9kZV9tb2R1bGVzL2J1ZmZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9jeXByZXNzLXRlc3QvLi9ub2RlX21vZHVsZXMvLnBucG0vaWVlZTc1NEAxLjIuMS9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qcyIsIndlYnBhY2s6Ly9jeXByZXNzLXRlc3QvLi4vLi4vTGlicmFyeS9DYWNoZXMvQ3lwcmVzcy8xMy4xNS4wL0N5cHJlc3MuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9jeXByZXNzLXRlc3QvLi9jeXByZXNzL3N1cHBvcnQvY29tbWFuZHMudHMiLCJ3ZWJwYWNrOi8vY3lwcmVzcy10ZXN0Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL0BjaHJvbWF1aStycndlYi1zbmFwc2hvdEAyLjAuMC1hbHBoYS4xNy1ub0Fic29sdXRlX3lwZzR4bGFqa2JlczRjcWt0MzY0ZWtqa2NxL25vZGVfbW9kdWxlcy9AY2hyb21hdWkvcnJ3ZWItc25hcHNob3QvZGlzdC9ycndlYi1zbmFwc2hvdC5qcyIsIndlYnBhY2s6Ly9jeXByZXNzLXRlc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY3lwcmVzcy10ZXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2N5cHJlc3MtdGVzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY3lwcmVzcy10ZXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY3lwcmVzcy10ZXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY3lwcmVzcy10ZXN0Ly4vY3lwcmVzcy9zdXBwb3J0L2UyZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzbmFwc2hvdCB9IGZyb20gJ0BjaHJvbWF1aS9ycndlYi1zbmFwc2hvdCc7XG5cbkN5cHJlc3MuQ29tbWFuZHMuYWRkKFwidGFrZVNuYXBzaG90XCIsZT0+e0N5cHJlc3MuY29uZmlnKFwiaXNUZXh0VGVybWluYWxcIikmJmN5LmRvY3VtZW50KCkudGhlbihzPT57bGV0IHI9c25hcHNob3Qocyk7Y3kuZ2V0KFwiQG1hbnVhbFNuYXBzaG90c1wiKS50aGVuKG89PlsuLi5vLHtuYW1lOmUsc25hcHNob3Q6cn1dKS5hcyhcIm1hbnVhbFNuYXBzaG90c1wiKTt9KTt9KTtiZWZvcmVFYWNoKCgpPT57Q3lwcmVzcy5jb25maWcoXCJpc1RleHRUZXJtaW5hbFwiKSYmKGN5LndyYXAoW10pLmFzKFwibWFudWFsU25hcHNob3RzXCIpLGN5LnRhc2soXCJwcmVwYXJlQXJjaGl2ZXNcIix7YWN0aW9uOlwic2V0dXAtbmV0d29yay1saXN0ZW5lclwiLHBheWxvYWQ6e2FsbG93ZWREb21haW5zOkN5cHJlc3MuZW52KFwiYXNzZXREb21haW5zXCIpfX0pKTt9KTthZnRlckVhY2goKCk9PntDeXByZXNzLmNvbmZpZyhcImlzVGV4dFRlcm1pbmFsXCIpJiZjeS5kb2N1bWVudCgpLnRoZW4oZT0+e2xldCBzPUN5cHJlc3MuZW52KFwiZGlzYWJsZUF1dG9TbmFwc2hvdFwiKT9bXTpbe3NuYXBzaG90OnNuYXBzaG90KGUpfV07Y3kuZ2V0KFwiQG1hbnVhbFNuYXBzaG90c1wiKS50aGVuKChyPVtdKT0+e2N5LnVybCgpLnRoZW4obz0+e2N5LnRhc2soXCJwcmVwYXJlQXJjaGl2ZXNcIix7YWN0aW9uOlwic2F2ZS1hcmNoaXZlc1wiLHBheWxvYWQ6e3Rlc3RUaXRsZVBhdGg6W0N5cHJlc3Muc3BlYy5yZWxhdGl2ZVRvQ29tbW9uUm9vdCwuLi5DeXByZXNzLmN1cnJlbnRUZXN0LnRpdGxlUGF0aF0sZG9tU25hcHNob3RzOlsuLi5yLC4uLnNdLGNocm9tYXRpY1N0b3J5Ym9va1BhcmFtczp7Li4uQ3lwcmVzcy5lbnYoXCJkaWZmVGhyZXNob2xkXCIpJiZ7ZGlmZlRocmVzaG9sZDpDeXByZXNzLmVudihcImRpZmZUaHJlc2hvbGRcIil9LC4uLkN5cHJlc3MuZW52KFwiZGVsYXlcIikmJntkZWxheTpDeXByZXNzLmVudihcImRlbGF5XCIpfSwuLi5DeXByZXNzLmVudihcImRpZmZJbmNsdWRlQW50aUFsaWFzaW5nXCIpJiZ7ZGlmZkluY2x1ZGVBbnRpQWxpYXNpbmc6Q3lwcmVzcy5lbnYoXCJkaWZmSW5jbHVkZUFudGlBbGlhc2luZ1wiKX0sLi4uQ3lwcmVzcy5lbnYoXCJkaWZmVGhyZXNob2xkXCIpJiZ7ZGlmZlRocmVzaG9sZDpDeXByZXNzLmVudihcImRpZmZUaHJlc2hvbGRcIil9LC4uLkN5cHJlc3MuZW52KFwiZm9yY2VkQ29sb3JzXCIpJiZ7Zm9yY2VkQ29sb3JzOkN5cHJlc3MuZW52KFwiZm9yY2VkQ29sb3JzXCIpfSwuLi5DeXByZXNzLmVudihcInBhdXNlQW5pbWF0aW9uQXRFbmRcIikmJntwYXVzZUFuaW1hdGlvbkF0RW5kOkN5cHJlc3MuZW52KFwicGF1c2VBbmltYXRpb25BdEVuZFwiKX0sLi4uQ3lwcmVzcy5lbnYoXCJwcmVmZXJzUmVkdWNlZE1vdGlvblwiKSYme3ByZWZlcnNSZWR1Y2VkTW90aW9uOkN5cHJlc3MuZW52KFwicHJlZmVyc1JlZHVjZWRNb3Rpb25cIil9LC4uLkN5cHJlc3MuZW52KFwiY3JvcFRvVmlld3BvcnRcIikmJntjcm9wVG9WaWV3cG9ydDpDeXByZXNzLmVudihcImNyb3BUb1ZpZXdwb3J0XCIpfSwuLi5DeXByZXNzLmVudihcImlnbm9yZVNlbGVjdG9yc1wiKSYme2lnbm9yZVNlbGVjdG9yczpDeXByZXNzLmVudihcImlnbm9yZVNlbGVjdG9yc1wiKX19LHBhZ2VVcmw6byx2aWV3cG9ydDp7aGVpZ2h0OkN5cHJlc3MuY29uZmlnKFwidmlld3BvcnRIZWlnaHRcIiksd2lkdGg6Q3lwcmVzcy5jb25maWcoXCJ2aWV3cG9ydFdpZHRoXCIpfSxvdXRwdXREaXI6Q3lwcmVzcy5jb25maWcoXCJkb3dubG9hZHNGb2xkZXJcIil9fSk7fSk7fSk7fSk7fSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vdXQuanMubWFwXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdXBwb3J0Lm1qcy5tYXAiLCIndXNlIHN0cmljdCdcblxuZXhwb3J0cy5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuZXhwb3J0cy50b0J5dGVBcnJheSA9IHRvQnl0ZUFycmF5XG5leHBvcnRzLmZyb21CeXRlQXJyYXkgPSBmcm9tQnl0ZUFycmF5XG5cbnZhciBsb29rdXAgPSBbXVxudmFyIHJldkxvb2t1cCA9IFtdXG52YXIgQXJyID0gdHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnID8gVWludDhBcnJheSA6IEFycmF5XG5cbnZhciBjb2RlID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nXG5mb3IgKHZhciBpID0gMCwgbGVuID0gY29kZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICBsb29rdXBbaV0gPSBjb2RlW2ldXG4gIHJldkxvb2t1cFtjb2RlLmNoYXJDb2RlQXQoaSldID0gaVxufVxuXG4vLyBTdXBwb3J0IGRlY29kaW5nIFVSTC1zYWZlIGJhc2U2NCBzdHJpbmdzLCBhcyBOb2RlLmpzIGRvZXMuXG4vLyBTZWU6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Jhc2U2NCNVUkxfYXBwbGljYXRpb25zXG5yZXZMb29rdXBbJy0nLmNoYXJDb2RlQXQoMCldID0gNjJcbnJldkxvb2t1cFsnXycuY2hhckNvZGVBdCgwKV0gPSA2M1xuXG5mdW5jdGlvbiBnZXRMZW5zIChiNjQpIHtcbiAgdmFyIGxlbiA9IGI2NC5sZW5ndGhcblxuICBpZiAobGVuICUgNCA+IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nLiBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQnKVxuICB9XG5cbiAgLy8gVHJpbSBvZmYgZXh0cmEgYnl0ZXMgYWZ0ZXIgcGxhY2Vob2xkZXIgYnl0ZXMgYXJlIGZvdW5kXG4gIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2JlYXRnYW1taXQvYmFzZTY0LWpzL2lzc3Vlcy80MlxuICB2YXIgdmFsaWRMZW4gPSBiNjQuaW5kZXhPZignPScpXG4gIGlmICh2YWxpZExlbiA9PT0gLTEpIHZhbGlkTGVuID0gbGVuXG5cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IHZhbGlkTGVuID09PSBsZW5cbiAgICA/IDBcbiAgICA6IDQgLSAodmFsaWRMZW4gJSA0KVxuXG4gIHJldHVybiBbdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbl1cbn1cblxuLy8gYmFzZTY0IGlzIDQvMyArIHVwIHRvIHR3byBjaGFyYWN0ZXJzIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChiNjQpIHtcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gX2J5dGVMZW5ndGggKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikge1xuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gdG9CeXRlQXJyYXkgKGI2NCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW5zID0gZ2V0TGVucyhiNjQpXG4gIHZhciB2YWxpZExlbiA9IGxlbnNbMF1cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IGxlbnNbMV1cblxuICB2YXIgYXJyID0gbmV3IEFycihfYnl0ZUxlbmd0aChiNjQsIHZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW4pKVxuXG4gIHZhciBjdXJCeXRlID0gMFxuXG4gIC8vIGlmIHRoZXJlIGFyZSBwbGFjZWhvbGRlcnMsIG9ubHkgZ2V0IHVwIHRvIHRoZSBsYXN0IGNvbXBsZXRlIDQgY2hhcnNcbiAgdmFyIGxlbiA9IHBsYWNlSG9sZGVyc0xlbiA+IDBcbiAgICA/IHZhbGlkTGVuIC0gNFxuICAgIDogdmFsaWRMZW5cblxuICB2YXIgaVxuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTgpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCAxMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildIDw8IDYpIHxcbiAgICAgIHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMyldXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDE2KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzTGVuID09PSAyKSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA+PiA0KVxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMSkge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxMCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDQpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA+PiAyKVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcbiAgcmV0dXJuIGxvb2t1cFtudW0gPj4gMTggJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiAxMiAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtID4+IDYgJiAweDNGXSArXG4gICAgbG9va3VwW251bSAmIDB4M0ZdXG59XG5cbmZ1bmN0aW9uIGVuY29kZUNodW5rICh1aW50OCwgc3RhcnQsIGVuZCkge1xuICB2YXIgdG1wXG4gIHZhciBvdXRwdXQgPSBbXVxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkgKz0gMykge1xuICAgIHRtcCA9XG4gICAgICAoKHVpbnQ4W2ldIDw8IDE2KSAmIDB4RkYwMDAwKSArXG4gICAgICAoKHVpbnQ4W2kgKyAxXSA8PCA4KSAmIDB4RkYwMCkgK1xuICAgICAgKHVpbnQ4W2kgKyAyXSAmIDB4RkYpXG4gICAgb3V0cHV0LnB1c2godHJpcGxldFRvQmFzZTY0KHRtcCkpXG4gIH1cbiAgcmV0dXJuIG91dHB1dC5qb2luKCcnKVxufVxuXG5mdW5jdGlvbiBmcm9tQnl0ZUFycmF5ICh1aW50OCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW4gPSB1aW50OC5sZW5ndGhcbiAgdmFyIGV4dHJhQnl0ZXMgPSBsZW4gJSAzIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG4gIHZhciBwYXJ0cyA9IFtdXG4gIHZhciBtYXhDaHVua0xlbmd0aCA9IDE2MzgzIC8vIG11c3QgYmUgbXVsdGlwbGUgb2YgM1xuXG4gIC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcbiAgZm9yICh2YXIgaSA9IDAsIGxlbjIgPSBsZW4gLSBleHRyYUJ5dGVzOyBpIDwgbGVuMjsgaSArPSBtYXhDaHVua0xlbmd0aCkge1xuICAgIHBhcnRzLnB1c2goZW5jb2RlQ2h1bmsodWludDgsIGksIChpICsgbWF4Q2h1bmtMZW5ndGgpID4gbGVuMiA/IGxlbjIgOiAoaSArIG1heENodW5rTGVuZ3RoKSkpXG4gIH1cblxuICAvLyBwYWQgdGhlIGVuZCB3aXRoIHplcm9zLCBidXQgbWFrZSBzdXJlIHRvIG5vdCBmb3JnZXQgdGhlIGV4dHJhIGJ5dGVzXG4gIGlmIChleHRyYUJ5dGVzID09PSAxKSB7XG4gICAgdG1wID0gdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAyXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCA0KSAmIDB4M0ZdICtcbiAgICAgICc9PSdcbiAgICApXG4gIH0gZWxzZSBpZiAoZXh0cmFCeXRlcyA9PT0gMikge1xuICAgIHRtcCA9ICh1aW50OFtsZW4gLSAyXSA8PCA4KSArIHVpbnQ4W2xlbiAtIDFdXG4gICAgcGFydHMucHVzaChcbiAgICAgIGxvb2t1cFt0bXAgPj4gMTBdICtcbiAgICAgIGxvb2t1cFsodG1wID4+IDQpICYgMHgzRl0gK1xuICAgICAgbG9va3VwWyh0bXAgPDwgMikgJiAweDNGXSArXG4gICAgICAnPSdcbiAgICApXG4gIH1cblxuICByZXR1cm4gcGFydHMuam9pbignJylcbn1cbiIsIi8qIVxuICogVGhlIGJ1ZmZlciBtb2R1bGUgZnJvbSBub2RlLmpzLCBmb3IgdGhlIGJyb3dzZXIuXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBiYXNlNjQgPSByZXF1aXJlKCdiYXNlNjQtanMnKVxudmFyIGllZWU3NTQgPSByZXF1aXJlKCdpZWVlNzU0JylcbnZhciBjdXN0b21JbnNwZWN0U3ltYm9sID1cbiAgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbFsnZm9yJ10gPT09ICdmdW5jdGlvbicpIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4gICAgPyBTeW1ib2xbJ2ZvciddKCdub2RlanMudXRpbC5pbnNwZWN0LmN1c3RvbScpIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4gICAgOiBudWxsXG5cbmV4cG9ydHMuQnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLlNsb3dCdWZmZXIgPSBTbG93QnVmZmVyXG5leHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTID0gNTBcblxudmFyIEtfTUFYX0xFTkdUSCA9IDB4N2ZmZmZmZmZcbmV4cG9ydHMua01heExlbmd0aCA9IEtfTUFYX0xFTkdUSFxuXG4vKipcbiAqIElmIGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGA6XG4gKiAgID09PSB0cnVlICAgIFVzZSBVaW50OEFycmF5IGltcGxlbWVudGF0aW9uIChmYXN0ZXN0KVxuICogICA9PT0gZmFsc2UgICBQcmludCB3YXJuaW5nIGFuZCByZWNvbW1lbmQgdXNpbmcgYGJ1ZmZlcmAgdjQueCB3aGljaCBoYXMgYW4gT2JqZWN0XG4gKiAgICAgICAgICAgICAgIGltcGxlbWVudGF0aW9uIChtb3N0IGNvbXBhdGlibGUsIGV2ZW4gSUU2KVxuICpcbiAqIEJyb3dzZXJzIHRoYXQgc3VwcG9ydCB0eXBlZCBhcnJheXMgYXJlIElFIDEwKywgRmlyZWZveCA0KywgQ2hyb21lIDcrLCBTYWZhcmkgNS4xKyxcbiAqIE9wZXJhIDExLjYrLCBpT1MgNC4yKy5cbiAqXG4gKiBXZSByZXBvcnQgdGhhdCB0aGUgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHR5cGVkIGFycmF5cyBpZiB0aGUgYXJlIG5vdCBzdWJjbGFzc2FibGVcbiAqIHVzaW5nIF9fcHJvdG9fXy4gRmlyZWZveCA0LTI5IGxhY2tzIHN1cHBvcnQgZm9yIGFkZGluZyBuZXcgcHJvcGVydGllcyB0byBgVWludDhBcnJheWBcbiAqIChTZWU6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY5NTQzOCkuIElFIDEwIGxhY2tzIHN1cHBvcnRcbiAqIGZvciBfX3Byb3RvX18gYW5kIGhhcyBhIGJ1Z2d5IHR5cGVkIGFycmF5IGltcGxlbWVudGF0aW9uLlxuICovXG5CdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCA9IHR5cGVkQXJyYXlTdXBwb3J0KClcblxuaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgY29uc29sZS5lcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuICBjb25zb2xlLmVycm9yKFxuICAgICdUaGlzIGJyb3dzZXIgbGFja3MgdHlwZWQgYXJyYXkgKFVpbnQ4QXJyYXkpIHN1cHBvcnQgd2hpY2ggaXMgcmVxdWlyZWQgYnkgJyArXG4gICAgJ2BidWZmZXJgIHY1LnguIFVzZSBgYnVmZmVyYCB2NC54IGlmIHlvdSByZXF1aXJlIG9sZCBicm93c2VyIHN1cHBvcnQuJ1xuICApXG59XG5cbmZ1bmN0aW9uIHR5cGVkQXJyYXlTdXBwb3J0ICgpIHtcbiAgLy8gQ2FuIHR5cGVkIGFycmF5IGluc3RhbmNlcyBjYW4gYmUgYXVnbWVudGVkP1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBuZXcgVWludDhBcnJheSgxKVxuICAgIHZhciBwcm90byA9IHsgZm9vOiBmdW5jdGlvbiAoKSB7IHJldHVybiA0MiB9IH1cbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YocHJvdG8sIFVpbnQ4QXJyYXkucHJvdG90eXBlKVxuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihhcnIsIHByb3RvKVxuICAgIHJldHVybiBhcnIuZm9vKCkgPT09IDQyXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQnVmZmVyLnByb3RvdHlwZSwgJ3BhcmVudCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFCdWZmZXIuaXNCdWZmZXIodGhpcykpIHJldHVybiB1bmRlZmluZWRcbiAgICByZXR1cm4gdGhpcy5idWZmZXJcbiAgfVxufSlcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1ZmZlci5wcm90b3R5cGUsICdvZmZzZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIGlmICghQnVmZmVyLmlzQnVmZmVyKHRoaXMpKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgcmV0dXJuIHRoaXMuYnl0ZU9mZnNldFxuICB9XG59KVxuXG5mdW5jdGlvbiBjcmVhdGVCdWZmZXIgKGxlbmd0aCkge1xuICBpZiAobGVuZ3RoID4gS19NQVhfTEVOR1RIKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBcIicgKyBsZW5ndGggKyAnXCIgaXMgaW52YWxpZCBmb3Igb3B0aW9uIFwic2l6ZVwiJylcbiAgfVxuICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZVxuICB2YXIgYnVmID0gbmV3IFVpbnQ4QXJyYXkobGVuZ3RoKVxuICBPYmplY3Quc2V0UHJvdG90eXBlT2YoYnVmLCBCdWZmZXIucHJvdG90eXBlKVxuICByZXR1cm4gYnVmXG59XG5cbi8qKlxuICogVGhlIEJ1ZmZlciBjb25zdHJ1Y3RvciByZXR1cm5zIGluc3RhbmNlcyBvZiBgVWludDhBcnJheWAgdGhhdCBoYXZlIHRoZWlyXG4gKiBwcm90b3R5cGUgY2hhbmdlZCB0byBgQnVmZmVyLnByb3RvdHlwZWAuIEZ1cnRoZXJtb3JlLCBgQnVmZmVyYCBpcyBhIHN1YmNsYXNzIG9mXG4gKiBgVWludDhBcnJheWAsIHNvIHRoZSByZXR1cm5lZCBpbnN0YW5jZXMgd2lsbCBoYXZlIGFsbCB0aGUgbm9kZSBgQnVmZmVyYCBtZXRob2RzXG4gKiBhbmQgdGhlIGBVaW50OEFycmF5YCBtZXRob2RzLiBTcXVhcmUgYnJhY2tldCBub3RhdGlvbiB3b3JrcyBhcyBleHBlY3RlZCAtLSBpdFxuICogcmV0dXJucyBhIHNpbmdsZSBvY3RldC5cbiAqXG4gKiBUaGUgYFVpbnQ4QXJyYXlgIHByb3RvdHlwZSByZW1haW5zIHVubW9kaWZpZWQuXG4gKi9cblxuZnVuY3Rpb24gQnVmZmVyIChhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICAvLyBDb21tb24gY2FzZS5cbiAgaWYgKHR5cGVvZiBhcmcgPT09ICdudW1iZXInKSB7XG4gICAgaWYgKHR5cGVvZiBlbmNvZGluZ09yT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgJ1RoZSBcInN0cmluZ1wiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBzdHJpbmcuIFJlY2VpdmVkIHR5cGUgbnVtYmVyJ1xuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gYWxsb2NVbnNhZmUoYXJnKVxuICB9XG4gIHJldHVybiBmcm9tKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucG9vbFNpemUgPSA4MTkyIC8vIG5vdCB1c2VkIGJ5IHRoaXMgaW1wbGVtZW50YXRpb25cblxuZnVuY3Rpb24gZnJvbSAodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmcm9tU3RyaW5nKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0KVxuICB9XG5cbiAgaWYgKEFycmF5QnVmZmVyLmlzVmlldyh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZnJvbUFycmF5Vmlldyh2YWx1ZSlcbiAgfVxuXG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICdUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBvbmUgb2YgdHlwZSBzdHJpbmcsIEJ1ZmZlciwgQXJyYXlCdWZmZXIsIEFycmF5LCAnICtcbiAgICAgICdvciBBcnJheS1saWtlIE9iamVjdC4gUmVjZWl2ZWQgdHlwZSAnICsgKHR5cGVvZiB2YWx1ZSlcbiAgICApXG4gIH1cblxuICBpZiAoaXNJbnN0YW5jZSh2YWx1ZSwgQXJyYXlCdWZmZXIpIHx8XG4gICAgICAodmFsdWUgJiYgaXNJbnN0YW5jZSh2YWx1ZS5idWZmZXIsIEFycmF5QnVmZmVyKSkpIHtcbiAgICByZXR1cm4gZnJvbUFycmF5QnVmZmVyKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICBpZiAodHlwZW9mIFNoYXJlZEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgKGlzSW5zdGFuY2UodmFsdWUsIFNoYXJlZEFycmF5QnVmZmVyKSB8fFxuICAgICAgKHZhbHVlICYmIGlzSW5zdGFuY2UodmFsdWUuYnVmZmVyLCBTaGFyZWRBcnJheUJ1ZmZlcikpKSkge1xuICAgIHJldHVybiBmcm9tQXJyYXlCdWZmZXIodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICdUaGUgXCJ2YWx1ZVwiIGFyZ3VtZW50IG11c3Qgbm90IGJlIG9mIHR5cGUgbnVtYmVyLiBSZWNlaXZlZCB0eXBlIG51bWJlcidcbiAgICApXG4gIH1cblxuICB2YXIgdmFsdWVPZiA9IHZhbHVlLnZhbHVlT2YgJiYgdmFsdWUudmFsdWVPZigpXG4gIGlmICh2YWx1ZU9mICE9IG51bGwgJiYgdmFsdWVPZiAhPT0gdmFsdWUpIHtcbiAgICByZXR1cm4gQnVmZmVyLmZyb20odmFsdWVPZiwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgdmFyIGIgPSBmcm9tT2JqZWN0KHZhbHVlKVxuICBpZiAoYikgcmV0dXJuIGJcblxuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvUHJpbWl0aXZlICE9IG51bGwgJiZcbiAgICAgIHR5cGVvZiB2YWx1ZVtTeW1ib2wudG9QcmltaXRpdmVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5mcm9tKFxuICAgICAgdmFsdWVbU3ltYm9sLnRvUHJpbWl0aXZlXSgnc3RyaW5nJyksIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aFxuICAgIClcbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgJ1RoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIG9uZSBvZiB0eXBlIHN0cmluZywgQnVmZmVyLCBBcnJheUJ1ZmZlciwgQXJyYXksICcgK1xuICAgICdvciBBcnJheS1saWtlIE9iamVjdC4gUmVjZWl2ZWQgdHlwZSAnICsgKHR5cGVvZiB2YWx1ZSlcbiAgKVxufVxuXG4vKipcbiAqIEZ1bmN0aW9uYWxseSBlcXVpdmFsZW50IHRvIEJ1ZmZlcihhcmcsIGVuY29kaW5nKSBidXQgdGhyb3dzIGEgVHlwZUVycm9yXG4gKiBpZiB2YWx1ZSBpcyBhIG51bWJlci5cbiAqIEJ1ZmZlci5mcm9tKHN0clssIGVuY29kaW5nXSlcbiAqIEJ1ZmZlci5mcm9tKGFycmF5KVxuICogQnVmZmVyLmZyb20oYnVmZmVyKVxuICogQnVmZmVyLmZyb20oYXJyYXlCdWZmZXJbLCBieXRlT2Zmc2V0WywgbGVuZ3RoXV0pXG4gKiovXG5CdWZmZXIuZnJvbSA9IGZ1bmN0aW9uICh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBmcm9tKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cbi8vIE5vdGU6IENoYW5nZSBwcm90b3R5cGUgKmFmdGVyKiBCdWZmZXIuZnJvbSBpcyBkZWZpbmVkIHRvIHdvcmthcm91bmQgQ2hyb21lIGJ1Zzpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvYnVmZmVyL3B1bGwvMTQ4XG5PYmplY3Quc2V0UHJvdG90eXBlT2YoQnVmZmVyLnByb3RvdHlwZSwgVWludDhBcnJheS5wcm90b3R5cGUpXG5PYmplY3Quc2V0UHJvdG90eXBlT2YoQnVmZmVyLCBVaW50OEFycmF5KVxuXG5mdW5jdGlvbiBhc3NlcnRTaXplIChzaXplKSB7XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgbnVtYmVyJylcbiAgfSBlbHNlIGlmIChzaXplIDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgXCInICsgc2l6ZSArICdcIiBpcyBpbnZhbGlkIGZvciBvcHRpb24gXCJzaXplXCInKVxuICB9XG59XG5cbmZ1bmN0aW9uIGFsbG9jIChzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICBhc3NlcnRTaXplKHNpemUpXG4gIGlmIChzaXplIDw9IDApIHtcbiAgICByZXR1cm4gY3JlYXRlQnVmZmVyKHNpemUpXG4gIH1cbiAgaWYgKGZpbGwgIT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9ubHkgcGF5IGF0dGVudGlvbiB0byBlbmNvZGluZyBpZiBpdCdzIGEgc3RyaW5nLiBUaGlzXG4gICAgLy8gcHJldmVudHMgYWNjaWRlbnRhbGx5IHNlbmRpbmcgaW4gYSBudW1iZXIgdGhhdCB3b3VsZFxuICAgIC8vIGJlIGludGVycHJldGVkIGFzIGEgc3RhcnQgb2Zmc2V0LlxuICAgIHJldHVybiB0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnXG4gICAgICA/IGNyZWF0ZUJ1ZmZlcihzaXplKS5maWxsKGZpbGwsIGVuY29kaW5nKVxuICAgICAgOiBjcmVhdGVCdWZmZXIoc2l6ZSkuZmlsbChmaWxsKVxuICB9XG4gIHJldHVybiBjcmVhdGVCdWZmZXIoc2l6ZSlcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiBhbGxvYyhzaXplWywgZmlsbFssIGVuY29kaW5nXV0pXG4gKiovXG5CdWZmZXIuYWxsb2MgPSBmdW5jdGlvbiAoc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGFsbG9jKHNpemUsIGZpbGwsIGVuY29kaW5nKVxufVxuXG5mdW5jdGlvbiBhbGxvY1Vuc2FmZSAoc2l6ZSkge1xuICBhc3NlcnRTaXplKHNpemUpXG4gIHJldHVybiBjcmVhdGVCdWZmZXIoc2l6ZSA8IDAgPyAwIDogY2hlY2tlZChzaXplKSB8IDApXG59XG5cbi8qKlxuICogRXF1aXZhbGVudCB0byBCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqICovXG5CdWZmZXIuYWxsb2NVbnNhZmUgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICByZXR1cm4gYWxsb2NVbnNhZmUoc2l6ZSlcbn1cbi8qKlxuICogRXF1aXZhbGVudCB0byBTbG93QnVmZmVyKG51bSksIGJ5IGRlZmF1bHQgY3JlYXRlcyBhIG5vbi16ZXJvLWZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZVNsb3cgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICByZXR1cm4gYWxsb2NVbnNhZmUoc2l6ZSlcbn1cblxuZnVuY3Rpb24gZnJvbVN0cmluZyAoc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAodHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJyB8fCBlbmNvZGluZyA9PT0gJycpIHtcbiAgICBlbmNvZGluZyA9ICd1dGY4J1xuICB9XG5cbiAgaWYgKCFCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gIH1cblxuICB2YXIgbGVuZ3RoID0gYnl0ZUxlbmd0aChzdHJpbmcsIGVuY29kaW5nKSB8IDBcbiAgdmFyIGJ1ZiA9IGNyZWF0ZUJ1ZmZlcihsZW5ndGgpXG5cbiAgdmFyIGFjdHVhbCA9IGJ1Zi53cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuXG4gIGlmIChhY3R1YWwgIT09IGxlbmd0aCkge1xuICAgIC8vIFdyaXRpbmcgYSBoZXggc3RyaW5nLCBmb3IgZXhhbXBsZSwgdGhhdCBjb250YWlucyBpbnZhbGlkIGNoYXJhY3RlcnMgd2lsbFxuICAgIC8vIGNhdXNlIGV2ZXJ5dGhpbmcgYWZ0ZXIgdGhlIGZpcnN0IGludmFsaWQgY2hhcmFjdGVyIHRvIGJlIGlnbm9yZWQuIChlLmcuXG4gICAgLy8gJ2FieHhjZCcgd2lsbCBiZSB0cmVhdGVkIGFzICdhYicpXG4gICAgYnVmID0gYnVmLnNsaWNlKDAsIGFjdHVhbClcbiAgfVxuXG4gIHJldHVybiBidWZcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5TGlrZSAoYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCA8IDAgPyAwIDogY2hlY2tlZChhcnJheS5sZW5ndGgpIHwgMFxuICB2YXIgYnVmID0gY3JlYXRlQnVmZmVyKGxlbmd0aClcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIGJ1ZltpXSA9IGFycmF5W2ldICYgMjU1XG4gIH1cbiAgcmV0dXJuIGJ1ZlxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlWaWV3IChhcnJheVZpZXcpIHtcbiAgaWYgKGlzSW5zdGFuY2UoYXJyYXlWaWV3LCBVaW50OEFycmF5KSkge1xuICAgIHZhciBjb3B5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlWaWV3KVxuICAgIHJldHVybiBmcm9tQXJyYXlCdWZmZXIoY29weS5idWZmZXIsIGNvcHkuYnl0ZU9mZnNldCwgY29weS5ieXRlTGVuZ3RoKVxuICB9XG4gIHJldHVybiBmcm9tQXJyYXlMaWtlKGFycmF5Vmlldylcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5QnVmZmVyIChhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmIChieXRlT2Zmc2V0IDwgMCB8fCBhcnJheS5ieXRlTGVuZ3RoIDwgYnl0ZU9mZnNldCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcIm9mZnNldFwiIGlzIG91dHNpZGUgb2YgYnVmZmVyIGJvdW5kcycpXG4gIH1cblxuICBpZiAoYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQgKyAobGVuZ3RoIHx8IDApKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1wibGVuZ3RoXCIgaXMgb3V0c2lkZSBvZiBidWZmZXIgYm91bmRzJylcbiAgfVxuXG4gIHZhciBidWZcbiAgaWYgKGJ5dGVPZmZzZXQgPT09IHVuZGVmaW5lZCAmJiBsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGJ1ZiA9IG5ldyBVaW50OEFycmF5KGFycmF5KVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYnVmID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXksIGJ5dGVPZmZzZXQpXG4gIH0gZWxzZSB7XG4gICAgYnVmID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXksIGJ5dGVPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlXG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZihidWYsIEJ1ZmZlci5wcm90b3R5cGUpXG5cbiAgcmV0dXJuIGJ1ZlxufVxuXG5mdW5jdGlvbiBmcm9tT2JqZWN0IChvYmopIHtcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihvYmopKSB7XG4gICAgdmFyIGxlbiA9IGNoZWNrZWQob2JqLmxlbmd0aCkgfCAwXG4gICAgdmFyIGJ1ZiA9IGNyZWF0ZUJ1ZmZlcihsZW4pXG5cbiAgICBpZiAoYnVmLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGJ1ZlxuICAgIH1cblxuICAgIG9iai5jb3B5KGJ1ZiwgMCwgMCwgbGVuKVxuICAgIHJldHVybiBidWZcbiAgfVxuXG4gIGlmIChvYmoubGVuZ3RoICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAodHlwZW9mIG9iai5sZW5ndGggIT09ICdudW1iZXInIHx8IG51bWJlcklzTmFOKG9iai5sZW5ndGgpKSB7XG4gICAgICByZXR1cm4gY3JlYXRlQnVmZmVyKDApXG4gICAgfVxuICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKG9iailcbiAgfVxuXG4gIGlmIChvYmoudHlwZSA9PT0gJ0J1ZmZlcicgJiYgQXJyYXkuaXNBcnJheShvYmouZGF0YSkpIHtcbiAgICByZXR1cm4gZnJvbUFycmF5TGlrZShvYmouZGF0YSlcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja2VkIChsZW5ndGgpIHtcbiAgLy8gTm90ZTogY2Fubm90IHVzZSBgbGVuZ3RoIDwgS19NQVhfTEVOR1RIYCBoZXJlIGJlY2F1c2UgdGhhdCBmYWlscyB3aGVuXG4gIC8vIGxlbmd0aCBpcyBOYU4gKHdoaWNoIGlzIG90aGVyd2lzZSBjb2VyY2VkIHRvIHplcm8uKVxuICBpZiAobGVuZ3RoID49IEtfTUFYX0xFTkdUSCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIGFsbG9jYXRlIEJ1ZmZlciBsYXJnZXIgdGhhbiBtYXhpbXVtICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICdzaXplOiAweCcgKyBLX01BWF9MRU5HVEgudG9TdHJpbmcoMTYpICsgJyBieXRlcycpXG4gIH1cbiAgcmV0dXJuIGxlbmd0aCB8IDBcbn1cblxuZnVuY3Rpb24gU2xvd0J1ZmZlciAobGVuZ3RoKSB7XG4gIGlmICgrbGVuZ3RoICE9IGxlbmd0aCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGVxZXFlcVxuICAgIGxlbmd0aCA9IDBcbiAgfVxuICByZXR1cm4gQnVmZmVyLmFsbG9jKCtsZW5ndGgpXG59XG5cbkJ1ZmZlci5pc0J1ZmZlciA9IGZ1bmN0aW9uIGlzQnVmZmVyIChiKSB7XG4gIHJldHVybiBiICE9IG51bGwgJiYgYi5faXNCdWZmZXIgPT09IHRydWUgJiZcbiAgICBiICE9PSBCdWZmZXIucHJvdG90eXBlIC8vIHNvIEJ1ZmZlci5pc0J1ZmZlcihCdWZmZXIucHJvdG90eXBlKSB3aWxsIGJlIGZhbHNlXG59XG5cbkJ1ZmZlci5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAoYSwgYikge1xuICBpZiAoaXNJbnN0YW5jZShhLCBVaW50OEFycmF5KSkgYSA9IEJ1ZmZlci5mcm9tKGEsIGEub2Zmc2V0LCBhLmJ5dGVMZW5ndGgpXG4gIGlmIChpc0luc3RhbmNlKGIsIFVpbnQ4QXJyYXkpKSBiID0gQnVmZmVyLmZyb20oYiwgYi5vZmZzZXQsIGIuYnl0ZUxlbmd0aClcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYSkgfHwgIUJ1ZmZlci5pc0J1ZmZlcihiKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAnVGhlIFwiYnVmMVwiLCBcImJ1ZjJcIiBhcmd1bWVudHMgbXVzdCBiZSBvbmUgb2YgdHlwZSBCdWZmZXIgb3IgVWludDhBcnJheSdcbiAgICApXG4gIH1cblxuICBpZiAoYSA9PT0gYikgcmV0dXJuIDBcblxuICB2YXIgeCA9IGEubGVuZ3RoXG4gIHZhciB5ID0gYi5sZW5ndGhcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gTWF0aC5taW4oeCwgeSk7IGkgPCBsZW47ICsraSkge1xuICAgIGlmIChhW2ldICE9PSBiW2ldKSB7XG4gICAgICB4ID0gYVtpXVxuICAgICAgeSA9IGJbaV1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG5CdWZmZXIuaXNFbmNvZGluZyA9IGZ1bmN0aW9uIGlzRW5jb2RpbmcgKGVuY29kaW5nKSB7XG4gIHN3aXRjaCAoU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5CdWZmZXIuY29uY2F0ID0gZnVuY3Rpb24gY29uY2F0IChsaXN0LCBsZW5ndGgpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGxpc3QpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJylcbiAgfVxuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBCdWZmZXIuYWxsb2MoMClcbiAgfVxuXG4gIHZhciBpXG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGxlbmd0aCA9IDBcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgbGVuZ3RoICs9IGxpc3RbaV0ubGVuZ3RoXG4gICAgfVxuICB9XG5cbiAgdmFyIGJ1ZmZlciA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShsZW5ndGgpXG4gIHZhciBwb3MgPSAwXG4gIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGJ1ZiA9IGxpc3RbaV1cbiAgICBpZiAoaXNJbnN0YW5jZShidWYsIFVpbnQ4QXJyYXkpKSB7XG4gICAgICBpZiAocG9zICsgYnVmLmxlbmd0aCA+IGJ1ZmZlci5sZW5ndGgpIHtcbiAgICAgICAgQnVmZmVyLmZyb20oYnVmKS5jb3B5KGJ1ZmZlciwgcG9zKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgVWludDhBcnJheS5wcm90b3R5cGUuc2V0LmNhbGwoXG4gICAgICAgICAgYnVmZmVyLFxuICAgICAgICAgIGJ1ZixcbiAgICAgICAgICBwb3NcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICAgIH0gZWxzZSB7XG4gICAgICBidWYuY29weShidWZmZXIsIHBvcylcbiAgICB9XG4gICAgcG9zICs9IGJ1Zi5sZW5ndGhcbiAgfVxuICByZXR1cm4gYnVmZmVyXG59XG5cbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKHN0cmluZywgZW5jb2RpbmcpIHtcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihzdHJpbmcpKSB7XG4gICAgcmV0dXJuIHN0cmluZy5sZW5ndGhcbiAgfVxuICBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KHN0cmluZykgfHwgaXNJbnN0YW5jZShzdHJpbmcsIEFycmF5QnVmZmVyKSkge1xuICAgIHJldHVybiBzdHJpbmcuYnl0ZUxlbmd0aFxuICB9XG4gIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAnVGhlIFwic3RyaW5nXCIgYXJndW1lbnQgbXVzdCBiZSBvbmUgb2YgdHlwZSBzdHJpbmcsIEJ1ZmZlciwgb3IgQXJyYXlCdWZmZXIuICcgK1xuICAgICAgJ1JlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBzdHJpbmdcbiAgICApXG4gIH1cblxuICB2YXIgbGVuID0gc3RyaW5nLmxlbmd0aFxuICB2YXIgbXVzdE1hdGNoID0gKGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSA9PT0gdHJ1ZSlcbiAgaWYgKCFtdXN0TWF0Y2ggJiYgbGVuID09PSAwKSByZXR1cm4gMFxuXG4gIC8vIFVzZSBhIGZvciBsb29wIHRvIGF2b2lkIHJlY3Vyc2lvblxuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsZW5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiBsZW4gKiAyXG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gbGVuID4+PiAxXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB7XG4gICAgICAgICAgcmV0dXJuIG11c3RNYXRjaCA/IC0xIDogdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGggLy8gYXNzdW1lIHV0ZjhcbiAgICAgICAgfVxuICAgICAgICBlbmNvZGluZyA9ICgnJyArIGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuQnVmZmVyLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5cbmZ1bmN0aW9uIHNsb3dUb1N0cmluZyAoZW5jb2RpbmcsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcblxuICAvLyBObyBuZWVkIHRvIHZlcmlmeSB0aGF0IFwidGhpcy5sZW5ndGggPD0gTUFYX1VJTlQzMlwiIHNpbmNlIGl0J3MgYSByZWFkLW9ubHlcbiAgLy8gcHJvcGVydHkgb2YgYSB0eXBlZCBhcnJheS5cblxuICAvLyBUaGlzIGJlaGF2ZXMgbmVpdGhlciBsaWtlIFN0cmluZyBub3IgVWludDhBcnJheSBpbiB0aGF0IHdlIHNldCBzdGFydC9lbmRcbiAgLy8gdG8gdGhlaXIgdXBwZXIvbG93ZXIgYm91bmRzIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgb3V0IG9mIHJhbmdlLlxuICAvLyB1bmRlZmluZWQgaXMgaGFuZGxlZCBzcGVjaWFsbHkgYXMgcGVyIEVDTUEtMjYyIDZ0aCBFZGl0aW9uLFxuICAvLyBTZWN0aW9uIDEzLjMuMy43IFJ1bnRpbWUgU2VtYW50aWNzOiBLZXllZEJpbmRpbmdJbml0aWFsaXphdGlvbi5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQgfHwgc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgLy8gUmV0dXJuIGVhcmx5IGlmIHN0YXJ0ID4gdGhpcy5sZW5ndGguIERvbmUgaGVyZSB0byBwcmV2ZW50IHBvdGVudGlhbCB1aW50MzJcbiAgLy8gY29lcmNpb24gZmFpbCBiZWxvdy5cbiAgaWYgKHN0YXJ0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmIChlbmQgPT09IHVuZGVmaW5lZCB8fCBlbmQgPiB0aGlzLmxlbmd0aCkge1xuICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoZW5kIDw9IDApIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIC8vIEZvcmNlIGNvZXJjaW9uIHRvIHVpbnQzMi4gVGhpcyB3aWxsIGFsc28gY29lcmNlIGZhbHNleS9OYU4gdmFsdWVzIHRvIDAuXG4gIGVuZCA+Pj49IDBcbiAgc3RhcnQgPj4+PSAwXG5cbiAgaWYgKGVuZCA8PSBzdGFydCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICAgIHJldHVybiBhc2NpaVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGF0aW4xU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgcmV0dXJuIGJhc2U2NFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1dGYxNmxlU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKGVuY29kaW5nICsgJycpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbi8vIFRoaXMgcHJvcGVydHkgaXMgdXNlZCBieSBgQnVmZmVyLmlzQnVmZmVyYCAoYW5kIHRoZSBgaXMtYnVmZmVyYCBucG0gcGFja2FnZSlcbi8vIHRvIGRldGVjdCBhIEJ1ZmZlciBpbnN0YW5jZS4gSXQncyBub3QgcG9zc2libGUgdG8gdXNlIGBpbnN0YW5jZW9mIEJ1ZmZlcmBcbi8vIHJlbGlhYmx5IGluIGEgYnJvd3NlcmlmeSBjb250ZXh0IGJlY2F1c2UgdGhlcmUgY291bGQgYmUgbXVsdGlwbGUgZGlmZmVyZW50XG4vLyBjb3BpZXMgb2YgdGhlICdidWZmZXInIHBhY2thZ2UgaW4gdXNlLiBUaGlzIG1ldGhvZCB3b3JrcyBldmVuIGZvciBCdWZmZXJcbi8vIGluc3RhbmNlcyB0aGF0IHdlcmUgY3JlYXRlZCBmcm9tIGFub3RoZXIgY29weSBvZiB0aGUgYGJ1ZmZlcmAgcGFja2FnZS5cbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9idWZmZXIvaXNzdWVzLzE1NFxuQnVmZmVyLnByb3RvdHlwZS5faXNCdWZmZXIgPSB0cnVlXG5cbmZ1bmN0aW9uIHN3YXAgKGIsIG4sIG0pIHtcbiAgdmFyIGkgPSBiW25dXG4gIGJbbl0gPSBiW21dXG4gIGJbbV0gPSBpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDE2ID0gZnVuY3Rpb24gc3dhcDE2ICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSAyICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAxNi1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSAyKSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgMSlcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAzMiA9IGZ1bmN0aW9uIHN3YXAzMiAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgNCAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMzItYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDMpXG4gICAgc3dhcCh0aGlzLCBpICsgMSwgaSArIDIpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwNjQgPSBmdW5jdGlvbiBzd2FwNjQgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDggIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDY0LWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDgpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyA3KVxuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyA2KVxuICAgIHN3YXAodGhpcywgaSArIDIsIGkgKyA1KVxuICAgIHN3YXAodGhpcywgaSArIDMsIGkgKyA0KVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuZ3RoID09PSAwKSByZXR1cm4gJydcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHJldHVybiB1dGY4U2xpY2UodGhpcywgMCwgbGVuZ3RoKVxuICByZXR1cm4gc2xvd1RvU3RyaW5nLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0xvY2FsZVN0cmluZyA9IEJ1ZmZlci5wcm90b3R5cGUudG9TdHJpbmdcblxuQnVmZmVyLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMgKGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICBpZiAodGhpcyA9PT0gYikgcmV0dXJuIHRydWVcbiAgcmV0dXJuIEJ1ZmZlci5jb21wYXJlKHRoaXMsIGIpID09PSAwXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5zcGVjdCA9IGZ1bmN0aW9uIGluc3BlY3QgKCkge1xuICB2YXIgc3RyID0gJydcbiAgdmFyIG1heCA9IGV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVNcbiAgc3RyID0gdGhpcy50b1N0cmluZygnaGV4JywgMCwgbWF4KS5yZXBsYWNlKC8oLnsyfSkvZywgJyQxICcpLnRyaW0oKVxuICBpZiAodGhpcy5sZW5ndGggPiBtYXgpIHN0ciArPSAnIC4uLiAnXG4gIHJldHVybiAnPEJ1ZmZlciAnICsgc3RyICsgJz4nXG59XG5pZiAoY3VzdG9tSW5zcGVjdFN5bWJvbCkge1xuICBCdWZmZXIucHJvdG90eXBlW2N1c3RvbUluc3BlY3RTeW1ib2xdID0gQnVmZmVyLnByb3RvdHlwZS5pbnNwZWN0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uIGNvbXBhcmUgKHRhcmdldCwgc3RhcnQsIGVuZCwgdGhpc1N0YXJ0LCB0aGlzRW5kKSB7XG4gIGlmIChpc0luc3RhbmNlKHRhcmdldCwgVWludDhBcnJheSkpIHtcbiAgICB0YXJnZXQgPSBCdWZmZXIuZnJvbSh0YXJnZXQsIHRhcmdldC5vZmZzZXQsIHRhcmdldC5ieXRlTGVuZ3RoKVxuICB9XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKHRhcmdldCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgJ1RoZSBcInRhcmdldFwiIGFyZ3VtZW50IG11c3QgYmUgb25lIG9mIHR5cGUgQnVmZmVyIG9yIFVpbnQ4QXJyYXkuICcgK1xuICAgICAgJ1JlY2VpdmVkIHR5cGUgJyArICh0eXBlb2YgdGFyZ2V0KVxuICAgIClcbiAgfVxuXG4gIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5kID0gdGFyZ2V0ID8gdGFyZ2V0Lmxlbmd0aCA6IDBcbiAgfVxuICBpZiAodGhpc1N0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzU3RhcnQgPSAwXG4gIH1cbiAgaWYgKHRoaXNFbmQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNFbmQgPSB0aGlzLmxlbmd0aFxuICB9XG5cbiAgaWYgKHN0YXJ0IDwgMCB8fCBlbmQgPiB0YXJnZXQubGVuZ3RoIHx8IHRoaXNTdGFydCA8IDAgfHwgdGhpc0VuZCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ291dCBvZiByYW5nZSBpbmRleCcpXG4gIH1cblxuICBpZiAodGhpc1N0YXJ0ID49IHRoaXNFbmQgJiYgc3RhcnQgPj0gZW5kKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuICBpZiAodGhpc1N0YXJ0ID49IHRoaXNFbmQpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICBpZiAoc3RhcnQgPj0gZW5kKSB7XG4gICAgcmV0dXJuIDFcbiAgfVxuXG4gIHN0YXJ0ID4+Pj0gMFxuICBlbmQgPj4+PSAwXG4gIHRoaXNTdGFydCA+Pj49IDBcbiAgdGhpc0VuZCA+Pj49IDBcblxuICBpZiAodGhpcyA9PT0gdGFyZ2V0KSByZXR1cm4gMFxuXG4gIHZhciB4ID0gdGhpc0VuZCAtIHRoaXNTdGFydFxuICB2YXIgeSA9IGVuZCAtIHN0YXJ0XG4gIHZhciBsZW4gPSBNYXRoLm1pbih4LCB5KVxuXG4gIHZhciB0aGlzQ29weSA9IHRoaXMuc2xpY2UodGhpc1N0YXJ0LCB0aGlzRW5kKVxuICB2YXIgdGFyZ2V0Q29weSA9IHRhcmdldC5zbGljZShzdGFydCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAodGhpc0NvcHlbaV0gIT09IHRhcmdldENvcHlbaV0pIHtcbiAgICAgIHggPSB0aGlzQ29weVtpXVxuICAgICAgeSA9IHRhcmdldENvcHlbaV1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG4vLyBGaW5kcyBlaXRoZXIgdGhlIGZpcnN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA+PSBgYnl0ZU9mZnNldGAsXG4vLyBPUiB0aGUgbGFzdCBpbmRleCBvZiBgdmFsYCBpbiBgYnVmZmVyYCBhdCBvZmZzZXQgPD0gYGJ5dGVPZmZzZXRgLlxuLy9cbi8vIEFyZ3VtZW50czpcbi8vIC0gYnVmZmVyIC0gYSBCdWZmZXIgdG8gc2VhcmNoXG4vLyAtIHZhbCAtIGEgc3RyaW5nLCBCdWZmZXIsIG9yIG51bWJlclxuLy8gLSBieXRlT2Zmc2V0IC0gYW4gaW5kZXggaW50byBgYnVmZmVyYDsgd2lsbCBiZSBjbGFtcGVkIHRvIGFuIGludDMyXG4vLyAtIGVuY29kaW5nIC0gYW4gb3B0aW9uYWwgZW5jb2RpbmcsIHJlbGV2YW50IGlzIHZhbCBpcyBhIHN0cmluZ1xuLy8gLSBkaXIgLSB0cnVlIGZvciBpbmRleE9mLCBmYWxzZSBmb3IgbGFzdEluZGV4T2ZcbmZ1bmN0aW9uIGJpZGlyZWN0aW9uYWxJbmRleE9mIChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcikge1xuICAvLyBFbXB0eSBidWZmZXIgbWVhbnMgbm8gbWF0Y2hcbiAgaWYgKGJ1ZmZlci5sZW5ndGggPT09IDApIHJldHVybiAtMVxuXG4gIC8vIE5vcm1hbGl6ZSBieXRlT2Zmc2V0XG4gIGlmICh0eXBlb2YgYnl0ZU9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbmNvZGluZyA9IGJ5dGVPZmZzZXRcbiAgICBieXRlT2Zmc2V0ID0gMFxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPiAweDdmZmZmZmZmKSB7XG4gICAgYnl0ZU9mZnNldCA9IDB4N2ZmZmZmZmZcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0IDwgLTB4ODAwMDAwMDApIHtcbiAgICBieXRlT2Zmc2V0ID0gLTB4ODAwMDAwMDBcbiAgfVxuICBieXRlT2Zmc2V0ID0gK2J5dGVPZmZzZXQgLy8gQ29lcmNlIHRvIE51bWJlci5cbiAgaWYgKG51bWJlcklzTmFOKGJ5dGVPZmZzZXQpKSB7XG4gICAgLy8gYnl0ZU9mZnNldDogaXQgaXQncyB1bmRlZmluZWQsIG51bGwsIE5hTiwgXCJmb29cIiwgZXRjLCBzZWFyY2ggd2hvbGUgYnVmZmVyXG4gICAgYnl0ZU9mZnNldCA9IGRpciA/IDAgOiAoYnVmZmVyLmxlbmd0aCAtIDEpXG4gIH1cblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldDogbmVnYXRpdmUgb2Zmc2V0cyBzdGFydCBmcm9tIHRoZSBlbmQgb2YgdGhlIGJ1ZmZlclxuICBpZiAoYnl0ZU9mZnNldCA8IDApIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoICsgYnl0ZU9mZnNldFxuICBpZiAoYnl0ZU9mZnNldCA+PSBidWZmZXIubGVuZ3RoKSB7XG4gICAgaWYgKGRpcikgcmV0dXJuIC0xXG4gICAgZWxzZSBieXRlT2Zmc2V0ID0gYnVmZmVyLmxlbmd0aCAtIDFcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0IDwgMCkge1xuICAgIGlmIChkaXIpIGJ5dGVPZmZzZXQgPSAwXG4gICAgZWxzZSByZXR1cm4gLTFcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSB2YWxcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsID0gQnVmZmVyLmZyb20odmFsLCBlbmNvZGluZylcbiAgfVxuXG4gIC8vIEZpbmFsbHksIHNlYXJjaCBlaXRoZXIgaW5kZXhPZiAoaWYgZGlyIGlzIHRydWUpIG9yIGxhc3RJbmRleE9mXG4gIGlmIChCdWZmZXIuaXNCdWZmZXIodmFsKSkge1xuICAgIC8vIFNwZWNpYWwgY2FzZTogbG9va2luZyBmb3IgZW1wdHkgc3RyaW5nL2J1ZmZlciBhbHdheXMgZmFpbHNcbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpXG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAweEZGIC8vIFNlYXJjaCBmb3IgYSBieXRlIHZhbHVlIFswLTI1NV1cbiAgICBpZiAodHlwZW9mIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmIChkaXIpIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBVaW50OEFycmF5LnByb3RvdHlwZS5sYXN0SW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlJbmRleE9mKGJ1ZmZlciwgW3ZhbF0sIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpXG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKCd2YWwgbXVzdCBiZSBzdHJpbmcsIG51bWJlciBvciBCdWZmZXInKVxufVxuXG5mdW5jdGlvbiBhcnJheUluZGV4T2YgKGFyciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIHZhciBpbmRleFNpemUgPSAxXG4gIHZhciBhcnJMZW5ndGggPSBhcnIubGVuZ3RoXG4gIHZhciB2YWxMZW5ndGggPSB2YWwubGVuZ3RoXG5cbiAgaWYgKGVuY29kaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICBlbmNvZGluZyA9IFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgIGlmIChlbmNvZGluZyA9PT0gJ3VjczInIHx8IGVuY29kaW5nID09PSAndWNzLTInIHx8XG4gICAgICAgIGVuY29kaW5nID09PSAndXRmMTZsZScgfHwgZW5jb2RpbmcgPT09ICd1dGYtMTZsZScpIHtcbiAgICAgIGlmIChhcnIubGVuZ3RoIDwgMiB8fCB2YWwubGVuZ3RoIDwgMikge1xuICAgICAgICByZXR1cm4gLTFcbiAgICAgIH1cbiAgICAgIGluZGV4U2l6ZSA9IDJcbiAgICAgIGFyckxlbmd0aCAvPSAyXG4gICAgICB2YWxMZW5ndGggLz0gMlxuICAgICAgYnl0ZU9mZnNldCAvPSAyXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZCAoYnVmLCBpKSB7XG4gICAgaWYgKGluZGV4U2l6ZSA9PT0gMSkge1xuICAgICAgcmV0dXJuIGJ1ZltpXVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYnVmLnJlYWRVSW50MTZCRShpICogaW5kZXhTaXplKVxuICAgIH1cbiAgfVxuXG4gIHZhciBpXG4gIGlmIChkaXIpIHtcbiAgICB2YXIgZm91bmRJbmRleCA9IC0xXG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA8IGFyckxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocmVhZChhcnIsIGkpID09PSByZWFkKHZhbCwgZm91bmRJbmRleCA9PT0gLTEgPyAwIDogaSAtIGZvdW5kSW5kZXgpKSB7XG4gICAgICAgIGlmIChmb3VuZEluZGV4ID09PSAtMSkgZm91bmRJbmRleCA9IGlcbiAgICAgICAgaWYgKGkgLSBmb3VuZEluZGV4ICsgMSA9PT0gdmFsTGVuZ3RoKSByZXR1cm4gZm91bmRJbmRleCAqIGluZGV4U2l6ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggIT09IC0xKSBpIC09IGkgLSBmb3VuZEluZGV4XG4gICAgICAgIGZvdW5kSW5kZXggPSAtMVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoYnl0ZU9mZnNldCArIHZhbExlbmd0aCA+IGFyckxlbmd0aCkgYnl0ZU9mZnNldCA9IGFyckxlbmd0aCAtIHZhbExlbmd0aFxuICAgIGZvciAoaSA9IGJ5dGVPZmZzZXQ7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB2YXIgZm91bmQgPSB0cnVlXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbExlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChyZWFkKGFyciwgaSArIGopICE9PSByZWFkKHZhbCwgaikpIHtcbiAgICAgICAgICBmb3VuZCA9IGZhbHNlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGZvdW5kKSByZXR1cm4gaVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAtMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluY2x1ZGVzID0gZnVuY3Rpb24gaW5jbHVkZXMgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIHRoaXMuaW5kZXhPZih2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSAhPT0gLTFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24gaW5kZXhPZiAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gYmlkaXJlY3Rpb25hbEluZGV4T2YodGhpcywgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgdHJ1ZSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5sYXN0SW5kZXhPZiA9IGZ1bmN0aW9uIGxhc3RJbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBmYWxzZSlcbn1cblxuZnVuY3Rpb24gaGV4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICBvZmZzZXQgPSBOdW1iZXIob2Zmc2V0KSB8fCAwXG4gIHZhciByZW1haW5pbmcgPSBidWYubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aClcbiAgICBpZiAobGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgICB9XG4gIH1cblxuICB2YXIgc3RyTGVuID0gc3RyaW5nLmxlbmd0aFxuXG4gIGlmIChsZW5ndGggPiBzdHJMZW4gLyAyKSB7XG4gICAgbGVuZ3RoID0gc3RyTGVuIC8gMlxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgcGFyc2VkID0gcGFyc2VJbnQoc3RyaW5nLnN1YnN0cihpICogMiwgMiksIDE2KVxuICAgIGlmIChudW1iZXJJc05hTihwYXJzZWQpKSByZXR1cm4gaVxuICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHBhcnNlZFxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIHV0ZjhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjhUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGFzY2lpV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihhc2NpaVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYmFzZTY0V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihiYXNlNjRUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIHVjczJXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjE2bGVUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiB3cml0ZSAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpIHtcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZylcbiAgaWYgKG9mZnNldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCdcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgZW5jb2RpbmcpXG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbmNvZGluZyA9IG9mZnNldFxuICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gICAgb2Zmc2V0ID0gMFxuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nLCBvZmZzZXRbLCBsZW5ndGhdWywgZW5jb2RpbmddKVxuICB9IGVsc2UgaWYgKGlzRmluaXRlKG9mZnNldCkpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgICBpZiAoaXNGaW5pdGUobGVuZ3RoKSkge1xuICAgICAgbGVuZ3RoID0gbGVuZ3RoID4+PiAwXG4gICAgICBpZiAoZW5jb2RpbmcgPT09IHVuZGVmaW5lZCkgZW5jb2RpbmcgPSAndXRmOCdcbiAgICB9IGVsc2Uge1xuICAgICAgZW5jb2RpbmcgPSBsZW5ndGhcbiAgICAgIGxlbmd0aCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnQnVmZmVyLndyaXRlKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldFssIGxlbmd0aF0pIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQnXG4gICAgKVxuICB9XG5cbiAgdmFyIHJlbWFpbmluZyA9IHRoaXMubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCB8fCBsZW5ndGggPiByZW1haW5pbmcpIGxlbmd0aCA9IHJlbWFpbmluZ1xuXG4gIGlmICgoc3RyaW5nLmxlbmd0aCA+IDAgJiYgKGxlbmd0aCA8IDAgfHwgb2Zmc2V0IDwgMCkpIHx8IG9mZnNldCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gd3JpdGUgb3V0c2lkZSBidWZmZXIgYm91bmRzJylcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGFzY2lpV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgLy8gV2FybmluZzogbWF4TGVuZ3RoIG5vdCB0YWtlbiBpbnRvIGFjY291bnQgaW4gYmFzZTY0V3JpdGVcbiAgICAgICAgcmV0dXJuIGJhc2U2NFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1Y3MyV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKCcnICsgZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gdG9KU09OICgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQnVmZmVyJyxcbiAgICBkYXRhOiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLl9hcnIgfHwgdGhpcywgMClcbiAgfVxufVxuXG5mdW5jdGlvbiBiYXNlNjRTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGJ1Zi5sZW5ndGgpIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYuc2xpY2Uoc3RhcnQsIGVuZCkpXG4gIH1cbn1cblxuZnVuY3Rpb24gdXRmOFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuICB2YXIgcmVzID0gW11cblxuICB2YXIgaSA9IHN0YXJ0XG4gIHdoaWxlIChpIDwgZW5kKSB7XG4gICAgdmFyIGZpcnN0Qnl0ZSA9IGJ1ZltpXVxuICAgIHZhciBjb2RlUG9pbnQgPSBudWxsXG4gICAgdmFyIGJ5dGVzUGVyU2VxdWVuY2UgPSAoZmlyc3RCeXRlID4gMHhFRilcbiAgICAgID8gNFxuICAgICAgOiAoZmlyc3RCeXRlID4gMHhERilcbiAgICAgICAgICA/IDNcbiAgICAgICAgICA6IChmaXJzdEJ5dGUgPiAweEJGKVxuICAgICAgICAgICAgICA/IDJcbiAgICAgICAgICAgICAgOiAxXG5cbiAgICBpZiAoaSArIGJ5dGVzUGVyU2VxdWVuY2UgPD0gZW5kKSB7XG4gICAgICB2YXIgc2Vjb25kQnl0ZSwgdGhpcmRCeXRlLCBmb3VydGhCeXRlLCB0ZW1wQ29kZVBvaW50XG5cbiAgICAgIHN3aXRjaCAoYnl0ZXNQZXJTZXF1ZW5jZSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaWYgKGZpcnN0Qnl0ZSA8IDB4ODApIHtcbiAgICAgICAgICAgIGNvZGVQb2ludCA9IGZpcnN0Qnl0ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweDFGKSA8PCAweDYgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4N0YpIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICB0aGlyZEJ5dGUgPSBidWZbaSArIDJdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKHRoaXJkQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHhDIHwgKHNlY29uZEJ5dGUgJiAweDNGKSA8PCAweDYgfCAodGhpcmRCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3RkYgJiYgKHRlbXBDb2RlUG9pbnQgPCAweEQ4MDAgfHwgdGVtcENvZGVQb2ludCA+IDB4REZGRikpIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICB0aGlyZEJ5dGUgPSBidWZbaSArIDJdXG4gICAgICAgICAgZm91cnRoQnl0ZSA9IGJ1ZltpICsgM11cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKGZvdXJ0aEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweEYpIDw8IDB4MTIgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4QyB8ICh0aGlyZEJ5dGUgJiAweDNGKSA8PCAweDYgfCAoZm91cnRoQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4RkZGRiAmJiB0ZW1wQ29kZVBvaW50IDwgMHgxMTAwMDApIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29kZVBvaW50ID09PSBudWxsKSB7XG4gICAgICAvLyB3ZSBkaWQgbm90IGdlbmVyYXRlIGEgdmFsaWQgY29kZVBvaW50IHNvIGluc2VydCBhXG4gICAgICAvLyByZXBsYWNlbWVudCBjaGFyIChVK0ZGRkQpIGFuZCBhZHZhbmNlIG9ubHkgMSBieXRlXG4gICAgICBjb2RlUG9pbnQgPSAweEZGRkRcbiAgICAgIGJ5dGVzUGVyU2VxdWVuY2UgPSAxXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPiAweEZGRkYpIHtcbiAgICAgIC8vIGVuY29kZSB0byB1dGYxNiAoc3Vycm9nYXRlIHBhaXIgZGFuY2UpXG4gICAgICBjb2RlUG9pbnQgLT0gMHgxMDAwMFxuICAgICAgcmVzLnB1c2goY29kZVBvaW50ID4+PiAxMCAmIDB4M0ZGIHwgMHhEODAwKVxuICAgICAgY29kZVBvaW50ID0gMHhEQzAwIHwgY29kZVBvaW50ICYgMHgzRkZcbiAgICB9XG5cbiAgICByZXMucHVzaChjb2RlUG9pbnQpXG4gICAgaSArPSBieXRlc1BlclNlcXVlbmNlXG4gIH1cblxuICByZXR1cm4gZGVjb2RlQ29kZVBvaW50c0FycmF5KHJlcylcbn1cblxuLy8gQmFzZWQgb24gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjI3NDcyNzIvNjgwNzQyLCB0aGUgYnJvd3NlciB3aXRoXG4vLyB0aGUgbG93ZXN0IGxpbWl0IGlzIENocm9tZSwgd2l0aCAweDEwMDAwIGFyZ3MuXG4vLyBXZSBnbyAxIG1hZ25pdHVkZSBsZXNzLCBmb3Igc2FmZXR5XG52YXIgTUFYX0FSR1VNRU5UU19MRU5HVEggPSAweDEwMDBcblxuZnVuY3Rpb24gZGVjb2RlQ29kZVBvaW50c0FycmF5IChjb2RlUG9pbnRzKSB7XG4gIHZhciBsZW4gPSBjb2RlUG9pbnRzLmxlbmd0aFxuICBpZiAobGVuIDw9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCBjb2RlUG9pbnRzKSAvLyBhdm9pZCBleHRyYSBzbGljZSgpXG4gIH1cblxuICAvLyBEZWNvZGUgaW4gY2h1bmtzIHRvIGF2b2lkIFwiY2FsbCBzdGFjayBzaXplIGV4Y2VlZGVkXCIuXG4gIHZhciByZXMgPSAnJ1xuICB2YXIgaSA9IDBcbiAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShcbiAgICAgIFN0cmluZyxcbiAgICAgIGNvZGVQb2ludHMuc2xpY2UoaSwgaSArPSBNQVhfQVJHVU1FTlRTX0xFTkdUSClcbiAgICApXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBhc2NpaVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSAmIDB4N0YpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBsYXRpbjFTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBoZXhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG5cbiAgaWYgKCFzdGFydCB8fCBzdGFydCA8IDApIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCB8fCBlbmQgPCAwIHx8IGVuZCA+IGxlbikgZW5kID0gbGVuXG5cbiAgdmFyIG91dCA9ICcnXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgb3V0ICs9IGhleFNsaWNlTG9va3VwVGFibGVbYnVmW2ldXVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGJ5dGVzID0gYnVmLnNsaWNlKHN0YXJ0LCBlbmQpXG4gIHZhciByZXMgPSAnJ1xuICAvLyBJZiBieXRlcy5sZW5ndGggaXMgb2RkLCB0aGUgbGFzdCA4IGJpdHMgbXVzdCBiZSBpZ25vcmVkIChzYW1lIGFzIG5vZGUuanMpXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoIC0gMTsgaSArPSAyKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0gKyAoYnl0ZXNbaSArIDFdICogMjU2KSlcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiBzbGljZSAoc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgc3RhcnQgPSB+fnN0YXJ0XG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogfn5lbmRcblxuICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgKz0gbGVuXG4gICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIH0gZWxzZSBpZiAoc3RhcnQgPiBsZW4pIHtcbiAgICBzdGFydCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuXG4gICAgaWYgKGVuZCA8IDApIGVuZCA9IDBcbiAgfSBlbHNlIGlmIChlbmQgPiBsZW4pIHtcbiAgICBlbmQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCBzdGFydCkgZW5kID0gc3RhcnRcblxuICB2YXIgbmV3QnVmID0gdGhpcy5zdWJhcnJheShzdGFydCwgZW5kKVxuICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZVxuICBPYmplY3Quc2V0UHJvdG90eXBlT2YobmV3QnVmLCBCdWZmZXIucHJvdG90eXBlKVxuXG4gIHJldHVybiBuZXdCdWZcbn1cblxuLypcbiAqIE5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgYnVmZmVyIGlzbid0IHRyeWluZyB0byB3cml0ZSBvdXQgb2YgYm91bmRzLlxuICovXG5mdW5jdGlvbiBjaGVja09mZnNldCAob2Zmc2V0LCBleHQsIGxlbmd0aCkge1xuICBpZiAoKG9mZnNldCAlIDEpICE9PSAwIHx8IG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdvZmZzZXQgaXMgbm90IHVpbnQnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gbGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVHJ5aW5nIHRvIGFjY2VzcyBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVpbnRMRSA9XG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50TEUgPSBmdW5jdGlvbiByZWFkVUludExFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF1cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgaV0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVWludEJFID1cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRCRSA9IGZ1bmN0aW9uIHJlYWRVSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuICB9XG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgLS1ieXRlTGVuZ3RoXVxuICB2YXIgbXVsID0gMVxuICB3aGlsZSAoYnl0ZUxlbmd0aCA+IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdICogbXVsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVpbnQ4ID1cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQ4ID0gZnVuY3Rpb24gcmVhZFVJbnQ4IChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVpbnQxNkxFID1cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkxFID0gZnVuY3Rpb24gcmVhZFVJbnQxNkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVWludDE2QkUgPVxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2QkUgPSBmdW5jdGlvbiByZWFkVUludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDgpIHwgdGhpc1tvZmZzZXQgKyAxXVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVaW50MzJMRSA9XG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKCh0aGlzW29mZnNldF0pIHxcbiAgICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSkgK1xuICAgICAgKHRoaXNbb2Zmc2V0ICsgM10gKiAweDEwMDAwMDApXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVpbnQzMkJFID1cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkJFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdICogMHgxMDAwMDAwKSArXG4gICAgKCh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgIHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludExFID0gZnVuY3Rpb24gcmVhZEludExFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF1cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgaV0gKiBtdWxcbiAgfVxuICBtdWwgKj0gMHg4MFxuXG4gIGlmICh2YWwgPj0gbXVsKSB2YWwgLT0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpXG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnRCRSA9IGZ1bmN0aW9uIHJlYWRJbnRCRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgaSA9IGJ5dGVMZW5ndGhcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgLS1pXVxuICB3aGlsZSAoaSA+IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyAtLWldICogbXVsXG4gIH1cbiAgbXVsICo9IDB4ODBcblxuICBpZiAodmFsID49IG11bCkgdmFsIC09IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50OCA9IGZ1bmN0aW9uIHJlYWRJbnQ4IChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICBpZiAoISh0aGlzW29mZnNldF0gJiAweDgwKSkgcmV0dXJuICh0aGlzW29mZnNldF0pXG4gIHJldHVybiAoKDB4ZmYgLSB0aGlzW29mZnNldF0gKyAxKSAqIC0xKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkxFID0gZnVuY3Rpb24gcmVhZEludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2QkUgPSBmdW5jdGlvbiByZWFkSW50MTZCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgMV0gfCAodGhpc1tvZmZzZXRdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJMRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdKSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10gPDwgMjQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyQkUgPSBmdW5jdGlvbiByZWFkSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCAyNCkgfFxuICAgICh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdExFID0gZnVuY3Rpb24gcmVhZEZsb2F0TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRCRSA9IGZ1bmN0aW9uIHJlYWRGbG9hdEJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVMRSA9IGZ1bmN0aW9uIHJlYWREb3VibGVMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDUyLCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVCRSA9IGZ1bmN0aW9uIHJlYWREb3VibGVCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCA1MiwgOClcbn1cblxuZnVuY3Rpb24gY2hlY2tJbnQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImJ1ZmZlclwiIGFyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXIgaW5zdGFuY2UnKVxuICBpZiAodmFsdWUgPiBtYXggfHwgdmFsdWUgPCBtaW4pIHRocm93IG5ldyBSYW5nZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgaXMgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVpbnRMRSA9XG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludExFID0gZnVuY3Rpb24gd3JpdGVVSW50TEUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIG1heEJ5dGVzID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpIC0gMVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG1heEJ5dGVzLCAwKVxuICB9XG5cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVpbnRCRSA9XG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludEJFID0gZnVuY3Rpb24gd3JpdGVVSW50QkUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIG1heEJ5dGVzID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpIC0gMVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG1heEJ5dGVzLCAwKVxuICB9XG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoIC0gMVxuICB2YXIgbXVsID0gMVxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVpbnQ4ID1cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50OCA9IGZ1bmN0aW9uIHdyaXRlVUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweGZmLCAwKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVWludDE2TEUgPVxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkxFID0gZnVuY3Rpb24gd3JpdGVVSW50MTZMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVpbnQxNkJFID1cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlVUludDE2QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVaW50MzJMRSA9XG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVWludDMyQkUgPVxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkJFID0gZnVuY3Rpb24gd3JpdGVVSW50MzJCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludExFID0gZnVuY3Rpb24gd3JpdGVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCAoOCAqIGJ5dGVMZW5ndGgpIC0gMSlcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KVxuICB9XG5cbiAgdmFyIGkgPSAwXG4gIHZhciBtdWwgPSAxXG4gIHZhciBzdWIgPSAwXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIGlmICh2YWx1ZSA8IDAgJiYgc3ViID09PSAwICYmIHRoaXNbb2Zmc2V0ICsgaSAtIDFdICE9PSAwKSB7XG4gICAgICBzdWIgPSAxXG4gICAgfVxuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAoKHZhbHVlIC8gbXVsKSA+PiAwKSAtIHN1YiAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlSW50QkUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIGxpbWl0ID0gTWF0aC5wb3coMiwgKDggKiBieXRlTGVuZ3RoKSAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHN1YiA9IDBcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgKyAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50OCA9IGZ1bmN0aW9uIHdyaXRlSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4N2YsIC0weDgwKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmYgKyB2YWx1ZSArIDFcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpXG4gIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkJFID0gZnVuY3Rpb24gd3JpdGVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbmZ1bmN0aW9uIGNoZWNrSUVFRTc1NCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbiAgaWYgKG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5mdW5jdGlvbiB3cml0ZUZsb2F0IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA0LCAzLjQwMjgyMzQ2NjM4NTI4ODZlKzM4LCAtMy40MDI4MjM0NjYzODUyODg2ZSszOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCAyMywgNClcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0TEUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRCRSA9IGZ1bmN0aW9uIHdyaXRlRmxvYXRCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiB3cml0ZURvdWJsZSAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgOCwgMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgsIC0xLjc5NzY5MzEzNDg2MjMxNTdFKzMwOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbiAgcmV0dXJuIG9mZnNldCArIDhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUxFID0gZnVuY3Rpb24gd3JpdGVEb3VibGVMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlQkUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG4vLyBjb3B5KHRhcmdldEJ1ZmZlciwgdGFyZ2V0U3RhcnQ9MCwgc291cmNlU3RhcnQ9MCwgc291cmNlRW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiBjb3B5ICh0YXJnZXQsIHRhcmdldFN0YXJ0LCBzdGFydCwgZW5kKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKHRhcmdldCkpIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FyZ3VtZW50IHNob3VsZCBiZSBhIEJ1ZmZlcicpXG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCAmJiBlbmQgIT09IDApIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXRTdGFydCA+PSB0YXJnZXQubGVuZ3RoKSB0YXJnZXRTdGFydCA9IHRhcmdldC5sZW5ndGhcbiAgaWYgKCF0YXJnZXRTdGFydCkgdGFyZ2V0U3RhcnQgPSAwXG4gIGlmIChlbmQgPiAwICYmIGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydFxuXG4gIC8vIENvcHkgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuIDBcbiAgaWYgKHRhcmdldC5sZW5ndGggPT09IDAgfHwgdGhpcy5sZW5ndGggPT09IDApIHJldHVybiAwXG5cbiAgLy8gRmF0YWwgZXJyb3IgY29uZGl0aW9uc1xuICBpZiAodGFyZ2V0U3RhcnQgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3RhcmdldFN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICB9XG4gIGlmIChzdGFydCA8IDAgfHwgc3RhcnQgPj0gdGhpcy5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxuICBpZiAoZW5kIDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZUVuZCBvdXQgb2YgYm91bmRzJylcblxuICAvLyBBcmUgd2Ugb29iP1xuICBpZiAoZW5kID4gdGhpcy5sZW5ndGgpIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgPCBlbmQgLSBzdGFydCkge1xuICAgIGVuZCA9IHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCArIHN0YXJ0XG4gIH1cblxuICB2YXIgbGVuID0gZW5kIC0gc3RhcnRcblxuICBpZiAodGhpcyA9PT0gdGFyZ2V0ICYmIHR5cGVvZiBVaW50OEFycmF5LnByb3RvdHlwZS5jb3B5V2l0aGluID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gVXNlIGJ1aWx0LWluIHdoZW4gYXZhaWxhYmxlLCBtaXNzaW5nIGZyb20gSUUxMVxuICAgIHRoaXMuY29weVdpdGhpbih0YXJnZXRTdGFydCwgc3RhcnQsIGVuZClcbiAgfSBlbHNlIHtcbiAgICBVaW50OEFycmF5LnByb3RvdHlwZS5zZXQuY2FsbChcbiAgICAgIHRhcmdldCxcbiAgICAgIHRoaXMuc3ViYXJyYXkoc3RhcnQsIGVuZCksXG4gICAgICB0YXJnZXRTdGFydFxuICAgIClcbiAgfVxuXG4gIHJldHVybiBsZW5cbn1cblxuLy8gVXNhZ2U6XG4vLyAgICBidWZmZXIuZmlsbChudW1iZXJbLCBvZmZzZXRbLCBlbmRdXSlcbi8vICAgIGJ1ZmZlci5maWxsKGJ1ZmZlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoc3RyaW5nWywgb2Zmc2V0WywgZW5kXV1bLCBlbmNvZGluZ10pXG5CdWZmZXIucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiBmaWxsICh2YWwsIHN0YXJ0LCBlbmQsIGVuY29kaW5nKSB7XG4gIC8vIEhhbmRsZSBzdHJpbmcgY2FzZXM6XG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIGlmICh0eXBlb2Ygc3RhcnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IHN0YXJ0XG4gICAgICBzdGFydCA9IDBcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZW5kID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBlbmRcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfVxuICAgIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2VuY29kaW5nIG11c3QgYmUgYSBzdHJpbmcnKVxuICAgIH1cbiAgICBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJyAmJiAhQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgfVxuICAgIGlmICh2YWwubGVuZ3RoID09PSAxKSB7XG4gICAgICB2YXIgY29kZSA9IHZhbC5jaGFyQ29kZUF0KDApXG4gICAgICBpZiAoKGVuY29kaW5nID09PSAndXRmOCcgJiYgY29kZSA8IDEyOCkgfHxcbiAgICAgICAgICBlbmNvZGluZyA9PT0gJ2xhdGluMScpIHtcbiAgICAgICAgLy8gRmFzdCBwYXRoOiBJZiBgdmFsYCBmaXRzIGludG8gYSBzaW5nbGUgYnl0ZSwgdXNlIHRoYXQgbnVtZXJpYyB2YWx1ZS5cbiAgICAgICAgdmFsID0gY29kZVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHZhbCA9IHZhbCAmIDI1NVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdib29sZWFuJykge1xuICAgIHZhbCA9IE51bWJlcih2YWwpXG4gIH1cblxuICAvLyBJbnZhbGlkIHJhbmdlcyBhcmUgbm90IHNldCB0byBhIGRlZmF1bHQsIHNvIGNhbiByYW5nZSBjaGVjayBlYXJseS5cbiAgaWYgKHN0YXJ0IDwgMCB8fCB0aGlzLmxlbmd0aCA8IHN0YXJ0IHx8IHRoaXMubGVuZ3RoIDwgZW5kKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ091dCBvZiByYW5nZSBpbmRleCcpXG4gIH1cblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHN0YXJ0ID0gc3RhcnQgPj4+IDBcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyB0aGlzLmxlbmd0aCA6IGVuZCA+Pj4gMFxuXG4gIGlmICghdmFsKSB2YWwgPSAwXG5cbiAgdmFyIGlcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgICAgdGhpc1tpXSA9IHZhbFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgYnl0ZXMgPSBCdWZmZXIuaXNCdWZmZXIodmFsKVxuICAgICAgPyB2YWxcbiAgICAgIDogQnVmZmVyLmZyb20odmFsLCBlbmNvZGluZylcbiAgICB2YXIgbGVuID0gYnl0ZXMubGVuZ3RoXG4gICAgaWYgKGxlbiA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIHZhbHVlIFwiJyArIHZhbCArXG4gICAgICAgICdcIiBpcyBpbnZhbGlkIGZvciBhcmd1bWVudCBcInZhbHVlXCInKVxuICAgIH1cbiAgICBmb3IgKGkgPSAwOyBpIDwgZW5kIC0gc3RhcnQ7ICsraSkge1xuICAgICAgdGhpc1tpICsgc3RhcnRdID0gYnl0ZXNbaSAlIGxlbl1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpc1xufVxuXG4vLyBIRUxQRVIgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT09XG5cbnZhciBJTlZBTElEX0JBU0U2NF9SRSA9IC9bXisvMC05QS1aYS16LV9dL2dcblxuZnVuY3Rpb24gYmFzZTY0Y2xlYW4gKHN0cikge1xuICAvLyBOb2RlIHRha2VzIGVxdWFsIHNpZ25zIGFzIGVuZCBvZiB0aGUgQmFzZTY0IGVuY29kaW5nXG4gIHN0ciA9IHN0ci5zcGxpdCgnPScpWzBdXG4gIC8vIE5vZGUgc3RyaXBzIG91dCBpbnZhbGlkIGNoYXJhY3RlcnMgbGlrZSBcXG4gYW5kIFxcdCBmcm9tIHRoZSBzdHJpbmcsIGJhc2U2NC1qcyBkb2VzIG5vdFxuICBzdHIgPSBzdHIudHJpbSgpLnJlcGxhY2UoSU5WQUxJRF9CQVNFNjRfUkUsICcnKVxuICAvLyBOb2RlIGNvbnZlcnRzIHN0cmluZ3Mgd2l0aCBsZW5ndGggPCAyIHRvICcnXG4gIGlmIChzdHIubGVuZ3RoIDwgMikgcmV0dXJuICcnXG4gIC8vIE5vZGUgYWxsb3dzIGZvciBub24tcGFkZGVkIGJhc2U2NCBzdHJpbmdzIChtaXNzaW5nIHRyYWlsaW5nID09PSksIGJhc2U2NC1qcyBkb2VzIG5vdFxuICB3aGlsZSAoc3RyLmxlbmd0aCAlIDQgIT09IDApIHtcbiAgICBzdHIgPSBzdHIgKyAnPSdcbiAgfVxuICByZXR1cm4gc3RyXG59XG5cbmZ1bmN0aW9uIHV0ZjhUb0J5dGVzIChzdHJpbmcsIHVuaXRzKSB7XG4gIHVuaXRzID0gdW5pdHMgfHwgSW5maW5pdHlcbiAgdmFyIGNvZGVQb2ludFxuICB2YXIgbGVuZ3RoID0gc3RyaW5nLmxlbmd0aFxuICB2YXIgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcbiAgdmFyIGJ5dGVzID0gW11cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgY29kZVBvaW50ID0gc3RyaW5nLmNoYXJDb2RlQXQoaSlcblxuICAgIC8vIGlzIHN1cnJvZ2F0ZSBjb21wb25lbnRcbiAgICBpZiAoY29kZVBvaW50ID4gMHhEN0ZGICYmIGNvZGVQb2ludCA8IDB4RTAwMCkge1xuICAgICAgLy8gbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICghbGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgICAvLyBubyBsZWFkIHlldFxuICAgICAgICBpZiAoY29kZVBvaW50ID4gMHhEQkZGKSB7XG4gICAgICAgICAgLy8gdW5leHBlY3RlZCB0cmFpbFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH0gZWxzZSBpZiAoaSArIDEgPT09IGxlbmd0aCkge1xuICAgICAgICAgIC8vIHVucGFpcmVkIGxlYWRcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdmFsaWQgbGVhZFxuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50XG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gMiBsZWFkcyBpbiBhIHJvd1xuICAgICAgaWYgKGNvZGVQb2ludCA8IDB4REMwMCkge1xuICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyB2YWxpZCBzdXJyb2dhdGUgcGFpclxuICAgICAgY29kZVBvaW50ID0gKGxlYWRTdXJyb2dhdGUgLSAweEQ4MDAgPDwgMTAgfCBjb2RlUG9pbnQgLSAweERDMDApICsgMHgxMDAwMFxuICAgIH0gZWxzZSBpZiAobGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgLy8gdmFsaWQgYm1wIGNoYXIsIGJ1dCBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgfVxuXG4gICAgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcblxuICAgIC8vIGVuY29kZSB1dGY4XG4gICAgaWYgKGNvZGVQb2ludCA8IDB4ODApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMSkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChjb2RlUG9pbnQpXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDgwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2IHwgMHhDMCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyB8IDB4RTAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDQpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDEyIHwgMHhGMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjb2RlIHBvaW50JylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnl0ZXNcbn1cblxuZnVuY3Rpb24gYXNjaWlUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgLy8gTm9kZSdzIGNvZGUgc2VlbXMgdG8gYmUgZG9pbmcgdGhpcyBhbmQgbm90ICYgMHg3Ri4uXG4gICAgYnl0ZUFycmF5LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkgJiAweEZGKVxuICB9XG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVRvQnl0ZXMgKHN0ciwgdW5pdHMpIHtcbiAgdmFyIGMsIGhpLCBsb1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKHVuaXRzIC09IDIpIDwgMCkgYnJlYWtcblxuICAgIGMgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGhpID0gYyA+PiA4XG4gICAgbG8gPSBjICUgMjU2XG4gICAgYnl0ZUFycmF5LnB1c2gobG8pXG4gICAgYnl0ZUFycmF5LnB1c2goaGkpXG4gIH1cblxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFRvQnl0ZXMgKHN0cikge1xuICByZXR1cm4gYmFzZTY0LnRvQnl0ZUFycmF5KGJhc2U2NGNsZWFuKHN0cikpXG59XG5cbmZ1bmN0aW9uIGJsaXRCdWZmZXIgKHNyYywgZHN0LCBvZmZzZXQsIGxlbmd0aCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgaWYgKChpICsgb2Zmc2V0ID49IGRzdC5sZW5ndGgpIHx8IChpID49IHNyYy5sZW5ndGgpKSBicmVha1xuICAgIGRzdFtpICsgb2Zmc2V0XSA9IHNyY1tpXVxuICB9XG4gIHJldHVybiBpXG59XG5cbi8vIEFycmF5QnVmZmVyIG9yIFVpbnQ4QXJyYXkgb2JqZWN0cyBmcm9tIG90aGVyIGNvbnRleHRzIChpLmUuIGlmcmFtZXMpIGRvIG5vdCBwYXNzXG4vLyB0aGUgYGluc3RhbmNlb2ZgIGNoZWNrIGJ1dCB0aGV5IHNob3VsZCBiZSB0cmVhdGVkIGFzIG9mIHRoYXQgdHlwZS5cbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9idWZmZXIvaXNzdWVzLzE2NlxuZnVuY3Rpb24gaXNJbnN0YW5jZSAob2JqLCB0eXBlKSB7XG4gIHJldHVybiBvYmogaW5zdGFuY2VvZiB0eXBlIHx8XG4gICAgKG9iaiAhPSBudWxsICYmIG9iai5jb25zdHJ1Y3RvciAhPSBudWxsICYmIG9iai5jb25zdHJ1Y3Rvci5uYW1lICE9IG51bGwgJiZcbiAgICAgIG9iai5jb25zdHJ1Y3Rvci5uYW1lID09PSB0eXBlLm5hbWUpXG59XG5mdW5jdGlvbiBudW1iZXJJc05hTiAob2JqKSB7XG4gIC8vIEZvciBJRTExIHN1cHBvcnRcbiAgcmV0dXJuIG9iaiAhPT0gb2JqIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2VsZi1jb21wYXJlXG59XG5cbi8vIENyZWF0ZSBsb29rdXAgdGFibGUgZm9yIGB0b1N0cmluZygnaGV4JylgXG4vLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvYnVmZmVyL2lzc3Vlcy8yMTlcbnZhciBoZXhTbGljZUxvb2t1cFRhYmxlID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGFscGhhYmV0ID0gJzAxMjM0NTY3ODlhYmNkZWYnXG4gIHZhciB0YWJsZSA9IG5ldyBBcnJheSgyNTYpXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgIHZhciBpMTYgPSBpICogMTZcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IDE2OyArK2opIHtcbiAgICAgIHRhYmxlW2kxNiArIGpdID0gYWxwaGFiZXRbaV0gKyBhbHBoYWJldFtqXVxuICAgIH1cbiAgfVxuICByZXR1cm4gdGFibGVcbn0pKClcbiIsIi8qISBpZWVlNzU0LiBCU0QtMy1DbGF1c2UgTGljZW5zZS4gRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnL29wZW5zb3VyY2U+ICovXG5leHBvcnRzLnJlYWQgPSBmdW5jdGlvbiAoYnVmZmVyLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbVxuICB2YXIgZUxlbiA9IChuQnl0ZXMgKiA4KSAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgbkJpdHMgPSAtN1xuICB2YXIgaSA9IGlzTEUgPyAobkJ5dGVzIC0gMSkgOiAwXG4gIHZhciBkID0gaXNMRSA/IC0xIDogMVxuICB2YXIgcyA9IGJ1ZmZlcltvZmZzZXQgKyBpXVxuXG4gIGkgKz0gZFxuXG4gIGUgPSBzICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIHMgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IGVMZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgZSA9IChlICogMjU2KSArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIG0gPSBlICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIGUgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IG1MZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgbSA9IChtICogMjU2KSArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIGlmIChlID09PSAwKSB7XG4gICAgZSA9IDEgLSBlQmlhc1xuICB9IGVsc2UgaWYgKGUgPT09IGVNYXgpIHtcbiAgICByZXR1cm4gbSA/IE5hTiA6ICgocyA/IC0xIDogMSkgKiBJbmZpbml0eSlcbiAgfSBlbHNlIHtcbiAgICBtID0gbSArIE1hdGgucG93KDIsIG1MZW4pXG4gICAgZSA9IGUgLSBlQmlhc1xuICB9XG4gIHJldHVybiAocyA/IC0xIDogMSkgKiBtICogTWF0aC5wb3coMiwgZSAtIG1MZW4pXG59XG5cbmV4cG9ydHMud3JpdGUgPSBmdW5jdGlvbiAoYnVmZmVyLCB2YWx1ZSwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sIGNcbiAgdmFyIGVMZW4gPSAobkJ5dGVzICogOCkgLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIHJ0ID0gKG1MZW4gPT09IDIzID8gTWF0aC5wb3coMiwgLTI0KSAtIE1hdGgucG93KDIsIC03NykgOiAwKVxuICB2YXIgaSA9IGlzTEUgPyAwIDogKG5CeXRlcyAtIDEpXG4gIHZhciBkID0gaXNMRSA/IDEgOiAtMVxuICB2YXIgcyA9IHZhbHVlIDwgMCB8fCAodmFsdWUgPT09IDAgJiYgMSAvIHZhbHVlIDwgMCkgPyAxIDogMFxuXG4gIHZhbHVlID0gTWF0aC5hYnModmFsdWUpXG5cbiAgaWYgKGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA9PT0gSW5maW5pdHkpIHtcbiAgICBtID0gaXNOYU4odmFsdWUpID8gMSA6IDBcbiAgICBlID0gZU1heFxuICB9IGVsc2Uge1xuICAgIGUgPSBNYXRoLmZsb29yKE1hdGgubG9nKHZhbHVlKSAvIE1hdGguTE4yKVxuICAgIGlmICh2YWx1ZSAqIChjID0gTWF0aC5wb3coMiwgLWUpKSA8IDEpIHtcbiAgICAgIGUtLVxuICAgICAgYyAqPSAyXG4gICAgfVxuICAgIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgdmFsdWUgKz0gcnQgLyBjXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlICs9IHJ0ICogTWF0aC5wb3coMiwgMSAtIGVCaWFzKVxuICAgIH1cbiAgICBpZiAodmFsdWUgKiBjID49IDIpIHtcbiAgICAgIGUrK1xuICAgICAgYyAvPSAyXG4gICAgfVxuXG4gICAgaWYgKGUgKyBlQmlhcyA+PSBlTWF4KSB7XG4gICAgICBtID0gMFxuICAgICAgZSA9IGVNYXhcbiAgICB9IGVsc2UgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICBtID0gKCh2YWx1ZSAqIGMpIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IGUgKyBlQmlhc1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gdmFsdWUgKiBNYXRoLnBvdygyLCBlQmlhcyAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSAwXG4gICAgfVxuICB9XG5cbiAgZm9yICg7IG1MZW4gPj0gODsgYnVmZmVyW29mZnNldCArIGldID0gbSAmIDB4ZmYsIGkgKz0gZCwgbSAvPSAyNTYsIG1MZW4gLT0gOCkge31cblxuICBlID0gKGUgPDwgbUxlbikgfCBtXG4gIGVMZW4gKz0gbUxlblxuICBmb3IgKDsgZUxlbiA+IDA7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IGUgJiAweGZmLCBpICs9IGQsIGUgLz0gMjU2LCBlTGVuIC09IDgpIHt9XG5cbiAgYnVmZmVyW29mZnNldCArIGkgLSBkXSB8PSBzICogMTI4XG59XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJjeXByZXNzXCIgLz5cbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyBUaGlzIGV4YW1wbGUgY29tbWFuZHMudHMgc2hvd3MgeW91IGhvdyB0b1xuLy8gY3JlYXRlIHZhcmlvdXMgY3VzdG9tIGNvbW1hbmRzIGFuZCBvdmVyd3JpdGVcbi8vIGV4aXN0aW5nIGNvbW1hbmRzLlxuLy9cbi8vIEZvciBtb3JlIGNvbXByZWhlbnNpdmUgZXhhbXBsZXMgb2YgY3VzdG9tXG4vLyBjb21tYW5kcyBwbGVhc2UgcmVhZCBtb3JlIGhlcmU6XG4vLyBodHRwczovL29uLmN5cHJlc3MuaW8vY3VzdG9tLWNvbW1hbmRzXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy9cbi8vXG4vLyAtLSBUaGlzIGlzIGEgcGFyZW50IGNvbW1hbmQgLS1cbi8vIEN5cHJlc3MuQ29tbWFuZHMuYWRkKCdsb2dpbicsIChlbWFpbCwgcGFzc3dvcmQpID0+IHsgLi4uIH0pXG4vL1xuLy9cbi8vIC0tIFRoaXMgaXMgYSBjaGlsZCBjb21tYW5kIC0tXG4vLyBDeXByZXNzLkNvbW1hbmRzLmFkZCgnZHJhZycsIHsgcHJldlN1YmplY3Q6ICdlbGVtZW50J30sIChzdWJqZWN0LCBvcHRpb25zKSA9PiB7IC4uLiB9KVxuLy9cbi8vXG4vLyAtLSBUaGlzIGlzIGEgZHVhbCBjb21tYW5kIC0tXG4vLyBDeXByZXNzLkNvbW1hbmRzLmFkZCgnZGlzbWlzcycsIHsgcHJldlN1YmplY3Q6ICdvcHRpb25hbCd9LCAoc3ViamVjdCwgb3B0aW9ucykgPT4geyAuLi4gfSlcbi8vXG4vL1xuLy8gLS0gVGhpcyB3aWxsIG92ZXJ3cml0ZSBhbiBleGlzdGluZyBjb21tYW5kIC0tXG4vLyBDeXByZXNzLkNvbW1hbmRzLm92ZXJ3cml0ZSgndmlzaXQnLCAob3JpZ2luYWxGbiwgdXJsLCBvcHRpb25zKSA9PiB7IC4uLiB9KVxuLy9cbi8vIGRlY2xhcmUgZ2xvYmFsIHtcbi8vICAgbmFtZXNwYWNlIEN5cHJlc3Mge1xuLy8gICAgIGludGVyZmFjZSBDaGFpbmFibGUge1xuLy8gICAgICAgbG9naW4oZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IENoYWluYWJsZTx2b2lkPlxuLy8gICAgICAgZHJhZyhzdWJqZWN0OiBzdHJpbmcsIG9wdGlvbnM/OiBQYXJ0aWFsPFR5cGVPcHRpb25zPik6IENoYWluYWJsZTxFbGVtZW50PlxuLy8gICAgICAgZGlzbWlzcyhzdWJqZWN0OiBzdHJpbmcsIG9wdGlvbnM/OiBQYXJ0aWFsPFR5cGVPcHRpb25zPik6IENoYWluYWJsZTxFbGVtZW50PlxuLy8gICAgICAgdmlzaXQob3JpZ2luYWxGbjogQ29tbWFuZE9yaWdpbmFsRm4sIHVybDogc3RyaW5nLCBvcHRpb25zOiBQYXJ0aWFsPFZpc2l0T3B0aW9ucz4pOiBDaGFpbmFibGU8RWxlbWVudD5cbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cbiIsInZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19kZWZOb3JtYWxQcm9wID0gKG9iaiwga2V5LCB2YWx1ZSkgPT4ga2V5IGluIG9iaiA/IF9fZGVmUHJvcChvYmosIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlLCB2YWx1ZSB9KSA6IG9ialtrZXldID0gdmFsdWU7XG52YXIgX19wdWJsaWNGaWVsZCA9IChvYmosIGtleSwgdmFsdWUpID0+IF9fZGVmTm9ybWFsUHJvcChvYmosIHR5cGVvZiBrZXkgIT09IFwic3ltYm9sXCIgPyBrZXkgKyBcIlwiIDoga2V5LCB2YWx1ZSk7XG52YXIgTm9kZVR5cGUgPSAvKiBAX19QVVJFX18gKi8gKChOb2RlVHlwZTIpID0+IHtcbiAgTm9kZVR5cGUyW05vZGVUeXBlMltcIkRvY3VtZW50XCJdID0gMF0gPSBcIkRvY3VtZW50XCI7XG4gIE5vZGVUeXBlMltOb2RlVHlwZTJbXCJEb2N1bWVudFR5cGVcIl0gPSAxXSA9IFwiRG9jdW1lbnRUeXBlXCI7XG4gIE5vZGVUeXBlMltOb2RlVHlwZTJbXCJFbGVtZW50XCJdID0gMl0gPSBcIkVsZW1lbnRcIjtcbiAgTm9kZVR5cGUyW05vZGVUeXBlMltcIlRleHRcIl0gPSAzXSA9IFwiVGV4dFwiO1xuICBOb2RlVHlwZTJbTm9kZVR5cGUyW1wiQ0RBVEFcIl0gPSA0XSA9IFwiQ0RBVEFcIjtcbiAgTm9kZVR5cGUyW05vZGVUeXBlMltcIkNvbW1lbnRcIl0gPSA1XSA9IFwiQ29tbWVudFwiO1xuICByZXR1cm4gTm9kZVR5cGUyO1xufSkoTm9kZVR5cGUgfHwge30pO1xuY29uc3QgdGVzdGFibGVBY2Nlc3NvcnMgPSB7XG4gIE5vZGU6IFtcImNoaWxkTm9kZXNcIiwgXCJwYXJlbnROb2RlXCIsIFwicGFyZW50RWxlbWVudFwiLCBcInRleHRDb250ZW50XCJdLFxuICBTaGFkb3dSb290OiBbXCJob3N0XCIsIFwic3R5bGVTaGVldHNcIl0sXG4gIEVsZW1lbnQ6IFtcInNoYWRvd1Jvb3RcIiwgXCJxdWVyeVNlbGVjdG9yXCIsIFwicXVlcnlTZWxlY3RvckFsbFwiXSxcbiAgTXV0YXRpb25PYnNlcnZlcjogW11cbn07XG5jb25zdCB0ZXN0YWJsZU1ldGhvZHMgPSB7XG4gIE5vZGU6IFtcImNvbnRhaW5zXCIsIFwiZ2V0Um9vdE5vZGVcIl0sXG4gIFNoYWRvd1Jvb3Q6IFtcImdldFNlbGVjdGlvblwiXSxcbiAgRWxlbWVudDogW10sXG4gIE11dGF0aW9uT2JzZXJ2ZXI6IFtcImNvbnN0cnVjdG9yXCJdXG59O1xuY29uc3QgdW50YWludGVkQmFzZVByb3RvdHlwZSA9IHt9O1xuZnVuY3Rpb24gZ2V0VW50YWludGVkUHJvdG90eXBlKGtleSkge1xuICBpZiAodW50YWludGVkQmFzZVByb3RvdHlwZVtrZXldKVxuICAgIHJldHVybiB1bnRhaW50ZWRCYXNlUHJvdG90eXBlW2tleV07XG4gIGNvbnN0IGRlZmF1bHRPYmogPSBnbG9iYWxUaGlzW2tleV07XG4gIGNvbnN0IGRlZmF1bHRQcm90b3R5cGUgPSBkZWZhdWx0T2JqLnByb3RvdHlwZTtcbiAgY29uc3QgYWNjZXNzb3JOYW1lcyA9IGtleSBpbiB0ZXN0YWJsZUFjY2Vzc29ycyA/IHRlc3RhYmxlQWNjZXNzb3JzW2tleV0gOiB2b2lkIDA7XG4gIGNvbnN0IGlzVW50YWludGVkQWNjZXNzb3JzID0gQm9vbGVhbihcbiAgICBhY2Nlc3Nvck5hbWVzICYmIC8vIEB0cy1leHBlY3QtZXJyb3IgMjM0NVxuICAgIGFjY2Vzc29yTmFtZXMuZXZlcnkoXG4gICAgICAoYWNjZXNzb3IpID0+IHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4oXG4gICAgICAgICAgKF9iID0gKF9hID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihkZWZhdWx0UHJvdG90eXBlLCBhY2Nlc3NvcikpID09IG51bGwgPyB2b2lkIDAgOiBfYS5nZXQpID09IG51bGwgPyB2b2lkIDAgOiBfYi50b1N0cmluZygpLmluY2x1ZGVzKFwiW25hdGl2ZSBjb2RlXVwiKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIClcbiAgKTtcbiAgY29uc3QgbWV0aG9kTmFtZXMgPSBrZXkgaW4gdGVzdGFibGVNZXRob2RzID8gdGVzdGFibGVNZXRob2RzW2tleV0gOiB2b2lkIDA7XG4gIGNvbnN0IGlzVW50YWludGVkTWV0aG9kcyA9IEJvb2xlYW4oXG4gICAgbWV0aG9kTmFtZXMgJiYgbWV0aG9kTmFtZXMuZXZlcnkoXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIDIzNDVcbiAgICAgIChtZXRob2QpID0+IHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICByZXR1cm4gdHlwZW9mIGRlZmF1bHRQcm90b3R5cGVbbWV0aG9kXSA9PT0gXCJmdW5jdGlvblwiICYmICgoX2EgPSBkZWZhdWx0UHJvdG90eXBlW21ldGhvZF0pID09IG51bGwgPyB2b2lkIDAgOiBfYS50b1N0cmluZygpLmluY2x1ZGVzKFwiW25hdGl2ZSBjb2RlXVwiKSk7XG4gICAgICB9XG4gICAgKVxuICApO1xuICBpZiAoaXNVbnRhaW50ZWRBY2Nlc3NvcnMgJiYgaXNVbnRhaW50ZWRNZXRob2RzKSB7XG4gICAgdW50YWludGVkQmFzZVByb3RvdHlwZVtrZXldID0gZGVmYXVsdE9iai5wcm90b3R5cGU7XG4gICAgcmV0dXJuIGRlZmF1bHRPYmoucHJvdG90eXBlO1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgaWZyYW1lRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaWZyYW1lRWwpO1xuICAgIGNvbnN0IHdpbiA9IGlmcmFtZUVsLmNvbnRlbnRXaW5kb3c7XG4gICAgaWYgKCF3aW4pIHJldHVybiBkZWZhdWx0T2JqLnByb3RvdHlwZTtcbiAgICBjb25zdCB1bnRhaW50ZWRPYmplY3QgPSB3aW5ba2V5XS5wcm90b3R5cGU7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChpZnJhbWVFbCk7XG4gICAgaWYgKCF1bnRhaW50ZWRPYmplY3QpIHJldHVybiBkZWZhdWx0UHJvdG90eXBlO1xuICAgIHJldHVybiB1bnRhaW50ZWRCYXNlUHJvdG90eXBlW2tleV0gPSB1bnRhaW50ZWRPYmplY3Q7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBkZWZhdWx0UHJvdG90eXBlO1xuICB9XG59XG5jb25zdCB1bnRhaW50ZWRBY2Nlc3NvckNhY2hlID0ge307XG5mdW5jdGlvbiBnZXRVbnRhaW50ZWRBY2Nlc3NvcihrZXksIGluc3RhbmNlLCBhY2Nlc3Nvcikge1xuICB2YXIgX2E7XG4gIGNvbnN0IGNhY2hlS2V5ID0gYCR7a2V5fS4ke1N0cmluZyhhY2Nlc3Nvcil9YDtcbiAgaWYgKHVudGFpbnRlZEFjY2Vzc29yQ2FjaGVbY2FjaGVLZXldKVxuICAgIHJldHVybiB1bnRhaW50ZWRBY2Nlc3NvckNhY2hlW2NhY2hlS2V5XS5jYWxsKFxuICAgICAgaW5zdGFuY2VcbiAgICApO1xuICBjb25zdCB1bnRhaW50ZWRQcm90b3R5cGUgPSBnZXRVbnRhaW50ZWRQcm90b3R5cGUoa2V5KTtcbiAgY29uc3QgdW50YWludGVkQWNjZXNzb3IgPSAoX2EgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFxuICAgIHVudGFpbnRlZFByb3RvdHlwZSxcbiAgICBhY2Nlc3NvclxuICApKSA9PSBudWxsID8gdm9pZCAwIDogX2EuZ2V0O1xuICBpZiAoIXVudGFpbnRlZEFjY2Vzc29yKSByZXR1cm4gaW5zdGFuY2VbYWNjZXNzb3JdO1xuICB1bnRhaW50ZWRBY2Nlc3NvckNhY2hlW2NhY2hlS2V5XSA9IHVudGFpbnRlZEFjY2Vzc29yO1xuICByZXR1cm4gdW50YWludGVkQWNjZXNzb3IuY2FsbChpbnN0YW5jZSk7XG59XG5jb25zdCB1bnRhaW50ZWRNZXRob2RDYWNoZSA9IHt9O1xuZnVuY3Rpb24gZ2V0VW50YWludGVkTWV0aG9kKGtleSwgaW5zdGFuY2UsIG1ldGhvZCkge1xuICBjb25zdCBjYWNoZUtleSA9IGAke2tleX0uJHtTdHJpbmcobWV0aG9kKX1gO1xuICBpZiAodW50YWludGVkTWV0aG9kQ2FjaGVbY2FjaGVLZXldKVxuICAgIHJldHVybiB1bnRhaW50ZWRNZXRob2RDYWNoZVtjYWNoZUtleV0uYmluZChcbiAgICAgIGluc3RhbmNlXG4gICAgKTtcbiAgY29uc3QgdW50YWludGVkUHJvdG90eXBlID0gZ2V0VW50YWludGVkUHJvdG90eXBlKGtleSk7XG4gIGNvbnN0IHVudGFpbnRlZE1ldGhvZCA9IHVudGFpbnRlZFByb3RvdHlwZVttZXRob2RdO1xuICBpZiAodHlwZW9mIHVudGFpbnRlZE1ldGhvZCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gaW5zdGFuY2VbbWV0aG9kXTtcbiAgdW50YWludGVkTWV0aG9kQ2FjaGVbY2FjaGVLZXldID0gdW50YWludGVkTWV0aG9kO1xuICByZXR1cm4gdW50YWludGVkTWV0aG9kLmJpbmQoaW5zdGFuY2UpO1xufVxuZnVuY3Rpb24gY2hpbGROb2RlcyhuKSB7XG4gIHJldHVybiBnZXRVbnRhaW50ZWRBY2Nlc3NvcihcIk5vZGVcIiwgbiwgXCJjaGlsZE5vZGVzXCIpO1xufVxuZnVuY3Rpb24gcGFyZW50Tm9kZShuKSB7XG4gIHJldHVybiBnZXRVbnRhaW50ZWRBY2Nlc3NvcihcIk5vZGVcIiwgbiwgXCJwYXJlbnROb2RlXCIpO1xufVxuZnVuY3Rpb24gcGFyZW50RWxlbWVudChuKSB7XG4gIHJldHVybiBnZXRVbnRhaW50ZWRBY2Nlc3NvcihcIk5vZGVcIiwgbiwgXCJwYXJlbnRFbGVtZW50XCIpO1xufVxuZnVuY3Rpb24gdGV4dENvbnRlbnQobikge1xuICByZXR1cm4gZ2V0VW50YWludGVkQWNjZXNzb3IoXCJOb2RlXCIsIG4sIFwidGV4dENvbnRlbnRcIik7XG59XG5mdW5jdGlvbiBjb250YWlucyhuLCBvdGhlcikge1xuICByZXR1cm4gZ2V0VW50YWludGVkTWV0aG9kKFwiTm9kZVwiLCBuLCBcImNvbnRhaW5zXCIpKG90aGVyKTtcbn1cbmZ1bmN0aW9uIGdldFJvb3ROb2RlKG4pIHtcbiAgcmV0dXJuIGdldFVudGFpbnRlZE1ldGhvZChcIk5vZGVcIiwgbiwgXCJnZXRSb290Tm9kZVwiKSgpO1xufVxuZnVuY3Rpb24gaG9zdChuKSB7XG4gIGlmICghbiB8fCAhKFwiaG9zdFwiIGluIG4pKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIGdldFVudGFpbnRlZEFjY2Vzc29yKFwiU2hhZG93Um9vdFwiLCBuLCBcImhvc3RcIik7XG59XG5mdW5jdGlvbiBzdHlsZVNoZWV0cyhuKSB7XG4gIHJldHVybiBuLnN0eWxlU2hlZXRzO1xufVxuZnVuY3Rpb24gc2hhZG93Um9vdChuKSB7XG4gIGlmICghbiB8fCAhKFwic2hhZG93Um9vdFwiIGluIG4pKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIGdldFVudGFpbnRlZEFjY2Vzc29yKFwiRWxlbWVudFwiLCBuLCBcInNoYWRvd1Jvb3RcIik7XG59XG5mdW5jdGlvbiBxdWVyeVNlbGVjdG9yKG4sIHNlbGVjdG9ycykge1xuICByZXR1cm4gZ2V0VW50YWludGVkQWNjZXNzb3IoXCJFbGVtZW50XCIsIG4sIFwicXVlcnlTZWxlY3RvclwiKShzZWxlY3RvcnMpO1xufVxuZnVuY3Rpb24gcXVlcnlTZWxlY3RvckFsbChuLCBzZWxlY3RvcnMpIHtcbiAgcmV0dXJuIGdldFVudGFpbnRlZEFjY2Vzc29yKFwiRWxlbWVudFwiLCBuLCBcInF1ZXJ5U2VsZWN0b3JBbGxcIikoc2VsZWN0b3JzKTtcbn1cbmZ1bmN0aW9uIG11dGF0aW9uT2JzZXJ2ZXJDdG9yKCkge1xuICByZXR1cm4gZ2V0VW50YWludGVkUHJvdG90eXBlKFwiTXV0YXRpb25PYnNlcnZlclwiKS5jb25zdHJ1Y3Rvcjtcbn1cbmNvbnN0IGluZGV4ID0ge1xuICBjaGlsZE5vZGVzLFxuICBwYXJlbnROb2RlLFxuICBwYXJlbnRFbGVtZW50LFxuICB0ZXh0Q29udGVudCxcbiAgY29udGFpbnMsXG4gIGdldFJvb3ROb2RlLFxuICBob3N0LFxuICBzdHlsZVNoZWV0cyxcbiAgc2hhZG93Um9vdCxcbiAgcXVlcnlTZWxlY3RvcixcbiAgcXVlcnlTZWxlY3RvckFsbCxcbiAgbXV0YXRpb25PYnNlcnZlcjogbXV0YXRpb25PYnNlcnZlckN0b3Jcbn07XG5mdW5jdGlvbiBpc0VsZW1lbnQobikge1xuICByZXR1cm4gbi5ub2RlVHlwZSA9PT0gbi5FTEVNRU5UX05PREU7XG59XG5mdW5jdGlvbiBpc1NoYWRvd1Jvb3Qobikge1xuICBjb25zdCBob3N0RWwgPSAoXG4gICAgLy8gYW5jaG9yIGFuZCB0ZXh0YXJlYSBlbGVtZW50cyBhbHNvIGhhdmUgYSBgaG9zdGAgcHJvcGVydHlcbiAgICAvLyBidXQgb25seSBzaGFkb3cgcm9vdHMgaGF2ZSBhIGBtb2RlYCBwcm9wZXJ0eVxuICAgIG4gJiYgXCJob3N0XCIgaW4gbiAmJiBcIm1vZGVcIiBpbiBuICYmIGluZGV4Lmhvc3QobikgfHwgbnVsbFxuICApO1xuICByZXR1cm4gQm9vbGVhbihcbiAgICBob3N0RWwgJiYgXCJzaGFkb3dSb290XCIgaW4gaG9zdEVsICYmIGluZGV4LnNoYWRvd1Jvb3QoaG9zdEVsKSA9PT0gblxuICApO1xufVxuZnVuY3Rpb24gaXNOYXRpdmVTaGFkb3dEb20oc2hhZG93Um9vdDIpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChzaGFkb3dSb290MikgPT09IFwiW29iamVjdCBTaGFkb3dSb290XVwiO1xufVxuZnVuY3Rpb24gZml4QnJvd3NlckNvbXBhdGliaWxpdHlJc3N1ZXNJbkNTUyhjc3NUZXh0KSB7XG4gIGlmIChjc3NUZXh0LmluY2x1ZGVzKFwiIGJhY2tncm91bmQtY2xpcDogdGV4dDtcIikgJiYgIWNzc1RleHQuaW5jbHVkZXMoXCIgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XCIpKSB7XG4gICAgY3NzVGV4dCA9IGNzc1RleHQucmVwbGFjZShcbiAgICAgIC9cXHNiYWNrZ3JvdW5kLWNsaXA6XFxzKnRleHQ7L2csXG4gICAgICBcIiAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDsgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1wiXG4gICAgKTtcbiAgfVxuICByZXR1cm4gY3NzVGV4dDtcbn1cbmZ1bmN0aW9uIGVzY2FwZUltcG9ydFN0YXRlbWVudChydWxlMikge1xuICBjb25zdCB7IGNzc1RleHQgfSA9IHJ1bGUyO1xuICBpZiAoY3NzVGV4dC5zcGxpdCgnXCInKS5sZW5ndGggPCAzKSByZXR1cm4gY3NzVGV4dDtcbiAgY29uc3Qgc3RhdGVtZW50ID0gW1wiQGltcG9ydFwiLCBgdXJsKCR7SlNPTi5zdHJpbmdpZnkocnVsZTIuaHJlZil9KWBdO1xuICBpZiAocnVsZTIubGF5ZXJOYW1lID09PSBcIlwiKSB7XG4gICAgc3RhdGVtZW50LnB1c2goYGxheWVyYCk7XG4gIH0gZWxzZSBpZiAocnVsZTIubGF5ZXJOYW1lKSB7XG4gICAgc3RhdGVtZW50LnB1c2goYGxheWVyKCR7cnVsZTIubGF5ZXJOYW1lfSlgKTtcbiAgfVxuICBpZiAocnVsZTIuc3VwcG9ydHNUZXh0KSB7XG4gICAgc3RhdGVtZW50LnB1c2goYHN1cHBvcnRzKCR7cnVsZTIuc3VwcG9ydHNUZXh0fSlgKTtcbiAgfVxuICBpZiAocnVsZTIubWVkaWEubGVuZ3RoKSB7XG4gICAgc3RhdGVtZW50LnB1c2gocnVsZTIubWVkaWEubWVkaWFUZXh0KTtcbiAgfVxuICByZXR1cm4gc3RhdGVtZW50LmpvaW4oXCIgXCIpICsgXCI7XCI7XG59XG5mdW5jdGlvbiBzdHJpbmdpZnlTdHlsZXNoZWV0KHMpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBydWxlcyA9IHMucnVsZXMgfHwgcy5jc3NSdWxlcztcbiAgICBpZiAoIXJ1bGVzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgbGV0IHNoZWV0SHJlZiA9IHMuaHJlZjtcbiAgICBpZiAoIXNoZWV0SHJlZiAmJiBzLm93bmVyTm9kZSAmJiBzLm93bmVyTm9kZS5vd25lckRvY3VtZW50KSB7XG4gICAgICBzaGVldEhyZWYgPSBzLm93bmVyTm9kZS5vd25lckRvY3VtZW50LmxvY2F0aW9uLmhyZWY7XG4gICAgfVxuICAgIGNvbnN0IHN0cmluZ2lmaWVkUnVsZXMgPSBBcnJheS5mcm9tKFxuICAgICAgcnVsZXMsXG4gICAgICAocnVsZTIpID0+IHN0cmluZ2lmeVJ1bGUocnVsZTIsIHNoZWV0SHJlZilcbiAgICApLmpvaW4oXCJcIik7XG4gICAgcmV0dXJuIGZpeEJyb3dzZXJDb21wYXRpYmlsaXR5SXNzdWVzSW5DU1Moc3RyaW5naWZpZWRSdWxlcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbmZ1bmN0aW9uIHN0cmluZ2lmeVJ1bGUocnVsZTIsIHNoZWV0SHJlZikge1xuICBpZiAoaXNDU1NJbXBvcnRSdWxlKHJ1bGUyKSkge1xuICAgIGxldCBpbXBvcnRTdHJpbmdpZmllZDtcbiAgICB0cnkge1xuICAgICAgaW1wb3J0U3RyaW5naWZpZWQgPSAvLyBmb3Igc2FtZS1vcmlnaW4gc3R5bGVzaGVldHMsXG4gICAgICAvLyB3ZSBjYW4gYWNjZXNzIHRoZSBpbXBvcnRlZCBzdHlsZXNoZWV0IHJ1bGVzIGRpcmVjdGx5XG4gICAgICBzdHJpbmdpZnlTdHlsZXNoZWV0KHJ1bGUyLnN0eWxlU2hlZXQpIHx8IC8vIHdvcmsgYXJvdW5kIGJyb3dzZXIgaXNzdWVzIHdpdGggdGhlIHJhdyBzdHJpbmcgYEBpbXBvcnQgdXJsKC4uLilgIHN0YXRlbWVudFxuICAgICAgZXNjYXBlSW1wb3J0U3RhdGVtZW50KHJ1bGUyKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaW1wb3J0U3RyaW5naWZpZWQgPSBydWxlMi5jc3NUZXh0O1xuICAgIH1cbiAgICBpZiAocnVsZTIuc3R5bGVTaGVldC5ocmVmKSB7XG4gICAgICByZXR1cm4gYWJzb2x1dGlmeVVSTHMoaW1wb3J0U3RyaW5naWZpZWQsIHJ1bGUyLnN0eWxlU2hlZXQuaHJlZik7XG4gICAgfVxuICAgIHJldHVybiBpbXBvcnRTdHJpbmdpZmllZDtcbiAgfSBlbHNlIHtcbiAgICBsZXQgcnVsZVN0cmluZ2lmaWVkID0gcnVsZTIuY3NzVGV4dDtcbiAgICBpZiAoaXNDU1NTdHlsZVJ1bGUocnVsZTIpICYmIHJ1bGUyLnNlbGVjdG9yVGV4dC5pbmNsdWRlcyhcIjpcIikpIHtcbiAgICAgIHJ1bGVTdHJpbmdpZmllZCA9IGZpeFNhZmFyaUNvbG9ucyhydWxlU3RyaW5naWZpZWQpO1xuICAgIH1cbiAgICBpZiAoc2hlZXRIcmVmKSB7XG4gICAgICByZXR1cm4gYWJzb2x1dGlmeVVSTHMocnVsZVN0cmluZ2lmaWVkLCBzaGVldEhyZWYpO1xuICAgIH1cbiAgICByZXR1cm4gcnVsZVN0cmluZ2lmaWVkO1xuICB9XG59XG5mdW5jdGlvbiBmaXhTYWZhcmlDb2xvbnMoY3NzU3RyaW5naWZpZWQpIHtcbiAgY29uc3QgcmVnZXggPSAvKFxcWyg/OltcXHctXSspW15cXFxcXSkoOig/OltcXHctXSspXFxdKS9nbTtcbiAgcmV0dXJuIGNzc1N0cmluZ2lmaWVkLnJlcGxhY2UocmVnZXgsIFwiJDFcXFxcJDJcIik7XG59XG5mdW5jdGlvbiBpc0NTU0ltcG9ydFJ1bGUocnVsZTIpIHtcbiAgcmV0dXJuIFwic3R5bGVTaGVldFwiIGluIHJ1bGUyO1xufVxuZnVuY3Rpb24gaXNDU1NTdHlsZVJ1bGUocnVsZTIpIHtcbiAgcmV0dXJuIFwic2VsZWN0b3JUZXh0XCIgaW4gcnVsZTI7XG59XG5jbGFzcyBNaXJyb3Ige1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwiaWROb2RlTWFwXCIsIC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCkpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJub2RlTWV0YU1hcFwiLCAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKSk7XG4gIH1cbiAgZ2V0SWQobikge1xuICAgIHZhciBfYTtcbiAgICBpZiAoIW4pIHJldHVybiAtMTtcbiAgICBjb25zdCBpZCA9IChfYSA9IHRoaXMuZ2V0TWV0YShuKSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmlkO1xuICAgIHJldHVybiBpZCA/PyAtMTtcbiAgfVxuICBnZXROb2RlKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMuaWROb2RlTWFwLmdldChpZCkgfHwgbnVsbDtcbiAgfVxuICBnZXRJZHMoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5pZE5vZGVNYXAua2V5cygpKTtcbiAgfVxuICBnZXRNZXRhKG4pIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlTWV0YU1hcC5nZXQobikgfHwgbnVsbDtcbiAgfVxuICAvLyByZW1vdmVzIHRoZSBub2RlIGZyb20gaWROb2RlTWFwXG4gIC8vIGRvZXNuJ3QgcmVtb3ZlIHRoZSBub2RlIGZyb20gbm9kZU1ldGFNYXBcbiAgcmVtb3ZlTm9kZUZyb21NYXAobikge1xuICAgIGNvbnN0IGlkID0gdGhpcy5nZXRJZChuKTtcbiAgICB0aGlzLmlkTm9kZU1hcC5kZWxldGUoaWQpO1xuICAgIGlmIChuLmNoaWxkTm9kZXMpIHtcbiAgICAgIG4uY2hpbGROb2Rlcy5mb3JFYWNoKFxuICAgICAgICAoY2hpbGROb2RlKSA9PiB0aGlzLnJlbW92ZU5vZGVGcm9tTWFwKGNoaWxkTm9kZSlcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIGhhcyhpZCkge1xuICAgIHJldHVybiB0aGlzLmlkTm9kZU1hcC5oYXMoaWQpO1xuICB9XG4gIGhhc05vZGUobm9kZTIpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlTWV0YU1hcC5oYXMobm9kZTIpO1xuICB9XG4gIGFkZChuLCBtZXRhKSB7XG4gICAgY29uc3QgaWQgPSBtZXRhLmlkO1xuICAgIHRoaXMuaWROb2RlTWFwLnNldChpZCwgbik7XG4gICAgdGhpcy5ub2RlTWV0YU1hcC5zZXQobiwgbWV0YSk7XG4gIH1cbiAgcmVwbGFjZShpZCwgbikge1xuICAgIGNvbnN0IG9sZE5vZGUgPSB0aGlzLmdldE5vZGUoaWQpO1xuICAgIGlmIChvbGROb2RlKSB7XG4gICAgICBjb25zdCBtZXRhID0gdGhpcy5ub2RlTWV0YU1hcC5nZXQob2xkTm9kZSk7XG4gICAgICBpZiAobWV0YSkgdGhpcy5ub2RlTWV0YU1hcC5zZXQobiwgbWV0YSk7XG4gICAgfVxuICAgIHRoaXMuaWROb2RlTWFwLnNldChpZCwgbik7XG4gIH1cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5pZE5vZGVNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICAgIHRoaXMubm9kZU1ldGFNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbiAgfVxufVxuZnVuY3Rpb24gY3JlYXRlTWlycm9yKCkge1xuICByZXR1cm4gbmV3IE1pcnJvcigpO1xufVxuZnVuY3Rpb24gbWFza0lucHV0VmFsdWUoe1xuICBlbGVtZW50LFxuICBtYXNrSW5wdXRPcHRpb25zLFxuICB0YWdOYW1lLFxuICB0eXBlLFxuICB2YWx1ZSxcbiAgbWFza0lucHV0Rm5cbn0pIHtcbiAgbGV0IHRleHQgPSB2YWx1ZSB8fCBcIlwiO1xuICBjb25zdCBhY3R1YWxUeXBlID0gdHlwZSAmJiB0b0xvd2VyQ2FzZSh0eXBlKTtcbiAgaWYgKG1hc2tJbnB1dE9wdGlvbnNbdGFnTmFtZS50b0xvd2VyQ2FzZSgpXSB8fCBhY3R1YWxUeXBlICYmIG1hc2tJbnB1dE9wdGlvbnNbYWN0dWFsVHlwZV0pIHtcbiAgICBpZiAobWFza0lucHV0Rm4pIHtcbiAgICAgIHRleHQgPSBtYXNrSW5wdXRGbih0ZXh0LCBlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGV4dCA9IFwiKlwiLnJlcGVhdCh0ZXh0Lmxlbmd0aCk7XG4gICAgfVxuICB9XG4gIHJldHVybiB0ZXh0O1xufVxuZnVuY3Rpb24gdG9Mb3dlckNhc2Uoc3RyKSB7XG4gIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKTtcbn1cbmNvbnN0IE9SSUdJTkFMX0FUVFJJQlVURV9OQU1FID0gXCJfX3Jyd2ViX29yaWdpbmFsX19cIjtcbmZ1bmN0aW9uIGlzMkRDYW52YXNCbGFuayhjYW52YXMpIHtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgaWYgKCFjdHgpIHJldHVybiB0cnVlO1xuICBjb25zdCBjaHVua1NpemUgPSA1MDtcbiAgZm9yIChsZXQgeDIgPSAwOyB4MiA8IGNhbnZhcy53aWR0aDsgeDIgKz0gY2h1bmtTaXplKSB7XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBjYW52YXMuaGVpZ2h0OyB5ICs9IGNodW5rU2l6ZSkge1xuICAgICAgY29uc3QgZ2V0SW1hZ2VEYXRhID0gY3R4LmdldEltYWdlRGF0YTtcbiAgICAgIGNvbnN0IG9yaWdpbmFsR2V0SW1hZ2VEYXRhID0gT1JJR0lOQUxfQVRUUklCVVRFX05BTUUgaW4gZ2V0SW1hZ2VEYXRhID8gZ2V0SW1hZ2VEYXRhW09SSUdJTkFMX0FUVFJJQlVURV9OQU1FXSA6IGdldEltYWdlRGF0YTtcbiAgICAgIGNvbnN0IHBpeGVsQnVmZmVyID0gbmV3IFVpbnQzMkFycmF5KFxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hcmd1bWVudCwgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1tZW1iZXItYWNjZXNzXG4gICAgICAgIG9yaWdpbmFsR2V0SW1hZ2VEYXRhLmNhbGwoXG4gICAgICAgICAgY3R4LFxuICAgICAgICAgIHgyLFxuICAgICAgICAgIHksXG4gICAgICAgICAgTWF0aC5taW4oY2h1bmtTaXplLCBjYW52YXMud2lkdGggLSB4MiksXG4gICAgICAgICAgTWF0aC5taW4oY2h1bmtTaXplLCBjYW52YXMuaGVpZ2h0IC0geSlcbiAgICAgICAgKS5kYXRhLmJ1ZmZlclxuICAgICAgKTtcbiAgICAgIGlmIChwaXhlbEJ1ZmZlci5zb21lKChwaXhlbCkgPT4gcGl4ZWwgIT09IDApKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuZnVuY3Rpb24gaXNOb2RlTWV0YUVxdWFsKGEsIGIpIHtcbiAgaWYgKCFhIHx8ICFiIHx8IGEudHlwZSAhPT0gYi50eXBlKSByZXR1cm4gZmFsc2U7XG4gIGlmIChhLnR5cGUgPT09IE5vZGVUeXBlLkRvY3VtZW50KVxuICAgIHJldHVybiBhLmNvbXBhdE1vZGUgPT09IGIuY29tcGF0TW9kZTtcbiAgZWxzZSBpZiAoYS50eXBlID09PSBOb2RlVHlwZS5Eb2N1bWVudFR5cGUpXG4gICAgcmV0dXJuIGEubmFtZSA9PT0gYi5uYW1lICYmIGEucHVibGljSWQgPT09IGIucHVibGljSWQgJiYgYS5zeXN0ZW1JZCA9PT0gYi5zeXN0ZW1JZDtcbiAgZWxzZSBpZiAoYS50eXBlID09PSBOb2RlVHlwZS5Db21tZW50IHx8IGEudHlwZSA9PT0gTm9kZVR5cGUuVGV4dCB8fCBhLnR5cGUgPT09IE5vZGVUeXBlLkNEQVRBKVxuICAgIHJldHVybiBhLnRleHRDb250ZW50ID09PSBiLnRleHRDb250ZW50O1xuICBlbHNlIGlmIChhLnR5cGUgPT09IE5vZGVUeXBlLkVsZW1lbnQpXG4gICAgcmV0dXJuIGEudGFnTmFtZSA9PT0gYi50YWdOYW1lICYmIEpTT04uc3RyaW5naWZ5KGEuYXR0cmlidXRlcykgPT09IEpTT04uc3RyaW5naWZ5KGIuYXR0cmlidXRlcykgJiYgYS5pc1NWRyA9PT0gYi5pc1NWRyAmJiBhLm5lZWRCbG9jayA9PT0gYi5uZWVkQmxvY2s7XG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGdldElucHV0VHlwZShlbGVtZW50KSB7XG4gIGNvbnN0IHR5cGUgPSBlbGVtZW50LnR5cGU7XG4gIHJldHVybiBlbGVtZW50Lmhhc0F0dHJpYnV0ZShcImRhdGEtcnItaXMtcGFzc3dvcmRcIikgPyBcInBhc3N3b3JkXCIgOiB0eXBlID8gKFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5uZWNlc3NhcnktdHlwZS1hc3NlcnRpb25cbiAgICB0b0xvd2VyQ2FzZSh0eXBlKVxuICApIDogbnVsbDtcbn1cbmZ1bmN0aW9uIGV4dHJhY3RGaWxlRXh0ZW5zaW9uKHBhdGgsIGJhc2VVUkwpIHtcbiAgbGV0IHVybDtcbiAgdHJ5IHtcbiAgICB1cmwgPSBuZXcgVVJMKHBhdGgsIGJhc2VVUkwgPz8gd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCByZWdleCA9IC9cXC4oWzAtOWEtel0rKSg/OiQpL2k7XG4gIGNvbnN0IG1hdGNoID0gdXJsLnBhdGhuYW1lLm1hdGNoKHJlZ2V4KTtcbiAgcmV0dXJuIChtYXRjaCA9PSBudWxsID8gdm9pZCAwIDogbWF0Y2hbMV0pID8/IG51bGw7XG59XG5mdW5jdGlvbiBleHRyYWN0T3JpZ2luKHVybCkge1xuICBsZXQgb3JpZ2luID0gXCJcIjtcbiAgaWYgKHVybC5pbmRleE9mKFwiLy9cIikgPiAtMSkge1xuICAgIG9yaWdpbiA9IHVybC5zcGxpdChcIi9cIikuc2xpY2UoMCwgMykuam9pbihcIi9cIik7XG4gIH0gZWxzZSB7XG4gICAgb3JpZ2luID0gdXJsLnNwbGl0KFwiL1wiKVswXTtcbiAgfVxuICBvcmlnaW4gPSBvcmlnaW4uc3BsaXQoXCI/XCIpWzBdO1xuICByZXR1cm4gb3JpZ2luO1xufVxuY29uc3QgVVJMX0lOX0NTU19SRUYgPSAvdXJsXFwoKD86KCcpKFteJ10qKSd8KFwiKSguKj8pXCJ8KFteKV0qKSlcXCkvZ207XG5jb25zdCBVUkxfUFJPVE9DT0xfTUFUQ0ggPSAvXig/OlthLXorXSs6KT9cXC9cXC8vaTtcbmNvbnN0IFVSTF9XV1dfTUFUQ0ggPSAvXnd3d1xcLi4qL2k7XG5jb25zdCBEQVRBX1VSSSA9IC9eKGRhdGE6KShbXixdKiksKC4qKS9pO1xuZnVuY3Rpb24gYWJzb2x1dGlmeVVSTHMoY3NzVGV4dCwgaHJlZikge1xuICByZXR1cm4gKGNzc1RleHQgfHwgXCJcIikucmVwbGFjZShcbiAgICBVUkxfSU5fQ1NTX1JFRixcbiAgICAob3JpZ2luLCBxdW90ZTEsIHBhdGgxLCBxdW90ZTIsIHBhdGgyLCBwYXRoMykgPT4ge1xuICAgICAgY29uc3QgZmlsZVBhdGggPSBwYXRoMSB8fCBwYXRoMiB8fCBwYXRoMztcbiAgICAgIGNvbnN0IG1heWJlUXVvdGUgPSBxdW90ZTEgfHwgcXVvdGUyIHx8IFwiXCI7XG4gICAgICBpZiAoIWZpbGVQYXRoKSB7XG4gICAgICAgIHJldHVybiBvcmlnaW47XG4gICAgICB9XG4gICAgICBpZiAoVVJMX1BST1RPQ09MX01BVENILnRlc3QoZmlsZVBhdGgpIHx8IFVSTF9XV1dfTUFUQ0gudGVzdChmaWxlUGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIGB1cmwoJHttYXliZVF1b3RlfSR7ZmlsZVBhdGh9JHttYXliZVF1b3RlfSlgO1xuICAgICAgfVxuICAgICAgaWYgKERBVEFfVVJJLnRlc3QoZmlsZVBhdGgpKSB7XG4gICAgICAgIHJldHVybiBgdXJsKCR7bWF5YmVRdW90ZX0ke2ZpbGVQYXRofSR7bWF5YmVRdW90ZX0pYDtcbiAgICAgIH1cbiAgICAgIGlmIChmaWxlUGF0aFswXSA9PT0gXCIvXCIpIHtcbiAgICAgICAgcmV0dXJuIGB1cmwoJHttYXliZVF1b3RlfSR7ZXh0cmFjdE9yaWdpbihocmVmKSArIGZpbGVQYXRofSR7bWF5YmVRdW90ZX0pYDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHN0YWNrID0gaHJlZi5zcGxpdChcIi9cIik7XG4gICAgICBjb25zdCBwYXJ0cyA9IGZpbGVQYXRoLnNwbGl0KFwiL1wiKTtcbiAgICAgIHN0YWNrLnBvcCgpO1xuICAgICAgZm9yIChjb25zdCBwYXJ0IG9mIHBhcnRzKSB7XG4gICAgICAgIGlmIChwYXJ0ID09PSBcIi5cIikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHBhcnQgPT09IFwiLi5cIikge1xuICAgICAgICAgIHN0YWNrLnBvcCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YWNrLnB1c2gocGFydCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBgdXJsKCR7bWF5YmVRdW90ZX0ke3N0YWNrLmpvaW4oXCIvXCIpfSR7bWF5YmVRdW90ZX0pYDtcbiAgICB9XG4gICk7XG59XG5mdW5jdGlvbiBub3JtYWxpemVDc3NTdHJpbmcoY3NzVGV4dCkge1xuICByZXR1cm4gY3NzVGV4dC5yZXBsYWNlKC8oXFwvXFwqW14qXSpcXCpcXC8pfFtcXHM7XS9nLCBcIlwiKTtcbn1cbmZ1bmN0aW9uIHNwbGl0Q3NzVGV4dChjc3NUZXh0LCBzdHlsZSkge1xuICBjb25zdCBjaGlsZE5vZGVzMiA9IEFycmF5LmZyb20oc3R5bGUuY2hpbGROb2Rlcyk7XG4gIGNvbnN0IHNwbGl0cyA9IFtdO1xuICBpZiAoY2hpbGROb2RlczIubGVuZ3RoID4gMSAmJiBjc3NUZXh0ICYmIHR5cGVvZiBjc3NUZXh0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgY29uc3QgY3NzVGV4dE5vcm0gPSBub3JtYWxpemVDc3NTdHJpbmcoY3NzVGV4dCk7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBjaGlsZE5vZGVzMi5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGNoaWxkTm9kZXMyW2ldLnRleHRDb250ZW50ICYmIHR5cGVvZiBjaGlsZE5vZGVzMltpXS50ZXh0Q29udGVudCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjb25zdCB0ZXh0Q29udGVudE5vcm0gPSBub3JtYWxpemVDc3NTdHJpbmcoY2hpbGROb2RlczJbaV0udGV4dENvbnRlbnQpO1xuICAgICAgICBmb3IgKGxldCBqID0gMzsgaiA8IHRleHRDb250ZW50Tm9ybS5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGNvbnN0IGJpdCA9IHRleHRDb250ZW50Tm9ybS5zdWJzdHJpbmcoMCwgaik7XG4gICAgICAgICAgaWYgKGNzc1RleHROb3JtLnNwbGl0KGJpdCkubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICBjb25zdCBzcGxpdE5vcm0gPSBjc3NUZXh0Tm9ybS5pbmRleE9mKGJpdCk7XG4gICAgICAgICAgICBmb3IgKGxldCBrID0gc3BsaXROb3JtOyBrIDwgY3NzVGV4dC5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICBpZiAobm9ybWFsaXplQ3NzU3RyaW5nKGNzc1RleHQuc3Vic3RyaW5nKDAsIGspKS5sZW5ndGggPT09IHNwbGl0Tm9ybSkge1xuICAgICAgICAgICAgICAgIHNwbGl0cy5wdXNoKGNzc1RleHQuc3Vic3RyaW5nKDAsIGspKTtcbiAgICAgICAgICAgICAgICBjc3NUZXh0ID0gY3NzVGV4dC5zdWJzdHJpbmcoayk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBzcGxpdHMucHVzaChjc3NUZXh0KTtcbiAgcmV0dXJuIHNwbGl0cztcbn1cbmZ1bmN0aW9uIG1hcmtDc3NTcGxpdHMoY3NzVGV4dCwgc3R5bGUpIHtcbiAgcmV0dXJuIHNwbGl0Q3NzVGV4dChjc3NUZXh0LCBzdHlsZSkuam9pbihcIi8qIHJyX3NwbGl0ICovXCIpO1xufVxubGV0IF9pZCA9IDE7XG5jb25zdCB0YWdOYW1lUmVnZXggPSBuZXcgUmVnRXhwKFwiW15hLXowLTktXzpdXCIpO1xuY29uc3QgSUdOT1JFRF9OT0RFID0gLTI7XG5mdW5jdGlvbiBnZW5JZCgpIHtcbiAgcmV0dXJuIF9pZCsrO1xufVxuZnVuY3Rpb24gZ2V0VmFsaWRUYWdOYW1lKGVsZW1lbnQpIHtcbiAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQpIHtcbiAgICByZXR1cm4gXCJmb3JtXCI7XG4gIH1cbiAgY29uc3QgcHJvY2Vzc2VkVGFnTmFtZSA9IHRvTG93ZXJDYXNlKGVsZW1lbnQudGFnTmFtZSk7XG4gIGlmICh0YWdOYW1lUmVnZXgudGVzdChwcm9jZXNzZWRUYWdOYW1lKSkge1xuICAgIHJldHVybiBcImRpdlwiO1xuICB9XG4gIHJldHVybiBwcm9jZXNzZWRUYWdOYW1lO1xufVxubGV0IGNhbnZhc1NlcnZpY2U7XG5sZXQgY2FudmFzQ3R4O1xuY29uc3QgU1JDU0VUX05PVF9TUEFDRVMgPSAvXlteIFxcdFxcblxcclxcdTAwMGNdKy87XG5jb25zdCBTUkNTRVRfQ09NTUFTX09SX1NQQUNFUyA9IC9eWywgXFx0XFxuXFxyXFx1MDAwY10rLztcbmZ1bmN0aW9uIGdldEFic29sdXRlU3Jjc2V0U3RyaW5nKGRvYywgYXR0cmlidXRlVmFsdWUpIHtcbiAgaWYgKGF0dHJpYnV0ZVZhbHVlLnRyaW0oKSA9PT0gXCJcIikge1xuICAgIHJldHVybiBhdHRyaWJ1dGVWYWx1ZTtcbiAgfVxuICBsZXQgcG9zID0gMDtcbiAgZnVuY3Rpb24gY29sbGVjdENoYXJhY3RlcnMocmVnRXgpIHtcbiAgICBsZXQgY2hhcnM7XG4gICAgY29uc3QgbWF0Y2ggPSByZWdFeC5leGVjKGF0dHJpYnV0ZVZhbHVlLnN1YnN0cmluZyhwb3MpKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIGNoYXJzID0gbWF0Y2hbMF07XG4gICAgICBwb3MgKz0gY2hhcnMubGVuZ3RoO1xuICAgICAgcmV0dXJuIGNoYXJzO1xuICAgIH1cbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuICBjb25zdCBvdXRwdXQgPSBbXTtcbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb2xsZWN0Q2hhcmFjdGVycyhTUkNTRVRfQ09NTUFTX09SX1NQQUNFUyk7XG4gICAgaWYgKHBvcyA+PSBhdHRyaWJ1dGVWYWx1ZS5sZW5ndGgpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBsZXQgdXJsID0gY29sbGVjdENoYXJhY3RlcnMoU1JDU0VUX05PVF9TUEFDRVMpO1xuICAgIGlmICh1cmwuc2xpY2UoLTEpID09PSBcIixcIikge1xuICAgICAgdXJsID0gYWJzb2x1dGVUb0RvYyhkb2MsIHVybC5zdWJzdHJpbmcoMCwgdXJsLmxlbmd0aCAtIDEpKTtcbiAgICAgIG91dHB1dC5wdXNoKHVybCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBkZXNjcmlwdG9yc1N0ciA9IFwiXCI7XG4gICAgICB1cmwgPSBhYnNvbHV0ZVRvRG9jKGRvYywgdXJsKTtcbiAgICAgIGxldCBpblBhcmVucyA9IGZhbHNlO1xuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgY29uc3QgYyA9IGF0dHJpYnV0ZVZhbHVlLmNoYXJBdChwb3MpO1xuICAgICAgICBpZiAoYyA9PT0gXCJcIikge1xuICAgICAgICAgIG91dHB1dC5wdXNoKCh1cmwgKyBkZXNjcmlwdG9yc1N0cikudHJpbSgpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIGlmICghaW5QYXJlbnMpIHtcbiAgICAgICAgICBpZiAoYyA9PT0gXCIsXCIpIHtcbiAgICAgICAgICAgIHBvcyArPSAxO1xuICAgICAgICAgICAgb3V0cHV0LnB1c2goKHVybCArIGRlc2NyaXB0b3JzU3RyKS50cmltKCkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfSBlbHNlIGlmIChjID09PSBcIihcIikge1xuICAgICAgICAgICAgaW5QYXJlbnMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoYyA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgIGluUGFyZW5zID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRlc2NyaXB0b3JzU3RyICs9IGM7XG4gICAgICAgIHBvcyArPSAxO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gb3V0cHV0LmpvaW4oXCIsIFwiKTtcbn1cbmNvbnN0IGNhY2hlZERvY3VtZW50ID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG5mdW5jdGlvbiBhYnNvbHV0ZVRvRG9jKGRvYywgYXR0cmlidXRlVmFsdWUpIHtcbiAgaWYgKCFhdHRyaWJ1dGVWYWx1ZSB8fCBhdHRyaWJ1dGVWYWx1ZS50cmltKCkgPT09IFwiXCIpIHtcbiAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gIH1cbiAgcmV0dXJuIGdldEhyZWYoZG9jLCBhdHRyaWJ1dGVWYWx1ZSk7XG59XG5mdW5jdGlvbiBpc1NWR0VsZW1lbnQoZWwpIHtcbiAgcmV0dXJuIEJvb2xlYW4oZWwudGFnTmFtZSA9PT0gXCJzdmdcIiB8fCBlbC5vd25lclNWR0VsZW1lbnQpO1xufVxuZnVuY3Rpb24gZ2V0SHJlZihkb2MsIGN1c3RvbUhyZWYpIHtcbiAgbGV0IGEgPSBjYWNoZWREb2N1bWVudC5nZXQoZG9jKTtcbiAgaWYgKCFhKSB7XG4gICAgYSA9IGRvYy5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBjYWNoZWREb2N1bWVudC5zZXQoZG9jLCBhKTtcbiAgfVxuICBpZiAoIWN1c3RvbUhyZWYpIHtcbiAgICBjdXN0b21IcmVmID0gXCJcIjtcbiAgfSBlbHNlIGlmIChjdXN0b21IcmVmLnN0YXJ0c1dpdGgoXCJibG9iOlwiKSB8fCBjdXN0b21IcmVmLnN0YXJ0c1dpdGgoXCJkYXRhOlwiKSkge1xuICAgIHJldHVybiBjdXN0b21IcmVmO1xuICB9XG4gIGEuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBjdXN0b21IcmVmKTtcbiAgcmV0dXJuIGEuaHJlZjtcbn1cbmZ1bmN0aW9uIHRyYW5zZm9ybUF0dHJpYnV0ZShkb2MsIHRhZ05hbWUsIG5hbWUsIHZhbHVlKSB7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKG5hbWUgPT09IFwic3JjXCIgfHwgbmFtZSA9PT0gXCJocmVmXCIgJiYgISh0YWdOYW1lID09PSBcInVzZVwiICYmIHZhbHVlWzBdID09PSBcIiNcIikpIHtcbiAgICByZXR1cm4gYWJzb2x1dGVUb0RvYyhkb2MsIHZhbHVlKTtcbiAgfSBlbHNlIGlmIChuYW1lID09PSBcInhsaW5rOmhyZWZcIiAmJiB2YWx1ZVswXSAhPT0gXCIjXCIpIHtcbiAgICByZXR1cm4gYWJzb2x1dGVUb0RvYyhkb2MsIHZhbHVlKTtcbiAgfSBlbHNlIGlmIChuYW1lID09PSBcImJhY2tncm91bmRcIiAmJiAodGFnTmFtZSA9PT0gXCJ0YWJsZVwiIHx8IHRhZ05hbWUgPT09IFwidGRcIiB8fCB0YWdOYW1lID09PSBcInRoXCIpKSB7XG4gICAgcmV0dXJuIGFic29sdXRlVG9Eb2MoZG9jLCB2YWx1ZSk7XG4gIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJzcmNzZXRcIikge1xuICAgIHJldHVybiBnZXRBYnNvbHV0ZVNyY3NldFN0cmluZyhkb2MsIHZhbHVlKTtcbiAgfSBlbHNlIGlmIChuYW1lID09PSBcInN0eWxlXCIpIHtcbiAgICByZXR1cm4gYWJzb2x1dGlmeVVSTHModmFsdWUsIGdldEhyZWYoZG9jKSk7XG4gIH0gZWxzZSBpZiAodGFnTmFtZSA9PT0gXCJvYmplY3RcIiAmJiBuYW1lID09PSBcImRhdGFcIikge1xuICAgIHJldHVybiBhYnNvbHV0ZVRvRG9jKGRvYywgdmFsdWUpO1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGlnbm9yZUF0dHJpYnV0ZSh0YWdOYW1lLCBuYW1lLCBfdmFsdWUpIHtcbiAgcmV0dXJuICh0YWdOYW1lID09PSBcInZpZGVvXCIgfHwgdGFnTmFtZSA9PT0gXCJhdWRpb1wiKSAmJiBuYW1lID09PSBcImF1dG9wbGF5XCI7XG59XG5mdW5jdGlvbiBfaXNCbG9ja2VkRWxlbWVudChlbGVtZW50LCBibG9ja0NsYXNzLCBibG9ja1NlbGVjdG9yKSB7XG4gIHRyeSB7XG4gICAgaWYgKHR5cGVvZiBibG9ja0NsYXNzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoYmxvY2tDbGFzcykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGVJbmRleCA9IGVsZW1lbnQuY2xhc3NMaXN0Lmxlbmd0aDsgZUluZGV4LS07ICkge1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTGlzdFtlSW5kZXhdO1xuICAgICAgICBpZiAoYmxvY2tDbGFzcy50ZXN0KGNsYXNzTmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYmxvY2tTZWxlY3Rvcikge1xuICAgICAgcmV0dXJuIGVsZW1lbnQubWF0Y2hlcyhibG9ja1NlbGVjdG9yKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBjbGFzc01hdGNoZXNSZWdleChub2RlMiwgcmVnZXgsIGNoZWNrQW5jZXN0b3JzKSB7XG4gIGlmICghbm9kZTIpIHJldHVybiBmYWxzZTtcbiAgaWYgKG5vZGUyLm5vZGVUeXBlICE9PSBub2RlMi5FTEVNRU5UX05PREUpIHtcbiAgICBpZiAoIWNoZWNrQW5jZXN0b3JzKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIGNsYXNzTWF0Y2hlc1JlZ2V4KGluZGV4LnBhcmVudE5vZGUobm9kZTIpLCByZWdleCwgY2hlY2tBbmNlc3RvcnMpO1xuICB9XG4gIGZvciAobGV0IGVJbmRleCA9IG5vZGUyLmNsYXNzTGlzdC5sZW5ndGg7IGVJbmRleC0tOyApIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSBub2RlMi5jbGFzc0xpc3RbZUluZGV4XTtcbiAgICBpZiAocmVnZXgudGVzdChjbGFzc05hbWUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgaWYgKCFjaGVja0FuY2VzdG9ycykgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gY2xhc3NNYXRjaGVzUmVnZXgoaW5kZXgucGFyZW50Tm9kZShub2RlMiksIHJlZ2V4LCBjaGVja0FuY2VzdG9ycyk7XG59XG5mdW5jdGlvbiBuZWVkTWFza2luZ1RleHQobm9kZTIsIG1hc2tUZXh0Q2xhc3MsIG1hc2tUZXh0U2VsZWN0b3IsIGNoZWNrQW5jZXN0b3JzKSB7XG4gIGxldCBlbDtcbiAgaWYgKGlzRWxlbWVudChub2RlMikpIHtcbiAgICBlbCA9IG5vZGUyO1xuICAgIGlmICghaW5kZXguY2hpbGROb2RlcyhlbCkubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9IGVsc2UgaWYgKGluZGV4LnBhcmVudEVsZW1lbnQobm9kZTIpID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIGVsID0gaW5kZXgucGFyZW50RWxlbWVudChub2RlMik7XG4gIH1cbiAgdHJ5IHtcbiAgICBpZiAodHlwZW9mIG1hc2tUZXh0Q2xhc3MgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGlmIChjaGVja0FuY2VzdG9ycykge1xuICAgICAgICBpZiAoZWwuY2xvc2VzdChgLiR7bWFza1RleHRDbGFzc31gKSkgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKG1hc2tUZXh0Q2xhc3MpKSByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNsYXNzTWF0Y2hlc1JlZ2V4KGVsLCBtYXNrVGV4dENsYXNzLCBjaGVja0FuY2VzdG9ycykpIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAobWFza1RleHRTZWxlY3Rvcikge1xuICAgICAgaWYgKGNoZWNrQW5jZXN0b3JzKSB7XG4gICAgICAgIGlmIChlbC5jbG9zZXN0KG1hc2tUZXh0U2VsZWN0b3IpKSByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChlbC5tYXRjaGVzKG1hc2tUZXh0U2VsZWN0b3IpKSByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBvbmNlSWZyYW1lTG9hZGVkKGlmcmFtZUVsLCBsaXN0ZW5lciwgaWZyYW1lTG9hZFRpbWVvdXQpIHtcbiAgY29uc3Qgd2luID0gaWZyYW1lRWwuY29udGVudFdpbmRvdztcbiAgaWYgKCF3aW4pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IGZpcmVkID0gZmFsc2U7XG4gIGxldCByZWFkeVN0YXRlO1xuICB0cnkge1xuICAgIHJlYWR5U3RhdGUgPSB3aW4uZG9jdW1lbnQucmVhZHlTdGF0ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHJlYWR5U3RhdGUgIT09IFwiY29tcGxldGVcIikge1xuICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIWZpcmVkKSB7XG4gICAgICAgIGxpc3RlbmVyKCk7XG4gICAgICAgIGZpcmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBpZnJhbWVMb2FkVGltZW91dCk7XG4gICAgaWZyYW1lRWwuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIGZpcmVkID0gdHJ1ZTtcbiAgICAgIGxpc3RlbmVyKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGJsYW5rVXJsID0gXCJhYm91dDpibGFua1wiO1xuICBpZiAod2luLmxvY2F0aW9uLmhyZWYgIT09IGJsYW5rVXJsIHx8IGlmcmFtZUVsLnNyYyA9PT0gYmxhbmtVcmwgfHwgaWZyYW1lRWwuc3JjID09PSBcIlwiKSB7XG4gICAgc2V0VGltZW91dChsaXN0ZW5lciwgMCk7XG4gICAgcmV0dXJuIGlmcmFtZUVsLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGxpc3RlbmVyKTtcbiAgfVxuICBpZnJhbWVFbC5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBsaXN0ZW5lcik7XG59XG5mdW5jdGlvbiBvbmNlU3R5bGVzaGVldExvYWRlZChsaW5rLCBsaXN0ZW5lciwgc3R5bGVTaGVldExvYWRUaW1lb3V0KSB7XG4gIGxldCBmaXJlZCA9IGZhbHNlO1xuICBsZXQgc3R5bGVTaGVldExvYWRlZDtcbiAgdHJ5IHtcbiAgICBzdHlsZVNoZWV0TG9hZGVkID0gbGluay5zaGVldDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHN0eWxlU2hlZXRMb2FkZWQpIHJldHVybjtcbiAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpZiAoIWZpcmVkKSB7XG4gICAgICBsaXN0ZW5lcigpO1xuICAgICAgZmlyZWQgPSB0cnVlO1xuICAgIH1cbiAgfSwgc3R5bGVTaGVldExvYWRUaW1lb3V0KTtcbiAgbGluay5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICBmaXJlZCA9IHRydWU7XG4gICAgbGlzdGVuZXIoKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBzZXJpYWxpemVOb2RlKG4sIG9wdGlvbnMpIHtcbiAgY29uc3Qge1xuICAgIGRvYyxcbiAgICBtaXJyb3IsXG4gICAgYmxvY2tDbGFzcyxcbiAgICBibG9ja1NlbGVjdG9yLFxuICAgIG5lZWRzTWFzayxcbiAgICBpbmxpbmVTdHlsZXNoZWV0LFxuICAgIG1hc2tJbnB1dE9wdGlvbnMgPSB7fSxcbiAgICBtYXNrVGV4dEZuLFxuICAgIG1hc2tJbnB1dEZuLFxuICAgIGRhdGFVUkxPcHRpb25zID0ge30sXG4gICAgaW5saW5lSW1hZ2VzLFxuICAgIHJlY29yZENhbnZhcyxcbiAgICBrZWVwSWZyYW1lU3JjRm4sXG4gICAgbmV3bHlBZGRlZEVsZW1lbnQgPSBmYWxzZSxcbiAgICBjc3NDYXB0dXJlZCA9IGZhbHNlXG4gIH0gPSBvcHRpb25zO1xuICBjb25zdCByb290SWQgPSBnZXRSb290SWQoZG9jLCBtaXJyb3IpO1xuICBzd2l0Y2ggKG4ubm9kZVR5cGUpIHtcbiAgICBjYXNlIG4uRE9DVU1FTlRfTk9ERTpcbiAgICAgIGlmIChuLmNvbXBhdE1vZGUgIT09IFwiQ1NTMUNvbXBhdFwiKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdHlwZTogTm9kZVR5cGUuRG9jdW1lbnQsXG4gICAgICAgICAgY2hpbGROb2RlczogW10sXG4gICAgICAgICAgY29tcGF0TW9kZTogbi5jb21wYXRNb2RlXG4gICAgICAgICAgLy8gcHJvYmFibHkgXCJCYWNrQ29tcGF0XCJcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdHlwZTogTm9kZVR5cGUuRG9jdW1lbnQsXG4gICAgICAgICAgY2hpbGROb2RlczogW11cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICBjYXNlIG4uRE9DVU1FTlRfVFlQRV9OT0RFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogTm9kZVR5cGUuRG9jdW1lbnRUeXBlLFxuICAgICAgICBuYW1lOiBuLm5hbWUsXG4gICAgICAgIHB1YmxpY0lkOiBuLnB1YmxpY0lkLFxuICAgICAgICBzeXN0ZW1JZDogbi5zeXN0ZW1JZCxcbiAgICAgICAgcm9vdElkXG4gICAgICB9O1xuICAgIGNhc2Ugbi5FTEVNRU5UX05PREU6XG4gICAgICByZXR1cm4gc2VyaWFsaXplRWxlbWVudE5vZGUobiwge1xuICAgICAgICBkb2MsXG4gICAgICAgIGJsb2NrQ2xhc3MsXG4gICAgICAgIGJsb2NrU2VsZWN0b3IsXG4gICAgICAgIGlubGluZVN0eWxlc2hlZXQsXG4gICAgICAgIG1hc2tJbnB1dE9wdGlvbnMsXG4gICAgICAgIG1hc2tJbnB1dEZuLFxuICAgICAgICBkYXRhVVJMT3B0aW9ucyxcbiAgICAgICAgaW5saW5lSW1hZ2VzLFxuICAgICAgICByZWNvcmRDYW52YXMsXG4gICAgICAgIGtlZXBJZnJhbWVTcmNGbixcbiAgICAgICAgbmV3bHlBZGRlZEVsZW1lbnQsXG4gICAgICAgIHJvb3RJZFxuICAgICAgfSk7XG4gICAgY2FzZSBuLlRFWFRfTk9ERTpcbiAgICAgIHJldHVybiBzZXJpYWxpemVUZXh0Tm9kZShuLCB7XG4gICAgICAgIGRvYyxcbiAgICAgICAgbmVlZHNNYXNrLFxuICAgICAgICBtYXNrVGV4dEZuLFxuICAgICAgICByb290SWQsXG4gICAgICAgIGNzc0NhcHR1cmVkXG4gICAgICB9KTtcbiAgICBjYXNlIG4uQ0RBVEFfU0VDVElPTl9OT0RFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogTm9kZVR5cGUuQ0RBVEEsXG4gICAgICAgIHRleHRDb250ZW50OiBcIlwiLFxuICAgICAgICByb290SWRcbiAgICAgIH07XG4gICAgY2FzZSBuLkNPTU1FTlRfTk9ERTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IE5vZGVUeXBlLkNvbW1lbnQsXG4gICAgICAgIHRleHRDb250ZW50OiBpbmRleC50ZXh0Q29udGVudChuKSB8fCBcIlwiLFxuICAgICAgICByb290SWRcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuZnVuY3Rpb24gZ2V0Um9vdElkKGRvYywgbWlycm9yKSB7XG4gIGlmICghbWlycm9yLmhhc05vZGUoZG9jKSkgcmV0dXJuIHZvaWQgMDtcbiAgY29uc3QgZG9jSWQgPSBtaXJyb3IuZ2V0SWQoZG9jKTtcbiAgcmV0dXJuIGRvY0lkID09PSAxID8gdm9pZCAwIDogZG9jSWQ7XG59XG5mdW5jdGlvbiBzZXJpYWxpemVUZXh0Tm9kZShuLCBvcHRpb25zKSB7XG4gIGNvbnN0IHsgbmVlZHNNYXNrLCBtYXNrVGV4dEZuLCByb290SWQsIGNzc0NhcHR1cmVkIH0gPSBvcHRpb25zO1xuICBjb25zdCBwYXJlbnQgPSBpbmRleC5wYXJlbnROb2RlKG4pO1xuICBjb25zdCBwYXJlbnRUYWdOYW1lID0gcGFyZW50ICYmIHBhcmVudC50YWdOYW1lO1xuICBsZXQgdGV4dENvbnRlbnQyID0gXCJcIjtcbiAgY29uc3QgaXNTdHlsZSA9IHBhcmVudFRhZ05hbWUgPT09IFwiU1RZTEVcIiA/IHRydWUgOiB2b2lkIDA7XG4gIGNvbnN0IGlzU2NyaXB0ID0gcGFyZW50VGFnTmFtZSA9PT0gXCJTQ1JJUFRcIiA/IHRydWUgOiB2b2lkIDA7XG4gIGlmIChpc1NjcmlwdCkge1xuICAgIHRleHRDb250ZW50MiA9IFwiU0NSSVBUX1BMQUNFSE9MREVSXCI7XG4gIH0gZWxzZSBpZiAoIWNzc0NhcHR1cmVkKSB7XG4gICAgdGV4dENvbnRlbnQyID0gaW5kZXgudGV4dENvbnRlbnQobik7XG4gICAgaWYgKGlzU3R5bGUgJiYgdGV4dENvbnRlbnQyKSB7XG4gICAgICB0ZXh0Q29udGVudDIgPSBhYnNvbHV0aWZ5VVJMcyh0ZXh0Q29udGVudDIsIGdldEhyZWYob3B0aW9ucy5kb2MpKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFpc1N0eWxlICYmICFpc1NjcmlwdCAmJiB0ZXh0Q29udGVudDIgJiYgbmVlZHNNYXNrKSB7XG4gICAgdGV4dENvbnRlbnQyID0gbWFza1RleHRGbiA/IG1hc2tUZXh0Rm4odGV4dENvbnRlbnQyLCBpbmRleC5wYXJlbnRFbGVtZW50KG4pKSA6IHRleHRDb250ZW50Mi5yZXBsYWNlKC9bXFxTXS9nLCBcIipcIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBOb2RlVHlwZS5UZXh0LFxuICAgIHRleHRDb250ZW50OiB0ZXh0Q29udGVudDIgfHwgXCJcIixcbiAgICByb290SWRcbiAgfTtcbn1cbmZ1bmN0aW9uIHNlcmlhbGl6ZUVsZW1lbnROb2RlKG4sIG9wdGlvbnMpIHtcbiAgY29uc3Qge1xuICAgIGRvYyxcbiAgICBibG9ja0NsYXNzLFxuICAgIGJsb2NrU2VsZWN0b3IsXG4gICAgaW5saW5lU3R5bGVzaGVldCxcbiAgICBtYXNrSW5wdXRPcHRpb25zID0ge30sXG4gICAgbWFza0lucHV0Rm4sXG4gICAgZGF0YVVSTE9wdGlvbnMgPSB7fSxcbiAgICBpbmxpbmVJbWFnZXMsXG4gICAgcmVjb3JkQ2FudmFzLFxuICAgIGtlZXBJZnJhbWVTcmNGbixcbiAgICBuZXdseUFkZGVkRWxlbWVudCA9IGZhbHNlLFxuICAgIHJvb3RJZFxuICB9ID0gb3B0aW9ucztcbiAgY29uc3QgbmVlZEJsb2NrID0gX2lzQmxvY2tlZEVsZW1lbnQobiwgYmxvY2tDbGFzcywgYmxvY2tTZWxlY3Rvcik7XG4gIGNvbnN0IHRhZ05hbWUgPSBnZXRWYWxpZFRhZ05hbWUobik7XG4gIGxldCBhdHRyaWJ1dGVzID0ge307XG4gIGNvbnN0IGxlbiA9IG4uYXR0cmlidXRlcy5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCBhdHRyID0gbi5hdHRyaWJ1dGVzW2ldO1xuICAgIGlmICghaWdub3JlQXR0cmlidXRlKHRhZ05hbWUsIGF0dHIubmFtZSwgYXR0ci52YWx1ZSkpIHtcbiAgICAgIGF0dHJpYnV0ZXNbYXR0ci5uYW1lXSA9IHRyYW5zZm9ybUF0dHJpYnV0ZShcbiAgICAgICAgZG9jLFxuICAgICAgICB0YWdOYW1lLFxuICAgICAgICB0b0xvd2VyQ2FzZShhdHRyLm5hbWUpLFxuICAgICAgICBhdHRyLnZhbHVlXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBpZiAodGFnTmFtZSA9PT0gXCJsaW5rXCIgJiYgaW5saW5lU3R5bGVzaGVldCkge1xuICAgIGNvbnN0IHN0eWxlc2hlZXQgPSBBcnJheS5mcm9tKGRvYy5zdHlsZVNoZWV0cykuZmluZCgocykgPT4ge1xuICAgICAgcmV0dXJuIHMuaHJlZiA9PT0gbi5ocmVmO1xuICAgIH0pO1xuICAgIGxldCBjc3NUZXh0ID0gbnVsbDtcbiAgICBpZiAoc3R5bGVzaGVldCkge1xuICAgICAgY3NzVGV4dCA9IHN0cmluZ2lmeVN0eWxlc2hlZXQoc3R5bGVzaGVldCk7XG4gICAgfVxuICAgIGlmIChjc3NUZXh0KSB7XG4gICAgICBkZWxldGUgYXR0cmlidXRlcy5yZWw7XG4gICAgICBkZWxldGUgYXR0cmlidXRlcy5ocmVmO1xuICAgICAgYXR0cmlidXRlcy5fY3NzVGV4dCA9IGNzc1RleHQ7XG4gICAgfVxuICB9XG4gIGlmICh0YWdOYW1lID09PSBcInN0eWxlXCIgJiYgbi5zaGVldCkge1xuICAgIGxldCBjc3NUZXh0ID0gc3RyaW5naWZ5U3R5bGVzaGVldChcbiAgICAgIG4uc2hlZXRcbiAgICApO1xuICAgIGlmIChjc3NUZXh0KSB7XG4gICAgICBpZiAobi5jaGlsZE5vZGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgY3NzVGV4dCA9IG1hcmtDc3NTcGxpdHMoY3NzVGV4dCwgbik7XG4gICAgICB9XG4gICAgICBhdHRyaWJ1dGVzLl9jc3NUZXh0ID0gY3NzVGV4dDtcbiAgICB9XG4gIH1cbiAgaWYgKHRhZ05hbWUgPT09IFwiaW5wdXRcIiB8fCB0YWdOYW1lID09PSBcInRleHRhcmVhXCIgfHwgdGFnTmFtZSA9PT0gXCJzZWxlY3RcIikge1xuICAgIGNvbnN0IHZhbHVlID0gbi52YWx1ZTtcbiAgICBjb25zdCBjaGVja2VkID0gbi5jaGVja2VkO1xuICAgIGlmIChhdHRyaWJ1dGVzLnR5cGUgIT09IFwicmFkaW9cIiAmJiBhdHRyaWJ1dGVzLnR5cGUgIT09IFwiY2hlY2tib3hcIiAmJiBhdHRyaWJ1dGVzLnR5cGUgIT09IFwic3VibWl0XCIgJiYgYXR0cmlidXRlcy50eXBlICE9PSBcImJ1dHRvblwiICYmIHZhbHVlKSB7XG4gICAgICBhdHRyaWJ1dGVzLnZhbHVlID0gbWFza0lucHV0VmFsdWUoe1xuICAgICAgICBlbGVtZW50OiBuLFxuICAgICAgICB0eXBlOiBnZXRJbnB1dFR5cGUobiksXG4gICAgICAgIHRhZ05hbWUsXG4gICAgICAgIHZhbHVlLFxuICAgICAgICBtYXNrSW5wdXRPcHRpb25zLFxuICAgICAgICBtYXNrSW5wdXRGblxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChjaGVja2VkKSB7XG4gICAgICBhdHRyaWJ1dGVzLmNoZWNrZWQgPSBjaGVja2VkO1xuICAgIH1cbiAgfVxuICBpZiAodGFnTmFtZSA9PT0gXCJvcHRpb25cIikge1xuICAgIGlmIChuLnNlbGVjdGVkICYmICFtYXNrSW5wdXRPcHRpb25zW1wic2VsZWN0XCJdKSB7XG4gICAgICBhdHRyaWJ1dGVzLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIGF0dHJpYnV0ZXMuc2VsZWN0ZWQ7XG4gICAgfVxuICB9XG4gIGlmICh0YWdOYW1lID09PSBcImRpYWxvZ1wiICYmIG4ub3Blbikge1xuICAgIGF0dHJpYnV0ZXMucnJfb3Blbl9tb2RlID0gbi5tYXRjaGVzKFwiZGlhbG9nOm1vZGFsXCIpID8gXCJtb2RhbFwiIDogXCJub24tbW9kYWxcIjtcbiAgfVxuICBpZiAodGFnTmFtZSA9PT0gXCJjYW52YXNcIiAmJiByZWNvcmRDYW52YXMpIHtcbiAgICBpZiAobi5fX2NvbnRleHQgPT09IFwiMmRcIikge1xuICAgICAgaWYgKCFpczJEQ2FudmFzQmxhbmsobikpIHtcbiAgICAgICAgYXR0cmlidXRlcy5ycl9kYXRhVVJMID0gbi50b0RhdGFVUkwoXG4gICAgICAgICAgZGF0YVVSTE9wdGlvbnMudHlwZSxcbiAgICAgICAgICBkYXRhVVJMT3B0aW9ucy5xdWFsaXR5XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghKFwiX19jb250ZXh0XCIgaW4gbikpIHtcbiAgICAgIGNvbnN0IGNhbnZhc0RhdGFVUkwgPSBuLnRvRGF0YVVSTChcbiAgICAgICAgZGF0YVVSTE9wdGlvbnMudHlwZSxcbiAgICAgICAgZGF0YVVSTE9wdGlvbnMucXVhbGl0eVxuICAgICAgKTtcbiAgICAgIGNvbnN0IGJsYW5rQ2FudmFzID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICBibGFua0NhbnZhcy53aWR0aCA9IG4ud2lkdGg7XG4gICAgICBibGFua0NhbnZhcy5oZWlnaHQgPSBuLmhlaWdodDtcbiAgICAgIGNvbnN0IGJsYW5rQ2FudmFzRGF0YVVSTCA9IGJsYW5rQ2FudmFzLnRvRGF0YVVSTChcbiAgICAgICAgZGF0YVVSTE9wdGlvbnMudHlwZSxcbiAgICAgICAgZGF0YVVSTE9wdGlvbnMucXVhbGl0eVxuICAgICAgKTtcbiAgICAgIGlmIChjYW52YXNEYXRhVVJMICE9PSBibGFua0NhbnZhc0RhdGFVUkwpIHtcbiAgICAgICAgYXR0cmlidXRlcy5ycl9kYXRhVVJMID0gY2FudmFzRGF0YVVSTDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKHRhZ05hbWUgPT09IFwiaW1nXCIgJiYgaW5saW5lSW1hZ2VzKSB7XG4gICAgaWYgKCFjYW52YXNTZXJ2aWNlKSB7XG4gICAgICBjYW52YXNTZXJ2aWNlID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICBjYW52YXNDdHggPSBjYW52YXNTZXJ2aWNlLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB9XG4gICAgY29uc3QgaW1hZ2UgPSBuO1xuICAgIGNvbnN0IGltYWdlU3JjID0gaW1hZ2UuY3VycmVudFNyYyB8fCBpbWFnZS5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgfHwgXCI8dW5rbm93bi1zcmM+XCI7XG4gICAgY29uc3QgcHJpb3JDcm9zc09yaWdpbiA9IGltYWdlLmNyb3NzT3JpZ2luO1xuICAgIGNvbnN0IHJlY29yZElubGluZUltYWdlID0gKCkgPT4ge1xuICAgICAgaW1hZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgcmVjb3JkSW5saW5lSW1hZ2UpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY2FudmFzU2VydmljZS53aWR0aCA9IGltYWdlLm5hdHVyYWxXaWR0aDtcbiAgICAgICAgY2FudmFzU2VydmljZS5oZWlnaHQgPSBpbWFnZS5uYXR1cmFsSGVpZ2h0O1xuICAgICAgICBjYW52YXNDdHguZHJhd0ltYWdlKGltYWdlLCAwLCAwKTtcbiAgICAgICAgYXR0cmlidXRlcy5ycl9kYXRhVVJMID0gY2FudmFzU2VydmljZS50b0RhdGFVUkwoXG4gICAgICAgICAgZGF0YVVSTE9wdGlvbnMudHlwZSxcbiAgICAgICAgICBkYXRhVVJMT3B0aW9ucy5xdWFsaXR5XG4gICAgICAgICk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgaWYgKGltYWdlLmNyb3NzT3JpZ2luICE9PSBcImFub255bW91c1wiKSB7XG4gICAgICAgICAgaW1hZ2UuY3Jvc3NPcmlnaW4gPSBcImFub255bW91c1wiO1xuICAgICAgICAgIGlmIChpbWFnZS5jb21wbGV0ZSAmJiBpbWFnZS5uYXR1cmFsV2lkdGggIT09IDApXG4gICAgICAgICAgICByZWNvcmRJbmxpbmVJbWFnZSgpO1xuICAgICAgICAgIGVsc2UgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgcmVjb3JkSW5saW5lSW1hZ2UpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgQ2Fubm90IGlubGluZSBpbWcgc3JjPSR7aW1hZ2VTcmN9ISBFcnJvcjogJHtlcnJ9YFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpbWFnZS5jcm9zc09yaWdpbiA9PT0gXCJhbm9ueW1vdXNcIikge1xuICAgICAgICBwcmlvckNyb3NzT3JpZ2luID8gYXR0cmlidXRlcy5jcm9zc09yaWdpbiA9IHByaW9yQ3Jvc3NPcmlnaW4gOiBpbWFnZS5yZW1vdmVBdHRyaWJ1dGUoXCJjcm9zc29yaWdpblwiKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGlmIChpbWFnZS5jb21wbGV0ZSAmJiBpbWFnZS5uYXR1cmFsV2lkdGggIT09IDApIHJlY29yZElubGluZUltYWdlKCk7XG4gICAgZWxzZSBpbWFnZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCByZWNvcmRJbmxpbmVJbWFnZSk7XG4gIH1cbiAgaWYgKHRhZ05hbWUgPT09IFwiYXVkaW9cIiB8fCB0YWdOYW1lID09PSBcInZpZGVvXCIpIHtcbiAgICBjb25zdCBtZWRpYUF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzO1xuICAgIG1lZGlhQXR0cmlidXRlcy5ycl9tZWRpYVN0YXRlID0gbi5wYXVzZWQgPyBcInBhdXNlZFwiIDogXCJwbGF5ZWRcIjtcbiAgICBtZWRpYUF0dHJpYnV0ZXMucnJfbWVkaWFDdXJyZW50VGltZSA9IG4uY3VycmVudFRpbWU7XG4gICAgbWVkaWFBdHRyaWJ1dGVzLnJyX21lZGlhUGxheWJhY2tSYXRlID0gbi5wbGF5YmFja1JhdGU7XG4gICAgbWVkaWFBdHRyaWJ1dGVzLnJyX21lZGlhTXV0ZWQgPSBuLm11dGVkO1xuICAgIG1lZGlhQXR0cmlidXRlcy5ycl9tZWRpYUxvb3AgPSBuLmxvb3A7XG4gICAgbWVkaWFBdHRyaWJ1dGVzLnJyX21lZGlhVm9sdW1lID0gbi52b2x1bWU7XG4gIH1cbiAgaWYgKCFuZXdseUFkZGVkRWxlbWVudCkge1xuICAgIGlmIChuLnNjcm9sbExlZnQpIHtcbiAgICAgIGF0dHJpYnV0ZXMucnJfc2Nyb2xsTGVmdCA9IG4uc2Nyb2xsTGVmdDtcbiAgICB9XG4gICAgaWYgKG4uc2Nyb2xsVG9wKSB7XG4gICAgICBhdHRyaWJ1dGVzLnJyX3Njcm9sbFRvcCA9IG4uc2Nyb2xsVG9wO1xuICAgIH1cbiAgfVxuICBpZiAobmVlZEJsb2NrKSB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBuLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGF0dHJpYnV0ZXMgPSB7XG4gICAgICBjbGFzczogYXR0cmlidXRlcy5jbGFzcyxcbiAgICAgIHJyX3dpZHRoOiBgJHt3aWR0aH1weGAsXG4gICAgICBycl9oZWlnaHQ6IGAke2hlaWdodH1weGBcbiAgICB9O1xuICB9XG4gIGlmICh0YWdOYW1lID09PSBcImlmcmFtZVwiICYmICFrZWVwSWZyYW1lU3JjRm4oYXR0cmlidXRlcy5zcmMpKSB7XG4gICAgaWYgKCFuLmNvbnRlbnREb2N1bWVudCkge1xuICAgICAgYXR0cmlidXRlcy5ycl9zcmMgPSBhdHRyaWJ1dGVzLnNyYztcbiAgICB9XG4gICAgZGVsZXRlIGF0dHJpYnV0ZXMuc3JjO1xuICB9XG4gIGxldCBpc0N1c3RvbUVsZW1lbnQ7XG4gIHRyeSB7XG4gICAgaWYgKGN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkgaXNDdXN0b21FbGVtZW50ID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICB9XG4gIHJldHVybiB7XG4gICAgdHlwZTogTm9kZVR5cGUuRWxlbWVudCxcbiAgICB0YWdOYW1lLFxuICAgIGF0dHJpYnV0ZXMsXG4gICAgY2hpbGROb2RlczogW10sXG4gICAgaXNTVkc6IGlzU1ZHRWxlbWVudChuKSB8fCB2b2lkIDAsXG4gICAgbmVlZEJsb2NrLFxuICAgIHJvb3RJZCxcbiAgICBpc0N1c3RvbTogaXNDdXN0b21FbGVtZW50XG4gIH07XG59XG5mdW5jdGlvbiBsb3dlcklmRXhpc3RzKG1heWJlQXR0cikge1xuICBpZiAobWF5YmVBdHRyID09PSB2b2lkIDAgfHwgbWF5YmVBdHRyID09PSBudWxsKSB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG1heWJlQXR0ci50b0xvd2VyQ2FzZSgpO1xuICB9XG59XG5mdW5jdGlvbiBzbGltRE9NRXhjbHVkZWQoc24sIHNsaW1ET01PcHRpb25zKSB7XG4gIGlmIChzbGltRE9NT3B0aW9ucy5jb21tZW50ICYmIHNuLnR5cGUgPT09IE5vZGVUeXBlLkNvbW1lbnQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChzbi50eXBlID09PSBOb2RlVHlwZS5FbGVtZW50KSB7XG4gICAgaWYgKHNsaW1ET01PcHRpb25zLnNjcmlwdCAmJiAvLyBzY3JpcHQgdGFnXG4gICAgKHNuLnRhZ05hbWUgPT09IFwic2NyaXB0XCIgfHwgLy8gKG1vZHVsZSlwcmVsb2FkIGxpbmtcbiAgICBzbi50YWdOYW1lID09PSBcImxpbmtcIiAmJiAoc24uYXR0cmlidXRlcy5yZWwgPT09IFwicHJlbG9hZFwiIHx8IHNuLmF0dHJpYnV0ZXMucmVsID09PSBcIm1vZHVsZXByZWxvYWRcIikgJiYgc24uYXR0cmlidXRlcy5hcyA9PT0gXCJzY3JpcHRcIiB8fCAvLyBwcmVmZXRjaCBsaW5rXG4gICAgc24udGFnTmFtZSA9PT0gXCJsaW5rXCIgJiYgc24uYXR0cmlidXRlcy5yZWwgPT09IFwicHJlZmV0Y2hcIiAmJiB0eXBlb2Ygc24uYXR0cmlidXRlcy5ocmVmID09PSBcInN0cmluZ1wiICYmIGV4dHJhY3RGaWxlRXh0ZW5zaW9uKHNuLmF0dHJpYnV0ZXMuaHJlZikgPT09IFwianNcIikpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoc2xpbURPTU9wdGlvbnMuaGVhZEZhdmljb24gJiYgKHNuLnRhZ05hbWUgPT09IFwibGlua1wiICYmIHNuLmF0dHJpYnV0ZXMucmVsID09PSBcInNob3J0Y3V0IGljb25cIiB8fCBzbi50YWdOYW1lID09PSBcIm1ldGFcIiAmJiAobG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpLm1hdGNoKFxuICAgICAgL15tc2FwcGxpY2F0aW9uLXRpbGUoaW1hZ2V8Y29sb3IpJC9cbiAgICApIHx8IGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKSA9PT0gXCJhcHBsaWNhdGlvbi1uYW1lXCIgfHwgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLnJlbCkgPT09IFwiaWNvblwiIHx8IGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5yZWwpID09PSBcImFwcGxlLXRvdWNoLWljb25cIiB8fCBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMucmVsKSA9PT0gXCJzaG9ydGN1dCBpY29uXCIpKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmIChzbi50YWdOYW1lID09PSBcIm1ldGFcIikge1xuICAgICAgaWYgKHNsaW1ET01PcHRpb25zLmhlYWRNZXRhRGVzY0tleXdvcmRzICYmIGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKS5tYXRjaCgvXmRlc2NyaXB0aW9ufGtleXdvcmRzJC8pKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChzbGltRE9NT3B0aW9ucy5oZWFkTWV0YVNvY2lhbCAmJiAobG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLnByb3BlcnR5KS5tYXRjaCgvXihvZ3x0d2l0dGVyfGZiKTovKSB8fCAvLyBvZyA9IG9wZW5ncmFwaCAoZmFjZWJvb2spXG4gICAgICBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkubWF0Y2goL14ob2d8dHdpdHRlcik6LykgfHwgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSBcInBpbnRlcmVzdFwiKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoc2xpbURPTU9wdGlvbnMuaGVhZE1ldGFSb2JvdHMgJiYgKGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKSA9PT0gXCJyb2JvdHNcIiB8fCBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09IFwiZ29vZ2xlYm90XCIgfHwgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSBcImJpbmdib3RcIikpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHNsaW1ET01PcHRpb25zLmhlYWRNZXRhSHR0cEVxdWl2ICYmIHNuLmF0dHJpYnV0ZXNbXCJodHRwLWVxdWl2XCJdICE9PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHNsaW1ET01PcHRpb25zLmhlYWRNZXRhQXV0aG9yc2hpcCAmJiAobG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSBcImF1dGhvclwiIHx8IGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKSA9PT0gXCJnZW5lcmF0b3JcIiB8fCBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09IFwiZnJhbWV3b3JrXCIgfHwgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSBcInB1Ymxpc2hlclwiIHx8IGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKSA9PT0gXCJwcm9naWRcIiB8fCBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMucHJvcGVydHkpLm1hdGNoKC9eYXJ0aWNsZTovKSB8fCBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMucHJvcGVydHkpLm1hdGNoKC9ecHJvZHVjdDovKSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHNsaW1ET01PcHRpb25zLmhlYWRNZXRhVmVyaWZpY2F0aW9uICYmIChsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09IFwiZ29vZ2xlLXNpdGUtdmVyaWZpY2F0aW9uXCIgfHwgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSBcInlhbmRleC12ZXJpZmljYXRpb25cIiB8fCBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09IFwiY3NyZi10b2tlblwiIHx8IGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKSA9PT0gXCJwOmRvbWFpbl92ZXJpZnlcIiB8fCBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09IFwidmVyaWZ5LXYxXCIgfHwgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSBcInZlcmlmaWNhdGlvblwiIHx8IGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKSA9PT0gXCJzaG9waWZ5LWNoZWNrb3V0LWFwaS10b2tlblwiKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gc2VyaWFsaXplTm9kZVdpdGhJZChuLCBvcHRpb25zKSB7XG4gIGNvbnN0IHtcbiAgICBkb2MsXG4gICAgbWlycm9yLFxuICAgIGJsb2NrQ2xhc3MsXG4gICAgYmxvY2tTZWxlY3RvcixcbiAgICBtYXNrVGV4dENsYXNzLFxuICAgIG1hc2tUZXh0U2VsZWN0b3IsXG4gICAgc2tpcENoaWxkID0gZmFsc2UsXG4gICAgaW5saW5lU3R5bGVzaGVldCA9IHRydWUsXG4gICAgbWFza0lucHV0T3B0aW9ucyA9IHt9LFxuICAgIG1hc2tUZXh0Rm4sXG4gICAgbWFza0lucHV0Rm4sXG4gICAgc2xpbURPTU9wdGlvbnMsXG4gICAgZGF0YVVSTE9wdGlvbnMgPSB7fSxcbiAgICBpbmxpbmVJbWFnZXMgPSBmYWxzZSxcbiAgICByZWNvcmRDYW52YXMgPSBmYWxzZSxcbiAgICBvblNlcmlhbGl6ZSxcbiAgICBvbklmcmFtZUxvYWQsXG4gICAgaWZyYW1lTG9hZFRpbWVvdXQgPSA1ZTMsXG4gICAgb25TdHlsZXNoZWV0TG9hZCxcbiAgICBzdHlsZXNoZWV0TG9hZFRpbWVvdXQgPSA1ZTMsXG4gICAga2VlcElmcmFtZVNyY0ZuID0gKCkgPT4gZmFsc2UsXG4gICAgbmV3bHlBZGRlZEVsZW1lbnQgPSBmYWxzZSxcbiAgICBjc3NDYXB0dXJlZCA9IGZhbHNlXG4gIH0gPSBvcHRpb25zO1xuICBsZXQgeyBuZWVkc01hc2sgfSA9IG9wdGlvbnM7XG4gIGxldCB7IHByZXNlcnZlV2hpdGVTcGFjZSA9IHRydWUgfSA9IG9wdGlvbnM7XG4gIGlmICghbmVlZHNNYXNrKSB7XG4gICAgY29uc3QgY2hlY2tBbmNlc3RvcnMgPSBuZWVkc01hc2sgPT09IHZvaWQgMDtcbiAgICBuZWVkc01hc2sgPSBuZWVkTWFza2luZ1RleHQoXG4gICAgICBuLFxuICAgICAgbWFza1RleHRDbGFzcyxcbiAgICAgIG1hc2tUZXh0U2VsZWN0b3IsXG4gICAgICBjaGVja0FuY2VzdG9yc1xuICAgICk7XG4gIH1cbiAgY29uc3QgX3NlcmlhbGl6ZWROb2RlID0gc2VyaWFsaXplTm9kZShuLCB7XG4gICAgZG9jLFxuICAgIG1pcnJvcixcbiAgICBibG9ja0NsYXNzLFxuICAgIGJsb2NrU2VsZWN0b3IsXG4gICAgbmVlZHNNYXNrLFxuICAgIGlubGluZVN0eWxlc2hlZXQsXG4gICAgbWFza0lucHV0T3B0aW9ucyxcbiAgICBtYXNrVGV4dEZuLFxuICAgIG1hc2tJbnB1dEZuLFxuICAgIGRhdGFVUkxPcHRpb25zLFxuICAgIGlubGluZUltYWdlcyxcbiAgICByZWNvcmRDYW52YXMsXG4gICAga2VlcElmcmFtZVNyY0ZuLFxuICAgIG5ld2x5QWRkZWRFbGVtZW50LFxuICAgIGNzc0NhcHR1cmVkXG4gIH0pO1xuICBpZiAoIV9zZXJpYWxpemVkTm9kZSkge1xuICAgIGNvbnNvbGUud2FybihuLCBcIm5vdCBzZXJpYWxpemVkXCIpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGxldCBpZDtcbiAgaWYgKG1pcnJvci5oYXNOb2RlKG4pKSB7XG4gICAgaWQgPSBtaXJyb3IuZ2V0SWQobik7XG4gIH0gZWxzZSBpZiAoc2xpbURPTUV4Y2x1ZGVkKF9zZXJpYWxpemVkTm9kZSwgc2xpbURPTU9wdGlvbnMpIHx8ICFwcmVzZXJ2ZVdoaXRlU3BhY2UgJiYgX3NlcmlhbGl6ZWROb2RlLnR5cGUgPT09IE5vZGVUeXBlLlRleHQgJiYgIV9zZXJpYWxpemVkTm9kZS50ZXh0Q29udGVudC5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nbSwgXCJcIikubGVuZ3RoKSB7XG4gICAgaWQgPSBJR05PUkVEX05PREU7XG4gIH0gZWxzZSB7XG4gICAgaWQgPSBnZW5JZCgpO1xuICB9XG4gIGNvbnN0IHNlcmlhbGl6ZWROb2RlID0gT2JqZWN0LmFzc2lnbihfc2VyaWFsaXplZE5vZGUsIHsgaWQgfSk7XG4gIG1pcnJvci5hZGQobiwgc2VyaWFsaXplZE5vZGUpO1xuICBpZiAoaWQgPT09IElHTk9SRURfTk9ERSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmIChvblNlcmlhbGl6ZSkge1xuICAgIG9uU2VyaWFsaXplKG4pO1xuICB9XG4gIGxldCByZWNvcmRDaGlsZCA9ICFza2lwQ2hpbGQ7XG4gIGlmIChzZXJpYWxpemVkTm9kZS50eXBlID09PSBOb2RlVHlwZS5FbGVtZW50KSB7XG4gICAgcmVjb3JkQ2hpbGQgPSByZWNvcmRDaGlsZCAmJiAhc2VyaWFsaXplZE5vZGUubmVlZEJsb2NrO1xuICAgIGRlbGV0ZSBzZXJpYWxpemVkTm9kZS5uZWVkQmxvY2s7XG4gICAgY29uc3Qgc2hhZG93Um9vdEVsID0gaW5kZXguc2hhZG93Um9vdChuKTtcbiAgICBpZiAoc2hhZG93Um9vdEVsICYmIGlzTmF0aXZlU2hhZG93RG9tKHNoYWRvd1Jvb3RFbCkpIHtcbiAgICAgIHNlcmlhbGl6ZWROb2RlLmlzU2hhZG93SG9zdCA9IHRydWU7XG4gICAgICBpZiAoc2hhZG93Um9vdEVsLmFkb3B0ZWRTdHlsZVNoZWV0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHNlcmlhbGl6ZWROb2RlLmNocm9tYXRpY0Fkb3B0ZWRTdHlsZXNoZWV0cyA9IHNoYWRvd1Jvb3RFbC5hZG9wdGVkU3R5bGVTaGVldHMubWFwKFxuICAgICAgICAgIChzdHlsZXNoZWV0KSA9PiBzdHJpbmdpZnlTdHlsZXNoZWV0KHN0eWxlc2hlZXQpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmICgoc2VyaWFsaXplZE5vZGUudHlwZSA9PT0gTm9kZVR5cGUuRG9jdW1lbnQgfHwgc2VyaWFsaXplZE5vZGUudHlwZSA9PT0gTm9kZVR5cGUuRWxlbWVudCkgJiYgcmVjb3JkQ2hpbGQpIHtcbiAgICBpZiAoc2xpbURPTU9wdGlvbnMuaGVhZFdoaXRlc3BhY2UgJiYgc2VyaWFsaXplZE5vZGUudHlwZSA9PT0gTm9kZVR5cGUuRWxlbWVudCAmJiBzZXJpYWxpemVkTm9kZS50YWdOYW1lID09PSBcImhlYWRcIikge1xuICAgICAgcHJlc2VydmVXaGl0ZVNwYWNlID0gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGJ5cGFzc09wdGlvbnMgPSB7XG4gICAgICBkb2MsXG4gICAgICBtaXJyb3IsXG4gICAgICBibG9ja0NsYXNzLFxuICAgICAgYmxvY2tTZWxlY3RvcixcbiAgICAgIG5lZWRzTWFzayxcbiAgICAgIG1hc2tUZXh0Q2xhc3MsXG4gICAgICBtYXNrVGV4dFNlbGVjdG9yLFxuICAgICAgc2tpcENoaWxkLFxuICAgICAgaW5saW5lU3R5bGVzaGVldCxcbiAgICAgIG1hc2tJbnB1dE9wdGlvbnMsXG4gICAgICBtYXNrVGV4dEZuLFxuICAgICAgbWFza0lucHV0Rm4sXG4gICAgICBzbGltRE9NT3B0aW9ucyxcbiAgICAgIGRhdGFVUkxPcHRpb25zLFxuICAgICAgaW5saW5lSW1hZ2VzLFxuICAgICAgcmVjb3JkQ2FudmFzLFxuICAgICAgcHJlc2VydmVXaGl0ZVNwYWNlLFxuICAgICAgb25TZXJpYWxpemUsXG4gICAgICBvbklmcmFtZUxvYWQsXG4gICAgICBpZnJhbWVMb2FkVGltZW91dCxcbiAgICAgIG9uU3R5bGVzaGVldExvYWQsXG4gICAgICBzdHlsZXNoZWV0TG9hZFRpbWVvdXQsXG4gICAgICBrZWVwSWZyYW1lU3JjRm4sXG4gICAgICBjc3NDYXB0dXJlZDogZmFsc2VcbiAgICB9O1xuICAgIGlmIChzZXJpYWxpemVkTm9kZS50eXBlID09PSBOb2RlVHlwZS5FbGVtZW50ICYmIHNlcmlhbGl6ZWROb2RlLnRhZ05hbWUgPT09IFwidGV4dGFyZWFcIiAmJiBzZXJpYWxpemVkTm9kZS5hdHRyaWJ1dGVzLnZhbHVlICE9PSB2b2lkIDApIDtcbiAgICBlbHNlIHtcbiAgICAgIGlmIChzZXJpYWxpemVkTm9kZS50eXBlID09PSBOb2RlVHlwZS5FbGVtZW50ICYmIHNlcmlhbGl6ZWROb2RlLmF0dHJpYnV0ZXMuX2Nzc1RleHQgIT09IHZvaWQgMCAmJiB0eXBlb2Ygc2VyaWFsaXplZE5vZGUuYXR0cmlidXRlcy5fY3NzVGV4dCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBieXBhc3NPcHRpb25zLmNzc0NhcHR1cmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgY2hpbGROIG9mIEFycmF5LmZyb20oaW5kZXguY2hpbGROb2RlcyhuKSkpIHtcbiAgICAgICAgY29uc3Qgc2VyaWFsaXplZENoaWxkTm9kZSA9IHNlcmlhbGl6ZU5vZGVXaXRoSWQoY2hpbGROLCBieXBhc3NPcHRpb25zKTtcbiAgICAgICAgaWYgKHNlcmlhbGl6ZWRDaGlsZE5vZGUpIHtcbiAgICAgICAgICBzZXJpYWxpemVkTm9kZS5jaGlsZE5vZGVzLnB1c2goc2VyaWFsaXplZENoaWxkTm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHNoYWRvd1Jvb3RFbCA9IG51bGw7XG4gICAgaWYgKGlzRWxlbWVudChuKSAmJiAoc2hhZG93Um9vdEVsID0gaW5kZXguc2hhZG93Um9vdChuKSkpIHtcbiAgICAgIGZvciAoY29uc3QgY2hpbGROIG9mIEFycmF5LmZyb20oaW5kZXguY2hpbGROb2RlcyhzaGFkb3dSb290RWwpKSkge1xuICAgICAgICBjb25zdCBzZXJpYWxpemVkQ2hpbGROb2RlID0gc2VyaWFsaXplTm9kZVdpdGhJZChjaGlsZE4sIGJ5cGFzc09wdGlvbnMpO1xuICAgICAgICBpZiAoc2VyaWFsaXplZENoaWxkTm9kZSkge1xuICAgICAgICAgIGlzTmF0aXZlU2hhZG93RG9tKHNoYWRvd1Jvb3RFbCkgJiYgKHNlcmlhbGl6ZWRDaGlsZE5vZGUuaXNTaGFkb3cgPSB0cnVlKTtcbiAgICAgICAgICBzZXJpYWxpemVkTm9kZS5jaGlsZE5vZGVzLnB1c2goc2VyaWFsaXplZENoaWxkTm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29uc3QgcGFyZW50ID0gaW5kZXgucGFyZW50Tm9kZShuKTtcbiAgaWYgKHBhcmVudCAmJiBpc1NoYWRvd1Jvb3QocGFyZW50KSAmJiBpc05hdGl2ZVNoYWRvd0RvbShwYXJlbnQpKSB7XG4gICAgc2VyaWFsaXplZE5vZGUuaXNTaGFkb3cgPSB0cnVlO1xuICB9XG4gIGlmIChzZXJpYWxpemVkTm9kZS50eXBlID09PSBOb2RlVHlwZS5FbGVtZW50ICYmIHNlcmlhbGl6ZWROb2RlLnRhZ05hbWUgPT09IFwiaWZyYW1lXCIpIHtcbiAgICBvbmNlSWZyYW1lTG9hZGVkKFxuICAgICAgbixcbiAgICAgICgpID0+IHtcbiAgICAgICAgY29uc3QgaWZyYW1lRG9jID0gbi5jb250ZW50RG9jdW1lbnQ7XG4gICAgICAgIGlmIChpZnJhbWVEb2MgJiYgb25JZnJhbWVMb2FkKSB7XG4gICAgICAgICAgY29uc3Qgc2VyaWFsaXplZElmcmFtZU5vZGUgPSBzZXJpYWxpemVOb2RlV2l0aElkKGlmcmFtZURvYywge1xuICAgICAgICAgICAgZG9jOiBpZnJhbWVEb2MsXG4gICAgICAgICAgICBtaXJyb3IsXG4gICAgICAgICAgICBibG9ja0NsYXNzLFxuICAgICAgICAgICAgYmxvY2tTZWxlY3RvcixcbiAgICAgICAgICAgIG5lZWRzTWFzayxcbiAgICAgICAgICAgIG1hc2tUZXh0Q2xhc3MsXG4gICAgICAgICAgICBtYXNrVGV4dFNlbGVjdG9yLFxuICAgICAgICAgICAgc2tpcENoaWxkOiBmYWxzZSxcbiAgICAgICAgICAgIGlubGluZVN0eWxlc2hlZXQsXG4gICAgICAgICAgICBtYXNrSW5wdXRPcHRpb25zLFxuICAgICAgICAgICAgbWFza1RleHRGbixcbiAgICAgICAgICAgIG1hc2tJbnB1dEZuLFxuICAgICAgICAgICAgc2xpbURPTU9wdGlvbnMsXG4gICAgICAgICAgICBkYXRhVVJMT3B0aW9ucyxcbiAgICAgICAgICAgIGlubGluZUltYWdlcyxcbiAgICAgICAgICAgIHJlY29yZENhbnZhcyxcbiAgICAgICAgICAgIHByZXNlcnZlV2hpdGVTcGFjZSxcbiAgICAgICAgICAgIG9uU2VyaWFsaXplLFxuICAgICAgICAgICAgb25JZnJhbWVMb2FkLFxuICAgICAgICAgICAgaWZyYW1lTG9hZFRpbWVvdXQsXG4gICAgICAgICAgICBvblN0eWxlc2hlZXRMb2FkLFxuICAgICAgICAgICAgc3R5bGVzaGVldExvYWRUaW1lb3V0LFxuICAgICAgICAgICAga2VlcElmcmFtZVNyY0ZuXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKHNlcmlhbGl6ZWRJZnJhbWVOb2RlKSB7XG4gICAgICAgICAgICBvbklmcmFtZUxvYWQoXG4gICAgICAgICAgICAgIG4sXG4gICAgICAgICAgICAgIHNlcmlhbGl6ZWRJZnJhbWVOb2RlXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGlmcmFtZUxvYWRUaW1lb3V0XG4gICAgKTtcbiAgfVxuICBpZiAoc2VyaWFsaXplZE5vZGUudHlwZSA9PT0gTm9kZVR5cGUuRWxlbWVudCAmJiBzZXJpYWxpemVkTm9kZS50YWdOYW1lID09PSBcImxpbmtcIiAmJiB0eXBlb2Ygc2VyaWFsaXplZE5vZGUuYXR0cmlidXRlcy5yZWwgPT09IFwic3RyaW5nXCIgJiYgKHNlcmlhbGl6ZWROb2RlLmF0dHJpYnV0ZXMucmVsID09PSBcInN0eWxlc2hlZXRcIiB8fCBzZXJpYWxpemVkTm9kZS5hdHRyaWJ1dGVzLnJlbCA9PT0gXCJwcmVsb2FkXCIgJiYgdHlwZW9mIHNlcmlhbGl6ZWROb2RlLmF0dHJpYnV0ZXMuaHJlZiA9PT0gXCJzdHJpbmdcIiAmJiBleHRyYWN0RmlsZUV4dGVuc2lvbihzZXJpYWxpemVkTm9kZS5hdHRyaWJ1dGVzLmhyZWYpID09PSBcImNzc1wiKSkge1xuICAgIG9uY2VTdHlsZXNoZWV0TG9hZGVkKFxuICAgICAgbixcbiAgICAgICgpID0+IHtcbiAgICAgICAgaWYgKG9uU3R5bGVzaGVldExvYWQpIHtcbiAgICAgICAgICBjb25zdCBzZXJpYWxpemVkTGlua05vZGUgPSBzZXJpYWxpemVOb2RlV2l0aElkKG4sIHtcbiAgICAgICAgICAgIGRvYyxcbiAgICAgICAgICAgIG1pcnJvcixcbiAgICAgICAgICAgIGJsb2NrQ2xhc3MsXG4gICAgICAgICAgICBibG9ja1NlbGVjdG9yLFxuICAgICAgICAgICAgbmVlZHNNYXNrLFxuICAgICAgICAgICAgbWFza1RleHRDbGFzcyxcbiAgICAgICAgICAgIG1hc2tUZXh0U2VsZWN0b3IsXG4gICAgICAgICAgICBza2lwQ2hpbGQ6IGZhbHNlLFxuICAgICAgICAgICAgaW5saW5lU3R5bGVzaGVldCxcbiAgICAgICAgICAgIG1hc2tJbnB1dE9wdGlvbnMsXG4gICAgICAgICAgICBtYXNrVGV4dEZuLFxuICAgICAgICAgICAgbWFza0lucHV0Rm4sXG4gICAgICAgICAgICBzbGltRE9NT3B0aW9ucyxcbiAgICAgICAgICAgIGRhdGFVUkxPcHRpb25zLFxuICAgICAgICAgICAgaW5saW5lSW1hZ2VzLFxuICAgICAgICAgICAgcmVjb3JkQ2FudmFzLFxuICAgICAgICAgICAgcHJlc2VydmVXaGl0ZVNwYWNlLFxuICAgICAgICAgICAgb25TZXJpYWxpemUsXG4gICAgICAgICAgICBvbklmcmFtZUxvYWQsXG4gICAgICAgICAgICBpZnJhbWVMb2FkVGltZW91dCxcbiAgICAgICAgICAgIG9uU3R5bGVzaGVldExvYWQsXG4gICAgICAgICAgICBzdHlsZXNoZWV0TG9hZFRpbWVvdXQsXG4gICAgICAgICAgICBrZWVwSWZyYW1lU3JjRm5cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoc2VyaWFsaXplZExpbmtOb2RlKSB7XG4gICAgICAgICAgICBvblN0eWxlc2hlZXRMb2FkKFxuICAgICAgICAgICAgICBuLFxuICAgICAgICAgICAgICBzZXJpYWxpemVkTGlua05vZGVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc3R5bGVzaGVldExvYWRUaW1lb3V0XG4gICAgKTtcbiAgfVxuICByZXR1cm4gc2VyaWFsaXplZE5vZGU7XG59XG5mdW5jdGlvbiBzbmFwc2hvdChuLCBvcHRpb25zKSB7XG4gIGNvbnN0IHtcbiAgICBtaXJyb3IgPSBuZXcgTWlycm9yKCksXG4gICAgYmxvY2tDbGFzcyA9IFwicnItYmxvY2tcIixcbiAgICBibG9ja1NlbGVjdG9yID0gbnVsbCxcbiAgICBtYXNrVGV4dENsYXNzID0gXCJyci1tYXNrXCIsXG4gICAgbWFza1RleHRTZWxlY3RvciA9IG51bGwsXG4gICAgaW5saW5lU3R5bGVzaGVldCA9IHRydWUsXG4gICAgaW5saW5lSW1hZ2VzID0gZmFsc2UsXG4gICAgcmVjb3JkQ2FudmFzID0gZmFsc2UsXG4gICAgbWFza0FsbElucHV0cyA9IGZhbHNlLFxuICAgIG1hc2tUZXh0Rm4sXG4gICAgbWFza0lucHV0Rm4sXG4gICAgc2xpbURPTSA9IGZhbHNlLFxuICAgIGRhdGFVUkxPcHRpb25zLFxuICAgIHByZXNlcnZlV2hpdGVTcGFjZSxcbiAgICBvblNlcmlhbGl6ZSxcbiAgICBvbklmcmFtZUxvYWQsXG4gICAgaWZyYW1lTG9hZFRpbWVvdXQsXG4gICAgb25TdHlsZXNoZWV0TG9hZCxcbiAgICBzdHlsZXNoZWV0TG9hZFRpbWVvdXQsXG4gICAga2VlcElmcmFtZVNyY0ZuID0gKCkgPT4gZmFsc2VcbiAgfSA9IG9wdGlvbnMgfHwge307XG4gIGNvbnN0IG1hc2tJbnB1dE9wdGlvbnMgPSBtYXNrQWxsSW5wdXRzID09PSB0cnVlID8ge1xuICAgIGNvbG9yOiB0cnVlLFxuICAgIGRhdGU6IHRydWUsXG4gICAgXCJkYXRldGltZS1sb2NhbFwiOiB0cnVlLFxuICAgIGVtYWlsOiB0cnVlLFxuICAgIG1vbnRoOiB0cnVlLFxuICAgIG51bWJlcjogdHJ1ZSxcbiAgICByYW5nZTogdHJ1ZSxcbiAgICBzZWFyY2g6IHRydWUsXG4gICAgdGVsOiB0cnVlLFxuICAgIHRleHQ6IHRydWUsXG4gICAgdGltZTogdHJ1ZSxcbiAgICB1cmw6IHRydWUsXG4gICAgd2VlazogdHJ1ZSxcbiAgICB0ZXh0YXJlYTogdHJ1ZSxcbiAgICBzZWxlY3Q6IHRydWUsXG4gICAgcGFzc3dvcmQ6IHRydWVcbiAgfSA6IG1hc2tBbGxJbnB1dHMgPT09IGZhbHNlID8ge1xuICAgIHBhc3N3b3JkOiB0cnVlXG4gIH0gOiBtYXNrQWxsSW5wdXRzO1xuICBjb25zdCBzbGltRE9NT3B0aW9ucyA9IHNsaW1ET00gPT09IHRydWUgfHwgc2xpbURPTSA9PT0gXCJhbGxcIiA/IChcbiAgICAvLyBpZiB0cnVlOiBzZXQgb2Ygc2Vuc2libGUgb3B0aW9ucyB0aGF0IHNob3VsZCBub3QgdGhyb3cgYXdheSBhbnkgaW5mb3JtYXRpb25cbiAgICB7XG4gICAgICBzY3JpcHQ6IHRydWUsXG4gICAgICBjb21tZW50OiB0cnVlLFxuICAgICAgaGVhZEZhdmljb246IHRydWUsXG4gICAgICBoZWFkV2hpdGVzcGFjZTogdHJ1ZSxcbiAgICAgIGhlYWRNZXRhRGVzY0tleXdvcmRzOiBzbGltRE9NID09PSBcImFsbFwiLFxuICAgICAgLy8gZGVzdHJ1Y3RpdmVcbiAgICAgIGhlYWRNZXRhU29jaWFsOiB0cnVlLFxuICAgICAgaGVhZE1ldGFSb2JvdHM6IHRydWUsXG4gICAgICBoZWFkTWV0YUh0dHBFcXVpdjogdHJ1ZSxcbiAgICAgIGhlYWRNZXRhQXV0aG9yc2hpcDogdHJ1ZSxcbiAgICAgIGhlYWRNZXRhVmVyaWZpY2F0aW9uOiB0cnVlXG4gICAgfVxuICApIDogc2xpbURPTSA9PT0gZmFsc2UgPyB7fSA6IHNsaW1ET007XG4gIHJldHVybiBzZXJpYWxpemVOb2RlV2l0aElkKG4sIHtcbiAgICBkb2M6IG4sXG4gICAgbWlycm9yLFxuICAgIGJsb2NrQ2xhc3MsXG4gICAgYmxvY2tTZWxlY3RvcixcbiAgICBtYXNrVGV4dENsYXNzLFxuICAgIG1hc2tUZXh0U2VsZWN0b3IsXG4gICAgc2tpcENoaWxkOiBmYWxzZSxcbiAgICBpbmxpbmVTdHlsZXNoZWV0LFxuICAgIG1hc2tJbnB1dE9wdGlvbnMsXG4gICAgbWFza1RleHRGbixcbiAgICBtYXNrSW5wdXRGbixcbiAgICBzbGltRE9NT3B0aW9ucyxcbiAgICBkYXRhVVJMT3B0aW9ucyxcbiAgICBpbmxpbmVJbWFnZXMsXG4gICAgcmVjb3JkQ2FudmFzLFxuICAgIHByZXNlcnZlV2hpdGVTcGFjZSxcbiAgICBvblNlcmlhbGl6ZSxcbiAgICBvbklmcmFtZUxvYWQsXG4gICAgaWZyYW1lTG9hZFRpbWVvdXQsXG4gICAgb25TdHlsZXNoZWV0TG9hZCxcbiAgICBzdHlsZXNoZWV0TG9hZFRpbWVvdXQsXG4gICAga2VlcElmcmFtZVNyY0ZuLFxuICAgIG5ld2x5QWRkZWRFbGVtZW50OiBmYWxzZVxuICB9KTtcbn1cbmZ1bmN0aW9uIHZpc2l0U25hcHNob3Qobm9kZTIsIG9uVmlzaXQpIHtcbiAgZnVuY3Rpb24gd2FsayhjdXJyZW50KSB7XG4gICAgb25WaXNpdChjdXJyZW50KTtcbiAgICBpZiAoY3VycmVudC50eXBlID09PSBOb2RlVHlwZS5Eb2N1bWVudCB8fCBjdXJyZW50LnR5cGUgPT09IE5vZGVUeXBlLkVsZW1lbnQpIHtcbiAgICAgIGN1cnJlbnQuY2hpbGROb2Rlcy5mb3JFYWNoKHdhbGspO1xuICAgIH1cbiAgfVxuICB3YWxrKG5vZGUyKTtcbn1cbmZ1bmN0aW9uIGNsZWFudXBTbmFwc2hvdCgpIHtcbiAgX2lkID0gMTtcbn1cbmNvbnN0IE1FRElBX1NFTEVDVE9SID0gLyhtYXh8bWluKS1kZXZpY2UtKHdpZHRofGhlaWdodCkvO1xuY29uc3QgTUVESUFfU0VMRUNUT1JfR0xPQkFMID0gbmV3IFJlZ0V4cChNRURJQV9TRUxFQ1RPUi5zb3VyY2UsIFwiZ1wiKTtcbmNvbnN0IG1lZGlhU2VsZWN0b3JQbHVnaW4gPSB7XG4gIHBvc3Rjc3NQbHVnaW46IFwicG9zdGNzcy1jdXN0b20tc2VsZWN0b3JzXCIsXG4gIHByZXBhcmUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBvc3Rjc3NQbHVnaW46IFwicG9zdGNzcy1jdXN0b20tc2VsZWN0b3JzXCIsXG4gICAgICBBdFJ1bGU6IGZ1bmN0aW9uKGF0cnVsZSkge1xuICAgICAgICBpZiAoYXRydWxlLnBhcmFtcy5tYXRjaChNRURJQV9TRUxFQ1RPUl9HTE9CQUwpKSB7XG4gICAgICAgICAgYXRydWxlLnBhcmFtcyA9IGF0cnVsZS5wYXJhbXMucmVwbGFjZShNRURJQV9TRUxFQ1RPUl9HTE9CQUwsIFwiJDEtJDJcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG59O1xuY29uc3QgcHNldWRvQ2xhc3NQbHVnaW4gPSB7XG4gIHBvc3Rjc3NQbHVnaW46IFwicG9zdGNzcy1ob3Zlci1jbGFzc2VzXCIsXG4gIHByZXBhcmU6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZpeGVkID0gW107XG4gICAgcmV0dXJuIHtcbiAgICAgIFJ1bGU6IGZ1bmN0aW9uKHJ1bGUyKSB7XG4gICAgICAgIGlmIChmaXhlZC5pbmRleE9mKHJ1bGUyKSAhPT0gLTEpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZml4ZWQucHVzaChydWxlMik7XG4gICAgICAgIHJ1bGUyLnNlbGVjdG9ycy5mb3JFYWNoKGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gICAgICAgICAgaWYgKCFzZWxlY3Rvci5pbmNsdWRlcyhcIjpcIikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3Qgc2VsZWN0b3JQYXJ0cyA9IHNlbGVjdG9yLnJlcGxhY2UoL1xcbi9nLCBcIiBcIikuc3BsaXQoXCIgXCIpO1xuICAgICAgICAgIGNvbnN0IHBzZXVkb2VkU2VsZWN0b3JQYXJ0cyA9IFtdO1xuICAgICAgICAgIHNlbGVjdG9yUGFydHMuZm9yRWFjaChmdW5jdGlvbihzZWxlY3RvclBhcnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHBzZXVkb3MgPSBzZWxlY3RvclBhcnQubWF0Y2goLzo6PyhbXjpdKykvZyk7XG4gICAgICAgICAgICBpZiAoIXBzZXVkb3MpIHtcbiAgICAgICAgICAgICAgcHNldWRvZWRTZWxlY3RvclBhcnRzLnB1c2goc2VsZWN0b3JQYXJ0KTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYmFzZVNlbGVjdG9yID0gc2VsZWN0b3JQYXJ0LnN1YnN0cihcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgc2VsZWN0b3JQYXJ0Lmxlbmd0aCAtIHBzZXVkb3Muam9pbihcIlwiKS5sZW5ndGhcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBjbGFzc1BzZXVkb3MgPSBwc2V1ZG9zLm1hcChmdW5jdGlvbihwc2V1ZG8pIHtcbiAgICAgICAgICAgICAgY29uc3QgcHNldWRvVG9DaGVjayA9IHBzZXVkby5yZXBsYWNlKC9cXCguKi9nLCBcIlwiKTtcbiAgICAgICAgICAgICAgaWYgKHBzZXVkb1RvQ2hlY2sgIT09IFwiOmhvdmVyXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHNldWRvO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChwc2V1ZG8ubWF0Y2goL146Oi8pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBzZXVkbztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBwc2V1ZG8gPSBwc2V1ZG8uc3Vic3RyKDEpO1xuICAgICAgICAgICAgICBwc2V1ZG8gPSBwc2V1ZG8ucmVwbGFjZSgvXFwoL2csIFwiXFxcXChcIik7XG4gICAgICAgICAgICAgIHBzZXVkbyA9IHBzZXVkby5yZXBsYWNlKC9cXCkvZywgXCJcXFxcKVwiKTtcbiAgICAgICAgICAgICAgcmV0dXJuIFwiLlxcXFw6XCIgKyBwc2V1ZG87XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHBzZXVkb2VkU2VsZWN0b3JQYXJ0cy5wdXNoKGJhc2VTZWxlY3RvciArIGNsYXNzUHNldWRvcy5qb2luKFwiXCIpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBhZGRTZWxlY3Rvcihwc2V1ZG9lZFNlbGVjdG9yUGFydHMuam9pbihcIiBcIikpO1xuICAgICAgICAgIGZ1bmN0aW9uIGFkZFNlbGVjdG9yKG5ld1NlbGVjdG9yKSB7XG4gICAgICAgICAgICBpZiAobmV3U2VsZWN0b3IgJiYgbmV3U2VsZWN0b3IgIT09IHNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgIHJ1bGUyLnNlbGVjdG9yICs9IFwiLFxcblwiICsgbmV3U2VsZWN0b3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59O1xuZnVuY3Rpb24gZ2V0RGVmYXVsdEV4cG9ydEZyb21DanMoeDIpIHtcbiAgcmV0dXJuIHgyICYmIHgyLl9fZXNNb2R1bGUgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHgyLCBcImRlZmF1bHRcIikgPyB4MltcImRlZmF1bHRcIl0gOiB4Mjtcbn1cbmZ1bmN0aW9uIGdldEF1Z21lbnRlZE5hbWVzcGFjZShuKSB7XG4gIGlmIChuLl9fZXNNb2R1bGUpIHJldHVybiBuO1xuICB2YXIgZiA9IG4uZGVmYXVsdDtcbiAgaWYgKHR5cGVvZiBmID09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBhID0gZnVuY3Rpb24gYTIoKSB7XG4gICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIGEyKSB7XG4gICAgICAgIHJldHVybiBSZWZsZWN0LmNvbnN0cnVjdChmLCBhcmd1bWVudHMsIHRoaXMuY29uc3RydWN0b3IpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICAgIGEucHJvdG90eXBlID0gZi5wcm90b3R5cGU7XG4gIH0gZWxzZSBhID0ge307XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgT2JqZWN0LmtleXMobikuZm9yRWFjaChmdW5jdGlvbihrKSB7XG4gICAgdmFyIGQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG4sIGspO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCBrLCBkLmdldCA/IGQgOiB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG5ba107XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gYTtcbn1cbnZhciBwaWNvY29sb3JzX2Jyb3dzZXIgPSB7IGV4cG9ydHM6IHt9IH07XG52YXIgeCA9IFN0cmluZztcbnZhciBjcmVhdGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHsgaXNDb2xvclN1cHBvcnRlZDogZmFsc2UsIHJlc2V0OiB4LCBib2xkOiB4LCBkaW06IHgsIGl0YWxpYzogeCwgdW5kZXJsaW5lOiB4LCBpbnZlcnNlOiB4LCBoaWRkZW46IHgsIHN0cmlrZXRocm91Z2g6IHgsIGJsYWNrOiB4LCByZWQ6IHgsIGdyZWVuOiB4LCB5ZWxsb3c6IHgsIGJsdWU6IHgsIG1hZ2VudGE6IHgsIGN5YW46IHgsIHdoaXRlOiB4LCBncmF5OiB4LCBiZ0JsYWNrOiB4LCBiZ1JlZDogeCwgYmdHcmVlbjogeCwgYmdZZWxsb3c6IHgsIGJnQmx1ZTogeCwgYmdNYWdlbnRhOiB4LCBiZ0N5YW46IHgsIGJnV2hpdGU6IHggfTtcbn07XG5waWNvY29sb3JzX2Jyb3dzZXIuZXhwb3J0cyA9IGNyZWF0ZSgpO1xucGljb2NvbG9yc19icm93c2VyLmV4cG9ydHMuY3JlYXRlQ29sb3JzID0gY3JlYXRlO1xudmFyIHBpY29jb2xvcnNfYnJvd3NlckV4cG9ydHMgPSBwaWNvY29sb3JzX2Jyb3dzZXIuZXhwb3J0cztcbmNvbnN0IF9fdml0ZUJyb3dzZXJFeHRlcm5hbCA9IHt9O1xuY29uc3QgX192aXRlQnJvd3NlckV4dGVybmFsJDEgPSAvKiBAX19QVVJFX18gKi8gT2JqZWN0LmZyZWV6ZSgvKiBAX19QVVJFX18gKi8gT2JqZWN0LmRlZmluZVByb3BlcnR5KHtcbiAgX19wcm90b19fOiBudWxsLFxuICBkZWZhdWx0OiBfX3ZpdGVCcm93c2VyRXh0ZXJuYWxcbn0sIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogXCJNb2R1bGVcIiB9KSk7XG5jb25zdCByZXF1aXJlJCQyID0gLyogQF9fUFVSRV9fICovIGdldEF1Z21lbnRlZE5hbWVzcGFjZShfX3ZpdGVCcm93c2VyRXh0ZXJuYWwkMSk7XG5sZXQgcGljbyA9IHBpY29jb2xvcnNfYnJvd3NlckV4cG9ydHM7XG5sZXQgdGVybWluYWxIaWdobGlnaHQkMSA9IHJlcXVpcmUkJDI7XG5sZXQgQ3NzU3ludGF4RXJyb3IkMyA9IGNsYXNzIENzc1N5bnRheEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBsaW5lLCBjb2x1bW4sIHNvdXJjZSwgZmlsZSwgcGx1Z2luMikge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXMubmFtZSA9IFwiQ3NzU3ludGF4RXJyb3JcIjtcbiAgICB0aGlzLnJlYXNvbiA9IG1lc3NhZ2U7XG4gICAgaWYgKGZpbGUpIHtcbiAgICAgIHRoaXMuZmlsZSA9IGZpbGU7XG4gICAgfVxuICAgIGlmIChzb3VyY2UpIHtcbiAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgIH1cbiAgICBpZiAocGx1Z2luMikge1xuICAgICAgdGhpcy5wbHVnaW4gPSBwbHVnaW4yO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGxpbmUgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIGNvbHVtbiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgaWYgKHR5cGVvZiBsaW5lID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgICAgIHRoaXMuY29sdW1uID0gY29sdW1uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZS5saW5lO1xuICAgICAgICB0aGlzLmNvbHVtbiA9IGxpbmUuY29sdW1uO1xuICAgICAgICB0aGlzLmVuZExpbmUgPSBjb2x1bW4ubGluZTtcbiAgICAgICAgdGhpcy5lbmRDb2x1bW4gPSBjb2x1bW4uY29sdW1uO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldE1lc3NhZ2UoKTtcbiAgICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcbiAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIENzc1N5bnRheEVycm9yKTtcbiAgICB9XG4gIH1cbiAgc2V0TWVzc2FnZSgpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSB0aGlzLnBsdWdpbiA/IHRoaXMucGx1Z2luICsgXCI6IFwiIDogXCJcIjtcbiAgICB0aGlzLm1lc3NhZ2UgKz0gdGhpcy5maWxlID8gdGhpcy5maWxlIDogXCI8Y3NzIGlucHV0PlwiO1xuICAgIGlmICh0eXBlb2YgdGhpcy5saW5lICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB0aGlzLm1lc3NhZ2UgKz0gXCI6XCIgKyB0aGlzLmxpbmUgKyBcIjpcIiArIHRoaXMuY29sdW1uO1xuICAgIH1cbiAgICB0aGlzLm1lc3NhZ2UgKz0gXCI6IFwiICsgdGhpcy5yZWFzb247XG4gIH1cbiAgc2hvd1NvdXJjZUNvZGUoY29sb3IpIHtcbiAgICBpZiAoIXRoaXMuc291cmNlKSByZXR1cm4gXCJcIjtcbiAgICBsZXQgY3NzID0gdGhpcy5zb3VyY2U7XG4gICAgaWYgKGNvbG9yID09IG51bGwpIGNvbG9yID0gcGljby5pc0NvbG9yU3VwcG9ydGVkO1xuICAgIGlmICh0ZXJtaW5hbEhpZ2hsaWdodCQxKSB7XG4gICAgICBpZiAoY29sb3IpIGNzcyA9IHRlcm1pbmFsSGlnaGxpZ2h0JDEoY3NzKTtcbiAgICB9XG4gICAgbGV0IGxpbmVzID0gY3NzLnNwbGl0KC9cXHI/XFxuLyk7XG4gICAgbGV0IHN0YXJ0ID0gTWF0aC5tYXgodGhpcy5saW5lIC0gMywgMCk7XG4gICAgbGV0IGVuZCA9IE1hdGgubWluKHRoaXMubGluZSArIDIsIGxpbmVzLmxlbmd0aCk7XG4gICAgbGV0IG1heFdpZHRoID0gU3RyaW5nKGVuZCkubGVuZ3RoO1xuICAgIGxldCBtYXJrLCBhc2lkZTtcbiAgICBpZiAoY29sb3IpIHtcbiAgICAgIGxldCB7IGJvbGQsIGdyYXksIHJlZCB9ID0gcGljby5jcmVhdGVDb2xvcnModHJ1ZSk7XG4gICAgICBtYXJrID0gKHRleHQpID0+IGJvbGQocmVkKHRleHQpKTtcbiAgICAgIGFzaWRlID0gKHRleHQpID0+IGdyYXkodGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1hcmsgPSBhc2lkZSA9IChzdHIpID0+IHN0cjtcbiAgICB9XG4gICAgcmV0dXJuIGxpbmVzLnNsaWNlKHN0YXJ0LCBlbmQpLm1hcCgobGluZSwgaW5kZXgyKSA9PiB7XG4gICAgICBsZXQgbnVtYmVyID0gc3RhcnQgKyAxICsgaW5kZXgyO1xuICAgICAgbGV0IGd1dHRlciA9IFwiIFwiICsgKFwiIFwiICsgbnVtYmVyKS5zbGljZSgtbWF4V2lkdGgpICsgXCIgfCBcIjtcbiAgICAgIGlmIChudW1iZXIgPT09IHRoaXMubGluZSkge1xuICAgICAgICBsZXQgc3BhY2luZyA9IGFzaWRlKGd1dHRlci5yZXBsYWNlKC9cXGQvZywgXCIgXCIpKSArIGxpbmUuc2xpY2UoMCwgdGhpcy5jb2x1bW4gLSAxKS5yZXBsYWNlKC9bXlxcdF0vZywgXCIgXCIpO1xuICAgICAgICByZXR1cm4gbWFyayhcIj5cIikgKyBhc2lkZShndXR0ZXIpICsgbGluZSArIFwiXFxuIFwiICsgc3BhY2luZyArIG1hcmsoXCJeXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFwiIFwiICsgYXNpZGUoZ3V0dGVyKSArIGxpbmU7XG4gICAgfSkuam9pbihcIlxcblwiKTtcbiAgfVxuICB0b1N0cmluZygpIHtcbiAgICBsZXQgY29kZSA9IHRoaXMuc2hvd1NvdXJjZUNvZGUoKTtcbiAgICBpZiAoY29kZSkge1xuICAgICAgY29kZSA9IFwiXFxuXFxuXCIgKyBjb2RlICsgXCJcXG5cIjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubmFtZSArIFwiOiBcIiArIHRoaXMubWVzc2FnZSArIGNvZGU7XG4gIH1cbn07XG52YXIgY3NzU3ludGF4RXJyb3IgPSBDc3NTeW50YXhFcnJvciQzO1xuQ3NzU3ludGF4RXJyb3IkMy5kZWZhdWx0ID0gQ3NzU3ludGF4RXJyb3IkMztcbnZhciBzeW1ib2xzID0ge307XG5zeW1ib2xzLmlzQ2xlYW4gPSBTeW1ib2woXCJpc0NsZWFuXCIpO1xuc3ltYm9scy5teSA9IFN5bWJvbChcIm15XCIpO1xuY29uc3QgREVGQVVMVF9SQVcgPSB7XG4gIGFmdGVyOiBcIlxcblwiLFxuICBiZWZvcmVDbG9zZTogXCJcXG5cIixcbiAgYmVmb3JlQ29tbWVudDogXCJcXG5cIixcbiAgYmVmb3JlRGVjbDogXCJcXG5cIixcbiAgYmVmb3JlT3BlbjogXCIgXCIsXG4gIGJlZm9yZVJ1bGU6IFwiXFxuXCIsXG4gIGNvbG9uOiBcIjogXCIsXG4gIGNvbW1lbnRMZWZ0OiBcIiBcIixcbiAgY29tbWVudFJpZ2h0OiBcIiBcIixcbiAgZW1wdHlCb2R5OiBcIlwiLFxuICBpbmRlbnQ6IFwiICAgIFwiLFxuICBzZW1pY29sb246IGZhbHNlXG59O1xuZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHIpIHtcbiAgcmV0dXJuIHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufVxubGV0IFN0cmluZ2lmaWVyJDIgPSBjbGFzcyBTdHJpbmdpZmllciB7XG4gIGNvbnN0cnVjdG9yKGJ1aWxkZXIpIHtcbiAgICB0aGlzLmJ1aWxkZXIgPSBidWlsZGVyO1xuICB9XG4gIGF0cnVsZShub2RlMiwgc2VtaWNvbG9uKSB7XG4gICAgbGV0IG5hbWUgPSBcIkBcIiArIG5vZGUyLm5hbWU7XG4gICAgbGV0IHBhcmFtcyA9IG5vZGUyLnBhcmFtcyA/IHRoaXMucmF3VmFsdWUobm9kZTIsIFwicGFyYW1zXCIpIDogXCJcIjtcbiAgICBpZiAodHlwZW9mIG5vZGUyLnJhd3MuYWZ0ZXJOYW1lICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBuYW1lICs9IG5vZGUyLnJhd3MuYWZ0ZXJOYW1lO1xuICAgIH0gZWxzZSBpZiAocGFyYW1zKSB7XG4gICAgICBuYW1lICs9IFwiIFwiO1xuICAgIH1cbiAgICBpZiAobm9kZTIubm9kZXMpIHtcbiAgICAgIHRoaXMuYmxvY2sobm9kZTIsIG5hbWUgKyBwYXJhbXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgZW5kID0gKG5vZGUyLnJhd3MuYmV0d2VlbiB8fCBcIlwiKSArIChzZW1pY29sb24gPyBcIjtcIiA6IFwiXCIpO1xuICAgICAgdGhpcy5idWlsZGVyKG5hbWUgKyBwYXJhbXMgKyBlbmQsIG5vZGUyKTtcbiAgICB9XG4gIH1cbiAgYmVmb3JlQWZ0ZXIobm9kZTIsIGRldGVjdCkge1xuICAgIGxldCB2YWx1ZTtcbiAgICBpZiAobm9kZTIudHlwZSA9PT0gXCJkZWNsXCIpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5yYXcobm9kZTIsIG51bGwsIFwiYmVmb3JlRGVjbFwiKTtcbiAgICB9IGVsc2UgaWYgKG5vZGUyLnR5cGUgPT09IFwiY29tbWVudFwiKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMucmF3KG5vZGUyLCBudWxsLCBcImJlZm9yZUNvbW1lbnRcIik7XG4gICAgfSBlbHNlIGlmIChkZXRlY3QgPT09IFwiYmVmb3JlXCIpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5yYXcobm9kZTIsIG51bGwsIFwiYmVmb3JlUnVsZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSB0aGlzLnJhdyhub2RlMiwgbnVsbCwgXCJiZWZvcmVDbG9zZVwiKTtcbiAgICB9XG4gICAgbGV0IGJ1ZiA9IG5vZGUyLnBhcmVudDtcbiAgICBsZXQgZGVwdGggPSAwO1xuICAgIHdoaWxlIChidWYgJiYgYnVmLnR5cGUgIT09IFwicm9vdFwiKSB7XG4gICAgICBkZXB0aCArPSAxO1xuICAgICAgYnVmID0gYnVmLnBhcmVudDtcbiAgICB9XG4gICAgaWYgKHZhbHVlLmluY2x1ZGVzKFwiXFxuXCIpKSB7XG4gICAgICBsZXQgaW5kZW50ID0gdGhpcy5yYXcobm9kZTIsIG51bGwsIFwiaW5kZW50XCIpO1xuICAgICAgaWYgKGluZGVudC5sZW5ndGgpIHtcbiAgICAgICAgZm9yIChsZXQgc3RlcCA9IDA7IHN0ZXAgPCBkZXB0aDsgc3RlcCsrKSB2YWx1ZSArPSBpbmRlbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBibG9jayhub2RlMiwgc3RhcnQpIHtcbiAgICBsZXQgYmV0d2VlbiA9IHRoaXMucmF3KG5vZGUyLCBcImJldHdlZW5cIiwgXCJiZWZvcmVPcGVuXCIpO1xuICAgIHRoaXMuYnVpbGRlcihzdGFydCArIGJldHdlZW4gKyBcIntcIiwgbm9kZTIsIFwic3RhcnRcIik7XG4gICAgbGV0IGFmdGVyO1xuICAgIGlmIChub2RlMi5ub2RlcyAmJiBub2RlMi5ub2Rlcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuYm9keShub2RlMik7XG4gICAgICBhZnRlciA9IHRoaXMucmF3KG5vZGUyLCBcImFmdGVyXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZnRlciA9IHRoaXMucmF3KG5vZGUyLCBcImFmdGVyXCIsIFwiZW1wdHlCb2R5XCIpO1xuICAgIH1cbiAgICBpZiAoYWZ0ZXIpIHRoaXMuYnVpbGRlcihhZnRlcik7XG4gICAgdGhpcy5idWlsZGVyKFwifVwiLCBub2RlMiwgXCJlbmRcIik7XG4gIH1cbiAgYm9keShub2RlMikge1xuICAgIGxldCBsYXN0ID0gbm9kZTIubm9kZXMubGVuZ3RoIC0gMTtcbiAgICB3aGlsZSAobGFzdCA+IDApIHtcbiAgICAgIGlmIChub2RlMi5ub2Rlc1tsYXN0XS50eXBlICE9PSBcImNvbW1lbnRcIikgYnJlYWs7XG4gICAgICBsYXN0IC09IDE7XG4gICAgfVxuICAgIGxldCBzZW1pY29sb24gPSB0aGlzLnJhdyhub2RlMiwgXCJzZW1pY29sb25cIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlMi5ub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gbm9kZTIubm9kZXNbaV07XG4gICAgICBsZXQgYmVmb3JlID0gdGhpcy5yYXcoY2hpbGQsIFwiYmVmb3JlXCIpO1xuICAgICAgaWYgKGJlZm9yZSkgdGhpcy5idWlsZGVyKGJlZm9yZSk7XG4gICAgICB0aGlzLnN0cmluZ2lmeShjaGlsZCwgbGFzdCAhPT0gaSB8fCBzZW1pY29sb24pO1xuICAgIH1cbiAgfVxuICBjb21tZW50KG5vZGUyKSB7XG4gICAgbGV0IGxlZnQgPSB0aGlzLnJhdyhub2RlMiwgXCJsZWZ0XCIsIFwiY29tbWVudExlZnRcIik7XG4gICAgbGV0IHJpZ2h0ID0gdGhpcy5yYXcobm9kZTIsIFwicmlnaHRcIiwgXCJjb21tZW50UmlnaHRcIik7XG4gICAgdGhpcy5idWlsZGVyKFwiLypcIiArIGxlZnQgKyBub2RlMi50ZXh0ICsgcmlnaHQgKyBcIiovXCIsIG5vZGUyKTtcbiAgfVxuICBkZWNsKG5vZGUyLCBzZW1pY29sb24pIHtcbiAgICBsZXQgYmV0d2VlbiA9IHRoaXMucmF3KG5vZGUyLCBcImJldHdlZW5cIiwgXCJjb2xvblwiKTtcbiAgICBsZXQgc3RyaW5nID0gbm9kZTIucHJvcCArIGJldHdlZW4gKyB0aGlzLnJhd1ZhbHVlKG5vZGUyLCBcInZhbHVlXCIpO1xuICAgIGlmIChub2RlMi5pbXBvcnRhbnQpIHtcbiAgICAgIHN0cmluZyArPSBub2RlMi5yYXdzLmltcG9ydGFudCB8fCBcIiAhaW1wb3J0YW50XCI7XG4gICAgfVxuICAgIGlmIChzZW1pY29sb24pIHN0cmluZyArPSBcIjtcIjtcbiAgICB0aGlzLmJ1aWxkZXIoc3RyaW5nLCBub2RlMik7XG4gIH1cbiAgZG9jdW1lbnQobm9kZTIpIHtcbiAgICB0aGlzLmJvZHkobm9kZTIpO1xuICB9XG4gIHJhdyhub2RlMiwgb3duLCBkZXRlY3QpIHtcbiAgICBsZXQgdmFsdWU7XG4gICAgaWYgKCFkZXRlY3QpIGRldGVjdCA9IG93bjtcbiAgICBpZiAob3duKSB7XG4gICAgICB2YWx1ZSA9IG5vZGUyLnJhd3Nbb3duXTtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwidW5kZWZpbmVkXCIpIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgbGV0IHBhcmVudCA9IG5vZGUyLnBhcmVudDtcbiAgICBpZiAoZGV0ZWN0ID09PSBcImJlZm9yZVwiKSB7XG4gICAgICBpZiAoIXBhcmVudCB8fCBwYXJlbnQudHlwZSA9PT0gXCJyb290XCIgJiYgcGFyZW50LmZpcnN0ID09PSBub2RlMikge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgIH1cbiAgICAgIGlmIChwYXJlbnQgJiYgcGFyZW50LnR5cGUgPT09IFwiZG9jdW1lbnRcIikge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFwYXJlbnQpIHJldHVybiBERUZBVUxUX1JBV1tkZXRlY3RdO1xuICAgIGxldCByb290MiA9IG5vZGUyLnJvb3QoKTtcbiAgICBpZiAoIXJvb3QyLnJhd0NhY2hlKSByb290Mi5yYXdDYWNoZSA9IHt9O1xuICAgIGlmICh0eXBlb2Ygcm9vdDIucmF3Q2FjaGVbZGV0ZWN0XSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgcmV0dXJuIHJvb3QyLnJhd0NhY2hlW2RldGVjdF07XG4gICAgfVxuICAgIGlmIChkZXRlY3QgPT09IFwiYmVmb3JlXCIgfHwgZGV0ZWN0ID09PSBcImFmdGVyXCIpIHtcbiAgICAgIHJldHVybiB0aGlzLmJlZm9yZUFmdGVyKG5vZGUyLCBkZXRlY3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgbWV0aG9kID0gXCJyYXdcIiArIGNhcGl0YWxpemUoZGV0ZWN0KTtcbiAgICAgIGlmICh0aGlzW21ldGhvZF0pIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzW21ldGhvZF0ocm9vdDIsIG5vZGUyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3QyLndhbGsoKGkpID0+IHtcbiAgICAgICAgICB2YWx1ZSA9IGkucmF3c1tvd25dO1xuICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHZhbHVlID0gREVGQVVMVF9SQVdbZGV0ZWN0XTtcbiAgICByb290Mi5yYXdDYWNoZVtkZXRlY3RdID0gdmFsdWU7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHJhd0JlZm9yZUNsb3NlKHJvb3QyKSB7XG4gICAgbGV0IHZhbHVlO1xuICAgIHJvb3QyLndhbGsoKGkpID0+IHtcbiAgICAgIGlmIChpLm5vZGVzICYmIGkubm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAodHlwZW9mIGkucmF3cy5hZnRlciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIHZhbHVlID0gaS5yYXdzLmFmdGVyO1xuICAgICAgICAgIGlmICh2YWx1ZS5pbmNsdWRlcyhcIlxcblwiKSkge1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXlxcbl0rJC8sIFwiXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAodmFsdWUpIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXFxTL2csIFwiXCIpO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICByYXdCZWZvcmVDb21tZW50KHJvb3QyLCBub2RlMikge1xuICAgIGxldCB2YWx1ZTtcbiAgICByb290Mi53YWxrQ29tbWVudHMoKGkpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgaS5yYXdzLmJlZm9yZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICB2YWx1ZSA9IGkucmF3cy5iZWZvcmU7XG4gICAgICAgIGlmICh2YWx1ZS5pbmNsdWRlcyhcIlxcblwiKSkge1xuICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW15cXG5dKyQvLCBcIlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgdmFsdWUgPSB0aGlzLnJhdyhub2RlMiwgbnVsbCwgXCJiZWZvcmVEZWNsXCIpO1xuICAgIH0gZWxzZSBpZiAodmFsdWUpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXFxTL2csIFwiXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgcmF3QmVmb3JlRGVjbChyb290Miwgbm9kZTIpIHtcbiAgICBsZXQgdmFsdWU7XG4gICAgcm9vdDIud2Fsa0RlY2xzKChpKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGkucmF3cy5iZWZvcmUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgdmFsdWUgPSBpLnJhd3MuYmVmb3JlO1xuICAgICAgICBpZiAodmFsdWUuaW5jbHVkZXMoXCJcXG5cIikpIHtcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1teXFxuXSskLywgXCJcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5yYXcobm9kZTIsIG51bGwsIFwiYmVmb3JlUnVsZVwiKTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xcUy9nLCBcIlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHJhd0JlZm9yZU9wZW4ocm9vdDIpIHtcbiAgICBsZXQgdmFsdWU7XG4gICAgcm9vdDIud2FsaygoaSkgPT4ge1xuICAgICAgaWYgKGkudHlwZSAhPT0gXCJkZWNsXCIpIHtcbiAgICAgICAgdmFsdWUgPSBpLnJhd3MuYmV0d2VlbjtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICByYXdCZWZvcmVSdWxlKHJvb3QyKSB7XG4gICAgbGV0IHZhbHVlO1xuICAgIHJvb3QyLndhbGsoKGkpID0+IHtcbiAgICAgIGlmIChpLm5vZGVzICYmIChpLnBhcmVudCAhPT0gcm9vdDIgfHwgcm9vdDIuZmlyc3QgIT09IGkpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaS5yYXdzLmJlZm9yZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIHZhbHVlID0gaS5yYXdzLmJlZm9yZTtcbiAgICAgICAgICBpZiAodmFsdWUuaW5jbHVkZXMoXCJcXG5cIikpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW15cXG5dKyQvLCBcIlwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHZhbHVlKSB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xcUy9nLCBcIlwiKTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgcmF3Q29sb24ocm9vdDIpIHtcbiAgICBsZXQgdmFsdWU7XG4gICAgcm9vdDIud2Fsa0RlY2xzKChpKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGkucmF3cy5iZXR3ZWVuICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHZhbHVlID0gaS5yYXdzLmJldHdlZW4ucmVwbGFjZSgvW15cXHM6XS9nLCBcIlwiKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICByYXdFbXB0eUJvZHkocm9vdDIpIHtcbiAgICBsZXQgdmFsdWU7XG4gICAgcm9vdDIud2FsaygoaSkgPT4ge1xuICAgICAgaWYgKGkubm9kZXMgJiYgaS5ub2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdmFsdWUgPSBpLnJhd3MuYWZ0ZXI7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgcmF3SW5kZW50KHJvb3QyKSB7XG4gICAgaWYgKHJvb3QyLnJhd3MuaW5kZW50KSByZXR1cm4gcm9vdDIucmF3cy5pbmRlbnQ7XG4gICAgbGV0IHZhbHVlO1xuICAgIHJvb3QyLndhbGsoKGkpID0+IHtcbiAgICAgIGxldCBwID0gaS5wYXJlbnQ7XG4gICAgICBpZiAocCAmJiBwICE9PSByb290MiAmJiBwLnBhcmVudCAmJiBwLnBhcmVudCA9PT0gcm9vdDIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpLnJhd3MuYmVmb3JlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgbGV0IHBhcnRzID0gaS5yYXdzLmJlZm9yZS5zcGxpdChcIlxcblwiKTtcbiAgICAgICAgICB2YWx1ZSA9IHBhcnRzW3BhcnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXFxTL2csIFwiXCIpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICByYXdTZW1pY29sb24ocm9vdDIpIHtcbiAgICBsZXQgdmFsdWU7XG4gICAgcm9vdDIud2FsaygoaSkgPT4ge1xuICAgICAgaWYgKGkubm9kZXMgJiYgaS5ub2Rlcy5sZW5ndGggJiYgaS5sYXN0LnR5cGUgPT09IFwiZGVjbFwiKSB7XG4gICAgICAgIHZhbHVlID0gaS5yYXdzLnNlbWljb2xvbjtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICByYXdWYWx1ZShub2RlMiwgcHJvcCkge1xuICAgIGxldCB2YWx1ZSA9IG5vZGUyW3Byb3BdO1xuICAgIGxldCByYXcgPSBub2RlMi5yYXdzW3Byb3BdO1xuICAgIGlmIChyYXcgJiYgcmF3LnZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHJhdy5yYXc7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICByb290KG5vZGUyKSB7XG4gICAgdGhpcy5ib2R5KG5vZGUyKTtcbiAgICBpZiAobm9kZTIucmF3cy5hZnRlcikgdGhpcy5idWlsZGVyKG5vZGUyLnJhd3MuYWZ0ZXIpO1xuICB9XG4gIHJ1bGUobm9kZTIpIHtcbiAgICB0aGlzLmJsb2NrKG5vZGUyLCB0aGlzLnJhd1ZhbHVlKG5vZGUyLCBcInNlbGVjdG9yXCIpKTtcbiAgICBpZiAobm9kZTIucmF3cy5vd25TZW1pY29sb24pIHtcbiAgICAgIHRoaXMuYnVpbGRlcihub2RlMi5yYXdzLm93blNlbWljb2xvbiwgbm9kZTIsIFwiZW5kXCIpO1xuICAgIH1cbiAgfVxuICBzdHJpbmdpZnkobm9kZTIsIHNlbWljb2xvbikge1xuICAgIGlmICghdGhpc1tub2RlMi50eXBlXSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIlVua25vd24gQVNUIG5vZGUgdHlwZSBcIiArIG5vZGUyLnR5cGUgKyBcIi4gTWF5YmUgeW91IG5lZWQgdG8gY2hhbmdlIFBvc3RDU1Mgc3RyaW5naWZpZXIuXCJcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXNbbm9kZTIudHlwZV0obm9kZTIsIHNlbWljb2xvbik7XG4gIH1cbn07XG52YXIgc3RyaW5naWZpZXIgPSBTdHJpbmdpZmllciQyO1xuU3RyaW5naWZpZXIkMi5kZWZhdWx0ID0gU3RyaW5naWZpZXIkMjtcbmxldCBTdHJpbmdpZmllciQxID0gc3RyaW5naWZpZXI7XG5mdW5jdGlvbiBzdHJpbmdpZnkkNChub2RlMiwgYnVpbGRlcikge1xuICBsZXQgc3RyID0gbmV3IFN0cmluZ2lmaWVyJDEoYnVpbGRlcik7XG4gIHN0ci5zdHJpbmdpZnkobm9kZTIpO1xufVxudmFyIHN0cmluZ2lmeV8xID0gc3RyaW5naWZ5JDQ7XG5zdHJpbmdpZnkkNC5kZWZhdWx0ID0gc3RyaW5naWZ5JDQ7XG5sZXQgeyBpc0NsZWFuOiBpc0NsZWFuJDIsIG15OiBteSQyIH0gPSBzeW1ib2xzO1xubGV0IENzc1N5bnRheEVycm9yJDIgPSBjc3NTeW50YXhFcnJvcjtcbmxldCBTdHJpbmdpZmllcjIgPSBzdHJpbmdpZmllcjtcbmxldCBzdHJpbmdpZnkkMyA9IHN0cmluZ2lmeV8xO1xuZnVuY3Rpb24gY2xvbmVOb2RlKG9iaiwgcGFyZW50KSB7XG4gIGxldCBjbG9uZWQgPSBuZXcgb2JqLmNvbnN0cnVjdG9yKCk7XG4gIGZvciAobGV0IGkgaW4gb2JqKSB7XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChpID09PSBcInByb3h5Q2FjaGVcIikgY29udGludWU7XG4gICAgbGV0IHZhbHVlID0gb2JqW2ldO1xuICAgIGxldCB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICAgIGlmIChpID09PSBcInBhcmVudFwiICYmIHR5cGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGlmIChwYXJlbnQpIGNsb25lZFtpXSA9IHBhcmVudDtcbiAgICB9IGVsc2UgaWYgKGkgPT09IFwic291cmNlXCIpIHtcbiAgICAgIGNsb25lZFtpXSA9IHZhbHVlO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIGNsb25lZFtpXSA9IHZhbHVlLm1hcCgoaikgPT4gY2xvbmVOb2RlKGosIGNsb25lZCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCkgdmFsdWUgPSBjbG9uZU5vZGUodmFsdWUpO1xuICAgICAgY2xvbmVkW2ldID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBjbG9uZWQ7XG59XG5sZXQgTm9kZSQ0ID0gY2xhc3MgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKGRlZmF1bHRzID0ge30pIHtcbiAgICB0aGlzLnJhd3MgPSB7fTtcbiAgICB0aGlzW2lzQ2xlYW4kMl0gPSBmYWxzZTtcbiAgICB0aGlzW215JDJdID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBuYW1lIGluIGRlZmF1bHRzKSB7XG4gICAgICBpZiAobmFtZSA9PT0gXCJub2Rlc1wiKSB7XG4gICAgICAgIHRoaXMubm9kZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgbm9kZTIgb2YgZGVmYXVsdHNbbmFtZV0pIHtcbiAgICAgICAgICBpZiAodHlwZW9mIG5vZGUyLmNsb25lID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kKG5vZGUyLmNsb25lKCkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFwcGVuZChub2RlMik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzW25hbWVdID0gZGVmYXVsdHNbbmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGFkZFRvRXJyb3IoZXJyb3IpIHtcbiAgICBlcnJvci5wb3N0Y3NzTm9kZSA9IHRoaXM7XG4gICAgaWYgKGVycm9yLnN0YWNrICYmIHRoaXMuc291cmNlICYmIC9cXG5cXHN7NH1hdCAvLnRlc3QoZXJyb3Iuc3RhY2spKSB7XG4gICAgICBsZXQgcyA9IHRoaXMuc291cmNlO1xuICAgICAgZXJyb3Iuc3RhY2sgPSBlcnJvci5zdGFjay5yZXBsYWNlKFxuICAgICAgICAvXFxuXFxzezR9YXQgLyxcbiAgICAgICAgYCQmJHtzLmlucHV0LmZyb219OiR7cy5zdGFydC5saW5lfToke3Muc3RhcnQuY29sdW1ufSQmYFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG4gIGFmdGVyKGFkZCkge1xuICAgIHRoaXMucGFyZW50Lmluc2VydEFmdGVyKHRoaXMsIGFkZCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgYXNzaWduKG92ZXJyaWRlcyA9IHt9KSB7XG4gICAgZm9yIChsZXQgbmFtZSBpbiBvdmVycmlkZXMpIHtcbiAgICAgIHRoaXNbbmFtZV0gPSBvdmVycmlkZXNbbmFtZV07XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGJlZm9yZShhZGQpIHtcbiAgICB0aGlzLnBhcmVudC5pbnNlcnRCZWZvcmUodGhpcywgYWRkKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBjbGVhblJhd3Moa2VlcEJldHdlZW4pIHtcbiAgICBkZWxldGUgdGhpcy5yYXdzLmJlZm9yZTtcbiAgICBkZWxldGUgdGhpcy5yYXdzLmFmdGVyO1xuICAgIGlmICgha2VlcEJldHdlZW4pIGRlbGV0ZSB0aGlzLnJhd3MuYmV0d2VlbjtcbiAgfVxuICBjbG9uZShvdmVycmlkZXMgPSB7fSkge1xuICAgIGxldCBjbG9uZWQgPSBjbG9uZU5vZGUodGhpcyk7XG4gICAgZm9yIChsZXQgbmFtZSBpbiBvdmVycmlkZXMpIHtcbiAgICAgIGNsb25lZFtuYW1lXSA9IG92ZXJyaWRlc1tuYW1lXTtcbiAgICB9XG4gICAgcmV0dXJuIGNsb25lZDtcbiAgfVxuICBjbG9uZUFmdGVyKG92ZXJyaWRlcyA9IHt9KSB7XG4gICAgbGV0IGNsb25lZCA9IHRoaXMuY2xvbmUob3ZlcnJpZGVzKTtcbiAgICB0aGlzLnBhcmVudC5pbnNlcnRBZnRlcih0aGlzLCBjbG9uZWQpO1xuICAgIHJldHVybiBjbG9uZWQ7XG4gIH1cbiAgY2xvbmVCZWZvcmUob3ZlcnJpZGVzID0ge30pIHtcbiAgICBsZXQgY2xvbmVkID0gdGhpcy5jbG9uZShvdmVycmlkZXMpO1xuICAgIHRoaXMucGFyZW50Lmluc2VydEJlZm9yZSh0aGlzLCBjbG9uZWQpO1xuICAgIHJldHVybiBjbG9uZWQ7XG4gIH1cbiAgZXJyb3IobWVzc2FnZSwgb3B0cyA9IHt9KSB7XG4gICAgaWYgKHRoaXMuc291cmNlKSB7XG4gICAgICBsZXQgeyBlbmQsIHN0YXJ0IH0gPSB0aGlzLnJhbmdlQnkob3B0cyk7XG4gICAgICByZXR1cm4gdGhpcy5zb3VyY2UuaW5wdXQuZXJyb3IoXG4gICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIHsgY29sdW1uOiBzdGFydC5jb2x1bW4sIGxpbmU6IHN0YXJ0LmxpbmUgfSxcbiAgICAgICAgeyBjb2x1bW46IGVuZC5jb2x1bW4sIGxpbmU6IGVuZC5saW5lIH0sXG4gICAgICAgIG9wdHNcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgQ3NzU3ludGF4RXJyb3IkMihtZXNzYWdlKTtcbiAgfVxuICBnZXRQcm94eVByb2Nlc3NvcigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZ2V0KG5vZGUyLCBwcm9wKSB7XG4gICAgICAgIGlmIChwcm9wID09PSBcInByb3h5T2ZcIikge1xuICAgICAgICAgIHJldHVybiBub2RlMjtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wID09PSBcInJvb3RcIikge1xuICAgICAgICAgIHJldHVybiAoKSA9PiBub2RlMi5yb290KCkudG9Qcm94eSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBub2RlMltwcm9wXTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNldChub2RlMiwgcHJvcCwgdmFsdWUpIHtcbiAgICAgICAgaWYgKG5vZGUyW3Byb3BdID09PSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgICAgIG5vZGUyW3Byb3BdID0gdmFsdWU7XG4gICAgICAgIGlmIChwcm9wID09PSBcInByb3BcIiB8fCBwcm9wID09PSBcInZhbHVlXCIgfHwgcHJvcCA9PT0gXCJuYW1lXCIgfHwgcHJvcCA9PT0gXCJwYXJhbXNcIiB8fCBwcm9wID09PSBcImltcG9ydGFudFwiIHx8IC8qIGM4IGlnbm9yZSBuZXh0ICovXG4gICAgICAgIHByb3AgPT09IFwidGV4dFwiKSB7XG4gICAgICAgICAgbm9kZTIubWFya0RpcnR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBtYXJrRGlydHkoKSB7XG4gICAgaWYgKHRoaXNbaXNDbGVhbiQyXSkge1xuICAgICAgdGhpc1tpc0NsZWFuJDJdID0gZmFsc2U7XG4gICAgICBsZXQgbmV4dCA9IHRoaXM7XG4gICAgICB3aGlsZSAobmV4dCA9IG5leHQucGFyZW50KSB7XG4gICAgICAgIG5leHRbaXNDbGVhbiQyXSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBuZXh0KCkge1xuICAgIGlmICghdGhpcy5wYXJlbnQpIHJldHVybiB2b2lkIDA7XG4gICAgbGV0IGluZGV4MiA9IHRoaXMucGFyZW50LmluZGV4KHRoaXMpO1xuICAgIHJldHVybiB0aGlzLnBhcmVudC5ub2Rlc1tpbmRleDIgKyAxXTtcbiAgfVxuICBwb3NpdGlvbkJ5KG9wdHMsIHN0cmluZ1JlcHJlc2VudGF0aW9uKSB7XG4gICAgbGV0IHBvcyA9IHRoaXMuc291cmNlLnN0YXJ0O1xuICAgIGlmIChvcHRzLmluZGV4KSB7XG4gICAgICBwb3MgPSB0aGlzLnBvc2l0aW9uSW5zaWRlKG9wdHMuaW5kZXgsIHN0cmluZ1JlcHJlc2VudGF0aW9uKTtcbiAgICB9IGVsc2UgaWYgKG9wdHMud29yZCkge1xuICAgICAgc3RyaW5nUmVwcmVzZW50YXRpb24gPSB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICBsZXQgaW5kZXgyID0gc3RyaW5nUmVwcmVzZW50YXRpb24uaW5kZXhPZihvcHRzLndvcmQpO1xuICAgICAgaWYgKGluZGV4MiAhPT0gLTEpIHBvcyA9IHRoaXMucG9zaXRpb25JbnNpZGUoaW5kZXgyLCBzdHJpbmdSZXByZXNlbnRhdGlvbik7XG4gICAgfVxuICAgIHJldHVybiBwb3M7XG4gIH1cbiAgcG9zaXRpb25JbnNpZGUoaW5kZXgyLCBzdHJpbmdSZXByZXNlbnRhdGlvbikge1xuICAgIGxldCBzdHJpbmcgPSBzdHJpbmdSZXByZXNlbnRhdGlvbiB8fCB0aGlzLnRvU3RyaW5nKCk7XG4gICAgbGV0IGNvbHVtbiA9IHRoaXMuc291cmNlLnN0YXJ0LmNvbHVtbjtcbiAgICBsZXQgbGluZSA9IHRoaXMuc291cmNlLnN0YXJ0LmxpbmU7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmRleDI7IGkrKykge1xuICAgICAgaWYgKHN0cmluZ1tpXSA9PT0gXCJcXG5cIikge1xuICAgICAgICBjb2x1bW4gPSAxO1xuICAgICAgICBsaW5lICs9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2x1bW4gKz0gMTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgY29sdW1uLCBsaW5lIH07XG4gIH1cbiAgcHJldigpIHtcbiAgICBpZiAoIXRoaXMucGFyZW50KSByZXR1cm4gdm9pZCAwO1xuICAgIGxldCBpbmRleDIgPSB0aGlzLnBhcmVudC5pbmRleCh0aGlzKTtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQubm9kZXNbaW5kZXgyIC0gMV07XG4gIH1cbiAgcmFuZ2VCeShvcHRzKSB7XG4gICAgbGV0IHN0YXJ0ID0ge1xuICAgICAgY29sdW1uOiB0aGlzLnNvdXJjZS5zdGFydC5jb2x1bW4sXG4gICAgICBsaW5lOiB0aGlzLnNvdXJjZS5zdGFydC5saW5lXG4gICAgfTtcbiAgICBsZXQgZW5kID0gdGhpcy5zb3VyY2UuZW5kID8ge1xuICAgICAgY29sdW1uOiB0aGlzLnNvdXJjZS5lbmQuY29sdW1uICsgMSxcbiAgICAgIGxpbmU6IHRoaXMuc291cmNlLmVuZC5saW5lXG4gICAgfSA6IHtcbiAgICAgIGNvbHVtbjogc3RhcnQuY29sdW1uICsgMSxcbiAgICAgIGxpbmU6IHN0YXJ0LmxpbmVcbiAgICB9O1xuICAgIGlmIChvcHRzLndvcmQpIHtcbiAgICAgIGxldCBzdHJpbmdSZXByZXNlbnRhdGlvbiA9IHRoaXMudG9TdHJpbmcoKTtcbiAgICAgIGxldCBpbmRleDIgPSBzdHJpbmdSZXByZXNlbnRhdGlvbi5pbmRleE9mKG9wdHMud29yZCk7XG4gICAgICBpZiAoaW5kZXgyICE9PSAtMSkge1xuICAgICAgICBzdGFydCA9IHRoaXMucG9zaXRpb25JbnNpZGUoaW5kZXgyLCBzdHJpbmdSZXByZXNlbnRhdGlvbik7XG4gICAgICAgIGVuZCA9IHRoaXMucG9zaXRpb25JbnNpZGUoaW5kZXgyICsgb3B0cy53b3JkLmxlbmd0aCwgc3RyaW5nUmVwcmVzZW50YXRpb24pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAob3B0cy5zdGFydCkge1xuICAgICAgICBzdGFydCA9IHtcbiAgICAgICAgICBjb2x1bW46IG9wdHMuc3RhcnQuY29sdW1uLFxuICAgICAgICAgIGxpbmU6IG9wdHMuc3RhcnQubGluZVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChvcHRzLmluZGV4KSB7XG4gICAgICAgIHN0YXJ0ID0gdGhpcy5wb3NpdGlvbkluc2lkZShvcHRzLmluZGV4KTtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRzLmVuZCkge1xuICAgICAgICBlbmQgPSB7XG4gICAgICAgICAgY29sdW1uOiBvcHRzLmVuZC5jb2x1bW4sXG4gICAgICAgICAgbGluZTogb3B0cy5lbmQubGluZVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0cy5lbmRJbmRleCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICBlbmQgPSB0aGlzLnBvc2l0aW9uSW5zaWRlKG9wdHMuZW5kSW5kZXgpO1xuICAgICAgfSBlbHNlIGlmIChvcHRzLmluZGV4KSB7XG4gICAgICAgIGVuZCA9IHRoaXMucG9zaXRpb25JbnNpZGUob3B0cy5pbmRleCArIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kLmxpbmUgPCBzdGFydC5saW5lIHx8IGVuZC5saW5lID09PSBzdGFydC5saW5lICYmIGVuZC5jb2x1bW4gPD0gc3RhcnQuY29sdW1uKSB7XG4gICAgICBlbmQgPSB7IGNvbHVtbjogc3RhcnQuY29sdW1uICsgMSwgbGluZTogc3RhcnQubGluZSB9O1xuICAgIH1cbiAgICByZXR1cm4geyBlbmQsIHN0YXJ0IH07XG4gIH1cbiAgcmF3KHByb3AsIGRlZmF1bHRUeXBlKSB7XG4gICAgbGV0IHN0ciA9IG5ldyBTdHJpbmdpZmllcjIoKTtcbiAgICByZXR1cm4gc3RyLnJhdyh0aGlzLCBwcm9wLCBkZWZhdWx0VHlwZSk7XG4gIH1cbiAgcmVtb3ZlKCkge1xuICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgdGhpcy5wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgfVxuICAgIHRoaXMucGFyZW50ID0gdm9pZCAwO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHJlcGxhY2VXaXRoKC4uLm5vZGVzKSB7XG4gICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICBsZXQgYm9va21hcmsgPSB0aGlzO1xuICAgICAgbGV0IGZvdW5kU2VsZiA9IGZhbHNlO1xuICAgICAgZm9yIChsZXQgbm9kZTIgb2Ygbm9kZXMpIHtcbiAgICAgICAgaWYgKG5vZGUyID09PSB0aGlzKSB7XG4gICAgICAgICAgZm91bmRTZWxmID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChmb3VuZFNlbGYpIHtcbiAgICAgICAgICB0aGlzLnBhcmVudC5pbnNlcnRBZnRlcihib29rbWFyaywgbm9kZTIpO1xuICAgICAgICAgIGJvb2ttYXJrID0gbm9kZTI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5wYXJlbnQuaW5zZXJ0QmVmb3JlKGJvb2ttYXJrLCBub2RlMik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghZm91bmRTZWxmKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHJvb3QoKSB7XG4gICAgbGV0IHJlc3VsdDIgPSB0aGlzO1xuICAgIHdoaWxlIChyZXN1bHQyLnBhcmVudCAmJiByZXN1bHQyLnBhcmVudC50eXBlICE9PSBcImRvY3VtZW50XCIpIHtcbiAgICAgIHJlc3VsdDIgPSByZXN1bHQyLnBhcmVudDtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDI7XG4gIH1cbiAgdG9KU09OKF8sIGlucHV0cykge1xuICAgIGxldCBmaXhlZCA9IHt9O1xuICAgIGxldCBlbWl0SW5wdXRzID0gaW5wdXRzID09IG51bGw7XG4gICAgaW5wdXRzID0gaW5wdXRzIHx8IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gICAgbGV0IGlucHV0c05leHRJbmRleCA9IDA7XG4gICAgZm9yIChsZXQgbmFtZSBpbiB0aGlzKSB7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLCBuYW1lKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmIChuYW1lID09PSBcInBhcmVudFwiIHx8IG5hbWUgPT09IFwicHJveHlDYWNoZVwiKSBjb250aW51ZTtcbiAgICAgIGxldCB2YWx1ZSA9IHRoaXNbbmFtZV07XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgZml4ZWRbbmFtZV0gPSB2YWx1ZS5tYXAoKGkpID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIGkgPT09IFwib2JqZWN0XCIgJiYgaS50b0pTT04pIHtcbiAgICAgICAgICAgIHJldHVybiBpLnRvSlNPTihudWxsLCBpbnB1dHMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUudG9KU09OKSB7XG4gICAgICAgIGZpeGVkW25hbWVdID0gdmFsdWUudG9KU09OKG51bGwsIGlucHV0cyk7XG4gICAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwic291cmNlXCIpIHtcbiAgICAgICAgbGV0IGlucHV0SWQgPSBpbnB1dHMuZ2V0KHZhbHVlLmlucHV0KTtcbiAgICAgICAgaWYgKGlucHV0SWQgPT0gbnVsbCkge1xuICAgICAgICAgIGlucHV0SWQgPSBpbnB1dHNOZXh0SW5kZXg7XG4gICAgICAgICAgaW5wdXRzLnNldCh2YWx1ZS5pbnB1dCwgaW5wdXRzTmV4dEluZGV4KTtcbiAgICAgICAgICBpbnB1dHNOZXh0SW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICBmaXhlZFtuYW1lXSA9IHtcbiAgICAgICAgICBlbmQ6IHZhbHVlLmVuZCxcbiAgICAgICAgICBpbnB1dElkLFxuICAgICAgICAgIHN0YXJ0OiB2YWx1ZS5zdGFydFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZml4ZWRbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVtaXRJbnB1dHMpIHtcbiAgICAgIGZpeGVkLmlucHV0cyA9IFsuLi5pbnB1dHMua2V5cygpXS5tYXAoKGlucHV0MikgPT4gaW5wdXQyLnRvSlNPTigpKTtcbiAgICB9XG4gICAgcmV0dXJuIGZpeGVkO1xuICB9XG4gIHRvUHJveHkoKSB7XG4gICAgaWYgKCF0aGlzLnByb3h5Q2FjaGUpIHtcbiAgICAgIHRoaXMucHJveHlDYWNoZSA9IG5ldyBQcm94eSh0aGlzLCB0aGlzLmdldFByb3h5UHJvY2Vzc29yKCkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wcm94eUNhY2hlO1xuICB9XG4gIHRvU3RyaW5nKHN0cmluZ2lmaWVyMiA9IHN0cmluZ2lmeSQzKSB7XG4gICAgaWYgKHN0cmluZ2lmaWVyMi5zdHJpbmdpZnkpIHN0cmluZ2lmaWVyMiA9IHN0cmluZ2lmaWVyMi5zdHJpbmdpZnk7XG4gICAgbGV0IHJlc3VsdDIgPSBcIlwiO1xuICAgIHN0cmluZ2lmaWVyMih0aGlzLCAoaSkgPT4ge1xuICAgICAgcmVzdWx0MiArPSBpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQyO1xuICB9XG4gIHdhcm4ocmVzdWx0MiwgdGV4dCwgb3B0cykge1xuICAgIGxldCBkYXRhID0geyBub2RlOiB0aGlzIH07XG4gICAgZm9yIChsZXQgaSBpbiBvcHRzKSBkYXRhW2ldID0gb3B0c1tpXTtcbiAgICByZXR1cm4gcmVzdWx0Mi53YXJuKHRleHQsIGRhdGEpO1xuICB9XG4gIGdldCBwcm94eU9mKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59O1xudmFyIG5vZGUgPSBOb2RlJDQ7XG5Ob2RlJDQuZGVmYXVsdCA9IE5vZGUkNDtcbmxldCBOb2RlJDMgPSBub2RlO1xubGV0IERlY2xhcmF0aW9uJDQgPSBjbGFzcyBEZWNsYXJhdGlvbiBleHRlbmRzIE5vZGUkMyB7XG4gIGNvbnN0cnVjdG9yKGRlZmF1bHRzKSB7XG4gICAgaWYgKGRlZmF1bHRzICYmIHR5cGVvZiBkZWZhdWx0cy52YWx1ZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgZGVmYXVsdHMudmFsdWUgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGRlZmF1bHRzID0geyAuLi5kZWZhdWx0cywgdmFsdWU6IFN0cmluZyhkZWZhdWx0cy52YWx1ZSkgfTtcbiAgICB9XG4gICAgc3VwZXIoZGVmYXVsdHMpO1xuICAgIHRoaXMudHlwZSA9IFwiZGVjbFwiO1xuICB9XG4gIGdldCB2YXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wLnN0YXJ0c1dpdGgoXCItLVwiKSB8fCB0aGlzLnByb3BbMF0gPT09IFwiJFwiO1xuICB9XG59O1xudmFyIGRlY2xhcmF0aW9uID0gRGVjbGFyYXRpb24kNDtcbkRlY2xhcmF0aW9uJDQuZGVmYXVsdCA9IERlY2xhcmF0aW9uJDQ7XG5sZXQgdXJsQWxwaGFiZXQgPSBcInVzZWFuZG9tLTI2VDE5ODM0MFBYNzVweEpBQ0tWRVJZTUlOREJVU0hXT0xGX0dRWmJmZ2hqa2xxdnd5enJpY3RcIjtcbmxldCBjdXN0b21BbHBoYWJldCA9IChhbHBoYWJldCwgZGVmYXVsdFNpemUgPSAyMSkgPT4ge1xuICByZXR1cm4gKHNpemUgPSBkZWZhdWx0U2l6ZSkgPT4ge1xuICAgIGxldCBpZCA9IFwiXCI7XG4gICAgbGV0IGkgPSBzaXplO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGlkICs9IGFscGhhYmV0W01hdGgucmFuZG9tKCkgKiBhbHBoYWJldC5sZW5ndGggfCAwXTtcbiAgICB9XG4gICAgcmV0dXJuIGlkO1xuICB9O1xufTtcbmxldCBuYW5vaWQkMSA9IChzaXplID0gMjEpID0+IHtcbiAgbGV0IGlkID0gXCJcIjtcbiAgbGV0IGkgPSBzaXplO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgaWQgKz0gdXJsQWxwaGFiZXRbTWF0aC5yYW5kb20oKSAqIDY0IHwgMF07XG4gIH1cbiAgcmV0dXJuIGlkO1xufTtcbnZhciBub25TZWN1cmUgPSB7IG5hbm9pZDogbmFub2lkJDEsIGN1c3RvbUFscGhhYmV0IH07XG5sZXQgeyBTb3VyY2VNYXBDb25zdW1lcjogU291cmNlTWFwQ29uc3VtZXIkMiwgU291cmNlTWFwR2VuZXJhdG9yOiBTb3VyY2VNYXBHZW5lcmF0b3IkMiB9ID0gcmVxdWlyZSQkMjtcbmxldCB7IGV4aXN0c1N5bmMsIHJlYWRGaWxlU3luYyB9ID0gcmVxdWlyZSQkMjtcbmxldCB7IGRpcm5hbWU6IGRpcm5hbWUkMSwgam9pbiB9ID0gcmVxdWlyZSQkMjtcbmZ1bmN0aW9uIGZyb21CYXNlNjQoc3RyKSB7XG4gIGlmIChCdWZmZXIpIHtcbiAgICByZXR1cm4gQnVmZmVyLmZyb20oc3RyLCBcImJhc2U2NFwiKS50b1N0cmluZygpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB3aW5kb3cuYXRvYihzdHIpO1xuICB9XG59XG5sZXQgUHJldmlvdXNNYXAkMiA9IGNsYXNzIFByZXZpb3VzTWFwIHtcbiAgY29uc3RydWN0b3IoY3NzLCBvcHRzKSB7XG4gICAgaWYgKG9wdHMubWFwID09PSBmYWxzZSkgcmV0dXJuO1xuICAgIHRoaXMubG9hZEFubm90YXRpb24oY3NzKTtcbiAgICB0aGlzLmlubGluZSA9IHRoaXMuc3RhcnRXaXRoKHRoaXMuYW5ub3RhdGlvbiwgXCJkYXRhOlwiKTtcbiAgICBsZXQgcHJldiA9IG9wdHMubWFwID8gb3B0cy5tYXAucHJldiA6IHZvaWQgMDtcbiAgICBsZXQgdGV4dCA9IHRoaXMubG9hZE1hcChvcHRzLmZyb20sIHByZXYpO1xuICAgIGlmICghdGhpcy5tYXBGaWxlICYmIG9wdHMuZnJvbSkge1xuICAgICAgdGhpcy5tYXBGaWxlID0gb3B0cy5mcm9tO1xuICAgIH1cbiAgICBpZiAodGhpcy5tYXBGaWxlKSB0aGlzLnJvb3QgPSBkaXJuYW1lJDEodGhpcy5tYXBGaWxlKTtcbiAgICBpZiAodGV4dCkgdGhpcy50ZXh0ID0gdGV4dDtcbiAgfVxuICBjb25zdW1lcigpIHtcbiAgICBpZiAoIXRoaXMuY29uc3VtZXJDYWNoZSkge1xuICAgICAgdGhpcy5jb25zdW1lckNhY2hlID0gbmV3IFNvdXJjZU1hcENvbnN1bWVyJDIodGhpcy50ZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY29uc3VtZXJDYWNoZTtcbiAgfVxuICBkZWNvZGVJbmxpbmUodGV4dCkge1xuICAgIGxldCBiYXNlQ2hhcnNldFVyaSA9IC9eZGF0YTphcHBsaWNhdGlvblxcL2pzb247Y2hhcnNldD11dGYtPzg7YmFzZTY0LC87XG4gICAgbGV0IGJhc2VVcmkgPSAvXmRhdGE6YXBwbGljYXRpb25cXC9qc29uO2Jhc2U2NCwvO1xuICAgIGxldCBjaGFyc2V0VXJpID0gL15kYXRhOmFwcGxpY2F0aW9uXFwvanNvbjtjaGFyc2V0PXV0Zi0/OCwvO1xuICAgIGxldCB1cmkgPSAvXmRhdGE6YXBwbGljYXRpb25cXC9qc29uLC87XG4gICAgaWYgKGNoYXJzZXRVcmkudGVzdCh0ZXh0KSB8fCB1cmkudGVzdCh0ZXh0KSkge1xuICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudCh0ZXh0LnN1YnN0cihSZWdFeHAubGFzdE1hdGNoLmxlbmd0aCkpO1xuICAgIH1cbiAgICBpZiAoYmFzZUNoYXJzZXRVcmkudGVzdCh0ZXh0KSB8fCBiYXNlVXJpLnRlc3QodGV4dCkpIHtcbiAgICAgIHJldHVybiBmcm9tQmFzZTY0KHRleHQuc3Vic3RyKFJlZ0V4cC5sYXN0TWF0Y2gubGVuZ3RoKSk7XG4gICAgfVxuICAgIGxldCBlbmNvZGluZyA9IHRleHQubWF0Y2goL2RhdGE6YXBwbGljYXRpb25cXC9qc29uOyhbXixdKyksLylbMV07XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgc291cmNlIG1hcCBlbmNvZGluZyBcIiArIGVuY29kaW5nKTtcbiAgfVxuICBnZXRBbm5vdGF0aW9uVVJMKHNvdXJjZU1hcFN0cmluZykge1xuICAgIHJldHVybiBzb3VyY2VNYXBTdHJpbmcucmVwbGFjZSgvXlxcL1xcKlxccyojIHNvdXJjZU1hcHBpbmdVUkw9LywgXCJcIikudHJpbSgpO1xuICB9XG4gIGlzTWFwKG1hcCkge1xuICAgIGlmICh0eXBlb2YgbWFwICE9PSBcIm9iamVjdFwiKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHR5cGVvZiBtYXAubWFwcGluZ3MgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIG1hcC5fbWFwcGluZ3MgPT09IFwic3RyaW5nXCIgfHwgQXJyYXkuaXNBcnJheShtYXAuc2VjdGlvbnMpO1xuICB9XG4gIGxvYWRBbm5vdGF0aW9uKGNzcykge1xuICAgIGxldCBjb21tZW50cyA9IGNzcy5tYXRjaCgvXFwvXFwqXFxzKiMgc291cmNlTWFwcGluZ1VSTD0vZ20pO1xuICAgIGlmICghY29tbWVudHMpIHJldHVybjtcbiAgICBsZXQgc3RhcnQgPSBjc3MubGFzdEluZGV4T2YoY29tbWVudHMucG9wKCkpO1xuICAgIGxldCBlbmQgPSBjc3MuaW5kZXhPZihcIiovXCIsIHN0YXJ0KTtcbiAgICBpZiAoc3RhcnQgPiAtMSAmJiBlbmQgPiAtMSkge1xuICAgICAgdGhpcy5hbm5vdGF0aW9uID0gdGhpcy5nZXRBbm5vdGF0aW9uVVJMKGNzcy5zdWJzdHJpbmcoc3RhcnQsIGVuZCkpO1xuICAgIH1cbiAgfVxuICBsb2FkRmlsZShwYXRoKSB7XG4gICAgdGhpcy5yb290ID0gZGlybmFtZSQxKHBhdGgpO1xuICAgIGlmIChleGlzdHNTeW5jKHBhdGgpKSB7XG4gICAgICB0aGlzLm1hcEZpbGUgPSBwYXRoO1xuICAgICAgcmV0dXJuIHJlYWRGaWxlU3luYyhwYXRoLCBcInV0Zi04XCIpLnRvU3RyaW5nKCkudHJpbSgpO1xuICAgIH1cbiAgfVxuICBsb2FkTWFwKGZpbGUsIHByZXYpIHtcbiAgICBpZiAocHJldiA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgICBpZiAocHJldikge1xuICAgICAgaWYgKHR5cGVvZiBwcmV2ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcHJldiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGxldCBwcmV2UGF0aCA9IHByZXYoZmlsZSk7XG4gICAgICAgIGlmIChwcmV2UGF0aCkge1xuICAgICAgICAgIGxldCBtYXAgPSB0aGlzLmxvYWRGaWxlKHByZXZQYXRoKTtcbiAgICAgICAgICBpZiAoIW1hcCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICBcIlVuYWJsZSB0byBsb2FkIHByZXZpb3VzIHNvdXJjZSBtYXA6IFwiICsgcHJldlBhdGgudG9TdHJpbmcoKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG1hcDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChwcmV2IGluc3RhbmNlb2YgU291cmNlTWFwQ29uc3VtZXIkMikge1xuICAgICAgICByZXR1cm4gU291cmNlTWFwR2VuZXJhdG9yJDIuZnJvbVNvdXJjZU1hcChwcmV2KS50b1N0cmluZygpO1xuICAgICAgfSBlbHNlIGlmIChwcmV2IGluc3RhbmNlb2YgU291cmNlTWFwR2VuZXJhdG9yJDIpIHtcbiAgICAgICAgcmV0dXJuIHByZXYudG9TdHJpbmcoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc01hcChwcmV2KSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocHJldik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgXCJVbnN1cHBvcnRlZCBwcmV2aW91cyBzb3VyY2UgbWFwIGZvcm1hdDogXCIgKyBwcmV2LnRvU3RyaW5nKClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuaW5saW5lKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWNvZGVJbmxpbmUodGhpcy5hbm5vdGF0aW9uKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYW5ub3RhdGlvbikge1xuICAgICAgbGV0IG1hcCA9IHRoaXMuYW5ub3RhdGlvbjtcbiAgICAgIGlmIChmaWxlKSBtYXAgPSBqb2luKGRpcm5hbWUkMShmaWxlKSwgbWFwKTtcbiAgICAgIHJldHVybiB0aGlzLmxvYWRGaWxlKG1hcCk7XG4gICAgfVxuICB9XG4gIHN0YXJ0V2l0aChzdHJpbmcsIHN0YXJ0KSB7XG4gICAgaWYgKCFzdHJpbmcpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gc3RyaW5nLnN1YnN0cigwLCBzdGFydC5sZW5ndGgpID09PSBzdGFydDtcbiAgfVxuICB3aXRoQ29udGVudCgpIHtcbiAgICByZXR1cm4gISEodGhpcy5jb25zdW1lcigpLnNvdXJjZXNDb250ZW50ICYmIHRoaXMuY29uc3VtZXIoKS5zb3VyY2VzQ29udGVudC5sZW5ndGggPiAwKTtcbiAgfVxufTtcbnZhciBwcmV2aW91c01hcCA9IFByZXZpb3VzTWFwJDI7XG5QcmV2aW91c01hcCQyLmRlZmF1bHQgPSBQcmV2aW91c01hcCQyO1xubGV0IHsgU291cmNlTWFwQ29uc3VtZXI6IFNvdXJjZU1hcENvbnN1bWVyJDEsIFNvdXJjZU1hcEdlbmVyYXRvcjogU291cmNlTWFwR2VuZXJhdG9yJDEgfSA9IHJlcXVpcmUkJDI7XG5sZXQgeyBmaWxlVVJMVG9QYXRoLCBwYXRoVG9GaWxlVVJMOiBwYXRoVG9GaWxlVVJMJDEgfSA9IHJlcXVpcmUkJDI7XG5sZXQgeyBpc0Fic29sdXRlLCByZXNvbHZlOiByZXNvbHZlJDEgfSA9IHJlcXVpcmUkJDI7XG5sZXQgeyBuYW5vaWQgfSA9IG5vblNlY3VyZTtcbmxldCB0ZXJtaW5hbEhpZ2hsaWdodCA9IHJlcXVpcmUkJDI7XG5sZXQgQ3NzU3ludGF4RXJyb3IkMSA9IGNzc1N5bnRheEVycm9yO1xubGV0IFByZXZpb3VzTWFwJDEgPSBwcmV2aW91c01hcDtcbmxldCBmcm9tT2Zmc2V0Q2FjaGUgPSBTeW1ib2woXCJmcm9tT2Zmc2V0Q2FjaGVcIik7XG5sZXQgc291cmNlTWFwQXZhaWxhYmxlJDEgPSBCb29sZWFuKFNvdXJjZU1hcENvbnN1bWVyJDEgJiYgU291cmNlTWFwR2VuZXJhdG9yJDEpO1xubGV0IHBhdGhBdmFpbGFibGUkMSA9IEJvb2xlYW4ocmVzb2x2ZSQxICYmIGlzQWJzb2x1dGUpO1xubGV0IElucHV0JDQgPSBjbGFzcyBJbnB1dCB7XG4gIGNvbnN0cnVjdG9yKGNzcywgb3B0cyA9IHt9KSB7XG4gICAgaWYgKGNzcyA9PT0gbnVsbCB8fCB0eXBlb2YgY3NzID09PSBcInVuZGVmaW5lZFwiIHx8IHR5cGVvZiBjc3MgPT09IFwib2JqZWN0XCIgJiYgIWNzcy50b1N0cmluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBQb3N0Q1NTIHJlY2VpdmVkICR7Y3NzfSBpbnN0ZWFkIG9mIENTUyBzdHJpbmdgKTtcbiAgICB9XG4gICAgdGhpcy5jc3MgPSBjc3MudG9TdHJpbmcoKTtcbiAgICBpZiAodGhpcy5jc3NbMF0gPT09IFwiXFx1RkVGRlwiIHx8IHRoaXMuY3NzWzBdID09PSBcIu+/vlwiKSB7XG4gICAgICB0aGlzLmhhc0JPTSA9IHRydWU7XG4gICAgICB0aGlzLmNzcyA9IHRoaXMuY3NzLnNsaWNlKDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhhc0JPTSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAob3B0cy5mcm9tKSB7XG4gICAgICBpZiAoIXBhdGhBdmFpbGFibGUkMSB8fCAvXlxcdys6XFwvXFwvLy50ZXN0KG9wdHMuZnJvbSkgfHwgaXNBYnNvbHV0ZShvcHRzLmZyb20pKSB7XG4gICAgICAgIHRoaXMuZmlsZSA9IG9wdHMuZnJvbTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZmlsZSA9IHJlc29sdmUkMShvcHRzLmZyb20pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocGF0aEF2YWlsYWJsZSQxICYmIHNvdXJjZU1hcEF2YWlsYWJsZSQxKSB7XG4gICAgICBsZXQgbWFwID0gbmV3IFByZXZpb3VzTWFwJDEodGhpcy5jc3MsIG9wdHMpO1xuICAgICAgaWYgKG1hcC50ZXh0KSB7XG4gICAgICAgIHRoaXMubWFwID0gbWFwO1xuICAgICAgICBsZXQgZmlsZSA9IG1hcC5jb25zdW1lcigpLmZpbGU7XG4gICAgICAgIGlmICghdGhpcy5maWxlICYmIGZpbGUpIHRoaXMuZmlsZSA9IHRoaXMubWFwUmVzb2x2ZShmaWxlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF0aGlzLmZpbGUpIHtcbiAgICAgIHRoaXMuaWQgPSBcIjxpbnB1dCBjc3MgXCIgKyBuYW5vaWQoNikgKyBcIj5cIjtcbiAgICB9XG4gICAgaWYgKHRoaXMubWFwKSB0aGlzLm1hcC5maWxlID0gdGhpcy5mcm9tO1xuICB9XG4gIGVycm9yKG1lc3NhZ2UsIGxpbmUsIGNvbHVtbiwgb3B0cyA9IHt9KSB7XG4gICAgbGV0IHJlc3VsdDIsIGVuZExpbmUsIGVuZENvbHVtbjtcbiAgICBpZiAobGluZSAmJiB0eXBlb2YgbGluZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgbGV0IHN0YXJ0ID0gbGluZTtcbiAgICAgIGxldCBlbmQgPSBjb2x1bW47XG4gICAgICBpZiAodHlwZW9mIHN0YXJ0Lm9mZnNldCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICBsZXQgcG9zID0gdGhpcy5mcm9tT2Zmc2V0KHN0YXJ0Lm9mZnNldCk7XG4gICAgICAgIGxpbmUgPSBwb3MubGluZTtcbiAgICAgICAgY29sdW1uID0gcG9zLmNvbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpbmUgPSBzdGFydC5saW5lO1xuICAgICAgICBjb2x1bW4gPSBzdGFydC5jb2x1bW47XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGVuZC5vZmZzZXQgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMuZnJvbU9mZnNldChlbmQub2Zmc2V0KTtcbiAgICAgICAgZW5kTGluZSA9IHBvcy5saW5lO1xuICAgICAgICBlbmRDb2x1bW4gPSBwb3MuY29sO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZW5kTGluZSA9IGVuZC5saW5lO1xuICAgICAgICBlbmRDb2x1bW4gPSBlbmQuY29sdW1uO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWNvbHVtbikge1xuICAgICAgbGV0IHBvcyA9IHRoaXMuZnJvbU9mZnNldChsaW5lKTtcbiAgICAgIGxpbmUgPSBwb3MubGluZTtcbiAgICAgIGNvbHVtbiA9IHBvcy5jb2w7XG4gICAgfVxuICAgIGxldCBvcmlnaW4gPSB0aGlzLm9yaWdpbihsaW5lLCBjb2x1bW4sIGVuZExpbmUsIGVuZENvbHVtbik7XG4gICAgaWYgKG9yaWdpbikge1xuICAgICAgcmVzdWx0MiA9IG5ldyBDc3NTeW50YXhFcnJvciQxKFxuICAgICAgICBtZXNzYWdlLFxuICAgICAgICBvcmlnaW4uZW5kTGluZSA9PT0gdm9pZCAwID8gb3JpZ2luLmxpbmUgOiB7IGNvbHVtbjogb3JpZ2luLmNvbHVtbiwgbGluZTogb3JpZ2luLmxpbmUgfSxcbiAgICAgICAgb3JpZ2luLmVuZExpbmUgPT09IHZvaWQgMCA/IG9yaWdpbi5jb2x1bW4gOiB7IGNvbHVtbjogb3JpZ2luLmVuZENvbHVtbiwgbGluZTogb3JpZ2luLmVuZExpbmUgfSxcbiAgICAgICAgb3JpZ2luLnNvdXJjZSxcbiAgICAgICAgb3JpZ2luLmZpbGUsXG4gICAgICAgIG9wdHMucGx1Z2luXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQyID0gbmV3IENzc1N5bnRheEVycm9yJDEoXG4gICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIGVuZExpbmUgPT09IHZvaWQgMCA/IGxpbmUgOiB7IGNvbHVtbiwgbGluZSB9LFxuICAgICAgICBlbmRMaW5lID09PSB2b2lkIDAgPyBjb2x1bW4gOiB7IGNvbHVtbjogZW5kQ29sdW1uLCBsaW5lOiBlbmRMaW5lIH0sXG4gICAgICAgIHRoaXMuY3NzLFxuICAgICAgICB0aGlzLmZpbGUsXG4gICAgICAgIG9wdHMucGx1Z2luXG4gICAgICApO1xuICAgIH1cbiAgICByZXN1bHQyLmlucHV0ID0geyBjb2x1bW4sIGVuZENvbHVtbiwgZW5kTGluZSwgbGluZSwgc291cmNlOiB0aGlzLmNzcyB9O1xuICAgIGlmICh0aGlzLmZpbGUpIHtcbiAgICAgIGlmIChwYXRoVG9GaWxlVVJMJDEpIHtcbiAgICAgICAgcmVzdWx0Mi5pbnB1dC51cmwgPSBwYXRoVG9GaWxlVVJMJDEodGhpcy5maWxlKS50b1N0cmluZygpO1xuICAgICAgfVxuICAgICAgcmVzdWx0Mi5pbnB1dC5maWxlID0gdGhpcy5maWxlO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0MjtcbiAgfVxuICBmcm9tT2Zmc2V0KG9mZnNldCkge1xuICAgIGxldCBsYXN0TGluZSwgbGluZVRvSW5kZXg7XG4gICAgaWYgKCF0aGlzW2Zyb21PZmZzZXRDYWNoZV0pIHtcbiAgICAgIGxldCBsaW5lcyA9IHRoaXMuY3NzLnNwbGl0KFwiXFxuXCIpO1xuICAgICAgbGluZVRvSW5kZXggPSBuZXcgQXJyYXkobGluZXMubGVuZ3RoKTtcbiAgICAgIGxldCBwcmV2SW5kZXggPSAwO1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBsaW5lcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGluZVRvSW5kZXhbaV0gPSBwcmV2SW5kZXg7XG4gICAgICAgIHByZXZJbmRleCArPSBsaW5lc1tpXS5sZW5ndGggKyAxO1xuICAgICAgfVxuICAgICAgdGhpc1tmcm9tT2Zmc2V0Q2FjaGVdID0gbGluZVRvSW5kZXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpbmVUb0luZGV4ID0gdGhpc1tmcm9tT2Zmc2V0Q2FjaGVdO1xuICAgIH1cbiAgICBsYXN0TGluZSA9IGxpbmVUb0luZGV4W2xpbmVUb0luZGV4Lmxlbmd0aCAtIDFdO1xuICAgIGxldCBtaW4gPSAwO1xuICAgIGlmIChvZmZzZXQgPj0gbGFzdExpbmUpIHtcbiAgICAgIG1pbiA9IGxpbmVUb0luZGV4Lmxlbmd0aCAtIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBtYXggPSBsaW5lVG9JbmRleC5sZW5ndGggLSAyO1xuICAgICAgbGV0IG1pZDtcbiAgICAgIHdoaWxlIChtaW4gPCBtYXgpIHtcbiAgICAgICAgbWlkID0gbWluICsgKG1heCAtIG1pbiA+PiAxKTtcbiAgICAgICAgaWYgKG9mZnNldCA8IGxpbmVUb0luZGV4W21pZF0pIHtcbiAgICAgICAgICBtYXggPSBtaWQgLSAxO1xuICAgICAgICB9IGVsc2UgaWYgKG9mZnNldCA+PSBsaW5lVG9JbmRleFttaWQgKyAxXSkge1xuICAgICAgICAgIG1pbiA9IG1pZCArIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWluID0gbWlkO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBjb2w6IG9mZnNldCAtIGxpbmVUb0luZGV4W21pbl0gKyAxLFxuICAgICAgbGluZTogbWluICsgMVxuICAgIH07XG4gIH1cbiAgbWFwUmVzb2x2ZShmaWxlKSB7XG4gICAgaWYgKC9eXFx3KzpcXC9cXC8vLnRlc3QoZmlsZSkpIHtcbiAgICAgIHJldHVybiBmaWxlO1xuICAgIH1cbiAgICByZXR1cm4gcmVzb2x2ZSQxKHRoaXMubWFwLmNvbnN1bWVyKCkuc291cmNlUm9vdCB8fCB0aGlzLm1hcC5yb290IHx8IFwiLlwiLCBmaWxlKTtcbiAgfVxuICBvcmlnaW4obGluZSwgY29sdW1uLCBlbmRMaW5lLCBlbmRDb2x1bW4pIHtcbiAgICBpZiAoIXRoaXMubWFwKSByZXR1cm4gZmFsc2U7XG4gICAgbGV0IGNvbnN1bWVyID0gdGhpcy5tYXAuY29uc3VtZXIoKTtcbiAgICBsZXQgZnJvbSA9IGNvbnN1bWVyLm9yaWdpbmFsUG9zaXRpb25Gb3IoeyBjb2x1bW4sIGxpbmUgfSk7XG4gICAgaWYgKCFmcm9tLnNvdXJjZSkgcmV0dXJuIGZhbHNlO1xuICAgIGxldCB0bztcbiAgICBpZiAodHlwZW9mIGVuZExpbmUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIHRvID0gY29uc3VtZXIub3JpZ2luYWxQb3NpdGlvbkZvcih7IGNvbHVtbjogZW5kQ29sdW1uLCBsaW5lOiBlbmRMaW5lIH0pO1xuICAgIH1cbiAgICBsZXQgZnJvbVVybDtcbiAgICBpZiAoaXNBYnNvbHV0ZShmcm9tLnNvdXJjZSkpIHtcbiAgICAgIGZyb21VcmwgPSBwYXRoVG9GaWxlVVJMJDEoZnJvbS5zb3VyY2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmcm9tVXJsID0gbmV3IFVSTChcbiAgICAgICAgZnJvbS5zb3VyY2UsXG4gICAgICAgIHRoaXMubWFwLmNvbnN1bWVyKCkuc291cmNlUm9vdCB8fCBwYXRoVG9GaWxlVVJMJDEodGhpcy5tYXAubWFwRmlsZSlcbiAgICAgICk7XG4gICAgfVxuICAgIGxldCByZXN1bHQyID0ge1xuICAgICAgY29sdW1uOiBmcm9tLmNvbHVtbixcbiAgICAgIGVuZENvbHVtbjogdG8gJiYgdG8uY29sdW1uLFxuICAgICAgZW5kTGluZTogdG8gJiYgdG8ubGluZSxcbiAgICAgIGxpbmU6IGZyb20ubGluZSxcbiAgICAgIHVybDogZnJvbVVybC50b1N0cmluZygpXG4gICAgfTtcbiAgICBpZiAoZnJvbVVybC5wcm90b2NvbCA9PT0gXCJmaWxlOlwiKSB7XG4gICAgICBpZiAoZmlsZVVSTFRvUGF0aCkge1xuICAgICAgICByZXN1bHQyLmZpbGUgPSBmaWxlVVJMVG9QYXRoKGZyb21VcmwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBmaWxlOiBwcm90b2NvbCBpcyBub3QgYXZhaWxhYmxlIGluIHRoaXMgUG9zdENTUyBidWlsZGApO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgc291cmNlID0gY29uc3VtZXIuc291cmNlQ29udGVudEZvcihmcm9tLnNvdXJjZSk7XG4gICAgaWYgKHNvdXJjZSkgcmVzdWx0Mi5zb3VyY2UgPSBzb3VyY2U7XG4gICAgcmV0dXJuIHJlc3VsdDI7XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIGxldCBqc29uID0ge307XG4gICAgZm9yIChsZXQgbmFtZSBvZiBbXCJoYXNCT01cIiwgXCJjc3NcIiwgXCJmaWxlXCIsIFwiaWRcIl0pIHtcbiAgICAgIGlmICh0aGlzW25hbWVdICE9IG51bGwpIHtcbiAgICAgICAganNvbltuYW1lXSA9IHRoaXNbbmFtZV07XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLm1hcCkge1xuICAgICAganNvbi5tYXAgPSB7IC4uLnRoaXMubWFwIH07XG4gICAgICBpZiAoanNvbi5tYXAuY29uc3VtZXJDYWNoZSkge1xuICAgICAgICBqc29uLm1hcC5jb25zdW1lckNhY2hlID0gdm9pZCAwO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuICBnZXQgZnJvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlIHx8IHRoaXMuaWQ7XG4gIH1cbn07XG52YXIgaW5wdXQgPSBJbnB1dCQ0O1xuSW5wdXQkNC5kZWZhdWx0ID0gSW5wdXQkNDtcbmlmICh0ZXJtaW5hbEhpZ2hsaWdodCAmJiB0ZXJtaW5hbEhpZ2hsaWdodC5yZWdpc3RlcklucHV0KSB7XG4gIHRlcm1pbmFsSGlnaGxpZ2h0LnJlZ2lzdGVySW5wdXQoSW5wdXQkNCk7XG59XG5sZXQgeyBTb3VyY2VNYXBDb25zdW1lciwgU291cmNlTWFwR2VuZXJhdG9yIH0gPSByZXF1aXJlJCQyO1xubGV0IHsgZGlybmFtZSwgcmVsYXRpdmUsIHJlc29sdmUsIHNlcCB9ID0gcmVxdWlyZSQkMjtcbmxldCB7IHBhdGhUb0ZpbGVVUkwgfSA9IHJlcXVpcmUkJDI7XG5sZXQgSW5wdXQkMyA9IGlucHV0O1xubGV0IHNvdXJjZU1hcEF2YWlsYWJsZSA9IEJvb2xlYW4oU291cmNlTWFwQ29uc3VtZXIgJiYgU291cmNlTWFwR2VuZXJhdG9yKTtcbmxldCBwYXRoQXZhaWxhYmxlID0gQm9vbGVhbihkaXJuYW1lICYmIHJlc29sdmUgJiYgcmVsYXRpdmUgJiYgc2VwKTtcbmxldCBNYXBHZW5lcmF0b3IkMiA9IGNsYXNzIE1hcEdlbmVyYXRvciB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZ2lmeTIsIHJvb3QyLCBvcHRzLCBjc3NTdHJpbmcpIHtcbiAgICB0aGlzLnN0cmluZ2lmeSA9IHN0cmluZ2lmeTI7XG4gICAgdGhpcy5tYXBPcHRzID0gb3B0cy5tYXAgfHwge307XG4gICAgdGhpcy5yb290ID0gcm9vdDI7XG4gICAgdGhpcy5vcHRzID0gb3B0cztcbiAgICB0aGlzLmNzcyA9IGNzc1N0cmluZztcbiAgICB0aGlzLm9yaWdpbmFsQ1NTID0gY3NzU3RyaW5nO1xuICAgIHRoaXMudXNlc0ZpbGVVcmxzID0gIXRoaXMubWFwT3B0cy5mcm9tICYmIHRoaXMubWFwT3B0cy5hYnNvbHV0ZTtcbiAgICB0aGlzLm1lbW9pemVkRmlsZVVSTHMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICAgIHRoaXMubWVtb2l6ZWRQYXRocyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gICAgdGhpcy5tZW1vaXplZFVSTHMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICB9XG4gIGFkZEFubm90YXRpb24oKSB7XG4gICAgbGV0IGNvbnRlbnQ7XG4gICAgaWYgKHRoaXMuaXNJbmxpbmUoKSkge1xuICAgICAgY29udGVudCA9IFwiZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIHRoaXMudG9CYXNlNjQodGhpcy5tYXAudG9TdHJpbmcoKSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5tYXBPcHRzLmFubm90YXRpb24gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGNvbnRlbnQgPSB0aGlzLm1hcE9wdHMuYW5ub3RhdGlvbjtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLm1hcE9wdHMuYW5ub3RhdGlvbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBjb250ZW50ID0gdGhpcy5tYXBPcHRzLmFubm90YXRpb24odGhpcy5vcHRzLnRvLCB0aGlzLnJvb3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZW50ID0gdGhpcy5vdXRwdXRGaWxlKCkgKyBcIi5tYXBcIjtcbiAgICB9XG4gICAgbGV0IGVvbCA9IFwiXFxuXCI7XG4gICAgaWYgKHRoaXMuY3NzLmluY2x1ZGVzKFwiXFxyXFxuXCIpKSBlb2wgPSBcIlxcclxcblwiO1xuICAgIHRoaXMuY3NzICs9IGVvbCArIFwiLyojIHNvdXJjZU1hcHBpbmdVUkw9XCIgKyBjb250ZW50ICsgXCIgKi9cIjtcbiAgfVxuICBhcHBseVByZXZNYXBzKCkge1xuICAgIGZvciAobGV0IHByZXYgb2YgdGhpcy5wcmV2aW91cygpKSB7XG4gICAgICBsZXQgZnJvbSA9IHRoaXMudG9VcmwodGhpcy5wYXRoKHByZXYuZmlsZSkpO1xuICAgICAgbGV0IHJvb3QyID0gcHJldi5yb290IHx8IGRpcm5hbWUocHJldi5maWxlKTtcbiAgICAgIGxldCBtYXA7XG4gICAgICBpZiAodGhpcy5tYXBPcHRzLnNvdXJjZXNDb250ZW50ID09PSBmYWxzZSkge1xuICAgICAgICBtYXAgPSBuZXcgU291cmNlTWFwQ29uc3VtZXIocHJldi50ZXh0KTtcbiAgICAgICAgaWYgKG1hcC5zb3VyY2VzQ29udGVudCkge1xuICAgICAgICAgIG1hcC5zb3VyY2VzQ29udGVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1hcCA9IHByZXYuY29uc3VtZXIoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMubWFwLmFwcGx5U291cmNlTWFwKG1hcCwgZnJvbSwgdGhpcy50b1VybCh0aGlzLnBhdGgocm9vdDIpKSk7XG4gICAgfVxuICB9XG4gIGNsZWFyQW5ub3RhdGlvbigpIHtcbiAgICBpZiAodGhpcy5tYXBPcHRzLmFubm90YXRpb24gPT09IGZhbHNlKSByZXR1cm47XG4gICAgaWYgKHRoaXMucm9vdCkge1xuICAgICAgbGV0IG5vZGUyO1xuICAgICAgZm9yIChsZXQgaSA9IHRoaXMucm9vdC5ub2Rlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBub2RlMiA9IHRoaXMucm9vdC5ub2Rlc1tpXTtcbiAgICAgICAgaWYgKG5vZGUyLnR5cGUgIT09IFwiY29tbWVudFwiKSBjb250aW51ZTtcbiAgICAgICAgaWYgKG5vZGUyLnRleHQuaW5kZXhPZihcIiMgc291cmNlTWFwcGluZ1VSTD1cIikgPT09IDApIHtcbiAgICAgICAgICB0aGlzLnJvb3QucmVtb3ZlQ2hpbGQoaSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuY3NzKSB7XG4gICAgICB0aGlzLmNzcyA9IHRoaXMuY3NzLnJlcGxhY2UoL1xcbio/XFwvXFwqI1tcXFNcXHNdKj9cXCpcXC8kL2dtLCBcIlwiKTtcbiAgICB9XG4gIH1cbiAgZ2VuZXJhdGUoKSB7XG4gICAgdGhpcy5jbGVhckFubm90YXRpb24oKTtcbiAgICBpZiAocGF0aEF2YWlsYWJsZSAmJiBzb3VyY2VNYXBBdmFpbGFibGUgJiYgdGhpcy5pc01hcCgpKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZU1hcCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgcmVzdWx0MiA9IFwiXCI7XG4gICAgICB0aGlzLnN0cmluZ2lmeSh0aGlzLnJvb3QsIChpKSA9PiB7XG4gICAgICAgIHJlc3VsdDIgKz0gaTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIFtyZXN1bHQyXTtcbiAgICB9XG4gIH1cbiAgZ2VuZXJhdGVNYXAoKSB7XG4gICAgaWYgKHRoaXMucm9vdCkge1xuICAgICAgdGhpcy5nZW5lcmF0ZVN0cmluZygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2aW91cygpLmxlbmd0aCA9PT0gMSkge1xuICAgICAgbGV0IHByZXYgPSB0aGlzLnByZXZpb3VzKClbMF0uY29uc3VtZXIoKTtcbiAgICAgIHByZXYuZmlsZSA9IHRoaXMub3V0cHV0RmlsZSgpO1xuICAgICAgdGhpcy5tYXAgPSBTb3VyY2VNYXBHZW5lcmF0b3IuZnJvbVNvdXJjZU1hcChwcmV2LCB7XG4gICAgICAgIGlnbm9yZUludmFsaWRNYXBwaW5nOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tYXAgPSBuZXcgU291cmNlTWFwR2VuZXJhdG9yKHtcbiAgICAgICAgZmlsZTogdGhpcy5vdXRwdXRGaWxlKCksXG4gICAgICAgIGlnbm9yZUludmFsaWRNYXBwaW5nOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHRoaXMubWFwLmFkZE1hcHBpbmcoe1xuICAgICAgICBnZW5lcmF0ZWQ6IHsgY29sdW1uOiAwLCBsaW5lOiAxIH0sXG4gICAgICAgIG9yaWdpbmFsOiB7IGNvbHVtbjogMCwgbGluZTogMSB9LFxuICAgICAgICBzb3VyY2U6IHRoaXMub3B0cy5mcm9tID8gdGhpcy50b1VybCh0aGlzLnBhdGgodGhpcy5vcHRzLmZyb20pKSA6IFwiPG5vIHNvdXJjZT5cIlxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmlzU291cmNlc0NvbnRlbnQoKSkgdGhpcy5zZXRTb3VyY2VzQ29udGVudCgpO1xuICAgIGlmICh0aGlzLnJvb3QgJiYgdGhpcy5wcmV2aW91cygpLmxlbmd0aCA+IDApIHRoaXMuYXBwbHlQcmV2TWFwcygpO1xuICAgIGlmICh0aGlzLmlzQW5ub3RhdGlvbigpKSB0aGlzLmFkZEFubm90YXRpb24oKTtcbiAgICBpZiAodGhpcy5pc0lubGluZSgpKSB7XG4gICAgICByZXR1cm4gW3RoaXMuY3NzXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFt0aGlzLmNzcywgdGhpcy5tYXBdO1xuICAgIH1cbiAgfVxuICBnZW5lcmF0ZVN0cmluZygpIHtcbiAgICB0aGlzLmNzcyA9IFwiXCI7XG4gICAgdGhpcy5tYXAgPSBuZXcgU291cmNlTWFwR2VuZXJhdG9yKHtcbiAgICAgIGZpbGU6IHRoaXMub3V0cHV0RmlsZSgpLFxuICAgICAgaWdub3JlSW52YWxpZE1hcHBpbmc6IHRydWVcbiAgICB9KTtcbiAgICBsZXQgbGluZSA9IDE7XG4gICAgbGV0IGNvbHVtbiA9IDE7XG4gICAgbGV0IG5vU291cmNlID0gXCI8bm8gc291cmNlPlwiO1xuICAgIGxldCBtYXBwaW5nID0ge1xuICAgICAgZ2VuZXJhdGVkOiB7IGNvbHVtbjogMCwgbGluZTogMCB9LFxuICAgICAgb3JpZ2luYWw6IHsgY29sdW1uOiAwLCBsaW5lOiAwIH0sXG4gICAgICBzb3VyY2U6IFwiXCJcbiAgICB9O1xuICAgIGxldCBsaW5lcywgbGFzdDtcbiAgICB0aGlzLnN0cmluZ2lmeSh0aGlzLnJvb3QsIChzdHIsIG5vZGUyLCB0eXBlKSA9PiB7XG4gICAgICB0aGlzLmNzcyArPSBzdHI7XG4gICAgICBpZiAobm9kZTIgJiYgdHlwZSAhPT0gXCJlbmRcIikge1xuICAgICAgICBtYXBwaW5nLmdlbmVyYXRlZC5saW5lID0gbGluZTtcbiAgICAgICAgbWFwcGluZy5nZW5lcmF0ZWQuY29sdW1uID0gY29sdW1uIC0gMTtcbiAgICAgICAgaWYgKG5vZGUyLnNvdXJjZSAmJiBub2RlMi5zb3VyY2Uuc3RhcnQpIHtcbiAgICAgICAgICBtYXBwaW5nLnNvdXJjZSA9IHRoaXMuc291cmNlUGF0aChub2RlMik7XG4gICAgICAgICAgbWFwcGluZy5vcmlnaW5hbC5saW5lID0gbm9kZTIuc291cmNlLnN0YXJ0LmxpbmU7XG4gICAgICAgICAgbWFwcGluZy5vcmlnaW5hbC5jb2x1bW4gPSBub2RlMi5zb3VyY2Uuc3RhcnQuY29sdW1uIC0gMTtcbiAgICAgICAgICB0aGlzLm1hcC5hZGRNYXBwaW5nKG1hcHBpbmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1hcHBpbmcuc291cmNlID0gbm9Tb3VyY2U7XG4gICAgICAgICAgbWFwcGluZy5vcmlnaW5hbC5saW5lID0gMTtcbiAgICAgICAgICBtYXBwaW5nLm9yaWdpbmFsLmNvbHVtbiA9IDA7XG4gICAgICAgICAgdGhpcy5tYXAuYWRkTWFwcGluZyhtYXBwaW5nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGluZXMgPSBzdHIubWF0Y2goL1xcbi9nKTtcbiAgICAgIGlmIChsaW5lcykge1xuICAgICAgICBsaW5lICs9IGxpbmVzLmxlbmd0aDtcbiAgICAgICAgbGFzdCA9IHN0ci5sYXN0SW5kZXhPZihcIlxcblwiKTtcbiAgICAgICAgY29sdW1uID0gc3RyLmxlbmd0aCAtIGxhc3Q7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2x1bW4gKz0gc3RyLmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIGlmIChub2RlMiAmJiB0eXBlICE9PSBcInN0YXJ0XCIpIHtcbiAgICAgICAgbGV0IHAgPSBub2RlMi5wYXJlbnQgfHwgeyByYXdzOiB7fSB9O1xuICAgICAgICBsZXQgY2hpbGRsZXNzID0gbm9kZTIudHlwZSA9PT0gXCJkZWNsXCIgfHwgbm9kZTIudHlwZSA9PT0gXCJhdHJ1bGVcIiAmJiAhbm9kZTIubm9kZXM7XG4gICAgICAgIGlmICghY2hpbGRsZXNzIHx8IG5vZGUyICE9PSBwLmxhc3QgfHwgcC5yYXdzLnNlbWljb2xvbikge1xuICAgICAgICAgIGlmIChub2RlMi5zb3VyY2UgJiYgbm9kZTIuc291cmNlLmVuZCkge1xuICAgICAgICAgICAgbWFwcGluZy5zb3VyY2UgPSB0aGlzLnNvdXJjZVBhdGgobm9kZTIpO1xuICAgICAgICAgICAgbWFwcGluZy5vcmlnaW5hbC5saW5lID0gbm9kZTIuc291cmNlLmVuZC5saW5lO1xuICAgICAgICAgICAgbWFwcGluZy5vcmlnaW5hbC5jb2x1bW4gPSBub2RlMi5zb3VyY2UuZW5kLmNvbHVtbiAtIDE7XG4gICAgICAgICAgICBtYXBwaW5nLmdlbmVyYXRlZC5saW5lID0gbGluZTtcbiAgICAgICAgICAgIG1hcHBpbmcuZ2VuZXJhdGVkLmNvbHVtbiA9IGNvbHVtbiAtIDI7XG4gICAgICAgICAgICB0aGlzLm1hcC5hZGRNYXBwaW5nKG1hcHBpbmcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYXBwaW5nLnNvdXJjZSA9IG5vU291cmNlO1xuICAgICAgICAgICAgbWFwcGluZy5vcmlnaW5hbC5saW5lID0gMTtcbiAgICAgICAgICAgIG1hcHBpbmcub3JpZ2luYWwuY29sdW1uID0gMDtcbiAgICAgICAgICAgIG1hcHBpbmcuZ2VuZXJhdGVkLmxpbmUgPSBsaW5lO1xuICAgICAgICAgICAgbWFwcGluZy5nZW5lcmF0ZWQuY29sdW1uID0gY29sdW1uIC0gMTtcbiAgICAgICAgICAgIHRoaXMubWFwLmFkZE1hcHBpbmcobWFwcGluZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgaXNBbm5vdGF0aW9uKCkge1xuICAgIGlmICh0aGlzLmlzSW5saW5lKCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHRoaXMubWFwT3B0cy5hbm5vdGF0aW9uICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXBPcHRzLmFubm90YXRpb247XG4gICAgfVxuICAgIGlmICh0aGlzLnByZXZpb3VzKCkubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcmV2aW91cygpLnNvbWUoKGkpID0+IGkuYW5ub3RhdGlvbik7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlzSW5saW5lKCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5tYXBPcHRzLmlubGluZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgcmV0dXJuIHRoaXMubWFwT3B0cy5pbmxpbmU7XG4gICAgfVxuICAgIGxldCBhbm5vdGF0aW9uID0gdGhpcy5tYXBPcHRzLmFubm90YXRpb247XG4gICAgaWYgKHR5cGVvZiBhbm5vdGF0aW9uICE9PSBcInVuZGVmaW5lZFwiICYmIGFubm90YXRpb24gIT09IHRydWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJldmlvdXMoKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByZXZpb3VzKCkuc29tZSgoaSkgPT4gaS5pbmxpbmUpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpc01hcCgpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMub3B0cy5tYXAgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHJldHVybiAhIXRoaXMub3B0cy5tYXA7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnByZXZpb3VzKCkubGVuZ3RoID4gMDtcbiAgfVxuICBpc1NvdXJjZXNDb250ZW50KCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5tYXBPcHRzLnNvdXJjZXNDb250ZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXBPcHRzLnNvdXJjZXNDb250ZW50O1xuICAgIH1cbiAgICBpZiAodGhpcy5wcmV2aW91cygpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJldmlvdXMoKS5zb21lKChpKSA9PiBpLndpdGhDb250ZW50KCkpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBvdXRwdXRGaWxlKCkge1xuICAgIGlmICh0aGlzLm9wdHMudG8pIHtcbiAgICAgIHJldHVybiB0aGlzLnBhdGgodGhpcy5vcHRzLnRvKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMub3B0cy5mcm9tKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXRoKHRoaXMub3B0cy5mcm9tKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwidG8uY3NzXCI7XG4gICAgfVxuICB9XG4gIHBhdGgoZmlsZSkge1xuICAgIGlmICh0aGlzLm1hcE9wdHMuYWJzb2x1dGUpIHJldHVybiBmaWxlO1xuICAgIGlmIChmaWxlLmNoYXJDb2RlQXQoMCkgPT09IDYwKSByZXR1cm4gZmlsZTtcbiAgICBpZiAoL15cXHcrOlxcL1xcLy8udGVzdChmaWxlKSkgcmV0dXJuIGZpbGU7XG4gICAgbGV0IGNhY2hlZCA9IHRoaXMubWVtb2l6ZWRQYXRocy5nZXQoZmlsZSk7XG4gICAgaWYgKGNhY2hlZCkgcmV0dXJuIGNhY2hlZDtcbiAgICBsZXQgZnJvbSA9IHRoaXMub3B0cy50byA/IGRpcm5hbWUodGhpcy5vcHRzLnRvKSA6IFwiLlwiO1xuICAgIGlmICh0eXBlb2YgdGhpcy5tYXBPcHRzLmFubm90YXRpb24gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGZyb20gPSBkaXJuYW1lKHJlc29sdmUoZnJvbSwgdGhpcy5tYXBPcHRzLmFubm90YXRpb24pKTtcbiAgICB9XG4gICAgbGV0IHBhdGggPSByZWxhdGl2ZShmcm9tLCBmaWxlKTtcbiAgICB0aGlzLm1lbW9pemVkUGF0aHMuc2V0KGZpbGUsIHBhdGgpO1xuICAgIHJldHVybiBwYXRoO1xuICB9XG4gIHByZXZpb3VzKCkge1xuICAgIGlmICghdGhpcy5wcmV2aW91c01hcHMpIHtcbiAgICAgIHRoaXMucHJldmlvdXNNYXBzID0gW107XG4gICAgICBpZiAodGhpcy5yb290KSB7XG4gICAgICAgIHRoaXMucm9vdC53YWxrKChub2RlMikgPT4ge1xuICAgICAgICAgIGlmIChub2RlMi5zb3VyY2UgJiYgbm9kZTIuc291cmNlLmlucHV0Lm1hcCkge1xuICAgICAgICAgICAgbGV0IG1hcCA9IG5vZGUyLnNvdXJjZS5pbnB1dC5tYXA7XG4gICAgICAgICAgICBpZiAoIXRoaXMucHJldmlvdXNNYXBzLmluY2x1ZGVzKG1hcCkpIHtcbiAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c01hcHMucHVzaChtYXApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgaW5wdXQyID0gbmV3IElucHV0JDModGhpcy5vcmlnaW5hbENTUywgdGhpcy5vcHRzKTtcbiAgICAgICAgaWYgKGlucHV0Mi5tYXApIHRoaXMucHJldmlvdXNNYXBzLnB1c2goaW5wdXQyLm1hcCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnByZXZpb3VzTWFwcztcbiAgfVxuICBzZXRTb3VyY2VzQ29udGVudCgpIHtcbiAgICBsZXQgYWxyZWFkeSA9IHt9O1xuICAgIGlmICh0aGlzLnJvb3QpIHtcbiAgICAgIHRoaXMucm9vdC53YWxrKChub2RlMikgPT4ge1xuICAgICAgICBpZiAobm9kZTIuc291cmNlKSB7XG4gICAgICAgICAgbGV0IGZyb20gPSBub2RlMi5zb3VyY2UuaW5wdXQuZnJvbTtcbiAgICAgICAgICBpZiAoZnJvbSAmJiAhYWxyZWFkeVtmcm9tXSkge1xuICAgICAgICAgICAgYWxyZWFkeVtmcm9tXSA9IHRydWU7XG4gICAgICAgICAgICBsZXQgZnJvbVVybCA9IHRoaXMudXNlc0ZpbGVVcmxzID8gdGhpcy50b0ZpbGVVcmwoZnJvbSkgOiB0aGlzLnRvVXJsKHRoaXMucGF0aChmcm9tKSk7XG4gICAgICAgICAgICB0aGlzLm1hcC5zZXRTb3VyY2VDb250ZW50KGZyb21VcmwsIG5vZGUyLnNvdXJjZS5pbnB1dC5jc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNzcykge1xuICAgICAgbGV0IGZyb20gPSB0aGlzLm9wdHMuZnJvbSA/IHRoaXMudG9VcmwodGhpcy5wYXRoKHRoaXMub3B0cy5mcm9tKSkgOiBcIjxubyBzb3VyY2U+XCI7XG4gICAgICB0aGlzLm1hcC5zZXRTb3VyY2VDb250ZW50KGZyb20sIHRoaXMuY3NzKTtcbiAgICB9XG4gIH1cbiAgc291cmNlUGF0aChub2RlMikge1xuICAgIGlmICh0aGlzLm1hcE9wdHMuZnJvbSkge1xuICAgICAgcmV0dXJuIHRoaXMudG9VcmwodGhpcy5tYXBPcHRzLmZyb20pO1xuICAgIH0gZWxzZSBpZiAodGhpcy51c2VzRmlsZVVybHMpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvRmlsZVVybChub2RlMi5zb3VyY2UuaW5wdXQuZnJvbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnRvVXJsKHRoaXMucGF0aChub2RlMi5zb3VyY2UuaW5wdXQuZnJvbSkpO1xuICAgIH1cbiAgfVxuICB0b0Jhc2U2NChzdHIpIHtcbiAgICBpZiAoQnVmZmVyKSB7XG4gICAgICByZXR1cm4gQnVmZmVyLmZyb20oc3RyKS50b1N0cmluZyhcImJhc2U2NFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHdpbmRvdy5idG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChzdHIpKSk7XG4gICAgfVxuICB9XG4gIHRvRmlsZVVybChwYXRoKSB7XG4gICAgbGV0IGNhY2hlZCA9IHRoaXMubWVtb2l6ZWRGaWxlVVJMcy5nZXQocGF0aCk7XG4gICAgaWYgKGNhY2hlZCkgcmV0dXJuIGNhY2hlZDtcbiAgICBpZiAocGF0aFRvRmlsZVVSTCkge1xuICAgICAgbGV0IGZpbGVVUkwgPSBwYXRoVG9GaWxlVVJMKHBhdGgpLnRvU3RyaW5nKCk7XG4gICAgICB0aGlzLm1lbW9pemVkRmlsZVVSTHMuc2V0KHBhdGgsIGZpbGVVUkwpO1xuICAgICAgcmV0dXJuIGZpbGVVUkw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJgbWFwLmFic29sdXRlYCBvcHRpb24gaXMgbm90IGF2YWlsYWJsZSBpbiB0aGlzIFBvc3RDU1MgYnVpbGRcIlxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgdG9VcmwocGF0aCkge1xuICAgIGxldCBjYWNoZWQgPSB0aGlzLm1lbW9pemVkVVJMcy5nZXQocGF0aCk7XG4gICAgaWYgKGNhY2hlZCkgcmV0dXJuIGNhY2hlZDtcbiAgICBpZiAoc2VwID09PSBcIlxcXFxcIikge1xuICAgICAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXFxcXC9nLCBcIi9cIik7XG4gICAgfVxuICAgIGxldCB1cmwgPSBlbmNvZGVVUkkocGF0aCkucmVwbGFjZSgvWyM/XS9nLCBlbmNvZGVVUklDb21wb25lbnQpO1xuICAgIHRoaXMubWVtb2l6ZWRVUkxzLnNldChwYXRoLCB1cmwpO1xuICAgIHJldHVybiB1cmw7XG4gIH1cbn07XG52YXIgbWFwR2VuZXJhdG9yID0gTWFwR2VuZXJhdG9yJDI7XG5sZXQgTm9kZSQyID0gbm9kZTtcbmxldCBDb21tZW50JDQgPSBjbGFzcyBDb21tZW50IGV4dGVuZHMgTm9kZSQyIHtcbiAgY29uc3RydWN0b3IoZGVmYXVsdHMpIHtcbiAgICBzdXBlcihkZWZhdWx0cyk7XG4gICAgdGhpcy50eXBlID0gXCJjb21tZW50XCI7XG4gIH1cbn07XG52YXIgY29tbWVudCA9IENvbW1lbnQkNDtcbkNvbW1lbnQkNC5kZWZhdWx0ID0gQ29tbWVudCQ0O1xubGV0IHsgaXNDbGVhbjogaXNDbGVhbiQxLCBteTogbXkkMSB9ID0gc3ltYm9scztcbmxldCBEZWNsYXJhdGlvbiQzID0gZGVjbGFyYXRpb247XG5sZXQgQ29tbWVudCQzID0gY29tbWVudDtcbmxldCBOb2RlJDEgPSBub2RlO1xubGV0IHBhcnNlJDQsIFJ1bGUkNCwgQXRSdWxlJDQsIFJvb3QkNjtcbmZ1bmN0aW9uIGNsZWFuU291cmNlKG5vZGVzKSB7XG4gIHJldHVybiBub2Rlcy5tYXAoKGkpID0+IHtcbiAgICBpZiAoaS5ub2RlcykgaS5ub2RlcyA9IGNsZWFuU291cmNlKGkubm9kZXMpO1xuICAgIGRlbGV0ZSBpLnNvdXJjZTtcbiAgICByZXR1cm4gaTtcbiAgfSk7XG59XG5mdW5jdGlvbiBtYXJrRGlydHlVcChub2RlMikge1xuICBub2RlMltpc0NsZWFuJDFdID0gZmFsc2U7XG4gIGlmIChub2RlMi5wcm94eU9mLm5vZGVzKSB7XG4gICAgZm9yIChsZXQgaSBvZiBub2RlMi5wcm94eU9mLm5vZGVzKSB7XG4gICAgICBtYXJrRGlydHlVcChpKTtcbiAgICB9XG4gIH1cbn1cbmxldCBDb250YWluZXIkNyA9IGNsYXNzIENvbnRhaW5lciBleHRlbmRzIE5vZGUkMSB7XG4gIGFwcGVuZCguLi5jaGlsZHJlbikge1xuICAgIGZvciAobGV0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgICBsZXQgbm9kZXMgPSB0aGlzLm5vcm1hbGl6ZShjaGlsZCwgdGhpcy5sYXN0KTtcbiAgICAgIGZvciAobGV0IG5vZGUyIG9mIG5vZGVzKSB0aGlzLnByb3h5T2Yubm9kZXMucHVzaChub2RlMik7XG4gICAgfVxuICAgIHRoaXMubWFya0RpcnR5KCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgY2xlYW5SYXdzKGtlZXBCZXR3ZWVuKSB7XG4gICAgc3VwZXIuY2xlYW5SYXdzKGtlZXBCZXR3ZWVuKTtcbiAgICBpZiAodGhpcy5ub2Rlcykge1xuICAgICAgZm9yIChsZXQgbm9kZTIgb2YgdGhpcy5ub2Rlcykgbm9kZTIuY2xlYW5SYXdzKGtlZXBCZXR3ZWVuKTtcbiAgICB9XG4gIH1cbiAgZWFjaChjYWxsYmFjaykge1xuICAgIGlmICghdGhpcy5wcm94eU9mLm5vZGVzKSByZXR1cm4gdm9pZCAwO1xuICAgIGxldCBpdGVyYXRvciA9IHRoaXMuZ2V0SXRlcmF0b3IoKTtcbiAgICBsZXQgaW5kZXgyLCByZXN1bHQyO1xuICAgIHdoaWxlICh0aGlzLmluZGV4ZXNbaXRlcmF0b3JdIDwgdGhpcy5wcm94eU9mLm5vZGVzLmxlbmd0aCkge1xuICAgICAgaW5kZXgyID0gdGhpcy5pbmRleGVzW2l0ZXJhdG9yXTtcbiAgICAgIHJlc3VsdDIgPSBjYWxsYmFjayh0aGlzLnByb3h5T2Yubm9kZXNbaW5kZXgyXSwgaW5kZXgyKTtcbiAgICAgIGlmIChyZXN1bHQyID09PSBmYWxzZSkgYnJlYWs7XG4gICAgICB0aGlzLmluZGV4ZXNbaXRlcmF0b3JdICs9IDE7XG4gICAgfVxuICAgIGRlbGV0ZSB0aGlzLmluZGV4ZXNbaXRlcmF0b3JdO1xuICAgIHJldHVybiByZXN1bHQyO1xuICB9XG4gIGV2ZXJ5KGNvbmRpdGlvbikge1xuICAgIHJldHVybiB0aGlzLm5vZGVzLmV2ZXJ5KGNvbmRpdGlvbik7XG4gIH1cbiAgZ2V0SXRlcmF0b3IoKSB7XG4gICAgaWYgKCF0aGlzLmxhc3RFYWNoKSB0aGlzLmxhc3RFYWNoID0gMDtcbiAgICBpZiAoIXRoaXMuaW5kZXhlcykgdGhpcy5pbmRleGVzID0ge307XG4gICAgdGhpcy5sYXN0RWFjaCArPSAxO1xuICAgIGxldCBpdGVyYXRvciA9IHRoaXMubGFzdEVhY2g7XG4gICAgdGhpcy5pbmRleGVzW2l0ZXJhdG9yXSA9IDA7XG4gICAgcmV0dXJuIGl0ZXJhdG9yO1xuICB9XG4gIGdldFByb3h5UHJvY2Vzc29yKCkge1xuICAgIHJldHVybiB7XG4gICAgICBnZXQobm9kZTIsIHByb3ApIHtcbiAgICAgICAgaWYgKHByb3AgPT09IFwicHJveHlPZlwiKSB7XG4gICAgICAgICAgcmV0dXJuIG5vZGUyO1xuICAgICAgICB9IGVsc2UgaWYgKCFub2RlMltwcm9wXSkge1xuICAgICAgICAgIHJldHVybiBub2RlMltwcm9wXTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wID09PSBcImVhY2hcIiB8fCB0eXBlb2YgcHJvcCA9PT0gXCJzdHJpbmdcIiAmJiBwcm9wLnN0YXJ0c1dpdGgoXCJ3YWxrXCIpKSB7XG4gICAgICAgICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZTJbcHJvcF0oXG4gICAgICAgICAgICAgIC4uLmFyZ3MubWFwKChpKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBpID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoY2hpbGQsIGluZGV4MikgPT4gaShjaGlsZC50b1Byb3h5KCksIGluZGV4Mik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wID09PSBcImV2ZXJ5XCIgfHwgcHJvcCA9PT0gXCJzb21lXCIpIHtcbiAgICAgICAgICByZXR1cm4gKGNiKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZTJbcHJvcF0oXG4gICAgICAgICAgICAgIChjaGlsZCwgLi4ub3RoZXIpID0+IGNiKGNoaWxkLnRvUHJveHkoKSwgLi4ub3RoZXIpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAocHJvcCA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICByZXR1cm4gKCkgPT4gbm9kZTIucm9vdCgpLnRvUHJveHkoKTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wID09PSBcIm5vZGVzXCIpIHtcbiAgICAgICAgICByZXR1cm4gbm9kZTIubm9kZXMubWFwKChpKSA9PiBpLnRvUHJveHkoKSk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvcCA9PT0gXCJmaXJzdFwiIHx8IHByb3AgPT09IFwibGFzdFwiKSB7XG4gICAgICAgICAgcmV0dXJuIG5vZGUyW3Byb3BdLnRvUHJveHkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbm9kZTJbcHJvcF07XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzZXQobm9kZTIsIHByb3AsIHZhbHVlKSB7XG4gICAgICAgIGlmIChub2RlMltwcm9wXSA9PT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgICAgICBub2RlMltwcm9wXSA9IHZhbHVlO1xuICAgICAgICBpZiAocHJvcCA9PT0gXCJuYW1lXCIgfHwgcHJvcCA9PT0gXCJwYXJhbXNcIiB8fCBwcm9wID09PSBcInNlbGVjdG9yXCIpIHtcbiAgICAgICAgICBub2RlMi5tYXJrRGlydHkoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIGluZGV4KGNoaWxkKSB7XG4gICAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIGNoaWxkO1xuICAgIGlmIChjaGlsZC5wcm94eU9mKSBjaGlsZCA9IGNoaWxkLnByb3h5T2Y7XG4gICAgcmV0dXJuIHRoaXMucHJveHlPZi5ub2Rlcy5pbmRleE9mKGNoaWxkKTtcbiAgfVxuICBpbnNlcnRBZnRlcihleGlzdCwgYWRkKSB7XG4gICAgbGV0IGV4aXN0SW5kZXggPSB0aGlzLmluZGV4KGV4aXN0KTtcbiAgICBsZXQgbm9kZXMgPSB0aGlzLm5vcm1hbGl6ZShhZGQsIHRoaXMucHJveHlPZi5ub2Rlc1tleGlzdEluZGV4XSkucmV2ZXJzZSgpO1xuICAgIGV4aXN0SW5kZXggPSB0aGlzLmluZGV4KGV4aXN0KTtcbiAgICBmb3IgKGxldCBub2RlMiBvZiBub2RlcykgdGhpcy5wcm94eU9mLm5vZGVzLnNwbGljZShleGlzdEluZGV4ICsgMSwgMCwgbm9kZTIpO1xuICAgIGxldCBpbmRleDI7XG4gICAgZm9yIChsZXQgaWQgaW4gdGhpcy5pbmRleGVzKSB7XG4gICAgICBpbmRleDIgPSB0aGlzLmluZGV4ZXNbaWRdO1xuICAgICAgaWYgKGV4aXN0SW5kZXggPCBpbmRleDIpIHtcbiAgICAgICAgdGhpcy5pbmRleGVzW2lkXSA9IGluZGV4MiArIG5vZGVzLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5tYXJrRGlydHkoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBpbnNlcnRCZWZvcmUoZXhpc3QsIGFkZCkge1xuICAgIGxldCBleGlzdEluZGV4ID0gdGhpcy5pbmRleChleGlzdCk7XG4gICAgbGV0IHR5cGUgPSBleGlzdEluZGV4ID09PSAwID8gXCJwcmVwZW5kXCIgOiBmYWxzZTtcbiAgICBsZXQgbm9kZXMgPSB0aGlzLm5vcm1hbGl6ZShhZGQsIHRoaXMucHJveHlPZi5ub2Rlc1tleGlzdEluZGV4XSwgdHlwZSkucmV2ZXJzZSgpO1xuICAgIGV4aXN0SW5kZXggPSB0aGlzLmluZGV4KGV4aXN0KTtcbiAgICBmb3IgKGxldCBub2RlMiBvZiBub2RlcykgdGhpcy5wcm94eU9mLm5vZGVzLnNwbGljZShleGlzdEluZGV4LCAwLCBub2RlMik7XG4gICAgbGV0IGluZGV4MjtcbiAgICBmb3IgKGxldCBpZCBpbiB0aGlzLmluZGV4ZXMpIHtcbiAgICAgIGluZGV4MiA9IHRoaXMuaW5kZXhlc1tpZF07XG4gICAgICBpZiAoZXhpc3RJbmRleCA8PSBpbmRleDIpIHtcbiAgICAgICAgdGhpcy5pbmRleGVzW2lkXSA9IGluZGV4MiArIG5vZGVzLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5tYXJrRGlydHkoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBub3JtYWxpemUobm9kZXMsIHNhbXBsZSkge1xuICAgIGlmICh0eXBlb2Ygbm9kZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG5vZGVzID0gY2xlYW5Tb3VyY2UocGFyc2UkNChub2Rlcykubm9kZXMpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG5vZGVzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBub2RlcyA9IFtdO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShub2RlcykpIHtcbiAgICAgIG5vZGVzID0gbm9kZXMuc2xpY2UoMCk7XG4gICAgICBmb3IgKGxldCBpIG9mIG5vZGVzKSB7XG4gICAgICAgIGlmIChpLnBhcmVudCkgaS5wYXJlbnQucmVtb3ZlQ2hpbGQoaSwgXCJpZ25vcmVcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChub2Rlcy50eXBlID09PSBcInJvb3RcIiAmJiB0aGlzLnR5cGUgIT09IFwiZG9jdW1lbnRcIikge1xuICAgICAgbm9kZXMgPSBub2Rlcy5ub2Rlcy5zbGljZSgwKTtcbiAgICAgIGZvciAobGV0IGkgb2Ygbm9kZXMpIHtcbiAgICAgICAgaWYgKGkucGFyZW50KSBpLnBhcmVudC5yZW1vdmVDaGlsZChpLCBcImlnbm9yZVwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5vZGVzLnR5cGUpIHtcbiAgICAgIG5vZGVzID0gW25vZGVzXTtcbiAgICB9IGVsc2UgaWYgKG5vZGVzLnByb3ApIHtcbiAgICAgIGlmICh0eXBlb2Ygbm9kZXMudmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVmFsdWUgZmllbGQgaXMgbWlzc2VkIGluIG5vZGUgY3JlYXRpb25cIik7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBub2Rlcy52YWx1ZSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICBub2Rlcy52YWx1ZSA9IFN0cmluZyhub2Rlcy52YWx1ZSk7XG4gICAgICB9XG4gICAgICBub2RlcyA9IFtuZXcgRGVjbGFyYXRpb24kMyhub2RlcyldO1xuICAgIH0gZWxzZSBpZiAobm9kZXMuc2VsZWN0b3IpIHtcbiAgICAgIG5vZGVzID0gW25ldyBSdWxlJDQobm9kZXMpXTtcbiAgICB9IGVsc2UgaWYgKG5vZGVzLm5hbWUpIHtcbiAgICAgIG5vZGVzID0gW25ldyBBdFJ1bGUkNChub2RlcyldO1xuICAgIH0gZWxzZSBpZiAobm9kZXMudGV4dCkge1xuICAgICAgbm9kZXMgPSBbbmV3IENvbW1lbnQkMyhub2RlcyldO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIG5vZGUgdHlwZSBpbiBub2RlIGNyZWF0aW9uXCIpO1xuICAgIH1cbiAgICBsZXQgcHJvY2Vzc2VkID0gbm9kZXMubWFwKChpKSA9PiB7XG4gICAgICBpZiAoIWlbbXkkMV0pIENvbnRhaW5lci5yZWJ1aWxkKGkpO1xuICAgICAgaSA9IGkucHJveHlPZjtcbiAgICAgIGlmIChpLnBhcmVudCkgaS5wYXJlbnQucmVtb3ZlQ2hpbGQoaSk7XG4gICAgICBpZiAoaVtpc0NsZWFuJDFdKSBtYXJrRGlydHlVcChpKTtcbiAgICAgIGlmICh0eXBlb2YgaS5yYXdzLmJlZm9yZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAoc2FtcGxlICYmIHR5cGVvZiBzYW1wbGUucmF3cy5iZWZvcmUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpLnJhd3MuYmVmb3JlID0gc2FtcGxlLnJhd3MuYmVmb3JlLnJlcGxhY2UoL1xcUy9nLCBcIlwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaS5wYXJlbnQgPSB0aGlzLnByb3h5T2Y7XG4gICAgICByZXR1cm4gaTtcbiAgICB9KTtcbiAgICByZXR1cm4gcHJvY2Vzc2VkO1xuICB9XG4gIHByZXBlbmQoLi4uY2hpbGRyZW4pIHtcbiAgICBjaGlsZHJlbiA9IGNoaWxkcmVuLnJldmVyc2UoKTtcbiAgICBmb3IgKGxldCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgbGV0IG5vZGVzID0gdGhpcy5ub3JtYWxpemUoY2hpbGQsIHRoaXMuZmlyc3QsIFwicHJlcGVuZFwiKS5yZXZlcnNlKCk7XG4gICAgICBmb3IgKGxldCBub2RlMiBvZiBub2RlcykgdGhpcy5wcm94eU9mLm5vZGVzLnVuc2hpZnQobm9kZTIpO1xuICAgICAgZm9yIChsZXQgaWQgaW4gdGhpcy5pbmRleGVzKSB7XG4gICAgICAgIHRoaXMuaW5kZXhlc1tpZF0gPSB0aGlzLmluZGV4ZXNbaWRdICsgbm9kZXMubGVuZ3RoO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm1hcmtEaXJ0eSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHB1c2goY2hpbGQpIHtcbiAgICBjaGlsZC5wYXJlbnQgPSB0aGlzO1xuICAgIHRoaXMucHJveHlPZi5ub2Rlcy5wdXNoKGNoaWxkKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICByZW1vdmVBbGwoKSB7XG4gICAgZm9yIChsZXQgbm9kZTIgb2YgdGhpcy5wcm94eU9mLm5vZGVzKSBub2RlMi5wYXJlbnQgPSB2b2lkIDA7XG4gICAgdGhpcy5wcm94eU9mLm5vZGVzID0gW107XG4gICAgdGhpcy5tYXJrRGlydHkoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICByZW1vdmVDaGlsZChjaGlsZCkge1xuICAgIGNoaWxkID0gdGhpcy5pbmRleChjaGlsZCk7XG4gICAgdGhpcy5wcm94eU9mLm5vZGVzW2NoaWxkXS5wYXJlbnQgPSB2b2lkIDA7XG4gICAgdGhpcy5wcm94eU9mLm5vZGVzLnNwbGljZShjaGlsZCwgMSk7XG4gICAgbGV0IGluZGV4MjtcbiAgICBmb3IgKGxldCBpZCBpbiB0aGlzLmluZGV4ZXMpIHtcbiAgICAgIGluZGV4MiA9IHRoaXMuaW5kZXhlc1tpZF07XG4gICAgICBpZiAoaW5kZXgyID49IGNoaWxkKSB7XG4gICAgICAgIHRoaXMuaW5kZXhlc1tpZF0gPSBpbmRleDIgLSAxO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm1hcmtEaXJ0eSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHJlcGxhY2VWYWx1ZXMocGF0dGVybiwgb3B0cywgY2FsbGJhY2spIHtcbiAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjayA9IG9wdHM7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuICAgIHRoaXMud2Fsa0RlY2xzKChkZWNsKSA9PiB7XG4gICAgICBpZiAob3B0cy5wcm9wcyAmJiAhb3B0cy5wcm9wcy5pbmNsdWRlcyhkZWNsLnByb3ApKSByZXR1cm47XG4gICAgICBpZiAob3B0cy5mYXN0ICYmICFkZWNsLnZhbHVlLmluY2x1ZGVzKG9wdHMuZmFzdCkpIHJldHVybjtcbiAgICAgIGRlY2wudmFsdWUgPSBkZWNsLnZhbHVlLnJlcGxhY2UocGF0dGVybiwgY2FsbGJhY2spO1xuICAgIH0pO1xuICAgIHRoaXMubWFya0RpcnR5KCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc29tZShjb25kaXRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5ub2Rlcy5zb21lKGNvbmRpdGlvbik7XG4gIH1cbiAgd2FsayhjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLmVhY2goKGNoaWxkLCBpKSA9PiB7XG4gICAgICBsZXQgcmVzdWx0MjtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlc3VsdDIgPSBjYWxsYmFjayhjaGlsZCwgaSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRocm93IGNoaWxkLmFkZFRvRXJyb3IoZSk7XG4gICAgICB9XG4gICAgICBpZiAocmVzdWx0MiAhPT0gZmFsc2UgJiYgY2hpbGQud2Fsaykge1xuICAgICAgICByZXN1bHQyID0gY2hpbGQud2FsayhjYWxsYmFjayk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0MjtcbiAgICB9KTtcbiAgfVxuICB3YWxrQXRSdWxlcyhuYW1lLCBjYWxsYmFjaykge1xuICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrID0gbmFtZTtcbiAgICAgIHJldHVybiB0aGlzLndhbGsoKGNoaWxkLCBpKSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC50eXBlID09PSBcImF0cnVsZVwiKSB7XG4gICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGNoaWxkLCBpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChuYW1lIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICByZXR1cm4gdGhpcy53YWxrKChjaGlsZCwgaSkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQudHlwZSA9PT0gXCJhdHJ1bGVcIiAmJiBuYW1lLnRlc3QoY2hpbGQubmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gY2FsbGJhY2soY2hpbGQsIGkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMud2FsaygoY2hpbGQsIGkpID0+IHtcbiAgICAgIGlmIChjaGlsZC50eXBlID09PSBcImF0cnVsZVwiICYmIGNoaWxkLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGNoaWxkLCBpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICB3YWxrQ29tbWVudHMoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy53YWxrKChjaGlsZCwgaSkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnR5cGUgPT09IFwiY29tbWVudFwiKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhjaGlsZCwgaSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgd2Fsa0RlY2xzKHByb3AsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2sgPSBwcm9wO1xuICAgICAgcmV0dXJuIHRoaXMud2FsaygoY2hpbGQsIGkpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09IFwiZGVjbFwiKSB7XG4gICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGNoaWxkLCBpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChwcm9wIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICByZXR1cm4gdGhpcy53YWxrKChjaGlsZCwgaSkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQudHlwZSA9PT0gXCJkZWNsXCIgJiYgcHJvcC50ZXN0KGNoaWxkLnByb3ApKSB7XG4gICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGNoaWxkLCBpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLndhbGsoKGNoaWxkLCBpKSA9PiB7XG4gICAgICBpZiAoY2hpbGQudHlwZSA9PT0gXCJkZWNsXCIgJiYgY2hpbGQucHJvcCA9PT0gcHJvcCkge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soY2hpbGQsIGkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHdhbGtSdWxlcyhzZWxlY3RvciwgY2FsbGJhY2spIHtcbiAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjayA9IHNlbGVjdG9yO1xuICAgICAgcmV0dXJuIHRoaXMud2FsaygoY2hpbGQsIGkpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09IFwicnVsZVwiKSB7XG4gICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGNoaWxkLCBpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgcmV0dXJuIHRoaXMud2FsaygoY2hpbGQsIGkpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09IFwicnVsZVwiICYmIHNlbGVjdG9yLnRlc3QoY2hpbGQuc2VsZWN0b3IpKSB7XG4gICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGNoaWxkLCBpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLndhbGsoKGNoaWxkLCBpKSA9PiB7XG4gICAgICBpZiAoY2hpbGQudHlwZSA9PT0gXCJydWxlXCIgJiYgY2hpbGQuc2VsZWN0b3IgPT09IHNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhjaGlsZCwgaSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZ2V0IGZpcnN0KCkge1xuICAgIGlmICghdGhpcy5wcm94eU9mLm5vZGVzKSByZXR1cm4gdm9pZCAwO1xuICAgIHJldHVybiB0aGlzLnByb3h5T2Yubm9kZXNbMF07XG4gIH1cbiAgZ2V0IGxhc3QoKSB7XG4gICAgaWYgKCF0aGlzLnByb3h5T2Yubm9kZXMpIHJldHVybiB2b2lkIDA7XG4gICAgcmV0dXJuIHRoaXMucHJveHlPZi5ub2Rlc1t0aGlzLnByb3h5T2Yubm9kZXMubGVuZ3RoIC0gMV07XG4gIH1cbn07XG5Db250YWluZXIkNy5yZWdpc3RlclBhcnNlID0gKGRlcGVuZGFudCkgPT4ge1xuICBwYXJzZSQ0ID0gZGVwZW5kYW50O1xufTtcbkNvbnRhaW5lciQ3LnJlZ2lzdGVyUnVsZSA9IChkZXBlbmRhbnQpID0+IHtcbiAgUnVsZSQ0ID0gZGVwZW5kYW50O1xufTtcbkNvbnRhaW5lciQ3LnJlZ2lzdGVyQXRSdWxlID0gKGRlcGVuZGFudCkgPT4ge1xuICBBdFJ1bGUkNCA9IGRlcGVuZGFudDtcbn07XG5Db250YWluZXIkNy5yZWdpc3RlclJvb3QgPSAoZGVwZW5kYW50KSA9PiB7XG4gIFJvb3QkNiA9IGRlcGVuZGFudDtcbn07XG52YXIgY29udGFpbmVyID0gQ29udGFpbmVyJDc7XG5Db250YWluZXIkNy5kZWZhdWx0ID0gQ29udGFpbmVyJDc7XG5Db250YWluZXIkNy5yZWJ1aWxkID0gKG5vZGUyKSA9PiB7XG4gIGlmIChub2RlMi50eXBlID09PSBcImF0cnVsZVwiKSB7XG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKG5vZGUyLCBBdFJ1bGUkNC5wcm90b3R5cGUpO1xuICB9IGVsc2UgaWYgKG5vZGUyLnR5cGUgPT09IFwicnVsZVwiKSB7XG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKG5vZGUyLCBSdWxlJDQucHJvdG90eXBlKTtcbiAgfSBlbHNlIGlmIChub2RlMi50eXBlID09PSBcImRlY2xcIikge1xuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihub2RlMiwgRGVjbGFyYXRpb24kMy5wcm90b3R5cGUpO1xuICB9IGVsc2UgaWYgKG5vZGUyLnR5cGUgPT09IFwiY29tbWVudFwiKSB7XG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKG5vZGUyLCBDb21tZW50JDMucHJvdG90eXBlKTtcbiAgfSBlbHNlIGlmIChub2RlMi50eXBlID09PSBcInJvb3RcIikge1xuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihub2RlMiwgUm9vdCQ2LnByb3RvdHlwZSk7XG4gIH1cbiAgbm9kZTJbbXkkMV0gPSB0cnVlO1xuICBpZiAobm9kZTIubm9kZXMpIHtcbiAgICBub2RlMi5ub2Rlcy5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgQ29udGFpbmVyJDcucmVidWlsZChjaGlsZCk7XG4gICAgfSk7XG4gIH1cbn07XG5sZXQgQ29udGFpbmVyJDYgPSBjb250YWluZXI7XG5sZXQgTGF6eVJlc3VsdCQ0LCBQcm9jZXNzb3IkMztcbmxldCBEb2N1bWVudCQzID0gY2xhc3MgRG9jdW1lbnQgZXh0ZW5kcyBDb250YWluZXIkNiB7XG4gIGNvbnN0cnVjdG9yKGRlZmF1bHRzKSB7XG4gICAgc3VwZXIoeyB0eXBlOiBcImRvY3VtZW50XCIsIC4uLmRlZmF1bHRzIH0pO1xuICAgIGlmICghdGhpcy5ub2Rlcykge1xuICAgICAgdGhpcy5ub2RlcyA9IFtdO1xuICAgIH1cbiAgfVxuICB0b1Jlc3VsdChvcHRzID0ge30pIHtcbiAgICBsZXQgbGF6eSA9IG5ldyBMYXp5UmVzdWx0JDQobmV3IFByb2Nlc3NvciQzKCksIHRoaXMsIG9wdHMpO1xuICAgIHJldHVybiBsYXp5LnN0cmluZ2lmeSgpO1xuICB9XG59O1xuRG9jdW1lbnQkMy5yZWdpc3RlckxhenlSZXN1bHQgPSAoZGVwZW5kYW50KSA9PiB7XG4gIExhenlSZXN1bHQkNCA9IGRlcGVuZGFudDtcbn07XG5Eb2N1bWVudCQzLnJlZ2lzdGVyUHJvY2Vzc29yID0gKGRlcGVuZGFudCkgPT4ge1xuICBQcm9jZXNzb3IkMyA9IGRlcGVuZGFudDtcbn07XG52YXIgZG9jdW1lbnQkMSA9IERvY3VtZW50JDM7XG5Eb2N1bWVudCQzLmRlZmF1bHQgPSBEb2N1bWVudCQzO1xubGV0IHByaW50ZWQgPSB7fTtcbnZhciB3YXJuT25jZSQyID0gZnVuY3Rpb24gd2Fybk9uY2UobWVzc2FnZSkge1xuICBpZiAocHJpbnRlZFttZXNzYWdlXSkgcmV0dXJuO1xuICBwcmludGVkW21lc3NhZ2VdID0gdHJ1ZTtcbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSBcInVuZGVmaW5lZFwiICYmIGNvbnNvbGUud2Fybikge1xuICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgfVxufTtcbmxldCBXYXJuaW5nJDIgPSBjbGFzcyBXYXJuaW5nIHtcbiAgY29uc3RydWN0b3IodGV4dCwgb3B0cyA9IHt9KSB7XG4gICAgdGhpcy50eXBlID0gXCJ3YXJuaW5nXCI7XG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICBpZiAob3B0cy5ub2RlICYmIG9wdHMubm9kZS5zb3VyY2UpIHtcbiAgICAgIGxldCByYW5nZSA9IG9wdHMubm9kZS5yYW5nZUJ5KG9wdHMpO1xuICAgICAgdGhpcy5saW5lID0gcmFuZ2Uuc3RhcnQubGluZTtcbiAgICAgIHRoaXMuY29sdW1uID0gcmFuZ2Uuc3RhcnQuY29sdW1uO1xuICAgICAgdGhpcy5lbmRMaW5lID0gcmFuZ2UuZW5kLmxpbmU7XG4gICAgICB0aGlzLmVuZENvbHVtbiA9IHJhbmdlLmVuZC5jb2x1bW47XG4gICAgfVxuICAgIGZvciAobGV0IG9wdCBpbiBvcHRzKSB0aGlzW29wdF0gPSBvcHRzW29wdF07XG4gIH1cbiAgdG9TdHJpbmcoKSB7XG4gICAgaWYgKHRoaXMubm9kZSkge1xuICAgICAgcmV0dXJuIHRoaXMubm9kZS5lcnJvcih0aGlzLnRleHQsIHtcbiAgICAgICAgaW5kZXg6IHRoaXMuaW5kZXgsXG4gICAgICAgIHBsdWdpbjogdGhpcy5wbHVnaW4sXG4gICAgICAgIHdvcmQ6IHRoaXMud29yZFxuICAgICAgfSkubWVzc2FnZTtcbiAgICB9XG4gICAgaWYgKHRoaXMucGx1Z2luKSB7XG4gICAgICByZXR1cm4gdGhpcy5wbHVnaW4gKyBcIjogXCIgKyB0aGlzLnRleHQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnRleHQ7XG4gIH1cbn07XG52YXIgd2FybmluZyA9IFdhcm5pbmckMjtcbldhcm5pbmckMi5kZWZhdWx0ID0gV2FybmluZyQyO1xubGV0IFdhcm5pbmckMSA9IHdhcm5pbmc7XG5sZXQgUmVzdWx0JDMgPSBjbGFzcyBSZXN1bHQge1xuICBjb25zdHJ1Y3Rvcihwcm9jZXNzb3IyLCByb290Miwgb3B0cykge1xuICAgIHRoaXMucHJvY2Vzc29yID0gcHJvY2Vzc29yMjtcbiAgICB0aGlzLm1lc3NhZ2VzID0gW107XG4gICAgdGhpcy5yb290ID0gcm9vdDI7XG4gICAgdGhpcy5vcHRzID0gb3B0cztcbiAgICB0aGlzLmNzcyA9IHZvaWQgMDtcbiAgICB0aGlzLm1hcCA9IHZvaWQgMDtcbiAgfVxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5jc3M7XG4gIH1cbiAgd2Fybih0ZXh0LCBvcHRzID0ge30pIHtcbiAgICBpZiAoIW9wdHMucGx1Z2luKSB7XG4gICAgICBpZiAodGhpcy5sYXN0UGx1Z2luICYmIHRoaXMubGFzdFBsdWdpbi5wb3N0Y3NzUGx1Z2luKSB7XG4gICAgICAgIG9wdHMucGx1Z2luID0gdGhpcy5sYXN0UGx1Z2luLnBvc3Rjc3NQbHVnaW47XG4gICAgICB9XG4gICAgfVxuICAgIGxldCB3YXJuaW5nMiA9IG5ldyBXYXJuaW5nJDEodGV4dCwgb3B0cyk7XG4gICAgdGhpcy5tZXNzYWdlcy5wdXNoKHdhcm5pbmcyKTtcbiAgICByZXR1cm4gd2FybmluZzI7XG4gIH1cbiAgd2FybmluZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVzc2FnZXMuZmlsdGVyKChpKSA9PiBpLnR5cGUgPT09IFwid2FybmluZ1wiKTtcbiAgfVxuICBnZXQgY29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jc3M7XG4gIH1cbn07XG52YXIgcmVzdWx0ID0gUmVzdWx0JDM7XG5SZXN1bHQkMy5kZWZhdWx0ID0gUmVzdWx0JDM7XG5jb25zdCBTSU5HTEVfUVVPVEUgPSBcIidcIi5jaGFyQ29kZUF0KDApO1xuY29uc3QgRE9VQkxFX1FVT1RFID0gJ1wiJy5jaGFyQ29kZUF0KDApO1xuY29uc3QgQkFDS1NMQVNIID0gXCJcXFxcXCIuY2hhckNvZGVBdCgwKTtcbmNvbnN0IFNMQVNIID0gXCIvXCIuY2hhckNvZGVBdCgwKTtcbmNvbnN0IE5FV0xJTkUgPSBcIlxcblwiLmNoYXJDb2RlQXQoMCk7XG5jb25zdCBTUEFDRSA9IFwiIFwiLmNoYXJDb2RlQXQoMCk7XG5jb25zdCBGRUVEID0gXCJcXGZcIi5jaGFyQ29kZUF0KDApO1xuY29uc3QgVEFCID0gXCJcdFwiLmNoYXJDb2RlQXQoMCk7XG5jb25zdCBDUiA9IFwiXFxyXCIuY2hhckNvZGVBdCgwKTtcbmNvbnN0IE9QRU5fU1FVQVJFID0gXCJbXCIuY2hhckNvZGVBdCgwKTtcbmNvbnN0IENMT1NFX1NRVUFSRSA9IFwiXVwiLmNoYXJDb2RlQXQoMCk7XG5jb25zdCBPUEVOX1BBUkVOVEhFU0VTID0gXCIoXCIuY2hhckNvZGVBdCgwKTtcbmNvbnN0IENMT1NFX1BBUkVOVEhFU0VTID0gXCIpXCIuY2hhckNvZGVBdCgwKTtcbmNvbnN0IE9QRU5fQ1VSTFkgPSBcIntcIi5jaGFyQ29kZUF0KDApO1xuY29uc3QgQ0xPU0VfQ1VSTFkgPSBcIn1cIi5jaGFyQ29kZUF0KDApO1xuY29uc3QgU0VNSUNPTE9OID0gXCI7XCIuY2hhckNvZGVBdCgwKTtcbmNvbnN0IEFTVEVSSVNLID0gXCIqXCIuY2hhckNvZGVBdCgwKTtcbmNvbnN0IENPTE9OID0gXCI6XCIuY2hhckNvZGVBdCgwKTtcbmNvbnN0IEFUID0gXCJAXCIuY2hhckNvZGVBdCgwKTtcbmNvbnN0IFJFX0FUX0VORCA9IC9bXFx0XFxuXFxmXFxyIFwiIycoKS87W1xcXFxcXF17fV0vZztcbmNvbnN0IFJFX1dPUkRfRU5EID0gL1tcXHRcXG5cXGZcXHIgIVwiIycoKTo7QFtcXFxcXFxde31dfFxcLyg/PVxcKikvZztcbmNvbnN0IFJFX0JBRF9CUkFDS0VUID0gLy5bXFxyXFxuXCInKC9cXFxcXS87XG5jb25zdCBSRV9IRVhfRVNDQVBFID0gL1tcXGRhLWZdL2k7XG52YXIgdG9rZW5pemUgPSBmdW5jdGlvbiB0b2tlbml6ZXIoaW5wdXQyLCBvcHRpb25zID0ge30pIHtcbiAgbGV0IGNzcyA9IGlucHV0Mi5jc3MudmFsdWVPZigpO1xuICBsZXQgaWdub3JlID0gb3B0aW9ucy5pZ25vcmVFcnJvcnM7XG4gIGxldCBjb2RlLCBuZXh0LCBxdW90ZSwgY29udGVudCwgZXNjYXBlO1xuICBsZXQgZXNjYXBlZCwgZXNjYXBlUG9zLCBwcmV2LCBuLCBjdXJyZW50VG9rZW47XG4gIGxldCBsZW5ndGggPSBjc3MubGVuZ3RoO1xuICBsZXQgcG9zID0gMDtcbiAgbGV0IGJ1ZmZlciA9IFtdO1xuICBsZXQgcmV0dXJuZWQgPSBbXTtcbiAgZnVuY3Rpb24gcG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHBvcztcbiAgfVxuICBmdW5jdGlvbiB1bmNsb3NlZCh3aGF0KSB7XG4gICAgdGhyb3cgaW5wdXQyLmVycm9yKFwiVW5jbG9zZWQgXCIgKyB3aGF0LCBwb3MpO1xuICB9XG4gIGZ1bmN0aW9uIGVuZE9mRmlsZSgpIHtcbiAgICByZXR1cm4gcmV0dXJuZWQubGVuZ3RoID09PSAwICYmIHBvcyA+PSBsZW5ndGg7XG4gIH1cbiAgZnVuY3Rpb24gbmV4dFRva2VuKG9wdHMpIHtcbiAgICBpZiAocmV0dXJuZWQubGVuZ3RoKSByZXR1cm4gcmV0dXJuZWQucG9wKCk7XG4gICAgaWYgKHBvcyA+PSBsZW5ndGgpIHJldHVybjtcbiAgICBsZXQgaWdub3JlVW5jbG9zZWQgPSBvcHRzID8gb3B0cy5pZ25vcmVVbmNsb3NlZCA6IGZhbHNlO1xuICAgIGNvZGUgPSBjc3MuY2hhckNvZGVBdChwb3MpO1xuICAgIHN3aXRjaCAoY29kZSkge1xuICAgICAgY2FzZSBORVdMSU5FOlxuICAgICAgY2FzZSBTUEFDRTpcbiAgICAgIGNhc2UgVEFCOlxuICAgICAgY2FzZSBDUjpcbiAgICAgIGNhc2UgRkVFRDoge1xuICAgICAgICBuZXh0ID0gcG9zO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgbmV4dCArPSAxO1xuICAgICAgICAgIGNvZGUgPSBjc3MuY2hhckNvZGVBdChuZXh0KTtcbiAgICAgICAgfSB3aGlsZSAoY29kZSA9PT0gU1BBQ0UgfHwgY29kZSA9PT0gTkVXTElORSB8fCBjb2RlID09PSBUQUIgfHwgY29kZSA9PT0gQ1IgfHwgY29kZSA9PT0gRkVFRCk7XG4gICAgICAgIGN1cnJlbnRUb2tlbiA9IFtcInNwYWNlXCIsIGNzcy5zbGljZShwb3MsIG5leHQpXTtcbiAgICAgICAgcG9zID0gbmV4dCAtIDE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBPUEVOX1NRVUFSRTpcbiAgICAgIGNhc2UgQ0xPU0VfU1FVQVJFOlxuICAgICAgY2FzZSBPUEVOX0NVUkxZOlxuICAgICAgY2FzZSBDTE9TRV9DVVJMWTpcbiAgICAgIGNhc2UgQ09MT046XG4gICAgICBjYXNlIFNFTUlDT0xPTjpcbiAgICAgIGNhc2UgQ0xPU0VfUEFSRU5USEVTRVM6IHtcbiAgICAgICAgbGV0IGNvbnRyb2xDaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKTtcbiAgICAgICAgY3VycmVudFRva2VuID0gW2NvbnRyb2xDaGFyLCBjb250cm9sQ2hhciwgcG9zXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE9QRU5fUEFSRU5USEVTRVM6IHtcbiAgICAgICAgcHJldiA9IGJ1ZmZlci5sZW5ndGggPyBidWZmZXIucG9wKClbMV0gOiBcIlwiO1xuICAgICAgICBuID0gY3NzLmNoYXJDb2RlQXQocG9zICsgMSk7XG4gICAgICAgIGlmIChwcmV2ID09PSBcInVybFwiICYmIG4gIT09IFNJTkdMRV9RVU9URSAmJiBuICE9PSBET1VCTEVfUVVPVEUgJiYgbiAhPT0gU1BBQ0UgJiYgbiAhPT0gTkVXTElORSAmJiBuICE9PSBUQUIgJiYgbiAhPT0gRkVFRCAmJiBuICE9PSBDUikge1xuICAgICAgICAgIG5leHQgPSBwb3M7XG4gICAgICAgICAgZG8ge1xuICAgICAgICAgICAgZXNjYXBlZCA9IGZhbHNlO1xuICAgICAgICAgICAgbmV4dCA9IGNzcy5pbmRleE9mKFwiKVwiLCBuZXh0ICsgMSk7XG4gICAgICAgICAgICBpZiAobmV4dCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgaWYgKGlnbm9yZSB8fCBpZ25vcmVVbmNsb3NlZCkge1xuICAgICAgICAgICAgICAgIG5leHQgPSBwb3M7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdW5jbG9zZWQoXCJicmFja2V0XCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlc2NhcGVQb3MgPSBuZXh0O1xuICAgICAgICAgICAgd2hpbGUgKGNzcy5jaGFyQ29kZUF0KGVzY2FwZVBvcyAtIDEpID09PSBCQUNLU0xBU0gpIHtcbiAgICAgICAgICAgICAgZXNjYXBlUG9zIC09IDE7XG4gICAgICAgICAgICAgIGVzY2FwZWQgPSAhZXNjYXBlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IHdoaWxlIChlc2NhcGVkKTtcbiAgICAgICAgICBjdXJyZW50VG9rZW4gPSBbXCJicmFja2V0c1wiLCBjc3Muc2xpY2UocG9zLCBuZXh0ICsgMSksIHBvcywgbmV4dF07XG4gICAgICAgICAgcG9zID0gbmV4dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXh0ID0gY3NzLmluZGV4T2YoXCIpXCIsIHBvcyArIDEpO1xuICAgICAgICAgIGNvbnRlbnQgPSBjc3Muc2xpY2UocG9zLCBuZXh0ICsgMSk7XG4gICAgICAgICAgaWYgKG5leHQgPT09IC0xIHx8IFJFX0JBRF9CUkFDS0VULnRlc3QoY29udGVudCkpIHtcbiAgICAgICAgICAgIGN1cnJlbnRUb2tlbiA9IFtcIihcIiwgXCIoXCIsIHBvc107XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN1cnJlbnRUb2tlbiA9IFtcImJyYWNrZXRzXCIsIGNvbnRlbnQsIHBvcywgbmV4dF07XG4gICAgICAgICAgICBwb3MgPSBuZXh0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgU0lOR0xFX1FVT1RFOlxuICAgICAgY2FzZSBET1VCTEVfUVVPVEU6IHtcbiAgICAgICAgcXVvdGUgPSBjb2RlID09PSBTSU5HTEVfUVVPVEUgPyBcIidcIiA6ICdcIic7XG4gICAgICAgIG5leHQgPSBwb3M7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICBlc2NhcGVkID0gZmFsc2U7XG4gICAgICAgICAgbmV4dCA9IGNzcy5pbmRleE9mKHF1b3RlLCBuZXh0ICsgMSk7XG4gICAgICAgICAgaWYgKG5leHQgPT09IC0xKSB7XG4gICAgICAgICAgICBpZiAoaWdub3JlIHx8IGlnbm9yZVVuY2xvc2VkKSB7XG4gICAgICAgICAgICAgIG5leHQgPSBwb3MgKyAxO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHVuY2xvc2VkKFwic3RyaW5nXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBlc2NhcGVQb3MgPSBuZXh0O1xuICAgICAgICAgIHdoaWxlIChjc3MuY2hhckNvZGVBdChlc2NhcGVQb3MgLSAxKSA9PT0gQkFDS1NMQVNIKSB7XG4gICAgICAgICAgICBlc2NhcGVQb3MgLT0gMTtcbiAgICAgICAgICAgIGVzY2FwZWQgPSAhZXNjYXBlZDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKGVzY2FwZWQpO1xuICAgICAgICBjdXJyZW50VG9rZW4gPSBbXCJzdHJpbmdcIiwgY3NzLnNsaWNlKHBvcywgbmV4dCArIDEpLCBwb3MsIG5leHRdO1xuICAgICAgICBwb3MgPSBuZXh0O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgQVQ6IHtcbiAgICAgICAgUkVfQVRfRU5ELmxhc3RJbmRleCA9IHBvcyArIDE7XG4gICAgICAgIFJFX0FUX0VORC50ZXN0KGNzcyk7XG4gICAgICAgIGlmIChSRV9BVF9FTkQubGFzdEluZGV4ID09PSAwKSB7XG4gICAgICAgICAgbmV4dCA9IGNzcy5sZW5ndGggLSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5leHQgPSBSRV9BVF9FTkQubGFzdEluZGV4IC0gMjtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50VG9rZW4gPSBbXCJhdC13b3JkXCIsIGNzcy5zbGljZShwb3MsIG5leHQgKyAxKSwgcG9zLCBuZXh0XTtcbiAgICAgICAgcG9zID0gbmV4dDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIEJBQ0tTTEFTSDoge1xuICAgICAgICBuZXh0ID0gcG9zO1xuICAgICAgICBlc2NhcGUgPSB0cnVlO1xuICAgICAgICB3aGlsZSAoY3NzLmNoYXJDb2RlQXQobmV4dCArIDEpID09PSBCQUNLU0xBU0gpIHtcbiAgICAgICAgICBuZXh0ICs9IDE7XG4gICAgICAgICAgZXNjYXBlID0gIWVzY2FwZTtcbiAgICAgICAgfVxuICAgICAgICBjb2RlID0gY3NzLmNoYXJDb2RlQXQobmV4dCArIDEpO1xuICAgICAgICBpZiAoZXNjYXBlICYmIGNvZGUgIT09IFNMQVNIICYmIGNvZGUgIT09IFNQQUNFICYmIGNvZGUgIT09IE5FV0xJTkUgJiYgY29kZSAhPT0gVEFCICYmIGNvZGUgIT09IENSICYmIGNvZGUgIT09IEZFRUQpIHtcbiAgICAgICAgICBuZXh0ICs9IDE7XG4gICAgICAgICAgaWYgKFJFX0hFWF9FU0NBUEUudGVzdChjc3MuY2hhckF0KG5leHQpKSkge1xuICAgICAgICAgICAgd2hpbGUgKFJFX0hFWF9FU0NBUEUudGVzdChjc3MuY2hhckF0KG5leHQgKyAxKSkpIHtcbiAgICAgICAgICAgICAgbmV4dCArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNzcy5jaGFyQ29kZUF0KG5leHQgKyAxKSA9PT0gU1BBQ0UpIHtcbiAgICAgICAgICAgICAgbmV4dCArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50VG9rZW4gPSBbXCJ3b3JkXCIsIGNzcy5zbGljZShwb3MsIG5leHQgKyAxKSwgcG9zLCBuZXh0XTtcbiAgICAgICAgcG9zID0gbmV4dDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGlmIChjb2RlID09PSBTTEFTSCAmJiBjc3MuY2hhckNvZGVBdChwb3MgKyAxKSA9PT0gQVNURVJJU0spIHtcbiAgICAgICAgICBuZXh0ID0gY3NzLmluZGV4T2YoXCIqL1wiLCBwb3MgKyAyKSArIDE7XG4gICAgICAgICAgaWYgKG5leHQgPT09IDApIHtcbiAgICAgICAgICAgIGlmIChpZ25vcmUgfHwgaWdub3JlVW5jbG9zZWQpIHtcbiAgICAgICAgICAgICAgbmV4dCA9IGNzcy5sZW5ndGg7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB1bmNsb3NlZChcImNvbW1lbnRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGN1cnJlbnRUb2tlbiA9IFtcImNvbW1lbnRcIiwgY3NzLnNsaWNlKHBvcywgbmV4dCArIDEpLCBwb3MsIG5leHRdO1xuICAgICAgICAgIHBvcyA9IG5leHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgUkVfV09SRF9FTkQubGFzdEluZGV4ID0gcG9zICsgMTtcbiAgICAgICAgICBSRV9XT1JEX0VORC50ZXN0KGNzcyk7XG4gICAgICAgICAgaWYgKFJFX1dPUkRfRU5ELmxhc3RJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgbmV4dCA9IGNzcy5sZW5ndGggLSAxO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXh0ID0gUkVfV09SRF9FTkQubGFzdEluZGV4IC0gMjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY3VycmVudFRva2VuID0gW1wid29yZFwiLCBjc3Muc2xpY2UocG9zLCBuZXh0ICsgMSksIHBvcywgbmV4dF07XG4gICAgICAgICAgYnVmZmVyLnB1c2goY3VycmVudFRva2VuKTtcbiAgICAgICAgICBwb3MgPSBuZXh0O1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBwb3MrKztcbiAgICByZXR1cm4gY3VycmVudFRva2VuO1xuICB9XG4gIGZ1bmN0aW9uIGJhY2sodG9rZW4pIHtcbiAgICByZXR1cm5lZC5wdXNoKHRva2VuKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGJhY2ssXG4gICAgZW5kT2ZGaWxlLFxuICAgIG5leHRUb2tlbixcbiAgICBwb3NpdGlvblxuICB9O1xufTtcbmxldCBDb250YWluZXIkNSA9IGNvbnRhaW5lcjtcbmxldCBBdFJ1bGUkMyA9IGNsYXNzIEF0UnVsZSBleHRlbmRzIENvbnRhaW5lciQ1IHtcbiAgY29uc3RydWN0b3IoZGVmYXVsdHMpIHtcbiAgICBzdXBlcihkZWZhdWx0cyk7XG4gICAgdGhpcy50eXBlID0gXCJhdHJ1bGVcIjtcbiAgfVxuICBhcHBlbmQoLi4uY2hpbGRyZW4pIHtcbiAgICBpZiAoIXRoaXMucHJveHlPZi5ub2RlcykgdGhpcy5ub2RlcyA9IFtdO1xuICAgIHJldHVybiBzdXBlci5hcHBlbmQoLi4uY2hpbGRyZW4pO1xuICB9XG4gIHByZXBlbmQoLi4uY2hpbGRyZW4pIHtcbiAgICBpZiAoIXRoaXMucHJveHlPZi5ub2RlcykgdGhpcy5ub2RlcyA9IFtdO1xuICAgIHJldHVybiBzdXBlci5wcmVwZW5kKC4uLmNoaWxkcmVuKTtcbiAgfVxufTtcbnZhciBhdFJ1bGUgPSBBdFJ1bGUkMztcbkF0UnVsZSQzLmRlZmF1bHQgPSBBdFJ1bGUkMztcbkNvbnRhaW5lciQ1LnJlZ2lzdGVyQXRSdWxlKEF0UnVsZSQzKTtcbmxldCBDb250YWluZXIkNCA9IGNvbnRhaW5lcjtcbmxldCBMYXp5UmVzdWx0JDMsIFByb2Nlc3NvciQyO1xubGV0IFJvb3QkNSA9IGNsYXNzIFJvb3QgZXh0ZW5kcyBDb250YWluZXIkNCB7XG4gIGNvbnN0cnVjdG9yKGRlZmF1bHRzKSB7XG4gICAgc3VwZXIoZGVmYXVsdHMpO1xuICAgIHRoaXMudHlwZSA9IFwicm9vdFwiO1xuICAgIGlmICghdGhpcy5ub2RlcykgdGhpcy5ub2RlcyA9IFtdO1xuICB9XG4gIG5vcm1hbGl6ZShjaGlsZCwgc2FtcGxlLCB0eXBlKSB7XG4gICAgbGV0IG5vZGVzID0gc3VwZXIubm9ybWFsaXplKGNoaWxkKTtcbiAgICBpZiAoc2FtcGxlKSB7XG4gICAgICBpZiAodHlwZSA9PT0gXCJwcmVwZW5kXCIpIHtcbiAgICAgICAgaWYgKHRoaXMubm9kZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHNhbXBsZS5yYXdzLmJlZm9yZSA9IHRoaXMubm9kZXNbMV0ucmF3cy5iZWZvcmU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVsZXRlIHNhbXBsZS5yYXdzLmJlZm9yZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmZpcnN0ICE9PSBzYW1wbGUpIHtcbiAgICAgICAgZm9yIChsZXQgbm9kZTIgb2Ygbm9kZXMpIHtcbiAgICAgICAgICBub2RlMi5yYXdzLmJlZm9yZSA9IHNhbXBsZS5yYXdzLmJlZm9yZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cbiAgcmVtb3ZlQ2hpbGQoY2hpbGQsIGlnbm9yZSkge1xuICAgIGxldCBpbmRleDIgPSB0aGlzLmluZGV4KGNoaWxkKTtcbiAgICBpZiAoIWlnbm9yZSAmJiBpbmRleDIgPT09IDAgJiYgdGhpcy5ub2Rlcy5sZW5ndGggPiAxKSB7XG4gICAgICB0aGlzLm5vZGVzWzFdLnJhd3MuYmVmb3JlID0gdGhpcy5ub2Rlc1tpbmRleDJdLnJhd3MuYmVmb3JlO1xuICAgIH1cbiAgICByZXR1cm4gc3VwZXIucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICB9XG4gIHRvUmVzdWx0KG9wdHMgPSB7fSkge1xuICAgIGxldCBsYXp5ID0gbmV3IExhenlSZXN1bHQkMyhuZXcgUHJvY2Vzc29yJDIoKSwgdGhpcywgb3B0cyk7XG4gICAgcmV0dXJuIGxhenkuc3RyaW5naWZ5KCk7XG4gIH1cbn07XG5Sb290JDUucmVnaXN0ZXJMYXp5UmVzdWx0ID0gKGRlcGVuZGFudCkgPT4ge1xuICBMYXp5UmVzdWx0JDMgPSBkZXBlbmRhbnQ7XG59O1xuUm9vdCQ1LnJlZ2lzdGVyUHJvY2Vzc29yID0gKGRlcGVuZGFudCkgPT4ge1xuICBQcm9jZXNzb3IkMiA9IGRlcGVuZGFudDtcbn07XG52YXIgcm9vdCA9IFJvb3QkNTtcblJvb3QkNS5kZWZhdWx0ID0gUm9vdCQ1O1xuQ29udGFpbmVyJDQucmVnaXN0ZXJSb290KFJvb3QkNSk7XG5sZXQgbGlzdCQyID0ge1xuICBjb21tYShzdHJpbmcpIHtcbiAgICByZXR1cm4gbGlzdCQyLnNwbGl0KHN0cmluZywgW1wiLFwiXSwgdHJ1ZSk7XG4gIH0sXG4gIHNwYWNlKHN0cmluZykge1xuICAgIGxldCBzcGFjZXMgPSBbXCIgXCIsIFwiXFxuXCIsIFwiXHRcIl07XG4gICAgcmV0dXJuIGxpc3QkMi5zcGxpdChzdHJpbmcsIHNwYWNlcyk7XG4gIH0sXG4gIHNwbGl0KHN0cmluZywgc2VwYXJhdG9ycywgbGFzdCkge1xuICAgIGxldCBhcnJheSA9IFtdO1xuICAgIGxldCBjdXJyZW50ID0gXCJcIjtcbiAgICBsZXQgc3BsaXQgPSBmYWxzZTtcbiAgICBsZXQgZnVuYyA9IDA7XG4gICAgbGV0IGluUXVvdGUgPSBmYWxzZTtcbiAgICBsZXQgcHJldlF1b3RlID0gXCJcIjtcbiAgICBsZXQgZXNjYXBlID0gZmFsc2U7XG4gICAgZm9yIChsZXQgbGV0dGVyIG9mIHN0cmluZykge1xuICAgICAgaWYgKGVzY2FwZSkge1xuICAgICAgICBlc2NhcGUgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAobGV0dGVyID09PSBcIlxcXFxcIikge1xuICAgICAgICBlc2NhcGUgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChpblF1b3RlKSB7XG4gICAgICAgIGlmIChsZXR0ZXIgPT09IHByZXZRdW90ZSkge1xuICAgICAgICAgIGluUXVvdGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChsZXR0ZXIgPT09ICdcIicgfHwgbGV0dGVyID09PSBcIidcIikge1xuICAgICAgICBpblF1b3RlID0gdHJ1ZTtcbiAgICAgICAgcHJldlF1b3RlID0gbGV0dGVyO1xuICAgICAgfSBlbHNlIGlmIChsZXR0ZXIgPT09IFwiKFwiKSB7XG4gICAgICAgIGZ1bmMgKz0gMTtcbiAgICAgIH0gZWxzZSBpZiAobGV0dGVyID09PSBcIilcIikge1xuICAgICAgICBpZiAoZnVuYyA+IDApIGZ1bmMgLT0gMTtcbiAgICAgIH0gZWxzZSBpZiAoZnVuYyA9PT0gMCkge1xuICAgICAgICBpZiAoc2VwYXJhdG9ycy5pbmNsdWRlcyhsZXR0ZXIpKSBzcGxpdCA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoc3BsaXQpIHtcbiAgICAgICAgaWYgKGN1cnJlbnQgIT09IFwiXCIpIGFycmF5LnB1c2goY3VycmVudC50cmltKCkpO1xuICAgICAgICBjdXJyZW50ID0gXCJcIjtcbiAgICAgICAgc3BsaXQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnQgKz0gbGV0dGVyO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobGFzdCB8fCBjdXJyZW50ICE9PSBcIlwiKSBhcnJheS5wdXNoKGN1cnJlbnQudHJpbSgpKTtcbiAgICByZXR1cm4gYXJyYXk7XG4gIH1cbn07XG52YXIgbGlzdF8xID0gbGlzdCQyO1xubGlzdCQyLmRlZmF1bHQgPSBsaXN0JDI7XG5sZXQgQ29udGFpbmVyJDMgPSBjb250YWluZXI7XG5sZXQgbGlzdCQxID0gbGlzdF8xO1xubGV0IFJ1bGUkMyA9IGNsYXNzIFJ1bGUgZXh0ZW5kcyBDb250YWluZXIkMyB7XG4gIGNvbnN0cnVjdG9yKGRlZmF1bHRzKSB7XG4gICAgc3VwZXIoZGVmYXVsdHMpO1xuICAgIHRoaXMudHlwZSA9IFwicnVsZVwiO1xuICAgIGlmICghdGhpcy5ub2RlcykgdGhpcy5ub2RlcyA9IFtdO1xuICB9XG4gIGdldCBzZWxlY3RvcnMoKSB7XG4gICAgcmV0dXJuIGxpc3QkMS5jb21tYSh0aGlzLnNlbGVjdG9yKTtcbiAgfVxuICBzZXQgc2VsZWN0b3JzKHZhbHVlcykge1xuICAgIGxldCBtYXRjaCA9IHRoaXMuc2VsZWN0b3IgPyB0aGlzLnNlbGVjdG9yLm1hdGNoKC8sXFxzKi8pIDogbnVsbDtcbiAgICBsZXQgc2VwMiA9IG1hdGNoID8gbWF0Y2hbMF0gOiBcIixcIiArIHRoaXMucmF3KFwiYmV0d2VlblwiLCBcImJlZm9yZU9wZW5cIik7XG4gICAgdGhpcy5zZWxlY3RvciA9IHZhbHVlcy5qb2luKHNlcDIpO1xuICB9XG59O1xudmFyIHJ1bGUgPSBSdWxlJDM7XG5SdWxlJDMuZGVmYXVsdCA9IFJ1bGUkMztcbkNvbnRhaW5lciQzLnJlZ2lzdGVyUnVsZShSdWxlJDMpO1xubGV0IERlY2xhcmF0aW9uJDIgPSBkZWNsYXJhdGlvbjtcbmxldCB0b2tlbml6ZXIyID0gdG9rZW5pemU7XG5sZXQgQ29tbWVudCQyID0gY29tbWVudDtcbmxldCBBdFJ1bGUkMiA9IGF0UnVsZTtcbmxldCBSb290JDQgPSByb290O1xubGV0IFJ1bGUkMiA9IHJ1bGU7XG5jb25zdCBTQUZFX0NPTU1FTlRfTkVJR0hCT1IgPSB7XG4gIGVtcHR5OiB0cnVlLFxuICBzcGFjZTogdHJ1ZVxufTtcbmZ1bmN0aW9uIGZpbmRMYXN0V2l0aFBvc2l0aW9uKHRva2Vucykge1xuICBmb3IgKGxldCBpID0gdG9rZW5zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgbGV0IHRva2VuID0gdG9rZW5zW2ldO1xuICAgIGxldCBwb3MgPSB0b2tlblszXSB8fCB0b2tlblsyXTtcbiAgICBpZiAocG9zKSByZXR1cm4gcG9zO1xuICB9XG59XG5sZXQgUGFyc2VyJDEgPSBjbGFzcyBQYXJzZXIge1xuICBjb25zdHJ1Y3RvcihpbnB1dDIpIHtcbiAgICB0aGlzLmlucHV0ID0gaW5wdXQyO1xuICAgIHRoaXMucm9vdCA9IG5ldyBSb290JDQoKTtcbiAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLnJvb3Q7XG4gICAgdGhpcy5zcGFjZXMgPSBcIlwiO1xuICAgIHRoaXMuc2VtaWNvbG9uID0gZmFsc2U7XG4gICAgdGhpcy5jcmVhdGVUb2tlbml6ZXIoKTtcbiAgICB0aGlzLnJvb3Quc291cmNlID0geyBpbnB1dDogaW5wdXQyLCBzdGFydDogeyBjb2x1bW46IDEsIGxpbmU6IDEsIG9mZnNldDogMCB9IH07XG4gIH1cbiAgYXRydWxlKHRva2VuKSB7XG4gICAgbGV0IG5vZGUyID0gbmV3IEF0UnVsZSQyKCk7XG4gICAgbm9kZTIubmFtZSA9IHRva2VuWzFdLnNsaWNlKDEpO1xuICAgIGlmIChub2RlMi5uYW1lID09PSBcIlwiKSB7XG4gICAgICB0aGlzLnVubmFtZWRBdHJ1bGUobm9kZTIsIHRva2VuKTtcbiAgICB9XG4gICAgdGhpcy5pbml0KG5vZGUyLCB0b2tlblsyXSk7XG4gICAgbGV0IHR5cGU7XG4gICAgbGV0IHByZXY7XG4gICAgbGV0IHNoaWZ0O1xuICAgIGxldCBsYXN0ID0gZmFsc2U7XG4gICAgbGV0IG9wZW4gPSBmYWxzZTtcbiAgICBsZXQgcGFyYW1zID0gW107XG4gICAgbGV0IGJyYWNrZXRzID0gW107XG4gICAgd2hpbGUgKCF0aGlzLnRva2VuaXplci5lbmRPZkZpbGUoKSkge1xuICAgICAgdG9rZW4gPSB0aGlzLnRva2VuaXplci5uZXh0VG9rZW4oKTtcbiAgICAgIHR5cGUgPSB0b2tlblswXTtcbiAgICAgIGlmICh0eXBlID09PSBcIihcIiB8fCB0eXBlID09PSBcIltcIikge1xuICAgICAgICBicmFja2V0cy5wdXNoKHR5cGUgPT09IFwiKFwiID8gXCIpXCIgOiBcIl1cIik7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwie1wiICYmIGJyYWNrZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYnJhY2tldHMucHVzaChcIn1cIik7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IGJyYWNrZXRzW2JyYWNrZXRzLmxlbmd0aCAtIDFdKSB7XG4gICAgICAgIGJyYWNrZXRzLnBvcCgpO1xuICAgICAgfVxuICAgICAgaWYgKGJyYWNrZXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpZiAodHlwZSA9PT0gXCI7XCIpIHtcbiAgICAgICAgICBub2RlMi5zb3VyY2UuZW5kID0gdGhpcy5nZXRQb3NpdGlvbih0b2tlblsyXSk7XG4gICAgICAgICAgbm9kZTIuc291cmNlLmVuZC5vZmZzZXQrKztcbiAgICAgICAgICB0aGlzLnNlbWljb2xvbiA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICBvcGVuID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcIn1cIikge1xuICAgICAgICAgIGlmIChwYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc2hpZnQgPSBwYXJhbXMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHByZXYgPSBwYXJhbXNbc2hpZnRdO1xuICAgICAgICAgICAgd2hpbGUgKHByZXYgJiYgcHJldlswXSA9PT0gXCJzcGFjZVwiKSB7XG4gICAgICAgICAgICAgIHByZXYgPSBwYXJhbXNbLS1zaGlmdF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJldikge1xuICAgICAgICAgICAgICBub2RlMi5zb3VyY2UuZW5kID0gdGhpcy5nZXRQb3NpdGlvbihwcmV2WzNdIHx8IHByZXZbMl0pO1xuICAgICAgICAgICAgICBub2RlMi5zb3VyY2UuZW5kLm9mZnNldCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmVuZCh0b2tlbik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyYW1zLnB1c2godG9rZW4pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXMucHVzaCh0b2tlbik7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy50b2tlbml6ZXIuZW5kT2ZGaWxlKCkpIHtcbiAgICAgICAgbGFzdCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBub2RlMi5yYXdzLmJldHdlZW4gPSB0aGlzLnNwYWNlc0FuZENvbW1lbnRzRnJvbUVuZChwYXJhbXMpO1xuICAgIGlmIChwYXJhbXMubGVuZ3RoKSB7XG4gICAgICBub2RlMi5yYXdzLmFmdGVyTmFtZSA9IHRoaXMuc3BhY2VzQW5kQ29tbWVudHNGcm9tU3RhcnQocGFyYW1zKTtcbiAgICAgIHRoaXMucmF3KG5vZGUyLCBcInBhcmFtc1wiLCBwYXJhbXMpO1xuICAgICAgaWYgKGxhc3QpIHtcbiAgICAgICAgdG9rZW4gPSBwYXJhbXNbcGFyYW1zLmxlbmd0aCAtIDFdO1xuICAgICAgICBub2RlMi5zb3VyY2UuZW5kID0gdGhpcy5nZXRQb3NpdGlvbih0b2tlblszXSB8fCB0b2tlblsyXSk7XG4gICAgICAgIG5vZGUyLnNvdXJjZS5lbmQub2Zmc2V0Kys7XG4gICAgICAgIHRoaXMuc3BhY2VzID0gbm9kZTIucmF3cy5iZXR3ZWVuO1xuICAgICAgICBub2RlMi5yYXdzLmJldHdlZW4gPSBcIlwiO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBub2RlMi5yYXdzLmFmdGVyTmFtZSA9IFwiXCI7XG4gICAgICBub2RlMi5wYXJhbXMgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAob3Blbikge1xuICAgICAgbm9kZTIubm9kZXMgPSBbXTtcbiAgICAgIHRoaXMuY3VycmVudCA9IG5vZGUyO1xuICAgIH1cbiAgfVxuICBjaGVja01pc3NlZFNlbWljb2xvbih0b2tlbnMpIHtcbiAgICBsZXQgY29sb24gPSB0aGlzLmNvbG9uKHRva2Vucyk7XG4gICAgaWYgKGNvbG9uID09PSBmYWxzZSkgcmV0dXJuO1xuICAgIGxldCBmb3VuZGVkID0gMDtcbiAgICBsZXQgdG9rZW47XG4gICAgZm9yIChsZXQgaiA9IGNvbG9uIC0gMTsgaiA+PSAwOyBqLS0pIHtcbiAgICAgIHRva2VuID0gdG9rZW5zW2pdO1xuICAgICAgaWYgKHRva2VuWzBdICE9PSBcInNwYWNlXCIpIHtcbiAgICAgICAgZm91bmRlZCArPSAxO1xuICAgICAgICBpZiAoZm91bmRlZCA9PT0gMikgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHRocm93IHRoaXMuaW5wdXQuZXJyb3IoXG4gICAgICBcIk1pc3NlZCBzZW1pY29sb25cIixcbiAgICAgIHRva2VuWzBdID09PSBcIndvcmRcIiA/IHRva2VuWzNdICsgMSA6IHRva2VuWzJdXG4gICAgKTtcbiAgfVxuICBjb2xvbih0b2tlbnMpIHtcbiAgICBsZXQgYnJhY2tldHMgPSAwO1xuICAgIGxldCB0b2tlbiwgdHlwZSwgcHJldjtcbiAgICBmb3IgKGxldCBbaSwgZWxlbWVudF0gb2YgdG9rZW5zLmVudHJpZXMoKSkge1xuICAgICAgdG9rZW4gPSBlbGVtZW50O1xuICAgICAgdHlwZSA9IHRva2VuWzBdO1xuICAgICAgaWYgKHR5cGUgPT09IFwiKFwiKSB7XG4gICAgICAgIGJyYWNrZXRzICs9IDE7XG4gICAgICB9XG4gICAgICBpZiAodHlwZSA9PT0gXCIpXCIpIHtcbiAgICAgICAgYnJhY2tldHMgLT0gMTtcbiAgICAgIH1cbiAgICAgIGlmIChicmFja2V0cyA9PT0gMCAmJiB0eXBlID09PSBcIjpcIikge1xuICAgICAgICBpZiAoIXByZXYpIHtcbiAgICAgICAgICB0aGlzLmRvdWJsZUNvbG9uKHRva2VuKTtcbiAgICAgICAgfSBlbHNlIGlmIChwcmV2WzBdID09PSBcIndvcmRcIiAmJiBwcmV2WzFdID09PSBcInByb2dpZFwiKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHByZXYgPSB0b2tlbjtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbW1lbnQodG9rZW4pIHtcbiAgICBsZXQgbm9kZTIgPSBuZXcgQ29tbWVudCQyKCk7XG4gICAgdGhpcy5pbml0KG5vZGUyLCB0b2tlblsyXSk7XG4gICAgbm9kZTIuc291cmNlLmVuZCA9IHRoaXMuZ2V0UG9zaXRpb24odG9rZW5bM10gfHwgdG9rZW5bMl0pO1xuICAgIG5vZGUyLnNvdXJjZS5lbmQub2Zmc2V0Kys7XG4gICAgbGV0IHRleHQgPSB0b2tlblsxXS5zbGljZSgyLCAtMik7XG4gICAgaWYgKC9eXFxzKiQvLnRlc3QodGV4dCkpIHtcbiAgICAgIG5vZGUyLnRleHQgPSBcIlwiO1xuICAgICAgbm9kZTIucmF3cy5sZWZ0ID0gdGV4dDtcbiAgICAgIG5vZGUyLnJhd3MucmlnaHQgPSBcIlwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgbWF0Y2ggPSB0ZXh0Lm1hdGNoKC9eKFxccyopKFteXSpcXFMpKFxccyopJC8pO1xuICAgICAgbm9kZTIudGV4dCA9IG1hdGNoWzJdO1xuICAgICAgbm9kZTIucmF3cy5sZWZ0ID0gbWF0Y2hbMV07XG4gICAgICBub2RlMi5yYXdzLnJpZ2h0ID0gbWF0Y2hbM107XG4gICAgfVxuICB9XG4gIGNyZWF0ZVRva2VuaXplcigpIHtcbiAgICB0aGlzLnRva2VuaXplciA9IHRva2VuaXplcjIodGhpcy5pbnB1dCk7XG4gIH1cbiAgZGVjbCh0b2tlbnMsIGN1c3RvbVByb3BlcnR5KSB7XG4gICAgbGV0IG5vZGUyID0gbmV3IERlY2xhcmF0aW9uJDIoKTtcbiAgICB0aGlzLmluaXQobm9kZTIsIHRva2Vuc1swXVsyXSk7XG4gICAgbGV0IGxhc3QgPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgIGlmIChsYXN0WzBdID09PSBcIjtcIikge1xuICAgICAgdGhpcy5zZW1pY29sb24gPSB0cnVlO1xuICAgICAgdG9rZW5zLnBvcCgpO1xuICAgIH1cbiAgICBub2RlMi5zb3VyY2UuZW5kID0gdGhpcy5nZXRQb3NpdGlvbihcbiAgICAgIGxhc3RbM10gfHwgbGFzdFsyXSB8fCBmaW5kTGFzdFdpdGhQb3NpdGlvbih0b2tlbnMpXG4gICAgKTtcbiAgICBub2RlMi5zb3VyY2UuZW5kLm9mZnNldCsrO1xuICAgIHdoaWxlICh0b2tlbnNbMF1bMF0gIT09IFwid29yZFwiKSB7XG4gICAgICBpZiAodG9rZW5zLmxlbmd0aCA9PT0gMSkgdGhpcy51bmtub3duV29yZCh0b2tlbnMpO1xuICAgICAgbm9kZTIucmF3cy5iZWZvcmUgKz0gdG9rZW5zLnNoaWZ0KClbMV07XG4gICAgfVxuICAgIG5vZGUyLnNvdXJjZS5zdGFydCA9IHRoaXMuZ2V0UG9zaXRpb24odG9rZW5zWzBdWzJdKTtcbiAgICBub2RlMi5wcm9wID0gXCJcIjtcbiAgICB3aGlsZSAodG9rZW5zLmxlbmd0aCkge1xuICAgICAgbGV0IHR5cGUgPSB0b2tlbnNbMF1bMF07XG4gICAgICBpZiAodHlwZSA9PT0gXCI6XCIgfHwgdHlwZSA9PT0gXCJzcGFjZVwiIHx8IHR5cGUgPT09IFwiY29tbWVudFwiKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgbm9kZTIucHJvcCArPSB0b2tlbnMuc2hpZnQoKVsxXTtcbiAgICB9XG4gICAgbm9kZTIucmF3cy5iZXR3ZWVuID0gXCJcIjtcbiAgICBsZXQgdG9rZW47XG4gICAgd2hpbGUgKHRva2Vucy5sZW5ndGgpIHtcbiAgICAgIHRva2VuID0gdG9rZW5zLnNoaWZ0KCk7XG4gICAgICBpZiAodG9rZW5bMF0gPT09IFwiOlwiKSB7XG4gICAgICAgIG5vZGUyLnJhd3MuYmV0d2VlbiArPSB0b2tlblsxXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodG9rZW5bMF0gPT09IFwid29yZFwiICYmIC9cXHcvLnRlc3QodG9rZW5bMV0pKSB7XG4gICAgICAgICAgdGhpcy51bmtub3duV29yZChbdG9rZW5dKTtcbiAgICAgICAgfVxuICAgICAgICBub2RlMi5yYXdzLmJldHdlZW4gKz0gdG9rZW5bMV07XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChub2RlMi5wcm9wWzBdID09PSBcIl9cIiB8fCBub2RlMi5wcm9wWzBdID09PSBcIipcIikge1xuICAgICAgbm9kZTIucmF3cy5iZWZvcmUgKz0gbm9kZTIucHJvcFswXTtcbiAgICAgIG5vZGUyLnByb3AgPSBub2RlMi5wcm9wLnNsaWNlKDEpO1xuICAgIH1cbiAgICBsZXQgZmlyc3RTcGFjZXMgPSBbXTtcbiAgICBsZXQgbmV4dDtcbiAgICB3aGlsZSAodG9rZW5zLmxlbmd0aCkge1xuICAgICAgbmV4dCA9IHRva2Vuc1swXVswXTtcbiAgICAgIGlmIChuZXh0ICE9PSBcInNwYWNlXCIgJiYgbmV4dCAhPT0gXCJjb21tZW50XCIpIGJyZWFrO1xuICAgICAgZmlyc3RTcGFjZXMucHVzaCh0b2tlbnMuc2hpZnQoKSk7XG4gICAgfVxuICAgIHRoaXMucHJlY2hlY2tNaXNzZWRTZW1pY29sb24odG9rZW5zKTtcbiAgICBmb3IgKGxldCBpID0gdG9rZW5zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgIGlmICh0b2tlblsxXS50b0xvd2VyQ2FzZSgpID09PSBcIiFpbXBvcnRhbnRcIikge1xuICAgICAgICBub2RlMi5pbXBvcnRhbnQgPSB0cnVlO1xuICAgICAgICBsZXQgc3RyaW5nID0gdGhpcy5zdHJpbmdGcm9tKHRva2VucywgaSk7XG4gICAgICAgIHN0cmluZyA9IHRoaXMuc3BhY2VzRnJvbUVuZCh0b2tlbnMpICsgc3RyaW5nO1xuICAgICAgICBpZiAoc3RyaW5nICE9PSBcIiAhaW1wb3J0YW50XCIpIG5vZGUyLnJhd3MuaW1wb3J0YW50ID0gc3RyaW5nO1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSBpZiAodG9rZW5bMV0udG9Mb3dlckNhc2UoKSA9PT0gXCJpbXBvcnRhbnRcIikge1xuICAgICAgICBsZXQgY2FjaGUgPSB0b2tlbnMuc2xpY2UoMCk7XG4gICAgICAgIGxldCBzdHIgPSBcIlwiO1xuICAgICAgICBmb3IgKGxldCBqID0gaTsgaiA+IDA7IGotLSkge1xuICAgICAgICAgIGxldCB0eXBlID0gY2FjaGVbal1bMF07XG4gICAgICAgICAgaWYgKHN0ci50cmltKCkuaW5kZXhPZihcIiFcIikgPT09IDAgJiYgdHlwZSAhPT0gXCJzcGFjZVwiKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgc3RyID0gY2FjaGUucG9wKClbMV0gKyBzdHI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0ci50cmltKCkuaW5kZXhPZihcIiFcIikgPT09IDApIHtcbiAgICAgICAgICBub2RlMi5pbXBvcnRhbnQgPSB0cnVlO1xuICAgICAgICAgIG5vZGUyLnJhd3MuaW1wb3J0YW50ID0gc3RyO1xuICAgICAgICAgIHRva2VucyA9IGNhY2hlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodG9rZW5bMF0gIT09IFwic3BhY2VcIiAmJiB0b2tlblswXSAhPT0gXCJjb21tZW50XCIpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBoYXNXb3JkID0gdG9rZW5zLnNvbWUoKGkpID0+IGlbMF0gIT09IFwic3BhY2VcIiAmJiBpWzBdICE9PSBcImNvbW1lbnRcIik7XG4gICAgaWYgKGhhc1dvcmQpIHtcbiAgICAgIG5vZGUyLnJhd3MuYmV0d2VlbiArPSBmaXJzdFNwYWNlcy5tYXAoKGkpID0+IGlbMV0pLmpvaW4oXCJcIik7XG4gICAgICBmaXJzdFNwYWNlcyA9IFtdO1xuICAgIH1cbiAgICB0aGlzLnJhdyhub2RlMiwgXCJ2YWx1ZVwiLCBmaXJzdFNwYWNlcy5jb25jYXQodG9rZW5zKSwgY3VzdG9tUHJvcGVydHkpO1xuICAgIGlmIChub2RlMi52YWx1ZS5pbmNsdWRlcyhcIjpcIikgJiYgIWN1c3RvbVByb3BlcnR5KSB7XG4gICAgICB0aGlzLmNoZWNrTWlzc2VkU2VtaWNvbG9uKHRva2Vucyk7XG4gICAgfVxuICB9XG4gIGRvdWJsZUNvbG9uKHRva2VuKSB7XG4gICAgdGhyb3cgdGhpcy5pbnB1dC5lcnJvcihcbiAgICAgIFwiRG91YmxlIGNvbG9uXCIsXG4gICAgICB7IG9mZnNldDogdG9rZW5bMl0gfSxcbiAgICAgIHsgb2Zmc2V0OiB0b2tlblsyXSArIHRva2VuWzFdLmxlbmd0aCB9XG4gICAgKTtcbiAgfVxuICBlbXB0eVJ1bGUodG9rZW4pIHtcbiAgICBsZXQgbm9kZTIgPSBuZXcgUnVsZSQyKCk7XG4gICAgdGhpcy5pbml0KG5vZGUyLCB0b2tlblsyXSk7XG4gICAgbm9kZTIuc2VsZWN0b3IgPSBcIlwiO1xuICAgIG5vZGUyLnJhd3MuYmV0d2VlbiA9IFwiXCI7XG4gICAgdGhpcy5jdXJyZW50ID0gbm9kZTI7XG4gIH1cbiAgZW5kKHRva2VuKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudC5ub2RlcyAmJiB0aGlzLmN1cnJlbnQubm9kZXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmN1cnJlbnQucmF3cy5zZW1pY29sb24gPSB0aGlzLnNlbWljb2xvbjtcbiAgICB9XG4gICAgdGhpcy5zZW1pY29sb24gPSBmYWxzZTtcbiAgICB0aGlzLmN1cnJlbnQucmF3cy5hZnRlciA9ICh0aGlzLmN1cnJlbnQucmF3cy5hZnRlciB8fCBcIlwiKSArIHRoaXMuc3BhY2VzO1xuICAgIHRoaXMuc3BhY2VzID0gXCJcIjtcbiAgICBpZiAodGhpcy5jdXJyZW50LnBhcmVudCkge1xuICAgICAgdGhpcy5jdXJyZW50LnNvdXJjZS5lbmQgPSB0aGlzLmdldFBvc2l0aW9uKHRva2VuWzJdKTtcbiAgICAgIHRoaXMuY3VycmVudC5zb3VyY2UuZW5kLm9mZnNldCsrO1xuICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5jdXJyZW50LnBhcmVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51bmV4cGVjdGVkQ2xvc2UodG9rZW4pO1xuICAgIH1cbiAgfVxuICBlbmRGaWxlKCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnQucGFyZW50KSB0aGlzLnVuY2xvc2VkQmxvY2soKTtcbiAgICBpZiAodGhpcy5jdXJyZW50Lm5vZGVzICYmIHRoaXMuY3VycmVudC5ub2Rlcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuY3VycmVudC5yYXdzLnNlbWljb2xvbiA9IHRoaXMuc2VtaWNvbG9uO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnQucmF3cy5hZnRlciA9ICh0aGlzLmN1cnJlbnQucmF3cy5hZnRlciB8fCBcIlwiKSArIHRoaXMuc3BhY2VzO1xuICAgIHRoaXMucm9vdC5zb3VyY2UuZW5kID0gdGhpcy5nZXRQb3NpdGlvbih0aGlzLnRva2VuaXplci5wb3NpdGlvbigpKTtcbiAgfVxuICBmcmVlU2VtaWNvbG9uKHRva2VuKSB7XG4gICAgdGhpcy5zcGFjZXMgKz0gdG9rZW5bMV07XG4gICAgaWYgKHRoaXMuY3VycmVudC5ub2Rlcykge1xuICAgICAgbGV0IHByZXYgPSB0aGlzLmN1cnJlbnQubm9kZXNbdGhpcy5jdXJyZW50Lm5vZGVzLmxlbmd0aCAtIDFdO1xuICAgICAgaWYgKHByZXYgJiYgcHJldi50eXBlID09PSBcInJ1bGVcIiAmJiAhcHJldi5yYXdzLm93blNlbWljb2xvbikge1xuICAgICAgICBwcmV2LnJhd3Mub3duU2VtaWNvbG9uID0gdGhpcy5zcGFjZXM7XG4gICAgICAgIHRoaXMuc3BhY2VzID0gXCJcIjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gSGVscGVyc1xuICBnZXRQb3NpdGlvbihvZmZzZXQpIHtcbiAgICBsZXQgcG9zID0gdGhpcy5pbnB1dC5mcm9tT2Zmc2V0KG9mZnNldCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbHVtbjogcG9zLmNvbCxcbiAgICAgIGxpbmU6IHBvcy5saW5lLFxuICAgICAgb2Zmc2V0XG4gICAgfTtcbiAgfVxuICBpbml0KG5vZGUyLCBvZmZzZXQpIHtcbiAgICB0aGlzLmN1cnJlbnQucHVzaChub2RlMik7XG4gICAgbm9kZTIuc291cmNlID0ge1xuICAgICAgaW5wdXQ6IHRoaXMuaW5wdXQsXG4gICAgICBzdGFydDogdGhpcy5nZXRQb3NpdGlvbihvZmZzZXQpXG4gICAgfTtcbiAgICBub2RlMi5yYXdzLmJlZm9yZSA9IHRoaXMuc3BhY2VzO1xuICAgIHRoaXMuc3BhY2VzID0gXCJcIjtcbiAgICBpZiAobm9kZTIudHlwZSAhPT0gXCJjb21tZW50XCIpIHRoaXMuc2VtaWNvbG9uID0gZmFsc2U7XG4gIH1cbiAgb3RoZXIoc3RhcnQpIHtcbiAgICBsZXQgZW5kID0gZmFsc2U7XG4gICAgbGV0IHR5cGUgPSBudWxsO1xuICAgIGxldCBjb2xvbiA9IGZhbHNlO1xuICAgIGxldCBicmFja2V0ID0gbnVsbDtcbiAgICBsZXQgYnJhY2tldHMgPSBbXTtcbiAgICBsZXQgY3VzdG9tUHJvcGVydHkgPSBzdGFydFsxXS5zdGFydHNXaXRoKFwiLS1cIik7XG4gICAgbGV0IHRva2VucyA9IFtdO1xuICAgIGxldCB0b2tlbiA9IHN0YXJ0O1xuICAgIHdoaWxlICh0b2tlbikge1xuICAgICAgdHlwZSA9IHRva2VuWzBdO1xuICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgaWYgKHR5cGUgPT09IFwiKFwiIHx8IHR5cGUgPT09IFwiW1wiKSB7XG4gICAgICAgIGlmICghYnJhY2tldCkgYnJhY2tldCA9IHRva2VuO1xuICAgICAgICBicmFja2V0cy5wdXNoKHR5cGUgPT09IFwiKFwiID8gXCIpXCIgOiBcIl1cIik7XG4gICAgICB9IGVsc2UgaWYgKGN1c3RvbVByb3BlcnR5ICYmIGNvbG9uICYmIHR5cGUgPT09IFwie1wiKSB7XG4gICAgICAgIGlmICghYnJhY2tldCkgYnJhY2tldCA9IHRva2VuO1xuICAgICAgICBicmFja2V0cy5wdXNoKFwifVwiKTtcbiAgICAgIH0gZWxzZSBpZiAoYnJhY2tldHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGlmICh0eXBlID09PSBcIjtcIikge1xuICAgICAgICAgIGlmIChjb2xvbikge1xuICAgICAgICAgICAgdGhpcy5kZWNsKHRva2VucywgY3VzdG9tUHJvcGVydHkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICB0aGlzLnJ1bGUodG9rZW5zKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICB0aGlzLnRva2VuaXplci5iYWNrKHRva2Vucy5wb3AoKSk7XG4gICAgICAgICAgZW5kID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcIjpcIikge1xuICAgICAgICAgIGNvbG9uID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBicmFja2V0c1ticmFja2V0cy5sZW5ndGggLSAxXSkge1xuICAgICAgICBicmFja2V0cy5wb3AoKTtcbiAgICAgICAgaWYgKGJyYWNrZXRzLmxlbmd0aCA9PT0gMCkgYnJhY2tldCA9IG51bGw7XG4gICAgICB9XG4gICAgICB0b2tlbiA9IHRoaXMudG9rZW5pemVyLm5leHRUb2tlbigpO1xuICAgIH1cbiAgICBpZiAodGhpcy50b2tlbml6ZXIuZW5kT2ZGaWxlKCkpIGVuZCA9IHRydWU7XG4gICAgaWYgKGJyYWNrZXRzLmxlbmd0aCA+IDApIHRoaXMudW5jbG9zZWRCcmFja2V0KGJyYWNrZXQpO1xuICAgIGlmIChlbmQgJiYgY29sb24pIHtcbiAgICAgIGlmICghY3VzdG9tUHJvcGVydHkpIHtcbiAgICAgICAgd2hpbGUgKHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgICB0b2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV1bMF07XG4gICAgICAgICAgaWYgKHRva2VuICE9PSBcInNwYWNlXCIgJiYgdG9rZW4gIT09IFwiY29tbWVudFwiKSBicmVhaztcbiAgICAgICAgICB0aGlzLnRva2VuaXplci5iYWNrKHRva2Vucy5wb3AoKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuZGVjbCh0b2tlbnMsIGN1c3RvbVByb3BlcnR5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51bmtub3duV29yZCh0b2tlbnMpO1xuICAgIH1cbiAgfVxuICBwYXJzZSgpIHtcbiAgICBsZXQgdG9rZW47XG4gICAgd2hpbGUgKCF0aGlzLnRva2VuaXplci5lbmRPZkZpbGUoKSkge1xuICAgICAgdG9rZW4gPSB0aGlzLnRva2VuaXplci5uZXh0VG9rZW4oKTtcbiAgICAgIHN3aXRjaCAodG9rZW5bMF0pIHtcbiAgICAgICAgY2FzZSBcInNwYWNlXCI6XG4gICAgICAgICAgdGhpcy5zcGFjZXMgKz0gdG9rZW5bMV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI7XCI6XG4gICAgICAgICAgdGhpcy5mcmVlU2VtaWNvbG9uKHRva2VuKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIn1cIjpcbiAgICAgICAgICB0aGlzLmVuZCh0b2tlbik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJjb21tZW50XCI6XG4gICAgICAgICAgdGhpcy5jb21tZW50KHRva2VuKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImF0LXdvcmRcIjpcbiAgICAgICAgICB0aGlzLmF0cnVsZSh0b2tlbik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJ7XCI6XG4gICAgICAgICAgdGhpcy5lbXB0eVJ1bGUodG9rZW4pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRoaXMub3RoZXIodG9rZW4pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmVuZEZpbGUoKTtcbiAgfVxuICBwcmVjaGVja01pc3NlZFNlbWljb2xvbigpIHtcbiAgfVxuICByYXcobm9kZTIsIHByb3AsIHRva2VucywgY3VzdG9tUHJvcGVydHkpIHtcbiAgICBsZXQgdG9rZW4sIHR5cGU7XG4gICAgbGV0IGxlbmd0aCA9IHRva2Vucy5sZW5ndGg7XG4gICAgbGV0IHZhbHVlID0gXCJcIjtcbiAgICBsZXQgY2xlYW4gPSB0cnVlO1xuICAgIGxldCBuZXh0LCBwcmV2O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgdHlwZSA9IHRva2VuWzBdO1xuICAgICAgaWYgKHR5cGUgPT09IFwic3BhY2VcIiAmJiBpID09PSBsZW5ndGggLSAxICYmICFjdXN0b21Qcm9wZXJ0eSkge1xuICAgICAgICBjbGVhbiA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcImNvbW1lbnRcIikge1xuICAgICAgICBwcmV2ID0gdG9rZW5zW2kgLSAxXSA/IHRva2Vuc1tpIC0gMV1bMF0gOiBcImVtcHR5XCI7XG4gICAgICAgIG5leHQgPSB0b2tlbnNbaSArIDFdID8gdG9rZW5zW2kgKyAxXVswXSA6IFwiZW1wdHlcIjtcbiAgICAgICAgaWYgKCFTQUZFX0NPTU1FTlRfTkVJR0hCT1JbcHJldl0gJiYgIVNBRkVfQ09NTUVOVF9ORUlHSEJPUltuZXh0XSkge1xuICAgICAgICAgIGlmICh2YWx1ZS5zbGljZSgtMSkgPT09IFwiLFwiKSB7XG4gICAgICAgICAgICBjbGVhbiA9IGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZSArPSB0b2tlblsxXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2xlYW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgKz0gdG9rZW5bMV07XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghY2xlYW4pIHtcbiAgICAgIGxldCByYXcgPSB0b2tlbnMucmVkdWNlKChhbGwsIGkpID0+IGFsbCArIGlbMV0sIFwiXCIpO1xuICAgICAgbm9kZTIucmF3c1twcm9wXSA9IHsgcmF3LCB2YWx1ZSB9O1xuICAgIH1cbiAgICBub2RlMltwcm9wXSA9IHZhbHVlO1xuICB9XG4gIHJ1bGUodG9rZW5zKSB7XG4gICAgdG9rZW5zLnBvcCgpO1xuICAgIGxldCBub2RlMiA9IG5ldyBSdWxlJDIoKTtcbiAgICB0aGlzLmluaXQobm9kZTIsIHRva2Vuc1swXVsyXSk7XG4gICAgbm9kZTIucmF3cy5iZXR3ZWVuID0gdGhpcy5zcGFjZXNBbmRDb21tZW50c0Zyb21FbmQodG9rZW5zKTtcbiAgICB0aGlzLnJhdyhub2RlMiwgXCJzZWxlY3RvclwiLCB0b2tlbnMpO1xuICAgIHRoaXMuY3VycmVudCA9IG5vZGUyO1xuICB9XG4gIHNwYWNlc0FuZENvbW1lbnRzRnJvbUVuZCh0b2tlbnMpIHtcbiAgICBsZXQgbGFzdFRva2VuVHlwZTtcbiAgICBsZXQgc3BhY2VzID0gXCJcIjtcbiAgICB3aGlsZSAodG9rZW5zLmxlbmd0aCkge1xuICAgICAgbGFzdFRva2VuVHlwZSA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV1bMF07XG4gICAgICBpZiAobGFzdFRva2VuVHlwZSAhPT0gXCJzcGFjZVwiICYmIGxhc3RUb2tlblR5cGUgIT09IFwiY29tbWVudFwiKSBicmVhaztcbiAgICAgIHNwYWNlcyA9IHRva2Vucy5wb3AoKVsxXSArIHNwYWNlcztcbiAgICB9XG4gICAgcmV0dXJuIHNwYWNlcztcbiAgfVxuICAvLyBFcnJvcnNcbiAgc3BhY2VzQW5kQ29tbWVudHNGcm9tU3RhcnQodG9rZW5zKSB7XG4gICAgbGV0IG5leHQ7XG4gICAgbGV0IHNwYWNlcyA9IFwiXCI7XG4gICAgd2hpbGUgKHRva2Vucy5sZW5ndGgpIHtcbiAgICAgIG5leHQgPSB0b2tlbnNbMF1bMF07XG4gICAgICBpZiAobmV4dCAhPT0gXCJzcGFjZVwiICYmIG5leHQgIT09IFwiY29tbWVudFwiKSBicmVhaztcbiAgICAgIHNwYWNlcyArPSB0b2tlbnMuc2hpZnQoKVsxXTtcbiAgICB9XG4gICAgcmV0dXJuIHNwYWNlcztcbiAgfVxuICBzcGFjZXNGcm9tRW5kKHRva2Vucykge1xuICAgIGxldCBsYXN0VG9rZW5UeXBlO1xuICAgIGxldCBzcGFjZXMgPSBcIlwiO1xuICAgIHdoaWxlICh0b2tlbnMubGVuZ3RoKSB7XG4gICAgICBsYXN0VG9rZW5UeXBlID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXVswXTtcbiAgICAgIGlmIChsYXN0VG9rZW5UeXBlICE9PSBcInNwYWNlXCIpIGJyZWFrO1xuICAgICAgc3BhY2VzID0gdG9rZW5zLnBvcCgpWzFdICsgc3BhY2VzO1xuICAgIH1cbiAgICByZXR1cm4gc3BhY2VzO1xuICB9XG4gIHN0cmluZ0Zyb20odG9rZW5zLCBmcm9tKSB7XG4gICAgbGV0IHJlc3VsdDIgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgPSBmcm9tOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXN1bHQyICs9IHRva2Vuc1tpXVsxXTtcbiAgICB9XG4gICAgdG9rZW5zLnNwbGljZShmcm9tLCB0b2tlbnMubGVuZ3RoIC0gZnJvbSk7XG4gICAgcmV0dXJuIHJlc3VsdDI7XG4gIH1cbiAgdW5jbG9zZWRCbG9jaygpIHtcbiAgICBsZXQgcG9zID0gdGhpcy5jdXJyZW50LnNvdXJjZS5zdGFydDtcbiAgICB0aHJvdyB0aGlzLmlucHV0LmVycm9yKFwiVW5jbG9zZWQgYmxvY2tcIiwgcG9zLmxpbmUsIHBvcy5jb2x1bW4pO1xuICB9XG4gIHVuY2xvc2VkQnJhY2tldChicmFja2V0KSB7XG4gICAgdGhyb3cgdGhpcy5pbnB1dC5lcnJvcihcbiAgICAgIFwiVW5jbG9zZWQgYnJhY2tldFwiLFxuICAgICAgeyBvZmZzZXQ6IGJyYWNrZXRbMl0gfSxcbiAgICAgIHsgb2Zmc2V0OiBicmFja2V0WzJdICsgMSB9XG4gICAgKTtcbiAgfVxuICB1bmV4cGVjdGVkQ2xvc2UodG9rZW4pIHtcbiAgICB0aHJvdyB0aGlzLmlucHV0LmVycm9yKFxuICAgICAgXCJVbmV4cGVjdGVkIH1cIixcbiAgICAgIHsgb2Zmc2V0OiB0b2tlblsyXSB9LFxuICAgICAgeyBvZmZzZXQ6IHRva2VuWzJdICsgMSB9XG4gICAgKTtcbiAgfVxuICB1bmtub3duV29yZCh0b2tlbnMpIHtcbiAgICB0aHJvdyB0aGlzLmlucHV0LmVycm9yKFxuICAgICAgXCJVbmtub3duIHdvcmRcIixcbiAgICAgIHsgb2Zmc2V0OiB0b2tlbnNbMF1bMl0gfSxcbiAgICAgIHsgb2Zmc2V0OiB0b2tlbnNbMF1bMl0gKyB0b2tlbnNbMF1bMV0ubGVuZ3RoIH1cbiAgICApO1xuICB9XG4gIHVubmFtZWRBdHJ1bGUobm9kZTIsIHRva2VuKSB7XG4gICAgdGhyb3cgdGhpcy5pbnB1dC5lcnJvcihcbiAgICAgIFwiQXQtcnVsZSB3aXRob3V0IG5hbWVcIixcbiAgICAgIHsgb2Zmc2V0OiB0b2tlblsyXSB9LFxuICAgICAgeyBvZmZzZXQ6IHRva2VuWzJdICsgdG9rZW5bMV0ubGVuZ3RoIH1cbiAgICApO1xuICB9XG59O1xudmFyIHBhcnNlciA9IFBhcnNlciQxO1xubGV0IENvbnRhaW5lciQyID0gY29udGFpbmVyO1xubGV0IFBhcnNlcjIgPSBwYXJzZXI7XG5sZXQgSW5wdXQkMiA9IGlucHV0O1xuZnVuY3Rpb24gcGFyc2UkMyhjc3MsIG9wdHMpIHtcbiAgbGV0IGlucHV0MiA9IG5ldyBJbnB1dCQyKGNzcywgb3B0cyk7XG4gIGxldCBwYXJzZXIyID0gbmV3IFBhcnNlcjIoaW5wdXQyKTtcbiAgdHJ5IHtcbiAgICBwYXJzZXIyLnBhcnNlKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBpZiAoZS5uYW1lID09PSBcIkNzc1N5bnRheEVycm9yXCIgJiYgb3B0cyAmJiBvcHRzLmZyb20pIHtcbiAgICAgICAgaWYgKC9cXC5zY3NzJC9pLnRlc3Qob3B0cy5mcm9tKSkge1xuICAgICAgICAgIGUubWVzc2FnZSArPSBcIlxcbllvdSB0cmllZCB0byBwYXJzZSBTQ1NTIHdpdGggdGhlIHN0YW5kYXJkIENTUyBwYXJzZXI7IHRyeSBhZ2FpbiB3aXRoIHRoZSBwb3N0Y3NzLXNjc3MgcGFyc2VyXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoL1xcLnNhc3MvaS50ZXN0KG9wdHMuZnJvbSkpIHtcbiAgICAgICAgICBlLm1lc3NhZ2UgKz0gXCJcXG5Zb3UgdHJpZWQgdG8gcGFyc2UgU2FzcyB3aXRoIHRoZSBzdGFuZGFyZCBDU1MgcGFyc2VyOyB0cnkgYWdhaW4gd2l0aCB0aGUgcG9zdGNzcy1zYXNzIHBhcnNlclwiO1xuICAgICAgICB9IGVsc2UgaWYgKC9cXC5sZXNzJC9pLnRlc3Qob3B0cy5mcm9tKSkge1xuICAgICAgICAgIGUubWVzc2FnZSArPSBcIlxcbllvdSB0cmllZCB0byBwYXJzZSBMZXNzIHdpdGggdGhlIHN0YW5kYXJkIENTUyBwYXJzZXI7IHRyeSBhZ2FpbiB3aXRoIHRoZSBwb3N0Y3NzLWxlc3MgcGFyc2VyXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cgZTtcbiAgfVxuICByZXR1cm4gcGFyc2VyMi5yb290O1xufVxudmFyIHBhcnNlXzEgPSBwYXJzZSQzO1xucGFyc2UkMy5kZWZhdWx0ID0gcGFyc2UkMztcbkNvbnRhaW5lciQyLnJlZ2lzdGVyUGFyc2UocGFyc2UkMyk7XG5sZXQgeyBpc0NsZWFuLCBteSB9ID0gc3ltYm9scztcbmxldCBNYXBHZW5lcmF0b3IkMSA9IG1hcEdlbmVyYXRvcjtcbmxldCBzdHJpbmdpZnkkMiA9IHN0cmluZ2lmeV8xO1xubGV0IENvbnRhaW5lciQxID0gY29udGFpbmVyO1xubGV0IERvY3VtZW50JDIgPSBkb2N1bWVudCQxO1xubGV0IHdhcm5PbmNlJDEgPSB3YXJuT25jZSQyO1xubGV0IFJlc3VsdCQyID0gcmVzdWx0O1xubGV0IHBhcnNlJDIgPSBwYXJzZV8xO1xubGV0IFJvb3QkMyA9IHJvb3Q7XG5jb25zdCBUWVBFX1RPX0NMQVNTX05BTUUgPSB7XG4gIGF0cnVsZTogXCJBdFJ1bGVcIixcbiAgY29tbWVudDogXCJDb21tZW50XCIsXG4gIGRlY2w6IFwiRGVjbGFyYXRpb25cIixcbiAgZG9jdW1lbnQ6IFwiRG9jdW1lbnRcIixcbiAgcm9vdDogXCJSb290XCIsXG4gIHJ1bGU6IFwiUnVsZVwiXG59O1xuY29uc3QgUExVR0lOX1BST1BTID0ge1xuICBBdFJ1bGU6IHRydWUsXG4gIEF0UnVsZUV4aXQ6IHRydWUsXG4gIENvbW1lbnQ6IHRydWUsXG4gIENvbW1lbnRFeGl0OiB0cnVlLFxuICBEZWNsYXJhdGlvbjogdHJ1ZSxcbiAgRGVjbGFyYXRpb25FeGl0OiB0cnVlLFxuICBEb2N1bWVudDogdHJ1ZSxcbiAgRG9jdW1lbnRFeGl0OiB0cnVlLFxuICBPbmNlOiB0cnVlLFxuICBPbmNlRXhpdDogdHJ1ZSxcbiAgcG9zdGNzc1BsdWdpbjogdHJ1ZSxcbiAgcHJlcGFyZTogdHJ1ZSxcbiAgUm9vdDogdHJ1ZSxcbiAgUm9vdEV4aXQ6IHRydWUsXG4gIFJ1bGU6IHRydWUsXG4gIFJ1bGVFeGl0OiB0cnVlXG59O1xuY29uc3QgTk9UX1ZJU0lUT1JTID0ge1xuICBPbmNlOiB0cnVlLFxuICBwb3N0Y3NzUGx1Z2luOiB0cnVlLFxuICBwcmVwYXJlOiB0cnVlXG59O1xuY29uc3QgQ0hJTERSRU4gPSAwO1xuZnVuY3Rpb24gaXNQcm9taXNlKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqLnRoZW4gPT09IFwiZnVuY3Rpb25cIjtcbn1cbmZ1bmN0aW9uIGdldEV2ZW50cyhub2RlMikge1xuICBsZXQga2V5ID0gZmFsc2U7XG4gIGxldCB0eXBlID0gVFlQRV9UT19DTEFTU19OQU1FW25vZGUyLnR5cGVdO1xuICBpZiAobm9kZTIudHlwZSA9PT0gXCJkZWNsXCIpIHtcbiAgICBrZXkgPSBub2RlMi5wcm9wLnRvTG93ZXJDYXNlKCk7XG4gIH0gZWxzZSBpZiAobm9kZTIudHlwZSA9PT0gXCJhdHJ1bGVcIikge1xuICAgIGtleSA9IG5vZGUyLm5hbWUudG9Mb3dlckNhc2UoKTtcbiAgfVxuICBpZiAoa2V5ICYmIG5vZGUyLmFwcGVuZCkge1xuICAgIHJldHVybiBbXG4gICAgICB0eXBlLFxuICAgICAgdHlwZSArIFwiLVwiICsga2V5LFxuICAgICAgQ0hJTERSRU4sXG4gICAgICB0eXBlICsgXCJFeGl0XCIsXG4gICAgICB0eXBlICsgXCJFeGl0LVwiICsga2V5XG4gICAgXTtcbiAgfSBlbHNlIGlmIChrZXkpIHtcbiAgICByZXR1cm4gW3R5cGUsIHR5cGUgKyBcIi1cIiArIGtleSwgdHlwZSArIFwiRXhpdFwiLCB0eXBlICsgXCJFeGl0LVwiICsga2V5XTtcbiAgfSBlbHNlIGlmIChub2RlMi5hcHBlbmQpIHtcbiAgICByZXR1cm4gW3R5cGUsIENISUxEUkVOLCB0eXBlICsgXCJFeGl0XCJdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBbdHlwZSwgdHlwZSArIFwiRXhpdFwiXTtcbiAgfVxufVxuZnVuY3Rpb24gdG9TdGFjayhub2RlMikge1xuICBsZXQgZXZlbnRzO1xuICBpZiAobm9kZTIudHlwZSA9PT0gXCJkb2N1bWVudFwiKSB7XG4gICAgZXZlbnRzID0gW1wiRG9jdW1lbnRcIiwgQ0hJTERSRU4sIFwiRG9jdW1lbnRFeGl0XCJdO1xuICB9IGVsc2UgaWYgKG5vZGUyLnR5cGUgPT09IFwicm9vdFwiKSB7XG4gICAgZXZlbnRzID0gW1wiUm9vdFwiLCBDSElMRFJFTiwgXCJSb290RXhpdFwiXTtcbiAgfSBlbHNlIHtcbiAgICBldmVudHMgPSBnZXRFdmVudHMobm9kZTIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZXZlbnRJbmRleDogMCxcbiAgICBldmVudHMsXG4gICAgaXRlcmF0b3I6IDAsXG4gICAgbm9kZTogbm9kZTIsXG4gICAgdmlzaXRvckluZGV4OiAwLFxuICAgIHZpc2l0b3JzOiBbXVxuICB9O1xufVxuZnVuY3Rpb24gY2xlYW5NYXJrcyhub2RlMikge1xuICBub2RlMltpc0NsZWFuXSA9IGZhbHNlO1xuICBpZiAobm9kZTIubm9kZXMpIG5vZGUyLm5vZGVzLmZvckVhY2goKGkpID0+IGNsZWFuTWFya3MoaSkpO1xuICByZXR1cm4gbm9kZTI7XG59XG5sZXQgcG9zdGNzcyQyID0ge307XG5sZXQgTGF6eVJlc3VsdCQyID0gY2xhc3MgTGF6eVJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yKHByb2Nlc3NvcjIsIGNzcywgb3B0cykge1xuICAgIHRoaXMuc3RyaW5naWZpZWQgPSBmYWxzZTtcbiAgICB0aGlzLnByb2Nlc3NlZCA9IGZhbHNlO1xuICAgIGxldCByb290MjtcbiAgICBpZiAodHlwZW9mIGNzcyA9PT0gXCJvYmplY3RcIiAmJiBjc3MgIT09IG51bGwgJiYgKGNzcy50eXBlID09PSBcInJvb3RcIiB8fCBjc3MudHlwZSA9PT0gXCJkb2N1bWVudFwiKSkge1xuICAgICAgcm9vdDIgPSBjbGVhbk1hcmtzKGNzcyk7XG4gICAgfSBlbHNlIGlmIChjc3MgaW5zdGFuY2VvZiBMYXp5UmVzdWx0IHx8IGNzcyBpbnN0YW5jZW9mIFJlc3VsdCQyKSB7XG4gICAgICByb290MiA9IGNsZWFuTWFya3MoY3NzLnJvb3QpO1xuICAgICAgaWYgKGNzcy5tYXApIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRzLm1hcCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0cy5tYXAgPSB7fTtcbiAgICAgICAgaWYgKCFvcHRzLm1hcC5pbmxpbmUpIG9wdHMubWFwLmlubGluZSA9IGZhbHNlO1xuICAgICAgICBvcHRzLm1hcC5wcmV2ID0gY3NzLm1hcDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHBhcnNlcjIgPSBwYXJzZSQyO1xuICAgICAgaWYgKG9wdHMuc3ludGF4KSBwYXJzZXIyID0gb3B0cy5zeW50YXgucGFyc2U7XG4gICAgICBpZiAob3B0cy5wYXJzZXIpIHBhcnNlcjIgPSBvcHRzLnBhcnNlcjtcbiAgICAgIGlmIChwYXJzZXIyLnBhcnNlKSBwYXJzZXIyID0gcGFyc2VyMi5wYXJzZTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJvb3QyID0gcGFyc2VyMihjc3MsIG9wdHMpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5wcm9jZXNzZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmVycm9yID0gZXJyb3I7XG4gICAgICB9XG4gICAgICBpZiAocm9vdDIgJiYgIXJvb3QyW215XSkge1xuICAgICAgICBDb250YWluZXIkMS5yZWJ1aWxkKHJvb3QyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5yZXN1bHQgPSBuZXcgUmVzdWx0JDIocHJvY2Vzc29yMiwgcm9vdDIsIG9wdHMpO1xuICAgIHRoaXMuaGVscGVycyA9IHsgLi4ucG9zdGNzcyQyLCBwb3N0Y3NzOiBwb3N0Y3NzJDIsIHJlc3VsdDogdGhpcy5yZXN1bHQgfTtcbiAgICB0aGlzLnBsdWdpbnMgPSB0aGlzLnByb2Nlc3Nvci5wbHVnaW5zLm1hcCgocGx1Z2luMikgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBwbHVnaW4yID09PSBcIm9iamVjdFwiICYmIHBsdWdpbjIucHJlcGFyZSkge1xuICAgICAgICByZXR1cm4geyAuLi5wbHVnaW4yLCAuLi5wbHVnaW4yLnByZXBhcmUodGhpcy5yZXN1bHQpIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGx1Z2luMjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBhc3luYygpIHtcbiAgICBpZiAodGhpcy5lcnJvcikgcmV0dXJuIFByb21pc2UucmVqZWN0KHRoaXMuZXJyb3IpO1xuICAgIGlmICh0aGlzLnByb2Nlc3NlZCkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnJlc3VsdCk7XG4gICAgaWYgKCF0aGlzLnByb2Nlc3NpbmcpIHtcbiAgICAgIHRoaXMucHJvY2Vzc2luZyA9IHRoaXMucnVuQXN5bmMoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucHJvY2Vzc2luZztcbiAgfVxuICBjYXRjaChvblJlamVjdGVkKSB7XG4gICAgcmV0dXJuIHRoaXMuYXN5bmMoKS5jYXRjaChvblJlamVjdGVkKTtcbiAgfVxuICBmaW5hbGx5KG9uRmluYWxseSkge1xuICAgIHJldHVybiB0aGlzLmFzeW5jKCkudGhlbihvbkZpbmFsbHksIG9uRmluYWxseSk7XG4gIH1cbiAgZ2V0QXN5bmNFcnJvcigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVc2UgcHJvY2Vzcyhjc3MpLnRoZW4oY2IpIHRvIHdvcmsgd2l0aCBhc3luYyBwbHVnaW5zXCIpO1xuICB9XG4gIGhhbmRsZUVycm9yKGVycm9yLCBub2RlMikge1xuICAgIGxldCBwbHVnaW4yID0gdGhpcy5yZXN1bHQubGFzdFBsdWdpbjtcbiAgICB0cnkge1xuICAgICAgaWYgKG5vZGUyKSBub2RlMi5hZGRUb0Vycm9yKGVycm9yKTtcbiAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICAgIGlmIChlcnJvci5uYW1lID09PSBcIkNzc1N5bnRheEVycm9yXCIgJiYgIWVycm9yLnBsdWdpbikge1xuICAgICAgICBlcnJvci5wbHVnaW4gPSBwbHVnaW4yLnBvc3Rjc3NQbHVnaW47XG4gICAgICAgIGVycm9yLnNldE1lc3NhZ2UoKTtcbiAgICAgIH0gZWxzZSBpZiAocGx1Z2luMi5wb3N0Y3NzVmVyc2lvbikge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgbGV0IHBsdWdpbk5hbWUgPSBwbHVnaW4yLnBvc3Rjc3NQbHVnaW47XG4gICAgICAgICAgbGV0IHBsdWdpblZlciA9IHBsdWdpbjIucG9zdGNzc1ZlcnNpb247XG4gICAgICAgICAgbGV0IHJ1bnRpbWVWZXIgPSB0aGlzLnJlc3VsdC5wcm9jZXNzb3IudmVyc2lvbjtcbiAgICAgICAgICBsZXQgYSA9IHBsdWdpblZlci5zcGxpdChcIi5cIik7XG4gICAgICAgICAgbGV0IGIgPSBydW50aW1lVmVyLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgICBpZiAoYVswXSAhPT0gYlswXSB8fCBwYXJzZUludChhWzFdKSA+IHBhcnNlSW50KGJbMV0pKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICBcIlVua25vd24gZXJyb3IgZnJvbSBQb3N0Q1NTIHBsdWdpbi4gWW91ciBjdXJyZW50IFBvc3RDU1MgdmVyc2lvbiBpcyBcIiArIHJ1bnRpbWVWZXIgKyBcIiwgYnV0IFwiICsgcGx1Z2luTmFtZSArIFwiIHVzZXMgXCIgKyBwbHVnaW5WZXIgKyBcIi4gUGVyaGFwcyB0aGlzIGlzIHRoZSBzb3VyY2Ugb2YgdGhlIGVycm9yIGJlbG93LlwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS5lcnJvcikgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH1cbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbiAgcHJlcGFyZVZpc2l0b3JzKCkge1xuICAgIHRoaXMubGlzdGVuZXJzID0ge307XG4gICAgbGV0IGFkZCA9IChwbHVnaW4yLCB0eXBlLCBjYikgPT4ge1xuICAgICAgaWYgKCF0aGlzLmxpc3RlbmVyc1t0eXBlXSkgdGhpcy5saXN0ZW5lcnNbdHlwZV0gPSBbXTtcbiAgICAgIHRoaXMubGlzdGVuZXJzW3R5cGVdLnB1c2goW3BsdWdpbjIsIGNiXSk7XG4gICAgfTtcbiAgICBmb3IgKGxldCBwbHVnaW4yIG9mIHRoaXMucGx1Z2lucykge1xuICAgICAgaWYgKHR5cGVvZiBwbHVnaW4yID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGZvciAobGV0IGV2ZW50IGluIHBsdWdpbjIpIHtcbiAgICAgICAgICBpZiAoIVBMVUdJTl9QUk9QU1tldmVudF0gJiYgL15bQS1aXS8udGVzdChldmVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgYFVua25vd24gZXZlbnQgJHtldmVudH0gaW4gJHtwbHVnaW4yLnBvc3Rjc3NQbHVnaW59LiBUcnkgdG8gdXBkYXRlIFBvc3RDU1MgKCR7dGhpcy5wcm9jZXNzb3IudmVyc2lvbn0gbm93KS5gXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIU5PVF9WSVNJVE9SU1tldmVudF0pIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGx1Z2luMltldmVudF0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgZm9yIChsZXQgZmlsdGVyIGluIHBsdWdpbjJbZXZlbnRdKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZpbHRlciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgIGFkZChwbHVnaW4yLCBldmVudCwgcGx1Z2luMltldmVudF1bZmlsdGVyXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGFkZChcbiAgICAgICAgICAgICAgICAgICAgcGx1Z2luMixcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQgKyBcIi1cIiArIGZpbHRlci50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgICAgICAgICBwbHVnaW4yW2V2ZW50XVtmaWx0ZXJdXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcGx1Z2luMltldmVudF0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICBhZGQocGx1Z2luMiwgZXZlbnQsIHBsdWdpbjJbZXZlbnRdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5oYXNMaXN0ZW5lciA9IE9iamVjdC5rZXlzKHRoaXMubGlzdGVuZXJzKS5sZW5ndGggPiAwO1xuICB9XG4gIGFzeW5jIHJ1bkFzeW5jKCkge1xuICAgIHRoaXMucGx1Z2luID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGx1Z2lucy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHBsdWdpbjIgPSB0aGlzLnBsdWdpbnNbaV07XG4gICAgICBsZXQgcHJvbWlzZSA9IHRoaXMucnVuT25Sb290KHBsdWdpbjIpO1xuICAgICAgaWYgKGlzUHJvbWlzZShwcm9taXNlKSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IHByb21pc2U7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgdGhyb3cgdGhpcy5oYW5kbGVFcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wcmVwYXJlVmlzaXRvcnMoKTtcbiAgICBpZiAodGhpcy5oYXNMaXN0ZW5lcikge1xuICAgICAgbGV0IHJvb3QyID0gdGhpcy5yZXN1bHQucm9vdDtcbiAgICAgIHdoaWxlICghcm9vdDJbaXNDbGVhbl0pIHtcbiAgICAgICAgcm9vdDJbaXNDbGVhbl0gPSB0cnVlO1xuICAgICAgICBsZXQgc3RhY2sgPSBbdG9TdGFjayhyb290MildO1xuICAgICAgICB3aGlsZSAoc3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgICAgIGxldCBwcm9taXNlID0gdGhpcy52aXNpdFRpY2soc3RhY2spO1xuICAgICAgICAgIGlmIChpc1Byb21pc2UocHJvbWlzZSkpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGF3YWl0IHByb21pc2U7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIGxldCBub2RlMiA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdLm5vZGU7XG4gICAgICAgICAgICAgIHRocm93IHRoaXMuaGFuZGxlRXJyb3IoZSwgbm9kZTIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMubGlzdGVuZXJzLk9uY2VFeGl0KSB7XG4gICAgICAgIGZvciAobGV0IFtwbHVnaW4yLCB2aXNpdG9yXSBvZiB0aGlzLmxpc3RlbmVycy5PbmNlRXhpdCkge1xuICAgICAgICAgIHRoaXMucmVzdWx0Lmxhc3RQbHVnaW4gPSBwbHVnaW4yO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAocm9vdDIudHlwZSA9PT0gXCJkb2N1bWVudFwiKSB7XG4gICAgICAgICAgICAgIGxldCByb290cyA9IHJvb3QyLm5vZGVzLm1hcChcbiAgICAgICAgICAgICAgICAoc3ViUm9vdCkgPT4gdmlzaXRvcihzdWJSb290LCB0aGlzLmhlbHBlcnMpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHJvb3RzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGF3YWl0IHZpc2l0b3Iocm9vdDIsIHRoaXMuaGVscGVycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdGhyb3cgdGhpcy5oYW5kbGVFcnJvcihlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wcm9jZXNzZWQgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzLnN0cmluZ2lmeSgpO1xuICB9XG4gIHJ1bk9uUm9vdChwbHVnaW4yKSB7XG4gICAgdGhpcy5yZXN1bHQubGFzdFBsdWdpbiA9IHBsdWdpbjI7XG4gICAgdHJ5IHtcbiAgICAgIGlmICh0eXBlb2YgcGx1Z2luMiA9PT0gXCJvYmplY3RcIiAmJiBwbHVnaW4yLk9uY2UpIHtcbiAgICAgICAgaWYgKHRoaXMucmVzdWx0LnJvb3QudHlwZSA9PT0gXCJkb2N1bWVudFwiKSB7XG4gICAgICAgICAgbGV0IHJvb3RzID0gdGhpcy5yZXN1bHQucm9vdC5ub2Rlcy5tYXAoXG4gICAgICAgICAgICAocm9vdDIpID0+IHBsdWdpbjIuT25jZShyb290MiwgdGhpcy5oZWxwZXJzKVxuICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKGlzUHJvbWlzZShyb290c1swXSkpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChyb290cyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByb290cztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGx1Z2luMi5PbmNlKHRoaXMucmVzdWx0LnJvb3QsIHRoaXMuaGVscGVycyk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwbHVnaW4yID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIHBsdWdpbjIodGhpcy5yZXN1bHQucm9vdCwgdGhpcy5yZXN1bHQpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcbiAgICB9XG4gIH1cbiAgc3RyaW5naWZ5KCkge1xuICAgIGlmICh0aGlzLmVycm9yKSB0aHJvdyB0aGlzLmVycm9yO1xuICAgIGlmICh0aGlzLnN0cmluZ2lmaWVkKSByZXR1cm4gdGhpcy5yZXN1bHQ7XG4gICAgdGhpcy5zdHJpbmdpZmllZCA9IHRydWU7XG4gICAgdGhpcy5zeW5jKCk7XG4gICAgbGV0IG9wdHMgPSB0aGlzLnJlc3VsdC5vcHRzO1xuICAgIGxldCBzdHIgPSBzdHJpbmdpZnkkMjtcbiAgICBpZiAob3B0cy5zeW50YXgpIHN0ciA9IG9wdHMuc3ludGF4LnN0cmluZ2lmeTtcbiAgICBpZiAob3B0cy5zdHJpbmdpZmllcikgc3RyID0gb3B0cy5zdHJpbmdpZmllcjtcbiAgICBpZiAoc3RyLnN0cmluZ2lmeSkgc3RyID0gc3RyLnN0cmluZ2lmeTtcbiAgICBsZXQgbWFwID0gbmV3IE1hcEdlbmVyYXRvciQxKHN0ciwgdGhpcy5yZXN1bHQucm9vdCwgdGhpcy5yZXN1bHQub3B0cyk7XG4gICAgbGV0IGRhdGEgPSBtYXAuZ2VuZXJhdGUoKTtcbiAgICB0aGlzLnJlc3VsdC5jc3MgPSBkYXRhWzBdO1xuICAgIHRoaXMucmVzdWx0Lm1hcCA9IGRhdGFbMV07XG4gICAgcmV0dXJuIHRoaXMucmVzdWx0O1xuICB9XG4gIHN5bmMoKSB7XG4gICAgaWYgKHRoaXMuZXJyb3IpIHRocm93IHRoaXMuZXJyb3I7XG4gICAgaWYgKHRoaXMucHJvY2Vzc2VkKSByZXR1cm4gdGhpcy5yZXN1bHQ7XG4gICAgdGhpcy5wcm9jZXNzZWQgPSB0cnVlO1xuICAgIGlmICh0aGlzLnByb2Nlc3NpbmcpIHtcbiAgICAgIHRocm93IHRoaXMuZ2V0QXN5bmNFcnJvcigpO1xuICAgIH1cbiAgICBmb3IgKGxldCBwbHVnaW4yIG9mIHRoaXMucGx1Z2lucykge1xuICAgICAgbGV0IHByb21pc2UgPSB0aGlzLnJ1bk9uUm9vdChwbHVnaW4yKTtcbiAgICAgIGlmIChpc1Byb21pc2UocHJvbWlzZSkpIHtcbiAgICAgICAgdGhyb3cgdGhpcy5nZXRBc3luY0Vycm9yKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucHJlcGFyZVZpc2l0b3JzKCk7XG4gICAgaWYgKHRoaXMuaGFzTGlzdGVuZXIpIHtcbiAgICAgIGxldCByb290MiA9IHRoaXMucmVzdWx0LnJvb3Q7XG4gICAgICB3aGlsZSAoIXJvb3QyW2lzQ2xlYW5dKSB7XG4gICAgICAgIHJvb3QyW2lzQ2xlYW5dID0gdHJ1ZTtcbiAgICAgICAgdGhpcy53YWxrU3luYyhyb290Mik7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5saXN0ZW5lcnMuT25jZUV4aXQpIHtcbiAgICAgICAgaWYgKHJvb3QyLnR5cGUgPT09IFwiZG9jdW1lbnRcIikge1xuICAgICAgICAgIGZvciAobGV0IHN1YlJvb3Qgb2Ygcm9vdDIubm9kZXMpIHtcbiAgICAgICAgICAgIHRoaXMudmlzaXRTeW5jKHRoaXMubGlzdGVuZXJzLk9uY2VFeGl0LCBzdWJSb290KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy52aXNpdFN5bmModGhpcy5saXN0ZW5lcnMuT25jZUV4aXQsIHJvb3QyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5yZXN1bHQ7XG4gIH1cbiAgdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIGlmICghKFwiZnJvbVwiIGluIHRoaXMub3B0cykpIHtcbiAgICAgICAgd2Fybk9uY2UkMShcbiAgICAgICAgICBcIldpdGhvdXQgYGZyb21gIG9wdGlvbiBQb3N0Q1NTIGNvdWxkIGdlbmVyYXRlIHdyb25nIHNvdXJjZSBtYXAgYW5kIHdpbGwgbm90IGZpbmQgQnJvd3NlcnNsaXN0IGNvbmZpZy4gU2V0IGl0IHRvIENTUyBmaWxlIHBhdGggb3IgdG8gYHVuZGVmaW5lZGAgdG8gcHJldmVudCB0aGlzIHdhcm5pbmcuXCJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuYXN5bmMoKS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKTtcbiAgfVxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5jc3M7XG4gIH1cbiAgdmlzaXRTeW5jKHZpc2l0b3JzLCBub2RlMikge1xuICAgIGZvciAobGV0IFtwbHVnaW4yLCB2aXNpdG9yXSBvZiB2aXNpdG9ycykge1xuICAgICAgdGhpcy5yZXN1bHQubGFzdFBsdWdpbiA9IHBsdWdpbjI7XG4gICAgICBsZXQgcHJvbWlzZTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHByb21pc2UgPSB2aXNpdG9yKG5vZGUyLCB0aGlzLmhlbHBlcnMpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0aHJvdyB0aGlzLmhhbmRsZUVycm9yKGUsIG5vZGUyLnByb3h5T2YpO1xuICAgICAgfVxuICAgICAgaWYgKG5vZGUyLnR5cGUgIT09IFwicm9vdFwiICYmIG5vZGUyLnR5cGUgIT09IFwiZG9jdW1lbnRcIiAmJiAhbm9kZTIucGFyZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGlzUHJvbWlzZShwcm9taXNlKSkge1xuICAgICAgICB0aHJvdyB0aGlzLmdldEFzeW5jRXJyb3IoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdmlzaXRUaWNrKHN0YWNrKSB7XG4gICAgbGV0IHZpc2l0MiA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdO1xuICAgIGxldCB7IG5vZGU6IG5vZGUyLCB2aXNpdG9ycyB9ID0gdmlzaXQyO1xuICAgIGlmIChub2RlMi50eXBlICE9PSBcInJvb3RcIiAmJiBub2RlMi50eXBlICE9PSBcImRvY3VtZW50XCIgJiYgIW5vZGUyLnBhcmVudCkge1xuICAgICAgc3RhY2sucG9wKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh2aXNpdG9ycy5sZW5ndGggPiAwICYmIHZpc2l0Mi52aXNpdG9ySW5kZXggPCB2aXNpdG9ycy5sZW5ndGgpIHtcbiAgICAgIGxldCBbcGx1Z2luMiwgdmlzaXRvcl0gPSB2aXNpdG9yc1t2aXNpdDIudmlzaXRvckluZGV4XTtcbiAgICAgIHZpc2l0Mi52aXNpdG9ySW5kZXggKz0gMTtcbiAgICAgIGlmICh2aXNpdDIudmlzaXRvckluZGV4ID09PSB2aXNpdG9ycy5sZW5ndGgpIHtcbiAgICAgICAgdmlzaXQyLnZpc2l0b3JzID0gW107XG4gICAgICAgIHZpc2l0Mi52aXNpdG9ySW5kZXggPSAwO1xuICAgICAgfVxuICAgICAgdGhpcy5yZXN1bHQubGFzdFBsdWdpbiA9IHBsdWdpbjI7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gdmlzaXRvcihub2RlMi50b1Byb3h5KCksIHRoaXMuaGVscGVycyk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRocm93IHRoaXMuaGFuZGxlRXJyb3IoZSwgbm9kZTIpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodmlzaXQyLml0ZXJhdG9yICE9PSAwKSB7XG4gICAgICBsZXQgaXRlcmF0b3IgPSB2aXNpdDIuaXRlcmF0b3I7XG4gICAgICBsZXQgY2hpbGQ7XG4gICAgICB3aGlsZSAoY2hpbGQgPSBub2RlMi5ub2Rlc1tub2RlMi5pbmRleGVzW2l0ZXJhdG9yXV0pIHtcbiAgICAgICAgbm9kZTIuaW5kZXhlc1tpdGVyYXRvcl0gKz0gMTtcbiAgICAgICAgaWYgKCFjaGlsZFtpc0NsZWFuXSkge1xuICAgICAgICAgIGNoaWxkW2lzQ2xlYW5dID0gdHJ1ZTtcbiAgICAgICAgICBzdGFjay5wdXNoKHRvU3RhY2soY2hpbGQpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZpc2l0Mi5pdGVyYXRvciA9IDA7XG4gICAgICBkZWxldGUgbm9kZTIuaW5kZXhlc1tpdGVyYXRvcl07XG4gICAgfVxuICAgIGxldCBldmVudHMgPSB2aXNpdDIuZXZlbnRzO1xuICAgIHdoaWxlICh2aXNpdDIuZXZlbnRJbmRleCA8IGV2ZW50cy5sZW5ndGgpIHtcbiAgICAgIGxldCBldmVudCA9IGV2ZW50c1t2aXNpdDIuZXZlbnRJbmRleF07XG4gICAgICB2aXNpdDIuZXZlbnRJbmRleCArPSAxO1xuICAgICAgaWYgKGV2ZW50ID09PSBDSElMRFJFTikge1xuICAgICAgICBpZiAobm9kZTIubm9kZXMgJiYgbm9kZTIubm9kZXMubGVuZ3RoKSB7XG4gICAgICAgICAgbm9kZTJbaXNDbGVhbl0gPSB0cnVlO1xuICAgICAgICAgIHZpc2l0Mi5pdGVyYXRvciA9IG5vZGUyLmdldEl0ZXJhdG9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmxpc3RlbmVyc1tldmVudF0pIHtcbiAgICAgICAgdmlzaXQyLnZpc2l0b3JzID0gdGhpcy5saXN0ZW5lcnNbZXZlbnRdO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIHN0YWNrLnBvcCgpO1xuICB9XG4gIHdhbGtTeW5jKG5vZGUyKSB7XG4gICAgbm9kZTJbaXNDbGVhbl0gPSB0cnVlO1xuICAgIGxldCBldmVudHMgPSBnZXRFdmVudHMobm9kZTIpO1xuICAgIGZvciAobGV0IGV2ZW50IG9mIGV2ZW50cykge1xuICAgICAgaWYgKGV2ZW50ID09PSBDSElMRFJFTikge1xuICAgICAgICBpZiAobm9kZTIubm9kZXMpIHtcbiAgICAgICAgICBub2RlMi5lYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFjaGlsZFtpc0NsZWFuXSkgdGhpcy53YWxrU3luYyhjaGlsZCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCB2aXNpdG9ycyA9IHRoaXMubGlzdGVuZXJzW2V2ZW50XTtcbiAgICAgICAgaWYgKHZpc2l0b3JzKSB7XG4gICAgICAgICAgaWYgKHRoaXMudmlzaXRTeW5jKHZpc2l0b3JzLCBub2RlMi50b1Byb3h5KCkpKSByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgd2FybmluZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3luYygpLndhcm5pbmdzKCk7XG4gIH1cbiAgZ2V0IGNvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5naWZ5KCkuY29udGVudDtcbiAgfVxuICBnZXQgY3NzKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZ2lmeSgpLmNzcztcbiAgfVxuICBnZXQgbWFwKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZ2lmeSgpLm1hcDtcbiAgfVxuICBnZXQgbWVzc2FnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3luYygpLm1lc3NhZ2VzO1xuICB9XG4gIGdldCBvcHRzKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3VsdC5vcHRzO1xuICB9XG4gIGdldCBwcm9jZXNzb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdWx0LnByb2Nlc3NvcjtcbiAgfVxuICBnZXQgcm9vdCgpIHtcbiAgICByZXR1cm4gdGhpcy5zeW5jKCkucm9vdDtcbiAgfVxuICBnZXQgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgcmV0dXJuIFwiTGF6eVJlc3VsdFwiO1xuICB9XG59O1xuTGF6eVJlc3VsdCQyLnJlZ2lzdGVyUG9zdGNzcyA9IChkZXBlbmRhbnQpID0+IHtcbiAgcG9zdGNzcyQyID0gZGVwZW5kYW50O1xufTtcbnZhciBsYXp5UmVzdWx0ID0gTGF6eVJlc3VsdCQyO1xuTGF6eVJlc3VsdCQyLmRlZmF1bHQgPSBMYXp5UmVzdWx0JDI7XG5Sb290JDMucmVnaXN0ZXJMYXp5UmVzdWx0KExhenlSZXN1bHQkMik7XG5Eb2N1bWVudCQyLnJlZ2lzdGVyTGF6eVJlc3VsdChMYXp5UmVzdWx0JDIpO1xubGV0IE1hcEdlbmVyYXRvcjIgPSBtYXBHZW5lcmF0b3I7XG5sZXQgc3RyaW5naWZ5JDEgPSBzdHJpbmdpZnlfMTtcbmxldCB3YXJuT25jZTIgPSB3YXJuT25jZSQyO1xubGV0IHBhcnNlJDEgPSBwYXJzZV8xO1xuY29uc3QgUmVzdWx0JDEgPSByZXN1bHQ7XG5sZXQgTm9Xb3JrUmVzdWx0JDEgPSBjbGFzcyBOb1dvcmtSZXN1bHQge1xuICBjb25zdHJ1Y3Rvcihwcm9jZXNzb3IyLCBjc3MsIG9wdHMpIHtcbiAgICBjc3MgPSBjc3MudG9TdHJpbmcoKTtcbiAgICB0aGlzLnN0cmluZ2lmaWVkID0gZmFsc2U7XG4gICAgdGhpcy5fcHJvY2Vzc29yID0gcHJvY2Vzc29yMjtcbiAgICB0aGlzLl9jc3MgPSBjc3M7XG4gICAgdGhpcy5fb3B0cyA9IG9wdHM7XG4gICAgdGhpcy5fbWFwID0gdm9pZCAwO1xuICAgIGxldCByb290MjtcbiAgICBsZXQgc3RyID0gc3RyaW5naWZ5JDE7XG4gICAgdGhpcy5yZXN1bHQgPSBuZXcgUmVzdWx0JDEodGhpcy5fcHJvY2Vzc29yLCByb290MiwgdGhpcy5fb3B0cyk7XG4gICAgdGhpcy5yZXN1bHQuY3NzID0gY3NzO1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy5yZXN1bHQsIFwicm9vdFwiLCB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiBzZWxmLnJvb3Q7XG4gICAgICB9XG4gICAgfSk7XG4gICAgbGV0IG1hcCA9IG5ldyBNYXBHZW5lcmF0b3IyKHN0ciwgcm9vdDIsIHRoaXMuX29wdHMsIGNzcyk7XG4gICAgaWYgKG1hcC5pc01hcCgpKSB7XG4gICAgICBsZXQgW2dlbmVyYXRlZENTUywgZ2VuZXJhdGVkTWFwXSA9IG1hcC5nZW5lcmF0ZSgpO1xuICAgICAgaWYgKGdlbmVyYXRlZENTUykge1xuICAgICAgICB0aGlzLnJlc3VsdC5jc3MgPSBnZW5lcmF0ZWRDU1M7XG4gICAgICB9XG4gICAgICBpZiAoZ2VuZXJhdGVkTWFwKSB7XG4gICAgICAgIHRoaXMucmVzdWx0Lm1hcCA9IGdlbmVyYXRlZE1hcDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbWFwLmNsZWFyQW5ub3RhdGlvbigpO1xuICAgICAgdGhpcy5yZXN1bHQuY3NzID0gbWFwLmNzcztcbiAgICB9XG4gIH1cbiAgYXN5bmMoKSB7XG4gICAgaWYgKHRoaXMuZXJyb3IpIHJldHVybiBQcm9taXNlLnJlamVjdCh0aGlzLmVycm9yKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMucmVzdWx0KTtcbiAgfVxuICBjYXRjaChvblJlamVjdGVkKSB7XG4gICAgcmV0dXJuIHRoaXMuYXN5bmMoKS5jYXRjaChvblJlamVjdGVkKTtcbiAgfVxuICBmaW5hbGx5KG9uRmluYWxseSkge1xuICAgIHJldHVybiB0aGlzLmFzeW5jKCkudGhlbihvbkZpbmFsbHksIG9uRmluYWxseSk7XG4gIH1cbiAgc3luYygpIHtcbiAgICBpZiAodGhpcy5lcnJvcikgdGhyb3cgdGhpcy5lcnJvcjtcbiAgICByZXR1cm4gdGhpcy5yZXN1bHQ7XG4gIH1cbiAgdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIGlmICghKFwiZnJvbVwiIGluIHRoaXMuX29wdHMpKSB7XG4gICAgICAgIHdhcm5PbmNlMihcbiAgICAgICAgICBcIldpdGhvdXQgYGZyb21gIG9wdGlvbiBQb3N0Q1NTIGNvdWxkIGdlbmVyYXRlIHdyb25nIHNvdXJjZSBtYXAgYW5kIHdpbGwgbm90IGZpbmQgQnJvd3NlcnNsaXN0IGNvbmZpZy4gU2V0IGl0IHRvIENTUyBmaWxlIHBhdGggb3IgdG8gYHVuZGVmaW5lZGAgdG8gcHJldmVudCB0aGlzIHdhcm5pbmcuXCJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuYXN5bmMoKS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKTtcbiAgfVxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5fY3NzO1xuICB9XG4gIHdhcm5pbmdzKCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBnZXQgY29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN1bHQuY3NzO1xuICB9XG4gIGdldCBjc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdWx0LmNzcztcbiAgfVxuICBnZXQgbWFwKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3VsdC5tYXA7XG4gIH1cbiAgZ2V0IG1lc3NhZ2VzKCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBnZXQgb3B0cygpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN1bHQub3B0cztcbiAgfVxuICBnZXQgcHJvY2Vzc29yKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3VsdC5wcm9jZXNzb3I7XG4gIH1cbiAgZ2V0IHJvb3QoKSB7XG4gICAgaWYgKHRoaXMuX3Jvb3QpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yb290O1xuICAgIH1cbiAgICBsZXQgcm9vdDI7XG4gICAgbGV0IHBhcnNlcjIgPSBwYXJzZSQxO1xuICAgIHRyeSB7XG4gICAgICByb290MiA9IHBhcnNlcjIodGhpcy5fY3NzLCB0aGlzLl9vcHRzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgIH1cbiAgICBpZiAodGhpcy5lcnJvcikge1xuICAgICAgdGhyb3cgdGhpcy5lcnJvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcm9vdCA9IHJvb3QyO1xuICAgICAgcmV0dXJuIHJvb3QyO1xuICAgIH1cbiAgfVxuICBnZXQgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgcmV0dXJuIFwiTm9Xb3JrUmVzdWx0XCI7XG4gIH1cbn07XG52YXIgbm9Xb3JrUmVzdWx0ID0gTm9Xb3JrUmVzdWx0JDE7XG5Ob1dvcmtSZXN1bHQkMS5kZWZhdWx0ID0gTm9Xb3JrUmVzdWx0JDE7XG5sZXQgTm9Xb3JrUmVzdWx0MiA9IG5vV29ya1Jlc3VsdDtcbmxldCBMYXp5UmVzdWx0JDEgPSBsYXp5UmVzdWx0O1xubGV0IERvY3VtZW50JDEgPSBkb2N1bWVudCQxO1xubGV0IFJvb3QkMiA9IHJvb3Q7XG5sZXQgUHJvY2Vzc29yJDEgPSBjbGFzcyBQcm9jZXNzb3Ige1xuICBjb25zdHJ1Y3RvcihwbHVnaW5zID0gW10pIHtcbiAgICB0aGlzLnZlcnNpb24gPSBcIjguNC4zOFwiO1xuICAgIHRoaXMucGx1Z2lucyA9IHRoaXMubm9ybWFsaXplKHBsdWdpbnMpO1xuICB9XG4gIG5vcm1hbGl6ZShwbHVnaW5zKSB7XG4gICAgbGV0IG5vcm1hbGl6ZWQgPSBbXTtcbiAgICBmb3IgKGxldCBpIG9mIHBsdWdpbnMpIHtcbiAgICAgIGlmIChpLnBvc3Rjc3MgPT09IHRydWUpIHtcbiAgICAgICAgaSA9IGkoKTtcbiAgICAgIH0gZWxzZSBpZiAoaS5wb3N0Y3NzKSB7XG4gICAgICAgIGkgPSBpLnBvc3Rjc3M7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGkgPT09IFwib2JqZWN0XCIgJiYgQXJyYXkuaXNBcnJheShpLnBsdWdpbnMpKSB7XG4gICAgICAgIG5vcm1hbGl6ZWQgPSBub3JtYWxpemVkLmNvbmNhdChpLnBsdWdpbnMpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgaSA9PT0gXCJvYmplY3RcIiAmJiBpLnBvc3Rjc3NQbHVnaW4pIHtcbiAgICAgICAgbm9ybWFsaXplZC5wdXNoKGkpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgaSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIG5vcm1hbGl6ZWQucHVzaChpKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGkgPT09IFwib2JqZWN0XCIgJiYgKGkucGFyc2UgfHwgaS5zdHJpbmdpZnkpKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBcIlBvc3RDU1Mgc3ludGF4ZXMgY2Fubm90IGJlIHVzZWQgYXMgcGx1Z2lucy4gSW5zdGVhZCwgcGxlYXNlIHVzZSBvbmUgb2YgdGhlIHN5bnRheC9wYXJzZXIvc3RyaW5naWZpZXIgb3B0aW9ucyBhcyBvdXRsaW5lZCBpbiB5b3VyIFBvc3RDU1MgcnVubmVyIGRvY3VtZW50YXRpb24uXCJcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoaSArIFwiIGlzIG5vdCBhIFBvc3RDU1MgcGx1Z2luXCIpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbm9ybWFsaXplZDtcbiAgfVxuICBwcm9jZXNzKGNzcywgb3B0cyA9IHt9KSB7XG4gICAgaWYgKCF0aGlzLnBsdWdpbnMubGVuZ3RoICYmICFvcHRzLnBhcnNlciAmJiAhb3B0cy5zdHJpbmdpZmllciAmJiAhb3B0cy5zeW50YXgpIHtcbiAgICAgIHJldHVybiBuZXcgTm9Xb3JrUmVzdWx0Mih0aGlzLCBjc3MsIG9wdHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IExhenlSZXN1bHQkMSh0aGlzLCBjc3MsIG9wdHMpO1xuICAgIH1cbiAgfVxuICB1c2UocGx1Z2luMikge1xuICAgIHRoaXMucGx1Z2lucyA9IHRoaXMucGx1Z2lucy5jb25jYXQodGhpcy5ub3JtYWxpemUoW3BsdWdpbjJdKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn07XG52YXIgcHJvY2Vzc29yID0gUHJvY2Vzc29yJDE7XG5Qcm9jZXNzb3IkMS5kZWZhdWx0ID0gUHJvY2Vzc29yJDE7XG5Sb290JDIucmVnaXN0ZXJQcm9jZXNzb3IoUHJvY2Vzc29yJDEpO1xuRG9jdW1lbnQkMS5yZWdpc3RlclByb2Nlc3NvcihQcm9jZXNzb3IkMSk7XG5sZXQgRGVjbGFyYXRpb24kMSA9IGRlY2xhcmF0aW9uO1xubGV0IFByZXZpb3VzTWFwMiA9IHByZXZpb3VzTWFwO1xubGV0IENvbW1lbnQkMSA9IGNvbW1lbnQ7XG5sZXQgQXRSdWxlJDEgPSBhdFJ1bGU7XG5sZXQgSW5wdXQkMSA9IGlucHV0O1xubGV0IFJvb3QkMSA9IHJvb3Q7XG5sZXQgUnVsZSQxID0gcnVsZTtcbmZ1bmN0aW9uIGZyb21KU09OJDEoanNvbiwgaW5wdXRzKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGpzb24pKSByZXR1cm4ganNvbi5tYXAoKG4pID0+IGZyb21KU09OJDEobikpO1xuICBsZXQgeyBpbnB1dHM6IG93bklucHV0cywgLi4uZGVmYXVsdHMgfSA9IGpzb247XG4gIGlmIChvd25JbnB1dHMpIHtcbiAgICBpbnB1dHMgPSBbXTtcbiAgICBmb3IgKGxldCBpbnB1dDIgb2Ygb3duSW5wdXRzKSB7XG4gICAgICBsZXQgaW5wdXRIeWRyYXRlZCA9IHsgLi4uaW5wdXQyLCBfX3Byb3RvX186IElucHV0JDEucHJvdG90eXBlIH07XG4gICAgICBpZiAoaW5wdXRIeWRyYXRlZC5tYXApIHtcbiAgICAgICAgaW5wdXRIeWRyYXRlZC5tYXAgPSB7XG4gICAgICAgICAgLi4uaW5wdXRIeWRyYXRlZC5tYXAsXG4gICAgICAgICAgX19wcm90b19fOiBQcmV2aW91c01hcDIucHJvdG90eXBlXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBpbnB1dHMucHVzaChpbnB1dEh5ZHJhdGVkKTtcbiAgICB9XG4gIH1cbiAgaWYgKGRlZmF1bHRzLm5vZGVzKSB7XG4gICAgZGVmYXVsdHMubm9kZXMgPSBqc29uLm5vZGVzLm1hcCgobikgPT4gZnJvbUpTT04kMShuLCBpbnB1dHMpKTtcbiAgfVxuICBpZiAoZGVmYXVsdHMuc291cmNlKSB7XG4gICAgbGV0IHsgaW5wdXRJZCwgLi4uc291cmNlIH0gPSBkZWZhdWx0cy5zb3VyY2U7XG4gICAgZGVmYXVsdHMuc291cmNlID0gc291cmNlO1xuICAgIGlmIChpbnB1dElkICE9IG51bGwpIHtcbiAgICAgIGRlZmF1bHRzLnNvdXJjZS5pbnB1dCA9IGlucHV0c1tpbnB1dElkXTtcbiAgICB9XG4gIH1cbiAgaWYgKGRlZmF1bHRzLnR5cGUgPT09IFwicm9vdFwiKSB7XG4gICAgcmV0dXJuIG5ldyBSb290JDEoZGVmYXVsdHMpO1xuICB9IGVsc2UgaWYgKGRlZmF1bHRzLnR5cGUgPT09IFwiZGVjbFwiKSB7XG4gICAgcmV0dXJuIG5ldyBEZWNsYXJhdGlvbiQxKGRlZmF1bHRzKTtcbiAgfSBlbHNlIGlmIChkZWZhdWx0cy50eXBlID09PSBcInJ1bGVcIikge1xuICAgIHJldHVybiBuZXcgUnVsZSQxKGRlZmF1bHRzKTtcbiAgfSBlbHNlIGlmIChkZWZhdWx0cy50eXBlID09PSBcImNvbW1lbnRcIikge1xuICAgIHJldHVybiBuZXcgQ29tbWVudCQxKGRlZmF1bHRzKTtcbiAgfSBlbHNlIGlmIChkZWZhdWx0cy50eXBlID09PSBcImF0cnVsZVwiKSB7XG4gICAgcmV0dXJuIG5ldyBBdFJ1bGUkMShkZWZhdWx0cyk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBub2RlIHR5cGU6IFwiICsganNvbi50eXBlKTtcbiAgfVxufVxudmFyIGZyb21KU09OXzEgPSBmcm9tSlNPTiQxO1xuZnJvbUpTT04kMS5kZWZhdWx0ID0gZnJvbUpTT04kMTtcbmxldCBDc3NTeW50YXhFcnJvcjIgPSBjc3NTeW50YXhFcnJvcjtcbmxldCBEZWNsYXJhdGlvbjIgPSBkZWNsYXJhdGlvbjtcbmxldCBMYXp5UmVzdWx0MiA9IGxhenlSZXN1bHQ7XG5sZXQgQ29udGFpbmVyMiA9IGNvbnRhaW5lcjtcbmxldCBQcm9jZXNzb3IyID0gcHJvY2Vzc29yO1xubGV0IHN0cmluZ2lmeSA9IHN0cmluZ2lmeV8xO1xubGV0IGZyb21KU09OID0gZnJvbUpTT05fMTtcbmxldCBEb2N1bWVudDIgPSBkb2N1bWVudCQxO1xubGV0IFdhcm5pbmcyID0gd2FybmluZztcbmxldCBDb21tZW50MiA9IGNvbW1lbnQ7XG5sZXQgQXRSdWxlMiA9IGF0UnVsZTtcbmxldCBSZXN1bHQyID0gcmVzdWx0O1xubGV0IElucHV0MiA9IGlucHV0O1xubGV0IHBhcnNlID0gcGFyc2VfMTtcbmxldCBsaXN0ID0gbGlzdF8xO1xubGV0IFJ1bGUyID0gcnVsZTtcbmxldCBSb290MiA9IHJvb3Q7XG5sZXQgTm9kZTIgPSBub2RlO1xuZnVuY3Rpb24gcG9zdGNzcyguLi5wbHVnaW5zKSB7XG4gIGlmIChwbHVnaW5zLmxlbmd0aCA9PT0gMSAmJiBBcnJheS5pc0FycmF5KHBsdWdpbnNbMF0pKSB7XG4gICAgcGx1Z2lucyA9IHBsdWdpbnNbMF07XG4gIH1cbiAgcmV0dXJuIG5ldyBQcm9jZXNzb3IyKHBsdWdpbnMpO1xufVxucG9zdGNzcy5wbHVnaW4gPSBmdW5jdGlvbiBwbHVnaW4obmFtZSwgaW5pdGlhbGl6ZXIpIHtcbiAgbGV0IHdhcm5pbmdQcmludGVkID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGNyZWF0b3IoLi4uYXJncykge1xuICAgIGlmIChjb25zb2xlICYmIGNvbnNvbGUud2FybiAmJiAhd2FybmluZ1ByaW50ZWQpIHtcbiAgICAgIHdhcm5pbmdQcmludGVkID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgbmFtZSArIFwiOiBwb3N0Y3NzLnBsdWdpbiB3YXMgZGVwcmVjYXRlZC4gTWlncmF0aW9uIGd1aWRlOlxcbmh0dHBzOi8vZXZpbG1hcnRpYW5zLmNvbS9jaHJvbmljbGVzL3Bvc3Rjc3MtOC1wbHVnaW4tbWlncmF0aW9uXCJcbiAgICAgICk7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTEFORyAmJiBwcm9jZXNzLmVudi5MQU5HLnN0YXJ0c1dpdGgoXCJjblwiKSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgbmFtZSArIFwiOiDph4zpnaIgcG9zdGNzcy5wbHVnaW4g6KKr5byD55SoLiDov4Hnp7vmjIfljZc6XFxuaHR0cHM6Ly93d3cudzNjdGVjaC5jb20vdG9waWMvMjIyNlwiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCB0cmFuc2Zvcm1lciA9IGluaXRpYWxpemVyKC4uLmFyZ3MpO1xuICAgIHRyYW5zZm9ybWVyLnBvc3Rjc3NQbHVnaW4gPSBuYW1lO1xuICAgIHRyYW5zZm9ybWVyLnBvc3Rjc3NWZXJzaW9uID0gbmV3IFByb2Nlc3NvcjIoKS52ZXJzaW9uO1xuICAgIHJldHVybiB0cmFuc2Zvcm1lcjtcbiAgfVxuICBsZXQgY2FjaGU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjcmVhdG9yLCBcInBvc3Rjc3NcIiwge1xuICAgIGdldCgpIHtcbiAgICAgIGlmICghY2FjaGUpIGNhY2hlID0gY3JlYXRvcigpO1xuICAgICAgcmV0dXJuIGNhY2hlO1xuICAgIH1cbiAgfSk7XG4gIGNyZWF0b3IucHJvY2VzcyA9IGZ1bmN0aW9uKGNzcywgcHJvY2Vzc09wdHMsIHBsdWdpbk9wdHMpIHtcbiAgICByZXR1cm4gcG9zdGNzcyhbY3JlYXRvcihwbHVnaW5PcHRzKV0pLnByb2Nlc3MoY3NzLCBwcm9jZXNzT3B0cyk7XG4gIH07XG4gIHJldHVybiBjcmVhdG9yO1xufTtcbnBvc3Rjc3Muc3RyaW5naWZ5ID0gc3RyaW5naWZ5O1xucG9zdGNzcy5wYXJzZSA9IHBhcnNlO1xucG9zdGNzcy5mcm9tSlNPTiA9IGZyb21KU09OO1xucG9zdGNzcy5saXN0ID0gbGlzdDtcbnBvc3Rjc3MuY29tbWVudCA9IChkZWZhdWx0cykgPT4gbmV3IENvbW1lbnQyKGRlZmF1bHRzKTtcbnBvc3Rjc3MuYXRSdWxlID0gKGRlZmF1bHRzKSA9PiBuZXcgQXRSdWxlMihkZWZhdWx0cyk7XG5wb3N0Y3NzLmRlY2wgPSAoZGVmYXVsdHMpID0+IG5ldyBEZWNsYXJhdGlvbjIoZGVmYXVsdHMpO1xucG9zdGNzcy5ydWxlID0gKGRlZmF1bHRzKSA9PiBuZXcgUnVsZTIoZGVmYXVsdHMpO1xucG9zdGNzcy5yb290ID0gKGRlZmF1bHRzKSA9PiBuZXcgUm9vdDIoZGVmYXVsdHMpO1xucG9zdGNzcy5kb2N1bWVudCA9IChkZWZhdWx0cykgPT4gbmV3IERvY3VtZW50MihkZWZhdWx0cyk7XG5wb3N0Y3NzLkNzc1N5bnRheEVycm9yID0gQ3NzU3ludGF4RXJyb3IyO1xucG9zdGNzcy5EZWNsYXJhdGlvbiA9IERlY2xhcmF0aW9uMjtcbnBvc3Rjc3MuQ29udGFpbmVyID0gQ29udGFpbmVyMjtcbnBvc3Rjc3MuUHJvY2Vzc29yID0gUHJvY2Vzc29yMjtcbnBvc3Rjc3MuRG9jdW1lbnQgPSBEb2N1bWVudDI7XG5wb3N0Y3NzLkNvbW1lbnQgPSBDb21tZW50MjtcbnBvc3Rjc3MuV2FybmluZyA9IFdhcm5pbmcyO1xucG9zdGNzcy5BdFJ1bGUgPSBBdFJ1bGUyO1xucG9zdGNzcy5SZXN1bHQgPSBSZXN1bHQyO1xucG9zdGNzcy5JbnB1dCA9IElucHV0MjtcbnBvc3Rjc3MuUnVsZSA9IFJ1bGUyO1xucG9zdGNzcy5Sb290ID0gUm9vdDI7XG5wb3N0Y3NzLk5vZGUgPSBOb2RlMjtcbkxhenlSZXN1bHQyLnJlZ2lzdGVyUG9zdGNzcyhwb3N0Y3NzKTtcbnZhciBwb3N0Y3NzXzEgPSBwb3N0Y3NzO1xucG9zdGNzcy5kZWZhdWx0ID0gcG9zdGNzcztcbmNvbnN0IHBvc3Rjc3MkMSA9IC8qIEBfX1BVUkVfXyAqLyBnZXREZWZhdWx0RXhwb3J0RnJvbUNqcyhwb3N0Y3NzXzEpO1xucG9zdGNzcyQxLnN0cmluZ2lmeTtcbnBvc3Rjc3MkMS5mcm9tSlNPTjtcbnBvc3Rjc3MkMS5wbHVnaW47XG5wb3N0Y3NzJDEucGFyc2U7XG5wb3N0Y3NzJDEubGlzdDtcbnBvc3Rjc3MkMS5kb2N1bWVudDtcbnBvc3Rjc3MkMS5jb21tZW50O1xucG9zdGNzcyQxLmF0UnVsZTtcbnBvc3Rjc3MkMS5ydWxlO1xucG9zdGNzcyQxLmRlY2w7XG5wb3N0Y3NzJDEucm9vdDtcbnBvc3Rjc3MkMS5Dc3NTeW50YXhFcnJvcjtcbnBvc3Rjc3MkMS5EZWNsYXJhdGlvbjtcbnBvc3Rjc3MkMS5Db250YWluZXI7XG5wb3N0Y3NzJDEuUHJvY2Vzc29yO1xucG9zdGNzcyQxLkRvY3VtZW50O1xucG9zdGNzcyQxLkNvbW1lbnQ7XG5wb3N0Y3NzJDEuV2FybmluZztcbnBvc3Rjc3MkMS5BdFJ1bGU7XG5wb3N0Y3NzJDEuUmVzdWx0O1xucG9zdGNzcyQxLklucHV0O1xucG9zdGNzcyQxLlJ1bGU7XG5wb3N0Y3NzJDEuUm9vdDtcbnBvc3Rjc3MkMS5Ob2RlO1xuY29uc3QgdGFnTWFwID0ge1xuICBzY3JpcHQ6IFwibm9zY3JpcHRcIixcbiAgLy8gY2FtZWwgY2FzZSBzdmcgZWxlbWVudCB0YWcgbmFtZXNcbiAgYWx0Z2x5cGg6IFwiYWx0R2x5cGhcIixcbiAgYWx0Z2x5cGhkZWY6IFwiYWx0R2x5cGhEZWZcIixcbiAgYWx0Z2x5cGhpdGVtOiBcImFsdEdseXBoSXRlbVwiLFxuICBhbmltYXRlY29sb3I6IFwiYW5pbWF0ZUNvbG9yXCIsXG4gIGFuaW1hdGVtb3Rpb246IFwiYW5pbWF0ZU1vdGlvblwiLFxuICBhbmltYXRldHJhbnNmb3JtOiBcImFuaW1hdGVUcmFuc2Zvcm1cIixcbiAgY2xpcHBhdGg6IFwiY2xpcFBhdGhcIixcbiAgZmVibGVuZDogXCJmZUJsZW5kXCIsXG4gIGZlY29sb3JtYXRyaXg6IFwiZmVDb2xvck1hdHJpeFwiLFxuICBmZWNvbXBvbmVudHRyYW5zZmVyOiBcImZlQ29tcG9uZW50VHJhbnNmZXJcIixcbiAgZmVjb21wb3NpdGU6IFwiZmVDb21wb3NpdGVcIixcbiAgZmVjb252b2x2ZW1hdHJpeDogXCJmZUNvbnZvbHZlTWF0cml4XCIsXG4gIGZlZGlmZnVzZWxpZ2h0aW5nOiBcImZlRGlmZnVzZUxpZ2h0aW5nXCIsXG4gIGZlZGlzcGxhY2VtZW50bWFwOiBcImZlRGlzcGxhY2VtZW50TWFwXCIsXG4gIGZlZGlzdGFudGxpZ2h0OiBcImZlRGlzdGFudExpZ2h0XCIsXG4gIGZlZHJvcHNoYWRvdzogXCJmZURyb3BTaGFkb3dcIixcbiAgZmVmbG9vZDogXCJmZUZsb29kXCIsXG4gIGZlZnVuY2E6IFwiZmVGdW5jQVwiLFxuICBmZWZ1bmNiOiBcImZlRnVuY0JcIixcbiAgZmVmdW5jZzogXCJmZUZ1bmNHXCIsXG4gIGZlZnVuY3I6IFwiZmVGdW5jUlwiLFxuICBmZWdhdXNzaWFuYmx1cjogXCJmZUdhdXNzaWFuQmx1clwiLFxuICBmZWltYWdlOiBcImZlSW1hZ2VcIixcbiAgZmVtZXJnZTogXCJmZU1lcmdlXCIsXG4gIGZlbWVyZ2Vub2RlOiBcImZlTWVyZ2VOb2RlXCIsXG4gIGZlbW9ycGhvbG9neTogXCJmZU1vcnBob2xvZ3lcIixcbiAgZmVvZmZzZXQ6IFwiZmVPZmZzZXRcIixcbiAgZmVwb2ludGxpZ2h0OiBcImZlUG9pbnRMaWdodFwiLFxuICBmZXNwZWN1bGFybGlnaHRpbmc6IFwiZmVTcGVjdWxhckxpZ2h0aW5nXCIsXG4gIGZlc3BvdGxpZ2h0OiBcImZlU3BvdExpZ2h0XCIsXG4gIGZldGlsZTogXCJmZVRpbGVcIixcbiAgZmV0dXJidWxlbmNlOiBcImZlVHVyYnVsZW5jZVwiLFxuICBmb3JlaWdub2JqZWN0OiBcImZvcmVpZ25PYmplY3RcIixcbiAgZ2x5cGhyZWY6IFwiZ2x5cGhSZWZcIixcbiAgbGluZWFyZ3JhZGllbnQ6IFwibGluZWFyR3JhZGllbnRcIixcbiAgcmFkaWFsZ3JhZGllbnQ6IFwicmFkaWFsR3JhZGllbnRcIlxufTtcbmZ1bmN0aW9uIGdldFRhZ05hbWUobikge1xuICBsZXQgdGFnTmFtZSA9IHRhZ01hcFtuLnRhZ05hbWVdID8gdGFnTWFwW24udGFnTmFtZV0gOiBuLnRhZ05hbWU7XG4gIGlmICh0YWdOYW1lID09PSBcImxpbmtcIiAmJiBuLmF0dHJpYnV0ZXMuX2Nzc1RleHQpIHtcbiAgICB0YWdOYW1lID0gXCJzdHlsZVwiO1xuICB9XG4gIHJldHVybiB0YWdOYW1lO1xufVxuZnVuY3Rpb24gYWRhcHRDc3NGb3JSZXBsYXkoY3NzVGV4dCwgY2FjaGUpIHtcbiAgY29uc3QgY2FjaGVkU3R5bGUgPSBjYWNoZSA9PSBudWxsID8gdm9pZCAwIDogY2FjaGUuc3R5bGVzV2l0aEhvdmVyQ2xhc3MuZ2V0KGNzc1RleHQpO1xuICBpZiAoY2FjaGVkU3R5bGUpIHJldHVybiBjYWNoZWRTdHlsZTtcbiAgY29uc3QgYXN0ID0gcG9zdGNzcyQxKFtcbiAgICBtZWRpYVNlbGVjdG9yUGx1Z2luLFxuICAgIHBzZXVkb0NsYXNzUGx1Z2luXG4gIF0pLnByb2Nlc3MoY3NzVGV4dCk7XG4gIGNvbnN0IHJlc3VsdDIgPSBhc3QuY3NzO1xuICBjYWNoZSA9PSBudWxsID8gdm9pZCAwIDogY2FjaGUuc3R5bGVzV2l0aEhvdmVyQ2xhc3Muc2V0KGNzc1RleHQsIHJlc3VsdDIpO1xuICByZXR1cm4gcmVzdWx0Mjtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUNhY2hlKCkge1xuICBjb25zdCBzdHlsZXNXaXRoSG92ZXJDbGFzcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gIHJldHVybiB7XG4gICAgc3R5bGVzV2l0aEhvdmVyQ2xhc3NcbiAgfTtcbn1cbmZ1bmN0aW9uIGFwcGx5Q3NzU3BsaXRzKG4sIGNzc1RleHQsIGhhY2tDc3MsIGNhY2hlKSB7XG4gIGNvbnN0IGNoaWxkVGV4dE5vZGVzID0gW107XG4gIGZvciAoY29uc3Qgc2NuIG9mIG4uY2hpbGROb2Rlcykge1xuICAgIGlmIChzY24udHlwZSA9PT0gTm9kZVR5cGUuVGV4dCkge1xuICAgICAgY2hpbGRUZXh0Tm9kZXMucHVzaChzY24pO1xuICAgIH1cbiAgfVxuICBjb25zdCBjc3NUZXh0U3BsaXRzID0gY3NzVGV4dC5zcGxpdChcIi8qIHJyX3NwbGl0ICovXCIpO1xuICB3aGlsZSAoY3NzVGV4dFNwbGl0cy5sZW5ndGggPiAxICYmIGNzc1RleHRTcGxpdHMubGVuZ3RoID4gY2hpbGRUZXh0Tm9kZXMubGVuZ3RoKSB7XG4gICAgY3NzVGV4dFNwbGl0cy5zcGxpY2UoLTIsIDIsIGNzc1RleHRTcGxpdHMuc2xpY2UoLTIpLmpvaW4oXCJcIikpO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRUZXh0Tm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjaGlsZFRleHROb2RlID0gY2hpbGRUZXh0Tm9kZXNbaV07XG4gICAgY29uc3QgY3NzVGV4dFNlY3Rpb24gPSBjc3NUZXh0U3BsaXRzW2ldO1xuICAgIGlmIChjaGlsZFRleHROb2RlICYmIGNzc1RleHRTZWN0aW9uKSB7XG4gICAgICBjaGlsZFRleHROb2RlLnRleHRDb250ZW50ID0gaGFja0NzcyA/IGFkYXB0Q3NzRm9yUmVwbGF5KGNzc1RleHRTZWN0aW9uLCBjYWNoZSkgOiBjc3NUZXh0U2VjdGlvbjtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGJ1aWxkU3R5bGVOb2RlKG4sIHN0eWxlRWwsIGNzc1RleHQsIG9wdGlvbnMpIHtcbiAgY29uc3QgeyBkb2MsIGhhY2tDc3MsIGNhY2hlIH0gPSBvcHRpb25zO1xuICBpZiAobi5jaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgIGFwcGx5Q3NzU3BsaXRzKG4sIGNzc1RleHQsIGhhY2tDc3MsIGNhY2hlKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoaGFja0Nzcykge1xuICAgICAgY3NzVGV4dCA9IGFkYXB0Q3NzRm9yUmVwbGF5KGNzc1RleHQsIGNhY2hlKTtcbiAgICB9XG4gICAgc3R5bGVFbC5hcHBlbmRDaGlsZChkb2MuY3JlYXRlVGV4dE5vZGUoY3NzVGV4dCkpO1xuICB9XG59XG5mdW5jdGlvbiBidWlsZE5vZGUobiwgb3B0aW9ucykge1xuICB2YXIgX2EsIF9iO1xuICBjb25zdCB7IGRvYywgaGFja0NzcywgY2FjaGUgfSA9IG9wdGlvbnM7XG4gIHN3aXRjaCAobi50eXBlKSB7XG4gICAgY2FzZSBOb2RlVHlwZS5Eb2N1bWVudDpcbiAgICAgIHJldHVybiBkb2MuaW1wbGVtZW50YXRpb24uY3JlYXRlRG9jdW1lbnQobnVsbCwgXCJcIiwgbnVsbCk7XG4gICAgY2FzZSBOb2RlVHlwZS5Eb2N1bWVudFR5cGU6XG4gICAgICByZXR1cm4gZG9jLmltcGxlbWVudGF0aW9uLmNyZWF0ZURvY3VtZW50VHlwZShcbiAgICAgICAgbi5uYW1lIHx8IFwiaHRtbFwiLFxuICAgICAgICBuLnB1YmxpY0lkLFxuICAgICAgICBuLnN5c3RlbUlkXG4gICAgICApO1xuICAgIGNhc2UgTm9kZVR5cGUuRWxlbWVudDoge1xuICAgICAgY29uc3QgdGFnTmFtZSA9IGdldFRhZ05hbWUobik7XG4gICAgICBsZXQgbm9kZTI7XG4gICAgICBpZiAobi5pc1NWRykge1xuICAgICAgICBub2RlMiA9IGRvYy5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCB0YWdOYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAvLyBJZiB0aGUgdGFnIG5hbWUgaXMgYSBjdXN0b20gZWxlbWVudCBuYW1lXG4gICAgICAgICAgbi5pc0N1c3RvbSAmJiAvLyBJZiB0aGUgYnJvd3NlciBzdXBwb3J0cyBjdXN0b20gZWxlbWVudHNcbiAgICAgICAgICAoKF9hID0gZG9jLmRlZmF1bHRWaWV3KSA9PSBudWxsID8gdm9pZCAwIDogX2EuY3VzdG9tRWxlbWVudHMpICYmIC8vIElmIHRoZSBjdXN0b20gZWxlbWVudCBoYXNuJ3QgYmVlbiBkZWZpbmVkIHlldFxuICAgICAgICAgICFkb2MuZGVmYXVsdFZpZXcuY3VzdG9tRWxlbWVudHMuZ2V0KG4udGFnTmFtZSlcbiAgICAgICAgKVxuICAgICAgICAgIGRvYy5kZWZhdWx0Vmlldy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXG4gICAgICAgICAgICBuLnRhZ05hbWUsXG4gICAgICAgICAgICBjbGFzcyBleHRlbmRzIGRvYy5kZWZhdWx0Vmlldy5IVE1MRWxlbWVudCB7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgbm9kZTIgPSBkb2MuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNwZWNpYWxBdHRyaWJ1dGVzID0ge307XG4gICAgICBmb3IgKGNvbnN0IG5hbWUgaW4gbi5hdHRyaWJ1dGVzKSB7XG4gICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4uYXR0cmlidXRlcywgbmFtZSkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdmFsdWUgPSBuLmF0dHJpYnV0ZXNbbmFtZV07XG4gICAgICAgIGlmICh0YWdOYW1lID09PSBcIm9wdGlvblwiICYmIG5hbWUgPT09IFwic2VsZWN0ZWRcIiAmJiB2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPT09IHRydWUpIHZhbHVlID0gXCJcIjtcbiAgICAgICAgaWYgKG5hbWUuc3RhcnRzV2l0aChcInJyX1wiKSkge1xuICAgICAgICAgIHNwZWNpYWxBdHRyaWJ1dGVzW25hbWVdID0gdmFsdWU7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIikgO1xuICAgICAgICBlbHNlIGlmICh0YWdOYW1lID09PSBcInN0eWxlXCIgJiYgbmFtZSA9PT0gXCJfY3NzVGV4dFwiKSB7XG4gICAgICAgICAgYnVpbGRTdHlsZU5vZGUobiwgbm9kZTIsIHZhbHVlLCBvcHRpb25zKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSBlbHNlIGlmICh0YWdOYW1lID09PSBcInRleHRhcmVhXCIgJiYgbmFtZSA9PT0gXCJ2YWx1ZVwiKSB7XG4gICAgICAgICAgbm9kZTIuYXBwZW5kQ2hpbGQoZG9jLmNyZWF0ZVRleHROb2RlKHZhbHVlKSk7XG4gICAgICAgICAgbi5jaGlsZE5vZGVzID0gW107XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAobi5pc1NWRyAmJiBuYW1lID09PSBcInhsaW5rOmhyZWZcIikge1xuICAgICAgICAgICAgbm9kZTIuc2V0QXR0cmlidXRlTlMoXG4gICAgICAgICAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLFxuICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICB2YWx1ZS50b1N0cmluZygpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJvbmxvYWRcIiB8fCBuYW1lID09PSBcIm9uY2xpY2tcIiB8fCBuYW1lLnN1YnN0cmluZygwLCA3KSA9PT0gXCJvbm1vdXNlXCIpIHtcbiAgICAgICAgICAgIG5vZGUyLnNldEF0dHJpYnV0ZShcIl9cIiArIG5hbWUsIHZhbHVlLnRvU3RyaW5nKCkpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGFnTmFtZSA9PT0gXCJtZXRhXCIgJiYgbi5hdHRyaWJ1dGVzW1wiaHR0cC1lcXVpdlwiXSA9PT0gXCJDb250ZW50LVNlY3VyaXR5LVBvbGljeVwiICYmIG5hbWUgPT09IFwiY29udGVudFwiKSB7XG4gICAgICAgICAgICBub2RlMi5zZXRBdHRyaWJ1dGUoXCJjc3AtY29udGVudFwiLCB2YWx1ZS50b1N0cmluZygpKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGFnTmFtZSA9PT0gXCJsaW5rXCIgJiYgKG4uYXR0cmlidXRlcy5yZWwgPT09IFwicHJlbG9hZFwiIHx8IG4uYXR0cmlidXRlcy5yZWwgPT09IFwibW9kdWxlcHJlbG9hZFwiKSAmJiBuLmF0dHJpYnV0ZXMuYXMgPT09IFwic2NyaXB0XCIpIHtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRhZ05hbWUgPT09IFwibGlua1wiICYmIG4uYXR0cmlidXRlcy5yZWwgPT09IFwicHJlZmV0Y2hcIiAmJiB0eXBlb2Ygbi5hdHRyaWJ1dGVzLmhyZWYgPT09IFwic3RyaW5nXCIgJiYgbi5hdHRyaWJ1dGVzLmhyZWYuZW5kc1dpdGgoXCIuanNcIikpIHtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRhZ05hbWUgPT09IFwiaW1nXCIgJiYgbi5hdHRyaWJ1dGVzLnNyY3NldCAmJiBuLmF0dHJpYnV0ZXMucnJfZGF0YVVSTCkge1xuICAgICAgICAgICAgbm9kZTIuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgICBcInJyd2ViLW9yaWdpbmFsLXNyY3NldFwiLFxuICAgICAgICAgICAgICBuLmF0dHJpYnV0ZXMuc3Jjc2V0XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub2RlMi5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUudG9TdHJpbmcoKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IG5hbWUgaW4gc3BlY2lhbEF0dHJpYnV0ZXMpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBzcGVjaWFsQXR0cmlidXRlc1tuYW1lXTtcbiAgICAgICAgaWYgKHRhZ05hbWUgPT09IFwiY2FudmFzXCIgJiYgbmFtZSA9PT0gXCJycl9kYXRhVVJMXCIpIHtcbiAgICAgICAgICBjb25zdCBpbWFnZSA9IGRvYy5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IG5vZGUyLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgICAgIGlmIChjdHgpIHtcbiAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgMCwgMCwgaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgICBpbWFnZS5zcmMgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgICAgIGlmIChub2RlMi5SUk5vZGVUeXBlKVxuICAgICAgICAgICAgbm9kZTIucnJfZGF0YVVSTCA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFnTmFtZSA9PT0gXCJpbWdcIiAmJiBuYW1lID09PSBcInJyX2RhdGFVUkxcIikge1xuICAgICAgICAgIGNvbnN0IGltYWdlID0gbm9kZTI7XG4gICAgICAgICAgaWYgKCFpbWFnZS5jdXJyZW50U3JjLnN0YXJ0c1dpdGgoXCJkYXRhOlwiKSkge1xuICAgICAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgICBcInJyd2ViLW9yaWdpbmFsLXNyY1wiLFxuICAgICAgICAgICAgICBuLmF0dHJpYnV0ZXMuc3JjXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5hbWUgPT09IFwicnJfd2lkdGhcIikge1xuICAgICAgICAgIG5vZGUyLnN0eWxlLndpZHRoID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lID09PSBcInJyX2hlaWdodFwiKSB7XG4gICAgICAgICAgbm9kZTIuc3R5bGUuaGVpZ2h0ID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lID09PSBcInJyX21lZGlhQ3VycmVudFRpbWVcIiAmJiB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICBub2RlMi5jdXJyZW50VGltZSA9IHZhbHVlO1xuICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwicnJfbWVkaWFTdGF0ZVwiKSB7XG4gICAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSBcInBsYXllZFwiOlxuICAgICAgICAgICAgICBub2RlMi5wbGF5KCkuY2F0Y2goKGUpID0+IGNvbnNvbGUud2FybihcIm1lZGlhIHBsYXliYWNrIGVycm9yXCIsIGUpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicGF1c2VkXCI6XG4gICAgICAgICAgICAgIG5vZGUyLnBhdXNlKCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChuYW1lID09PSBcInJyX21lZGlhUGxheWJhY2tSYXRlXCIgJiYgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgbm9kZTIucGxheWJhY2tSYXRlID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJycl9tZWRpYU11dGVkXCIgJiYgdHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgIG5vZGUyLm11dGVkID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJycl9tZWRpYUxvb3BcIiAmJiB0eXBlb2YgdmFsdWUgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgbm9kZTIubG9vcCA9IHZhbHVlO1xuICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwicnJfbWVkaWFWb2x1bWVcIiAmJiB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICBub2RlMi52b2x1bWUgPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lID09PSBcInJyX29wZW5fbW9kZVwiKSB7XG4gICAgICAgICAgbm9kZTIuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgXCJycl9vcGVuX21vZGVcIixcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG4uaXNTaGFkb3dIb3N0KSB7XG4gICAgICAgIGlmICghbm9kZTIuc2hhZG93Um9vdCkge1xuICAgICAgICAgIG5vZGUyLmF0dGFjaFNoYWRvdyh7IG1vZGU6IFwib3BlblwiIH0pO1xuICAgICAgICAgIChfYiA9IG4uY2hyb21hdGljQWRvcHRlZFN0eWxlc2hlZXRzKSA9PSBudWxsID8gdm9pZCAwIDogX2IuZm9yRWFjaChcbiAgICAgICAgICAgIChjaHJvbWF0aWNBZG9wdGVkU3R5bGVzaGVldCkgPT4ge1xuICAgICAgICAgICAgICB2YXIgX2EyO1xuICAgICAgICAgICAgICBjb25zdCBzdHlsZVNoZWV0ID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcbiAgICAgICAgICAgICAgc3R5bGVTaGVldC5yZXBsYWNlU3luYyhjaHJvbWF0aWNBZG9wdGVkU3R5bGVzaGVldCk7XG4gICAgICAgICAgICAgIChfYTIgPSBub2RlMi5zaGFkb3dSb290KSA9PSBudWxsID8gdm9pZCAwIDogX2EyLmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKHN0eWxlU2hlZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2hpbGUgKG5vZGUyLnNoYWRvd1Jvb3QuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgbm9kZTIuc2hhZG93Um9vdC5yZW1vdmVDaGlsZChub2RlMi5zaGFkb3dSb290LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG5vZGUyO1xuICAgIH1cbiAgICBjYXNlIE5vZGVUeXBlLlRleHQ6XG4gICAgICBpZiAobi5pc1N0eWxlICYmIGhhY2tDc3MpIHtcbiAgICAgICAgcmV0dXJuIGRvYy5jcmVhdGVUZXh0Tm9kZShhZGFwdENzc0ZvclJlcGxheShuLnRleHRDb250ZW50LCBjYWNoZSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRvYy5jcmVhdGVUZXh0Tm9kZShuLnRleHRDb250ZW50KTtcbiAgICBjYXNlIE5vZGVUeXBlLkNEQVRBOlxuICAgICAgcmV0dXJuIGRvYy5jcmVhdGVDREFUQVNlY3Rpb24obi50ZXh0Q29udGVudCk7XG4gICAgY2FzZSBOb2RlVHlwZS5Db21tZW50OlxuICAgICAgcmV0dXJuIGRvYy5jcmVhdGVDb21tZW50KG4udGV4dENvbnRlbnQpO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuZnVuY3Rpb24gYnVpbGROb2RlV2l0aFNOKG4sIG9wdGlvbnMpIHtcbiAgY29uc3Qge1xuICAgIGRvYyxcbiAgICBtaXJyb3IsXG4gICAgc2tpcENoaWxkID0gZmFsc2UsXG4gICAgaGFja0NzcyA9IHRydWUsXG4gICAgYWZ0ZXJBcHBlbmQsXG4gICAgY2FjaGVcbiAgfSA9IG9wdGlvbnM7XG4gIGlmIChtaXJyb3IuaGFzKG4uaWQpKSB7XG4gICAgY29uc3Qgbm9kZUluTWlycm9yID0gbWlycm9yLmdldE5vZGUobi5pZCk7XG4gICAgY29uc3QgbWV0YSA9IG1pcnJvci5nZXRNZXRhKG5vZGVJbk1pcnJvcik7XG4gICAgaWYgKGlzTm9kZU1ldGFFcXVhbChtZXRhLCBuKSkgcmV0dXJuIG1pcnJvci5nZXROb2RlKG4uaWQpO1xuICB9XG4gIGxldCBub2RlMiA9IGJ1aWxkTm9kZShuLCB7IGRvYywgaGFja0NzcywgY2FjaGUgfSk7XG4gIGlmICghbm9kZTIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAobi5yb290SWQgJiYgbWlycm9yLmdldE5vZGUobi5yb290SWQpICE9PSBkb2MpIHtcbiAgICBtaXJyb3IucmVwbGFjZShuLnJvb3RJZCwgZG9jKTtcbiAgfVxuICBpZiAobi50eXBlID09PSBOb2RlVHlwZS5Eb2N1bWVudCkge1xuICAgIGRvYy5jbG9zZSgpO1xuICAgIGRvYy5vcGVuKCk7XG4gICAgaWYgKG4uY29tcGF0TW9kZSA9PT0gXCJCYWNrQ29tcGF0XCIgJiYgbi5jaGlsZE5vZGVzICYmIG4uY2hpbGROb2Rlc1swXS50eXBlICE9PSBOb2RlVHlwZS5Eb2N1bWVudFR5cGUpIHtcbiAgICAgIGlmIChuLmNoaWxkTm9kZXNbMF0udHlwZSA9PT0gTm9kZVR5cGUuRWxlbWVudCAmJiBcInhtbG5zXCIgaW4gbi5jaGlsZE5vZGVzWzBdLmF0dHJpYnV0ZXMgJiYgbi5jaGlsZE5vZGVzWzBdLmF0dHJpYnV0ZXMueG1sbnMgPT09IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiKSB7XG4gICAgICAgIGRvYy53cml0ZShcbiAgICAgICAgICAnPCFET0NUWVBFIGh0bWwgUFVCTElDIFwiLS8vVzNDLy9EVEQgWEhUTUwgMS4wIFRyYW5zaXRpb25hbC8vRU5cIiBcIlwiPidcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvYy53cml0ZShcbiAgICAgICAgICAnPCFET0NUWVBFIGh0bWwgUFVCTElDIFwiLS8vVzNDLy9EVEQgSFRNTCA0LjAgVHJhbnNpdGlvbmFsLy9FTlwiIFwiXCI+J1xuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICBub2RlMiA9IGRvYztcbiAgfVxuICBtaXJyb3IuYWRkKG5vZGUyLCBuKTtcbiAgaWYgKChuLnR5cGUgPT09IE5vZGVUeXBlLkRvY3VtZW50IHx8IG4udHlwZSA9PT0gTm9kZVR5cGUuRWxlbWVudCkgJiYgIXNraXBDaGlsZCkge1xuICAgIGZvciAoY29uc3QgY2hpbGROIG9mIG4uY2hpbGROb2Rlcykge1xuICAgICAgY29uc3QgY2hpbGROb2RlID0gYnVpbGROb2RlV2l0aFNOKGNoaWxkTiwge1xuICAgICAgICBkb2MsXG4gICAgICAgIG1pcnJvcixcbiAgICAgICAgc2tpcENoaWxkOiBmYWxzZSxcbiAgICAgICAgaGFja0NzcyxcbiAgICAgICAgYWZ0ZXJBcHBlbmQsXG4gICAgICAgIGNhY2hlXG4gICAgICB9KTtcbiAgICAgIGlmICghY2hpbGROb2RlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIkZhaWxlZCB0byByZWJ1aWxkXCIsIGNoaWxkTik7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKGNoaWxkTi5pc1NoYWRvdyAmJiBpc0VsZW1lbnQobm9kZTIpICYmIG5vZGUyLnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgbm9kZTIuc2hhZG93Um9vdC5hcHBlbmRDaGlsZChjaGlsZE5vZGUpO1xuICAgICAgfSBlbHNlIGlmIChuLnR5cGUgPT09IE5vZGVUeXBlLkRvY3VtZW50ICYmIGNoaWxkTi50eXBlID09IE5vZGVUeXBlLkVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgaHRtbEVsZW1lbnQgPSBjaGlsZE5vZGU7XG4gICAgICAgIGxldCBib2R5ID0gbnVsbDtcbiAgICAgICAgaHRtbEVsZW1lbnQuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgIGlmIChjaGlsZC5ub2RlTmFtZSA9PT0gXCJCT0RZXCIpIGJvZHkgPSBjaGlsZDtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChib2R5KSB7XG4gICAgICAgICAgaHRtbEVsZW1lbnQucmVtb3ZlQ2hpbGQoYm9keSk7XG4gICAgICAgICAgbm9kZTIuYXBwZW5kQ2hpbGQoY2hpbGROb2RlKTtcbiAgICAgICAgICBodG1sRWxlbWVudC5hcHBlbmRDaGlsZChib2R5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub2RlMi5hcHBlbmRDaGlsZChjaGlsZE5vZGUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlMi5hcHBlbmRDaGlsZChjaGlsZE5vZGUpO1xuICAgICAgfVxuICAgICAgaWYgKGFmdGVyQXBwZW5kKSB7XG4gICAgICAgIGFmdGVyQXBwZW5kKGNoaWxkTm9kZSwgY2hpbGROLmlkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5vZGUyO1xufVxuZnVuY3Rpb24gdmlzaXQobWlycm9yLCBvblZpc2l0KSB7XG4gIGZ1bmN0aW9uIHdhbGsobm9kZTIpIHtcbiAgICBvblZpc2l0KG5vZGUyKTtcbiAgfVxuICBmb3IgKGNvbnN0IGlkIG9mIG1pcnJvci5nZXRJZHMoKSkge1xuICAgIGlmIChtaXJyb3IuaGFzKGlkKSkge1xuICAgICAgd2FsayhtaXJyb3IuZ2V0Tm9kZShpZCkpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gaGFuZGxlU2Nyb2xsKG5vZGUyLCBtaXJyb3IpIHtcbiAgY29uc3QgbiA9IG1pcnJvci5nZXRNZXRhKG5vZGUyKTtcbiAgaWYgKChuID09IG51bGwgPyB2b2lkIDAgOiBuLnR5cGUpICE9PSBOb2RlVHlwZS5FbGVtZW50KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGVsID0gbm9kZTI7XG4gIGZvciAoY29uc3QgbmFtZSBpbiBuLmF0dHJpYnV0ZXMpIHtcbiAgICBpZiAoIShPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobi5hdHRyaWJ1dGVzLCBuYW1lKSAmJiBuYW1lLnN0YXJ0c1dpdGgoXCJycl9cIikpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgY29uc3QgdmFsdWUgPSBuLmF0dHJpYnV0ZXNbbmFtZV07XG4gICAgaWYgKG5hbWUgPT09IFwicnJfc2Nyb2xsTGVmdFwiKSB7XG4gICAgICBlbC5zY3JvbGxMZWZ0ID0gdmFsdWU7XG4gICAgfVxuICAgIGlmIChuYW1lID09PSBcInJyX3Njcm9sbFRvcFwiKSB7XG4gICAgICBlbC5zY3JvbGxUb3AgPSB2YWx1ZTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIHJlYnVpbGQobiwgb3B0aW9ucykge1xuICBjb25zdCB7XG4gICAgZG9jLFxuICAgIG9uVmlzaXQsXG4gICAgaGFja0NzcyA9IHRydWUsXG4gICAgYWZ0ZXJBcHBlbmQsXG4gICAgY2FjaGUsXG4gICAgbWlycm9yID0gbmV3IE1pcnJvcigpXG4gIH0gPSBvcHRpb25zO1xuICBjb25zdCBub2RlMiA9IGJ1aWxkTm9kZVdpdGhTTihuLCB7XG4gICAgZG9jLFxuICAgIG1pcnJvcixcbiAgICBza2lwQ2hpbGQ6IGZhbHNlLFxuICAgIGhhY2tDc3MsXG4gICAgYWZ0ZXJBcHBlbmQsXG4gICAgY2FjaGVcbiAgfSk7XG4gIHZpc2l0KG1pcnJvciwgKHZpc2l0ZWROb2RlKSA9PiB7XG4gICAgaWYgKG9uVmlzaXQpIHtcbiAgICAgIG9uVmlzaXQodmlzaXRlZE5vZGUpO1xuICAgIH1cbiAgICBoYW5kbGVTY3JvbGwodmlzaXRlZE5vZGUsIG1pcnJvcik7XG4gIH0pO1xuICByZXR1cm4gbm9kZTI7XG59XG5leHBvcnQge1xuICBJR05PUkVEX05PREUsXG4gIE1pcnJvcixcbiAgTm9kZVR5cGUsXG4gIGFic29sdXRpZnlVUkxzLFxuICBhZGFwdENzc0ZvclJlcGxheSxcbiAgYnVpbGROb2RlV2l0aFNOLFxuICBjbGFzc01hdGNoZXNSZWdleCxcbiAgY2xlYW51cFNuYXBzaG90LFxuICBjcmVhdGVDYWNoZSxcbiAgY3JlYXRlTWlycm9yLFxuICBlc2NhcGVJbXBvcnRTdGF0ZW1lbnQsXG4gIGV4dHJhY3RGaWxlRXh0ZW5zaW9uLFxuICBmaXhTYWZhcmlDb2xvbnMsXG4gIGdlbklkLFxuICBnZXRJbnB1dFR5cGUsXG4gIGlnbm9yZUF0dHJpYnV0ZSxcbiAgaXMyRENhbnZhc0JsYW5rLFxuICBpc0NTU0ltcG9ydFJ1bGUsXG4gIGlzQ1NTU3R5bGVSdWxlLFxuICBpc0VsZW1lbnQsXG4gIGlzTmF0aXZlU2hhZG93RG9tLFxuICBpc05vZGVNZXRhRXF1YWwsXG4gIGlzU2hhZG93Um9vdCxcbiAgbWFya0Nzc1NwbGl0cyxcbiAgbWFza0lucHV0VmFsdWUsXG4gIG5lZWRNYXNraW5nVGV4dCxcbiAgbm9ybWFsaXplQ3NzU3RyaW5nLFxuICByZWJ1aWxkLFxuICBzZXJpYWxpemVOb2RlV2l0aElkLFxuICBzbmFwc2hvdCxcbiAgc3BsaXRDc3NUZXh0LFxuICBzdHJpbmdpZnlSdWxlLFxuICBzdHJpbmdpZnlTdHlsZXNoZWV0LFxuICB0b0xvd2VyQ2FzZSxcbiAgdHJhbnNmb3JtQXR0cmlidXRlLFxuICB2aXNpdFNuYXBzaG90XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cnJ3ZWItc25hcHNob3QuanMubWFwXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vIFRoaXMgZXhhbXBsZSBzdXBwb3J0L2UyZS50cyBpcyBwcm9jZXNzZWQgYW5kXG4vLyBsb2FkZWQgYXV0b21hdGljYWxseSBiZWZvcmUgeW91ciB0ZXN0IGZpbGVzLlxuLy9cbi8vIFRoaXMgaXMgYSBncmVhdCBwbGFjZSB0byBwdXQgZ2xvYmFsIGNvbmZpZ3VyYXRpb24gYW5kXG4vLyBiZWhhdmlvciB0aGF0IG1vZGlmaWVzIEN5cHJlc3MuXG4vL1xuLy8gWW91IGNhbiBjaGFuZ2UgdGhlIGxvY2F0aW9uIG9mIHRoaXMgZmlsZSBvciB0dXJuIG9mZlxuLy8gYXV0b21hdGljYWxseSBzZXJ2aW5nIHN1cHBvcnQgZmlsZXMgd2l0aCB0aGVcbi8vICdzdXBwb3J0RmlsZScgY29uZmlndXJhdGlvbiBvcHRpb24uXG4vL1xuLy8gWW91IGNhbiByZWFkIG1vcmUgaGVyZTpcbi8vIGh0dHBzOi8vb24uY3lwcmVzcy5pby9jb25maWd1cmF0aW9uXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4vLyBJbXBvcnQgY29tbWFuZHMuanMgdXNpbmcgRVMyMDE1IHN5bnRheDpcbmltcG9ydCBcIi4vY29tbWFuZHNcIjtcblxuLy8gQWx0ZXJuYXRpdmVseSB5b3UgY2FuIHVzZSBDb21tb25KUyBzeW50YXg6XG4vLyByZXF1aXJlKCcuL2NvbW1hbmRzJylcbmltcG9ydCBcIkBjaHJvbWF0aWMtY29tL2N5cHJlc3Mvc3VwcG9ydFwiO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9