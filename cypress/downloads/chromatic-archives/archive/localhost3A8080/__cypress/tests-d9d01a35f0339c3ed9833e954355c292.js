/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/.pnpm/@chromaui+test-archiver@0.0.56_@playwright+test@1.47.2/node_modules/@chromaui/test-archiver/dist/cypress-api/support.js":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@chromaui+test-archiver@0.0.56_@playwright+test@1.47.2/node_modules/@chromaui/test-archiver/dist/cypress-api/support.js ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {



var rrwebSnapshot = __webpack_require__(/*! rrweb-snapshot */ "./node_modules/.pnpm/rrweb-snapshot@2.0.0-alpha.4/node_modules/rrweb-snapshot/es/rrweb-snapshot.js");

Cypress.Commands.add("takeChromaticArchive",()=>{cy.document().then(a=>{let t=rrwebSnapshot.snapshot(a);cy.get("@manualSnapshots").then(s=>[...s,t]).as("manualSnapshots");});});beforeEach(()=>{cy.wrap([]).as("manualSnapshots"),cy.task("prepareArchives",{action:"setup-network-listener"});});afterEach(()=>{cy.document().then(a=>{let t=rrwebSnapshot.snapshot(a);cy.get("@manualSnapshots").then((s=[])=>{cy.url().then(e=>{cy.task("prepareArchives",{action:"save-archives",payload:{testTitle:Cypress.currentTest.title,domSnapshots:[...s,t],chromaticStorybookParams:{diffThreshold:Cypress.env("diffThreshold")},pageUrl:e}});});});});});
//# sourceMappingURL=out.js.map
//# sourceMappingURL=support.js.map

/***/ }),

/***/ "./node_modules/.pnpm/rrweb-snapshot@2.0.0-alpha.4/node_modules/rrweb-snapshot/es/rrweb-snapshot.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/rrweb-snapshot@2.0.0-alpha.4/node_modules/rrweb-snapshot/es/rrweb-snapshot.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IGNORED_NODE: () => (/* binding */ IGNORED_NODE),
/* harmony export */   Mirror: () => (/* binding */ Mirror),
/* harmony export */   NodeType: () => (/* binding */ NodeType),
/* harmony export */   addHoverClass: () => (/* binding */ addHoverClass),
/* harmony export */   buildNodeWithSN: () => (/* binding */ buildNodeWithSN),
/* harmony export */   classMatchesRegex: () => (/* binding */ classMatchesRegex),
/* harmony export */   cleanupSnapshot: () => (/* binding */ cleanupSnapshot),
/* harmony export */   createCache: () => (/* binding */ createCache),
/* harmony export */   createMirror: () => (/* binding */ createMirror),
/* harmony export */   genId: () => (/* binding */ genId),
/* harmony export */   getCssRuleString: () => (/* binding */ getCssRuleString),
/* harmony export */   getCssRulesString: () => (/* binding */ getCssRulesString),
/* harmony export */   is2DCanvasBlank: () => (/* binding */ is2DCanvasBlank),
/* harmony export */   isCSSImportRule: () => (/* binding */ isCSSImportRule),
/* harmony export */   isElement: () => (/* binding */ isElement),
/* harmony export */   isNativeShadowDom: () => (/* binding */ isNativeShadowDom),
/* harmony export */   isShadowRoot: () => (/* binding */ isShadowRoot),
/* harmony export */   maskInputValue: () => (/* binding */ maskInputValue),
/* harmony export */   needMaskingText: () => (/* binding */ needMaskingText),
/* harmony export */   rebuild: () => (/* binding */ rebuild),
/* harmony export */   serializeNodeWithId: () => (/* binding */ serializeNodeWithId),
/* harmony export */   snapshot: () => (/* binding */ snapshot),
/* harmony export */   transformAttribute: () => (/* binding */ transformAttribute),
/* harmony export */   visitSnapshot: () => (/* binding */ visitSnapshot)
/* harmony export */ });
var NodeType;
(function (NodeType) {
    NodeType[NodeType["Document"] = 0] = "Document";
    NodeType[NodeType["DocumentType"] = 1] = "DocumentType";
    NodeType[NodeType["Element"] = 2] = "Element";
    NodeType[NodeType["Text"] = 3] = "Text";
    NodeType[NodeType["CDATA"] = 4] = "CDATA";
    NodeType[NodeType["Comment"] = 5] = "Comment";
})(NodeType || (NodeType = {}));

function isElement(n) {
    return n.nodeType === n.ELEMENT_NODE;
}
function isShadowRoot(n) {
    var host = n === null || n === void 0 ? void 0 : n.host;
    return Boolean((host === null || host === void 0 ? void 0 : host.shadowRoot) === n);
}
function isNativeShadowDom(shadowRoot) {
    return Object.prototype.toString.call(shadowRoot) === '[object ShadowRoot]';
}
function fixBrowserCompatibilityIssuesInCSS(cssText) {
    if (cssText.includes(' background-clip: text;') &&
        !cssText.includes(' -webkit-background-clip: text;')) {
        cssText = cssText.replace(' background-clip: text;', ' -webkit-background-clip: text; background-clip: text;');
    }
    return cssText;
}
function getCssRulesString(s) {
    try {
        var rules = s.rules || s.cssRules;
        return rules
            ? fixBrowserCompatibilityIssuesInCSS(Array.from(rules).map(getCssRuleString).join(''))
            : null;
    }
    catch (error) {
        return null;
    }
}
function getCssRuleString(rule) {
    var cssStringified = rule.cssText;
    if (isCSSImportRule(rule)) {
        try {
            cssStringified = getCssRulesString(rule.styleSheet) || cssStringified;
        }
        catch (_a) {
        }
    }
    return cssStringified;
}
function isCSSImportRule(rule) {
    return 'styleSheet' in rule;
}
var Mirror = (function () {
    function Mirror() {
        this.idNodeMap = new Map();
        this.nodeMetaMap = new WeakMap();
    }
    Mirror.prototype.getId = function (n) {
        var _a;
        if (!n)
            return -1;
        var id = (_a = this.getMeta(n)) === null || _a === void 0 ? void 0 : _a.id;
        return id !== null && id !== void 0 ? id : -1;
    };
    Mirror.prototype.getNode = function (id) {
        return this.idNodeMap.get(id) || null;
    };
    Mirror.prototype.getIds = function () {
        return Array.from(this.idNodeMap.keys());
    };
    Mirror.prototype.getMeta = function (n) {
        return this.nodeMetaMap.get(n) || null;
    };
    Mirror.prototype.removeNodeFromMap = function (n) {
        var _this = this;
        var id = this.getId(n);
        this.idNodeMap["delete"](id);
        if (n.childNodes) {
            n.childNodes.forEach(function (childNode) {
                return _this.removeNodeFromMap(childNode);
            });
        }
    };
    Mirror.prototype.has = function (id) {
        return this.idNodeMap.has(id);
    };
    Mirror.prototype.hasNode = function (node) {
        return this.nodeMetaMap.has(node);
    };
    Mirror.prototype.add = function (n, meta) {
        var id = meta.id;
        this.idNodeMap.set(id, n);
        this.nodeMetaMap.set(n, meta);
    };
    Mirror.prototype.replace = function (id, n) {
        var oldNode = this.getNode(id);
        if (oldNode) {
            var meta = this.nodeMetaMap.get(oldNode);
            if (meta)
                this.nodeMetaMap.set(n, meta);
        }
        this.idNodeMap.set(id, n);
    };
    Mirror.prototype.reset = function () {
        this.idNodeMap = new Map();
        this.nodeMetaMap = new WeakMap();
    };
    return Mirror;
}());
function createMirror() {
    return new Mirror();
}
function maskInputValue(_a) {
    var maskInputOptions = _a.maskInputOptions, tagName = _a.tagName, type = _a.type, value = _a.value, maskInputFn = _a.maskInputFn;
    var text = value || '';
    if (maskInputOptions[tagName.toLowerCase()] ||
        maskInputOptions[type]) {
        if (maskInputFn) {
            text = maskInputFn(text);
        }
        else {
            text = '*'.repeat(text.length);
        }
    }
    return text;
}
var ORIGINAL_ATTRIBUTE_NAME = '__rrweb_original__';
function is2DCanvasBlank(canvas) {
    var ctx = canvas.getContext('2d');
    if (!ctx)
        return true;
    var chunkSize = 50;
    for (var x = 0; x < canvas.width; x += chunkSize) {
        for (var y = 0; y < canvas.height; y += chunkSize) {
            var getImageData = ctx.getImageData;
            var originalGetImageData = ORIGINAL_ATTRIBUTE_NAME in getImageData
                ? getImageData[ORIGINAL_ATTRIBUTE_NAME]
                : getImageData;
            var pixelBuffer = new Uint32Array(originalGetImageData.call(ctx, x, y, Math.min(chunkSize, canvas.width - x), Math.min(chunkSize, canvas.height - y)).data.buffer);
            if (pixelBuffer.some(function (pixel) { return pixel !== 0; }))
                return false;
        }
    }
    return true;
}

var _id = 1;
var tagNameRegex = new RegExp('[^a-z0-9-_:]');
var IGNORED_NODE = -2;
function genId() {
    return _id++;
}
function getValidTagName(element) {
    if (element instanceof HTMLFormElement) {
        return 'form';
    }
    var processedTagName = element.tagName.toLowerCase().trim();
    if (tagNameRegex.test(processedTagName)) {
        return 'div';
    }
    return processedTagName;
}
function stringifyStyleSheet(sheet) {
    return sheet.cssRules
        ? Array.from(sheet.cssRules)
            .map(function (rule) { return rule.cssText || ''; })
            .join('')
        : '';
}
function extractOrigin(url) {
    var origin = '';
    if (url.indexOf('//') > -1) {
        origin = url.split('/').slice(0, 3).join('/');
    }
    else {
        origin = url.split('/')[0];
    }
    origin = origin.split('?')[0];
    return origin;
}
var canvasService;
var canvasCtx;
var URL_IN_CSS_REF = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm;
var RELATIVE_PATH = /^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/|#).*/;
var DATA_URI = /^(data:)([^,]*),(.*)/i;
function absoluteToStylesheet(cssText, href) {
    return (cssText || '').replace(URL_IN_CSS_REF, function (origin, quote1, path1, quote2, path2, path3) {
        var filePath = path1 || path2 || path3;
        var maybeQuote = quote1 || quote2 || '';
        if (!filePath) {
            return origin;
        }
        if (!RELATIVE_PATH.test(filePath)) {
            return "url(".concat(maybeQuote).concat(filePath).concat(maybeQuote, ")");
        }
        if (DATA_URI.test(filePath)) {
            return "url(".concat(maybeQuote).concat(filePath).concat(maybeQuote, ")");
        }
        if (filePath[0] === '/') {
            return "url(".concat(maybeQuote).concat(extractOrigin(href) + filePath).concat(maybeQuote, ")");
        }
        var stack = href.split('/');
        var parts = filePath.split('/');
        stack.pop();
        for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
            var part = parts_1[_i];
            if (part === '.') {
                continue;
            }
            else if (part === '..') {
                stack.pop();
            }
            else {
                stack.push(part);
            }
        }
        return "url(".concat(maybeQuote).concat(stack.join('/')).concat(maybeQuote, ")");
    });
}
var SRCSET_NOT_SPACES = /^[^ \t\n\r\u000c]+/;
var SRCSET_COMMAS_OR_SPACES = /^[, \t\n\r\u000c]+/;
function getAbsoluteSrcsetString(doc, attributeValue) {
    if (attributeValue.trim() === '') {
        return attributeValue;
    }
    var pos = 0;
    function collectCharacters(regEx) {
        var chars;
        var match = regEx.exec(attributeValue.substring(pos));
        if (match) {
            chars = match[0];
            pos += chars.length;
            return chars;
        }
        return '';
    }
    var output = [];
    while (true) {
        collectCharacters(SRCSET_COMMAS_OR_SPACES);
        if (pos >= attributeValue.length) {
            break;
        }
        var url = collectCharacters(SRCSET_NOT_SPACES);
        if (url.slice(-1) === ',') {
            url = absoluteToDoc(doc, url.substring(0, url.length - 1));
            output.push(url);
        }
        else {
            var descriptorsStr = '';
            url = absoluteToDoc(doc, url);
            var inParens = false;
            while (true) {
                var c = attributeValue.charAt(pos);
                if (c === '') {
                    output.push((url + descriptorsStr).trim());
                    break;
                }
                else if (!inParens) {
                    if (c === ',') {
                        pos += 1;
                        output.push((url + descriptorsStr).trim());
                        break;
                    }
                    else if (c === '(') {
                        inParens = true;
                    }
                }
                else {
                    if (c === ')') {
                        inParens = false;
                    }
                }
                descriptorsStr += c;
                pos += 1;
            }
        }
    }
    return output.join(', ');
}
function absoluteToDoc(doc, attributeValue) {
    if (!attributeValue || attributeValue.trim() === '') {
        return attributeValue;
    }
    var a = doc.createElement('a');
    a.href = attributeValue;
    return a.href;
}
function isSVGElement(el) {
    return Boolean(el.tagName === 'svg' || el.ownerSVGElement);
}
function getHref() {
    var a = document.createElement('a');
    a.href = '';
    return a.href;
}
function transformAttribute(doc, tagName, name, value) {
    if (name === 'src' ||
        (name === 'href' && value && !(tagName === 'use' && value[0] === '#'))) {
        return absoluteToDoc(doc, value);
    }
    else if (name === 'xlink:href' && value && value[0] !== '#') {
        return absoluteToDoc(doc, value);
    }
    else if (name === 'background' &&
        value &&
        (tagName === 'table' || tagName === 'td' || tagName === 'th')) {
        return absoluteToDoc(doc, value);
    }
    else if (name === 'srcset' && value) {
        return getAbsoluteSrcsetString(doc, value);
    }
    else if (name === 'style' && value) {
        return absoluteToStylesheet(value, getHref());
    }
    else if (tagName === 'object' && name === 'data' && value) {
        return absoluteToDoc(doc, value);
    }
    else {
        return value;
    }
}
function _isBlockedElement(element, blockClass, blockSelector) {
    if (typeof blockClass === 'string') {
        if (element.classList.contains(blockClass)) {
            return true;
        }
    }
    else {
        for (var eIndex = element.classList.length; eIndex--;) {
            var className = element.classList[eIndex];
            if (blockClass.test(className)) {
                return true;
            }
        }
    }
    if (blockSelector) {
        return element.matches(blockSelector);
    }
    return false;
}
function classMatchesRegex(node, regex, checkAncestors) {
    if (!node)
        return false;
    if (node.nodeType !== node.ELEMENT_NODE) {
        if (!checkAncestors)
            return false;
        return classMatchesRegex(node.parentNode, regex, checkAncestors);
    }
    for (var eIndex = node.classList.length; eIndex--;) {
        var className = node.classList[eIndex];
        if (regex.test(className)) {
            return true;
        }
    }
    if (!checkAncestors)
        return false;
    return classMatchesRegex(node.parentNode, regex, checkAncestors);
}
function needMaskingText(node, maskTextClass, maskTextSelector) {
    var el = node.nodeType === node.ELEMENT_NODE
        ? node
        : node.parentElement;
    if (el === null)
        return false;
    if (typeof maskTextClass === 'string') {
        if (el.classList.contains(maskTextClass))
            return true;
        if (el.closest(".".concat(maskTextClass)))
            return true;
    }
    else {
        if (classMatchesRegex(el, maskTextClass, true))
            return true;
    }
    if (maskTextSelector) {
        if (el.matches(maskTextSelector))
            return true;
        if (el.closest(maskTextSelector))
            return true;
    }
    return false;
}
function onceIframeLoaded(iframeEl, listener, iframeLoadTimeout) {
    var win = iframeEl.contentWindow;
    if (!win) {
        return;
    }
    var fired = false;
    var readyState;
    try {
        readyState = win.document.readyState;
    }
    catch (error) {
        return;
    }
    if (readyState !== 'complete') {
        var timer_1 = setTimeout(function () {
            if (!fired) {
                listener();
                fired = true;
            }
        }, iframeLoadTimeout);
        iframeEl.addEventListener('load', function () {
            clearTimeout(timer_1);
            fired = true;
            listener();
        });
        return;
    }
    var blankUrl = 'about:blank';
    if (win.location.href !== blankUrl ||
        iframeEl.src === blankUrl ||
        iframeEl.src === '') {
        setTimeout(listener, 0);
        return iframeEl.addEventListener('load', listener);
    }
    iframeEl.addEventListener('load', listener);
}
function onceStylesheetLoaded(link, listener, styleSheetLoadTimeout) {
    var fired = false;
    var styleSheetLoaded;
    try {
        styleSheetLoaded = link.sheet;
    }
    catch (error) {
        return;
    }
    if (styleSheetLoaded)
        return;
    var timer = setTimeout(function () {
        if (!fired) {
            listener();
            fired = true;
        }
    }, styleSheetLoadTimeout);
    link.addEventListener('load', function () {
        clearTimeout(timer);
        fired = true;
        listener();
    });
}
function serializeNode(n, options) {
    var doc = options.doc, mirror = options.mirror, blockClass = options.blockClass, blockSelector = options.blockSelector, maskTextClass = options.maskTextClass, maskTextSelector = options.maskTextSelector, inlineStylesheet = options.inlineStylesheet, _a = options.maskInputOptions, maskInputOptions = _a === void 0 ? {} : _a, maskTextFn = options.maskTextFn, maskInputFn = options.maskInputFn, _b = options.dataURLOptions, dataURLOptions = _b === void 0 ? {} : _b, inlineImages = options.inlineImages, recordCanvas = options.recordCanvas, keepIframeSrcFn = options.keepIframeSrcFn, _c = options.newlyAddedElement, newlyAddedElement = _c === void 0 ? false : _c;
    var rootId = getRootId(doc, mirror);
    switch (n.nodeType) {
        case n.DOCUMENT_NODE:
            if (n.compatMode !== 'CSS1Compat') {
                return {
                    type: NodeType.Document,
                    childNodes: [],
                    compatMode: n.compatMode
                };
            }
            else {
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
                rootId: rootId
            };
        case n.ELEMENT_NODE:
            return serializeElementNode(n, {
                doc: doc,
                blockClass: blockClass,
                blockSelector: blockSelector,
                inlineStylesheet: inlineStylesheet,
                maskInputOptions: maskInputOptions,
                maskInputFn: maskInputFn,
                dataURLOptions: dataURLOptions,
                inlineImages: inlineImages,
                recordCanvas: recordCanvas,
                keepIframeSrcFn: keepIframeSrcFn,
                newlyAddedElement: newlyAddedElement,
                rootId: rootId
            });
        case n.TEXT_NODE:
            return serializeTextNode(n, {
                maskTextClass: maskTextClass,
                maskTextSelector: maskTextSelector,
                maskTextFn: maskTextFn,
                rootId: rootId
            });
        case n.CDATA_SECTION_NODE:
            return {
                type: NodeType.CDATA,
                textContent: '',
                rootId: rootId
            };
        case n.COMMENT_NODE:
            return {
                type: NodeType.Comment,
                textContent: n.textContent || '',
                rootId: rootId
            };
        default:
            return false;
    }
}
function getRootId(doc, mirror) {
    if (!mirror.hasNode(doc))
        return undefined;
    var docId = mirror.getId(doc);
    return docId === 1 ? undefined : docId;
}
function serializeTextNode(n, options) {
    var _a;
    var maskTextClass = options.maskTextClass, maskTextSelector = options.maskTextSelector, maskTextFn = options.maskTextFn, rootId = options.rootId;
    var parentTagName = n.parentNode && n.parentNode.tagName;
    var textContent = n.textContent;
    var isStyle = parentTagName === 'STYLE' ? true : undefined;
    var isScript = parentTagName === 'SCRIPT' ? true : undefined;
    if (isStyle && textContent) {
        try {
            if (n.nextSibling || n.previousSibling) {
            }
            else if ((_a = n.parentNode.sheet) === null || _a === void 0 ? void 0 : _a.cssRules) {
                textContent = stringifyStyleSheet(n.parentNode.sheet);
            }
        }
        catch (err) {
            console.warn("Cannot get CSS styles from text's parentNode. Error: ".concat(err), n);
        }
        textContent = absoluteToStylesheet(textContent, getHref());
    }
    if (isScript) {
        textContent = 'SCRIPT_PLACEHOLDER';
    }
    if (!isStyle &&
        !isScript &&
        textContent &&
        needMaskingText(n, maskTextClass, maskTextSelector)) {
        textContent = maskTextFn
            ? maskTextFn(textContent)
            : textContent.replace(/[\S]/g, '*');
    }
    return {
        type: NodeType.Text,
        textContent: textContent || '',
        isStyle: isStyle,
        rootId: rootId
    };
}
function serializeElementNode(n, options) {
    var doc = options.doc, blockClass = options.blockClass, blockSelector = options.blockSelector, inlineStylesheet = options.inlineStylesheet, _a = options.maskInputOptions, maskInputOptions = _a === void 0 ? {} : _a, maskInputFn = options.maskInputFn, _b = options.dataURLOptions, dataURLOptions = _b === void 0 ? {} : _b, inlineImages = options.inlineImages, recordCanvas = options.recordCanvas, keepIframeSrcFn = options.keepIframeSrcFn, _c = options.newlyAddedElement, newlyAddedElement = _c === void 0 ? false : _c, rootId = options.rootId;
    var needBlock = _isBlockedElement(n, blockClass, blockSelector);
    var tagName = getValidTagName(n);
    var attributes = {};
    var len = n.attributes.length;
    for (var i = 0; i < len; i++) {
        var attr = n.attributes[i];
        attributes[attr.name] = transformAttribute(doc, tagName, attr.name, attr.value);
    }
    if (tagName === 'link' && inlineStylesheet) {
        var stylesheet = Array.from(doc.styleSheets).find(function (s) {
            return s.href === n.href;
        });
        var cssText = null;
        if (stylesheet) {
            cssText = getCssRulesString(stylesheet);
        }
        if (cssText) {
            delete attributes.rel;
            delete attributes.href;
            attributes._cssText = absoluteToStylesheet(cssText, stylesheet.href);
        }
    }
    if (tagName === 'style' &&
        n.sheet &&
        !(n.innerText || n.textContent || '').trim().length) {
        var cssText = getCssRulesString(n.sheet);
        if (cssText) {
            attributes._cssText = absoluteToStylesheet(cssText, getHref());
        }
    }
    if (tagName === 'input' || tagName === 'textarea' || tagName === 'select') {
        var value = n.value;
        var checked = n.checked;
        if (attributes.type !== 'radio' &&
            attributes.type !== 'checkbox' &&
            attributes.type !== 'submit' &&
            attributes.type !== 'button' &&
            value) {
            attributes.value = maskInputValue({
                type: attributes.type,
                tagName: tagName,
                value: value,
                maskInputOptions: maskInputOptions,
                maskInputFn: maskInputFn
            });
        }
        else if (checked) {
            attributes.checked = checked;
        }
    }
    if (tagName === 'option') {
        if (n.selected && !maskInputOptions['select']) {
            attributes.selected = true;
        }
        else {
            delete attributes.selected;
        }
    }
    if (tagName === 'canvas' && recordCanvas) {
        if (n.__context === '2d') {
            if (!is2DCanvasBlank(n)) {
                attributes.rr_dataURL = n.toDataURL(dataURLOptions.type, dataURLOptions.quality);
            }
        }
        else if (!('__context' in n)) {
            var canvasDataURL = n.toDataURL(dataURLOptions.type, dataURLOptions.quality);
            var blankCanvas = document.createElement('canvas');
            blankCanvas.width = n.width;
            blankCanvas.height = n.height;
            var blankCanvasDataURL = blankCanvas.toDataURL(dataURLOptions.type, dataURLOptions.quality);
            if (canvasDataURL !== blankCanvasDataURL) {
                attributes.rr_dataURL = canvasDataURL;
            }
        }
    }
    if (tagName === 'img' && inlineImages) {
        if (!canvasService) {
            canvasService = doc.createElement('canvas');
            canvasCtx = canvasService.getContext('2d');
        }
        var image_1 = n;
        var oldValue_1 = image_1.crossOrigin;
        image_1.crossOrigin = 'anonymous';
        var recordInlineImage = function () {
            try {
                canvasService.width = image_1.naturalWidth;
                canvasService.height = image_1.naturalHeight;
                canvasCtx.drawImage(image_1, 0, 0);
                attributes.rr_dataURL = canvasService.toDataURL(dataURLOptions.type, dataURLOptions.quality);
            }
            catch (err) {
                console.warn("Cannot inline img src=".concat(image_1.currentSrc, "! Error: ").concat(err));
            }
            oldValue_1
                ? (attributes.crossOrigin = oldValue_1)
                : image_1.removeAttribute('crossorigin');
        };
        if (image_1.complete && image_1.naturalWidth !== 0)
            recordInlineImage();
        else
            image_1.onload = recordInlineImage;
    }
    if (tagName === 'audio' || tagName === 'video') {
        attributes.rr_mediaState = n.paused
            ? 'paused'
            : 'played';
        attributes.rr_mediaCurrentTime = n.currentTime;
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
        var _d = n.getBoundingClientRect(), width = _d.width, height = _d.height;
        attributes = {
            "class": attributes["class"],
            rr_width: "".concat(width, "px"),
            rr_height: "".concat(height, "px")
        };
    }
    if (tagName === 'iframe' && !keepIframeSrcFn(attributes.src)) {
        if (!n.contentDocument) {
            attributes.rr_src = attributes.src;
        }
        delete attributes.src;
    }
    return {
        type: NodeType.Element,
        tagName: tagName,
        attributes: attributes,
        childNodes: [],
        isSVG: isSVGElement(n) || undefined,
        needBlock: needBlock,
        rootId: rootId
    };
}
function lowerIfExists(maybeAttr) {
    if (maybeAttr === undefined) {
        return '';
    }
    else {
        return maybeAttr.toLowerCase();
    }
}
function slimDOMExcluded(sn, slimDOMOptions) {
    if (slimDOMOptions.comment && sn.type === NodeType.Comment) {
        return true;
    }
    else if (sn.type === NodeType.Element) {
        if (slimDOMOptions.script &&
            (sn.tagName === 'script' ||
                (sn.tagName === 'link' &&
                    sn.attributes.rel === 'preload' &&
                    sn.attributes.as === 'script') ||
                (sn.tagName === 'link' &&
                    sn.attributes.rel === 'prefetch' &&
                    typeof sn.attributes.href === 'string' &&
                    sn.attributes.href.endsWith('.js')))) {
            return true;
        }
        else if (slimDOMOptions.headFavicon &&
            ((sn.tagName === 'link' && sn.attributes.rel === 'shortcut icon') ||
                (sn.tagName === 'meta' &&
                    (lowerIfExists(sn.attributes.name).match(/^msapplication-tile(image|color)$/) ||
                        lowerIfExists(sn.attributes.name) === 'application-name' ||
                        lowerIfExists(sn.attributes.rel) === 'icon' ||
                        lowerIfExists(sn.attributes.rel) === 'apple-touch-icon' ||
                        lowerIfExists(sn.attributes.rel) === 'shortcut icon')))) {
            return true;
        }
        else if (sn.tagName === 'meta') {
            if (slimDOMOptions.headMetaDescKeywords &&
                lowerIfExists(sn.attributes.name).match(/^description|keywords$/)) {
                return true;
            }
            else if (slimDOMOptions.headMetaSocial &&
                (lowerIfExists(sn.attributes.property).match(/^(og|twitter|fb):/) ||
                    lowerIfExists(sn.attributes.name).match(/^(og|twitter):/) ||
                    lowerIfExists(sn.attributes.name) === 'pinterest')) {
                return true;
            }
            else if (slimDOMOptions.headMetaRobots &&
                (lowerIfExists(sn.attributes.name) === 'robots' ||
                    lowerIfExists(sn.attributes.name) === 'googlebot' ||
                    lowerIfExists(sn.attributes.name) === 'bingbot')) {
                return true;
            }
            else if (slimDOMOptions.headMetaHttpEquiv &&
                sn.attributes['http-equiv'] !== undefined) {
                return true;
            }
            else if (slimDOMOptions.headMetaAuthorship &&
                (lowerIfExists(sn.attributes.name) === 'author' ||
                    lowerIfExists(sn.attributes.name) === 'generator' ||
                    lowerIfExists(sn.attributes.name) === 'framework' ||
                    lowerIfExists(sn.attributes.name) === 'publisher' ||
                    lowerIfExists(sn.attributes.name) === 'progid' ||
                    lowerIfExists(sn.attributes.property).match(/^article:/) ||
                    lowerIfExists(sn.attributes.property).match(/^product:/))) {
                return true;
            }
            else if (slimDOMOptions.headMetaVerification &&
                (lowerIfExists(sn.attributes.name) === 'google-site-verification' ||
                    lowerIfExists(sn.attributes.name) === 'yandex-verification' ||
                    lowerIfExists(sn.attributes.name) === 'csrf-token' ||
                    lowerIfExists(sn.attributes.name) === 'p:domain_verify' ||
                    lowerIfExists(sn.attributes.name) === 'verify-v1' ||
                    lowerIfExists(sn.attributes.name) === 'verification' ||
                    lowerIfExists(sn.attributes.name) === 'shopify-checkout-api-token')) {
                return true;
            }
        }
    }
    return false;
}
function serializeNodeWithId(n, options) {
    var doc = options.doc, mirror = options.mirror, blockClass = options.blockClass, blockSelector = options.blockSelector, maskTextClass = options.maskTextClass, maskTextSelector = options.maskTextSelector, _a = options.skipChild, skipChild = _a === void 0 ? false : _a, _b = options.inlineStylesheet, inlineStylesheet = _b === void 0 ? true : _b, _c = options.maskInputOptions, maskInputOptions = _c === void 0 ? {} : _c, maskTextFn = options.maskTextFn, maskInputFn = options.maskInputFn, slimDOMOptions = options.slimDOMOptions, _d = options.dataURLOptions, dataURLOptions = _d === void 0 ? {} : _d, _e = options.inlineImages, inlineImages = _e === void 0 ? false : _e, _f = options.recordCanvas, recordCanvas = _f === void 0 ? false : _f, onSerialize = options.onSerialize, onIframeLoad = options.onIframeLoad, _g = options.iframeLoadTimeout, iframeLoadTimeout = _g === void 0 ? 5000 : _g, onStylesheetLoad = options.onStylesheetLoad, _h = options.stylesheetLoadTimeout, stylesheetLoadTimeout = _h === void 0 ? 5000 : _h, _j = options.keepIframeSrcFn, keepIframeSrcFn = _j === void 0 ? function () { return false; } : _j, _k = options.newlyAddedElement, newlyAddedElement = _k === void 0 ? false : _k;
    var _l = options.preserveWhiteSpace, preserveWhiteSpace = _l === void 0 ? true : _l;
    var _serializedNode = serializeNode(n, {
        doc: doc,
        mirror: mirror,
        blockClass: blockClass,
        blockSelector: blockSelector,
        maskTextClass: maskTextClass,
        maskTextSelector: maskTextSelector,
        inlineStylesheet: inlineStylesheet,
        maskInputOptions: maskInputOptions,
        maskTextFn: maskTextFn,
        maskInputFn: maskInputFn,
        dataURLOptions: dataURLOptions,
        inlineImages: inlineImages,
        recordCanvas: recordCanvas,
        keepIframeSrcFn: keepIframeSrcFn,
        newlyAddedElement: newlyAddedElement
    });
    if (!_serializedNode) {
        console.warn(n, 'not serialized');
        return null;
    }
    var id;
    if (mirror.hasNode(n)) {
        id = mirror.getId(n);
    }
    else if (slimDOMExcluded(_serializedNode, slimDOMOptions) ||
        (!preserveWhiteSpace &&
            _serializedNode.type === NodeType.Text &&
            !_serializedNode.isStyle &&
            !_serializedNode.textContent.replace(/^\s+|\s+$/gm, '').length)) {
        id = IGNORED_NODE;
    }
    else {
        id = genId();
    }
    var serializedNode = Object.assign(_serializedNode, { id: id });
    mirror.add(n, serializedNode);
    if (id === IGNORED_NODE) {
        return null;
    }
    if (onSerialize) {
        onSerialize(n);
    }
    var recordChild = !skipChild;
    if (serializedNode.type === NodeType.Element) {
        recordChild = recordChild && !serializedNode.needBlock;
        delete serializedNode.needBlock;
        var shadowRoot = n.shadowRoot;
        if (shadowRoot && isNativeShadowDom(shadowRoot))
            serializedNode.isShadowHost = true;
    }
    if ((serializedNode.type === NodeType.Document ||
        serializedNode.type === NodeType.Element) &&
        recordChild) {
        if (slimDOMOptions.headWhitespace &&
            serializedNode.type === NodeType.Element &&
            serializedNode.tagName === 'head') {
            preserveWhiteSpace = false;
        }
        var bypassOptions = {
            doc: doc,
            mirror: mirror,
            blockClass: blockClass,
            blockSelector: blockSelector,
            maskTextClass: maskTextClass,
            maskTextSelector: maskTextSelector,
            skipChild: skipChild,
            inlineStylesheet: inlineStylesheet,
            maskInputOptions: maskInputOptions,
            maskTextFn: maskTextFn,
            maskInputFn: maskInputFn,
            slimDOMOptions: slimDOMOptions,
            dataURLOptions: dataURLOptions,
            inlineImages: inlineImages,
            recordCanvas: recordCanvas,
            preserveWhiteSpace: preserveWhiteSpace,
            onSerialize: onSerialize,
            onIframeLoad: onIframeLoad,
            iframeLoadTimeout: iframeLoadTimeout,
            onStylesheetLoad: onStylesheetLoad,
            stylesheetLoadTimeout: stylesheetLoadTimeout,
            keepIframeSrcFn: keepIframeSrcFn
        };
        for (var _i = 0, _m = Array.from(n.childNodes); _i < _m.length; _i++) {
            var childN = _m[_i];
            var serializedChildNode = serializeNodeWithId(childN, bypassOptions);
            if (serializedChildNode) {
                serializedNode.childNodes.push(serializedChildNode);
            }
        }
        if (isElement(n) && n.shadowRoot) {
            for (var _o = 0, _p = Array.from(n.shadowRoot.childNodes); _o < _p.length; _o++) {
                var childN = _p[_o];
                var serializedChildNode = serializeNodeWithId(childN, bypassOptions);
                if (serializedChildNode) {
                    isNativeShadowDom(n.shadowRoot) &&
                        (serializedChildNode.isShadow = true);
                    serializedNode.childNodes.push(serializedChildNode);
                }
            }
        }
    }
    if (n.parentNode &&
        isShadowRoot(n.parentNode) &&
        isNativeShadowDom(n.parentNode)) {
        serializedNode.isShadow = true;
    }
    if (serializedNode.type === NodeType.Element &&
        serializedNode.tagName === 'iframe') {
        onceIframeLoaded(n, function () {
            var iframeDoc = n.contentDocument;
            if (iframeDoc && onIframeLoad) {
                var serializedIframeNode = serializeNodeWithId(iframeDoc, {
                    doc: iframeDoc,
                    mirror: mirror,
                    blockClass: blockClass,
                    blockSelector: blockSelector,
                    maskTextClass: maskTextClass,
                    maskTextSelector: maskTextSelector,
                    skipChild: false,
                    inlineStylesheet: inlineStylesheet,
                    maskInputOptions: maskInputOptions,
                    maskTextFn: maskTextFn,
                    maskInputFn: maskInputFn,
                    slimDOMOptions: slimDOMOptions,
                    dataURLOptions: dataURLOptions,
                    inlineImages: inlineImages,
                    recordCanvas: recordCanvas,
                    preserveWhiteSpace: preserveWhiteSpace,
                    onSerialize: onSerialize,
                    onIframeLoad: onIframeLoad,
                    iframeLoadTimeout: iframeLoadTimeout,
                    onStylesheetLoad: onStylesheetLoad,
                    stylesheetLoadTimeout: stylesheetLoadTimeout,
                    keepIframeSrcFn: keepIframeSrcFn
                });
                if (serializedIframeNode) {
                    onIframeLoad(n, serializedIframeNode);
                }
            }
        }, iframeLoadTimeout);
    }
    if (serializedNode.type === NodeType.Element &&
        serializedNode.tagName === 'link' &&
        serializedNode.attributes.rel === 'stylesheet') {
        onceStylesheetLoaded(n, function () {
            if (onStylesheetLoad) {
                var serializedLinkNode = serializeNodeWithId(n, {
                    doc: doc,
                    mirror: mirror,
                    blockClass: blockClass,
                    blockSelector: blockSelector,
                    maskTextClass: maskTextClass,
                    maskTextSelector: maskTextSelector,
                    skipChild: false,
                    inlineStylesheet: inlineStylesheet,
                    maskInputOptions: maskInputOptions,
                    maskTextFn: maskTextFn,
                    maskInputFn: maskInputFn,
                    slimDOMOptions: slimDOMOptions,
                    dataURLOptions: dataURLOptions,
                    inlineImages: inlineImages,
                    recordCanvas: recordCanvas,
                    preserveWhiteSpace: preserveWhiteSpace,
                    onSerialize: onSerialize,
                    onIframeLoad: onIframeLoad,
                    iframeLoadTimeout: iframeLoadTimeout,
                    onStylesheetLoad: onStylesheetLoad,
                    stylesheetLoadTimeout: stylesheetLoadTimeout,
                    keepIframeSrcFn: keepIframeSrcFn
                });
                if (serializedLinkNode) {
                    onStylesheetLoad(n, serializedLinkNode);
                }
            }
        }, stylesheetLoadTimeout);
    }
    return serializedNode;
}
function snapshot(n, options) {
    var _a = options || {}, _b = _a.mirror, mirror = _b === void 0 ? new Mirror() : _b, _c = _a.blockClass, blockClass = _c === void 0 ? 'rr-block' : _c, _d = _a.blockSelector, blockSelector = _d === void 0 ? null : _d, _e = _a.maskTextClass, maskTextClass = _e === void 0 ? 'rr-mask' : _e, _f = _a.maskTextSelector, maskTextSelector = _f === void 0 ? null : _f, _g = _a.inlineStylesheet, inlineStylesheet = _g === void 0 ? true : _g, _h = _a.inlineImages, inlineImages = _h === void 0 ? false : _h, _j = _a.recordCanvas, recordCanvas = _j === void 0 ? false : _j, _k = _a.maskAllInputs, maskAllInputs = _k === void 0 ? false : _k, maskTextFn = _a.maskTextFn, maskInputFn = _a.maskInputFn, _l = _a.slimDOM, slimDOM = _l === void 0 ? false : _l, dataURLOptions = _a.dataURLOptions, preserveWhiteSpace = _a.preserveWhiteSpace, onSerialize = _a.onSerialize, onIframeLoad = _a.onIframeLoad, iframeLoadTimeout = _a.iframeLoadTimeout, onStylesheetLoad = _a.onStylesheetLoad, stylesheetLoadTimeout = _a.stylesheetLoadTimeout, _m = _a.keepIframeSrcFn, keepIframeSrcFn = _m === void 0 ? function () { return false; } : _m;
    var maskInputOptions = maskAllInputs === true
        ? {
            color: true,
            date: true,
            'datetime-local': true,
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
        }
        : maskAllInputs === false
            ? {
                password: true
            }
            : maskAllInputs;
    var slimDOMOptions = slimDOM === true || slimDOM === 'all'
        ?
            {
                script: true,
                comment: true,
                headFavicon: true,
                headWhitespace: true,
                headMetaDescKeywords: slimDOM === 'all',
                headMetaSocial: true,
                headMetaRobots: true,
                headMetaHttpEquiv: true,
                headMetaAuthorship: true,
                headMetaVerification: true
            }
        : slimDOM === false
            ? {}
            : slimDOM;
    return serializeNodeWithId(n, {
        doc: n,
        mirror: mirror,
        blockClass: blockClass,
        blockSelector: blockSelector,
        maskTextClass: maskTextClass,
        maskTextSelector: maskTextSelector,
        skipChild: false,
        inlineStylesheet: inlineStylesheet,
        maskInputOptions: maskInputOptions,
        maskTextFn: maskTextFn,
        maskInputFn: maskInputFn,
        slimDOMOptions: slimDOMOptions,
        dataURLOptions: dataURLOptions,
        inlineImages: inlineImages,
        recordCanvas: recordCanvas,
        preserveWhiteSpace: preserveWhiteSpace,
        onSerialize: onSerialize,
        onIframeLoad: onIframeLoad,
        iframeLoadTimeout: iframeLoadTimeout,
        onStylesheetLoad: onStylesheetLoad,
        stylesheetLoadTimeout: stylesheetLoadTimeout,
        keepIframeSrcFn: keepIframeSrcFn,
        newlyAddedElement: false
    });
}
function visitSnapshot(node, onVisit) {
    function walk(current) {
        onVisit(current);
        if (current.type === NodeType.Document ||
            current.type === NodeType.Element) {
            current.childNodes.forEach(walk);
        }
    }
    walk(node);
}
function cleanupSnapshot() {
    _id = 1;
}

var commentre = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
function parse(css, options) {
    if (options === void 0) { options = {}; }
    var lineno = 1;
    var column = 1;
    function updatePosition(str) {
        var lines = str.match(/\n/g);
        if (lines) {
            lineno += lines.length;
        }
        var i = str.lastIndexOf('\n');
        column = i === -1 ? column + str.length : str.length - i;
    }
    function position() {
        var start = { line: lineno, column: column };
        return function (node) {
            node.position = new Position(start);
            whitespace();
            return node;
        };
    }
    var Position = (function () {
        function Position(start) {
            this.start = start;
            this.end = { line: lineno, column: column };
            this.source = options.source;
        }
        return Position;
    }());
    Position.prototype.content = css;
    var errorsList = [];
    function error(msg) {
        var err = new Error("".concat(options.source || '', ":").concat(lineno, ":").concat(column, ": ").concat(msg));
        err.reason = msg;
        err.filename = options.source;
        err.line = lineno;
        err.column = column;
        err.source = css;
        if (options.silent) {
            errorsList.push(err);
        }
        else {
            throw err;
        }
    }
    function stylesheet() {
        var rulesList = rules();
        return {
            type: 'stylesheet',
            stylesheet: {
                source: options.source,
                rules: rulesList,
                parsingErrors: errorsList
            }
        };
    }
    function open() {
        return match(/^{\s*/);
    }
    function close() {
        return match(/^}/);
    }
    function rules() {
        var node;
        var rules = [];
        whitespace();
        comments(rules);
        while (css.length && css.charAt(0) !== '}' && (node = atrule() || rule())) {
            if (node !== false) {
                rules.push(node);
                comments(rules);
            }
        }
        return rules;
    }
    function match(re) {
        var m = re.exec(css);
        if (!m) {
            return;
        }
        var str = m[0];
        updatePosition(str);
        css = css.slice(str.length);
        return m;
    }
    function whitespace() {
        match(/^\s*/);
    }
    function comments(rules) {
        if (rules === void 0) { rules = []; }
        var c;
        while ((c = comment())) {
            if (c !== false) {
                rules.push(c);
            }
            c = comment();
        }
        return rules;
    }
    function comment() {
        var pos = position();
        if ('/' !== css.charAt(0) || '*' !== css.charAt(1)) {
            return;
        }
        var i = 2;
        while ('' !== css.charAt(i) &&
            ('*' !== css.charAt(i) || '/' !== css.charAt(i + 1))) {
            ++i;
        }
        i += 2;
        if ('' === css.charAt(i - 1)) {
            return error('End of comment missing');
        }
        var str = css.slice(2, i - 2);
        column += 2;
        updatePosition(str);
        css = css.slice(i);
        column += 2;
        return pos({
            type: 'comment',
            comment: str
        });
    }
    function selector() {
        var m = match(/^([^{]+)/);
        if (!m) {
            return;
        }
        return trim(m[0])
            .replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, '')
            .replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, function (m) {
            return m.replace(/,/g, '\u200C');
        })
            .split(/\s*(?![^(]*\)),\s*/)
            .map(function (s) {
            return s.replace(/\u200C/g, ',');
        });
    }
    function declaration() {
        var pos = position();
        var propMatch = match(/^(\*?[-#\/\*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
        if (!propMatch) {
            return;
        }
        var prop = trim(propMatch[0]);
        if (!match(/^:\s*/)) {
            return error("property missing ':'");
        }
        var val = match(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/);
        var ret = pos({
            type: 'declaration',
            property: prop.replace(commentre, ''),
            value: val ? trim(val[0]).replace(commentre, '') : ''
        });
        match(/^[;\s]*/);
        return ret;
    }
    function declarations() {
        var decls = [];
        if (!open()) {
            return error("missing '{'");
        }
        comments(decls);
        var decl;
        while ((decl = declaration())) {
            if (decl !== false) {
                decls.push(decl);
                comments(decls);
            }
            decl = declaration();
        }
        if (!close()) {
            return error("missing '}'");
        }
        return decls;
    }
    function keyframe() {
        var m;
        var vals = [];
        var pos = position();
        while ((m = match(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/))) {
            vals.push(m[1]);
            match(/^,\s*/);
        }
        if (!vals.length) {
            return;
        }
        return pos({
            type: 'keyframe',
            values: vals,
            declarations: declarations()
        });
    }
    function atkeyframes() {
        var pos = position();
        var m = match(/^@([-\w]+)?keyframes\s*/);
        if (!m) {
            return;
        }
        var vendor = m[1];
        m = match(/^([-\w]+)\s*/);
        if (!m) {
            return error('@keyframes missing name');
        }
        var name = m[1];
        if (!open()) {
            return error("@keyframes missing '{'");
        }
        var frame;
        var frames = comments();
        while ((frame = keyframe())) {
            frames.push(frame);
            frames = frames.concat(comments());
        }
        if (!close()) {
            return error("@keyframes missing '}'");
        }
        return pos({
            type: 'keyframes',
            name: name,
            vendor: vendor,
            keyframes: frames
        });
    }
    function atsupports() {
        var pos = position();
        var m = match(/^@supports *([^{]+)/);
        if (!m) {
            return;
        }
        var supports = trim(m[1]);
        if (!open()) {
            return error("@supports missing '{'");
        }
        var style = comments().concat(rules());
        if (!close()) {
            return error("@supports missing '}'");
        }
        return pos({
            type: 'supports',
            supports: supports,
            rules: style
        });
    }
    function athost() {
        var pos = position();
        var m = match(/^@host\s*/);
        if (!m) {
            return;
        }
        if (!open()) {
            return error("@host missing '{'");
        }
        var style = comments().concat(rules());
        if (!close()) {
            return error("@host missing '}'");
        }
        return pos({
            type: 'host',
            rules: style
        });
    }
    function atmedia() {
        var pos = position();
        var m = match(/^@media *([^{]+)/);
        if (!m) {
            return;
        }
        var media = trim(m[1]);
        if (!open()) {
            return error("@media missing '{'");
        }
        var style = comments().concat(rules());
        if (!close()) {
            return error("@media missing '}'");
        }
        return pos({
            type: 'media',
            media: media,
            rules: style
        });
    }
    function atcustommedia() {
        var pos = position();
        var m = match(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
        if (!m) {
            return;
        }
        return pos({
            type: 'custom-media',
            name: trim(m[1]),
            media: trim(m[2])
        });
    }
    function atpage() {
        var pos = position();
        var m = match(/^@page */);
        if (!m) {
            return;
        }
        var sel = selector() || [];
        if (!open()) {
            return error("@page missing '{'");
        }
        var decls = comments();
        var decl;
        while ((decl = declaration())) {
            decls.push(decl);
            decls = decls.concat(comments());
        }
        if (!close()) {
            return error("@page missing '}'");
        }
        return pos({
            type: 'page',
            selectors: sel,
            declarations: decls
        });
    }
    function atdocument() {
        var pos = position();
        var m = match(/^@([-\w]+)?document *([^{]+)/);
        if (!m) {
            return;
        }
        var vendor = trim(m[1]);
        var doc = trim(m[2]);
        if (!open()) {
            return error("@document missing '{'");
        }
        var style = comments().concat(rules());
        if (!close()) {
            return error("@document missing '}'");
        }
        return pos({
            type: 'document',
            document: doc,
            vendor: vendor,
            rules: style
        });
    }
    function atfontface() {
        var pos = position();
        var m = match(/^@font-face\s*/);
        if (!m) {
            return;
        }
        if (!open()) {
            return error("@font-face missing '{'");
        }
        var decls = comments();
        var decl;
        while ((decl = declaration())) {
            decls.push(decl);
            decls = decls.concat(comments());
        }
        if (!close()) {
            return error("@font-face missing '}'");
        }
        return pos({
            type: 'font-face',
            declarations: decls
        });
    }
    var atimport = _compileAtrule('import');
    var atcharset = _compileAtrule('charset');
    var atnamespace = _compileAtrule('namespace');
    function _compileAtrule(name) {
        var re = new RegExp('^@' + name + '\\s*([^;]+);');
        return function () {
            var pos = position();
            var m = match(re);
            if (!m) {
                return;
            }
            var ret = { type: name };
            ret[name] = m[1].trim();
            return pos(ret);
        };
    }
    function atrule() {
        if (css[0] !== '@') {
            return;
        }
        return (atkeyframes() ||
            atmedia() ||
            atcustommedia() ||
            atsupports() ||
            atimport() ||
            atcharset() ||
            atnamespace() ||
            atdocument() ||
            atpage() ||
            athost() ||
            atfontface());
    }
    function rule() {
        var pos = position();
        var sel = selector();
        if (!sel) {
            return error('selector missing');
        }
        comments();
        return pos({
            type: 'rule',
            selectors: sel,
            declarations: declarations()
        });
    }
    return addParent(stylesheet());
}
function trim(str) {
    return str ? str.replace(/^\s+|\s+$/g, '') : '';
}
function addParent(obj, parent) {
    var isNode = obj && typeof obj.type === 'string';
    var childParent = isNode ? obj : parent;
    for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
        var k = _a[_i];
        var value = obj[k];
        if (Array.isArray(value)) {
            value.forEach(function (v) {
                addParent(v, childParent);
            });
        }
        else if (value && typeof value === 'object') {
            addParent(value, childParent);
        }
    }
    if (isNode) {
        Object.defineProperty(obj, 'parent', {
            configurable: true,
            writable: true,
            enumerable: false,
            value: parent || null
        });
    }
    return obj;
}

var tagMap = {
    script: 'noscript',
    altglyph: 'altGlyph',
    altglyphdef: 'altGlyphDef',
    altglyphitem: 'altGlyphItem',
    animatecolor: 'animateColor',
    animatemotion: 'animateMotion',
    animatetransform: 'animateTransform',
    clippath: 'clipPath',
    feblend: 'feBlend',
    fecolormatrix: 'feColorMatrix',
    fecomponenttransfer: 'feComponentTransfer',
    fecomposite: 'feComposite',
    feconvolvematrix: 'feConvolveMatrix',
    fediffuselighting: 'feDiffuseLighting',
    fedisplacementmap: 'feDisplacementMap',
    fedistantlight: 'feDistantLight',
    fedropshadow: 'feDropShadow',
    feflood: 'feFlood',
    fefunca: 'feFuncA',
    fefuncb: 'feFuncB',
    fefuncg: 'feFuncG',
    fefuncr: 'feFuncR',
    fegaussianblur: 'feGaussianBlur',
    feimage: 'feImage',
    femerge: 'feMerge',
    femergenode: 'feMergeNode',
    femorphology: 'feMorphology',
    feoffset: 'feOffset',
    fepointlight: 'fePointLight',
    fespecularlighting: 'feSpecularLighting',
    fespotlight: 'feSpotLight',
    fetile: 'feTile',
    feturbulence: 'feTurbulence',
    foreignobject: 'foreignObject',
    glyphref: 'glyphRef',
    lineargradient: 'linearGradient',
    radialgradient: 'radialGradient'
};
function getTagName(n) {
    var tagName = tagMap[n.tagName] ? tagMap[n.tagName] : n.tagName;
    if (tagName === 'link' && n.attributes._cssText) {
        tagName = 'style';
    }
    return tagName;
}
function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
var HOVER_SELECTOR = /([^\\]):hover/;
var HOVER_SELECTOR_GLOBAL = new RegExp(HOVER_SELECTOR.source, 'g');
function addHoverClass(cssText, cache) {
    var cachedStyle = cache === null || cache === void 0 ? void 0 : cache.stylesWithHoverClass.get(cssText);
    if (cachedStyle)
        return cachedStyle;
    var ast = parse(cssText, {
        silent: true
    });
    if (!ast.stylesheet) {
        return cssText;
    }
    var selectors = [];
    ast.stylesheet.rules.forEach(function (rule) {
        if ('selectors' in rule) {
            (rule.selectors || []).forEach(function (selector) {
                if (HOVER_SELECTOR.test(selector)) {
                    selectors.push(selector);
                }
            });
        }
    });
    if (selectors.length === 0) {
        return cssText;
    }
    var selectorMatcher = new RegExp(selectors
        .filter(function (selector, index) { return selectors.indexOf(selector) === index; })
        .sort(function (a, b) { return b.length - a.length; })
        .map(function (selector) {
        return escapeRegExp(selector);
    })
        .join('|'), 'g');
    var result = cssText.replace(selectorMatcher, function (selector) {
        var newSelector = selector.replace(HOVER_SELECTOR_GLOBAL, '$1.\\:hover');
        return "".concat(selector, ", ").concat(newSelector);
    });
    cache === null || cache === void 0 ? void 0 : cache.stylesWithHoverClass.set(cssText, result);
    return result;
}
function createCache() {
    var stylesWithHoverClass = new Map();
    return {
        stylesWithHoverClass: stylesWithHoverClass
    };
}
function buildNode(n, options) {
    var doc = options.doc, hackCss = options.hackCss, cache = options.cache;
    switch (n.type) {
        case NodeType.Document:
            return doc.implementation.createDocument(null, '', null);
        case NodeType.DocumentType:
            return doc.implementation.createDocumentType(n.name || 'html', n.publicId, n.systemId);
        case NodeType.Element: {
            var tagName = getTagName(n);
            var node_1;
            if (n.isSVG) {
                node_1 = doc.createElementNS('http://www.w3.org/2000/svg', tagName);
            }
            else {
                node_1 = doc.createElement(tagName);
            }
            var specialAttributes = {};
            for (var name_1 in n.attributes) {
                if (!Object.prototype.hasOwnProperty.call(n.attributes, name_1)) {
                    continue;
                }
                var value = n.attributes[name_1];
                if (tagName === 'option' &&
                    name_1 === 'selected' &&
                    value === false) {
                    continue;
                }
                if (value === true)
                    value = '';
                if (name_1.startsWith('rr_')) {
                    specialAttributes[name_1] = value;
                    continue;
                }
                var isTextarea = tagName === 'textarea' && name_1 === 'value';
                var isRemoteOrDynamicCss = tagName === 'style' && name_1 === '_cssText';
                if (isRemoteOrDynamicCss && hackCss && typeof value === 'string') {
                    value = addHoverClass(value, cache);
                }
                if ((isTextarea || isRemoteOrDynamicCss) && typeof value === 'string') {
                    var child = doc.createTextNode(value);
                    for (var _i = 0, _a = Array.from(node_1.childNodes); _i < _a.length; _i++) {
                        var c = _a[_i];
                        if (c.nodeType === node_1.TEXT_NODE) {
                            node_1.removeChild(c);
                        }
                    }
                    node_1.appendChild(child);
                    continue;
                }
                try {
                    if (n.isSVG && name_1 === 'xlink:href') {
                        node_1.setAttributeNS('http://www.w3.org/1999/xlink', name_1, value.toString());
                    }
                    else if (name_1 === 'onload' ||
                        name_1 === 'onclick' ||
                        name_1.substring(0, 7) === 'onmouse') {
                        node_1.setAttribute('_' + name_1, value.toString());
                    }
                    else if (tagName === 'meta' &&
                        n.attributes['http-equiv'] === 'Content-Security-Policy' &&
                        name_1 === 'content') {
                        node_1.setAttribute('csp-content', value.toString());
                        continue;
                    }
                    else if (tagName === 'link' &&
                        n.attributes.rel === 'preload' &&
                        n.attributes.as === 'script') {
                    }
                    else if (tagName === 'link' &&
                        n.attributes.rel === 'prefetch' &&
                        typeof n.attributes.href === 'string' &&
                        n.attributes.href.endsWith('.js')) {
                    }
                    else if (tagName === 'img' &&
                        n.attributes.srcset &&
                        n.attributes.rr_dataURL) {
                        node_1.setAttribute('rrweb-original-srcset', n.attributes.srcset);
                    }
                    else {
                        node_1.setAttribute(name_1, value.toString());
                    }
                }
                catch (error) {
                }
            }
            var _loop_1 = function (name_2) {
                var value = specialAttributes[name_2];
                if (tagName === 'canvas' && name_2 === 'rr_dataURL') {
                    var image_1 = document.createElement('img');
                    image_1.onload = function () {
                        var ctx = node_1.getContext('2d');
                        if (ctx) {
                            ctx.drawImage(image_1, 0, 0, image_1.width, image_1.height);
                        }
                    };
                    image_1.src = value.toString();
                    if (node_1.RRNodeType)
                        node_1.rr_dataURL = value.toString();
                }
                else if (tagName === 'img' && name_2 === 'rr_dataURL') {
                    var image = node_1;
                    if (!image.currentSrc.startsWith('data:')) {
                        image.setAttribute('rrweb-original-src', n.attributes.src);
                        image.src = value.toString();
                    }
                }
                if (name_2 === 'rr_width') {
                    node_1.style.width = value.toString();
                }
                else if (name_2 === 'rr_height') {
                    node_1.style.height = value.toString();
                }
                else if (name_2 === 'rr_mediaCurrentTime' &&
                    typeof value === 'number') {
                    node_1.currentTime = value;
                }
                else if (name_2 === 'rr_mediaState') {
                    switch (value) {
                        case 'played':
                            node_1
                                .play()["catch"](function (e) { return console.warn('media playback error', e); });
                            break;
                        case 'paused':
                            node_1.pause();
                            break;
                    }
                }
            };
            for (var name_2 in specialAttributes) {
                _loop_1(name_2);
            }
            if (n.isShadowHost) {
                if (!node_1.shadowRoot) {
                    node_1.attachShadow({ mode: 'open' });
                }
                else {
                    while (node_1.shadowRoot.firstChild) {
                        node_1.shadowRoot.removeChild(node_1.shadowRoot.firstChild);
                    }
                }
            }
            return node_1;
        }
        case NodeType.Text:
            return doc.createTextNode(n.isStyle && hackCss
                ? addHoverClass(n.textContent, cache)
                : n.textContent);
        case NodeType.CDATA:
            return doc.createCDATASection(n.textContent);
        case NodeType.Comment:
            return doc.createComment(n.textContent);
        default:
            return null;
    }
}
function buildNodeWithSN(n, options) {
    var doc = options.doc, mirror = options.mirror, _a = options.skipChild, skipChild = _a === void 0 ? false : _a, _b = options.hackCss, hackCss = _b === void 0 ? true : _b, afterAppend = options.afterAppend, cache = options.cache;
    var node = buildNode(n, { doc: doc, hackCss: hackCss, cache: cache });
    if (!node) {
        return null;
    }
    if (n.rootId && mirror.getNode(n.rootId) !== doc) {
        mirror.replace(n.rootId, doc);
    }
    if (n.type === NodeType.Document) {
        doc.close();
        doc.open();
        if (n.compatMode === 'BackCompat' &&
            n.childNodes &&
            n.childNodes[0].type !== NodeType.DocumentType) {
            if (n.childNodes[0].type === NodeType.Element &&
                'xmlns' in n.childNodes[0].attributes &&
                n.childNodes[0].attributes.xmlns === 'http://www.w3.org/1999/xhtml') {
                doc.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">');
            }
            else {
                doc.write('<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">');
            }
        }
        node = doc;
    }
    mirror.add(node, n);
    if ((n.type === NodeType.Document || n.type === NodeType.Element) &&
        !skipChild) {
        for (var _i = 0, _c = n.childNodes; _i < _c.length; _i++) {
            var childN = _c[_i];
            var childNode = buildNodeWithSN(childN, {
                doc: doc,
                mirror: mirror,
                skipChild: false,
                hackCss: hackCss,
                afterAppend: afterAppend,
                cache: cache
            });
            if (!childNode) {
                console.warn('Failed to rebuild', childN);
                continue;
            }
            if (childN.isShadow && isElement(node) && node.shadowRoot) {
                node.shadowRoot.appendChild(childNode);
            }
            else {
                node.appendChild(childNode);
            }
            if (afterAppend) {
                afterAppend(childNode, childN.id);
            }
        }
    }
    return node;
}
function visit(mirror, onVisit) {
    function walk(node) {
        onVisit(node);
    }
    for (var _i = 0, _a = mirror.getIds(); _i < _a.length; _i++) {
        var id = _a[_i];
        if (mirror.has(id)) {
            walk(mirror.getNode(id));
        }
    }
}
function handleScroll(node, mirror) {
    var n = mirror.getMeta(node);
    if ((n === null || n === void 0 ? void 0 : n.type) !== NodeType.Element) {
        return;
    }
    var el = node;
    for (var name_3 in n.attributes) {
        if (!(Object.prototype.hasOwnProperty.call(n.attributes, name_3) &&
            name_3.startsWith('rr_'))) {
            continue;
        }
        var value = n.attributes[name_3];
        if (name_3 === 'rr_scrollLeft') {
            el.scrollLeft = value;
        }
        if (name_3 === 'rr_scrollTop') {
            el.scrollTop = value;
        }
    }
}
function rebuild(n, options) {
    var doc = options.doc, onVisit = options.onVisit, _a = options.hackCss, hackCss = _a === void 0 ? true : _a, afterAppend = options.afterAppend, cache = options.cache, _b = options.mirror, mirror = _b === void 0 ? new Mirror() : _b;
    var node = buildNodeWithSN(n, {
        doc: doc,
        mirror: mirror,
        skipChild: false,
        hackCss: hackCss,
        afterAppend: afterAppend,
        cache: cache
    });
    visit(mirror, function (visitedNode) {
        if (onVisit) {
            onVisit(visitedNode);
        }
        handleScroll(visitedNode, mirror);
    });
    return node;
}




/***/ }),

/***/ "./cypress/support/commands.ts":
/*!*************************************!*\
  !*** ./cypress/support/commands.ts ***!
  \*************************************/
/***/ (() => {


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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./cypress/support/e2e.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _commands__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commands */ "./cypress/support/commands.ts");
/* harmony import */ var _commands__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_commands__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chromaui_test_archiver_cypress_support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chromaui/test-archiver/cypress/support */ "./node_modules/.pnpm/@chromaui+test-archiver@0.0.56_@playwright+test@1.47.2/node_modules/@chromaui/test-archiver/dist/cypress-api/support.js");
/* harmony import */ var _chromaui_test_archiver_cypress_support__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chromaui_test_archiver_cypress_support__WEBPACK_IMPORTED_MODULE_1__);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZTJlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTs7QUFFYixvQkFBb0IsbUJBQU8sQ0FBQywwSEFBZ0I7O0FBRTVDLGlEQUFpRCx1QkFBdUIsZ0NBQWdDLG9FQUFvRSxHQUFHLEVBQUUsZ0JBQWdCLDZEQUE2RCxnQ0FBZ0MsR0FBRyxFQUFFLGVBQWUsdUJBQXVCLGdDQUFnQyx5Q0FBeUMsa0JBQWtCLDJCQUEyQixnQ0FBZ0Msb0ZBQW9GLDJDQUEyQyxZQUFZLEdBQUcsR0FBRyxHQUFHLEdBQUc7QUFDdG5CO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw0QkFBNEI7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQsMERBQTBEO0FBQzFELDBEQUEwRCxvQ0FBb0Msc0JBQXNCO0FBQ3BIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDLHdCQUF3QixtQkFBbUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxxQkFBcUI7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyw0QkFBNEI7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxxQkFBcUI7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsU0FBUztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxTQUFTO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esa1VBQWtVLDJJQUEySTtBQUM3YztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFOQUFxTiwwR0FBMEc7QUFDL1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGthQUFrYSxvTEFBb0wsMmZBQTJmLGdCQUFnQjtBQUNqbUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsUUFBUTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELGdCQUFnQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RSxnQkFBZ0I7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwwaUNBQTBpQyxnQkFBZ0I7QUFDcGxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRTtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxJQUFJO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELElBQUk7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxnQkFBZ0I7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QywrQ0FBK0M7QUFDNUYsZ0NBQWdDLDZCQUE2QjtBQUM3RDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQXlFLGdCQUFnQjtBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxpREFBaUQ7QUFDakg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLGNBQWM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QiwwQ0FBMEM7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxnQkFBZ0I7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsZ0JBQWdCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUUrVzs7Ozs7Ozs7Ozs7O0FDdHlEL1csaUNBQWlDO0FBQ2pDLGtEQUFrRDtBQUNsRCw0Q0FBNEM7QUFDNUMsK0NBQStDO0FBQy9DLHFCQUFxQjtBQUNyQixFQUFFO0FBQ0YsNENBQTRDO0FBQzVDLGtDQUFrQztBQUNsQyx3Q0FBd0M7QUFDeEMsa0RBQWtEO0FBQ2xELEVBQUU7QUFDRixFQUFFO0FBQ0YsaUNBQWlDO0FBQ2pDLDhEQUE4RDtBQUM5RCxFQUFFO0FBQ0YsRUFBRTtBQUNGLGdDQUFnQztBQUNoQyx5RkFBeUY7QUFDekYsRUFBRTtBQUNGLEVBQUU7QUFDRiwrQkFBK0I7QUFDL0IsNkZBQTZGO0FBQzdGLEVBQUU7QUFDRixFQUFFO0FBQ0YsZ0RBQWdEO0FBQ2hELDZFQUE2RTtBQUM3RSxFQUFFO0FBQ0YsbUJBQW1CO0FBQ25CLHdCQUF3QjtBQUN4Qiw0QkFBNEI7QUFDNUIsZ0VBQWdFO0FBQ2hFLGtGQUFrRjtBQUNsRixxRkFBcUY7QUFDckYsOEdBQThHO0FBQzlHLFFBQVE7QUFDUixNQUFNO0FBQ04sSUFBSTs7Ozs7OztVQ3BDSjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTkEsOERBQThEO0FBQzlELCtDQUErQztBQUMvQywrQ0FBK0M7QUFDL0MsRUFBRTtBQUNGLHdEQUF3RDtBQUN4RCxrQ0FBa0M7QUFDbEMsRUFBRTtBQUNGLHVEQUF1RDtBQUN2RCwrQ0FBK0M7QUFDL0Msc0NBQXNDO0FBQ3RDLEVBQUU7QUFDRiwwQkFBMEI7QUFDMUIsc0NBQXNDO0FBQ3RDLDhEQUE4RDtBQUU5RCwwQ0FBMEM7QUFDdEI7QUFFcEIsNkNBQTZDO0FBQzdDLHdCQUF3QjtBQUN5QiIsInNvdXJjZXMiOlsid2VicGFjazovL2N5cHJlc3MtdGVzdC8uL25vZGVfbW9kdWxlcy8ucG5wbS9AY2hyb21hdWkrdGVzdC1hcmNoaXZlckAwLjAuNTZfQHBsYXl3cmlnaHQrdGVzdEAxLjQ3LjIvbm9kZV9tb2R1bGVzL0BjaHJvbWF1aS90ZXN0LWFyY2hpdmVyL2Rpc3QvY3lwcmVzcy1hcGkvc3VwcG9ydC5qcyIsIndlYnBhY2s6Ly9jeXByZXNzLXRlc3QvLi9ub2RlX21vZHVsZXMvLnBucG0vcnJ3ZWItc25hcHNob3RAMi4wLjAtYWxwaGEuNC9ub2RlX21vZHVsZXMvcnJ3ZWItc25hcHNob3QvZXMvcnJ3ZWItc25hcHNob3QuanMiLCJ3ZWJwYWNrOi8vY3lwcmVzcy10ZXN0Ly4vY3lwcmVzcy9zdXBwb3J0L2NvbW1hbmRzLnRzIiwid2VicGFjazovL2N5cHJlc3MtdGVzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jeXByZXNzLXRlc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY3lwcmVzcy10ZXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jeXByZXNzLXRlc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jeXByZXNzLXRlc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jeXByZXNzLXRlc3QvLi9jeXByZXNzL3N1cHBvcnQvZTJlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIHJyd2ViU25hcHNob3QgPSByZXF1aXJlKCdycndlYi1zbmFwc2hvdCcpO1xuXG5DeXByZXNzLkNvbW1hbmRzLmFkZChcInRha2VDaHJvbWF0aWNBcmNoaXZlXCIsKCk9PntjeS5kb2N1bWVudCgpLnRoZW4oYT0+e2xldCB0PXJyd2ViU25hcHNob3Quc25hcHNob3QoYSk7Y3kuZ2V0KFwiQG1hbnVhbFNuYXBzaG90c1wiKS50aGVuKHM9PlsuLi5zLHRdKS5hcyhcIm1hbnVhbFNuYXBzaG90c1wiKTt9KTt9KTtiZWZvcmVFYWNoKCgpPT57Y3kud3JhcChbXSkuYXMoXCJtYW51YWxTbmFwc2hvdHNcIiksY3kudGFzayhcInByZXBhcmVBcmNoaXZlc1wiLHthY3Rpb246XCJzZXR1cC1uZXR3b3JrLWxpc3RlbmVyXCJ9KTt9KTthZnRlckVhY2goKCk9PntjeS5kb2N1bWVudCgpLnRoZW4oYT0+e2xldCB0PXJyd2ViU25hcHNob3Quc25hcHNob3QoYSk7Y3kuZ2V0KFwiQG1hbnVhbFNuYXBzaG90c1wiKS50aGVuKChzPVtdKT0+e2N5LnVybCgpLnRoZW4oZT0+e2N5LnRhc2soXCJwcmVwYXJlQXJjaGl2ZXNcIix7YWN0aW9uOlwic2F2ZS1hcmNoaXZlc1wiLHBheWxvYWQ6e3Rlc3RUaXRsZTpDeXByZXNzLmN1cnJlbnRUZXN0LnRpdGxlLGRvbVNuYXBzaG90czpbLi4ucyx0XSxjaHJvbWF0aWNTdG9yeWJvb2tQYXJhbXM6e2RpZmZUaHJlc2hvbGQ6Q3lwcmVzcy5lbnYoXCJkaWZmVGhyZXNob2xkXCIpfSxwYWdlVXJsOmV9fSk7fSk7fSk7fSk7fSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vdXQuanMubWFwXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdXBwb3J0LmpzLm1hcCIsInZhciBOb2RlVHlwZTtcclxuKGZ1bmN0aW9uIChOb2RlVHlwZSkge1xyXG4gICAgTm9kZVR5cGVbTm9kZVR5cGVbXCJEb2N1bWVudFwiXSA9IDBdID0gXCJEb2N1bWVudFwiO1xyXG4gICAgTm9kZVR5cGVbTm9kZVR5cGVbXCJEb2N1bWVudFR5cGVcIl0gPSAxXSA9IFwiRG9jdW1lbnRUeXBlXCI7XHJcbiAgICBOb2RlVHlwZVtOb2RlVHlwZVtcIkVsZW1lbnRcIl0gPSAyXSA9IFwiRWxlbWVudFwiO1xyXG4gICAgTm9kZVR5cGVbTm9kZVR5cGVbXCJUZXh0XCJdID0gM10gPSBcIlRleHRcIjtcclxuICAgIE5vZGVUeXBlW05vZGVUeXBlW1wiQ0RBVEFcIl0gPSA0XSA9IFwiQ0RBVEFcIjtcclxuICAgIE5vZGVUeXBlW05vZGVUeXBlW1wiQ29tbWVudFwiXSA9IDVdID0gXCJDb21tZW50XCI7XHJcbn0pKE5vZGVUeXBlIHx8IChOb2RlVHlwZSA9IHt9KSk7XG5cbmZ1bmN0aW9uIGlzRWxlbWVudChuKSB7XHJcbiAgICByZXR1cm4gbi5ub2RlVHlwZSA9PT0gbi5FTEVNRU5UX05PREU7XHJcbn1cclxuZnVuY3Rpb24gaXNTaGFkb3dSb290KG4pIHtcclxuICAgIHZhciBob3N0ID0gbiA9PT0gbnVsbCB8fCBuID09PSB2b2lkIDAgPyB2b2lkIDAgOiBuLmhvc3Q7XHJcbiAgICByZXR1cm4gQm9vbGVhbigoaG9zdCA9PT0gbnVsbCB8fCBob3N0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBob3N0LnNoYWRvd1Jvb3QpID09PSBuKTtcclxufVxyXG5mdW5jdGlvbiBpc05hdGl2ZVNoYWRvd0RvbShzaGFkb3dSb290KSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHNoYWRvd1Jvb3QpID09PSAnW29iamVjdCBTaGFkb3dSb290XSc7XHJcbn1cclxuZnVuY3Rpb24gZml4QnJvd3NlckNvbXBhdGliaWxpdHlJc3N1ZXNJbkNTUyhjc3NUZXh0KSB7XHJcbiAgICBpZiAoY3NzVGV4dC5pbmNsdWRlcygnIGJhY2tncm91bmQtY2xpcDogdGV4dDsnKSAmJlxyXG4gICAgICAgICFjc3NUZXh0LmluY2x1ZGVzKCcgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7JykpIHtcclxuICAgICAgICBjc3NUZXh0ID0gY3NzVGV4dC5yZXBsYWNlKCcgYmFja2dyb3VuZC1jbGlwOiB0ZXh0OycsICcgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7IGJhY2tncm91bmQtY2xpcDogdGV4dDsnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBjc3NUZXh0O1xyXG59XHJcbmZ1bmN0aW9uIGdldENzc1J1bGVzU3RyaW5nKHMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgdmFyIHJ1bGVzID0gcy5ydWxlcyB8fCBzLmNzc1J1bGVzO1xyXG4gICAgICAgIHJldHVybiBydWxlc1xyXG4gICAgICAgICAgICA/IGZpeEJyb3dzZXJDb21wYXRpYmlsaXR5SXNzdWVzSW5DU1MoQXJyYXkuZnJvbShydWxlcykubWFwKGdldENzc1J1bGVTdHJpbmcpLmpvaW4oJycpKVxyXG4gICAgICAgICAgICA6IG51bGw7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBnZXRDc3NSdWxlU3RyaW5nKHJ1bGUpIHtcclxuICAgIHZhciBjc3NTdHJpbmdpZmllZCA9IHJ1bGUuY3NzVGV4dDtcclxuICAgIGlmIChpc0NTU0ltcG9ydFJ1bGUocnVsZSkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjc3NTdHJpbmdpZmllZCA9IGdldENzc1J1bGVzU3RyaW5nKHJ1bGUuc3R5bGVTaGVldCkgfHwgY3NzU3RyaW5naWZpZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChfYSkge1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjc3NTdHJpbmdpZmllZDtcclxufVxyXG5mdW5jdGlvbiBpc0NTU0ltcG9ydFJ1bGUocnVsZSkge1xyXG4gICAgcmV0dXJuICdzdHlsZVNoZWV0JyBpbiBydWxlO1xyXG59XHJcbnZhciBNaXJyb3IgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTWlycm9yKCkge1xyXG4gICAgICAgIHRoaXMuaWROb2RlTWFwID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMubm9kZU1ldGFNYXAgPSBuZXcgV2Vha01hcCgpO1xyXG4gICAgfVxyXG4gICAgTWlycm9yLnByb3RvdHlwZS5nZXRJZCA9IGZ1bmN0aW9uIChuKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIGlmICghbilcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIHZhciBpZCA9IChfYSA9IHRoaXMuZ2V0TWV0YShuKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmlkO1xyXG4gICAgICAgIHJldHVybiBpZCAhPT0gbnVsbCAmJiBpZCAhPT0gdm9pZCAwID8gaWQgOiAtMTtcclxuICAgIH07XHJcbiAgICBNaXJyb3IucHJvdG90eXBlLmdldE5vZGUgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZE5vZGVNYXAuZ2V0KGlkKSB8fCBudWxsO1xyXG4gICAgfTtcclxuICAgIE1pcnJvci5wcm90b3R5cGUuZ2V0SWRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuaWROb2RlTWFwLmtleXMoKSk7XHJcbiAgICB9O1xyXG4gICAgTWlycm9yLnByb3RvdHlwZS5nZXRNZXRhID0gZnVuY3Rpb24gKG4pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ub2RlTWV0YU1hcC5nZXQobikgfHwgbnVsbDtcclxuICAgIH07XHJcbiAgICBNaXJyb3IucHJvdG90eXBlLnJlbW92ZU5vZGVGcm9tTWFwID0gZnVuY3Rpb24gKG4pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBpZCA9IHRoaXMuZ2V0SWQobik7XHJcbiAgICAgICAgdGhpcy5pZE5vZGVNYXBbXCJkZWxldGVcIl0oaWQpO1xyXG4gICAgICAgIGlmIChuLmNoaWxkTm9kZXMpIHtcclxuICAgICAgICAgICAgbi5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnJlbW92ZU5vZGVGcm9tTWFwKGNoaWxkTm9kZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBNaXJyb3IucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlkTm9kZU1hcC5oYXMoaWQpO1xyXG4gICAgfTtcclxuICAgIE1pcnJvci5wcm90b3R5cGUuaGFzTm9kZSA9IGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZU1ldGFNYXAuaGFzKG5vZGUpO1xyXG4gICAgfTtcclxuICAgIE1pcnJvci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKG4sIG1ldGEpIHtcclxuICAgICAgICB2YXIgaWQgPSBtZXRhLmlkO1xyXG4gICAgICAgIHRoaXMuaWROb2RlTWFwLnNldChpZCwgbik7XHJcbiAgICAgICAgdGhpcy5ub2RlTWV0YU1hcC5zZXQobiwgbWV0YSk7XHJcbiAgICB9O1xyXG4gICAgTWlycm9yLnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24gKGlkLCBuKSB7XHJcbiAgICAgICAgdmFyIG9sZE5vZGUgPSB0aGlzLmdldE5vZGUoaWQpO1xyXG4gICAgICAgIGlmIChvbGROb2RlKSB7XHJcbiAgICAgICAgICAgIHZhciBtZXRhID0gdGhpcy5ub2RlTWV0YU1hcC5nZXQob2xkTm9kZSk7XHJcbiAgICAgICAgICAgIGlmIChtZXRhKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlTWV0YU1hcC5zZXQobiwgbWV0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaWROb2RlTWFwLnNldChpZCwgbik7XHJcbiAgICB9O1xyXG4gICAgTWlycm9yLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmlkTm9kZU1hcCA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLm5vZGVNZXRhTWFwID0gbmV3IFdlYWtNYXAoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gTWlycm9yO1xyXG59KCkpO1xyXG5mdW5jdGlvbiBjcmVhdGVNaXJyb3IoKSB7XHJcbiAgICByZXR1cm4gbmV3IE1pcnJvcigpO1xyXG59XHJcbmZ1bmN0aW9uIG1hc2tJbnB1dFZhbHVlKF9hKSB7XHJcbiAgICB2YXIgbWFza0lucHV0T3B0aW9ucyA9IF9hLm1hc2tJbnB1dE9wdGlvbnMsIHRhZ05hbWUgPSBfYS50YWdOYW1lLCB0eXBlID0gX2EudHlwZSwgdmFsdWUgPSBfYS52YWx1ZSwgbWFza0lucHV0Rm4gPSBfYS5tYXNrSW5wdXRGbjtcclxuICAgIHZhciB0ZXh0ID0gdmFsdWUgfHwgJyc7XHJcbiAgICBpZiAobWFza0lucHV0T3B0aW9uc1t0YWdOYW1lLnRvTG93ZXJDYXNlKCldIHx8XHJcbiAgICAgICAgbWFza0lucHV0T3B0aW9uc1t0eXBlXSkge1xyXG4gICAgICAgIGlmIChtYXNrSW5wdXRGbikge1xyXG4gICAgICAgICAgICB0ZXh0ID0gbWFza0lucHV0Rm4odGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0ZXh0ID0gJyonLnJlcGVhdCh0ZXh0Lmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRleHQ7XHJcbn1cclxudmFyIE9SSUdJTkFMX0FUVFJJQlVURV9OQU1FID0gJ19fcnJ3ZWJfb3JpZ2luYWxfXyc7XHJcbmZ1bmN0aW9uIGlzMkRDYW52YXNCbGFuayhjYW52YXMpIHtcclxuICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGlmICghY3R4KVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgdmFyIGNodW5rU2l6ZSA9IDUwO1xyXG4gICAgZm9yICh2YXIgeCA9IDA7IHggPCBjYW52YXMud2lkdGg7IHggKz0gY2h1bmtTaXplKSB7XHJcbiAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBjYW52YXMuaGVpZ2h0OyB5ICs9IGNodW5rU2l6ZSkge1xyXG4gICAgICAgICAgICB2YXIgZ2V0SW1hZ2VEYXRhID0gY3R4LmdldEltYWdlRGF0YTtcclxuICAgICAgICAgICAgdmFyIG9yaWdpbmFsR2V0SW1hZ2VEYXRhID0gT1JJR0lOQUxfQVRUUklCVVRFX05BTUUgaW4gZ2V0SW1hZ2VEYXRhXHJcbiAgICAgICAgICAgICAgICA/IGdldEltYWdlRGF0YVtPUklHSU5BTF9BVFRSSUJVVEVfTkFNRV1cclxuICAgICAgICAgICAgICAgIDogZ2V0SW1hZ2VEYXRhO1xyXG4gICAgICAgICAgICB2YXIgcGl4ZWxCdWZmZXIgPSBuZXcgVWludDMyQXJyYXkob3JpZ2luYWxHZXRJbWFnZURhdGEuY2FsbChjdHgsIHgsIHksIE1hdGgubWluKGNodW5rU2l6ZSwgY2FudmFzLndpZHRoIC0geCksIE1hdGgubWluKGNodW5rU2l6ZSwgY2FudmFzLmhlaWdodCAtIHkpKS5kYXRhLmJ1ZmZlcik7XHJcbiAgICAgICAgICAgIGlmIChwaXhlbEJ1ZmZlci5zb21lKGZ1bmN0aW9uIChwaXhlbCkgeyByZXR1cm4gcGl4ZWwgIT09IDA7IH0pKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59XG5cbnZhciBfaWQgPSAxO1xyXG52YXIgdGFnTmFtZVJlZ2V4ID0gbmV3IFJlZ0V4cCgnW15hLXowLTktXzpdJyk7XHJcbnZhciBJR05PUkVEX05PREUgPSAtMjtcclxuZnVuY3Rpb24gZ2VuSWQoKSB7XHJcbiAgICByZXR1cm4gX2lkKys7XHJcbn1cclxuZnVuY3Rpb24gZ2V0VmFsaWRUYWdOYW1lKGVsZW1lbnQpIHtcclxuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEZvcm1FbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuICdmb3JtJztcclxuICAgIH1cclxuICAgIHZhciBwcm9jZXNzZWRUYWdOYW1lID0gZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xyXG4gICAgaWYgKHRhZ05hbWVSZWdleC50ZXN0KHByb2Nlc3NlZFRhZ05hbWUpKSB7XHJcbiAgICAgICAgcmV0dXJuICdkaXYnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByb2Nlc3NlZFRhZ05hbWU7XHJcbn1cclxuZnVuY3Rpb24gc3RyaW5naWZ5U3R5bGVTaGVldChzaGVldCkge1xyXG4gICAgcmV0dXJuIHNoZWV0LmNzc1J1bGVzXHJcbiAgICAgICAgPyBBcnJheS5mcm9tKHNoZWV0LmNzc1J1bGVzKVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChydWxlKSB7IHJldHVybiBydWxlLmNzc1RleHQgfHwgJyc7IH0pXHJcbiAgICAgICAgICAgIC5qb2luKCcnKVxyXG4gICAgICAgIDogJyc7XHJcbn1cclxuZnVuY3Rpb24gZXh0cmFjdE9yaWdpbih1cmwpIHtcclxuICAgIHZhciBvcmlnaW4gPSAnJztcclxuICAgIGlmICh1cmwuaW5kZXhPZignLy8nKSA+IC0xKSB7XHJcbiAgICAgICAgb3JpZ2luID0gdXJsLnNwbGl0KCcvJykuc2xpY2UoMCwgMykuam9pbignLycpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgb3JpZ2luID0gdXJsLnNwbGl0KCcvJylbMF07XHJcbiAgICB9XHJcbiAgICBvcmlnaW4gPSBvcmlnaW4uc3BsaXQoJz8nKVswXTtcclxuICAgIHJldHVybiBvcmlnaW47XHJcbn1cclxudmFyIGNhbnZhc1NlcnZpY2U7XHJcbnZhciBjYW52YXNDdHg7XHJcbnZhciBVUkxfSU5fQ1NTX1JFRiA9IC91cmxcXCgoPzooJykoW14nXSopJ3woXCIpKC4qPylcInwoW14pXSopKVxcKS9nbTtcclxudmFyIFJFTEFUSVZFX1BBVEggPSAvXig/IXd3d1xcLnwoPzpodHRwfGZ0cClzPzpcXC9cXC98W0EtWmEtel06XFxcXHxcXC9cXC98IykuKi87XHJcbnZhciBEQVRBX1VSSSA9IC9eKGRhdGE6KShbXixdKiksKC4qKS9pO1xyXG5mdW5jdGlvbiBhYnNvbHV0ZVRvU3R5bGVzaGVldChjc3NUZXh0LCBocmVmKSB7XHJcbiAgICByZXR1cm4gKGNzc1RleHQgfHwgJycpLnJlcGxhY2UoVVJMX0lOX0NTU19SRUYsIGZ1bmN0aW9uIChvcmlnaW4sIHF1b3RlMSwgcGF0aDEsIHF1b3RlMiwgcGF0aDIsIHBhdGgzKSB7XHJcbiAgICAgICAgdmFyIGZpbGVQYXRoID0gcGF0aDEgfHwgcGF0aDIgfHwgcGF0aDM7XHJcbiAgICAgICAgdmFyIG1heWJlUXVvdGUgPSBxdW90ZTEgfHwgcXVvdGUyIHx8ICcnO1xyXG4gICAgICAgIGlmICghZmlsZVBhdGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFSRUxBVElWRV9QQVRILnRlc3QoZmlsZVBhdGgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcInVybChcIi5jb25jYXQobWF5YmVRdW90ZSkuY29uY2F0KGZpbGVQYXRoKS5jb25jYXQobWF5YmVRdW90ZSwgXCIpXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoREFUQV9VUkkudGVzdChmaWxlUGF0aCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwidXJsKFwiLmNvbmNhdChtYXliZVF1b3RlKS5jb25jYXQoZmlsZVBhdGgpLmNvbmNhdChtYXliZVF1b3RlLCBcIilcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmaWxlUGF0aFswXSA9PT0gJy8nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcInVybChcIi5jb25jYXQobWF5YmVRdW90ZSkuY29uY2F0KGV4dHJhY3RPcmlnaW4oaHJlZikgKyBmaWxlUGF0aCkuY29uY2F0KG1heWJlUXVvdGUsIFwiKVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHN0YWNrID0gaHJlZi5zcGxpdCgnLycpO1xyXG4gICAgICAgIHZhciBwYXJ0cyA9IGZpbGVQYXRoLnNwbGl0KCcvJyk7XHJcbiAgICAgICAgc3RhY2sucG9wKCk7XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBwYXJ0c18xID0gcGFydHM7IF9pIDwgcGFydHNfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIHBhcnQgPSBwYXJ0c18xW19pXTtcclxuICAgICAgICAgICAgaWYgKHBhcnQgPT09ICcuJykge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAocGFydCA9PT0gJy4uJykge1xyXG4gICAgICAgICAgICAgICAgc3RhY2sucG9wKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKHBhcnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcInVybChcIi5jb25jYXQobWF5YmVRdW90ZSkuY29uY2F0KHN0YWNrLmpvaW4oJy8nKSkuY29uY2F0KG1heWJlUXVvdGUsIFwiKVwiKTtcclxuICAgIH0pO1xyXG59XHJcbnZhciBTUkNTRVRfTk9UX1NQQUNFUyA9IC9eW14gXFx0XFxuXFxyXFx1MDAwY10rLztcclxudmFyIFNSQ1NFVF9DT01NQVNfT1JfU1BBQ0VTID0gL15bLCBcXHRcXG5cXHJcXHUwMDBjXSsvO1xyXG5mdW5jdGlvbiBnZXRBYnNvbHV0ZVNyY3NldFN0cmluZyhkb2MsIGF0dHJpYnV0ZVZhbHVlKSB7XHJcbiAgICBpZiAoYXR0cmlidXRlVmFsdWUudHJpbSgpID09PSAnJykge1xyXG4gICAgICAgIHJldHVybiBhdHRyaWJ1dGVWYWx1ZTtcclxuICAgIH1cclxuICAgIHZhciBwb3MgPSAwO1xyXG4gICAgZnVuY3Rpb24gY29sbGVjdENoYXJhY3RlcnMocmVnRXgpIHtcclxuICAgICAgICB2YXIgY2hhcnM7XHJcbiAgICAgICAgdmFyIG1hdGNoID0gcmVnRXguZXhlYyhhdHRyaWJ1dGVWYWx1ZS5zdWJzdHJpbmcocG9zKSk7XHJcbiAgICAgICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgICAgIGNoYXJzID0gbWF0Y2hbMF07XHJcbiAgICAgICAgICAgIHBvcyArPSBjaGFycy5sZW5ndGg7XHJcbiAgICAgICAgICAgIHJldHVybiBjaGFycztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gICAgdmFyIG91dHB1dCA9IFtdO1xyXG4gICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICBjb2xsZWN0Q2hhcmFjdGVycyhTUkNTRVRfQ09NTUFTX09SX1NQQUNFUyk7XHJcbiAgICAgICAgaWYgKHBvcyA+PSBhdHRyaWJ1dGVWYWx1ZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB1cmwgPSBjb2xsZWN0Q2hhcmFjdGVycyhTUkNTRVRfTk9UX1NQQUNFUyk7XHJcbiAgICAgICAgaWYgKHVybC5zbGljZSgtMSkgPT09ICcsJykge1xyXG4gICAgICAgICAgICB1cmwgPSBhYnNvbHV0ZVRvRG9jKGRvYywgdXJsLnN1YnN0cmluZygwLCB1cmwubGVuZ3RoIC0gMSkpO1xyXG4gICAgICAgICAgICBvdXRwdXQucHVzaCh1cmwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGRlc2NyaXB0b3JzU3RyID0gJyc7XHJcbiAgICAgICAgICAgIHVybCA9IGFic29sdXRlVG9Eb2MoZG9jLCB1cmwpO1xyXG4gICAgICAgICAgICB2YXIgaW5QYXJlbnMgPSBmYWxzZTtcclxuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjID0gYXR0cmlidXRlVmFsdWUuY2hhckF0KHBvcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYyA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdXRwdXQucHVzaCgodXJsICsgZGVzY3JpcHRvcnNTdHIpLnRyaW0oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICghaW5QYXJlbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYyA9PT0gJywnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcyArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQucHVzaCgodXJsICsgZGVzY3JpcHRvcnNTdHIpLnRyaW0oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjID09PSAnKCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5QYXJlbnMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjID09PSAnKScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5QYXJlbnMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdG9yc1N0ciArPSBjO1xyXG4gICAgICAgICAgICAgICAgcG9zICs9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0cHV0LmpvaW4oJywgJyk7XHJcbn1cclxuZnVuY3Rpb24gYWJzb2x1dGVUb0RvYyhkb2MsIGF0dHJpYnV0ZVZhbHVlKSB7XHJcbiAgICBpZiAoIWF0dHJpYnV0ZVZhbHVlIHx8IGF0dHJpYnV0ZVZhbHVlLnRyaW0oKSA9PT0gJycpIHtcclxuICAgICAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XHJcbiAgICB9XHJcbiAgICB2YXIgYSA9IGRvYy5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBhLmhyZWYgPSBhdHRyaWJ1dGVWYWx1ZTtcclxuICAgIHJldHVybiBhLmhyZWY7XHJcbn1cclxuZnVuY3Rpb24gaXNTVkdFbGVtZW50KGVsKSB7XHJcbiAgICByZXR1cm4gQm9vbGVhbihlbC50YWdOYW1lID09PSAnc3ZnJyB8fCBlbC5vd25lclNWR0VsZW1lbnQpO1xyXG59XHJcbmZ1bmN0aW9uIGdldEhyZWYoKSB7XHJcbiAgICB2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGEuaHJlZiA9ICcnO1xyXG4gICAgcmV0dXJuIGEuaHJlZjtcclxufVxyXG5mdW5jdGlvbiB0cmFuc2Zvcm1BdHRyaWJ1dGUoZG9jLCB0YWdOYW1lLCBuYW1lLCB2YWx1ZSkge1xyXG4gICAgaWYgKG5hbWUgPT09ICdzcmMnIHx8XHJcbiAgICAgICAgKG5hbWUgPT09ICdocmVmJyAmJiB2YWx1ZSAmJiAhKHRhZ05hbWUgPT09ICd1c2UnICYmIHZhbHVlWzBdID09PSAnIycpKSkge1xyXG4gICAgICAgIHJldHVybiBhYnNvbHV0ZVRvRG9jKGRvYywgdmFsdWUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAobmFtZSA9PT0gJ3hsaW5rOmhyZWYnICYmIHZhbHVlICYmIHZhbHVlWzBdICE9PSAnIycpIHtcclxuICAgICAgICByZXR1cm4gYWJzb2x1dGVUb0RvYyhkb2MsIHZhbHVlKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKG5hbWUgPT09ICdiYWNrZ3JvdW5kJyAmJlxyXG4gICAgICAgIHZhbHVlICYmXHJcbiAgICAgICAgKHRhZ05hbWUgPT09ICd0YWJsZScgfHwgdGFnTmFtZSA9PT0gJ3RkJyB8fCB0YWdOYW1lID09PSAndGgnKSkge1xyXG4gICAgICAgIHJldHVybiBhYnNvbHV0ZVRvRG9jKGRvYywgdmFsdWUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAobmFtZSA9PT0gJ3NyY3NldCcgJiYgdmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gZ2V0QWJzb2x1dGVTcmNzZXRTdHJpbmcoZG9jLCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChuYW1lID09PSAnc3R5bGUnICYmIHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIGFic29sdXRlVG9TdHlsZXNoZWV0KHZhbHVlLCBnZXRIcmVmKCkpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGFnTmFtZSA9PT0gJ29iamVjdCcgJiYgbmFtZSA9PT0gJ2RhdGEnICYmIHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIGFic29sdXRlVG9Eb2MoZG9jLCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gX2lzQmxvY2tlZEVsZW1lbnQoZWxlbWVudCwgYmxvY2tDbGFzcywgYmxvY2tTZWxlY3Rvcikge1xyXG4gICAgaWYgKHR5cGVvZiBibG9ja0NsYXNzID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhibG9ja0NsYXNzKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBmb3IgKHZhciBlSW5kZXggPSBlbGVtZW50LmNsYXNzTGlzdC5sZW5ndGg7IGVJbmRleC0tOykge1xyXG4gICAgICAgICAgICB2YXIgY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc0xpc3RbZUluZGV4XTtcclxuICAgICAgICAgICAgaWYgKGJsb2NrQ2xhc3MudGVzdChjbGFzc05hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChibG9ja1NlbGVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQubWF0Y2hlcyhibG9ja1NlbGVjdG9yKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5mdW5jdGlvbiBjbGFzc01hdGNoZXNSZWdleChub2RlLCByZWdleCwgY2hlY2tBbmNlc3RvcnMpIHtcclxuICAgIGlmICghbm9kZSlcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICBpZiAobm9kZS5ub2RlVHlwZSAhPT0gbm9kZS5FTEVNRU5UX05PREUpIHtcclxuICAgICAgICBpZiAoIWNoZWNrQW5jZXN0b3JzKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIGNsYXNzTWF0Y2hlc1JlZ2V4KG5vZGUucGFyZW50Tm9kZSwgcmVnZXgsIGNoZWNrQW5jZXN0b3JzKTtcclxuICAgIH1cclxuICAgIGZvciAodmFyIGVJbmRleCA9IG5vZGUuY2xhc3NMaXN0Lmxlbmd0aDsgZUluZGV4LS07KSB7XHJcbiAgICAgICAgdmFyIGNsYXNzTmFtZSA9IG5vZGUuY2xhc3NMaXN0W2VJbmRleF07XHJcbiAgICAgICAgaWYgKHJlZ2V4LnRlc3QoY2xhc3NOYW1lKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIWNoZWNrQW5jZXN0b3JzKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiBjbGFzc01hdGNoZXNSZWdleChub2RlLnBhcmVudE5vZGUsIHJlZ2V4LCBjaGVja0FuY2VzdG9ycyk7XHJcbn1cclxuZnVuY3Rpb24gbmVlZE1hc2tpbmdUZXh0KG5vZGUsIG1hc2tUZXh0Q2xhc3MsIG1hc2tUZXh0U2VsZWN0b3IpIHtcclxuICAgIHZhciBlbCA9IG5vZGUubm9kZVR5cGUgPT09IG5vZGUuRUxFTUVOVF9OT0RFXHJcbiAgICAgICAgPyBub2RlXHJcbiAgICAgICAgOiBub2RlLnBhcmVudEVsZW1lbnQ7XHJcbiAgICBpZiAoZWwgPT09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgaWYgKHR5cGVvZiBtYXNrVGV4dENsYXNzID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMobWFza1RleHRDbGFzcykpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGlmIChlbC5jbG9zZXN0KFwiLlwiLmNvbmNhdChtYXNrVGV4dENsYXNzKSkpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKGNsYXNzTWF0Y2hlc1JlZ2V4KGVsLCBtYXNrVGV4dENsYXNzLCB0cnVlKSlcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAobWFza1RleHRTZWxlY3Rvcikge1xyXG4gICAgICAgIGlmIChlbC5tYXRjaGVzKG1hc2tUZXh0U2VsZWN0b3IpKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBpZiAoZWwuY2xvc2VzdChtYXNrVGV4dFNlbGVjdG9yKSlcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuZnVuY3Rpb24gb25jZUlmcmFtZUxvYWRlZChpZnJhbWVFbCwgbGlzdGVuZXIsIGlmcmFtZUxvYWRUaW1lb3V0KSB7XHJcbiAgICB2YXIgd2luID0gaWZyYW1lRWwuY29udGVudFdpbmRvdztcclxuICAgIGlmICghd2luKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIGZpcmVkID0gZmFsc2U7XHJcbiAgICB2YXIgcmVhZHlTdGF0ZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmVhZHlTdGF0ZSA9IHdpbi5kb2N1bWVudC5yZWFkeVN0YXRlO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHJlYWR5U3RhdGUgIT09ICdjb21wbGV0ZScpIHtcclxuICAgICAgICB2YXIgdGltZXJfMSA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoIWZpcmVkKSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcigpO1xyXG4gICAgICAgICAgICAgICAgZmlyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgaWZyYW1lTG9hZFRpbWVvdXQpO1xyXG4gICAgICAgIGlmcmFtZUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcl8xKTtcclxuICAgICAgICAgICAgZmlyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBsaXN0ZW5lcigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBibGFua1VybCA9ICdhYm91dDpibGFuayc7XHJcbiAgICBpZiAod2luLmxvY2F0aW9uLmhyZWYgIT09IGJsYW5rVXJsIHx8XHJcbiAgICAgICAgaWZyYW1lRWwuc3JjID09PSBibGFua1VybCB8fFxyXG4gICAgICAgIGlmcmFtZUVsLnNyYyA9PT0gJycpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KGxpc3RlbmVyLCAwKTtcclxuICAgICAgICByZXR1cm4gaWZyYW1lRWwuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGxpc3RlbmVyKTtcclxuICAgIH1cclxuICAgIGlmcmFtZUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBsaXN0ZW5lcik7XHJcbn1cclxuZnVuY3Rpb24gb25jZVN0eWxlc2hlZXRMb2FkZWQobGluaywgbGlzdGVuZXIsIHN0eWxlU2hlZXRMb2FkVGltZW91dCkge1xyXG4gICAgdmFyIGZpcmVkID0gZmFsc2U7XHJcbiAgICB2YXIgc3R5bGVTaGVldExvYWRlZDtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgc3R5bGVTaGVldExvYWRlZCA9IGxpbmsuc2hlZXQ7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoc3R5bGVTaGVldExvYWRlZClcclxuICAgICAgICByZXR1cm47XHJcbiAgICB2YXIgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIWZpcmVkKSB7XHJcbiAgICAgICAgICAgIGxpc3RlbmVyKCk7XHJcbiAgICAgICAgICAgIGZpcmVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9LCBzdHlsZVNoZWV0TG9hZFRpbWVvdXQpO1xyXG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICAgICAgZmlyZWQgPSB0cnVlO1xyXG4gICAgICAgIGxpc3RlbmVyKCk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBzZXJpYWxpemVOb2RlKG4sIG9wdGlvbnMpIHtcclxuICAgIHZhciBkb2MgPSBvcHRpb25zLmRvYywgbWlycm9yID0gb3B0aW9ucy5taXJyb3IsIGJsb2NrQ2xhc3MgPSBvcHRpb25zLmJsb2NrQ2xhc3MsIGJsb2NrU2VsZWN0b3IgPSBvcHRpb25zLmJsb2NrU2VsZWN0b3IsIG1hc2tUZXh0Q2xhc3MgPSBvcHRpb25zLm1hc2tUZXh0Q2xhc3MsIG1hc2tUZXh0U2VsZWN0b3IgPSBvcHRpb25zLm1hc2tUZXh0U2VsZWN0b3IsIGlubGluZVN0eWxlc2hlZXQgPSBvcHRpb25zLmlubGluZVN0eWxlc2hlZXQsIF9hID0gb3B0aW9ucy5tYXNrSW5wdXRPcHRpb25zLCBtYXNrSW5wdXRPcHRpb25zID0gX2EgPT09IHZvaWQgMCA/IHt9IDogX2EsIG1hc2tUZXh0Rm4gPSBvcHRpb25zLm1hc2tUZXh0Rm4sIG1hc2tJbnB1dEZuID0gb3B0aW9ucy5tYXNrSW5wdXRGbiwgX2IgPSBvcHRpb25zLmRhdGFVUkxPcHRpb25zLCBkYXRhVVJMT3B0aW9ucyA9IF9iID09PSB2b2lkIDAgPyB7fSA6IF9iLCBpbmxpbmVJbWFnZXMgPSBvcHRpb25zLmlubGluZUltYWdlcywgcmVjb3JkQ2FudmFzID0gb3B0aW9ucy5yZWNvcmRDYW52YXMsIGtlZXBJZnJhbWVTcmNGbiA9IG9wdGlvbnMua2VlcElmcmFtZVNyY0ZuLCBfYyA9IG9wdGlvbnMubmV3bHlBZGRlZEVsZW1lbnQsIG5ld2x5QWRkZWRFbGVtZW50ID0gX2MgPT09IHZvaWQgMCA/IGZhbHNlIDogX2M7XHJcbiAgICB2YXIgcm9vdElkID0gZ2V0Um9vdElkKGRvYywgbWlycm9yKTtcclxuICAgIHN3aXRjaCAobi5ub2RlVHlwZSkge1xyXG4gICAgICAgIGNhc2Ugbi5ET0NVTUVOVF9OT0RFOlxyXG4gICAgICAgICAgICBpZiAobi5jb21wYXRNb2RlICE9PSAnQ1NTMUNvbXBhdCcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogTm9kZVR5cGUuRG9jdW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGROb2RlczogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGF0TW9kZTogbi5jb21wYXRNb2RlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBOb2RlVHlwZS5Eb2N1bWVudCxcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZE5vZGVzOiBbXVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2Ugbi5ET0NVTUVOVF9UWVBFX05PREU6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBOb2RlVHlwZS5Eb2N1bWVudFR5cGUsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBuLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBwdWJsaWNJZDogbi5wdWJsaWNJZCxcclxuICAgICAgICAgICAgICAgIHN5c3RlbUlkOiBuLnN5c3RlbUlkLFxyXG4gICAgICAgICAgICAgICAgcm9vdElkOiByb290SWRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIG4uRUxFTUVOVF9OT0RFOlxyXG4gICAgICAgICAgICByZXR1cm4gc2VyaWFsaXplRWxlbWVudE5vZGUobiwge1xyXG4gICAgICAgICAgICAgICAgZG9jOiBkb2MsXHJcbiAgICAgICAgICAgICAgICBibG9ja0NsYXNzOiBibG9ja0NsYXNzLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tTZWxlY3RvcjogYmxvY2tTZWxlY3RvcixcclxuICAgICAgICAgICAgICAgIGlubGluZVN0eWxlc2hlZXQ6IGlubGluZVN0eWxlc2hlZXQsXHJcbiAgICAgICAgICAgICAgICBtYXNrSW5wdXRPcHRpb25zOiBtYXNrSW5wdXRPcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgbWFza0lucHV0Rm46IG1hc2tJbnB1dEZuLFxyXG4gICAgICAgICAgICAgICAgZGF0YVVSTE9wdGlvbnM6IGRhdGFVUkxPcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgaW5saW5lSW1hZ2VzOiBpbmxpbmVJbWFnZXMsXHJcbiAgICAgICAgICAgICAgICByZWNvcmRDYW52YXM6IHJlY29yZENhbnZhcyxcclxuICAgICAgICAgICAgICAgIGtlZXBJZnJhbWVTcmNGbjoga2VlcElmcmFtZVNyY0ZuLFxyXG4gICAgICAgICAgICAgICAgbmV3bHlBZGRlZEVsZW1lbnQ6IG5ld2x5QWRkZWRFbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgcm9vdElkOiByb290SWRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgY2FzZSBuLlRFWFRfTk9ERTpcclxuICAgICAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZVRleHROb2RlKG4sIHtcclxuICAgICAgICAgICAgICAgIG1hc2tUZXh0Q2xhc3M6IG1hc2tUZXh0Q2xhc3MsXHJcbiAgICAgICAgICAgICAgICBtYXNrVGV4dFNlbGVjdG9yOiBtYXNrVGV4dFNlbGVjdG9yLFxyXG4gICAgICAgICAgICAgICAgbWFza1RleHRGbjogbWFza1RleHRGbixcclxuICAgICAgICAgICAgICAgIHJvb3RJZDogcm9vdElkXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNhc2Ugbi5DREFUQV9TRUNUSU9OX05PREU6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBOb2RlVHlwZS5DREFUQSxcclxuICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiAnJyxcclxuICAgICAgICAgICAgICAgIHJvb3RJZDogcm9vdElkXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBuLkNPTU1FTlRfTk9ERTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE5vZGVUeXBlLkNvbW1lbnQsXHJcbiAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogbi50ZXh0Q29udGVudCB8fCAnJyxcclxuICAgICAgICAgICAgICAgIHJvb3RJZDogcm9vdElkXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGdldFJvb3RJZChkb2MsIG1pcnJvcikge1xyXG4gICAgaWYgKCFtaXJyb3IuaGFzTm9kZShkb2MpKVxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB2YXIgZG9jSWQgPSBtaXJyb3IuZ2V0SWQoZG9jKTtcclxuICAgIHJldHVybiBkb2NJZCA9PT0gMSA/IHVuZGVmaW5lZCA6IGRvY0lkO1xyXG59XHJcbmZ1bmN0aW9uIHNlcmlhbGl6ZVRleHROb2RlKG4sIG9wdGlvbnMpIHtcclxuICAgIHZhciBfYTtcclxuICAgIHZhciBtYXNrVGV4dENsYXNzID0gb3B0aW9ucy5tYXNrVGV4dENsYXNzLCBtYXNrVGV4dFNlbGVjdG9yID0gb3B0aW9ucy5tYXNrVGV4dFNlbGVjdG9yLCBtYXNrVGV4dEZuID0gb3B0aW9ucy5tYXNrVGV4dEZuLCByb290SWQgPSBvcHRpb25zLnJvb3RJZDtcclxuICAgIHZhciBwYXJlbnRUYWdOYW1lID0gbi5wYXJlbnROb2RlICYmIG4ucGFyZW50Tm9kZS50YWdOYW1lO1xyXG4gICAgdmFyIHRleHRDb250ZW50ID0gbi50ZXh0Q29udGVudDtcclxuICAgIHZhciBpc1N0eWxlID0gcGFyZW50VGFnTmFtZSA9PT0gJ1NUWUxFJyA/IHRydWUgOiB1bmRlZmluZWQ7XHJcbiAgICB2YXIgaXNTY3JpcHQgPSBwYXJlbnRUYWdOYW1lID09PSAnU0NSSVBUJyA/IHRydWUgOiB1bmRlZmluZWQ7XHJcbiAgICBpZiAoaXNTdHlsZSAmJiB0ZXh0Q29udGVudCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChuLm5leHRTaWJsaW5nIHx8IG4ucHJldmlvdXNTaWJsaW5nKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoKF9hID0gbi5wYXJlbnROb2RlLnNoZWV0KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY3NzUnVsZXMpIHtcclxuICAgICAgICAgICAgICAgIHRleHRDb250ZW50ID0gc3RyaW5naWZ5U3R5bGVTaGVldChuLnBhcmVudE5vZGUuc2hlZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQ2Fubm90IGdldCBDU1Mgc3R5bGVzIGZyb20gdGV4dCdzIHBhcmVudE5vZGUuIEVycm9yOiBcIi5jb25jYXQoZXJyKSwgbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRleHRDb250ZW50ID0gYWJzb2x1dGVUb1N0eWxlc2hlZXQodGV4dENvbnRlbnQsIGdldEhyZWYoKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNTY3JpcHQpIHtcclxuICAgICAgICB0ZXh0Q29udGVudCA9ICdTQ1JJUFRfUExBQ0VIT0xERVInO1xyXG4gICAgfVxyXG4gICAgaWYgKCFpc1N0eWxlICYmXHJcbiAgICAgICAgIWlzU2NyaXB0ICYmXHJcbiAgICAgICAgdGV4dENvbnRlbnQgJiZcclxuICAgICAgICBuZWVkTWFza2luZ1RleHQobiwgbWFza1RleHRDbGFzcywgbWFza1RleHRTZWxlY3RvcikpIHtcclxuICAgICAgICB0ZXh0Q29udGVudCA9IG1hc2tUZXh0Rm5cclxuICAgICAgICAgICAgPyBtYXNrVGV4dEZuKHRleHRDb250ZW50KVxyXG4gICAgICAgICAgICA6IHRleHRDb250ZW50LnJlcGxhY2UoL1tcXFNdL2csICcqJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IE5vZGVUeXBlLlRleHQsXHJcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRleHRDb250ZW50IHx8ICcnLFxyXG4gICAgICAgIGlzU3R5bGU6IGlzU3R5bGUsXHJcbiAgICAgICAgcm9vdElkOiByb290SWRcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gc2VyaWFsaXplRWxlbWVudE5vZGUobiwgb3B0aW9ucykge1xyXG4gICAgdmFyIGRvYyA9IG9wdGlvbnMuZG9jLCBibG9ja0NsYXNzID0gb3B0aW9ucy5ibG9ja0NsYXNzLCBibG9ja1NlbGVjdG9yID0gb3B0aW9ucy5ibG9ja1NlbGVjdG9yLCBpbmxpbmVTdHlsZXNoZWV0ID0gb3B0aW9ucy5pbmxpbmVTdHlsZXNoZWV0LCBfYSA9IG9wdGlvbnMubWFza0lucHV0T3B0aW9ucywgbWFza0lucHV0T3B0aW9ucyA9IF9hID09PSB2b2lkIDAgPyB7fSA6IF9hLCBtYXNrSW5wdXRGbiA9IG9wdGlvbnMubWFza0lucHV0Rm4sIF9iID0gb3B0aW9ucy5kYXRhVVJMT3B0aW9ucywgZGF0YVVSTE9wdGlvbnMgPSBfYiA9PT0gdm9pZCAwID8ge30gOiBfYiwgaW5saW5lSW1hZ2VzID0gb3B0aW9ucy5pbmxpbmVJbWFnZXMsIHJlY29yZENhbnZhcyA9IG9wdGlvbnMucmVjb3JkQ2FudmFzLCBrZWVwSWZyYW1lU3JjRm4gPSBvcHRpb25zLmtlZXBJZnJhbWVTcmNGbiwgX2MgPSBvcHRpb25zLm5ld2x5QWRkZWRFbGVtZW50LCBuZXdseUFkZGVkRWxlbWVudCA9IF9jID09PSB2b2lkIDAgPyBmYWxzZSA6IF9jLCByb290SWQgPSBvcHRpb25zLnJvb3RJZDtcclxuICAgIHZhciBuZWVkQmxvY2sgPSBfaXNCbG9ja2VkRWxlbWVudChuLCBibG9ja0NsYXNzLCBibG9ja1NlbGVjdG9yKTtcclxuICAgIHZhciB0YWdOYW1lID0gZ2V0VmFsaWRUYWdOYW1lKG4pO1xyXG4gICAgdmFyIGF0dHJpYnV0ZXMgPSB7fTtcclxuICAgIHZhciBsZW4gPSBuLmF0dHJpYnV0ZXMubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgIHZhciBhdHRyID0gbi5hdHRyaWJ1dGVzW2ldO1xyXG4gICAgICAgIGF0dHJpYnV0ZXNbYXR0ci5uYW1lXSA9IHRyYW5zZm9ybUF0dHJpYnV0ZShkb2MsIHRhZ05hbWUsIGF0dHIubmFtZSwgYXR0ci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGFnTmFtZSA9PT0gJ2xpbmsnICYmIGlubGluZVN0eWxlc2hlZXQpIHtcclxuICAgICAgICB2YXIgc3R5bGVzaGVldCA9IEFycmF5LmZyb20oZG9jLnN0eWxlU2hlZXRzKS5maW5kKGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzLmhyZWYgPT09IG4uaHJlZjtcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgY3NzVGV4dCA9IG51bGw7XHJcbiAgICAgICAgaWYgKHN0eWxlc2hlZXQpIHtcclxuICAgICAgICAgICAgY3NzVGV4dCA9IGdldENzc1J1bGVzU3RyaW5nKHN0eWxlc2hlZXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY3NzVGV4dCkge1xyXG4gICAgICAgICAgICBkZWxldGUgYXR0cmlidXRlcy5yZWw7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBhdHRyaWJ1dGVzLmhyZWY7XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMuX2Nzc1RleHQgPSBhYnNvbHV0ZVRvU3R5bGVzaGVldChjc3NUZXh0LCBzdHlsZXNoZWV0LmhyZWYpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0YWdOYW1lID09PSAnc3R5bGUnICYmXHJcbiAgICAgICAgbi5zaGVldCAmJlxyXG4gICAgICAgICEobi5pbm5lclRleHQgfHwgbi50ZXh0Q29udGVudCB8fCAnJykudHJpbSgpLmxlbmd0aCkge1xyXG4gICAgICAgIHZhciBjc3NUZXh0ID0gZ2V0Q3NzUnVsZXNTdHJpbmcobi5zaGVldCk7XHJcbiAgICAgICAgaWYgKGNzc1RleHQpIHtcclxuICAgICAgICAgICAgYXR0cmlidXRlcy5fY3NzVGV4dCA9IGFic29sdXRlVG9TdHlsZXNoZWV0KGNzc1RleHQsIGdldEhyZWYoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRhZ05hbWUgPT09ICdpbnB1dCcgfHwgdGFnTmFtZSA9PT0gJ3RleHRhcmVhJyB8fCB0YWdOYW1lID09PSAnc2VsZWN0Jykge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IG4udmFsdWU7XHJcbiAgICAgICAgdmFyIGNoZWNrZWQgPSBuLmNoZWNrZWQ7XHJcbiAgICAgICAgaWYgKGF0dHJpYnV0ZXMudHlwZSAhPT0gJ3JhZGlvJyAmJlxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzLnR5cGUgIT09ICdjaGVja2JveCcgJiZcclxuICAgICAgICAgICAgYXR0cmlidXRlcy50eXBlICE9PSAnc3VibWl0JyAmJlxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzLnR5cGUgIT09ICdidXR0b24nICYmXHJcbiAgICAgICAgICAgIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMudmFsdWUgPSBtYXNrSW5wdXRWYWx1ZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBhdHRyaWJ1dGVzLnR5cGUsXHJcbiAgICAgICAgICAgICAgICB0YWdOYW1lOiB0YWdOYW1lLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgbWFza0lucHV0T3B0aW9uczogbWFza0lucHV0T3B0aW9ucyxcclxuICAgICAgICAgICAgICAgIG1hc2tJbnB1dEZuOiBtYXNrSW5wdXRGblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY2hlY2tlZCkge1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzLmNoZWNrZWQgPSBjaGVja2VkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0YWdOYW1lID09PSAnb3B0aW9uJykge1xyXG4gICAgICAgIGlmIChuLnNlbGVjdGVkICYmICFtYXNrSW5wdXRPcHRpb25zWydzZWxlY3QnXSkge1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBhdHRyaWJ1dGVzLnNlbGVjdGVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0YWdOYW1lID09PSAnY2FudmFzJyAmJiByZWNvcmRDYW52YXMpIHtcclxuICAgICAgICBpZiAobi5fX2NvbnRleHQgPT09ICcyZCcpIHtcclxuICAgICAgICAgICAgaWYgKCFpczJEQ2FudmFzQmxhbmsobikpIHtcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMucnJfZGF0YVVSTCA9IG4udG9EYXRhVVJMKGRhdGFVUkxPcHRpb25zLnR5cGUsIGRhdGFVUkxPcHRpb25zLnF1YWxpdHkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCEoJ19fY29udGV4dCcgaW4gbikpIHtcclxuICAgICAgICAgICAgdmFyIGNhbnZhc0RhdGFVUkwgPSBuLnRvRGF0YVVSTChkYXRhVVJMT3B0aW9ucy50eXBlLCBkYXRhVVJMT3B0aW9ucy5xdWFsaXR5KTtcclxuICAgICAgICAgICAgdmFyIGJsYW5rQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgICAgIGJsYW5rQ2FudmFzLndpZHRoID0gbi53aWR0aDtcclxuICAgICAgICAgICAgYmxhbmtDYW52YXMuaGVpZ2h0ID0gbi5oZWlnaHQ7XHJcbiAgICAgICAgICAgIHZhciBibGFua0NhbnZhc0RhdGFVUkwgPSBibGFua0NhbnZhcy50b0RhdGFVUkwoZGF0YVVSTE9wdGlvbnMudHlwZSwgZGF0YVVSTE9wdGlvbnMucXVhbGl0eSk7XHJcbiAgICAgICAgICAgIGlmIChjYW52YXNEYXRhVVJMICE9PSBibGFua0NhbnZhc0RhdGFVUkwpIHtcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMucnJfZGF0YVVSTCA9IGNhbnZhc0RhdGFVUkw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGFnTmFtZSA9PT0gJ2ltZycgJiYgaW5saW5lSW1hZ2VzKSB7XHJcbiAgICAgICAgaWYgKCFjYW52YXNTZXJ2aWNlKSB7XHJcbiAgICAgICAgICAgIGNhbnZhc1NlcnZpY2UgPSBkb2MuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgICAgIGNhbnZhc0N0eCA9IGNhbnZhc1NlcnZpY2UuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGltYWdlXzEgPSBuO1xyXG4gICAgICAgIHZhciBvbGRWYWx1ZV8xID0gaW1hZ2VfMS5jcm9zc09yaWdpbjtcclxuICAgICAgICBpbWFnZV8xLmNyb3NzT3JpZ2luID0gJ2Fub255bW91cyc7XHJcbiAgICAgICAgdmFyIHJlY29yZElubGluZUltYWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY2FudmFzU2VydmljZS53aWR0aCA9IGltYWdlXzEubmF0dXJhbFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgY2FudmFzU2VydmljZS5oZWlnaHQgPSBpbWFnZV8xLm5hdHVyYWxIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBjYW52YXNDdHguZHJhd0ltYWdlKGltYWdlXzEsIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5ycl9kYXRhVVJMID0gY2FudmFzU2VydmljZS50b0RhdGFVUkwoZGF0YVVSTE9wdGlvbnMudHlwZSwgZGF0YVVSTE9wdGlvbnMucXVhbGl0eSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQ2Fubm90IGlubGluZSBpbWcgc3JjPVwiLmNvbmNhdChpbWFnZV8xLmN1cnJlbnRTcmMsIFwiISBFcnJvcjogXCIpLmNvbmNhdChlcnIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvbGRWYWx1ZV8xXHJcbiAgICAgICAgICAgICAgICA/IChhdHRyaWJ1dGVzLmNyb3NzT3JpZ2luID0gb2xkVmFsdWVfMSlcclxuICAgICAgICAgICAgICAgIDogaW1hZ2VfMS5yZW1vdmVBdHRyaWJ1dGUoJ2Nyb3Nzb3JpZ2luJyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoaW1hZ2VfMS5jb21wbGV0ZSAmJiBpbWFnZV8xLm5hdHVyYWxXaWR0aCAhPT0gMClcclxuICAgICAgICAgICAgcmVjb3JkSW5saW5lSW1hZ2UoKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGltYWdlXzEub25sb2FkID0gcmVjb3JkSW5saW5lSW1hZ2U7XHJcbiAgICB9XHJcbiAgICBpZiAodGFnTmFtZSA9PT0gJ2F1ZGlvJyB8fCB0YWdOYW1lID09PSAndmlkZW8nKSB7XHJcbiAgICAgICAgYXR0cmlidXRlcy5ycl9tZWRpYVN0YXRlID0gbi5wYXVzZWRcclxuICAgICAgICAgICAgPyAncGF1c2VkJ1xyXG4gICAgICAgICAgICA6ICdwbGF5ZWQnO1xyXG4gICAgICAgIGF0dHJpYnV0ZXMucnJfbWVkaWFDdXJyZW50VGltZSA9IG4uY3VycmVudFRpbWU7XHJcbiAgICB9XHJcbiAgICBpZiAoIW5ld2x5QWRkZWRFbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKG4uc2Nyb2xsTGVmdCkge1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzLnJyX3Njcm9sbExlZnQgPSBuLnNjcm9sbExlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuLnNjcm9sbFRvcCkge1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzLnJyX3Njcm9sbFRvcCA9IG4uc2Nyb2xsVG9wO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChuZWVkQmxvY2spIHtcclxuICAgICAgICB2YXIgX2QgPSBuLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCB3aWR0aCA9IF9kLndpZHRoLCBoZWlnaHQgPSBfZC5oZWlnaHQ7XHJcbiAgICAgICAgYXR0cmlidXRlcyA9IHtcclxuICAgICAgICAgICAgXCJjbGFzc1wiOiBhdHRyaWJ1dGVzW1wiY2xhc3NcIl0sXHJcbiAgICAgICAgICAgIHJyX3dpZHRoOiBcIlwiLmNvbmNhdCh3aWR0aCwgXCJweFwiKSxcclxuICAgICAgICAgICAgcnJfaGVpZ2h0OiBcIlwiLmNvbmNhdChoZWlnaHQsIFwicHhcIilcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgaWYgKHRhZ05hbWUgPT09ICdpZnJhbWUnICYmICFrZWVwSWZyYW1lU3JjRm4oYXR0cmlidXRlcy5zcmMpKSB7XHJcbiAgICAgICAgaWYgKCFuLmNvbnRlbnREb2N1bWVudCkge1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzLnJyX3NyYyA9IGF0dHJpYnV0ZXMuc3JjO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWxldGUgYXR0cmlidXRlcy5zcmM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IE5vZGVUeXBlLkVsZW1lbnQsXHJcbiAgICAgICAgdGFnTmFtZTogdGFnTmFtZSxcclxuICAgICAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzLFxyXG4gICAgICAgIGNoaWxkTm9kZXM6IFtdLFxyXG4gICAgICAgIGlzU1ZHOiBpc1NWR0VsZW1lbnQobikgfHwgdW5kZWZpbmVkLFxyXG4gICAgICAgIG5lZWRCbG9jazogbmVlZEJsb2NrLFxyXG4gICAgICAgIHJvb3RJZDogcm9vdElkXHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIGxvd2VySWZFeGlzdHMobWF5YmVBdHRyKSB7XHJcbiAgICBpZiAobWF5YmVBdHRyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gbWF5YmVBdHRyLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gc2xpbURPTUV4Y2x1ZGVkKHNuLCBzbGltRE9NT3B0aW9ucykge1xyXG4gICAgaWYgKHNsaW1ET01PcHRpb25zLmNvbW1lbnQgJiYgc24udHlwZSA9PT0gTm9kZVR5cGUuQ29tbWVudCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoc24udHlwZSA9PT0gTm9kZVR5cGUuRWxlbWVudCkge1xyXG4gICAgICAgIGlmIChzbGltRE9NT3B0aW9ucy5zY3JpcHQgJiZcclxuICAgICAgICAgICAgKHNuLnRhZ05hbWUgPT09ICdzY3JpcHQnIHx8XHJcbiAgICAgICAgICAgICAgICAoc24udGFnTmFtZSA9PT0gJ2xpbmsnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgc24uYXR0cmlidXRlcy5yZWwgPT09ICdwcmVsb2FkJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHNuLmF0dHJpYnV0ZXMuYXMgPT09ICdzY3JpcHQnKSB8fFxyXG4gICAgICAgICAgICAgICAgKHNuLnRhZ05hbWUgPT09ICdsaW5rJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHNuLmF0dHJpYnV0ZXMucmVsID09PSAncHJlZmV0Y2gnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIHNuLmF0dHJpYnV0ZXMuaHJlZiA9PT0gJ3N0cmluZycgJiZcclxuICAgICAgICAgICAgICAgICAgICBzbi5hdHRyaWJ1dGVzLmhyZWYuZW5kc1dpdGgoJy5qcycpKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHNsaW1ET01PcHRpb25zLmhlYWRGYXZpY29uICYmXHJcbiAgICAgICAgICAgICgoc24udGFnTmFtZSA9PT0gJ2xpbmsnICYmIHNuLmF0dHJpYnV0ZXMucmVsID09PSAnc2hvcnRjdXQgaWNvbicpIHx8XHJcbiAgICAgICAgICAgICAgICAoc24udGFnTmFtZSA9PT0gJ21ldGEnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgKGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKS5tYXRjaCgvXm1zYXBwbGljYXRpb24tdGlsZShpbWFnZXxjb2xvcikkLykgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSAnYXBwbGljYXRpb24tbmFtZScgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLnJlbCkgPT09ICdpY29uJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMucmVsKSA9PT0gJ2FwcGxlLXRvdWNoLWljb24nIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5yZWwpID09PSAnc2hvcnRjdXQgaWNvbicpKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHNuLnRhZ05hbWUgPT09ICdtZXRhJykge1xyXG4gICAgICAgICAgICBpZiAoc2xpbURPTU9wdGlvbnMuaGVhZE1ldGFEZXNjS2V5d29yZHMgJiZcclxuICAgICAgICAgICAgICAgIGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKS5tYXRjaCgvXmRlc2NyaXB0aW9ufGtleXdvcmRzJC8pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChzbGltRE9NT3B0aW9ucy5oZWFkTWV0YVNvY2lhbCAmJlxyXG4gICAgICAgICAgICAgICAgKGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5wcm9wZXJ0eSkubWF0Y2goL14ob2d8dHdpdHRlcnxmYik6LykgfHxcclxuICAgICAgICAgICAgICAgICAgICBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkubWF0Y2goL14ob2d8dHdpdHRlcik6LykgfHxcclxuICAgICAgICAgICAgICAgICAgICBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09ICdwaW50ZXJlc3QnKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoc2xpbURPTU9wdGlvbnMuaGVhZE1ldGFSb2JvdHMgJiZcclxuICAgICAgICAgICAgICAgIChsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09ICdyb2JvdHMnIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSAnZ29vZ2xlYm90JyB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKSA9PT0gJ2Jpbmdib3QnKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoc2xpbURPTU9wdGlvbnMuaGVhZE1ldGFIdHRwRXF1aXYgJiZcclxuICAgICAgICAgICAgICAgIHNuLmF0dHJpYnV0ZXNbJ2h0dHAtZXF1aXYnXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChzbGltRE9NT3B0aW9ucy5oZWFkTWV0YUF1dGhvcnNoaXAgJiZcclxuICAgICAgICAgICAgICAgIChsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09ICdhdXRob3InIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSAnZ2VuZXJhdG9yJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKSA9PT0gJ2ZyYW1ld29yaycgfHxcclxuICAgICAgICAgICAgICAgICAgICBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09ICdwdWJsaXNoZXInIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSAncHJvZ2lkJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5wcm9wZXJ0eSkubWF0Y2goL15hcnRpY2xlOi8pIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLnByb3BlcnR5KS5tYXRjaCgvXnByb2R1Y3Q6LykpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChzbGltRE9NT3B0aW9ucy5oZWFkTWV0YVZlcmlmaWNhdGlvbiAmJlxyXG4gICAgICAgICAgICAgICAgKGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKSA9PT0gJ2dvb2dsZS1zaXRlLXZlcmlmaWNhdGlvbicgfHxcclxuICAgICAgICAgICAgICAgICAgICBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09ICd5YW5kZXgtdmVyaWZpY2F0aW9uJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKSA9PT0gJ2NzcmYtdG9rZW4nIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSAncDpkb21haW5fdmVyaWZ5JyB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKSA9PT0gJ3ZlcmlmeS12MScgfHxcclxuICAgICAgICAgICAgICAgICAgICBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09ICd2ZXJpZmljYXRpb24nIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSAnc2hvcGlmeS1jaGVja291dC1hcGktdG9rZW4nKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuZnVuY3Rpb24gc2VyaWFsaXplTm9kZVdpdGhJZChuLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgZG9jID0gb3B0aW9ucy5kb2MsIG1pcnJvciA9IG9wdGlvbnMubWlycm9yLCBibG9ja0NsYXNzID0gb3B0aW9ucy5ibG9ja0NsYXNzLCBibG9ja1NlbGVjdG9yID0gb3B0aW9ucy5ibG9ja1NlbGVjdG9yLCBtYXNrVGV4dENsYXNzID0gb3B0aW9ucy5tYXNrVGV4dENsYXNzLCBtYXNrVGV4dFNlbGVjdG9yID0gb3B0aW9ucy5tYXNrVGV4dFNlbGVjdG9yLCBfYSA9IG9wdGlvbnMuc2tpcENoaWxkLCBza2lwQ2hpbGQgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLmlubGluZVN0eWxlc2hlZXQsIGlubGluZVN0eWxlc2hlZXQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMubWFza0lucHV0T3B0aW9ucywgbWFza0lucHV0T3B0aW9ucyA9IF9jID09PSB2b2lkIDAgPyB7fSA6IF9jLCBtYXNrVGV4dEZuID0gb3B0aW9ucy5tYXNrVGV4dEZuLCBtYXNrSW5wdXRGbiA9IG9wdGlvbnMubWFza0lucHV0Rm4sIHNsaW1ET01PcHRpb25zID0gb3B0aW9ucy5zbGltRE9NT3B0aW9ucywgX2QgPSBvcHRpb25zLmRhdGFVUkxPcHRpb25zLCBkYXRhVVJMT3B0aW9ucyA9IF9kID09PSB2b2lkIDAgPyB7fSA6IF9kLCBfZSA9IG9wdGlvbnMuaW5saW5lSW1hZ2VzLCBpbmxpbmVJbWFnZXMgPSBfZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfZSwgX2YgPSBvcHRpb25zLnJlY29yZENhbnZhcywgcmVjb3JkQ2FudmFzID0gX2YgPT09IHZvaWQgMCA/IGZhbHNlIDogX2YsIG9uU2VyaWFsaXplID0gb3B0aW9ucy5vblNlcmlhbGl6ZSwgb25JZnJhbWVMb2FkID0gb3B0aW9ucy5vbklmcmFtZUxvYWQsIF9nID0gb3B0aW9ucy5pZnJhbWVMb2FkVGltZW91dCwgaWZyYW1lTG9hZFRpbWVvdXQgPSBfZyA9PT0gdm9pZCAwID8gNTAwMCA6IF9nLCBvblN0eWxlc2hlZXRMb2FkID0gb3B0aW9ucy5vblN0eWxlc2hlZXRMb2FkLCBfaCA9IG9wdGlvbnMuc3R5bGVzaGVldExvYWRUaW1lb3V0LCBzdHlsZXNoZWV0TG9hZFRpbWVvdXQgPSBfaCA9PT0gdm9pZCAwID8gNTAwMCA6IF9oLCBfaiA9IG9wdGlvbnMua2VlcElmcmFtZVNyY0ZuLCBrZWVwSWZyYW1lU3JjRm4gPSBfaiA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0gOiBfaiwgX2sgPSBvcHRpb25zLm5ld2x5QWRkZWRFbGVtZW50LCBuZXdseUFkZGVkRWxlbWVudCA9IF9rID09PSB2b2lkIDAgPyBmYWxzZSA6IF9rO1xyXG4gICAgdmFyIF9sID0gb3B0aW9ucy5wcmVzZXJ2ZVdoaXRlU3BhY2UsIHByZXNlcnZlV2hpdGVTcGFjZSA9IF9sID09PSB2b2lkIDAgPyB0cnVlIDogX2w7XHJcbiAgICB2YXIgX3NlcmlhbGl6ZWROb2RlID0gc2VyaWFsaXplTm9kZShuLCB7XHJcbiAgICAgICAgZG9jOiBkb2MsXHJcbiAgICAgICAgbWlycm9yOiBtaXJyb3IsXHJcbiAgICAgICAgYmxvY2tDbGFzczogYmxvY2tDbGFzcyxcclxuICAgICAgICBibG9ja1NlbGVjdG9yOiBibG9ja1NlbGVjdG9yLFxyXG4gICAgICAgIG1hc2tUZXh0Q2xhc3M6IG1hc2tUZXh0Q2xhc3MsXHJcbiAgICAgICAgbWFza1RleHRTZWxlY3RvcjogbWFza1RleHRTZWxlY3RvcixcclxuICAgICAgICBpbmxpbmVTdHlsZXNoZWV0OiBpbmxpbmVTdHlsZXNoZWV0LFxyXG4gICAgICAgIG1hc2tJbnB1dE9wdGlvbnM6IG1hc2tJbnB1dE9wdGlvbnMsXHJcbiAgICAgICAgbWFza1RleHRGbjogbWFza1RleHRGbixcclxuICAgICAgICBtYXNrSW5wdXRGbjogbWFza0lucHV0Rm4sXHJcbiAgICAgICAgZGF0YVVSTE9wdGlvbnM6IGRhdGFVUkxPcHRpb25zLFxyXG4gICAgICAgIGlubGluZUltYWdlczogaW5saW5lSW1hZ2VzLFxyXG4gICAgICAgIHJlY29yZENhbnZhczogcmVjb3JkQ2FudmFzLFxyXG4gICAgICAgIGtlZXBJZnJhbWVTcmNGbjoga2VlcElmcmFtZVNyY0ZuLFxyXG4gICAgICAgIG5ld2x5QWRkZWRFbGVtZW50OiBuZXdseUFkZGVkRWxlbWVudFxyXG4gICAgfSk7XHJcbiAgICBpZiAoIV9zZXJpYWxpemVkTm9kZSkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihuLCAnbm90IHNlcmlhbGl6ZWQnKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHZhciBpZDtcclxuICAgIGlmIChtaXJyb3IuaGFzTm9kZShuKSkge1xyXG4gICAgICAgIGlkID0gbWlycm9yLmdldElkKG4pO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoc2xpbURPTUV4Y2x1ZGVkKF9zZXJpYWxpemVkTm9kZSwgc2xpbURPTU9wdGlvbnMpIHx8XHJcbiAgICAgICAgKCFwcmVzZXJ2ZVdoaXRlU3BhY2UgJiZcclxuICAgICAgICAgICAgX3NlcmlhbGl6ZWROb2RlLnR5cGUgPT09IE5vZGVUeXBlLlRleHQgJiZcclxuICAgICAgICAgICAgIV9zZXJpYWxpemVkTm9kZS5pc1N0eWxlICYmXHJcbiAgICAgICAgICAgICFfc2VyaWFsaXplZE5vZGUudGV4dENvbnRlbnQucmVwbGFjZSgvXlxccyt8XFxzKyQvZ20sICcnKS5sZW5ndGgpKSB7XHJcbiAgICAgICAgaWQgPSBJR05PUkVEX05PREU7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBpZCA9IGdlbklkKCk7XHJcbiAgICB9XHJcbiAgICB2YXIgc2VyaWFsaXplZE5vZGUgPSBPYmplY3QuYXNzaWduKF9zZXJpYWxpemVkTm9kZSwgeyBpZDogaWQgfSk7XHJcbiAgICBtaXJyb3IuYWRkKG4sIHNlcmlhbGl6ZWROb2RlKTtcclxuICAgIGlmIChpZCA9PT0gSUdOT1JFRF9OT0RFKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAob25TZXJpYWxpemUpIHtcclxuICAgICAgICBvblNlcmlhbGl6ZShuKTtcclxuICAgIH1cclxuICAgIHZhciByZWNvcmRDaGlsZCA9ICFza2lwQ2hpbGQ7XHJcbiAgICBpZiAoc2VyaWFsaXplZE5vZGUudHlwZSA9PT0gTm9kZVR5cGUuRWxlbWVudCkge1xyXG4gICAgICAgIHJlY29yZENoaWxkID0gcmVjb3JkQ2hpbGQgJiYgIXNlcmlhbGl6ZWROb2RlLm5lZWRCbG9jaztcclxuICAgICAgICBkZWxldGUgc2VyaWFsaXplZE5vZGUubmVlZEJsb2NrO1xyXG4gICAgICAgIHZhciBzaGFkb3dSb290ID0gbi5zaGFkb3dSb290O1xyXG4gICAgICAgIGlmIChzaGFkb3dSb290ICYmIGlzTmF0aXZlU2hhZG93RG9tKHNoYWRvd1Jvb3QpKVxyXG4gICAgICAgICAgICBzZXJpYWxpemVkTm9kZS5pc1NoYWRvd0hvc3QgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKChzZXJpYWxpemVkTm9kZS50eXBlID09PSBOb2RlVHlwZS5Eb2N1bWVudCB8fFxyXG4gICAgICAgIHNlcmlhbGl6ZWROb2RlLnR5cGUgPT09IE5vZGVUeXBlLkVsZW1lbnQpICYmXHJcbiAgICAgICAgcmVjb3JkQ2hpbGQpIHtcclxuICAgICAgICBpZiAoc2xpbURPTU9wdGlvbnMuaGVhZFdoaXRlc3BhY2UgJiZcclxuICAgICAgICAgICAgc2VyaWFsaXplZE5vZGUudHlwZSA9PT0gTm9kZVR5cGUuRWxlbWVudCAmJlxyXG4gICAgICAgICAgICBzZXJpYWxpemVkTm9kZS50YWdOYW1lID09PSAnaGVhZCcpIHtcclxuICAgICAgICAgICAgcHJlc2VydmVXaGl0ZVNwYWNlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBieXBhc3NPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBkb2M6IGRvYyxcclxuICAgICAgICAgICAgbWlycm9yOiBtaXJyb3IsXHJcbiAgICAgICAgICAgIGJsb2NrQ2xhc3M6IGJsb2NrQ2xhc3MsXHJcbiAgICAgICAgICAgIGJsb2NrU2VsZWN0b3I6IGJsb2NrU2VsZWN0b3IsXHJcbiAgICAgICAgICAgIG1hc2tUZXh0Q2xhc3M6IG1hc2tUZXh0Q2xhc3MsXHJcbiAgICAgICAgICAgIG1hc2tUZXh0U2VsZWN0b3I6IG1hc2tUZXh0U2VsZWN0b3IsXHJcbiAgICAgICAgICAgIHNraXBDaGlsZDogc2tpcENoaWxkLFxyXG4gICAgICAgICAgICBpbmxpbmVTdHlsZXNoZWV0OiBpbmxpbmVTdHlsZXNoZWV0LFxyXG4gICAgICAgICAgICBtYXNrSW5wdXRPcHRpb25zOiBtYXNrSW5wdXRPcHRpb25zLFxyXG4gICAgICAgICAgICBtYXNrVGV4dEZuOiBtYXNrVGV4dEZuLFxyXG4gICAgICAgICAgICBtYXNrSW5wdXRGbjogbWFza0lucHV0Rm4sXHJcbiAgICAgICAgICAgIHNsaW1ET01PcHRpb25zOiBzbGltRE9NT3B0aW9ucyxcclxuICAgICAgICAgICAgZGF0YVVSTE9wdGlvbnM6IGRhdGFVUkxPcHRpb25zLFxyXG4gICAgICAgICAgICBpbmxpbmVJbWFnZXM6IGlubGluZUltYWdlcyxcclxuICAgICAgICAgICAgcmVjb3JkQ2FudmFzOiByZWNvcmRDYW52YXMsXHJcbiAgICAgICAgICAgIHByZXNlcnZlV2hpdGVTcGFjZTogcHJlc2VydmVXaGl0ZVNwYWNlLFxyXG4gICAgICAgICAgICBvblNlcmlhbGl6ZTogb25TZXJpYWxpemUsXHJcbiAgICAgICAgICAgIG9uSWZyYW1lTG9hZDogb25JZnJhbWVMb2FkLFxyXG4gICAgICAgICAgICBpZnJhbWVMb2FkVGltZW91dDogaWZyYW1lTG9hZFRpbWVvdXQsXHJcbiAgICAgICAgICAgIG9uU3R5bGVzaGVldExvYWQ6IG9uU3R5bGVzaGVldExvYWQsXHJcbiAgICAgICAgICAgIHN0eWxlc2hlZXRMb2FkVGltZW91dDogc3R5bGVzaGVldExvYWRUaW1lb3V0LFxyXG4gICAgICAgICAgICBrZWVwSWZyYW1lU3JjRm46IGtlZXBJZnJhbWVTcmNGblxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfbSA9IEFycmF5LmZyb20obi5jaGlsZE5vZGVzKTsgX2kgPCBfbS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIGNoaWxkTiA9IF9tW19pXTtcclxuICAgICAgICAgICAgdmFyIHNlcmlhbGl6ZWRDaGlsZE5vZGUgPSBzZXJpYWxpemVOb2RlV2l0aElkKGNoaWxkTiwgYnlwYXNzT3B0aW9ucyk7XHJcbiAgICAgICAgICAgIGlmIChzZXJpYWxpemVkQ2hpbGROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBzZXJpYWxpemVkTm9kZS5jaGlsZE5vZGVzLnB1c2goc2VyaWFsaXplZENoaWxkTm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzRWxlbWVudChuKSAmJiBuLnNoYWRvd1Jvb3QpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgX28gPSAwLCBfcCA9IEFycmF5LmZyb20obi5zaGFkb3dSb290LmNoaWxkTm9kZXMpOyBfbyA8IF9wLmxlbmd0aDsgX28rKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkTiA9IF9wW19vXTtcclxuICAgICAgICAgICAgICAgIHZhciBzZXJpYWxpemVkQ2hpbGROb2RlID0gc2VyaWFsaXplTm9kZVdpdGhJZChjaGlsZE4sIGJ5cGFzc09wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlcmlhbGl6ZWRDaGlsZE5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc05hdGl2ZVNoYWRvd0RvbShuLnNoYWRvd1Jvb3QpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChzZXJpYWxpemVkQ2hpbGROb2RlLmlzU2hhZG93ID0gdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VyaWFsaXplZE5vZGUuY2hpbGROb2Rlcy5wdXNoKHNlcmlhbGl6ZWRDaGlsZE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKG4ucGFyZW50Tm9kZSAmJlxyXG4gICAgICAgIGlzU2hhZG93Um9vdChuLnBhcmVudE5vZGUpICYmXHJcbiAgICAgICAgaXNOYXRpdmVTaGFkb3dEb20obi5wYXJlbnROb2RlKSkge1xyXG4gICAgICAgIHNlcmlhbGl6ZWROb2RlLmlzU2hhZG93ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChzZXJpYWxpemVkTm9kZS50eXBlID09PSBOb2RlVHlwZS5FbGVtZW50ICYmXHJcbiAgICAgICAgc2VyaWFsaXplZE5vZGUudGFnTmFtZSA9PT0gJ2lmcmFtZScpIHtcclxuICAgICAgICBvbmNlSWZyYW1lTG9hZGVkKG4sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGlmcmFtZURvYyA9IG4uY29udGVudERvY3VtZW50O1xyXG4gICAgICAgICAgICBpZiAoaWZyYW1lRG9jICYmIG9uSWZyYW1lTG9hZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlcmlhbGl6ZWRJZnJhbWVOb2RlID0gc2VyaWFsaXplTm9kZVdpdGhJZChpZnJhbWVEb2MsIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2M6IGlmcmFtZURvYyxcclxuICAgICAgICAgICAgICAgICAgICBtaXJyb3I6IG1pcnJvcixcclxuICAgICAgICAgICAgICAgICAgICBibG9ja0NsYXNzOiBibG9ja0NsYXNzLFxyXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrU2VsZWN0b3I6IGJsb2NrU2VsZWN0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFza1RleHRDbGFzczogbWFza1RleHRDbGFzcyxcclxuICAgICAgICAgICAgICAgICAgICBtYXNrVGV4dFNlbGVjdG9yOiBtYXNrVGV4dFNlbGVjdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIHNraXBDaGlsZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5saW5lU3R5bGVzaGVldDogaW5saW5lU3R5bGVzaGVldCxcclxuICAgICAgICAgICAgICAgICAgICBtYXNrSW5wdXRPcHRpb25zOiBtYXNrSW5wdXRPcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hc2tUZXh0Rm46IG1hc2tUZXh0Rm4sXHJcbiAgICAgICAgICAgICAgICAgICAgbWFza0lucHV0Rm46IG1hc2tJbnB1dEZuLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaW1ET01PcHRpb25zOiBzbGltRE9NT3B0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhVVJMT3B0aW9uczogZGF0YVVSTE9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5saW5lSW1hZ2VzOiBpbmxpbmVJbWFnZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkQ2FudmFzOiByZWNvcmRDYW52YXMsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VydmVXaGl0ZVNwYWNlOiBwcmVzZXJ2ZVdoaXRlU3BhY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgb25TZXJpYWxpemU6IG9uU2VyaWFsaXplLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uSWZyYW1lTG9hZDogb25JZnJhbWVMb2FkLFxyXG4gICAgICAgICAgICAgICAgICAgIGlmcmFtZUxvYWRUaW1lb3V0OiBpZnJhbWVMb2FkVGltZW91dCxcclxuICAgICAgICAgICAgICAgICAgICBvblN0eWxlc2hlZXRMb2FkOiBvblN0eWxlc2hlZXRMb2FkLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlc2hlZXRMb2FkVGltZW91dDogc3R5bGVzaGVldExvYWRUaW1lb3V0LFxyXG4gICAgICAgICAgICAgICAgICAgIGtlZXBJZnJhbWVTcmNGbjoga2VlcElmcmFtZVNyY0ZuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChzZXJpYWxpemVkSWZyYW1lTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uSWZyYW1lTG9hZChuLCBzZXJpYWxpemVkSWZyYW1lTm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBpZnJhbWVMb2FkVGltZW91dCk7XHJcbiAgICB9XHJcbiAgICBpZiAoc2VyaWFsaXplZE5vZGUudHlwZSA9PT0gTm9kZVR5cGUuRWxlbWVudCAmJlxyXG4gICAgICAgIHNlcmlhbGl6ZWROb2RlLnRhZ05hbWUgPT09ICdsaW5rJyAmJlxyXG4gICAgICAgIHNlcmlhbGl6ZWROb2RlLmF0dHJpYnV0ZXMucmVsID09PSAnc3R5bGVzaGVldCcpIHtcclxuICAgICAgICBvbmNlU3R5bGVzaGVldExvYWRlZChuLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvblN0eWxlc2hlZXRMb2FkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VyaWFsaXplZExpbmtOb2RlID0gc2VyaWFsaXplTm9kZVdpdGhJZChuLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jOiBkb2MsXHJcbiAgICAgICAgICAgICAgICAgICAgbWlycm9yOiBtaXJyb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tDbGFzczogYmxvY2tDbGFzcyxcclxuICAgICAgICAgICAgICAgICAgICBibG9ja1NlbGVjdG9yOiBibG9ja1NlbGVjdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hc2tUZXh0Q2xhc3M6IG1hc2tUZXh0Q2xhc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFza1RleHRTZWxlY3RvcjogbWFza1RleHRTZWxlY3RvcixcclxuICAgICAgICAgICAgICAgICAgICBza2lwQ2hpbGQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGlubGluZVN0eWxlc2hlZXQ6IGlubGluZVN0eWxlc2hlZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFza0lucHV0T3B0aW9uczogbWFza0lucHV0T3B0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICBtYXNrVGV4dEZuOiBtYXNrVGV4dEZuLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hc2tJbnB1dEZuOiBtYXNrSW5wdXRGbixcclxuICAgICAgICAgICAgICAgICAgICBzbGltRE9NT3B0aW9uczogc2xpbURPTU9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVVSTE9wdGlvbnM6IGRhdGFVUkxPcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgIGlubGluZUltYWdlczogaW5saW5lSW1hZ2VzLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlY29yZENhbnZhczogcmVjb3JkQ2FudmFzLFxyXG4gICAgICAgICAgICAgICAgICAgIHByZXNlcnZlV2hpdGVTcGFjZTogcHJlc2VydmVXaGl0ZVNwYWNlLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2VyaWFsaXplOiBvblNlcmlhbGl6ZSxcclxuICAgICAgICAgICAgICAgICAgICBvbklmcmFtZUxvYWQ6IG9uSWZyYW1lTG9hZCxcclxuICAgICAgICAgICAgICAgICAgICBpZnJhbWVMb2FkVGltZW91dDogaWZyYW1lTG9hZFRpbWVvdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdHlsZXNoZWV0TG9hZDogb25TdHlsZXNoZWV0TG9hZCxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZXNoZWV0TG9hZFRpbWVvdXQ6IHN0eWxlc2hlZXRMb2FkVGltZW91dCxcclxuICAgICAgICAgICAgICAgICAgICBrZWVwSWZyYW1lU3JjRm46IGtlZXBJZnJhbWVTcmNGblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VyaWFsaXplZExpbmtOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25TdHlsZXNoZWV0TG9hZChuLCBzZXJpYWxpemVkTGlua05vZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgc3R5bGVzaGVldExvYWRUaW1lb3V0KTtcclxuICAgIH1cclxuICAgIHJldHVybiBzZXJpYWxpemVkTm9kZTtcclxufVxyXG5mdW5jdGlvbiBzbmFwc2hvdChuLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgX2EgPSBvcHRpb25zIHx8IHt9LCBfYiA9IF9hLm1pcnJvciwgbWlycm9yID0gX2IgPT09IHZvaWQgMCA/IG5ldyBNaXJyb3IoKSA6IF9iLCBfYyA9IF9hLmJsb2NrQ2xhc3MsIGJsb2NrQ2xhc3MgPSBfYyA9PT0gdm9pZCAwID8gJ3JyLWJsb2NrJyA6IF9jLCBfZCA9IF9hLmJsb2NrU2VsZWN0b3IsIGJsb2NrU2VsZWN0b3IgPSBfZCA9PT0gdm9pZCAwID8gbnVsbCA6IF9kLCBfZSA9IF9hLm1hc2tUZXh0Q2xhc3MsIG1hc2tUZXh0Q2xhc3MgPSBfZSA9PT0gdm9pZCAwID8gJ3JyLW1hc2snIDogX2UsIF9mID0gX2EubWFza1RleHRTZWxlY3RvciwgbWFza1RleHRTZWxlY3RvciA9IF9mID09PSB2b2lkIDAgPyBudWxsIDogX2YsIF9nID0gX2EuaW5saW5lU3R5bGVzaGVldCwgaW5saW5lU3R5bGVzaGVldCA9IF9nID09PSB2b2lkIDAgPyB0cnVlIDogX2csIF9oID0gX2EuaW5saW5lSW1hZ2VzLCBpbmxpbmVJbWFnZXMgPSBfaCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfaCwgX2ogPSBfYS5yZWNvcmRDYW52YXMsIHJlY29yZENhbnZhcyA9IF9qID09PSB2b2lkIDAgPyBmYWxzZSA6IF9qLCBfayA9IF9hLm1hc2tBbGxJbnB1dHMsIG1hc2tBbGxJbnB1dHMgPSBfayA9PT0gdm9pZCAwID8gZmFsc2UgOiBfaywgbWFza1RleHRGbiA9IF9hLm1hc2tUZXh0Rm4sIG1hc2tJbnB1dEZuID0gX2EubWFza0lucHV0Rm4sIF9sID0gX2Euc2xpbURPTSwgc2xpbURPTSA9IF9sID09PSB2b2lkIDAgPyBmYWxzZSA6IF9sLCBkYXRhVVJMT3B0aW9ucyA9IF9hLmRhdGFVUkxPcHRpb25zLCBwcmVzZXJ2ZVdoaXRlU3BhY2UgPSBfYS5wcmVzZXJ2ZVdoaXRlU3BhY2UsIG9uU2VyaWFsaXplID0gX2Eub25TZXJpYWxpemUsIG9uSWZyYW1lTG9hZCA9IF9hLm9uSWZyYW1lTG9hZCwgaWZyYW1lTG9hZFRpbWVvdXQgPSBfYS5pZnJhbWVMb2FkVGltZW91dCwgb25TdHlsZXNoZWV0TG9hZCA9IF9hLm9uU3R5bGVzaGVldExvYWQsIHN0eWxlc2hlZXRMb2FkVGltZW91dCA9IF9hLnN0eWxlc2hlZXRMb2FkVGltZW91dCwgX20gPSBfYS5rZWVwSWZyYW1lU3JjRm4sIGtlZXBJZnJhbWVTcmNGbiA9IF9tID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSA6IF9tO1xyXG4gICAgdmFyIG1hc2tJbnB1dE9wdGlvbnMgPSBtYXNrQWxsSW5wdXRzID09PSB0cnVlXHJcbiAgICAgICAgPyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRlOiB0cnVlLFxyXG4gICAgICAgICAgICAnZGF0ZXRpbWUtbG9jYWwnOiB0cnVlLFxyXG4gICAgICAgICAgICBlbWFpbDogdHJ1ZSxcclxuICAgICAgICAgICAgbW9udGg6IHRydWUsXHJcbiAgICAgICAgICAgIG51bWJlcjogdHJ1ZSxcclxuICAgICAgICAgICAgcmFuZ2U6IHRydWUsXHJcbiAgICAgICAgICAgIHNlYXJjaDogdHJ1ZSxcclxuICAgICAgICAgICAgdGVsOiB0cnVlLFxyXG4gICAgICAgICAgICB0ZXh0OiB0cnVlLFxyXG4gICAgICAgICAgICB0aW1lOiB0cnVlLFxyXG4gICAgICAgICAgICB1cmw6IHRydWUsXHJcbiAgICAgICAgICAgIHdlZWs6IHRydWUsXHJcbiAgICAgICAgICAgIHRleHRhcmVhOiB0cnVlLFxyXG4gICAgICAgICAgICBzZWxlY3Q6IHRydWUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDogbWFza0FsbElucHV0cyA9PT0gZmFsc2VcclxuICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDogbWFza0FsbElucHV0cztcclxuICAgIHZhciBzbGltRE9NT3B0aW9ucyA9IHNsaW1ET00gPT09IHRydWUgfHwgc2xpbURPTSA9PT0gJ2FsbCdcclxuICAgICAgICA/XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNjcmlwdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBoZWFkRmF2aWNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGhlYWRXaGl0ZXNwYWNlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaGVhZE1ldGFEZXNjS2V5d29yZHM6IHNsaW1ET00gPT09ICdhbGwnLFxyXG4gICAgICAgICAgICAgICAgaGVhZE1ldGFTb2NpYWw6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBoZWFkTWV0YVJvYm90czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGhlYWRNZXRhSHR0cEVxdWl2OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaGVhZE1ldGFBdXRob3JzaGlwOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaGVhZE1ldGFWZXJpZmljYXRpb246IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDogc2xpbURPTSA9PT0gZmFsc2VcclxuICAgICAgICAgICAgPyB7fVxyXG4gICAgICAgICAgICA6IHNsaW1ET007XHJcbiAgICByZXR1cm4gc2VyaWFsaXplTm9kZVdpdGhJZChuLCB7XHJcbiAgICAgICAgZG9jOiBuLFxyXG4gICAgICAgIG1pcnJvcjogbWlycm9yLFxyXG4gICAgICAgIGJsb2NrQ2xhc3M6IGJsb2NrQ2xhc3MsXHJcbiAgICAgICAgYmxvY2tTZWxlY3RvcjogYmxvY2tTZWxlY3RvcixcclxuICAgICAgICBtYXNrVGV4dENsYXNzOiBtYXNrVGV4dENsYXNzLFxyXG4gICAgICAgIG1hc2tUZXh0U2VsZWN0b3I6IG1hc2tUZXh0U2VsZWN0b3IsXHJcbiAgICAgICAgc2tpcENoaWxkOiBmYWxzZSxcclxuICAgICAgICBpbmxpbmVTdHlsZXNoZWV0OiBpbmxpbmVTdHlsZXNoZWV0LFxyXG4gICAgICAgIG1hc2tJbnB1dE9wdGlvbnM6IG1hc2tJbnB1dE9wdGlvbnMsXHJcbiAgICAgICAgbWFza1RleHRGbjogbWFza1RleHRGbixcclxuICAgICAgICBtYXNrSW5wdXRGbjogbWFza0lucHV0Rm4sXHJcbiAgICAgICAgc2xpbURPTU9wdGlvbnM6IHNsaW1ET01PcHRpb25zLFxyXG4gICAgICAgIGRhdGFVUkxPcHRpb25zOiBkYXRhVVJMT3B0aW9ucyxcclxuICAgICAgICBpbmxpbmVJbWFnZXM6IGlubGluZUltYWdlcyxcclxuICAgICAgICByZWNvcmRDYW52YXM6IHJlY29yZENhbnZhcyxcclxuICAgICAgICBwcmVzZXJ2ZVdoaXRlU3BhY2U6IHByZXNlcnZlV2hpdGVTcGFjZSxcclxuICAgICAgICBvblNlcmlhbGl6ZTogb25TZXJpYWxpemUsXHJcbiAgICAgICAgb25JZnJhbWVMb2FkOiBvbklmcmFtZUxvYWQsXHJcbiAgICAgICAgaWZyYW1lTG9hZFRpbWVvdXQ6IGlmcmFtZUxvYWRUaW1lb3V0LFxyXG4gICAgICAgIG9uU3R5bGVzaGVldExvYWQ6IG9uU3R5bGVzaGVldExvYWQsXHJcbiAgICAgICAgc3R5bGVzaGVldExvYWRUaW1lb3V0OiBzdHlsZXNoZWV0TG9hZFRpbWVvdXQsXHJcbiAgICAgICAga2VlcElmcmFtZVNyY0ZuOiBrZWVwSWZyYW1lU3JjRm4sXHJcbiAgICAgICAgbmV3bHlBZGRlZEVsZW1lbnQ6IGZhbHNlXHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiB2aXNpdFNuYXBzaG90KG5vZGUsIG9uVmlzaXQpIHtcclxuICAgIGZ1bmN0aW9uIHdhbGsoY3VycmVudCkge1xyXG4gICAgICAgIG9uVmlzaXQoY3VycmVudCk7XHJcbiAgICAgICAgaWYgKGN1cnJlbnQudHlwZSA9PT0gTm9kZVR5cGUuRG9jdW1lbnQgfHxcclxuICAgICAgICAgICAgY3VycmVudC50eXBlID09PSBOb2RlVHlwZS5FbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnQuY2hpbGROb2Rlcy5mb3JFYWNoKHdhbGspO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHdhbGsobm9kZSk7XHJcbn1cclxuZnVuY3Rpb24gY2xlYW51cFNuYXBzaG90KCkge1xyXG4gICAgX2lkID0gMTtcclxufVxuXG52YXIgY29tbWVudHJlID0gL1xcL1xcKlteKl0qXFwqKyhbXi8qXVteKl0qXFwqKykqXFwvL2c7XHJcbmZ1bmN0aW9uIHBhcnNlKGNzcywgb3B0aW9ucykge1xyXG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cclxuICAgIHZhciBsaW5lbm8gPSAxO1xyXG4gICAgdmFyIGNvbHVtbiA9IDE7XHJcbiAgICBmdW5jdGlvbiB1cGRhdGVQb3NpdGlvbihzdHIpIHtcclxuICAgICAgICB2YXIgbGluZXMgPSBzdHIubWF0Y2goL1xcbi9nKTtcclxuICAgICAgICBpZiAobGluZXMpIHtcclxuICAgICAgICAgICAgbGluZW5vICs9IGxpbmVzLmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGkgPSBzdHIubGFzdEluZGV4T2YoJ1xcbicpO1xyXG4gICAgICAgIGNvbHVtbiA9IGkgPT09IC0xID8gY29sdW1uICsgc3RyLmxlbmd0aCA6IHN0ci5sZW5ndGggLSBpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcG9zaXRpb24oKSB7XHJcbiAgICAgICAgdmFyIHN0YXJ0ID0geyBsaW5lOiBsaW5lbm8sIGNvbHVtbjogY29sdW1uIH07XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgICAgIG5vZGUucG9zaXRpb24gPSBuZXcgUG9zaXRpb24oc3RhcnQpO1xyXG4gICAgICAgICAgICB3aGl0ZXNwYWNlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICB2YXIgUG9zaXRpb24gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIFBvc2l0aW9uKHN0YXJ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcclxuICAgICAgICAgICAgdGhpcy5lbmQgPSB7IGxpbmU6IGxpbmVubywgY29sdW1uOiBjb2x1bW4gfTtcclxuICAgICAgICAgICAgdGhpcy5zb3VyY2UgPSBvcHRpb25zLnNvdXJjZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFBvc2l0aW9uO1xyXG4gICAgfSgpKTtcclxuICAgIFBvc2l0aW9uLnByb3RvdHlwZS5jb250ZW50ID0gY3NzO1xyXG4gICAgdmFyIGVycm9yc0xpc3QgPSBbXTtcclxuICAgIGZ1bmN0aW9uIGVycm9yKG1zZykge1xyXG4gICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXCJcIi5jb25jYXQob3B0aW9ucy5zb3VyY2UgfHwgJycsIFwiOlwiKS5jb25jYXQobGluZW5vLCBcIjpcIikuY29uY2F0KGNvbHVtbiwgXCI6IFwiKS5jb25jYXQobXNnKSk7XHJcbiAgICAgICAgZXJyLnJlYXNvbiA9IG1zZztcclxuICAgICAgICBlcnIuZmlsZW5hbWUgPSBvcHRpb25zLnNvdXJjZTtcclxuICAgICAgICBlcnIubGluZSA9IGxpbmVubztcclxuICAgICAgICBlcnIuY29sdW1uID0gY29sdW1uO1xyXG4gICAgICAgIGVyci5zb3VyY2UgPSBjc3M7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMuc2lsZW50KSB7XHJcbiAgICAgICAgICAgIGVycm9yc0xpc3QucHVzaChlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHN0eWxlc2hlZXQoKSB7XHJcbiAgICAgICAgdmFyIHJ1bGVzTGlzdCA9IHJ1bGVzKCk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdHlwZTogJ3N0eWxlc2hlZXQnLFxyXG4gICAgICAgICAgICBzdHlsZXNoZWV0OiB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6IG9wdGlvbnMuc291cmNlLFxyXG4gICAgICAgICAgICAgICAgcnVsZXM6IHJ1bGVzTGlzdCxcclxuICAgICAgICAgICAgICAgIHBhcnNpbmdFcnJvcnM6IGVycm9yc0xpc3RcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvcGVuKCkge1xyXG4gICAgICAgIHJldHVybiBtYXRjaCgvXntcXHMqLyk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjbG9zZSgpIHtcclxuICAgICAgICByZXR1cm4gbWF0Y2goL159Lyk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBydWxlcygpIHtcclxuICAgICAgICB2YXIgbm9kZTtcclxuICAgICAgICB2YXIgcnVsZXMgPSBbXTtcclxuICAgICAgICB3aGl0ZXNwYWNlKCk7XHJcbiAgICAgICAgY29tbWVudHMocnVsZXMpO1xyXG4gICAgICAgIHdoaWxlIChjc3MubGVuZ3RoICYmIGNzcy5jaGFyQXQoMCkgIT09ICd9JyAmJiAobm9kZSA9IGF0cnVsZSgpIHx8IHJ1bGUoKSkpIHtcclxuICAgICAgICAgICAgaWYgKG5vZGUgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBydWxlcy5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgY29tbWVudHMocnVsZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBydWxlcztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG1hdGNoKHJlKSB7XHJcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKGNzcyk7XHJcbiAgICAgICAgaWYgKCFtKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHN0ciA9IG1bMF07XHJcbiAgICAgICAgdXBkYXRlUG9zaXRpb24oc3RyKTtcclxuICAgICAgICBjc3MgPSBjc3Muc2xpY2Uoc3RyLmxlbmd0aCk7XHJcbiAgICAgICAgcmV0dXJuIG07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB3aGl0ZXNwYWNlKCkge1xyXG4gICAgICAgIG1hdGNoKC9eXFxzKi8pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY29tbWVudHMocnVsZXMpIHtcclxuICAgICAgICBpZiAocnVsZXMgPT09IHZvaWQgMCkgeyBydWxlcyA9IFtdOyB9XHJcbiAgICAgICAgdmFyIGM7XHJcbiAgICAgICAgd2hpbGUgKChjID0gY29tbWVudCgpKSkge1xyXG4gICAgICAgICAgICBpZiAoYyAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHJ1bGVzLnB1c2goYyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYyA9IGNvbW1lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJ1bGVzO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY29tbWVudCgpIHtcclxuICAgICAgICB2YXIgcG9zID0gcG9zaXRpb24oKTtcclxuICAgICAgICBpZiAoJy8nICE9PSBjc3MuY2hhckF0KDApIHx8ICcqJyAhPT0gY3NzLmNoYXJBdCgxKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBpID0gMjtcclxuICAgICAgICB3aGlsZSAoJycgIT09IGNzcy5jaGFyQXQoaSkgJiZcclxuICAgICAgICAgICAgKCcqJyAhPT0gY3NzLmNoYXJBdChpKSB8fCAnLycgIT09IGNzcy5jaGFyQXQoaSArIDEpKSkge1xyXG4gICAgICAgICAgICArK2k7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGkgKz0gMjtcclxuICAgICAgICBpZiAoJycgPT09IGNzcy5jaGFyQXQoaSAtIDEpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcignRW5kIG9mIGNvbW1lbnQgbWlzc2luZycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc3RyID0gY3NzLnNsaWNlKDIsIGkgLSAyKTtcclxuICAgICAgICBjb2x1bW4gKz0gMjtcclxuICAgICAgICB1cGRhdGVQb3NpdGlvbihzdHIpO1xyXG4gICAgICAgIGNzcyA9IGNzcy5zbGljZShpKTtcclxuICAgICAgICBjb2x1bW4gKz0gMjtcclxuICAgICAgICByZXR1cm4gcG9zKHtcclxuICAgICAgICAgICAgdHlwZTogJ2NvbW1lbnQnLFxyXG4gICAgICAgICAgICBjb21tZW50OiBzdHJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNlbGVjdG9yKCkge1xyXG4gICAgICAgIHZhciBtID0gbWF0Y2goL14oW157XSspLyk7XHJcbiAgICAgICAgaWYgKCFtKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRyaW0obVswXSlcclxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcL1xcKihbXipdfFtcXHJcXG5dfChcXCorKFteKi9dfFtcXHJcXG5dKSkpKlxcKlxcLysvZywgJycpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cIig/OlxcXFxcInxbXlwiXSkqXCJ8Jyg/OlxcXFwnfFteJ10pKicvZywgZnVuY3Rpb24gKG0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG0ucmVwbGFjZSgvLC9nLCAnXFx1MjAwQycpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zcGxpdCgvXFxzKig/IVteKF0qXFwpKSxcXHMqLylcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocykge1xyXG4gICAgICAgICAgICByZXR1cm4gcy5yZXBsYWNlKC9cXHUyMDBDL2csICcsJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBkZWNsYXJhdGlvbigpIHtcclxuICAgICAgICB2YXIgcG9zID0gcG9zaXRpb24oKTtcclxuICAgICAgICB2YXIgcHJvcE1hdGNoID0gbWF0Y2goL14oXFwqP1stI1xcL1xcKlxcXFxcXHddKyhcXFtbMC05YS16Xy1dK1xcXSk/KVxccyovKTtcclxuICAgICAgICBpZiAoIXByb3BNYXRjaCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBwcm9wID0gdHJpbShwcm9wTWF0Y2hbMF0pO1xyXG4gICAgICAgIGlmICghbWF0Y2goL146XFxzKi8pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcihcInByb3BlcnR5IG1pc3NpbmcgJzonXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdmFsID0gbWF0Y2goL14oKD86Jyg/OlxcXFwnfC4pKj8nfFwiKD86XFxcXFwifC4pKj9cInxcXChbXlxcKV0qP1xcKXxbXn07XSkrKS8pO1xyXG4gICAgICAgIHZhciByZXQgPSBwb3Moe1xyXG4gICAgICAgICAgICB0eXBlOiAnZGVjbGFyYXRpb24nLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eTogcHJvcC5yZXBsYWNlKGNvbW1lbnRyZSwgJycpLFxyXG4gICAgICAgICAgICB2YWx1ZTogdmFsID8gdHJpbSh2YWxbMF0pLnJlcGxhY2UoY29tbWVudHJlLCAnJykgOiAnJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG1hdGNoKC9eWztcXHNdKi8pO1xyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBkZWNsYXJhdGlvbnMoKSB7XHJcbiAgICAgICAgdmFyIGRlY2xzID0gW107XHJcbiAgICAgICAgaWYgKCFvcGVuKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yKFwibWlzc2luZyAneydcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbW1lbnRzKGRlY2xzKTtcclxuICAgICAgICB2YXIgZGVjbDtcclxuICAgICAgICB3aGlsZSAoKGRlY2wgPSBkZWNsYXJhdGlvbigpKSkge1xyXG4gICAgICAgICAgICBpZiAoZGVjbCAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIGRlY2xzLnB1c2goZGVjbCk7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50cyhkZWNscyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVjbCA9IGRlY2xhcmF0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghY2xvc2UoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoXCJtaXNzaW5nICd9J1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRlY2xzO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24ga2V5ZnJhbWUoKSB7XHJcbiAgICAgICAgdmFyIG07XHJcbiAgICAgICAgdmFyIHZhbHMgPSBbXTtcclxuICAgICAgICB2YXIgcG9zID0gcG9zaXRpb24oKTtcclxuICAgICAgICB3aGlsZSAoKG0gPSBtYXRjaCgvXigoXFxkK1xcLlxcZCt8XFwuXFxkK3xcXGQrKSU/fFthLXpdKylcXHMqLykpKSB7XHJcbiAgICAgICAgICAgIHZhbHMucHVzaChtWzFdKTtcclxuICAgICAgICAgICAgbWF0Y2goL14sXFxzKi8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXZhbHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBvcyh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdrZXlmcmFtZScsXHJcbiAgICAgICAgICAgIHZhbHVlczogdmFscyxcclxuICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBkZWNsYXJhdGlvbnMoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYXRrZXlmcmFtZXMoKSB7XHJcbiAgICAgICAgdmFyIHBvcyA9IHBvc2l0aW9uKCk7XHJcbiAgICAgICAgdmFyIG0gPSBtYXRjaCgvXkAoWy1cXHddKyk/a2V5ZnJhbWVzXFxzKi8pO1xyXG4gICAgICAgIGlmICghbSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB2ZW5kb3IgPSBtWzFdO1xyXG4gICAgICAgIG0gPSBtYXRjaCgvXihbLVxcd10rKVxccyovKTtcclxuICAgICAgICBpZiAoIW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yKCdAa2V5ZnJhbWVzIG1pc3NpbmcgbmFtZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbmFtZSA9IG1bMV07XHJcbiAgICAgICAgaWYgKCFvcGVuKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yKFwiQGtleWZyYW1lcyBtaXNzaW5nICd7J1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGZyYW1lO1xyXG4gICAgICAgIHZhciBmcmFtZXMgPSBjb21tZW50cygpO1xyXG4gICAgICAgIHdoaWxlICgoZnJhbWUgPSBrZXlmcmFtZSgpKSkge1xyXG4gICAgICAgICAgICBmcmFtZXMucHVzaChmcmFtZSk7XHJcbiAgICAgICAgICAgIGZyYW1lcyA9IGZyYW1lcy5jb25jYXQoY29tbWVudHMoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghY2xvc2UoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoXCJAa2V5ZnJhbWVzIG1pc3NpbmcgJ30nXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcG9zKHtcclxuICAgICAgICAgICAgdHlwZTogJ2tleWZyYW1lcycsXHJcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgIHZlbmRvcjogdmVuZG9yLFxyXG4gICAgICAgICAgICBrZXlmcmFtZXM6IGZyYW1lc1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYXRzdXBwb3J0cygpIHtcclxuICAgICAgICB2YXIgcG9zID0gcG9zaXRpb24oKTtcclxuICAgICAgICB2YXIgbSA9IG1hdGNoKC9eQHN1cHBvcnRzICooW157XSspLyk7XHJcbiAgICAgICAgaWYgKCFtKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHN1cHBvcnRzID0gdHJpbShtWzFdKTtcclxuICAgICAgICBpZiAoIW9wZW4oKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoXCJAc3VwcG9ydHMgbWlzc2luZyAneydcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzdHlsZSA9IGNvbW1lbnRzKCkuY29uY2F0KHJ1bGVzKCkpO1xyXG4gICAgICAgIGlmICghY2xvc2UoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoXCJAc3VwcG9ydHMgbWlzc2luZyAnfSdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwb3Moe1xyXG4gICAgICAgICAgICB0eXBlOiAnc3VwcG9ydHMnLFxyXG4gICAgICAgICAgICBzdXBwb3J0czogc3VwcG9ydHMsXHJcbiAgICAgICAgICAgIHJ1bGVzOiBzdHlsZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYXRob3N0KCkge1xyXG4gICAgICAgIHZhciBwb3MgPSBwb3NpdGlvbigpO1xyXG4gICAgICAgIHZhciBtID0gbWF0Y2goL15AaG9zdFxccyovKTtcclxuICAgICAgICBpZiAoIW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9wZW4oKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoXCJAaG9zdCBtaXNzaW5nICd7J1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHN0eWxlID0gY29tbWVudHMoKS5jb25jYXQocnVsZXMoKSk7XHJcbiAgICAgICAgaWYgKCFjbG9zZSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcihcIkBob3N0IG1pc3NpbmcgJ30nXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcG9zKHtcclxuICAgICAgICAgICAgdHlwZTogJ2hvc3QnLFxyXG4gICAgICAgICAgICBydWxlczogc3R5bGVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGF0bWVkaWEoKSB7XHJcbiAgICAgICAgdmFyIHBvcyA9IHBvc2l0aW9uKCk7XHJcbiAgICAgICAgdmFyIG0gPSBtYXRjaCgvXkBtZWRpYSAqKFtee10rKS8pO1xyXG4gICAgICAgIGlmICghbSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBtZWRpYSA9IHRyaW0obVsxXSk7XHJcbiAgICAgICAgaWYgKCFvcGVuKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yKFwiQG1lZGlhIG1pc3NpbmcgJ3snXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc3R5bGUgPSBjb21tZW50cygpLmNvbmNhdChydWxlcygpKTtcclxuICAgICAgICBpZiAoIWNsb3NlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yKFwiQG1lZGlhIG1pc3NpbmcgJ30nXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcG9zKHtcclxuICAgICAgICAgICAgdHlwZTogJ21lZGlhJyxcclxuICAgICAgICAgICAgbWVkaWE6IG1lZGlhLFxyXG4gICAgICAgICAgICBydWxlczogc3R5bGVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGF0Y3VzdG9tbWVkaWEoKSB7XHJcbiAgICAgICAgdmFyIHBvcyA9IHBvc2l0aW9uKCk7XHJcbiAgICAgICAgdmFyIG0gPSBtYXRjaCgvXkBjdXN0b20tbWVkaWFcXHMrKC0tW15cXHNdKylcXHMqKFteeztdKyk7Lyk7XHJcbiAgICAgICAgaWYgKCFtKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBvcyh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdjdXN0b20tbWVkaWEnLFxyXG4gICAgICAgICAgICBuYW1lOiB0cmltKG1bMV0pLFxyXG4gICAgICAgICAgICBtZWRpYTogdHJpbShtWzJdKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYXRwYWdlKCkge1xyXG4gICAgICAgIHZhciBwb3MgPSBwb3NpdGlvbigpO1xyXG4gICAgICAgIHZhciBtID0gbWF0Y2goL15AcGFnZSAqLyk7XHJcbiAgICAgICAgaWYgKCFtKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNlbCA9IHNlbGVjdG9yKCkgfHwgW107XHJcbiAgICAgICAgaWYgKCFvcGVuKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yKFwiQHBhZ2UgbWlzc2luZyAneydcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBkZWNscyA9IGNvbW1lbnRzKCk7XHJcbiAgICAgICAgdmFyIGRlY2w7XHJcbiAgICAgICAgd2hpbGUgKChkZWNsID0gZGVjbGFyYXRpb24oKSkpIHtcclxuICAgICAgICAgICAgZGVjbHMucHVzaChkZWNsKTtcclxuICAgICAgICAgICAgZGVjbHMgPSBkZWNscy5jb25jYXQoY29tbWVudHMoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghY2xvc2UoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoXCJAcGFnZSBtaXNzaW5nICd9J1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBvcyh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYWdlJyxcclxuICAgICAgICAgICAgc2VsZWN0b3JzOiBzZWwsXHJcbiAgICAgICAgICAgIGRlY2xhcmF0aW9uczogZGVjbHNcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGF0ZG9jdW1lbnQoKSB7XHJcbiAgICAgICAgdmFyIHBvcyA9IHBvc2l0aW9uKCk7XHJcbiAgICAgICAgdmFyIG0gPSBtYXRjaCgvXkAoWy1cXHddKyk/ZG9jdW1lbnQgKihbXntdKykvKTtcclxuICAgICAgICBpZiAoIW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdmVuZG9yID0gdHJpbShtWzFdKTtcclxuICAgICAgICB2YXIgZG9jID0gdHJpbShtWzJdKTtcclxuICAgICAgICBpZiAoIW9wZW4oKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoXCJAZG9jdW1lbnQgbWlzc2luZyAneydcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzdHlsZSA9IGNvbW1lbnRzKCkuY29uY2F0KHJ1bGVzKCkpO1xyXG4gICAgICAgIGlmICghY2xvc2UoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoXCJAZG9jdW1lbnQgbWlzc2luZyAnfSdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwb3Moe1xyXG4gICAgICAgICAgICB0eXBlOiAnZG9jdW1lbnQnLFxyXG4gICAgICAgICAgICBkb2N1bWVudDogZG9jLFxyXG4gICAgICAgICAgICB2ZW5kb3I6IHZlbmRvcixcclxuICAgICAgICAgICAgcnVsZXM6IHN0eWxlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhdGZvbnRmYWNlKCkge1xyXG4gICAgICAgIHZhciBwb3MgPSBwb3NpdGlvbigpO1xyXG4gICAgICAgIHZhciBtID0gbWF0Y2goL15AZm9udC1mYWNlXFxzKi8pO1xyXG4gICAgICAgIGlmICghbSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb3BlbigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcihcIkBmb250LWZhY2UgbWlzc2luZyAneydcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBkZWNscyA9IGNvbW1lbnRzKCk7XHJcbiAgICAgICAgdmFyIGRlY2w7XHJcbiAgICAgICAgd2hpbGUgKChkZWNsID0gZGVjbGFyYXRpb24oKSkpIHtcclxuICAgICAgICAgICAgZGVjbHMucHVzaChkZWNsKTtcclxuICAgICAgICAgICAgZGVjbHMgPSBkZWNscy5jb25jYXQoY29tbWVudHMoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghY2xvc2UoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoXCJAZm9udC1mYWNlIG1pc3NpbmcgJ30nXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcG9zKHtcclxuICAgICAgICAgICAgdHlwZTogJ2ZvbnQtZmFjZScsXHJcbiAgICAgICAgICAgIGRlY2xhcmF0aW9uczogZGVjbHNcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHZhciBhdGltcG9ydCA9IF9jb21waWxlQXRydWxlKCdpbXBvcnQnKTtcclxuICAgIHZhciBhdGNoYXJzZXQgPSBfY29tcGlsZUF0cnVsZSgnY2hhcnNldCcpO1xyXG4gICAgdmFyIGF0bmFtZXNwYWNlID0gX2NvbXBpbGVBdHJ1bGUoJ25hbWVzcGFjZScpO1xyXG4gICAgZnVuY3Rpb24gX2NvbXBpbGVBdHJ1bGUobmFtZSkge1xyXG4gICAgICAgIHZhciByZSA9IG5ldyBSZWdFeHAoJ15AJyArIG5hbWUgKyAnXFxcXHMqKFteO10rKTsnKTtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcG9zID0gcG9zaXRpb24oKTtcclxuICAgICAgICAgICAgdmFyIG0gPSBtYXRjaChyZSk7XHJcbiAgICAgICAgICAgIGlmICghbSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciByZXQgPSB7IHR5cGU6IG5hbWUgfTtcclxuICAgICAgICAgICAgcmV0W25hbWVdID0gbVsxXS50cmltKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBwb3MocmV0KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYXRydWxlKCkge1xyXG4gICAgICAgIGlmIChjc3NbMF0gIT09ICdAJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoYXRrZXlmcmFtZXMoKSB8fFxyXG4gICAgICAgICAgICBhdG1lZGlhKCkgfHxcclxuICAgICAgICAgICAgYXRjdXN0b21tZWRpYSgpIHx8XHJcbiAgICAgICAgICAgIGF0c3VwcG9ydHMoKSB8fFxyXG4gICAgICAgICAgICBhdGltcG9ydCgpIHx8XHJcbiAgICAgICAgICAgIGF0Y2hhcnNldCgpIHx8XHJcbiAgICAgICAgICAgIGF0bmFtZXNwYWNlKCkgfHxcclxuICAgICAgICAgICAgYXRkb2N1bWVudCgpIHx8XHJcbiAgICAgICAgICAgIGF0cGFnZSgpIHx8XHJcbiAgICAgICAgICAgIGF0aG9zdCgpIHx8XHJcbiAgICAgICAgICAgIGF0Zm9udGZhY2UoKSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBydWxlKCkge1xyXG4gICAgICAgIHZhciBwb3MgPSBwb3NpdGlvbigpO1xyXG4gICAgICAgIHZhciBzZWwgPSBzZWxlY3RvcigpO1xyXG4gICAgICAgIGlmICghc2VsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcignc2VsZWN0b3IgbWlzc2luZycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb21tZW50cygpO1xyXG4gICAgICAgIHJldHVybiBwb3Moe1xyXG4gICAgICAgICAgICB0eXBlOiAncnVsZScsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yczogc2VsLFxyXG4gICAgICAgICAgICBkZWNsYXJhdGlvbnM6IGRlY2xhcmF0aW9ucygpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYWRkUGFyZW50KHN0eWxlc2hlZXQoKSk7XHJcbn1cclxuZnVuY3Rpb24gdHJpbShzdHIpIHtcclxuICAgIHJldHVybiBzdHIgPyBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpIDogJyc7XHJcbn1cclxuZnVuY3Rpb24gYWRkUGFyZW50KG9iaiwgcGFyZW50KSB7XHJcbiAgICB2YXIgaXNOb2RlID0gb2JqICYmIHR5cGVvZiBvYmoudHlwZSA9PT0gJ3N0cmluZyc7XHJcbiAgICB2YXIgY2hpbGRQYXJlbnQgPSBpc05vZGUgPyBvYmogOiBwYXJlbnQ7XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmtleXMob2JqKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgayA9IF9hW19pXTtcclxuICAgICAgICB2YXIgdmFsdWUgPSBvYmpba107XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHZhbHVlLmZvckVhY2goZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgICAgICAgIGFkZFBhcmVudCh2LCBjaGlsZFBhcmVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIGFkZFBhcmVudCh2YWx1ZSwgY2hpbGRQYXJlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChpc05vZGUpIHtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCAncGFyZW50Jywge1xyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgdmFsdWU6IHBhcmVudCB8fCBudWxsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb2JqO1xyXG59XG5cbnZhciB0YWdNYXAgPSB7XHJcbiAgICBzY3JpcHQ6ICdub3NjcmlwdCcsXHJcbiAgICBhbHRnbHlwaDogJ2FsdEdseXBoJyxcclxuICAgIGFsdGdseXBoZGVmOiAnYWx0R2x5cGhEZWYnLFxyXG4gICAgYWx0Z2x5cGhpdGVtOiAnYWx0R2x5cGhJdGVtJyxcclxuICAgIGFuaW1hdGVjb2xvcjogJ2FuaW1hdGVDb2xvcicsXHJcbiAgICBhbmltYXRlbW90aW9uOiAnYW5pbWF0ZU1vdGlvbicsXHJcbiAgICBhbmltYXRldHJhbnNmb3JtOiAnYW5pbWF0ZVRyYW5zZm9ybScsXHJcbiAgICBjbGlwcGF0aDogJ2NsaXBQYXRoJyxcclxuICAgIGZlYmxlbmQ6ICdmZUJsZW5kJyxcclxuICAgIGZlY29sb3JtYXRyaXg6ICdmZUNvbG9yTWF0cml4JyxcclxuICAgIGZlY29tcG9uZW50dHJhbnNmZXI6ICdmZUNvbXBvbmVudFRyYW5zZmVyJyxcclxuICAgIGZlY29tcG9zaXRlOiAnZmVDb21wb3NpdGUnLFxyXG4gICAgZmVjb252b2x2ZW1hdHJpeDogJ2ZlQ29udm9sdmVNYXRyaXgnLFxyXG4gICAgZmVkaWZmdXNlbGlnaHRpbmc6ICdmZURpZmZ1c2VMaWdodGluZycsXHJcbiAgICBmZWRpc3BsYWNlbWVudG1hcDogJ2ZlRGlzcGxhY2VtZW50TWFwJyxcclxuICAgIGZlZGlzdGFudGxpZ2h0OiAnZmVEaXN0YW50TGlnaHQnLFxyXG4gICAgZmVkcm9wc2hhZG93OiAnZmVEcm9wU2hhZG93JyxcclxuICAgIGZlZmxvb2Q6ICdmZUZsb29kJyxcclxuICAgIGZlZnVuY2E6ICdmZUZ1bmNBJyxcclxuICAgIGZlZnVuY2I6ICdmZUZ1bmNCJyxcclxuICAgIGZlZnVuY2c6ICdmZUZ1bmNHJyxcclxuICAgIGZlZnVuY3I6ICdmZUZ1bmNSJyxcclxuICAgIGZlZ2F1c3NpYW5ibHVyOiAnZmVHYXVzc2lhbkJsdXInLFxyXG4gICAgZmVpbWFnZTogJ2ZlSW1hZ2UnLFxyXG4gICAgZmVtZXJnZTogJ2ZlTWVyZ2UnLFxyXG4gICAgZmVtZXJnZW5vZGU6ICdmZU1lcmdlTm9kZScsXHJcbiAgICBmZW1vcnBob2xvZ3k6ICdmZU1vcnBob2xvZ3knLFxyXG4gICAgZmVvZmZzZXQ6ICdmZU9mZnNldCcsXHJcbiAgICBmZXBvaW50bGlnaHQ6ICdmZVBvaW50TGlnaHQnLFxyXG4gICAgZmVzcGVjdWxhcmxpZ2h0aW5nOiAnZmVTcGVjdWxhckxpZ2h0aW5nJyxcclxuICAgIGZlc3BvdGxpZ2h0OiAnZmVTcG90TGlnaHQnLFxyXG4gICAgZmV0aWxlOiAnZmVUaWxlJyxcclxuICAgIGZldHVyYnVsZW5jZTogJ2ZlVHVyYnVsZW5jZScsXHJcbiAgICBmb3JlaWdub2JqZWN0OiAnZm9yZWlnbk9iamVjdCcsXHJcbiAgICBnbHlwaHJlZjogJ2dseXBoUmVmJyxcclxuICAgIGxpbmVhcmdyYWRpZW50OiAnbGluZWFyR3JhZGllbnQnLFxyXG4gICAgcmFkaWFsZ3JhZGllbnQ6ICdyYWRpYWxHcmFkaWVudCdcclxufTtcclxuZnVuY3Rpb24gZ2V0VGFnTmFtZShuKSB7XHJcbiAgICB2YXIgdGFnTmFtZSA9IHRhZ01hcFtuLnRhZ05hbWVdID8gdGFnTWFwW24udGFnTmFtZV0gOiBuLnRhZ05hbWU7XHJcbiAgICBpZiAodGFnTmFtZSA9PT0gJ2xpbmsnICYmIG4uYXR0cmlidXRlcy5fY3NzVGV4dCkge1xyXG4gICAgICAgIHRhZ05hbWUgPSAnc3R5bGUnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRhZ05hbWU7XHJcbn1cclxuZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cikge1xyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpO1xyXG59XHJcbnZhciBIT1ZFUl9TRUxFQ1RPUiA9IC8oW15cXFxcXSk6aG92ZXIvO1xyXG52YXIgSE9WRVJfU0VMRUNUT1JfR0xPQkFMID0gbmV3IFJlZ0V4cChIT1ZFUl9TRUxFQ1RPUi5zb3VyY2UsICdnJyk7XHJcbmZ1bmN0aW9uIGFkZEhvdmVyQ2xhc3MoY3NzVGV4dCwgY2FjaGUpIHtcclxuICAgIHZhciBjYWNoZWRTdHlsZSA9IGNhY2hlID09PSBudWxsIHx8IGNhY2hlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYWNoZS5zdHlsZXNXaXRoSG92ZXJDbGFzcy5nZXQoY3NzVGV4dCk7XHJcbiAgICBpZiAoY2FjaGVkU3R5bGUpXHJcbiAgICAgICAgcmV0dXJuIGNhY2hlZFN0eWxlO1xyXG4gICAgdmFyIGFzdCA9IHBhcnNlKGNzc1RleHQsIHtcclxuICAgICAgICBzaWxlbnQ6IHRydWVcclxuICAgIH0pO1xyXG4gICAgaWYgKCFhc3Quc3R5bGVzaGVldCkge1xyXG4gICAgICAgIHJldHVybiBjc3NUZXh0O1xyXG4gICAgfVxyXG4gICAgdmFyIHNlbGVjdG9ycyA9IFtdO1xyXG4gICAgYXN0LnN0eWxlc2hlZXQucnVsZXMuZm9yRWFjaChmdW5jdGlvbiAocnVsZSkge1xyXG4gICAgICAgIGlmICgnc2VsZWN0b3JzJyBpbiBydWxlKSB7XHJcbiAgICAgICAgICAgIChydWxlLnNlbGVjdG9ycyB8fCBbXSkuZm9yRWFjaChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgICAgIGlmIChIT1ZFUl9TRUxFQ1RPUi50ZXN0KHNlbGVjdG9yKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9ycy5wdXNoKHNlbGVjdG9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAoc2VsZWN0b3JzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBjc3NUZXh0O1xyXG4gICAgfVxyXG4gICAgdmFyIHNlbGVjdG9yTWF0Y2hlciA9IG5ldyBSZWdFeHAoc2VsZWN0b3JzXHJcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoc2VsZWN0b3IsIGluZGV4KSB7IHJldHVybiBzZWxlY3RvcnMuaW5kZXhPZihzZWxlY3RvcikgPT09IGluZGV4OyB9KVxyXG4gICAgICAgIC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBiLmxlbmd0aCAtIGEubGVuZ3RoOyB9KVxyXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIGVzY2FwZVJlZ0V4cChzZWxlY3Rvcik7XHJcbiAgICB9KVxyXG4gICAgICAgIC5qb2luKCd8JyksICdnJyk7XHJcbiAgICB2YXIgcmVzdWx0ID0gY3NzVGV4dC5yZXBsYWNlKHNlbGVjdG9yTWF0Y2hlciwgZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgdmFyIG5ld1NlbGVjdG9yID0gc2VsZWN0b3IucmVwbGFjZShIT1ZFUl9TRUxFQ1RPUl9HTE9CQUwsICckMS5cXFxcOmhvdmVyJyk7XHJcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHNlbGVjdG9yLCBcIiwgXCIpLmNvbmNhdChuZXdTZWxlY3Rvcik7XHJcbiAgICB9KTtcclxuICAgIGNhY2hlID09PSBudWxsIHx8IGNhY2hlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYWNoZS5zdHlsZXNXaXRoSG92ZXJDbGFzcy5zZXQoY3NzVGV4dCwgcmVzdWx0KTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlQ2FjaGUoKSB7XHJcbiAgICB2YXIgc3R5bGVzV2l0aEhvdmVyQ2xhc3MgPSBuZXcgTWFwKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHN0eWxlc1dpdGhIb3ZlckNsYXNzOiBzdHlsZXNXaXRoSG92ZXJDbGFzc1xyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBidWlsZE5vZGUobiwgb3B0aW9ucykge1xyXG4gICAgdmFyIGRvYyA9IG9wdGlvbnMuZG9jLCBoYWNrQ3NzID0gb3B0aW9ucy5oYWNrQ3NzLCBjYWNoZSA9IG9wdGlvbnMuY2FjaGU7XHJcbiAgICBzd2l0Y2ggKG4udHlwZSkge1xyXG4gICAgICAgIGNhc2UgTm9kZVR5cGUuRG9jdW1lbnQ6XHJcbiAgICAgICAgICAgIHJldHVybiBkb2MuaW1wbGVtZW50YXRpb24uY3JlYXRlRG9jdW1lbnQobnVsbCwgJycsIG51bGwpO1xyXG4gICAgICAgIGNhc2UgTm9kZVR5cGUuRG9jdW1lbnRUeXBlOlxyXG4gICAgICAgICAgICByZXR1cm4gZG9jLmltcGxlbWVudGF0aW9uLmNyZWF0ZURvY3VtZW50VHlwZShuLm5hbWUgfHwgJ2h0bWwnLCBuLnB1YmxpY0lkLCBuLnN5c3RlbUlkKTtcclxuICAgICAgICBjYXNlIE5vZGVUeXBlLkVsZW1lbnQ6IHtcclxuICAgICAgICAgICAgdmFyIHRhZ05hbWUgPSBnZXRUYWdOYW1lKG4pO1xyXG4gICAgICAgICAgICB2YXIgbm9kZV8xO1xyXG4gICAgICAgICAgICBpZiAobi5pc1NWRykge1xyXG4gICAgICAgICAgICAgICAgbm9kZV8xID0gZG9jLmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCB0YWdOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5vZGVfMSA9IGRvYy5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBzcGVjaWFsQXR0cmlidXRlcyA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKHZhciBuYW1lXzEgaW4gbi5hdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLmF0dHJpYnV0ZXMsIG5hbWVfMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IG4uYXR0cmlidXRlc1tuYW1lXzFdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhZ05hbWUgPT09ICdvcHRpb24nICYmXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZV8xID09PSAnc2VsZWN0ZWQnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgIGlmIChuYW1lXzEuc3RhcnRzV2l0aCgncnJfJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBzcGVjaWFsQXR0cmlidXRlc1tuYW1lXzFdID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgaXNUZXh0YXJlYSA9IHRhZ05hbWUgPT09ICd0ZXh0YXJlYScgJiYgbmFtZV8xID09PSAndmFsdWUnO1xyXG4gICAgICAgICAgICAgICAgdmFyIGlzUmVtb3RlT3JEeW5hbWljQ3NzID0gdGFnTmFtZSA9PT0gJ3N0eWxlJyAmJiBuYW1lXzEgPT09ICdfY3NzVGV4dCc7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNSZW1vdGVPckR5bmFtaWNDc3MgJiYgaGFja0NzcyAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBhZGRIb3ZlckNsYXNzKHZhbHVlLCBjYWNoZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoKGlzVGV4dGFyZWEgfHwgaXNSZW1vdGVPckR5bmFtaWNDc3MpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSBkb2MuY3JlYXRlVGV4dE5vZGUodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBBcnJheS5mcm9tKG5vZGVfMS5jaGlsZE5vZGVzKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBfYVtfaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjLm5vZGVUeXBlID09PSBub2RlXzEuVEVYVF9OT0RFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlXzEucmVtb3ZlQ2hpbGQoYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZV8xLmFwcGVuZENoaWxkKGNoaWxkKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG4uaXNTVkcgJiYgbmFtZV8xID09PSAneGxpbms6aHJlZicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZV8xLnNldEF0dHJpYnV0ZU5TKCdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgbmFtZV8xLCB2YWx1ZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobmFtZV8xID09PSAnb25sb2FkJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lXzEgPT09ICdvbmNsaWNrJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lXzEuc3Vic3RyaW5nKDAsIDcpID09PSAnb25tb3VzZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZV8xLnNldEF0dHJpYnV0ZSgnXycgKyBuYW1lXzEsIHZhbHVlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0YWdOYW1lID09PSAnbWV0YScgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgbi5hdHRyaWJ1dGVzWydodHRwLWVxdWl2J10gPT09ICdDb250ZW50LVNlY3VyaXR5LVBvbGljeScgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZV8xID09PSAnY29udGVudCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZV8xLnNldEF0dHJpYnV0ZSgnY3NwLWNvbnRlbnQnLCB2YWx1ZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRhZ05hbWUgPT09ICdsaW5rJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuLmF0dHJpYnV0ZXMucmVsID09PSAncHJlbG9hZCcgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgbi5hdHRyaWJ1dGVzLmFzID09PSAnc2NyaXB0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0YWdOYW1lID09PSAnbGluaycgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgbi5hdHRyaWJ1dGVzLnJlbCA9PT0gJ3ByZWZldGNoJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2Ygbi5hdHRyaWJ1dGVzLmhyZWYgPT09ICdzdHJpbmcnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG4uYXR0cmlidXRlcy5ocmVmLmVuZHNXaXRoKCcuanMnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0YWdOYW1lID09PSAnaW1nJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuLmF0dHJpYnV0ZXMuc3Jjc2V0ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG4uYXR0cmlidXRlcy5ycl9kYXRhVVJMKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVfMS5zZXRBdHRyaWJ1dGUoJ3Jyd2ViLW9yaWdpbmFsLXNyY3NldCcsIG4uYXR0cmlidXRlcy5zcmNzZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZV8xLnNldEF0dHJpYnV0ZShuYW1lXzEsIHZhbHVlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKG5hbWVfMikge1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gc3BlY2lhbEF0dHJpYnV0ZXNbbmFtZV8yXTtcclxuICAgICAgICAgICAgICAgIGlmICh0YWdOYW1lID09PSAnY2FudmFzJyAmJiBuYW1lXzIgPT09ICdycl9kYXRhVVJMJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbWFnZV8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VfMS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdHggPSBub2RlXzEuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN0eCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZV8xLCAwLCAwLCBpbWFnZV8xLndpZHRoLCBpbWFnZV8xLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlXzEuc3JjID0gdmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZV8xLlJSTm9kZVR5cGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVfMS5ycl9kYXRhVVJMID0gdmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRhZ05hbWUgPT09ICdpbWcnICYmIG5hbWVfMiA9PT0gJ3JyX2RhdGFVUkwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGltYWdlID0gbm9kZV8xO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaW1hZ2UuY3VycmVudFNyYy5zdGFydHNXaXRoKCdkYXRhOicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlLnNldEF0dHJpYnV0ZSgncnJ3ZWItb3JpZ2luYWwtc3JjJywgbi5hdHRyaWJ1dGVzLnNyYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWVfMiA9PT0gJ3JyX3dpZHRoJykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVfMS5zdHlsZS53aWR0aCA9IHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChuYW1lXzIgPT09ICdycl9oZWlnaHQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZV8xLnN0eWxlLmhlaWdodCA9IHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChuYW1lXzIgPT09ICdycl9tZWRpYUN1cnJlbnRUaW1lJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlXzEuY3VycmVudFRpbWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5hbWVfMiA9PT0gJ3JyX21lZGlhU3RhdGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdwbGF5ZWQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZV8xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBsYXkoKVtcImNhdGNoXCJdKGZ1bmN0aW9uIChlKSB7IHJldHVybiBjb25zb2xlLndhcm4oJ21lZGlhIHBsYXliYWNrIGVycm9yJywgZSk7IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3BhdXNlZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlXzEucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZm9yICh2YXIgbmFtZV8yIGluIHNwZWNpYWxBdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICAgICAgICBfbG9vcF8xKG5hbWVfMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG4uaXNTaGFkb3dIb3N0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW5vZGVfMS5zaGFkb3dSb290KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZV8xLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChub2RlXzEuc2hhZG93Um9vdC5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVfMS5zaGFkb3dSb290LnJlbW92ZUNoaWxkKG5vZGVfMS5zaGFkb3dSb290LmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbm9kZV8xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIE5vZGVUeXBlLlRleHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBkb2MuY3JlYXRlVGV4dE5vZGUobi5pc1N0eWxlICYmIGhhY2tDc3NcclxuICAgICAgICAgICAgICAgID8gYWRkSG92ZXJDbGFzcyhuLnRleHRDb250ZW50LCBjYWNoZSlcclxuICAgICAgICAgICAgICAgIDogbi50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgY2FzZSBOb2RlVHlwZS5DREFUQTpcclxuICAgICAgICAgICAgcmV0dXJuIGRvYy5jcmVhdGVDREFUQVNlY3Rpb24obi50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgY2FzZSBOb2RlVHlwZS5Db21tZW50OlxyXG4gICAgICAgICAgICByZXR1cm4gZG9jLmNyZWF0ZUNvbW1lbnQobi50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gYnVpbGROb2RlV2l0aFNOKG4sIG9wdGlvbnMpIHtcclxuICAgIHZhciBkb2MgPSBvcHRpb25zLmRvYywgbWlycm9yID0gb3B0aW9ucy5taXJyb3IsIF9hID0gb3B0aW9ucy5za2lwQ2hpbGQsIHNraXBDaGlsZCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuaGFja0NzcywgaGFja0NzcyA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIGFmdGVyQXBwZW5kID0gb3B0aW9ucy5hZnRlckFwcGVuZCwgY2FjaGUgPSBvcHRpb25zLmNhY2hlO1xyXG4gICAgdmFyIG5vZGUgPSBidWlsZE5vZGUobiwgeyBkb2M6IGRvYywgaGFja0NzczogaGFja0NzcywgY2FjaGU6IGNhY2hlIH0pO1xyXG4gICAgaWYgKCFub2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAobi5yb290SWQgJiYgbWlycm9yLmdldE5vZGUobi5yb290SWQpICE9PSBkb2MpIHtcclxuICAgICAgICBtaXJyb3IucmVwbGFjZShuLnJvb3RJZCwgZG9jKTtcclxuICAgIH1cclxuICAgIGlmIChuLnR5cGUgPT09IE5vZGVUeXBlLkRvY3VtZW50KSB7XHJcbiAgICAgICAgZG9jLmNsb3NlKCk7XHJcbiAgICAgICAgZG9jLm9wZW4oKTtcclxuICAgICAgICBpZiAobi5jb21wYXRNb2RlID09PSAnQmFja0NvbXBhdCcgJiZcclxuICAgICAgICAgICAgbi5jaGlsZE5vZGVzICYmXHJcbiAgICAgICAgICAgIG4uY2hpbGROb2Rlc1swXS50eXBlICE9PSBOb2RlVHlwZS5Eb2N1bWVudFR5cGUpIHtcclxuICAgICAgICAgICAgaWYgKG4uY2hpbGROb2Rlc1swXS50eXBlID09PSBOb2RlVHlwZS5FbGVtZW50ICYmXHJcbiAgICAgICAgICAgICAgICAneG1sbnMnIGluIG4uY2hpbGROb2Rlc1swXS5hdHRyaWJ1dGVzICYmXHJcbiAgICAgICAgICAgICAgICBuLmNoaWxkTm9kZXNbMF0uYXR0cmlidXRlcy54bWxucyA9PT0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnKSB7XHJcbiAgICAgICAgICAgICAgICBkb2Mud3JpdGUoJzwhRE9DVFlQRSBodG1sIFBVQkxJQyBcIi0vL1czQy8vRFREIFhIVE1MIDEuMCBUcmFuc2l0aW9uYWwvL0VOXCIgXCJcIj4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRvYy53cml0ZSgnPCFET0NUWVBFIGh0bWwgUFVCTElDIFwiLS8vVzNDLy9EVEQgSFRNTCA0LjAgVHJhbnNpdGlvbmFsLy9FTlwiIFwiXCI+Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbm9kZSA9IGRvYztcclxuICAgIH1cclxuICAgIG1pcnJvci5hZGQobm9kZSwgbik7XHJcbiAgICBpZiAoKG4udHlwZSA9PT0gTm9kZVR5cGUuRG9jdW1lbnQgfHwgbi50eXBlID09PSBOb2RlVHlwZS5FbGVtZW50KSAmJlxyXG4gICAgICAgICFza2lwQ2hpbGQpIHtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9jID0gbi5jaGlsZE5vZGVzOyBfaSA8IF9jLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICB2YXIgY2hpbGROID0gX2NbX2ldO1xyXG4gICAgICAgICAgICB2YXIgY2hpbGROb2RlID0gYnVpbGROb2RlV2l0aFNOKGNoaWxkTiwge1xyXG4gICAgICAgICAgICAgICAgZG9jOiBkb2MsXHJcbiAgICAgICAgICAgICAgICBtaXJyb3I6IG1pcnJvcixcclxuICAgICAgICAgICAgICAgIHNraXBDaGlsZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBoYWNrQ3NzOiBoYWNrQ3NzLFxyXG4gICAgICAgICAgICAgICAgYWZ0ZXJBcHBlbmQ6IGFmdGVyQXBwZW5kLFxyXG4gICAgICAgICAgICAgICAgY2FjaGU6IGNhY2hlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoIWNoaWxkTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdGYWlsZWQgdG8gcmVidWlsZCcsIGNoaWxkTik7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY2hpbGROLmlzU2hhZG93ICYmIGlzRWxlbWVudChub2RlKSAmJiBub2RlLnNoYWRvd1Jvb3QpIHtcclxuICAgICAgICAgICAgICAgIG5vZGUuc2hhZG93Um9vdC5hcHBlbmRDaGlsZChjaGlsZE5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChjaGlsZE5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhZnRlckFwcGVuZCkge1xyXG4gICAgICAgICAgICAgICAgYWZ0ZXJBcHBlbmQoY2hpbGROb2RlLCBjaGlsZE4uaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5vZGU7XHJcbn1cclxuZnVuY3Rpb24gdmlzaXQobWlycm9yLCBvblZpc2l0KSB7XHJcbiAgICBmdW5jdGlvbiB3YWxrKG5vZGUpIHtcclxuICAgICAgICBvblZpc2l0KG5vZGUpO1xyXG4gICAgfVxyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IG1pcnJvci5nZXRJZHMoKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgaWQgPSBfYVtfaV07XHJcbiAgICAgICAgaWYgKG1pcnJvci5oYXMoaWQpKSB7XHJcbiAgICAgICAgICAgIHdhbGsobWlycm9yLmdldE5vZGUoaWQpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gaGFuZGxlU2Nyb2xsKG5vZGUsIG1pcnJvcikge1xyXG4gICAgdmFyIG4gPSBtaXJyb3IuZ2V0TWV0YShub2RlKTtcclxuICAgIGlmICgobiA9PT0gbnVsbCB8fCBuID09PSB2b2lkIDAgPyB2b2lkIDAgOiBuLnR5cGUpICE9PSBOb2RlVHlwZS5FbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIGVsID0gbm9kZTtcclxuICAgIGZvciAodmFyIG5hbWVfMyBpbiBuLmF0dHJpYnV0ZXMpIHtcclxuICAgICAgICBpZiAoIShPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobi5hdHRyaWJ1dGVzLCBuYW1lXzMpICYmXHJcbiAgICAgICAgICAgIG5hbWVfMy5zdGFydHNXaXRoKCdycl8nKSkpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB2YWx1ZSA9IG4uYXR0cmlidXRlc1tuYW1lXzNdO1xyXG4gICAgICAgIGlmIChuYW1lXzMgPT09ICdycl9zY3JvbGxMZWZ0Jykge1xyXG4gICAgICAgICAgICBlbC5zY3JvbGxMZWZ0ID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuYW1lXzMgPT09ICdycl9zY3JvbGxUb3AnKSB7XHJcbiAgICAgICAgICAgIGVsLnNjcm9sbFRvcCA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiByZWJ1aWxkKG4sIG9wdGlvbnMpIHtcclxuICAgIHZhciBkb2MgPSBvcHRpb25zLmRvYywgb25WaXNpdCA9IG9wdGlvbnMub25WaXNpdCwgX2EgPSBvcHRpb25zLmhhY2tDc3MsIGhhY2tDc3MgPSBfYSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9hLCBhZnRlckFwcGVuZCA9IG9wdGlvbnMuYWZ0ZXJBcHBlbmQsIGNhY2hlID0gb3B0aW9ucy5jYWNoZSwgX2IgPSBvcHRpb25zLm1pcnJvciwgbWlycm9yID0gX2IgPT09IHZvaWQgMCA/IG5ldyBNaXJyb3IoKSA6IF9iO1xyXG4gICAgdmFyIG5vZGUgPSBidWlsZE5vZGVXaXRoU04obiwge1xyXG4gICAgICAgIGRvYzogZG9jLFxyXG4gICAgICAgIG1pcnJvcjogbWlycm9yLFxyXG4gICAgICAgIHNraXBDaGlsZDogZmFsc2UsXHJcbiAgICAgICAgaGFja0NzczogaGFja0NzcyxcclxuICAgICAgICBhZnRlckFwcGVuZDogYWZ0ZXJBcHBlbmQsXHJcbiAgICAgICAgY2FjaGU6IGNhY2hlXHJcbiAgICB9KTtcclxuICAgIHZpc2l0KG1pcnJvciwgZnVuY3Rpb24gKHZpc2l0ZWROb2RlKSB7XHJcbiAgICAgICAgaWYgKG9uVmlzaXQpIHtcclxuICAgICAgICAgICAgb25WaXNpdCh2aXNpdGVkTm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhhbmRsZVNjcm9sbCh2aXNpdGVkTm9kZSwgbWlycm9yKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbn1cblxuZXhwb3J0IHsgSUdOT1JFRF9OT0RFLCBNaXJyb3IsIE5vZGVUeXBlLCBhZGRIb3ZlckNsYXNzLCBidWlsZE5vZGVXaXRoU04sIGNsYXNzTWF0Y2hlc1JlZ2V4LCBjbGVhbnVwU25hcHNob3QsIGNyZWF0ZUNhY2hlLCBjcmVhdGVNaXJyb3IsIGdlbklkLCBnZXRDc3NSdWxlU3RyaW5nLCBnZXRDc3NSdWxlc1N0cmluZywgaXMyRENhbnZhc0JsYW5rLCBpc0NTU0ltcG9ydFJ1bGUsIGlzRWxlbWVudCwgaXNOYXRpdmVTaGFkb3dEb20sIGlzU2hhZG93Um9vdCwgbWFza0lucHV0VmFsdWUsIG5lZWRNYXNraW5nVGV4dCwgcmVidWlsZCwgc2VyaWFsaXplTm9kZVdpdGhJZCwgc25hcHNob3QsIHRyYW5zZm9ybUF0dHJpYnV0ZSwgdmlzaXRTbmFwc2hvdCB9O1xuIiwiLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJjeXByZXNzXCIgLz5cbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyBUaGlzIGV4YW1wbGUgY29tbWFuZHMudHMgc2hvd3MgeW91IGhvdyB0b1xuLy8gY3JlYXRlIHZhcmlvdXMgY3VzdG9tIGNvbW1hbmRzIGFuZCBvdmVyd3JpdGVcbi8vIGV4aXN0aW5nIGNvbW1hbmRzLlxuLy9cbi8vIEZvciBtb3JlIGNvbXByZWhlbnNpdmUgZXhhbXBsZXMgb2YgY3VzdG9tXG4vLyBjb21tYW5kcyBwbGVhc2UgcmVhZCBtb3JlIGhlcmU6XG4vLyBodHRwczovL29uLmN5cHJlc3MuaW8vY3VzdG9tLWNvbW1hbmRzXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy9cbi8vXG4vLyAtLSBUaGlzIGlzIGEgcGFyZW50IGNvbW1hbmQgLS1cbi8vIEN5cHJlc3MuQ29tbWFuZHMuYWRkKCdsb2dpbicsIChlbWFpbCwgcGFzc3dvcmQpID0+IHsgLi4uIH0pXG4vL1xuLy9cbi8vIC0tIFRoaXMgaXMgYSBjaGlsZCBjb21tYW5kIC0tXG4vLyBDeXByZXNzLkNvbW1hbmRzLmFkZCgnZHJhZycsIHsgcHJldlN1YmplY3Q6ICdlbGVtZW50J30sIChzdWJqZWN0LCBvcHRpb25zKSA9PiB7IC4uLiB9KVxuLy9cbi8vXG4vLyAtLSBUaGlzIGlzIGEgZHVhbCBjb21tYW5kIC0tXG4vLyBDeXByZXNzLkNvbW1hbmRzLmFkZCgnZGlzbWlzcycsIHsgcHJldlN1YmplY3Q6ICdvcHRpb25hbCd9LCAoc3ViamVjdCwgb3B0aW9ucykgPT4geyAuLi4gfSlcbi8vXG4vL1xuLy8gLS0gVGhpcyB3aWxsIG92ZXJ3cml0ZSBhbiBleGlzdGluZyBjb21tYW5kIC0tXG4vLyBDeXByZXNzLkNvbW1hbmRzLm92ZXJ3cml0ZSgndmlzaXQnLCAob3JpZ2luYWxGbiwgdXJsLCBvcHRpb25zKSA9PiB7IC4uLiB9KVxuLy9cbi8vIGRlY2xhcmUgZ2xvYmFsIHtcbi8vICAgbmFtZXNwYWNlIEN5cHJlc3Mge1xuLy8gICAgIGludGVyZmFjZSBDaGFpbmFibGUge1xuLy8gICAgICAgbG9naW4oZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IENoYWluYWJsZTx2b2lkPlxuLy8gICAgICAgZHJhZyhzdWJqZWN0OiBzdHJpbmcsIG9wdGlvbnM/OiBQYXJ0aWFsPFR5cGVPcHRpb25zPik6IENoYWluYWJsZTxFbGVtZW50PlxuLy8gICAgICAgZGlzbWlzcyhzdWJqZWN0OiBzdHJpbmcsIG9wdGlvbnM/OiBQYXJ0aWFsPFR5cGVPcHRpb25zPik6IENoYWluYWJsZTxFbGVtZW50PlxuLy8gICAgICAgdmlzaXQob3JpZ2luYWxGbjogQ29tbWFuZE9yaWdpbmFsRm4sIHVybDogc3RyaW5nLCBvcHRpb25zOiBQYXJ0aWFsPFZpc2l0T3B0aW9ucz4pOiBDaGFpbmFibGU8RWxlbWVudD5cbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gVGhpcyBleGFtcGxlIHN1cHBvcnQvZTJlLnRzIGlzIHByb2Nlc3NlZCBhbmRcbi8vIGxvYWRlZCBhdXRvbWF0aWNhbGx5IGJlZm9yZSB5b3VyIHRlc3QgZmlsZXMuXG4vL1xuLy8gVGhpcyBpcyBhIGdyZWF0IHBsYWNlIHRvIHB1dCBnbG9iYWwgY29uZmlndXJhdGlvbiBhbmRcbi8vIGJlaGF2aW9yIHRoYXQgbW9kaWZpZXMgQ3lwcmVzcy5cbi8vXG4vLyBZb3UgY2FuIGNoYW5nZSB0aGUgbG9jYXRpb24gb2YgdGhpcyBmaWxlIG9yIHR1cm4gb2ZmXG4vLyBhdXRvbWF0aWNhbGx5IHNlcnZpbmcgc3VwcG9ydCBmaWxlcyB3aXRoIHRoZVxuLy8gJ3N1cHBvcnRGaWxlJyBjb25maWd1cmF0aW9uIG9wdGlvbi5cbi8vXG4vLyBZb3UgY2FuIHJlYWQgbW9yZSBoZXJlOlxuLy8gaHR0cHM6Ly9vbi5jeXByZXNzLmlvL2NvbmZpZ3VyYXRpb25cbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbi8vIEltcG9ydCBjb21tYW5kcy5qcyB1c2luZyBFUzIwMTUgc3ludGF4OlxuaW1wb3J0IFwiLi9jb21tYW5kc1wiO1xuXG4vLyBBbHRlcm5hdGl2ZWx5IHlvdSBjYW4gdXNlIENvbW1vbkpTIHN5bnRheDpcbi8vIHJlcXVpcmUoJy4vY29tbWFuZHMnKVxuaW1wb3J0IFwiQGNocm9tYXVpL3Rlc3QtYXJjaGl2ZXIvY3lwcmVzcy9zdXBwb3J0XCI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=