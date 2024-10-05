import { d as defineComponent, l as computed, aU as h$1, h as ref, bM as onBeforeMount, bo as onUnmounted, b2 as commonjsGlobal$1, ak as getDefaultExportFromCjs$1, o as openBlock, i as createElementBlock, C as normalizeStyle, b as unref } from "./index-DnMqUly2.js";
const ICON_COLOR_PROP_NAMES = ["focusWithinFillColor", "focus-within-fill-color", "focusWithinStrokeColor", "focus-within-stroke-color", "focusWithinSecondaryFillColor", "focus-within-secondary-fill-color", "focusWithinSecondaryStrokeColor", "focus-within-secondary-stroke-color", "hoverFillColor", "hover-fill-color", "hoverStrokeColor", "hover-stroke-color", "hoverSecondaryFillColor", "hover-secondary-fill-color", "hoverSecondaryStrokeColor", "hover-secondary-stroke-color", "focusFillColor", "focus-fill-color", "focusStrokeColor", "focus-stroke-color", "focusSecondaryFillColor", "focus-secondary-fill-color", "focusSecondaryStrokeColor", "focus-secondary-stroke-color", "hocusFillColor", "hocus-fill-color", "hocusStrokeColor", "hocus-stroke-color", "hocusSecondaryFillColor", "hocus-secondary-fill-color", "hocusSecondaryStrokeColor", "hocus-secondary-stroke-color", "fillColor", "fill-color", "strokeColor", "stroke-color", "secondaryFillColor", "secondary-fill-color", "secondaryStrokeColor", "secondary-stroke-color"];
var iconsMetadata = {
  "action-add-large": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "action-add-medium": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "action-add-small": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "action-add-xsmall": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "action-add": {
    availableSizes: ["8"],
    hasStrokeColor: ["8"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "action-delete-circle": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "action-delete-large": {
    availableSizes: ["16", "24"],
    hasStrokeColor: ["16", "24"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "action-delete-medium": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "action-delete-small": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "action-delete-xlarge": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "action-delete-xsmall": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "action-delete": {
    availableSizes: ["12"],
    hasStrokeColor: ["12"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "action-disable-circle-solid": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "action-export": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "action-next": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: ["16"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "action-play-large": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: ["16"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "action-play-small": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: ["16"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "action-play-video": {
    availableSizes: ["16", "24"],
    hasStrokeColor: ["16", "24"],
    hasFillColor: ["16", "24"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "action-power": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "action-question-mark-circle": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: ["16"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "action-question-mark-default": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "action-question-mark-outline": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: ["16"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "action-record": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "action-refresh": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "action-restart": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "action-stop": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "action-test-replay": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "arrow-bottom-right": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "arrow-collapse": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "arrow-down": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "arrow-expand": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "arrow-left": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "arrow-outline-down": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: ["16"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "arrow-right-large": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "arrow-right": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "arrow-square-down": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "arrow-top-right": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "arrow-up": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "browser-chrome-beta": {
    availableSizes: ["16"],
    hasStrokeColor: false,
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: { "16": 11225 }
  },
  "browser-chrome-canary": {
    availableSizes: ["16"],
    hasStrokeColor: false,
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: { "16": 1085 }
  },
  "browser-chrome": {
    availableSizes: ["16"],
    hasStrokeColor: false,
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: { "16": 877 }
  },
  "browser-edge": {
    availableSizes: ["16"],
    hasStrokeColor: false,
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: { "16": 4810 }
  },
  "browser-electron-dark": {
    availableSizes: ["16"],
    hasStrokeColor: false,
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "browser-electron-light": {
    availableSizes: ["16"],
    hasStrokeColor: false,
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "browser-mozilla-firefox": {
    availableSizes: ["16"],
    hasStrokeColor: false,
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: { "16": 11186 }
  },
  "browser-safari": {
    availableSizes: ["16"],
    hasStrokeColor: false,
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: { "16": 18454 }
  },
  "browser-webkit": {
    availableSizes: ["16"],
    hasStrokeColor: false,
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: { "16": 4702 }
  },
  "checkmark-outline": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "checkmark-small": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "checkmark-solid": {
    availableSizes: ["16", "24"],
    hasStrokeColor: ["16", "24"],
    hasFillColor: ["16", "24"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "checkmark": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "chevron-down-double": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "chevron-down-large": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "chevron-down-medium": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "chevron-down-small": {
    availableSizes: ["8", "16"],
    hasStrokeColor: ["16", "8"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "chevron-left-double": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "chevron-left-large": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "chevron-left-small": {
    availableSizes: ["8", "16"],
    hasStrokeColor: ["16", "8"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "chevron-right-double": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "chevron-right-large": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "chevron-right-small": {
    availableSizes: ["8", "16"],
    hasStrokeColor: ["16", "8"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "chevron-up-double": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "chevron-up-large": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "chevron-up-small": {
    availableSizes: ["8", "16"],
    hasStrokeColor: ["16", "8"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "currency-eur": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "currency-gbp": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "currency-inr": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "currency-rub": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "currency-usd": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "device-laptop": {
    availableSizes: ["24"],
    hasStrokeColor: ["24"],
    hasFillColor: ["24"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "device-smartphone": {
    availableSizes: ["16", "24"],
    hasStrokeColor: ["16", "24"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "device-tv": {
    availableSizes: ["16", "24"],
    hasStrokeColor: ["16", "24"],
    hasFillColor: ["16", "24"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "document-added-square-plus": {
    availableSizes: ["16", "24"],
    hasStrokeColor: ["16", "24"],
    hasFillColor: ["16", "24"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "document-added": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: ["16"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "document-blank": {
    availableSizes: ["16", "24", "48"],
    hasStrokeColor: ["16", "24", "48"],
    hasFillColor: ["16", "24", "48"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "document-code": {
    availableSizes: ["24", "48"],
    hasStrokeColor: ["24", "48"],
    hasFillColor: ["24", "48"],
    hasSecondaryStrokeColor: ["48"],
    hasSecondaryFillColor: ["48"],
    defs: {}
  },
  "document-deleted": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: ["16"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "document-download": {
    availableSizes: ["16", "24"],
    hasStrokeColor: ["16", "24"],
    hasFillColor: ["16", "24"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "document-minus": {
    availableSizes: ["16", "24"],
    hasStrokeColor: ["16", "24"],
    hasFillColor: ["16", "24"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "document-modified-square-dot": {
    availableSizes: ["16", "24"],
    hasStrokeColor: ["16", "24"],
    hasFillColor: ["16", "24"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "document-modified": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: ["16"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "document-plus-minus": {
    availableSizes: ["16", "24"],
    hasStrokeColor: ["16", "24"],
    hasFillColor: ["16", "24"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "document-plus": {
    availableSizes: ["16", "24"],
    hasStrokeColor: ["16", "24"],
    hasFillColor: ["16", "24"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "document-script": {
    availableSizes: ["24"],
    hasStrokeColor: ["24"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "document-sheet": {
    availableSizes: ["24"],
    hasStrokeColor: ["24"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "document-star": {
    availableSizes: ["16", "24"],
    hasStrokeColor: ["16", "24"],
    hasFillColor: ["16", "24"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "document-text": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: ["16"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "dot-outline-large": {
    availableSizes: ["8"],
    hasStrokeColor: ["8"],
    hasFillColor: ["8"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "dot-outline-small": {
    availableSizes: ["8"],
    hasStrokeColor: ["8"],
    hasFillColor: ["8"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "file-changes-added": {
    availableSizes: ["24"],
    hasStrokeColor: false,
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "file-changes-error": {
    availableSizes: ["24"],
    hasStrokeColor: false,
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "file-changes-skipped": {
    availableSizes: ["24"],
    hasStrokeColor: false,
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "file-changes-warning": {
    availableSizes: ["24"],
    hasStrokeColor: false,
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "general-1X": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "general-chat-bubble": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: ["16"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "general-clipboard": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "general-command-key": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "general-crosshairs": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "general-earth": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: ["16"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "general-eye-closed": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "general-eye-open": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: ["16"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "general-globe": {
    availableSizes: ["16", "48"],
    hasStrokeColor: ["16", "48"],
    hasFillColor: ["16", "48"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "general-grid-2x2-medium": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: ["16"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "general-grid-2x2-small": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: ["16"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "general-grid-2x2": {
    availableSizes: ["16", "24"],
    hasStrokeColor: ["16", "24"],
    hasFillColor: ["16", "24"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "general-handle-vertical": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "general-life-ring": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: ["16"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "general-office-building": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: ["16"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "general-placeholder": {
    availableSizes: ["12", "16", "24", "48"],
    hasStrokeColor: ["12", "16", "24", "48"],
    hasFillColor: ["12", "16", "24", "48"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "general-rocket": {
    availableSizes: ["16", "24"],
    hasStrokeColor: ["16", "24"],
    hasFillColor: ["16", "24"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "loading": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: ["16"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "menu-dots-vertical": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "menu-expand-left": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "menu-expand-right": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "menu-hamburger": {
    availableSizes: ["24"],
    hasStrokeColor: ["24"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "number-1": {
    availableSizes: ["24"],
    hasStrokeColor: ["24"],
    hasFillColor: ["24"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "number-2": {
    availableSizes: ["24"],
    hasStrokeColor: ["24"],
    hasFillColor: ["24"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "number-3": {
    availableSizes: ["24"],
    hasStrokeColor: ["24"],
    hasFillColor: ["24"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "number-4": {
    availableSizes: ["24"],
    hasStrokeColor: ["24"],
    hasFillColor: ["24"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "number-5": {
    availableSizes: ["24"],
    hasStrokeColor: ["24"],
    hasFillColor: ["24"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "number-octothorpe": {
    availableSizes: ["24"],
    hasStrokeColor: ["24"],
    hasFillColor: ["24"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "object-book-code": {
    availableSizes: ["48"],
    hasStrokeColor: ["48"],
    hasFillColor: ["48"],
    hasSecondaryStrokeColor: ["48"],
    hasSecondaryFillColor: ["48"],
    defs: {}
  },
  "object-book": {
    availableSizes: ["16", "24", "48"],
    hasStrokeColor: ["16", "24", "48"],
    hasFillColor: ["16", "24", "48"],
    hasSecondaryStrokeColor: ["48"],
    hasSecondaryFillColor: ["48"],
    defs: {}
  },
  "object-bookmark": {
    availableSizes: ["16", "24"],
    hasStrokeColor: ["16", "24"],
    hasFillColor: ["16", "24"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "object-box-open": {
    availableSizes: ["48"],
    hasStrokeColor: ["48"],
    hasFillColor: ["48"],
    hasSecondaryStrokeColor: ["48"],
    hasSecondaryFillColor: ["48"],
    defs: {}
  },
  "object-box": {
    availableSizes: ["16", "24"],
    hasStrokeColor: ["16", "24"],
    hasFillColor: ["16", "24"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "object-briefcase": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: ["16"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "object-bug-large": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: ["16"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "object-bug-small": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: ["16"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "object-bug": {
    availableSizes: ["24"],
    hasStrokeColor: ["24"],
    hasFillColor: ["24"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "object-chain-link": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "object-folder-dark-small": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: ["16"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "object-folder-dark": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: ["16"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "object-folder-light": {
    availableSizes: ["16", "24"],
    hasStrokeColor: ["16", "24"],
    hasFillColor: ["16", "24"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "object-gear": {
    availableSizes: ["16", "24"],
    hasStrokeColor: ["16", "24"],
    hasFillColor: ["16", "24"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "object-graduation-cap": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: ["16"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "object-letter": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: ["16"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "object-magic-wand-dark-mode": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: ["16"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "object-magnifying-glass": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: ["16"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "object-odometer": {
    availableSizes: ["24"],
    hasStrokeColor: ["24"],
    hasFillColor: ["24"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "object-paper-airplane": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: ["16"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "object-pin-modern": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: ["16"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "object-ruler": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: ["16"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "object-sliders-round": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "object-tag": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: ["16"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "object-tassel": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: ["16"],
    hasSecondaryStrokeColor: ["16"],
    hasSecondaryFillColor: false,
    defs: {}
  },
  "os-apple": {
    availableSizes: ["16"],
    hasStrokeColor: false,
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: { "16": 981 }
  },
  "os-generic": {
    availableSizes: ["16"],
    hasStrokeColor: false,
    hasFillColor: ["16"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: { "16": 1597 }
  },
  "os-linux": {
    availableSizes: ["16"],
    hasStrokeColor: false,
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: { "16": 11726 }
  },
  "os-windows": {
    availableSizes: ["16"],
    hasStrokeColor: false,
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "security-key": {
    availableSizes: ["16", "24"],
    hasStrokeColor: ["16", "24"],
    hasFillColor: ["16", "24"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "security-lock-locked": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: ["16"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "security-shield-check": {
    availableSizes: ["16", "24"],
    hasStrokeColor: ["16", "24"],
    hasFillColor: ["16", "24"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "security-shield-cross": {
    availableSizes: ["16", "24"],
    hasStrokeColor: ["16", "24"],
    hasFillColor: ["16", "24"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "shape-heart": {
    availableSizes: ["16", "24"],
    hasStrokeColor: ["16", "24"],
    hasFillColor: ["16", "24"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "shape-lightning-bolt": {
    availableSizes: ["16", "24"],
    hasStrokeColor: ["16", "24"],
    hasFillColor: ["16", "24"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "shape-moon-crescent": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: ["16"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "shape-star": {
    availableSizes: ["16", "24"],
    hasStrokeColor: ["16", "24"],
    hasFillColor: ["16", "24"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "shape-sun-long": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: ["16"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "social-discord-solid": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "social-email": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "social-facebook-solid": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "social-github-solid": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "social-linkedin-solid": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "social-twitter-solid": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "social-youtube-solid": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "status-cancelled-outline": {
    availableSizes: ["16", "24"],
    hasStrokeColor: ["16", "24"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "status-cancelled-simple": {
    availableSizes: ["4", "8"],
    hasStrokeColor: ["4", "8"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "status-cancelled-solid": {
    availableSizes: ["12", "16", "24"],
    hasStrokeColor: ["12"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "status-errored-outline": {
    availableSizes: ["16", "24"],
    hasStrokeColor: ["16", "24"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "status-errored-simple": {
    availableSizes: ["4", "8"],
    hasStrokeColor: ["4", "8"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "status-errored-solid": {
    availableSizes: ["12", "16", "24"],
    hasStrokeColor: ["12", "16", "24"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "status-failed-outline": {
    availableSizes: ["16", "24"],
    hasStrokeColor: ["16", "24"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "status-failed-simple": {
    availableSizes: ["4", "8", "12", "16", "24"],
    hasStrokeColor: ["12", "16", "24", "4", "8"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "status-failed-solid": {
    availableSizes: ["16", "24"],
    hasStrokeColor: ["16", "24"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "status-failing-outline": {
    availableSizes: ["16", "24"],
    hasStrokeColor: ["16", "24"],
    hasFillColor: ["16", "24"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "status-flaky": {
    availableSizes: ["16", "24"],
    hasStrokeColor: ["16", "24"],
    hasFillColor: ["16", "24"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "status-passed-outline": {
    availableSizes: ["16", "24"],
    hasStrokeColor: ["16", "24"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "status-passed-simple": {
    availableSizes: ["4", "8", "12", "16", "24"],
    hasStrokeColor: ["12", "16", "24", "4", "8"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "status-passed-solid": {
    availableSizes: ["16", "24"],
    hasStrokeColor: ["16", "24"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "status-pending-outline": {
    availableSizes: ["12", "16", "24"],
    hasStrokeColor: ["12", "16", "24"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "status-pending-simple": {
    availableSizes: ["4", "8"],
    hasStrokeColor: ["4", "8"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "status-placeholder-simple": {
    availableSizes: ["4", "8"],
    hasStrokeColor: ["4", "8"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "status-placeholder-solid": {
    availableSizes: ["12", "16", "24"],
    hasStrokeColor: ["12", "16", "24"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "status-queued-outline": {
    availableSizes: ["12", "16", "24"],
    hasStrokeColor: ["12", "16", "24"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "status-queued-simple": {
    availableSizes: ["4", "8"],
    hasStrokeColor: ["4", "8"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "status-running-outline": {
    availableSizes: ["12", "16", "24"],
    hasStrokeColor: ["12", "16", "24"],
    hasFillColor: ["12", "16", "24"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "status-running-simple": {
    availableSizes: ["4", "8"],
    hasStrokeColor: ["4", "8"],
    hasFillColor: ["4", "8"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "status-skipped-outline": {
    availableSizes: ["12", "16", "24"],
    hasStrokeColor: ["12", "16", "24"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "status-skipped-simple": {
    availableSizes: ["4", "8"],
    hasStrokeColor: ["4", "8"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "technology-accessibility": {
    availableSizes: ["24"],
    hasStrokeColor: ["24"],
    hasFillColor: ["24"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "technology-branch-h-tall": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "technology-branch-h": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "technology-browser-dark": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: ["16"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "technology-browser-light": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: ["16"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "technology-browser-testing-2": {
    availableSizes: ["48"],
    hasStrokeColor: ["48"],
    hasFillColor: ["48"],
    hasSecondaryStrokeColor: ["48"],
    hasSecondaryFillColor: ["48"],
    defs: {}
  },
  "technology-code-editor": {
    availableSizes: ["16", "24"],
    hasStrokeColor: ["16", "24"],
    hasFillColor: ["16", "24"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "technology-command-line-error": {
    availableSizes: ["48"],
    hasStrokeColor: ["48"],
    hasFillColor: ["48"],
    hasSecondaryStrokeColor: ["48"],
    hasSecondaryFillColor: ["48"],
    defs: {}
  },
  "technology-command-line": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "technology-cypress": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "technology-dashboard-checkmark": {
    availableSizes: ["48"],
    hasStrokeColor: ["48"],
    hasFillColor: ["48"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "technology-dashboard-fail": {
    availableSizes: ["48"],
    hasStrokeColor: ["48"],
    hasFillColor: ["48"],
    hasSecondaryStrokeColor: ["48"],
    hasSecondaryFillColor: ["48"],
    defs: {}
  },
  "technology-dashboard-running": {
    availableSizes: ["48"],
    hasStrokeColor: ["48"],
    hasFillColor: ["48"],
    hasSecondaryStrokeColor: ["48"],
    hasSecondaryFillColor: ["48"],
    defs: {}
  },
  "technology-dollar": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "technology-drag-project": {
    availableSizes: ["48"],
    hasStrokeColor: ["48"],
    hasFillColor: ["48"],
    hasSecondaryStrokeColor: ["48"],
    hasSecondaryFillColor: false,
    defs: {}
  },
  "technology-element-selector": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "technology-image-screenshot": {
    availableSizes: ["16", "24"],
    hasStrokeColor: ["16", "24"],
    hasFillColor: ["16", "24"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "technology-infinity-loop": {
    availableSizes: ["16", "20", "24"],
    hasStrokeColor: ["16", "20", "24"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "technology-locked-project": {
    availableSizes: ["48"],
    hasStrokeColor: ["48"],
    hasFillColor: ["48"],
    hasSecondaryStrokeColor: ["48"],
    hasSecondaryFillColor: ["48"],
    defs: {}
  },
  "technology-octothorpe": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "technology-pull-request": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: ["16"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "technology-server": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: ["16"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "technology-terminal-log": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: ["16"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "technology-terminal": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "technology-test-results": {
    availableSizes: ["16", "24"],
    hasStrokeColor: ["16", "24"],
    hasFillColor: ["24"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "technology-ui-coverage": {
    availableSizes: ["24"],
    hasStrokeColor: ["24"],
    hasFillColor: ["24"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "testing-type-component-solid": {
    availableSizes: ["24", "64"],
    hasStrokeColor: ["24", "64"],
    hasFillColor: ["24", "64"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "testing-type-component": {
    availableSizes: ["16", "24", "64"],
    hasStrokeColor: ["16", "24", "64"],
    hasFillColor: ["24", "64"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "testing-type-e2e-solid": {
    availableSizes: ["24", "64"],
    hasStrokeColor: ["24", "64"],
    hasFillColor: ["24", "64"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "testing-type-e2e": {
    availableSizes: ["16", "24", "64"],
    hasStrokeColor: ["16", "24", "64"],
    hasFillColor: ["16", "24", "64"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "time-calendar-day": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: ["16"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "time-clock": {
    availableSizes: ["16", "24"],
    hasStrokeColor: ["16", "24"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "time-stopwatch": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: ["16"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "user-general-outline": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: ["16"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "user-general-solid": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: ["16"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "view-list": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "view-pie-chart": {
    availableSizes: ["16", "24"],
    hasStrokeColor: ["16", "24"],
    hasFillColor: ["16", "24"],
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "view-tree-alt": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "warning-circle": {
    availableSizes: ["16"],
    hasStrokeColor: ["16"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  },
  "warning": {
    availableSizes: ["8"],
    hasStrokeColor: ["8"],
    hasFillColor: false,
    hasSecondaryStrokeColor: false,
    hasSecondaryFillColor: false,
    defs: {}
  }
};
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p = Object.getOwnPropertySymbols(s); i2 < p.length; i2++) {
      if (e.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i2]))
        t[p[i2]] = s[p[i2]];
    }
  return t;
}
typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var lodash = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
lodash.exports;
(function(module, exports) {
  (function() {
    var undefined$1;
    var VERSION = "4.17.21";
    var LARGE_ARRAY_SIZE = 200;
    var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var MAX_MEMOIZE_SIZE = 500;
    var PLACEHOLDER = "__lodash_placeholder__";
    var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
    var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
    var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
    var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
    var HOT_COUNT = 800, HOT_SPAN = 16;
    var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
    var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
    var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
    var wrapFlags = [
      ["ary", WRAP_ARY_FLAG],
      ["bind", WRAP_BIND_FLAG],
      ["bindKey", WRAP_BIND_KEY_FLAG],
      ["curry", WRAP_CURRY_FLAG],
      ["curryRight", WRAP_CURRY_RIGHT_FLAG],
      ["flip", WRAP_FLIP_FLAG],
      ["partial", WRAP_PARTIAL_FLAG],
      ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
      ["rearg", WRAP_REARG_FLAG]
    ];
    var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
    var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
    var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
    var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
    var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
    var reTrimStart = /^\s+/;
    var reWhitespace = /\s/;
    var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
    var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
    var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
    var reEscapeChar = /\\(\\)?/g;
    var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
    var reFlags = /\w*$/;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var reIsOctal = /^0o[0-7]+$/i;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
    var reNoMatch = /($^)/;
    var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
    var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
    var rsApos = "['’]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
    var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
    var reApos = RegExp(rsApos, "g");
    var reComboMark = RegExp(rsCombo, "g");
    var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
    var reUnicodeWord = RegExp([
      rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
      rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
      rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
      rsUpper + "+" + rsOptContrUpper,
      rsOrdUpper,
      rsOrdLower,
      rsDigits,
      rsEmoji
    ].join("|"), "g");
    var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
    var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
    var contextProps = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ];
    var templateCounter = -1;
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
    var deburredLetters = {
      // Latin-1 Supplement block.
      "À": "A",
      "Á": "A",
      "Â": "A",
      "Ã": "A",
      "Ä": "A",
      "Å": "A",
      "à": "a",
      "á": "a",
      "â": "a",
      "ã": "a",
      "ä": "a",
      "å": "a",
      "Ç": "C",
      "ç": "c",
      "Ð": "D",
      "ð": "d",
      "È": "E",
      "É": "E",
      "Ê": "E",
      "Ë": "E",
      "è": "e",
      "é": "e",
      "ê": "e",
      "ë": "e",
      "Ì": "I",
      "Í": "I",
      "Î": "I",
      "Ï": "I",
      "ì": "i",
      "í": "i",
      "î": "i",
      "ï": "i",
      "Ñ": "N",
      "ñ": "n",
      "Ò": "O",
      "Ó": "O",
      "Ô": "O",
      "Õ": "O",
      "Ö": "O",
      "Ø": "O",
      "ò": "o",
      "ó": "o",
      "ô": "o",
      "õ": "o",
      "ö": "o",
      "ø": "o",
      "Ù": "U",
      "Ú": "U",
      "Û": "U",
      "Ü": "U",
      "ù": "u",
      "ú": "u",
      "û": "u",
      "ü": "u",
      "Ý": "Y",
      "ý": "y",
      "ÿ": "y",
      "Æ": "Ae",
      "æ": "ae",
      "Þ": "Th",
      "þ": "th",
      "ß": "ss",
      // Latin Extended-A block.
      "Ā": "A",
      "Ă": "A",
      "Ą": "A",
      "ā": "a",
      "ă": "a",
      "ą": "a",
      "Ć": "C",
      "Ĉ": "C",
      "Ċ": "C",
      "Č": "C",
      "ć": "c",
      "ĉ": "c",
      "ċ": "c",
      "č": "c",
      "Ď": "D",
      "Đ": "D",
      "ď": "d",
      "đ": "d",
      "Ē": "E",
      "Ĕ": "E",
      "Ė": "E",
      "Ę": "E",
      "Ě": "E",
      "ē": "e",
      "ĕ": "e",
      "ė": "e",
      "ę": "e",
      "ě": "e",
      "Ĝ": "G",
      "Ğ": "G",
      "Ġ": "G",
      "Ģ": "G",
      "ĝ": "g",
      "ğ": "g",
      "ġ": "g",
      "ģ": "g",
      "Ĥ": "H",
      "Ħ": "H",
      "ĥ": "h",
      "ħ": "h",
      "Ĩ": "I",
      "Ī": "I",
      "Ĭ": "I",
      "Į": "I",
      "İ": "I",
      "ĩ": "i",
      "ī": "i",
      "ĭ": "i",
      "į": "i",
      "ı": "i",
      "Ĵ": "J",
      "ĵ": "j",
      "Ķ": "K",
      "ķ": "k",
      "ĸ": "k",
      "Ĺ": "L",
      "Ļ": "L",
      "Ľ": "L",
      "Ŀ": "L",
      "Ł": "L",
      "ĺ": "l",
      "ļ": "l",
      "ľ": "l",
      "ŀ": "l",
      "ł": "l",
      "Ń": "N",
      "Ņ": "N",
      "Ň": "N",
      "Ŋ": "N",
      "ń": "n",
      "ņ": "n",
      "ň": "n",
      "ŋ": "n",
      "Ō": "O",
      "Ŏ": "O",
      "Ő": "O",
      "ō": "o",
      "ŏ": "o",
      "ő": "o",
      "Ŕ": "R",
      "Ŗ": "R",
      "Ř": "R",
      "ŕ": "r",
      "ŗ": "r",
      "ř": "r",
      "Ś": "S",
      "Ŝ": "S",
      "Ş": "S",
      "Š": "S",
      "ś": "s",
      "ŝ": "s",
      "ş": "s",
      "š": "s",
      "Ţ": "T",
      "Ť": "T",
      "Ŧ": "T",
      "ţ": "t",
      "ť": "t",
      "ŧ": "t",
      "Ũ": "U",
      "Ū": "U",
      "Ŭ": "U",
      "Ů": "U",
      "Ű": "U",
      "Ų": "U",
      "ũ": "u",
      "ū": "u",
      "ŭ": "u",
      "ů": "u",
      "ű": "u",
      "ų": "u",
      "Ŵ": "W",
      "ŵ": "w",
      "Ŷ": "Y",
      "ŷ": "y",
      "Ÿ": "Y",
      "Ź": "Z",
      "Ż": "Z",
      "Ž": "Z",
      "ź": "z",
      "ż": "z",
      "ž": "z",
      "Ĳ": "IJ",
      "ĳ": "ij",
      "Œ": "Oe",
      "œ": "oe",
      "ŉ": "'n",
      "ſ": "s"
    };
    var htmlEscapes = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    var htmlUnescapes = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    };
    var stringEscapes = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    };
    var freeParseFloat = parseFloat, freeParseInt = parseInt;
    var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var freeExports = exports && !exports.nodeType && exports;
    var freeModule = freeExports && true && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    function apply(func, thisArg, args) {
      switch (args.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    function arrayAggregator(array, setter, iteratee, accumulator) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        var value = array[index];
        setter(accumulator, value, iteratee(value), array);
      }
      return accumulator;
    }
    function arrayEach(array, iteratee) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
          break;
        }
      }
      return array;
    }
    function arrayEachRight(array, iteratee) {
      var length = array == null ? 0 : array.length;
      while (length--) {
        if (iteratee(array[length], length, array) === false) {
          break;
        }
      }
      return array;
    }
    function arrayEvery(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (!predicate(array[index], index, array)) {
          return false;
        }
      }
      return true;
    }
    function arrayFilter(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    function arrayIncludes(array, value) {
      var length = array == null ? 0 : array.length;
      return !!length && baseIndexOf(array, value, 0) > -1;
    }
    function arrayIncludesWith(array, value, comparator) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (comparator(value, array[index])) {
          return true;
        }
      }
      return false;
    }
    function arrayMap(array, iteratee) {
      var index = -1, length = array == null ? 0 : array.length, result = Array(length);
      while (++index < length) {
        result[index] = iteratee(array[index], index, array);
      }
      return result;
    }
    function arrayPush(array, values) {
      var index = -1, length = values.length, offset = array.length;
      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
    }
    function arrayReduce(array, iteratee, accumulator, initAccum) {
      var index = -1, length = array == null ? 0 : array.length;
      if (initAccum && length) {
        accumulator = array[++index];
      }
      while (++index < length) {
        accumulator = iteratee(accumulator, array[index], index, array);
      }
      return accumulator;
    }
    function arrayReduceRight(array, iteratee, accumulator, initAccum) {
      var length = array == null ? 0 : array.length;
      if (initAccum && length) {
        accumulator = array[--length];
      }
      while (length--) {
        accumulator = iteratee(accumulator, array[length], length, array);
      }
      return accumulator;
    }
    function arraySome(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }
      return false;
    }
    var asciiSize = baseProperty("length");
    function asciiToArray(string) {
      return string.split("");
    }
    function asciiWords(string) {
      return string.match(reAsciiWord) || [];
    }
    function baseFindKey(collection, predicate, eachFunc) {
      var result;
      eachFunc(collection, function(value, key, collection2) {
        if (predicate(value, key, collection2)) {
          result = key;
          return false;
        }
      });
      return result;
    }
    function baseFindIndex(array, predicate, fromIndex, fromRight) {
      var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
      while (fromRight ? index-- : ++index < length) {
        if (predicate(array[index], index, array)) {
          return index;
        }
      }
      return -1;
    }
    function baseIndexOf(array, value, fromIndex) {
      return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
    }
    function baseIndexOfWith(array, value, fromIndex, comparator) {
      var index = fromIndex - 1, length = array.length;
      while (++index < length) {
        if (comparator(array[index], value)) {
          return index;
        }
      }
      return -1;
    }
    function baseIsNaN(value) {
      return value !== value;
    }
    function baseMean(array, iteratee) {
      var length = array == null ? 0 : array.length;
      return length ? baseSum(array, iteratee) / length : NAN;
    }
    function baseProperty(key) {
      return function(object) {
        return object == null ? undefined$1 : object[key];
      };
    }
    function basePropertyOf(object) {
      return function(key) {
        return object == null ? undefined$1 : object[key];
      };
    }
    function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
      eachFunc(collection, function(value, index, collection2) {
        accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
      });
      return accumulator;
    }
    function baseSortBy(array, comparer) {
      var length = array.length;
      array.sort(comparer);
      while (length--) {
        array[length] = array[length].value;
      }
      return array;
    }
    function baseSum(array, iteratee) {
      var result, index = -1, length = array.length;
      while (++index < length) {
        var current = iteratee(array[index]);
        if (current !== undefined$1) {
          result = result === undefined$1 ? current : result + current;
        }
      }
      return result;
    }
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    function baseToPairs(object, props) {
      return arrayMap(props, function(key) {
        return [key, object[key]];
      });
    }
    function baseTrim(string) {
      return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
    }
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    function baseValues(object, props) {
      return arrayMap(props, function(key) {
        return object[key];
      });
    }
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    function charsStartIndex(strSymbols, chrSymbols) {
      var index = -1, length = strSymbols.length;
      while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
      }
      return index;
    }
    function charsEndIndex(strSymbols, chrSymbols) {
      var index = strSymbols.length;
      while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
      }
      return index;
    }
    function countHolders(array, placeholder) {
      var length = array.length, result = 0;
      while (length--) {
        if (array[length] === placeholder) {
          ++result;
        }
      }
      return result;
    }
    var deburrLetter = basePropertyOf(deburredLetters);
    var escapeHtmlChar = basePropertyOf(htmlEscapes);
    function escapeStringChar(chr) {
      return "\\" + stringEscapes[chr];
    }
    function getValue(object, key) {
      return object == null ? undefined$1 : object[key];
    }
    function hasUnicode(string) {
      return reHasUnicode.test(string);
    }
    function hasUnicodeWord(string) {
      return reHasUnicodeWord.test(string);
    }
    function iteratorToArray(iterator) {
      var data, result = [];
      while (!(data = iterator.next()).done) {
        result.push(data.value);
      }
      return result;
    }
    function mapToArray(map) {
      var index = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    function replaceHolders(array, placeholder) {
      var index = -1, length = array.length, resIndex = 0, result = [];
      while (++index < length) {
        var value = array[index];
        if (value === placeholder || value === PLACEHOLDER) {
          array[index] = PLACEHOLDER;
          result[resIndex++] = index;
        }
      }
      return result;
    }
    function setToArray(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    function setToPairs(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = [value, value];
      });
      return result;
    }
    function strictIndexOf(array, value, fromIndex) {
      var index = fromIndex - 1, length = array.length;
      while (++index < length) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }
    function strictLastIndexOf(array, value, fromIndex) {
      var index = fromIndex + 1;
      while (index--) {
        if (array[index] === value) {
          return index;
        }
      }
      return index;
    }
    function stringSize(string) {
      return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
    }
    function stringToArray(string) {
      return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
    }
    function trimmedEndIndex(string) {
      var index = string.length;
      while (index-- && reWhitespace.test(string.charAt(index))) {
      }
      return index;
    }
    var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
    function unicodeSize(string) {
      var result = reUnicode.lastIndex = 0;
      while (reUnicode.test(string)) {
        ++result;
      }
      return result;
    }
    function unicodeToArray(string) {
      return string.match(reUnicode) || [];
    }
    function unicodeWords(string) {
      return string.match(reUnicodeWord) || [];
    }
    var runInContext = function runInContext2(context) {
      context = context == null ? root : _2.defaults(root.Object(), context, _2.pick(root, contextProps));
      var Array2 = context.Array, Date2 = context.Date, Error2 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String2 = context.String, TypeError = context.TypeError;
      var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
      var coreJsData = context["__core-js_shared__"];
      var funcToString = funcProto.toString;
      var hasOwnProperty2 = objectProto.hasOwnProperty;
      var idCounter = 0;
      var maskSrcKey = function() {
        var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      }();
      var nativeObjectToString = objectProto.toString;
      var objectCtorString = funcToString.call(Object2);
      var oldDash = root._;
      var reIsNative = RegExp2(
        "^" + funcToString.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      );
      var Buffer = moduleExports ? context.Buffer : undefined$1, Symbol = context.Symbol, Uint8Array = context.Uint8Array, allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined$1, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined$1, symIterator = Symbol ? Symbol.iterator : undefined$1, symToStringTag = Symbol ? Symbol.toStringTag : undefined$1;
      var defineProperty = function() {
        try {
          var func = getNative(Object2, "defineProperty");
          func({}, "", {});
          return func;
        } catch (e) {
        }
      }();
      var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date2 && Date2.now !== root.Date.now && Date2.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
      var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined$1, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math2.max, nativeMin = Math2.min, nativeNow = Date2.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto.reverse;
      var DataView = getNative(context, "DataView"), Map = getNative(context, "Map"), Promise2 = getNative(context, "Promise"), Set2 = getNative(context, "Set"), WeakMap = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
      var metaMap = WeakMap && new WeakMap();
      var realNames = {};
      var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap);
      var symbolProto = Symbol ? Symbol.prototype : undefined$1, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined$1, symbolToString = symbolProto ? symbolProto.toString : undefined$1;
      function lodash2(value) {
        if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
          if (value instanceof LodashWrapper) {
            return value;
          }
          if (hasOwnProperty2.call(value, "__wrapped__")) {
            return wrapperClone(value);
          }
        }
        return new LodashWrapper(value);
      }
      var baseCreate = /* @__PURE__ */ function() {
        function object() {
        }
        return function(proto2) {
          if (!isObject(proto2)) {
            return {};
          }
          if (objectCreate) {
            return objectCreate(proto2);
          }
          object.prototype = proto2;
          var result2 = new object();
          object.prototype = undefined$1;
          return result2;
        };
      }();
      function baseLodash() {
      }
      function LodashWrapper(value, chainAll) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__chain__ = !!chainAll;
        this.__index__ = 0;
        this.__values__ = undefined$1;
      }
      lodash2.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        "escape": reEscape,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        "evaluate": reEvaluate,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        "interpolate": reInterpolate,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        "variable": "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        "imports": {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          "_": lodash2
        }
      };
      lodash2.prototype = baseLodash.prototype;
      lodash2.prototype.constructor = lodash2;
      LodashWrapper.prototype = baseCreate(baseLodash.prototype);
      LodashWrapper.prototype.constructor = LodashWrapper;
      function LazyWrapper(value) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__dir__ = 1;
        this.__filtered__ = false;
        this.__iteratees__ = [];
        this.__takeCount__ = MAX_ARRAY_LENGTH;
        this.__views__ = [];
      }
      function lazyClone() {
        var result2 = new LazyWrapper(this.__wrapped__);
        result2.__actions__ = copyArray(this.__actions__);
        result2.__dir__ = this.__dir__;
        result2.__filtered__ = this.__filtered__;
        result2.__iteratees__ = copyArray(this.__iteratees__);
        result2.__takeCount__ = this.__takeCount__;
        result2.__views__ = copyArray(this.__views__);
        return result2;
      }
      function lazyReverse() {
        if (this.__filtered__) {
          var result2 = new LazyWrapper(this);
          result2.__dir__ = -1;
          result2.__filtered__ = true;
        } else {
          result2 = this.clone();
          result2.__dir__ *= -1;
        }
        return result2;
      }
      function lazyValue() {
        var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
        if (!isArr || !isRight && arrLength == length && takeCount == length) {
          return baseWrapperValue(array, this.__actions__);
        }
        var result2 = [];
        outer:
          while (length-- && resIndex < takeCount) {
            index += dir;
            var iterIndex = -1, value = array[index];
            while (++iterIndex < iterLength) {
              var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed2 = iteratee2(value);
              if (type == LAZY_MAP_FLAG) {
                value = computed2;
              } else if (!computed2) {
                if (type == LAZY_FILTER_FLAG) {
                  continue outer;
                } else {
                  break outer;
                }
              }
            }
            result2[resIndex++] = value;
          }
        return result2;
      }
      LazyWrapper.prototype = baseCreate(baseLodash.prototype);
      LazyWrapper.prototype.constructor = LazyWrapper;
      function Hash(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
        this.size = 0;
      }
      function hashDelete(key) {
        var result2 = this.has(key) && delete this.__data__[key];
        this.size -= result2 ? 1 : 0;
        return result2;
      }
      function hashGet(key) {
        var data = this.__data__;
        if (nativeCreate) {
          var result2 = data[key];
          return result2 === HASH_UNDEFINED ? undefined$1 : result2;
        }
        return hasOwnProperty2.call(data, key) ? data[key] : undefined$1;
      }
      function hashHas(key) {
        var data = this.__data__;
        return nativeCreate ? data[key] !== undefined$1 : hasOwnProperty2.call(data, key);
      }
      function hashSet(key, value) {
        var data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = nativeCreate && value === undefined$1 ? HASH_UNDEFINED : value;
        return this;
      }
      Hash.prototype.clear = hashClear;
      Hash.prototype["delete"] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      function ListCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
      }
      function listCacheDelete(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index == lastIndex) {
          data.pop();
        } else {
          splice.call(data, index, 1);
        }
        --this.size;
        return true;
      }
      function listCacheGet(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        return index < 0 ? undefined$1 : data[index][1];
      }
      function listCacheHas(key) {
        return assocIndexOf(this.__data__, key) > -1;
      }
      function listCacheSet(key, value) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          ++this.size;
          data.push([key, value]);
        } else {
          data[index][1] = value;
        }
        return this;
      }
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype["delete"] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      function MapCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
          "hash": new Hash(),
          "map": new (Map || ListCache)(),
          "string": new Hash()
        };
      }
      function mapCacheDelete(key) {
        var result2 = getMapData(this, key)["delete"](key);
        this.size -= result2 ? 1 : 0;
        return result2;
      }
      function mapCacheGet(key) {
        return getMapData(this, key).get(key);
      }
      function mapCacheHas(key) {
        return getMapData(this, key).has(key);
      }
      function mapCacheSet(key, value) {
        var data = getMapData(this, key), size2 = data.size;
        data.set(key, value);
        this.size += data.size == size2 ? 0 : 1;
        return this;
      }
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype["delete"] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      function SetCache(values2) {
        var index = -1, length = values2 == null ? 0 : values2.length;
        this.__data__ = new MapCache();
        while (++index < length) {
          this.add(values2[index]);
        }
      }
      function setCacheAdd(value) {
        this.__data__.set(value, HASH_UNDEFINED);
        return this;
      }
      function setCacheHas(value) {
        return this.__data__.has(value);
      }
      SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
      SetCache.prototype.has = setCacheHas;
      function Stack(entries) {
        var data = this.__data__ = new ListCache(entries);
        this.size = data.size;
      }
      function stackClear() {
        this.__data__ = new ListCache();
        this.size = 0;
      }
      function stackDelete(key) {
        var data = this.__data__, result2 = data["delete"](key);
        this.size = data.size;
        return result2;
      }
      function stackGet(key) {
        return this.__data__.get(key);
      }
      function stackHas(key) {
        return this.__data__.has(key);
      }
      function stackSet(key, value) {
        var data = this.__data__;
        if (data instanceof ListCache) {
          var pairs = data.__data__;
          if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([key, value]);
            this.size = ++data.size;
            return this;
          }
          data = this.__data__ = new MapCache(pairs);
        }
        data.set(key, value);
        this.size = data.size;
        return this;
      }
      Stack.prototype.clear = stackClear;
      Stack.prototype["delete"] = stackDelete;
      Stack.prototype.get = stackGet;
      Stack.prototype.has = stackHas;
      Stack.prototype.set = stackSet;
      function arrayLikeKeys(value, inherited) {
        var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String2) : [], length = result2.length;
        for (var key in value) {
          if ((inherited || hasOwnProperty2.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
          (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
          isIndex(key, length)))) {
            result2.push(key);
          }
        }
        return result2;
      }
      function arraySample(array) {
        var length = array.length;
        return length ? array[baseRandom(0, length - 1)] : undefined$1;
      }
      function arraySampleSize(array, n) {
        return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
      }
      function arrayShuffle(array) {
        return shuffleSelf(copyArray(array));
      }
      function assignMergeValue(object, key, value) {
        if (value !== undefined$1 && !eq(object[key], value) || value === undefined$1 && !(key in object)) {
          baseAssignValue(object, key, value);
        }
      }
      function assignValue(object, key, value) {
        var objValue = object[key];
        if (!(hasOwnProperty2.call(object, key) && eq(objValue, value)) || value === undefined$1 && !(key in object)) {
          baseAssignValue(object, key, value);
        }
      }
      function assocIndexOf(array, key) {
        var length = array.length;
        while (length--) {
          if (eq(array[length][0], key)) {
            return length;
          }
        }
        return -1;
      }
      function baseAggregator(collection, setter, iteratee2, accumulator) {
        baseEach(collection, function(value, key, collection2) {
          setter(accumulator, value, iteratee2(value), collection2);
        });
        return accumulator;
      }
      function baseAssign(object, source) {
        return object && copyObject(source, keys(source), object);
      }
      function baseAssignIn(object, source) {
        return object && copyObject(source, keysIn(source), object);
      }
      function baseAssignValue(object, key, value) {
        if (key == "__proto__" && defineProperty) {
          defineProperty(object, key, {
            "configurable": true,
            "enumerable": true,
            "value": value,
            "writable": true
          });
        } else {
          object[key] = value;
        }
      }
      function baseAt(object, paths) {
        var index = -1, length = paths.length, result2 = Array2(length), skip = object == null;
        while (++index < length) {
          result2[index] = skip ? undefined$1 : get(object, paths[index]);
        }
        return result2;
      }
      function baseClamp(number, lower, upper) {
        if (number === number) {
          if (upper !== undefined$1) {
            number = number <= upper ? number : upper;
          }
          if (lower !== undefined$1) {
            number = number >= lower ? number : lower;
          }
        }
        return number;
      }
      function baseClone(value, bitmask, customizer, key, object, stack) {
        var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
        if (customizer) {
          result2 = object ? customizer(value, key, object, stack) : customizer(value);
        }
        if (result2 !== undefined$1) {
          return result2;
        }
        if (!isObject(value)) {
          return value;
        }
        var isArr = isArray(value);
        if (isArr) {
          result2 = initCloneArray(value);
          if (!isDeep) {
            return copyArray(value, result2);
          }
        } else {
          var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
          if (isBuffer(value)) {
            return cloneBuffer(value, isDeep);
          }
          if (tag == objectTag || tag == argsTag || isFunc && !object) {
            result2 = isFlat || isFunc ? {} : initCloneObject(value);
            if (!isDeep) {
              return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
            }
          } else {
            if (!cloneableTags[tag]) {
              return object ? value : {};
            }
            result2 = initCloneByTag(value, tag, isDeep);
          }
        }
        stack || (stack = new Stack());
        var stacked = stack.get(value);
        if (stacked) {
          return stacked;
        }
        stack.set(value, result2);
        if (isSet(value)) {
          value.forEach(function(subValue) {
            result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
          });
        } else if (isMap(value)) {
          value.forEach(function(subValue, key2) {
            result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
          });
        }
        var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
        var props = isArr ? undefined$1 : keysFunc(value);
        arrayEach(props || value, function(subValue, key2) {
          if (props) {
            key2 = subValue;
            subValue = value[key2];
          }
          assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
        });
        return result2;
      }
      function baseConforms(source) {
        var props = keys(source);
        return function(object) {
          return baseConformsTo(object, source, props);
        };
      }
      function baseConformsTo(object, source, props) {
        var length = props.length;
        if (object == null) {
          return !length;
        }
        object = Object2(object);
        while (length--) {
          var key = props[length], predicate = source[key], value = object[key];
          if (value === undefined$1 && !(key in object) || !predicate(value)) {
            return false;
          }
        }
        return true;
      }
      function baseDelay(func, wait, args) {
        if (typeof func != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        return setTimeout(function() {
          func.apply(undefined$1, args);
        }, wait);
      }
      function baseDifference(array, values2, iteratee2, comparator) {
        var index = -1, includes2 = arrayIncludes, isCommon = true, length = array.length, result2 = [], valuesLength = values2.length;
        if (!length) {
          return result2;
        }
        if (iteratee2) {
          values2 = arrayMap(values2, baseUnary(iteratee2));
        }
        if (comparator) {
          includes2 = arrayIncludesWith;
          isCommon = false;
        } else if (values2.length >= LARGE_ARRAY_SIZE) {
          includes2 = cacheHas;
          isCommon = false;
          values2 = new SetCache(values2);
        }
        outer:
          while (++index < length) {
            var value = array[index], computed2 = iteratee2 == null ? value : iteratee2(value);
            value = comparator || value !== 0 ? value : 0;
            if (isCommon && computed2 === computed2) {
              var valuesIndex = valuesLength;
              while (valuesIndex--) {
                if (values2[valuesIndex] === computed2) {
                  continue outer;
                }
              }
              result2.push(value);
            } else if (!includes2(values2, computed2, comparator)) {
              result2.push(value);
            }
          }
        return result2;
      }
      var baseEach = createBaseEach(baseForOwn);
      var baseEachRight = createBaseEach(baseForOwnRight, true);
      function baseEvery(collection, predicate) {
        var result2 = true;
        baseEach(collection, function(value, index, collection2) {
          result2 = !!predicate(value, index, collection2);
          return result2;
        });
        return result2;
      }
      function baseExtremum(array, iteratee2, comparator) {
        var index = -1, length = array.length;
        while (++index < length) {
          var value = array[index], current = iteratee2(value);
          if (current != null && (computed2 === undefined$1 ? current === current && !isSymbol(current) : comparator(current, computed2))) {
            var computed2 = current, result2 = value;
          }
        }
        return result2;
      }
      function baseFill(array, value, start, end) {
        var length = array.length;
        start = toInteger(start);
        if (start < 0) {
          start = -start > length ? 0 : length + start;
        }
        end = end === undefined$1 || end > length ? length : toInteger(end);
        if (end < 0) {
          end += length;
        }
        end = start > end ? 0 : toLength(end);
        while (start < end) {
          array[start++] = value;
        }
        return array;
      }
      function baseFilter(collection, predicate) {
        var result2 = [];
        baseEach(collection, function(value, index, collection2) {
          if (predicate(value, index, collection2)) {
            result2.push(value);
          }
        });
        return result2;
      }
      function baseFlatten(array, depth, predicate, isStrict, result2) {
        var index = -1, length = array.length;
        predicate || (predicate = isFlattenable);
        result2 || (result2 = []);
        while (++index < length) {
          var value = array[index];
          if (depth > 0 && predicate(value)) {
            if (depth > 1) {
              baseFlatten(value, depth - 1, predicate, isStrict, result2);
            } else {
              arrayPush(result2, value);
            }
          } else if (!isStrict) {
            result2[result2.length] = value;
          }
        }
        return result2;
      }
      var baseFor = createBaseFor();
      var baseForRight = createBaseFor(true);
      function baseForOwn(object, iteratee2) {
        return object && baseFor(object, iteratee2, keys);
      }
      function baseForOwnRight(object, iteratee2) {
        return object && baseForRight(object, iteratee2, keys);
      }
      function baseFunctions(object, props) {
        return arrayFilter(props, function(key) {
          return isFunction(object[key]);
        });
      }
      function baseGet(object, path) {
        path = castPath(path, object);
        var index = 0, length = path.length;
        while (object != null && index < length) {
          object = object[toKey(path[index++])];
        }
        return index && index == length ? object : undefined$1;
      }
      function baseGetAllKeys(object, keysFunc, symbolsFunc) {
        var result2 = keysFunc(object);
        return isArray(object) ? result2 : arrayPush(result2, symbolsFunc(object));
      }
      function baseGetTag(value) {
        if (value == null) {
          return value === undefined$1 ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object2(value) ? getRawTag(value) : objectToString(value);
      }
      function baseGt(value, other) {
        return value > other;
      }
      function baseHas(object, key) {
        return object != null && hasOwnProperty2.call(object, key);
      }
      function baseHasIn(object, key) {
        return object != null && key in Object2(object);
      }
      function baseInRange(number, start, end) {
        return number >= nativeMin(start, end) && number < nativeMax(start, end);
      }
      function baseIntersection(arrays, iteratee2, comparator) {
        var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
        while (othIndex--) {
          var array = arrays[othIndex];
          if (othIndex && iteratee2) {
            array = arrayMap(array, baseUnary(iteratee2));
          }
          maxLength = nativeMin(array.length, maxLength);
          caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined$1;
        }
        array = arrays[0];
        var index = -1, seen = caches[0];
        outer:
          while (++index < length && result2.length < maxLength) {
            var value = array[index], computed2 = iteratee2 ? iteratee2(value) : value;
            value = comparator || value !== 0 ? value : 0;
            if (!(seen ? cacheHas(seen, computed2) : includes2(result2, computed2, comparator))) {
              othIndex = othLength;
              while (--othIndex) {
                var cache = caches[othIndex];
                if (!(cache ? cacheHas(cache, computed2) : includes2(arrays[othIndex], computed2, comparator))) {
                  continue outer;
                }
              }
              if (seen) {
                seen.push(computed2);
              }
              result2.push(value);
            }
          }
        return result2;
      }
      function baseInverter(object, setter, iteratee2, accumulator) {
        baseForOwn(object, function(value, key, object2) {
          setter(accumulator, iteratee2(value), key, object2);
        });
        return accumulator;
      }
      function baseInvoke(object, path, args) {
        path = castPath(path, object);
        object = parent(object, path);
        var func = object == null ? object : object[toKey(last(path))];
        return func == null ? undefined$1 : apply(func, object, args);
      }
      function baseIsArguments(value) {
        return isObjectLike(value) && baseGetTag(value) == argsTag;
      }
      function baseIsArrayBuffer(value) {
        return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
      }
      function baseIsDate(value) {
        return isObjectLike(value) && baseGetTag(value) == dateTag;
      }
      function baseIsEqual(value, other, bitmask, customizer, stack) {
        if (value === other) {
          return true;
        }
        if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
          return value !== value && other !== other;
        }
        return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
      }
      function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
        var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
        objTag = objTag == argsTag ? objectTag : objTag;
        othTag = othTag == argsTag ? objectTag : othTag;
        var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
        if (isSameTag && isBuffer(object)) {
          if (!isBuffer(other)) {
            return false;
          }
          objIsArr = true;
          objIsObj = false;
        }
        if (isSameTag && !objIsObj) {
          stack || (stack = new Stack());
          return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
        }
        if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
          var objIsWrapped = objIsObj && hasOwnProperty2.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty2.call(other, "__wrapped__");
          if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack());
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
          }
        }
        if (!isSameTag) {
          return false;
        }
        stack || (stack = new Stack());
        return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
      }
      function baseIsMap(value) {
        return isObjectLike(value) && getTag(value) == mapTag;
      }
      function baseIsMatch(object, source, matchData, customizer) {
        var index = matchData.length, length = index, noCustomizer = !customizer;
        if (object == null) {
          return !length;
        }
        object = Object2(object);
        while (index--) {
          var data = matchData[index];
          if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
            return false;
          }
        }
        while (++index < length) {
          data = matchData[index];
          var key = data[0], objValue = object[key], srcValue = data[1];
          if (noCustomizer && data[2]) {
            if (objValue === undefined$1 && !(key in object)) {
              return false;
            }
          } else {
            var stack = new Stack();
            if (customizer) {
              var result2 = customizer(objValue, srcValue, key, object, source, stack);
            }
            if (!(result2 === undefined$1 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
              return false;
            }
          }
        }
        return true;
      }
      function baseIsNative(value) {
        if (!isObject(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }
      function baseIsRegExp(value) {
        return isObjectLike(value) && baseGetTag(value) == regexpTag;
      }
      function baseIsSet(value) {
        return isObjectLike(value) && getTag(value) == setTag;
      }
      function baseIsTypedArray(value) {
        return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
      }
      function baseIteratee(value) {
        if (typeof value == "function") {
          return value;
        }
        if (value == null) {
          return identity;
        }
        if (typeof value == "object") {
          return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
        }
        return property(value);
      }
      function baseKeys(object) {
        if (!isPrototype(object)) {
          return nativeKeys(object);
        }
        var result2 = [];
        for (var key in Object2(object)) {
          if (hasOwnProperty2.call(object, key) && key != "constructor") {
            result2.push(key);
          }
        }
        return result2;
      }
      function baseKeysIn(object) {
        if (!isObject(object)) {
          return nativeKeysIn(object);
        }
        var isProto = isPrototype(object), result2 = [];
        for (var key in object) {
          if (!(key == "constructor" && (isProto || !hasOwnProperty2.call(object, key)))) {
            result2.push(key);
          }
        }
        return result2;
      }
      function baseLt(value, other) {
        return value < other;
      }
      function baseMap(collection, iteratee2) {
        var index = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
        baseEach(collection, function(value, key, collection2) {
          result2[++index] = iteratee2(value, key, collection2);
        });
        return result2;
      }
      function baseMatches(source) {
        var matchData = getMatchData(source);
        if (matchData.length == 1 && matchData[0][2]) {
          return matchesStrictComparable(matchData[0][0], matchData[0][1]);
        }
        return function(object) {
          return object === source || baseIsMatch(object, source, matchData);
        };
      }
      function baseMatchesProperty(path, srcValue) {
        if (isKey(path) && isStrictComparable(srcValue)) {
          return matchesStrictComparable(toKey(path), srcValue);
        }
        return function(object) {
          var objValue = get(object, path);
          return objValue === undefined$1 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
        };
      }
      function baseMerge(object, source, srcIndex, customizer, stack) {
        if (object === source) {
          return;
        }
        baseFor(source, function(srcValue, key) {
          stack || (stack = new Stack());
          if (isObject(srcValue)) {
            baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
          } else {
            var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined$1;
            if (newValue === undefined$1) {
              newValue = srcValue;
            }
            assignMergeValue(object, key, newValue);
          }
        }, keysIn);
      }
      function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
        var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
        if (stacked) {
          assignMergeValue(object, key, stacked);
          return;
        }
        var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined$1;
        var isCommon = newValue === undefined$1;
        if (isCommon) {
          var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
          newValue = srcValue;
          if (isArr || isBuff || isTyped) {
            if (isArray(objValue)) {
              newValue = objValue;
            } else if (isArrayLikeObject(objValue)) {
              newValue = copyArray(objValue);
            } else if (isBuff) {
              isCommon = false;
              newValue = cloneBuffer(srcValue, true);
            } else if (isTyped) {
              isCommon = false;
              newValue = cloneTypedArray(srcValue, true);
            } else {
              newValue = [];
            }
          } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
            newValue = objValue;
            if (isArguments(objValue)) {
              newValue = toPlainObject(objValue);
            } else if (!isObject(objValue) || isFunction(objValue)) {
              newValue = initCloneObject(srcValue);
            }
          } else {
            isCommon = false;
          }
        }
        if (isCommon) {
          stack.set(srcValue, newValue);
          mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
          stack["delete"](srcValue);
        }
        assignMergeValue(object, key, newValue);
      }
      function baseNth(array, n) {
        var length = array.length;
        if (!length) {
          return;
        }
        n += n < 0 ? length : 0;
        return isIndex(n, length) ? array[n] : undefined$1;
      }
      function baseOrderBy(collection, iteratees, orders) {
        if (iteratees.length) {
          iteratees = arrayMap(iteratees, function(iteratee2) {
            if (isArray(iteratee2)) {
              return function(value) {
                return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
              };
            }
            return iteratee2;
          });
        } else {
          iteratees = [identity];
        }
        var index = -1;
        iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
        var result2 = baseMap(collection, function(value, key, collection2) {
          var criteria = arrayMap(iteratees, function(iteratee2) {
            return iteratee2(value);
          });
          return { "criteria": criteria, "index": ++index, "value": value };
        });
        return baseSortBy(result2, function(object, other) {
          return compareMultiple(object, other, orders);
        });
      }
      function basePick(object, paths) {
        return basePickBy(object, paths, function(value, path) {
          return hasIn(object, path);
        });
      }
      function basePickBy(object, paths, predicate) {
        var index = -1, length = paths.length, result2 = {};
        while (++index < length) {
          var path = paths[index], value = baseGet(object, path);
          if (predicate(value, path)) {
            baseSet(result2, castPath(path, object), value);
          }
        }
        return result2;
      }
      function basePropertyDeep(path) {
        return function(object) {
          return baseGet(object, path);
        };
      }
      function basePullAll(array, values2, iteratee2, comparator) {
        var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values2.length, seen = array;
        if (array === values2) {
          values2 = copyArray(values2);
        }
        if (iteratee2) {
          seen = arrayMap(array, baseUnary(iteratee2));
        }
        while (++index < length) {
          var fromIndex = 0, value = values2[index], computed2 = iteratee2 ? iteratee2(value) : value;
          while ((fromIndex = indexOf2(seen, computed2, fromIndex, comparator)) > -1) {
            if (seen !== array) {
              splice.call(seen, fromIndex, 1);
            }
            splice.call(array, fromIndex, 1);
          }
        }
        return array;
      }
      function basePullAt(array, indexes) {
        var length = array ? indexes.length : 0, lastIndex = length - 1;
        while (length--) {
          var index = indexes[length];
          if (length == lastIndex || index !== previous) {
            var previous = index;
            if (isIndex(index)) {
              splice.call(array, index, 1);
            } else {
              baseUnset(array, index);
            }
          }
        }
        return array;
      }
      function baseRandom(lower, upper) {
        return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
      }
      function baseRange(start, end, step, fromRight) {
        var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length);
        while (length--) {
          result2[fromRight ? length : ++index] = start;
          start += step;
        }
        return result2;
      }
      function baseRepeat(string, n) {
        var result2 = "";
        if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
          return result2;
        }
        do {
          if (n % 2) {
            result2 += string;
          }
          n = nativeFloor(n / 2);
          if (n) {
            string += string;
          }
        } while (n);
        return result2;
      }
      function baseRest(func, start) {
        return setToString(overRest(func, start, identity), func + "");
      }
      function baseSample(collection) {
        return arraySample(values(collection));
      }
      function baseSampleSize(collection, n) {
        var array = values(collection);
        return shuffleSelf(array, baseClamp(n, 0, array.length));
      }
      function baseSet(object, path, value, customizer) {
        if (!isObject(object)) {
          return object;
        }
        path = castPath(path, object);
        var index = -1, length = path.length, lastIndex = length - 1, nested = object;
        while (nested != null && ++index < length) {
          var key = toKey(path[index]), newValue = value;
          if (key === "__proto__" || key === "constructor" || key === "prototype") {
            return object;
          }
          if (index != lastIndex) {
            var objValue = nested[key];
            newValue = customizer ? customizer(objValue, key, nested) : undefined$1;
            if (newValue === undefined$1) {
              newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
            }
          }
          assignValue(nested, key, newValue);
          nested = nested[key];
        }
        return object;
      }
      var baseSetData = !metaMap ? identity : function(func, data) {
        metaMap.set(func, data);
        return func;
      };
      var baseSetToString = !defineProperty ? identity : function(func, string) {
        return defineProperty(func, "toString", {
          "configurable": true,
          "enumerable": false,
          "value": constant(string),
          "writable": true
        });
      };
      function baseShuffle(collection) {
        return shuffleSelf(values(collection));
      }
      function baseSlice(array, start, end) {
        var index = -1, length = array.length;
        if (start < 0) {
          start = -start > length ? 0 : length + start;
        }
        end = end > length ? length : end;
        if (end < 0) {
          end += length;
        }
        length = start > end ? 0 : end - start >>> 0;
        start >>>= 0;
        var result2 = Array2(length);
        while (++index < length) {
          result2[index] = array[index + start];
        }
        return result2;
      }
      function baseSome(collection, predicate) {
        var result2;
        baseEach(collection, function(value, index, collection2) {
          result2 = predicate(value, index, collection2);
          return !result2;
        });
        return !!result2;
      }
      function baseSortedIndex(array, value, retHighest) {
        var low = 0, high = array == null ? low : array.length;
        if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
          while (low < high) {
            var mid = low + high >>> 1, computed2 = array[mid];
            if (computed2 !== null && !isSymbol(computed2) && (retHighest ? computed2 <= value : computed2 < value)) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return high;
        }
        return baseSortedIndexBy(array, value, identity, retHighest);
      }
      function baseSortedIndexBy(array, value, iteratee2, retHighest) {
        var low = 0, high = array == null ? 0 : array.length;
        if (high === 0) {
          return 0;
        }
        value = iteratee2(value);
        var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined$1;
        while (low < high) {
          var mid = nativeFloor((low + high) / 2), computed2 = iteratee2(array[mid]), othIsDefined = computed2 !== undefined$1, othIsNull = computed2 === null, othIsReflexive = computed2 === computed2, othIsSymbol = isSymbol(computed2);
          if (valIsNaN) {
            var setLow = retHighest || othIsReflexive;
          } else if (valIsUndefined) {
            setLow = othIsReflexive && (retHighest || othIsDefined);
          } else if (valIsNull) {
            setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
          } else if (valIsSymbol) {
            setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
          } else if (othIsNull || othIsSymbol) {
            setLow = false;
          } else {
            setLow = retHighest ? computed2 <= value : computed2 < value;
          }
          if (setLow) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return nativeMin(high, MAX_ARRAY_INDEX);
      }
      function baseSortedUniq(array, iteratee2) {
        var index = -1, length = array.length, resIndex = 0, result2 = [];
        while (++index < length) {
          var value = array[index], computed2 = iteratee2 ? iteratee2(value) : value;
          if (!index || !eq(computed2, seen)) {
            var seen = computed2;
            result2[resIndex++] = value === 0 ? 0 : value;
          }
        }
        return result2;
      }
      function baseToNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        return +value;
      }
      function baseToString(value) {
        if (typeof value == "string") {
          return value;
        }
        if (isArray(value)) {
          return arrayMap(value, baseToString) + "";
        }
        if (isSymbol(value)) {
          return symbolToString ? symbolToString.call(value) : "";
        }
        var result2 = value + "";
        return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
      }
      function baseUniq(array, iteratee2, comparator) {
        var index = -1, includes2 = arrayIncludes, length = array.length, isCommon = true, result2 = [], seen = result2;
        if (comparator) {
          isCommon = false;
          includes2 = arrayIncludesWith;
        } else if (length >= LARGE_ARRAY_SIZE) {
          var set2 = iteratee2 ? null : createSet(array);
          if (set2) {
            return setToArray(set2);
          }
          isCommon = false;
          includes2 = cacheHas;
          seen = new SetCache();
        } else {
          seen = iteratee2 ? [] : result2;
        }
        outer:
          while (++index < length) {
            var value = array[index], computed2 = iteratee2 ? iteratee2(value) : value;
            value = comparator || value !== 0 ? value : 0;
            if (isCommon && computed2 === computed2) {
              var seenIndex = seen.length;
              while (seenIndex--) {
                if (seen[seenIndex] === computed2) {
                  continue outer;
                }
              }
              if (iteratee2) {
                seen.push(computed2);
              }
              result2.push(value);
            } else if (!includes2(seen, computed2, comparator)) {
              if (seen !== result2) {
                seen.push(computed2);
              }
              result2.push(value);
            }
          }
        return result2;
      }
      function baseUnset(object, path) {
        path = castPath(path, object);
        object = parent(object, path);
        return object == null || delete object[toKey(last(path))];
      }
      function baseUpdate(object, path, updater, customizer) {
        return baseSet(object, path, updater(baseGet(object, path)), customizer);
      }
      function baseWhile(array, predicate, isDrop, fromRight) {
        var length = array.length, index = fromRight ? length : -1;
        while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {
        }
        return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
      }
      function baseWrapperValue(value, actions) {
        var result2 = value;
        if (result2 instanceof LazyWrapper) {
          result2 = result2.value();
        }
        return arrayReduce(actions, function(result3, action) {
          return action.func.apply(action.thisArg, arrayPush([result3], action.args));
        }, result2);
      }
      function baseXor(arrays, iteratee2, comparator) {
        var length = arrays.length;
        if (length < 2) {
          return length ? baseUniq(arrays[0]) : [];
        }
        var index = -1, result2 = Array2(length);
        while (++index < length) {
          var array = arrays[index], othIndex = -1;
          while (++othIndex < length) {
            if (othIndex != index) {
              result2[index] = baseDifference(result2[index] || array, arrays[othIndex], iteratee2, comparator);
            }
          }
        }
        return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
      }
      function baseZipObject(props, values2, assignFunc) {
        var index = -1, length = props.length, valsLength = values2.length, result2 = {};
        while (++index < length) {
          var value = index < valsLength ? values2[index] : undefined$1;
          assignFunc(result2, props[index], value);
        }
        return result2;
      }
      function castArrayLikeObject(value) {
        return isArrayLikeObject(value) ? value : [];
      }
      function castFunction(value) {
        return typeof value == "function" ? value : identity;
      }
      function castPath(value, object) {
        if (isArray(value)) {
          return value;
        }
        return isKey(value, object) ? [value] : stringToPath(toString(value));
      }
      var castRest = baseRest;
      function castSlice(array, start, end) {
        var length = array.length;
        end = end === undefined$1 ? length : end;
        return !start && end >= length ? array : baseSlice(array, start, end);
      }
      var clearTimeout = ctxClearTimeout || function(id) {
        return root.clearTimeout(id);
      };
      function cloneBuffer(buffer, isDeep) {
        if (isDeep) {
          return buffer.slice();
        }
        var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
        buffer.copy(result2);
        return result2;
      }
      function cloneArrayBuffer(arrayBuffer) {
        var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
        new Uint8Array(result2).set(new Uint8Array(arrayBuffer));
        return result2;
      }
      function cloneDataView(dataView, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
        return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
      }
      function cloneRegExp(regexp) {
        var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
        result2.lastIndex = regexp.lastIndex;
        return result2;
      }
      function cloneSymbol(symbol) {
        return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
      }
      function cloneTypedArray(typedArray, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
        return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
      }
      function compareAscending(value, other) {
        if (value !== other) {
          var valIsDefined = value !== undefined$1, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
          var othIsDefined = other !== undefined$1, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
          if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
            return 1;
          }
          if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
            return -1;
          }
        }
        return 0;
      }
      function compareMultiple(object, other, orders) {
        var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
        while (++index < length) {
          var result2 = compareAscending(objCriteria[index], othCriteria[index]);
          if (result2) {
            if (index >= ordersLength) {
              return result2;
            }
            var order = orders[index];
            return result2 * (order == "desc" ? -1 : 1);
          }
        }
        return object.index - other.index;
      }
      function composeArgs(args, partials, holders, isCurried) {
        var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
        while (++leftIndex < leftLength) {
          result2[leftIndex] = partials[leftIndex];
        }
        while (++argsIndex < holdersLength) {
          if (isUncurried || argsIndex < argsLength) {
            result2[holders[argsIndex]] = args[argsIndex];
          }
        }
        while (rangeLength--) {
          result2[leftIndex++] = args[argsIndex++];
        }
        return result2;
      }
      function composeArgsRight(args, partials, holders, isCurried) {
        var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
        while (++argsIndex < rangeLength) {
          result2[argsIndex] = args[argsIndex];
        }
        var offset = argsIndex;
        while (++rightIndex < rightLength) {
          result2[offset + rightIndex] = partials[rightIndex];
        }
        while (++holdersIndex < holdersLength) {
          if (isUncurried || argsIndex < argsLength) {
            result2[offset + holders[holdersIndex]] = args[argsIndex++];
          }
        }
        return result2;
      }
      function copyArray(source, array) {
        var index = -1, length = source.length;
        array || (array = Array2(length));
        while (++index < length) {
          array[index] = source[index];
        }
        return array;
      }
      function copyObject(source, props, object, customizer) {
        var isNew = !object;
        object || (object = {});
        var index = -1, length = props.length;
        while (++index < length) {
          var key = props[index];
          var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined$1;
          if (newValue === undefined$1) {
            newValue = source[key];
          }
          if (isNew) {
            baseAssignValue(object, key, newValue);
          } else {
            assignValue(object, key, newValue);
          }
        }
        return object;
      }
      function copySymbols(source, object) {
        return copyObject(source, getSymbols(source), object);
      }
      function copySymbolsIn(source, object) {
        return copyObject(source, getSymbolsIn(source), object);
      }
      function createAggregator(setter, initializer) {
        return function(collection, iteratee2) {
          var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
          return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
        };
      }
      function createAssigner(assigner) {
        return baseRest(function(object, sources) {
          var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined$1, guard = length > 2 ? sources[2] : undefined$1;
          customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined$1;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            customizer = length < 3 ? undefined$1 : customizer;
            length = 1;
          }
          object = Object2(object);
          while (++index < length) {
            var source = sources[index];
            if (source) {
              assigner(object, source, index, customizer);
            }
          }
          return object;
        });
      }
      function createBaseEach(eachFunc, fromRight) {
        return function(collection, iteratee2) {
          if (collection == null) {
            return collection;
          }
          if (!isArrayLike(collection)) {
            return eachFunc(collection, iteratee2);
          }
          var length = collection.length, index = fromRight ? length : -1, iterable = Object2(collection);
          while (fromRight ? index-- : ++index < length) {
            if (iteratee2(iterable[index], index, iterable) === false) {
              break;
            }
          }
          return collection;
        };
      }
      function createBaseFor(fromRight) {
        return function(object, iteratee2, keysFunc) {
          var index = -1, iterable = Object2(object), props = keysFunc(object), length = props.length;
          while (length--) {
            var key = props[fromRight ? length : ++index];
            if (iteratee2(iterable[key], key, iterable) === false) {
              break;
            }
          }
          return object;
        };
      }
      function createBind(func, bitmask, thisArg) {
        var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
        function wrapper() {
          var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
          return fn.apply(isBind ? thisArg : this, arguments);
        }
        return wrapper;
      }
      function createCaseFirst(methodName) {
        return function(string) {
          string = toString(string);
          var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined$1;
          var chr = strSymbols ? strSymbols[0] : string.charAt(0);
          var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
          return chr[methodName]() + trailing;
        };
      }
      function createCompounder(callback) {
        return function(string) {
          return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
        };
      }
      function createCtor(Ctor) {
        return function() {
          var args = arguments;
          switch (args.length) {
            case 0:
              return new Ctor();
            case 1:
              return new Ctor(args[0]);
            case 2:
              return new Ctor(args[0], args[1]);
            case 3:
              return new Ctor(args[0], args[1], args[2]);
            case 4:
              return new Ctor(args[0], args[1], args[2], args[3]);
            case 5:
              return new Ctor(args[0], args[1], args[2], args[3], args[4]);
            case 6:
              return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
            case 7:
              return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
          }
          var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
          return isObject(result2) ? result2 : thisBinding;
        };
      }
      function createCurry(func, bitmask, arity) {
        var Ctor = createCtor(func);
        function wrapper() {
          var length = arguments.length, args = Array2(length), index = length, placeholder = getHolder(wrapper);
          while (index--) {
            args[index] = arguments[index];
          }
          var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
          length -= holders.length;
          if (length < arity) {
            return createRecurry(
              func,
              bitmask,
              createHybrid,
              wrapper.placeholder,
              undefined$1,
              args,
              holders,
              undefined$1,
              undefined$1,
              arity - length
            );
          }
          var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
          return apply(fn, this, args);
        }
        return wrapper;
      }
      function createFind(findIndexFunc) {
        return function(collection, predicate, fromIndex) {
          var iterable = Object2(collection);
          if (!isArrayLike(collection)) {
            var iteratee2 = getIteratee(predicate, 3);
            collection = keys(collection);
            predicate = function(key) {
              return iteratee2(iterable[key], key, iterable);
            };
          }
          var index = findIndexFunc(collection, predicate, fromIndex);
          return index > -1 ? iterable[iteratee2 ? collection[index] : index] : undefined$1;
        };
      }
      function createFlow(fromRight) {
        return flatRest(function(funcs) {
          var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
          if (fromRight) {
            funcs.reverse();
          }
          while (index--) {
            var func = funcs[index];
            if (typeof func != "function") {
              throw new TypeError(FUNC_ERROR_TEXT);
            }
            if (prereq && !wrapper && getFuncName(func) == "wrapper") {
              var wrapper = new LodashWrapper([], true);
            }
          }
          index = wrapper ? index : length;
          while (++index < length) {
            func = funcs[index];
            var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined$1;
            if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
              wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
            } else {
              wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
            }
          }
          return function() {
            var args = arguments, value = args[0];
            if (wrapper && args.length == 1 && isArray(value)) {
              return wrapper.plant(value).value();
            }
            var index2 = 0, result2 = length ? funcs[index2].apply(this, args) : value;
            while (++index2 < length) {
              result2 = funcs[index2].call(this, result2);
            }
            return result2;
          };
        });
      }
      function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
        var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined$1 : createCtor(func);
        function wrapper() {
          var length = arguments.length, args = Array2(length), index = length;
          while (index--) {
            args[index] = arguments[index];
          }
          if (isCurried) {
            var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
          }
          if (partials) {
            args = composeArgs(args, partials, holders, isCurried);
          }
          if (partialsRight) {
            args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
          }
          length -= holdersCount;
          if (isCurried && length < arity) {
            var newHolders = replaceHolders(args, placeholder);
            return createRecurry(
              func,
              bitmask,
              createHybrid,
              wrapper.placeholder,
              thisArg,
              args,
              newHolders,
              argPos,
              ary2,
              arity - length
            );
          }
          var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
          length = args.length;
          if (argPos) {
            args = reorder(args, argPos);
          } else if (isFlip && length > 1) {
            args.reverse();
          }
          if (isAry && ary2 < length) {
            args.length = ary2;
          }
          if (this && this !== root && this instanceof wrapper) {
            fn = Ctor || createCtor(fn);
          }
          return fn.apply(thisBinding, args);
        }
        return wrapper;
      }
      function createInverter(setter, toIteratee) {
        return function(object, iteratee2) {
          return baseInverter(object, setter, toIteratee(iteratee2), {});
        };
      }
      function createMathOperation(operator, defaultValue) {
        return function(value, other) {
          var result2;
          if (value === undefined$1 && other === undefined$1) {
            return defaultValue;
          }
          if (value !== undefined$1) {
            result2 = value;
          }
          if (other !== undefined$1) {
            if (result2 === undefined$1) {
              return other;
            }
            if (typeof value == "string" || typeof other == "string") {
              value = baseToString(value);
              other = baseToString(other);
            } else {
              value = baseToNumber(value);
              other = baseToNumber(other);
            }
            result2 = operator(value, other);
          }
          return result2;
        };
      }
      function createOver(arrayFunc) {
        return flatRest(function(iteratees) {
          iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
          return baseRest(function(args) {
            var thisArg = this;
            return arrayFunc(iteratees, function(iteratee2) {
              return apply(iteratee2, thisArg, args);
            });
          });
        });
      }
      function createPadding(length, chars) {
        chars = chars === undefined$1 ? " " : baseToString(chars);
        var charsLength = chars.length;
        if (charsLength < 2) {
          return charsLength ? baseRepeat(chars, length) : chars;
        }
        var result2 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
        return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
      }
      function createPartial(func, bitmask, thisArg, partials) {
        var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
        function wrapper() {
          var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
          while (++leftIndex < leftLength) {
            args[leftIndex] = partials[leftIndex];
          }
          while (argsLength--) {
            args[leftIndex++] = arguments[++argsIndex];
          }
          return apply(fn, isBind ? thisArg : this, args);
        }
        return wrapper;
      }
      function createRange(fromRight) {
        return function(start, end, step) {
          if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
            end = step = undefined$1;
          }
          start = toFinite(start);
          if (end === undefined$1) {
            end = start;
            start = 0;
          } else {
            end = toFinite(end);
          }
          step = step === undefined$1 ? start < end ? 1 : -1 : toFinite(step);
          return baseRange(start, end, step, fromRight);
        };
      }
      function createRelationalOperation(operator) {
        return function(value, other) {
          if (!(typeof value == "string" && typeof other == "string")) {
            value = toNumber(value);
            other = toNumber(other);
          }
          return operator(value, other);
        };
      }
      function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
        var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined$1, newHoldersRight = isCurry ? undefined$1 : holders, newPartials = isCurry ? partials : undefined$1, newPartialsRight = isCurry ? undefined$1 : partials;
        bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
        bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
        if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
          bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
        }
        var newData = [
          func,
          bitmask,
          thisArg,
          newPartials,
          newHolders,
          newPartialsRight,
          newHoldersRight,
          argPos,
          ary2,
          arity
        ];
        var result2 = wrapFunc.apply(undefined$1, newData);
        if (isLaziable(func)) {
          setData(result2, newData);
        }
        result2.placeholder = placeholder;
        return setWrapToString(result2, func, bitmask);
      }
      function createRound(methodName) {
        var func = Math2[methodName];
        return function(number, precision) {
          number = toNumber(number);
          precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
          if (precision && nativeIsFinite(number)) {
            var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
            pair = (toString(value) + "e").split("e");
            return +(pair[0] + "e" + (+pair[1] - precision));
          }
          return func(number);
        };
      }
      var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop : function(values2) {
        return new Set2(values2);
      };
      function createToPairs(keysFunc) {
        return function(object) {
          var tag = getTag(object);
          if (tag == mapTag) {
            return mapToArray(object);
          }
          if (tag == setTag) {
            return setToPairs(object);
          }
          return baseToPairs(object, keysFunc(object));
        };
      }
      function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
        var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
        if (!isBindKey && typeof func != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        var length = partials ? partials.length : 0;
        if (!length) {
          bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
          partials = holders = undefined$1;
        }
        ary2 = ary2 === undefined$1 ? ary2 : nativeMax(toInteger(ary2), 0);
        arity = arity === undefined$1 ? arity : toInteger(arity);
        length -= holders ? holders.length : 0;
        if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
          var partialsRight = partials, holdersRight = holders;
          partials = holders = undefined$1;
        }
        var data = isBindKey ? undefined$1 : getData(func);
        var newData = [
          func,
          bitmask,
          thisArg,
          partials,
          holders,
          partialsRight,
          holdersRight,
          argPos,
          ary2,
          arity
        ];
        if (data) {
          mergeData(newData, data);
        }
        func = newData[0];
        bitmask = newData[1];
        thisArg = newData[2];
        partials = newData[3];
        holders = newData[4];
        arity = newData[9] = newData[9] === undefined$1 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
        if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
          bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
        }
        if (!bitmask || bitmask == WRAP_BIND_FLAG) {
          var result2 = createBind(func, bitmask, thisArg);
        } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
          result2 = createCurry(func, bitmask, arity);
        } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
          result2 = createPartial(func, bitmask, thisArg, partials);
        } else {
          result2 = createHybrid.apply(undefined$1, newData);
        }
        var setter = data ? baseSetData : setData;
        return setWrapToString(setter(result2, newData), func, bitmask);
      }
      function customDefaultsAssignIn(objValue, srcValue, key, object) {
        if (objValue === undefined$1 || eq(objValue, objectProto[key]) && !hasOwnProperty2.call(object, key)) {
          return srcValue;
        }
        return objValue;
      }
      function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
        if (isObject(objValue) && isObject(srcValue)) {
          stack.set(srcValue, objValue);
          baseMerge(objValue, srcValue, undefined$1, customDefaultsMerge, stack);
          stack["delete"](srcValue);
        }
        return objValue;
      }
      function customOmitClone(value) {
        return isPlainObject(value) ? undefined$1 : value;
      }
      function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
        if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
          return false;
        }
        var arrStacked = stack.get(array);
        var othStacked = stack.get(other);
        if (arrStacked && othStacked) {
          return arrStacked == other && othStacked == array;
        }
        var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined$1;
        stack.set(array, other);
        stack.set(other, array);
        while (++index < arrLength) {
          var arrValue = array[index], othValue = other[index];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
          }
          if (compared !== undefined$1) {
            if (compared) {
              continue;
            }
            result2 = false;
            break;
          }
          if (seen) {
            if (!arraySome(other, function(othValue2, othIndex) {
              if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                return seen.push(othIndex);
              }
            })) {
              result2 = false;
              break;
            }
          } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result2 = false;
            break;
          }
        }
        stack["delete"](array);
        stack["delete"](other);
        return result2;
      }
      function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
        switch (tag) {
          case dataViewTag:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
              return false;
            }
            object = object.buffer;
            other = other.buffer;
          case arrayBufferTag:
            if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
              return false;
            }
            return true;
          case boolTag:
          case dateTag:
          case numberTag:
            return eq(+object, +other);
          case errorTag:
            return object.name == other.name && object.message == other.message;
          case regexpTag:
          case stringTag:
            return object == other + "";
          case mapTag:
            var convert = mapToArray;
          case setTag:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
            convert || (convert = setToArray);
            if (object.size != other.size && !isPartial) {
              return false;
            }
            var stacked = stack.get(object);
            if (stacked) {
              return stacked == other;
            }
            bitmask |= COMPARE_UNORDERED_FLAG;
            stack.set(object, other);
            var result2 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack["delete"](object);
            return result2;
          case symbolTag:
            if (symbolValueOf) {
              return symbolValueOf.call(object) == symbolValueOf.call(other);
            }
        }
        return false;
      }
      function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
        if (objLength != othLength && !isPartial) {
          return false;
        }
        var index = objLength;
        while (index--) {
          var key = objProps[index];
          if (!(isPartial ? key in other : hasOwnProperty2.call(other, key))) {
            return false;
          }
        }
        var objStacked = stack.get(object);
        var othStacked = stack.get(other);
        if (objStacked && othStacked) {
          return objStacked == other && othStacked == object;
        }
        var result2 = true;
        stack.set(object, other);
        stack.set(other, object);
        var skipCtor = isPartial;
        while (++index < objLength) {
          key = objProps[index];
          var objValue = object[key], othValue = other[key];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
          }
          if (!(compared === undefined$1 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result2 = false;
            break;
          }
          skipCtor || (skipCtor = key == "constructor");
        }
        if (result2 && !skipCtor) {
          var objCtor = object.constructor, othCtor = other.constructor;
          if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
            result2 = false;
          }
        }
        stack["delete"](object);
        stack["delete"](other);
        return result2;
      }
      function flatRest(func) {
        return setToString(overRest(func, undefined$1, flatten), func + "");
      }
      function getAllKeys(object) {
        return baseGetAllKeys(object, keys, getSymbols);
      }
      function getAllKeysIn(object) {
        return baseGetAllKeys(object, keysIn, getSymbolsIn);
      }
      var getData = !metaMap ? noop : function(func) {
        return metaMap.get(func);
      };
      function getFuncName(func) {
        var result2 = func.name + "", array = realNames[result2], length = hasOwnProperty2.call(realNames, result2) ? array.length : 0;
        while (length--) {
          var data = array[length], otherFunc = data.func;
          if (otherFunc == null || otherFunc == func) {
            return data.name;
          }
        }
        return result2;
      }
      function getHolder(func) {
        var object = hasOwnProperty2.call(lodash2, "placeholder") ? lodash2 : func;
        return object.placeholder;
      }
      function getIteratee() {
        var result2 = lodash2.iteratee || iteratee;
        result2 = result2 === iteratee ? baseIteratee : result2;
        return arguments.length ? result2(arguments[0], arguments[1]) : result2;
      }
      function getMapData(map2, key) {
        var data = map2.__data__;
        return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
      }
      function getMatchData(object) {
        var result2 = keys(object), length = result2.length;
        while (length--) {
          var key = result2[length], value = object[key];
          result2[length] = [key, value, isStrictComparable(value)];
        }
        return result2;
      }
      function getNative(object, key) {
        var value = getValue(object, key);
        return baseIsNative(value) ? value : undefined$1;
      }
      function getRawTag(value) {
        var isOwn = hasOwnProperty2.call(value, symToStringTag), tag = value[symToStringTag];
        try {
          value[symToStringTag] = undefined$1;
          var unmasked = true;
        } catch (e) {
        }
        var result2 = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }
        return result2;
      }
      var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
        if (object == null) {
          return [];
        }
        object = Object2(object);
        return arrayFilter(nativeGetSymbols(object), function(symbol) {
          return propertyIsEnumerable.call(object, symbol);
        });
      };
      var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
        var result2 = [];
        while (object) {
          arrayPush(result2, getSymbols(object));
          object = getPrototype(object);
        }
        return result2;
      };
      var getTag = baseGetTag;
      if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
        getTag = function(value) {
          var result2 = baseGetTag(value), Ctor = result2 == objectTag ? value.constructor : undefined$1, ctorString = Ctor ? toSource(Ctor) : "";
          if (ctorString) {
            switch (ctorString) {
              case dataViewCtorString:
                return dataViewTag;
              case mapCtorString:
                return mapTag;
              case promiseCtorString:
                return promiseTag;
              case setCtorString:
                return setTag;
              case weakMapCtorString:
                return weakMapTag;
            }
          }
          return result2;
        };
      }
      function getView(start, end, transforms) {
        var index = -1, length = transforms.length;
        while (++index < length) {
          var data = transforms[index], size2 = data.size;
          switch (data.type) {
            case "drop":
              start += size2;
              break;
            case "dropRight":
              end -= size2;
              break;
            case "take":
              end = nativeMin(end, start + size2);
              break;
            case "takeRight":
              start = nativeMax(start, end - size2);
              break;
          }
        }
        return { "start": start, "end": end };
      }
      function getWrapDetails(source) {
        var match = source.match(reWrapDetails);
        return match ? match[1].split(reSplitDetails) : [];
      }
      function hasPath(object, path, hasFunc) {
        path = castPath(path, object);
        var index = -1, length = path.length, result2 = false;
        while (++index < length) {
          var key = toKey(path[index]);
          if (!(result2 = object != null && hasFunc(object, key))) {
            break;
          }
          object = object[key];
        }
        if (result2 || ++index != length) {
          return result2;
        }
        length = object == null ? 0 : object.length;
        return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
      }
      function initCloneArray(array) {
        var length = array.length, result2 = new array.constructor(length);
        if (length && typeof array[0] == "string" && hasOwnProperty2.call(array, "index")) {
          result2.index = array.index;
          result2.input = array.input;
        }
        return result2;
      }
      function initCloneObject(object) {
        return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
      }
      function initCloneByTag(object, tag, isDeep) {
        var Ctor = object.constructor;
        switch (tag) {
          case arrayBufferTag:
            return cloneArrayBuffer(object);
          case boolTag:
          case dateTag:
            return new Ctor(+object);
          case dataViewTag:
            return cloneDataView(object, isDeep);
          case float32Tag:
          case float64Tag:
          case int8Tag:
          case int16Tag:
          case int32Tag:
          case uint8Tag:
          case uint8ClampedTag:
          case uint16Tag:
          case uint32Tag:
            return cloneTypedArray(object, isDeep);
          case mapTag:
            return new Ctor();
          case numberTag:
          case stringTag:
            return new Ctor(object);
          case regexpTag:
            return cloneRegExp(object);
          case setTag:
            return new Ctor();
          case symbolTag:
            return cloneSymbol(object);
        }
      }
      function insertWrapDetails(source, details) {
        var length = details.length;
        if (!length) {
          return source;
        }
        var lastIndex = length - 1;
        details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
        details = details.join(length > 2 ? ", " : " ");
        return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
      }
      function isFlattenable(value) {
        return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
      }
      function isIndex(value, length) {
        var type = typeof value;
        length = length == null ? MAX_SAFE_INTEGER : length;
        return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
      }
      function isIterateeCall(value, index, object) {
        if (!isObject(object)) {
          return false;
        }
        var type = typeof index;
        if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
          return eq(object[index], value);
        }
        return false;
      }
      function isKey(value, object) {
        if (isArray(value)) {
          return false;
        }
        var type = typeof value;
        if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
          return true;
        }
        return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object2(object);
      }
      function isKeyable(value) {
        var type = typeof value;
        return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
      }
      function isLaziable(func) {
        var funcName = getFuncName(func), other = lodash2[funcName];
        if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
          return false;
        }
        if (func === other) {
          return true;
        }
        var data = getData(other);
        return !!data && func === data[0];
      }
      function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
      }
      var isMaskable = coreJsData ? isFunction : stubFalse;
      function isPrototype(value) {
        var Ctor = value && value.constructor, proto2 = typeof Ctor == "function" && Ctor.prototype || objectProto;
        return value === proto2;
      }
      function isStrictComparable(value) {
        return value === value && !isObject(value);
      }
      function matchesStrictComparable(key, srcValue) {
        return function(object) {
          if (object == null) {
            return false;
          }
          return object[key] === srcValue && (srcValue !== undefined$1 || key in Object2(object));
        };
      }
      function memoizeCapped(func) {
        var result2 = memoize(func, function(key) {
          if (cache.size === MAX_MEMOIZE_SIZE) {
            cache.clear();
          }
          return key;
        });
        var cache = result2.cache;
        return result2;
      }
      function mergeData(data, source) {
        var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
        var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
        if (!(isCommon || isCombo)) {
          return data;
        }
        if (srcBitmask & WRAP_BIND_FLAG) {
          data[2] = source[2];
          newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
        }
        var value = source[3];
        if (value) {
          var partials = data[3];
          data[3] = partials ? composeArgs(partials, value, source[4]) : value;
          data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
        }
        value = source[5];
        if (value) {
          partials = data[5];
          data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
          data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
        }
        value = source[7];
        if (value) {
          data[7] = value;
        }
        if (srcBitmask & WRAP_ARY_FLAG) {
          data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
        }
        if (data[9] == null) {
          data[9] = source[9];
        }
        data[0] = source[0];
        data[1] = newBitmask;
        return data;
      }
      function nativeKeysIn(object) {
        var result2 = [];
        if (object != null) {
          for (var key in Object2(object)) {
            result2.push(key);
          }
        }
        return result2;
      }
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }
      function overRest(func, start, transform2) {
        start = nativeMax(start === undefined$1 ? func.length - 1 : start, 0);
        return function() {
          var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array2(length);
          while (++index < length) {
            array[index] = args[start + index];
          }
          index = -1;
          var otherArgs = Array2(start + 1);
          while (++index < start) {
            otherArgs[index] = args[index];
          }
          otherArgs[start] = transform2(array);
          return apply(func, this, otherArgs);
        };
      }
      function parent(object, path) {
        return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
      }
      function reorder(array, indexes) {
        var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
        while (length--) {
          var index = indexes[length];
          array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined$1;
        }
        return array;
      }
      function safeGet(object, key) {
        if (key === "constructor" && typeof object[key] === "function") {
          return;
        }
        if (key == "__proto__") {
          return;
        }
        return object[key];
      }
      var setData = shortOut(baseSetData);
      var setTimeout = ctxSetTimeout || function(func, wait) {
        return root.setTimeout(func, wait);
      };
      var setToString = shortOut(baseSetToString);
      function setWrapToString(wrapper, reference, bitmask) {
        var source = reference + "";
        return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
      }
      function shortOut(func) {
        var count = 0, lastCalled = 0;
        return function() {
          var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
          lastCalled = stamp;
          if (remaining > 0) {
            if (++count >= HOT_COUNT) {
              return arguments[0];
            }
          } else {
            count = 0;
          }
          return func.apply(undefined$1, arguments);
        };
      }
      function shuffleSelf(array, size2) {
        var index = -1, length = array.length, lastIndex = length - 1;
        size2 = size2 === undefined$1 ? length : size2;
        while (++index < size2) {
          var rand = baseRandom(index, lastIndex), value = array[rand];
          array[rand] = array[index];
          array[index] = value;
        }
        array.length = size2;
        return array;
      }
      var stringToPath = memoizeCapped(function(string) {
        var result2 = [];
        if (string.charCodeAt(0) === 46) {
          result2.push("");
        }
        string.replace(rePropName, function(match, number, quote, subString) {
          result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
        });
        return result2;
      });
      function toKey(value) {
        if (typeof value == "string" || isSymbol(value)) {
          return value;
        }
        var result2 = value + "";
        return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
      }
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e) {
          }
          try {
            return func + "";
          } catch (e) {
          }
        }
        return "";
      }
      function updateWrapDetails(details, bitmask) {
        arrayEach(wrapFlags, function(pair) {
          var value = "_." + pair[0];
          if (bitmask & pair[1] && !arrayIncludes(details, value)) {
            details.push(value);
          }
        });
        return details.sort();
      }
      function wrapperClone(wrapper) {
        if (wrapper instanceof LazyWrapper) {
          return wrapper.clone();
        }
        var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
        result2.__actions__ = copyArray(wrapper.__actions__);
        result2.__index__ = wrapper.__index__;
        result2.__values__ = wrapper.__values__;
        return result2;
      }
      function chunk(array, size2, guard) {
        if (guard ? isIterateeCall(array, size2, guard) : size2 === undefined$1) {
          size2 = 1;
        } else {
          size2 = nativeMax(toInteger(size2), 0);
        }
        var length = array == null ? 0 : array.length;
        if (!length || size2 < 1) {
          return [];
        }
        var index = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size2));
        while (index < length) {
          result2[resIndex++] = baseSlice(array, index, index += size2);
        }
        return result2;
      }
      function compact(array) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
        while (++index < length) {
          var value = array[index];
          if (value) {
            result2[resIndex++] = value;
          }
        }
        return result2;
      }
      function concat() {
        var length = arguments.length;
        if (!length) {
          return [];
        }
        var args = Array2(length - 1), array = arguments[0], index = length;
        while (index--) {
          args[index - 1] = arguments[index];
        }
        return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
      }
      var difference = baseRest(function(array, values2) {
        return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
      });
      var differenceBy = baseRest(function(array, values2) {
        var iteratee2 = last(values2);
        if (isArrayLikeObject(iteratee2)) {
          iteratee2 = undefined$1;
        }
        return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
      });
      var differenceWith = baseRest(function(array, values2) {
        var comparator = last(values2);
        if (isArrayLikeObject(comparator)) {
          comparator = undefined$1;
        }
        return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), undefined$1, comparator) : [];
      });
      function drop(array, n, guard) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        n = guard || n === undefined$1 ? 1 : toInteger(n);
        return baseSlice(array, n < 0 ? 0 : n, length);
      }
      function dropRight(array, n, guard) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        n = guard || n === undefined$1 ? 1 : toInteger(n);
        n = length - n;
        return baseSlice(array, 0, n < 0 ? 0 : n);
      }
      function dropRightWhile(array, predicate) {
        return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
      }
      function dropWhile(array, predicate) {
        return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
      }
      function fill(array, value, start, end) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        if (start && typeof start != "number" && isIterateeCall(array, value, start)) {
          start = 0;
          end = length;
        }
        return baseFill(array, value, start, end);
      }
      function findIndex(array, predicate, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index = fromIndex == null ? 0 : toInteger(fromIndex);
        if (index < 0) {
          index = nativeMax(length + index, 0);
        }
        return baseFindIndex(array, getIteratee(predicate, 3), index);
      }
      function findLastIndex(array, predicate, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index = length - 1;
        if (fromIndex !== undefined$1) {
          index = toInteger(fromIndex);
          index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
        }
        return baseFindIndex(array, getIteratee(predicate, 3), index, true);
      }
      function flatten(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseFlatten(array, 1) : [];
      }
      function flattenDeep(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseFlatten(array, INFINITY) : [];
      }
      function flattenDepth(array, depth) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        depth = depth === undefined$1 ? 1 : toInteger(depth);
        return baseFlatten(array, depth);
      }
      function fromPairs(pairs) {
        var index = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
        while (++index < length) {
          var pair = pairs[index];
          result2[pair[0]] = pair[1];
        }
        return result2;
      }
      function head(array) {
        return array && array.length ? array[0] : undefined$1;
      }
      function indexOf(array, value, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index = fromIndex == null ? 0 : toInteger(fromIndex);
        if (index < 0) {
          index = nativeMax(length + index, 0);
        }
        return baseIndexOf(array, value, index);
      }
      function initial(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseSlice(array, 0, -1) : [];
      }
      var intersection = baseRest(function(arrays) {
        var mapped = arrayMap(arrays, castArrayLikeObject);
        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
      });
      var intersectionBy = baseRest(function(arrays) {
        var iteratee2 = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
        if (iteratee2 === last(mapped)) {
          iteratee2 = undefined$1;
        } else {
          mapped.pop();
        }
        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
      });
      var intersectionWith = baseRest(function(arrays) {
        var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        if (comparator) {
          mapped.pop();
        }
        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined$1, comparator) : [];
      });
      function join(array, separator) {
        return array == null ? "" : nativeJoin.call(array, separator);
      }
      function last(array) {
        var length = array == null ? 0 : array.length;
        return length ? array[length - 1] : undefined$1;
      }
      function lastIndexOf(array, value, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index = length;
        if (fromIndex !== undefined$1) {
          index = toInteger(fromIndex);
          index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
        }
        return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
      }
      function nth(array, n) {
        return array && array.length ? baseNth(array, toInteger(n)) : undefined$1;
      }
      var pull = baseRest(pullAll);
      function pullAll(array, values2) {
        return array && array.length && values2 && values2.length ? basePullAll(array, values2) : array;
      }
      function pullAllBy(array, values2, iteratee2) {
        return array && array.length && values2 && values2.length ? basePullAll(array, values2, getIteratee(iteratee2, 2)) : array;
      }
      function pullAllWith(array, values2, comparator) {
        return array && array.length && values2 && values2.length ? basePullAll(array, values2, undefined$1, comparator) : array;
      }
      var pullAt = flatRest(function(array, indexes) {
        var length = array == null ? 0 : array.length, result2 = baseAt(array, indexes);
        basePullAt(array, arrayMap(indexes, function(index) {
          return isIndex(index, length) ? +index : index;
        }).sort(compareAscending));
        return result2;
      });
      function remove(array, predicate) {
        var result2 = [];
        if (!(array && array.length)) {
          return result2;
        }
        var index = -1, indexes = [], length = array.length;
        predicate = getIteratee(predicate, 3);
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result2.push(value);
            indexes.push(index);
          }
        }
        basePullAt(array, indexes);
        return result2;
      }
      function reverse(array) {
        return array == null ? array : nativeReverse.call(array);
      }
      function slice(array, start, end) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        if (end && typeof end != "number" && isIterateeCall(array, start, end)) {
          start = 0;
          end = length;
        } else {
          start = start == null ? 0 : toInteger(start);
          end = end === undefined$1 ? length : toInteger(end);
        }
        return baseSlice(array, start, end);
      }
      function sortedIndex(array, value) {
        return baseSortedIndex(array, value);
      }
      function sortedIndexBy(array, value, iteratee2) {
        return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2));
      }
      function sortedIndexOf(array, value) {
        var length = array == null ? 0 : array.length;
        if (length) {
          var index = baseSortedIndex(array, value);
          if (index < length && eq(array[index], value)) {
            return index;
          }
        }
        return -1;
      }
      function sortedLastIndex(array, value) {
        return baseSortedIndex(array, value, true);
      }
      function sortedLastIndexBy(array, value, iteratee2) {
        return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2), true);
      }
      function sortedLastIndexOf(array, value) {
        var length = array == null ? 0 : array.length;
        if (length) {
          var index = baseSortedIndex(array, value, true) - 1;
          if (eq(array[index], value)) {
            return index;
          }
        }
        return -1;
      }
      function sortedUniq(array) {
        return array && array.length ? baseSortedUniq(array) : [];
      }
      function sortedUniqBy(array, iteratee2) {
        return array && array.length ? baseSortedUniq(array, getIteratee(iteratee2, 2)) : [];
      }
      function tail(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseSlice(array, 1, length) : [];
      }
      function take(array, n, guard) {
        if (!(array && array.length)) {
          return [];
        }
        n = guard || n === undefined$1 ? 1 : toInteger(n);
        return baseSlice(array, 0, n < 0 ? 0 : n);
      }
      function takeRight(array, n, guard) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        n = guard || n === undefined$1 ? 1 : toInteger(n);
        n = length - n;
        return baseSlice(array, n < 0 ? 0 : n, length);
      }
      function takeRightWhile(array, predicate) {
        return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
      }
      function takeWhile(array, predicate) {
        return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
      }
      var union = baseRest(function(arrays) {
        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
      });
      var unionBy = baseRest(function(arrays) {
        var iteratee2 = last(arrays);
        if (isArrayLikeObject(iteratee2)) {
          iteratee2 = undefined$1;
        }
        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
      });
      var unionWith = baseRest(function(arrays) {
        var comparator = last(arrays);
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined$1, comparator);
      });
      function uniq(array) {
        return array && array.length ? baseUniq(array) : [];
      }
      function uniqBy(array, iteratee2) {
        return array && array.length ? baseUniq(array, getIteratee(iteratee2, 2)) : [];
      }
      function uniqWith(array, comparator) {
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        return array && array.length ? baseUniq(array, undefined$1, comparator) : [];
      }
      function unzip(array) {
        if (!(array && array.length)) {
          return [];
        }
        var length = 0;
        array = arrayFilter(array, function(group) {
          if (isArrayLikeObject(group)) {
            length = nativeMax(group.length, length);
            return true;
          }
        });
        return baseTimes(length, function(index) {
          return arrayMap(array, baseProperty(index));
        });
      }
      function unzipWith(array, iteratee2) {
        if (!(array && array.length)) {
          return [];
        }
        var result2 = unzip(array);
        if (iteratee2 == null) {
          return result2;
        }
        return arrayMap(result2, function(group) {
          return apply(iteratee2, undefined$1, group);
        });
      }
      var without = baseRest(function(array, values2) {
        return isArrayLikeObject(array) ? baseDifference(array, values2) : [];
      });
      var xor = baseRest(function(arrays) {
        return baseXor(arrayFilter(arrays, isArrayLikeObject));
      });
      var xorBy = baseRest(function(arrays) {
        var iteratee2 = last(arrays);
        if (isArrayLikeObject(iteratee2)) {
          iteratee2 = undefined$1;
        }
        return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
      });
      var xorWith = baseRest(function(arrays) {
        var comparator = last(arrays);
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined$1, comparator);
      });
      var zip = baseRest(unzip);
      function zipObject(props, values2) {
        return baseZipObject(props || [], values2 || [], assignValue);
      }
      function zipObjectDeep(props, values2) {
        return baseZipObject(props || [], values2 || [], baseSet);
      }
      var zipWith = baseRest(function(arrays) {
        var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined$1;
        iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined$1;
        return unzipWith(arrays, iteratee2);
      });
      function chain(value) {
        var result2 = lodash2(value);
        result2.__chain__ = true;
        return result2;
      }
      function tap(value, interceptor) {
        interceptor(value);
        return value;
      }
      function thru(value, interceptor) {
        return interceptor(value);
      }
      var wrapperAt = flatRest(function(paths) {
        var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
          return baseAt(object, paths);
        };
        if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
          return this.thru(interceptor);
        }
        value = value.slice(start, +start + (length ? 1 : 0));
        value.__actions__.push({
          "func": thru,
          "args": [interceptor],
          "thisArg": undefined$1
        });
        return new LodashWrapper(value, this.__chain__).thru(function(array) {
          if (length && !array.length) {
            array.push(undefined$1);
          }
          return array;
        });
      });
      function wrapperChain() {
        return chain(this);
      }
      function wrapperCommit() {
        return new LodashWrapper(this.value(), this.__chain__);
      }
      function wrapperNext() {
        if (this.__values__ === undefined$1) {
          this.__values__ = toArray(this.value());
        }
        var done = this.__index__ >= this.__values__.length, value = done ? undefined$1 : this.__values__[this.__index__++];
        return { "done": done, "value": value };
      }
      function wrapperToIterator() {
        return this;
      }
      function wrapperPlant(value) {
        var result2, parent2 = this;
        while (parent2 instanceof baseLodash) {
          var clone2 = wrapperClone(parent2);
          clone2.__index__ = 0;
          clone2.__values__ = undefined$1;
          if (result2) {
            previous.__wrapped__ = clone2;
          } else {
            result2 = clone2;
          }
          var previous = clone2;
          parent2 = parent2.__wrapped__;
        }
        previous.__wrapped__ = value;
        return result2;
      }
      function wrapperReverse() {
        var value = this.__wrapped__;
        if (value instanceof LazyWrapper) {
          var wrapped = value;
          if (this.__actions__.length) {
            wrapped = new LazyWrapper(this);
          }
          wrapped = wrapped.reverse();
          wrapped.__actions__.push({
            "func": thru,
            "args": [reverse],
            "thisArg": undefined$1
          });
          return new LodashWrapper(wrapped, this.__chain__);
        }
        return this.thru(reverse);
      }
      function wrapperValue() {
        return baseWrapperValue(this.__wrapped__, this.__actions__);
      }
      var countBy = createAggregator(function(result2, value, key) {
        if (hasOwnProperty2.call(result2, key)) {
          ++result2[key];
        } else {
          baseAssignValue(result2, key, 1);
        }
      });
      function every(collection, predicate, guard) {
        var func = isArray(collection) ? arrayEvery : baseEvery;
        if (guard && isIterateeCall(collection, predicate, guard)) {
          predicate = undefined$1;
        }
        return func(collection, getIteratee(predicate, 3));
      }
      function filter(collection, predicate) {
        var func = isArray(collection) ? arrayFilter : baseFilter;
        return func(collection, getIteratee(predicate, 3));
      }
      var find = createFind(findIndex);
      var findLast = createFind(findLastIndex);
      function flatMap(collection, iteratee2) {
        return baseFlatten(map(collection, iteratee2), 1);
      }
      function flatMapDeep(collection, iteratee2) {
        return baseFlatten(map(collection, iteratee2), INFINITY);
      }
      function flatMapDepth(collection, iteratee2, depth) {
        depth = depth === undefined$1 ? 1 : toInteger(depth);
        return baseFlatten(map(collection, iteratee2), depth);
      }
      function forEach(collection, iteratee2) {
        var func = isArray(collection) ? arrayEach : baseEach;
        return func(collection, getIteratee(iteratee2, 3));
      }
      function forEachRight(collection, iteratee2) {
        var func = isArray(collection) ? arrayEachRight : baseEachRight;
        return func(collection, getIteratee(iteratee2, 3));
      }
      var groupBy = createAggregator(function(result2, value, key) {
        if (hasOwnProperty2.call(result2, key)) {
          result2[key].push(value);
        } else {
          baseAssignValue(result2, key, [value]);
        }
      });
      function includes(collection, value, fromIndex, guard) {
        collection = isArrayLike(collection) ? collection : values(collection);
        fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
        var length = collection.length;
        if (fromIndex < 0) {
          fromIndex = nativeMax(length + fromIndex, 0);
        }
        return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
      }
      var invokeMap = baseRest(function(collection, path, args) {
        var index = -1, isFunc = typeof path == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
        baseEach(collection, function(value) {
          result2[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
        });
        return result2;
      });
      var keyBy = createAggregator(function(result2, value, key) {
        baseAssignValue(result2, key, value);
      });
      function map(collection, iteratee2) {
        var func = isArray(collection) ? arrayMap : baseMap;
        return func(collection, getIteratee(iteratee2, 3));
      }
      function orderBy(collection, iteratees, orders, guard) {
        if (collection == null) {
          return [];
        }
        if (!isArray(iteratees)) {
          iteratees = iteratees == null ? [] : [iteratees];
        }
        orders = guard ? undefined$1 : orders;
        if (!isArray(orders)) {
          orders = orders == null ? [] : [orders];
        }
        return baseOrderBy(collection, iteratees, orders);
      }
      var partition = createAggregator(function(result2, value, key) {
        result2[key ? 0 : 1].push(value);
      }, function() {
        return [[], []];
      });
      function reduce(collection, iteratee2, accumulator) {
        var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
        return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
      }
      function reduceRight(collection, iteratee2, accumulator) {
        var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
        return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
      }
      function reject(collection, predicate) {
        var func = isArray(collection) ? arrayFilter : baseFilter;
        return func(collection, negate(getIteratee(predicate, 3)));
      }
      function sample(collection) {
        var func = isArray(collection) ? arraySample : baseSample;
        return func(collection);
      }
      function sampleSize(collection, n, guard) {
        if (guard ? isIterateeCall(collection, n, guard) : n === undefined$1) {
          n = 1;
        } else {
          n = toInteger(n);
        }
        var func = isArray(collection) ? arraySampleSize : baseSampleSize;
        return func(collection, n);
      }
      function shuffle(collection) {
        var func = isArray(collection) ? arrayShuffle : baseShuffle;
        return func(collection);
      }
      function size(collection) {
        if (collection == null) {
          return 0;
        }
        if (isArrayLike(collection)) {
          return isString(collection) ? stringSize(collection) : collection.length;
        }
        var tag = getTag(collection);
        if (tag == mapTag || tag == setTag) {
          return collection.size;
        }
        return baseKeys(collection).length;
      }
      function some(collection, predicate, guard) {
        var func = isArray(collection) ? arraySome : baseSome;
        if (guard && isIterateeCall(collection, predicate, guard)) {
          predicate = undefined$1;
        }
        return func(collection, getIteratee(predicate, 3));
      }
      var sortBy = baseRest(function(collection, iteratees) {
        if (collection == null) {
          return [];
        }
        var length = iteratees.length;
        if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
          iteratees = [];
        } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
          iteratees = [iteratees[0]];
        }
        return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
      });
      var now = ctxNow || function() {
        return root.Date.now();
      };
      function after(n, func) {
        if (typeof func != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        n = toInteger(n);
        return function() {
          if (--n < 1) {
            return func.apply(this, arguments);
          }
        };
      }
      function ary(func, n, guard) {
        n = guard ? undefined$1 : n;
        n = func && n == null ? func.length : n;
        return createWrap(func, WRAP_ARY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, n);
      }
      function before(n, func) {
        var result2;
        if (typeof func != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        n = toInteger(n);
        return function() {
          if (--n > 0) {
            result2 = func.apply(this, arguments);
          }
          if (n <= 1) {
            func = undefined$1;
          }
          return result2;
        };
      }
      var bind = baseRest(function(func, thisArg, partials) {
        var bitmask = WRAP_BIND_FLAG;
        if (partials.length) {
          var holders = replaceHolders(partials, getHolder(bind));
          bitmask |= WRAP_PARTIAL_FLAG;
        }
        return createWrap(func, bitmask, thisArg, partials, holders);
      });
      var bindKey = baseRest(function(object, key, partials) {
        var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
        if (partials.length) {
          var holders = replaceHolders(partials, getHolder(bindKey));
          bitmask |= WRAP_PARTIAL_FLAG;
        }
        return createWrap(key, bitmask, object, partials, holders);
      });
      function curry(func, arity, guard) {
        arity = guard ? undefined$1 : arity;
        var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
        result2.placeholder = curry.placeholder;
        return result2;
      }
      function curryRight(func, arity, guard) {
        arity = guard ? undefined$1 : arity;
        var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
        result2.placeholder = curryRight.placeholder;
        return result2;
      }
      function debounce(func, wait, options) {
        var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
        if (typeof func != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        wait = toNumber(wait) || 0;
        if (isObject(options)) {
          leading = !!options.leading;
          maxing = "maxWait" in options;
          maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        function invokeFunc(time) {
          var args = lastArgs, thisArg = lastThis;
          lastArgs = lastThis = undefined$1;
          lastInvokeTime = time;
          result2 = func.apply(thisArg, args);
          return result2;
        }
        function leadingEdge(time) {
          lastInvokeTime = time;
          timerId = setTimeout(timerExpired, wait);
          return leading ? invokeFunc(time) : result2;
        }
        function remainingWait(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
          return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
        }
        function shouldInvoke(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
          return lastCallTime === undefined$1 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
        }
        function timerExpired() {
          var time = now();
          if (shouldInvoke(time)) {
            return trailingEdge(time);
          }
          timerId = setTimeout(timerExpired, remainingWait(time));
        }
        function trailingEdge(time) {
          timerId = undefined$1;
          if (trailing && lastArgs) {
            return invokeFunc(time);
          }
          lastArgs = lastThis = undefined$1;
          return result2;
        }
        function cancel() {
          if (timerId !== undefined$1) {
            clearTimeout(timerId);
          }
          lastInvokeTime = 0;
          lastArgs = lastCallTime = lastThis = timerId = undefined$1;
        }
        function flush() {
          return timerId === undefined$1 ? result2 : trailingEdge(now());
        }
        function debounced() {
          var time = now(), isInvoking = shouldInvoke(time);
          lastArgs = arguments;
          lastThis = this;
          lastCallTime = time;
          if (isInvoking) {
            if (timerId === undefined$1) {
              return leadingEdge(lastCallTime);
            }
            if (maxing) {
              clearTimeout(timerId);
              timerId = setTimeout(timerExpired, wait);
              return invokeFunc(lastCallTime);
            }
          }
          if (timerId === undefined$1) {
            timerId = setTimeout(timerExpired, wait);
          }
          return result2;
        }
        debounced.cancel = cancel;
        debounced.flush = flush;
        return debounced;
      }
      var defer = baseRest(function(func, args) {
        return baseDelay(func, 1, args);
      });
      var delay = baseRest(function(func, wait, args) {
        return baseDelay(func, toNumber(wait) || 0, args);
      });
      function flip(func) {
        return createWrap(func, WRAP_FLIP_FLAG);
      }
      function memoize(func, resolver) {
        if (typeof func != "function" || resolver != null && typeof resolver != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        var memoized = function() {
          var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
          if (cache.has(key)) {
            return cache.get(key);
          }
          var result2 = func.apply(this, args);
          memoized.cache = cache.set(key, result2) || cache;
          return result2;
        };
        memoized.cache = new (memoize.Cache || MapCache)();
        return memoized;
      }
      memoize.Cache = MapCache;
      function negate(predicate) {
        if (typeof predicate != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        return function() {
          var args = arguments;
          switch (args.length) {
            case 0:
              return !predicate.call(this);
            case 1:
              return !predicate.call(this, args[0]);
            case 2:
              return !predicate.call(this, args[0], args[1]);
            case 3:
              return !predicate.call(this, args[0], args[1], args[2]);
          }
          return !predicate.apply(this, args);
        };
      }
      function once(func) {
        return before(2, func);
      }
      var overArgs = castRest(function(func, transforms) {
        transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
        var funcsLength = transforms.length;
        return baseRest(function(args) {
          var index = -1, length = nativeMin(args.length, funcsLength);
          while (++index < length) {
            args[index] = transforms[index].call(this, args[index]);
          }
          return apply(func, this, args);
        });
      });
      var partial = baseRest(function(func, partials) {
        var holders = replaceHolders(partials, getHolder(partial));
        return createWrap(func, WRAP_PARTIAL_FLAG, undefined$1, partials, holders);
      });
      var partialRight = baseRest(function(func, partials) {
        var holders = replaceHolders(partials, getHolder(partialRight));
        return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined$1, partials, holders);
      });
      var rearg = flatRest(function(func, indexes) {
        return createWrap(func, WRAP_REARG_FLAG, undefined$1, undefined$1, undefined$1, indexes);
      });
      function rest(func, start) {
        if (typeof func != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        start = start === undefined$1 ? start : toInteger(start);
        return baseRest(func, start);
      }
      function spread(func, start) {
        if (typeof func != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        start = start == null ? 0 : nativeMax(toInteger(start), 0);
        return baseRest(function(args) {
          var array = args[start], otherArgs = castSlice(args, 0, start);
          if (array) {
            arrayPush(otherArgs, array);
          }
          return apply(func, this, otherArgs);
        });
      }
      function throttle(func, wait, options) {
        var leading = true, trailing = true;
        if (typeof func != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        if (isObject(options)) {
          leading = "leading" in options ? !!options.leading : leading;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        return debounce(func, wait, {
          "leading": leading,
          "maxWait": wait,
          "trailing": trailing
        });
      }
      function unary(func) {
        return ary(func, 1);
      }
      function wrap(value, wrapper) {
        return partial(castFunction(wrapper), value);
      }
      function castArray() {
        if (!arguments.length) {
          return [];
        }
        var value = arguments[0];
        return isArray(value) ? value : [value];
      }
      function clone(value) {
        return baseClone(value, CLONE_SYMBOLS_FLAG);
      }
      function cloneWith(value, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
      }
      function cloneDeep(value) {
        return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
      }
      function cloneDeepWith(value, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
      }
      function conformsTo(object, source) {
        return source == null || baseConformsTo(object, source, keys(source));
      }
      function eq(value, other) {
        return value === other || value !== value && other !== other;
      }
      var gt = createRelationalOperation(baseGt);
      var gte = createRelationalOperation(function(value, other) {
        return value >= other;
      });
      var isArguments = baseIsArguments(/* @__PURE__ */ function() {
        return arguments;
      }()) ? baseIsArguments : function(value) {
        return isObjectLike(value) && hasOwnProperty2.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
      };
      var isArray = Array2.isArray;
      var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
      function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction(value);
      }
      function isArrayLikeObject(value) {
        return isObjectLike(value) && isArrayLike(value);
      }
      function isBoolean(value) {
        return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
      }
      var isBuffer = nativeIsBuffer || stubFalse;
      var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
      function isElement(value) {
        return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
      }
      function isEmpty(value) {
        if (value == null) {
          return true;
        }
        if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
          return !value.length;
        }
        var tag = getTag(value);
        if (tag == mapTag || tag == setTag) {
          return !value.size;
        }
        if (isPrototype(value)) {
          return !baseKeys(value).length;
        }
        for (var key in value) {
          if (hasOwnProperty2.call(value, key)) {
            return false;
          }
        }
        return true;
      }
      function isEqual(value, other) {
        return baseIsEqual(value, other);
      }
      function isEqualWith(value, other, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        var result2 = customizer ? customizer(value, other) : undefined$1;
        return result2 === undefined$1 ? baseIsEqual(value, other, undefined$1, customizer) : !!result2;
      }
      function isError(value) {
        if (!isObjectLike(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
      }
      function isFinite2(value) {
        return typeof value == "number" && nativeIsFinite(value);
      }
      function isFunction(value) {
        if (!isObject(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
      }
      function isInteger(value) {
        return typeof value == "number" && value == toInteger(value);
      }
      function isLength(value) {
        return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
      }
      function isObject(value) {
        var type = typeof value;
        return value != null && (type == "object" || type == "function");
      }
      function isObjectLike(value) {
        return value != null && typeof value == "object";
      }
      var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
      function isMatch(object, source) {
        return object === source || baseIsMatch(object, source, getMatchData(source));
      }
      function isMatchWith(object, source, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return baseIsMatch(object, source, getMatchData(source), customizer);
      }
      function isNaN(value) {
        return isNumber(value) && value != +value;
      }
      function isNative(value) {
        if (isMaskable(value)) {
          throw new Error2(CORE_ERROR_TEXT);
        }
        return baseIsNative(value);
      }
      function isNull(value) {
        return value === null;
      }
      function isNil(value) {
        return value == null;
      }
      function isNumber(value) {
        return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
      }
      function isPlainObject(value) {
        if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
          return false;
        }
        var proto2 = getPrototype(value);
        if (proto2 === null) {
          return true;
        }
        var Ctor = hasOwnProperty2.call(proto2, "constructor") && proto2.constructor;
        return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
      }
      var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
      function isSafeInteger(value) {
        return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
      }
      var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
      function isString(value) {
        return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
      }
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
      }
      var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
      function isUndefined(value) {
        return value === undefined$1;
      }
      function isWeakMap(value) {
        return isObjectLike(value) && getTag(value) == weakMapTag;
      }
      function isWeakSet(value) {
        return isObjectLike(value) && baseGetTag(value) == weakSetTag;
      }
      var lt = createRelationalOperation(baseLt);
      var lte = createRelationalOperation(function(value, other) {
        return value <= other;
      });
      function toArray(value) {
        if (!value) {
          return [];
        }
        if (isArrayLike(value)) {
          return isString(value) ? stringToArray(value) : copyArray(value);
        }
        if (symIterator && value[symIterator]) {
          return iteratorToArray(value[symIterator]());
        }
        var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
        return func(value);
      }
      function toFinite(value) {
        if (!value) {
          return value === 0 ? value : 0;
        }
        value = toNumber(value);
        if (value === INFINITY || value === -INFINITY) {
          var sign = value < 0 ? -1 : 1;
          return sign * MAX_INTEGER;
        }
        return value === value ? value : 0;
      }
      function toInteger(value) {
        var result2 = toFinite(value), remainder = result2 % 1;
        return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
      }
      function toLength(value) {
        return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
      }
      function toNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        if (isObject(value)) {
          var other = typeof value.valueOf == "function" ? value.valueOf() : value;
          value = isObject(other) ? other + "" : other;
        }
        if (typeof value != "string") {
          return value === 0 ? value : +value;
        }
        value = baseTrim(value);
        var isBinary = reIsBinary.test(value);
        return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
      }
      function toPlainObject(value) {
        return copyObject(value, keysIn(value));
      }
      function toSafeInteger(value) {
        return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
      }
      function toString(value) {
        return value == null ? "" : baseToString(value);
      }
      var assign = createAssigner(function(object, source) {
        if (isPrototype(source) || isArrayLike(source)) {
          copyObject(source, keys(source), object);
          return;
        }
        for (var key in source) {
          if (hasOwnProperty2.call(source, key)) {
            assignValue(object, key, source[key]);
          }
        }
      });
      var assignIn = createAssigner(function(object, source) {
        copyObject(source, keysIn(source), object);
      });
      var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
        copyObject(source, keysIn(source), object, customizer);
      });
      var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
        copyObject(source, keys(source), object, customizer);
      });
      var at = flatRest(baseAt);
      function create(prototype, properties) {
        var result2 = baseCreate(prototype);
        return properties == null ? result2 : baseAssign(result2, properties);
      }
      var defaults = baseRest(function(object, sources) {
        object = Object2(object);
        var index = -1;
        var length = sources.length;
        var guard = length > 2 ? sources[2] : undefined$1;
        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          length = 1;
        }
        while (++index < length) {
          var source = sources[index];
          var props = keysIn(source);
          var propsIndex = -1;
          var propsLength = props.length;
          while (++propsIndex < propsLength) {
            var key = props[propsIndex];
            var value = object[key];
            if (value === undefined$1 || eq(value, objectProto[key]) && !hasOwnProperty2.call(object, key)) {
              object[key] = source[key];
            }
          }
        }
        return object;
      });
      var defaultsDeep = baseRest(function(args) {
        args.push(undefined$1, customDefaultsMerge);
        return apply(mergeWith, undefined$1, args);
      });
      function findKey(object, predicate) {
        return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
      }
      function findLastKey(object, predicate) {
        return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
      }
      function forIn(object, iteratee2) {
        return object == null ? object : baseFor(object, getIteratee(iteratee2, 3), keysIn);
      }
      function forInRight(object, iteratee2) {
        return object == null ? object : baseForRight(object, getIteratee(iteratee2, 3), keysIn);
      }
      function forOwn(object, iteratee2) {
        return object && baseForOwn(object, getIteratee(iteratee2, 3));
      }
      function forOwnRight(object, iteratee2) {
        return object && baseForOwnRight(object, getIteratee(iteratee2, 3));
      }
      function functions(object) {
        return object == null ? [] : baseFunctions(object, keys(object));
      }
      function functionsIn(object) {
        return object == null ? [] : baseFunctions(object, keysIn(object));
      }
      function get(object, path, defaultValue) {
        var result2 = object == null ? undefined$1 : baseGet(object, path);
        return result2 === undefined$1 ? defaultValue : result2;
      }
      function has(object, path) {
        return object != null && hasPath(object, path, baseHas);
      }
      function hasIn(object, path) {
        return object != null && hasPath(object, path, baseHasIn);
      }
      var invert = createInverter(function(result2, value, key) {
        if (value != null && typeof value.toString != "function") {
          value = nativeObjectToString.call(value);
        }
        result2[value] = key;
      }, constant(identity));
      var invertBy = createInverter(function(result2, value, key) {
        if (value != null && typeof value.toString != "function") {
          value = nativeObjectToString.call(value);
        }
        if (hasOwnProperty2.call(result2, value)) {
          result2[value].push(key);
        } else {
          result2[value] = [key];
        }
      }, getIteratee);
      var invoke = baseRest(baseInvoke);
      function keys(object) {
        return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
      }
      function keysIn(object) {
        return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
      }
      function mapKeys(object, iteratee2) {
        var result2 = {};
        iteratee2 = getIteratee(iteratee2, 3);
        baseForOwn(object, function(value, key, object2) {
          baseAssignValue(result2, iteratee2(value, key, object2), value);
        });
        return result2;
      }
      function mapValues(object, iteratee2) {
        var result2 = {};
        iteratee2 = getIteratee(iteratee2, 3);
        baseForOwn(object, function(value, key, object2) {
          baseAssignValue(result2, key, iteratee2(value, key, object2));
        });
        return result2;
      }
      var merge = createAssigner(function(object, source, srcIndex) {
        baseMerge(object, source, srcIndex);
      });
      var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
        baseMerge(object, source, srcIndex, customizer);
      });
      var omit = flatRest(function(object, paths) {
        var result2 = {};
        if (object == null) {
          return result2;
        }
        var isDeep = false;
        paths = arrayMap(paths, function(path) {
          path = castPath(path, object);
          isDeep || (isDeep = path.length > 1);
          return path;
        });
        copyObject(object, getAllKeysIn(object), result2);
        if (isDeep) {
          result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
        }
        var length = paths.length;
        while (length--) {
          baseUnset(result2, paths[length]);
        }
        return result2;
      });
      function omitBy(object, predicate) {
        return pickBy(object, negate(getIteratee(predicate)));
      }
      var pick = flatRest(function(object, paths) {
        return object == null ? {} : basePick(object, paths);
      });
      function pickBy(object, predicate) {
        if (object == null) {
          return {};
        }
        var props = arrayMap(getAllKeysIn(object), function(prop) {
          return [prop];
        });
        predicate = getIteratee(predicate);
        return basePickBy(object, props, function(value, path) {
          return predicate(value, path[0]);
        });
      }
      function result(object, path, defaultValue) {
        path = castPath(path, object);
        var index = -1, length = path.length;
        if (!length) {
          length = 1;
          object = undefined$1;
        }
        while (++index < length) {
          var value = object == null ? undefined$1 : object[toKey(path[index])];
          if (value === undefined$1) {
            index = length;
            value = defaultValue;
          }
          object = isFunction(value) ? value.call(object) : value;
        }
        return object;
      }
      function set(object, path, value) {
        return object == null ? object : baseSet(object, path, value);
      }
      function setWith(object, path, value, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return object == null ? object : baseSet(object, path, value, customizer);
      }
      var toPairs = createToPairs(keys);
      var toPairsIn = createToPairs(keysIn);
      function transform(object, iteratee2, accumulator) {
        var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
        iteratee2 = getIteratee(iteratee2, 4);
        if (accumulator == null) {
          var Ctor = object && object.constructor;
          if (isArrLike) {
            accumulator = isArr ? new Ctor() : [];
          } else if (isObject(object)) {
            accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
          } else {
            accumulator = {};
          }
        }
        (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object2) {
          return iteratee2(accumulator, value, index, object2);
        });
        return accumulator;
      }
      function unset(object, path) {
        return object == null ? true : baseUnset(object, path);
      }
      function update(object, path, updater) {
        return object == null ? object : baseUpdate(object, path, castFunction(updater));
      }
      function updateWith(object, path, updater, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
      }
      function values(object) {
        return object == null ? [] : baseValues(object, keys(object));
      }
      function valuesIn(object) {
        return object == null ? [] : baseValues(object, keysIn(object));
      }
      function clamp(number, lower, upper) {
        if (upper === undefined$1) {
          upper = lower;
          lower = undefined$1;
        }
        if (upper !== undefined$1) {
          upper = toNumber(upper);
          upper = upper === upper ? upper : 0;
        }
        if (lower !== undefined$1) {
          lower = toNumber(lower);
          lower = lower === lower ? lower : 0;
        }
        return baseClamp(toNumber(number), lower, upper);
      }
      function inRange(number, start, end) {
        start = toFinite(start);
        if (end === undefined$1) {
          end = start;
          start = 0;
        } else {
          end = toFinite(end);
        }
        number = toNumber(number);
        return baseInRange(number, start, end);
      }
      function random(lower, upper, floating) {
        if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
          upper = floating = undefined$1;
        }
        if (floating === undefined$1) {
          if (typeof upper == "boolean") {
            floating = upper;
            upper = undefined$1;
          } else if (typeof lower == "boolean") {
            floating = lower;
            lower = undefined$1;
          }
        }
        if (lower === undefined$1 && upper === undefined$1) {
          lower = 0;
          upper = 1;
        } else {
          lower = toFinite(lower);
          if (upper === undefined$1) {
            upper = lower;
            lower = 0;
          } else {
            upper = toFinite(upper);
          }
        }
        if (lower > upper) {
          var temp = lower;
          lower = upper;
          upper = temp;
        }
        if (floating || lower % 1 || upper % 1) {
          var rand = nativeRandom();
          return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
        }
        return baseRandom(lower, upper);
      }
      var camelCase2 = createCompounder(function(result2, word, index) {
        word = word.toLowerCase();
        return result2 + (index ? capitalize(word) : word);
      });
      function capitalize(string) {
        return upperFirst(toString(string).toLowerCase());
      }
      function deburr(string) {
        string = toString(string);
        return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
      }
      function endsWith(string, target, position) {
        string = toString(string);
        target = baseToString(target);
        var length = string.length;
        position = position === undefined$1 ? length : baseClamp(toInteger(position), 0, length);
        var end = position;
        position -= target.length;
        return position >= 0 && string.slice(position, end) == target;
      }
      function escape(string) {
        string = toString(string);
        return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
      }
      function escapeRegExp(string) {
        string = toString(string);
        return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
      }
      var kebabCase = createCompounder(function(result2, word, index) {
        return result2 + (index ? "-" : "") + word.toLowerCase();
      });
      var lowerCase = createCompounder(function(result2, word, index) {
        return result2 + (index ? " " : "") + word.toLowerCase();
      });
      var lowerFirst = createCaseFirst("toLowerCase");
      function pad(string, length, chars) {
        string = toString(string);
        length = toInteger(length);
        var strLength = length ? stringSize(string) : 0;
        if (!length || strLength >= length) {
          return string;
        }
        var mid = (length - strLength) / 2;
        return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
      }
      function padEnd(string, length, chars) {
        string = toString(string);
        length = toInteger(length);
        var strLength = length ? stringSize(string) : 0;
        return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
      }
      function padStart(string, length, chars) {
        string = toString(string);
        length = toInteger(length);
        var strLength = length ? stringSize(string) : 0;
        return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
      }
      function parseInt2(string, radix, guard) {
        if (guard || radix == null) {
          radix = 0;
        } else if (radix) {
          radix = +radix;
        }
        return nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);
      }
      function repeat(string, n, guard) {
        if (guard ? isIterateeCall(string, n, guard) : n === undefined$1) {
          n = 1;
        } else {
          n = toInteger(n);
        }
        return baseRepeat(toString(string), n);
      }
      function replace() {
        var args = arguments, string = toString(args[0]);
        return args.length < 3 ? string : string.replace(args[1], args[2]);
      }
      var snakeCase = createCompounder(function(result2, word, index) {
        return result2 + (index ? "_" : "") + word.toLowerCase();
      });
      function split(string, separator, limit) {
        if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) {
          separator = limit = undefined$1;
        }
        limit = limit === undefined$1 ? MAX_ARRAY_LENGTH : limit >>> 0;
        if (!limit) {
          return [];
        }
        string = toString(string);
        if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
          separator = baseToString(separator);
          if (!separator && hasUnicode(string)) {
            return castSlice(stringToArray(string), 0, limit);
          }
        }
        return string.split(separator, limit);
      }
      var startCase = createCompounder(function(result2, word, index) {
        return result2 + (index ? " " : "") + upperFirst(word);
      });
      function startsWith(string, target, position) {
        string = toString(string);
        position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
        target = baseToString(target);
        return string.slice(position, position + target.length) == target;
      }
      function template(string, options, guard) {
        var settings = lodash2.templateSettings;
        if (guard && isIterateeCall(string, options, guard)) {
          options = undefined$1;
        }
        string = toString(string);
        options = assignInWith({}, options, settings, customDefaultsAssignIn);
        var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
        var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
        var reDelimiters = RegExp2(
          (options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$",
          "g"
        );
        var sourceURL = "//# sourceURL=" + (hasOwnProperty2.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
        string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
          interpolateValue || (interpolateValue = esTemplateValue);
          source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
          if (escapeValue) {
            isEscaping = true;
            source += "' +\n__e(" + escapeValue + ") +\n'";
          }
          if (evaluateValue) {
            isEvaluating = true;
            source += "';\n" + evaluateValue + ";\n__p += '";
          }
          if (interpolateValue) {
            source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
          }
          index = offset + match.length;
          return match;
        });
        source += "';\n";
        var variable = hasOwnProperty2.call(options, "variable") && options.variable;
        if (!variable) {
          source = "with (obj) {\n" + source + "\n}\n";
        } else if (reForbiddenIdentifierChars.test(variable)) {
          throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT);
        }
        source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
        source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
        var result2 = attempt(function() {
          return Function2(importsKeys, sourceURL + "return " + source).apply(undefined$1, importsValues);
        });
        result2.source = source;
        if (isError(result2)) {
          throw result2;
        }
        return result2;
      }
      function toLower(value) {
        return toString(value).toLowerCase();
      }
      function toUpper(value) {
        return toString(value).toUpperCase();
      }
      function trim(string, chars, guard) {
        string = toString(string);
        if (string && (guard || chars === undefined$1)) {
          return baseTrim(string);
        }
        if (!string || !(chars = baseToString(chars))) {
          return string;
        }
        var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
        return castSlice(strSymbols, start, end).join("");
      }
      function trimEnd(string, chars, guard) {
        string = toString(string);
        if (string && (guard || chars === undefined$1)) {
          return string.slice(0, trimmedEndIndex(string) + 1);
        }
        if (!string || !(chars = baseToString(chars))) {
          return string;
        }
        var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
        return castSlice(strSymbols, 0, end).join("");
      }
      function trimStart(string, chars, guard) {
        string = toString(string);
        if (string && (guard || chars === undefined$1)) {
          return string.replace(reTrimStart, "");
        }
        if (!string || !(chars = baseToString(chars))) {
          return string;
        }
        var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
        return castSlice(strSymbols, start).join("");
      }
      function truncate(string, options) {
        var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
        if (isObject(options)) {
          var separator = "separator" in options ? options.separator : separator;
          length = "length" in options ? toInteger(options.length) : length;
          omission = "omission" in options ? baseToString(options.omission) : omission;
        }
        string = toString(string);
        var strLength = string.length;
        if (hasUnicode(string)) {
          var strSymbols = stringToArray(string);
          strLength = strSymbols.length;
        }
        if (length >= strLength) {
          return string;
        }
        var end = length - stringSize(omission);
        if (end < 1) {
          return omission;
        }
        var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
        if (separator === undefined$1) {
          return result2 + omission;
        }
        if (strSymbols) {
          end += result2.length - end;
        }
        if (isRegExp(separator)) {
          if (string.slice(end).search(separator)) {
            var match, substring = result2;
            if (!separator.global) {
              separator = RegExp2(separator.source, toString(reFlags.exec(separator)) + "g");
            }
            separator.lastIndex = 0;
            while (match = separator.exec(substring)) {
              var newEnd = match.index;
            }
            result2 = result2.slice(0, newEnd === undefined$1 ? end : newEnd);
          }
        } else if (string.indexOf(baseToString(separator), end) != end) {
          var index = result2.lastIndexOf(separator);
          if (index > -1) {
            result2 = result2.slice(0, index);
          }
        }
        return result2 + omission;
      }
      function unescape2(string) {
        string = toString(string);
        return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
      }
      var upperCase = createCompounder(function(result2, word, index) {
        return result2 + (index ? " " : "") + word.toUpperCase();
      });
      var upperFirst = createCaseFirst("toUpperCase");
      function words(string, pattern, guard) {
        string = toString(string);
        pattern = guard ? undefined$1 : pattern;
        if (pattern === undefined$1) {
          return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
        }
        return string.match(pattern) || [];
      }
      var attempt = baseRest(function(func, args) {
        try {
          return apply(func, undefined$1, args);
        } catch (e) {
          return isError(e) ? e : new Error2(e);
        }
      });
      var bindAll = flatRest(function(object, methodNames) {
        arrayEach(methodNames, function(key) {
          key = toKey(key);
          baseAssignValue(object, key, bind(object[key], object));
        });
        return object;
      });
      function cond(pairs) {
        var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
        pairs = !length ? [] : arrayMap(pairs, function(pair) {
          if (typeof pair[1] != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          return [toIteratee(pair[0]), pair[1]];
        });
        return baseRest(function(args) {
          var index = -1;
          while (++index < length) {
            var pair = pairs[index];
            if (apply(pair[0], this, args)) {
              return apply(pair[1], this, args);
            }
          }
        });
      }
      function conforms(source) {
        return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
      }
      function constant(value) {
        return function() {
          return value;
        };
      }
      function defaultTo(value, defaultValue) {
        return value == null || value !== value ? defaultValue : value;
      }
      var flow = createFlow();
      var flowRight = createFlow(true);
      function identity(value) {
        return value;
      }
      function iteratee(func) {
        return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
      }
      function matches(source) {
        return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
      }
      function matchesProperty(path, srcValue) {
        return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
      }
      var method = baseRest(function(path, args) {
        return function(object) {
          return baseInvoke(object, path, args);
        };
      });
      var methodOf = baseRest(function(object, args) {
        return function(path) {
          return baseInvoke(object, path, args);
        };
      });
      function mixin(object, source, options) {
        var props = keys(source), methodNames = baseFunctions(source, props);
        if (options == null && !(isObject(source) && (methodNames.length || !props.length))) {
          options = source;
          source = object;
          object = this;
          methodNames = baseFunctions(source, keys(source));
        }
        var chain2 = !(isObject(options) && "chain" in options) || !!options.chain, isFunc = isFunction(object);
        arrayEach(methodNames, function(methodName) {
          var func = source[methodName];
          object[methodName] = func;
          if (isFunc) {
            object.prototype[methodName] = function() {
              var chainAll = this.__chain__;
              if (chain2 || chainAll) {
                var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                actions.push({ "func": func, "args": arguments, "thisArg": object });
                result2.__chain__ = chainAll;
                return result2;
              }
              return func.apply(object, arrayPush([this.value()], arguments));
            };
          }
        });
        return object;
      }
      function noConflict() {
        if (root._ === this) {
          root._ = oldDash;
        }
        return this;
      }
      function noop() {
      }
      function nthArg(n) {
        n = toInteger(n);
        return baseRest(function(args) {
          return baseNth(args, n);
        });
      }
      var over = createOver(arrayMap);
      var overEvery = createOver(arrayEvery);
      var overSome = createOver(arraySome);
      function property(path) {
        return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
      }
      function propertyOf(object) {
        return function(path) {
          return object == null ? undefined$1 : baseGet(object, path);
        };
      }
      var range = createRange();
      var rangeRight = createRange(true);
      function stubArray() {
        return [];
      }
      function stubFalse() {
        return false;
      }
      function stubObject() {
        return {};
      }
      function stubString() {
        return "";
      }
      function stubTrue() {
        return true;
      }
      function times(n, iteratee2) {
        n = toInteger(n);
        if (n < 1 || n > MAX_SAFE_INTEGER) {
          return [];
        }
        var index = MAX_ARRAY_LENGTH, length = nativeMin(n, MAX_ARRAY_LENGTH);
        iteratee2 = getIteratee(iteratee2);
        n -= MAX_ARRAY_LENGTH;
        var result2 = baseTimes(length, iteratee2);
        while (++index < n) {
          iteratee2(index);
        }
        return result2;
      }
      function toPath(value) {
        if (isArray(value)) {
          return arrayMap(value, toKey);
        }
        return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
      }
      function uniqueId(prefix) {
        var id = ++idCounter;
        return toString(prefix) + id;
      }
      var add = createMathOperation(function(augend, addend) {
        return augend + addend;
      }, 0);
      var ceil = createRound("ceil");
      var divide = createMathOperation(function(dividend, divisor) {
        return dividend / divisor;
      }, 1);
      var floor = createRound("floor");
      function max(array) {
        return array && array.length ? baseExtremum(array, identity, baseGt) : undefined$1;
      }
      function maxBy(array, iteratee2) {
        return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseGt) : undefined$1;
      }
      function mean(array) {
        return baseMean(array, identity);
      }
      function meanBy(array, iteratee2) {
        return baseMean(array, getIteratee(iteratee2, 2));
      }
      function min(array) {
        return array && array.length ? baseExtremum(array, identity, baseLt) : undefined$1;
      }
      function minBy(array, iteratee2) {
        return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseLt) : undefined$1;
      }
      var multiply = createMathOperation(function(multiplier, multiplicand) {
        return multiplier * multiplicand;
      }, 1);
      var round = createRound("round");
      var subtract = createMathOperation(function(minuend, subtrahend) {
        return minuend - subtrahend;
      }, 0);
      function sum(array) {
        return array && array.length ? baseSum(array, identity) : 0;
      }
      function sumBy(array, iteratee2) {
        return array && array.length ? baseSum(array, getIteratee(iteratee2, 2)) : 0;
      }
      lodash2.after = after;
      lodash2.ary = ary;
      lodash2.assign = assign;
      lodash2.assignIn = assignIn;
      lodash2.assignInWith = assignInWith;
      lodash2.assignWith = assignWith;
      lodash2.at = at;
      lodash2.before = before;
      lodash2.bind = bind;
      lodash2.bindAll = bindAll;
      lodash2.bindKey = bindKey;
      lodash2.castArray = castArray;
      lodash2.chain = chain;
      lodash2.chunk = chunk;
      lodash2.compact = compact;
      lodash2.concat = concat;
      lodash2.cond = cond;
      lodash2.conforms = conforms;
      lodash2.constant = constant;
      lodash2.countBy = countBy;
      lodash2.create = create;
      lodash2.curry = curry;
      lodash2.curryRight = curryRight;
      lodash2.debounce = debounce;
      lodash2.defaults = defaults;
      lodash2.defaultsDeep = defaultsDeep;
      lodash2.defer = defer;
      lodash2.delay = delay;
      lodash2.difference = difference;
      lodash2.differenceBy = differenceBy;
      lodash2.differenceWith = differenceWith;
      lodash2.drop = drop;
      lodash2.dropRight = dropRight;
      lodash2.dropRightWhile = dropRightWhile;
      lodash2.dropWhile = dropWhile;
      lodash2.fill = fill;
      lodash2.filter = filter;
      lodash2.flatMap = flatMap;
      lodash2.flatMapDeep = flatMapDeep;
      lodash2.flatMapDepth = flatMapDepth;
      lodash2.flatten = flatten;
      lodash2.flattenDeep = flattenDeep;
      lodash2.flattenDepth = flattenDepth;
      lodash2.flip = flip;
      lodash2.flow = flow;
      lodash2.flowRight = flowRight;
      lodash2.fromPairs = fromPairs;
      lodash2.functions = functions;
      lodash2.functionsIn = functionsIn;
      lodash2.groupBy = groupBy;
      lodash2.initial = initial;
      lodash2.intersection = intersection;
      lodash2.intersectionBy = intersectionBy;
      lodash2.intersectionWith = intersectionWith;
      lodash2.invert = invert;
      lodash2.invertBy = invertBy;
      lodash2.invokeMap = invokeMap;
      lodash2.iteratee = iteratee;
      lodash2.keyBy = keyBy;
      lodash2.keys = keys;
      lodash2.keysIn = keysIn;
      lodash2.map = map;
      lodash2.mapKeys = mapKeys;
      lodash2.mapValues = mapValues;
      lodash2.matches = matches;
      lodash2.matchesProperty = matchesProperty;
      lodash2.memoize = memoize;
      lodash2.merge = merge;
      lodash2.mergeWith = mergeWith;
      lodash2.method = method;
      lodash2.methodOf = methodOf;
      lodash2.mixin = mixin;
      lodash2.negate = negate;
      lodash2.nthArg = nthArg;
      lodash2.omit = omit;
      lodash2.omitBy = omitBy;
      lodash2.once = once;
      lodash2.orderBy = orderBy;
      lodash2.over = over;
      lodash2.overArgs = overArgs;
      lodash2.overEvery = overEvery;
      lodash2.overSome = overSome;
      lodash2.partial = partial;
      lodash2.partialRight = partialRight;
      lodash2.partition = partition;
      lodash2.pick = pick;
      lodash2.pickBy = pickBy;
      lodash2.property = property;
      lodash2.propertyOf = propertyOf;
      lodash2.pull = pull;
      lodash2.pullAll = pullAll;
      lodash2.pullAllBy = pullAllBy;
      lodash2.pullAllWith = pullAllWith;
      lodash2.pullAt = pullAt;
      lodash2.range = range;
      lodash2.rangeRight = rangeRight;
      lodash2.rearg = rearg;
      lodash2.reject = reject;
      lodash2.remove = remove;
      lodash2.rest = rest;
      lodash2.reverse = reverse;
      lodash2.sampleSize = sampleSize;
      lodash2.set = set;
      lodash2.setWith = setWith;
      lodash2.shuffle = shuffle;
      lodash2.slice = slice;
      lodash2.sortBy = sortBy;
      lodash2.sortedUniq = sortedUniq;
      lodash2.sortedUniqBy = sortedUniqBy;
      lodash2.split = split;
      lodash2.spread = spread;
      lodash2.tail = tail;
      lodash2.take = take;
      lodash2.takeRight = takeRight;
      lodash2.takeRightWhile = takeRightWhile;
      lodash2.takeWhile = takeWhile;
      lodash2.tap = tap;
      lodash2.throttle = throttle;
      lodash2.thru = thru;
      lodash2.toArray = toArray;
      lodash2.toPairs = toPairs;
      lodash2.toPairsIn = toPairsIn;
      lodash2.toPath = toPath;
      lodash2.toPlainObject = toPlainObject;
      lodash2.transform = transform;
      lodash2.unary = unary;
      lodash2.union = union;
      lodash2.unionBy = unionBy;
      lodash2.unionWith = unionWith;
      lodash2.uniq = uniq;
      lodash2.uniqBy = uniqBy;
      lodash2.uniqWith = uniqWith;
      lodash2.unset = unset;
      lodash2.unzip = unzip;
      lodash2.unzipWith = unzipWith;
      lodash2.update = update;
      lodash2.updateWith = updateWith;
      lodash2.values = values;
      lodash2.valuesIn = valuesIn;
      lodash2.without = without;
      lodash2.words = words;
      lodash2.wrap = wrap;
      lodash2.xor = xor;
      lodash2.xorBy = xorBy;
      lodash2.xorWith = xorWith;
      lodash2.zip = zip;
      lodash2.zipObject = zipObject;
      lodash2.zipObjectDeep = zipObjectDeep;
      lodash2.zipWith = zipWith;
      lodash2.entries = toPairs;
      lodash2.entriesIn = toPairsIn;
      lodash2.extend = assignIn;
      lodash2.extendWith = assignInWith;
      mixin(lodash2, lodash2);
      lodash2.add = add;
      lodash2.attempt = attempt;
      lodash2.camelCase = camelCase2;
      lodash2.capitalize = capitalize;
      lodash2.ceil = ceil;
      lodash2.clamp = clamp;
      lodash2.clone = clone;
      lodash2.cloneDeep = cloneDeep;
      lodash2.cloneDeepWith = cloneDeepWith;
      lodash2.cloneWith = cloneWith;
      lodash2.conformsTo = conformsTo;
      lodash2.deburr = deburr;
      lodash2.defaultTo = defaultTo;
      lodash2.divide = divide;
      lodash2.endsWith = endsWith;
      lodash2.eq = eq;
      lodash2.escape = escape;
      lodash2.escapeRegExp = escapeRegExp;
      lodash2.every = every;
      lodash2.find = find;
      lodash2.findIndex = findIndex;
      lodash2.findKey = findKey;
      lodash2.findLast = findLast;
      lodash2.findLastIndex = findLastIndex;
      lodash2.findLastKey = findLastKey;
      lodash2.floor = floor;
      lodash2.forEach = forEach;
      lodash2.forEachRight = forEachRight;
      lodash2.forIn = forIn;
      lodash2.forInRight = forInRight;
      lodash2.forOwn = forOwn;
      lodash2.forOwnRight = forOwnRight;
      lodash2.get = get;
      lodash2.gt = gt;
      lodash2.gte = gte;
      lodash2.has = has;
      lodash2.hasIn = hasIn;
      lodash2.head = head;
      lodash2.identity = identity;
      lodash2.includes = includes;
      lodash2.indexOf = indexOf;
      lodash2.inRange = inRange;
      lodash2.invoke = invoke;
      lodash2.isArguments = isArguments;
      lodash2.isArray = isArray;
      lodash2.isArrayBuffer = isArrayBuffer;
      lodash2.isArrayLike = isArrayLike;
      lodash2.isArrayLikeObject = isArrayLikeObject;
      lodash2.isBoolean = isBoolean;
      lodash2.isBuffer = isBuffer;
      lodash2.isDate = isDate;
      lodash2.isElement = isElement;
      lodash2.isEmpty = isEmpty;
      lodash2.isEqual = isEqual;
      lodash2.isEqualWith = isEqualWith;
      lodash2.isError = isError;
      lodash2.isFinite = isFinite2;
      lodash2.isFunction = isFunction;
      lodash2.isInteger = isInteger;
      lodash2.isLength = isLength;
      lodash2.isMap = isMap;
      lodash2.isMatch = isMatch;
      lodash2.isMatchWith = isMatchWith;
      lodash2.isNaN = isNaN;
      lodash2.isNative = isNative;
      lodash2.isNil = isNil;
      lodash2.isNull = isNull;
      lodash2.isNumber = isNumber;
      lodash2.isObject = isObject;
      lodash2.isObjectLike = isObjectLike;
      lodash2.isPlainObject = isPlainObject;
      lodash2.isRegExp = isRegExp;
      lodash2.isSafeInteger = isSafeInteger;
      lodash2.isSet = isSet;
      lodash2.isString = isString;
      lodash2.isSymbol = isSymbol;
      lodash2.isTypedArray = isTypedArray;
      lodash2.isUndefined = isUndefined;
      lodash2.isWeakMap = isWeakMap;
      lodash2.isWeakSet = isWeakSet;
      lodash2.join = join;
      lodash2.kebabCase = kebabCase;
      lodash2.last = last;
      lodash2.lastIndexOf = lastIndexOf;
      lodash2.lowerCase = lowerCase;
      lodash2.lowerFirst = lowerFirst;
      lodash2.lt = lt;
      lodash2.lte = lte;
      lodash2.max = max;
      lodash2.maxBy = maxBy;
      lodash2.mean = mean;
      lodash2.meanBy = meanBy;
      lodash2.min = min;
      lodash2.minBy = minBy;
      lodash2.stubArray = stubArray;
      lodash2.stubFalse = stubFalse;
      lodash2.stubObject = stubObject;
      lodash2.stubString = stubString;
      lodash2.stubTrue = stubTrue;
      lodash2.multiply = multiply;
      lodash2.nth = nth;
      lodash2.noConflict = noConflict;
      lodash2.noop = noop;
      lodash2.now = now;
      lodash2.pad = pad;
      lodash2.padEnd = padEnd;
      lodash2.padStart = padStart;
      lodash2.parseInt = parseInt2;
      lodash2.random = random;
      lodash2.reduce = reduce;
      lodash2.reduceRight = reduceRight;
      lodash2.repeat = repeat;
      lodash2.replace = replace;
      lodash2.result = result;
      lodash2.round = round;
      lodash2.runInContext = runInContext2;
      lodash2.sample = sample;
      lodash2.size = size;
      lodash2.snakeCase = snakeCase;
      lodash2.some = some;
      lodash2.sortedIndex = sortedIndex;
      lodash2.sortedIndexBy = sortedIndexBy;
      lodash2.sortedIndexOf = sortedIndexOf;
      lodash2.sortedLastIndex = sortedLastIndex;
      lodash2.sortedLastIndexBy = sortedLastIndexBy;
      lodash2.sortedLastIndexOf = sortedLastIndexOf;
      lodash2.startCase = startCase;
      lodash2.startsWith = startsWith;
      lodash2.subtract = subtract;
      lodash2.sum = sum;
      lodash2.sumBy = sumBy;
      lodash2.template = template;
      lodash2.times = times;
      lodash2.toFinite = toFinite;
      lodash2.toInteger = toInteger;
      lodash2.toLength = toLength;
      lodash2.toLower = toLower;
      lodash2.toNumber = toNumber;
      lodash2.toSafeInteger = toSafeInteger;
      lodash2.toString = toString;
      lodash2.toUpper = toUpper;
      lodash2.trim = trim;
      lodash2.trimEnd = trimEnd;
      lodash2.trimStart = trimStart;
      lodash2.truncate = truncate;
      lodash2.unescape = unescape2;
      lodash2.uniqueId = uniqueId;
      lodash2.upperCase = upperCase;
      lodash2.upperFirst = upperFirst;
      lodash2.each = forEach;
      lodash2.eachRight = forEachRight;
      lodash2.first = head;
      mixin(lodash2, function() {
        var source = {};
        baseForOwn(lodash2, function(func, methodName) {
          if (!hasOwnProperty2.call(lodash2.prototype, methodName)) {
            source[methodName] = func;
          }
        });
        return source;
      }(), { "chain": false });
      lodash2.VERSION = VERSION;
      arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
        lodash2[methodName].placeholder = lodash2;
      });
      arrayEach(["drop", "take"], function(methodName, index) {
        LazyWrapper.prototype[methodName] = function(n) {
          n = n === undefined$1 ? 1 : nativeMax(toInteger(n), 0);
          var result2 = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
          if (result2.__filtered__) {
            result2.__takeCount__ = nativeMin(n, result2.__takeCount__);
          } else {
            result2.__views__.push({
              "size": nativeMin(n, MAX_ARRAY_LENGTH),
              "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
            });
          }
          return result2;
        };
        LazyWrapper.prototype[methodName + "Right"] = function(n) {
          return this.reverse()[methodName](n).reverse();
        };
      });
      arrayEach(["filter", "map", "takeWhile"], function(methodName, index) {
        var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
        LazyWrapper.prototype[methodName] = function(iteratee2) {
          var result2 = this.clone();
          result2.__iteratees__.push({
            "iteratee": getIteratee(iteratee2, 3),
            "type": type
          });
          result2.__filtered__ = result2.__filtered__ || isFilter;
          return result2;
        };
      });
      arrayEach(["head", "last"], function(methodName, index) {
        var takeName = "take" + (index ? "Right" : "");
        LazyWrapper.prototype[methodName] = function() {
          return this[takeName](1).value()[0];
        };
      });
      arrayEach(["initial", "tail"], function(methodName, index) {
        var dropName = "drop" + (index ? "" : "Right");
        LazyWrapper.prototype[methodName] = function() {
          return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
        };
      });
      LazyWrapper.prototype.compact = function() {
        return this.filter(identity);
      };
      LazyWrapper.prototype.find = function(predicate) {
        return this.filter(predicate).head();
      };
      LazyWrapper.prototype.findLast = function(predicate) {
        return this.reverse().find(predicate);
      };
      LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
        if (typeof path == "function") {
          return new LazyWrapper(this);
        }
        return this.map(function(value) {
          return baseInvoke(value, path, args);
        });
      });
      LazyWrapper.prototype.reject = function(predicate) {
        return this.filter(negate(getIteratee(predicate)));
      };
      LazyWrapper.prototype.slice = function(start, end) {
        start = toInteger(start);
        var result2 = this;
        if (result2.__filtered__ && (start > 0 || end < 0)) {
          return new LazyWrapper(result2);
        }
        if (start < 0) {
          result2 = result2.takeRight(-start);
        } else if (start) {
          result2 = result2.drop(start);
        }
        if (end !== undefined$1) {
          end = toInteger(end);
          result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
        }
        return result2;
      };
      LazyWrapper.prototype.takeRightWhile = function(predicate) {
        return this.reverse().takeWhile(predicate).reverse();
      };
      LazyWrapper.prototype.toArray = function() {
        return this.take(MAX_ARRAY_LENGTH);
      };
      baseForOwn(LazyWrapper.prototype, function(func, methodName) {
        var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash2[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
        if (!lodashFunc) {
          return;
        }
        lodash2.prototype[methodName] = function() {
          var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray(value);
          var interceptor = function(value2) {
            var result3 = lodashFunc.apply(lodash2, arrayPush([value2], args));
            return isTaker && chainAll ? result3[0] : result3;
          };
          if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
            isLazy = useLazy = false;
          }
          var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
          if (!retUnwrapped && useLazy) {
            value = onlyLazy ? value : new LazyWrapper(this);
            var result2 = func.apply(value, args);
            result2.__actions__.push({ "func": thru, "args": [interceptor], "thisArg": undefined$1 });
            return new LodashWrapper(result2, chainAll);
          }
          if (isUnwrapped && onlyLazy) {
            return func.apply(this, args);
          }
          result2 = this.thru(interceptor);
          return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
        };
      });
      arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
        var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
        lodash2.prototype[methodName] = function() {
          var args = arguments;
          if (retUnwrapped && !this.__chain__) {
            var value = this.value();
            return func.apply(isArray(value) ? value : [], args);
          }
          return this[chainName](function(value2) {
            return func.apply(isArray(value2) ? value2 : [], args);
          });
        };
      });
      baseForOwn(LazyWrapper.prototype, function(func, methodName) {
        var lodashFunc = lodash2[methodName];
        if (lodashFunc) {
          var key = lodashFunc.name + "";
          if (!hasOwnProperty2.call(realNames, key)) {
            realNames[key] = [];
          }
          realNames[key].push({ "name": methodName, "func": lodashFunc });
        }
      });
      realNames[createHybrid(undefined$1, WRAP_BIND_KEY_FLAG).name] = [{
        "name": "wrapper",
        "func": undefined$1
      }];
      LazyWrapper.prototype.clone = lazyClone;
      LazyWrapper.prototype.reverse = lazyReverse;
      LazyWrapper.prototype.value = lazyValue;
      lodash2.prototype.at = wrapperAt;
      lodash2.prototype.chain = wrapperChain;
      lodash2.prototype.commit = wrapperCommit;
      lodash2.prototype.next = wrapperNext;
      lodash2.prototype.plant = wrapperPlant;
      lodash2.prototype.reverse = wrapperReverse;
      lodash2.prototype.toJSON = lodash2.prototype.valueOf = lodash2.prototype.value = wrapperValue;
      lodash2.prototype.first = lodash2.prototype.head;
      if (symIterator) {
        lodash2.prototype[symIterator] = wrapperToIterator;
      }
      return lodash2;
    };
    var _2 = runInContext();
    if (freeModule) {
      (freeModule.exports = _2)._ = _2;
      freeExports._ = _2;
    } else {
      root._ = _2;
    }
  }).call(commonjsGlobal);
})(lodash, lodash.exports);
var lodashExports = lodash.exports;
var _ = /* @__PURE__ */ getDefaultExportFromCjs(lodashExports);
const COLOR_PREFIXES = [
  "focus-within",
  "hover",
  "focus",
  "hocus",
  ""
];
const cyColors = {
  jade: {
    50: "#E4FBF2",
    100: "#C2F1DE",
    200: "#A3E7CB",
    300: "#69D3A7",
    400: "#1FA971",
    500: "#00814D",
    600: "#005F39",
    700: "#00442A",
    800: "#003220",
    900: "#00291B",
    1e3: "#00261A"
  },
  red: {
    50: "#FBEFF1",
    100: "#FAD9DF",
    200: "#F8C4CD",
    300: "#F59AA9",
    400: "#E45770",
    500: "#C62B49",
    600: "#9F1331",
    700: "#7A0723",
    800: "#5E021B",
    900: "#4F0018",
    1e3: "#490018"
  },
  orange: {
    50: "#F5F4D7",
    100: "#F3ECB3",
    200: "#F1E08F",
    300: "#EDBB4A",
    400: "#DB7903",
    500: "#BD5800",
    600: "#963F00",
    700: "#702C00",
    800: "#521F00",
    900: "#411800",
    1e3: "#391500"
  },
  indigo: {
    50: "#F0F1FF",
    100: "#DADDFE",
    200: "#C5C9FD",
    300: "#9AA2FC",
    400: "#6470F3",
    500: "#4956E3",
    600: "#3A46CC",
    700: "#2F3AB0",
    800: "#252E8F",
    900: "#1C236D",
    1e3: "#151A50"
  },
  gray: {
    50: "#F3F4FA",
    100: "#E1E3ED",
    200: "#D0D2E0",
    300: "#BFC2D4",
    400: "#AFB3C7",
    500: "#9095AD",
    600: "#747994",
    700: "#5A5F7A",
    800: "#434861",
    900: "#2E3247",
    1e3: "#1B1E2E"
  },
  teal: {
    50: "#E0F6FA",
    100: "#B7E7F0",
    200: "#90D9E6",
    300: "#4BBFD2",
    400: "#0097A8",
    500: "#007780",
    600: "#00595D",
    700: "#004143",
    800: "#003131",
    900: "#002828",
    1e3: "#002525"
  },
  purple: {
    50: "#F5F0FB",
    100: "#E9DDFA",
    200: "#DECBF8",
    300: "#C8A7F5",
    400: "#A06CE4",
    500: "#7F43C9",
    600: "#632AA6",
    700: "#4B1A83",
    800: "#3B1268",
    900: "#320E58",
    1e3: "#2F0C52"
  },
  green: {
    50: "#F5F5D0",
    100: "#E7E8AB",
    200: "#DADC89",
    300: "#BDC44D",
    400: "#849706",
    500: "#5B7100",
    600: "#405500",
    700: "#2E4000",
    800: "#233200",
    900: "#1C2A00",
    1e3: "#192500"
  },
  fuchsia: {
    50: "#FAEFFB",
    100: "#F7DAF9",
    200: "#F3C6F8",
    300: "#ED9FF4",
    400: "#D65FE3",
    500: "#B735C7",
    600: "#901CA2",
    700: "#6C0F7E",
    800: "#510862",
    900: "#400651",
    1e3: "#39054A"
  },
  magenta: {
    50: "#FCEEF5",
    100: "#FADAEA",
    200: "#F9C5DF",
    300: "#F69ECA",
    400: "#E45DA3",
    500: "#C53282",
    600: "#9C1964",
    700: "#750C4D",
    800: "#59063D",
    900: "#490435",
    1e3: "#420333"
  }
};
({
  // TODO: are these actual concepts from the design system?
  primary: Object.assign(Object.assign({}, cyColors.indigo), { DEFAULT: cyColors.indigo[500] }),
  secondary: Object.assign(Object.assign({}, cyColors.indigo), { DEFAULT: cyColors.indigo[50] }),
  error: Object.assign(Object.assign({}, cyColors.red), { DEFAULT: cyColors.red[400] }),
  caution: Object.assign(Object.assign({}, cyColors.red), { DEFAULT: cyColors.red[500] }),
  info: Object.assign(Object.assign({}, cyColors.indigo), { DEFAULT: cyColors.indigo[500] }),
  warning: Object.assign(Object.assign({}, cyColors.orange), { DEFAULT: cyColors.orange[500] }),
  "warning-light": Object.assign(Object.assign({}, cyColors.orange), { DEFAULT: cyColors.orange[400] }),
  success: Object.assign(Object.assign({}, cyColors.jade), { DEFAULT: cyColors.jade[400] }),
  "success-light": Object.assign(Object.assign({}, cyColors.jade), { DEFAULT: cyColors.jade[300] }),
  confirm: Object.assign(Object.assign({}, cyColors.jade), { DEFAULT: cyColors.jade[500] }),
  "body-gray": Object.assign(Object.assign({}, cyColors.gray), { DEFAULT: cyColors.gray[600] })
});
const cyActionAddX8 = {
  name: "actionAddX8",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 1v6m3-3H1" class="icon-dark"/>`
};
const cyActionAddLargeX16 = {
  name: "actionAddLargeX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 8h6m6 0H8m0 0V2m0 6v6" class="icon-dark"/>`
};
const cyActionAddMediumX16 = {
  name: "actionAddMediumX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 3v10m5-5H3" class="icon-dark"/>`
};
const cyActionAddSmallX16 = {
  name: "actionAddSmallX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4v8m4-4H4" class="icon-dark"/>`
};
const cyActionAddXsmallX16 = {
  name: "actionAddXsmallX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5v6m3-3H5" class="icon-dark"/>`
};
const cyActionDeleteX12 = {
  name: "actionDeleteX12",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 11 11 1M1 1l10 10" class="icon-dark"/>`
};
const cyActionDeleteCircleX16 = {
  name: "actionDeleteCircleX16",
  data: `<path fill="currentColor" fill-rule="evenodd" d="M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m6-8a8 8 0 1 0 0 16A8 8 0 0 0 8 0M6.707 5.293a1 1 0 0 0-1.414 1.414L6.586 8 5.293 9.293a1 1 0 0 0 1.414 1.414L8 9.414l1.293 1.293a1 1 0 0 0 1.414-1.414L9.414 8l1.293-1.293a1 1 0 0 0-1.414-1.414L8 6.586z" class="icon-dark" clip-rule="evenodd"/>`
};
const cyActionDeleteLargeX16 = {
  name: "actionDeleteLargeX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 13 13 3M3 3l10 10" class="icon-dark"/>`
};
const cyActionDeleteLargeX24 = {
  name: "actionDeleteLargeX24",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 20 20 4M4 4l16 16" class="icon-dark"/>`
};
const cyActionDeleteMediumX16 = {
  name: "actionDeleteMediumX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8M4 4l8 8" class="icon-dark"/>`
};
const cyActionDeleteSmallX16 = {
  name: "actionDeleteSmallX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 11 6-6M5 5l6 6" class="icon-dark"/>`
};
const cyActionDeleteXlargeX16 = {
  name: "actionDeleteXlargeX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 14 14 2M2 2l12 12" class="icon-dark"/>`
};
const cyActionDeleteXsmallX16 = {
  name: "actionDeleteXsmallX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 10 4-4M6 6l4 4" class="icon-dark"/>`
};
const cyActionDisableCircleSolidX16 = {
  name: "actionDisableCircleSolidX16",
  data: `<circle cx="8" cy="8" r="8" fill="currentColor" class="icon-dark"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h8"/>`
};
const cyActionExportX16 = {
  name: "actionExportX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2m0-4V2m0 0H9m5 0L7 9" class="icon-dark"/>`
};
const cyActionNextX16 = {
  name: "actionNextX16",
  data: `<path fill="#D0D2E0" d="m12.285 8.429-8.528 5.117a.5.5 0 0 1-.757-.43V2.884a.5.5 0 0 1 .757-.429l8.528 5.117a.5.5 0 0 1 0 .858" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 2.6v10.8M3.757 2.454l8.528 5.117a.5.5 0 0 1 0 .858l-8.528 5.117a.5.5 0 0 1-.757-.43V2.884a.5.5 0 0 1 .757-.429" class="icon-dark"/>`
};
const cyActionPlayLargeX16 = {
  name: "actionPlayLargeX16",
  data: `<path fill="#D0D2E0" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12.285 8.429-8.528 5.117a.5.5 0 0 1-.757-.43V2.884a.5.5 0 0 1 .757-.429l8.528 5.117a.5.5 0 0 1 0 .858" class="icon-dark-stroke icon-light-fill"/>`
};
const cyActionPlaySmallX16 = {
  name: "actionPlaySmallX16",
  data: `<path fill="#D0D2E0" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11.322 8.424-6.557 4.098A.5.5 0 0 1 4 12.098V3.902a.5.5 0 0 1 .765-.424l6.557 4.098a.5.5 0 0 1 0 .848" class="icon-dark-stroke icon-light-fill"/>`
};
const cyActionPlayVideoX16 = {
  name: "actionPlayVideoX16",
  data: `<path fill="#D0D2E0" d="M1 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2zM11 6v4l3.379.845A.5.5 0 0 0 15 10.36V5.64a.5.5 0 0 0-.621-.485z" class="icon-light"/><path stroke="currentColor" stroke-width="2" d="M11 6V5a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2zm0 0 3.379-.845A.5.5 0 0 1 15 5.64v4.72a.5.5 0 0 1-.621.485L11 10z" class="icon-dark"/>`
};
const cyActionPlayVideoX24 = {
  name: "actionPlayVideoX24",
  data: `<path fill="#D0D2E0" d="M3 8a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM16 9v6l3.804.76A1 1 0 0 0 21 14.78V9.22a1 1 0 0 0-1.196-.98z" class="icon-light"/><path stroke="currentColor" stroke-width="2" d="M16 9V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2zm0 0 3.804-.76A1 1 0 0 1 21 9.22v5.56a1 1 0 0 1-1.196.98L16 15z" class="icon-dark"/>`
};
const cyActionPowerX16 = {
  name: "actionPowerX16",
  data: `<path fill="currentColor" d="M7 7a1 1 0 1 0 2 0zm2-6a1 1 0 0 0-2 0zM4.572 3.074a1 1 0 1 0-1.144-1.64zm8-1.64a1 1 0 0 0-1.144 1.64zM3.757 12.243a6 6 0 0 1 0-8.486L2.343 2.343a8 8 0 0 0 0 11.314zm8.486-8.486a6 6 0 0 1 0 8.486l1.414 1.414a8 8 0 0 0 0-11.314zm0 8.486a6 6 0 0 1-8.486 0l-1.414 1.414a8 8 0 0 0 11.314 0zM9 7V1H7v6zM3.757 3.757q.386-.384.815-.683l-1.144-1.64q-.574.4-1.085.91zm7.67-.683q.431.3.816.683l1.414-1.414a8 8 0 0 0-1.085-.91z" class="icon-dark"/>`
};
const cyActionQuestionMarkCircleX16 = {
  name: "actionQuestionMarkCircleX16",
  data: `<path fill="#D0D2E0" d="M13.657 13.657A8 8 0 1 1 2.343 2.343a8 8 0 0 1 11.314 11.314" class="icon-light"/><path fill="currentColor" fill-rule="evenodd" d="m1.845 2.535-.001.001A1 1 0 0 1 .146 1.48L1 2c-.854-.52-.854-.52-.853-.521v-.001l.001-.002.003-.004.005-.009.015-.023.042-.061q.05-.074.139-.179C.469 1.061.64.883.87.706A3.45 3.45 0 0 1 3 0c1.099 0 1.911.432 2.414 1.113C5.879 1.743 6 2.478 6 3c0 .63-.173 1.147-.463 1.574-.272.402-.62.68-.871.873-.608.465-.655.516-.673.67a1 1 0 0 1-1.986-.234c.125-1.061.915-1.638 1.327-1.938l.117-.087c.229-.175.352-.29.43-.405C3.944 3.363 4 3.237 4 3c0-.259-.067-.525-.195-.7C3.714 2.179 3.526 2 3 2c-.437 0-.729.152-.913.294a1.3 1.3 0 0 0-.242.241M3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2" class="icon-dark" clip-rule="evenodd" style="transform:translate(5px,2.8px)"/>`
};
const cyActionQuestionMarkDefaultX16 = {
  name: "actionQuestionMarkDefaultX16",
  data: `<path fill="currentColor" fill-rule="evenodd" d="m6.33 4.85-.007.012.001-.002.003-.004.001-.003v-.002zm-.868-.496a99 99 0 0 1-.868-.497l.001-.003.003-.004.005-.01.016-.025.046-.073q.057-.087.16-.219A3.99 3.99 0 0 1 8 2c1.344 0 2.293.561 2.865 1.388.532.77.674 1.67.674 2.32 0 .76-.187 1.38-.51 1.893-.313.495-.718.834-1.045 1.083-.118.09-.219.164-.308.23-.19.14-.326.239-.457.368-.148.144-.21.256-.235.398a1 1 0 0 1-1.968-.36c.12-.653.447-1.118.803-1.467a7 7 0 0 1 .776-.628l.177-.132c.271-.207.446-.371.565-.559.106-.17.201-.413.201-.826 0-.409-.096-.861-.318-1.182C9.04 4.264 8.718 4 8 4a1.99 1.99 0 0 0-1.677.861 1 1 0 0 1-1.73-1.003zM8 12a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0V13a1 1 0 0 1 1-1" class="icon-dark" clip-rule="evenodd"/>`
};
const cyActionQuestionMarkOutlineX16 = {
  name: "actionQuestionMarkOutlineX16",
  data: `<path fill="#E1E3ED" stroke="currentColor" stroke-width="2" d="M12.95 12.95a7 7 0 1 1-9.9-9.9 7 7 0 0 1 9.9 9.9Z" class="icon-dark-stroke icon-light-fill"/><path fill="currentColor" fill-rule="evenodd" d="m6.845 5.535-.001.001A1 1 0 0 1 5.146 4.48L6 5c-.854-.52-.854-.52-.853-.521v-.001l.001-.002.003-.004.005-.009.015-.023.042-.061q.05-.074.139-.179c.117-.139.288-.317.518-.494A3.45 3.45 0 0 1 8 3c1.099 0 1.911.432 2.414 1.113.465.63.586 1.365.586 1.887 0 .63-.173 1.147-.463 1.574-.272.402-.62.68-.871.873-.608.465-.655.516-.673.67a1 1 0 1 1-1.986-.234c.125-1.061.915-1.638 1.327-1.938l.117-.087c.229-.175.352-.29.43-.405C8.944 6.363 9 6.237 9 6c0-.259-.067-.525-.195-.7C8.714 5.179 8.526 5 8 5c-.437 0-.729.152-.913.294a1.3 1.3 0 0 0-.242.241M8 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2" class="icon-dark" clip-rule="evenodd"/>`
};
const cyActionRecordX16 = {
  name: "actionRecordX16",
  data: `<path fill="currentColor" d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" class="icon-dark"/><path fill="currentColor" fill-rule="evenodd" d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0" class="icon-dark" clip-rule="evenodd"/><path stroke="currentColor" stroke-width="2" d="M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0Zm-4 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" class="icon-dark"/>`
};
const cyActionRefreshX16 = {
  name: "actionRefreshX16",
  data: `<path fill="currentColor" d="m13 2.071-.707-.707A1 1 0 0 1 14 2.071zm0 2.572h1a1 1 0 0 1-1 1zm-2.571 0v1a1 1 0 0 1-.708-1.707zm1.17 4.321a1 1 0 0 1 1.84.786zM14 2.071v2.572h-2V2.07zM7 2a5 5 0 0 0-5 5H0a7 7 0 0 1 7-7zm4.6 3.036A5 5 0 0 0 7 2V0a7 7 0 0 1 6.439 4.25zm1.4.607h-.48v-2H13zm-.48 0h-2.091v-2h2.09zM2 7c0 1.381.559 2.63 1.464 3.536L2.05 11.95A6.98 6.98 0 0 1 0 7zm1.464 3.536A4.98 4.98 0 0 0 7 12v2a6.98 6.98 0 0 1-4.95-2.05zM7 12a5 5 0 0 0 4.6-3.036l1.839.786A7 7 0 0 1 7 14zm2.721-8.064 2.572-2.572 1.414 1.415-2.571 2.571z" class="icon-dark"/>`
};
const cyActionRestartX16 = {
  name: "actionRestartX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 8a5 5 0 1 1-5-5h3m0 0L9 5m2-2L9 1" class="icon-dark"/>`
};
const cyActionStopX16 = {
  name: "actionStopX16",
  data: `<path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 11.5v-7a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5" class="icon-dark"/>`
};
const cyActionTestReplayX16 = {
  name: "actionTestReplayX16",
  data: `<path fill="currentColor" fill-rule="evenodd" d="M3.8 3.714A6 6 0 1 1 2.083 9h.918a1 1 0 0 0 0-2H1a1 1 0 0 0-1 1 8 8 0 1 0 2.401-5.714 1 1 0 1 0 1.4 1.428m3.366 7.509 3.898-2.599a.75.75 0 0 0 0-1.248L7.166 4.777A.75.75 0 0 0 6 5.401V10.6a.75.75 0 0 0 1.166.624" class="icon-dark" clip-rule="evenodd"/>`
};
const cyArrowBottomRightX16 = {
  name: "arrowBottomRightX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0H6m6 0L4 4" class="icon-dark"/>`
};
const cyArrowCollapseX16 = {
  name: "arrowCollapseX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.5 3 8 5.5 5.5 3m0 10L8 10.5l2.5 2.5" class="icon-dark"/>`
};
const cyArrowDownX16 = {
  name: "arrowDownX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 9 4 4m0 0 4-4m-4 4V3" class="icon-dark"/>`
};
const cyArrowExpandX16 = {
  name: "arrowExpandX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.5 5.5 8 3 5.5 5.5m5 5L8 13l-2.5-2.5" class="icon-dark"/>`
};
const cyArrowLeftX16 = {
  name: "arrowLeftX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4 3 8m0 0 4 4M3 8h10" class="icon-dark"/>`
};
const cyArrowOutlineDownX16 = {
  name: "arrowOutlineDownX16",
  data: `<path fill="#D0D2E0" d="M15 8A7 7 0 1 0 1 8a7 7 0 0 0 14 0" class="icon-light"/><path fill="currentColor" d="M6.207 8.207a1 1 0 0 1-1.414-1.414zM8 5l-.707-.707a1 1 0 0 1 1.414 0zm3.207 1.793a1 1 0 0 1-1.414 1.414zM9 11a1 1 0 1 1-2 0zm5-3a6 6 0 0 0-6-6V0a8 8 0 0 1 8 8zM8 2a6 6 0 0 0-6 6H0a8 8 0 0 1 8-8zM2 8a6 6 0 0 0 6 6v2a8 8 0 0 1-8-8zm6 6a6 6 0 0 0 6-6h2a8 8 0 0 1-8 8zM4.793 6.793l2.5-2.5 1.414 1.414-2.5 2.5zm3.914-2.5 2.5 2.5-1.414 1.414-2.5-2.5zM9 5v6H7V5z" class="icon-dark"/>`
};
const cyArrowRightX16 = {
  name: "arrowRightX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 12 4-4m0 0L9 4m4 4H3" class="icon-dark"/>`
};
const cyArrowRightLargeX16 = {
  name: "arrowRightLargeX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 13 5-5m0 0-5-5m5 5H1" class="icon-dark"/>`
};
const cyArrowSquareDownX16 = {
  name: "arrowSquareDownX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 1v10m0 0 4-4m-4 4L4 7m-3 6v2h14v-2" class="icon-dark"/>`
};
const cyArrowTopRightX16 = {
  name: "arrowTopRightX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10V4m0 0H6m6 0-8 8" class="icon-dark"/>`
};
const cyArrowUpX16 = {
  name: "arrowUpX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7 8 3m0 0L4 7m4-4v10" class="icon-dark"/>`
};
const cyBrowserChromeX16 = {
  name: "browserChromeX16",
  data: `<g clip-path="url(#browser-chrome_x16_svg__a)"><path fill="#0F9D58" d="M0 8a8 8 0 0 0 8 8l3.465-6A4 4 0 0 1 8 12a4 4 0 0 1-3.468-2.005L1.07 4A7.97 7.97 0 0 0 0 8"/><path fill="#FFCD40" d="M8 16a8 8 0 0 0 6.93-12H8a4 4 0 0 1 3.468 5.995l-.003.005z"/><path fill="#DB4437" fill-rule="evenodd" d="M1.07 4A8 8 0 0 1 8 0a8 8 0 0 1 6.93 4H8a4 4 0 0 0-3.468 5.995z" clip-rule="evenodd"/><circle cx="8" cy="8" r="4" fill="#fff"/><circle cx="8" cy="8" r="3.2" fill="#4285F4"/></g><defs><clipPath id="browser-chrome_x16_svg__a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs>`
};
const cyBrowserChromeBetaX16 = {
  name: "browserChromeBetaX16",
  data: `<mask id="browser-chrome-beta_x16_svg__a" width="16" height="16" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" d="M8.009 15.42a7.412 7.412 0 1 0 0-14.824 7.412 7.412 0 0 0 0 14.825"/></mask><g mask="url(#browser-chrome-beta_x16_svg__a)"><path fill="#DB4437" d="M1.774.596v9.098H5.09L8.01 4.64h7.412V.596z"/><path fill="url(#browser-chrome-beta_x16_svg__b)" d="M1.774.596v9.098H5.09L8.01 4.64h7.412V.596z"/><path fill="#3E2723" fill-opacity=".1" d="M5.171 9.663 1.816 3.911l-.049.083 3.331 5.712z"/><path fill="#0F9D58" d="M.596 15.42h7.056l3.275-3.274V9.694H5.091L.596 1.985z"/><path fill="url(#browser-chrome-beta_x16_svg__c)" d="M.596 15.42h7.056l3.275-3.274V9.694H5.091L.596 1.985z"/><path fill="#263238" fill-opacity=".1" d="m10.86 9.804-.07-.039-3.235 5.656h.097l3.209-5.613z"/><mask id="browser-chrome-beta_x16_svg__d" width="11" height="15" x="0" y="1" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" d="M.596 15.42h7.056l3.275-3.274V9.694H5.091L.596 1.985z"/></mask><g mask="url(#browser-chrome-beta_x16_svg__d)"><path fill="#FFCD40" d="m8.009 4.64 2.918 5.054-3.275 5.727h7.769V4.64z"/><path fill="url(#browser-chrome-beta_x16_svg__e)" d="m8.009 4.64 2.918 5.054-3.275 5.727h7.769V4.64z"/></g><path fill="#FFCD40" d="m8.009 4.64 2.918 5.054-3.275 5.727h7.769V4.64z"/><path fill="url(#browser-chrome-beta_x16_svg__f)" d="m8.009 4.64 2.918 5.054-3.275 5.727h7.769V4.64z"/><mask id="browser-chrome-beta_x16_svg__g" width="9" height="12" x="7" y="4" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" d="m8.009 4.64 2.918 5.054-3.275 5.727h7.769V4.64z"/></mask><g mask="url(#browser-chrome-beta_x16_svg__g)"><path fill="#DB4437" d="M1.774.596v9.098H5.09L8.01 4.64h7.412V.596z"/><path fill="url(#browser-chrome-beta_x16_svg__h)" d="M1.774.596v9.098H5.09L8.01 4.64h7.412V.596z"/></g><path fill="url(#browser-chrome-beta_x16_svg__i)" d="M8.009 4.64v1.763L14.61 4.64z"/><mask id="browser-chrome-beta_x16_svg__j" width="15" height="10" x="1" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" d="M1.774.596v3.398l3.317 5.7L8.01 4.64h7.412V.596z"/></mask><g mask="url(#browser-chrome-beta_x16_svg__j)"><path fill="#0F9D58" d="M.596 15.42h7.056l3.275-3.274V9.694H5.091L.596 1.985z"/><path fill="url(#browser-chrome-beta_x16_svg__k)" d="M.596 15.42h7.056l3.275-3.274V9.694H5.091L.596 1.985z"/></g><path fill="url(#browser-chrome-beta_x16_svg__l)" d="m1.774 4.004 4.82 4.82-1.503.87z"/><path fill="url(#browser-chrome-beta_x16_svg__m)" d="m7.658 15.412 1.765-6.587 1.504.869z"/><path fill="#F1F1F1" d="M8.009 11.377a3.369 3.369 0 1 0 0-6.737 3.369 3.369 0 0 0 0 6.737"/><path fill="#4285F4" d="M8.009 10.704a2.696 2.696 0 1 0 0-5.391 2.696 2.696 0 0 0 0 5.391"/><path fill="#3E2723" fill-opacity=".2" d="M8.009 4.555a3.37 3.37 0 0 0-3.37 3.37v.084a3.37 3.37 0 0 1 3.37-3.37h7.412v-.083z"/><path fill="#fff" fill-opacity=".1" d="M10.922 9.694a3.365 3.365 0 0 1-5.829 0L.596 1.985v.084l4.495 7.708a3.364 3.364 0 0 0 5.83 0v-.083z"/><path fill="#3E2723" d="M8.092 4.64h-.043a3.367 3.367 0 1 1 0 6.734h.043a3.37 3.37 0 1 0 0-6.74z" opacity=".1"/><path fill="#fff" fill-opacity=".2" d="M10.956 9.804a3.36 3.36 0 0 0 .29-2.699 3.33 3.33 0 0 1-.325 2.585l-3.269 5.73h.098l3.208-5.612zM8.01.682a7.41 7.41 0 0 1 7.412 7.37v-.043a7.412 7.412 0 0 0-14.825 0v.042A7.41 7.41 0 0 1 8.01.681"/><path fill="#3E2723" fill-opacity=".1" d="M8.009 15.336a7.41 7.41 0 0 0 7.412-7.37v.043a7.412 7.412 0 0 1-14.825 0v-.043a7.41 7.41 0 0 0 7.413 7.37"/></g><mask id="browser-chrome-beta_x16_svg__n" width="16" height="16" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" d="M8.009 15.42a7.412 7.412 0 1 0 0-14.824 7.412 7.412 0 0 0 0 14.825"/></mask><g mask="url(#browser-chrome-beta_x16_svg__n)"><path fill="#424242" d="M.348 9.239h15.536v6.504H.348z"/></g><path fill="#fff" d="M5.37 12.78v-2.045h.739a.6.6 0 0 1 .414.158.51.51 0 0 1 .17.397.45.45 0 0 1-.075.258.5.5 0 0 1-.201.17v.012c.098.03.185.09.249.17a.46.46 0 0 1 .097.292.54.54 0 0 1-.179.417.63.63 0 0 1-.434.17zm.263-1.166h.476a.3.3 0 0 0 .238-.099.305.305 0 0 0 0-.43.3.3 0 0 0-.23-.096h-.484zm0 .915h.527a.31.31 0 0 0 .245-.106.34.34 0 0 0 .094-.23.34.34 0 0 0-.351-.34h-.511zm2.018.29a.68.68 0 0 1-.511-.212.75.75 0 0 1-.198-.533.77.77 0 0 1 .192-.525.62.62 0 0 1 .491-.22.65.65 0 0 1 .498.203c.13.15.196.344.185.542v.05H7.201a.48.48 0 0 0 .141.34c.081.08.19.124.304.123a.38.38 0 0 0 .381-.24l.234.097a.63.63 0 0 1-.225.272.65.65 0 0 1-.385.103m.376-.912a.37.37 0 0 0-.247-.315.4.4 0 0 0-.162-.022.37.37 0 0 0-.252.092.47.47 0 0 0-.146.245zm1.08.888a.406.406 0 0 1-.45-.448v-.733h-.245v-.239h.244v-.427h.262v.428h.341v.24h-.34v.712q0 .228.187.228a.3.3 0 0 0 .12-.022l.091.225a.5.5 0 0 1-.21.036m.818.024a.55.55 0 0 1-.371-.128.42.42 0 0 1-.15-.34.42.42 0 0 1 .17-.359.7.7 0 0 1 .437-.13.75.75 0 0 1 .38.086v-.04a.31.31 0 0 0-.106-.246.38.38 0 0 0-.259-.092.4.4 0 0 0-.206.054.28.28 0 0 0-.128.149l-.24-.103a.54.54 0 0 1 .19-.231.6.6 0 0 1 .377-.108.65.65 0 0 1 .445.157.56.56 0 0 1 .17.441v.852h-.24v-.203h-.012a.51.51 0 0 1-.457.24m.043-.24c.11-.001.216-.045.295-.122a.37.37 0 0 0 .131-.286.5.5 0 0 0-.34-.092.43.43 0 0 0-.289.084.25.25 0 0 0-.097.194.19.19 0 0 0 .089.17.35.35 0 0 0 .211.052"/><defs><linearGradient id="browser-chrome-beta_x16_svg__b" x1="2.386" x2="6.816" y1="6.262" y2="3.663" gradientUnits="userSpaceOnUse"><stop stop-color="#A52714" stop-opacity=".6"/><stop offset=".7" stop-color="#A52714" stop-opacity="0"/></linearGradient><linearGradient id="browser-chrome-beta_x16_svg__c" x1="9.244" x2="4.345" y1="13.759" y2="10.905" gradientUnits="userSpaceOnUse"><stop stop-color="#055524" stop-opacity=".4"/><stop offset=".3" stop-color="#055524" stop-opacity="0"/></linearGradient><linearGradient id="browser-chrome-beta_x16_svg__e" x1="10.181" x2="11.416" y1="4.132" y2="9.542" gradientUnits="userSpaceOnUse"><stop stop-color="#EA6100" stop-opacity=".3"/><stop offset=".7" stop-color="#EA6100" stop-opacity="0"/></linearGradient><linearGradient id="browser-chrome-beta_x16_svg__f" x1="10.181" x2="11.416" y1="4.132" y2="9.542" gradientUnits="userSpaceOnUse"><stop stop-color="#EA6100" stop-opacity=".3"/><stop offset=".7" stop-color="#EA6100" stop-opacity="0"/></linearGradient><linearGradient id="browser-chrome-beta_x16_svg__h" x1="2.386" x2="6.816" y1="6.262" y2="3.663" gradientUnits="userSpaceOnUse"><stop stop-color="#A52714" stop-opacity=".6"/><stop offset=".7" stop-color="#A52714" stop-opacity="0"/></linearGradient><linearGradient id="browser-chrome-beta_x16_svg__k" x1="9.244" x2="4.345" y1="13.759" y2="10.905" gradientUnits="userSpaceOnUse"><stop stop-color="#055524" stop-opacity=".4"/><stop offset=".3" stop-color="#055524" stop-opacity="0"/></linearGradient><radialGradient id="browser-chrome-beta_x16_svg__i" cx="0" cy="0" r="1" gradientTransform="translate(7.668 4.643)scale(7.07135)" gradientUnits="userSpaceOnUse"><stop stop-color="#3E2723" stop-opacity=".2"/><stop offset="1" stop-color="#3E2723" stop-opacity="0"/></radialGradient><radialGradient id="browser-chrome-beta_x16_svg__l" cx="0" cy="0" r="1" gradientTransform="translate(1.747 4.004)scale(6.56017)" gradientUnits="userSpaceOnUse"><stop stop-color="#3E2723" stop-opacity=".2"/><stop offset="1" stop-color="#3E2723" stop-opacity="0"/></radialGradient><radialGradient id="browser-chrome-beta_x16_svg__m" cx="0" cy="0" r="1" gradientTransform="translate(8.009 8.009)scale(7.41214)" gradientUnits="userSpaceOnUse"><stop stop-color="#263238" stop-opacity=".2"/><stop offset="1" stop-color="#263238" stop-opacity="0"/></radialGradient></defs>`
};
const cyBrowserChromeCanaryX16 = {
  name: "browserChromeCanaryX16",
  data: `<g clip-path="url(#browser-chrome-canary_x16_svg__a)"><path fill="#F4B70A" d="M0 8a8 8 0 0 0 8 8l3.465-6A4 4 0 0 1 8 12a4 4 0 0 1-3.468-2.005L1.07 4l-.104.187A7.96 7.96 0 0 0 0 8"/><path fill="#F7CC50" d="M8 16a8 8 0 0 0 6.93-12H8a4 4 0 0 1 3.468 5.995l-.003.005z"/><path fill="#F19A11" fill-rule="evenodd" d="M1.07 4A8 8 0 0 1 8 0a8 8 0 0 1 6.93 4H8a4 4 0 0 0-3.468 5.995z" clip-rule="evenodd"/><circle cx="8" cy="8" r="4" fill="#fff"/><circle cx="8" cy="8" r="3.2" fill="#F6C231"/></g><defs><clipPath id="browser-chrome-canary_x16_svg__a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs>`
};
const cyBrowserEdgeX16 = {
  name: "browserEdgeX16",
  data: `<g clip-path="url(#browser-edge_x16_svg__a)"><path fill="url(#browser-edge_x16_svg__b)" d="M14.44 11.909a6 6 0 0 1-.658.294 6.4 6.4 0 0 1-2.244.404c-2.957 0-5.534-2.034-5.534-4.645a1.97 1.97 0 0 1 1.027-1.707c-2.675.113-3.362 2.9-3.362 4.533 0 4.618 4.255 5.086 5.172 5.086.495 0 1.24-.144 1.688-.285l.082-.028a8.02 8.02 0 0 0 4.162-3.3.25.25 0 0 0-.332-.352"/><path fill="url(#browser-edge_x16_svg__c)" d="M14.44 11.909a6 6 0 0 1-.658.294 6.4 6.4 0 0 1-2.244.404c-2.957 0-5.534-2.034-5.534-4.645a1.97 1.97 0 0 1 1.027-1.707c-2.675.113-3.362 2.9-3.362 4.533 0 4.618 4.255 5.086 5.172 5.086.495 0 1.24-.144 1.688-.285l.082-.028a8.02 8.02 0 0 0 4.162-3.3.25.25 0 0 0-.332-.352" opacity=".35"/><path fill="url(#browser-edge_x16_svg__d)" d="M6.607 15.089a5 5 0 0 1-1.421-1.334 5.045 5.045 0 0 1 1.845-7.5c.195-.092.528-.258.971-.25a2.02 2.02 0 0 1 1.606.813c.253.337.392.745.398 1.166 0-.013 1.528-4.975-5-4.975-2.744 0-5 2.604-5 4.888a8.1 8.1 0 0 0 .756 3.5 8 8 0 0 0 9.774 4.194 4.72 4.72 0 0 1-3.923-.5z"/><path fill="url(#browser-edge_x16_svg__e)" d="M6.607 15.089a5 5 0 0 1-1.421-1.334 5.045 5.045 0 0 1 1.845-7.5c.195-.092.528-.258.971-.25a2.02 2.02 0 0 1 1.606.813c.253.337.392.745.398 1.166 0-.013 1.528-4.975-5-4.975-2.744 0-5 2.604-5 4.888a8.1 8.1 0 0 0 .756 3.5 8 8 0 0 0 9.774 4.194 4.72 4.72 0 0 1-3.923-.5z" opacity=".41"/><path fill="url(#browser-edge_x16_svg__f)" d="M9.52 9.304c-.051.065-.207.156-.207.354 0 .163.106.32.295.451.899.625 2.593.543 2.598.543a3.7 3.7 0 0 0 1.892-.522 3.84 3.84 0 0 0 1.901-3.305c.017-1.4-.5-2.332-.708-2.744C13.966 1.49 11.108 0 7.999 0a8 8 0 0 0-8 7.888c.03-2.284 2.3-4.129 5-4.129.219 0 1.466.022 2.625.63 1.021.536 1.556 1.183 1.928 1.825.386.667.455 1.51.455 1.845 0 .336-.171.834-.488 1.245"/><path fill="url(#browser-edge_x16_svg__g)" d="M9.52 9.304c-.051.065-.207.156-.207.354 0 .163.106.32.295.451.899.625 2.593.543 2.598.543a3.7 3.7 0 0 0 1.892-.522 3.84 3.84 0 0 0 1.901-3.305c.017-1.4-.5-2.332-.708-2.744C13.966 1.49 11.108 0 7.999 0a8 8 0 0 0-8 7.888c.03-2.284 2.3-4.129 5-4.129.219 0 1.466.022 2.625.63 1.021.536 1.556 1.183 1.928 1.825.386.667.455 1.51.455 1.845 0 .336-.171.834-.488 1.245"/></g><defs><radialGradient id="browser-edge_x16_svg__c" cx="0" cy="0" r="1" gradientTransform="matrix(5.96125 0 0 5.66319 9.825 11.154)" gradientUnits="userSpaceOnUse"><stop offset=".72" stop-opacity="0"/><stop offset=".95" stop-opacity=".53"/><stop offset="1"/></radialGradient><radialGradient id="browser-edge_x16_svg__e" cx="0" cy="0" r="1" gradientTransform="rotate(-81.384 9.438 3.654)scale(8.96413 7.24212)" gradientUnits="userSpaceOnUse"><stop offset=".76" stop-opacity="0"/><stop offset=".95" stop-opacity=".5"/><stop offset="1"/></radialGradient><radialGradient id="browser-edge_x16_svg__f" cx="0" cy="0" r="1" gradientTransform="matrix(-.50607 12.65188 -26.94585 -1.07783 1.615 2.961)" gradientUnits="userSpaceOnUse"><stop stop-color="#35C1F1"/><stop offset=".11" stop-color="#34C1ED"/><stop offset=".23" stop-color="#2FC2DF"/><stop offset=".31" stop-color="#2BC3D2"/><stop offset=".67" stop-color="#36C752"/></radialGradient><radialGradient id="browser-edge_x16_svg__g" cx="0" cy="0" r="1" gradientTransform="matrix(1.70345 5.8404 -4.74942 1.38525 15.003 4.838)" gradientUnits="userSpaceOnUse"><stop stop-color="#66EB6E"/><stop offset="1" stop-color="#66EB6E" stop-opacity="0"/></radialGradient><linearGradient id="browser-edge_x16_svg__b" x1="3.669" x2="14.815" y1="11.066" y2="11.066" gradientUnits="userSpaceOnUse"><stop stop-color="#0C59A4"/><stop offset="1" stop-color="#114A8B"/></linearGradient><linearGradient id="browser-edge_x16_svg__d" x1="9.545" x2="2.583" y1="6.231" y2="13.814" gradientUnits="userSpaceOnUse"><stop stop-color="#1B9DE2"/><stop offset=".16" stop-color="#1595DF"/><stop offset=".67" stop-color="#0680D7"/><stop offset="1" stop-color="#0078D4"/></linearGradient><clipPath id="browser-edge_x16_svg__a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs>`
};
const cyBrowserElectronDarkX16 = {
  name: "browserElectronDarkX16",
  data: `<path fill="#2B2E3A" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/><path fill="#9FEAF9" d="M6.281 4.48c-1.625-.295-2.91.014-3.422.902-.382.662-.273 1.54.265 2.477a.167.167 0 1 0 .289-.165c-.485-.846-.579-1.603-.266-2.146.426-.737 1.572-1.013 3.075-.74a.167.167 0 0 0 .06-.327M3.97 9c.657.722 1.51 1.4 2.485 1.962 2.357 1.36 4.867 1.725 6.104.881a.167.167 0 1 0-.187-.275c-1.108.755-3.492.41-5.75-.895-.945-.545-1.772-1.201-2.406-1.898A.167.167 0 1 0 3.97 9"/><path fill="#9FEAF9" d="M12.164 8.797c1.064-1.257 1.436-2.522.924-3.407-.376-.651-1.17-.995-2.227-1.01a.167.167 0 0 0-.005.334c.95.013 1.636.309 1.944.843.424.735.093 1.863-.89 3.025a.167.167 0 0 0 .14.275.17.17 0 0 0 .114-.06m-2.735-4.26c-.963.205-1.987.608-2.97 1.176-2.434 1.406-4.022 3.478-3.802 4.98a.167.167 0 1 0 .33-.048c-.196-1.334 1.31-3.298 3.638-4.643.954-.55 1.946-.941 2.873-1.14a.167.167 0 1 0-.07-.326"/><path fill="#9FEAF9" d="M5.486 11.735c.556 1.553 1.466 2.51 2.49 2.51.747 0 1.437-.509 1.976-1.405a.166.166 0 0 0-.056-.23.167.167 0 0 0-.23.058c-.484.806-1.078 1.244-1.69 1.244-.85 0-1.662-.854-2.177-2.29a.167.167 0 0 0-.27-.07.165.165 0 0 0-.043.183m5.082-.304c.288-.92.443-1.983.443-3.09 0-2.76-.966-5.14-2.343-5.752a.167.167 0 0 0-.135.305c1.228.545 2.145 2.804 2.145 5.448 0 1.073-.15 2.102-.428 2.99a.165.165 0 0 0 .051.179.166.166 0 0 0 .267-.08m3.14-.164a.798.798 0 1 0-1.596 0 .798.798 0 0 0 1.595 0m-.334 0a.465.465 0 1 1-.93 0 .465.465 0 0 1 .93 0m-10.343.798a.798.798 0 1 0 0-1.595.798.798 0 0 0 0 1.595m0-.333a.464.464 0 1 1 0-.929.464.464 0 0 1 0 .929"/><path fill="#9FEAF9" d="M7.976 3.403a.798.798 0 1 0 0-1.596.798.798 0 0 0 0 1.596m0-.334a.464.464 0 1 1 0-.928.464.464 0 0 1 0 .928m.122 5.837a.577.577 0 1 1-.244-1.128.577.577 0 0 1 .244 1.128"/>`
};
const cyBrowserElectronLightX16 = {
  name: "browserElectronLightX16",
  data: `<path fill="#fff" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/><path fill="#47848F" fill-rule="evenodd" d="M6.187 4.2c-1.742-.318-3.12.014-3.669.965-.41.71-.292 1.65.284 2.656a.18.18 0 0 0 .31-.178c-.52-.906-.62-1.718-.284-2.3.458-.79 1.685-1.086 3.296-.793a.18.18 0 0 0 .178-.277.18.18 0 0 0-.115-.074M3.708 9.041c.705.774 1.62 1.5 2.664 2.103 2.53 1.46 5.22 1.85 6.545.947a.179.179 0 0 0-.202-.296c-1.187.81-3.743.44-6.166-.959-1.013-.585-1.9-1.288-2.579-2.034a.18.18 0 0 0-.264.24zm8.787-.216c1.141-1.348 1.54-2.703.992-3.652-.403-.698-1.256-1.067-2.389-1.081a.18.18 0 0 0-.18.176.18.18 0 0 0 .176.18c1.02.014 1.753.332 2.083.904.455.788.1 1.997-.955 3.243a.18.18 0 0 0 .151.293.18.18 0 0 0 .122-.062M9.563 4.258c-1.03.221-2.13.653-3.184 1.262-2.609 1.506-4.31 3.73-4.075 5.338a.18.18 0 0 0 .32.08.18.18 0 0 0 .034-.132c-.21-1.43 1.403-3.535 3.9-4.979 1.02-.59 2.086-1.009 3.08-1.222a.18.18 0 0 0 .06-.324.18.18 0 0 0-.135-.025z" clip-rule="evenodd"/><path fill="#47848F" fill-rule="evenodd" d="M5.336 11.975c.597 1.666 1.573 2.692 2.67 2.692.8 0 1.541-.546 2.118-1.507a.179.179 0 0 0-.306-.184c-.52.863-1.156 1.333-1.812 1.333-.911 0-1.782-.917-2.333-2.454a.18.18 0 0 0-.33-.016.18.18 0 0 0-.007.136m5.449-.325c.309-.987.475-2.126.475-3.312 0-2.96-1.037-5.512-2.512-6.167a.18.18 0 0 0-.24.228.18.18 0 0 0 .095.099c1.316.584 2.3 3.006 2.3 5.84 0 1.151-.161 2.254-.46 3.205a.18.18 0 0 0 .254.212.18.18 0 0 0 .088-.105m3.365-.175a.855.855 0 1 0-1.706 0 .855.855 0 0 0 1.704 0zm-.357 0a.498.498 0 1 1-.997-.001.498.498 0 0 1 .997 0" clip-rule="evenodd"/><path fill="#47848F" fill-rule="evenodd" d="M2.705 12.33a.855.855 0 1 0 0-1.71.855.855 0 0 0 0 1.71m0-.358a.498.498 0 1 1 0-.995.498.498 0 0 1 0 .995m5.301-8.93a.855.855 0 1 0 0-1.71.855.855 0 0 0 0 1.71m0-.358a.498.498 0 1 1 0-.996.498.498 0 0 1 0 .996m.13 6.259a.619.619 0 1 1-.26-1.21.619.619 0 1 1 .26 1.21" clip-rule="evenodd"/>`
};
const cyBrowserMozillaFirefoxX16 = {
  name: "browserMozillaFirefoxX16",
  data: `<g clip-path="url(#browser-mozilla-firefox_x16_svg__a)"><path fill="url(#browser-mozilla-firefox_x16_svg__b)" d="M14.93 5.368c-.337-.81-1.02-1.686-1.556-1.963.382.74.647 1.533.785 2.353l.002.013c-.877-2.185-2.363-3.067-3.578-4.986a9 9 0 0 1-.182-.297 3 3 0 0 1-.086-.16 1.4 1.4 0 0 1-.12-.32.02.02 0 0 0-.013-.007.03.03 0 0 0-.015 0l-.003.002-.006.003.003-.005C8.213 1.141 7.552 3.252 7.492 4.31a3.9 3.9 0 0 0-2.135.822 2 2 0 0 0-.2-.151 3.6 3.6 0 0 1-.022-1.896A5.7 5.7 0 0 0 3.27 4.527h-.004c-.307-.39-.285-1.674-.268-1.942q-.136.054-.259.137-.407.29-.758.65a7 7 0 0 0-.725.869v.001-.001A6.55 6.55 0 0 0 .215 6.59l-.01.05c-.015.07-.068.41-.077.485l-.001.017A7.4 7.4 0 0 0 0 8.212v.04a7.755 7.755 0 0 0 15.396 1.31q.018-.15.035-.3a8 8 0 0 0-.503-3.895zm-8.938 6.07q.053.028.108.053l.005.004zm8.169-5.665v-.007l.001.008z"/><path fill="url(#browser-mozilla-firefox_x16_svg__c)" d="M14.93 5.368c-.337-.81-1.02-1.686-1.556-1.963.382.74.647 1.533.785 2.353v.008l.002.008a7.02 7.02 0 0 1-.242 5.234c-.888 1.907-3.039 3.861-6.406 3.765C3.876 14.67.67 11.97.073 8.435c-.11-.558 0-.84.054-1.294q-.112.529-.125 1.07v.04a7.755 7.755 0 0 0 15.396 1.312q.019-.15.035-.3a8 8 0 0 0-.503-3.896z"/><path fill="url(#browser-mozilla-firefox_x16_svg__d)" d="M14.93 5.368c-.337-.81-1.02-1.686-1.556-1.963.382.74.647 1.533.785 2.353v.008l.002.008a7.02 7.02 0 0 1-.242 5.234c-.888 1.907-3.039 3.861-6.406 3.765C3.876 14.67.67 11.97.073 8.435c-.11-.558 0-.84.054-1.294q-.112.529-.125 1.07v.04a7.755 7.755 0 0 0 15.396 1.312q.019-.15.035-.3a8 8 0 0 0-.503-3.896z"/><path fill="url(#browser-mozilla-firefox_x16_svg__e)" d="m11.16 6.278.048.036a4.2 4.2 0 0 0-.72-.94c-2.41-2.41-.631-5.226-.332-5.37L10.16 0C8.212 1.14 7.55 3.251 7.49 4.308q.134-.012.273-.014a3.91 3.91 0 0 1 3.397 1.984"/><path fill="url(#browser-mozilla-firefox_x16_svg__f)" d="M7.767 6.76c-.013.193-.694.859-.933.859-2.204 0-2.563 1.334-2.563 1.334.098 1.123.88 2.048 1.827 2.537q.065.032.13.062.115.051.228.093c.325.115.665.18 1.01.195 3.865.181 4.613-4.622 1.824-6.016a2.68 2.68 0 0 1 1.87.454 3.91 3.91 0 0 0-3.398-1.985c-.092 0-.182.008-.272.014a3.9 3.9 0 0 0-2.135.823c.118.1.252.233.533.51.526.519 1.876 1.056 1.879 1.119z"/><path fill="url(#browser-mozilla-firefox_x16_svg__g)" d="M7.767 6.76c-.013.193-.694.859-.933.859-2.204 0-2.563 1.334-2.563 1.334.098 1.123.88 2.048 1.827 2.537q.065.032.13.062.115.051.228.093c.325.115.665.18 1.01.195 3.865.181 4.613-4.622 1.824-6.016a2.68 2.68 0 0 1 1.87.454 3.91 3.91 0 0 0-3.398-1.985c-.092 0-.182.008-.272.014a3.9 3.9 0 0 0-2.135.823c.118.1.252.233.533.51.526.519 1.876 1.056 1.879 1.119z"/><path fill="url(#browser-mozilla-firefox_x16_svg__h)" d="M4.994 4.874q.094.06.16.106a3.6 3.6 0 0 1-.022-1.895 5.7 5.7 0 0 0-1.866 1.442c.037 0 1.162-.021 1.728.347"/><path fill="url(#browser-mozilla-firefox_x16_svg__i)" d="M.07 8.435c.6 3.536 3.804 6.237 7.442 6.339 3.367.095 5.518-1.86 6.406-3.766a7.02 7.02 0 0 0 .241-5.234V5.76l.002.013c.275 1.797-.639 3.536-2.067 4.714l-.004.01c-2.783 2.267-5.446 1.367-5.985 1l-.113-.056C4.37 10.665 3.7 9.188 3.844 7.92a1.99 1.99 0 0 1-1.837-1.156 2.93 2.93 0 0 1 2.85-.115 3.86 3.86 0 0 0 2.912.115c-.003-.063-1.353-.6-1.879-1.119-.28-.277-.414-.41-.533-.51a2 2 0 0 0-.2-.152l-.16-.106c-.565-.368-1.69-.348-1.727-.347h-.004c-.307-.39-.286-1.674-.268-1.942q-.137.054-.259.137-.407.291-.758.65-.4.403-.728.867v.001-.001A6.55 6.55 0 0 0 .213 6.59c-.004.016-.28 1.22-.144 1.845z"/><path fill="url(#browser-mozilla-firefox_x16_svg__j)" d="M10.488 5.374c.283.278.526.595.72.94q.065.049.117.096c1.758 1.62.836 3.911.768 4.073 1.428-1.177 2.34-2.917 2.066-4.714-.877-2.187-2.364-3.069-3.577-4.988A9 9 0 0 1 10.4.485a3 3 0 0 1-.085-.16 1.4 1.4 0 0 1-.12-.321.02.02 0 0 0-.013-.007.03.03 0 0 0-.015 0L10.162 0l-.005.003c-.3.142-2.079 2.959.332 5.368z"/><path fill="url(#browser-mozilla-firefox_x16_svg__k)" d="M11.324 6.41a2 2 0 0 0-.116-.095l-.048-.035a2.68 2.68 0 0 0-1.87-.454c2.79 1.394 2.04 6.196-1.824 6.016a3.5 3.5 0 0 1-1.01-.195 4 4 0 0 1-.227-.093q-.067-.03-.13-.062l.005.003c.539.368 3.2 1.267 5.984-1l.004-.01c.07-.162.99-2.453-.768-4.074"/><path fill="url(#browser-mozilla-firefox_x16_svg__l)" d="M4.272 8.951s.358-1.333 2.563-1.333c.238 0 .92-.666.932-.859a3.86 3.86 0 0 1-2.911-.114 2.93 2.93 0 0 0-2.851.114 1.99 1.99 0 0 0 1.837 1.156c-.144 1.268.526 2.745 2.149 3.521q.053.027.107.053c-.947-.49-1.729-1.414-1.826-2.537"/><path fill="url(#browser-mozilla-firefox_x16_svg__m)" d="M14.93 5.368c-.337-.81-1.02-1.686-1.556-1.963.382.74.647 1.533.785 2.353l.002.013c-.877-2.185-2.363-3.067-3.578-4.986a9 9 0 0 1-.182-.297 3 3 0 0 1-.086-.16 1.4 1.4 0 0 1-.12-.32.02.02 0 0 0-.013-.007.03.03 0 0 0-.015 0l-.003.002-.006.003.003-.005C8.213 1.141 7.552 3.252 7.492 4.31c.09-.006.18-.014.273-.014a3.91 3.91 0 0 1 3.397 1.984 2.68 2.68 0 0 0-1.87-.454c2.79 1.395 2.04 6.196-1.824 6.017a3.5 3.5 0 0 1-1.01-.195 4 4 0 0 1-.358-.156l.006.004-.113-.057q.053.028.107.053c-.947-.49-1.729-1.414-1.826-2.537 0 0 .358-1.334 2.563-1.334.238 0 .92-.665.932-.858-.003-.063-1.352-.6-1.879-1.118-.28-.277-.414-.41-.532-.511a2 2 0 0 0-.2-.152 3.6 3.6 0 0 1-.022-1.895 5.7 5.7 0 0 0-1.867 1.443h-.003c-.308-.39-.286-1.674-.268-1.943q-.137.056-.26.138-.406.29-.757.649a7 7 0 0 0-.725.87A6.55 6.55 0 0 0 .216 6.59l-.01.052c-.016.068-.08.414-.09.489q-.09.536-.115 1.08v.04a7.755 7.755 0 0 0 15.396 1.312q.019-.15.035-.3a8 8 0 0 0-.503-3.896m-.77.398.002.009z"/></g><defs><radialGradient id="browser-mozilla-firefox_x16_svg__c" cx="0" cy="0" r="1" gradientTransform="translate(13.405 1.8)scale(16.1661)" gradientUnits="userSpaceOnUse"><stop offset=".129" stop-color="#FFBD4F"/><stop offset=".186" stop-color="#FFAC31"/><stop offset=".247" stop-color="#FF9D17"/><stop offset=".283" stop-color="#FF980E"/><stop offset=".403" stop-color="#FF563B"/><stop offset=".467" stop-color="#FF3750"/><stop offset=".71" stop-color="#F5156C"/><stop offset=".782" stop-color="#EB0878"/><stop offset=".86" stop-color="#E50080"/></radialGradient><radialGradient id="browser-mozilla-firefox_x16_svg__d" cx="0" cy="0" r="1" gradientTransform="translate(7.403 8.403)scale(16.1661)" gradientUnits="userSpaceOnUse"><stop offset=".3" stop-color="#960E18"/><stop offset=".351" stop-color="#B11927" stop-opacity=".74"/><stop offset=".435" stop-color="#DB293D" stop-opacity=".343"/><stop offset=".497" stop-color="#F5334B" stop-opacity=".094"/><stop offset=".53" stop-color="#FF3750" stop-opacity="0"/></radialGradient><radialGradient id="browser-mozilla-firefox_x16_svg__e" cx="0" cy="0" r="1" gradientTransform="translate(9.404 -1.8)scale(11.7104)" gradientUnits="userSpaceOnUse"><stop offset=".132" stop-color="#FFF44F"/><stop offset=".252" stop-color="#FFDC3E"/><stop offset=".506" stop-color="#FF9D12"/><stop offset=".526" stop-color="#FF980E"/></radialGradient><radialGradient id="browser-mozilla-firefox_x16_svg__f" cx="0" cy="0" r="1" gradientTransform="translate(5.602 12.605)scale(7.69689)" gradientUnits="userSpaceOnUse"><stop offset=".353" stop-color="#3A8EE6"/><stop offset=".472" stop-color="#5C79F0"/><stop offset=".669" stop-color="#9059FF"/><stop offset="1" stop-color="#C139E6"/></radialGradient><radialGradient id="browser-mozilla-firefox_x16_svg__g" cx="0" cy="0" r="1" gradientTransform="matrix(3.96725 -.95916 1.12294 4.64466 8.185 7.015)" gradientUnits="userSpaceOnUse"><stop offset=".206" stop-color="#9059FF" stop-opacity="0"/><stop offset=".278" stop-color="#8C4FF3" stop-opacity=".064"/><stop offset=".747" stop-color="#7716A8" stop-opacity=".45"/><stop offset=".975" stop-color="#6E008B" stop-opacity=".6"/></radialGradient><radialGradient id="browser-mozilla-firefox_x16_svg__h" cx="0" cy="0" r="1" gradientTransform="translate(7.203 1.2)scale(5.53808)" gradientUnits="userSpaceOnUse"><stop stop-color="#FFE226"/><stop offset=".121" stop-color="#FFDB27"/><stop offset=".295" stop-color="#FFC82A"/><stop offset=".502" stop-color="#FFA930"/><stop offset=".732" stop-color="#FF7E37"/><stop offset=".792" stop-color="#FF7139"/></radialGradient><radialGradient id="browser-mozilla-firefox_x16_svg__i" cx="0" cy="0" r="1" gradientTransform="translate(11.604 -2.4)scale(23.6289)" gradientUnits="userSpaceOnUse"><stop offset=".113" stop-color="#FFF44F"/><stop offset=".456" stop-color="#FF980E"/><stop offset=".622" stop-color="#FF5634"/><stop offset=".716" stop-color="#FF3647"/><stop offset=".904" stop-color="#E31587"/></radialGradient><radialGradient id="browser-mozilla-firefox_x16_svg__j" cx="0" cy="0" r="1" gradientTransform="rotate(83.976 5.426 4.81)scale(17.3156 11.3641)" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF44F"/><stop offset=".06" stop-color="#FFE847"/><stop offset=".168" stop-color="#FFC830"/><stop offset=".304" stop-color="#FF980E"/><stop offset=".356" stop-color="#FF8B16"/><stop offset=".455" stop-color="#FF672A"/><stop offset=".57" stop-color="#FF3647"/><stop offset=".737" stop-color="#E31587"/></radialGradient><radialGradient id="browser-mozilla-firefox_x16_svg__k" cx="0" cy="0" r="1" gradientTransform="translate(7.203 3.201)scale(14.7495)" gradientUnits="userSpaceOnUse"><stop offset=".137" stop-color="#FFF44F"/><stop offset=".48" stop-color="#FF980E"/><stop offset=".592" stop-color="#FF5634"/><stop offset=".655" stop-color="#FF3647"/><stop offset=".904" stop-color="#E31587"/></radialGradient><radialGradient id="browser-mozilla-firefox_x16_svg__l" cx="0" cy="0" r="1" gradientTransform="matrix(16.144 0 0 16.1441 11.004 4.002)" gradientUnits="userSpaceOnUse"><stop offset=".094" stop-color="#FFF44F"/><stop offset=".231" stop-color="#FFE141"/><stop offset=".509" stop-color="#FFAF1E"/><stop offset=".626" stop-color="#FF980E"/></radialGradient><linearGradient id="browser-mozilla-firefox_x16_svg__b" x1="13.903" x2="1.03" y1="2.478" y2="14.899" gradientUnits="userSpaceOnUse"><stop offset=".048" stop-color="#FFF44F"/><stop offset=".111" stop-color="#FFE847"/><stop offset=".225" stop-color="#FFC830"/><stop offset=".368" stop-color="#FF980E"/><stop offset=".401" stop-color="#FF8B16"/><stop offset=".462" stop-color="#FF672A"/><stop offset=".534" stop-color="#FF3647"/><stop offset=".705" stop-color="#E31587"/></linearGradient><linearGradient id="browser-mozilla-firefox_x16_svg__m" x1="13.747" x2="2.795" y1="2.412" y2="13.366" gradientUnits="userSpaceOnUse"><stop offset=".167" stop-color="#FFF44F" stop-opacity=".8"/><stop offset=".266" stop-color="#FFF44F" stop-opacity=".634"/><stop offset=".489" stop-color="#FFF44F" stop-opacity=".217"/><stop offset=".6" stop-color="#FFF44F" stop-opacity="0"/></linearGradient><clipPath id="browser-mozilla-firefox_x16_svg__a"><path fill="#fff" d="M0 0h15.49v16H0z"/></clipPath></defs>`
};
const cyBrowserSafariX16 = {
  name: "browserSafariX16",
  data: `<path fill="url(#browser-safari_x16_svg__a)" d="M16 8A8 8 0 1 1-.001 8 8 8 0 0 1 16 8"/><path fill="#F4F2F3" d="M8 .417a.116.116 0 0 0-.117.117v1.345a.116.116 0 1 0 .234 0V.534A.116.116 0 0 0 8 .417m-.763.048h-.024a.116.116 0 0 0-.104.129l.06.563a.116.116 0 1 0 .231-.025L7.341.57a.116.116 0 0 0-.104-.104m1.531.001a.116.116 0 0 0-.104.104l-.06.563a.116.116 0 1 0 .233.024l.059-.563a.116.116 0 0 0-.128-.128M6.453.579q-.012 0-.023.003a.116.116 0 0 0-.09.138l.278 1.316a.116.116 0 1 0 .228-.048L6.568.672a.116.116 0 0 0-.115-.093m3.1.001a.116.116 0 0 0-.116.093l-.28 1.316a.116.116 0 1 0 .229.048l.28-1.316a.116.116 0 0 0-.114-.14M5.704.79a.116.116 0 0 0-.121.152l.175.539a.116.116 0 1 0 .222-.073L5.806.87a.12.12 0 0 0-.1-.08m4.59 0a.12.12 0 0 0-.1.08l-.175.539a.116.116 0 1 0 .222.072l.175-.538a.116.116 0 0 0-.121-.153m-5.33.27a.116.116 0 0 0-.104.164l.546 1.23a.116.116 0 1 0 .213-.095L5.075 1.13a.12.12 0 0 0-.109-.07m6.079.005a.12.12 0 0 0-.109.07l-.548 1.228a.116.116 0 0 0 .06.154c.058.026.127 0 .153-.06l.548-1.228a.116.116 0 0 0-.104-.164m-6.765.36a.116.116 0 0 0-.11.175l.284.489a.116.116 0 1 0 .202-.117l-.283-.49a.12.12 0 0 0-.093-.058m7.442-.001a.12.12 0 0 0-.093.058l-.283.49a.116.116 0 0 0 .043.16.116.116 0 0 0 .16-.043l.282-.49a.116.116 0 0 0-.109-.175m-8.109.416a.117.117 0 0 0-.09.185l.79 1.089a.116.116 0 1 0 .188-.137l-.79-1.089a.12.12 0 0 0-.098-.048m8.784.006a.12.12 0 0 0-.098.048l-.791 1.088a.116.116 0 1 0 .189.137l.79-1.088a.116.116 0 0 0-.09-.185m-9.38.494a.116.116 0 0 0-.093.195l.379.42a.116.116 0 1 0 .173-.156l-.378-.42a.12.12 0 0 0-.081-.04m9.969 0a.12.12 0 0 0-.08.04l-.38.42a.116.116 0 1 0 .173.156l.38-.42a.116.116 0 0 0-.093-.195m-10.54.548a.117.117 0 0 0-.072.204l1 .9a.116.116 0 1 0 .156-.174l-1-.9a.12.12 0 0 0-.084-.03m11.114.004a.12.12 0 0 0-.084.03l-1 .9a.116.116 0 1 0 .155.173l1-.9a.116.116 0 0 0-.071-.203M1.969 3.5a.116.116 0 0 0-.073.211l.459.333a.116.116 0 1 0 .137-.189l-.458-.333A.1.1 0 0 0 1.97 3.5m12.064.004a.1.1 0 0 0-.064.023l-.458.332a.116.116 0 1 0 .137.189l.458-.333a.116.116 0 0 0-.073-.21m-12.507.648a.116.116 0 0 0-.05.217l1.165.673a.116.116 0 1 0 .117-.202l-1.166-.673a.1.1 0 0 0-.066-.015m12.948 0a.1.1 0 0 0-.066.015l-1.166.673a.116.116 0 0 0-.042.16.116.116 0 0 0 .16.042l1.164-.673a.116.116 0 0 0-.05-.217M1.19 4.845a.116.116 0 0 0-.05.223l.517.23a.116.116 0 1 0 .095-.212l-.516-.23a.1.1 0 0 0-.046-.01m13.622.005a.1.1 0 0 0-.045.01l-.517.23a.116.116 0 1 0 .095.213l.516-.23a.116.116 0 0 0-.05-.223m-13.92.72a.116.116 0 0 0-.026.227l1.278.418a.116.116 0 1 0 .072-.222L.937 5.576a.1.1 0 0 0-.046-.005m14.219.006a.1.1 0 0 0-.047.005l-1.28.416a.116.116 0 1 0 .073.222l1.28-.416a.116.116 0 0 0-.027-.227M.704 6.333a.116.116 0 0 0-.025.23l.553.118a.116.116 0 1 0 .049-.228l-.554-.118zm14.59 0-.023.003-.554.118a.116.116 0 1 0 .049.228l.553-.117a.116.116 0 0 0-.025-.231M.564 7.1a.116.116 0 0 0 0 .232l1.337.142a.116.116 0 1 0 .024-.232L.587 7.099zm14.873.01h-.023l-1.338.14a.116.116 0 1 0 .024.232l1.338-.14a.116.116 0 0 0 0-.232M.541 7.884a.116.116 0 1 0 0 .233h.566a.116.116 0 1 0 0-.233zm14.352 0a.116.116 0 1 0 0 .233h.566a.116.116 0 1 0 0-.233zm-12.97.635H1.9l-1.338.14a.116.116 0 1 0 .024.232l1.338-.14a.116.116 0 0 0 0-.232m12.153.009a.116.116 0 0 0-.001.232l1.338.141a.116.116 0 1 0 .024-.232l-1.338-.141zm-12.82.788-.023.002-.553.118a.116.116 0 1 0 .048.228l.554-.118a.116.116 0 0 0-.025-.23m13.487 0a.116.116 0 0 0-.025.232l.554.117a.116.116 0 0 0 .138-.09.116.116 0 0 0-.09-.138l-.553-.118zm-12.554.46a.1.1 0 0 0-.046.006l-1.28.415a.116.116 0 1 0 .073.222l1.279-.416a.116.116 0 0 0-.026-.227m11.62.004a.116.116 0 0 0-.026.227l1.28.417a.116.116 0 1 0 .072-.221l-1.28-.417a.1.1 0 0 0-.045-.006m-12.108.907a.1.1 0 0 0-.046.01l-.517.23a.116.116 0 1 0 .095.213l.517-.23a.116.116 0 0 0-.05-.223m12.596.005a.12.12 0 0 0-.108.069.116.116 0 0 0 .059.154l.516.23c.06.027.128 0 .154-.059a.116.116 0 0 0-.059-.154l-.516-.23a.1.1 0 0 0-.046-.01m-11.59.252a.1.1 0 0 0-.066.016l-1.165.672a.116.116 0 1 0 .116.202l1.166-.672a.116.116 0 0 0-.05-.218m10.586 0a.116.116 0 0 0-.05.217l1.165.673a.116.116 0 1 0 .116-.202l-1.165-.672a.1.1 0 0 0-.066-.016m-10.876.987a.1.1 0 0 0-.065.023l-.458.332a.116.116 0 1 0 .137.189l.458-.332a.116.116 0 0 0-.072-.212m11.163.004a.116.116 0 0 0-.073.211l.459.333a.116.116 0 1 0 .137-.189l-.458-.332a.1.1 0 0 0-.065-.023m-10.126.04a.12.12 0 0 0-.084.03l-1 .9a.116.116 0 1 0 .155.173l1-.9a.116.116 0 0 0-.07-.202m9.089.004a.116.116 0 0 0-.072.203l1 .9a.116.116 0 1 0 .156-.173l-1-.9a.12.12 0 0 0-.084-.03m-8.14.854a.12.12 0 0 0-.098.048l-.792 1.088a.116.116 0 1 0 .19.138l.79-1.088a.116.116 0 0 0-.09-.186m7.187.005a.117.117 0 0 0-.09.185l.79 1.09a.116.116 0 1 0 .188-.138l-.79-1.089a.12.12 0 0 0-.098-.048m-8.208.168a.12.12 0 0 0-.08.039l-.38.42a.116.116 0 1 0 .174.156l.378-.42a.116.116 0 0 0-.092-.195m9.236 0a.116.116 0 0 0-.093.195l.378.421a.116.116 0 1 0 .174-.156l-.379-.42a.12.12 0 0 0-.08-.04m-7.11.467a.12.12 0 0 0-.108.07l-.548 1.228a.116.116 0 1 0 .213.095l.548-1.229a.116.116 0 0 0-.104-.164m4.976.004a.117.117 0 0 0-.104.164l.546 1.23a.116.116 0 1 0 .213-.096l-.546-1.229a.12.12 0 0 0-.109-.07m-5.939.376a.12.12 0 0 0-.092.058l-.283.49a.116.116 0 0 0 .042.16.116.116 0 0 0 .16-.043l.283-.49a.116.116 0 0 0-.11-.175m6.91 0a.116.116 0 0 0-.11.175l.283.49a.116.116 0 0 0 .16.043.116.116 0 0 0 .042-.16l-.283-.49a.12.12 0 0 0-.092-.058m-4.726.018a.116.116 0 0 0-.115.092l-.28 1.316a.116.116 0 0 0 .09.139.116.116 0 0 0 .139-.09l.28-1.316a.116.116 0 0 0-.114-.141m2.538 0q-.012 0-.023.003a.116.116 0 0 0-.09.138l.278 1.316a.116.116 0 1 0 .228-.048l-.278-1.316a.116.116 0 0 0-.115-.093M8 14.005a.116.116 0 0 0-.117.117v1.345a.116.116 0 1 0 .234 0v-1.345A.116.116 0 0 0 8 14.004m-2.141.435a.12.12 0 0 0-.101.08l-.175.538a.116.116 0 1 0 .222.073l.175-.539a.116.116 0 0 0-.121-.152m4.281 0a.116.116 0 0 0-.121.152l.175.539a.116.116 0 1 0 .222-.072l-.175-.538a.12.12 0 0 0-.1-.08m-2.872.3a.116.116 0 0 0-.105.104l-.059.563a.116.116 0 1 0 .232.024l.06-.563a.116.116 0 0 0-.128-.128m1.46 0h-.024a.117.117 0 0 0-.104.129l.059.563a.116.116 0 1 0 .232-.024l-.06-.563a.116.116 0 0 0-.104-.104"/><g filter="url(#browser-safari_x16_svg__b)" opacity=".409"><path fill="#000" d="M13.467 3.334 7.085 7.042l-4.034 6.352 5.902-4.372z"/></g><path fill="#FF5150" d="m8.915 8.958-1.83-1.916 6.489-4.365z"/><path fill="#F1F1F1" d="m8.915 8.958-1.83-1.916-4.659 6.28z"/><path fill="#000" d="m2.426 13.323 6.489-4.365 4.659-6.28z" opacity=".243"/><defs><radialGradient id="browser-safari_x16_svg__a" cx="0" cy="0" r="1" gradientTransform="translate(8.036 6.834)scale(8.68021)" gradientUnits="userSpaceOnUse"><stop stop-color="#06C2E7"/><stop offset=".25" stop-color="#0DB8EC"/><stop offset=".5" stop-color="#12AEF1"/><stop offset=".75" stop-color="#1F86F9"/><stop offset="1" stop-color="#107DDD"/></radialGradient><filter id="browser-safari_x16_svg__b" width="11.763" height="11.406" x="2.377" y="2.661" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_4665_8423" stdDeviation=".337"/></filter></defs>`
};
const cyBrowserWebkitX16 = {
  name: "browserWebkitX16",
  data: `<path fill="#fff" d="m6.34 12.735-4.352-3.42a1.65 1.65 0 0 1-.682-1.294c0-.484.243-.948.682-1.292L6.34 3.302A2.7 2.7 0 0 1 8 2.766c.628 0 1.212.194 1.66.539l4.352 3.42a1.65 1.65 0 0 1 .682 1.294c0 .49-.243.95-.682 1.293l-4.353 3.42A2.7 2.7 0 0 1 8 13.275c-.628 0-1.212-.189-1.66-.539"/><path fill="#fff" d="M6.34 10.58 1.989 7.16a1.65 1.65 0 0 1-.682-1.293c0-.485.243-.948.682-1.293L6.34 1.147A2.7 2.7 0 0 1 8 .611c.628 0 1.212.194 1.66.54l4.352 3.42a1.65 1.65 0 0 1 .682 1.293c0 .49-.243.95-.682 1.293l-4.353 3.42c-.477.361-1.061.552-1.659.542-.628 0-1.212-.188-1.66-.538"/><path fill="#FF9D00" d="M14.007 8.835a1.59 1.59 0 0 1 0 2.62L9.67 14.862a2.86 2.86 0 0 1-3.34 0l-4.337-3.4a1.59 1.59 0 0 1 .003-2.623l4.337-3.405c.92-.717 2.419-.717 3.34 0z"/><path fill="#FC0" d="m6.34 12.735-4.352-3.42a1.65 1.65 0 0 1-.682-1.294c0-.484.243-.948.682-1.292L6.34 3.302A2.7 2.7 0 0 1 8 2.766c.628 0 1.212.194 1.66.539l4.352 3.42a1.65 1.65 0 0 1 .682 1.294c0 .49-.243.95-.682 1.293l-4.353 3.42A2.7 2.7 0 0 1 8 13.275c-.628 0-1.212-.189-1.66-.539"/><path fill="url(#browser-webkit_x16_svg__a)" d="M6.34 10.58 1.989 7.16a1.65 1.65 0 0 1-.682-1.293c0-.485.243-.948.682-1.293L6.34 1.147A2.7 2.7 0 0 1 8 .611c.628 0 1.212.194 1.66.54l4.352 3.42a1.65 1.65 0 0 1 .682 1.293c0 .49-.243.95-.682 1.293l-4.353 3.42c-.477.361-1.061.552-1.659.542-.628 0-1.212-.188-1.66-.538"/><path fill="#fff" d="M8.016 9.145c2.222 0 4.024-1.474 4.024-3.292 0-1.813-1.804-3.294-4.024-3.294-2.225 0-4.03 1.481-4.03 3.294 0 1.818 1.805 3.292 4.027 3.292zm0 .34c-2.451 0-4.444-1.625-4.444-3.632 0-2.004 1.993-3.628 4.444-3.628s4.44 1.627 4.44 3.628c0 2.007-1.989 3.631-4.44 3.631"/><path fill="#8CC8F6" d="M8.312 7.251c.221-.027.44-.092.639-.188l1.266.522-.663-.997a1.16 1.16 0 0 0 0-1.47l.663-.997-1.193.493-.035.525a.89.89 0 0 1-.033 1.45 1.4 1.4 0 0 1-.43.228l-.216.431zm-.592-2.79a2.2 2.2 0 0 0-.647.188l-1.266-.523.663.997a1.16 1.16 0 0 0 0 1.468l-.663.997 1.223-.504.027-.493a.89.89 0 0 1 .008-1.47 1.6 1.6 0 0 1 .431-.23l.216-.43z"/><path fill="#fff" fill-rule="evenodd" d="m7.407 5.745-.17 2.99 1.366-2.774.194-2.982zM7.39 8.162l1.093-2.22-.959-.175-.134 2.397z" clip-rule="evenodd"/><defs><linearGradient id="browser-webkit_x16_svg__a" x1="8" x2="8" y1=".611" y2="11.12" gradientUnits="userSpaceOnUse"><stop stop-color="#34AADC"/><stop offset="1" stop-color="#007AFF"/></linearGradient></defs>`
};
const cyCheckmarkX16 = {
  name: "checkmarkX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8.5 7 12l5-8" class="icon-dark"/>`
};
const cyCheckmarkOutlineX16 = {
  name: "checkmarkOutlineX16",
  data: `<path stroke="currentColor" stroke-width="2" d="M12.95 12.95a7 7 0 1 1-9.9-9.9 7 7 0 0 1 9.9 9.9Z" class="icon-dark"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 8 1.5 2L10 6" class="icon-dark"/>`
};
const cyCheckmarkSmallX16 = {
  name: "checkmarkSmallX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8.5 7.5 11 11 5" class="icon-dark"/>`
};
const cyCheckmarkSolidX16 = {
  name: "checkmarkSolidX16",
  data: `<path fill="#fff" d="M13.657 13.657A8 8 0 1 1 2.343 2.343a8 8 0 0 1 11.314 11.314" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 8.5 2 2 4-5" class="icon-dark"/>`
};
const cyCheckmarkSolidX24 = {
  name: "checkmarkSolidX24",
  data: `<path fill="#fff" d="M20.485 20.485c-4.686 4.687-12.284 4.687-16.97 0-4.687-4.686-4.687-12.284 0-16.97 4.686-4.687 12.284-4.687 16.97 0 4.687 4.686 4.687 12.284 0 16.97" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.999 9 11 15l-2.999-3" class="icon-dark"/>`
};
const cyChevronDownDoubleX16 = {
  name: "chevronDownDoubleX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 9 3 3 3-3M5 4l3 3 3-3" class="icon-dark"/>`
};
const cyChevronDownLargeX16 = {
  name: "chevronDownLargeX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m2 5 6 6 6-6" class="icon-dark"/>`
};
const cyChevronDownMediumX16 = {
  name: "chevronDownMediumX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 6 4 4 4-4" class="icon-dark"/>`
};
const cyChevronDownSmallX16 = {
  name: "chevronDownSmallX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 6 4 4 4-4" class="icon-dark"/>`
};
const cyChevronDownSmallX8 = {
  name: "chevronDownSmallX8",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 2.5 3 3 3-3" class="icon-dark"/>`
};
const cyChevronLeftDoubleX16 = {
  name: "chevronLeftDoubleX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11 4 8l3-3m5 6L9 8l3-3" class="icon-dark"/>`
};
const cyChevronLeftLargeX16 = {
  name: "chevronLeftLargeX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 14 5 8l6-6" class="icon-dark"/>`
};
const cyChevronLeftSmallX16 = {
  name: "chevronLeftSmallX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 4 6 8l4 4" class="icon-dark"/>`
};
const cyChevronLeftSmallX8 = {
  name: "chevronLeftSmallX8",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5.5 1-3 3 3 3" class="icon-dark"/>`
};
const cyChevronRightDoubleX16 = {
  name: "chevronRightDoubleX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 11 3-3-3-3m-5 6 3-3-3-3" class="icon-dark"/>`
};
const cyChevronRightLargeX16 = {
  name: "chevronRightLargeX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 14 6-6-6-6" class="icon-dark"/>`
};
const cyChevronRightSmallX16 = {
  name: "chevronRightSmallX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 12 4-4-4-4" class="icon-dark"/>`
};
const cyChevronRightSmallX8 = {
  name: "chevronRightSmallX8",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m2.5 1 3 3-3 3" class="icon-dark"/>`
};
const cyChevronUpDoubleX16 = {
  name: "chevronUpDoubleX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 7 3-3 3 3m-6 5 3-3 3 3" class="icon-dark"/>`
};
const cyChevronUpLargeX16 = {
  name: "chevronUpLargeX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m2 11 6-6 6 6" class="icon-dark"/>`
};
const cyChevronUpSmallX16 = {
  name: "chevronUpSmallX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10 8 6l-4 4" class="icon-dark"/>`
};
const cyChevronUpSmallX8 = {
  name: "chevronUpSmallX8",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 5.5 3-3 3 3" class="icon-dark"/>`
};
const cyCurrencyEurX16 = {
  name: "currencyEurX16",
  data: `<path fill="currentColor" d="m6.524 13.214.565-.825zm6.145.33a1 1 0 1 0-1.338-1.486zm-1.338-9.602a1 1 0 1 0 1.338-1.485zM2.5 5.501a1 1 0 0 0 0 2zm7.695 2a1 1 0 1 0 0-2zM2.5 8.5a1 1 0 0 0 0 2zm6.054 2a1 1 0 1 0 0-2zM9 13a3.36 3.36 0 0 1-1.91-.611l-1.132 1.65A5.36 5.36 0 0 0 9 15zm-1.91-.611C5.884 11.564 5 9.943 5 8H3c0 2.522 1.147 4.797 2.958 6.039zM5 8c0-2.94 1.954-5 4-5V1C5.523 1 3 4.312 3 8zm6.33 4.058C10.657 12.665 9.85 13 9 13v2c1.401 0 2.672-.558 3.67-1.457zM9 3c.85 0 1.656.335 2.33.942l1.34-1.485C11.672 1.557 10.4 1 9 1zM2.5 7.5h7.695v-2H2.5zm0 3h6.054v-2H2.5z" class="icon-dark"/>`
};
const cyCurrencyGbpX16 = {
  name: "currencyGbpX16",
  data: `<path fill="currentColor" d="M10 5a1 1 0 1 0 2 0zm-6 9-.79-.614a1 1 0 0 0 1.345 1.446zm8.555.832a1 1 0 0 0-1.11-1.664zM4 8a1 1 0 0 0 0 2zm5 2a1 1 0 0 0 0-2zM6 5a2 2 0 0 1 2-2V1a4 4 0 0 0-4 4zm2-2a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4zM4 14c.555.832.554.832.554.833h-.001l-.002.002-.003.002-.005.003-.004.002.014-.008q.03-.018.12-.058c.117-.05.309-.12.568-.167.51-.093 1.319-.108 2.388.32l.742-1.857c-1.431-.573-2.622-.588-3.487-.43a4.6 4.6 0 0 0-1.01.3 3.4 3.4 0 0 0-.42.22l-.004.003-.003.002c-.001 0-.002 0 .553.833m3.629.928c1.431.573 2.622.588 3.487.43a4.6 4.6 0 0 0 1.01-.3 3.4 3.4 0 0 0 .408-.212l.011-.008.005-.003.003-.002c.001 0 .002 0-.553-.833-.555-.832-.554-.832-.554-.833h.001l.002-.002.003-.002.005-.003.004-.002-.014.008q-.03.018-.12.058c-.117.05-.309.12-.568.167-.51.093-1.319.108-2.388-.32zm-2.84-.314c1.77-2.276 2.2-4.085 2.048-5.707l-1.991.186c.095 1.022-.115 2.339-1.635 4.293zm2.048-5.707c-.08-.863-.325-1.632-.51-2.254C6.13 5.996 6 5.498 6 5H4c0 .827.22 1.584.41 2.223.2.674.377 1.242.436 1.87zM4 10h1.841V8H4zm1.841 0H9V8H5.841z" class="icon-dark"/>`
};
const cyCurrencyInrX16 = {
  name: "currencyInrX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.5 2H8m3 3a3 3 0 0 1-3 3H3.5l6.5 6m1-9a3 3 0 0 0-3-3m3 3H3.5M11 5h1.5M8 2h4.5" class="icon-dark"/>`
};
const cyCurrencyRubX16 = {
  name: "currencyRubX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h5a3 3 0 1 0 0-6H5zm0 0v6m0-6H3m0 3h6" class="icon-dark"/>`
};
const cyCurrencyUsdX16 = {
  name: "currencyUsdX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 3h3a1 1 0 0 1 1 1v.5M8 3H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3m0-5V1m0 2v5m0 5h3a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H8m0 5H5a1 1 0 0 1-1-1v-.5M8 13v2m0-2V8" class="icon-dark"/>`
};
const cyDeviceLaptopX24 = {
  name: "deviceLaptopX24",
  data: `<path fill="#D0D2E0" fill-rule="evenodd" d="M3 17H2v.1A2.9 2.9 0 0 0 4.9 20h14.2a2.9 2.9 0 0 0 2.9-2.9V17H3" class="icon-light" clip-rule="evenodd"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 17H3m18 0h1v.1m-1-.1V6M3 17H2v.1m1-.1V6m2-2h14M5 4a2 2 0 0 0-2 2m2-2a2 2 0 0 0-2 2v0m16-2a2 2 0 0 1 2 2m-2-2a2 2 0 0 1 2 2v0m1 11.1a2.9 2.9 0 0 1-2.9 2.9m2.9-2.9a2.9 2.9 0 0 1-2.9 2.9v0m0 0H4.9m0 0A2.9 2.9 0 0 1 2 17.1M4.9 20A2.9 2.9 0 0 1 2 17.1v0" class="icon-dark"/><circle cx="12" cy="7" r="1" fill="currentColor" class="icon-dark"/>`
};
const cyDeviceSmartphoneX16 = {
  name: "deviceSmartphoneX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.5 1H11a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1.5m3 0v.5A.5.5 0 0 1 9 2H7a.5.5 0 0 1-.5-.5V1m3 0h-3M8 12.5v.01" class="icon-dark"/>`
};
const cyDeviceSmartphoneX24 = {
  name: "deviceSmartphoneX24",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M15 1h1a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h1m6 0v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V1m6 0H9m3 19.01V20" class="icon-dark"/>`
};
const cyDeviceTvX16 = {
  name: "deviceTvX16",
  data: `<path fill="#D0D2E0" d="M15 3a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1zm0 0v2a1 1 0 0 0 1 1h3-8" class="icon-dark"/>`
};
const cyDeviceTvX24 = {
  name: "deviceTvX24",
  data: `<path fill="#D0D2E0" d="M23 4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1z" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 17H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1zm0 0v4m0 0h6m-6 0H6" class="icon-dark"/>`
};
const cyDocumentAddedX16 = {
  name: "documentAddedX16",
  data: `<path fill="#D0D2E0" d="M2 13V3a2 2 0 0 1 2-2h6.172a2 2 0 0 1 1.414.586l1.828 1.828A2 2 0 0 1 14 4.828V13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 10 .5-1m3.5 1-.5-1m-3 0L8 6l1.5 3m-3 0h3M14 4.828V13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h6.172a2 2 0 0 1 1.414.586l1.828 1.828A2 2 0 0 1 14 4.828" class="icon-dark"/>`
};
const cyDocumentAddedSquarePlusX16 = {
  name: "documentAddedSquarePlusX16",
  data: `<path fill="#E4FBF2" d="M2 12V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2" class="icon-light"/><path stroke="#1FA971" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 6v4m2-2H6m6-6H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2" class="icon-dark"/>`
};
const cyDocumentAddedSquarePlusX24 = {
  name: "documentAddedSquarePlusX24",
  data: `<path fill="#E4FBF2" d="M3 18V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3" class="icon-light"/><path stroke="#1FA971" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v8m4-4H8m10-9H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3" class="icon-dark"/>`
};
const cyDocumentBlankX16 = {
  name: "documentBlankX16",
  data: `<path fill="#D0D2E0" d="M2 14V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h3M5 5h6m-6 6h5m3-10H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1" class="icon-dark"/>`
};
const cyDocumentBlankX24 = {
  name: "documentBlankX24",
  data: `<path fill="#D0D2E0" d="M4 20V4a2 2 0 0 1 2-2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8m-6-6 6 6m-6-6v6h6" class="icon-dark"/>`
};
const cyDocumentBlankX48 = {
  name: "documentBlankX48",
  data: `<path fill="#D0D2E0" d="M10 39V9a1 1 0 0 1 1-1h26a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 24h7m-7-6.857h14M17 30.857h11.667M37 8H11a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1" class="icon-dark"/>`
};
const cyDocumentCodeX24 = {
  name: "documentCodeX24",
  data: `<path fill="#D0D2E0" d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2" class="icon-light"/><path fill="currentColor" d="M9 14a1 1 0 1 0 0 2zm6 2a1 1 0 1 0 0-2zm-6 3h1v-2H9zm-1-2a1 1 0 1 0 0 2zm5-6h-1v2h1zm3 2a1 1 0 1 0 0-2zm-6-2a1 1 0 1 0 0 2zm.01 2h1v-2h-1zM9 8a1 1 0 0 0 0 2zm3 2h1V8h-1zm3-2h-1v2h1zm.01 2a1 1 0 1 0 0-2zM14 7a1 1 0 1 0 0-2zm-2-2h-1v2h1zM8 5a1 1 0 0 0 0 2zm1 2h1V5H9zm3 10h-1v2h1zm1.01 2a1 1 0 1 0 0-2zM6 3h12V1H6zm12 18H6v2h12zm1-17v16h2V4zM5 20V4H3v16zm4-4h6v-2H9zm0 1H8v2h1zm4-4h3v-2h-3zm-3 0h.01v-2H10zm-1-3h3V8H9zm6 0h.01V8H15zm-1-5h-2v2h2zM8 7h1V5H8zm4 12h1.01v-2H12zm-6 2a1 1 0 0 1-1-1H3a3 3 0 0 0 3 3zm12 2a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1zm0-20a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3zM6 1a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1z" class="icon-dark"/>`
};
const cyDocumentCodeX48 = {
  name: "documentCodeX48",
  data: `<path fill="#D0D2E0" fill-rule="evenodd" d="M32 5.18V13h7.82a2 2 0 0 0-.406-.586l-6.828-6.828A2 2 0 0 0 32 5.18" class="icon-light" clip-rule="evenodd"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m20 21-3 3 3 3m8-6 3 3-3 3m-5.5 2.5 3-11M32 5.18a2 2 0 0 0-.828-.18H9a1 1 0 0 0-1 1v36a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V13.828a2 2 0 0 0-.18-.828M32 5.18c.216.098.415.235.586.406l6.828 6.828a2 2 0 0 1 .406.586M32 5.18V13h7.82" class="icon-dark"/><path fill="#A3E7CB" d="M43 40a6 6 0 1 1-12 0 6 6 0 0 1 12 0" class="icon-light-secondary"/><path stroke="#00814D" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M37 38v2m0 2v-2m0 0h2-4m8 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0" class="icon-dark-secondary"/>`
};
const cyDocumentDeletedX16 = {
  name: "documentDeletedX16",
  data: `<path fill="#D0D2E0" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 13V3a2 2 0 0 1 2-2h6.172a2 2 0 0 1 1.414.586l1.828 1.828A2 2 0 0 1 14 4.828V13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2" class="icon-dark-stroke icon-light-fill"/>`
};
const cyDocumentDownloadX16 = {
  name: "documentDownloadX16",
  data: `<path fill="#D0D2E0" d="M2 13V3a2 2 0 0 1 2-2h6.172a2 2 0 0 1 1.414.586l1.828 1.828A2 2 0 0 1 14 4.828V13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5v6m0 0 2-2m-2 2L6 9m8-4.172V13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h6.172a2 2 0 0 1 1.414.586l1.828 1.828A2 2 0 0 1 14 4.828" class="icon-dark"/>`
};
const cyDocumentDownloadX24 = {
  name: "documentDownloadX24",
  data: `<path fill="#D0D2E0" d="M4 20V4a2 2 0 0 1 2-2h6.757a3 3 0 0 1 2.122.879L19.12 7.12A3 3 0 0 1 20 9.243V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 16V8m0 8 3-3m-3 3-3-3m11-3.757V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6.757a3 3 0 0 1 2.122.879L19.12 7.12A3 3 0 0 1 20 9.243" class="icon-dark"/>`
};
const cyDocumentMinusX16 = {
  name: "documentMinusX16",
  data: `<path fill="#D0D2E0" d="M4 15a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h6.172a2 2 0 0 1 1.414.586l1.828 1.828A2 2 0 0 1 14 4.828V13a2 2 0 0 1-2 2z" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 8h4m4-3.172V13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h6.172a2 2 0 0 1 1.414.586l1.828 1.828A2 2 0 0 1 14 4.828" class="icon-dark"/>`
};
const cyDocumentMinusX24 = {
  name: "documentMinusX24",
  data: `<path fill="#D0D2E0" d="M4 20V4a2 2 0 0 1 2-2h6.757a3 3 0 0 1 2.122.879L19.12 7.12A3 3 0 0 1 20 9.243V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m11-2.757V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6.757a3 3 0 0 1 2.122.879L19.12 7.12A3 3 0 0 1 20 9.243" class="icon-dark"/>`
};
const cyDocumentModifiedX16 = {
  name: "documentModifiedX16",
  data: `<path fill="#D0D2E0" d="M2 13V3a2 2 0 0 1 2-2h6.172a2 2 0 0 1 1.414.586l1.828 1.828A2 2 0 0 1 14 4.828V13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 10 1-4 2 3 2-3 1 4m3-5.172V13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h6.172a2 2 0 0 1 1.414.586l1.828 1.828A2 2 0 0 1 14 4.828" class="icon-dark"/>`
};
const cyDocumentModifiedSquareDotX16 = {
  name: "documentModifiedSquareDotX16",
  data: `<path fill="#F5F4D7" d="M9 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0" class="icon-light"/><path fill="#F5F4D7" fill-rule="evenodd" d="M4 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm4 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2" class="icon-light" clip-rule="evenodd"/><path stroke="#DB7903" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0" class="icon-dark"/><path stroke="#DB7903" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm4 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2" class="icon-dark" clip-rule="evenodd"/>`
};
const cyDocumentModifiedSquareDotX24 = {
  name: "documentModifiedSquareDotX24",
  data: `<path fill="#DB7903" d="M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0" class="icon-dark"/><path fill="#F5F4D7" fill-rule="evenodd" d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm6 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4" class="icon-light" clip-rule="evenodd"/><path stroke="#DB7903" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0" class="icon-dark"/><path stroke="#DB7903" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm6 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4" class="icon-dark" clip-rule="evenodd"/>`
};
const cyDocumentPlusX16 = {
  name: "documentPlusX16",
  data: `<path fill="#D0D2E0" d="M3 15a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1z" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 8h4m-2 2V6m5-5H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1" class="icon-dark"/>`
};
const cyDocumentPlusX24 = {
  name: "documentPlusX24",
  data: `<path fill="#D0D2E0" d="M4 20V4a2 2 0 0 1 2-2h6.757a3 3 0 0 1 2.122.879L19.12 7.12A3 3 0 0 1 20 9.243V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v-3m0-3v3m0 0h3m-3 0H9m11-2.757V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6.757a3 3 0 0 1 2.122.879L19.12 7.12A3 3 0 0 1 20 9.243" class="icon-dark"/>`
};
const cyDocumentPlusMinusX16 = {
  name: "documentPlusMinusX16",
  data: `<path fill="#D0D2E0" d="M3 15a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1z" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 6.5h4m-2 2v-4m-2 7h4M13 1H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1" class="icon-dark"/>`
};
const cyDocumentPlusMinusX24 = {
  name: "documentPlusMinusX24",
  data: `<path fill="#D0D2E0" d="M4 20V4a2 2 0 0 1 2-2h6.757a3 3 0 0 1 2.122.879L19.12 7.12A3 3 0 0 1 20 9.243V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13v-3m0-3v3m0 0h3m-3 0H9m0 7h6m5-7.757V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6.757a3 3 0 0 1 2.122.879L19.12 7.12A3 3 0 0 1 20 9.243" class="icon-dark"/>`
};
const cyDocumentScriptX24 = {
  name: "documentScriptX24",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 1h13a3 3 0 0 1 3 3v15M4 1H3a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h1m0-4v4m7 1h5m-5 4h5m-5 4h5M4 5v15a3 3 0 0 0 3 3v0m13-4h1a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H7m13-4H7v0a2.83 2.83 0 0 1 0 4v0" class="icon-dark"/><path fill="currentColor" d="M9 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0" class="icon-dark"/>`
};
const cyDocumentSheetX24 = {
  name: "documentSheetX24",
  data: `<path fill="currentColor" fill-rule="evenodd" d="M10 1a1 1 0 0 0-.707.293l-6 6A1 1 0 0 0 3 8v12a3 3 0 0 0 3 3h1a1 1 0 0 0 0-2H6a1 1 0 0 1-1-1V9h5a1 1 0 0 0 1-1V3h7a1 1 0 0 1 1 1v5a1 1 0 0 0 2 0V4a3 3 0 0 0-3-3zM9 7H6.414L9 4.414zm2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1zm1 4v-2h2v2zm4 0v-2h4v2zm0 4v-2h4v2zm-2-2v2h-2v-2z" class="icon-dark" clip-rule="evenodd"/>`
};
const cyDocumentStarX16 = {
  name: "documentStarX16",
  data: `<path fill="#D0D2E0" d="M3 15a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1z" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 5.75.001 2.248m0 0 2.139-.693M8 7.998 9.323 9.82M8 7.998 6.677 9.82m1.324-1.822-2.14-.693M13 1H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1" class="icon-dark"/>`
};
const cyDocumentStarX24 = {
  name: "documentStarX24",
  data: `<path fill="#D0D2E0" d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6.757a3 3 0 0 1 2.122.879L19.12 7.12A3 3 0 0 1 20 9.243V20a2 2 0 0 1-2 2z" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8.844v3.16m0 0 3.002-.98m-3.002.98 1.855 2.55M12 12.003l-1.855 2.55M12 12.003l-3.002-.98M20 9.244V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6.757a3 3 0 0 1 2.122.879L19.12 7.12A3 3 0 0 1 20 9.243" class="icon-dark"/>`
};
const cyDocumentTextX16 = {
  name: "documentTextX16",
  data: `<path fill="#D0D2E0" d="M2 14V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h3M5 5h6m-6 6h5m3-10H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1" class="icon-dark"/>`
};
const cyDotOutlineLargeX8 = {
  name: "dotOutlineLargeX8",
  data: `<circle cx="4" cy="4" r="3.5" fill="#D0D2E0" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="icon-light-fill icon-dark-stroke"/>`
};
const cyDotOutlineSmallX8 = {
  name: "dotOutlineSmallX8",
  data: `<circle cx="4" cy="4" r="2.5" fill="#D0D2E0" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="icon-light-fill icon-dark-stroke"/>`
};
const cyFileChangesAddedX24 = {
  name: "fileChangesAddedX24",
  data: `<path fill="#C2F1DE" d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12"/><path stroke="#00814D" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.999 9 11 15l-2.999-3"/>`
};
const cyFileChangesErrorX24 = {
  name: "fileChangesErrorX24",
  data: `<path fill="#FAD9DF" d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12"/><path stroke="#C62B49" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 9-3 3M9 9l3 3m0 0-3 3m3-3 3 3"/>`
};
const cyFileChangesSkippedX24 = {
  name: "fileChangesSkippedX24",
  data: `<path fill="#E1E3ED" d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12"/><path stroke="#9095AD" stroke-width="2" d="M8.464 15.536a5 5 0 1 0 7.072-7.072m-7.072 7.072a5 5 0 1 1 7.072-7.072m-7.072 7.072 7.072-7.072"/>`
};
const cyFileChangesWarningX24 = {
  name: "fileChangesWarningX24",
  data: `<path fill="#F3ECB3" d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12"/><path stroke="#BD5800" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7v7m0 2.99V17"/>`
};
const cyGeneral1XX16 = {
  name: "general1XX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 4 6 8m-6 0 6-8M5 12V4H2.5L1 5.5" class="icon-dark"/>`
};
const cyGeneralChatBubbleX16 = {
  name: "generalChatBubbleX16",
  data: `<path fill="#D0D2E0" stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M13 3H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2v3l5-3h3a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z" class="icon-dark-stroke icon-light-fill"/>`
};
const cyGeneralClipboardX16 = {
  name: "generalClipboardX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.5 2.585A1.5 1.5 0 0 0 2.5 4v9.5A1.5 1.5 0 0 0 4 15h8a1.5 1.5 0 0 0 1.5-1.5V4a1.5 1.5 0 0 0-1-1.415M7 4h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1" class="icon-dark"/>`
};
const cyGeneralCommandKeyX16 = {
  name: "generalCommandKeyX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 5v6m0-6h6M5 5V3a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2zm0 6h6m-6 0v2a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2v0a2 2 0 0 1 2-2zm6 0V5m0 6h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2zm0-6V3a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2z" class="icon-dark"/>`
};
const cyGeneralCrosshairsX16 = {
  name: "generalCrosshairsX16",
  data: `<path fill="currentColor" fill-rule="evenodd" d="M8 0a1 1 0 0 1 1 1v.07A7 7 0 0 1 14.93 7H15a1 1 0 1 1 0 2h-.07A7 7 0 0 1 9 14.93V15a1 1 0 1 1-2 0v-.07A7 7 0 0 1 1.07 9H1a1 1 0 0 1 0-2h.07A7.005 7.005 0 0 1 7 1.07V1a1 1 0 0 1 1-1M7 3.1A5.01 5.01 0 0 0 3.1 7H4a1 1 0 0 1 0 2h-.9A5.01 5.01 0 0 0 7 12.9V12a1 1 0 1 1 2 0v.9A5.01 5.01 0 0 0 12.9 9H12a1 1 0 1 1 0-2h.9A5.01 5.01 0 0 0 9 3.1V4a1 1 0 0 1-2 0z" class="icon-dark" clip-rule="evenodd"/><path fill="currentColor" d="M9 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0" class="icon-dark"/>`
};
const cyGeneralEarthX16 = {
  name: "generalEarthX16",
  data: `<path fill="#D0D2E0" d="M6.825 6.844c.384.53-.018.801-.527 1.144-.464.312-1.018.685-1.145 1.371-.145.785.128 1.563 1.175 2.079.238.117.181 1.293.13 2.358-.018.372-.035.73-.039 1.025l.186.04c2.044-.856 3.464-2.082 4.192-3.72.422-1.157-.406-2.5-1.313-2.953-.453-1.938 1.625-1.485 2.188-1.344.167 0 .122-.193.054-.488-.11-.477-.28-1.222.29-1.84.424-.461.998-.993 1.204-1.18A6.98 6.98 0 0 0 8 1c-.816 0-1.6.14-2.327.396-1.27 3.39-.613 3.948.902 5.235z" class="icon-light"/><path fill="#D0D2E0" fill-rule="evenodd" d="m6.605 14.861-.186-.04c.004-.295.021-.653.04-1.025.05-1.065.107-2.241-.13-2.358-1.048-.516-1.32-1.294-1.176-2.079.127-.686.68-1.059 1.145-1.371.51-.343.91-.613.527-1.144l-.25-.213C5.06 5.344 4.402 4.786 5.673 1.396A7 7 0 0 1 8 1c2.074 0 3.938.902 5.22 2.336-.206.188-.78.719-1.204 1.18-.57.618-.4 1.363-.29 1.84.068.295.113.488-.054.488-.563-.14-2.64-.594-2.188 1.343.907.454 1.735 1.797 1.313 2.954-.728 1.638-2.148 2.864-4.192 3.72" class="icon-light" clip-rule="evenodd"/><path stroke="currentColor" stroke-width="2" d="M5.673 1.396a7.003 7.003 0 0 0 .746 13.425M5.673 1.396A7 7 0 0 1 8 1c2.074 0 3.938.902 5.22 2.336m-7.547-1.94c-1.27 3.39-.613 3.948.902 5.235l.25.213c.384.53-.018.801-.527 1.144-.464.312-1.018.685-1.145 1.371-.145.785.128 1.563 1.175 2.079.238.117.181 1.293.13 2.358-.018.372-.035.73-.039 1.025m6.8-11.485c-.205.188-.779.719-1.203 1.18-.57.618-.4 1.363-.29 1.84.068.295.113.488-.054.488-.563-.14-2.64-.594-2.188 1.343.907.454 1.735 1.797 1.313 2.954-.728 1.638-2.148 2.864-4.192 3.72M13.22 3.336A7 7 0 0 1 6.606 14.86m0 0-.187-.04" class="icon-dark"/>`
};
const cyGeneralEyeClosedX16 = {
  name: "generalEyeClosedX16",
  data: `<path fill="currentColor" fill-rule="evenodd" d="M10.704 2.468A7.8 7.8 0 0 0 8 2C5.128 2 3.128 3.447 1.882 4.831a10.9 10.9 0 0 0-1.69 2.528 7 7 0 0 0-.11.242l-.006.018-.003.006v.002H.071a1 1 0 0 0 0 .744v.002l.001.002.003.006.007.018a4 4 0 0 0 .108.242 10.869 10.869 0 0 0 1.748 2.591l1.416-1.416A9 9 0 0 1 2.105 8q.065-.128.156-.288c.239-.423.605-.985 1.107-1.543C4.372 5.053 5.872 4 8 4q.568.001 1.077.094zM8.166 5.005a3 3 0 0 0-3.162 3.162zm-.334 5.99 3.162-3.162Q11 7.916 11 8a3 3 0 0 1-3.167 2.995m-.91.91Q7.433 12 8 12c2.128 0 3.628-1.053 4.632-2.169A8.9 8.9 0 0 0 13.895 8a8.872 8.872 0 0 0-1.25-1.816l1.416-1.416q.03.03.057.063a10.9 10.9 0 0 1 1.69 2.528 7 7 0 0 1 .11.242l.006.018.003.006.001.003L15 8l.928.372-.001.003-.003.006-.007.018a4 4 0 0 1-.108.242 10.87 10.87 0 0 1-1.69 2.528C12.871 12.554 10.871 14 8 14a7.8 7.8 0 0 1-2.703-.468zm9.005-3.533L15 8l.928-.372c.095.238.095.506 0 .744m-15.857 0L1 8zM1 8l-.928-.372z" class="icon-dark" clip-rule="evenodd"/><path stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" d="m2.5 13.5 11-11"/>`
};
const cyGeneralEyeOpenX16 = {
  name: "generalEyeOpenX16",
  data: `<path fill="#D0D2E0" d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0" class="icon-light"/><path fill="#D0D2E0" fill-rule="evenodd" d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0" class="icon-light" clip-rule="evenodd"/><path fill="currentColor" d="m1 8-.928-.371a1 1 0 0 0 0 .742zm14 0 .928.371a1 1 0 0 0 0-.742zM1 8l.928.372v.002l.013-.033.06-.13a8.868 8.868 0 0 1 1.368-2.043C4.371 5.054 5.871 4.001 8 4.001V2C5.128 2 3.128 3.447 1.882 4.831a10.9 10.9 0 0 0-1.69 2.528 7 7 0 0 0-.119.266v.002H.071c0 .001 0 .002.928.373m7-4c2.128 0 3.628 1.053 4.632 2.169A8.9 8.9 0 0 1 14 8.212l.059.13.012.028.002.004v-.001h-.001c0-.001 0-.002.928-.373l.928-.372v-.001l-.001-.002-.002-.006-.031-.073-.085-.187a10.868 10.868 0 0 0-1.69-2.528C12.871 3.447 10.871 2 8 2zm7 4-.928-.372v-.002l-.001.004-.012.029-.06.13a8.871 8.871 0 0 1-1.368 2.043c-1.003 1.114-2.503 2.168-4.631 2.168v2c2.872 0 4.872-1.447 6.118-2.831a10.9 10.9 0 0 0 1.69-2.528 7 7 0 0 0 .117-.26l.002-.006v-.002h.001c0-.001 0-.002-.928-.373m-7 4c-2.128 0-3.628-1.053-4.632-2.169A8.9 8.9 0 0 1 2 7.788l-.073-.162v.001h.001c0 .001 0 .002-.928.373l-.928.372v.001l.001.002.033.079q.03.07.085.187a10.868 10.868 0 0 0 1.69 2.528C3.129 12.554 5.129 14 8 14zm1-4a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3zM8 9a1 1 0 0 1-1-1H5a3 3 0 0 0 3 3zM7 8a1 1 0 0 1 1-1V5a3 3 0 0 0-3 3zm1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3z" class="icon-dark"/>`
};
const cyGeneralGlobeX16 = {
  name: "generalGlobeX16",
  data: `<path fill="#D0D2E0" d="M10.5 8c0-1.833-.252-3.502-.664-4.75C9.38 1.866 8.726 1 8 1s-1.38.866-1.836 2.25C5.752 4.498 5.5 6.167 5.5 8q0 .45.02.885C6.317 8.96 7.147 9 8 9s1.683-.04 2.48-.115q.02-.435.02-.885" class="icon-light"/><path fill="#D0D2E0" d="M8 1a6.98 6.98 0 0 0-5.142 2.25A6.98 6.98 0 0 0 1 7.971c1.292.437 2.832.755 4.52.914Q5.5 8.45 5.5 8c0-1.833.252-3.502.664-4.75C6.62 1.866 7.274 1 8 1" class="icon-light"/><path fill="#D0D2E0" d="M1 8c0 1.833.705 3.502 1.858 4.75A6.98 6.98 0 0 0 8 15c-.726 0-1.38-.866-1.836-2.25-.345-1.044-.577-2.382-.644-3.865-1.688-.16-3.228-.477-4.52-.914z" class="icon-light"/><path fill="#D0D2E0" d="M6.164 12.75C6.62 14.134 7.274 15 8 15s1.38-.866 1.836-2.25c.345-1.044.577-2.382.644-3.865C9.683 8.96 8.853 9 8 9s-1.683-.04-2.48-.115c.067 1.483.3 2.821.644 3.865" class="icon-light"/><path fill="#D0D2E0" d="M8 15a6.98 6.98 0 0 0 5.142-2.25A6.98 6.98 0 0 0 15 8v-.029c-1.292.437-2.832.755-4.52.914-.067 1.483-.3 2.821-.644 3.865C9.38 14.134 8.726 15 8 15" class="icon-light"/><path fill="#D0D2E0" d="M13.142 3.25A6.98 6.98 0 0 0 8 1c.726 0 1.38.866 1.836 2.25.412 1.248.664 2.917.664 4.75q0 .45-.02.885c1.688-.159 3.228-.477 4.52-.914a6.97 6.97 0 0 0-1.858-4.721" class="icon-light"/><path fill="currentColor" d="m13.142 3.25-.735.679zm-10.284 0 .735.679zm0 9.5.735-.679zm10.284 0-.735-.679zm-3.306-9.5-.95.313zm-3.672 0 .95.313zm0 9.5-.95.313zm3.672 0 .95.313zM15 7.971l1-.004zm-14 0-1-.004zM8 2c1.742 0 3.31.741 4.407 1.929l1.47-1.358A7.98 7.98 0 0 0 8 0zM3.593 3.929A5.98 5.98 0 0 1 8 2V0a7.98 7.98 0 0 0-5.876 2.571zM0 8c0 2.095.806 4.003 2.124 5.429l1.469-1.358A5.98 5.98 0 0 1 2 8zm8 6a5.98 5.98 0 0 1-4.407-1.929l-1.47 1.358A7.98 7.98 0 0 0 8 16zm0 2a7.98 7.98 0 0 0 5.876-2.571l-1.469-1.358A5.98 5.98 0 0 1 8 14zm6-8c0 1.572-.603 3-1.593 4.071l1.47 1.358A7.98 7.98 0 0 0 16 8zm-2.5 0c0-1.915-.262-3.693-.714-5.063l-1.9.626C9.259 4.69 9.5 6.248 9.5 8zM8 2c-.067 0 .02-.041.238.23.21.263.44.704.649 1.333l1.899-.626c-.249-.754-.573-1.439-.986-1.955C9.395.475 8.793 0 8 0zm-2.786.937C4.762 4.307 4.5 6.085 4.5 8h2c0-1.752.242-3.311.613-4.437zm1.9.626c.207-.63.438-1.07.648-1.333C7.98 1.96 8.067 2 8 2V0c-.793 0-1.395.475-1.8.982-.413.516-.737 1.2-.986 1.955zM8 14c.067 0-.02.041-.238-.23-.21-.263-.44-.704-.649-1.333l-1.899.626c.249.754.573 1.439.986 1.955.405.507 1.007.982 1.8.982zm0 2c.793 0 1.395-.475 1.8-.982.413-.516.737-1.2.986-1.955l-1.9-.626c-.207.63-.438 1.07-.648 1.333-.217.271-.305.23-.238.23zm8-8v-.033l-2 .008V8zm0-.033a7.98 7.98 0 0 0-2.124-5.396L12.407 3.93A5.98 5.98 0 0 1 14 7.975zM2.124 2.571A7.98 7.98 0 0 0 0 7.967l2 .008A5.98 5.98 0 0 1 3.593 3.93zM0 7.967V8h2v-.025zM4.5 8q0 .472.02.93l1.999-.09A19 19 0 0 1 6.5 8zm.926 1.88C6.255 9.96 7.116 10 8 10V8q-1.235-.001-2.386-.11zM8 10c.884 0 1.745-.041 2.574-.12l-.188-1.99C9.621 7.962 8.822 8 8 8zm3.48-1.07q.02-.457.02-.93h-2q0 .428-.019.84zm-.906.95c1.752-.165 3.37-.496 4.746-.961l-.64-1.895c-1.207.408-2.67.712-4.294.866zM9.481 8.84c-.063 1.413-.284 2.658-.594 3.597l1.899.626c.38-1.149.623-2.58.693-4.133zm-3.867-.95c-1.625-.154-3.087-.458-4.294-.866L.68 8.919c1.377.465 2.994.797 4.746.962zM4.52 8.93c.07 1.553.314 2.985.693 4.133l1.9-.626c-.31-.94-.532-2.184-.595-3.597zM0 7.97 0 7.997l2 .004v-.029zM16 7.997v-.029l-2 .004v.029z" class="icon-dark"/>`
};
const cyGeneralGlobeX48 = {
  name: "generalGlobeX48",
  data: `<path fill="#D0D2E0" d="M31 24h12c0-4.976-1.913-9.506-5.044-12.893-2.187 1.12-4.967 1.978-8.105 2.458C30.577 16.56 31 20.146 31 24" class="icon-light"/><path fill="#D0D2E0" d="M29.85 13.565c3.139-.48 5.92-1.337 8.106-2.458A18.95 18.95 0 0 0 24 5c2.446 0 4.6 3.406 5.85 8.565" class="icon-light"/><path fill="#D0D2E0" d="M24 5c-2.446 0-4.6 3.406-5.85 8.565 1.842.283 3.809.435 5.85.435s4.008-.152 5.85-.435C28.6 8.405 26.447 5 24 5" class="icon-light"/><path fill="#D0D2E0" d="M17 24h14c0-3.854-.423-7.44-1.15-10.435-1.842.283-3.809.435-5.85.435s-4.008-.152-5.85-.435C17.422 16.56 17 20.146 17 24" class="icon-light"/><path fill="#D0D2E0" d="M5 24h12c0-3.854.423-7.44 1.15-10.435-3.139-.48-5.92-1.337-8.106-2.458A18.93 18.93 0 0 0 5 24" class="icon-light"/><path fill="#D0D2E0" d="M18.15 13.565C19.4 8.405 21.553 5 24 5a18.95 18.95 0 0 0-13.956 6.107c2.186 1.12 4.967 1.978 8.105 2.458M18.15 34.435c-3.139.48-5.92 1.337-8.106 2.458A18.95 18.95 0 0 0 24 43c-2.446 0-4.6-3.406-5.85-8.565" class="icon-light"/><path fill="#D0D2E0" d="M17 24H5c0 4.976 1.913 9.506 5.044 12.893 2.186-1.12 4.967-1.978 8.105-2.458C17.423 31.44 17 27.854 17 24" class="icon-light"/><path fill="#D0D2E0" d="M31 24H17c0 3.854.423 7.44 1.15 10.435A39 39 0 0 1 24 34c2.041 0 4.008.153 5.85.435C30.578 31.44 31 27.854 31 24" class="icon-light"/><path fill="#D0D2E0" d="M18.15 34.435C19.4 39.595 21.553 43 24 43s4.6-3.406 5.85-8.565A39 39 0 0 0 24 34c-2.041 0-4.008.153-5.85.435" class="icon-light"/><path fill="#D0D2E0" d="M24 43a18.95 18.95 0 0 0 13.956-6.107c-2.187-1.12-4.967-1.978-8.105-2.458C28.599 39.595 26.446 43 24 43" class="icon-light"/><path fill="#D0D2E0" d="M43 24H31c0 3.854-.423 7.44-1.15 10.435 3.139.48 5.92 1.337 8.106 2.458A18.93 18.93 0 0 0 43 24" class="icon-light"/><path fill="currentColor" d="M24 14v1zm0 20v-1zm19-11H5v2h38zm-12 2h12v-2H31zm13-1a19.93 19.93 0 0 0-5.31-13.572l-1.468 1.358A17.93 17.93 0 0 1 42 24zm-6.5-13.783c-2.071 1.062-4.745 1.892-7.8 2.36l.302 1.977c3.22-.494 6.108-1.377 8.41-2.557zm-8.621 3.584C29.584 16.709 30 20.215 30 24h2c0-3.923-.43-7.59-1.177-10.67zM24 6c.723 0 1.61.51 2.542 1.904.912 1.363 1.727 3.381 2.337 5.897l1.944-.472c-.642-2.643-1.529-4.908-2.618-6.537C27.135 5.192 25.723 4 24 4zm5.7 6.577A38 38 0 0 1 24 13v2c2.09 0 4.108-.156 6.002-.446zM24 6a17.95 17.95 0 0 1 13.222 5.786l1.469-1.358A19.95 19.95 0 0 0 24 4zm0-2c-1.723 0-3.136 1.193-4.205 2.792-1.089 1.63-1.976 3.894-2.618 6.538l1.944.47c.61-2.515 1.425-4.533 2.337-5.896C22.39 6.51 23.278 6 24 6zm-6.002 10.554c1.894.29 3.911.446 6.002.446v-2c-1.992 0-3.908-.149-5.7-.423zM18 24c0-3.785.416-7.29 1.121-10.2l-1.944-.47C16.43 16.41 16 20.077 16 24zm-1 1h14v-2H17zM5 25h12v-2H5zm13.3-12.423c-3.055-.468-5.729-1.298-7.8-2.36l-.912 1.78c2.302 1.18 5.19 2.063 8.41 2.557zm-8.99-2.149A19.93 19.93 0 0 0 4 24h2c0-4.715 1.811-9.004 4.778-12.214zm1.468 1.358A17.95 17.95 0 0 1 24 6V4a19.95 19.95 0 0 0-14.69 6.428zM4 24a19.93 19.93 0 0 0 5.31 13.572l1.468-1.358A17.93 17.93 0 0 1 6 24zm6.5 13.783c2.071-1.062 4.745-1.892 7.8-2.36l-.302-1.977c-3.22.494-6.108 1.377-8.41 2.557zm8.621-3.584C18.416 31.291 18 27.785 18 24h-2c0 3.923.43 7.59 1.177 10.67zM24 42c-.723 0-1.61-.51-2.542-1.904-.912-1.363-1.727-3.381-2.337-5.897l-1.944.471c.642 2.644 1.529 4.909 2.618 6.538C20.865 42.808 22.277 44 24 44zm-5.7-6.577A38 38 0 0 1 24 35v-2c-2.09 0-4.108.156-6.002.446zM24 42a17.95 17.95 0 0 1-13.222-5.786L9.31 37.572A19.95 19.95 0 0 0 24 44zm0-7c1.992 0 3.908.149 5.7.423l.302-1.977A40 40 0 0 0 24 33zm6.823-.33C31.57 31.59 32 27.923 32 24h-2c0 3.785-.416 7.29-1.121 10.2zm-1.944-.47c-.61 2.515-1.425 4.533-2.337 5.896C25.61 41.49 24.722 42 24 42v2c1.723 0 3.136-1.193 4.205-2.792 1.089-1.63 1.976-3.894 2.618-6.538zM24 44a19.95 19.95 0 0 0 14.69-6.428l-1.468-1.358A17.95 17.95 0 0 1 24 42zm14.412-7.997c-2.302-1.18-5.19-2.063-8.41-2.557l-.303 1.977c3.056.468 5.73 1.298 7.801 2.36zM42 24c0 4.715-1.811 9.004-4.778 12.214l1.469 1.358A19.93 19.93 0 0 0 44 24z" class="icon-dark"/>`
};
const cyGeneralGrid2X2X16 = {
  name: "generalGrid2X2X16",
  data: `<path fill="#D0D2E0" d="M2 2h4v4H2zM2 10h4v4H2zM10 2h4v4h-4zM10 10h4v4h-4z" class="icon-light" style="opacity:.35"/><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M2 2h4v4H2zM2 10h4v4H2zM10 2h4v4h-4zM10 10h4v4h-4z" class="icon-dark"/>`
};
const cyGeneralGrid2X2X24 = {
  name: "generalGrid2X2X24",
  data: `<path fill="#D0D2E0" d="M3 3h7v7H3zM3 14h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7z" class="icon-light" style="opacity:.35"/><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M3 3h7v7H3zM3 14h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7z" class="icon-dark"/>`
};
const cyGeneralGrid2X2MediumX16 = {
  name: "generalGrid2X2MediumX16",
  data: `<path fill="#D0D2E0" d="M3 3h3v3H3zM3 10h3v3H3zM10 3h3v3h-3zM10 10h3v3h-3z" class="icon-light"/><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M3 3h3v3H3zM3 10h3v3H3zM10 3h3v3h-3zM10 10h3v3h-3z" class="icon-dark"/>`
};
const cyGeneralGrid2X2SmallX16 = {
  name: "generalGrid2X2SmallX16",
  data: `<path fill="#D0D2E0" d="M3.5 3.5h3v3h-3zM3.5 9.5h3v3h-3zM9.5 3.5h3v3h-3zM9.5 9.5h3v3h-3z" class="icon-light"/><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M3.5 3.5h3v3h-3zM3.5 9.5h3v3h-3zM9.5 3.5h3v3h-3zM9.5 9.5h3v3h-3z" class="icon-dark"/>`
};
const cyGeneralHandleVerticalX16 = {
  name: "generalHandleVerticalX16",
  data: `<path fill="currentColor" d="M7 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0M11 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0M11 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0M11 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0M11 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0" class="icon-dark"/>`
};
const cyGeneralLifeRingX16 = {
  name: "generalLifeRingX16",
  data: `<path fill="#D0D2E0" fill-rule="evenodd" d="M8 1a7 7 0 0 1 7 7h-4a3 3 0 0 0-3-3zM5 8H1a7 7 0 0 0 7 7v-4a3 3 0 0 1-3-3" class="icon-light" clip-rule="evenodd"/><path stroke="currentColor" stroke-width="2" d="M15 8a7 7 0 0 1-7 7m7-7a7 7 0 0 0-7-7m7 7h-4m-3 7a7 7 0 0 1-7-7m7 7v-4M1 8a7 7 0 0 1 7-7M1 8h4m3-7v4m3 3a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m0 6a3 3 0 0 1-3-3m0 0a3 3 0 0 1 3-3" class="icon-dark"/>`
};
const cyGeneralOfficeBuildingX16 = {
  name: "generalOfficeBuildingX16",
  data: `<path fill="#D0D2E0" d="M10 4v10h4a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z" class="icon-light"/><path stroke="currentColor" stroke-width="2" d="M10 14H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v2m0 10V4m0 10h4a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-4" class="icon-dark"/><path fill="currentColor" d="M3 3.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM12 6.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0zM12 9.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0zM3 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM3 9.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM6 3.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM6 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM6 9.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" class="icon-dark"/>`
};
const cyGeneralPlaceholderX12 = {
  name: "generalPlaceholderX12",
  data: `<path fill="#D0D2E0" d="M9.55 2.45c1.933 1.934 1.933 5.166 0 7.1s-5.166 1.933-7.1 0-1.933-5.166 0-7.1 5.166-1.933 7.1 0" class="icon-light"/><path stroke="currentColor" stroke-width="2" d="m6 6 3.55-3.55M6 6 2.45 2.45M6 6l3.55 3.55M6 6 2.45 9.55m7.1-7.1c1.933 1.934 1.933 5.166 0 7.1m0-7.1C7.616.517 4.384.517 2.45 2.45m0 0c-1.933 1.934-1.933 5.166 0 7.1m7.1 0c-1.934 1.933-5.166 1.933-7.1 0" class="icon-dark"/>`
};
const cyGeneralPlaceholderX16 = {
  name: "generalPlaceholderX16",
  data: `<path fill="#D0D2E0" d="M12.97 3.03c2.707 2.708 2.707 7.232 0 9.94-2.708 2.707-7.232 2.707-9.94 0-2.707-2.708-2.707-7.232 0-9.94 2.708-2.707 7.232-2.707 9.94 0" class="icon-light"/><path stroke="currentColor" stroke-width="2" d="m8 8 4.97-4.97M8 8 3.03 3.03M8 8l4.97 4.97M8 8l-4.97 4.97m9.94-9.94c2.707 2.708 2.707 7.232 0 9.94m0-9.94C10.261.324 5.737.324 3.03 3.03m0 0c-2.707 2.708-2.707 7.232 0 9.94m9.94 0c-2.708 2.707-7.232 2.707-9.94 0" class="icon-dark"/>`
};
const cyGeneralPlaceholderX24 = {
  name: "generalPlaceholderX24",
  data: `<path fill="#D0D2E0" d="M19.1 4.9c3.867 3.869 3.867 10.332 0 14.2-3.869 3.867-10.331 3.867-14.2 0-3.867-3.869-3.867-10.331 0-14.2 3.869-3.867 10.332-3.867 14.2 0" class="icon-light"/><path stroke="currentColor" stroke-width="2" d="m12 12 7.1-7.1M12 12 4.9 4.9M12 12l7.1 7.1M12 12l-7.1 7.1M19.1 4.9c3.867 3.869 3.867 10.332 0 14.2m0-14.2C15.23 1.034 8.768 1.034 4.9 4.9m0 0c-3.867 3.869-3.867 10.332 0 14.2m14.2 0c-3.869 3.867-10.331 3.867-14.2 0" class="icon-dark"/>`
};
const cyGeneralPlaceholderX48 = {
  name: "generalPlaceholderX48",
  data: `<path fill="#D0D2E0" d="M38.198 9.802c7.736 7.735 7.736 20.66 0 28.396s-20.66 7.736-28.396 0-7.736-20.66 0-28.396 20.66-7.736 28.396 0" class="icon-light"/><path stroke="currentColor" stroke-width="2" d="M24 24 38.198 9.802M24 24 9.802 9.802M24 24l14.198 14.198M24 24 9.802 38.198M38.198 9.802c7.736 7.735 7.736 20.66 0 28.396m0-28.396c-7.735-7.736-20.66-7.736-28.396 0m0 0c-7.736 7.735-7.736 20.66 0 28.396m28.396 0c-7.735 7.736-20.66 7.736-28.396 0" class="icon-dark"/>`
};
const cyGeneralRocketX16 = {
  name: "generalRocketX16",
  data: `<path d="M3.5 9.5 1 11l4 4 1.5-2.5z" class="icon-light"/><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="m7.5 13.5-1-1m1 1 1 1 3-3v-2m-4 4 4-4m-9-1 1 1m-1-1-1-1 3-3h2m-4 4 4-4m-3 5L1 11l4 4 1.5-2.5m-3-3 3 3m5-3 1.621-1.621A3 3 0 0 0 14 5.757V2h-3.757a3 3 0 0 0-2.122.879L6.5 4.5" class="icon-dark"/><path stroke="currentColor" stroke-linecap="round" d="M9 11.5 4.5 7" class="icon-dark"/><circle cx="10.5" cy="5.5" r="1" fill="currentColor" class="icon-dark"/>`
};
const cyGeneralRocketX24 = {
  name: "generalRocketX24",
  data: `<path d="m6 13.5-3 2L8.5 21l2-3zM3.635 11.135 5 12.5l5.23-5.23H7.5zM11.5 19l1.365 1.365 3.866-3.865v-2.73z" class="icon-light"/><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M16.73 13.77v2.73l-3.865 3.865L11.5 19m5.23-5.23L11.5 19m5.23-5.23 3.098-3.098A4 4 0 0 0 21 7.843V3h-4.843a4 4 0 0 0-2.829 1.172l-3.097 3.097m0 0H7.5l-3.865 3.866L5 12.5m5.23-5.23L5 12.5m0 0 6.5 6.5M6 13.5l-3 2L8.5 21l2-3z" class="icon-dark"/><path fill="#1B1E2E" d="M.146 19.646a.5.5 0 0 0 .708.708zm0 3.5a.5.5 0 0 0 .708.708zm3.5 0a.5.5 0 0 0 .708.708zm-1.5-5.5-2 2 .708.708 2-2zm1.75 1.75-3.75 3.75.708.708 3.75-3.75zm1.75 1.75-2 2 .708.708 2-2z" opacity=".4"/><path stroke="currentColor" stroke-linecap="round" d="m13.5 16.5-6-6" class="icon-dark"/><circle cx="16.5" cy="7.5" r="1.5" stroke="currentColor" class="icon-dark-stroke icon-light-fill"/>`
};
const cyLoadingX16 = {
  name: "loadingX16",
  data: `<circle cx="8" cy="8" r="6" stroke="#D0D2E0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 8a6 6 0 0 0-6-6" class="icon-dark"/>`
};
const cyMenuDotsVerticalX16 = {
  name: "menuDotsVerticalX16",
  data: `<path fill="currentColor" d="M10 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0M10 14a2 2 0 1 1-4 0 2 2 0 0 1 4 0" class="icon-dark"/>`
};
const cyMenuExpandLeftX16 = {
  name: "menuExpandLeftX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 3H8m6 5H2m0 0 2.5-2.5M2 8l2.5 2.5M14 13H8" class="icon-dark"/>`
};
const cyMenuExpandRightX16 = {
  name: "menuExpandRightX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 3h6M2 8h12m0 0-2.5-2.5M14 8l-2.5 2.5M2 13h6" class="icon-dark"/>`
};
const cyMenuHamburgerX24 = {
  name: "menuHamburgerX24",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 6h22M1 12h14M1 18h18" class="icon-dark"/>`
};
const cyNumber1X24 = {
  name: "number1X24",
  data: `<circle cx="12" cy="12" r="12" fill="#D0D2E0" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17V8h-2L9.5 9.5" class="icon-dark"/>`
};
const cyNumber2X24 = {
  name: "number2X24",
  data: `<circle cx="12" cy="12" r="12" fill="#D0D2E0" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 16H9l4.5-4c2-2 1-5-1.5-5S9 9.5 9 9.5" class="icon-dark"/>`
};
const cyNumber3X24 = {
  name: "number3X24",
  data: `<circle cx="12" cy="12" r="12" fill="#D0D2E0" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 15c.5 3 5.5 3 6 0 0-2.5-3-3-3-3l3-4H9" class="icon-dark"/>`
};
const cyNumber4X24 = {
  name: "number4X24",
  data: `<circle cx="12" cy="12" r="12" fill="#D0D2E0" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 17V8h-2l-3 6h7" class="icon-dark"/>`
};
const cyNumber5X24 = {
  name: "number5X24",
  data: `<circle cx="12" cy="12" r="12" fill="#D0D2E0" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 8h-4l-.5 4h2c1.657 0 3 1.12 3 2.5S13.657 17 12 17c-.982 0-1.853-.393-2.4-1" class="icon-dark"/>`
};
const cyNumberOctothorpeX24 = {
  name: "numberOctothorpeX24",
  data: `<circle cx="12" cy="12" r="12" fill="#D0D2E0" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 6 8 18m5 0 3-12m2 4H7m10 4H6" class="icon-dark"/>`
};
const cyObjectBookX16 = {
  name: "objectBookX16",
  data: `<path fill="#D0D2E0" d="M13 2H4a1 1 0 0 0-1 1v8h10z" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 11V2H4m9 9H4m9 0v3H4m-1-3v2a1 1 0 0 0 1 1v0m-1-3V3a1 1 0 0 1 1-1v0m-1 9h1m0-9v9m0 0v3m6-9H7" class="icon-dark"/>`
};
const cyObjectBookX24 = {
  name: "objectBookX24",
  data: `<path fill="#D0D2E0" d="M20 3H5a1 1 0 0 0-1 1v13h16z" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 17V3H5m15 14H5m15 0v4H5m-1-4v3a1 1 0 0 0 1 1v0m-1-4V4a1 1 0 0 1 1-1v0M4 17h1M5 3v14m0 0v4M16 7H9m0 3h6" class="icon-dark"/>`
};
const cyObjectBookX48 = {
  name: "objectBookX48",
  data: `<path fill="#D0D2E0" d="M40 5H10a2 2 0 0 0-2 2v28h32z" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M40 43h-1M8 35v6a2 2 0 0 0 2 2v0m-2-8V7a2 2 0 0 1 2-2v0M8 35h2m0-30h30v30h-1M10 5v30m0 0v8m0-8h29m-29 8h29M16 17h13m10 18s-1 4 0 8m-5-32H16v2h18z" class="icon-dark"/><path fill="#69D3A7" d="M14 39h8v8l-4-1.714L14 47z" class="icon-light-secondary"/><path fill="#00814D" d="M14 39v-1h-1v1zm8 0h1v-1h-1zm0 8-.394.92A1 1 0 0 0 23 47zm-8 0h-1a1 1 0 0 0 1.394.92zm4-1.714.394-.92a1 1 0 0 0-.788 0zM14 40h8v-2h-8zm7-1v8h2v-8zm-6 8v-8h-2v8zm7.394-.92-4-1.713-.788 1.838 4 1.714zm-4.788-1.713-4 1.714.788 1.838 4-1.714z" class="icon-dark-secondary"/>`
};
const cyObjectBookCodeX48 = {
  name: "objectBookCodeX48",
  data: `<path fill="#D0D2E0" d="M40 5H10a2 2 0 0 0-2 2v28h32z" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M40 43h-1M8 35v6a2 2 0 0 0 2 2v0m-2-8V7a2 2 0 0 1 2-2v0M8 35h2m0-30h30v30h-1M10 5v30m0 0v8m0-8h29m-29 8h29m0-8s-1 4 0 8M21 17l-3 3 3 3m8-6 3 3-3 3m-5.5 2.5 3-11" class="icon-dark"/><path fill="#69D3A7" d="M14 39h8v8l-4-1.714L14 47z" class="icon-light-secondary"/><path fill="#00814D" d="M14 39v-1h-1v1zm8 0h1v-1h-1zm0 8-.394.92A1 1 0 0 0 23 47zm-8 0h-1a1 1 0 0 0 1.394.92zm4-1.714.394-.92a1 1 0 0 0-.788 0zM14 40h8v-2h-8zm7-1v8h2v-8zm-6 8v-8h-2v8zm7.394-.92-4-1.713-.788 1.838 4 1.714zm-4.788-1.713-4 1.714.788 1.838 4-1.714z" class="icon-dark-secondary"/>`
};
const cyObjectBookmarkX16 = {
  name: "objectBookmarkX16",
  data: `<path fill="#D0D2E0" fill-rule="evenodd" d="M11 2a2 2 0 0 1 2 2v10l-5-2-5 2V4a2 2 0 0 1 2-2zM8.388 6.515 8 5.049l-.388 1.466-1.514-.084 1.274.822-.548 1.414L8 7.709l1.176.958-.548-1.414 1.274-.822z" class="icon-light" clip-rule="evenodd"/><path fill="currentColor" d="m13 14-.371.928A1 1 0 0 0 14 14zm-5-2 .371-.928a1 1 0 0 0-.742 0zm-5 2H2a1 1 0 0 0 1.371.928zm5-8.951.967-.256a1 1 0 0 0-1.934 0zm.388 1.466-.967.255a1 1 0 0 0 1.022.743zm1.514-.084.542.84a1 1 0 0 0-.597-1.839zm-1.274.822-.542-.84a1 1 0 0 0-.39 1.2zm.548 1.414-.632.775a1 1 0 0 0 1.564-1.137zM8 7.709l.632-.776a1 1 0 0 0-1.264 0zm-1.176.958-.932-.362a1 1 0 0 0 1.564 1.137zm.548-1.414.933.36a1 1 0 0 0-.39-1.2zM6.098 6.43l.055-.999a1 1 0 0 0-.597 1.839zm1.514.084-.055.998a1 1 0 0 0 1.022-.743zM12 4v10h2V4zm1.371 9.072-5-2-.742 1.857 5 2zm-5.742-2-5 2 .742 1.857 5-2zM5 3h6V1H5zM4 14V4H2v10zm3.033-8.696.388 1.466 1.934-.511-.388-1.466zm1.41 2.21 1.515-.085-.111-1.997-1.515.084zM9.36 5.59l-1.274.822L9.17 8.093l1.274-.822zM7.695 7.614l.548 1.414 1.865-.723-.548-1.414zm2.112.277-1.175-.958-1.264 1.55 1.176.959zm-2.439-.958-1.175.958 1.263 1.55 1.176-.957zm.389 2.095.548-1.414L6.44 6.89l-.548 1.414zm.157-2.616L6.64 5.59 5.556 7.271l1.274.822zM6.042 7.43l1.515.084.11-1.997-1.514-.084zM8.58 6.77l.388-1.466-1.934-.511-.388 1.466zM5 1a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1zm9 3a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1z" class="icon-dark"/>`
};
const cyObjectBookmarkX24 = {
  name: "objectBookmarkX24",
  data: `<path fill="#D0D2E0" fill-rule="evenodd" d="M17 3a3 3 0 0 1 3 3v15l-8-3-8 3V6a3 3 0 0 1 3-3zm-4.418 6.772L12 7.572l-.582 2.2-2.271-.126 1.912 1.233L10.237 13 12 11.563 13.763 13l-.822-2.121 1.912-1.233z" class="icon-light" clip-rule="evenodd"/><path fill="currentColor" d="m20 21-.351.936A1 1 0 0 0 21 21zm-8-3 .351-.936a1 1 0 0 0-.702 0zm-8 3H3a1 1 0 0 0 1.351.936zm8-13.427.967-.256a1 1 0 0 0-1.934 0zm.582 2.199-.967.256a1 1 0 0 0 1.022.742zm2.271-.126.542.84a1 1 0 0 0-.597-1.839zm-1.912 1.233-.542-.84a1 1 0 0 0-.39 1.201zM13.763 13l-.631.775a1 1 0 0 0 1.564-1.136zM12 11.563l.632-.775a1 1 0 0 0-1.264 0zM10.237 13l-.933-.361a1 1 0 0 0 1.564 1.136zm.822-2.121.932.361a1 1 0 0 0-.39-1.201zM9.147 9.646l.055-.999a1 1 0 0 0-.597 1.84zm2.271.126-.055.999a1 1 0 0 0 1.022-.743zM19 6v15h2V6zm1.351 14.064-8-3-.702 1.872 8 3zm-8.702-3-8 3 .702 1.872 8-3zM7 4h10V2H7zM5 21V6H3v15zm6.033-13.171.582 2.199 1.934-.512-.582-2.199zm1.604 2.942 2.272-.127-.111-1.997-2.271.127zm1.674-1.965L12.4 10.039l1.085 1.68 1.911-1.233zM12.01 11.24l.822 2.121 1.865-.722-.822-2.121zm2.386.985-1.763-1.437-1.264 1.55 1.764 1.437zm-3.027-1.437-1.763 1.437 1.263 1.55 1.764-1.437zm-.199 2.573.822-2.12-1.865-.723-.822 2.12zm.431-3.322L9.69 8.806l-1.084 1.68 1.911 1.233zm-2.509.605 2.272.127.11-1.997-2.27-.127zm3.294-.616.582-2.2-1.934-.51-.582 2.198zM7 2a4 4 0 0 0-4 4h2a2 2 0 0 1 2-2zm14 4a4 4 0 0 0-4-4v2a2 2 0 0 1 2 2z" class="icon-dark"/>`
};
const cyObjectBoxX16 = {
  name: "objectBoxX16",
  data: `<path fill="#D0D2E0" d="M14.5 11.133V4.866a.7.7 0 0 0-.101-.362L8 8v7c.12 0 .242-.03.35-.09l5.779-3.156a.71.71 0 0 0 .371-.621" class="icon-light"/><path fill="#D0D2E0" d="M1.871 11.754 7.65 14.91c.11.06.23.09.351.09V8L1.601 4.504a.7.7 0 0 0-.101.362v6.267c0 .258.142.495.371.62" class="icon-light"/><path fill="#D0D2E0" d="M7.65 1.089 1.87 4.246a.7.7 0 0 0-.27.258L8 8l6.399-3.496a.7.7 0 0 0-.27-.258L8.35 1.089a.73.73 0 0 0-.702 0" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 8 6.399-3.496M8 8v7m0-7L1.601 4.504m12.798 0a.7.7 0 0 1 .101.362v6.267a.71.71 0 0 1-.371.62L8.35 14.91c-.11.06-.23.09-.351.09m6.399-10.496a.7.7 0 0 0-.27-.258L8.35 1.089a.73.73 0 0 0-.702 0L1.871 4.246a.7.7 0 0 0-.27.258M8 15a.73.73 0 0 1-.35-.09L1.87 11.754a.71.71 0 0 1-.371-.621V4.866a.7.7 0 0 1 .101-.362" class="icon-dark"/>`
};
const cyObjectBoxX24 = {
  name: "objectBoxX24",
  data: `<path fill="#D0D2E0" d="M21 16.412V7.588a1 1 0 0 0-.14-.51L12 12v9.856a1 1 0 0 0 .486-.126l8-4.444a1 1 0 0 0 .514-.874M3.514 17.286l8 4.444a1 1 0 0 0 .486.126V12L3.14 7.078a1 1 0 0 0-.14.51v8.824a1 1 0 0 0 .514.874" class="icon-light"/><path fill="#D0D2E0" d="m11.514 2.27-8 4.444a1 1 0 0 0-.374.364L12 12l8.86-4.922a1 1 0 0 0-.374-.364l-8-4.444a1 1 0 0 0-.972 0" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 12 8.86-4.922M12 12v9.856M12 12 3.14 7.078m17.72 0a1 1 0 0 1 .14.51v8.824a1 1 0 0 1-.514.874l-8 4.444a1 1 0 0 1-.486.126m8.86-14.778a1 1 0 0 0-.374-.364l-8-4.444a1 1 0 0 0-.972 0l-8 4.444a1 1 0 0 0-.374.364M12 21.856a1 1 0 0 1-.486-.126l-8-4.444A1 1 0 0 1 3 16.412V7.588a1 1 0 0 1 .14-.51" class="icon-dark"/>`
};
const cyObjectBoxOpenX48 = {
  name: "objectBoxOpenX48",
  data: `<path fill="#D0D2E0" fill-rule="evenodd" d="M43 25.162 28.5 33 24 28.487V47l19-9.744z" class="icon-light" clip-rule="evenodd"/><path fill="#D0D2E0" d="M24 9 5 18.744l19 9.743 19-9.743z" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M24 47 5 37.256V25.162M24 47l19-9.744V25.162M24 47V28.487M24 9 5 18.744M24 9l19 9.744M24 9l4-4 19 9.5-4 4.244M24 9l-4-4-19 9.5 4 4.244m0 0 19 9.743M5 18.744 1 23l4 2.162m38-6.418-19 9.743m19-9.743L47 23l-4 2.162m-19 3.325L19.5 33 5 25.162m19 3.325L28.5 33 43 25.162" class="icon-dark"/><path fill="#1FA971" stroke="#00814D" stroke-linejoin="round" stroke-width="2" d="m18 7 1.131 2.869L22 11l-2.869 1.131L18 15l-1.131-2.869L14 11l2.869-1.131zM27 1l.849 2.151L30 4l-2.151.849L27 7l-.849-2.151L24 4l2.151-.849zM28 12l1.414 3.586L33 17l-3.586 1.414L28 22l-1.414-3.586L23 17l3.586-1.414z" class="icon-dark-secondary-stroke icon-light-secondary-fill"/>`
};
const cyObjectBriefcaseX16 = {
  name: "objectBriefcaseX16",
  data: `<path fill="#D0D2E0" fill-rule="evenodd" d="M2.5 14A1.5 1.5 0 0 1 1 12.5V7l7 3 7-3v5.5a1.5 1.5 0 0 1-1.5 1.5z" class="icon-light" clip-rule="evenodd"/><path fill="#D0D2E0" d="M9 9.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" class="icon-light"/><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M11 4H5m6 0V2.5A1.5 1.5 0 0 0 9.5 1h-3A1.5 1.5 0 0 0 5 2.5V4m6 0h2.5A1.5 1.5 0 0 1 15 5.5V7M5 4H2.5A1.5 1.5 0 0 0 1 5.5V7m0 0v5.5A1.5 1.5 0 0 0 2.5 14h11a1.5 1.5 0 0 0 1.5-1.5V7M1 7l7 3 7-3M9 9.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" class="icon-dark"/>`
};
const cyObjectBugX24 = {
  name: "objectBugX24",
  data: `<path fill="#D0D2E0" d="M15 10V7a3 3 0 1 0-6 0v3zM15 10H9a3.16 3.16 0 0 0-2 2v4a4.564 4.564 0 0 0 4.014 3.89l.685.076q.301.034.602 0l.685-.076A4.564 4.564 0 0 0 17 16v-4a3.16 3.16 0 0 0-2-2" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 12v2m0-2 .265-.088A4 4 0 0 0 20 8.117V7m-3 5v0a3.16 3.16 0 0 0-2-2v0m0 0V7a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v3m6 0H9m0 0v0a3.16 3.16 0 0 0-2 2v0m0 0v2m0-2-.265-.088A4 4 0 0 1 4 8.117V7m13 7h3m-3 0v2M7 14H4m3 0v2m10 0v0a4.564 4.564 0 0 1-4.014 3.89l-.685.076q-.301.034-.602 0l-.685-.076A4.564 4.564 0 0 1 7 16v0m10 0 .265.088A4 4 0 0 1 20 19.883V21M7 16l-.265.088A4 4 0 0 0 4 19.883V21" class="icon-dark"/>`
};
const cyObjectBugLargeX16 = {
  name: "objectBugLargeX16",
  data: `<path fill="#D0D2E0" fill-rule="evenodd" d="M6 6a2 2 0 0 0-2 2v4s1 3 4 3 4-3 4-3V8a2 2 0 0 0-2-2z" class="icon-light" clip-rule="evenodd"/><path fill="#D0D2E0" d="M6 6h4q.26 0 .5.063V3.5a2.5 2.5 0 0 0-5 0v2.563Q5.74 6.001 6 6" class="icon-light"/><path stroke="#1B1E2E" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12s-1 3-4 3-4-3-4-3m8 0v-2m0 2a3 3 0 0 1 3 3M4 12v-2m0 2a3 3 0 0 0-3 3m11-5h3m-3 0V8m-8 2H1m3 0V8m8 0a2 2 0 0 0-2-2m2 2a3 3 0 0 0 3-3M4 8a3 3 0 0 1-3-3m3 3a2 2 0 0 1 2-2m4 0H6m4 0q.26 0 .5.063V3.5a2.5 2.5 0 0 0-5 0v2.563Q5.74 6.001 6 6" class="icon-dark"/>`
};
const cyObjectBugSmallX16 = {
  name: "objectBugSmallX16",
  data: `<path fill="#D0D2E0" fill-rule="evenodd" d="M6 7H5v4s1 2 3 2 3-2 3-2V7H6" class="icon-light" clip-rule="evenodd"/><path fill="#D0D2E0" d="M6 5v2h4V5a2 2 0 1 0-4 0" class="icon-light"/><path fill="currentColor" d="M13 10a1 1 0 1 0 0-2zM3 8a1 1 0 0 0 0 2zm11-3a1 1 0 1 0-2 0zM4 5a1 1 0 0 0-2 0zm8 8a1 1 0 1 0 2 0zM2 13a1 1 0 1 0 2 0zm3-5h1V6H5zm2-1V5H5v2zM6 8h4V6H6zm4 0h1V6h-1zM9 5v2h2V5zm1 2v2h2V7zm1 3h2V8h-2zM6 9V7H4v2zM5 8H3v2h2zm5 1v2h2V9zm1 2-.894-.448v-.002l.002-.001v-.002l-.002.005a2 2 0 0 1-.126.206 3.6 3.6 0 0 1-.437.535C9.152 11.683 8.64 12 8 12v2c1.359 0 2.348-.684 2.957-1.293a5.6 5.6 0 0 0 .914-1.214l.015-.029.005-.01.002-.004v-.001l.001-.001zm-5 0V9H4v2zm2 1c-.641 0-1.152-.316-1.543-.707a3.6 3.6 0 0 1-.563-.741l-.002-.005v.002l.001.001v.002h.001L5 11l-.894.448.001.002.002.004.005.01a2 2 0 0 0 .065.118 5.555 5.555 0 0 0 .864 1.125C5.652 13.317 6.64 14 8 14zm0-8a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3zM7 5a1 1 0 0 1 1-1V2a3 3 0 0 0-3 3zm5 0a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3zM5 6a1 1 0 0 1-1-1H2a3 3 0 0 0 3 3zm6 6a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3zm-7 1a1 1 0 0 1 1-1v-2a3 3 0 0 0-3 3z" class="icon-dark"/>`
};
const cyObjectChainLinkX16 = {
  name: "objectChainLinkX16",
  data: `<path fill="currentColor" d="M10 3a1 1 0 1 0 0 2zm0 8a1 1 0 1 0 0 2zM6 5a1 1 0 0 0 0-2zm0 8a1 1 0 1 0 0-2zM5 7a1 1 0 0 0 0 2zm6 2a1 1 0 1 0 0-2zm-1-4h1V3h-1zm1 6h-1v2h1zM5 5h1V3H5zm1 6H5v2h1zM5 9h6V7H5zM2 8a3 3 0 0 1 3-3V3a5 5 0 0 0-5 5zM0 8a5 5 0 0 0 5 5v-2a3 3 0 0 1-3-3zm14 0a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5zm2 0a5 5 0 0 0-5-5v2a3 3 0 0 1 3 3z" class="icon-dark"/>`
};
const cyObjectFolderDarkX16 = {
  name: "objectFolderDarkX16",
  data: `<path fill="#D0D2E0" d="M14 13a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H9L7.293 4.707A1 1 0 0 1 6.586 5H1v7a1 1 0 0 0 1 1z" class="icon-light"/><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M9 3 7.293 1.293A1 1 0 0 0 6.586 1H2a1 1 0 0 0-1 1v3m8-2h5a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5m8-2L7.293 4.707A1 1 0 0 1 6.586 5H1" class="icon-dark"/>`
};
const cyObjectFolderDarkSmallX16 = {
  name: "objectFolderDarkSmallX16",
  data: `<path fill="#D0D2E0" d="M12.5 12a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-4L7.146 6.354a.5.5 0 0 1-.353.146H3v5a.5.5 0 0 0 .5.5z" class="icon-light"/><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M8.5 5 7.146 3.646a.5.5 0 0 0-.353-.146H3.5A.5.5 0 0 0 3 4v2.5M8.5 5h4a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-5M8.5 5 7.146 6.354a.5.5 0 0 1-.353.146H3" class="icon-dark"/>`
};
const cyObjectFolderLightX16 = {
  name: "objectFolderLightX16",
  data: `<path fill="#D0D2E0" fill-rule="evenodd" d="M7.293 2.293A1 1 0 0 0 6.586 2H2a1 1 0 0 0-1 1v3h5.586a1 1 0 0 0 .707-.293L9 4z" class="icon-light" clip-rule="evenodd"/><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M9 4 7.293 2.293A1 1 0 0 0 6.586 2H2a1 1 0 0 0-1 1v3m8-2h5a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6m8-2L7.293 5.707A1 1 0 0 1 6.586 6H1" class="icon-dark"/>`
};
const cyObjectFolderLightX24 = {
  name: "objectFolderLightX24",
  data: `<path fill="#D0D2E0" fill-rule="evenodd" d="M10.293 4.293A1 1 0 0 0 9.586 4H4a1 1 0 0 0-1 1v3h6.586a1 1 0 0 0 .707-.293L12 6z" class="icon-light" clip-rule="evenodd"/><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="m12 6-1.707-1.707A1 1 0 0 0 9.586 4H4a1 1 0 0 0-1 1v3m9-2h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8m9-2-1.707 1.707A1 1 0 0 1 9.586 8H3" class="icon-dark"/>`
};
const cyObjectGearX16 = {
  name: "objectGearX16",
  data: `<path fill="#D0D2E0" fill-rule="evenodd" d="M6.5 1h3a.5.5 0 0 1 .5.5v1.375a5.5 5.5 0 0 1 1.437.831l1.192-.688a.5.5 0 0 1 .683.183l1.5 2.598a.5.5 0 0 1-.183.683l-1.191.688a5.5 5.5 0 0 1 0 1.66l1.191.688a.5.5 0 0 1 .183.683l-1.5 2.598a.5.5 0 0 1-.683.183l-1.192-.688c-.43.345-.914.627-1.437.831V14.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1.375a5.5 5.5 0 0 1-1.437-.831l-1.192.688a.5.5 0 0 1-.683-.183l-1.5-2.598a.5.5 0 0 1 .183-.683l1.191-.688a5.5 5.5 0 0 1 0-1.66l-1.191-.688a.5.5 0 0 1-.183-.683l1.5-2.598a.5.5 0 0 1 .683-.183l1.192.688c.43-.345.914-.627 1.437-.831V1.5a.5.5 0 0 1 .5-.5M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" class="icon-light" clip-rule="evenodd"/><path fill="currentColor" d="m13.312 3.201-.866.5zm1.5 2.598.866-.5zm-12.124 7-.866.5zm-1.5-2.598.866-.5zm0-4.402.866.5zm1.5-2.598.866.5zm12.124 7 .866.5zm-1.5 2.598-.866-.5zM6 2.875l.364.931A1 1 0 0 0 7 2.875zm-1.437.831-.5.866a1 1 0 0 0 1.125-.086zM3.37 3.018l-.5.866zM2.562 7.17l.989.15a1 1 0 0 0-.489-1.016zm-1.191-.688.5-.866zM2.562 8.83l.5.866a1 1 0 0 0 .489-1.016zm-1.191.688.5.866zm3.192 2.776.625-.78a1 1 0 0 0-1.125-.086zm-1.192.688.5.866zM6 13.125h1a1 1 0 0 0-.636-.931zm4 0-.364-.931a1 1 0 0 0-.636.931zm1.437-.831.5-.866a1 1 0 0 0-1.125.086zm1.192.688-.5.866zm.809-4.152-.989-.15a1 1 0 0 0 .489 1.016zm1.191.688.5-.866zm0-3.036-.5-.866zm-1.191.688-.5-.866a1 1 0 0 0-.489 1.016zm-2-3.464-.626.78a1 1 0 0 0 1.125.086zm1.191-.688-.5-.866zM10 2.875H9a1 1 0 0 0 .636.931zM6.5 2h3V0h-3zm3 12h-3v2h3zm2.946-10.299 1.5 2.598 1.732-1-1.5-2.598zm-8.892 8.598-1.5-2.598-1.732 1 1.5 2.598zm-1.5-6 1.5-2.598-1.732-1-1.5 2.598zm11.892 3.402-1.5 2.598 1.732 1 1.5-2.598zM7 2.875V1.5H5v1.375zM5.188 4.486a4.5 4.5 0 0 1 1.176-.68l-.728-1.863a6.5 6.5 0 0 0-1.699.983zm-2.317-.602 1.192.688 1-1.732-1.192-.688zM3.5 8q0-.349.051-.68l-1.978-.3Q1.5 7.501 1.5 8zm-.438-1.696-1.191-.688-1 1.732 1.191.688zm.489 2.376A4.5 4.5 0 0 1 3.5 8h-2q0 .499.073.98zm-1.68 1.704 1.191-.688-1-1.732-1.191.688zm2.192 1.044-1.192.688 1 1.732 1.192-.688zm2.3.766a4.5 4.5 0 0 1-1.175-.68l-1.25 1.56c.508.408 1.08.741 1.698.982zM7 14.5v-1.375H5V14.5zm2-1.375V14.5h2v-1.375zm1.812-1.611a4.5 4.5 0 0 1-1.176.68l.728 1.862a6.5 6.5 0 0 0 1.699-.982zm2.317.602-1.192-.688-1 1.732 1.192.688zM12.5 8q0 .349-.051.68l1.978.3q.073-.481.073-.98zm.438 1.696 1.191.688 1-1.732-1.191-.688zm1.191-4.08-1.191.688 1 1.732 1.191-.688zM12.45 7.32q.051.331.051.68h2q0-.499-.073-.98zm-.512-2.748 1.192-.688-1-1.732-1.192.688zm-2.3-.766c.426.167.822.398 1.175.68l1.25-1.56a6.5 6.5 0 0 0-1.698-.983zM9 1.5v1.375h2V1.5zm3.446 10.799a.5.5 0 0 1 .683-.183l-1 1.732a1.5 1.5 0 0 0 2.05-.549zm3.232-1.598a1.5 1.5 0 0 0-.549-2.05l-1 1.733a.5.5 0 0 1-.183-.683zm-12.124-7a.5.5 0 0 1-.683.183l1-1.732a1.5 1.5 0 0 0-2.05.549zM.322 5.299a1.5 1.5 0 0 0 .549 2.05l1-1.733a.5.5 0 0 1 .183.683zm1.732 4.402a.5.5 0 0 1-.183.683l-1-1.732A1.5 1.5 0 0 0 .32 10.7zm-.232 3.598a1.5 1.5 0 0 0 2.049.55l-1-1.733a.5.5 0 0 1 .683.183zm12.124-7a.5.5 0 0 1 .183-.683l1 1.732a1.5 1.5 0 0 0 .55-2.049zm.232-3.598a1.5 1.5 0 0 0-2.049-.55l1 1.733a.5.5 0 0 1-.683-.183zM6.5 14a.5.5 0 0 1 .5.5H5A1.5 1.5 0 0 0 6.5 16zm3 2a1.5 1.5 0 0 0 1.5-1.5H9a.5.5 0 0 1 .5-.5zm0-14a.5.5 0 0 1-.5-.5h2A1.5 1.5 0 0 0 9.5 0zm-3-2A1.5 1.5 0 0 0 5 1.5h2a.5.5 0 0 1-.5.5zM9 8a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3zM8 9a1 1 0 0 1-1-1H5a3 3 0 0 0 3 3zM7 8a1 1 0 0 1 1-1V5a3 3 0 0 0-3 3zm1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3z" class="icon-dark"/>`
};
const cyObjectGearX24 = {
  name: "objectGearX24",
  data: `<path fill="#D0D2E0" fill-rule="evenodd" stroke="currentColor" stroke-width="2" d="M9.794 3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v1.417c0 .221.146.414.355.489.804.287 1.54.717 2.177 1.259a.52.52 0 0 0 .6.062l1.23-.71a.5.5 0 0 1 .683.184l1.5 2.598a.5.5 0 0 1-.184.683l-1.227.709a.52.52 0 0 0-.247.55 7 7 0 0 1 0 2.518c-.04.217.055.44.247.55l1.227.709a.5.5 0 0 1 .183.683l-1.5 2.598a.5.5 0 0 1-.683.183l-1.229-.71a.52.52 0 0 0-.6.063 7 7 0 0 1-2.177 1.26.525.525 0 0 0-.355.488V20.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1.417a.525.525 0 0 0-.354-.489 7 7 0 0 1-2.178-1.259.52.52 0 0 0-.6-.062l-1.229.71a.5.5 0 0 1-.683-.184l-1.5-2.598a.5.5 0 0 1 .183-.683l1.228-.709a.52.52 0 0 0 .246-.55 7 7 0 0 1 0-2.517.52.52 0 0 0-.246-.551l-1.228-.709a.5.5 0 0 1-.183-.683l1.5-2.598a.5.5 0 0 1 .683-.183l1.229.71c.191.11.432.08.6-.063a7 7 0 0 1 2.178-1.26.525.525 0 0 0 .354-.488zm2 11.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" class="icon-dark-stroke icon-light-fill" clip-rule="evenodd"/>`
};
const cyObjectGraduationCapX16 = {
  name: "objectGraduationCapX16",
  data: `<path fill="#D0D2E0" d="m8 3 7 3-2 .857V8.97a3 3 0 0 1-1.886 2.785l-2.371.949a2 2 0 0 1-1.486 0l-2.371-.949A3 3 0 0 1 3 8.97V6.857L1 6z" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 6.857 15 6 8 3 1 6l2 .857m10 0V8.97a3 3 0 0 1-1.886 2.785l-2.371.949a2 2 0 0 1-1.486 0l-2.371-.949A3 3 0 0 1 3 8.97V6.857m10 0L8 9 3 6.857" class="icon-dark"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 6v3" class="icon-dark"/>`
};
const cyObjectLetterX16 = {
  name: "objectLetterX16",
  data: `<path fill="#D0D2E0" d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5" class="icon-light"/><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M14.842 3.135 8 9 1.158 3.135m13.684 0A.5.5 0 0 0 14.5 3h-13a.5.5 0 0 0-.342.135m13.684 0c.097.092.158.221.158.365v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9c0-.144.06-.273.158-.365" class="icon-dark"/>`
};
const cyObjectMagicWandDarkModeX16 = {
  name: "objectMagicWandDarkModeX16",
  data: `<path fill="#D0D2E0" d="m5.5 3.5-2 2L6 8l2-2z" class="icon-light"/><path fill="currentColor" d="m5.5 3.5.707-.707a1 1 0 0 0-1.414 0zm8 8 .707.707a1 1 0 0 0 0-1.414zm-2 2-.707.707a1 1 0 0 0 1.414 0zm-8-8-.707-.707a1 1 0 0 0 0 1.414zm9.293 5.293-2 2 1.414 1.414 2-2zM4.207 6.207l2-2-1.414-1.414-2 2zm8 6.586-5.5-5.5-1.414 1.414 5.5 5.5zm-5.5-5.5-2.5-2.5-1.414 1.414 2.5 2.5zM4.793 4.207l2.5 2.5 1.414-1.414-2.5-2.5zm2.5 2.5 5.5 5.5 1.414-1.414-5.5-5.5zm-.586 2 2-2-1.414-1.414-2 2z" class="icon-dark"/><path stroke="#D0D2E0" stroke-linecap="round" stroke-linejoin="round" d="M5.5 1.5v-1m-5 5h1m1.172-2.828-.708-.708m0 7.072.708-.708m5.656-5.656.708-.708" class="icon-light"/>`
};
const cyObjectMagnifyingGlassX16 = {
  name: "objectMagnifyingGlassX16",
  data: `<path fill="#D0D2E0" d="M12 7c0 1.38-.56 2.63-1.464 3.536A5 5 0 1 1 12 7" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.536 10.536a5 5 0 1 0-7.071-7.071 5 5 0 0 0 7.07 7.07m0 0L14 14" class="icon-dark"/>`
};
const cyObjectOdometerX24 = {
  name: "objectOdometerX24",
  data: `<path fill="#D0D2E0" fill-rule="evenodd" d="M2 13C2 7.477 6.477 3 12 3s10 4.477 10 10a9.99 9.99 0 0 1-4 8H6a9.99 9.99 0 0 1-4-8m10 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" class="icon-light" clip-rule="evenodd"/><path fill="currentColor" d="m6 21-.6.8a1 1 0 0 0 .6.2zm12 0v1a1 1 0 0 0 .6-.2zm-6.707-8.707a1 1 0 0 0 1.414 1.414zm6.414-3.586a1 1 0 0 0-1.414-1.414zM3 13a9 9 0 0 1 9-9V2C5.925 2 1 6.925 1 13zm9-9a9 9 0 0 1 9 9h2c0-6.075-4.925-11-11-11zM6.6 20.2A8.99 8.99 0 0 1 3 13H1c0 3.6 1.73 6.795 4.4 8.8zM21 13a8.99 8.99 0 0 1-3.6 7.2l1.2 1.6c2.67-2.005 4.4-5.2 4.4-8.8zm-9 0v2a2 2 0 0 0 2-2zm0 0h-2a2 2 0 0 0 2 2zm0 0v-2a2 2 0 0 0-2 2zm-6 9h12v-2H6zm8-9c0-.552-.225-1.054-.586-1.415L12 13zm-.586-1.415A2 2 0 0 0 12 11v2zm-.707 2.122.707-.707L12 11.585l-.707.707zm.707-.707 4.293-4.293-1.414-1.414L12 11.585z" class="icon-dark"/><path fill="currentColor" fill-rule="evenodd" d="M5.68 8.094A8 8 0 0 1 7.094 6.68l.663.663a1 1 0 0 1-1.414 1.414zM4.062 14a8 8 0 0 1 0-2H5a1 1 0 1 1 0 2zm15.876-2a8 8 0 0 1 0 2H19a1 1 0 1 1 0-2zM13 5.062V6a1 1 0 1 1-2 0v-.938a8 8 0 0 1 2 0" class="icon-dark" clip-rule="evenodd"/>`
};
const cyObjectPaperAirplaneX16 = {
  name: "objectPaperAirplaneX16",
  data: `<path fill="transparent" d="M15 8 1 1l2 7-2 7z" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 8-2 7 14-7L1 1zm0 0h3" class="icon-dark"/>`
};
const cyObjectPinModernX16 = {
  name: "objectPinModernX16",
  data: `<path fill="#D0D2E0" d="M12 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0" class="icon-light"/><path fill="currentColor" d="M7 14a1 1 0 1 0 2 0zm0-4v4h2v-4zm4-4a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5zM8 9a3 3 0 0 1-3-3H3a5 5 0 0 0 5 5zM5 6a3 3 0 0 1 3-3V1a5 5 0 0 0-5 5zm3-3a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5z" class="icon-dark"/>`
};
const cyObjectRulerX16 = {
  name: "objectRulerX16",
  data: `<path fill="#D0D2E0" d="M5 11a.5.5 0 0 0-1 0zm-1 1a.5.5 0 0 0 1 0zm4-1a.5.5 0 0 0-1 0zm-1 1a.5.5 0 0 0 1 0zm3 0a.5.5 0 0 0 1 0zm2-1a.5.5 0 0 0 0-1zm-1-4a.5.5 0 0 0 0 1zm1 1a.5.5 0 0 0 0-1zm-1-4a.5.5 0 0 0 0 1zm1 1a.5.5 0 0 0 0-1zm-1 5a.5.5 0 0 0 0 1zm0 1a.5.5 0 0 0-1 0zm-7 0v1h1v-1zm3 0v1h1v-1zm4-3h1V7h-1zm0-3h1V4h-1zm0 6h1v-1h-1zm-1 0v1h1v-1z" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15V1h-5v9H1v5zm0 0v-4" class="icon-dark"/>`
};
const cyObjectSlidersRoundX16 = {
  name: "objectSlidersRoundX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 12h5m7 0h-2M2 4h2m10 0H9m3 8a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2M9 4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v0m5 0a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v0m-1406-193.999h100v100h-100z" class="icon-dark"/>`
};
const cyObjectTagX16 = {
  name: "objectTagX16",
  data: `<path fill="#D0D2E0" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.586 2a1 1 0 0 1 .707.294l5.5 5.5a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-5.5-5.5A1 1 0 0 1 2 7.587V3a1 1 0 0 1 1-1z" class="icon-dark-stroke icon-light-fill" clip-rule="evenodd"/><circle cx="5.5" cy="5.501" r="1" fill="currentColor" class="icon-dark"/>`
};
const cyObjectTasselX16 = {
  name: "objectTasselX16",
  data: `<path fill="#D0D2E0" d="m8 3 7 3-2 .857V8.97a3 3 0 0 1-1.886 2.785l-2.371.949a2 2 0 0 1-1.486 0l-2.371-.949A3 3 0 0 1 3 8.97V6.857L1 6z" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 6.857 15 6 8 3 1 6l2 .857m10 0V8.97a3 3 0 0 1-1.886 2.785l-2.371.949a2 2 0 0 1-1.486 0l-2.371-.949A3 3 0 0 1 3 8.97V6.857m10 0L8 9 3 6.857" class="icon-dark"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 6v3" class="icon-dark-secondary"/>`
};
const cyOsAppleX16 = {
  name: "osAppleX16",
  data: `<g clip-path="url(#os-apple_x16_svg__a)"><path fill="currentColor" d="M13.61 5.454c-.093.072-1.732.996-1.732 3.048 0 2.375 2.085 3.215 2.148 3.236-.01.05-.332 1.15-1.1 2.27-.684.986-1.4 1.97-2.488 1.97s-1.368-.632-2.624-.632c-1.224 0-1.659.652-2.654.652s-1.69-.912-2.488-2.032C1.747 12.651 1 10.608 1 8.67c0-3.11 2.022-4.76 4.013-4.76 1.057 0 1.939.694 2.603.694.632 0 1.618-.736 2.82-.736.457 0 2.095.042 3.174 1.587M9.866 2.55c.497-.59.85-1.41.85-2.228 0-.114-.01-.23-.031-.322-.81.03-1.773.54-2.354 1.213-.456.518-.881 1.337-.881 2.168 0 .125.02.25.03.29.051.009.134.02.218.02.726 0 1.64-.486 2.168-1.14"/></g><defs><clipPath id="os-apple_x16_svg__a"><path fill="currentColor" d="M0 0h16v16H0z"/></clipPath></defs>`
};
const cyOsGenericX16 = {
  name: "osGenericX16",
  data: `<g clip-path="url(#os-generic_x16_svg__a)"><path fill="currentColor" fill-rule="evenodd" d="M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m6-8a8 8 0 1 0 0 16A8 8 0 0 0 8 0m-.026 8.004c0 1.618-.967 2.527-2.554 2.527-1.59 0-2.548-.914-2.548-2.527v-.008c0-1.582.993-2.527 2.548-2.527 1.56 0 2.554.931 2.554 2.527zm-3.274 0c0 .77.268 1.191.725 1.191.448 0 .72-.426.72-1.19v-.01c0-.75-.285-1.19-.725-1.19-.443 0-.72.44-.72 1.19zm8.428.831c0 1.046-.94 1.696-2.346 1.696-1.53 0-2.33-.655-2.44-1.621l-.004-.04h1.74l.01.035c.07.282.29.449.694.449.347 0 .562-.12.562-.312v-.005c0-.176-.145-.277-.545-.351l-.879-.163c-.962-.176-1.472-.69-1.472-1.441v-.005c0-1.006.857-1.608 2.268-1.608 1.503 0 2.267.747 2.267 1.63v.03H11.35l-.005-.039c-.026-.228-.242-.444-.628-.444-.33 0-.545.124-.545.33v.004c0 .172.123.269.562.352l.88.163c1.045.193 1.515.602 1.515 1.336z" class="icon-light" clip-rule="evenodd"/></g><defs><clipPath id="os-generic_x16_svg__a"><path fill="currentColor" d="M0 0h16v16H0z" class="icon-light"/></clipPath></defs>`
};
const cyOsLinuxX16 = {
  name: "osLinuxX16",
  data: `<g clip-path="url(#os-linux_x16_svg__a)"><path fill="currentColor" d="M7.758 4.389c0 .053-.053.053-.053.053h-.053c-.053 0-.053-.053-.106-.106 0 0-.053-.053-.053-.106s0-.053.053-.053l.106.053c.053.053.106.106.106.159m-.954-.53c0-.265-.106-.424-.265-.424 0 0 0 .053-.053.053v.106h.16c0 .106.052.16.052.265zm1.854-.265c.106 0 .16.106.212.265h.106c-.053-.053-.053-.106-.053-.159s0-.106-.053-.159-.106-.106-.159-.106c0 0-.053.053-.106.053 0 .053.053.053.053.106m-1.589.848c-.053 0-.053 0-.053-.053s0-.106.053-.16c.106 0 .16-.052.16-.052.052 0 .052.053.052.053 0 .053-.053.106-.159.212zm-.583-.053c-.211-.106-.264-.265-.264-.53 0-.159 0-.265.106-.37a.29.29 0 0 1 .264-.16c.106 0 .16.053.265.16.053.158.106.317.106.476v.106h.053v-.053c.053 0 .053-.106.053-.318 0-.159 0-.318-.106-.477s-.212-.265-.424-.265a.4.4 0 0 0-.37.265c-.106.212-.127.371-.127.636 0 .212.074.424.286.636.053-.053.106-.053.158-.106m6.622 7.47c.053 0 .053-.022.053-.07 0-.116-.053-.254-.212-.407-.159-.16-.423-.26-.741-.303-.053-.005-.106-.005-.106-.005-.053-.01-.053-.01-.106-.01a3 3 0 0 1-.212-.027c.159-.493.212-.927.212-1.308 0-.53-.106-.9-.318-1.219-.212-.318-.424-.477-.689-.53-.053.053-.053.053-.053.106.265.106.53.318.69.636.158.371.211.689.211 1.06 0 .296-.053.736-.265 1.297-.212.085-.424.281-.583.588 0 .048 0 .075.053.075 0 0 .053-.048.106-.138.106-.09.16-.18.265-.27.16-.09.265-.138.424-.138.265 0 .53.037.689.111.212.07.318.143.37.228q.08.12.16.223c0 .069.052.1.052.1M8.235 4.176c-.053-.053-.053-.159-.053-.265 0-.212 0-.318.106-.477q.16-.159.317-.159c.16 0 .265.106.371.212.053.16.106.265.106.424q0 .397-.318.477s.053.053.106.053c.106 0 .16.053.265.106.053-.318.106-.53.106-.795 0-.318-.053-.53-.159-.689a.68.68 0 0 0-.53-.211.85.85 0 0 0-.476.158c-.106.16-.16.265-.16.424 0 .265.054.477.16.689.053 0 .106.053.159.053m.635.847c-.688.477-1.218.69-1.642.69-.37 0-.742-.16-1.06-.425.054.106.107.212.16.265l.317.318c.212.212.477.318.742.318.37 0 .795-.212 1.324-.583l.477-.318c.106-.106.212-.212.212-.37 0-.053 0-.106-.053-.106-.053-.106-.318-.265-.847-.424-.477-.212-.848-.318-1.06-.318q-.239 0-.795.318c-.317.212-.53.424-.53.635 0 0 .054.053.107.16.317.264.635.423.953.423.424 0 .954-.212 1.642-.741v.106c.053 0 .053.052.053.052m1.219 10.701c.212.399.582.599 1.006.599q.159 0 .318-.048a.7.7 0 0 0 .265-.1q.08-.054.159-.117c.106-.037.106-.063.159-.09l.9-.779c.212-.169.424-.316.69-.445.211-.127.423-.211.529-.26a.95.95 0 0 0 .37-.19.55.55 0 0 0 .107-.307c0-.154-.106-.27-.212-.355a1.1 1.1 0 0 0-.318-.18c-.106-.037-.212-.122-.37-.265a1.4 1.4 0 0 1-.266-.578l-.053-.307c-.053-.143-.053-.249-.106-.307 0-.016 0-.021-.053-.021a.29.29 0 0 0-.212.138q-.16.136-.317.296c-.053.106-.212.201-.318.291a.95.95 0 0 1-.424.138c-.424 0-.636-.116-.795-.344-.106-.17-.159-.366-.212-.588-.106-.09-.159-.138-.264-.138-.265 0-.371.276-.371.832v1.648c0 .047-.053.153-.053.317-.053.165-.053.351-.053.562l-.106.588v.01m-7.682-.281q.74.108 1.7.461c.642.233 1.034.355 1.177.355.37 0 .678-.164.932-.482.053-.102.053-.223.053-.362q0-.75-.906-1.902l-.36-.482a5 5 0 0 1-.28-.46 5 5 0 0 0-.292-.477 1.4 1.4 0 0 0-.323-.366 1.1 1.1 0 0 0-.472-.244c-.222.043-.376.117-.45.218a.65.65 0 0 0-.127.328q-.023.167-.1.222a1 1 0 0 1-.266.085q-.04-.002-.143.006h-.143c-.28 0-.471.031-.572.084a.78.78 0 0 0-.201.514q0 .127.064.43c.042.195.063.354.063.465q.002.327-.196.652c-.132.228-.201.397-.201.518q.08.308 1.043.435zm1.764-4.817c0-.366.096-.769.292-1.245.19-.477.381-.795.567-1.007-.01-.053-.037-.053-.08-.053l-.053-.053c-.153.16-.339.53-.561 1.06-.223.476-.34.916-.34 1.24 0 .238.059.444.165.624.116.175.397.43.842.753l.562.365c.598.52.916.88.916 1.092 0 .11-.053.222-.212.344a.5.5 0 0 1-.37.19q-.016-.001-.016.038-.001.007.164.317c.222.302.7.45 1.335.45 1.165 0 2.066-.476 2.755-1.43 0-.264 0-.429-.053-.498v-.196q0-.518.158-.773c.106-.17.212-.249.371-.249q.159-.002.318.117c.053-.408.053-.763.053-1.081 0-.482 0-.88-.106-1.25a2.8 2.8 0 0 0-.265-.795l-.318-.477c-.106-.159-.159-.318-.264-.476-.053-.212-.106-.371-.106-.636-.16-.265-.265-.53-.424-.795-.106-.265-.212-.53-.318-.741l-.477.37c-.53.371-.953.53-1.324.53-.318 0-.583-.053-.742-.265l-.318-.265c0 .16-.053.371-.159.583l-.333.636c-.149.37-.228.582-.244.741-.021.106-.037.212-.048.212l-.397.795c-.43.795-.646 1.53-.646 2.14q0 .185.031.376a.79.79 0 0 1-.355-.688m3.793 5.011q-1.032 0-1.589.278V15.9c-.265.318-.561.482-.974.482q-.391 0-1.219-.302a14 14 0 0 0-1.478-.433 3 3 0 0 0-.291-.055 11 11 0 0 1-.408-.072 3 3 0 0 1-.376-.109.9.9 0 0 1-.318-.162.3.3 0 0 1-.11-.227q0-.127.055-.271.051-.09.108-.17.057-.086.09-.164a.8.8 0 0 0 .074-.148.818.818 0 0 0 .074-.312 6 6 0 0 0-.063-.494 5 5 0 0 1-.064-.524c0-.233.053-.419.17-.551.116-.132.227-.201.344-.201h.61c.047 0 .121-.027.232-.09.037-.085.07-.154.09-.218.027-.063.037-.11.048-.132q.015-.05.032-.09a.7.7 0 0 1 .085-.122.32.32 0 0 1-.064-.207c0-.058 0-.11.01-.143 0-.19.09-.46.281-.815l.186-.334c.153-.286.27-.498.355-.71q.133-.318.291-.953.127-.557.604-1.113l.397-.477c.276-.318.456-.582.556-.794s.154-.477.154-.689q.002-.159-.085-.954c-.053-.53-.08-1.06-.08-1.536 0-.37.033-.636.102-.9.068-.265.19-.53.37-.742.16-.212.371-.424.689-.53A3.5 3.5 0 0 1 7.964.48c.16 0 .318 0 .477.053q.24 0 .636.16c.212.105.424.211.583.37.212.159.37.424.53.689.105.317.211.635.264 1.06.053.264.053.529.106.9 0 .318.053.53.053.688.053.16.053.371.106.636.053.212.106.424.212.583.106.212.212.424.37.636.16.264.372.53.584.847.476.53.847 1.113 1.06 1.695.264.53.423 1.219.423 1.955a3.6 3.6 0 0 1-.159 1.065c.106 0 .159.042.212.116q.08.11.159.482l.053.393a.62.62 0 0 0 .265.323c.106.095.212.175.37.238.106.053.265.127.371.223a.47.47 0 0 1 .16.333c0 .18-.054.313-.16.408a.83.83 0 0 1-.37.228c-.106.053-.318.159-.636.308a6 6 0 0 0-.795.572l-.53.451a3 3 0 0 1-.582.445c-.16.096-.371.143-.583.143l-.37-.042c-.425-.111-.69-.323-.848-.646-.848-.103-1.537-.154-1.96-.154"/></g><defs><clipPath id="os-linux_x16_svg__a"><path fill="currentColor" d="M0 0h16v16H0z"/></clipPath></defs>`
};
const cyOsWindowsX16 = {
  name: "osWindowsX16",
  data: `<path fill="#00A4EF" d="M7.6 0H0v7.6h7.6zM16 0H8.4v7.6H16zM7.6 8.4H0V16h7.6zM16 8.4H8.4V16H16z"/>`
};
const cySecurityKeyX16 = {
  name: "securityKeyX16",
  data: `<path fill="#D0D2E0" stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M1.861 7.354a2 2 0 0 1 .273-2.488l2.732-2.732a2 2 0 0 1 2.488-.273l2.502 1.593a2 2 0 0 1 .642 2.716L10 7l5 5v3h-3l-1-2.5H9L8 10H7l-.83.498a2 2 0 0 1-2.716-.642z" class="icon-light-fill icon-dark-stroke"/><circle cx="5.752" cy="5.752" r="1.002" fill="currentColor" class="icon-dark"/>`
};
const cySecurityKeyX24 = {
  name: "securityKeyX24",
  data: `<path fill="#D0D2E0" fill-rule="evenodd" stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M10.038 2.475a3 3 0 0 0-3.757.394L2.87 6.28a3 3 0 0 0-.394 3.757L5.25 14.31a3 3 0 0 0 4.316.765L11 14l1.5 3.5 1.5-1 1.5 3.5 1.5-1s1 1.7 1.5 2c2.5 1.5 3.5-2 3.5-2l-8-8 1.075-1.433a3 3 0 0 0-.765-4.316zM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" class="icon-light-fill icon-dark-stroke" clip-rule="evenodd"/>`
};
const cySecurityLockLockedX16 = {
  name: "securityLockLockedX16",
  data: `<path fill="#D0D2E0" fill-rule="evenodd" d="M2 13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" class="icon-light" clip-rule="evenodd"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 6H4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-1M5 6V4a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v2M5 6h6m-3 4v1" class="icon-dark"/>`
};
const cySecurityShieldCheckX16 = {
  name: "securityShieldCheckX16",
  data: `<path fill="#D0D2E0" fill-rule="evenodd" d="M8 1.333s-2.667 1.334-6 2v7.524c1 2.857 6 3.81 6 3.81z" class="icon-light" clip-rule="evenodd"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 8 1.667 2L10 6m4-2.667c-3.333-.666-6-2-6-2s-2.667 1.334-6 2v7.524c1 2.857 6 3.81 6 3.81s5-.953 6-3.81z" class="icon-dark"/>`
};
const cySecurityShieldCheckX24 = {
  name: "securityShieldCheckX24",
  data: `<path fill="#D0D2E0" fill-rule="evenodd" d="M12 2S8 4 3 5v11.286C4.5 20.57 12 22 12 22z" class="icon-light" clip-rule="evenodd"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 12 2.5 3L15 9m6-4c-5-1-9-3-9-3S8 4 3 5v11.286C4.5 20.57 12 22 12 22s7.5-1.429 9-5.714z" class="icon-dark"/>`
};
const cySecurityShieldCrossX16 = {
  name: "securityShieldCrossX16",
  data: `<path fill="#D0D2E0" d="M8 1S5.5 3 2 3v4h6zM2 11c1 3 6 4 6 4V7H2z" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 15s5-1 6-4V7m-6 8s-5-1-6-4V7m6 8V7m0-6S5.5 3 2 3v4m6-6s2.5 2 6 2v4M8 1v6m6 0H8M2 7h6" class="icon-dark"/>`
};
const cySecurityShieldCrossX24 = {
  name: "securityShieldCrossX24",
  data: `<path fill="#D0D2E0" d="M12 2S8 5 3 5v5h9zM3 16c1 4.5 9 6 9 6V10H3z" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 22s8-1.5 9-6v-6m-9 12s-8-1.5-9-6v-6m9 12V10m0-8S8 5 3 5v5m9-8s4 3 9 3v5m-9-8v8m9 0h-9m-9 0h9" class="icon-dark"/>`
};
const cyShapeHeartX16 = {
  name: "shapeHeartX16",
  data: `<path fill="#D0D2E0" stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M4.448 2a3.43 3.43 0 0 0-2.432 1.02l-.007-.004A3.5 3.5 0 0 0 1 5.479c0 .924.363 1.81 1.01 2.463l5.984 6.05.002-.002.01.01 5.985-6.05A3.5 3.5 0 0 0 15 5.485c0-.923-.363-1.81-1.01-2.463a3.413 3.413 0 0 0-4.875-.003L8.002 4.147 6.883 3.015A3.43 3.43 0 0 0 4.448 2Z" class="icon-dark-stroke icon-light-fill"/>`
};
const cyShapeHeartX24 = {
  name: "shapeHeartX24",
  data: `<path fill="#D0D2E0" stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M6.673 3a5.14 5.14 0 0 0-3.649 1.53l-.01-.006A5.25 5.25 0 0 0 1.5 8.22c0 1.385.545 2.714 1.514 3.694l8.977 9.076.004-.003.014.014 8.977-9.076A5.25 5.25 0 0 0 22.5 8.23a5.25 5.25 0 0 0-1.514-3.695A5.2 5.2 0 0 0 19.31 3.4a5.12 5.12 0 0 0-5.636 1.131l-1.67 1.688-1.678-1.697A5.14 5.14 0 0 0 6.673 3Z" class="icon-dark-stroke icon-light-fill"/>`
};
const cyShapeLightningBoltX16 = {
  name: "shapeLightningBoltX16",
  data: `<path fill="#D0D2E0" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 1v5h5.5L8 15v-5H2.5z" class="icon-light-fill icon-dark-stroke"/>`
};
const cyShapeLightningBoltX24 = {
  name: "shapeLightningBoltX24",
  data: `<path fill="#D0D2E0" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10V2L5 14h7v8l7-12z" class="icon-light-fill icon-dark-stroke"/>`
};
const cyShapeMoonCrescentX16 = {
  name: "shapeMoonCrescentX16",
  data: `<path fill="#D0D2E0" fill-rule="evenodd" d="M14.382 10.881Q13.707 11 13 11a8 8 0 0 1-7.881-9.381 7.001 7.001 0 1 0 9.263 9.262" class="icon-light" clip-rule="evenodd"/><path fill="currentColor" d="m14.382 10.881.91.412a1 1 0 0 0-1.082-1.397zM5.119 1.62l.985.171A1 1 0 0 0 4.707.707zm9.091 8.277A7 7 0 0 1 13 10v2q.794-.001 1.553-.134zM13 10a7 7 0 0 1-7-7H4a9 9 0 0 0 9 9zM6 3q.001-.62.104-1.21l-1.97-.343A9 9 0 0 0 4 3zM2 8a6 6 0 0 1 3.53-5.47L4.708.707A8 8 0 0 0 0 8zm6 6a6 6 0 0 1-6-6H0a8 8 0 0 0 8 8zm5.47-3.53A6 6 0 0 1 8 14v2a8 8 0 0 0 7.293-4.707z" class="icon-dark"/>`
};
const cyShapeStarX16 = {
  name: "shapeStarX16",
  data: `<path fill="#D0D2E0" stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="m8 1.345 2.345 4.027 4.555.986-3.105 3.475.47 4.636L8 12.59l-4.264 1.88.47-4.637L1.1 6.358l4.555-.986z" class="icon-dark-stroke icon-light-fill"/>`
};
const cyShapeStarX24 = {
  name: "shapeStarX24",
  data: `<path fill="#D0D2E0" stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="m12 2 3.569 6.128 6.93 1.5-4.724 5.288.714 7.056L12 19.112l-6.49 2.86.715-7.056L1.5 9.628l6.93-1.5z" class="icon-dark-stroke icon-light-fill"/>`
};
const cyShapeSunLongX16 = {
  name: "shapeSunLongX16",
  data: `<path fill="#D0D2E0" d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0" class="icon-light"/><path fill="currentColor" d="M3.757 2.343a1 1 0 1 0-1.414 1.414zm9.9 1.414a1 1 0 0 0-1.414-1.414zm-1.414 9.9a1 1 0 0 0 1.414-1.414zm-9.9-1.414a1 1 0 0 0 1.414 1.414zM9 1a1 1 0 0 0-2 0zm6 8a1 1 0 1 0 0-2zm-8 6a1 1 0 1 0 2 0zM1 7a1 1 0 0 0 0 2zm1.343-3.243 1.414 1.415 1.415-1.415-1.415-1.414zm9.9-1.414-1.415 1.414 1.415 1.415 1.414-1.415zm-1.415 9.9 1.415 1.414 1.414-1.414-1.414-1.415zm-7.07-1.415-1.415 1.415 1.414 1.414 1.415-1.414zM9 3V1H7v2zm4 6h2V7h-2zm-6 4v2h2v-2zM3 7H1v2h2zm7 1a2 2 0 0 1-2 2v2a4 4 0 0 0 4-4zm-2 2a2 2 0 0 1-2-2H4a4 4 0 0 0 4 4zM6 8a2 2 0 0 1 2-2V4a4 4 0 0 0-4 4zm2-2a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4z" class="icon-dark"/>`
};
const cySocialDiscordSolidX16 = {
  name: "socialDiscordSolidX16",
  data: `<path fill="currentColor" d="M13.545 3.069a13.5 13.5 0 0 0-3.257-.978.05.05 0 0 0-.052.024c-.141.242-.297.558-.406.806a12.6 12.6 0 0 0-3.658 0 8 8 0 0 0-.412-.806.05.05 0 0 0-.052-.024c-1.143.19-2.236.524-3.257.978a.05.05 0 0 0-.021.017c-2.074 3-2.643 5.927-2.364 8.818q.003.022.02.036a13.4 13.4 0 0 0 3.996 1.955.05.05 0 0 0 .056-.018q.463-.61.818-1.287a.048.048 0 0 0-.028-.068 9 9 0 0 1-1.248-.576.05.05 0 0 1-.005-.082 7 7 0 0 0 .248-.189.05.05 0 0 1 .051-.006c2.619 1.157 5.454 1.157 8.041 0a.05.05 0 0 1 .053.006q.121.097.248.189a.05.05 0 0 1-.004.082 8.3 8.3 0 0 1-1.249.575.05.05 0 0 0-.027.07c.24.45.515.879.817 1.286a.05.05 0 0 0 .056.018 13.4 13.4 0 0 0 4.001-1.955.05.05 0 0 0 .021-.036c.334-3.341-.559-6.244-2.365-8.817a.04.04 0 0 0-.021-.018m-8.198 7.075c-.789 0-1.438-.701-1.438-1.562 0-.86.637-1.56 1.438-1.56.807 0 1.45.706 1.438 1.56 0 .861-.637 1.562-1.438 1.562m5.316 0c-.788 0-1.438-.701-1.438-1.562 0-.86.637-1.56 1.438-1.56.807 0 1.45.706 1.438 1.56 0 .861-.63 1.562-1.438 1.562" class="icon-dark"/>`
};
const cySocialEmailX16 = {
  name: "socialEmailX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M11 5.25V8.5a2 2 0 0 0 3.92.562Q15 8.542 15 8a7 7 0 1 0-3 5.745M10.5 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" class="icon-dark"/>`
};
const cySocialFacebookSolidX16 = {
  name: "socialFacebookSolidX16",
  data: `<path fill="currentColor" d="M16 8a8 8 0 1 0-9.25 7.903v-5.59H4.719V8H6.75V6.237c0-2.005 1.194-3.112 3.022-3.112.875 0 1.79.156 1.79.156V5.25h-1.008c-.994 0-1.304.617-1.304 1.25V8h2.219l-.355 2.313H9.25v5.59A8 8 0 0 0 16 8" class="icon-dark"/>`
};
const cySocialGithubSolidX16 = {
  name: "socialGithubSolidX16",
  data: `<path fill="currentColor" fill-rule="evenodd" d="M8 1.002a7 7 0 0 0-2.213 13.642c.35.065.479-.152.479-.337 0-.167-.007-.719-.01-1.303-1.948.424-2.358-.826-2.358-.826-.319-.81-.778-1.025-.778-1.025-.635-.434.049-.425.049-.425.703.05 1.073.721 1.073.721.624 1.07 1.638.76 2.037.582.063-.453.244-.762.444-.937-1.555-.176-3.19-.776-3.19-3.459 0-.764.275-1.389.722-1.878-.073-.177-.313-.889.067-1.853 0 0 .588-.188 1.926.718a6.7 6.7 0 0 1 1.751-.236c.595.003 1.195.08 1.754.236 1.336-.905 1.923-.718 1.923-.718.38.965.142 1.677.07 1.853.448.49.72 1.114.72 1.878 0 2.689-1.639 3.28-3.197 3.453.251.217.476.643.476 1.296 0 .936-.008 1.69-.008 1.92 0 .187.126.405.48.337A7 7 0 0 0 8 1z" class="icon-dark" clip-rule="evenodd"/>`
};
const cySocialLinkedinSolidX16 = {
  name: "socialLinkedinSolidX16",
  data: `<path fill="currentColor" d="M16 1.176v13.647A1.176 1.176 0 0 1 14.823 16H1.176A1.176 1.176 0 0 1 0 14.823V1.176A1.176 1.176 0 0 1 1.176 0h13.647A1.176 1.176 0 0 1 16 1.176M4.706 6.118H2.353v7.53h2.353zm.212-2.589a1.355 1.355 0 0 0-1.346-1.364h-.043a1.365 1.365 0 1 0 0 2.73 1.355 1.355 0 0 0 1.389-1.323zm8.73 5.544c0-2.264-1.44-3.144-2.871-3.144a2.68 2.68 0 0 0-2.382 1.215H8.33V6.118H6.118v7.53H8.47V9.641a1.56 1.56 0 0 1 1.411-1.684h.09c.748 0 1.303.47 1.303 1.656v4.033h2.353z" class="icon-dark"/>`
};
const cySocialTwitterSolidX16 = {
  name: "socialTwitterSolidX16",
  data: `<path fill="currentColor" d="M14.355 4.741c.01.142.01.284.01.427 0 4.335-3.299 9.33-9.33 9.33A9.27 9.27 0 0 1 0 13.024c.264.03.518.041.792.041a6.57 6.57 0 0 0 4.07-1.401 3.285 3.285 0 0 1-3.065-2.274c.203.03.406.05.62.05.294 0 .588-.04.862-.111A3.28 3.28 0 0 1 .65 6.112v-.04c.437.243.945.395 1.483.415A3.28 3.28 0 0 1 .67 3.757c0-.61.162-1.168.447-1.655a9.32 9.32 0 0 0 6.761 3.431 3.7 3.7 0 0 1-.081-.751 3.28 3.28 0 0 1 3.28-3.28c.943 0 1.796.397 2.395 1.036a6.5 6.5 0 0 0 2.081-.792 3.27 3.27 0 0 1-1.441 1.807c.66-.07 1.3-.253 1.888-.507a7 7 0 0 1-1.645 1.695" class="icon-dark"/>`
};
const cySocialYoutubeSolidX16 = {
  name: "socialYoutubeSolidX16",
  data: `<path fill="currentColor" fill-rule="evenodd" d="M14.25 2.575c.69.184 1.231.725 1.415 1.414C16 5.237 16 7.84 16 7.84s0 2.604-.335 3.852a2 2 0 0 1-1.414 1.414c-1.247.335-6.251.335-6.251.335s-5.004 0-6.25-.335a2 2 0 0 1-1.415-1.414C0 10.444 0 7.84 0 7.84s0-2.603.335-3.85a2 2 0 0 1 1.414-1.415C2.996 2.24 8 2.24 8 2.24s5.004 0 6.25.335M10.556 7.84l-4.157 2.4v-4.8z" class="icon-dark" clip-rule="evenodd"/>`
};
const cyStatusCancelledOutlineX16 = {
  name: "statusCancelledOutlineX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 8h4m-2 6A6 6 0 1 1 8 2a6 6 0 0 1 0 12Z" class="icon-dark"/>`
};
const cyStatusCancelledOutlineX24 = {
  name: "statusCancelledOutlineX24",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 12h8m-4 9a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z" class="icon-dark"/>`
};
const cyStatusCancelledSimpleX4 = {
  name: "statusCancelledSimpleX4",
  data: `<circle cx="2" cy="2" r="1.5" stroke="currentColor" class="icon-dark"/>`
};
const cyStatusCancelledSimpleX8 = {
  name: "statusCancelledSimpleX8",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M1 4h6" class="icon-dark"/>`
};
const cyStatusCancelledSolidX12 = {
  name: "statusCancelledSolidX12",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M2 6h8" class="icon-dark"/>`
};
const cyStatusCancelledSolidX16 = {
  name: "statusCancelledSolidX16",
  data: `<path fill="#AFB3C7" fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m4-1a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2z" clip-rule="evenodd"/>`
};
const cyStatusCancelledSolidX24 = {
  name: "statusCancelledSolidX24",
  data: `<path fill="#AFB3C7" fill-rule="evenodd" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12m6-1a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z" clip-rule="evenodd"/>`
};
const cyStatusErroredOutlineX16 = {
  name: "statusErroredOutlineX16",
  data: `<path fill="currentColor" fill-rule="evenodd" d="M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m6-8a8 8 0 1 0 0 16A8 8 0 0 0 8 0m1 5a1 1 0 0 0-2 0v3a1 1 0 0 0 2 0zm-1 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2" class="icon-dark" clip-rule="evenodd"/>`
};
const cyStatusErroredOutlineX24 = {
  name: "statusErroredOutlineX24",
  data: `<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="icon-dark"/><path fill="currentColor" fill-rule="evenodd" d="M12 7a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1" class="icon-dark" clip-rule="evenodd"/><path fill="currentColor" d="M13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0" class="icon-dark"/>`
};
const cyStatusErroredSimpleX4 = {
  name: "statusErroredSimpleX4",
  data: `<circle cx="2" cy="2" r="2" fill="currentColor" class="icon-dark"/>`
};
const cyStatusErroredSimpleX8 = {
  name: "statusErroredSimpleX8",
  data: `<path fill="currentColor" fill-rule="evenodd" d="M4 0a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1" class="icon-dark" clip-rule="evenodd"/><path fill="currentColor" d="M5 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0" class="icon-dark"/>`
};
const cyStatusErroredSolidX12 = {
  name: "statusErroredSolidX12",
  data: `<path fill="currentColor" fill-rule="evenodd" d="M6 1a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1" class="icon-dark" clip-rule="evenodd"/><path fill="currentColor" d="M7 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0" class="icon-dark"/>`
};
const cyStatusErroredSolidX16 = {
  name: "statusErroredSolidX16",
  data: `<path fill="currentColor" fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14M9 5a1 1 0 0 0-2 0v3a1 1 0 0 0 2 0zm-1 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2" class="icon-dark" clip-rule="evenodd"/>`
};
const cyStatusErroredSolidX24 = {
  name: "statusErroredSolidX24",
  data: `<path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m1-14a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0zm-1 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2" class="icon-dark" clip-rule="evenodd"/>`
};
const cyStatusFailedOutlineX16 = {
  name: "statusFailedOutlineX16",
  data: `<path fill="currentColor" d="M6.707 5.293a1 1 0 0 0-1.414 1.414zm2.586 5.414a1 1 0 0 0 1.414-1.414zm1.414-4a1 1 0 0 0-1.414-1.414zM5.293 9.293a1 1 0 0 0 1.414 1.414zM13 8a5 5 0 0 1-5 5v2a7 7 0 0 0 7-7zm-5 5a5 5 0 0 1-5-5H1a7 7 0 0 0 7 7zM3 8a5 5 0 0 1 5-5V1a7 7 0 0 0-7 7zm5-5a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7zM5.293 6.707l2 2 1.414-1.414-2-2zm2 2 2 2 1.414-1.414-2-2zm2-3.414-2 2 1.414 1.414 2-2zm-2 2-2 2 1.414 1.414 2-2z" class="icon-dark"/>`
};
const cyStatusFailedOutlineX24 = {
  name: "statusFailedOutlineX24",
  data: `<path fill="currentColor" d="M9.707 8.293a1 1 0 0 0-1.414 1.414zm4.586 7.414a1 1 0 0 0 1.414-1.414zm1.414-6a1 1 0 0 0-1.414-1.414zm-7.414 4.586a1 1 0 1 0 1.414 1.414zm0-4.586 3 3 1.414-1.414-3-3zm3 3 3 3 1.414-1.414-3-3zm3-4.414-3 3 1.414 1.414 3-3zm-3 3-3 3 1.414 1.414 3-3zM20 12a8 8 0 0 1-8 8v2c5.523 0 10-4.477 10-10zm-8 8a8 8 0 0 1-8-8H2c0 5.523 4.477 10 10 10zm-8-8a8 8 0 0 1 8-8V2C6.477 2 2 6.477 2 12zm8-8a8 8 0 0 1 8 8h2c0-5.523-4.477-10-10-10z" class="icon-dark"/>`
};
const cyStatusFailedSimpleX12 = {
  name: "statusFailedSimpleX12",
  data: `<path fill="currentColor" d="M3.707 2.293a1 1 0 0 0-1.414 1.414zm4.586 7.414a1 1 0 0 0 1.414-1.414zm1.414-6a1 1 0 0 0-1.414-1.414zM2.293 8.293a1 1 0 0 0 1.414 1.414zm0-4.586 6 6 1.414-1.414-6-6zm6-1.414-6 6 1.414 1.414 6-6z" class="icon-dark"/>`
};
const cyStatusFailedSimpleX16 = {
  name: "statusFailedSimpleX16",
  data: `<path fill="currentColor" d="M4.707 3.293a1 1 0 0 0-1.414 1.414zm6.586 9.414a1 1 0 0 0 1.414-1.414zm1.414-8a1 1 0 0 0-1.414-1.414zm-9.414 6.586a1 1 0 1 0 1.414 1.414zm0-6.586 4 4 1.414-1.414-4-4zm4 4 4 4 1.414-1.414-4-4zm4-5.414-4 4 1.414 1.414 4-4zm-4 4-4 4 1.414 1.414 4-4z" class="icon-dark"/>`
};
const cyStatusFailedSimpleX24 = {
  name: "statusFailedSimpleX24",
  data: `<path fill="currentColor" d="M6.707 5.293a1 1 0 0 0-1.414 1.414zm10.586 13.414a1 1 0 0 0 1.414-1.414zm1.414-12a1 1 0 0 0-1.414-1.414zM5.293 17.293a1 1 0 1 0 1.414 1.414zm0-10.586 6 6 1.414-1.414-6-6zm6 6 6 6 1.414-1.414-6-6zm6-7.414-6 6 1.414 1.414 6-6zm-6 6-6 6 1.414 1.414 6-6z" class="icon-dark"/>`
};
const cyStatusFailedSimpleX4 = {
  name: "statusFailedSimpleX4",
  data: `<circle cx="2" cy="2" r="2" fill="currentColor" class="icon-dark"/>`
};
const cyStatusFailedSimpleX8 = {
  name: "statusFailedSimpleX8",
  data: `<path fill="currentColor" d="M2.707 1.293a1 1 0 0 0-1.414 1.414zm2.586 5.414a1 1 0 0 0 1.414-1.414zm1.414-4a1 1 0 0 0-1.414-1.414zM1.293 5.293a1 1 0 0 0 1.414 1.414zm0-2.586 4 4 1.414-1.414-4-4zm4-1.414-4 4 1.414 1.414 4-4z" class="icon-dark"/>`
};
const cyStatusFailedSolidX16 = {
  name: "statusFailedSolidX16",
  data: `<circle cx="8" cy="8" r="7" fill="currentColor" class="icon-dark"/><path fill="#fff" d="M6.707 5.293a1 1 0 0 0-1.414 1.414zm2.586 5.414a1 1 0 0 0 1.414-1.414zm1.414-4a1 1 0 0 0-1.414-1.414zM5.293 9.293a1 1 0 0 0 1.414 1.414zm0-2.586 4 4 1.414-1.414-4-4zm4-1.414-4 4 1.414 1.414 4-4z"/>`
};
const cyStatusFailedSolidX24 = {
  name: "statusFailedSolidX24",
  data: `<path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10M9.707 8.293a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586z" class="icon-dark" clip-rule="evenodd"/>`
};
const cyStatusFailingOutlineX16 = {
  name: "statusFailingOutlineX16",
  data: `<path fill="currentColor" d="M6.707 5.293a1 1 0 0 0-1.414 1.414zm2.586 5.414a1 1 0 0 0 1.414-1.414zm1.414-4a1 1 0 0 0-1.414-1.414zM5.293 9.293a1 1 0 0 0 1.414 1.414zm0-2.586 4 4 1.414-1.414-4-4zm4-1.414-4 4 1.414 1.414 4-4z" class="icon-dark"/><circle cx="8" cy="8" r="6" stroke="#E1E3ED" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="icon-light"/><circle cx="8" cy="8" r="6" stroke="currentColor" stroke-dasharray="10 28" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="icon-dark"><animate attributeName="stroke-dashoffset" dur="1s" repeatCount="indefinite" values="36.6;0"/></circle>`
};
const cyStatusFailingOutlineX24 = {
  name: "statusFailingOutlineX24",
  data: `<path fill="currentColor" d="M9.707 8.293a1 1 0 0 0-1.414 1.414zm4.586 7.414a1 1 0 0 0 1.414-1.414zm1.414-6a1 1 0 0 0-1.414-1.414zm-7.414 4.586a1 1 0 1 0 1.414 1.414zm0-4.586 3 3 1.414-1.414-3-3zm3 3 3 3 1.414-1.414-3-3zm3-4.414-3 3 1.414 1.414 3-3zm-3 3-3 3 1.414 1.414 3-3zM20 12" class="icon-dark"/><circle cx="12" cy="12" r="9" stroke="#E1E3ED" stroke-width="2" class="icon-light"/><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-dasharray="15 42" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="icon-dark"><animate attributeName="stroke-dashoffset" dur="1s" repeatCount="indefinite" values="57;0"/></circle>`
};
const cyStatusFlakyX16 = {
  name: "statusFlakyX16",
  data: `<path fill="#F5F4D7" d="M1 12V4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3" class="icon-light"/><path stroke="#963F00" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.5 5h-3v3.5m0 2.5V8.5m0 0h2" class="icon-dark"/>`
};
const cyStatusFlakyX24 = {
  name: "statusFlakyX24",
  data: `<path fill="#F5F4D7" d="M2 18V6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4" class="icon-light"/><path stroke="#963F00" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 8h-4v4.5m0 3.5v-3.5m0 0h3" class="icon-dark"/>`
};
const cyStatusPassedOutlineX16 = {
  name: "statusPassedOutlineX16",
  data: `<circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="2" class="icon-dark"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 6-2.5 4L6 8.5" class="icon-dark"/>`
};
const cyStatusPassedOutlineX24 = {
  name: "statusPassedOutlineX24",
  data: `<path fill="currentColor" fill-rule="evenodd" d="M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0m8-10C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m3.864 7.504a1 1 0 0 0-1.728-1.008l-2.846 4.88-1.583-1.583a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.57-.203z" class="icon-dark" clip-rule="evenodd"/>`
};
const cyStatusPassedSimpleX12 = {
  name: "statusPassedSimpleX12",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3 5 9 3 6.5" class="icon-dark"/>`
};
const cyStatusPassedSimpleX16 = {
  name: "statusPassedSimpleX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8.667 7.333 12 12 4" class="icon-dark"/>`
};
const cyStatusPassedSimpleX24 = {
  name: "statusPassedSimpleX24",
  data: `<path fill="currentColor" fill-rule="evenodd" d="M15.504 8.136a1 1 0 0 1 .36 1.368l-3.5 6a1 1 0 0 1-1.571.203l-2.5-2.5a1 1 0 1 1 1.414-1.414l1.583 1.583 2.846-4.88a1 1 0 0 1 1.368-.36" class="icon-dark" clip-rule="evenodd"/>`
};
const cyStatusPassedSimpleX4 = {
  name: "statusPassedSimpleX4",
  data: `<circle cx="2" cy="2" r="2" fill="currentColor" class="icon-dark"/>`
};
const cyStatusPassedSimpleX8 = {
  name: "statusPassedSimpleX8",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 2 3.5 6 2 4.5" class="icon-dark"/>`
};
const cyStatusPassedSolidX16 = {
  name: "statusPassedSolidX16",
  data: `<circle cx="8" cy="8" r="7" fill="currentColor" class="icon-dark"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 6-2.5 4L6 8.5"/>`
};
const cyStatusPassedSolidX24 = {
  name: "statusPassedSolidX24",
  data: `<path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m3.864-12.496a1 1 0 0 0-1.728-1.008l-2.846 4.88-1.583-1.583a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.57-.203z" class="icon-dark" clip-rule="evenodd"/>`
};
const cyStatusPendingOutlineX12 = {
  name: "statusPendingOutlineX12",
  data: `<path stroke="currentColor" stroke-width="2" d="M4.47 2.305a4 4 0 1 0 3.061 0" class="icon-dark"/>`
};
const cyStatusPendingOutlineX16 = {
  name: "statusPendingOutlineX16",
  data: `<path stroke="currentColor" stroke-width="2" d="M5.706 2.46a5.998 5.998 0 1 0 4.59 0" class="icon-dark"/>`
};
const cyStatusPendingOutlineX24 = {
  name: "statusPendingOutlineX24",
  data: `<path stroke="currentColor" stroke-width="2" d="M8.555 3.685a8.999 8.999 0 1 0 6.887 0" class="icon-dark"/>`
};
const cyStatusPendingSimpleX4 = {
  name: "statusPendingSimpleX4",
  data: `<circle cx="2" cy="2" r="1.5" stroke="currentColor" class="icon-dark"/>`
};
const cyStatusPendingSimpleX8 = {
  name: "statusPendingSimpleX8",
  data: `<path stroke="currentColor" stroke-width="2" d="M2.852 1.228a3 3 0 1 0 2.296 0" class="icon-dark"/>`
};
const cyStatusPlaceholderSimpleX4 = {
  name: "statusPlaceholderSimpleX4",
  data: `<circle cx="2" cy="2" r="2" fill="currentColor" class="icon-dark"/>`
};
const cyStatusPlaceholderSimpleX8 = {
  name: "statusPlaceholderSimpleX8",
  data: `<circle cx="4" cy="4" r="3" fill="currentColor" class="icon-dark"/>`
};
const cyStatusPlaceholderSolidX12 = {
  name: "statusPlaceholderSolidX12",
  data: `<circle cx="6" cy="6" r="5" fill="currentColor" class="icon-dark"/>`
};
const cyStatusPlaceholderSolidX16 = {
  name: "statusPlaceholderSolidX16",
  data: `<circle cx="8" cy="8" r="7" fill="currentColor" class="icon-dark"/>`
};
const cyStatusPlaceholderSolidX24 = {
  name: "statusPlaceholderSolidX24",
  data: `<circle cx="12" cy="12" r="10" fill="currentColor" class="icon-dark"/>`
};
const cyStatusQueuedOutlineX12 = {
  name: "statusQueuedOutlineX12",
  data: `<circle cx="6" cy="6" r="4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="icon-dark"/>`
};
const cyStatusQueuedOutlineX16 = {
  name: "statusQueuedOutlineX16",
  data: `<circle cx="8" cy="8" r="6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="icon-dark"/>`
};
const cyStatusQueuedOutlineX24 = {
  name: "statusQueuedOutlineX24",
  data: `<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" class="icon-dark"/>`
};
const cyStatusQueuedSimpleX4 = {
  name: "statusQueuedSimpleX4",
  data: `<circle cx="2" cy="2" r="1.5" stroke="currentColor" class="icon-dark"/>`
};
const cyStatusQueuedSimpleX8 = {
  name: "statusQueuedSimpleX8",
  data: `<circle cx="4" cy="4" r="3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="icon-dark"/>`
};
const cyStatusRunningOutlineX12 = {
  name: "statusRunningOutlineX12",
  data: `<circle cx="6" cy="6" r="4" stroke="#E1E3ED" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="icon-light"/><circle cx="6" cy="6" r="4" stroke="currentColor" stroke-dasharray="5 20" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="icon-dark"><animate attributeName="stroke-dashoffset" dur="1s" repeatCount="indefinite" values="25;0"/></circle>`
};
const cyStatusRunningOutlineX16 = {
  name: "statusRunningOutlineX16",
  data: `<circle cx="8" cy="8" r="6" stroke="#E1E3ED" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="icon-light"/><circle cx="8" cy="8" r="6" stroke="currentColor" stroke-dasharray="10 28" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="icon-dark"><animate attributeName="stroke-dashoffset" dur="1s" repeatCount="indefinite" values="36.6;0"/></circle>`
};
const cyStatusRunningOutlineX24 = {
  name: "statusRunningOutlineX24",
  data: `<circle cx="12" cy="12" r="9" stroke="#E1E3ED" stroke-width="2" class="icon-light"/><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-dasharray="15 42" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="icon-dark"><animate attributeName="stroke-dashoffset" dur="1s" repeatCount="indefinite" values="57;0"/></circle>`
};
const cyStatusRunningSimpleX4 = {
  name: "statusRunningSimpleX4",
  data: `<circle cx="2" cy="2" r="1.5" fill="#C5C9FD" stroke="currentColor" class="icon-dark-stroke icon-light-fill"><animate attributeName="stroke-width" dur="1.5s" repeatCount="indefinite" values="2;1;2"/><animate attributeName="r" dur="1.5s" repeatCount="indefinite" values="1;1.5;1"/></circle>`
};
const cyStatusRunningSimpleX8 = {
  name: "statusRunningSimpleX8",
  data: `<circle cx="4" cy="4" r="3" stroke="#E1E3ED" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="icon-light"/><circle cx="4" cy="4" r="3" stroke="currentColor" stroke-dasharray="5 14" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="icon-dark"><animate attributeName="stroke-dashoffset" dur="1s" repeatCount="indefinite" values="18.3;0"/></circle>`
};
const cyStatusSkippedOutlineX12 = {
  name: "statusSkippedOutlineX12",
  data: `<path stroke="currentColor" stroke-width="2" d="M3.172 8.828a4 4 0 0 0 5.656-5.656M3.172 8.828a4 4 0 0 1 5.656-5.656M3.172 8.828l5.656-5.656" class="icon-dark"/>`
};
const cyStatusSkippedOutlineX16 = {
  name: "statusSkippedOutlineX16",
  data: `<path stroke="currentColor" stroke-width="2" d="M3.757 12.243a6 6 0 1 0 8.486-8.486m-8.486 8.486a6 6 0 1 1 8.486-8.486m-8.486 8.486 8.486-8.486" class="icon-dark"/>`
};
const cyStatusSkippedOutlineX24 = {
  name: "statusSkippedOutlineX24",
  data: `<path stroke="currentColor" stroke-width="2" d="M5.636 18.364A9 9 0 0 0 18.364 5.636M5.636 18.364A9 9 0 0 1 18.364 5.636M5.636 18.364 18.364 5.636" class="icon-dark"/>`
};
const cyStatusSkippedSimpleX4 = {
  name: "statusSkippedSimpleX4",
  data: `<circle cx="2" cy="2" r="1.5" stroke="currentColor" class="icon-dark"/>`
};
const cyStatusSkippedSimpleX8 = {
  name: "statusSkippedSimpleX8",
  data: `<path stroke="currentColor" stroke-width="2" d="M1.879 6.121A3 3 0 0 0 6.12 1.88M1.88 6.12A3 3 0 1 1 6.12 1.88M1.88 6.12 6.12 1.88" class="icon-dark"/>`
};
const cyTechnologyAccessibilityX24 = {
  name: "technologyAccessibilityX24",
  data: `<path fill="#E1E3ED" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m12 10.999 4-1m-4 1-4-1m4 1v3m0 0-3 4m3-4 3 4m8-6c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11Zm-11-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" class="icon-dark-stroke icon-light-fill"/>`
};
const cyTechnologyBranchHX16 = {
  name: "technologyBranchHX16",
  data: `<path fill="currentColor" d="M3 12h3v-2H3zm3 0h7v-2H6zm4.236-6H13V4h-2.764zm-3.342 5.447 2.448-4.894-1.79-.895-2.446 4.895zM14 5v2a2 2 0 0 0 2-2zm0 0h-2a2 2 0 0 0 2 2zm0 0V3a2 2 0 0 0-2 2zm0 0h2a2 2 0 0 0-2-2zm0 6v2a2 2 0 0 0 2-2zm0 0h-2a2 2 0 0 0 2 2zm0 0V9a2 2 0 0 0-2 2zm0 0h2a2 2 0 0 0-2-2zM2 11v2a2 2 0 0 0 2-2zm0 0H0a2 2 0 0 0 2 2zm0 0V9a2 2 0 0 0-2 2zm0 0h2a2 2 0 0 0-2-2zm8.236-7a3 3 0 0 0-2.683 1.658l1.789.895A1 1 0 0 1 10.236 6z" class="icon-dark"/>`
};
const cyTechnologyBranchHTallX16 = {
  name: "technologyBranchHTallX16",
  data: `<path fill="currentColor" d="M3 13h3v-2H3zm3 0h7v-2H6zm4.386-8H13V3h-2.614zm-3.45 7.351L9.45 5.65l-1.873-.702-2.513 6.702zM14 4v2a2 2 0 0 0 2-2zm0 0h-2a2 2 0 0 0 2 2zm0 0V2a2 2 0 0 0-2 2zm0 0h2a2 2 0 0 0-2-2zm0 8v2a2 2 0 0 0 2-2zm0 0h-2a2 2 0 0 0 2 2zm0 0v-2a2 2 0 0 0-2 2zm0 0h2a2 2 0 0 0-2-2zM2 12v2a2 2 0 0 0 2-2zm0 0H0a2 2 0 0 0 2 2zm0 0v-2a2 2 0 0 0-2 2zm0 0h2a2 2 0 0 0-2-2zm8.386-9a3 3 0 0 0-2.809 1.947l1.873.702A1 1 0 0 1 10.386 5z" class="icon-dark"/>`
};
const cyTechnologyBrowserDarkX16 = {
  name: "technologyBrowserDarkX16",
  data: `<path fill="#D0D2E0" d="M2 6h12v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" class="icon-light"/><path fill="currentColor" fill-rule="evenodd" d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zM2 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2H2zm12 3H2v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1zM3.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M8 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" class="icon-dark" clip-rule="evenodd"/>`
};
const cyTechnologyBrowserLightX16 = {
  name: "technologyBrowserLightX16",
  data: `<path fill="#D0D2E0" d="M2 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2H2z" class="icon-light"/><path fill="currentColor" fill-rule="evenodd" d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zM2 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2H2zm12 3H2v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1zM3.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M8 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" class="icon-dark" clip-rule="evenodd"/>`
};
const cyTechnologyBrowserTesting2X48 = {
  name: "technologyBrowserTesting2X48",
  data: `<path fill="#D0D2E0" d="M40 8H8a3 3 0 0 0-3 3v5h38v-5a3 3 0 0 0-3-3" class="icon-light"/><path fill="#D0D2E0" fill-rule="evenodd" d="M8 8a3 3 0 0 0-3 3v5h38v-5a3 3 0 0 0-3-3z" class="icon-light" clip-rule="evenodd"/><path fill="currentColor" d="M5 16H4a1 1 0 0 0 1 1zm38 0v1a1 1 0 0 0 1-1zm-24-5a1 1 0 1 0 0 2zm20 2a1 1 0 1 0 0-2zM8 9h32V7H8zm34 2v26h2V11zM6 37V11H4v26zM5 17h38v-2H5zm14-4h20v-2H19zM8 39a2 2 0 0 1-2-2H4a4 4 0 0 0 4 4zm34-2a2 2 0 0 1-2 2v2a4 4 0 0 0 4-4zM40 9a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4zM8 7a4 4 0 0 0-4 4h2a2 2 0 0 1 2-2zm-4 4v5h2v-5zm40 5v-5h-2v5zm-4 23H24v2h16zm-16 0h-8v2h8zm-8 0H8v2h8zM10 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M16 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0" class="icon-dark"/><path fill="#9AA2FC" d="M15 30h4v4h-4z" class="icon-light-secondary"/><path fill="#4956E3" d="M33 25a1 1 0 1 0 0-2zm-10-2a1 1 0 1 0 0 2zm10 10a1 1 0 1 0 0-2zm-10-2a1 1 0 1 0 0 2zm-8.707-5.707a1 1 0 0 0 1.414 1.414zm5.414-2.586a1 1 0 0 0-1.414-1.414zm-4-1.414a1 1 0 0 0-1.414 1.414zm2.586 5.414a1 1 0 0 0 1.414-1.414zM15 30v-1a1 1 0 0 0-1 1zm4 0h1a1 1 0 0 0-1-1zm0 4v1a1 1 0 0 0 1-1zm-4 0h-1a1 1 0 0 0 1 1zm18-11H23v2h10zm0 8H23v2h10zm-17.293-4.293 2-2-1.414-1.414-2 2zm2-2 2-2-1.414-1.414-2 2zm-3.414-2 2 2 1.414-1.414-2-2zm2 2 2 2 1.414-1.414-2-2zM15 31h4v-2h-4zm3-1v4h2v-4zm1 3h-4v2h4zm-3 1v-4h-2v4z" class="icon-dark-secondary"/>`
};
const cyTechnologyCodeEditorX16 = {
  name: "technologyCodeEditorX16",
  data: `<path fill="#D0D2E0" d="M15 3a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v1h14z" class="icon-light"/><path fill="#D0D2E0" fill-rule="evenodd" d="M15 3a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v1h14z" class="icon-light" clip-rule="evenodd"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 4v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4M1 4V3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1M1 4h14m-5 4 1.5 1.5L10 11M6 8 4.5 9.5 6 11" class="icon-dark"/>`
};
const cyTechnologyCodeEditorX24 = {
  name: "technologyCodeEditorX24",
  data: `<path fill="#D0D2E0" d="M21 6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2h18z" class="icon-light"/><path fill="#D0D2E0" fill-rule="evenodd" d="M21 6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2h18z" class="icon-light" clip-rule="evenodd"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8M3 8V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2M3 8h18m-7 4 2 2-2 2m-4-4-2 1.929 2 1.928" class="icon-dark"/>`
};
const cyTechnologyCommandLineX16 = {
  name: "technologyCommandLineX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 6 3.5 3.5L3 13m6 0h4" class="icon-dark"/>`
};
const cyTechnologyCommandLineErrorX48 = {
  name: "technologyCommandLineErrorX48",
  data: `<rect fill="currentColor"/><path fill="#E1E3ED" d="M43 37V16H5v21a3 3 0 0 0 3 3h32a3 3 0 0 0 3-3" class="icon-light"/><path fill="#747994" d="M13 28a1 1 0 1 0 0 2zm-2 3a1 1 0 1 0 0 2zm2-6a1 1 0 1 0 0 2zm-2-3a1 1 0 1 0 0 2zm13 2a1 1 0 1 0 0-2zm-5-3a1 1 0 1 0 0-2zM9 19a1 1 0 1 0 0 2zm14.01 14a1 1 0 1 0 0-2zM29 27a1 1 0 1 0 0-2zM9 34a1 1 0 1 0 0 2zm17-4a1 1 0 1 0 0-2zm-8 6a1 1 0 1 0 0-2zM8 9h32V7H8zm34 2v26h2V11zM6 37V11H4v26zm2 2a2 2 0 0 1-2-2H4a4 4 0 0 0 4 4zm34-2a2 2 0 0 1-2 2v2a4 4 0 0 0 4-4zM40 9a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4zM8 7a4 4 0 0 0-4 4h2a2 2 0 0 1 2-2zm-4 4v5h2v-5zm40 5v-5h-2v5zm0 21V16h-2v21zM4 16v21h2V16zm1 1h38v-2H5zm35 22H8v2h32zm-27-9h4v-2h-4zm3 1h-5v2h5zm0-4h8v-2h-8zm-3 0h2v-2h-2zm-2-3h5v-2h-5zm13-2h-6.99v2H24zm-5-3h-6v2h6zM9 21h3v-2H9zm8 12h6.01v-2H17zm8-6h4v-2h-4zm-7 3h5v-2h-5zm-4 4H9v2h5zm10-4h2v-2h-2zm-9 6h3v-2h-3zM10 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M16 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0" class="icon-dark"/><path fill="#F8C4CD" d="M34 36.998a1 1 0 1 1-2 0 1 1 0 0 1 2 0" class="icon-light-secondary"/><path fill="#F8C4CD" fill-rule="evenodd" d="M31 31.498a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v1.17a.5.5 0 0 0 .75.432l1.013-.584a.5.5 0 0 1 .683.183l1.5 2.598a.5.5 0 0 1-.183.683l-1.013.585a.5.5 0 0 0 0 .866l1.013.585a.5.5 0 0 1 .183.683l-1.5 2.598a.5.5 0 0 1-.683.183l-1.013-.585a.5.5 0 0 0-.75.433v1.17a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1.17a.5.5 0 0 0-.75-.432l-1.013.584a.5.5 0 0 1-.683-.183l-1.5-2.598a.5.5 0 0 1 .183-.683l1.013-.585a.5.5 0 0 0 0-.866l-1.013-.585a.5.5 0 0 1-.183-.683l1.5-2.598a.5.5 0 0 1 .683-.183l1.013.584a.5.5 0 0 0 .75-.433zm2 6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" class="icon-light-secondary" clip-rule="evenodd"/><path stroke="#C62B49" stroke-linejoin="round" stroke-width="2" d="M34 36.998a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" class="icon-dark-secondary"/><path stroke="#C62B49" stroke-linejoin="round" stroke-width="2" d="M31 31.498a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v1.17a.5.5 0 0 0 .75.432l1.013-.584a.5.5 0 0 1 .683.183l1.5 2.598a.5.5 0 0 1-.183.683l-1.013.585a.5.5 0 0 0 0 .866l1.013.585a.5.5 0 0 1 .183.683l-1.5 2.598a.5.5 0 0 1-.683.183l-1.013-.585a.5.5 0 0 0-.75.433v1.17a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1.17a.5.5 0 0 0-.75-.432l-1.013.584a.5.5 0 0 1-.683-.183l-1.5-2.598a.5.5 0 0 1 .183-.683l1.013-.585a.5.5 0 0 0 0-.866l-1.013-.585a.5.5 0 0 1-.183-.683l1.5-2.598a.5.5 0 0 1 .683-.183l1.013.584a.5.5 0 0 0 .75-.433zm2 6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" class="icon-dark-secondary" clip-rule="evenodd"/>`
};
const cyTechnologyCypressX16 = {
  name: "technologyCypressX16",
  data: `<path fill="currentColor" fill-rule="evenodd" d="M7.872 8.854A2.5 2.5 0 0 1 7.1 9.857c-.43.334-.972.533-1.561.533-1.394 0-2.524-1.113-2.524-2.487s1.13-2.487 2.524-2.487a2.54 2.54 0 0 1 1.705.654c.27.243.485.544.627.882l-1.339.464c-.169-.385-.532-.652-.953-.652-.582 0-1.054.51-1.054 1.139s.472 1.139 1.054 1.139c.421 0 .784-.267.953-.652z" class="icon-dark" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M7.872 8.854A2.5 2.5 0 0 1 7.1 9.857c-.43.334-.972.533-1.561.533-1.394 0-2.524-1.113-2.524-2.487s1.13-2.487 2.524-2.487a2.54 2.54 0 0 1 1.705.654c.27.243.485.544.627.882l-1.339.464c-.169-.385-.532-.652-.953-.652-.582 0-1.054.51-1.054 1.139s.472 1.139 1.054 1.139c.421 0 .784-.267.953-.652z" class="icon-dark" clip-rule="evenodd"/><path fill="currentColor" d="M2 8a6 6 0 1 1 9.122 5.125l-.996 2.59A8 8 0 0 0 16 8a8 8 0 1 0-7.64 7.991.93.93 0 0 0 .817-.61l3.807-9.88h-1.459L10.39 8.717 9.23 5.5H7.687l1.93 4.975-1.364 3.519A6.001 6.001 0 0 1 2 8" class="icon-dark"/>`
};
const cyTechnologyDashboardCheckmarkX48 = {
  name: "technologyDashboardCheckmarkX48",
  data: `<path fill="#D0D2E0" d="M40 8H8a3 3 0 0 0-3 3v5h38v-5a3 3 0 0 0-3-3" class="icon-light"/><path fill="#D0D2E0" fill-rule="evenodd" d="M8 8a3 3 0 0 0-3 3v5h38v-5a3 3 0 0 0-3-3z" class="icon-light" clip-rule="evenodd"/><path fill="#D0D2E0" d="m19 30-5-2-5 3v5h29a1 1 0 0 0 1-1V23l-5 1-5 3-5-2z" class="icon-light"/><path fill="currentColor" d="M5 16H4a1 1 0 0 0 1 1zm38 0v1a1 1 0 0 0 1-1zm-24-5a1 1 0 1 0 0 2zm20 2a1 1 0 1 0 0-2zM14 28l.371-.928a1 1 0 0 0-.886.07zm5 2-.371.928a1 1 0 0 0 1.078-.22zm5-5 .371-.928a1 1 0 0 0-1.078.22zm5 2-.371.928a1 1 0 0 0 .886-.07zM9 31l-.514-.858A1 1 0 0 0 8 31zm25-7-.196-.98a1 1 0 0 0-.319.122zM9 36H8a1 1 0 0 0 1 1zM8 9h32V7H8zm34 2v26h2V11zM6 37V11H4v26zM5 17h38v-2H5zm14-4h20v-2H19zM8 39a2 2 0 0 1-2-2H4a4 4 0 0 0 4 4zm34-2a2 2 0 0 1-2 2v2a4 4 0 0 0 4-4zM40 9a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4zM8 7a4 4 0 0 0-4 4h2a2 2 0 0 1 2-2zm-4 4v5h2v-5zm40 5v-5h-2v5zm-6 3H10v2h28zm-24.371 9.929 5 2 .742-1.857-5-2zm6.078 1.778 5-5-1.414-1.414-5 5zm3.922-4.779 5 2 .742-1.857-5-2zM40 35V23h-2v12zm0-12v-2h-2v2zm0 16H24v2h16zm-16 0h-8v2h8zm-8 0H8v2h8zm-6.485-7.142 5-3-1.03-1.716-5 3zm20-4 5-3-1.03-1.716-5 3zm4.681-2.877 5-1-.392-1.962-5 1zM38 35H9v2h29zm-28 1V21H8v15zm-2-5v5h2v-5zm30-10h2a2 2 0 0 0-2-2zm0 14v2a2 2 0 0 0 2-2zM10 19a2 2 0 0 0-2 2h2zM10 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M16 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0" class="icon-dark"/><path fill="#69D3A7" d="M37 37a6 6 0 1 0-12 0 6 6 0 0 0 12 0"/><path fill="#00814D" d="M28.293 38.207a1 1 0 0 1 1.414-1.414zM30.5 39l.814.581a1 1 0 0 1-1.521.126zm1.686-4.081a1 1 0 1 1 1.628 1.162zM36 37a5 5 0 0 0-5-5v-2a7 7 0 0 1 7 7zm-5-5a5 5 0 0 0-5 5h-2a7 7 0 0 1 7-7zm-5 5a5 5 0 0 0 5 5v2a7 7 0 0 1-7-7zm5 5a5 5 0 0 0 5-5h2a7 7 0 0 1-7 7zm-1.293-5.207 1.5 1.5-1.414 1.414-1.5-1.5zm-.02 1.626 2.5-3.5 1.627 1.162-2.5 3.5z"/>`
};
const cyTechnologyDashboardFailX48 = {
  name: "technologyDashboardFailX48",
  data: `<path fill="#D0D2E0" fill-rule="evenodd" d="M8 8a3 3 0 0 0-3 3v5h38v-5a3 3 0 0 0-3-3z" class="icon-light" clip-rule="evenodd"/><path fill="#D0D2E0" d="m19 30-5-2-5 3v5h29a1 1 0 0 0 1-1V23l-5 1-5 3-5-2z" class="icon-light"/><path fill="currentColor" d="M5 16H4a1 1 0 0 0 1 1zm38 0v1a1 1 0 0 0 1-1zm-24-5a1 1 0 1 0 0 2zm20 2a1 1 0 1 0 0-2zM14 28l.371-.928a1 1 0 0 0-.886.07zm5 2-.371.928a1 1 0 0 0 1.078-.22zm5-5 .371-.928a1 1 0 0 0-1.078.22zm5 2-.371.928a1 1 0 0 0 .886-.07zM9 31l-.514-.858A1 1 0 0 0 8 31zm25-7-.196-.98a1 1 0 0 0-.319.122zM9 36H8a1 1 0 0 0 1 1zM8 9h32V7H8zm34 2v26h2V11zM6 37V11H4v26zM5 17h38v-2H5zm14-4h20v-2H19zM8 39a2 2 0 0 1-2-2H4a4 4 0 0 0 4 4zm34-2a2 2 0 0 1-2 2v2a4 4 0 0 0 4-4zM40 9a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4zM8 7a4 4 0 0 0-4 4h2a2 2 0 0 1 2-2zm-4 4v5h2v-5zm40 5v-5h-2v5zm-6 3H10v2h28zm-24.371 9.929 5 2 .742-1.857-5-2zm6.078 1.778 5-5-1.414-1.414-5 5zm3.922-4.779 5 2 .742-1.857-5-2zM40 35V23h-2v12zm0-12v-2h-2v2zm0 16H24v2h16zm-16 0h-8v2h8zm-8 0H8v2h8zm-6.485-7.142 5-3-1.03-1.716-5 3zm20-4 5-3-1.03-1.716-5 3zm4.681-2.877 5-1-.392-1.962-5 1zM38 35H9v2h29zm-28 1V21H8v15zm-2-5v5h2v-5zm30-10h2a2 2 0 0 0-2-2zm0 14v2a2 2 0 0 0 2-2zM10 19a2 2 0 0 0-2 2h2zM10 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M16 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0" class="icon-dark"/><path fill="#F8C4CD" d="M35.243 41.243a6 6 0 1 1-8.486-8.485 6 6 0 0 1 8.486 8.485" class="icon-light-secondary"/><path stroke="#C62B49" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m32.5 35.5-3 3m3 0-3-3m5.743 5.743a6 6 0 1 1-8.486-8.485 6 6 0 0 1 8.486 8.485" class="icon-dark-secondary"/>`
};
const cyTechnologyDashboardRunningX48 = {
  name: "technologyDashboardRunningX48",
  data: `<path fill="#E1E3ED" d="M40 8H8a3 3 0 0 0-3 3v5h38v-5a3 3 0 0 0-3-3" class="icon-light"/><path fill="#E1E3ED" fill-rule="evenodd" d="M8 8a3 3 0 0 0-3 3v5h38v-5a3 3 0 0 0-3-3z" class="icon-light" clip-rule="evenodd"/><path fill="#E1E3ED" d="m19 30-5-2-5 3v5h29a1 1 0 0 0 1-1V23l-5 1-5 3-5-2z" class="icon-light"/><path stroke="#9095AD" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12h20m4-1v26a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V11m38 0a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3m38 0v5H5v-5m34 12v12a1 1 0 0 1-1 1H9m30-13v-2a1 1 0 0 0-1-1H10a1 1 0 0 0-1 1v15m30-13-5 1-5 3-5-2-5 5-5-2-5 3v5" class="icon-dark"/><path fill="#9095AD" d="M10 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M16 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0" class="icon-dark"/><path fill="#fff" d="M39 37a8 8 0 1 1-16 0 8 8 0 0 1 16 0"/><path fill="currentColor" d="M37 37a6 6 0 1 1-12 0 6 6 0 0 1 12 0" class="icon-light"/><path fill="#C5C9FD" fill-rule="evenodd" d="M31 32a5 5 0 1 0 0 10 5 5 0 0 0 0-10m-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0" class="icon-light-secondary" clip-rule="evenodd"/><path fill="#4956E3" fill-rule="evenodd" d="M30 31a1 1 0 0 1 1-1 7 7 0 0 1 7 7 1 1 0 1 1-2 0 5 5 0 0 0-5-5 1 1 0 0 1-1-1" class="icon-dark-secondary" clip-rule="evenodd"/><path fill="#fff" d="M36 37a5 5 0 1 1-10 0 5 5 0 0 1 10 0"/>`
};
const cyTechnologyDollarX16 = {
  name: "technologyDollarX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3h3a1 1 0 0 1 1 1v.5M5 3H2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3m0-5V1m0 2v5m0 5h3a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H5m0 5H2a1 1 0 0 1-1-1v-.5M5 13v2m0-2V8" class="icon-dark"/>`
};
const cyTechnologyDragProjectX48 = {
  name: "technologyDragProjectX48",
  data: `<path stroke="rgba(0,0,0,0.2)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M38.5 15v-1m-29 24h-2a3 3 0 0 1-3-3v-1m34-24V9a3 3 0 0 0-3-3h-1m-30 4V9a3 3 0 0 1 3-3h1m-4 24v-2.5m0-4v-3m0-4V14m8-8H16m4 0h3m4 0h3.5" class="icon-dark-secondary"/><path fill="#69D3A7" d="M26.086 15.586A2 2 0 0 0 24.672 15H13.5a1 1 0 0 0-1 1v5h12.172a2 2 0 0 0 1.414-.586L28.5 18z" class="icon-light"/><path fill="currentColor" d="M12.5 21h-1zm13.586-.586.707.707zM24.672 15v-1zm1.414.586.707-.707zM13.5 15v1zm10.707 13.707a.999.999 0 1 0-1.414-1.414zM21 30.5l-.707-.707a1 1 0 0 0 0 1.414zm1.793 3.207a.999.999 0 1 0 1.414-1.414zm9.414-6.414a.999.999 0 1 0-1.414 1.414zM34 30.5l.707.707a1 1 0 0 0 0-1.414zm-3.207 1.793a.999.999 0 1 0 1.414 1.414zm-5.269 2.49a1 1 0 1 0 1.952.434zm3.952-8.566a1 1 0 1 0-1.952-.434zM41.5 20v19h2V20zm-1 20h-26v2h26zm-27-24h11.172v-2H13.5zm11.879.293 2.414 2.414 1.414-1.414-2.414-2.414zM28.5 19h12v-2h-12zm-.707-1.707-2.414 2.414 1.414 1.414 2.414-2.414zM13.5 39V21h-2v18zm0-18v-5h-2v5zm11.172-1H12.5v2h12.172zm.707-.293a1 1 0 0 1-.707.293v2a3 3 0 0 0 2.121-.879zM24.672 16a1 1 0 0 1 .707.293l1.414-1.414A3 3 0 0 0 24.672 14zM14.5 40a1 1 0 0 1-1-1h-2a3 3 0 0 0 3 3zm27-1a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3zm2-19a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1zm-30-6a2 2 0 0 0-2 2h2zm9.293 13.293-2.5 2.5 1.414 1.414 2.5-2.5zm-2.5 3.914 2.5 2.5 1.414-1.414-2.5-2.5zm10.5-2.5 2.5 2.5 1.414-1.414-2.5-2.5zm2.5 1.086-2.5 2.5 1.414 1.414 2.5-2.5zm-5.817 5.424 2-9-1.952-.434-2 9z" class="icon-dark"/>`
};
const cyTechnologyElementSelectorX16 = {
  name: "technologyElementSelectorX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h1" class="icon-dark"/><path fill="currentColor" stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="m10 11 3 3 1-1-3-3 1.5-1.5L7 7l1.5 5.5z" class="icon-dark"/>`
};
const cyTechnologyImageScreenshotX16 = {
  name: "technologyImageScreenshotX16",
  data: `<path fill="#D0D2E0" d="M1 14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2l-2.5-2.5L10 12 5.5 7.5 1 12zM12 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" class="icon-light"/><path fill="currentColor" d="m5.5 7.5.707-.707a1 1 0 0 0-1.414 0zM10 12l-.707.707a1 1 0 0 0 1.414 0zm2.5-2.5.707-.707a1 1 0 0 0-1.414 0zM14 0H2v2h12zM2 14v-2H0v2zm0-2V2H0v10zm-.293.707 4.5-4.5-1.414-1.414-4.5 4.5zm3.086-4.5 4.5 4.5 1.414-1.414-4.5-4.5zm5.914 4.5 2.5-2.5-1.414-1.414-2.5 2.5zM16 14v-2h-2v2zm0-2V2h-2v10zm-4.207-1.793 2.5 2.5 1.414-1.414-2.5-2.5zM2 16h12v-2H2zm9-11v2a2 2 0 0 0 2-2zm0 0H9a2 2 0 0 0 2 2zm0 0V3a2 2 0 0 0-2 2zm0 0h2a2 2 0 0 0-2-2zm3-3h2a2 2 0 0 0-2-2zm0 12v2a2 2 0 0 0 2-2zM2 0a2 2 0 0 0-2 2h2zM0 14a2 2 0 0 0 2 2v-2z" class="icon-dark"/>`
};
const cyTechnologyImageScreenshotX24 = {
  name: "technologyImageScreenshotX24",
  data: `<path fill="#C5C9FD" d="M3 19a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2l-3-3-3 3-6-6-6 6zM18 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0" class="icon-light"/><path fill="currentColor" d="m9 11 .707-.707a1 1 0 0 0-1.414 0zm6 6-.707.707a1 1 0 0 0 1.414 0zm3-3 .707-.707a1 1 0 0 0-1.414 0zm2-11H4v2h16zM4 19v-2H2v2zm0-2V5H2v12zm-.293.707 6-6-1.414-1.414-6 6zm4.586-6 6 6 1.414-1.414-6-6zm7.414 6 3-3-1.414-1.414-3 3zM22 19v-2h-2v2zm0-2V5h-2v12zm-4.707-2.293 3 3 1.414-1.414-3-3zM4 21h16v-2H4zM17 9a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3zm-1 1a1 1 0 0 1-1-1h-2a3 3 0 0 0 3 3zm-1-1a1 1 0 0 1 1-1V6a3 3 0 0 0-3 3zm1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3zm4-3h2a2 2 0 0 0-2-2zm0 14v2a2 2 0 0 0 2-2zM4 3a2 2 0 0 0-2 2h2zM2 19a2 2 0 0 0 2 2v-2z" class="icon-dark"/>`
};
const cyTechnologyInfinityLoopX16 = {
  name: "technologyInfinityLoopX16",
  data: `<path fill="currentColor" d="M7 5v1h2V5zm2 6v-1H7v1zM5 7a2 2 0 0 1-2-2H1a4 4 0 0 0 4 4zM3 5a2 2 0 0 1 2-2V1a4 4 0 0 0-4 4zm2-2a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4zm8 8a2 2 0 0 1-2 2v2a4 4 0 0 0 4-4zm-2 2a2 2 0 0 1-2-2H7a4 4 0 0 0 4 4zm0-4a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4zm0-2H5v2h6z" class="icon-dark"/>`
};
const cyTechnologyInfinityLoopX20 = {
  name: "technologyInfinityLoopX20",
  data: `<path fill="currentColor" d="M11 13v-1H9v1zM9 7v1h2V7zM5.5 9A3.5 3.5 0 0 1 2 5.5H0A5.5 5.5 0 0 0 5.5 11zM2 5.5A3.5 3.5 0 0 1 5.5 2V0A5.5 5.5 0 0 0 0 5.5zM5.5 2A3.5 3.5 0 0 1 9 5.5h2A5.5 5.5 0 0 0 5.5 0zM18 14.5a3.5 3.5 0 0 1-3.5 3.5v2a5.5 5.5 0 0 0 5.5-5.5zM14.5 18a3.5 3.5 0 0 1-3.5-3.5H9a5.5 5.5 0 0 0 5.5 5.5zm0-7a3.5 3.5 0 0 1 3.5 3.5h2A5.5 5.5 0 0 0 14.5 9zm0-2h-9v2h9zM11 14.5V13H9v1.5zm-2-9V7h2V5.5z" class="icon-dark"/>`
};
const cyTechnologyInfinityLoopX24 = {
  name: "technologyInfinityLoopX24",
  data: `<path fill="currentColor" d="M13 15v-1h-2v1zm-2-6v1h2V9zm-3.5 2A3.5 3.5 0 0 1 4 7.5H2A5.5 5.5 0 0 0 7.5 13zM4 7.5A3.5 3.5 0 0 1 7.5 4V2A5.5 5.5 0 0 0 2 7.5zM7.5 4A3.5 3.5 0 0 1 11 7.5h2A5.5 5.5 0 0 0 7.5 2zM20 16.5a3.5 3.5 0 0 1-3.5 3.5v2a5.5 5.5 0 0 0 5.5-5.5zM16.5 20a3.5 3.5 0 0 1-3.5-3.5h-2a5.5 5.5 0 0 0 5.5 5.5zm0-7a3.5 3.5 0 0 1 3.5 3.5h2a5.5 5.5 0 0 0-5.5-5.5zm0-2h-9v2h9zM13 16.5V15h-2v1.5zm-2-9V9h2V7.5z" class="icon-dark"/>`
};
const cyTechnologyLockedProjectX48 = {
  name: "technologyLockedProjectX48",
  data: `<path fill="#D0D2E0" d="M18.586 8.586A2 2 0 0 0 17.172 8H6a1 1 0 0 0-1 1v5h12.172a2 2 0 0 0 1.414-.586L21 11z" class="icon-light"/><path fill="currentColor" d="m18.586 13.414.707.707zM17.172 8v1zm1.414.586.707-.707zM5 38H4zM6 8V7zm36 5v25h2V13zm-1 26H7v2h34zM6 9h11.172V7H6zm11.879.293 2.414 2.414 1.414-1.414-2.414-2.414zM21 12h20v-2H21zm-.707-1.707-2.414 2.414 1.414 1.414 2.414-2.414zM6 38V14H4v24zm0-24V9H4v5zm11.172-1H5v2h12.172zm.707-.293a1 1 0 0 1-.707.293v2a3 3 0 0 0 2.12-.879zM17.172 9a1 1 0 0 1 .707.293l1.414-1.414A3 3 0 0 0 17.172 7zM7 39a1 1 0 0 1-1-1H4a3 3 0 0 0 3 3zm35-1a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3zm2-25a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1zM6 7a2 2 0 0 0-2 2h2z" class="icon-dark"/><path fill="#69D3A7" fill-rule="evenodd" d="M25 41a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2z" class="icon-light-secondary" clip-rule="evenodd"/><path stroke="#00814D" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M28 34h-1a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-1m-6 0v-2a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v2m-6 0h6m-3 4v1" class="icon-dark-secondary"/>`
};
const cyTechnologyOctothorpeX16 = {
  name: "technologyOctothorpeX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 2 4 14m5 0 3-12m2 4H3m10 4H2" class="icon-dark"/>`
};
const cyTechnologyPullRequestX16 = {
  name: "technologyPullRequestX16",
  data: `<path fill="currentColor" d="M2.5 12a1 1 0 1 0 2 0zm2-8a1 1 0 1 0-2 0zm7 8a1 1 0 1 0 2 0zm-4-8-.707-.707a1 1 0 0 0 0 1.414zM9 2.5h1a1 1 0 0 0-1.707-.707zm0 3-.707.707A1 1 0 0 0 10 5.5zM11.5 4v1zm-7 8V4h-2v8zm9 0V5h-2v7zm-2-9h-4v2h4zM8.207 4.707l1.5-1.5-1.414-1.414-1.5 1.5zm-1.414 0 1.5 1.5 1.414-1.414-1.5-1.5zM8 2.5v3h2v-3zM13.5 5a2 2 0 0 0-2-2v2z" class="icon-dark"/><path fill="#D0D2E0" stroke="currentColor" d="M5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm9 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" class="icon-light-fill icon-dark-stroke"/>`
};
const cyTechnologyServerX16 = {
  name: "technologyServerX16",
  data: `<rect width="14" height="6" x="1" y="2" fill="#D0D2E0" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="icon-dark-stroke icon-light-fill" rx="2"/><rect width="14" height="6" x="1" y="8" fill="#D0D2E0" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="icon-dark-stroke icon-light-fill" rx="2"/><path fill="currentColor" d="M13 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M10 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0" class="icon-dark"/>`
};
const cyTechnologyTerminalX16 = {
  name: "technologyTerminalX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 4v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4M1 4V3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1M1 4h14M5 8l1.5 1.5L5 11" class="icon-dark" opacity=".7"/>`
};
const cyTechnologyTerminalLogX16 = {
  name: "technologyTerminalLogX16",
  data: `<path fill="#D0D2E0" d="M15 3a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v1h14z" class="icon-light"/><path fill="#D0D2E0" fill-rule="evenodd" d="M15 3a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v1h14z" class="icon-light" clip-rule="evenodd"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 4v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4M1 4V3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1M1 4h14" class="icon-dark"/><path fill="currentColor" d="M4.5 7a.5.5 0 0 0 0 1zm1 1H6V7h-.5zm-1 1a.5.5 0 0 0 0 1zM6 10h.5V9H6zm-1.5 1a.5.5 0 0 0 0 1zm3 1H8v-1h-.5zm0-3H7v1h.5zM9 10a.5.5 0 0 0 0-1zm0 1h-.5v1H9zm2 1a.5.5 0 0 0 0-1zM7 7h-.5v1H7zm1 1h.5V7H8zm1.5-1H9v1h.5zm2 1a.5.5 0 0 0 0-1zm-7 0h1V7h-1zm0 2H6V9H4.5zm0 2h3v-1h-3zm3-2H9V9H7.5zM9 12h2v-1H9zM7 8h1V7H7zm2.5 0h2V7h-2z" class="icon-dark"/>`
};
const cyTechnologyTestResultsX16 = {
  name: "technologyTestResultsX16",
  data: `<path fill="currentColor" d="M1 10h3v3H1z" class="icon-dark"/><path fill="currentColor" d="M15 5.5a1 1 0 1 0 0-2zm-8-2a1 1 0 0 0 0 2zm8 9a1 1 0 1 0 0-2zm-8-2a1 1 0 1 0 0 2zM.293 5.293a1 1 0 0 0 1.414 1.414zm4.414-1.586a1 1 0 0 0-1.414-1.414zm-3-1.414A1 1 0 0 0 .293 3.707zm1.586 4.414a1 1 0 0 0 1.414-1.414zM1 10V9a1 1 0 0 0-1 1zm3 0h1a1 1 0 0 0-1-1zm0 3v1a1 1 0 0 0 1-1zm-3 0H0a1 1 0 0 0 1 1zm14-9.5H7v2h8zm0 7H7v2h8zM1.707 6.707l1.5-1.5-1.414-1.414-1.5 1.5zm1.5-1.5 1.5-1.5-1.414-1.414-1.5 1.5zm-2.914-1.5 1.5 1.5 1.414-1.414-1.5-1.5zm1.5 1.5 1.5 1.5 1.414-1.414-1.5-1.5zM1 11h3V9H1zm2-1v3h2v-3zm1 2H1v2h3zm-2 1v-3H0v3z" class="icon-dark"/>`
};
const cyTechnologyTestResultsX24 = {
  name: "technologyTestResultsX24",
  data: `<path fill="#D0D2E0" d="M3 15h4v4H3z" class="icon-light"/><path fill="currentColor" d="M21 8a1 1 0 1 0 0-2zM11 6a1 1 0 1 0 0 2zm10 12a1 1 0 1 0 0-2zm-10-2a1 1 0 1 0 0 2zM2.293 8.293a1 1 0 0 0 1.414 1.414zm5.414-2.586a1 1 0 0 0-1.414-1.414zm-4-1.414a1 1 0 0 0-1.414 1.414zm2.586 5.414a1 1 0 0 0 1.414-1.414zM3 15v-1a1 1 0 0 0-1 1zm4 0h1a1 1 0 0 0-1-1zm0 4v1a1 1 0 0 0 1-1zm-4 0H2a1 1 0 0 0 1 1zM21 6H11v2h10zm0 10H11v2h10zM3.707 9.707l2-2-1.414-1.414-2 2zm2-2 2-2-1.414-1.414-2 2zm-3.414-2 2 2 1.414-1.414-2-2zm2 2 2 2 1.414-1.414-2-2zM3 16h4v-2H3zm3-1v4h2v-4zm1 3H3v2h4zm-3 1v-4H2v4z" class="icon-dark"/>`
};
const cyTechnologyUiCoverageX24 = {
  name: "technologyUiCoverageX24",
  data: `<path fill="#E1E3ED" stroke="currentColor" stroke-width="2" d="M21.428 9.885 7.294 7.058a.2.2 0 0 0-.235.235l2.827 14.134a.2.2 0 0 0 .375.05l2.615-5.23a.2.2 0 0 1 .32-.052l4.163 4.163a.2.2 0 0 0 .282 0l2.718-2.718a.2.2 0 0 0 0-.282l-4.163-4.163a.2.2 0 0 1 .052-.32l5.23-2.615a.2.2 0 0 0-.05-.375Z" class="icon-dark-stroke icon-light-fill"/><path fill="currentColor" fill-rule="evenodd" d="M10-.001a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1m8.207 3.207-1.06 1.06a1 1 0 1 1-1.415-1.413l1.06-1.061a1 1 0 1 1 1.415 1.414m-13.5 13.5a1 1 0 1 0-1.414-1.414l-1.06 1.06a1 1 0 1 0 1.413 1.415zM1.793 1.792a1 1 0 0 1 1.414 0l1.06 1.06a1 1 0 0 1-1.413 1.415l-1.061-1.06a1 1 0 0 1 0-1.415M1 8.999a1 1 0 1 0 0 2h1.5a1 1 0 1 0 0-2z" class="icon-dark" clip-rule="evenodd"/>`
};
const cyTestingTypeComponentX16 = {
  name: "testingTypeComponentX16",
  data: `<path fill="currentColor" fill-opacity=".5" d="M2 10h4v4H2zM10 2h4v4h-4z" class="icon-dark"/><path fill="currentColor" d="M2 6V5a1 1 0 0 0-1 1zm4 0h1V5H6zm-4 8H1a1 1 0 0 0 1 1zm8-12V1H9v1zm4 0h1a1 1 0 0 0-1-1zm0 4v1h1V6zm-4 0H9v1h1zm0 4h1V9h-1zm0 4v1a1 1 0 0 0 1-1zM2 7h4V5H2zm3-1v4h2V6zm1 3H2v2h4zm-3 1V6H1v4zm2 0v4h2v-4zm1 3H2v2h4zm-3 1v-4H1v4zm7-11h4V1h-4zm3-1v4h2V2zm1 3h-4v2h4zm-3 1V2H9v4zm-5 5h4V9H6zm3-1v4h2v-4zm1 3H6v2h4z" class="icon-dark"/>`
};
const cyTestingTypeComponentX24 = {
  name: "testingTypeComponentX24",
  data: `<path fill="#D0D2E0" d="M3 14h7v7H4a1 1 0 0 1-1-1zM14 3h6a1 1 0 0 1 1 1v6h-7z" class="icon-light"/><path fill="currentColor" d="M10 7h1V6h-1zm4-4V2h-1v1zm7 7v1h1v-1zm-7 0h-1v1h1zm3 4h1v-1h-1zM4 8h6V6H4zm5-1v7h2V7zm1 6H3v2h7zm-6 1V8H2v6zm5 0v7h2v-7zm1 6H4v2h6zm-6 0v-6H2v6zM14 4h6V2h-6zm6 0v6h2V4zm1 5h-7v2h7zm-6 1V3h-2v7zm-5 5h7v-2h-7zm6-1v6h2v-6zm0 6h-6v2h6zm0 0v2a2 2 0 0 0 2-2zm4-16h2a2 2 0 0 0-2-2zM4 20H2a2 2 0 0 0 2 2zM4 6a2 2 0 0 0-2 2h2z" class="icon-dark"/>`
};
const cyTestingTypeComponentX64 = {
  name: "testingTypeComponentX64",
  data: `<path fill="#D0D2E0" d="M36 5h21.5A1.5 1.5 0 0 1 59 6.5V28H36zM32 32H9v21.5a1.5 1.5 0 0 0 1.5 1.5H32z" class="icon-light"/><path fill="currentColor" d="M32 9h1V8h-1zm4-4V4h-1v1zm23 23v1h1v-1zm-23 0h-1v1h1zm19 4h1v-1h-1zM10.5 10H32V8H10.5zM31 9v23h2V9zm1 22H9v2h23zm-22 1V10.5H8V32zm21 0v23h2V32zm1 22H10.5v2H32zm-22-.5V32H8v21.5zM36 6h21.5V4H36zm22 .5V28h2V6.5zM59 27H36v2h23zm-22 1V5h-2v23zm-5 5h23v-2H32zm22-1v21.5h2V32zm-.5 22H32v2h21.5zm.5-.5a.5.5 0 0 1-.5.5v2a2.5 2.5 0 0 0 2.5-2.5zM57.5 6a.5.5 0 0 1 .5.5h2A2.5 2.5 0 0 0 57.5 4zm-47 48a.5.5 0 0 1-.5-.5H8a2.5 2.5 0 0 0 2.5 2.5zm0-46A2.5 2.5 0 0 0 8 10.5h2a.5.5 0 0 1 .5-.5z" class="icon-dark"/>`
};
const cyTestingTypeComponentSolidX24 = {
  name: "testingTypeComponentSolidX24",
  data: `<mask id="testing-type-component-solid_x24_svg__a" fill="#fff"><path d="M2 13h9v9H4a2 2 0 0 1-2-2zM13 2h7a2 2 0 0 1 2 2v7h-9z"/></mask><path fill="currentColor" d="M2 13h9v9H4a2 2 0 0 1-2-2zM13 2h7a2 2 0 0 1 2 2v7h-9z" class="icon-dark"/><path fill="currentColor" d="M11 13h2a2 2 0 0 0-2-2zm-9 0v-2a2 2 0 0 0-2 2zm9 9v2a2 2 0 0 0 2-2zm2-20V0h-2v2zm9 9v2h2v-2zm-9 0h-2v2h2zm-2 0H2v4h9zm-2 2v9h4v-9zm2 7H4v4h7zm-7 0v-7H0v7zm9-16h7V0h-7zm7 0v7h4V4zm2 5h-9v4h9zm-7 2V2h-4v9zm5-7h4a4 4 0 0 0-4-4zM4 20H0a4 4 0 0 0 4 4z" class="icon-dark" mask="url(#testing-type-component-solid_x24_svg__a)"/><path fill="#D0D2E0" d="M4 4h7v9h9v7a2 2 0 0 1-2 2h-7v-9H2V6a2 2 0 0 1 2-2" class="icon-light"/>`
};
const cyTestingTypeComponentSolidX64 = {
  name: "testingTypeComponentSolidX64",
  data: `<path fill="currentColor" d="M36 4h21a3 3 0 0 1 3 3v21H36zM32 56H11a3 3 0 0 1-3-3V32h24z" class="icon-dark"/><path fill="#D0D2E0" d="M11 8h21v24h24v21a3 3 0 0 1-3 3H32V32H8V11a3 3 0 0 1 3-3" class="icon-light"/>`
};
const cyTestingTypeE2EX16 = {
  name: "testingTypeE2EX16",
  data: `<path fill="#D0D2E0" d="M15 14V5h-3v6H4v3z" class="icon-light"/><path fill="currentColor" d="M15 5h1a1 1 0 0 0-1-1zM4 14H3a1 1 0 0 0 1 1zm11 0v1a1 1 0 0 0 1-1zM1 2V1a1 1 0 0 0-1 1zm11 0h1a1 1 0 0 0-1-1zM1 11H0a1 1 0 0 0 1 1zm11 0v1a1 1 0 0 0 1-1zm2-6v9h2V5zm1 8H4v2h11zM1 3h11V1H1zm11 7H4v2h8zm-8 0H1v2h3zm1 4v-3H3v3zm7-8h3V4h-3zm-1-4v3h2V2zm0 3v6h2V5zm-9 6V2H0v9zM4 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M6 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M8 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" class="icon-dark"/>`
};
const cyTestingTypeE2EX24 = {
  name: "testingTypeE2EX24",
  data: `<path fill="#D0D2E0" d="M20 20a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-3v7a1 1 0 0 1-1 1H7v3a1 1 0 0 0 1 1z" class="icon-light"/><path fill="currentColor" d="M6 6a1 1 0 0 0 0 2zm.01 2a1 1 0 0 0 0-2zM9 6a1 1 0 0 0 0 2zm.01 2a1 1 0 0 0 0-2zM12 6a1 1 0 1 0 0 2zm.01 2a1 1 0 1 0 0-2zM20 9v10h2V9zm0 10H8v2h12zM4 5h12V3H4zm12 10H7v2h9zm-9 0H4v2h3zm1 4v-3H6v3zm9-10h3V7h-3zm-1-4v3h2V5zm0 3v7h2V8zM4 15V5H2v10zm2-7h.01V6H6zm3 0h.01V6H9zm3 0h.01V6H12zm4 9a2 2 0 0 0 2-2h-2zM4 15H2a2 2 0 0 0 2 2zM16 5h2a2 2 0 0 0-2-2zM4 3a2 2 0 0 0-2 2h2zm16 16v2a2 2 0 0 0 2-2zM8 19H6a2 2 0 0 0 2 2zM22 9a2 2 0 0 0-2-2v2z" class="icon-dark"/>`
};
const cyTestingTypeE2EX64 = {
  name: "testingTypeE2EX64",
  data: `<path fill="#D0D2E0" d="M55.5 55a1.5 1.5 0 0 0 1.5-1.5v-34a1.5 1.5 0 0 0-1.5-1.5H48v26.5a1.5 1.5 0 0 1-1.5 1.5H16v7.5a1.5 1.5 0 0 0 1.5 1.5zM48 10.5A1.5 1.5 0 0 0 46.5 9h-38A1.5 1.5 0 0 0 7 10.5V18h41z" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 18v26.5A1.5 1.5 0 0 0 8.5 46H16M7 18v-7.5A1.5 1.5 0 0 1 8.5 9h38a1.5 1.5 0 0 1 1.5 1.5V18M7 18h41M16 46h30.5a1.5 1.5 0 0 0 1.5-1.5V18M16 46v7.5a1.5 1.5 0 0 0 1.5 1.5h38a1.5 1.5 0 0 0 1.5-1.5v-34a1.5 1.5 0 0 0-1.5-1.5H48m-5-4.5H25m-13.001 0h.014m3.987 0h.013m3.987 0h.013" class="icon-dark"/>`
};
const cyTestingTypeE2ESolidX24 = {
  name: "testingTypeE2ESolidX24",
  data: `<path fill="#D0D2E0" d="M4 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" class="icon-light"/><path fill="currentColor" d="M20 21a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2v8a2 2 0 0 1-2 2H6v2a2 2 0 0 0 2 2zM6 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0M12 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0" class="icon-dark"/>`
};
const cyTestingTypeE2ESolidX64 = {
  name: "testingTypeE2ESolidX64",
  data: `<path fill="#D0D2E0" d="M9 8a3 3 0 0 0-3 3v33a3 3 0 0 0 3 3h37a3 3 0 0 0 3-3V11a3 3 0 0 0-3-3z" class="icon-light"/><path fill="currentColor" d="M55 56a3 3 0 0 0 3-3V20a3 3 0 0 0-3-3h-6v27a3 3 0 0 1-3 3H15v6a3 3 0 0 0 3 3z" class="icon-dark"/><path fill="currentColor" fill-rule="evenodd" d="M49 11a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v6h43zm-5 .5a1 1 0 1 1 0 2H25a1 1 0 1 1 0-2zm-33 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2m4-2a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2" class="icon-dark" clip-rule="evenodd"/>`
};
const cyTimeCalendarDayX16 = {
  name: "timeCalendarDayX16",
  data: `<path fill="#D0D2E0" fill-rule="evenodd" d="M14 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2h12z" class="icon-light" clip-rule="evenodd"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 6V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2m12 0v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6m12 0H2m3-5v2m6-2v2M5 9v1h1V9z" class="icon-dark"/>`
};
const cyTimeClockX16 = {
  name: "timeClockX16",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4v4l2 1.5M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" class="icon-dark"/>`
};
const cyTimeClockX24 = {
  name: "timeClockX24",
  data: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7v5l3 2m6-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0" class="icon-dark"/>`
};
const cyTimeStopwatchX16 = {
  name: "timeStopwatchX16",
  data: `<path fill="#D0D2E0" fill-rule="evenodd" d="M13.5 9.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M8 9.993a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" class="icon-light" clip-rule="evenodd"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4V1m0 3c1.519 0 2.894.616 3.89 1.61M8 4a5.48 5.48 0 0 0-3.89 1.61M8 1h2M8 1H6m5.89 4.61a5.5 5.5 0 1 1-7.778 0m7.777 0L13 4.5M4.11 5.61 3 4.5m5 5 .357-.357M10 7.5 8.357 9.143m0 0a.498.498 0 0 1-.357.85.5.5 0 1 1 .357-.85" class="icon-dark"/>`
};
const cyUserGeneralOutlineX16 = {
  name: "userGeneralOutlineX16",
  data: `<path fill="transparent" d="M8 1a7 7 0 0 0-4.9 12 5.01 5.01 0 0 1 3.043-3.644 3 3 0 1 1 3.714 0A5.01 5.01 0 0 1 12.9 13 7 7 0 0 0 8 1" class="icon-light"/><path stroke="currentColor" stroke-width="2" d="M6.143 9.356C6.653 9.76 7.299 10 8 10s1.346-.24 1.857-.644m-3.714 0a3 3 0 1 1 3.714 0m-3.714 0A5.01 5.01 0 0 0 3.1 13m6.757-3.643A5.01 5.01 0 0 1 12.9 13m0 0a7 7 0 1 0-9.8 0m9.8 0A6.98 6.98 0 0 1 8 15a6.98 6.98 0 0 1-4.9-2" class="icon-dark"/>`
};
const cyUserGeneralSolidX16 = {
  name: "userGeneralSolidX16",
  data: `<path fill="#D0D2E0" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0" class="icon-light"/><path fill="#D0D2E0" d="M5 7a3 3 0 1 1 4.857 2.356A5.01 5.01 0 0 1 12.9 13 6.98 6.98 0 0 1 8 15a6.98 6.98 0 0 1-4.9-2 5.01 5.01 0 0 1 3.043-3.644A3 3 0 0 1 5 7" class="icon-light"/><path stroke="currentColor" stroke-width="2" d="M6.143 9.356C6.653 9.76 7.299 10 8 10s1.346-.24 1.857-.644m-3.714 0a3 3 0 1 1 3.714 0m-3.714 0A5.01 5.01 0 0 0 3.1 13 6.98 6.98 0 0 0 8 15a6.98 6.98 0 0 0 4.9-2 5.01 5.01 0 0 0-3.043-3.644" class="icon-dark"/>`
};
const cyViewListX16 = {
  name: "viewListX16",
  data: `<path fill="currentColor" fill-opacity=".4" d="M1 7h2v2H1zM1 1h2v2H1z" class="icon-dark"/><path fill="currentColor" d="M15 3a1 1 0 1 0 0-2zM6 1a1 1 0 0 0 0 2zm9 8a1 1 0 1 0 0-2zM6 7a1 1 0 1 0 0 2zM1 3H0a1 1 0 0 0 1 1zm2-2h1a1 1 0 0 0-1-1zM1 1V0a1 1 0 0 0-1 1zm2 2v1a1 1 0 0 0 1-1zM1 7V6a1 1 0 0 0-1 1zm2 0h1a1 1 0 0 0-1-1zm0 2v1a1 1 0 0 0 1-1zM1 9H0a1 1 0 0 0 1 1zm14-8H6v2h9zm0 6H6v2h9zM1 8h2V6H1zm1-1v2h2V7zm1 1H1v2h2zM2 9V7H0v2zM1 2h2V0H1zm3 1V1H2v2zM3 2H1v2h2zM2 3V1H0v2z" class="icon-dark"/>`
};
const cyViewPieChartX16 = {
  name: "viewPieChartX16",
  data: `<path fill="#D0D2E0" d="M8 1a7 7 0 0 1 7 7H8z" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8a7 7 0 0 1-11.95 4.95M15 8a7 7 0 0 0-7-7m7 7H8m0-7a6.98 6.98 0 0 0-4.95 2.05A6.98 6.98 0 0 0 1 8c0 1.933.784 3.683 2.05 4.95M8 1v7m-4.95 4.95L8 8" class="icon-dark"/>`
};
const cyViewPieChartX24 = {
  name: "viewPieChartX24",
  data: `<path fill="#D0D2E0" d="M12 3a9 9 0 0 1 9 9h-9z" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 0 1-15.364 6.364M21 12a9 9 0 0 0-9-9m9 9h-9m0-9a8.97 8.97 0 0 0-6.364 2.636A8.97 8.97 0 0 0 3 12a8.97 8.97 0 0 0 2.636 6.364M12 3v9m-6.364 6.364L12 12" class="icon-dark"/>`
};
const cyViewTreeAltX16 = {
  name: "viewTreeAltX16",
  data: `<path fill="currentColor" d="M13 1.999h2v2h-2zM13 7.999h2v2h-2z" class="icon-dark"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 2.999v6h6m-6-6H1m3 0h6m3 1h2v-2h-2zm0 6h2v-2h-2z" class="icon-dark"/>`
};
const cyWarningX8 = {
  name: "warningX8",
  data: `<path fill="currentColor" fill-rule="evenodd" d="M4 0a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1" class="icon-dark" clip-rule="evenodd"/><path fill="currentColor" d="M5 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0" class="icon-dark"/>`
};
const cyWarningCircleX16 = {
  name: "warningCircleX16",
  data: `<path fill="currentColor" fill-rule="evenodd" d="M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m6-8a8 8 0 1 0 0 16A8 8 0 0 0 8 0m1 5a1 1 0 0 0-2 0v3a1 1 0 0 0 2 0zm-1 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2" class="icon-dark" clip-rule="evenodd"/>`
};
const iconSet = [
  cyActionAddX8,
  cyActionAddLargeX16,
  cyActionAddMediumX16,
  cyActionAddSmallX16,
  cyActionAddXsmallX16,
  cyActionDeleteX12,
  cyActionDeleteCircleX16,
  cyActionDeleteLargeX16,
  cyActionDeleteLargeX24,
  cyActionDeleteMediumX16,
  cyActionDeleteSmallX16,
  cyActionDeleteXlargeX16,
  cyActionDeleteXsmallX16,
  cyActionDisableCircleSolidX16,
  cyActionExportX16,
  cyActionNextX16,
  cyActionPlayLargeX16,
  cyActionPlaySmallX16,
  cyActionPlayVideoX16,
  cyActionPlayVideoX24,
  cyActionPowerX16,
  cyActionQuestionMarkCircleX16,
  cyActionQuestionMarkDefaultX16,
  cyActionQuestionMarkOutlineX16,
  cyActionRecordX16,
  cyActionRefreshX16,
  cyActionRestartX16,
  cyActionStopX16,
  cyActionTestReplayX16,
  cyArrowBottomRightX16,
  cyArrowCollapseX16,
  cyArrowDownX16,
  cyArrowExpandX16,
  cyArrowLeftX16,
  cyArrowOutlineDownX16,
  cyArrowRightX16,
  cyArrowRightLargeX16,
  cyArrowSquareDownX16,
  cyArrowTopRightX16,
  cyArrowUpX16,
  cyBrowserChromeX16,
  cyBrowserChromeBetaX16,
  cyBrowserChromeCanaryX16,
  cyBrowserEdgeX16,
  cyBrowserElectronDarkX16,
  cyBrowserElectronLightX16,
  cyBrowserMozillaFirefoxX16,
  cyBrowserSafariX16,
  cyBrowserWebkitX16,
  cyCheckmarkX16,
  cyCheckmarkOutlineX16,
  cyCheckmarkSmallX16,
  cyCheckmarkSolidX16,
  cyCheckmarkSolidX24,
  cyChevronDownDoubleX16,
  cyChevronDownLargeX16,
  cyChevronDownMediumX16,
  cyChevronDownSmallX16,
  cyChevronDownSmallX8,
  cyChevronLeftDoubleX16,
  cyChevronLeftLargeX16,
  cyChevronLeftSmallX16,
  cyChevronLeftSmallX8,
  cyChevronRightDoubleX16,
  cyChevronRightLargeX16,
  cyChevronRightSmallX16,
  cyChevronRightSmallX8,
  cyChevronUpDoubleX16,
  cyChevronUpLargeX16,
  cyChevronUpSmallX16,
  cyChevronUpSmallX8,
  cyCurrencyEurX16,
  cyCurrencyGbpX16,
  cyCurrencyInrX16,
  cyCurrencyRubX16,
  cyCurrencyUsdX16,
  cyDeviceLaptopX24,
  cyDeviceSmartphoneX16,
  cyDeviceSmartphoneX24,
  cyDeviceTvX16,
  cyDeviceTvX24,
  cyDocumentAddedX16,
  cyDocumentAddedSquarePlusX16,
  cyDocumentAddedSquarePlusX24,
  cyDocumentBlankX16,
  cyDocumentBlankX24,
  cyDocumentBlankX48,
  cyDocumentCodeX24,
  cyDocumentCodeX48,
  cyDocumentDeletedX16,
  cyDocumentDownloadX16,
  cyDocumentDownloadX24,
  cyDocumentMinusX16,
  cyDocumentMinusX24,
  cyDocumentModifiedX16,
  cyDocumentModifiedSquareDotX16,
  cyDocumentModifiedSquareDotX24,
  cyDocumentPlusX16,
  cyDocumentPlusX24,
  cyDocumentPlusMinusX16,
  cyDocumentPlusMinusX24,
  cyDocumentScriptX24,
  cyDocumentSheetX24,
  cyDocumentStarX16,
  cyDocumentStarX24,
  cyDocumentTextX16,
  cyDotOutlineLargeX8,
  cyDotOutlineSmallX8,
  cyFileChangesAddedX24,
  cyFileChangesErrorX24,
  cyFileChangesSkippedX24,
  cyFileChangesWarningX24,
  cyGeneral1XX16,
  cyGeneralChatBubbleX16,
  cyGeneralClipboardX16,
  cyGeneralCommandKeyX16,
  cyGeneralCrosshairsX16,
  cyGeneralEarthX16,
  cyGeneralEyeClosedX16,
  cyGeneralEyeOpenX16,
  cyGeneralGlobeX16,
  cyGeneralGlobeX48,
  cyGeneralGrid2X2X16,
  cyGeneralGrid2X2X24,
  cyGeneralGrid2X2MediumX16,
  cyGeneralGrid2X2SmallX16,
  cyGeneralHandleVerticalX16,
  cyGeneralLifeRingX16,
  cyGeneralOfficeBuildingX16,
  cyGeneralPlaceholderX12,
  cyGeneralPlaceholderX16,
  cyGeneralPlaceholderX24,
  cyGeneralPlaceholderX48,
  cyGeneralRocketX16,
  cyGeneralRocketX24,
  cyLoadingX16,
  cyMenuDotsVerticalX16,
  cyMenuExpandLeftX16,
  cyMenuExpandRightX16,
  cyMenuHamburgerX24,
  cyNumber1X24,
  cyNumber2X24,
  cyNumber3X24,
  cyNumber4X24,
  cyNumber5X24,
  cyNumberOctothorpeX24,
  cyObjectBookX16,
  cyObjectBookX24,
  cyObjectBookX48,
  cyObjectBookCodeX48,
  cyObjectBookmarkX16,
  cyObjectBookmarkX24,
  cyObjectBoxX16,
  cyObjectBoxX24,
  cyObjectBoxOpenX48,
  cyObjectBriefcaseX16,
  cyObjectBugX24,
  cyObjectBugLargeX16,
  cyObjectBugSmallX16,
  cyObjectChainLinkX16,
  cyObjectFolderDarkX16,
  cyObjectFolderDarkSmallX16,
  cyObjectFolderLightX16,
  cyObjectFolderLightX24,
  cyObjectGearX16,
  cyObjectGearX24,
  cyObjectGraduationCapX16,
  cyObjectLetterX16,
  cyObjectMagicWandDarkModeX16,
  cyObjectMagnifyingGlassX16,
  cyObjectOdometerX24,
  cyObjectPaperAirplaneX16,
  cyObjectPinModernX16,
  cyObjectRulerX16,
  cyObjectSlidersRoundX16,
  cyObjectTagX16,
  cyObjectTasselX16,
  cyOsAppleX16,
  cyOsGenericX16,
  cyOsLinuxX16,
  cyOsWindowsX16,
  cySecurityKeyX16,
  cySecurityKeyX24,
  cySecurityLockLockedX16,
  cySecurityShieldCheckX16,
  cySecurityShieldCheckX24,
  cySecurityShieldCrossX16,
  cySecurityShieldCrossX24,
  cyShapeHeartX16,
  cyShapeHeartX24,
  cyShapeLightningBoltX16,
  cyShapeLightningBoltX24,
  cyShapeMoonCrescentX16,
  cyShapeStarX16,
  cyShapeStarX24,
  cyShapeSunLongX16,
  cySocialDiscordSolidX16,
  cySocialEmailX16,
  cySocialFacebookSolidX16,
  cySocialGithubSolidX16,
  cySocialLinkedinSolidX16,
  cySocialTwitterSolidX16,
  cySocialYoutubeSolidX16,
  cyStatusCancelledOutlineX16,
  cyStatusCancelledOutlineX24,
  cyStatusCancelledSimpleX4,
  cyStatusCancelledSimpleX8,
  cyStatusCancelledSolidX12,
  cyStatusCancelledSolidX16,
  cyStatusCancelledSolidX24,
  cyStatusErroredOutlineX16,
  cyStatusErroredOutlineX24,
  cyStatusErroredSimpleX4,
  cyStatusErroredSimpleX8,
  cyStatusErroredSolidX12,
  cyStatusErroredSolidX16,
  cyStatusErroredSolidX24,
  cyStatusFailedOutlineX16,
  cyStatusFailedOutlineX24,
  cyStatusFailedSimpleX12,
  cyStatusFailedSimpleX16,
  cyStatusFailedSimpleX24,
  cyStatusFailedSimpleX4,
  cyStatusFailedSimpleX8,
  cyStatusFailedSolidX16,
  cyStatusFailedSolidX24,
  cyStatusFailingOutlineX16,
  cyStatusFailingOutlineX24,
  cyStatusFlakyX16,
  cyStatusFlakyX24,
  cyStatusPassedOutlineX16,
  cyStatusPassedOutlineX24,
  cyStatusPassedSimpleX12,
  cyStatusPassedSimpleX16,
  cyStatusPassedSimpleX24,
  cyStatusPassedSimpleX4,
  cyStatusPassedSimpleX8,
  cyStatusPassedSolidX16,
  cyStatusPassedSolidX24,
  cyStatusPendingOutlineX12,
  cyStatusPendingOutlineX16,
  cyStatusPendingOutlineX24,
  cyStatusPendingSimpleX4,
  cyStatusPendingSimpleX8,
  cyStatusPlaceholderSimpleX4,
  cyStatusPlaceholderSimpleX8,
  cyStatusPlaceholderSolidX12,
  cyStatusPlaceholderSolidX16,
  cyStatusPlaceholderSolidX24,
  cyStatusQueuedOutlineX12,
  cyStatusQueuedOutlineX16,
  cyStatusQueuedOutlineX24,
  cyStatusQueuedSimpleX4,
  cyStatusQueuedSimpleX8,
  cyStatusRunningOutlineX12,
  cyStatusRunningOutlineX16,
  cyStatusRunningOutlineX24,
  cyStatusRunningSimpleX4,
  cyStatusRunningSimpleX8,
  cyStatusSkippedOutlineX12,
  cyStatusSkippedOutlineX16,
  cyStatusSkippedOutlineX24,
  cyStatusSkippedSimpleX4,
  cyStatusSkippedSimpleX8,
  cyTechnologyAccessibilityX24,
  cyTechnologyBranchHX16,
  cyTechnologyBranchHTallX16,
  cyTechnologyBrowserDarkX16,
  cyTechnologyBrowserLightX16,
  cyTechnologyBrowserTesting2X48,
  cyTechnologyCodeEditorX16,
  cyTechnologyCodeEditorX24,
  cyTechnologyCommandLineX16,
  cyTechnologyCommandLineErrorX48,
  cyTechnologyCypressX16,
  cyTechnologyDashboardCheckmarkX48,
  cyTechnologyDashboardFailX48,
  cyTechnologyDashboardRunningX48,
  cyTechnologyDollarX16,
  cyTechnologyDragProjectX48,
  cyTechnologyElementSelectorX16,
  cyTechnologyImageScreenshotX16,
  cyTechnologyImageScreenshotX24,
  cyTechnologyInfinityLoopX16,
  cyTechnologyInfinityLoopX20,
  cyTechnologyInfinityLoopX24,
  cyTechnologyLockedProjectX48,
  cyTechnologyOctothorpeX16,
  cyTechnologyPullRequestX16,
  cyTechnologyServerX16,
  cyTechnologyTerminalX16,
  cyTechnologyTerminalLogX16,
  cyTechnologyTestResultsX16,
  cyTechnologyTestResultsX24,
  cyTechnologyUiCoverageX24,
  cyTestingTypeComponentX16,
  cyTestingTypeComponentX24,
  cyTestingTypeComponentX64,
  cyTestingTypeComponentSolidX24,
  cyTestingTypeComponentSolidX64,
  cyTestingTypeE2EX16,
  cyTestingTypeE2EX24,
  cyTestingTypeE2EX64,
  cyTestingTypeE2ESolidX24,
  cyTestingTypeE2ESolidX64,
  cyTimeCalendarDayX16,
  cyTimeClockX16,
  cyTimeClockX24,
  cyTimeStopwatchX16,
  cyUserGeneralOutlineX16,
  cyUserGeneralSolidX16,
  cyViewListX16,
  cyViewPieChartX16,
  cyViewPieChartX24,
  cyViewTreeAltX16,
  cyWarningX8,
  cyWarningCircleX16
];
const camelCase = _.camelCase;
const compileIcon = (props) => {
  const { interactiveColorsOnGroup, name } = props, cleanProps = __rest(props, ["interactiveColorsOnGroup", "name"]);
  const { availableSizes } = iconsMetadata[name];
  const { sizeWithDefault, compiledClasses } = getComponentAttributes(Object.assign(Object.assign({}, cleanProps), {
    availableSizes,
    interactiveColorsOnGroup
  }));
  const nameWithSize = camelCase(`${name}_x${sizeWithDefault}`);
  const iconData = iconSet.find((i2) => i2.name === nameWithSize);
  if (!iconData) {
    throw new Error(`icon '${name}' at size ${sizeWithDefault} not found`);
  }
  const defsStart = iconData.data.indexOf("<defs>");
  return Object.assign(Object.assign({}, cleanProps), { name, size: sizeWithDefault, compiledClasses, body: defsStart >= 0 ? iconData.data.slice(0, defsStart) : iconData.data, defs: defsStart >= 0 ? iconData.data.slice(defsStart) : void 0 });
};
const getComponentAttributes = (props) => {
  const { size, availableSizes, interactiveColorsOnGroup } = props, otherProps = __rest(props, ["size", "availableSizes", "interactiveColorsOnGroup"]);
  const sizeWithDefault = size !== null && size !== void 0 ? size : availableSizes.length >= 1 ? availableSizes.indexOf("16") > -1 ? "16" : availableSizes[0] : "";
  const protectedInteractiveColorsOnGroup = interactiveColorsOnGroup === void 0 ? otherProps["interactive-colors-on-group"] : interactiveColorsOnGroup;
  delete otherProps["interactive-colors-on-group"];
  const compiledClasses = Object.keys(otherProps).filter((attrName) => otherProps[attrName] && ICON_COLOR_PROP_NAMES.includes(attrName)).map((colorAttrName) => {
    const color = otherProps[colorAttrName];
    const lowerCaseColor = colorAttrName.toLowerCase().replace(/-/g, "");
    const colorClass = lowerCaseColor.includes("strokecolor") ? "dark" : "light";
    const secondaryClass = lowerCaseColor.includes("secondary") ? "-secondary" : "";
    const pseudoClass = COLOR_PREFIXES.reduce((state, sta) => {
      if (state.length)
        return state;
      return lowerCaseColor.includes(sta.replace(/-/g, "")) ? sta : "";
    }, "");
    const prefix = pseudoClass.length ? protectedInteractiveColorsOnGroup !== void 0 && protectedInteractiveColorsOnGroup !== false ? `group-${pseudoClass}:` : `icon-${pseudoClass}:` : "";
    const finalClass = `${prefix}icon-${colorClass}${secondaryClass}-${color}`;
    return finalClass;
  });
  return { compiledClasses, sizeWithDefault };
};
const y = /* @__PURE__ */ new Set(), c = (o, t) => {
  const n = ref(false);
  return onBeforeMount(() => {
    const s = (
      // on SSR, we always want the first instance to come with the defs
      typeof document > "u" || // in interactive mode, the defs can be loaded, then removed, then loaded again
      // so we check that they are here before adding them again
      !document.querySelector(`[data-cy-icon-unified-defs="${o}"]`)
    );
    n.value = !y.has(o) && s, s && y.add(o);
  }), onUnmounted(() => {
    if (n.value && t.value) {
      const s = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
      );
      s.setAttribute("width", "0"), s.setAttribute("height", "0"), s.setAttribute("data-cy-icon-unified-defs", o), s.style.position = "absolute", s.innerHTML = t.value, document.body.appendChild(s);
    }
  }), { shouldRenderDefs: n };
}, l = (o) => {
  const t = computed(() => {
    const {
      name: n,
      body: s,
      defs: e,
      compiledClasses: r,
      size: p,
      ...u
    } = o.value, m = Object.keys(u).reduce(
      (g, k) => (!ICON_COLOR_PROP_NAMES.includes(
        k
      ) && k !== "name" && (g[k] = u[k]), g),
      {}
    ), v = `${n}_${p}`, M = {
      width: p,
      height: p,
      viewBox: `0 0 ${p} ${p}`,
      fill: "none",
      innerHTML: s,
      class: void 0,
      ...m
      // add all standard attributes back to the svg tag
    };
    return r.length && (M.class = r.join(" ")), {
      componentProps: M,
      iconFileId: v,
      defs: e
    };
  });
  return {
    componentProps: computed(() => t.value.componentProps),
    defs: computed(() => t.value.defs)
  };
};
defineComponent({
  props: [
    ...ICON_COLOR_PROP_NAMES,
    "interactiveColorsOnGroup",
    "size",
    "name",
    "class"
  ],
  setup(o, { attrs: t }) {
    const n = computed(() => {
      const { class: p, ...u } = o, m = compileIcon(u);
      return { className: p, iconProps: m };
    }), { componentProps: s, defs: e } = l(
      computed(() => n.value.iconProps)
    ), { shouldRenderDefs: r } = c(o.name, e);
    return () => r.value ? [
      h$1("svg", {
        innerHTML: e.value,
        "data-cy-icon-unified-defs": o.name,
        class: [
          "w-0",
          "h-0",
          "absolute",
          "pointer-events-none",
          "opacity-0"
        ]
      }),
      h$1("svg", {
        ...t,
        ...s.value,
        class: [n.value.className, s.value.class]
      })
    ] : h$1("svg", {
      ...t,
      ...s.value,
      class: [n.value.className, s.value.class]
    });
  }
});
const d = {
  props: [...ICON_COLOR_PROP_NAMES, "interactiveColorsOnGroup", "size", "class"]
};
function i(o, t, n, s) {
  return computed(() => {
    const { interactiveColorsOnGroup: e, ...r } = o, { sizeWithDefault: p, compiledClasses: u } = getComponentAttributes({
      ...r,
      availableSizes: n,
      interactiveColorsOnGroup: e
    }), { body: m, defs: v } = t[p] || {};
    if (!m)
      throw Error(`Icon "${s}" is not available in size ${p}`);
    return {
      ...r,
      name: s,
      size: p,
      body: m,
      defs: v,
      compiledClasses: u
    };
  });
}
function h(o, t, n, s, e) {
  return n.value && t.value ? [
    h$1("svg", {
      innerHTML: t.value,
      height: 0,
      width: 0,
      style: "position:absolute",
      class: [
        "pointer-events-none",
        "opacity-0"
      ]
    }),
    h$1("svg", {
      ...s,
      ...o.value,
      class: [e, o.value.class]
    })
  ] : h$1("svg", {
    ...s,
    ...o.value,
    class: [e, o.value.class]
  });
}
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 8h6m6 0H8m0 0V2m0 6v6" class="icon-dark"/>'
      }
    }, ["16"], "action-add-large"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "action-add-large",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 3v10m5-5H3" class="icon-dark"/>'
      }
    }, ["16"], "action-add-medium"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "action-add-medium",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4v8m4-4H4" class="icon-dark"/>'
      }
    }, ["16"], "action-add-small"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "action-add-small",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5v6m3-3H5" class="icon-dark"/>'
      }
    }, ["16"], "action-add-xsmall"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "action-add-xsmall",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      8: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 1v6m3-3H1" class="icon-dark"/>'
      }
    }, ["8"], "action-add"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "action-add",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="currentColor" fill-rule="evenodd" d="M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m6-8a8 8 0 1 0 0 16A8 8 0 0 0 8 0M6.707 5.293a1 1 0 0 0-1.414 1.414L6.586 8 5.293 9.293a1 1 0 0 0 1.414 1.414L8 9.414l1.293 1.293a1 1 0 0 0 1.414-1.414L9.414 8l1.293-1.293a1 1 0 0 0-1.414-1.414L8 6.586z" class="icon-dark" clip-rule="evenodd"/>'
      }
    }, ["16"], "action-delete-circle"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "action-delete-circle",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 13 13 3M3 3l10 10" class="icon-dark"/>'
      },
      24: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 20 20 4M4 4l16 16" class="icon-dark"/>'
      }
    }, ["16", "24"], "action-delete-large"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "action-delete-large",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8M4 4l8 8" class="icon-dark"/>'
      }
    }, ["16"], "action-delete-medium"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "action-delete-medium",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 11 6-6M5 5l6 6" class="icon-dark"/>'
      }
    }, ["16"], "action-delete-small"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "action-delete-small",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 14 14 2M2 2l12 12" class="icon-dark"/>'
      }
    }, ["16"], "action-delete-xlarge"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "action-delete-xlarge",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 10 4-4M6 6l4 4" class="icon-dark"/>'
      }
    }, ["16"], "action-delete-xsmall"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "action-delete-xsmall",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      12: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 11 11 1M1 1l10 10" class="icon-dark"/>'
      }
    }, ["12"], "action-delete"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "action-delete",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<circle cx="8" cy="8" r="8" fill="currentColor" class="icon-dark"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h8"/>'
      }
    }, ["16"], "action-disable-circle-solid"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "action-disable-circle-solid",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2m0-4V2m0 0H9m5 0L7 9" class="icon-dark"/>'
      }
    }, ["16"], "action-export"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "action-export",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" d="m12.285 8.429-8.528 5.117a.5.5 0 0 1-.757-.43V2.884a.5.5 0 0 1 .757-.429l8.528 5.117a.5.5 0 0 1 0 .858" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 2.6v10.8M3.757 2.454l8.528 5.117a.5.5 0 0 1 0 .858l-8.528 5.117a.5.5 0 0 1-.757-.43V2.884a.5.5 0 0 1 .757-.429" class="icon-dark"/>'
      }
    }, ["16"], "action-next"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "action-next",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12.285 8.429-8.528 5.117a.5.5 0 0 1-.757-.43V2.884a.5.5 0 0 1 .757-.429l8.528 5.117a.5.5 0 0 1 0 .858" class="icon-dark-stroke icon-light-fill"/>'
      }
    }, ["16"], "action-play-large"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "action-play-large",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11.322 8.424-6.557 4.098A.5.5 0 0 1 4 12.098V3.902a.5.5 0 0 1 .765-.424l6.557 4.098a.5.5 0 0 1 0 .848" class="icon-dark-stroke icon-light-fill"/>'
      }
    }, ["16"], "action-play-small"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "action-play-small",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" d="M1 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2zM11 6v4l3.379.845A.5.5 0 0 0 15 10.36V5.64a.5.5 0 0 0-.621-.485z" class="icon-light"/><path stroke="currentColor" stroke-width="2" d="M11 6V5a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2zm0 0 3.379-.845A.5.5 0 0 1 15 5.64v4.72a.5.5 0 0 1-.621.485L11 10z" class="icon-dark"/>'
      },
      24: {
        body: '<path fill="#D0D2E0" d="M3 8a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM16 9v6l3.804.76A1 1 0 0 0 21 14.78V9.22a1 1 0 0 0-1.196-.98z" class="icon-light"/><path stroke="currentColor" stroke-width="2" d="M16 9V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2zm0 0 3.804-.76A1 1 0 0 1 21 9.22v5.56a1 1 0 0 1-1.196.98L16 15z" class="icon-dark"/>'
      }
    }, ["16", "24"], "action-play-video"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "action-play-video",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="currentColor" d="M7 7a1 1 0 1 0 2 0zm2-6a1 1 0 0 0-2 0zM4.572 3.074a1 1 0 1 0-1.144-1.64zm8-1.64a1 1 0 0 0-1.144 1.64zM3.757 12.243a6 6 0 0 1 0-8.486L2.343 2.343a8 8 0 0 0 0 11.314zm8.486-8.486a6 6 0 0 1 0 8.486l1.414 1.414a8 8 0 0 0 0-11.314zm0 8.486a6 6 0 0 1-8.486 0l-1.414 1.414a8 8 0 0 0 11.314 0zM9 7V1H7v6zM3.757 3.757q.386-.384.815-.683l-1.144-1.64q-.574.4-1.085.91zm7.67-.683q.431.3.816.683l1.414-1.414a8 8 0 0 0-1.085-.91z" class="icon-dark"/>'
      }
    }, ["16"], "action-power"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "action-power",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" d="M13.657 13.657A8 8 0 1 1 2.343 2.343a8 8 0 0 1 11.314 11.314" class="icon-light"/><path fill="currentColor" fill-rule="evenodd" d="m1.845 2.535-.001.001A1 1 0 0 1 .146 1.48L1 2c-.854-.52-.854-.52-.853-.521v-.001l.001-.002.003-.004.005-.009.015-.023.042-.061q.05-.074.139-.179C.469 1.061.64.883.87.706A3.45 3.45 0 0 1 3 0c1.099 0 1.911.432 2.414 1.113C5.879 1.743 6 2.478 6 3c0 .63-.173 1.147-.463 1.574-.272.402-.62.68-.871.873-.608.465-.655.516-.673.67a1 1 0 0 1-1.986-.234c.125-1.061.915-1.638 1.327-1.938l.117-.087c.229-.175.352-.29.43-.405C3.944 3.363 4 3.237 4 3c0-.259-.067-.525-.195-.7C3.714 2.179 3.526 2 3 2c-.437 0-.729.152-.913.294a1.3 1.3 0 0 0-.242.241M3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2" class="icon-dark" clip-rule="evenodd" style="transform:translate(5px,2.8px)"/>'
      }
    }, ["16"], "action-question-mark-circle"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "action-question-mark-circle",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="currentColor" fill-rule="evenodd" d="m6.33 4.85-.007.012.001-.002.003-.004.001-.003v-.002zm-.868-.496a99 99 0 0 1-.868-.497l.001-.003.003-.004.005-.01.016-.025.046-.073q.057-.087.16-.219A3.99 3.99 0 0 1 8 2c1.344 0 2.293.561 2.865 1.388.532.77.674 1.67.674 2.32 0 .76-.187 1.38-.51 1.893-.313.495-.718.834-1.045 1.083-.118.09-.219.164-.308.23-.19.14-.326.239-.457.368-.148.144-.21.256-.235.398a1 1 0 0 1-1.968-.36c.12-.653.447-1.118.803-1.467a7 7 0 0 1 .776-.628l.177-.132c.271-.207.446-.371.565-.559.106-.17.201-.413.201-.826 0-.409-.096-.861-.318-1.182C9.04 4.264 8.718 4 8 4a1.99 1.99 0 0 0-1.677.861 1 1 0 0 1-1.73-1.003zM8 12a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0V13a1 1 0 0 1 1-1" class="icon-dark" clip-rule="evenodd"/>'
      }
    }, ["16"], "action-question-mark-default"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "action-question-mark-default",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#E1E3ED" stroke="currentColor" stroke-width="2" d="M12.95 12.95a7 7 0 1 1-9.9-9.9 7 7 0 0 1 9.9 9.9Z" class="icon-dark-stroke icon-light-fill"/><path fill="currentColor" fill-rule="evenodd" d="m6.845 5.535-.001.001A1 1 0 0 1 5.146 4.48L6 5c-.854-.52-.854-.52-.853-.521v-.001l.001-.002.003-.004.005-.009.015-.023.042-.061q.05-.074.139-.179c.117-.139.288-.317.518-.494A3.45 3.45 0 0 1 8 3c1.099 0 1.911.432 2.414 1.113.465.63.586 1.365.586 1.887 0 .63-.173 1.147-.463 1.574-.272.402-.62.68-.871.873-.608.465-.655.516-.673.67a1 1 0 1 1-1.986-.234c.125-1.061.915-1.638 1.327-1.938l.117-.087c.229-.175.352-.29.43-.405C8.944 6.363 9 6.237 9 6c0-.259-.067-.525-.195-.7C8.714 5.179 8.526 5 8 5c-.437 0-.729.152-.913.294a1.3 1.3 0 0 0-.242.241M8 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2" class="icon-dark" clip-rule="evenodd"/>'
      }
    }, ["16"], "action-question-mark-outline"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "action-question-mark-outline",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="currentColor" d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" class="icon-dark"/><path fill="currentColor" fill-rule="evenodd" d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0" class="icon-dark" clip-rule="evenodd"/><path stroke="currentColor" stroke-width="2" d="M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0Zm-4 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" class="icon-dark"/>'
      }
    }, ["16"], "action-record"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "action-record",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="currentColor" d="m13 2.071-.707-.707A1 1 0 0 1 14 2.071zm0 2.572h1a1 1 0 0 1-1 1zm-2.571 0v1a1 1 0 0 1-.708-1.707zm1.17 4.321a1 1 0 0 1 1.84.786zM14 2.071v2.572h-2V2.07zM7 2a5 5 0 0 0-5 5H0a7 7 0 0 1 7-7zm4.6 3.036A5 5 0 0 0 7 2V0a7 7 0 0 1 6.439 4.25zm1.4.607h-.48v-2H13zm-.48 0h-2.091v-2h2.09zM2 7c0 1.381.559 2.63 1.464 3.536L2.05 11.95A6.98 6.98 0 0 1 0 7zm1.464 3.536A4.98 4.98 0 0 0 7 12v2a6.98 6.98 0 0 1-4.95-2.05zM7 12a5 5 0 0 0 4.6-3.036l1.839.786A7 7 0 0 1 7 14zm2.721-8.064 2.572-2.572 1.414 1.415-2.571 2.571z" class="icon-dark"/>'
      }
    }, ["16"], "action-refresh"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "action-refresh",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 8a5 5 0 1 1-5-5h3m0 0L9 5m2-2L9 1" class="icon-dark"/>'
      }
    }, ["16"], "action-restart"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "action-restart",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 11.5v-7a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5" class="icon-dark"/>'
      }
    }, ["16"], "action-stop"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "action-stop",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="currentColor" fill-rule="evenodd" d="M3.8 3.714A6 6 0 1 1 2.083 9h.918a1 1 0 0 0 0-2H1a1 1 0 0 0-1 1 8 8 0 1 0 2.401-5.714 1 1 0 1 0 1.4 1.428m3.366 7.509 3.898-2.599a.75.75 0 0 0 0-1.248L7.166 4.777A.75.75 0 0 0 6 5.401V10.6a.75.75 0 0 0 1.166.624" class="icon-dark" clip-rule="evenodd"/>'
      }
    }, ["16"], "action-test-replay"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "action-test-replay",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0H6m6 0L4 4" class="icon-dark"/>'
      }
    }, ["16"], "arrow-bottom-right"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "arrow-bottom-right",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.5 3 8 5.5 5.5 3m0 10L8 10.5l2.5 2.5" class="icon-dark"/>'
      }
    }, ["16"], "arrow-collapse"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "arrow-collapse",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 9 4 4m0 0 4-4m-4 4V3" class="icon-dark"/>'
      }
    }, ["16"], "arrow-down"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "arrow-down",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.5 5.5 8 3 5.5 5.5m5 5L8 13l-2.5-2.5" class="icon-dark"/>'
      }
    }, ["16"], "arrow-expand"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "arrow-expand",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4 3 8m0 0 4 4M3 8h10" class="icon-dark"/>'
      }
    }, ["16"], "arrow-left"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "arrow-left",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" d="M15 8A7 7 0 1 0 1 8a7 7 0 0 0 14 0" class="icon-light"/><path fill="currentColor" d="M6.207 8.207a1 1 0 0 1-1.414-1.414zM8 5l-.707-.707a1 1 0 0 1 1.414 0zm3.207 1.793a1 1 0 0 1-1.414 1.414zM9 11a1 1 0 1 1-2 0zm5-3a6 6 0 0 0-6-6V0a8 8 0 0 1 8 8zM8 2a6 6 0 0 0-6 6H0a8 8 0 0 1 8-8zM2 8a6 6 0 0 0 6 6v2a8 8 0 0 1-8-8zm6 6a6 6 0 0 0 6-6h2a8 8 0 0 1-8 8zM4.793 6.793l2.5-2.5 1.414 1.414-2.5 2.5zm3.914-2.5 2.5 2.5-1.414 1.414-2.5-2.5zM9 5v6H7V5z" class="icon-dark"/>'
      }
    }, ["16"], "arrow-outline-down"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "arrow-outline-down",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 13 5-5m0 0-5-5m5 5H1" class="icon-dark"/>'
      }
    }, ["16"], "arrow-right-large"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "arrow-right-large",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 12 4-4m0 0L9 4m4 4H3" class="icon-dark"/>'
      }
    }, ["16"], "arrow-right"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "arrow-right",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 1v10m0 0 4-4m-4 4L4 7m-3 6v2h14v-2" class="icon-dark"/>'
      }
    }, ["16"], "arrow-square-down"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "arrow-square-down",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10V4m0 0H6m6 0-8 8" class="icon-dark"/>'
      }
    }, ["16"], "arrow-top-right"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "arrow-top-right",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7 8 3m0 0L4 7m4-4v10" class="icon-dark"/>'
      }
    }, ["16"], "arrow-up"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "arrow-up",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<mask id="browser-chrome-beta_x16_svg__a" width="16" height="16" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" d="M8.009 15.42a7.412 7.412 0 1 0 0-14.824 7.412 7.412 0 0 0 0 14.825"/></mask><g mask="url(#browser-chrome-beta_x16_svg__a)"><path fill="#DB4437" d="M1.774.596v9.098H5.09L8.01 4.64h7.412V.596z"/><path fill="url(#browser-chrome-beta_x16_svg__b)" d="M1.774.596v9.098H5.09L8.01 4.64h7.412V.596z"/><path fill="#3E2723" fill-opacity=".1" d="M5.171 9.663 1.816 3.911l-.049.083 3.331 5.712z"/><path fill="#0F9D58" d="M.596 15.42h7.056l3.275-3.274V9.694H5.091L.596 1.985z"/><path fill="url(#browser-chrome-beta_x16_svg__c)" d="M.596 15.42h7.056l3.275-3.274V9.694H5.091L.596 1.985z"/><path fill="#263238" fill-opacity=".1" d="m10.86 9.804-.07-.039-3.235 5.656h.097l3.209-5.613z"/><mask id="browser-chrome-beta_x16_svg__d" width="11" height="15" x="0" y="1" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" d="M.596 15.42h7.056l3.275-3.274V9.694H5.091L.596 1.985z"/></mask><g mask="url(#browser-chrome-beta_x16_svg__d)"><path fill="#FFCD40" d="m8.009 4.64 2.918 5.054-3.275 5.727h7.769V4.64z"/><path fill="url(#browser-chrome-beta_x16_svg__e)" d="m8.009 4.64 2.918 5.054-3.275 5.727h7.769V4.64z"/></g><path fill="#FFCD40" d="m8.009 4.64 2.918 5.054-3.275 5.727h7.769V4.64z"/><path fill="url(#browser-chrome-beta_x16_svg__f)" d="m8.009 4.64 2.918 5.054-3.275 5.727h7.769V4.64z"/><mask id="browser-chrome-beta_x16_svg__g" width="9" height="12" x="7" y="4" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" d="m8.009 4.64 2.918 5.054-3.275 5.727h7.769V4.64z"/></mask><g mask="url(#browser-chrome-beta_x16_svg__g)"><path fill="#DB4437" d="M1.774.596v9.098H5.09L8.01 4.64h7.412V.596z"/><path fill="url(#browser-chrome-beta_x16_svg__h)" d="M1.774.596v9.098H5.09L8.01 4.64h7.412V.596z"/></g><path fill="url(#browser-chrome-beta_x16_svg__i)" d="M8.009 4.64v1.763L14.61 4.64z"/><mask id="browser-chrome-beta_x16_svg__j" width="15" height="10" x="1" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" d="M1.774.596v3.398l3.317 5.7L8.01 4.64h7.412V.596z"/></mask><g mask="url(#browser-chrome-beta_x16_svg__j)"><path fill="#0F9D58" d="M.596 15.42h7.056l3.275-3.274V9.694H5.091L.596 1.985z"/><path fill="url(#browser-chrome-beta_x16_svg__k)" d="M.596 15.42h7.056l3.275-3.274V9.694H5.091L.596 1.985z"/></g><path fill="url(#browser-chrome-beta_x16_svg__l)" d="m1.774 4.004 4.82 4.82-1.503.87z"/><path fill="url(#browser-chrome-beta_x16_svg__m)" d="m7.658 15.412 1.765-6.587 1.504.869z"/><path fill="#F1F1F1" d="M8.009 11.377a3.369 3.369 0 1 0 0-6.737 3.369 3.369 0 0 0 0 6.737"/><path fill="#4285F4" d="M8.009 10.704a2.696 2.696 0 1 0 0-5.391 2.696 2.696 0 0 0 0 5.391"/><path fill="#3E2723" fill-opacity=".2" d="M8.009 4.555a3.37 3.37 0 0 0-3.37 3.37v.084a3.37 3.37 0 0 1 3.37-3.37h7.412v-.083z"/><path fill="#fff" fill-opacity=".1" d="M10.922 9.694a3.365 3.365 0 0 1-5.829 0L.596 1.985v.084l4.495 7.708a3.364 3.364 0 0 0 5.83 0v-.083z"/><path fill="#3E2723" d="M8.092 4.64h-.043a3.367 3.367 0 1 1 0 6.734h.043a3.37 3.37 0 1 0 0-6.74z" opacity=".1"/><path fill="#fff" fill-opacity=".2" d="M10.956 9.804a3.36 3.36 0 0 0 .29-2.699 3.33 3.33 0 0 1-.325 2.585l-3.269 5.73h.098l3.208-5.612zM8.01.682a7.41 7.41 0 0 1 7.412 7.37v-.043a7.412 7.412 0 0 0-14.825 0v.042A7.41 7.41 0 0 1 8.01.681"/><path fill="#3E2723" fill-opacity=".1" d="M8.009 15.336a7.41 7.41 0 0 0 7.412-7.37v.043a7.412 7.412 0 0 1-14.825 0v-.043a7.41 7.41 0 0 0 7.413 7.37"/></g><mask id="browser-chrome-beta_x16_svg__n" width="16" height="16" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" d="M8.009 15.42a7.412 7.412 0 1 0 0-14.824 7.412 7.412 0 0 0 0 14.825"/></mask><g mask="url(#browser-chrome-beta_x16_svg__n)"><path fill="#424242" d="M.348 9.239h15.536v6.504H.348z"/></g><path fill="#fff" d="M5.37 12.78v-2.045h.739a.6.6 0 0 1 .414.158.51.51 0 0 1 .17.397.45.45 0 0 1-.075.258.5.5 0 0 1-.201.17v.012c.098.03.185.09.249.17a.46.46 0 0 1 .097.292.54.54 0 0 1-.179.417.63.63 0 0 1-.434.17zm.263-1.166h.476a.3.3 0 0 0 .238-.099.305.305 0 0 0 0-.43.3.3 0 0 0-.23-.096h-.484zm0 .915h.527a.31.31 0 0 0 .245-.106.34.34 0 0 0 .094-.23.34.34 0 0 0-.351-.34h-.511zm2.018.29a.68.68 0 0 1-.511-.212.75.75 0 0 1-.198-.533.77.77 0 0 1 .192-.525.62.62 0 0 1 .491-.22.65.65 0 0 1 .498.203c.13.15.196.344.185.542v.05H7.201a.48.48 0 0 0 .141.34c.081.08.19.124.304.123a.38.38 0 0 0 .381-.24l.234.097a.63.63 0 0 1-.225.272.65.65 0 0 1-.385.103m.376-.912a.37.37 0 0 0-.247-.315.4.4 0 0 0-.162-.022.37.37 0 0 0-.252.092.47.47 0 0 0-.146.245zm1.08.888a.406.406 0 0 1-.45-.448v-.733h-.245v-.239h.244v-.427h.262v.428h.341v.24h-.34v.712q0 .228.187.228a.3.3 0 0 0 .12-.022l.091.225a.5.5 0 0 1-.21.036m.818.024a.55.55 0 0 1-.371-.128.42.42 0 0 1-.15-.34.42.42 0 0 1 .17-.359.7.7 0 0 1 .437-.13.75.75 0 0 1 .38.086v-.04a.31.31 0 0 0-.106-.246.38.38 0 0 0-.259-.092.4.4 0 0 0-.206.054.28.28 0 0 0-.128.149l-.24-.103a.54.54 0 0 1 .19-.231.6.6 0 0 1 .377-.108.65.65 0 0 1 .445.157.56.56 0 0 1 .17.441v.852h-.24v-.203h-.012a.51.51 0 0 1-.457.24m.043-.24c.11-.001.216-.045.295-.122a.37.37 0 0 0 .131-.286.5.5 0 0 0-.34-.092.43.43 0 0 0-.289.084.25.25 0 0 0-.097.194.19.19 0 0 0 .089.17.35.35 0 0 0 .211.052"/>',
        defs: '<defs><linearGradient id="browser-chrome-beta_x16_svg__b" x1="2.386" x2="6.816" y1="6.262" y2="3.663" gradientUnits="userSpaceOnUse"><stop stop-color="#A52714" stop-opacity=".6"/><stop offset=".7" stop-color="#A52714" stop-opacity="0"/></linearGradient><linearGradient id="browser-chrome-beta_x16_svg__c" x1="9.244" x2="4.345" y1="13.759" y2="10.905" gradientUnits="userSpaceOnUse"><stop stop-color="#055524" stop-opacity=".4"/><stop offset=".3" stop-color="#055524" stop-opacity="0"/></linearGradient><linearGradient id="browser-chrome-beta_x16_svg__e" x1="10.181" x2="11.416" y1="4.132" y2="9.542" gradientUnits="userSpaceOnUse"><stop stop-color="#EA6100" stop-opacity=".3"/><stop offset=".7" stop-color="#EA6100" stop-opacity="0"/></linearGradient><linearGradient id="browser-chrome-beta_x16_svg__f" x1="10.181" x2="11.416" y1="4.132" y2="9.542" gradientUnits="userSpaceOnUse"><stop stop-color="#EA6100" stop-opacity=".3"/><stop offset=".7" stop-color="#EA6100" stop-opacity="0"/></linearGradient><linearGradient id="browser-chrome-beta_x16_svg__h" x1="2.386" x2="6.816" y1="6.262" y2="3.663" gradientUnits="userSpaceOnUse"><stop stop-color="#A52714" stop-opacity=".6"/><stop offset=".7" stop-color="#A52714" stop-opacity="0"/></linearGradient><linearGradient id="browser-chrome-beta_x16_svg__k" x1="9.244" x2="4.345" y1="13.759" y2="10.905" gradientUnits="userSpaceOnUse"><stop stop-color="#055524" stop-opacity=".4"/><stop offset=".3" stop-color="#055524" stop-opacity="0"/></linearGradient><radialGradient id="browser-chrome-beta_x16_svg__i" cx="0" cy="0" r="1" gradientTransform="translate(7.668 4.643)scale(7.07135)" gradientUnits="userSpaceOnUse"><stop stop-color="#3E2723" stop-opacity=".2"/><stop offset="1" stop-color="#3E2723" stop-opacity="0"/></radialGradient><radialGradient id="browser-chrome-beta_x16_svg__l" cx="0" cy="0" r="1" gradientTransform="translate(1.747 4.004)scale(6.56017)" gradientUnits="userSpaceOnUse"><stop stop-color="#3E2723" stop-opacity=".2"/><stop offset="1" stop-color="#3E2723" stop-opacity="0"/></radialGradient><radialGradient id="browser-chrome-beta_x16_svg__m" cx="0" cy="0" r="1" gradientTransform="translate(8.009 8.009)scale(7.41214)" gradientUnits="userSpaceOnUse"><stop stop-color="#263238" stop-opacity=".2"/><stop offset="1" stop-color="#263238" stop-opacity="0"/></radialGradient></defs>'
      }
    }, ["16"], "browser-chrome-beta"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "browser-chrome-beta",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<g clip-path="url(#browser-chrome-canary_x16_svg__a)"><path fill="#F4B70A" d="M0 8a8 8 0 0 0 8 8l3.465-6A4 4 0 0 1 8 12a4 4 0 0 1-3.468-2.005L1.07 4l-.104.187A7.96 7.96 0 0 0 0 8"/><path fill="#F7CC50" d="M8 16a8 8 0 0 0 6.93-12H8a4 4 0 0 1 3.468 5.995l-.003.005z"/><path fill="#F19A11" fill-rule="evenodd" d="M1.07 4A8 8 0 0 1 8 0a8 8 0 0 1 6.93 4H8a4 4 0 0 0-3.468 5.995z" clip-rule="evenodd"/><circle cx="8" cy="8" r="4" fill="#fff"/><circle cx="8" cy="8" r="3.2" fill="#F6C231"/></g>',
        defs: '<defs><clipPath id="browser-chrome-canary_x16_svg__a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs>'
      }
    }, ["16"], "browser-chrome-canary"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "browser-chrome-canary",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<g clip-path="url(#browser-chrome_x16_svg__a)"><path fill="#0F9D58" d="M0 8a8 8 0 0 0 8 8l3.465-6A4 4 0 0 1 8 12a4 4 0 0 1-3.468-2.005L1.07 4A7.97 7.97 0 0 0 0 8"/><path fill="#FFCD40" d="M8 16a8 8 0 0 0 6.93-12H8a4 4 0 0 1 3.468 5.995l-.003.005z"/><path fill="#DB4437" fill-rule="evenodd" d="M1.07 4A8 8 0 0 1 8 0a8 8 0 0 1 6.93 4H8a4 4 0 0 0-3.468 5.995z" clip-rule="evenodd"/><circle cx="8" cy="8" r="4" fill="#fff"/><circle cx="8" cy="8" r="3.2" fill="#4285F4"/></g>',
        defs: '<defs><clipPath id="browser-chrome_x16_svg__a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs>'
      }
    }, ["16"], "browser-chrome"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "browser-chrome",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<g clip-path="url(#browser-edge_x16_svg__a)"><path fill="url(#browser-edge_x16_svg__b)" d="M14.44 11.909a6 6 0 0 1-.658.294 6.4 6.4 0 0 1-2.244.404c-2.957 0-5.534-2.034-5.534-4.645a1.97 1.97 0 0 1 1.027-1.707c-2.675.113-3.362 2.9-3.362 4.533 0 4.618 4.255 5.086 5.172 5.086.495 0 1.24-.144 1.688-.285l.082-.028a8.02 8.02 0 0 0 4.162-3.3.25.25 0 0 0-.332-.352"/><path fill="url(#browser-edge_x16_svg__c)" d="M14.44 11.909a6 6 0 0 1-.658.294 6.4 6.4 0 0 1-2.244.404c-2.957 0-5.534-2.034-5.534-4.645a1.97 1.97 0 0 1 1.027-1.707c-2.675.113-3.362 2.9-3.362 4.533 0 4.618 4.255 5.086 5.172 5.086.495 0 1.24-.144 1.688-.285l.082-.028a8.02 8.02 0 0 0 4.162-3.3.25.25 0 0 0-.332-.352" opacity=".35"/><path fill="url(#browser-edge_x16_svg__d)" d="M6.607 15.089a5 5 0 0 1-1.421-1.334 5.045 5.045 0 0 1 1.845-7.5c.195-.092.528-.258.971-.25a2.02 2.02 0 0 1 1.606.813c.253.337.392.745.398 1.166 0-.013 1.528-4.975-5-4.975-2.744 0-5 2.604-5 4.888a8.1 8.1 0 0 0 .756 3.5 8 8 0 0 0 9.774 4.194 4.72 4.72 0 0 1-3.923-.5z"/><path fill="url(#browser-edge_x16_svg__e)" d="M6.607 15.089a5 5 0 0 1-1.421-1.334 5.045 5.045 0 0 1 1.845-7.5c.195-.092.528-.258.971-.25a2.02 2.02 0 0 1 1.606.813c.253.337.392.745.398 1.166 0-.013 1.528-4.975-5-4.975-2.744 0-5 2.604-5 4.888a8.1 8.1 0 0 0 .756 3.5 8 8 0 0 0 9.774 4.194 4.72 4.72 0 0 1-3.923-.5z" opacity=".41"/><path fill="url(#browser-edge_x16_svg__f)" d="M9.52 9.304c-.051.065-.207.156-.207.354 0 .163.106.32.295.451.899.625 2.593.543 2.598.543a3.7 3.7 0 0 0 1.892-.522 3.84 3.84 0 0 0 1.901-3.305c.017-1.4-.5-2.332-.708-2.744C13.966 1.49 11.108 0 7.999 0a8 8 0 0 0-8 7.888c.03-2.284 2.3-4.129 5-4.129.219 0 1.466.022 2.625.63 1.021.536 1.556 1.183 1.928 1.825.386.667.455 1.51.455 1.845 0 .336-.171.834-.488 1.245"/><path fill="url(#browser-edge_x16_svg__g)" d="M9.52 9.304c-.051.065-.207.156-.207.354 0 .163.106.32.295.451.899.625 2.593.543 2.598.543a3.7 3.7 0 0 0 1.892-.522 3.84 3.84 0 0 0 1.901-3.305c.017-1.4-.5-2.332-.708-2.744C13.966 1.49 11.108 0 7.999 0a8 8 0 0 0-8 7.888c.03-2.284 2.3-4.129 5-4.129.219 0 1.466.022 2.625.63 1.021.536 1.556 1.183 1.928 1.825.386.667.455 1.51.455 1.845 0 .336-.171.834-.488 1.245"/></g>',
        defs: '<defs><radialGradient id="browser-edge_x16_svg__c" cx="0" cy="0" r="1" gradientTransform="matrix(5.96125 0 0 5.66319 9.825 11.154)" gradientUnits="userSpaceOnUse"><stop offset=".72" stop-opacity="0"/><stop offset=".95" stop-opacity=".53"/><stop offset="1"/></radialGradient><radialGradient id="browser-edge_x16_svg__e" cx="0" cy="0" r="1" gradientTransform="rotate(-81.384 9.438 3.654)scale(8.96413 7.24212)" gradientUnits="userSpaceOnUse"><stop offset=".76" stop-opacity="0"/><stop offset=".95" stop-opacity=".5"/><stop offset="1"/></radialGradient><radialGradient id="browser-edge_x16_svg__f" cx="0" cy="0" r="1" gradientTransform="matrix(-.50607 12.65188 -26.94585 -1.07783 1.615 2.961)" gradientUnits="userSpaceOnUse"><stop stop-color="#35C1F1"/><stop offset=".11" stop-color="#34C1ED"/><stop offset=".23" stop-color="#2FC2DF"/><stop offset=".31" stop-color="#2BC3D2"/><stop offset=".67" stop-color="#36C752"/></radialGradient><radialGradient id="browser-edge_x16_svg__g" cx="0" cy="0" r="1" gradientTransform="matrix(1.70345 5.8404 -4.74942 1.38525 15.003 4.838)" gradientUnits="userSpaceOnUse"><stop stop-color="#66EB6E"/><stop offset="1" stop-color="#66EB6E" stop-opacity="0"/></radialGradient><linearGradient id="browser-edge_x16_svg__b" x1="3.669" x2="14.815" y1="11.066" y2="11.066" gradientUnits="userSpaceOnUse"><stop stop-color="#0C59A4"/><stop offset="1" stop-color="#114A8B"/></linearGradient><linearGradient id="browser-edge_x16_svg__d" x1="9.545" x2="2.583" y1="6.231" y2="13.814" gradientUnits="userSpaceOnUse"><stop stop-color="#1B9DE2"/><stop offset=".16" stop-color="#1595DF"/><stop offset=".67" stop-color="#0680D7"/><stop offset="1" stop-color="#0078D4"/></linearGradient><clipPath id="browser-edge_x16_svg__a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs>'
      }
    }, ["16"], "browser-edge"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "browser-edge",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#2B2E3A" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/><path fill="#9FEAF9" d="M6.281 4.48c-1.625-.295-2.91.014-3.422.902-.382.662-.273 1.54.265 2.477a.167.167 0 1 0 .289-.165c-.485-.846-.579-1.603-.266-2.146.426-.737 1.572-1.013 3.075-.74a.167.167 0 0 0 .06-.327M3.97 9c.657.722 1.51 1.4 2.485 1.962 2.357 1.36 4.867 1.725 6.104.881a.167.167 0 1 0-.187-.275c-1.108.755-3.492.41-5.75-.895-.945-.545-1.772-1.201-2.406-1.898A.167.167 0 1 0 3.97 9"/><path fill="#9FEAF9" d="M12.164 8.797c1.064-1.257 1.436-2.522.924-3.407-.376-.651-1.17-.995-2.227-1.01a.167.167 0 0 0-.005.334c.95.013 1.636.309 1.944.843.424.735.093 1.863-.89 3.025a.167.167 0 0 0 .14.275.17.17 0 0 0 .114-.06m-2.735-4.26c-.963.205-1.987.608-2.97 1.176-2.434 1.406-4.022 3.478-3.802 4.98a.167.167 0 1 0 .33-.048c-.196-1.334 1.31-3.298 3.638-4.643.954-.55 1.946-.941 2.873-1.14a.167.167 0 1 0-.07-.326"/><path fill="#9FEAF9" d="M5.486 11.735c.556 1.553 1.466 2.51 2.49 2.51.747 0 1.437-.509 1.976-1.405a.166.166 0 0 0-.056-.23.167.167 0 0 0-.23.058c-.484.806-1.078 1.244-1.69 1.244-.85 0-1.662-.854-2.177-2.29a.167.167 0 0 0-.27-.07.165.165 0 0 0-.043.183m5.082-.304c.288-.92.443-1.983.443-3.09 0-2.76-.966-5.14-2.343-5.752a.167.167 0 0 0-.135.305c1.228.545 2.145 2.804 2.145 5.448 0 1.073-.15 2.102-.428 2.99a.165.165 0 0 0 .051.179.166.166 0 0 0 .267-.08m3.14-.164a.798.798 0 1 0-1.596 0 .798.798 0 0 0 1.595 0m-.334 0a.465.465 0 1 1-.93 0 .465.465 0 0 1 .93 0m-10.343.798a.798.798 0 1 0 0-1.595.798.798 0 0 0 0 1.595m0-.333a.464.464 0 1 1 0-.929.464.464 0 0 1 0 .929"/><path fill="#9FEAF9" d="M7.976 3.403a.798.798 0 1 0 0-1.596.798.798 0 0 0 0 1.596m0-.334a.464.464 0 1 1 0-.928.464.464 0 0 1 0 .928m.122 5.837a.577.577 0 1 1-.244-1.128.577.577 0 0 1 .244 1.128"/>'
      }
    }, ["16"], "browser-electron-dark"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "browser-electron-dark",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#fff" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/><path fill="#47848F" fill-rule="evenodd" d="M6.187 4.2c-1.742-.318-3.12.014-3.669.965-.41.71-.292 1.65.284 2.656a.18.18 0 0 0 .31-.178c-.52-.906-.62-1.718-.284-2.3.458-.79 1.685-1.086 3.296-.793a.18.18 0 0 0 .178-.277.18.18 0 0 0-.115-.074M3.708 9.041c.705.774 1.62 1.5 2.664 2.103 2.53 1.46 5.22 1.85 6.545.947a.179.179 0 0 0-.202-.296c-1.187.81-3.743.44-6.166-.959-1.013-.585-1.9-1.288-2.579-2.034a.18.18 0 0 0-.264.24zm8.787-.216c1.141-1.348 1.54-2.703.992-3.652-.403-.698-1.256-1.067-2.389-1.081a.18.18 0 0 0-.18.176.18.18 0 0 0 .176.18c1.02.014 1.753.332 2.083.904.455.788.1 1.997-.955 3.243a.18.18 0 0 0 .151.293.18.18 0 0 0 .122-.062M9.563 4.258c-1.03.221-2.13.653-3.184 1.262-2.609 1.506-4.31 3.73-4.075 5.338a.18.18 0 0 0 .32.08.18.18 0 0 0 .034-.132c-.21-1.43 1.403-3.535 3.9-4.979 1.02-.59 2.086-1.009 3.08-1.222a.18.18 0 0 0 .06-.324.18.18 0 0 0-.135-.025z" clip-rule="evenodd"/><path fill="#47848F" fill-rule="evenodd" d="M5.336 11.975c.597 1.666 1.573 2.692 2.67 2.692.8 0 1.541-.546 2.118-1.507a.179.179 0 0 0-.306-.184c-.52.863-1.156 1.333-1.812 1.333-.911 0-1.782-.917-2.333-2.454a.18.18 0 0 0-.33-.016.18.18 0 0 0-.007.136m5.449-.325c.309-.987.475-2.126.475-3.312 0-2.96-1.037-5.512-2.512-6.167a.18.18 0 0 0-.24.228.18.18 0 0 0 .095.099c1.316.584 2.3 3.006 2.3 5.84 0 1.151-.161 2.254-.46 3.205a.18.18 0 0 0 .254.212.18.18 0 0 0 .088-.105m3.365-.175a.855.855 0 1 0-1.706 0 .855.855 0 0 0 1.704 0zm-.357 0a.498.498 0 1 1-.997-.001.498.498 0 0 1 .997 0" clip-rule="evenodd"/><path fill="#47848F" fill-rule="evenodd" d="M2.705 12.33a.855.855 0 1 0 0-1.71.855.855 0 0 0 0 1.71m0-.358a.498.498 0 1 1 0-.995.498.498 0 0 1 0 .995m5.301-8.93a.855.855 0 1 0 0-1.71.855.855 0 0 0 0 1.71m0-.358a.498.498 0 1 1 0-.996.498.498 0 0 1 0 .996m.13 6.259a.619.619 0 1 1-.26-1.21.619.619 0 1 1 .26 1.21" clip-rule="evenodd"/>'
      }
    }, ["16"], "browser-electron-light"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "browser-electron-light",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<g clip-path="url(#browser-mozilla-firefox_x16_svg__a)"><path fill="url(#browser-mozilla-firefox_x16_svg__b)" d="M14.93 5.368c-.337-.81-1.02-1.686-1.556-1.963.382.74.647 1.533.785 2.353l.002.013c-.877-2.185-2.363-3.067-3.578-4.986a9 9 0 0 1-.182-.297 3 3 0 0 1-.086-.16 1.4 1.4 0 0 1-.12-.32.02.02 0 0 0-.013-.007.03.03 0 0 0-.015 0l-.003.002-.006.003.003-.005C8.213 1.141 7.552 3.252 7.492 4.31a3.9 3.9 0 0 0-2.135.822 2 2 0 0 0-.2-.151 3.6 3.6 0 0 1-.022-1.896A5.7 5.7 0 0 0 3.27 4.527h-.004c-.307-.39-.285-1.674-.268-1.942q-.136.054-.259.137-.407.29-.758.65a7 7 0 0 0-.725.869v.001-.001A6.55 6.55 0 0 0 .215 6.59l-.01.05c-.015.07-.068.41-.077.485l-.001.017A7.4 7.4 0 0 0 0 8.212v.04a7.755 7.755 0 0 0 15.396 1.31q.018-.15.035-.3a8 8 0 0 0-.503-3.895zm-8.938 6.07q.053.028.108.053l.005.004zm8.169-5.665v-.007l.001.008z"/><path fill="url(#browser-mozilla-firefox_x16_svg__c)" d="M14.93 5.368c-.337-.81-1.02-1.686-1.556-1.963.382.74.647 1.533.785 2.353v.008l.002.008a7.02 7.02 0 0 1-.242 5.234c-.888 1.907-3.039 3.861-6.406 3.765C3.876 14.67.67 11.97.073 8.435c-.11-.558 0-.84.054-1.294q-.112.529-.125 1.07v.04a7.755 7.755 0 0 0 15.396 1.312q.019-.15.035-.3a8 8 0 0 0-.503-3.896z"/><path fill="url(#browser-mozilla-firefox_x16_svg__d)" d="M14.93 5.368c-.337-.81-1.02-1.686-1.556-1.963.382.74.647 1.533.785 2.353v.008l.002.008a7.02 7.02 0 0 1-.242 5.234c-.888 1.907-3.039 3.861-6.406 3.765C3.876 14.67.67 11.97.073 8.435c-.11-.558 0-.84.054-1.294q-.112.529-.125 1.07v.04a7.755 7.755 0 0 0 15.396 1.312q.019-.15.035-.3a8 8 0 0 0-.503-3.896z"/><path fill="url(#browser-mozilla-firefox_x16_svg__e)" d="m11.16 6.278.048.036a4.2 4.2 0 0 0-.72-.94c-2.41-2.41-.631-5.226-.332-5.37L10.16 0C8.212 1.14 7.55 3.251 7.49 4.308q.134-.012.273-.014a3.91 3.91 0 0 1 3.397 1.984"/><path fill="url(#browser-mozilla-firefox_x16_svg__f)" d="M7.767 6.76c-.013.193-.694.859-.933.859-2.204 0-2.563 1.334-2.563 1.334.098 1.123.88 2.048 1.827 2.537q.065.032.13.062.115.051.228.093c.325.115.665.18 1.01.195 3.865.181 4.613-4.622 1.824-6.016a2.68 2.68 0 0 1 1.87.454 3.91 3.91 0 0 0-3.398-1.985c-.092 0-.182.008-.272.014a3.9 3.9 0 0 0-2.135.823c.118.1.252.233.533.51.526.519 1.876 1.056 1.879 1.119z"/><path fill="url(#browser-mozilla-firefox_x16_svg__g)" d="M7.767 6.76c-.013.193-.694.859-.933.859-2.204 0-2.563 1.334-2.563 1.334.098 1.123.88 2.048 1.827 2.537q.065.032.13.062.115.051.228.093c.325.115.665.18 1.01.195 3.865.181 4.613-4.622 1.824-6.016a2.68 2.68 0 0 1 1.87.454 3.91 3.91 0 0 0-3.398-1.985c-.092 0-.182.008-.272.014a3.9 3.9 0 0 0-2.135.823c.118.1.252.233.533.51.526.519 1.876 1.056 1.879 1.119z"/><path fill="url(#browser-mozilla-firefox_x16_svg__h)" d="M4.994 4.874q.094.06.16.106a3.6 3.6 0 0 1-.022-1.895 5.7 5.7 0 0 0-1.866 1.442c.037 0 1.162-.021 1.728.347"/><path fill="url(#browser-mozilla-firefox_x16_svg__i)" d="M.07 8.435c.6 3.536 3.804 6.237 7.442 6.339 3.367.095 5.518-1.86 6.406-3.766a7.02 7.02 0 0 0 .241-5.234V5.76l.002.013c.275 1.797-.639 3.536-2.067 4.714l-.004.01c-2.783 2.267-5.446 1.367-5.985 1l-.113-.056C4.37 10.665 3.7 9.188 3.844 7.92a1.99 1.99 0 0 1-1.837-1.156 2.93 2.93 0 0 1 2.85-.115 3.86 3.86 0 0 0 2.912.115c-.003-.063-1.353-.6-1.879-1.119-.28-.277-.414-.41-.533-.51a2 2 0 0 0-.2-.152l-.16-.106c-.565-.368-1.69-.348-1.727-.347h-.004c-.307-.39-.286-1.674-.268-1.942q-.137.054-.259.137-.407.291-.758.65-.4.403-.728.867v.001-.001A6.55 6.55 0 0 0 .213 6.59c-.004.016-.28 1.22-.144 1.845z"/><path fill="url(#browser-mozilla-firefox_x16_svg__j)" d="M10.488 5.374c.283.278.526.595.72.94q.065.049.117.096c1.758 1.62.836 3.911.768 4.073 1.428-1.177 2.34-2.917 2.066-4.714-.877-2.187-2.364-3.069-3.577-4.988A9 9 0 0 1 10.4.485a3 3 0 0 1-.085-.16 1.4 1.4 0 0 1-.12-.321.02.02 0 0 0-.013-.007.03.03 0 0 0-.015 0L10.162 0l-.005.003c-.3.142-2.079 2.959.332 5.368z"/><path fill="url(#browser-mozilla-firefox_x16_svg__k)" d="M11.324 6.41a2 2 0 0 0-.116-.095l-.048-.035a2.68 2.68 0 0 0-1.87-.454c2.79 1.394 2.04 6.196-1.824 6.016a3.5 3.5 0 0 1-1.01-.195 4 4 0 0 1-.227-.093q-.067-.03-.13-.062l.005.003c.539.368 3.2 1.267 5.984-1l.004-.01c.07-.162.99-2.453-.768-4.074"/><path fill="url(#browser-mozilla-firefox_x16_svg__l)" d="M4.272 8.951s.358-1.333 2.563-1.333c.238 0 .92-.666.932-.859a3.86 3.86 0 0 1-2.911-.114 2.93 2.93 0 0 0-2.851.114 1.99 1.99 0 0 0 1.837 1.156c-.144 1.268.526 2.745 2.149 3.521q.053.027.107.053c-.947-.49-1.729-1.414-1.826-2.537"/><path fill="url(#browser-mozilla-firefox_x16_svg__m)" d="M14.93 5.368c-.337-.81-1.02-1.686-1.556-1.963.382.74.647 1.533.785 2.353l.002.013c-.877-2.185-2.363-3.067-3.578-4.986a9 9 0 0 1-.182-.297 3 3 0 0 1-.086-.16 1.4 1.4 0 0 1-.12-.32.02.02 0 0 0-.013-.007.03.03 0 0 0-.015 0l-.003.002-.006.003.003-.005C8.213 1.141 7.552 3.252 7.492 4.31c.09-.006.18-.014.273-.014a3.91 3.91 0 0 1 3.397 1.984 2.68 2.68 0 0 0-1.87-.454c2.79 1.395 2.04 6.196-1.824 6.017a3.5 3.5 0 0 1-1.01-.195 4 4 0 0 1-.358-.156l.006.004-.113-.057q.053.028.107.053c-.947-.49-1.729-1.414-1.826-2.537 0 0 .358-1.334 2.563-1.334.238 0 .92-.665.932-.858-.003-.063-1.352-.6-1.879-1.118-.28-.277-.414-.41-.532-.511a2 2 0 0 0-.2-.152 3.6 3.6 0 0 1-.022-1.895 5.7 5.7 0 0 0-1.867 1.443h-.003c-.308-.39-.286-1.674-.268-1.943q-.137.056-.26.138-.406.29-.757.649a7 7 0 0 0-.725.87A6.55 6.55 0 0 0 .216 6.59l-.01.052c-.016.068-.08.414-.09.489q-.09.536-.115 1.08v.04a7.755 7.755 0 0 0 15.396 1.312q.019-.15.035-.3a8 8 0 0 0-.503-3.896m-.77.398.002.009z"/></g>',
        defs: '<defs><radialGradient id="browser-mozilla-firefox_x16_svg__c" cx="0" cy="0" r="1" gradientTransform="translate(13.405 1.8)scale(16.1661)" gradientUnits="userSpaceOnUse"><stop offset=".129" stop-color="#FFBD4F"/><stop offset=".186" stop-color="#FFAC31"/><stop offset=".247" stop-color="#FF9D17"/><stop offset=".283" stop-color="#FF980E"/><stop offset=".403" stop-color="#FF563B"/><stop offset=".467" stop-color="#FF3750"/><stop offset=".71" stop-color="#F5156C"/><stop offset=".782" stop-color="#EB0878"/><stop offset=".86" stop-color="#E50080"/></radialGradient><radialGradient id="browser-mozilla-firefox_x16_svg__d" cx="0" cy="0" r="1" gradientTransform="translate(7.403 8.403)scale(16.1661)" gradientUnits="userSpaceOnUse"><stop offset=".3" stop-color="#960E18"/><stop offset=".351" stop-color="#B11927" stop-opacity=".74"/><stop offset=".435" stop-color="#DB293D" stop-opacity=".343"/><stop offset=".497" stop-color="#F5334B" stop-opacity=".094"/><stop offset=".53" stop-color="#FF3750" stop-opacity="0"/></radialGradient><radialGradient id="browser-mozilla-firefox_x16_svg__e" cx="0" cy="0" r="1" gradientTransform="translate(9.404 -1.8)scale(11.7104)" gradientUnits="userSpaceOnUse"><stop offset=".132" stop-color="#FFF44F"/><stop offset=".252" stop-color="#FFDC3E"/><stop offset=".506" stop-color="#FF9D12"/><stop offset=".526" stop-color="#FF980E"/></radialGradient><radialGradient id="browser-mozilla-firefox_x16_svg__f" cx="0" cy="0" r="1" gradientTransform="translate(5.602 12.605)scale(7.69689)" gradientUnits="userSpaceOnUse"><stop offset=".353" stop-color="#3A8EE6"/><stop offset=".472" stop-color="#5C79F0"/><stop offset=".669" stop-color="#9059FF"/><stop offset="1" stop-color="#C139E6"/></radialGradient><radialGradient id="browser-mozilla-firefox_x16_svg__g" cx="0" cy="0" r="1" gradientTransform="matrix(3.96725 -.95916 1.12294 4.64466 8.185 7.015)" gradientUnits="userSpaceOnUse"><stop offset=".206" stop-color="#9059FF" stop-opacity="0"/><stop offset=".278" stop-color="#8C4FF3" stop-opacity=".064"/><stop offset=".747" stop-color="#7716A8" stop-opacity=".45"/><stop offset=".975" stop-color="#6E008B" stop-opacity=".6"/></radialGradient><radialGradient id="browser-mozilla-firefox_x16_svg__h" cx="0" cy="0" r="1" gradientTransform="translate(7.203 1.2)scale(5.53808)" gradientUnits="userSpaceOnUse"><stop stop-color="#FFE226"/><stop offset=".121" stop-color="#FFDB27"/><stop offset=".295" stop-color="#FFC82A"/><stop offset=".502" stop-color="#FFA930"/><stop offset=".732" stop-color="#FF7E37"/><stop offset=".792" stop-color="#FF7139"/></radialGradient><radialGradient id="browser-mozilla-firefox_x16_svg__i" cx="0" cy="0" r="1" gradientTransform="translate(11.604 -2.4)scale(23.6289)" gradientUnits="userSpaceOnUse"><stop offset=".113" stop-color="#FFF44F"/><stop offset=".456" stop-color="#FF980E"/><stop offset=".622" stop-color="#FF5634"/><stop offset=".716" stop-color="#FF3647"/><stop offset=".904" stop-color="#E31587"/></radialGradient><radialGradient id="browser-mozilla-firefox_x16_svg__j" cx="0" cy="0" r="1" gradientTransform="rotate(83.976 5.426 4.81)scale(17.3156 11.3641)" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF44F"/><stop offset=".06" stop-color="#FFE847"/><stop offset=".168" stop-color="#FFC830"/><stop offset=".304" stop-color="#FF980E"/><stop offset=".356" stop-color="#FF8B16"/><stop offset=".455" stop-color="#FF672A"/><stop offset=".57" stop-color="#FF3647"/><stop offset=".737" stop-color="#E31587"/></radialGradient><radialGradient id="browser-mozilla-firefox_x16_svg__k" cx="0" cy="0" r="1" gradientTransform="translate(7.203 3.201)scale(14.7495)" gradientUnits="userSpaceOnUse"><stop offset=".137" stop-color="#FFF44F"/><stop offset=".48" stop-color="#FF980E"/><stop offset=".592" stop-color="#FF5634"/><stop offset=".655" stop-color="#FF3647"/><stop offset=".904" stop-color="#E31587"/></radialGradient><radialGradient id="browser-mozilla-firefox_x16_svg__l" cx="0" cy="0" r="1" gradientTransform="matrix(16.144 0 0 16.1441 11.004 4.002)" gradientUnits="userSpaceOnUse"><stop offset=".094" stop-color="#FFF44F"/><stop offset=".231" stop-color="#FFE141"/><stop offset=".509" stop-color="#FFAF1E"/><stop offset=".626" stop-color="#FF980E"/></radialGradient><linearGradient id="browser-mozilla-firefox_x16_svg__b" x1="13.903" x2="1.03" y1="2.478" y2="14.899" gradientUnits="userSpaceOnUse"><stop offset=".048" stop-color="#FFF44F"/><stop offset=".111" stop-color="#FFE847"/><stop offset=".225" stop-color="#FFC830"/><stop offset=".368" stop-color="#FF980E"/><stop offset=".401" stop-color="#FF8B16"/><stop offset=".462" stop-color="#FF672A"/><stop offset=".534" stop-color="#FF3647"/><stop offset=".705" stop-color="#E31587"/></linearGradient><linearGradient id="browser-mozilla-firefox_x16_svg__m" x1="13.747" x2="2.795" y1="2.412" y2="13.366" gradientUnits="userSpaceOnUse"><stop offset=".167" stop-color="#FFF44F" stop-opacity=".8"/><stop offset=".266" stop-color="#FFF44F" stop-opacity=".634"/><stop offset=".489" stop-color="#FFF44F" stop-opacity=".217"/><stop offset=".6" stop-color="#FFF44F" stop-opacity="0"/></linearGradient><clipPath id="browser-mozilla-firefox_x16_svg__a"><path fill="#fff" d="M0 0h15.49v16H0z"/></clipPath></defs>'
      }
    }, ["16"], "browser-mozilla-firefox"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "browser-mozilla-firefox",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="url(#browser-safari_x16_svg__a)" d="M16 8A8 8 0 1 1-.001 8 8 8 0 0 1 16 8"/><path fill="#F4F2F3" d="M8 .417a.116.116 0 0 0-.117.117v1.345a.116.116 0 1 0 .234 0V.534A.116.116 0 0 0 8 .417m-.763.048h-.024a.116.116 0 0 0-.104.129l.06.563a.116.116 0 1 0 .231-.025L7.341.57a.116.116 0 0 0-.104-.104m1.531.001a.116.116 0 0 0-.104.104l-.06.563a.116.116 0 1 0 .233.024l.059-.563a.116.116 0 0 0-.128-.128M6.453.579q-.012 0-.023.003a.116.116 0 0 0-.09.138l.278 1.316a.116.116 0 1 0 .228-.048L6.568.672a.116.116 0 0 0-.115-.093m3.1.001a.116.116 0 0 0-.116.093l-.28 1.316a.116.116 0 1 0 .229.048l.28-1.316a.116.116 0 0 0-.114-.14M5.704.79a.116.116 0 0 0-.121.152l.175.539a.116.116 0 1 0 .222-.073L5.806.87a.12.12 0 0 0-.1-.08m4.59 0a.12.12 0 0 0-.1.08l-.175.539a.116.116 0 1 0 .222.072l.175-.538a.116.116 0 0 0-.121-.153m-5.33.27a.116.116 0 0 0-.104.164l.546 1.23a.116.116 0 1 0 .213-.095L5.075 1.13a.12.12 0 0 0-.109-.07m6.079.005a.12.12 0 0 0-.109.07l-.548 1.228a.116.116 0 0 0 .06.154c.058.026.127 0 .153-.06l.548-1.228a.116.116 0 0 0-.104-.164m-6.765.36a.116.116 0 0 0-.11.175l.284.489a.116.116 0 1 0 .202-.117l-.283-.49a.12.12 0 0 0-.093-.058m7.442-.001a.12.12 0 0 0-.093.058l-.283.49a.116.116 0 0 0 .043.16.116.116 0 0 0 .16-.043l.282-.49a.116.116 0 0 0-.109-.175m-8.109.416a.117.117 0 0 0-.09.185l.79 1.089a.116.116 0 1 0 .188-.137l-.79-1.089a.12.12 0 0 0-.098-.048m8.784.006a.12.12 0 0 0-.098.048l-.791 1.088a.116.116 0 1 0 .189.137l.79-1.088a.116.116 0 0 0-.09-.185m-9.38.494a.116.116 0 0 0-.093.195l.379.42a.116.116 0 1 0 .173-.156l-.378-.42a.12.12 0 0 0-.081-.04m9.969 0a.12.12 0 0 0-.08.04l-.38.42a.116.116 0 1 0 .173.156l.38-.42a.116.116 0 0 0-.093-.195m-10.54.548a.117.117 0 0 0-.072.204l1 .9a.116.116 0 1 0 .156-.174l-1-.9a.12.12 0 0 0-.084-.03m11.114.004a.12.12 0 0 0-.084.03l-1 .9a.116.116 0 1 0 .155.173l1-.9a.116.116 0 0 0-.071-.203M1.969 3.5a.116.116 0 0 0-.073.211l.459.333a.116.116 0 1 0 .137-.189l-.458-.333A.1.1 0 0 0 1.97 3.5m12.064.004a.1.1 0 0 0-.064.023l-.458.332a.116.116 0 1 0 .137.189l.458-.333a.116.116 0 0 0-.073-.21m-12.507.648a.116.116 0 0 0-.05.217l1.165.673a.116.116 0 1 0 .117-.202l-1.166-.673a.1.1 0 0 0-.066-.015m12.948 0a.1.1 0 0 0-.066.015l-1.166.673a.116.116 0 0 0-.042.16.116.116 0 0 0 .16.042l1.164-.673a.116.116 0 0 0-.05-.217M1.19 4.845a.116.116 0 0 0-.05.223l.517.23a.116.116 0 1 0 .095-.212l-.516-.23a.1.1 0 0 0-.046-.01m13.622.005a.1.1 0 0 0-.045.01l-.517.23a.116.116 0 1 0 .095.213l.516-.23a.116.116 0 0 0-.05-.223m-13.92.72a.116.116 0 0 0-.026.227l1.278.418a.116.116 0 1 0 .072-.222L.937 5.576a.1.1 0 0 0-.046-.005m14.219.006a.1.1 0 0 0-.047.005l-1.28.416a.116.116 0 1 0 .073.222l1.28-.416a.116.116 0 0 0-.027-.227M.704 6.333a.116.116 0 0 0-.025.23l.553.118a.116.116 0 1 0 .049-.228l-.554-.118zm14.59 0-.023.003-.554.118a.116.116 0 1 0 .049.228l.553-.117a.116.116 0 0 0-.025-.231M.564 7.1a.116.116 0 0 0 0 .232l1.337.142a.116.116 0 1 0 .024-.232L.587 7.099zm14.873.01h-.023l-1.338.14a.116.116 0 1 0 .024.232l1.338-.14a.116.116 0 0 0 0-.232M.541 7.884a.116.116 0 1 0 0 .233h.566a.116.116 0 1 0 0-.233zm14.352 0a.116.116 0 1 0 0 .233h.566a.116.116 0 1 0 0-.233zm-12.97.635H1.9l-1.338.14a.116.116 0 1 0 .024.232l1.338-.14a.116.116 0 0 0 0-.232m12.153.009a.116.116 0 0 0-.001.232l1.338.141a.116.116 0 1 0 .024-.232l-1.338-.141zm-12.82.788-.023.002-.553.118a.116.116 0 1 0 .048.228l.554-.118a.116.116 0 0 0-.025-.23m13.487 0a.116.116 0 0 0-.025.232l.554.117a.116.116 0 0 0 .138-.09.116.116 0 0 0-.09-.138l-.553-.118zm-12.554.46a.1.1 0 0 0-.046.006l-1.28.415a.116.116 0 1 0 .073.222l1.279-.416a.116.116 0 0 0-.026-.227m11.62.004a.116.116 0 0 0-.026.227l1.28.417a.116.116 0 1 0 .072-.221l-1.28-.417a.1.1 0 0 0-.045-.006m-12.108.907a.1.1 0 0 0-.046.01l-.517.23a.116.116 0 1 0 .095.213l.517-.23a.116.116 0 0 0-.05-.223m12.596.005a.12.12 0 0 0-.108.069.116.116 0 0 0 .059.154l.516.23c.06.027.128 0 .154-.059a.116.116 0 0 0-.059-.154l-.516-.23a.1.1 0 0 0-.046-.01m-11.59.252a.1.1 0 0 0-.066.016l-1.165.672a.116.116 0 1 0 .116.202l1.166-.672a.116.116 0 0 0-.05-.218m10.586 0a.116.116 0 0 0-.05.217l1.165.673a.116.116 0 1 0 .116-.202l-1.165-.672a.1.1 0 0 0-.066-.016m-10.876.987a.1.1 0 0 0-.065.023l-.458.332a.116.116 0 1 0 .137.189l.458-.332a.116.116 0 0 0-.072-.212m11.163.004a.116.116 0 0 0-.073.211l.459.333a.116.116 0 1 0 .137-.189l-.458-.332a.1.1 0 0 0-.065-.023m-10.126.04a.12.12 0 0 0-.084.03l-1 .9a.116.116 0 1 0 .155.173l1-.9a.116.116 0 0 0-.07-.202m9.089.004a.116.116 0 0 0-.072.203l1 .9a.116.116 0 1 0 .156-.173l-1-.9a.12.12 0 0 0-.084-.03m-8.14.854a.12.12 0 0 0-.098.048l-.792 1.088a.116.116 0 1 0 .19.138l.79-1.088a.116.116 0 0 0-.09-.186m7.187.005a.117.117 0 0 0-.09.185l.79 1.09a.116.116 0 1 0 .188-.138l-.79-1.089a.12.12 0 0 0-.098-.048m-8.208.168a.12.12 0 0 0-.08.039l-.38.42a.116.116 0 1 0 .174.156l.378-.42a.116.116 0 0 0-.092-.195m9.236 0a.116.116 0 0 0-.093.195l.378.421a.116.116 0 1 0 .174-.156l-.379-.42a.12.12 0 0 0-.08-.04m-7.11.467a.12.12 0 0 0-.108.07l-.548 1.228a.116.116 0 1 0 .213.095l.548-1.229a.116.116 0 0 0-.104-.164m4.976.004a.117.117 0 0 0-.104.164l.546 1.23a.116.116 0 1 0 .213-.096l-.546-1.229a.12.12 0 0 0-.109-.07m-5.939.376a.12.12 0 0 0-.092.058l-.283.49a.116.116 0 0 0 .042.16.116.116 0 0 0 .16-.043l.283-.49a.116.116 0 0 0-.11-.175m6.91 0a.116.116 0 0 0-.11.175l.283.49a.116.116 0 0 0 .16.043.116.116 0 0 0 .042-.16l-.283-.49a.12.12 0 0 0-.092-.058m-4.726.018a.116.116 0 0 0-.115.092l-.28 1.316a.116.116 0 0 0 .09.139.116.116 0 0 0 .139-.09l.28-1.316a.116.116 0 0 0-.114-.141m2.538 0q-.012 0-.023.003a.116.116 0 0 0-.09.138l.278 1.316a.116.116 0 1 0 .228-.048l-.278-1.316a.116.116 0 0 0-.115-.093M8 14.005a.116.116 0 0 0-.117.117v1.345a.116.116 0 1 0 .234 0v-1.345A.116.116 0 0 0 8 14.004m-2.141.435a.12.12 0 0 0-.101.08l-.175.538a.116.116 0 1 0 .222.073l.175-.539a.116.116 0 0 0-.121-.152m4.281 0a.116.116 0 0 0-.121.152l.175.539a.116.116 0 1 0 .222-.072l-.175-.538a.12.12 0 0 0-.1-.08m-2.872.3a.116.116 0 0 0-.105.104l-.059.563a.116.116 0 1 0 .232.024l.06-.563a.116.116 0 0 0-.128-.128m1.46 0h-.024a.117.117 0 0 0-.104.129l.059.563a.116.116 0 1 0 .232-.024l-.06-.563a.116.116 0 0 0-.104-.104"/><g filter="url(#browser-safari_x16_svg__b)" opacity=".409"><path fill="#000" d="M13.467 3.334 7.085 7.042l-4.034 6.352 5.902-4.372z"/></g><path fill="#FF5150" d="m8.915 8.958-1.83-1.916 6.489-4.365z"/><path fill="#F1F1F1" d="m8.915 8.958-1.83-1.916-4.659 6.28z"/><path fill="#000" d="m2.426 13.323 6.489-4.365 4.659-6.28z" opacity=".243"/>',
        defs: '<defs><radialGradient id="browser-safari_x16_svg__a" cx="0" cy="0" r="1" gradientTransform="translate(8.036 6.834)scale(8.68021)" gradientUnits="userSpaceOnUse"><stop stop-color="#06C2E7"/><stop offset=".25" stop-color="#0DB8EC"/><stop offset=".5" stop-color="#12AEF1"/><stop offset=".75" stop-color="#1F86F9"/><stop offset="1" stop-color="#107DDD"/></radialGradient><filter id="browser-safari_x16_svg__b" width="11.763" height="11.406" x="2.377" y="2.661" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_4665_8423" stdDeviation=".337"/></filter></defs>'
      }
    }, ["16"], "browser-safari"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "browser-safari",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#fff" d="m6.34 12.735-4.352-3.42a1.65 1.65 0 0 1-.682-1.294c0-.484.243-.948.682-1.292L6.34 3.302A2.7 2.7 0 0 1 8 2.766c.628 0 1.212.194 1.66.539l4.352 3.42a1.65 1.65 0 0 1 .682 1.294c0 .49-.243.95-.682 1.293l-4.353 3.42A2.7 2.7 0 0 1 8 13.275c-.628 0-1.212-.189-1.66-.539"/><path fill="#fff" d="M6.34 10.58 1.989 7.16a1.65 1.65 0 0 1-.682-1.293c0-.485.243-.948.682-1.293L6.34 1.147A2.7 2.7 0 0 1 8 .611c.628 0 1.212.194 1.66.54l4.352 3.42a1.65 1.65 0 0 1 .682 1.293c0 .49-.243.95-.682 1.293l-4.353 3.42c-.477.361-1.061.552-1.659.542-.628 0-1.212-.188-1.66-.538"/><path fill="#FF9D00" d="M14.007 8.835a1.59 1.59 0 0 1 0 2.62L9.67 14.862a2.86 2.86 0 0 1-3.34 0l-4.337-3.4a1.59 1.59 0 0 1 .003-2.623l4.337-3.405c.92-.717 2.419-.717 3.34 0z"/><path fill="#FC0" d="m6.34 12.735-4.352-3.42a1.65 1.65 0 0 1-.682-1.294c0-.484.243-.948.682-1.292L6.34 3.302A2.7 2.7 0 0 1 8 2.766c.628 0 1.212.194 1.66.539l4.352 3.42a1.65 1.65 0 0 1 .682 1.294c0 .49-.243.95-.682 1.293l-4.353 3.42A2.7 2.7 0 0 1 8 13.275c-.628 0-1.212-.189-1.66-.539"/><path fill="url(#browser-webkit_x16_svg__a)" d="M6.34 10.58 1.989 7.16a1.65 1.65 0 0 1-.682-1.293c0-.485.243-.948.682-1.293L6.34 1.147A2.7 2.7 0 0 1 8 .611c.628 0 1.212.194 1.66.54l4.352 3.42a1.65 1.65 0 0 1 .682 1.293c0 .49-.243.95-.682 1.293l-4.353 3.42c-.477.361-1.061.552-1.659.542-.628 0-1.212-.188-1.66-.538"/><path fill="#fff" d="M8.016 9.145c2.222 0 4.024-1.474 4.024-3.292 0-1.813-1.804-3.294-4.024-3.294-2.225 0-4.03 1.481-4.03 3.294 0 1.818 1.805 3.292 4.027 3.292zm0 .34c-2.451 0-4.444-1.625-4.444-3.632 0-2.004 1.993-3.628 4.444-3.628s4.44 1.627 4.44 3.628c0 2.007-1.989 3.631-4.44 3.631"/><path fill="#8CC8F6" d="M8.312 7.251c.221-.027.44-.092.639-.188l1.266.522-.663-.997a1.16 1.16 0 0 0 0-1.47l.663-.997-1.193.493-.035.525a.89.89 0 0 1-.033 1.45 1.4 1.4 0 0 1-.43.228l-.216.431zm-.592-2.79a2.2 2.2 0 0 0-.647.188l-1.266-.523.663.997a1.16 1.16 0 0 0 0 1.468l-.663.997 1.223-.504.027-.493a.89.89 0 0 1 .008-1.47 1.6 1.6 0 0 1 .431-.23l.216-.43z"/><path fill="#fff" fill-rule="evenodd" d="m7.407 5.745-.17 2.99 1.366-2.774.194-2.982zM7.39 8.162l1.093-2.22-.959-.175-.134 2.397z" clip-rule="evenodd"/>',
        defs: '<defs><linearGradient id="browser-webkit_x16_svg__a" x1="8" x2="8" y1=".611" y2="11.12" gradientUnits="userSpaceOnUse"><stop stop-color="#34AADC"/><stop offset="1" stop-color="#007AFF"/></linearGradient></defs>'
      }
    }, ["16"], "browser-webkit"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "browser-webkit",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-width="2" d="M12.95 12.95a7 7 0 1 1-9.9-9.9 7 7 0 0 1 9.9 9.9Z" class="icon-dark"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 8 1.5 2L10 6" class="icon-dark"/>'
      }
    }, ["16"], "checkmark-outline"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "checkmark-outline",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8.5 7.5 11 11 5" class="icon-dark"/>'
      }
    }, ["16"], "checkmark-small"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "checkmark-small",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#fff" d="M13.657 13.657A8 8 0 1 1 2.343 2.343a8 8 0 0 1 11.314 11.314" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 8.5 2 2 4-5" class="icon-dark"/>'
      },
      24: {
        body: '<path fill="#fff" d="M20.485 20.485c-4.686 4.687-12.284 4.687-16.97 0-4.687-4.686-4.687-12.284 0-16.97 4.686-4.687 12.284-4.687 16.97 0 4.687 4.686 4.687 12.284 0 16.97" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.999 9 11 15l-2.999-3" class="icon-dark"/>'
      }
    }, ["16", "24"], "checkmark-solid"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "checkmark-solid",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8.5 7 12l5-8" class="icon-dark"/>'
      }
    }, ["16"], "checkmark"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "checkmark",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 9 3 3 3-3M5 4l3 3 3-3" class="icon-dark"/>'
      }
    }, ["16"], "chevron-down-double"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "chevron-down-double",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m2 5 6 6 6-6" class="icon-dark"/>'
      }
    }, ["16"], "chevron-down-large"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "chevron-down-large",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 6 4 4 4-4" class="icon-dark"/>'
      }
    }, ["16"], "chevron-down-medium"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "chevron-down-medium",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      8: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 2.5 3 3 3-3" class="icon-dark"/>'
      },
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 6 4 4 4-4" class="icon-dark"/>'
      }
    }, ["8", "16"], "chevron-down-small"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "chevron-down-small",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11 4 8l3-3m5 6L9 8l3-3" class="icon-dark"/>'
      }
    }, ["16"], "chevron-left-double"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "chevron-left-double",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 14 5 8l6-6" class="icon-dark"/>'
      }
    }, ["16"], "chevron-left-large"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "chevron-left-large",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      8: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5.5 1-3 3 3 3" class="icon-dark"/>'
      },
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 4 6 8l4 4" class="icon-dark"/>'
      }
    }, ["8", "16"], "chevron-left-small"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "chevron-left-small",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 11 3-3-3-3m-5 6 3-3-3-3" class="icon-dark"/>'
      }
    }, ["16"], "chevron-right-double"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "chevron-right-double",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 14 6-6-6-6" class="icon-dark"/>'
      }
    }, ["16"], "chevron-right-large"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "chevron-right-large",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      8: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m2.5 1 3 3-3 3" class="icon-dark"/>'
      },
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 12 4-4-4-4" class="icon-dark"/>'
      }
    }, ["8", "16"], "chevron-right-small"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "chevron-right-small",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 7 3-3 3 3m-6 5 3-3 3 3" class="icon-dark"/>'
      }
    }, ["16"], "chevron-up-double"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "chevron-up-double",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m2 11 6-6 6 6" class="icon-dark"/>'
      }
    }, ["16"], "chevron-up-large"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "chevron-up-large",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      8: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 5.5 3-3 3 3" class="icon-dark"/>'
      },
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10 8 6l-4 4" class="icon-dark"/>'
      }
    }, ["8", "16"], "chevron-up-small"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "chevron-up-small",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="currentColor" d="m6.524 13.214.565-.825zm6.145.33a1 1 0 1 0-1.338-1.486zm-1.338-9.602a1 1 0 1 0 1.338-1.485zM2.5 5.501a1 1 0 0 0 0 2zm7.695 2a1 1 0 1 0 0-2zM2.5 8.5a1 1 0 0 0 0 2zm6.054 2a1 1 0 1 0 0-2zM9 13a3.36 3.36 0 0 1-1.91-.611l-1.132 1.65A5.36 5.36 0 0 0 9 15zm-1.91-.611C5.884 11.564 5 9.943 5 8H3c0 2.522 1.147 4.797 2.958 6.039zM5 8c0-2.94 1.954-5 4-5V1C5.523 1 3 4.312 3 8zm6.33 4.058C10.657 12.665 9.85 13 9 13v2c1.401 0 2.672-.558 3.67-1.457zM9 3c.85 0 1.656.335 2.33.942l1.34-1.485C11.672 1.557 10.4 1 9 1zM2.5 7.5h7.695v-2H2.5zm0 3h6.054v-2H2.5z" class="icon-dark"/>'
      }
    }, ["16"], "currency-eur"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "currency-eur",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="currentColor" d="M10 5a1 1 0 1 0 2 0zm-6 9-.79-.614a1 1 0 0 0 1.345 1.446zm8.555.832a1 1 0 0 0-1.11-1.664zM4 8a1 1 0 0 0 0 2zm5 2a1 1 0 0 0 0-2zM6 5a2 2 0 0 1 2-2V1a4 4 0 0 0-4 4zm2-2a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4zM4 14c.555.832.554.832.554.833h-.001l-.002.002-.003.002-.005.003-.004.002.014-.008q.03-.018.12-.058c.117-.05.309-.12.568-.167.51-.093 1.319-.108 2.388.32l.742-1.857c-1.431-.573-2.622-.588-3.487-.43a4.6 4.6 0 0 0-1.01.3 3.4 3.4 0 0 0-.42.22l-.004.003-.003.002c-.001 0-.002 0 .553.833m3.629.928c1.431.573 2.622.588 3.487.43a4.6 4.6 0 0 0 1.01-.3 3.4 3.4 0 0 0 .408-.212l.011-.008.005-.003.003-.002c.001 0 .002 0-.553-.833-.555-.832-.554-.832-.554-.833h.001l.002-.002.003-.002.005-.003.004-.002-.014.008q-.03.018-.12.058c-.117.05-.309.12-.568.167-.51.093-1.319.108-2.388-.32zm-2.84-.314c1.77-2.276 2.2-4.085 2.048-5.707l-1.991.186c.095 1.022-.115 2.339-1.635 4.293zm2.048-5.707c-.08-.863-.325-1.632-.51-2.254C6.13 5.996 6 5.498 6 5H4c0 .827.22 1.584.41 2.223.2.674.377 1.242.436 1.87zM4 10h1.841V8H4zm1.841 0H9V8H5.841z" class="icon-dark"/>'
      }
    }, ["16"], "currency-gbp"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "currency-gbp",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.5 2H8m3 3a3 3 0 0 1-3 3H3.5l6.5 6m1-9a3 3 0 0 0-3-3m3 3H3.5M11 5h1.5M8 2h4.5" class="icon-dark"/>'
      }
    }, ["16"], "currency-inr"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "currency-inr",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h5a3 3 0 1 0 0-6H5zm0 0v6m0-6H3m0 3h6" class="icon-dark"/>'
      }
    }, ["16"], "currency-rub"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "currency-rub",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 3h3a1 1 0 0 1 1 1v.5M8 3H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3m0-5V1m0 2v5m0 5h3a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H8m0 5H5a1 1 0 0 1-1-1v-.5M8 13v2m0-2V8" class="icon-dark"/>'
      }
    }, ["16"], "currency-usd"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "currency-usd",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      24: {
        body: '<path fill="#D0D2E0" fill-rule="evenodd" d="M3 17H2v.1A2.9 2.9 0 0 0 4.9 20h14.2a2.9 2.9 0 0 0 2.9-2.9V17H3" class="icon-light" clip-rule="evenodd"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 17H3m18 0h1v.1m-1-.1V6M3 17H2v.1m1-.1V6m2-2h14M5 4a2 2 0 0 0-2 2m2-2a2 2 0 0 0-2 2v0m16-2a2 2 0 0 1 2 2m-2-2a2 2 0 0 1 2 2v0m1 11.1a2.9 2.9 0 0 1-2.9 2.9m2.9-2.9a2.9 2.9 0 0 1-2.9 2.9v0m0 0H4.9m0 0A2.9 2.9 0 0 1 2 17.1M4.9 20A2.9 2.9 0 0 1 2 17.1v0" class="icon-dark"/><circle cx="12" cy="7" r="1" fill="currentColor" class="icon-dark"/>'
      }
    }, ["24"], "device-laptop"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "device-laptop",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.5 1H11a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1.5m3 0v.5A.5.5 0 0 1 9 2H7a.5.5 0 0 1-.5-.5V1m3 0h-3M8 12.5v.01" class="icon-dark"/>'
      },
      24: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M15 1h1a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h1m6 0v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V1m6 0H9m3 19.01V20" class="icon-dark"/>'
      }
    }, ["16", "24"], "device-smartphone"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "device-smartphone",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" d="M15 3a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1zm0 0v2a1 1 0 0 0 1 1h3-8" class="icon-dark"/>'
      },
      24: {
        body: '<path fill="#D0D2E0" d="M23 4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1z" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 17H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1zm0 0v4m0 0h6m-6 0H6" class="icon-dark"/>'
      }
    }, ["16", "24"], "device-tv"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "device-tv",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#E4FBF2" d="M2 12V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2" class="icon-light"/><path stroke="#1FA971" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 6v4m2-2H6m6-6H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2" class="icon-dark"/>'
      },
      24: {
        body: '<path fill="#E4FBF2" d="M3 18V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3" class="icon-light"/><path stroke="#1FA971" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v8m4-4H8m10-9H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3" class="icon-dark"/>'
      }
    }, ["16", "24"], "document-added-square-plus"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "document-added-square-plus",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" d="M2 13V3a2 2 0 0 1 2-2h6.172a2 2 0 0 1 1.414.586l1.828 1.828A2 2 0 0 1 14 4.828V13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 10 .5-1m3.5 1-.5-1m-3 0L8 6l1.5 3m-3 0h3M14 4.828V13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h6.172a2 2 0 0 1 1.414.586l1.828 1.828A2 2 0 0 1 14 4.828" class="icon-dark"/>'
      }
    }, ["16"], "document-added"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "document-added",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" d="M2 14V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h3M5 5h6m-6 6h5m3-10H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1" class="icon-dark"/>'
      },
      24: {
        body: '<path fill="#D0D2E0" d="M4 20V4a2 2 0 0 1 2-2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8m-6-6 6 6m-6-6v6h6" class="icon-dark"/>'
      },
      48: {
        body: '<path fill="#D0D2E0" d="M10 39V9a1 1 0 0 1 1-1h26a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 24h7m-7-6.857h14M17 30.857h11.667M37 8H11a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1" class="icon-dark"/>'
      }
    }, ["16", "24", "48"], "document-blank"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "document-blank",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      24: {
        body: '<path fill="#D0D2E0" d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2" class="icon-light"/><path fill="currentColor" d="M9 14a1 1 0 1 0 0 2zm6 2a1 1 0 1 0 0-2zm-6 3h1v-2H9zm-1-2a1 1 0 1 0 0 2zm5-6h-1v2h1zm3 2a1 1 0 1 0 0-2zm-6-2a1 1 0 1 0 0 2zm.01 2h1v-2h-1zM9 8a1 1 0 0 0 0 2zm3 2h1V8h-1zm3-2h-1v2h1zm.01 2a1 1 0 1 0 0-2zM14 7a1 1 0 1 0 0-2zm-2-2h-1v2h1zM8 5a1 1 0 0 0 0 2zm1 2h1V5H9zm3 10h-1v2h1zm1.01 2a1 1 0 1 0 0-2zM6 3h12V1H6zm12 18H6v2h12zm1-17v16h2V4zM5 20V4H3v16zm4-4h6v-2H9zm0 1H8v2h1zm4-4h3v-2h-3zm-3 0h.01v-2H10zm-1-3h3V8H9zm6 0h.01V8H15zm-1-5h-2v2h2zM8 7h1V5H8zm4 12h1.01v-2H12zm-6 2a1 1 0 0 1-1-1H3a3 3 0 0 0 3 3zm12 2a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1zm0-20a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3zM6 1a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1z" class="icon-dark"/>'
      },
      48: {
        body: '<path fill="#D0D2E0" fill-rule="evenodd" d="M32 5.18V13h7.82a2 2 0 0 0-.406-.586l-6.828-6.828A2 2 0 0 0 32 5.18" class="icon-light" clip-rule="evenodd"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m20 21-3 3 3 3m8-6 3 3-3 3m-5.5 2.5 3-11M32 5.18a2 2 0 0 0-.828-.18H9a1 1 0 0 0-1 1v36a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V13.828a2 2 0 0 0-.18-.828M32 5.18c.216.098.415.235.586.406l6.828 6.828a2 2 0 0 1 .406.586M32 5.18V13h7.82" class="icon-dark"/><path fill="#A3E7CB" d="M43 40a6 6 0 1 1-12 0 6 6 0 0 1 12 0" class="icon-light-secondary"/><path stroke="#00814D" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M37 38v2m0 2v-2m0 0h2-4m8 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0" class="icon-dark-secondary"/>'
      }
    }, ["24", "48"], "document-code"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "document-code",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 13V3a2 2 0 0 1 2-2h6.172a2 2 0 0 1 1.414.586l1.828 1.828A2 2 0 0 1 14 4.828V13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2" class="icon-dark-stroke icon-light-fill"/>'
      }
    }, ["16"], "document-deleted"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "document-deleted",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" d="M2 13V3a2 2 0 0 1 2-2h6.172a2 2 0 0 1 1.414.586l1.828 1.828A2 2 0 0 1 14 4.828V13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5v6m0 0 2-2m-2 2L6 9m8-4.172V13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h6.172a2 2 0 0 1 1.414.586l1.828 1.828A2 2 0 0 1 14 4.828" class="icon-dark"/>'
      },
      24: {
        body: '<path fill="#D0D2E0" d="M4 20V4a2 2 0 0 1 2-2h6.757a3 3 0 0 1 2.122.879L19.12 7.12A3 3 0 0 1 20 9.243V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 16V8m0 8 3-3m-3 3-3-3m11-3.757V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6.757a3 3 0 0 1 2.122.879L19.12 7.12A3 3 0 0 1 20 9.243" class="icon-dark"/>'
      }
    }, ["16", "24"], "document-download"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "document-download",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" d="M4 15a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h6.172a2 2 0 0 1 1.414.586l1.828 1.828A2 2 0 0 1 14 4.828V13a2 2 0 0 1-2 2z" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 8h4m4-3.172V13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h6.172a2 2 0 0 1 1.414.586l1.828 1.828A2 2 0 0 1 14 4.828" class="icon-dark"/>'
      },
      24: {
        body: '<path fill="#D0D2E0" d="M4 20V4a2 2 0 0 1 2-2h6.757a3 3 0 0 1 2.122.879L19.12 7.12A3 3 0 0 1 20 9.243V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m11-2.757V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6.757a3 3 0 0 1 2.122.879L19.12 7.12A3 3 0 0 1 20 9.243" class="icon-dark"/>'
      }
    }, ["16", "24"], "document-minus"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "document-minus",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#F5F4D7" d="M9 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0" class="icon-light"/><path fill="#F5F4D7" fill-rule="evenodd" d="M4 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm4 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2" class="icon-light" clip-rule="evenodd"/><path stroke="#DB7903" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0" class="icon-dark"/><path stroke="#DB7903" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm4 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2" class="icon-dark" clip-rule="evenodd"/>'
      },
      24: {
        body: '<path fill="#DB7903" d="M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0" class="icon-dark"/><path fill="#F5F4D7" fill-rule="evenodd" d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm6 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4" class="icon-light" clip-rule="evenodd"/><path stroke="#DB7903" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0" class="icon-dark"/><path stroke="#DB7903" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm6 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4" class="icon-dark" clip-rule="evenodd"/>'
      }
    }, ["16", "24"], "document-modified-square-dot"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "document-modified-square-dot",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" d="M2 13V3a2 2 0 0 1 2-2h6.172a2 2 0 0 1 1.414.586l1.828 1.828A2 2 0 0 1 14 4.828V13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 10 1-4 2 3 2-3 1 4m3-5.172V13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h6.172a2 2 0 0 1 1.414.586l1.828 1.828A2 2 0 0 1 14 4.828" class="icon-dark"/>'
      }
    }, ["16"], "document-modified"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "document-modified",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" d="M3 15a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1z" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 6.5h4m-2 2v-4m-2 7h4M13 1H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1" class="icon-dark"/>'
      },
      24: {
        body: '<path fill="#D0D2E0" d="M4 20V4a2 2 0 0 1 2-2h6.757a3 3 0 0 1 2.122.879L19.12 7.12A3 3 0 0 1 20 9.243V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13v-3m0-3v3m0 0h3m-3 0H9m0 7h6m5-7.757V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6.757a3 3 0 0 1 2.122.879L19.12 7.12A3 3 0 0 1 20 9.243" class="icon-dark"/>'
      }
    }, ["16", "24"], "document-plus-minus"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "document-plus-minus",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" d="M3 15a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1z" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 8h4m-2 2V6m5-5H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1" class="icon-dark"/>'
      },
      24: {
        body: '<path fill="#D0D2E0" d="M4 20V4a2 2 0 0 1 2-2h6.757a3 3 0 0 1 2.122.879L19.12 7.12A3 3 0 0 1 20 9.243V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v-3m0-3v3m0 0h3m-3 0H9m11-2.757V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6.757a3 3 0 0 1 2.122.879L19.12 7.12A3 3 0 0 1 20 9.243" class="icon-dark"/>'
      }
    }, ["16", "24"], "document-plus"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "document-plus",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      24: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 1h13a3 3 0 0 1 3 3v15M4 1H3a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h1m0-4v4m7 1h5m-5 4h5m-5 4h5M4 5v15a3 3 0 0 0 3 3v0m13-4h1a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H7m13-4H7v0a2.83 2.83 0 0 1 0 4v0" class="icon-dark"/><path fill="currentColor" d="M9 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0" class="icon-dark"/>'
      }
    }, ["24"], "document-script"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "document-script",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      24: {
        body: '<path fill="currentColor" fill-rule="evenodd" d="M10 1a1 1 0 0 0-.707.293l-6 6A1 1 0 0 0 3 8v12a3 3 0 0 0 3 3h1a1 1 0 0 0 0-2H6a1 1 0 0 1-1-1V9h5a1 1 0 0 0 1-1V3h7a1 1 0 0 1 1 1v5a1 1 0 0 0 2 0V4a3 3 0 0 0-3-3zM9 7H6.414L9 4.414zm2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1zm1 4v-2h2v2zm4 0v-2h4v2zm0 4v-2h4v2zm-2-2v2h-2v-2z" class="icon-dark" clip-rule="evenodd"/>'
      }
    }, ["24"], "document-sheet"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "document-sheet",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" d="M3 15a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1z" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 5.75.001 2.248m0 0 2.139-.693M8 7.998 9.323 9.82M8 7.998 6.677 9.82m1.324-1.822-2.14-.693M13 1H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1" class="icon-dark"/>'
      },
      24: {
        body: '<path fill="#D0D2E0" d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6.757a3 3 0 0 1 2.122.879L19.12 7.12A3 3 0 0 1 20 9.243V20a2 2 0 0 1-2 2z" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8.844v3.16m0 0 3.002-.98m-3.002.98 1.855 2.55M12 12.003l-1.855 2.55M12 12.003l-3.002-.98M20 9.244V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6.757a3 3 0 0 1 2.122.879L19.12 7.12A3 3 0 0 1 20 9.243" class="icon-dark"/>'
      }
    }, ["16", "24"], "document-star"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "document-star",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" d="M2 14V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h3M5 5h6m-6 6h5m3-10H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1" class="icon-dark"/>'
      }
    }, ["16"], "document-text"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "document-text",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      8: {
        body: '<circle cx="4" cy="4" r="3.5" fill="#D0D2E0" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="icon-light-fill icon-dark-stroke"/>'
      }
    }, ["8"], "dot-outline-large"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "dot-outline-large",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      8: {
        body: '<circle cx="4" cy="4" r="2.5" fill="#D0D2E0" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="icon-light-fill icon-dark-stroke"/>'
      }
    }, ["8"], "dot-outline-small"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "dot-outline-small",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      24: {
        body: '<path fill="#C2F1DE" d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12"/><path stroke="#00814D" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.999 9 11 15l-2.999-3"/>'
      }
    }, ["24"], "file-changes-added"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "file-changes-added",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      24: {
        body: '<path fill="#FAD9DF" d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12"/><path stroke="#C62B49" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 9-3 3M9 9l3 3m0 0-3 3m3-3 3 3"/>'
      }
    }, ["24"], "file-changes-error"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "file-changes-error",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      24: {
        body: '<path fill="#E1E3ED" d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12"/><path stroke="#9095AD" stroke-width="2" d="M8.464 15.536a5 5 0 1 0 7.072-7.072m-7.072 7.072a5 5 0 1 1 7.072-7.072m-7.072 7.072 7.072-7.072"/>'
      }
    }, ["24"], "file-changes-skipped"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "file-changes-skipped",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      24: {
        body: '<path fill="#F3ECB3" d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12"/><path stroke="#BD5800" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7v7m0 2.99V17"/>'
      }
    }, ["24"], "file-changes-warning"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "file-changes-warning",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 4 6 8m-6 0 6-8M5 12V4H2.5L1 5.5" class="icon-dark"/>'
      }
    }, ["16"], "general-1X"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "general-1X",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M13 3H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2v3l5-3h3a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z" class="icon-dark-stroke icon-light-fill"/>'
      }
    }, ["16"], "general-chat-bubble"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "general-chat-bubble",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.5 2.585A1.5 1.5 0 0 0 2.5 4v9.5A1.5 1.5 0 0 0 4 15h8a1.5 1.5 0 0 0 1.5-1.5V4a1.5 1.5 0 0 0-1-1.415M7 4h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1" class="icon-dark"/>'
      }
    }, ["16"], "general-clipboard"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "general-clipboard",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 5v6m0-6h6M5 5V3a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2zm0 6h6m-6 0v2a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2v0a2 2 0 0 1 2-2zm6 0V5m0 6h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2zm0-6V3a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2z" class="icon-dark"/>'
      }
    }, ["16"], "general-command-key"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "general-command-key",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="currentColor" fill-rule="evenodd" d="M8 0a1 1 0 0 1 1 1v.07A7 7 0 0 1 14.93 7H15a1 1 0 1 1 0 2h-.07A7 7 0 0 1 9 14.93V15a1 1 0 1 1-2 0v-.07A7 7 0 0 1 1.07 9H1a1 1 0 0 1 0-2h.07A7.005 7.005 0 0 1 7 1.07V1a1 1 0 0 1 1-1M7 3.1A5.01 5.01 0 0 0 3.1 7H4a1 1 0 0 1 0 2h-.9A5.01 5.01 0 0 0 7 12.9V12a1 1 0 1 1 2 0v.9A5.01 5.01 0 0 0 12.9 9H12a1 1 0 1 1 0-2h.9A5.01 5.01 0 0 0 9 3.1V4a1 1 0 0 1-2 0z" class="icon-dark" clip-rule="evenodd"/><path fill="currentColor" d="M9 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0" class="icon-dark"/>'
      }
    }, ["16"], "general-crosshairs"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "general-crosshairs",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" d="M6.825 6.844c.384.53-.018.801-.527 1.144-.464.312-1.018.685-1.145 1.371-.145.785.128 1.563 1.175 2.079.238.117.181 1.293.13 2.358-.018.372-.035.73-.039 1.025l.186.04c2.044-.856 3.464-2.082 4.192-3.72.422-1.157-.406-2.5-1.313-2.953-.453-1.938 1.625-1.485 2.188-1.344.167 0 .122-.193.054-.488-.11-.477-.28-1.222.29-1.84.424-.461.998-.993 1.204-1.18A6.98 6.98 0 0 0 8 1c-.816 0-1.6.14-2.327.396-1.27 3.39-.613 3.948.902 5.235z" class="icon-light"/><path fill="#D0D2E0" fill-rule="evenodd" d="m6.605 14.861-.186-.04c.004-.295.021-.653.04-1.025.05-1.065.107-2.241-.13-2.358-1.048-.516-1.32-1.294-1.176-2.079.127-.686.68-1.059 1.145-1.371.51-.343.91-.613.527-1.144l-.25-.213C5.06 5.344 4.402 4.786 5.673 1.396A7 7 0 0 1 8 1c2.074 0 3.938.902 5.22 2.336-.206.188-.78.719-1.204 1.18-.57.618-.4 1.363-.29 1.84.068.295.113.488-.054.488-.563-.14-2.64-.594-2.188 1.343.907.454 1.735 1.797 1.313 2.954-.728 1.638-2.148 2.864-4.192 3.72" class="icon-light" clip-rule="evenodd"/><path stroke="currentColor" stroke-width="2" d="M5.673 1.396a7.003 7.003 0 0 0 .746 13.425M5.673 1.396A7 7 0 0 1 8 1c2.074 0 3.938.902 5.22 2.336m-7.547-1.94c-1.27 3.39-.613 3.948.902 5.235l.25.213c.384.53-.018.801-.527 1.144-.464.312-1.018.685-1.145 1.371-.145.785.128 1.563 1.175 2.079.238.117.181 1.293.13 2.358-.018.372-.035.73-.039 1.025m6.8-11.485c-.205.188-.779.719-1.203 1.18-.57.618-.4 1.363-.29 1.84.068.295.113.488-.054.488-.563-.14-2.64-.594-2.188 1.343.907.454 1.735 1.797 1.313 2.954-.728 1.638-2.148 2.864-4.192 3.72M13.22 3.336A7 7 0 0 1 6.606 14.86m0 0-.187-.04" class="icon-dark"/>'
      }
    }, ["16"], "general-earth"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "general-earth",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="currentColor" fill-rule="evenodd" d="M10.704 2.468A7.8 7.8 0 0 0 8 2C5.128 2 3.128 3.447 1.882 4.831a10.9 10.9 0 0 0-1.69 2.528 7 7 0 0 0-.11.242l-.006.018-.003.006v.002H.071a1 1 0 0 0 0 .744v.002l.001.002.003.006.007.018a4 4 0 0 0 .108.242 10.869 10.869 0 0 0 1.748 2.591l1.416-1.416A9 9 0 0 1 2.105 8q.065-.128.156-.288c.239-.423.605-.985 1.107-1.543C4.372 5.053 5.872 4 8 4q.568.001 1.077.094zM8.166 5.005a3 3 0 0 0-3.162 3.162zm-.334 5.99 3.162-3.162Q11 7.916 11 8a3 3 0 0 1-3.167 2.995m-.91.91Q7.433 12 8 12c2.128 0 3.628-1.053 4.632-2.169A8.9 8.9 0 0 0 13.895 8a8.872 8.872 0 0 0-1.25-1.816l1.416-1.416q.03.03.057.063a10.9 10.9 0 0 1 1.69 2.528 7 7 0 0 1 .11.242l.006.018.003.006.001.003L15 8l.928.372-.001.003-.003.006-.007.018a4 4 0 0 1-.108.242 10.87 10.87 0 0 1-1.69 2.528C12.871 12.554 10.871 14 8 14a7.8 7.8 0 0 1-2.703-.468zm9.005-3.533L15 8l.928-.372c.095.238.095.506 0 .744m-15.857 0L1 8zM1 8l-.928-.372z" class="icon-dark" clip-rule="evenodd"/><path stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" d="m2.5 13.5 11-11"/>'
      }
    }, ["16"], "general-eye-closed"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "general-eye-closed",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0" class="icon-light"/><path fill="#D0D2E0" fill-rule="evenodd" d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0" class="icon-light" clip-rule="evenodd"/><path fill="currentColor" d="m1 8-.928-.371a1 1 0 0 0 0 .742zm14 0 .928.371a1 1 0 0 0 0-.742zM1 8l.928.372v.002l.013-.033.06-.13a8.868 8.868 0 0 1 1.368-2.043C4.371 5.054 5.871 4.001 8 4.001V2C5.128 2 3.128 3.447 1.882 4.831a10.9 10.9 0 0 0-1.69 2.528 7 7 0 0 0-.119.266v.002H.071c0 .001 0 .002.928.373m7-4c2.128 0 3.628 1.053 4.632 2.169A8.9 8.9 0 0 1 14 8.212l.059.13.012.028.002.004v-.001h-.001c0-.001 0-.002.928-.373l.928-.372v-.001l-.001-.002-.002-.006-.031-.073-.085-.187a10.868 10.868 0 0 0-1.69-2.528C12.871 3.447 10.871 2 8 2zm7 4-.928-.372v-.002l-.001.004-.012.029-.06.13a8.871 8.871 0 0 1-1.368 2.043c-1.003 1.114-2.503 2.168-4.631 2.168v2c2.872 0 4.872-1.447 6.118-2.831a10.9 10.9 0 0 0 1.69-2.528 7 7 0 0 0 .117-.26l.002-.006v-.002h.001c0-.001 0-.002-.928-.373m-7 4c-2.128 0-3.628-1.053-4.632-2.169A8.9 8.9 0 0 1 2 7.788l-.073-.162v.001h.001c0 .001 0 .002-.928.373l-.928.372v.001l.001.002.033.079q.03.07.085.187a10.868 10.868 0 0 0 1.69 2.528C3.129 12.554 5.129 14 8 14zm1-4a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3zM8 9a1 1 0 0 1-1-1H5a3 3 0 0 0 3 3zM7 8a1 1 0 0 1 1-1V5a3 3 0 0 0-3 3zm1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3z" class="icon-dark"/>'
      }
    }, ["16"], "general-eye-open"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "general-eye-open",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" d="M10.5 8c0-1.833-.252-3.502-.664-4.75C9.38 1.866 8.726 1 8 1s-1.38.866-1.836 2.25C5.752 4.498 5.5 6.167 5.5 8q0 .45.02.885C6.317 8.96 7.147 9 8 9s1.683-.04 2.48-.115q.02-.435.02-.885" class="icon-light"/><path fill="#D0D2E0" d="M8 1a6.98 6.98 0 0 0-5.142 2.25A6.98 6.98 0 0 0 1 7.971c1.292.437 2.832.755 4.52.914Q5.5 8.45 5.5 8c0-1.833.252-3.502.664-4.75C6.62 1.866 7.274 1 8 1" class="icon-light"/><path fill="#D0D2E0" d="M1 8c0 1.833.705 3.502 1.858 4.75A6.98 6.98 0 0 0 8 15c-.726 0-1.38-.866-1.836-2.25-.345-1.044-.577-2.382-.644-3.865-1.688-.16-3.228-.477-4.52-.914z" class="icon-light"/><path fill="#D0D2E0" d="M6.164 12.75C6.62 14.134 7.274 15 8 15s1.38-.866 1.836-2.25c.345-1.044.577-2.382.644-3.865C9.683 8.96 8.853 9 8 9s-1.683-.04-2.48-.115c.067 1.483.3 2.821.644 3.865" class="icon-light"/><path fill="#D0D2E0" d="M8 15a6.98 6.98 0 0 0 5.142-2.25A6.98 6.98 0 0 0 15 8v-.029c-1.292.437-2.832.755-4.52.914-.067 1.483-.3 2.821-.644 3.865C9.38 14.134 8.726 15 8 15" class="icon-light"/><path fill="#D0D2E0" d="M13.142 3.25A6.98 6.98 0 0 0 8 1c.726 0 1.38.866 1.836 2.25.412 1.248.664 2.917.664 4.75q0 .45-.02.885c1.688-.159 3.228-.477 4.52-.914a6.97 6.97 0 0 0-1.858-4.721" class="icon-light"/><path fill="currentColor" d="m13.142 3.25-.735.679zm-10.284 0 .735.679zm0 9.5.735-.679zm10.284 0-.735-.679zm-3.306-9.5-.95.313zm-3.672 0 .95.313zm0 9.5-.95.313zm3.672 0 .95.313zM15 7.971l1-.004zm-14 0-1-.004zM8 2c1.742 0 3.31.741 4.407 1.929l1.47-1.358A7.98 7.98 0 0 0 8 0zM3.593 3.929A5.98 5.98 0 0 1 8 2V0a7.98 7.98 0 0 0-5.876 2.571zM0 8c0 2.095.806 4.003 2.124 5.429l1.469-1.358A5.98 5.98 0 0 1 2 8zm8 6a5.98 5.98 0 0 1-4.407-1.929l-1.47 1.358A7.98 7.98 0 0 0 8 16zm0 2a7.98 7.98 0 0 0 5.876-2.571l-1.469-1.358A5.98 5.98 0 0 1 8 14zm6-8c0 1.572-.603 3-1.593 4.071l1.47 1.358A7.98 7.98 0 0 0 16 8zm-2.5 0c0-1.915-.262-3.693-.714-5.063l-1.9.626C9.259 4.69 9.5 6.248 9.5 8zM8 2c-.067 0 .02-.041.238.23.21.263.44.704.649 1.333l1.899-.626c-.249-.754-.573-1.439-.986-1.955C9.395.475 8.793 0 8 0zm-2.786.937C4.762 4.307 4.5 6.085 4.5 8h2c0-1.752.242-3.311.613-4.437zm1.9.626c.207-.63.438-1.07.648-1.333C7.98 1.96 8.067 2 8 2V0c-.793 0-1.395.475-1.8.982-.413.516-.737 1.2-.986 1.955zM8 14c.067 0-.02.041-.238-.23-.21-.263-.44-.704-.649-1.333l-1.899.626c.249.754.573 1.439.986 1.955.405.507 1.007.982 1.8.982zm0 2c.793 0 1.395-.475 1.8-.982.413-.516.737-1.2.986-1.955l-1.9-.626c-.207.63-.438 1.07-.648 1.333-.217.271-.305.23-.238.23zm8-8v-.033l-2 .008V8zm0-.033a7.98 7.98 0 0 0-2.124-5.396L12.407 3.93A5.98 5.98 0 0 1 14 7.975zM2.124 2.571A7.98 7.98 0 0 0 0 7.967l2 .008A5.98 5.98 0 0 1 3.593 3.93zM0 7.967V8h2v-.025zM4.5 8q0 .472.02.93l1.999-.09A19 19 0 0 1 6.5 8zm.926 1.88C6.255 9.96 7.116 10 8 10V8q-1.235-.001-2.386-.11zM8 10c.884 0 1.745-.041 2.574-.12l-.188-1.99C9.621 7.962 8.822 8 8 8zm3.48-1.07q.02-.457.02-.93h-2q0 .428-.019.84zm-.906.95c1.752-.165 3.37-.496 4.746-.961l-.64-1.895c-1.207.408-2.67.712-4.294.866zM9.481 8.84c-.063 1.413-.284 2.658-.594 3.597l1.899.626c.38-1.149.623-2.58.693-4.133zm-3.867-.95c-1.625-.154-3.087-.458-4.294-.866L.68 8.919c1.377.465 2.994.797 4.746.962zM4.52 8.93c.07 1.553.314 2.985.693 4.133l1.9-.626c-.31-.94-.532-2.184-.595-3.597zM0 7.97 0 7.997l2 .004v-.029zM16 7.997v-.029l-2 .004v.029z" class="icon-dark"/>'
      },
      48: {
        body: '<path fill="#D0D2E0" d="M31 24h12c0-4.976-1.913-9.506-5.044-12.893-2.187 1.12-4.967 1.978-8.105 2.458C30.577 16.56 31 20.146 31 24" class="icon-light"/><path fill="#D0D2E0" d="M29.85 13.565c3.139-.48 5.92-1.337 8.106-2.458A18.95 18.95 0 0 0 24 5c2.446 0 4.6 3.406 5.85 8.565" class="icon-light"/><path fill="#D0D2E0" d="M24 5c-2.446 0-4.6 3.406-5.85 8.565 1.842.283 3.809.435 5.85.435s4.008-.152 5.85-.435C28.6 8.405 26.447 5 24 5" class="icon-light"/><path fill="#D0D2E0" d="M17 24h14c0-3.854-.423-7.44-1.15-10.435-1.842.283-3.809.435-5.85.435s-4.008-.152-5.85-.435C17.422 16.56 17 20.146 17 24" class="icon-light"/><path fill="#D0D2E0" d="M5 24h12c0-3.854.423-7.44 1.15-10.435-3.139-.48-5.92-1.337-8.106-2.458A18.93 18.93 0 0 0 5 24" class="icon-light"/><path fill="#D0D2E0" d="M18.15 13.565C19.4 8.405 21.553 5 24 5a18.95 18.95 0 0 0-13.956 6.107c2.186 1.12 4.967 1.978 8.105 2.458M18.15 34.435c-3.139.48-5.92 1.337-8.106 2.458A18.95 18.95 0 0 0 24 43c-2.446 0-4.6-3.406-5.85-8.565" class="icon-light"/><path fill="#D0D2E0" d="M17 24H5c0 4.976 1.913 9.506 5.044 12.893 2.186-1.12 4.967-1.978 8.105-2.458C17.423 31.44 17 27.854 17 24" class="icon-light"/><path fill="#D0D2E0" d="M31 24H17c0 3.854.423 7.44 1.15 10.435A39 39 0 0 1 24 34c2.041 0 4.008.153 5.85.435C30.578 31.44 31 27.854 31 24" class="icon-light"/><path fill="#D0D2E0" d="M18.15 34.435C19.4 39.595 21.553 43 24 43s4.6-3.406 5.85-8.565A39 39 0 0 0 24 34c-2.041 0-4.008.153-5.85.435" class="icon-light"/><path fill="#D0D2E0" d="M24 43a18.95 18.95 0 0 0 13.956-6.107c-2.187-1.12-4.967-1.978-8.105-2.458C28.599 39.595 26.446 43 24 43" class="icon-light"/><path fill="#D0D2E0" d="M43 24H31c0 3.854-.423 7.44-1.15 10.435 3.139.48 5.92 1.337 8.106 2.458A18.93 18.93 0 0 0 43 24" class="icon-light"/><path fill="currentColor" d="M24 14v1zm0 20v-1zm19-11H5v2h38zm-12 2h12v-2H31zm13-1a19.93 19.93 0 0 0-5.31-13.572l-1.468 1.358A17.93 17.93 0 0 1 42 24zm-6.5-13.783c-2.071 1.062-4.745 1.892-7.8 2.36l.302 1.977c3.22-.494 6.108-1.377 8.41-2.557zm-8.621 3.584C29.584 16.709 30 20.215 30 24h2c0-3.923-.43-7.59-1.177-10.67zM24 6c.723 0 1.61.51 2.542 1.904.912 1.363 1.727 3.381 2.337 5.897l1.944-.472c-.642-2.643-1.529-4.908-2.618-6.537C27.135 5.192 25.723 4 24 4zm5.7 6.577A38 38 0 0 1 24 13v2c2.09 0 4.108-.156 6.002-.446zM24 6a17.95 17.95 0 0 1 13.222 5.786l1.469-1.358A19.95 19.95 0 0 0 24 4zm0-2c-1.723 0-3.136 1.193-4.205 2.792-1.089 1.63-1.976 3.894-2.618 6.538l1.944.47c.61-2.515 1.425-4.533 2.337-5.896C22.39 6.51 23.278 6 24 6zm-6.002 10.554c1.894.29 3.911.446 6.002.446v-2c-1.992 0-3.908-.149-5.7-.423zM18 24c0-3.785.416-7.29 1.121-10.2l-1.944-.47C16.43 16.41 16 20.077 16 24zm-1 1h14v-2H17zM5 25h12v-2H5zm13.3-12.423c-3.055-.468-5.729-1.298-7.8-2.36l-.912 1.78c2.302 1.18 5.19 2.063 8.41 2.557zm-8.99-2.149A19.93 19.93 0 0 0 4 24h2c0-4.715 1.811-9.004 4.778-12.214zm1.468 1.358A17.95 17.95 0 0 1 24 6V4a19.95 19.95 0 0 0-14.69 6.428zM4 24a19.93 19.93 0 0 0 5.31 13.572l1.468-1.358A17.93 17.93 0 0 1 6 24zm6.5 13.783c2.071-1.062 4.745-1.892 7.8-2.36l-.302-1.977c-3.22.494-6.108 1.377-8.41 2.557zm8.621-3.584C18.416 31.291 18 27.785 18 24h-2c0 3.923.43 7.59 1.177 10.67zM24 42c-.723 0-1.61-.51-2.542-1.904-.912-1.363-1.727-3.381-2.337-5.897l-1.944.471c.642 2.644 1.529 4.909 2.618 6.538C20.865 42.808 22.277 44 24 44zm-5.7-6.577A38 38 0 0 1 24 35v-2c-2.09 0-4.108.156-6.002.446zM24 42a17.95 17.95 0 0 1-13.222-5.786L9.31 37.572A19.95 19.95 0 0 0 24 44zm0-7c1.992 0 3.908.149 5.7.423l.302-1.977A40 40 0 0 0 24 33zm6.823-.33C31.57 31.59 32 27.923 32 24h-2c0 3.785-.416 7.29-1.121 10.2zm-1.944-.47c-.61 2.515-1.425 4.533-2.337 5.896C25.61 41.49 24.722 42 24 42v2c1.723 0 3.136-1.193 4.205-2.792 1.089-1.63 1.976-3.894 2.618-6.538zM24 44a19.95 19.95 0 0 0 14.69-6.428l-1.468-1.358A17.95 17.95 0 0 1 24 42zm14.412-7.997c-2.302-1.18-5.19-2.063-8.41-2.557l-.303 1.977c3.056.468 5.73 1.298 7.801 2.36zM42 24c0 4.715-1.811 9.004-4.778 12.214l1.469 1.358A19.93 19.93 0 0 0 44 24z" class="icon-dark"/>'
      }
    }, ["16", "48"], "general-globe"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "general-globe",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" d="M3 3h3v3H3zM3 10h3v3H3zM10 3h3v3h-3zM10 10h3v3h-3z" class="icon-light"/><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M3 3h3v3H3zM3 10h3v3H3zM10 3h3v3h-3zM10 10h3v3h-3z" class="icon-dark"/>'
      }
    }, ["16"], "general-grid-2x2-medium"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "general-grid-2x2-medium",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" d="M3.5 3.5h3v3h-3zM3.5 9.5h3v3h-3zM9.5 3.5h3v3h-3zM9.5 9.5h3v3h-3z" class="icon-light"/><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M3.5 3.5h3v3h-3zM3.5 9.5h3v3h-3zM9.5 3.5h3v3h-3zM9.5 9.5h3v3h-3z" class="icon-dark"/>'
      }
    }, ["16"], "general-grid-2x2-small"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "general-grid-2x2-small",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" d="M2 2h4v4H2zM2 10h4v4H2zM10 2h4v4h-4zM10 10h4v4h-4z" class="icon-light" style="opacity:.35"/><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M2 2h4v4H2zM2 10h4v4H2zM10 2h4v4h-4zM10 10h4v4h-4z" class="icon-dark"/>'
      },
      24: {
        body: '<path fill="#D0D2E0" d="M3 3h7v7H3zM3 14h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7z" class="icon-light" style="opacity:.35"/><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M3 3h7v7H3zM3 14h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7z" class="icon-dark"/>'
      }
    }, ["16", "24"], "general-grid-2x2"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "general-grid-2x2",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="currentColor" d="M7 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0M11 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0M11 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0M11 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0M11 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0" class="icon-dark"/>'
      }
    }, ["16"], "general-handle-vertical"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "general-handle-vertical",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" fill-rule="evenodd" d="M8 1a7 7 0 0 1 7 7h-4a3 3 0 0 0-3-3zM5 8H1a7 7 0 0 0 7 7v-4a3 3 0 0 1-3-3" class="icon-light" clip-rule="evenodd"/><path stroke="currentColor" stroke-width="2" d="M15 8a7 7 0 0 1-7 7m7-7a7 7 0 0 0-7-7m7 7h-4m-3 7a7 7 0 0 1-7-7m7 7v-4M1 8a7 7 0 0 1 7-7M1 8h4m3-7v4m3 3a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m0 6a3 3 0 0 1-3-3m0 0a3 3 0 0 1 3-3" class="icon-dark"/>'
      }
    }, ["16"], "general-life-ring"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "general-life-ring",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" d="M10 4v10h4a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z" class="icon-light"/><path stroke="currentColor" stroke-width="2" d="M10 14H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v2m0 10V4m0 10h4a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-4" class="icon-dark"/><path fill="currentColor" d="M3 3.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM12 6.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0zM12 9.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0zM3 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM3 9.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM6 3.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM6 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM6 9.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" class="icon-dark"/>'
      }
    }, ["16"], "general-office-building"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "general-office-building",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      12: {
        body: '<path fill="#D0D2E0" d="M9.55 2.45c1.933 1.934 1.933 5.166 0 7.1s-5.166 1.933-7.1 0-1.933-5.166 0-7.1 5.166-1.933 7.1 0" class="icon-light"/><path stroke="currentColor" stroke-width="2" d="m6 6 3.55-3.55M6 6 2.45 2.45M6 6l3.55 3.55M6 6 2.45 9.55m7.1-7.1c1.933 1.934 1.933 5.166 0 7.1m0-7.1C7.616.517 4.384.517 2.45 2.45m0 0c-1.933 1.934-1.933 5.166 0 7.1m7.1 0c-1.934 1.933-5.166 1.933-7.1 0" class="icon-dark"/>'
      },
      16: {
        body: '<path fill="#D0D2E0" d="M12.97 3.03c2.707 2.708 2.707 7.232 0 9.94-2.708 2.707-7.232 2.707-9.94 0-2.707-2.708-2.707-7.232 0-9.94 2.708-2.707 7.232-2.707 9.94 0" class="icon-light"/><path stroke="currentColor" stroke-width="2" d="m8 8 4.97-4.97M8 8 3.03 3.03M8 8l4.97 4.97M8 8l-4.97 4.97m9.94-9.94c2.707 2.708 2.707 7.232 0 9.94m0-9.94C10.261.324 5.737.324 3.03 3.03m0 0c-2.707 2.708-2.707 7.232 0 9.94m9.94 0c-2.708 2.707-7.232 2.707-9.94 0" class="icon-dark"/>'
      },
      24: {
        body: '<path fill="#D0D2E0" d="M19.1 4.9c3.867 3.869 3.867 10.332 0 14.2-3.869 3.867-10.331 3.867-14.2 0-3.867-3.869-3.867-10.331 0-14.2 3.869-3.867 10.332-3.867 14.2 0" class="icon-light"/><path stroke="currentColor" stroke-width="2" d="m12 12 7.1-7.1M12 12 4.9 4.9M12 12l7.1 7.1M12 12l-7.1 7.1M19.1 4.9c3.867 3.869 3.867 10.332 0 14.2m0-14.2C15.23 1.034 8.768 1.034 4.9 4.9m0 0c-3.867 3.869-3.867 10.332 0 14.2m14.2 0c-3.869 3.867-10.331 3.867-14.2 0" class="icon-dark"/>'
      },
      48: {
        body: '<path fill="#D0D2E0" d="M38.198 9.802c7.736 7.735 7.736 20.66 0 28.396s-20.66 7.736-28.396 0-7.736-20.66 0-28.396 20.66-7.736 28.396 0" class="icon-light"/><path stroke="currentColor" stroke-width="2" d="M24 24 38.198 9.802M24 24 9.802 9.802M24 24l14.198 14.198M24 24 9.802 38.198M38.198 9.802c7.736 7.735 7.736 20.66 0 28.396m0-28.396c-7.735-7.736-20.66-7.736-28.396 0m0 0c-7.736 7.735-7.736 20.66 0 28.396m28.396 0c-7.735 7.736-20.66 7.736-28.396 0" class="icon-dark"/>'
      }
    }, ["12", "16", "24", "48"], "general-placeholder"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "general-placeholder",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path d="M3.5 9.5 1 11l4 4 1.5-2.5z" class="icon-light"/><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="m7.5 13.5-1-1m1 1 1 1 3-3v-2m-4 4 4-4m-9-1 1 1m-1-1-1-1 3-3h2m-4 4 4-4m-3 5L1 11l4 4 1.5-2.5m-3-3 3 3m5-3 1.621-1.621A3 3 0 0 0 14 5.757V2h-3.757a3 3 0 0 0-2.122.879L6.5 4.5" class="icon-dark"/><path stroke="currentColor" stroke-linecap="round" d="M9 11.5 4.5 7" class="icon-dark"/><circle cx="10.5" cy="5.5" r="1" fill="currentColor" class="icon-dark"/>'
      },
      24: {
        body: '<path d="m6 13.5-3 2L8.5 21l2-3zM3.635 11.135 5 12.5l5.23-5.23H7.5zM11.5 19l1.365 1.365 3.866-3.865v-2.73z" class="icon-light"/><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M16.73 13.77v2.73l-3.865 3.865L11.5 19m5.23-5.23L11.5 19m5.23-5.23 3.098-3.098A4 4 0 0 0 21 7.843V3h-4.843a4 4 0 0 0-2.829 1.172l-3.097 3.097m0 0H7.5l-3.865 3.866L5 12.5m5.23-5.23L5 12.5m0 0 6.5 6.5M6 13.5l-3 2L8.5 21l2-3z" class="icon-dark"/><path fill="#1B1E2E" d="M.146 19.646a.5.5 0 0 0 .708.708zm0 3.5a.5.5 0 0 0 .708.708zm3.5 0a.5.5 0 0 0 .708.708zm-1.5-5.5-2 2 .708.708 2-2zm1.75 1.75-3.75 3.75.708.708 3.75-3.75zm1.75 1.75-2 2 .708.708 2-2z" opacity=".4"/><path stroke="currentColor" stroke-linecap="round" d="m13.5 16.5-6-6" class="icon-dark"/><circle cx="16.5" cy="7.5" r="1.5" stroke="currentColor" class="icon-dark-stroke icon-light-fill"/>'
      }
    }, ["16", "24"], "general-rocket"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "general-rocket",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<circle cx="8" cy="8" r="6" stroke="#D0D2E0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 8a6 6 0 0 0-6-6" class="icon-dark"/>'
      }
    }, ["16"], "loading"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "loading",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="currentColor" d="M10 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0M10 14a2 2 0 1 1-4 0 2 2 0 0 1 4 0" class="icon-dark"/>'
      }
    }, ["16"], "menu-dots-vertical"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "menu-dots-vertical",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 3H8m6 5H2m0 0 2.5-2.5M2 8l2.5 2.5M14 13H8" class="icon-dark"/>'
      }
    }, ["16"], "menu-expand-left"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "menu-expand-left",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 3h6M2 8h12m0 0-2.5-2.5M14 8l-2.5 2.5M2 13h6" class="icon-dark"/>'
      }
    }, ["16"], "menu-expand-right"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "menu-expand-right",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      24: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 6h22M1 12h14M1 18h18" class="icon-dark"/>'
      }
    }, ["24"], "menu-hamburger"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "menu-hamburger",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      24: {
        body: '<circle cx="12" cy="12" r="12" fill="#D0D2E0" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17V8h-2L9.5 9.5" class="icon-dark"/>'
      }
    }, ["24"], "number-1"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "number-1",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      24: {
        body: '<circle cx="12" cy="12" r="12" fill="#D0D2E0" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 16H9l4.5-4c2-2 1-5-1.5-5S9 9.5 9 9.5" class="icon-dark"/>'
      }
    }, ["24"], "number-2"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "number-2",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      24: {
        body: '<circle cx="12" cy="12" r="12" fill="#D0D2E0" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 15c.5 3 5.5 3 6 0 0-2.5-3-3-3-3l3-4H9" class="icon-dark"/>'
      }
    }, ["24"], "number-3"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "number-3",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      24: {
        body: '<circle cx="12" cy="12" r="12" fill="#D0D2E0" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 17V8h-2l-3 6h7" class="icon-dark"/>'
      }
    }, ["24"], "number-4"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "number-4",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      24: {
        body: '<circle cx="12" cy="12" r="12" fill="#D0D2E0" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 8h-4l-.5 4h2c1.657 0 3 1.12 3 2.5S13.657 17 12 17c-.982 0-1.853-.393-2.4-1" class="icon-dark"/>'
      }
    }, ["24"], "number-5"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "number-5",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      24: {
        body: '<circle cx="12" cy="12" r="12" fill="#D0D2E0" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 6 8 18m5 0 3-12m2 4H7m10 4H6" class="icon-dark"/>'
      }
    }, ["24"], "number-octothorpe"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "number-octothorpe",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      48: {
        body: '<path fill="#D0D2E0" d="M40 5H10a2 2 0 0 0-2 2v28h32z" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M40 43h-1M8 35v6a2 2 0 0 0 2 2v0m-2-8V7a2 2 0 0 1 2-2v0M8 35h2m0-30h30v30h-1M10 5v30m0 0v8m0-8h29m-29 8h29m0-8s-1 4 0 8M21 17l-3 3 3 3m8-6 3 3-3 3m-5.5 2.5 3-11" class="icon-dark"/><path fill="#69D3A7" d="M14 39h8v8l-4-1.714L14 47z" class="icon-light-secondary"/><path fill="#00814D" d="M14 39v-1h-1v1zm8 0h1v-1h-1zm0 8-.394.92A1 1 0 0 0 23 47zm-8 0h-1a1 1 0 0 0 1.394.92zm4-1.714.394-.92a1 1 0 0 0-.788 0zM14 40h8v-2h-8zm7-1v8h2v-8zm-6 8v-8h-2v8zm7.394-.92-4-1.713-.788 1.838 4 1.714zm-4.788-1.713-4 1.714.788 1.838 4-1.714z" class="icon-dark-secondary"/>'
      }
    }, ["48"], "object-book-code"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "object-book-code",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" d="M13 2H4a1 1 0 0 0-1 1v8h10z" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 11V2H4m9 9H4m9 0v3H4m-1-3v2a1 1 0 0 0 1 1v0m-1-3V3a1 1 0 0 1 1-1v0m-1 9h1m0-9v9m0 0v3m6-9H7" class="icon-dark"/>'
      },
      24: {
        body: '<path fill="#D0D2E0" d="M20 3H5a1 1 0 0 0-1 1v13h16z" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 17V3H5m15 14H5m15 0v4H5m-1-4v3a1 1 0 0 0 1 1v0m-1-4V4a1 1 0 0 1 1-1v0M4 17h1M5 3v14m0 0v4M16 7H9m0 3h6" class="icon-dark"/>'
      },
      48: {
        body: '<path fill="#D0D2E0" d="M40 5H10a2 2 0 0 0-2 2v28h32z" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M40 43h-1M8 35v6a2 2 0 0 0 2 2v0m-2-8V7a2 2 0 0 1 2-2v0M8 35h2m0-30h30v30h-1M10 5v30m0 0v8m0-8h29m-29 8h29M16 17h13m10 18s-1 4 0 8m-5-32H16v2h18z" class="icon-dark"/><path fill="#69D3A7" d="M14 39h8v8l-4-1.714L14 47z" class="icon-light-secondary"/><path fill="#00814D" d="M14 39v-1h-1v1zm8 0h1v-1h-1zm0 8-.394.92A1 1 0 0 0 23 47zm-8 0h-1a1 1 0 0 0 1.394.92zm4-1.714.394-.92a1 1 0 0 0-.788 0zM14 40h8v-2h-8zm7-1v8h2v-8zm-6 8v-8h-2v8zm7.394-.92-4-1.713-.788 1.838 4 1.714zm-4.788-1.713-4 1.714.788 1.838 4-1.714z" class="icon-dark-secondary"/>'
      }
    }, ["16", "24", "48"], "object-book"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "object-book",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" fill-rule="evenodd" d="M11 2a2 2 0 0 1 2 2v10l-5-2-5 2V4a2 2 0 0 1 2-2zM8.388 6.515 8 5.049l-.388 1.466-1.514-.084 1.274.822-.548 1.414L8 7.709l1.176.958-.548-1.414 1.274-.822z" class="icon-light" clip-rule="evenodd"/><path fill="currentColor" d="m13 14-.371.928A1 1 0 0 0 14 14zm-5-2 .371-.928a1 1 0 0 0-.742 0zm-5 2H2a1 1 0 0 0 1.371.928zm5-8.951.967-.256a1 1 0 0 0-1.934 0zm.388 1.466-.967.255a1 1 0 0 0 1.022.743zm1.514-.084.542.84a1 1 0 0 0-.597-1.839zm-1.274.822-.542-.84a1 1 0 0 0-.39 1.2zm.548 1.414-.632.775a1 1 0 0 0 1.564-1.137zM8 7.709l.632-.776a1 1 0 0 0-1.264 0zm-1.176.958-.932-.362a1 1 0 0 0 1.564 1.137zm.548-1.414.933.36a1 1 0 0 0-.39-1.2zM6.098 6.43l.055-.999a1 1 0 0 0-.597 1.839zm1.514.084-.055.998a1 1 0 0 0 1.022-.743zM12 4v10h2V4zm1.371 9.072-5-2-.742 1.857 5 2zm-5.742-2-5 2 .742 1.857 5-2zM5 3h6V1H5zM4 14V4H2v10zm3.033-8.696.388 1.466 1.934-.511-.388-1.466zm1.41 2.21 1.515-.085-.111-1.997-1.515.084zM9.36 5.59l-1.274.822L9.17 8.093l1.274-.822zM7.695 7.614l.548 1.414 1.865-.723-.548-1.414zm2.112.277-1.175-.958-1.264 1.55 1.176.959zm-2.439-.958-1.175.958 1.263 1.55 1.176-.957zm.389 2.095.548-1.414L6.44 6.89l-.548 1.414zm.157-2.616L6.64 5.59 5.556 7.271l1.274.822zM6.042 7.43l1.515.084.11-1.997-1.514-.084zM8.58 6.77l.388-1.466-1.934-.511-.388 1.466zM5 1a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1zm9 3a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1z" class="icon-dark"/>'
      },
      24: {
        body: '<path fill="#D0D2E0" fill-rule="evenodd" d="M17 3a3 3 0 0 1 3 3v15l-8-3-8 3V6a3 3 0 0 1 3-3zm-4.418 6.772L12 7.572l-.582 2.2-2.271-.126 1.912 1.233L10.237 13 12 11.563 13.763 13l-.822-2.121 1.912-1.233z" class="icon-light" clip-rule="evenodd"/><path fill="currentColor" d="m20 21-.351.936A1 1 0 0 0 21 21zm-8-3 .351-.936a1 1 0 0 0-.702 0zm-8 3H3a1 1 0 0 0 1.351.936zm8-13.427.967-.256a1 1 0 0 0-1.934 0zm.582 2.199-.967.256a1 1 0 0 0 1.022.742zm2.271-.126.542.84a1 1 0 0 0-.597-1.839zm-1.912 1.233-.542-.84a1 1 0 0 0-.39 1.201zM13.763 13l-.631.775a1 1 0 0 0 1.564-1.136zM12 11.563l.632-.775a1 1 0 0 0-1.264 0zM10.237 13l-.933-.361a1 1 0 0 0 1.564 1.136zm.822-2.121.932.361a1 1 0 0 0-.39-1.201zM9.147 9.646l.055-.999a1 1 0 0 0-.597 1.84zm2.271.126-.055.999a1 1 0 0 0 1.022-.743zM19 6v15h2V6zm1.351 14.064-8-3-.702 1.872 8 3zm-8.702-3-8 3 .702 1.872 8-3zM7 4h10V2H7zM5 21V6H3v15zm6.033-13.171.582 2.199 1.934-.512-.582-2.199zm1.604 2.942 2.272-.127-.111-1.997-2.271.127zm1.674-1.965L12.4 10.039l1.085 1.68 1.911-1.233zM12.01 11.24l.822 2.121 1.865-.722-.822-2.121zm2.386.985-1.763-1.437-1.264 1.55 1.764 1.437zm-3.027-1.437-1.763 1.437 1.263 1.55 1.764-1.437zm-.199 2.573.822-2.12-1.865-.723-.822 2.12zm.431-3.322L9.69 8.806l-1.084 1.68 1.911 1.233zm-2.509.605 2.272.127.11-1.997-2.27-.127zm3.294-.616.582-2.2-1.934-.51-.582 2.198zM7 2a4 4 0 0 0-4 4h2a2 2 0 0 1 2-2zm14 4a4 4 0 0 0-4-4v2a2 2 0 0 1 2 2z" class="icon-dark"/>'
      }
    }, ["16", "24"], "object-bookmark"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "object-bookmark",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      48: {
        body: '<path fill="#D0D2E0" fill-rule="evenodd" d="M43 25.162 28.5 33 24 28.487V47l19-9.744z" class="icon-light" clip-rule="evenodd"/><path fill="#D0D2E0" d="M24 9 5 18.744l19 9.743 19-9.743z" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M24 47 5 37.256V25.162M24 47l19-9.744V25.162M24 47V28.487M24 9 5 18.744M24 9l19 9.744M24 9l4-4 19 9.5-4 4.244M24 9l-4-4-19 9.5 4 4.244m0 0 19 9.743M5 18.744 1 23l4 2.162m38-6.418-19 9.743m19-9.743L47 23l-4 2.162m-19 3.325L19.5 33 5 25.162m19 3.325L28.5 33 43 25.162" class="icon-dark"/><path fill="#1FA971" stroke="#00814D" stroke-linejoin="round" stroke-width="2" d="m18 7 1.131 2.869L22 11l-2.869 1.131L18 15l-1.131-2.869L14 11l2.869-1.131zM27 1l.849 2.151L30 4l-2.151.849L27 7l-.849-2.151L24 4l2.151-.849zM28 12l1.414 3.586L33 17l-3.586 1.414L28 22l-1.414-3.586L23 17l3.586-1.414z" class="icon-dark-secondary-stroke icon-light-secondary-fill"/>'
      }
    }, ["48"], "object-box-open"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "object-box-open",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" d="M14.5 11.133V4.866a.7.7 0 0 0-.101-.362L8 8v7c.12 0 .242-.03.35-.09l5.779-3.156a.71.71 0 0 0 .371-.621" class="icon-light"/><path fill="#D0D2E0" d="M1.871 11.754 7.65 14.91c.11.06.23.09.351.09V8L1.601 4.504a.7.7 0 0 0-.101.362v6.267c0 .258.142.495.371.62" class="icon-light"/><path fill="#D0D2E0" d="M7.65 1.089 1.87 4.246a.7.7 0 0 0-.27.258L8 8l6.399-3.496a.7.7 0 0 0-.27-.258L8.35 1.089a.73.73 0 0 0-.702 0" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 8 6.399-3.496M8 8v7m0-7L1.601 4.504m12.798 0a.7.7 0 0 1 .101.362v6.267a.71.71 0 0 1-.371.62L8.35 14.91c-.11.06-.23.09-.351.09m6.399-10.496a.7.7 0 0 0-.27-.258L8.35 1.089a.73.73 0 0 0-.702 0L1.871 4.246a.7.7 0 0 0-.27.258M8 15a.73.73 0 0 1-.35-.09L1.87 11.754a.71.71 0 0 1-.371-.621V4.866a.7.7 0 0 1 .101-.362" class="icon-dark"/>'
      },
      24: {
        body: '<path fill="#D0D2E0" d="M21 16.412V7.588a1 1 0 0 0-.14-.51L12 12v9.856a1 1 0 0 0 .486-.126l8-4.444a1 1 0 0 0 .514-.874M3.514 17.286l8 4.444a1 1 0 0 0 .486.126V12L3.14 7.078a1 1 0 0 0-.14.51v8.824a1 1 0 0 0 .514.874" class="icon-light"/><path fill="#D0D2E0" d="m11.514 2.27-8 4.444a1 1 0 0 0-.374.364L12 12l8.86-4.922a1 1 0 0 0-.374-.364l-8-4.444a1 1 0 0 0-.972 0" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 12 8.86-4.922M12 12v9.856M12 12 3.14 7.078m17.72 0a1 1 0 0 1 .14.51v8.824a1 1 0 0 1-.514.874l-8 4.444a1 1 0 0 1-.486.126m8.86-14.778a1 1 0 0 0-.374-.364l-8-4.444a1 1 0 0 0-.972 0l-8 4.444a1 1 0 0 0-.374.364M12 21.856a1 1 0 0 1-.486-.126l-8-4.444A1 1 0 0 1 3 16.412V7.588a1 1 0 0 1 .14-.51" class="icon-dark"/>'
      }
    }, ["16", "24"], "object-box"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "object-box",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" fill-rule="evenodd" d="M2.5 14A1.5 1.5 0 0 1 1 12.5V7l7 3 7-3v5.5a1.5 1.5 0 0 1-1.5 1.5z" class="icon-light" clip-rule="evenodd"/><path fill="#D0D2E0" d="M9 9.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" class="icon-light"/><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M11 4H5m6 0V2.5A1.5 1.5 0 0 0 9.5 1h-3A1.5 1.5 0 0 0 5 2.5V4m6 0h2.5A1.5 1.5 0 0 1 15 5.5V7M5 4H2.5A1.5 1.5 0 0 0 1 5.5V7m0 0v5.5A1.5 1.5 0 0 0 2.5 14h11a1.5 1.5 0 0 0 1.5-1.5V7M1 7l7 3 7-3M9 9.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" class="icon-dark"/>'
      }
    }, ["16"], "object-briefcase"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "object-briefcase",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" fill-rule="evenodd" d="M6 6a2 2 0 0 0-2 2v4s1 3 4 3 4-3 4-3V8a2 2 0 0 0-2-2z" class="icon-light" clip-rule="evenodd"/><path fill="#D0D2E0" d="M6 6h4q.26 0 .5.063V3.5a2.5 2.5 0 0 0-5 0v2.563Q5.74 6.001 6 6" class="icon-light"/><path stroke="#1B1E2E" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12s-1 3-4 3-4-3-4-3m8 0v-2m0 2a3 3 0 0 1 3 3M4 12v-2m0 2a3 3 0 0 0-3 3m11-5h3m-3 0V8m-8 2H1m3 0V8m8 0a2 2 0 0 0-2-2m2 2a3 3 0 0 0 3-3M4 8a3 3 0 0 1-3-3m3 3a2 2 0 0 1 2-2m4 0H6m4 0q.26 0 .5.063V3.5a2.5 2.5 0 0 0-5 0v2.563Q5.74 6.001 6 6" class="icon-dark"/>'
      }
    }, ["16"], "object-bug-large"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "object-bug-large",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" fill-rule="evenodd" d="M6 7H5v4s1 2 3 2 3-2 3-2V7H6" class="icon-light" clip-rule="evenodd"/><path fill="#D0D2E0" d="M6 5v2h4V5a2 2 0 1 0-4 0" class="icon-light"/><path fill="currentColor" d="M13 10a1 1 0 1 0 0-2zM3 8a1 1 0 0 0 0 2zm11-3a1 1 0 1 0-2 0zM4 5a1 1 0 0 0-2 0zm8 8a1 1 0 1 0 2 0zM2 13a1 1 0 1 0 2 0zm3-5h1V6H5zm2-1V5H5v2zM6 8h4V6H6zm4 0h1V6h-1zM9 5v2h2V5zm1 2v2h2V7zm1 3h2V8h-2zM6 9V7H4v2zM5 8H3v2h2zm5 1v2h2V9zm1 2-.894-.448v-.002l.002-.001v-.002l-.002.005a2 2 0 0 1-.126.206 3.6 3.6 0 0 1-.437.535C9.152 11.683 8.64 12 8 12v2c1.359 0 2.348-.684 2.957-1.293a5.6 5.6 0 0 0 .914-1.214l.015-.029.005-.01.002-.004v-.001l.001-.001zm-5 0V9H4v2zm2 1c-.641 0-1.152-.316-1.543-.707a3.6 3.6 0 0 1-.563-.741l-.002-.005v.002l.001.001v.002h.001L5 11l-.894.448.001.002.002.004.005.01a2 2 0 0 0 .065.118 5.555 5.555 0 0 0 .864 1.125C5.652 13.317 6.64 14 8 14zm0-8a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3zM7 5a1 1 0 0 1 1-1V2a3 3 0 0 0-3 3zm5 0a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3zM5 6a1 1 0 0 1-1-1H2a3 3 0 0 0 3 3zm6 6a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3zm-7 1a1 1 0 0 1 1-1v-2a3 3 0 0 0-3 3z" class="icon-dark"/>'
      }
    }, ["16"], "object-bug-small"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "object-bug-small",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      24: {
        body: '<path fill="#D0D2E0" d="M15 10V7a3 3 0 1 0-6 0v3zM15 10H9a3.16 3.16 0 0 0-2 2v4a4.564 4.564 0 0 0 4.014 3.89l.685.076q.301.034.602 0l.685-.076A4.564 4.564 0 0 0 17 16v-4a3.16 3.16 0 0 0-2-2" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 12v2m0-2 .265-.088A4 4 0 0 0 20 8.117V7m-3 5v0a3.16 3.16 0 0 0-2-2v0m0 0V7a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v3m6 0H9m0 0v0a3.16 3.16 0 0 0-2 2v0m0 0v2m0-2-.265-.088A4 4 0 0 1 4 8.117V7m13 7h3m-3 0v2M7 14H4m3 0v2m10 0v0a4.564 4.564 0 0 1-4.014 3.89l-.685.076q-.301.034-.602 0l-.685-.076A4.564 4.564 0 0 1 7 16v0m10 0 .265.088A4 4 0 0 1 20 19.883V21M7 16l-.265.088A4 4 0 0 0 4 19.883V21" class="icon-dark"/>'
      }
    }, ["24"], "object-bug"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "object-bug",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="currentColor" d="M10 3a1 1 0 1 0 0 2zm0 8a1 1 0 1 0 0 2zM6 5a1 1 0 0 0 0-2zm0 8a1 1 0 1 0 0-2zM5 7a1 1 0 0 0 0 2zm6 2a1 1 0 1 0 0-2zm-1-4h1V3h-1zm1 6h-1v2h1zM5 5h1V3H5zm1 6H5v2h1zM5 9h6V7H5zM2 8a3 3 0 0 1 3-3V3a5 5 0 0 0-5 5zM0 8a5 5 0 0 0 5 5v-2a3 3 0 0 1-3-3zm14 0a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5zm2 0a5 5 0 0 0-5-5v2a3 3 0 0 1 3 3z" class="icon-dark"/>'
      }
    }, ["16"], "object-chain-link"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "object-chain-link",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" d="M12.5 12a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-4L7.146 6.354a.5.5 0 0 1-.353.146H3v5a.5.5 0 0 0 .5.5z" class="icon-light"/><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M8.5 5 7.146 3.646a.5.5 0 0 0-.353-.146H3.5A.5.5 0 0 0 3 4v2.5M8.5 5h4a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-5M8.5 5 7.146 6.354a.5.5 0 0 1-.353.146H3" class="icon-dark"/>'
      }
    }, ["16"], "object-folder-dark-small"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "object-folder-dark-small",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" d="M14 13a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H9L7.293 4.707A1 1 0 0 1 6.586 5H1v7a1 1 0 0 0 1 1z" class="icon-light"/><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M9 3 7.293 1.293A1 1 0 0 0 6.586 1H2a1 1 0 0 0-1 1v3m8-2h5a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5m8-2L7.293 4.707A1 1 0 0 1 6.586 5H1" class="icon-dark"/>'
      }
    }, ["16"], "object-folder-dark"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "object-folder-dark",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" fill-rule="evenodd" d="M7.293 2.293A1 1 0 0 0 6.586 2H2a1 1 0 0 0-1 1v3h5.586a1 1 0 0 0 .707-.293L9 4z" class="icon-light" clip-rule="evenodd"/><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M9 4 7.293 2.293A1 1 0 0 0 6.586 2H2a1 1 0 0 0-1 1v3m8-2h5a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6m8-2L7.293 5.707A1 1 0 0 1 6.586 6H1" class="icon-dark"/>'
      },
      24: {
        body: '<path fill="#D0D2E0" fill-rule="evenodd" d="M10.293 4.293A1 1 0 0 0 9.586 4H4a1 1 0 0 0-1 1v3h6.586a1 1 0 0 0 .707-.293L12 6z" class="icon-light" clip-rule="evenodd"/><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="m12 6-1.707-1.707A1 1 0 0 0 9.586 4H4a1 1 0 0 0-1 1v3m9-2h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8m9-2-1.707 1.707A1 1 0 0 1 9.586 8H3" class="icon-dark"/>'
      }
    }, ["16", "24"], "object-folder-light"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "object-folder-light",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" fill-rule="evenodd" d="M6.5 1h3a.5.5 0 0 1 .5.5v1.375a5.5 5.5 0 0 1 1.437.831l1.192-.688a.5.5 0 0 1 .683.183l1.5 2.598a.5.5 0 0 1-.183.683l-1.191.688a5.5 5.5 0 0 1 0 1.66l1.191.688a.5.5 0 0 1 .183.683l-1.5 2.598a.5.5 0 0 1-.683.183l-1.192-.688c-.43.345-.914.627-1.437.831V14.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1.375a5.5 5.5 0 0 1-1.437-.831l-1.192.688a.5.5 0 0 1-.683-.183l-1.5-2.598a.5.5 0 0 1 .183-.683l1.191-.688a5.5 5.5 0 0 1 0-1.66l-1.191-.688a.5.5 0 0 1-.183-.683l1.5-2.598a.5.5 0 0 1 .683-.183l1.192.688c.43-.345.914-.627 1.437-.831V1.5a.5.5 0 0 1 .5-.5M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" class="icon-light" clip-rule="evenodd"/><path fill="currentColor" d="m13.312 3.201-.866.5zm1.5 2.598.866-.5zm-12.124 7-.866.5zm-1.5-2.598.866-.5zm0-4.402.866.5zm1.5-2.598.866.5zm12.124 7 .866.5zm-1.5 2.598-.866-.5zM6 2.875l.364.931A1 1 0 0 0 7 2.875zm-1.437.831-.5.866a1 1 0 0 0 1.125-.086zM3.37 3.018l-.5.866zM2.562 7.17l.989.15a1 1 0 0 0-.489-1.016zm-1.191-.688.5-.866zM2.562 8.83l.5.866a1 1 0 0 0 .489-1.016zm-1.191.688.5.866zm3.192 2.776.625-.78a1 1 0 0 0-1.125-.086zm-1.192.688.5.866zM6 13.125h1a1 1 0 0 0-.636-.931zm4 0-.364-.931a1 1 0 0 0-.636.931zm1.437-.831.5-.866a1 1 0 0 0-1.125.086zm1.192.688-.5.866zm.809-4.152-.989-.15a1 1 0 0 0 .489 1.016zm1.191.688.5-.866zm0-3.036-.5-.866zm-1.191.688-.5-.866a1 1 0 0 0-.489 1.016zm-2-3.464-.626.78a1 1 0 0 0 1.125.086zm1.191-.688-.5-.866zM10 2.875H9a1 1 0 0 0 .636.931zM6.5 2h3V0h-3zm3 12h-3v2h3zm2.946-10.299 1.5 2.598 1.732-1-1.5-2.598zm-8.892 8.598-1.5-2.598-1.732 1 1.5 2.598zm-1.5-6 1.5-2.598-1.732-1-1.5 2.598zm11.892 3.402-1.5 2.598 1.732 1 1.5-2.598zM7 2.875V1.5H5v1.375zM5.188 4.486a4.5 4.5 0 0 1 1.176-.68l-.728-1.863a6.5 6.5 0 0 0-1.699.983zm-2.317-.602 1.192.688 1-1.732-1.192-.688zM3.5 8q0-.349.051-.68l-1.978-.3Q1.5 7.501 1.5 8zm-.438-1.696-1.191-.688-1 1.732 1.191.688zm.489 2.376A4.5 4.5 0 0 1 3.5 8h-2q0 .499.073.98zm-1.68 1.704 1.191-.688-1-1.732-1.191.688zm2.192 1.044-1.192.688 1 1.732 1.192-.688zm2.3.766a4.5 4.5 0 0 1-1.175-.68l-1.25 1.56c.508.408 1.08.741 1.698.982zM7 14.5v-1.375H5V14.5zm2-1.375V14.5h2v-1.375zm1.812-1.611a4.5 4.5 0 0 1-1.176.68l.728 1.862a6.5 6.5 0 0 0 1.699-.982zm2.317.602-1.192-.688-1 1.732 1.192.688zM12.5 8q0 .349-.051.68l1.978.3q.073-.481.073-.98zm.438 1.696 1.191.688 1-1.732-1.191-.688zm1.191-4.08-1.191.688 1 1.732 1.191-.688zM12.45 7.32q.051.331.051.68h2q0-.499-.073-.98zm-.512-2.748 1.192-.688-1-1.732-1.192.688zm-2.3-.766c.426.167.822.398 1.175.68l1.25-1.56a6.5 6.5 0 0 0-1.698-.983zM9 1.5v1.375h2V1.5zm3.446 10.799a.5.5 0 0 1 .683-.183l-1 1.732a1.5 1.5 0 0 0 2.05-.549zm3.232-1.598a1.5 1.5 0 0 0-.549-2.05l-1 1.733a.5.5 0 0 1-.183-.683zm-12.124-7a.5.5 0 0 1-.683.183l1-1.732a1.5 1.5 0 0 0-2.05.549zM.322 5.299a1.5 1.5 0 0 0 .549 2.05l1-1.733a.5.5 0 0 1 .183.683zm1.732 4.402a.5.5 0 0 1-.183.683l-1-1.732A1.5 1.5 0 0 0 .32 10.7zm-.232 3.598a1.5 1.5 0 0 0 2.049.55l-1-1.733a.5.5 0 0 1 .683.183zm12.124-7a.5.5 0 0 1 .183-.683l1 1.732a1.5 1.5 0 0 0 .55-2.049zm.232-3.598a1.5 1.5 0 0 0-2.049-.55l1 1.733a.5.5 0 0 1-.683-.183zM6.5 14a.5.5 0 0 1 .5.5H5A1.5 1.5 0 0 0 6.5 16zm3 2a1.5 1.5 0 0 0 1.5-1.5H9a.5.5 0 0 1 .5-.5zm0-14a.5.5 0 0 1-.5-.5h2A1.5 1.5 0 0 0 9.5 0zm-3-2A1.5 1.5 0 0 0 5 1.5h2a.5.5 0 0 1-.5.5zM9 8a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3zM8 9a1 1 0 0 1-1-1H5a3 3 0 0 0 3 3zM7 8a1 1 0 0 1 1-1V5a3 3 0 0 0-3 3zm1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3z" class="icon-dark"/>'
      },
      24: {
        body: '<path fill="#D0D2E0" fill-rule="evenodd" stroke="currentColor" stroke-width="2" d="M9.794 3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v1.417c0 .221.146.414.355.489.804.287 1.54.717 2.177 1.259a.52.52 0 0 0 .6.062l1.23-.71a.5.5 0 0 1 .683.184l1.5 2.598a.5.5 0 0 1-.184.683l-1.227.709a.52.52 0 0 0-.247.55 7 7 0 0 1 0 2.518c-.04.217.055.44.247.55l1.227.709a.5.5 0 0 1 .183.683l-1.5 2.598a.5.5 0 0 1-.683.183l-1.229-.71a.52.52 0 0 0-.6.063 7 7 0 0 1-2.177 1.26.525.525 0 0 0-.355.488V20.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1.417a.525.525 0 0 0-.354-.489 7 7 0 0 1-2.178-1.259.52.52 0 0 0-.6-.062l-1.229.71a.5.5 0 0 1-.683-.184l-1.5-2.598a.5.5 0 0 1 .183-.683l1.228-.709a.52.52 0 0 0 .246-.55 7 7 0 0 1 0-2.517.52.52 0 0 0-.246-.551l-1.228-.709a.5.5 0 0 1-.183-.683l1.5-2.598a.5.5 0 0 1 .683-.183l1.229.71c.191.11.432.08.6-.063a7 7 0 0 1 2.178-1.26.525.525 0 0 0 .354-.488zm2 11.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" class="icon-dark-stroke icon-light-fill" clip-rule="evenodd"/>'
      }
    }, ["16", "24"], "object-gear"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "object-gear",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" d="m8 3 7 3-2 .857V8.97a3 3 0 0 1-1.886 2.785l-2.371.949a2 2 0 0 1-1.486 0l-2.371-.949A3 3 0 0 1 3 8.97V6.857L1 6z" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 6.857 15 6 8 3 1 6l2 .857m10 0V8.97a3 3 0 0 1-1.886 2.785l-2.371.949a2 2 0 0 1-1.486 0l-2.371-.949A3 3 0 0 1 3 8.97V6.857m10 0L8 9 3 6.857" class="icon-dark"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 6v3" class="icon-dark"/>'
      }
    }, ["16"], "object-graduation-cap"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "object-graduation-cap",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5" class="icon-light"/><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M14.842 3.135 8 9 1.158 3.135m13.684 0A.5.5 0 0 0 14.5 3h-13a.5.5 0 0 0-.342.135m13.684 0c.097.092.158.221.158.365v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9c0-.144.06-.273.158-.365" class="icon-dark"/>'
      }
    }, ["16"], "object-letter"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "object-letter",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" d="m5.5 3.5-2 2L6 8l2-2z" class="icon-light"/><path fill="currentColor" d="m5.5 3.5.707-.707a1 1 0 0 0-1.414 0zm8 8 .707.707a1 1 0 0 0 0-1.414zm-2 2-.707.707a1 1 0 0 0 1.414 0zm-8-8-.707-.707a1 1 0 0 0 0 1.414zm9.293 5.293-2 2 1.414 1.414 2-2zM4.207 6.207l2-2-1.414-1.414-2 2zm8 6.586-5.5-5.5-1.414 1.414 5.5 5.5zm-5.5-5.5-2.5-2.5-1.414 1.414 2.5 2.5zM4.793 4.207l2.5 2.5 1.414-1.414-2.5-2.5zm2.5 2.5 5.5 5.5 1.414-1.414-5.5-5.5zm-.586 2 2-2-1.414-1.414-2 2z" class="icon-dark"/><path stroke="#D0D2E0" stroke-linecap="round" stroke-linejoin="round" d="M5.5 1.5v-1m-5 5h1m1.172-2.828-.708-.708m0 7.072.708-.708m5.656-5.656.708-.708" class="icon-light"/>'
      }
    }, ["16"], "object-magic-wand-dark-mode"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "object-magic-wand-dark-mode",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" d="M12 7c0 1.38-.56 2.63-1.464 3.536A5 5 0 1 1 12 7" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.536 10.536a5 5 0 1 0-7.071-7.071 5 5 0 0 0 7.07 7.07m0 0L14 14" class="icon-dark"/>'
      }
    }, ["16"], "object-magnifying-glass"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "object-magnifying-glass",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      24: {
        body: '<path fill="#D0D2E0" fill-rule="evenodd" d="M2 13C2 7.477 6.477 3 12 3s10 4.477 10 10a9.99 9.99 0 0 1-4 8H6a9.99 9.99 0 0 1-4-8m10 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" class="icon-light" clip-rule="evenodd"/><path fill="currentColor" d="m6 21-.6.8a1 1 0 0 0 .6.2zm12 0v1a1 1 0 0 0 .6-.2zm-6.707-8.707a1 1 0 0 0 1.414 1.414zm6.414-3.586a1 1 0 0 0-1.414-1.414zM3 13a9 9 0 0 1 9-9V2C5.925 2 1 6.925 1 13zm9-9a9 9 0 0 1 9 9h2c0-6.075-4.925-11-11-11zM6.6 20.2A8.99 8.99 0 0 1 3 13H1c0 3.6 1.73 6.795 4.4 8.8zM21 13a8.99 8.99 0 0 1-3.6 7.2l1.2 1.6c2.67-2.005 4.4-5.2 4.4-8.8zm-9 0v2a2 2 0 0 0 2-2zm0 0h-2a2 2 0 0 0 2 2zm0 0v-2a2 2 0 0 0-2 2zm-6 9h12v-2H6zm8-9c0-.552-.225-1.054-.586-1.415L12 13zm-.586-1.415A2 2 0 0 0 12 11v2zm-.707 2.122.707-.707L12 11.585l-.707.707zm.707-.707 4.293-4.293-1.414-1.414L12 11.585z" class="icon-dark"/><path fill="currentColor" fill-rule="evenodd" d="M5.68 8.094A8 8 0 0 1 7.094 6.68l.663.663a1 1 0 0 1-1.414 1.414zM4.062 14a8 8 0 0 1 0-2H5a1 1 0 1 1 0 2zm15.876-2a8 8 0 0 1 0 2H19a1 1 0 1 1 0-2zM13 5.062V6a1 1 0 1 1-2 0v-.938a8 8 0 0 1 2 0" class="icon-dark" clip-rule="evenodd"/>'
      }
    }, ["24"], "object-odometer"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "object-odometer",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="transparent" d="M15 8 1 1l2 7-2 7z" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 8-2 7 14-7L1 1zm0 0h3" class="icon-dark"/>'
      }
    }, ["16"], "object-paper-airplane"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "object-paper-airplane",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" d="M12 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0" class="icon-light"/><path fill="currentColor" d="M7 14a1 1 0 1 0 2 0zm0-4v4h2v-4zm4-4a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5zM8 9a3 3 0 0 1-3-3H3a5 5 0 0 0 5 5zM5 6a3 3 0 0 1 3-3V1a5 5 0 0 0-5 5zm3-3a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5z" class="icon-dark"/>'
      }
    }, ["16"], "object-pin-modern"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "object-pin-modern",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" d="M5 11a.5.5 0 0 0-1 0zm-1 1a.5.5 0 0 0 1 0zm4-1a.5.5 0 0 0-1 0zm-1 1a.5.5 0 0 0 1 0zm3 0a.5.5 0 0 0 1 0zm2-1a.5.5 0 0 0 0-1zm-1-4a.5.5 0 0 0 0 1zm1 1a.5.5 0 0 0 0-1zm-1-4a.5.5 0 0 0 0 1zm1 1a.5.5 0 0 0 0-1zm-1 5a.5.5 0 0 0 0 1zm0 1a.5.5 0 0 0-1 0zm-7 0v1h1v-1zm3 0v1h1v-1zm4-3h1V7h-1zm0-3h1V4h-1zm0 6h1v-1h-1zm-1 0v1h1v-1z" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15V1h-5v9H1v5zm0 0v-4" class="icon-dark"/>'
      }
    }, ["16"], "object-ruler"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "object-ruler",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 12h5m7 0h-2M2 4h2m10 0H9m3 8a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2M9 4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v0m5 0a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v0m-1406-193.999h100v100h-100z" class="icon-dark"/>'
      }
    }, ["16"], "object-sliders-round"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "object-sliders-round",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.586 2a1 1 0 0 1 .707.294l5.5 5.5a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-5.5-5.5A1 1 0 0 1 2 7.587V3a1 1 0 0 1 1-1z" class="icon-dark-stroke icon-light-fill" clip-rule="evenodd"/><circle cx="5.5" cy="5.501" r="1" fill="currentColor" class="icon-dark"/>'
      }
    }, ["16"], "object-tag"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "object-tag",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" d="m8 3 7 3-2 .857V8.97a3 3 0 0 1-1.886 2.785l-2.371.949a2 2 0 0 1-1.486 0l-2.371-.949A3 3 0 0 1 3 8.97V6.857L1 6z" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 6.857 15 6 8 3 1 6l2 .857m10 0V8.97a3 3 0 0 1-1.886 2.785l-2.371.949a2 2 0 0 1-1.486 0l-2.371-.949A3 3 0 0 1 3 8.97V6.857m10 0L8 9 3 6.857" class="icon-dark"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 6v3" class="icon-dark-secondary"/>'
      }
    }, ["16"], "object-tassel"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "object-tassel",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<g clip-path="url(#os-apple_x16_svg__a)"><path fill="currentColor" d="M13.61 5.454c-.093.072-1.732.996-1.732 3.048 0 2.375 2.085 3.215 2.148 3.236-.01.05-.332 1.15-1.1 2.27-.684.986-1.4 1.97-2.488 1.97s-1.368-.632-2.624-.632c-1.224 0-1.659.652-2.654.652s-1.69-.912-2.488-2.032C1.747 12.651 1 10.608 1 8.67c0-3.11 2.022-4.76 4.013-4.76 1.057 0 1.939.694 2.603.694.632 0 1.618-.736 2.82-.736.457 0 2.095.042 3.174 1.587M9.866 2.55c.497-.59.85-1.41.85-2.228 0-.114-.01-.23-.031-.322-.81.03-1.773.54-2.354 1.213-.456.518-.881 1.337-.881 2.168 0 .125.02.25.03.29.051.009.134.02.218.02.726 0 1.64-.486 2.168-1.14"/></g>',
        defs: '<defs><clipPath id="os-apple_x16_svg__a"><path fill="currentColor" d="M0 0h16v16H0z"/></clipPath></defs>'
      }
    }, ["16"], "os-apple"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "os-apple",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<g clip-path="url(#os-generic_x16_svg__a)"><path fill="currentColor" fill-rule="evenodd" d="M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m6-8a8 8 0 1 0 0 16A8 8 0 0 0 8 0m-.026 8.004c0 1.618-.967 2.527-2.554 2.527-1.59 0-2.548-.914-2.548-2.527v-.008c0-1.582.993-2.527 2.548-2.527 1.56 0 2.554.931 2.554 2.527zm-3.274 0c0 .77.268 1.191.725 1.191.448 0 .72-.426.72-1.19v-.01c0-.75-.285-1.19-.725-1.19-.443 0-.72.44-.72 1.19zm8.428.831c0 1.046-.94 1.696-2.346 1.696-1.53 0-2.33-.655-2.44-1.621l-.004-.04h1.74l.01.035c.07.282.29.449.694.449.347 0 .562-.12.562-.312v-.005c0-.176-.145-.277-.545-.351l-.879-.163c-.962-.176-1.472-.69-1.472-1.441v-.005c0-1.006.857-1.608 2.268-1.608 1.503 0 2.267.747 2.267 1.63v.03H11.35l-.005-.039c-.026-.228-.242-.444-.628-.444-.33 0-.545.124-.545.33v.004c0 .172.123.269.562.352l.88.163c1.045.193 1.515.602 1.515 1.336z" class="icon-light" clip-rule="evenodd"/></g>',
        defs: '<defs><clipPath id="os-generic_x16_svg__a"><path fill="currentColor" d="M0 0h16v16H0z" class="icon-light"/></clipPath></defs>'
      }
    }, ["16"], "os-generic"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "os-generic",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<g clip-path="url(#os-linux_x16_svg__a)"><path fill="currentColor" d="M7.758 4.389c0 .053-.053.053-.053.053h-.053c-.053 0-.053-.053-.106-.106 0 0-.053-.053-.053-.106s0-.053.053-.053l.106.053c.053.053.106.106.106.159m-.954-.53c0-.265-.106-.424-.265-.424 0 0 0 .053-.053.053v.106h.16c0 .106.052.16.052.265zm1.854-.265c.106 0 .16.106.212.265h.106c-.053-.053-.053-.106-.053-.159s0-.106-.053-.159-.106-.106-.159-.106c0 0-.053.053-.106.053 0 .053.053.053.053.106m-1.589.848c-.053 0-.053 0-.053-.053s0-.106.053-.16c.106 0 .16-.052.16-.052.052 0 .052.053.052.053 0 .053-.053.106-.159.212zm-.583-.053c-.211-.106-.264-.265-.264-.53 0-.159 0-.265.106-.37a.29.29 0 0 1 .264-.16c.106 0 .16.053.265.16.053.158.106.317.106.476v.106h.053v-.053c.053 0 .053-.106.053-.318 0-.159 0-.318-.106-.477s-.212-.265-.424-.265a.4.4 0 0 0-.37.265c-.106.212-.127.371-.127.636 0 .212.074.424.286.636.053-.053.106-.053.158-.106m6.622 7.47c.053 0 .053-.022.053-.07 0-.116-.053-.254-.212-.407-.159-.16-.423-.26-.741-.303-.053-.005-.106-.005-.106-.005-.053-.01-.053-.01-.106-.01a3 3 0 0 1-.212-.027c.159-.493.212-.927.212-1.308 0-.53-.106-.9-.318-1.219-.212-.318-.424-.477-.689-.53-.053.053-.053.053-.053.106.265.106.53.318.69.636.158.371.211.689.211 1.06 0 .296-.053.736-.265 1.297-.212.085-.424.281-.583.588 0 .048 0 .075.053.075 0 0 .053-.048.106-.138.106-.09.16-.18.265-.27.16-.09.265-.138.424-.138.265 0 .53.037.689.111.212.07.318.143.37.228q.08.12.16.223c0 .069.052.1.052.1M8.235 4.176c-.053-.053-.053-.159-.053-.265 0-.212 0-.318.106-.477q.16-.159.317-.159c.16 0 .265.106.371.212.053.16.106.265.106.424q0 .397-.318.477s.053.053.106.053c.106 0 .16.053.265.106.053-.318.106-.53.106-.795 0-.318-.053-.53-.159-.689a.68.68 0 0 0-.53-.211.85.85 0 0 0-.476.158c-.106.16-.16.265-.16.424 0 .265.054.477.16.689.053 0 .106.053.159.053m.635.847c-.688.477-1.218.69-1.642.69-.37 0-.742-.16-1.06-.425.054.106.107.212.16.265l.317.318c.212.212.477.318.742.318.37 0 .795-.212 1.324-.583l.477-.318c.106-.106.212-.212.212-.37 0-.053 0-.106-.053-.106-.053-.106-.318-.265-.847-.424-.477-.212-.848-.318-1.06-.318q-.239 0-.795.318c-.317.212-.53.424-.53.635 0 0 .054.053.107.16.317.264.635.423.953.423.424 0 .954-.212 1.642-.741v.106c.053 0 .053.052.053.052m1.219 10.701c.212.399.582.599 1.006.599q.159 0 .318-.048a.7.7 0 0 0 .265-.1q.08-.054.159-.117c.106-.037.106-.063.159-.09l.9-.779c.212-.169.424-.316.69-.445.211-.127.423-.211.529-.26a.95.95 0 0 0 .37-.19.55.55 0 0 0 .107-.307c0-.154-.106-.27-.212-.355a1.1 1.1 0 0 0-.318-.18c-.106-.037-.212-.122-.37-.265a1.4 1.4 0 0 1-.266-.578l-.053-.307c-.053-.143-.053-.249-.106-.307 0-.016 0-.021-.053-.021a.29.29 0 0 0-.212.138q-.16.136-.317.296c-.053.106-.212.201-.318.291a.95.95 0 0 1-.424.138c-.424 0-.636-.116-.795-.344-.106-.17-.159-.366-.212-.588-.106-.09-.159-.138-.264-.138-.265 0-.371.276-.371.832v1.648c0 .047-.053.153-.053.317-.053.165-.053.351-.053.562l-.106.588v.01m-7.682-.281q.74.108 1.7.461c.642.233 1.034.355 1.177.355.37 0 .678-.164.932-.482.053-.102.053-.223.053-.362q0-.75-.906-1.902l-.36-.482a5 5 0 0 1-.28-.46 5 5 0 0 0-.292-.477 1.4 1.4 0 0 0-.323-.366 1.1 1.1 0 0 0-.472-.244c-.222.043-.376.117-.45.218a.65.65 0 0 0-.127.328q-.023.167-.1.222a1 1 0 0 1-.266.085q-.04-.002-.143.006h-.143c-.28 0-.471.031-.572.084a.78.78 0 0 0-.201.514q0 .127.064.43c.042.195.063.354.063.465q.002.327-.196.652c-.132.228-.201.397-.201.518q.08.308 1.043.435zm1.764-4.817c0-.366.096-.769.292-1.245.19-.477.381-.795.567-1.007-.01-.053-.037-.053-.08-.053l-.053-.053c-.153.16-.339.53-.561 1.06-.223.476-.34.916-.34 1.24 0 .238.059.444.165.624.116.175.397.43.842.753l.562.365c.598.52.916.88.916 1.092 0 .11-.053.222-.212.344a.5.5 0 0 1-.37.19q-.016-.001-.016.038-.001.007.164.317c.222.302.7.45 1.335.45 1.165 0 2.066-.476 2.755-1.43 0-.264 0-.429-.053-.498v-.196q0-.518.158-.773c.106-.17.212-.249.371-.249q.159-.002.318.117c.053-.408.053-.763.053-1.081 0-.482 0-.88-.106-1.25a2.8 2.8 0 0 0-.265-.795l-.318-.477c-.106-.159-.159-.318-.264-.476-.053-.212-.106-.371-.106-.636-.16-.265-.265-.53-.424-.795-.106-.265-.212-.53-.318-.741l-.477.37c-.53.371-.953.53-1.324.53-.318 0-.583-.053-.742-.265l-.318-.265c0 .16-.053.371-.159.583l-.333.636c-.149.37-.228.582-.244.741-.021.106-.037.212-.048.212l-.397.795c-.43.795-.646 1.53-.646 2.14q0 .185.031.376a.79.79 0 0 1-.355-.688m3.793 5.011q-1.032 0-1.589.278V15.9c-.265.318-.561.482-.974.482q-.391 0-1.219-.302a14 14 0 0 0-1.478-.433 3 3 0 0 0-.291-.055 11 11 0 0 1-.408-.072 3 3 0 0 1-.376-.109.9.9 0 0 1-.318-.162.3.3 0 0 1-.11-.227q0-.127.055-.271.051-.09.108-.17.057-.086.09-.164a.8.8 0 0 0 .074-.148.818.818 0 0 0 .074-.312 6 6 0 0 0-.063-.494 5 5 0 0 1-.064-.524c0-.233.053-.419.17-.551.116-.132.227-.201.344-.201h.61c.047 0 .121-.027.232-.09.037-.085.07-.154.09-.218.027-.063.037-.11.048-.132q.015-.05.032-.09a.7.7 0 0 1 .085-.122.32.32 0 0 1-.064-.207c0-.058 0-.11.01-.143 0-.19.09-.46.281-.815l.186-.334c.153-.286.27-.498.355-.71q.133-.318.291-.953.127-.557.604-1.113l.397-.477c.276-.318.456-.582.556-.794s.154-.477.154-.689q.002-.159-.085-.954c-.053-.53-.08-1.06-.08-1.536 0-.37.033-.636.102-.9.068-.265.19-.53.37-.742.16-.212.371-.424.689-.53A3.5 3.5 0 0 1 7.964.48c.16 0 .318 0 .477.053q.24 0 .636.16c.212.105.424.211.583.37.212.159.37.424.53.689.105.317.211.635.264 1.06.053.264.053.529.106.9 0 .318.053.53.053.688.053.16.053.371.106.636.053.212.106.424.212.583.106.212.212.424.37.636.16.264.372.53.584.847.476.53.847 1.113 1.06 1.695.264.53.423 1.219.423 1.955a3.6 3.6 0 0 1-.159 1.065c.106 0 .159.042.212.116q.08.11.159.482l.053.393a.62.62 0 0 0 .265.323c.106.095.212.175.37.238.106.053.265.127.371.223a.47.47 0 0 1 .16.333c0 .18-.054.313-.16.408a.83.83 0 0 1-.37.228c-.106.053-.318.159-.636.308a6 6 0 0 0-.795.572l-.53.451a3 3 0 0 1-.582.445c-.16.096-.371.143-.583.143l-.37-.042c-.425-.111-.69-.323-.848-.646-.848-.103-1.537-.154-1.96-.154"/></g>',
        defs: '<defs><clipPath id="os-linux_x16_svg__a"><path fill="currentColor" d="M0 0h16v16H0z"/></clipPath></defs>'
      }
    }, ["16"], "os-linux"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "os-linux",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#00A4EF" d="M7.6 0H0v7.6h7.6zM16 0H8.4v7.6H16zM7.6 8.4H0V16h7.6zM16 8.4H8.4V16H16z"/>'
      }
    }, ["16"], "os-windows"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "os-windows",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M1.861 7.354a2 2 0 0 1 .273-2.488l2.732-2.732a2 2 0 0 1 2.488-.273l2.502 1.593a2 2 0 0 1 .642 2.716L10 7l5 5v3h-3l-1-2.5H9L8 10H7l-.83.498a2 2 0 0 1-2.716-.642z" class="icon-light-fill icon-dark-stroke"/><circle cx="5.752" cy="5.752" r="1.002" fill="currentColor" class="icon-dark"/>'
      },
      24: {
        body: '<path fill="#D0D2E0" fill-rule="evenodd" stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M10.038 2.475a3 3 0 0 0-3.757.394L2.87 6.28a3 3 0 0 0-.394 3.757L5.25 14.31a3 3 0 0 0 4.316.765L11 14l1.5 3.5 1.5-1 1.5 3.5 1.5-1s1 1.7 1.5 2c2.5 1.5 3.5-2 3.5-2l-8-8 1.075-1.433a3 3 0 0 0-.765-4.316zM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" class="icon-light-fill icon-dark-stroke" clip-rule="evenodd"/>'
      }
    }, ["16", "24"], "security-key"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "security-key",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" fill-rule="evenodd" d="M2 13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" class="icon-light" clip-rule="evenodd"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 6H4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-1M5 6V4a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v2M5 6h6m-3 4v1" class="icon-dark"/>'
      }
    }, ["16"], "security-lock-locked"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "security-lock-locked",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" fill-rule="evenodd" d="M8 1.333s-2.667 1.334-6 2v7.524c1 2.857 6 3.81 6 3.81z" class="icon-light" clip-rule="evenodd"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 8 1.667 2L10 6m4-2.667c-3.333-.666-6-2-6-2s-2.667 1.334-6 2v7.524c1 2.857 6 3.81 6 3.81s5-.953 6-3.81z" class="icon-dark"/>'
      },
      24: {
        body: '<path fill="#D0D2E0" fill-rule="evenodd" d="M12 2S8 4 3 5v11.286C4.5 20.57 12 22 12 22z" class="icon-light" clip-rule="evenodd"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 12 2.5 3L15 9m6-4c-5-1-9-3-9-3S8 4 3 5v11.286C4.5 20.57 12 22 12 22s7.5-1.429 9-5.714z" class="icon-dark"/>'
      }
    }, ["16", "24"], "security-shield-check"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "security-shield-check",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" d="M8 1S5.5 3 2 3v4h6zM2 11c1 3 6 4 6 4V7H2z" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 15s5-1 6-4V7m-6 8s-5-1-6-4V7m6 8V7m0-6S5.5 3 2 3v4m6-6s2.5 2 6 2v4M8 1v6m6 0H8M2 7h6" class="icon-dark"/>'
      },
      24: {
        body: '<path fill="#D0D2E0" d="M12 2S8 5 3 5v5h9zM3 16c1 4.5 9 6 9 6V10H3z" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 22s8-1.5 9-6v-6m-9 12s-8-1.5-9-6v-6m9 12V10m0-8S8 5 3 5v5m9-8s4 3 9 3v5m-9-8v8m9 0h-9m-9 0h9" class="icon-dark"/>'
      }
    }, ["16", "24"], "security-shield-cross"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "security-shield-cross",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M4.448 2a3.43 3.43 0 0 0-2.432 1.02l-.007-.004A3.5 3.5 0 0 0 1 5.479c0 .924.363 1.81 1.01 2.463l5.984 6.05.002-.002.01.01 5.985-6.05A3.5 3.5 0 0 0 15 5.485c0-.923-.363-1.81-1.01-2.463a3.413 3.413 0 0 0-4.875-.003L8.002 4.147 6.883 3.015A3.43 3.43 0 0 0 4.448 2Z" class="icon-dark-stroke icon-light-fill"/>'
      },
      24: {
        body: '<path fill="#D0D2E0" stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M6.673 3a5.14 5.14 0 0 0-3.649 1.53l-.01-.006A5.25 5.25 0 0 0 1.5 8.22c0 1.385.545 2.714 1.514 3.694l8.977 9.076.004-.003.014.014 8.977-9.076A5.25 5.25 0 0 0 22.5 8.23a5.25 5.25 0 0 0-1.514-3.695A5.2 5.2 0 0 0 19.31 3.4a5.12 5.12 0 0 0-5.636 1.131l-1.67 1.688-1.678-1.697A5.14 5.14 0 0 0 6.673 3Z" class="icon-dark-stroke icon-light-fill"/>'
      }
    }, ["16", "24"], "shape-heart"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "shape-heart",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 1v5h5.5L8 15v-5H2.5z" class="icon-light-fill icon-dark-stroke"/>'
      },
      24: {
        body: '<path fill="#D0D2E0" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10V2L5 14h7v8l7-12z" class="icon-light-fill icon-dark-stroke"/>'
      }
    }, ["16", "24"], "shape-lightning-bolt"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "shape-lightning-bolt",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" fill-rule="evenodd" d="M14.382 10.881Q13.707 11 13 11a8 8 0 0 1-7.881-9.381 7.001 7.001 0 1 0 9.263 9.262" class="icon-light" clip-rule="evenodd"/><path fill="currentColor" d="m14.382 10.881.91.412a1 1 0 0 0-1.082-1.397zM5.119 1.62l.985.171A1 1 0 0 0 4.707.707zm9.091 8.277A7 7 0 0 1 13 10v2q.794-.001 1.553-.134zM13 10a7 7 0 0 1-7-7H4a9 9 0 0 0 9 9zM6 3q.001-.62.104-1.21l-1.97-.343A9 9 0 0 0 4 3zM2 8a6 6 0 0 1 3.53-5.47L4.708.707A8 8 0 0 0 0 8zm6 6a6 6 0 0 1-6-6H0a8 8 0 0 0 8 8zm5.47-3.53A6 6 0 0 1 8 14v2a8 8 0 0 0 7.293-4.707z" class="icon-dark"/>'
      }
    }, ["16"], "shape-moon-crescent"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "shape-moon-crescent",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="m8 1.345 2.345 4.027 4.555.986-3.105 3.475.47 4.636L8 12.59l-4.264 1.88.47-4.637L1.1 6.358l4.555-.986z" class="icon-dark-stroke icon-light-fill"/>'
      },
      24: {
        body: '<path fill="#D0D2E0" stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="m12 2 3.569 6.128 6.93 1.5-4.724 5.288.714 7.056L12 19.112l-6.49 2.86.715-7.056L1.5 9.628l6.93-1.5z" class="icon-dark-stroke icon-light-fill"/>'
      }
    }, ["16", "24"], "shape-star"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "shape-star",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0" class="icon-light"/><path fill="currentColor" d="M3.757 2.343a1 1 0 1 0-1.414 1.414zm9.9 1.414a1 1 0 0 0-1.414-1.414zm-1.414 9.9a1 1 0 0 0 1.414-1.414zm-9.9-1.414a1 1 0 0 0 1.414 1.414zM9 1a1 1 0 0 0-2 0zm6 8a1 1 0 1 0 0-2zm-8 6a1 1 0 1 0 2 0zM1 7a1 1 0 0 0 0 2zm1.343-3.243 1.414 1.415 1.415-1.415-1.415-1.414zm9.9-1.414-1.415 1.414 1.415 1.415 1.414-1.415zm-1.415 9.9 1.415 1.414 1.414-1.414-1.414-1.415zm-7.07-1.415-1.415 1.415 1.414 1.414 1.415-1.414zM9 3V1H7v2zm4 6h2V7h-2zm-6 4v2h2v-2zM3 7H1v2h2zm7 1a2 2 0 0 1-2 2v2a4 4 0 0 0 4-4zm-2 2a2 2 0 0 1-2-2H4a4 4 0 0 0 4 4zM6 8a2 2 0 0 1 2-2V4a4 4 0 0 0-4 4zm2-2a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4z" class="icon-dark"/>'
      }
    }, ["16"], "shape-sun-long"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "shape-sun-long",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="currentColor" d="M13.545 3.069a13.5 13.5 0 0 0-3.257-.978.05.05 0 0 0-.052.024c-.141.242-.297.558-.406.806a12.6 12.6 0 0 0-3.658 0 8 8 0 0 0-.412-.806.05.05 0 0 0-.052-.024c-1.143.19-2.236.524-3.257.978a.05.05 0 0 0-.021.017c-2.074 3-2.643 5.927-2.364 8.818q.003.022.02.036a13.4 13.4 0 0 0 3.996 1.955.05.05 0 0 0 .056-.018q.463-.61.818-1.287a.048.048 0 0 0-.028-.068 9 9 0 0 1-1.248-.576.05.05 0 0 1-.005-.082 7 7 0 0 0 .248-.189.05.05 0 0 1 .051-.006c2.619 1.157 5.454 1.157 8.041 0a.05.05 0 0 1 .053.006q.121.097.248.189a.05.05 0 0 1-.004.082 8.3 8.3 0 0 1-1.249.575.05.05 0 0 0-.027.07c.24.45.515.879.817 1.286a.05.05 0 0 0 .056.018 13.4 13.4 0 0 0 4.001-1.955.05.05 0 0 0 .021-.036c.334-3.341-.559-6.244-2.365-8.817a.04.04 0 0 0-.021-.018m-8.198 7.075c-.789 0-1.438-.701-1.438-1.562 0-.86.637-1.56 1.438-1.56.807 0 1.45.706 1.438 1.56 0 .861-.637 1.562-1.438 1.562m5.316 0c-.788 0-1.438-.701-1.438-1.562 0-.86.637-1.56 1.438-1.56.807 0 1.45.706 1.438 1.56 0 .861-.63 1.562-1.438 1.562" class="icon-dark"/>'
      }
    }, ["16"], "social-discord-solid"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "social-discord-solid",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M11 5.25V8.5a2 2 0 0 0 3.92.562Q15 8.542 15 8a7 7 0 1 0-3 5.745M10.5 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" class="icon-dark"/>'
      }
    }, ["16"], "social-email"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "social-email",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="currentColor" d="M16 8a8 8 0 1 0-9.25 7.903v-5.59H4.719V8H6.75V6.237c0-2.005 1.194-3.112 3.022-3.112.875 0 1.79.156 1.79.156V5.25h-1.008c-.994 0-1.304.617-1.304 1.25V8h2.219l-.355 2.313H9.25v5.59A8 8 0 0 0 16 8" class="icon-dark"/>'
      }
    }, ["16"], "social-facebook-solid"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "social-facebook-solid",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="currentColor" fill-rule="evenodd" d="M8 1.002a7 7 0 0 0-2.213 13.642c.35.065.479-.152.479-.337 0-.167-.007-.719-.01-1.303-1.948.424-2.358-.826-2.358-.826-.319-.81-.778-1.025-.778-1.025-.635-.434.049-.425.049-.425.703.05 1.073.721 1.073.721.624 1.07 1.638.76 2.037.582.063-.453.244-.762.444-.937-1.555-.176-3.19-.776-3.19-3.459 0-.764.275-1.389.722-1.878-.073-.177-.313-.889.067-1.853 0 0 .588-.188 1.926.718a6.7 6.7 0 0 1 1.751-.236c.595.003 1.195.08 1.754.236 1.336-.905 1.923-.718 1.923-.718.38.965.142 1.677.07 1.853.448.49.72 1.114.72 1.878 0 2.689-1.639 3.28-3.197 3.453.251.217.476.643.476 1.296 0 .936-.008 1.69-.008 1.92 0 .187.126.405.48.337A7 7 0 0 0 8 1z" class="icon-dark" clip-rule="evenodd"/>'
      }
    }, ["16"], "social-github-solid"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "social-github-solid",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="currentColor" d="M16 1.176v13.647A1.176 1.176 0 0 1 14.823 16H1.176A1.176 1.176 0 0 1 0 14.823V1.176A1.176 1.176 0 0 1 1.176 0h13.647A1.176 1.176 0 0 1 16 1.176M4.706 6.118H2.353v7.53h2.353zm.212-2.589a1.355 1.355 0 0 0-1.346-1.364h-.043a1.365 1.365 0 1 0 0 2.73 1.355 1.355 0 0 0 1.389-1.323zm8.73 5.544c0-2.264-1.44-3.144-2.871-3.144a2.68 2.68 0 0 0-2.382 1.215H8.33V6.118H6.118v7.53H8.47V9.641a1.56 1.56 0 0 1 1.411-1.684h.09c.748 0 1.303.47 1.303 1.656v4.033h2.353z" class="icon-dark"/>'
      }
    }, ["16"], "social-linkedin-solid"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "social-linkedin-solid",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="currentColor" d="M14.355 4.741c.01.142.01.284.01.427 0 4.335-3.299 9.33-9.33 9.33A9.27 9.27 0 0 1 0 13.024c.264.03.518.041.792.041a6.57 6.57 0 0 0 4.07-1.401 3.285 3.285 0 0 1-3.065-2.274c.203.03.406.05.62.05.294 0 .588-.04.862-.111A3.28 3.28 0 0 1 .65 6.112v-.04c.437.243.945.395 1.483.415A3.28 3.28 0 0 1 .67 3.757c0-.61.162-1.168.447-1.655a9.32 9.32 0 0 0 6.761 3.431 3.7 3.7 0 0 1-.081-.751 3.28 3.28 0 0 1 3.28-3.28c.943 0 1.796.397 2.395 1.036a6.5 6.5 0 0 0 2.081-.792 3.27 3.27 0 0 1-1.441 1.807c.66-.07 1.3-.253 1.888-.507a7 7 0 0 1-1.645 1.695" class="icon-dark"/>'
      }
    }, ["16"], "social-twitter-solid"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "social-twitter-solid",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="currentColor" fill-rule="evenodd" d="M14.25 2.575c.69.184 1.231.725 1.415 1.414C16 5.237 16 7.84 16 7.84s0 2.604-.335 3.852a2 2 0 0 1-1.414 1.414c-1.247.335-6.251.335-6.251.335s-5.004 0-6.25-.335a2 2 0 0 1-1.415-1.414C0 10.444 0 7.84 0 7.84s0-2.603.335-3.85a2 2 0 0 1 1.414-1.415C2.996 2.24 8 2.24 8 2.24s5.004 0 6.25.335M10.556 7.84l-4.157 2.4v-4.8z" class="icon-dark" clip-rule="evenodd"/>'
      }
    }, ["16"], "social-youtube-solid"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "social-youtube-solid",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 8h4m-2 6A6 6 0 1 1 8 2a6 6 0 0 1 0 12Z" class="icon-dark"/>'
      },
      24: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 12h8m-4 9a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z" class="icon-dark"/>'
      }
    }, ["16", "24"], "status-cancelled-outline"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "status-cancelled-outline",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      4: {
        body: '<circle cx="2" cy="2" r="1.5" stroke="currentColor" class="icon-dark"/>'
      },
      8: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M1 4h6" class="icon-dark"/>'
      }
    }, ["4", "8"], "status-cancelled-simple"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "status-cancelled-simple",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      12: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M2 6h8" class="icon-dark"/>'
      },
      16: {
        body: '<path fill="#AFB3C7" fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m4-1a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2z" clip-rule="evenodd"/>'
      },
      24: {
        body: '<path fill="#AFB3C7" fill-rule="evenodd" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12m6-1a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z" clip-rule="evenodd"/>'
      }
    }, ["12", "16", "24"], "status-cancelled-solid"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "status-cancelled-solid",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="currentColor" fill-rule="evenodd" d="M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m6-8a8 8 0 1 0 0 16A8 8 0 0 0 8 0m1 5a1 1 0 0 0-2 0v3a1 1 0 0 0 2 0zm-1 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2" class="icon-dark" clip-rule="evenodd"/>'
      },
      24: {
        body: '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="icon-dark"/><path fill="currentColor" fill-rule="evenodd" d="M12 7a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1" class="icon-dark" clip-rule="evenodd"/><path fill="currentColor" d="M13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0" class="icon-dark"/>'
      }
    }, ["16", "24"], "status-errored-outline"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "status-errored-outline",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      4: {
        body: '<circle cx="2" cy="2" r="2" fill="currentColor" class="icon-dark"/>'
      },
      8: {
        body: '<path fill="currentColor" fill-rule="evenodd" d="M4 0a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1" class="icon-dark" clip-rule="evenodd"/><path fill="currentColor" d="M5 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0" class="icon-dark"/>'
      }
    }, ["4", "8"], "status-errored-simple"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "status-errored-simple",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      12: {
        body: '<path fill="currentColor" fill-rule="evenodd" d="M6 1a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1" class="icon-dark" clip-rule="evenodd"/><path fill="currentColor" d="M7 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0" class="icon-dark"/>'
      },
      16: {
        body: '<path fill="currentColor" fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14M9 5a1 1 0 0 0-2 0v3a1 1 0 0 0 2 0zm-1 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2" class="icon-dark" clip-rule="evenodd"/>'
      },
      24: {
        body: '<path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m1-14a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0zm-1 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2" class="icon-dark" clip-rule="evenodd"/>'
      }
    }, ["12", "16", "24"], "status-errored-solid"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "status-errored-solid",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="currentColor" d="M6.707 5.293a1 1 0 0 0-1.414 1.414zm2.586 5.414a1 1 0 0 0 1.414-1.414zm1.414-4a1 1 0 0 0-1.414-1.414zM5.293 9.293a1 1 0 0 0 1.414 1.414zM13 8a5 5 0 0 1-5 5v2a7 7 0 0 0 7-7zm-5 5a5 5 0 0 1-5-5H1a7 7 0 0 0 7 7zM3 8a5 5 0 0 1 5-5V1a7 7 0 0 0-7 7zm5-5a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7zM5.293 6.707l2 2 1.414-1.414-2-2zm2 2 2 2 1.414-1.414-2-2zm2-3.414-2 2 1.414 1.414 2-2zm-2 2-2 2 1.414 1.414 2-2z" class="icon-dark"/>'
      },
      24: {
        body: '<path fill="currentColor" d="M9.707 8.293a1 1 0 0 0-1.414 1.414zm4.586 7.414a1 1 0 0 0 1.414-1.414zm1.414-6a1 1 0 0 0-1.414-1.414zm-7.414 4.586a1 1 0 1 0 1.414 1.414zm0-4.586 3 3 1.414-1.414-3-3zm3 3 3 3 1.414-1.414-3-3zm3-4.414-3 3 1.414 1.414 3-3zm-3 3-3 3 1.414 1.414 3-3zM20 12a8 8 0 0 1-8 8v2c5.523 0 10-4.477 10-10zm-8 8a8 8 0 0 1-8-8H2c0 5.523 4.477 10 10 10zm-8-8a8 8 0 0 1 8-8V2C6.477 2 2 6.477 2 12zm8-8a8 8 0 0 1 8 8h2c0-5.523-4.477-10-10-10z" class="icon-dark"/>'
      }
    }, ["16", "24"], "status-failed-outline"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "status-failed-outline",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      4: {
        body: '<circle cx="2" cy="2" r="2" fill="currentColor" class="icon-dark"/>'
      },
      8: {
        body: '<path fill="currentColor" d="M2.707 1.293a1 1 0 0 0-1.414 1.414zm2.586 5.414a1 1 0 0 0 1.414-1.414zm1.414-4a1 1 0 0 0-1.414-1.414zM1.293 5.293a1 1 0 0 0 1.414 1.414zm0-2.586 4 4 1.414-1.414-4-4zm4-1.414-4 4 1.414 1.414 4-4z" class="icon-dark"/>'
      },
      12: {
        body: '<path fill="currentColor" d="M3.707 2.293a1 1 0 0 0-1.414 1.414zm4.586 7.414a1 1 0 0 0 1.414-1.414zm1.414-6a1 1 0 0 0-1.414-1.414zM2.293 8.293a1 1 0 0 0 1.414 1.414zm0-4.586 6 6 1.414-1.414-6-6zm6-1.414-6 6 1.414 1.414 6-6z" class="icon-dark"/>'
      },
      16: {
        body: '<path fill="currentColor" d="M4.707 3.293a1 1 0 0 0-1.414 1.414zm6.586 9.414a1 1 0 0 0 1.414-1.414zm1.414-8a1 1 0 0 0-1.414-1.414zm-9.414 6.586a1 1 0 1 0 1.414 1.414zm0-6.586 4 4 1.414-1.414-4-4zm4 4 4 4 1.414-1.414-4-4zm4-5.414-4 4 1.414 1.414 4-4zm-4 4-4 4 1.414 1.414 4-4z" class="icon-dark"/>'
      },
      24: {
        body: '<path fill="currentColor" d="M6.707 5.293a1 1 0 0 0-1.414 1.414zm10.586 13.414a1 1 0 0 0 1.414-1.414zm1.414-12a1 1 0 0 0-1.414-1.414zM5.293 17.293a1 1 0 1 0 1.414 1.414zm0-10.586 6 6 1.414-1.414-6-6zm6 6 6 6 1.414-1.414-6-6zm6-7.414-6 6 1.414 1.414 6-6zm-6 6-6 6 1.414 1.414 6-6z" class="icon-dark"/>'
      }
    }, ["4", "8", "12", "16", "24"], "status-failed-simple"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "status-failed-simple",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<circle cx="8" cy="8" r="7" fill="currentColor" class="icon-dark"/><path fill="#fff" d="M6.707 5.293a1 1 0 0 0-1.414 1.414zm2.586 5.414a1 1 0 0 0 1.414-1.414zm1.414-4a1 1 0 0 0-1.414-1.414zM5.293 9.293a1 1 0 0 0 1.414 1.414zm0-2.586 4 4 1.414-1.414-4-4zm4-1.414-4 4 1.414 1.414 4-4z"/>'
      },
      24: {
        body: '<path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10M9.707 8.293a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586z" class="icon-dark" clip-rule="evenodd"/>'
      }
    }, ["16", "24"], "status-failed-solid"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "status-failed-solid",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="currentColor" d="M6.707 5.293a1 1 0 0 0-1.414 1.414zm2.586 5.414a1 1 0 0 0 1.414-1.414zm1.414-4a1 1 0 0 0-1.414-1.414zM5.293 9.293a1 1 0 0 0 1.414 1.414zm0-2.586 4 4 1.414-1.414-4-4zm4-1.414-4 4 1.414 1.414 4-4z" class="icon-dark"/><circle cx="8" cy="8" r="6" stroke="#E1E3ED" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="icon-light"/><circle cx="8" cy="8" r="6" stroke="currentColor" stroke-dasharray="10 28" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="icon-dark"><animate attributeName="stroke-dashoffset" dur="1s" repeatCount="indefinite" values="36.6;0"/></circle>'
      },
      24: {
        body: '<path fill="currentColor" d="M9.707 8.293a1 1 0 0 0-1.414 1.414zm4.586 7.414a1 1 0 0 0 1.414-1.414zm1.414-6a1 1 0 0 0-1.414-1.414zm-7.414 4.586a1 1 0 1 0 1.414 1.414zm0-4.586 3 3 1.414-1.414-3-3zm3 3 3 3 1.414-1.414-3-3zm3-4.414-3 3 1.414 1.414 3-3zm-3 3-3 3 1.414 1.414 3-3zM20 12" class="icon-dark"/><circle cx="12" cy="12" r="9" stroke="#E1E3ED" stroke-width="2" class="icon-light"/><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-dasharray="15 42" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="icon-dark"><animate attributeName="stroke-dashoffset" dur="1s" repeatCount="indefinite" values="57;0"/></circle>'
      }
    }, ["16", "24"], "status-failing-outline"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "status-failing-outline",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#F5F4D7" d="M1 12V4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3" class="icon-light"/><path stroke="#963F00" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.5 5h-3v3.5m0 2.5V8.5m0 0h2" class="icon-dark"/>'
      },
      24: {
        body: '<path fill="#F5F4D7" d="M2 18V6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4" class="icon-light"/><path stroke="#963F00" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 8h-4v4.5m0 3.5v-3.5m0 0h3" class="icon-dark"/>'
      }
    }, ["16", "24"], "status-flaky"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "status-flaky",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="2" class="icon-dark"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 6-2.5 4L6 8.5" class="icon-dark"/>'
      },
      24: {
        body: '<path fill="currentColor" fill-rule="evenodd" d="M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0m8-10C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m3.864 7.504a1 1 0 0 0-1.728-1.008l-2.846 4.88-1.583-1.583a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.57-.203z" class="icon-dark" clip-rule="evenodd"/>'
      }
    }, ["16", "24"], "status-passed-outline"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "status-passed-outline",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      4: {
        body: '<circle cx="2" cy="2" r="2" fill="currentColor" class="icon-dark"/>'
      },
      8: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 2 3.5 6 2 4.5" class="icon-dark"/>'
      },
      12: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3 5 9 3 6.5" class="icon-dark"/>'
      },
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8.667 7.333 12 12 4" class="icon-dark"/>'
      },
      24: {
        body: '<path fill="currentColor" fill-rule="evenodd" d="M15.504 8.136a1 1 0 0 1 .36 1.368l-3.5 6a1 1 0 0 1-1.571.203l-2.5-2.5a1 1 0 1 1 1.414-1.414l1.583 1.583 2.846-4.88a1 1 0 0 1 1.368-.36" class="icon-dark" clip-rule="evenodd"/>'
      }
    }, ["4", "8", "12", "16", "24"], "status-passed-simple"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "status-passed-simple",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<circle cx="8" cy="8" r="7" fill="currentColor" class="icon-dark"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 6-2.5 4L6 8.5"/>'
      },
      24: {
        body: '<path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m3.864-12.496a1 1 0 0 0-1.728-1.008l-2.846 4.88-1.583-1.583a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.57-.203z" class="icon-dark" clip-rule="evenodd"/>'
      }
    }, ["16", "24"], "status-passed-solid"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "status-passed-solid",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      12: {
        body: '<path stroke="currentColor" stroke-width="2" d="M4.47 2.305a4 4 0 1 0 3.061 0" class="icon-dark"/>'
      },
      16: {
        body: '<path stroke="currentColor" stroke-width="2" d="M5.706 2.46a5.998 5.998 0 1 0 4.59 0" class="icon-dark"/>'
      },
      24: {
        body: '<path stroke="currentColor" stroke-width="2" d="M8.555 3.685a8.999 8.999 0 1 0 6.887 0" class="icon-dark"/>'
      }
    }, ["12", "16", "24"], "status-pending-outline"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "status-pending-outline",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      4: {
        body: '<circle cx="2" cy="2" r="1.5" stroke="currentColor" class="icon-dark"/>'
      },
      8: {
        body: '<path stroke="currentColor" stroke-width="2" d="M2.852 1.228a3 3 0 1 0 2.296 0" class="icon-dark"/>'
      }
    }, ["4", "8"], "status-pending-simple"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "status-pending-simple",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      4: {
        body: '<circle cx="2" cy="2" r="2" fill="currentColor" class="icon-dark"/>'
      },
      8: {
        body: '<circle cx="4" cy="4" r="3" fill="currentColor" class="icon-dark"/>'
      }
    }, ["4", "8"], "status-placeholder-simple"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "status-placeholder-simple",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      12: {
        body: '<circle cx="6" cy="6" r="5" fill="currentColor" class="icon-dark"/>'
      },
      16: {
        body: '<circle cx="8" cy="8" r="7" fill="currentColor" class="icon-dark"/>'
      },
      24: {
        body: '<circle cx="12" cy="12" r="10" fill="currentColor" class="icon-dark"/>'
      }
    }, ["12", "16", "24"], "status-placeholder-solid"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "status-placeholder-solid",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      12: {
        body: '<circle cx="6" cy="6" r="4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="icon-dark"/>'
      },
      16: {
        body: '<circle cx="8" cy="8" r="6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="icon-dark"/>'
      },
      24: {
        body: '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" class="icon-dark"/>'
      }
    }, ["12", "16", "24"], "status-queued-outline"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "status-queued-outline",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      4: {
        body: '<circle cx="2" cy="2" r="1.5" stroke="currentColor" class="icon-dark"/>'
      },
      8: {
        body: '<circle cx="4" cy="4" r="3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="icon-dark"/>'
      }
    }, ["4", "8"], "status-queued-simple"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "status-queued-simple",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      12: {
        body: '<circle cx="6" cy="6" r="4" stroke="#E1E3ED" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="icon-light"/><circle cx="6" cy="6" r="4" stroke="currentColor" stroke-dasharray="5 20" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="icon-dark"><animate attributeName="stroke-dashoffset" dur="1s" repeatCount="indefinite" values="25;0"/></circle>'
      },
      16: {
        body: '<circle cx="8" cy="8" r="6" stroke="#E1E3ED" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="icon-light"/><circle cx="8" cy="8" r="6" stroke="currentColor" stroke-dasharray="10 28" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="icon-dark"><animate attributeName="stroke-dashoffset" dur="1s" repeatCount="indefinite" values="36.6;0"/></circle>'
      },
      24: {
        body: '<circle cx="12" cy="12" r="9" stroke="#E1E3ED" stroke-width="2" class="icon-light"/><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-dasharray="15 42" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="icon-dark"><animate attributeName="stroke-dashoffset" dur="1s" repeatCount="indefinite" values="57;0"/></circle>'
      }
    }, ["12", "16", "24"], "status-running-outline"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "status-running-outline",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      4: {
        body: '<circle cx="2" cy="2" r="1.5" fill="#C5C9FD" stroke="currentColor" class="icon-dark-stroke icon-light-fill"><animate attributeName="stroke-width" dur="1.5s" repeatCount="indefinite" values="2;1;2"/><animate attributeName="r" dur="1.5s" repeatCount="indefinite" values="1;1.5;1"/></circle>'
      },
      8: {
        body: '<circle cx="4" cy="4" r="3" stroke="#E1E3ED" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="icon-light"/><circle cx="4" cy="4" r="3" stroke="currentColor" stroke-dasharray="5 14" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="icon-dark"><animate attributeName="stroke-dashoffset" dur="1s" repeatCount="indefinite" values="18.3;0"/></circle>'
      }
    }, ["4", "8"], "status-running-simple"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "status-running-simple",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      12: {
        body: '<path stroke="currentColor" stroke-width="2" d="M3.172 8.828a4 4 0 0 0 5.656-5.656M3.172 8.828a4 4 0 0 1 5.656-5.656M3.172 8.828l5.656-5.656" class="icon-dark"/>'
      },
      16: {
        body: '<path stroke="currentColor" stroke-width="2" d="M3.757 12.243a6 6 0 1 0 8.486-8.486m-8.486 8.486a6 6 0 1 1 8.486-8.486m-8.486 8.486 8.486-8.486" class="icon-dark"/>'
      },
      24: {
        body: '<path stroke="currentColor" stroke-width="2" d="M5.636 18.364A9 9 0 0 0 18.364 5.636M5.636 18.364A9 9 0 0 1 18.364 5.636M5.636 18.364 18.364 5.636" class="icon-dark"/>'
      }
    }, ["12", "16", "24"], "status-skipped-outline"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "status-skipped-outline",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      4: {
        body: '<circle cx="2" cy="2" r="1.5" stroke="currentColor" class="icon-dark"/>'
      },
      8: {
        body: '<path stroke="currentColor" stroke-width="2" d="M1.879 6.121A3 3 0 0 0 6.12 1.88M1.88 6.12A3 3 0 1 1 6.12 1.88M1.88 6.12 6.12 1.88" class="icon-dark"/>'
      }
    }, ["4", "8"], "status-skipped-simple"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "status-skipped-simple",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      24: {
        body: '<path fill="#E1E3ED" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m12 10.999 4-1m-4 1-4-1m4 1v3m0 0-3 4m3-4 3 4m8-6c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11Zm-11-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" class="icon-dark-stroke icon-light-fill"/>'
      }
    }, ["24"], "technology-accessibility"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "technology-accessibility",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="currentColor" d="M3 13h3v-2H3zm3 0h7v-2H6zm4.386-8H13V3h-2.614zm-3.45 7.351L9.45 5.65l-1.873-.702-2.513 6.702zM14 4v2a2 2 0 0 0 2-2zm0 0h-2a2 2 0 0 0 2 2zm0 0V2a2 2 0 0 0-2 2zm0 0h2a2 2 0 0 0-2-2zm0 8v2a2 2 0 0 0 2-2zm0 0h-2a2 2 0 0 0 2 2zm0 0v-2a2 2 0 0 0-2 2zm0 0h2a2 2 0 0 0-2-2zM2 12v2a2 2 0 0 0 2-2zm0 0H0a2 2 0 0 0 2 2zm0 0v-2a2 2 0 0 0-2 2zm0 0h2a2 2 0 0 0-2-2zm8.386-9a3 3 0 0 0-2.809 1.947l1.873.702A1 1 0 0 1 10.386 5z" class="icon-dark"/>'
      }
    }, ["16"], "technology-branch-h-tall"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "technology-branch-h-tall",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="currentColor" d="M3 12h3v-2H3zm3 0h7v-2H6zm4.236-6H13V4h-2.764zm-3.342 5.447 2.448-4.894-1.79-.895-2.446 4.895zM14 5v2a2 2 0 0 0 2-2zm0 0h-2a2 2 0 0 0 2 2zm0 0V3a2 2 0 0 0-2 2zm0 0h2a2 2 0 0 0-2-2zm0 6v2a2 2 0 0 0 2-2zm0 0h-2a2 2 0 0 0 2 2zm0 0V9a2 2 0 0 0-2 2zm0 0h2a2 2 0 0 0-2-2zM2 11v2a2 2 0 0 0 2-2zm0 0H0a2 2 0 0 0 2 2zm0 0V9a2 2 0 0 0-2 2zm0 0h2a2 2 0 0 0-2-2zm8.236-7a3 3 0 0 0-2.683 1.658l1.789.895A1 1 0 0 1 10.236 6z" class="icon-dark"/>'
      }
    }, ["16"], "technology-branch-h"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "technology-branch-h",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" d="M2 6h12v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" class="icon-light"/><path fill="currentColor" fill-rule="evenodd" d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zM2 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2H2zm12 3H2v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1zM3.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M8 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" class="icon-dark" clip-rule="evenodd"/>'
      }
    }, ["16"], "technology-browser-dark"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "technology-browser-dark",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" d="M2 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2H2z" class="icon-light"/><path fill="currentColor" fill-rule="evenodd" d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zM2 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2H2zm12 3H2v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1zM3.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M8 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" class="icon-dark" clip-rule="evenodd"/>'
      }
    }, ["16"], "technology-browser-light"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "technology-browser-light",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      48: {
        body: '<path fill="#D0D2E0" d="M40 8H8a3 3 0 0 0-3 3v5h38v-5a3 3 0 0 0-3-3" class="icon-light"/><path fill="#D0D2E0" fill-rule="evenodd" d="M8 8a3 3 0 0 0-3 3v5h38v-5a3 3 0 0 0-3-3z" class="icon-light" clip-rule="evenodd"/><path fill="currentColor" d="M5 16H4a1 1 0 0 0 1 1zm38 0v1a1 1 0 0 0 1-1zm-24-5a1 1 0 1 0 0 2zm20 2a1 1 0 1 0 0-2zM8 9h32V7H8zm34 2v26h2V11zM6 37V11H4v26zM5 17h38v-2H5zm14-4h20v-2H19zM8 39a2 2 0 0 1-2-2H4a4 4 0 0 0 4 4zm34-2a2 2 0 0 1-2 2v2a4 4 0 0 0 4-4zM40 9a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4zM8 7a4 4 0 0 0-4 4h2a2 2 0 0 1 2-2zm-4 4v5h2v-5zm40 5v-5h-2v5zm-4 23H24v2h16zm-16 0h-8v2h8zm-8 0H8v2h8zM10 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M16 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0" class="icon-dark"/><path fill="#9AA2FC" d="M15 30h4v4h-4z" class="icon-light-secondary"/><path fill="#4956E3" d="M33 25a1 1 0 1 0 0-2zm-10-2a1 1 0 1 0 0 2zm10 10a1 1 0 1 0 0-2zm-10-2a1 1 0 1 0 0 2zm-8.707-5.707a1 1 0 0 0 1.414 1.414zm5.414-2.586a1 1 0 0 0-1.414-1.414zm-4-1.414a1 1 0 0 0-1.414 1.414zm2.586 5.414a1 1 0 0 0 1.414-1.414zM15 30v-1a1 1 0 0 0-1 1zm4 0h1a1 1 0 0 0-1-1zm0 4v1a1 1 0 0 0 1-1zm-4 0h-1a1 1 0 0 0 1 1zm18-11H23v2h10zm0 8H23v2h10zm-17.293-4.293 2-2-1.414-1.414-2 2zm2-2 2-2-1.414-1.414-2 2zm-3.414-2 2 2 1.414-1.414-2-2zm2 2 2 2 1.414-1.414-2-2zM15 31h4v-2h-4zm3-1v4h2v-4zm1 3h-4v2h4zm-3 1v-4h-2v4z" class="icon-dark-secondary"/>'
      }
    }, ["48"], "technology-browser-testing-2"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "technology-browser-testing-2",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" d="M15 3a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v1h14z" class="icon-light"/><path fill="#D0D2E0" fill-rule="evenodd" d="M15 3a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v1h14z" class="icon-light" clip-rule="evenodd"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 4v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4M1 4V3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1M1 4h14m-5 4 1.5 1.5L10 11M6 8 4.5 9.5 6 11" class="icon-dark"/>'
      },
      24: {
        body: '<path fill="#D0D2E0" d="M21 6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2h18z" class="icon-light"/><path fill="#D0D2E0" fill-rule="evenodd" d="M21 6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2h18z" class="icon-light" clip-rule="evenodd"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8M3 8V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2M3 8h18m-7 4 2 2-2 2m-4-4-2 1.929 2 1.928" class="icon-dark"/>'
      }
    }, ["16", "24"], "technology-code-editor"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "technology-code-editor",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      48: {
        body: '<rect fill="currentColor"/><path fill="#E1E3ED" d="M43 37V16H5v21a3 3 0 0 0 3 3h32a3 3 0 0 0 3-3" class="icon-light"/><path fill="#747994" d="M13 28a1 1 0 1 0 0 2zm-2 3a1 1 0 1 0 0 2zm2-6a1 1 0 1 0 0 2zm-2-3a1 1 0 1 0 0 2zm13 2a1 1 0 1 0 0-2zm-5-3a1 1 0 1 0 0-2zM9 19a1 1 0 1 0 0 2zm14.01 14a1 1 0 1 0 0-2zM29 27a1 1 0 1 0 0-2zM9 34a1 1 0 1 0 0 2zm17-4a1 1 0 1 0 0-2zm-8 6a1 1 0 1 0 0-2zM8 9h32V7H8zm34 2v26h2V11zM6 37V11H4v26zm2 2a2 2 0 0 1-2-2H4a4 4 0 0 0 4 4zm34-2a2 2 0 0 1-2 2v2a4 4 0 0 0 4-4zM40 9a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4zM8 7a4 4 0 0 0-4 4h2a2 2 0 0 1 2-2zm-4 4v5h2v-5zm40 5v-5h-2v5zm0 21V16h-2v21zM4 16v21h2V16zm1 1h38v-2H5zm35 22H8v2h32zm-27-9h4v-2h-4zm3 1h-5v2h5zm0-4h8v-2h-8zm-3 0h2v-2h-2zm-2-3h5v-2h-5zm13-2h-6.99v2H24zm-5-3h-6v2h6zM9 21h3v-2H9zm8 12h6.01v-2H17zm8-6h4v-2h-4zm-7 3h5v-2h-5zm-4 4H9v2h5zm10-4h2v-2h-2zm-9 6h3v-2h-3zM10 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M16 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0" class="icon-dark"/><path fill="#F8C4CD" d="M34 36.998a1 1 0 1 1-2 0 1 1 0 0 1 2 0" class="icon-light-secondary"/><path fill="#F8C4CD" fill-rule="evenodd" d="M31 31.498a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v1.17a.5.5 0 0 0 .75.432l1.013-.584a.5.5 0 0 1 .683.183l1.5 2.598a.5.5 0 0 1-.183.683l-1.013.585a.5.5 0 0 0 0 .866l1.013.585a.5.5 0 0 1 .183.683l-1.5 2.598a.5.5 0 0 1-.683.183l-1.013-.585a.5.5 0 0 0-.75.433v1.17a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1.17a.5.5 0 0 0-.75-.432l-1.013.584a.5.5 0 0 1-.683-.183l-1.5-2.598a.5.5 0 0 1 .183-.683l1.013-.585a.5.5 0 0 0 0-.866l-1.013-.585a.5.5 0 0 1-.183-.683l1.5-2.598a.5.5 0 0 1 .683-.183l1.013.584a.5.5 0 0 0 .75-.433zm2 6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" class="icon-light-secondary" clip-rule="evenodd"/><path stroke="#C62B49" stroke-linejoin="round" stroke-width="2" d="M34 36.998a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" class="icon-dark-secondary"/><path stroke="#C62B49" stroke-linejoin="round" stroke-width="2" d="M31 31.498a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v1.17a.5.5 0 0 0 .75.432l1.013-.584a.5.5 0 0 1 .683.183l1.5 2.598a.5.5 0 0 1-.183.683l-1.013.585a.5.5 0 0 0 0 .866l1.013.585a.5.5 0 0 1 .183.683l-1.5 2.598a.5.5 0 0 1-.683.183l-1.013-.585a.5.5 0 0 0-.75.433v1.17a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1.17a.5.5 0 0 0-.75-.432l-1.013.584a.5.5 0 0 1-.683-.183l-1.5-2.598a.5.5 0 0 1 .183-.683l1.013-.585a.5.5 0 0 0 0-.866l-1.013-.585a.5.5 0 0 1-.183-.683l1.5-2.598a.5.5 0 0 1 .683-.183l1.013.584a.5.5 0 0 0 .75-.433zm2 6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" class="icon-dark-secondary" clip-rule="evenodd"/>'
      }
    }, ["48"], "technology-command-line-error"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "technology-command-line-error",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 6 3.5 3.5L3 13m6 0h4" class="icon-dark"/>'
      }
    }, ["16"], "technology-command-line"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "technology-command-line",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="currentColor" fill-rule="evenodd" d="M7.872 8.854A2.5 2.5 0 0 1 7.1 9.857c-.43.334-.972.533-1.561.533-1.394 0-2.524-1.113-2.524-2.487s1.13-2.487 2.524-2.487a2.54 2.54 0 0 1 1.705.654c.27.243.485.544.627.882l-1.339.464c-.169-.385-.532-.652-.953-.652-.582 0-1.054.51-1.054 1.139s.472 1.139 1.054 1.139c.421 0 .784-.267.953-.652z" class="icon-dark" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M7.872 8.854A2.5 2.5 0 0 1 7.1 9.857c-.43.334-.972.533-1.561.533-1.394 0-2.524-1.113-2.524-2.487s1.13-2.487 2.524-2.487a2.54 2.54 0 0 1 1.705.654c.27.243.485.544.627.882l-1.339.464c-.169-.385-.532-.652-.953-.652-.582 0-1.054.51-1.054 1.139s.472 1.139 1.054 1.139c.421 0 .784-.267.953-.652z" class="icon-dark" clip-rule="evenodd"/><path fill="currentColor" d="M2 8a6 6 0 1 1 9.122 5.125l-.996 2.59A8 8 0 0 0 16 8a8 8 0 1 0-7.64 7.991.93.93 0 0 0 .817-.61l3.807-9.88h-1.459L10.39 8.717 9.23 5.5H7.687l1.93 4.975-1.364 3.519A6.001 6.001 0 0 1 2 8" class="icon-dark"/>'
      }
    }, ["16"], "technology-cypress"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "technology-cypress",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      48: {
        body: '<path fill="#D0D2E0" d="M40 8H8a3 3 0 0 0-3 3v5h38v-5a3 3 0 0 0-3-3" class="icon-light"/><path fill="#D0D2E0" fill-rule="evenodd" d="M8 8a3 3 0 0 0-3 3v5h38v-5a3 3 0 0 0-3-3z" class="icon-light" clip-rule="evenodd"/><path fill="#D0D2E0" d="m19 30-5-2-5 3v5h29a1 1 0 0 0 1-1V23l-5 1-5 3-5-2z" class="icon-light"/><path fill="currentColor" d="M5 16H4a1 1 0 0 0 1 1zm38 0v1a1 1 0 0 0 1-1zm-24-5a1 1 0 1 0 0 2zm20 2a1 1 0 1 0 0-2zM14 28l.371-.928a1 1 0 0 0-.886.07zm5 2-.371.928a1 1 0 0 0 1.078-.22zm5-5 .371-.928a1 1 0 0 0-1.078.22zm5 2-.371.928a1 1 0 0 0 .886-.07zM9 31l-.514-.858A1 1 0 0 0 8 31zm25-7-.196-.98a1 1 0 0 0-.319.122zM9 36H8a1 1 0 0 0 1 1zM8 9h32V7H8zm34 2v26h2V11zM6 37V11H4v26zM5 17h38v-2H5zm14-4h20v-2H19zM8 39a2 2 0 0 1-2-2H4a4 4 0 0 0 4 4zm34-2a2 2 0 0 1-2 2v2a4 4 0 0 0 4-4zM40 9a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4zM8 7a4 4 0 0 0-4 4h2a2 2 0 0 1 2-2zm-4 4v5h2v-5zm40 5v-5h-2v5zm-6 3H10v2h28zm-24.371 9.929 5 2 .742-1.857-5-2zm6.078 1.778 5-5-1.414-1.414-5 5zm3.922-4.779 5 2 .742-1.857-5-2zM40 35V23h-2v12zm0-12v-2h-2v2zm0 16H24v2h16zm-16 0h-8v2h8zm-8 0H8v2h8zm-6.485-7.142 5-3-1.03-1.716-5 3zm20-4 5-3-1.03-1.716-5 3zm4.681-2.877 5-1-.392-1.962-5 1zM38 35H9v2h29zm-28 1V21H8v15zm-2-5v5h2v-5zm30-10h2a2 2 0 0 0-2-2zm0 14v2a2 2 0 0 0 2-2zM10 19a2 2 0 0 0-2 2h2zM10 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M16 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0" class="icon-dark"/><path fill="#69D3A7" d="M37 37a6 6 0 1 0-12 0 6 6 0 0 0 12 0"/><path fill="#00814D" d="M28.293 38.207a1 1 0 0 1 1.414-1.414zM30.5 39l.814.581a1 1 0 0 1-1.521.126zm1.686-4.081a1 1 0 1 1 1.628 1.162zM36 37a5 5 0 0 0-5-5v-2a7 7 0 0 1 7 7zm-5-5a5 5 0 0 0-5 5h-2a7 7 0 0 1 7-7zm-5 5a5 5 0 0 0 5 5v2a7 7 0 0 1-7-7zm5 5a5 5 0 0 0 5-5h2a7 7 0 0 1-7 7zm-1.293-5.207 1.5 1.5-1.414 1.414-1.5-1.5zm-.02 1.626 2.5-3.5 1.627 1.162-2.5 3.5z"/>'
      }
    }, ["48"], "technology-dashboard-checkmark"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "technology-dashboard-checkmark",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      48: {
        body: '<path fill="#D0D2E0" fill-rule="evenodd" d="M8 8a3 3 0 0 0-3 3v5h38v-5a3 3 0 0 0-3-3z" class="icon-light" clip-rule="evenodd"/><path fill="#D0D2E0" d="m19 30-5-2-5 3v5h29a1 1 0 0 0 1-1V23l-5 1-5 3-5-2z" class="icon-light"/><path fill="currentColor" d="M5 16H4a1 1 0 0 0 1 1zm38 0v1a1 1 0 0 0 1-1zm-24-5a1 1 0 1 0 0 2zm20 2a1 1 0 1 0 0-2zM14 28l.371-.928a1 1 0 0 0-.886.07zm5 2-.371.928a1 1 0 0 0 1.078-.22zm5-5 .371-.928a1 1 0 0 0-1.078.22zm5 2-.371.928a1 1 0 0 0 .886-.07zM9 31l-.514-.858A1 1 0 0 0 8 31zm25-7-.196-.98a1 1 0 0 0-.319.122zM9 36H8a1 1 0 0 0 1 1zM8 9h32V7H8zm34 2v26h2V11zM6 37V11H4v26zM5 17h38v-2H5zm14-4h20v-2H19zM8 39a2 2 0 0 1-2-2H4a4 4 0 0 0 4 4zm34-2a2 2 0 0 1-2 2v2a4 4 0 0 0 4-4zM40 9a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4zM8 7a4 4 0 0 0-4 4h2a2 2 0 0 1 2-2zm-4 4v5h2v-5zm40 5v-5h-2v5zm-6 3H10v2h28zm-24.371 9.929 5 2 .742-1.857-5-2zm6.078 1.778 5-5-1.414-1.414-5 5zm3.922-4.779 5 2 .742-1.857-5-2zM40 35V23h-2v12zm0-12v-2h-2v2zm0 16H24v2h16zm-16 0h-8v2h8zm-8 0H8v2h8zm-6.485-7.142 5-3-1.03-1.716-5 3zm20-4 5-3-1.03-1.716-5 3zm4.681-2.877 5-1-.392-1.962-5 1zM38 35H9v2h29zm-28 1V21H8v15zm-2-5v5h2v-5zm30-10h2a2 2 0 0 0-2-2zm0 14v2a2 2 0 0 0 2-2zM10 19a2 2 0 0 0-2 2h2zM10 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M16 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0" class="icon-dark"/><path fill="#F8C4CD" d="M35.243 41.243a6 6 0 1 1-8.486-8.485 6 6 0 0 1 8.486 8.485" class="icon-light-secondary"/><path stroke="#C62B49" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m32.5 35.5-3 3m3 0-3-3m5.743 5.743a6 6 0 1 1-8.486-8.485 6 6 0 0 1 8.486 8.485" class="icon-dark-secondary"/>'
      }
    }, ["48"], "technology-dashboard-fail"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "technology-dashboard-fail",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      48: {
        body: '<path fill="#E1E3ED" d="M40 8H8a3 3 0 0 0-3 3v5h38v-5a3 3 0 0 0-3-3" class="icon-light"/><path fill="#E1E3ED" fill-rule="evenodd" d="M8 8a3 3 0 0 0-3 3v5h38v-5a3 3 0 0 0-3-3z" class="icon-light" clip-rule="evenodd"/><path fill="#E1E3ED" d="m19 30-5-2-5 3v5h29a1 1 0 0 0 1-1V23l-5 1-5 3-5-2z" class="icon-light"/><path stroke="#9095AD" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12h20m4-1v26a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V11m38 0a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3m38 0v5H5v-5m34 12v12a1 1 0 0 1-1 1H9m30-13v-2a1 1 0 0 0-1-1H10a1 1 0 0 0-1 1v15m30-13-5 1-5 3-5-2-5 5-5-2-5 3v5" class="icon-dark"/><path fill="#9095AD" d="M10 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M16 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0" class="icon-dark"/><path fill="#fff" d="M39 37a8 8 0 1 1-16 0 8 8 0 0 1 16 0"/><path fill="currentColor" d="M37 37a6 6 0 1 1-12 0 6 6 0 0 1 12 0" class="icon-light"/><path fill="#C5C9FD" fill-rule="evenodd" d="M31 32a5 5 0 1 0 0 10 5 5 0 0 0 0-10m-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0" class="icon-light-secondary" clip-rule="evenodd"/><path fill="#4956E3" fill-rule="evenodd" d="M30 31a1 1 0 0 1 1-1 7 7 0 0 1 7 7 1 1 0 1 1-2 0 5 5 0 0 0-5-5 1 1 0 0 1-1-1" class="icon-dark-secondary" clip-rule="evenodd"/><path fill="#fff" d="M36 37a5 5 0 1 1-10 0 5 5 0 0 1 10 0"/>'
      }
    }, ["48"], "technology-dashboard-running"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "technology-dashboard-running",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3h3a1 1 0 0 1 1 1v.5M5 3H2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3m0-5V1m0 2v5m0 5h3a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H5m0 5H2a1 1 0 0 1-1-1v-.5M5 13v2m0-2V8" class="icon-dark"/>'
      }
    }, ["16"], "technology-dollar"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "technology-dollar",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      48: {
        body: '<path stroke="rgba(0,0,0,0.2)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M38.5 15v-1m-29 24h-2a3 3 0 0 1-3-3v-1m34-24V9a3 3 0 0 0-3-3h-1m-30 4V9a3 3 0 0 1 3-3h1m-4 24v-2.5m0-4v-3m0-4V14m8-8H16m4 0h3m4 0h3.5" class="icon-dark-secondary"/><path fill="#69D3A7" d="M26.086 15.586A2 2 0 0 0 24.672 15H13.5a1 1 0 0 0-1 1v5h12.172a2 2 0 0 0 1.414-.586L28.5 18z" class="icon-light"/><path fill="currentColor" d="M12.5 21h-1zm13.586-.586.707.707zM24.672 15v-1zm1.414.586.707-.707zM13.5 15v1zm10.707 13.707a.999.999 0 1 0-1.414-1.414zM21 30.5l-.707-.707a1 1 0 0 0 0 1.414zm1.793 3.207a.999.999 0 1 0 1.414-1.414zm9.414-6.414a.999.999 0 1 0-1.414 1.414zM34 30.5l.707.707a1 1 0 0 0 0-1.414zm-3.207 1.793a.999.999 0 1 0 1.414 1.414zm-5.269 2.49a1 1 0 1 0 1.952.434zm3.952-8.566a1 1 0 1 0-1.952-.434zM41.5 20v19h2V20zm-1 20h-26v2h26zm-27-24h11.172v-2H13.5zm11.879.293 2.414 2.414 1.414-1.414-2.414-2.414zM28.5 19h12v-2h-12zm-.707-1.707-2.414 2.414 1.414 1.414 2.414-2.414zM13.5 39V21h-2v18zm0-18v-5h-2v5zm11.172-1H12.5v2h12.172zm.707-.293a1 1 0 0 1-.707.293v2a3 3 0 0 0 2.121-.879zM24.672 16a1 1 0 0 1 .707.293l1.414-1.414A3 3 0 0 0 24.672 14zM14.5 40a1 1 0 0 1-1-1h-2a3 3 0 0 0 3 3zm27-1a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3zm2-19a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1zm-30-6a2 2 0 0 0-2 2h2zm9.293 13.293-2.5 2.5 1.414 1.414 2.5-2.5zm-2.5 3.914 2.5 2.5 1.414-1.414-2.5-2.5zm10.5-2.5 2.5 2.5 1.414-1.414-2.5-2.5zm2.5 1.086-2.5 2.5 1.414 1.414 2.5-2.5zm-5.817 5.424 2-9-1.952-.434-2 9z" class="icon-dark"/>'
      }
    }, ["48"], "technology-drag-project"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "technology-drag-project",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h1" class="icon-dark"/><path fill="currentColor" stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="m10 11 3 3 1-1-3-3 1.5-1.5L7 7l1.5 5.5z" class="icon-dark"/>'
      }
    }, ["16"], "technology-element-selector"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "technology-element-selector",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" d="M1 14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2l-2.5-2.5L10 12 5.5 7.5 1 12zM12 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" class="icon-light"/><path fill="currentColor" d="m5.5 7.5.707-.707a1 1 0 0 0-1.414 0zM10 12l-.707.707a1 1 0 0 0 1.414 0zm2.5-2.5.707-.707a1 1 0 0 0-1.414 0zM14 0H2v2h12zM2 14v-2H0v2zm0-2V2H0v10zm-.293.707 4.5-4.5-1.414-1.414-4.5 4.5zm3.086-4.5 4.5 4.5 1.414-1.414-4.5-4.5zm5.914 4.5 2.5-2.5-1.414-1.414-2.5 2.5zM16 14v-2h-2v2zm0-2V2h-2v10zm-4.207-1.793 2.5 2.5 1.414-1.414-2.5-2.5zM2 16h12v-2H2zm9-11v2a2 2 0 0 0 2-2zm0 0H9a2 2 0 0 0 2 2zm0 0V3a2 2 0 0 0-2 2zm0 0h2a2 2 0 0 0-2-2zm3-3h2a2 2 0 0 0-2-2zm0 12v2a2 2 0 0 0 2-2zM2 0a2 2 0 0 0-2 2h2zM0 14a2 2 0 0 0 2 2v-2z" class="icon-dark"/>'
      },
      24: {
        body: '<path fill="#C5C9FD" d="M3 19a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2l-3-3-3 3-6-6-6 6zM18 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0" class="icon-light"/><path fill="currentColor" d="m9 11 .707-.707a1 1 0 0 0-1.414 0zm6 6-.707.707a1 1 0 0 0 1.414 0zm3-3 .707-.707a1 1 0 0 0-1.414 0zm2-11H4v2h16zM4 19v-2H2v2zm0-2V5H2v12zm-.293.707 6-6-1.414-1.414-6 6zm4.586-6 6 6 1.414-1.414-6-6zm7.414 6 3-3-1.414-1.414-3 3zM22 19v-2h-2v2zm0-2V5h-2v12zm-4.707-2.293 3 3 1.414-1.414-3-3zM4 21h16v-2H4zM17 9a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3zm-1 1a1 1 0 0 1-1-1h-2a3 3 0 0 0 3 3zm-1-1a1 1 0 0 1 1-1V6a3 3 0 0 0-3 3zm1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3zm4-3h2a2 2 0 0 0-2-2zm0 14v2a2 2 0 0 0 2-2zM4 3a2 2 0 0 0-2 2h2zM2 19a2 2 0 0 0 2 2v-2z" class="icon-dark"/>'
      }
    }, ["16", "24"], "technology-image-screenshot"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "technology-image-screenshot",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="currentColor" d="M7 5v1h2V5zm2 6v-1H7v1zM5 7a2 2 0 0 1-2-2H1a4 4 0 0 0 4 4zM3 5a2 2 0 0 1 2-2V1a4 4 0 0 0-4 4zm2-2a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4zm8 8a2 2 0 0 1-2 2v2a4 4 0 0 0 4-4zm-2 2a2 2 0 0 1-2-2H7a4 4 0 0 0 4 4zm0-4a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4zm0-2H5v2h6z" class="icon-dark"/>'
      },
      20: {
        body: '<path fill="currentColor" d="M11 13v-1H9v1zM9 7v1h2V7zM5.5 9A3.5 3.5 0 0 1 2 5.5H0A5.5 5.5 0 0 0 5.5 11zM2 5.5A3.5 3.5 0 0 1 5.5 2V0A5.5 5.5 0 0 0 0 5.5zM5.5 2A3.5 3.5 0 0 1 9 5.5h2A5.5 5.5 0 0 0 5.5 0zM18 14.5a3.5 3.5 0 0 1-3.5 3.5v2a5.5 5.5 0 0 0 5.5-5.5zM14.5 18a3.5 3.5 0 0 1-3.5-3.5H9a5.5 5.5 0 0 0 5.5 5.5zm0-7a3.5 3.5 0 0 1 3.5 3.5h2A5.5 5.5 0 0 0 14.5 9zm0-2h-9v2h9zM11 14.5V13H9v1.5zm-2-9V7h2V5.5z" class="icon-dark"/>'
      },
      24: {
        body: '<path fill="currentColor" d="M13 15v-1h-2v1zm-2-6v1h2V9zm-3.5 2A3.5 3.5 0 0 1 4 7.5H2A5.5 5.5 0 0 0 7.5 13zM4 7.5A3.5 3.5 0 0 1 7.5 4V2A5.5 5.5 0 0 0 2 7.5zM7.5 4A3.5 3.5 0 0 1 11 7.5h2A5.5 5.5 0 0 0 7.5 2zM20 16.5a3.5 3.5 0 0 1-3.5 3.5v2a5.5 5.5 0 0 0 5.5-5.5zM16.5 20a3.5 3.5 0 0 1-3.5-3.5h-2a5.5 5.5 0 0 0 5.5 5.5zm0-7a3.5 3.5 0 0 1 3.5 3.5h2a5.5 5.5 0 0 0-5.5-5.5zm0-2h-9v2h9zM13 16.5V15h-2v1.5zm-2-9V9h2V7.5z" class="icon-dark"/>'
      }
    }, ["16", "20", "24"], "technology-infinity-loop"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "technology-infinity-loop",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      48: {
        body: '<path fill="#D0D2E0" d="M18.586 8.586A2 2 0 0 0 17.172 8H6a1 1 0 0 0-1 1v5h12.172a2 2 0 0 0 1.414-.586L21 11z" class="icon-light"/><path fill="currentColor" d="m18.586 13.414.707.707zM17.172 8v1zm1.414.586.707-.707zM5 38H4zM6 8V7zm36 5v25h2V13zm-1 26H7v2h34zM6 9h11.172V7H6zm11.879.293 2.414 2.414 1.414-1.414-2.414-2.414zM21 12h20v-2H21zm-.707-1.707-2.414 2.414 1.414 1.414 2.414-2.414zM6 38V14H4v24zm0-24V9H4v5zm11.172-1H5v2h12.172zm.707-.293a1 1 0 0 1-.707.293v2a3 3 0 0 0 2.12-.879zM17.172 9a1 1 0 0 1 .707.293l1.414-1.414A3 3 0 0 0 17.172 7zM7 39a1 1 0 0 1-1-1H4a3 3 0 0 0 3 3zm35-1a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3zm2-25a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1zM6 7a2 2 0 0 0-2 2h2z" class="icon-dark"/><path fill="#69D3A7" fill-rule="evenodd" d="M25 41a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2z" class="icon-light-secondary" clip-rule="evenodd"/><path stroke="#00814D" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M28 34h-1a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-1m-6 0v-2a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v2m-6 0h6m-3 4v1" class="icon-dark-secondary"/>'
      }
    }, ["48"], "technology-locked-project"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "technology-locked-project",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 2 4 14m5 0 3-12m2 4H3m10 4H2" class="icon-dark"/>'
      }
    }, ["16"], "technology-octothorpe"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "technology-octothorpe",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="currentColor" d="M2.5 12a1 1 0 1 0 2 0zm2-8a1 1 0 1 0-2 0zm7 8a1 1 0 1 0 2 0zm-4-8-.707-.707a1 1 0 0 0 0 1.414zM9 2.5h1a1 1 0 0 0-1.707-.707zm0 3-.707.707A1 1 0 0 0 10 5.5zM11.5 4v1zm-7 8V4h-2v8zm9 0V5h-2v7zm-2-9h-4v2h4zM8.207 4.707l1.5-1.5-1.414-1.414-1.5 1.5zm-1.414 0 1.5 1.5 1.414-1.414-1.5-1.5zM8 2.5v3h2v-3zM13.5 5a2 2 0 0 0-2-2v2z" class="icon-dark"/><path fill="#D0D2E0" stroke="currentColor" d="M5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm9 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" class="icon-light-fill icon-dark-stroke"/>'
      }
    }, ["16"], "technology-pull-request"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "technology-pull-request",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<rect width="14" height="6" x="1" y="2" fill="#D0D2E0" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="icon-dark-stroke icon-light-fill" rx="2"/><rect width="14" height="6" x="1" y="8" fill="#D0D2E0" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="icon-dark-stroke icon-light-fill" rx="2"/><path fill="currentColor" d="M13 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M10 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0" class="icon-dark"/>'
      }
    }, ["16"], "technology-server"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "technology-server",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" d="M15 3a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v1h14z" class="icon-light"/><path fill="#D0D2E0" fill-rule="evenodd" d="M15 3a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v1h14z" class="icon-light" clip-rule="evenodd"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 4v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4M1 4V3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1M1 4h14" class="icon-dark"/><path fill="currentColor" d="M4.5 7a.5.5 0 0 0 0 1zm1 1H6V7h-.5zm-1 1a.5.5 0 0 0 0 1zM6 10h.5V9H6zm-1.5 1a.5.5 0 0 0 0 1zm3 1H8v-1h-.5zm0-3H7v1h.5zM9 10a.5.5 0 0 0 0-1zm0 1h-.5v1H9zm2 1a.5.5 0 0 0 0-1zM7 7h-.5v1H7zm1 1h.5V7H8zm1.5-1H9v1h.5zm2 1a.5.5 0 0 0 0-1zm-7 0h1V7h-1zm0 2H6V9H4.5zm0 2h3v-1h-3zm3-2H9V9H7.5zM9 12h2v-1H9zM7 8h1V7H7zm2.5 0h2V7h-2z" class="icon-dark"/>'
      }
    }, ["16"], "technology-terminal-log"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "technology-terminal-log",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 4v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4M1 4V3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1M1 4h14M5 8l1.5 1.5L5 11" class="icon-dark" opacity=".7"/>'
      }
    }, ["16"], "technology-terminal"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "technology-terminal",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="currentColor" d="M1 10h3v3H1z" class="icon-dark"/><path fill="currentColor" d="M15 5.5a1 1 0 1 0 0-2zm-8-2a1 1 0 0 0 0 2zm8 9a1 1 0 1 0 0-2zm-8-2a1 1 0 1 0 0 2zM.293 5.293a1 1 0 0 0 1.414 1.414zm4.414-1.586a1 1 0 0 0-1.414-1.414zm-3-1.414A1 1 0 0 0 .293 3.707zm1.586 4.414a1 1 0 0 0 1.414-1.414zM1 10V9a1 1 0 0 0-1 1zm3 0h1a1 1 0 0 0-1-1zm0 3v1a1 1 0 0 0 1-1zm-3 0H0a1 1 0 0 0 1 1zm14-9.5H7v2h8zm0 7H7v2h8zM1.707 6.707l1.5-1.5-1.414-1.414-1.5 1.5zm1.5-1.5 1.5-1.5-1.414-1.414-1.5 1.5zm-2.914-1.5 1.5 1.5 1.414-1.414-1.5-1.5zm1.5 1.5 1.5 1.5 1.414-1.414-1.5-1.5zM1 11h3V9H1zm2-1v3h2v-3zm1 2H1v2h3zm-2 1v-3H0v3z" class="icon-dark"/>'
      },
      24: {
        body: '<path fill="#D0D2E0" d="M3 15h4v4H3z" class="icon-light"/><path fill="currentColor" d="M21 8a1 1 0 1 0 0-2zM11 6a1 1 0 1 0 0 2zm10 12a1 1 0 1 0 0-2zm-10-2a1 1 0 1 0 0 2zM2.293 8.293a1 1 0 0 0 1.414 1.414zm5.414-2.586a1 1 0 0 0-1.414-1.414zm-4-1.414a1 1 0 0 0-1.414 1.414zm2.586 5.414a1 1 0 0 0 1.414-1.414zM3 15v-1a1 1 0 0 0-1 1zm4 0h1a1 1 0 0 0-1-1zm0 4v1a1 1 0 0 0 1-1zm-4 0H2a1 1 0 0 0 1 1zM21 6H11v2h10zm0 10H11v2h10zM3.707 9.707l2-2-1.414-1.414-2 2zm2-2 2-2-1.414-1.414-2 2zm-3.414-2 2 2 1.414-1.414-2-2zm2 2 2 2 1.414-1.414-2-2zM3 16h4v-2H3zm3-1v4h2v-4zm1 3H3v2h4zm-3 1v-4H2v4z" class="icon-dark"/>'
      }
    }, ["16", "24"], "technology-test-results"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "technology-test-results",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      24: {
        body: '<path fill="#E1E3ED" stroke="currentColor" stroke-width="2" d="M21.428 9.885 7.294 7.058a.2.2 0 0 0-.235.235l2.827 14.134a.2.2 0 0 0 .375.05l2.615-5.23a.2.2 0 0 1 .32-.052l4.163 4.163a.2.2 0 0 0 .282 0l2.718-2.718a.2.2 0 0 0 0-.282l-4.163-4.163a.2.2 0 0 1 .052-.32l5.23-2.615a.2.2 0 0 0-.05-.375Z" class="icon-dark-stroke icon-light-fill"/><path fill="currentColor" fill-rule="evenodd" d="M10-.001a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1m8.207 3.207-1.06 1.06a1 1 0 1 1-1.415-1.413l1.06-1.061a1 1 0 1 1 1.415 1.414m-13.5 13.5a1 1 0 1 0-1.414-1.414l-1.06 1.06a1 1 0 1 0 1.413 1.415zM1.793 1.792a1 1 0 0 1 1.414 0l1.06 1.06a1 1 0 0 1-1.413 1.415l-1.061-1.06a1 1 0 0 1 0-1.415M1 8.999a1 1 0 1 0 0 2h1.5a1 1 0 1 0 0-2z" class="icon-dark" clip-rule="evenodd"/>'
      }
    }, ["24"], "technology-ui-coverage"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "technology-ui-coverage",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      24: {
        body: '<mask id="testing-type-component-solid_x24_svg__a" fill="#fff"><path d="M2 13h9v9H4a2 2 0 0 1-2-2zM13 2h7a2 2 0 0 1 2 2v7h-9z"/></mask><path fill="currentColor" d="M2 13h9v9H4a2 2 0 0 1-2-2zM13 2h7a2 2 0 0 1 2 2v7h-9z" class="icon-dark"/><path fill="currentColor" d="M11 13h2a2 2 0 0 0-2-2zm-9 0v-2a2 2 0 0 0-2 2zm9 9v2a2 2 0 0 0 2-2zm2-20V0h-2v2zm9 9v2h2v-2zm-9 0h-2v2h2zm-2 0H2v4h9zm-2 2v9h4v-9zm2 7H4v4h7zm-7 0v-7H0v7zm9-16h7V0h-7zm7 0v7h4V4zm2 5h-9v4h9zm-7 2V2h-4v9zm5-7h4a4 4 0 0 0-4-4zM4 20H0a4 4 0 0 0 4 4z" class="icon-dark" mask="url(#testing-type-component-solid_x24_svg__a)"/><path fill="#D0D2E0" d="M4 4h7v9h9v7a2 2 0 0 1-2 2h-7v-9H2V6a2 2 0 0 1 2-2" class="icon-light"/>'
      },
      64: {
        body: '<path fill="currentColor" d="M36 4h21a3 3 0 0 1 3 3v21H36zM32 56H11a3 3 0 0 1-3-3V32h24z" class="icon-dark"/><path fill="#D0D2E0" d="M11 8h21v24h24v21a3 3 0 0 1-3 3H32V32H8V11a3 3 0 0 1 3-3" class="icon-light"/>'
      }
    }, ["24", "64"], "testing-type-component-solid"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "testing-type-component-solid",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="currentColor" fill-opacity=".5" d="M2 10h4v4H2zM10 2h4v4h-4z" class="icon-dark"/><path fill="currentColor" d="M2 6V5a1 1 0 0 0-1 1zm4 0h1V5H6zm-4 8H1a1 1 0 0 0 1 1zm8-12V1H9v1zm4 0h1a1 1 0 0 0-1-1zm0 4v1h1V6zm-4 0H9v1h1zm0 4h1V9h-1zm0 4v1a1 1 0 0 0 1-1zM2 7h4V5H2zm3-1v4h2V6zm1 3H2v2h4zm-3 1V6H1v4zm2 0v4h2v-4zm1 3H2v2h4zm-3 1v-4H1v4zm7-11h4V1h-4zm3-1v4h2V2zm1 3h-4v2h4zm-3 1V2H9v4zm-5 5h4V9H6zm3-1v4h2v-4zm1 3H6v2h4z" class="icon-dark"/>'
      },
      24: {
        body: '<path fill="#D0D2E0" d="M3 14h7v7H4a1 1 0 0 1-1-1zM14 3h6a1 1 0 0 1 1 1v6h-7z" class="icon-light"/><path fill="currentColor" d="M10 7h1V6h-1zm4-4V2h-1v1zm7 7v1h1v-1zm-7 0h-1v1h1zm3 4h1v-1h-1zM4 8h6V6H4zm5-1v7h2V7zm1 6H3v2h7zm-6 1V8H2v6zm5 0v7h2v-7zm1 6H4v2h6zm-6 0v-6H2v6zM14 4h6V2h-6zm6 0v6h2V4zm1 5h-7v2h7zm-6 1V3h-2v7zm-5 5h7v-2h-7zm6-1v6h2v-6zm0 6h-6v2h6zm0 0v2a2 2 0 0 0 2-2zm4-16h2a2 2 0 0 0-2-2zM4 20H2a2 2 0 0 0 2 2zM4 6a2 2 0 0 0-2 2h2z" class="icon-dark"/>'
      },
      64: {
        body: '<path fill="#D0D2E0" d="M36 5h21.5A1.5 1.5 0 0 1 59 6.5V28H36zM32 32H9v21.5a1.5 1.5 0 0 0 1.5 1.5H32z" class="icon-light"/><path fill="currentColor" d="M32 9h1V8h-1zm4-4V4h-1v1zm23 23v1h1v-1zm-23 0h-1v1h1zm19 4h1v-1h-1zM10.5 10H32V8H10.5zM31 9v23h2V9zm1 22H9v2h23zm-22 1V10.5H8V32zm21 0v23h2V32zm1 22H10.5v2H32zm-22-.5V32H8v21.5zM36 6h21.5V4H36zm22 .5V28h2V6.5zM59 27H36v2h23zm-22 1V5h-2v23zm-5 5h23v-2H32zm22-1v21.5h2V32zm-.5 22H32v2h21.5zm.5-.5a.5.5 0 0 1-.5.5v2a2.5 2.5 0 0 0 2.5-2.5zM57.5 6a.5.5 0 0 1 .5.5h2A2.5 2.5 0 0 0 57.5 4zm-47 48a.5.5 0 0 1-.5-.5H8a2.5 2.5 0 0 0 2.5 2.5zm0-46A2.5 2.5 0 0 0 8 10.5h2a.5.5 0 0 1 .5-.5z" class="icon-dark"/>'
      }
    }, ["16", "24", "64"], "testing-type-component"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "testing-type-component",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      24: {
        body: '<path fill="#D0D2E0" d="M4 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" class="icon-light"/><path fill="currentColor" d="M20 21a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2v8a2 2 0 0 1-2 2H6v2a2 2 0 0 0 2 2zM6 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0M12 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0" class="icon-dark"/>'
      },
      64: {
        body: '<path fill="#D0D2E0" d="M9 8a3 3 0 0 0-3 3v33a3 3 0 0 0 3 3h37a3 3 0 0 0 3-3V11a3 3 0 0 0-3-3z" class="icon-light"/><path fill="currentColor" d="M55 56a3 3 0 0 0 3-3V20a3 3 0 0 0-3-3h-6v27a3 3 0 0 1-3 3H15v6a3 3 0 0 0 3 3z" class="icon-dark"/><path fill="currentColor" fill-rule="evenodd" d="M49 11a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v6h43zm-5 .5a1 1 0 1 1 0 2H25a1 1 0 1 1 0-2zm-33 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2m4-2a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2" class="icon-dark" clip-rule="evenodd"/>'
      }
    }, ["24", "64"], "testing-type-e2e-solid"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "testing-type-e2e-solid",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" d="M15 14V5h-3v6H4v3z" class="icon-light"/><path fill="currentColor" d="M15 5h1a1 1 0 0 0-1-1zM4 14H3a1 1 0 0 0 1 1zm11 0v1a1 1 0 0 0 1-1zM1 2V1a1 1 0 0 0-1 1zm11 0h1a1 1 0 0 0-1-1zM1 11H0a1 1 0 0 0 1 1zm11 0v1a1 1 0 0 0 1-1zm2-6v9h2V5zm1 8H4v2h11zM1 3h11V1H1zm11 7H4v2h8zm-8 0H1v2h3zm1 4v-3H3v3zm7-8h3V4h-3zm-1-4v3h2V2zm0 3v6h2V5zm-9 6V2H0v9zM4 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M6 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M8 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" class="icon-dark"/>'
      },
      24: {
        body: '<path fill="#D0D2E0" d="M20 20a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-3v7a1 1 0 0 1-1 1H7v3a1 1 0 0 0 1 1z" class="icon-light"/><path fill="currentColor" d="M6 6a1 1 0 0 0 0 2zm.01 2a1 1 0 0 0 0-2zM9 6a1 1 0 0 0 0 2zm.01 2a1 1 0 0 0 0-2zM12 6a1 1 0 1 0 0 2zm.01 2a1 1 0 1 0 0-2zM20 9v10h2V9zm0 10H8v2h12zM4 5h12V3H4zm12 10H7v2h9zm-9 0H4v2h3zm1 4v-3H6v3zm9-10h3V7h-3zm-1-4v3h2V5zm0 3v7h2V8zM4 15V5H2v10zm2-7h.01V6H6zm3 0h.01V6H9zm3 0h.01V6H12zm4 9a2 2 0 0 0 2-2h-2zM4 15H2a2 2 0 0 0 2 2zM16 5h2a2 2 0 0 0-2-2zM4 3a2 2 0 0 0-2 2h2zm16 16v2a2 2 0 0 0 2-2zM8 19H6a2 2 0 0 0 2 2zM22 9a2 2 0 0 0-2-2v2z" class="icon-dark"/>'
      },
      64: {
        body: '<path fill="#D0D2E0" d="M55.5 55a1.5 1.5 0 0 0 1.5-1.5v-34a1.5 1.5 0 0 0-1.5-1.5H48v26.5a1.5 1.5 0 0 1-1.5 1.5H16v7.5a1.5 1.5 0 0 0 1.5 1.5zM48 10.5A1.5 1.5 0 0 0 46.5 9h-38A1.5 1.5 0 0 0 7 10.5V18h41z" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 18v26.5A1.5 1.5 0 0 0 8.5 46H16M7 18v-7.5A1.5 1.5 0 0 1 8.5 9h38a1.5 1.5 0 0 1 1.5 1.5V18M7 18h41M16 46h30.5a1.5 1.5 0 0 0 1.5-1.5V18M16 46v7.5a1.5 1.5 0 0 0 1.5 1.5h38a1.5 1.5 0 0 0 1.5-1.5v-34a1.5 1.5 0 0 0-1.5-1.5H48m-5-4.5H25m-13.001 0h.014m3.987 0h.013m3.987 0h.013" class="icon-dark"/>'
      }
    }, ["16", "24", "64"], "testing-type-e2e"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "testing-type-e2e",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" fill-rule="evenodd" d="M14 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2h12z" class="icon-light" clip-rule="evenodd"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 6V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2m12 0v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6m12 0H2m3-5v2m6-2v2M5 9v1h1V9z" class="icon-dark"/>'
      }
    }, ["16"], "time-calendar-day"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "time-calendar-day",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4v4l2 1.5M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" class="icon-dark"/>'
      },
      24: {
        body: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7v5l3 2m6-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0" class="icon-dark"/>'
      }
    }, ["16", "24"], "time-clock"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "time-clock",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" fill-rule="evenodd" d="M13.5 9.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M8 9.993a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" class="icon-light" clip-rule="evenodd"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4V1m0 3c1.519 0 2.894.616 3.89 1.61M8 4a5.48 5.48 0 0 0-3.89 1.61M8 1h2M8 1H6m5.89 4.61a5.5 5.5 0 1 1-7.778 0m7.777 0L13 4.5M4.11 5.61 3 4.5m5 5 .357-.357M10 7.5 8.357 9.143m0 0a.498.498 0 0 1-.357.85.5.5 0 1 1 .357-.85" class="icon-dark"/>'
      }
    }, ["16"], "time-stopwatch"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "time-stopwatch",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="transparent" d="M8 1a7 7 0 0 0-4.9 12 5.01 5.01 0 0 1 3.043-3.644 3 3 0 1 1 3.714 0A5.01 5.01 0 0 1 12.9 13 7 7 0 0 0 8 1" class="icon-light"/><path stroke="currentColor" stroke-width="2" d="M6.143 9.356C6.653 9.76 7.299 10 8 10s1.346-.24 1.857-.644m-3.714 0a3 3 0 1 1 3.714 0m-3.714 0A5.01 5.01 0 0 0 3.1 13m6.757-3.643A5.01 5.01 0 0 1 12.9 13m0 0a7 7 0 1 0-9.8 0m9.8 0A6.98 6.98 0 0 1 8 15a6.98 6.98 0 0 1-4.9-2" class="icon-dark"/>'
      }
    }, ["16"], "user-general-outline"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "user-general-outline",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0" class="icon-light"/><path fill="#D0D2E0" d="M5 7a3 3 0 1 1 4.857 2.356A5.01 5.01 0 0 1 12.9 13 6.98 6.98 0 0 1 8 15a6.98 6.98 0 0 1-4.9-2 5.01 5.01 0 0 1 3.043-3.644A3 3 0 0 1 5 7" class="icon-light"/><path stroke="currentColor" stroke-width="2" d="M6.143 9.356C6.653 9.76 7.299 10 8 10s1.346-.24 1.857-.644m-3.714 0a3 3 0 1 1 3.714 0m-3.714 0A5.01 5.01 0 0 0 3.1 13 6.98 6.98 0 0 0 8 15a6.98 6.98 0 0 0 4.9-2 5.01 5.01 0 0 0-3.043-3.644" class="icon-dark"/>'
      }
    }, ["16"], "user-general-solid"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "user-general-solid",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="currentColor" fill-opacity=".4" d="M1 7h2v2H1zM1 1h2v2H1z" class="icon-dark"/><path fill="currentColor" d="M15 3a1 1 0 1 0 0-2zM6 1a1 1 0 0 0 0 2zm9 8a1 1 0 1 0 0-2zM6 7a1 1 0 1 0 0 2zM1 3H0a1 1 0 0 0 1 1zm2-2h1a1 1 0 0 0-1-1zM1 1V0a1 1 0 0 0-1 1zm2 2v1a1 1 0 0 0 1-1zM1 7V6a1 1 0 0 0-1 1zm2 0h1a1 1 0 0 0-1-1zm0 2v1a1 1 0 0 0 1-1zM1 9H0a1 1 0 0 0 1 1zm14-8H6v2h9zm0 6H6v2h9zM1 8h2V6H1zm1-1v2h2V7zm1 1H1v2h2zM2 9V7H0v2zM1 2h2V0H1zm3 1V1H2v2zM3 2H1v2h2zM2 3V1H0v2z" class="icon-dark"/>'
      }
    }, ["16"], "view-list"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "view-list",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="#D0D2E0" d="M8 1a7 7 0 0 1 7 7H8z" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8a7 7 0 0 1-11.95 4.95M15 8a7 7 0 0 0-7-7m7 7H8m0-7a6.98 6.98 0 0 0-4.95 2.05A6.98 6.98 0 0 0 1 8c0 1.933.784 3.683 2.05 4.95M8 1v7m-4.95 4.95L8 8" class="icon-dark"/>'
      },
      24: {
        body: '<path fill="#D0D2E0" d="M12 3a9 9 0 0 1 9 9h-9z" class="icon-light"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 0 1-15.364 6.364M21 12a9 9 0 0 0-9-9m9 9h-9m0-9a8.97 8.97 0 0 0-6.364 2.636A8.97 8.97 0 0 0 3 12a8.97 8.97 0 0 0 2.636 6.364M12 3v9m-6.364 6.364L12 12" class="icon-dark"/>'
      }
    }, ["16", "24"], "view-pie-chart"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "view-pie-chart",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="currentColor" d="M13 1.999h2v2h-2zM13 7.999h2v2h-2z" class="icon-dark"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 2.999v6h6m-6-6H1m3 0h6m3 1h2v-2h-2zm0 6h2v-2h-2z" class="icon-dark"/>'
      }
    }, ["16"], "view-tree-alt"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "view-tree-alt",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      16: {
        body: '<path fill="currentColor" fill-rule="evenodd" d="M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m6-8a8 8 0 1 0 0 16A8 8 0 0 0 8 0m1 5a1 1 0 0 0-2 0v3a1 1 0 0 0 2 0zm-1 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2" class="icon-dark" clip-rule="evenodd"/>'
      }
    }, ["16"], "warning-circle"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "warning-circle",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
defineComponent({
  ...d,
  setup(o, { attrs: t }) {
    const n = i(o, {
      8: {
        body: '<path fill="currentColor" fill-rule="evenodd" d="M4 0a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1" class="icon-dark" clip-rule="evenodd"/><path fill="currentColor" d="M5 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0" class="icon-dark"/>'
      }
    }, ["8"], "warning"), { componentProps: s, defs: e } = l(n), { shouldRenderDefs: r } = c(
      "warning",
      e
    );
    return () => h(s, e, r, t, o.class);
  }
});
const Fs = {
  running: {
    // <tw-keep strokeColor="indigo-400" />
    color: "indigo-400",
    use: "Runs, specs, groups, test results",
    variants: ["outline"],
    // <tw-keep fillColor="gray-100" />
    secondaryColor: "gray-100"
  },
  failing: {
    // <tw-keep strokeColor="red-400" />
    color: "red-400",
    use: "Runs, specs, groups, test results",
    variants: ["outline"],
    // <tw-keep fillColor="gray-100" />
    secondaryColor: "gray-100"
  },
  passed: {
    // <tw-keep strokeColor="jade-400" />
    color: "jade-400",
    use: "Runs, specs, groups, test results",
    link: "https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Passed",
    variants: ["outline", "simple", "solid"]
  },
  failed: {
    // <tw-keep strokeColor="red-400" />
    color: "red-400",
    use: "Runs, specs, groups, test results",
    link: "https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Failed",
    variants: ["outline", "simple", "solid"]
  },
  unclaimed: {
    // <tw-keep strokeColor="gray-100" />
    color: "gray-100",
    use: "Specs",
    variants: ["outline"]
  },
  placeholder: {
    // <tw-keep strokeColor="gray-300" />
    color: "gray-300",
    use: "Placeholder",
    variants: ["solid"]
  },
  cancelled: {
    // <tw-keep strokeColor="gray-300" />
    color: "gray-300",
    use: "Runs, specs, groups, test results",
    variants: ["outline", "solid"]
  },
  noTests: {
    // <tw-keep strokeColor="orange-400" />
    color: "orange-400",
    use: "Runs, specs, groups",
    variants: ["outline", "solid"]
  },
  errored: {
    // <tw-keep strokeColor="orange-400" />
    color: "orange-400",
    use: "Runs, specs, groups, test results",
    variants: ["outline", "solid"]
  },
  timedOut: {
    // <tw-keep strokeColor="orange-400" />
    color: "orange-400",
    use: "Runs, specs, groups, test results",
    variants: ["outline", "solid"]
  },
  overLimit: {
    // <tw-keep strokeColor="orange-400" />
    color: "orange-400",
    use: "Runs, specs, groups",
    link: "https://docs.cypress.io/faq/questions/dashboard-faq#What-happens-once-I-reach-the-test-results-limit",
    variants: ["outline", "solid"]
  },
  skipped: {
    // <tw-keep strokeColor="gray-400" />
    color: "gray-400",
    use: "Test results",
    link: "https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Skipped",
    variants: ["outline"]
  },
  pending: {
    // <tw-keep strokeColor="gray-300" />
    color: "gray-300",
    use: "Test results",
    link: "https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Pending",
    variants: ["outline"]
  }
}, is = Fs, Es = {
  running: {
    size4Icon: cyStatusRunningSimpleX4,
    size8Icon: cyStatusRunningSimpleX8,
    size12Icon: cyStatusRunningOutlineX12,
    size16Icon: cyStatusRunningOutlineX16,
    size24Icon: cyStatusRunningOutlineX24
  },
  failing: {
    size4Icon: cyStatusRunningSimpleX4,
    size8Icon: cyStatusRunningSimpleX8,
    size12Icon: cyStatusRunningOutlineX12,
    size16Icon: cyStatusFailingOutlineX16,
    size24Icon: cyStatusFailingOutlineX24
  },
  passed: {
    size4Icon: cyStatusPassedSimpleX4,
    size8Icon: cyStatusPassedSimpleX8,
    size12Icon: cyStatusPassedSimpleX12,
    size16Icon: cyStatusPassedOutlineX16,
    size24Icon: cyStatusPassedOutlineX24
  },
  failed: {
    size4Icon: cyStatusFailedSimpleX4,
    size8Icon: cyStatusFailedSimpleX8,
    size12Icon: cyStatusFailedSimpleX12,
    size16Icon: cyStatusFailedOutlineX16,
    size24Icon: cyStatusFailedOutlineX24
  },
  unclaimed: {
    size4Icon: cyStatusQueuedSimpleX4,
    size8Icon: cyStatusQueuedSimpleX8,
    size12Icon: cyStatusQueuedOutlineX12,
    size16Icon: cyStatusQueuedOutlineX16,
    size24Icon: cyStatusQueuedOutlineX24
  },
  placeholder: {
    size4Icon: cyStatusPlaceholderSimpleX4,
    size8Icon: cyStatusPlaceholderSimpleX8,
    size12Icon: cyStatusPlaceholderSolidX12,
    size16Icon: cyStatusPlaceholderSolidX16,
    size24Icon: cyStatusPlaceholderSolidX24
  },
  cancelled: {
    size4Icon: cyStatusCancelledSimpleX4,
    size8Icon: cyStatusCancelledSimpleX8,
    size12Icon: cyStatusCancelledSolidX12,
    size16Icon: cyStatusCancelledOutlineX16,
    size24Icon: cyStatusCancelledOutlineX24
  },
  noTests: {
    size4Icon: cyStatusErroredSimpleX4,
    size8Icon: cyStatusErroredSimpleX8,
    size12Icon: cyStatusErroredSolidX12,
    size16Icon: cyStatusErroredOutlineX16,
    size24Icon: cyStatusErroredOutlineX24
  },
  errored: {
    size4Icon: cyStatusErroredSimpleX4,
    size8Icon: cyStatusErroredSimpleX8,
    size12Icon: cyStatusErroredSolidX12,
    size16Icon: cyStatusErroredOutlineX16,
    size24Icon: cyStatusErroredOutlineX24
  },
  timedOut: {
    size4Icon: cyStatusErroredSimpleX4,
    size8Icon: cyStatusErroredSimpleX8,
    size12Icon: cyStatusErroredSolidX12,
    size16Icon: cyStatusErroredOutlineX16,
    size24Icon: cyStatusErroredOutlineX24
  },
  overLimit: {
    size4Icon: cyStatusErroredSimpleX4,
    size8Icon: cyStatusErroredSimpleX8,
    size12Icon: cyStatusErroredSolidX12,
    size16Icon: cyStatusErroredOutlineX16,
    size24Icon: cyStatusErroredOutlineX24
  },
  skipped: {
    size4Icon: cyStatusSkippedSimpleX4,
    size8Icon: cyStatusSkippedSimpleX8,
    size12Icon: cyStatusSkippedOutlineX12,
    size16Icon: cyStatusSkippedOutlineX16,
    size24Icon: cyStatusSkippedOutlineX24
  },
  pending: {
    size4Icon: cyStatusPendingSimpleX4,
    size8Icon: cyStatusPendingSimpleX8,
    size12Icon: cyStatusPendingOutlineX12,
    size16Icon: cyStatusPendingOutlineX16,
    size24Icon: cyStatusPendingOutlineX24
  }
}, $s = {
  running: {
    size4Icon: cyStatusRunningSimpleX4,
    size8Icon: cyStatusRunningSimpleX8,
    size12Icon: cyStatusRunningOutlineX12,
    size16Icon: cyStatusRunningOutlineX16,
    size24Icon: cyStatusRunningOutlineX24
  },
  failing: {
    size4Icon: cyStatusRunningSimpleX4,
    size8Icon: cyStatusRunningSimpleX8,
    size12Icon: cyStatusRunningOutlineX12,
    size16Icon: cyStatusFailingOutlineX16,
    size24Icon: cyStatusFailingOutlineX24
  },
  passed: {
    size4Icon: cyStatusPassedSimpleX4,
    size8Icon: cyStatusPassedSimpleX8,
    size12Icon: cyStatusPassedSimpleX12,
    size16Icon: cyStatusPassedSimpleX16,
    size24Icon: cyStatusPassedSimpleX24
  },
  failed: {
    size4Icon: cyStatusFailedSimpleX4,
    size8Icon: cyStatusFailedSimpleX8,
    size12Icon: cyStatusFailedSimpleX12,
    size16Icon: cyStatusFailedSimpleX16,
    size24Icon: cyStatusFailedSimpleX24
  },
  unclaimed: {
    size4Icon: cyStatusQueuedSimpleX4,
    size8Icon: cyStatusQueuedSimpleX8,
    size12Icon: cyStatusQueuedOutlineX12,
    size16Icon: cyStatusQueuedOutlineX16,
    size24Icon: cyStatusQueuedOutlineX24
  },
  placeholder: {
    size4Icon: cyStatusPlaceholderSimpleX4,
    size8Icon: cyStatusPlaceholderSimpleX8,
    size12Icon: cyStatusPlaceholderSolidX12,
    size16Icon: cyStatusPlaceholderSolidX16,
    size24Icon: cyStatusPlaceholderSolidX24
  },
  cancelled: {
    size4Icon: cyStatusCancelledSimpleX4,
    size8Icon: cyStatusCancelledSimpleX8,
    size12Icon: cyStatusCancelledSolidX12,
    size16Icon: cyStatusCancelledSolidX16,
    size24Icon: cyStatusCancelledSolidX24
  },
  noTests: {
    size4Icon: cyStatusErroredSimpleX4,
    size8Icon: cyStatusErroredSimpleX8,
    size12Icon: cyStatusErroredSolidX12,
    size16Icon: cyStatusErroredSolidX16,
    size24Icon: cyStatusErroredSolidX24
  },
  errored: {
    size4Icon: cyStatusErroredSimpleX4,
    size8Icon: cyStatusErroredSimpleX8,
    size12Icon: cyStatusErroredSolidX12,
    size16Icon: cyStatusErroredSolidX16,
    size24Icon: cyStatusErroredSolidX24
  },
  timedOut: {
    size4Icon: cyStatusErroredSimpleX4,
    size8Icon: cyStatusErroredSimpleX8,
    size12Icon: cyStatusErroredSolidX12,
    size16Icon: cyStatusErroredSolidX16,
    size24Icon: cyStatusErroredSolidX24
  },
  overLimit: {
    size4Icon: cyStatusErroredSimpleX4,
    size8Icon: cyStatusErroredSimpleX8,
    size12Icon: cyStatusErroredSolidX12,
    size16Icon: cyStatusErroredSolidX16,
    size24Icon: cyStatusErroredSolidX24
  },
  skipped: {
    size4Icon: cyStatusSkippedSimpleX4,
    size8Icon: cyStatusSkippedSimpleX8,
    size12Icon: cyStatusSkippedOutlineX12,
    size16Icon: cyStatusSkippedOutlineX16,
    size24Icon: cyStatusSkippedOutlineX24
  },
  pending: {
    size4Icon: cyStatusPendingSimpleX4,
    size8Icon: cyStatusPendingSimpleX8,
    size12Icon: cyStatusPendingOutlineX12,
    size16Icon: cyStatusPendingOutlineX16,
    size24Icon: cyStatusPendingOutlineX24
  }
}, bs = {
  running: {
    size4Icon: cyStatusRunningSimpleX4,
    size8Icon: cyStatusRunningSimpleX8,
    size12Icon: cyStatusRunningOutlineX12,
    size16Icon: cyStatusRunningOutlineX16,
    size24Icon: cyStatusRunningOutlineX24
  },
  failing: {
    size4Icon: cyStatusRunningSimpleX4,
    size8Icon: cyStatusRunningSimpleX8,
    size12Icon: cyStatusRunningOutlineX12,
    size16Icon: cyStatusFailingOutlineX16,
    size24Icon: cyStatusFailingOutlineX24
  },
  passed: {
    size4Icon: cyStatusPassedSimpleX4,
    size8Icon: cyStatusPassedSimpleX8,
    size12Icon: cyStatusPassedSimpleX12,
    size16Icon: cyStatusPassedSolidX16,
    size24Icon: cyStatusPassedSolidX24
  },
  failed: {
    size4Icon: cyStatusFailedSimpleX4,
    size8Icon: cyStatusFailedSimpleX8,
    size12Icon: cyStatusFailedSimpleX12,
    size16Icon: cyStatusFailedSolidX16,
    size24Icon: cyStatusFailedSolidX24
  },
  unclaimed: {
    size4Icon: cyStatusQueuedSimpleX4,
    size8Icon: cyStatusQueuedSimpleX8,
    size12Icon: cyStatusQueuedOutlineX12,
    size16Icon: cyStatusQueuedOutlineX16,
    size24Icon: cyStatusQueuedOutlineX24
  },
  placeholder: {
    size4Icon: cyStatusPlaceholderSimpleX4,
    size8Icon: cyStatusPlaceholderSimpleX8,
    size12Icon: cyStatusPlaceholderSolidX12,
    size16Icon: cyStatusPlaceholderSolidX16,
    size24Icon: cyStatusPlaceholderSolidX24
  },
  cancelled: {
    size4Icon: cyStatusCancelledSimpleX4,
    size8Icon: cyStatusCancelledSimpleX8,
    size12Icon: cyStatusCancelledSolidX12,
    size16Icon: cyStatusCancelledSolidX16,
    size24Icon: cyStatusCancelledSolidX24
  },
  noTests: {
    size4Icon: cyStatusErroredSimpleX4,
    size8Icon: cyStatusErroredSimpleX8,
    size12Icon: cyStatusErroredSolidX12,
    size16Icon: cyStatusErroredSolidX16,
    size24Icon: cyStatusErroredSolidX24
  },
  errored: {
    size4Icon: cyStatusErroredSimpleX4,
    size8Icon: cyStatusErroredSimpleX8,
    size12Icon: cyStatusErroredSolidX12,
    size16Icon: cyStatusErroredSolidX16,
    size24Icon: cyStatusErroredSolidX24
  },
  timedOut: {
    size4Icon: cyStatusErroredSimpleX4,
    size8Icon: cyStatusErroredSimpleX8,
    size12Icon: cyStatusErroredSolidX12,
    size16Icon: cyStatusErroredSolidX16,
    size24Icon: cyStatusErroredSolidX24
  },
  overLimit: {
    size4Icon: cyStatusErroredSimpleX4,
    size8Icon: cyStatusErroredSimpleX8,
    size12Icon: cyStatusErroredSolidX12,
    size16Icon: cyStatusErroredSolidX16,
    size24Icon: cyStatusErroredSolidX24
  },
  skipped: {
    size4Icon: cyStatusSkippedSimpleX4,
    size8Icon: cyStatusSkippedSimpleX8,
    size12Icon: cyStatusSkippedOutlineX12,
    size16Icon: cyStatusSkippedOutlineX16,
    size24Icon: cyStatusSkippedOutlineX24
  },
  pending: {
    size4Icon: cyStatusPendingSimpleX4,
    size8Icon: cyStatusPendingSimpleX8,
    size12Icon: cyStatusPendingOutlineX12,
    size16Icon: cyStatusPendingOutlineX16,
    size24Icon: cyStatusPendingOutlineX24
  }
}, Z = (o, s) => {
  const x = computed(() => {
    const { statuses: ss, variantName: cs } = s, { status: z, size: I, ...ts } = o, as = z ? ss[z] : ss.placeholder, es = z ? is[z] : is.placeholder, { data: ls } = as[`size${I}Icon`], us = ["inline-block"], { compiledClasses: zs } = getComponentAttributes({
      size: I,
      availableSizes: [I],
      strokeColor: es.color,
      fillColor: es.secondaryColor
    });
    return {
      name: `status_${z}_${I}_${cs}`,
      compiledClasses: [...zs, ...us],
      size: I,
      body: ls,
      ...ts
    };
  });
  return l(x);
}, Ts = defineComponent({
  props: ["size", "status"],
  setup(o) {
    const { componentProps: s } = Z(o, {
      variantName: "outline",
      statuses: Es
    });
    return () => h$1("svg", s.value);
  }
});
defineComponent({
  props: ["size", "status"],
  setup(o) {
    const { componentProps: s } = Z(o, {
      variantName: "simple",
      statuses: $s
    });
    return () => h$1("svg", s.value);
  }
});
const ws = defineComponent({
  props: ["size", "status"],
  setup(o) {
    const { componentProps: s } = Z(o, {
      variantName: "solid",
      statuses: bs
    });
    return () => h$1("svg", s.value);
  }
});
var gravatar$2 = { exports: {} };
var md5$1 = { exports: {} };
(function(module) {
  (function($) {
    function safeAdd(x, y2) {
      var lsw = (x & 65535) + (y2 & 65535);
      var msw = (x >> 16) + (y2 >> 16) + (lsw >> 16);
      return msw << 16 | lsw & 65535;
    }
    function bitRotateLeft(num, cnt) {
      return num << cnt | num >>> 32 - cnt;
    }
    function md5cmn(q, a, b, x, s, t) {
      return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
    }
    function md5ff(a, b, c2, d2, x, s, t) {
      return md5cmn(b & c2 | ~b & d2, a, b, x, s, t);
    }
    function md5gg(a, b, c2, d2, x, s, t) {
      return md5cmn(b & d2 | c2 & ~d2, a, b, x, s, t);
    }
    function md5hh(a, b, c2, d2, x, s, t) {
      return md5cmn(b ^ c2 ^ d2, a, b, x, s, t);
    }
    function md5ii(a, b, c2, d2, x, s, t) {
      return md5cmn(c2 ^ (b | ~d2), a, b, x, s, t);
    }
    function binlMD5(x, len) {
      x[len >> 5] |= 128 << len % 32;
      x[(len + 64 >>> 9 << 4) + 14] = len;
      var i2;
      var olda;
      var oldb;
      var oldc;
      var oldd;
      var a = 1732584193;
      var b = -271733879;
      var c2 = -1732584194;
      var d2 = 271733878;
      for (i2 = 0; i2 < x.length; i2 += 16) {
        olda = a;
        oldb = b;
        oldc = c2;
        oldd = d2;
        a = md5ff(a, b, c2, d2, x[i2], 7, -680876936);
        d2 = md5ff(d2, a, b, c2, x[i2 + 1], 12, -389564586);
        c2 = md5ff(c2, d2, a, b, x[i2 + 2], 17, 606105819);
        b = md5ff(b, c2, d2, a, x[i2 + 3], 22, -1044525330);
        a = md5ff(a, b, c2, d2, x[i2 + 4], 7, -176418897);
        d2 = md5ff(d2, a, b, c2, x[i2 + 5], 12, 1200080426);
        c2 = md5ff(c2, d2, a, b, x[i2 + 6], 17, -1473231341);
        b = md5ff(b, c2, d2, a, x[i2 + 7], 22, -45705983);
        a = md5ff(a, b, c2, d2, x[i2 + 8], 7, 1770035416);
        d2 = md5ff(d2, a, b, c2, x[i2 + 9], 12, -1958414417);
        c2 = md5ff(c2, d2, a, b, x[i2 + 10], 17, -42063);
        b = md5ff(b, c2, d2, a, x[i2 + 11], 22, -1990404162);
        a = md5ff(a, b, c2, d2, x[i2 + 12], 7, 1804603682);
        d2 = md5ff(d2, a, b, c2, x[i2 + 13], 12, -40341101);
        c2 = md5ff(c2, d2, a, b, x[i2 + 14], 17, -1502002290);
        b = md5ff(b, c2, d2, a, x[i2 + 15], 22, 1236535329);
        a = md5gg(a, b, c2, d2, x[i2 + 1], 5, -165796510);
        d2 = md5gg(d2, a, b, c2, x[i2 + 6], 9, -1069501632);
        c2 = md5gg(c2, d2, a, b, x[i2 + 11], 14, 643717713);
        b = md5gg(b, c2, d2, a, x[i2], 20, -373897302);
        a = md5gg(a, b, c2, d2, x[i2 + 5], 5, -701558691);
        d2 = md5gg(d2, a, b, c2, x[i2 + 10], 9, 38016083);
        c2 = md5gg(c2, d2, a, b, x[i2 + 15], 14, -660478335);
        b = md5gg(b, c2, d2, a, x[i2 + 4], 20, -405537848);
        a = md5gg(a, b, c2, d2, x[i2 + 9], 5, 568446438);
        d2 = md5gg(d2, a, b, c2, x[i2 + 14], 9, -1019803690);
        c2 = md5gg(c2, d2, a, b, x[i2 + 3], 14, -187363961);
        b = md5gg(b, c2, d2, a, x[i2 + 8], 20, 1163531501);
        a = md5gg(a, b, c2, d2, x[i2 + 13], 5, -1444681467);
        d2 = md5gg(d2, a, b, c2, x[i2 + 2], 9, -51403784);
        c2 = md5gg(c2, d2, a, b, x[i2 + 7], 14, 1735328473);
        b = md5gg(b, c2, d2, a, x[i2 + 12], 20, -1926607734);
        a = md5hh(a, b, c2, d2, x[i2 + 5], 4, -378558);
        d2 = md5hh(d2, a, b, c2, x[i2 + 8], 11, -2022574463);
        c2 = md5hh(c2, d2, a, b, x[i2 + 11], 16, 1839030562);
        b = md5hh(b, c2, d2, a, x[i2 + 14], 23, -35309556);
        a = md5hh(a, b, c2, d2, x[i2 + 1], 4, -1530992060);
        d2 = md5hh(d2, a, b, c2, x[i2 + 4], 11, 1272893353);
        c2 = md5hh(c2, d2, a, b, x[i2 + 7], 16, -155497632);
        b = md5hh(b, c2, d2, a, x[i2 + 10], 23, -1094730640);
        a = md5hh(a, b, c2, d2, x[i2 + 13], 4, 681279174);
        d2 = md5hh(d2, a, b, c2, x[i2], 11, -358537222);
        c2 = md5hh(c2, d2, a, b, x[i2 + 3], 16, -722521979);
        b = md5hh(b, c2, d2, a, x[i2 + 6], 23, 76029189);
        a = md5hh(a, b, c2, d2, x[i2 + 9], 4, -640364487);
        d2 = md5hh(d2, a, b, c2, x[i2 + 12], 11, -421815835);
        c2 = md5hh(c2, d2, a, b, x[i2 + 15], 16, 530742520);
        b = md5hh(b, c2, d2, a, x[i2 + 2], 23, -995338651);
        a = md5ii(a, b, c2, d2, x[i2], 6, -198630844);
        d2 = md5ii(d2, a, b, c2, x[i2 + 7], 10, 1126891415);
        c2 = md5ii(c2, d2, a, b, x[i2 + 14], 15, -1416354905);
        b = md5ii(b, c2, d2, a, x[i2 + 5], 21, -57434055);
        a = md5ii(a, b, c2, d2, x[i2 + 12], 6, 1700485571);
        d2 = md5ii(d2, a, b, c2, x[i2 + 3], 10, -1894986606);
        c2 = md5ii(c2, d2, a, b, x[i2 + 10], 15, -1051523);
        b = md5ii(b, c2, d2, a, x[i2 + 1], 21, -2054922799);
        a = md5ii(a, b, c2, d2, x[i2 + 8], 6, 1873313359);
        d2 = md5ii(d2, a, b, c2, x[i2 + 15], 10, -30611744);
        c2 = md5ii(c2, d2, a, b, x[i2 + 6], 15, -1560198380);
        b = md5ii(b, c2, d2, a, x[i2 + 13], 21, 1309151649);
        a = md5ii(a, b, c2, d2, x[i2 + 4], 6, -145523070);
        d2 = md5ii(d2, a, b, c2, x[i2 + 11], 10, -1120210379);
        c2 = md5ii(c2, d2, a, b, x[i2 + 2], 15, 718787259);
        b = md5ii(b, c2, d2, a, x[i2 + 9], 21, -343485551);
        a = safeAdd(a, olda);
        b = safeAdd(b, oldb);
        c2 = safeAdd(c2, oldc);
        d2 = safeAdd(d2, oldd);
      }
      return [a, b, c2, d2];
    }
    function binl2rstr(input) {
      var i2;
      var output = "";
      var length32 = input.length * 32;
      for (i2 = 0; i2 < length32; i2 += 8) {
        output += String.fromCharCode(input[i2 >> 5] >>> i2 % 32 & 255);
      }
      return output;
    }
    function rstr2binl(input) {
      var i2;
      var output = [];
      output[(input.length >> 2) - 1] = void 0;
      for (i2 = 0; i2 < output.length; i2 += 1) {
        output[i2] = 0;
      }
      var length8 = input.length * 8;
      for (i2 = 0; i2 < length8; i2 += 8) {
        output[i2 >> 5] |= (input.charCodeAt(i2 / 8) & 255) << i2 % 32;
      }
      return output;
    }
    function rstrMD5(s) {
      return binl2rstr(binlMD5(rstr2binl(s), s.length * 8));
    }
    function rstrHMACMD5(key, data) {
      var i2;
      var bkey = rstr2binl(key);
      var ipad = [];
      var opad = [];
      var hash;
      ipad[15] = opad[15] = void 0;
      if (bkey.length > 16) {
        bkey = binlMD5(bkey, key.length * 8);
      }
      for (i2 = 0; i2 < 16; i2 += 1) {
        ipad[i2] = bkey[i2] ^ 909522486;
        opad[i2] = bkey[i2] ^ 1549556828;
      }
      hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
      return binl2rstr(binlMD5(opad.concat(hash), 512 + 128));
    }
    function rstr2hex(input) {
      var hexTab = "0123456789abcdef";
      var output = "";
      var x;
      var i2;
      for (i2 = 0; i2 < input.length; i2 += 1) {
        x = input.charCodeAt(i2);
        output += hexTab.charAt(x >>> 4 & 15) + hexTab.charAt(x & 15);
      }
      return output;
    }
    function str2rstrUTF8(input) {
      return unescape(encodeURIComponent(input));
    }
    function rawMD5(s) {
      return rstrMD5(str2rstrUTF8(s));
    }
    function hexMD5(s) {
      return rstr2hex(rawMD5(s));
    }
    function rawHMACMD5(k, d2) {
      return rstrHMACMD5(str2rstrUTF8(k), str2rstrUTF8(d2));
    }
    function hexHMACMD5(k, d2) {
      return rstr2hex(rawHMACMD5(k, d2));
    }
    function md52(string, key, raw) {
      if (!key) {
        if (!raw) {
          return hexMD5(string);
        }
        return rawMD5(string);
      }
      if (!raw) {
        return hexHMACMD5(key, string);
      }
      return rawHMACMD5(key, string);
    }
    if (module.exports) {
      module.exports = md52;
    } else {
      $.md5 = md52;
    }
  })(commonjsGlobal$1);
})(md5$1);
var md5Exports = md5$1.exports;
/* @__PURE__ */ getDefaultExportFromCjs$1(md5Exports);
var querystring$1 = {};
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
var decode = function(qs, sep, eq, options) {
  sep = sep || "&";
  eq = eq || "=";
  var obj = {};
  if (typeof qs !== "string" || qs.length === 0) {
    return obj;
  }
  var regexp = /\+/g;
  qs = qs.split(sep);
  var maxKeys = 1e3;
  if (options && typeof options.maxKeys === "number") {
    maxKeys = options.maxKeys;
  }
  var len = qs.length;
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }
  for (var i2 = 0; i2 < len; ++i2) {
    var x = qs[i2].replace(regexp, "%20"), idx = x.indexOf(eq), kstr, vstr, k, v;
    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = "";
    }
    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);
    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (Array.isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }
  return obj;
};
var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case "string":
      return v;
    case "boolean":
      return v ? "true" : "false";
    case "number":
      return isFinite(v) ? v : "";
    default:
      return "";
  }
};
var encode = function(obj, sep, eq, name) {
  sep = sep || "&";
  eq = eq || "=";
  if (obj === null) {
    obj = void 0;
  }
  if (typeof obj === "object") {
    return Object.keys(obj).map(function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (Array.isArray(obj[k])) {
        return obj[k].map(function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);
  }
  if (!name)
    return "";
  return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
};
querystring$1.decode = querystring$1.parse = decode;
querystring$1.encode = querystring$1.stringify = encode;
var md5 = md5Exports, querystring = querystring$1, MD5_REGEX = /^[0-9a-f]{32}$/;
function params(options) {
  var params2 = {}, removing = { protocol: 1, format: 1 };
  for (var key in options) {
    if (!removing[key])
      params2[key] = options[key];
  }
  return params2;
}
function proto(options, protocol) {
  if (!options)
    return;
  if (typeof options.protocol === "boolean")
    return options.protocol;
  return options.protocol === "http" ? false : options.protocol === "https" ? true : void 0;
}
function getHash(email) {
  email = typeof email === "string" ? email.trim().toLowerCase() : "unspecified";
  return email.match(MD5_REGEX) ? email : md5(email);
}
function getQueryString(options) {
  var queryData = querystring.stringify(params(options));
  return queryData && "?" + queryData || "";
}
gravatar$2.exports = {
  url: function(email, options, protocol) {
    var baseURL = "//www.gravatar.com/avatar/";
    if (options && options.cdn) {
      baseURL = options.cdn + "/avatar/";
      delete options.cdn;
    } else {
      if (options && options.protocol)
        protocol = proto(options);
      if (typeof protocol !== "undefined") {
        baseURL = protocol ? "https://s.gravatar.com/avatar/" : "http://www.gravatar.com/avatar/";
      }
    }
    var query = getQueryString(options);
    return baseURL + getHash(email) + query;
  },
  profile_url: function(email, options, https) {
    var format = options != void 0 && options.format != void 0 ? String(options.format) : "json";
    var baseURL;
    if (options && options.cdn) {
      baseURL = options.cdn + "/";
      delete options.cdn;
    } else {
      if (options && options.protocol)
        https = proto(options);
      var baseURL = https && "https://secure.gravatar.com/" || "http://www.gravatar.com/";
    }
    var query = getQueryString(options);
    return baseURL + getHash(email) + "." + format + query;
  }
};
var gravatarExports = gravatar$2.exports;
var gravatar = gravatarExports;
const gravatar$1 = /* @__PURE__ */ getDefaultExportFromCjs$1(gravatar);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UserAvatar",
  props: {
    email: null
  },
  setup(__props) {
    const props = __props;
    const gravatarUrl = computed(() => {
      let opts = { size: "48", default: "mm" };
      if (!props.email) {
        opts.forcedefault = "y";
      }
      return gravatar$1.url(props.email, opts, true);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        style: normalizeStyle(`background-image: url(${unref(gravatarUrl)});`),
        class: "bg-cover border-[1px] border-gray-200 rounded-[50px] overflow-hidden",
        "data-cy": "user-avatar"
      }, null, 4);
    };
  }
});
var dayjs_min = { exports: {} };
(function(module, exports) {
  !function(t, e) {
    module.exports = e();
  }(commonjsGlobal$1, function() {
    var t = "millisecond", e = "second", n = "minute", r = "hour", i2 = "day", s = "week", u = "month", a = "quarter", o = "year", f = "date", h2 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, c2 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, d2 = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") }, $ = function(t2, e2, n2) {
      var r2 = String(t2);
      return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
    }, l2 = { s: $, z: function(t2) {
      var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i3 = n2 % 60;
      return (e2 <= 0 ? "+" : "-") + $(r2, 2, "0") + ":" + $(i3, 2, "0");
    }, m: function t2(e2, n2) {
      if (e2.date() < n2.date())
        return -t2(n2, e2);
      var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i3 = e2.clone().add(r2, u), s2 = n2 - i3 < 0, a2 = e2.clone().add(r2 + (s2 ? -1 : 1), u);
      return +(-(r2 + (n2 - i3) / (s2 ? i3 - a2 : a2 - i3)) || 0);
    }, a: function(t2) {
      return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
    }, p: function(h3) {
      return { M: u, y: o, w: s, d: i2, D: f, h: r, m: n, s: e, ms: t, Q: a }[h3] || String(h3 || "").toLowerCase().replace(/s$/, "");
    }, u: function(t2) {
      return void 0 === t2;
    } }, y2 = "en", M = {};
    M[y2] = d2;
    var m = function(t2) {
      return t2 instanceof S;
    }, D = function(t2, e2, n2) {
      var r2;
      if (!t2)
        return y2;
      if ("string" == typeof t2)
        M[t2] && (r2 = t2), e2 && (M[t2] = e2, r2 = t2);
      else {
        var i3 = t2.name;
        M[i3] = t2, r2 = i3;
      }
      return !n2 && r2 && (y2 = r2), r2 || !n2 && y2;
    }, v = function(t2, e2) {
      if (m(t2))
        return t2.clone();
      var n2 = "object" == typeof e2 ? e2 : {};
      return n2.date = t2, n2.args = arguments, new S(n2);
    }, g = l2;
    g.l = D, g.i = m, g.w = function(t2, e2) {
      return v(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
    };
    var S = function() {
      function d3(t2) {
        this.$L = D(t2.locale, null, true), this.parse(t2);
      }
      var $2 = d3.prototype;
      return $2.parse = function(t2) {
        this.$d = function(t3) {
          var e2 = t3.date, n2 = t3.utc;
          if (null === e2)
            return /* @__PURE__ */ new Date(NaN);
          if (g.u(e2))
            return /* @__PURE__ */ new Date();
          if (e2 instanceof Date)
            return new Date(e2);
          if ("string" == typeof e2 && !/Z$/i.test(e2)) {
            var r2 = e2.match(h2);
            if (r2) {
              var i3 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
              return n2 ? new Date(Date.UTC(r2[1], i3, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i3, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
            }
          }
          return new Date(e2);
        }(t2), this.$x = t2.x || {}, this.init();
      }, $2.init = function() {
        var t2 = this.$d;
        this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
      }, $2.$utils = function() {
        return g;
      }, $2.isValid = function() {
        return !("Invalid Date" === this.$d.toString());
      }, $2.isSame = function(t2, e2) {
        var n2 = v(t2);
        return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
      }, $2.isAfter = function(t2, e2) {
        return v(t2) < this.startOf(e2);
      }, $2.isBefore = function(t2, e2) {
        return this.endOf(e2) < v(t2);
      }, $2.$g = function(t2, e2, n2) {
        return g.u(t2) ? this[e2] : this.set(n2, t2);
      }, $2.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, $2.valueOf = function() {
        return this.$d.getTime();
      }, $2.startOf = function(t2, a2) {
        var h3 = this, c3 = !!g.u(a2) || a2, d4 = g.p(t2), $3 = function(t3, e2) {
          var n2 = g.w(h3.$u ? Date.UTC(h3.$y, e2, t3) : new Date(h3.$y, e2, t3), h3);
          return c3 ? n2 : n2.endOf(i2);
        }, l3 = function(t3, e2) {
          return g.w(h3.toDate()[t3].apply(h3.toDate("s"), (c3 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e2)), h3);
        }, y3 = this.$W, M2 = this.$M, m2 = this.$D, D2 = "set" + (this.$u ? "UTC" : "");
        switch (d4) {
          case o:
            return c3 ? $3(1, 0) : $3(31, 11);
          case u:
            return c3 ? $3(1, M2) : $3(0, M2 + 1);
          case s:
            var v2 = this.$locale().weekStart || 0, S2 = (y3 < v2 ? y3 + 7 : y3) - v2;
            return $3(c3 ? m2 - S2 : m2 + (6 - S2), M2);
          case i2:
          case f:
            return l3(D2 + "Hours", 0);
          case r:
            return l3(D2 + "Minutes", 1);
          case n:
            return l3(D2 + "Seconds", 2);
          case e:
            return l3(D2 + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, $2.endOf = function(t2) {
        return this.startOf(t2, false);
      }, $2.$set = function(s2, a2) {
        var h3, c3 = g.p(s2), d4 = "set" + (this.$u ? "UTC" : ""), $3 = (h3 = {}, h3[i2] = d4 + "Date", h3[f] = d4 + "Date", h3[u] = d4 + "Month", h3[o] = d4 + "FullYear", h3[r] = d4 + "Hours", h3[n] = d4 + "Minutes", h3[e] = d4 + "Seconds", h3[t] = d4 + "Milliseconds", h3)[c3], l3 = c3 === i2 ? this.$D + (a2 - this.$W) : a2;
        if (c3 === u || c3 === o) {
          var y3 = this.clone().set(f, 1);
          y3.$d[$3](l3), y3.init(), this.$d = y3.set(f, Math.min(this.$D, y3.daysInMonth())).$d;
        } else
          $3 && this.$d[$3](l3);
        return this.init(), this;
      }, $2.set = function(t2, e2) {
        return this.clone().$set(t2, e2);
      }, $2.get = function(t2) {
        return this[g.p(t2)]();
      }, $2.add = function(t2, a2) {
        var f2, h3 = this;
        t2 = Number(t2);
        var c3 = g.p(a2), d4 = function(e2) {
          var n2 = v(h3);
          return g.w(n2.date(n2.date() + Math.round(e2 * t2)), h3);
        };
        if (c3 === u)
          return this.set(u, this.$M + t2);
        if (c3 === o)
          return this.set(o, this.$y + t2);
        if (c3 === i2)
          return d4(1);
        if (c3 === s)
          return d4(7);
        var $3 = (f2 = {}, f2[n] = 6e4, f2[r] = 36e5, f2[e] = 1e3, f2)[c3] || 1, l3 = this.$d.getTime() + t2 * $3;
        return g.w(l3, this);
      }, $2.subtract = function(t2, e2) {
        return this.add(-1 * t2, e2);
      }, $2.format = function(t2) {
        var e2 = this;
        if (!this.isValid())
          return "Invalid Date";
        var n2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", r2 = g.z(this), i3 = this.$locale(), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = i3.weekdays, f2 = i3.months, h3 = function(t3, r3, i4, s3) {
          return t3 && (t3[r3] || t3(e2, n2)) || i4[r3].substr(0, s3);
        }, d4 = function(t3) {
          return g.s(s2 % 12 || 12, t3, "0");
        }, $3 = i3.meridiem || function(t3, e3, n3) {
          var r3 = t3 < 12 ? "AM" : "PM";
          return n3 ? r3.toLowerCase() : r3;
        }, l3 = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: a2 + 1, MM: g.s(a2 + 1, 2, "0"), MMM: h3(i3.monthsShort, a2, f2, 3), MMMM: h3(f2, a2), D: this.$D, DD: g.s(this.$D, 2, "0"), d: String(this.$W), dd: h3(i3.weekdaysMin, this.$W, o2, 2), ddd: h3(i3.weekdaysShort, this.$W, o2, 3), dddd: o2[this.$W], H: String(s2), HH: g.s(s2, 2, "0"), h: d4(1), hh: d4(2), a: $3(s2, u2, true), A: $3(s2, u2, false), m: String(u2), mm: g.s(u2, 2, "0"), s: String(this.$s), ss: g.s(this.$s, 2, "0"), SSS: g.s(this.$ms, 3, "0"), Z: r2 };
        return n2.replace(c2, function(t3, e3) {
          return e3 || l3[t3] || r2.replace(":", "");
        });
      }, $2.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, $2.diff = function(t2, f2, h3) {
        var c3, d4 = g.p(f2), $3 = v(t2), l3 = 6e4 * ($3.utcOffset() - this.utcOffset()), y3 = this - $3, M2 = g.m(this, $3);
        return M2 = (c3 = {}, c3[o] = M2 / 12, c3[u] = M2, c3[a] = M2 / 3, c3[s] = (y3 - l3) / 6048e5, c3[i2] = (y3 - l3) / 864e5, c3[r] = y3 / 36e5, c3[n] = y3 / 6e4, c3[e] = y3 / 1e3, c3)[d4] || y3, h3 ? M2 : g.a(M2);
      }, $2.daysInMonth = function() {
        return this.endOf(u).$D;
      }, $2.$locale = function() {
        return M[this.$L];
      }, $2.locale = function(t2, e2) {
        if (!t2)
          return this.$L;
        var n2 = this.clone(), r2 = D(t2, e2, true);
        return r2 && (n2.$L = r2), n2;
      }, $2.clone = function() {
        return g.w(this.$d, this);
      }, $2.toDate = function() {
        return new Date(this.valueOf());
      }, $2.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, $2.toISOString = function() {
        return this.$d.toISOString();
      }, $2.toString = function() {
        return this.$d.toUTCString();
      }, d3;
    }(), p = S.prototype;
    return v.prototype = p, [["$ms", t], ["$s", e], ["$m", n], ["$H", r], ["$W", i2], ["$M", u], ["$y", o], ["$D", f]].forEach(function(t2) {
      p[t2[1]] = function(e2) {
        return this.$g(e2, t2[0], t2[1]);
      };
    }), v.extend = function(t2, e2) {
      return t2.$i || (t2(e2, S, v), t2.$i = true), v;
    }, v.locale = D, v.isDayjs = m, v.unix = function(t2) {
      return v(1e3 * t2);
    }, v.en = M[y2], v.Ls = M, v.p = {}, v;
  });
})(dayjs_min);
var dayjs_minExports = dayjs_min.exports;
const dayjs = /* @__PURE__ */ getDefaultExportFromCjs$1(dayjs_minExports);
var relativeTime$1 = { exports: {} };
(function(module, exports) {
  !function(r, t) {
    module.exports = t();
  }(commonjsGlobal$1, function() {
    return function(r, t, e) {
      r = r || {};
      var n = t.prototype, o = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
      function i2(r2, t2, e2, o2) {
        return n.fromToBase(r2, t2, e2, o2);
      }
      e.en.relativeTime = o, n.fromToBase = function(t2, n2, i3, d3, u) {
        for (var a, f, s, l2 = i3.$locale().relativeTime || o, h2 = r.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], m = h2.length, c2 = 0; c2 < m; c2 += 1) {
          var y2 = h2[c2];
          y2.d && (a = d3 ? e(t2).diff(i3, y2.d, true) : i3.diff(t2, y2.d, true));
          var p = (r.rounding || Math.round)(Math.abs(a));
          if (s = a > 0, p <= y2.r || !y2.r) {
            p <= 1 && c2 > 0 && (y2 = h2[c2 - 1]);
            var v = l2[y2.l];
            u && (p = u("" + p)), f = "string" == typeof v ? v.replace("%d", p) : v(p, n2, y2.l, s);
            break;
          }
        }
        if (n2)
          return f;
        var M = s ? l2.future : l2.past;
        return "function" == typeof M ? M(f) : M.replace("%s", f);
      }, n.to = function(r2, t2) {
        return i2(r2, t2, this, true);
      }, n.from = function(r2, t2) {
        return i2(r2, t2, this);
      };
      var d2 = function(r2) {
        return r2.$u ? e.utc() : e();
      };
      n.toNow = function(r2) {
        return this.to(d2(this), r2);
      }, n.fromNow = function(r2) {
        return this.from(d2(this), r2);
      };
    };
  });
})(relativeTime$1);
var relativeTimeExports = relativeTime$1.exports;
const relativeTime = /* @__PURE__ */ getDefaultExportFromCjs$1(relativeTimeExports);
var duration$1 = { exports: {} };
(function(module, exports) {
  !function(t, s) {
    module.exports = s();
  }(commonjsGlobal$1, function() {
    var t, s, n = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, i2 = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, e = { years: 31536e6, months: 2592e6, days: 864e5, hours: 36e5, minutes: 6e4, seconds: 1e3, milliseconds: 1, weeks: 6048e5 }, r = function(t2) {
      return t2 instanceof c2;
    }, o = function(t2, s2, n2) {
      return new c2(t2, n2, s2.$l);
    }, u = function(t2) {
      return s.p(t2) + "s";
    }, h2 = function(t2) {
      return t2 < 0;
    }, a = function(t2) {
      return h2(t2) ? Math.ceil(t2) : Math.floor(t2);
    }, d2 = function(t2, s2) {
      return t2 ? h2(t2) ? { negative: true, format: "" + function(t3) {
        return Math.abs(t3);
      }(t2) + s2 } : { negative: false, format: "" + t2 + s2 } : { negative: false, format: "" };
    }, c2 = function() {
      function h3(t2, s2, n2) {
        var r2 = this;
        if (this.$d = {}, this.$l = n2, s2)
          return o(t2 * e[u(s2)], this);
        if ("number" == typeof t2)
          return this.$ms = t2, this.parseFromMilliseconds(), this;
        if ("object" == typeof t2)
          return Object.keys(t2).forEach(function(s3) {
            r2.$d[u(s3)] = t2[s3];
          }), this.calMilliseconds(), this;
        if ("string" == typeof t2) {
          var h4 = t2.match(i2);
          if (h4)
            return this.$d.years = h4[2], this.$d.months = h4[3], this.$d.weeks = h4[4], this.$d.days = h4[5], this.$d.hours = h4[6], this.$d.minutes = h4[7], this.$d.seconds = h4[8], this.calMilliseconds(), this;
        }
        return this;
      }
      var c3 = h3.prototype;
      return c3.calMilliseconds = function() {
        var t2 = this;
        this.$ms = Object.keys(this.$d).reduce(function(s2, n2) {
          return s2 + (t2.$d[n2] || 0) * e[n2];
        }, 0);
      }, c3.parseFromMilliseconds = function() {
        var t2 = this.$ms;
        this.$d.years = a(t2 / 31536e6), t2 %= 31536e6, this.$d.months = a(t2 / 2592e6), t2 %= 2592e6, this.$d.days = a(t2 / 864e5), t2 %= 864e5, this.$d.hours = a(t2 / 36e5), t2 %= 36e5, this.$d.minutes = a(t2 / 6e4), t2 %= 6e4, this.$d.seconds = a(t2 / 1e3), t2 %= 1e3, this.$d.milliseconds = t2;
      }, c3.toISOString = function() {
        var t2 = d2(this.$d.years, "Y"), s2 = d2(this.$d.months, "M"), n2 = +this.$d.days || 0;
        this.$d.weeks && (n2 += 7 * this.$d.weeks);
        var i3 = d2(n2, "D"), e2 = d2(this.$d.hours, "H"), r2 = d2(this.$d.minutes, "M"), o2 = this.$d.seconds || 0;
        this.$d.milliseconds && (o2 += this.$d.milliseconds / 1e3);
        var u2 = d2(o2, "S"), h4 = t2.negative || s2.negative || i3.negative || e2.negative || r2.negative || u2.negative, a2 = e2.format || r2.format || u2.format ? "T" : "", c4 = (h4 ? "-" : "") + "P" + t2.format + s2.format + i3.format + a2 + e2.format + r2.format + u2.format;
        return "P" === c4 || "-P" === c4 ? "P0D" : c4;
      }, c3.toJSON = function() {
        return this.toISOString();
      }, c3.format = function(t2) {
        var i3 = t2 || "YYYY-MM-DDTHH:mm:ss", e2 = { Y: this.$d.years, YY: s.s(this.$d.years, 2, "0"), YYYY: s.s(this.$d.years, 4, "0"), M: this.$d.months, MM: s.s(this.$d.months, 2, "0"), D: this.$d.days, DD: s.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: s.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: s.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: s.s(this.$d.seconds, 2, "0"), SSS: s.s(this.$d.milliseconds, 3, "0") };
        return i3.replace(n, function(t3, s2) {
          return s2 || String(e2[t3]);
        });
      }, c3.as = function(t2) {
        return this.$ms / e[u(t2)];
      }, c3.get = function(t2) {
        var s2 = this.$ms, n2 = u(t2);
        return "milliseconds" === n2 ? s2 %= 1e3 : s2 = "weeks" === n2 ? a(s2 / e[n2]) : this.$d[n2], 0 === s2 ? 0 : s2;
      }, c3.add = function(t2, s2, n2) {
        var i3;
        return i3 = s2 ? t2 * e[u(s2)] : r(t2) ? t2.$ms : o(t2, this).$ms, o(this.$ms + i3 * (n2 ? -1 : 1), this);
      }, c3.subtract = function(t2, s2) {
        return this.add(t2, s2, true);
      }, c3.locale = function(t2) {
        var s2 = this.clone();
        return s2.$l = t2, s2;
      }, c3.clone = function() {
        return o(this.$ms, this);
      }, c3.humanize = function(s2) {
        return t().add(this.$ms, "ms").locale(this.$l).fromNow(!s2);
      }, c3.milliseconds = function() {
        return this.get("milliseconds");
      }, c3.asMilliseconds = function() {
        return this.as("milliseconds");
      }, c3.seconds = function() {
        return this.get("seconds");
      }, c3.asSeconds = function() {
        return this.as("seconds");
      }, c3.minutes = function() {
        return this.get("minutes");
      }, c3.asMinutes = function() {
        return this.as("minutes");
      }, c3.hours = function() {
        return this.get("hours");
      }, c3.asHours = function() {
        return this.as("hours");
      }, c3.days = function() {
        return this.get("days");
      }, c3.asDays = function() {
        return this.as("days");
      }, c3.weeks = function() {
        return this.get("weeks");
      }, c3.asWeeks = function() {
        return this.as("weeks");
      }, c3.months = function() {
        return this.get("months");
      }, c3.asMonths = function() {
        return this.as("months");
      }, c3.years = function() {
        return this.get("years");
      }, c3.asYears = function() {
        return this.as("years");
      }, h3;
    }();
    return function(n2, i3, e2) {
      t = e2, s = e2().$utils(), e2.duration = function(t2, s2) {
        var n3 = e2.locale();
        return o(t2, { $l: n3 }, s2);
      }, e2.isDuration = r;
      var u2 = i3.prototype.add, h3 = i3.prototype.subtract;
      i3.prototype.add = function(t2, s2) {
        return r(t2) && (t2 = t2.asMilliseconds()), u2.bind(this)(t2, s2);
      }, i3.prototype.subtract = function(t2, s2) {
        return r(t2) && (t2 = t2.asMilliseconds()), h3.bind(this)(t2, s2);
      };
    };
  });
})(duration$1);
var durationExports = duration$1.exports;
const duration = /* @__PURE__ */ getDefaultExportFromCjs$1(durationExports);
var customParseFormat$1 = { exports: {} };
(function(module, exports) {
  !function(t, e) {
    module.exports = e();
  }(commonjsGlobal$1, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, e = function(e2, n2) {
      return e2.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(e3, r2, i3) {
        var o2 = i3 && i3.toUpperCase();
        return r2 || n2[i3] || t[i3] || n2[o2].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(t2, e4, n3) {
          return e4 || n3.slice(1);
        });
      });
    }, n = /(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, r = /\d\d/, i2 = /\d\d?/, o = /\d*[^\s\d-_:/()]+/, s = {};
    var a = function(t2) {
      return function(e2) {
        this[t2] = +e2;
      };
    }, f = [/[+-]\d\d:?(\d\d)?/, function(t2) {
      (this.zone || (this.zone = {})).offset = function(t3) {
        if (!t3)
          return 0;
        var e2 = t3.match(/([+-]|\d\d)/g), n2 = 60 * e2[1] + (+e2[2] || 0);
        return 0 === n2 ? 0 : "+" === e2[0] ? -n2 : n2;
      }(t2);
    }], u = function(t2) {
      var e2 = s[t2];
      return e2 && (e2.indexOf ? e2 : e2.s.concat(e2.f));
    }, h2 = function(t2, e2) {
      var n2, r2 = s.meridiem;
      if (r2) {
        for (var i3 = 1; i3 <= 24; i3 += 1)
          if (t2.indexOf(r2(i3, 0, e2)) > -1) {
            n2 = i3 > 12;
            break;
          }
      } else
        n2 = t2 === (e2 ? "pm" : "PM");
      return n2;
    }, d2 = { A: [o, function(t2) {
      this.afternoon = h2(t2, false);
    }], a: [o, function(t2) {
      this.afternoon = h2(t2, true);
    }], S: [/\d/, function(t2) {
      this.milliseconds = 100 * +t2;
    }], SS: [r, function(t2) {
      this.milliseconds = 10 * +t2;
    }], SSS: [/\d{3}/, function(t2) {
      this.milliseconds = +t2;
    }], s: [i2, a("seconds")], ss: [i2, a("seconds")], m: [i2, a("minutes")], mm: [i2, a("minutes")], H: [i2, a("hours")], h: [i2, a("hours")], HH: [i2, a("hours")], hh: [i2, a("hours")], D: [i2, a("day")], DD: [r, a("day")], Do: [o, function(t2) {
      var e2 = s.ordinal, n2 = t2.match(/\d+/);
      if (this.day = n2[0], e2)
        for (var r2 = 1; r2 <= 31; r2 += 1)
          e2(r2).replace(/\[|\]/g, "") === t2 && (this.day = r2);
    }], M: [i2, a("month")], MM: [r, a("month")], MMM: [o, function(t2) {
      var e2 = u("months"), n2 = (u("monthsShort") || e2.map(function(t3) {
        return t3.substr(0, 3);
      })).indexOf(t2) + 1;
      if (n2 < 1)
        throw new Error();
      this.month = n2 % 12 || n2;
    }], MMMM: [o, function(t2) {
      var e2 = u("months").indexOf(t2) + 1;
      if (e2 < 1)
        throw new Error();
      this.month = e2 % 12 || e2;
    }], Y: [/[+-]?\d+/, a("year")], YY: [r, function(t2) {
      t2 = +t2, this.year = t2 + (t2 > 68 ? 1900 : 2e3);
    }], YYYY: [/\d{4}/, a("year")], Z: f, ZZ: f };
    var c2 = function(t2, r2, i3) {
      try {
        var o2 = function(t3) {
          for (var r3 = (t3 = e(t3, s && s.formats)).match(n), i4 = r3.length, o3 = 0; o3 < i4; o3 += 1) {
            var a3 = r3[o3], f3 = d2[a3], u3 = f3 && f3[0], h4 = f3 && f3[1];
            r3[o3] = h4 ? { regex: u3, parser: h4 } : a3.replace(/^\[|\]$/g, "");
          }
          return function(t4) {
            for (var e2 = {}, n2 = 0, o4 = 0; n2 < i4; n2 += 1) {
              var s2 = r3[n2];
              if ("string" == typeof s2)
                o4 += s2.length;
              else {
                var a4 = s2.regex, f4 = s2.parser, u4 = t4.substr(o4), h5 = a4.exec(u4)[0];
                f4.call(e2, h5), t4 = t4.replace(h5, "");
              }
            }
            return function(t5) {
              var e3 = t5.afternoon;
              if (void 0 !== e3) {
                var n3 = t5.hours;
                e3 ? n3 < 12 && (t5.hours += 12) : 12 === n3 && (t5.hours = 0), delete t5.afternoon;
              }
            }(e2), e2;
          };
        }(r2)(t2), a2 = o2.year, f2 = o2.month, u2 = o2.day, h3 = o2.hours, c3 = o2.minutes, m = o2.seconds, l2 = o2.milliseconds, M = o2.zone, Y = /* @__PURE__ */ new Date(), v = u2 || (a2 || f2 ? 1 : Y.getDate()), p = a2 || Y.getFullYear(), D = 0;
        a2 && !f2 || (D = f2 > 0 ? f2 - 1 : Y.getMonth());
        var y2 = h3 || 0, L = c3 || 0, g = m || 0, $ = l2 || 0;
        return M ? new Date(Date.UTC(p, D, v, y2, L, g, $ + 60 * M.offset * 1e3)) : i3 ? new Date(Date.UTC(p, D, v, y2, L, g, $)) : new Date(p, D, v, y2, L, g, $);
      } catch (t3) {
        return /* @__PURE__ */ new Date("");
      }
    };
    return function(t2, e2, n2) {
      n2.p.customParseFormat = true;
      var r2 = e2.prototype, i3 = r2.parse;
      r2.parse = function(t3) {
        var e3 = t3.date, r3 = t3.utc, o2 = t3.args;
        this.$u = r3;
        var a2 = o2[1];
        if ("string" == typeof a2) {
          var f2 = true === o2[2], u2 = true === o2[3], h3 = f2 || u2, d3 = o2[2];
          u2 && (d3 = o2[2]), s = this.$locale(), !f2 && d3 && (s = n2.Ls[d3]), this.$d = c2(e3, a2, r3), this.init(), d3 && true !== d3 && (this.$L = this.locale(d3).$L), h3 && e3 !== this.format(a2) && (this.$d = /* @__PURE__ */ new Date("")), s = {};
        } else if (a2 instanceof Array)
          for (var m = a2.length, l2 = 1; l2 <= m; l2 += 1) {
            o2[1] = a2[l2 - 1];
            var M = n2.apply(this, o2);
            if (M.isValid()) {
              this.$d = M.$d, this.$L = M.$L, this.init();
              break;
            }
            l2 === m && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          i3.call(this, t3);
      };
    };
  });
})(customParseFormat$1);
var customParseFormatExports = customParseFormat$1.exports;
const customParseFormat = /* @__PURE__ */ getDefaultExportFromCjs$1(customParseFormatExports);
var utc$1 = { exports: {} };
(function(module, exports) {
  !function(t, i2) {
    module.exports = i2();
  }(commonjsGlobal$1, function() {
    return function(t, i2, e) {
      var s = i2.prototype;
      e.utc = function(t2) {
        return new i2({ date: t2, utc: true, args: arguments });
      }, s.utc = function(t2) {
        var i3 = e(this.toDate(), { locale: this.$L, utc: true });
        return t2 ? i3.add(this.utcOffset(), "minute") : i3;
      }, s.local = function() {
        return e(this.toDate(), { locale: this.$L, utc: false });
      };
      var f = s.parse;
      s.parse = function(t2) {
        t2.utc && (this.$u = true), this.$utils().u(t2.$offset) || (this.$offset = t2.$offset), f.call(this, t2);
      };
      var n = s.init;
      s.init = function() {
        if (this.$u) {
          var t2 = this.$d;
          this.$y = t2.getUTCFullYear(), this.$M = t2.getUTCMonth(), this.$D = t2.getUTCDate(), this.$W = t2.getUTCDay(), this.$H = t2.getUTCHours(), this.$m = t2.getUTCMinutes(), this.$s = t2.getUTCSeconds(), this.$ms = t2.getUTCMilliseconds();
        } else
          n.call(this);
      };
      var u = s.utcOffset;
      s.utcOffset = function(t2, i3) {
        var e2 = this.$utils().u;
        if (e2(t2))
          return this.$u ? 0 : e2(this.$offset) ? u.call(this) : this.$offset;
        var s2 = Math.abs(t2) <= 16 ? 60 * t2 : t2, f2 = this;
        if (i3)
          return f2.$offset = s2, f2.$u = 0 === t2, f2;
        if (0 !== t2) {
          var n2 = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          (f2 = this.local().add(s2 + n2, "minute")).$offset = s2, f2.$x.$localOffset = n2;
        } else
          f2 = this.utc();
        return f2;
      };
      var o = s.format;
      s.format = function(t2) {
        var i3 = t2 || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return o.call(this, i3);
      }, s.valueOf = function() {
        var t2 = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || (/* @__PURE__ */ new Date()).getTimezoneOffset());
        return this.$d.valueOf() - 6e4 * t2;
      }, s.isUTC = function() {
        return !!this.$u;
      }, s.toISOString = function() {
        return this.toDate().toISOString();
      }, s.toString = function() {
        return this.toDate().toUTCString();
      };
      var r = s.toDate;
      s.toDate = function(t2) {
        return "s" === t2 && this.$offset ? e(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : r.call(this);
      };
      var a = s.diff;
      s.diff = function(t2, i3, s2) {
        if (t2 && this.$u === t2.$u)
          return a.call(this, t2, i3, s2);
        var f2 = this.local(), n2 = e(t2).local();
        return a.call(f2, n2, i3, s2);
      };
    };
  });
})(utc$1);
var utcExports = utc$1.exports;
const utc = /* @__PURE__ */ getDefaultExportFromCjs$1(utcExports);
dayjs.extend(relativeTime);
dayjs.extend(duration);
dayjs.extend(customParseFormat);
dayjs.extend(utc);
export {
  Ts as T,
  _sfc_main as _,
  dayjs as d,
  utc as u,
  ws as w
};
