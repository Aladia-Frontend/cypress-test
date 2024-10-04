import { o as openBlock, i as createElementBlock, a as createBaseVNode, d as defineComponent, c as createBlock, n as normalizeClass, E as resolveDynamicComponent, j as createCommentVNode, aK as createStaticVNode, l as computed, J as gql, g as useI18n, h as ref, A as watch, f as createVNode, w as withCtx, b as unref, bI as _sfc_main$4, au as Input, t as toDisplayString, F as Fragment, bi as IconTerminal, aj as useMutation, bJ as ChooseExternalEditorModal_SetPreferredEditorBinaryDocument, r as resolveComponent, V as createTextVNode, Y as _sfc_main$5, m as renderSlot, at as _sfc_main$6, be as __unplugin_components_0, aD as useQuery, bK as OpenFileInIdeDocument, bL as OpenFileInIde_MutationDocument } from "./index-DnMqUly2.js";
const _hoisted_1$a = {
  style: { "min-width": "16px", "min-height": "16px" },
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$9 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M3 6L6.5 9.5L3 13M9 13H13",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon-dark"
}, null, -1);
const _hoisted_3$8 = [
  _hoisted_2$9
];
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$a, _hoisted_3$8);
}
const __unplugin_components_1 = { name: "cy-technology-command-line_x16", render: render$7 };
const _hoisted_1$9 = {
  key: 0,
  class: "flex align-center justify-center"
};
const __default__ = {
  inheritAttrs: true
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "Icon",
  props: {
    icon: null,
    iconClass: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.icon ? (openBlock(), createElementBlock("span", _hoisted_1$9, [
        (openBlock(), createBlock(resolveDynamicComponent(__props.icon), {
          class: normalizeClass(__props.iconClass)
        }, null, 8, ["class"]))
      ])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$8 = {
  viewBox: "0 0 256 254",
  width: "1em",
  height: "1em"
};
const _hoisted_2$8 = ["id"];
const _hoisted_3$7 = /* @__PURE__ */ createBaseVNode("stop", {
  offset: "0%",
  "stop-color": "#FFF"
}, null, -1);
const _hoisted_4$6 = /* @__PURE__ */ createBaseVNode("stop", {
  offset: "100%",
  "stop-color": "#FFF",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_5$4 = [
  _hoisted_3$7,
  _hoisted_4$6
];
const _hoisted_6$4 = /* @__PURE__ */ createBaseVNode("path", {
  id: "logosVisualStudioCode1",
  d: "M180.828 252.605a15.872 15.872 0 0 0 12.65-.486l52.501-25.262a15.94 15.94 0 0 0 9.025-14.364V41.197a15.939 15.939 0 0 0-9.025-14.363l-52.5-25.263a15.877 15.877 0 0 0-18.115 3.084L74.857 96.35l-43.78-33.232a10.614 10.614 0 0 0-13.56.603L3.476 76.494c-4.63 4.211-4.635 11.495-.012 15.713l37.967 34.638l-37.967 34.637c-4.623 4.219-4.618 11.502.012 15.714l14.041 12.772a10.614 10.614 0 0 0 13.56.604l43.78-33.233l100.507 91.695a15.853 15.853 0 0 0 5.464 3.571m10.464-183.649l-76.262 57.889l76.262 57.888z"
}, null, -1);
const _hoisted_7$3 = ["id"];
const _hoisted_8$3 = /* @__PURE__ */ createBaseVNode("use", { href: "#logosVisualStudioCode1" }, null, -1);
const _hoisted_9$3 = [
  _hoisted_8$3
];
const _hoisted_10$2 = ["mask"];
const _hoisted_11$2 = ["mask"];
const _hoisted_12$2 = ["mask"];
const _hoisted_13$2 = ["fill", "mask"];
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$8, [
    createBaseVNode("defs", null, [
      createBaseVNode("linearGradient", {
        id: _ctx.idMap["logosVisualStudioCode0"],
        x1: "50%",
        x2: "50%",
        y1: "0%",
        y2: "100%"
      }, _hoisted_5$4, 8, _hoisted_2$8),
      _hoisted_6$4
    ]),
    createBaseVNode("mask", {
      id: _ctx.idMap["logosVisualStudioCode2"],
      fill: "#fff"
    }, _hoisted_9$3, 8, _hoisted_7$3),
    createBaseVNode("path", {
      fill: "#0065A9",
      d: "M246.135 26.873L193.593 1.575a15.885 15.885 0 0 0-18.123 3.08L3.466 161.482c-4.626 4.219-4.62 11.502.012 15.714l14.05 12.772a10.625 10.625 0 0 0 13.569.604L238.229 33.436c6.949-5.271 16.93-.315 16.93 8.407v-.61a15.938 15.938 0 0 0-9.024-14.36",
      mask: "url(#" + _ctx.idMap["logosVisualStudioCode2"] + ")"
    }, null, 8, _hoisted_10$2),
    createBaseVNode("path", {
      fill: "#007ACC",
      d: "m246.135 226.816l-52.542 25.298a15.887 15.887 0 0 1-18.123-3.08L3.466 92.207c-4.626-4.218-4.62-11.502.012-15.713l14.05-12.773a10.625 10.625 0 0 1 13.569-.603l207.132 157.135c6.949 5.271 16.93.315 16.93-8.408v.611a15.939 15.939 0 0 1-9.024 14.36",
      mask: "url(#" + _ctx.idMap["logosVisualStudioCode2"] + ")"
    }, null, 8, _hoisted_11$2),
    createBaseVNode("path", {
      fill: "#1F9CF0",
      d: "M193.428 252.134a15.892 15.892 0 0 1-18.125-3.083c5.881 5.88 15.938 1.715 15.938-6.603V11.273c0-8.318-10.057-12.483-15.938-6.602a15.892 15.892 0 0 1 18.125-3.084l52.533 25.263a15.937 15.937 0 0 1 9.03 14.363V212.51c0 6.125-3.51 11.709-9.03 14.363z",
      mask: "url(#" + _ctx.idMap["logosVisualStudioCode2"] + ")"
    }, null, 8, _hoisted_12$2),
    createBaseVNode("path", {
      fill: "url(#" + _ctx.idMap["logosVisualStudioCode0"] + ")",
      "fill-opacity": ".25",
      d: "M180.828 252.605a15.874 15.874 0 0 0 12.65-.486l52.5-25.263a15.938 15.938 0 0 0 9.026-14.363V41.197a15.939 15.939 0 0 0-9.025-14.363L193.477 1.57a15.877 15.877 0 0 0-18.114 3.084L74.857 96.35l-43.78-33.232a10.614 10.614 0 0 0-13.56.603L3.476 76.494c-4.63 4.211-4.635 11.495-.012 15.713l37.967 34.638l-37.967 34.637c-4.623 4.219-4.618 11.502.012 15.714l14.041 12.772a10.614 10.614 0 0 0 13.56.604l43.78-33.233l100.506 91.695a15.857 15.857 0 0 0 5.465 3.571m10.464-183.65l-76.262 57.89l76.262 57.888z",
      mask: "url(#" + _ctx.idMap["logosVisualStudioCode2"] + ")"
    }, null, 8, _hoisted_13$2)
  ]);
}
const VSCode = { name: "logos-visual-studio-code", render: render$6, data() {
  const __randId = () => Math.random().toString(36).substr(2, 10);
  const idMap = { "logosVisualStudioCode2": "uicons-" + __randId(), "logosVisualStudioCode0": "uicons-" + __randId() };
  return { idMap };
} };
const _hoisted_1$7 = {
  viewBox: "0 0 256 256",
  width: "1em",
  height: "1em"
};
const _hoisted_2$7 = /* @__PURE__ */ createBaseVNode("circle", {
  cx: "128.002",
  cy: "128.002",
  r: "128.002",
  fill: "#60B57D"
}, null, -1);
const _hoisted_3$6 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "#FFF",
  d: "M117.82 59.143a3.605 3.605 0 0 1-4.515 5.62c-9.397-7.547-17.224-10.04-22.051-7.575c-5.618 2.865-7.797 12.083-6.663 24.946l.17 1.737c.096.879.206 1.773.33 2.682l.269 1.839c.334 2.15.745 4.376 1.235 6.67c6.767-1.05 14.05-1.735 21.698-2.02a197.699 197.699 0 0 1 10.079-11.969l1.698-1.83c4.246-4.513 8.505-8.553 12.696-12.049l1.673-1.37c15.295-12.285 29.531-17.146 38.738-11.168c8.02 5.203 10.17 16.989 7.19 32.783a3.605 3.605 0 1 1-7.084-1.336c2.495-13.227.852-22.232-4.03-25.4c-6.348-4.12-18.142.623-31.44 11.701l-1.484 1.257a127.43 127.43 0 0 0-2.246 1.982l-1.51 1.383a149.716 149.716 0 0 0-4.571 4.446l-1.535 1.577c-.256.266-.512.535-.769.805l-1.54 1.647l-1.54 1.691l-1.541 1.736c-.514.586-1.028 1.179-1.54 1.78l-1.54 1.822l-.299.363c3.586.019 7.235.123 10.932.315l1.435.08l2.852.182c2.367.166 4.707.366 7.017.599l2.758.295c.457.052.913.105 1.368.159l2.711.341c2.247.297 4.46.625 6.635.984l2.592.444l2.555.473l2.515.501c8.32 1.716 15.97 3.888 22.71 6.434l1.996.775c17.704 7.074 28.614 16.812 28.054 27.576c-.464 8.898-8.44 16.244-21.81 21.507a3.605 3.605 0 1 1-2.64-6.708c11.024-4.34 16.971-9.817 17.25-15.174c.358-6.858-7.848-13.951-21.507-19.672l-1.7-.694a108.59 108.59 0 0 0-3.557-1.343l-1.856-.649c-.626-.213-1.261-.424-1.904-.632l-1.954-.615l-2-.598c-.337-.098-.676-.195-1.017-.292l-2.068-.57c-.348-.093-.698-.186-1.05-.278l-2.133-.54a174.737 174.737 0 0 0-6.645-1.498l-2.293-.456l-1.16-.22l-2.348-.42l-2.382-.398l-1.204-.19l-2.432-.36a200.67 200.67 0 0 0-2.463-.334l-2.495-.309l-2.523-.282a217.085 217.085 0 0 0-3.837-.37l-2.59-.213a217.66 217.66 0 0 0-2.616-.182l-2.639-.154l-2.64-.121l-2.62-.09a217.035 217.035 0 0 0-8.993-.068l-2.06.038l-.81 1.074a213.91 213.91 0 0 0-1.505 2.045l-1.496 2.082a220.968 220.968 0 0 0-6.566 9.801l-1.388 2.224a217.303 217.303 0 0 0-4.232 7.177c.123.302.248.605.375.908l.98 2.314c.166.387.334.774.504 1.162l1.036 2.331l1.074 2.342l1.112 2.349l1.15 2.356l1.186 2.362l1.215 2.348l1.233 2.314l1.249 2.28l.63 1.126l1.272 2.227c.426.736.855 1.466 1.285 2.19l1.298 2.152c.435.71.871 1.415 1.31 2.113l1.32 2.075l1.329 2.034a192.004 192.004 0 0 0 3.356 4.904l1.353 1.886a174.77 174.77 0 0 0 2.717 3.64l1.362 1.75l1.363 1.705c.227.28.455.558.682.834l1.362 1.632l1.36 1.583a129.105 129.105 0 0 0 4.06 4.446l1.342 1.377l1.334 1.324a99.254 99.254 0 0 0 1.985 1.884l1.31 1.186a82.252 82.252 0 0 0 1.945 1.673l1.28 1.042c8.703 6.925 16.414 9.722 21.534 7.11c4.807-2.45 7.102-9.608 6.932-19.757l-.043-1.545a72.96 72.96 0 0 0-.081-1.588l-.118-1.63a85.54 85.54 0 0 0-.154-1.672l-.192-1.712a97.035 97.035 0 0 0-.109-.87l-.246-1.769l-.284-1.805l-.32-1.84a127.447 127.447 0 0 0-.959-4.747l-.448-1.954l-.484-1.983c-.084-.333-.17-.667-.256-1.002l-.539-2.025l-.575-2.052l-.302-1.035l-.63-2.088l-.666-2.111a182.415 182.415 0 0 0-1.067-3.208l-.757-2.163l-.793-2.182a199.84 199.84 0 0 0-1.694-4.415l-.902-2.23l-.937-2.243l-.482-1.126l-.991-2.261l-1.028-2.272c-.174-.379-.35-.759-.527-1.139l-1.08-2.284a220.62 220.62 0 0 0-.555-1.145a3.605 3.605 0 1 1 6.48-3.159l1.196 2.49c.392.828.778 1.656 1.156 2.482l1.118 2.474a220.378 220.378 0 0 1 3.112 7.356l.957 2.426c.157.403.311.806.464 1.208l.896 2.403c.146.399.29.797.433 1.195l.835 2.376a184.854 184.854 0 0 1 1.545 4.694l.71 2.315c8.5 28.409 7.41 51.515-5.34 58.016c-10.313 5.26-24.936-2.046-39.655-17.456l-1.523-1.622a137.51 137.51 0 0 1-3.044-3.415l-1.518-1.79c-4.046-4.844-8.055-10.257-11.938-16.147l-1.45-2.231a225.959 225.959 0 0 1-10.398-18.043l-.657-1.279a238.72 238.72 0 0 1-1.288-2.564l-1.247-2.559a230.326 230.326 0 0 1-2.826-6.112l-.582 1.151c-.18.36-.357.72-.533 1.08l-1.038 2.147l-.997 2.132l-.958 2.114c-.156.351-.31.702-.463 1.051l-.896 2.087c-.146.346-.29.69-.433 1.035l-.836 2.056c-.136.34-.27.68-.402 1.019l-.774 2.02a124.3 124.3 0 0 0-.37 1.002l-.712 1.983l-.67 1.956c-.325.97-.633 1.931-.926 2.88l-.565 1.883l-.522 1.851c-.083.306-.165.61-.245.913l-.458 1.8a92.343 92.343 0 0 0-.956 4.344l-.307 1.67c-2.04 11.83-.71 20.554 4.345 23.835c5.092 3.303 14.533.79 26.183-7.62a3.605 3.605 0 1 1 4.22 5.845c-13.807 9.968-26.013 13.216-34.327 7.822c-10.046-6.519-10.752-23.757-4.066-45.202l.694-2.158c.478-1.448.989-2.913 1.532-4.395l.838-2.233a172.466 172.466 0 0 1 3.825-9.143l1.072-2.33l1.117-2.346a208.194 208.194 0 0 1 4.582-8.897a266.02 266.02 0 0 1-.641-1.653l-.933-2.475a188.692 188.692 0 0 1-3.296-9.713l-.714-2.374a162.63 162.63 0 0 1-1.24-4.466c-.445.089-.885.18-1.322.272l-1.96.431l-1.913.453c-.315.077-.627.155-.938.234l-1.84.483l-1.787.504c-.588.171-1.167.346-1.736.523l-1.683.542c-.552.184-1.095.371-1.628.561l-1.572.579c-10.803 4.113-17.383 9.51-17.69 15.388c-.279 5.358 5.068 11.423 15.584 16.883a3.605 3.605 0 1 1-3.322 6.398C46.567 140.033 39.395 131.898 39.86 123c.645-12.406 16.305-21.875 39.597-26.656c-4.714-22.525-2.315-40.051 8.52-45.577c8.009-4.088 18.472-.757 29.842 8.377m19.753 67.051c1.196 5.536-2.322 10.99-7.857 12.188c-5.536 1.196-10.99-2.322-12.188-7.858c-1.194-5.535 2.322-10.989 7.858-12.187c5.535-1.196 10.989 2.322 12.187 7.857m-34.898-25.606l-.65.045c-.497.036-.992.073-1.484.113l-2.345.202l-2.31.228c-.382.04-.762.082-1.141.124l-2.256.267l-1.113.143l-2.198.304l-.872.133l.308 1.151a167.326 167.326 0 0 0 1.568 5.342l.694 2.18l.362 1.1l.752 2.213c.207.597.418 1.196.633 1.798a238.568 238.568 0 0 1 3.54-5.705l.78-1.208a234.986 234.986 0 0 1 5.732-8.43"
}, null, -1);
const _hoisted_4$5 = [
  _hoisted_2$7,
  _hoisted_3$6
];
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, _hoisted_4$5);
}
const Atom = { name: "logos-atom-icon", render: render$5 };
const _hoisted_1$6 = {
  viewBox: "0 0 256 256",
  width: "1em",
  height: "1em"
};
const _hoisted_2$6 = ["id"];
const _hoisted_3$5 = /* @__PURE__ */ createBaseVNode("stop", {
  offset: "28%",
  "stop-color": "#07C3F2"
}, null, -1);
const _hoisted_4$4 = /* @__PURE__ */ createBaseVNode("stop", {
  offset: "94%",
  "stop-color": "#087CFA"
}, null, -1);
const _hoisted_5$3 = [
  _hoisted_3$5,
  _hoisted_4$4
];
const _hoisted_6$3 = ["id"];
const _hoisted_7$2 = /* @__PURE__ */ createBaseVNode("stop", {
  offset: "14%",
  "stop-color": "#FCF84A"
}, null, -1);
const _hoisted_8$2 = /* @__PURE__ */ createBaseVNode("stop", {
  offset: "37%",
  "stop-color": "#07C3F2"
}, null, -1);
const _hoisted_9$2 = [
  _hoisted_7$2,
  _hoisted_8$2
];
const _hoisted_10$1 = ["id"];
const _hoisted_11$1 = /* @__PURE__ */ createBaseVNode("stop", {
  offset: "28%",
  "stop-color": "#07C3F2"
}, null, -1);
const _hoisted_12$1 = /* @__PURE__ */ createBaseVNode("stop", {
  offset: "94%",
  "stop-color": "#087CFA"
}, null, -1);
const _hoisted_13$1 = [
  _hoisted_11$1,
  _hoisted_12$1
];
const _hoisted_14 = ["fill"];
const _hoisted_15 = ["fill"];
const _hoisted_16 = ["fill"];
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("path", { d: "M48 48h160v160H48z" }, null, -1);
const _hoisted_18$1 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "#FFF",
  d: "M67.947 177.76h60v10h-60zm56.8-109.84l-8.934 35.013L105.6 67.92H95.44L85.2 102.933L76.293 67.92h-14l17.147 60.027h11.253l9.814-34.747l9.706 34.747H121.6l17.12-60.027zm16.48 51.707l7.813-9.6a27.573 27.573 0 0 0 17.973 7.306c5.334 0 8.694-2.133 8.694-5.68v-.16c0-1.899-.665-3.27-3.058-4.57l-.382-.2l-.41-.198a18.12 18.12 0 0 0-.216-.1l-.454-.198a23.226 23.226 0 0 0-.238-.1l-.5-.198l-.531-.2a35.055 35.055 0 0 0-.278-.1l-.58-.2l-.303-.102l-.63-.204l-.667-.206a66.86 66.86 0 0 0-.347-.104l-.72-.21l-.758-.214l-.795-.216l-.835-.221l-1.605-.416l-1.144-.307l-.748-.207l-.734-.21l-.72-.215l-.707-.217l-.694-.222l-.68-.227a50.802 50.802 0 0 1-.334-.115l-.658-.235l-.643-.241l-.629-.248l-.614-.255a32.62 32.62 0 0 1-.301-.13l-.591-.267l-.576-.275c-5.582-2.748-8.889-6.796-8.998-14.338l-.002-.574c0-10.792 8.59-17.98 20.68-18.13l.386-.003a34.667 34.667 0 0 1 22.347 7.653l-6.88 9.974a28.107 28.107 0 0 0-15.653-5.92c-5.067 0-7.734 2.32-7.734 5.333v.187c0 2.402.988 3.856 4.09 5.227l.456.196c.158.065.32.13.487.194l.518.195l.548.196l.58.196l.611.199l.646.2l.679.203l1.083.312l.767.213l.803.217l1.719.452c.284.074.565.15.843.225l.826.23c.137.038.272.077.407.116l.8.236l.781.242l.765.247l.746.252l.728.26l.357.131l.7.27c7.724 3.045 12.013 7.432 12.138 15.507l.002.524c0 11.946-9.12 18.667-22.106 18.667a38.244 38.244 0 0 1-25.52-9.627"
}, null, -1);
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, [
    createBaseVNode("defs", null, [
      createBaseVNode("linearGradient", {
        id: _ctx.idMap["logosWebstorm0"],
        x1: "43.896%",
        x2: "66.16%",
        y1: "1.951%",
        y2: "95.244%"
      }, _hoisted_5$3, 8, _hoisted_2$6),
      createBaseVNode("linearGradient", {
        id: _ctx.idMap["logosWebstorm1"],
        x1: "33.063%",
        x2: "70.362%",
        y1: "15.078%",
        y2: "84.685%"
      }, _hoisted_9$2, 8, _hoisted_6$3),
      createBaseVNode("linearGradient", {
        id: _ctx.idMap["logosWebstorm2"],
        x1: "44.416%",
        x2: "56.203%",
        y1: "25.058%",
        y2: "90.203%"
      }, _hoisted_13$1, 8, _hoisted_10$1)
    ]),
    createBaseVNode("path", {
      fill: "url(#" + _ctx.idMap["logosWebstorm0"] + ")",
      d: "M34.507 231.36L0 26.827L63.813.347L104.56 24.56l37.333-20.133l77.787 29.866L176.053 256z"
    }, null, 8, _hoisted_14),
    createBaseVNode("path", {
      fill: "url(#" + _ctx.idMap["logosWebstorm1"] + ")",
      d: "m256 86.693l-33.04-81.6L163.013 0L70.48 88.907l24.907 114.586l46.506 32.614L256 168.4l-28-52.507z"
    }, null, 8, _hoisted_15),
    createBaseVNode("path", {
      fill: "url(#" + _ctx.idMap["logosWebstorm2"] + ")",
      d: "m204.72 74.533l23.28 41.36l28-29.2l-20.56-50.826z"
    }, null, 8, _hoisted_16),
    _hoisted_17,
    _hoisted_18$1
  ]);
}
const Webstorm = { name: "logos-webstorm", render: render$4, data() {
  const __randId = () => Math.random().toString(36).substr(2, 10);
  const idMap = { "logosWebstorm0": "uicons-" + __randId(), "logosWebstorm1": "uicons-" + __randId(), "logosWebstorm2": "uicons-" + __randId() };
  return { idMap };
} };
const _hoisted_1$5 = {
  viewBox: "0 0 256 257",
  width: "1em",
  height: "1em"
};
const _hoisted_2$5 = /* @__PURE__ */ createStaticVNode('<path fill="#019833" d="M128.286 1.952L1.945 127.885L128.286 254.4l125.761-126.515z"></path><path fill="#66FE98" d="M128.264 13.516V2.885L2.774 127.908h10.753z"></path><path fill="#45FE02" d="M128.264 13.516V2.885l125.88 125.023h-11.636z"></path><path fill="#017D17" d="M128.264 242.836v11.769L2.774 127.908h10.753z"></path><path fill="#005D04" d="M128.264 242.836v11.769l125.88-126.697h-11.636z"></path><path d="M65.226 230.591H40.9l-9.5-9.258V44.55h-7.54l-6.455-6.464V18.325l6.687-7.253h85.075l7.649 7.658v18.756l-6.356 7.747h-6.428v59.758l60.487-59.758h-3.377l-7.035-7.587V17.758l6.912-6.345h85.872l6.796 6.805v18.81z"></path><path d="M128.264 256.342L0 127.908L128.264 0L256 127.908zM3.929 127.908L128.264 252.41l123.805-124.502L128.264 3.935z"></path><path fill="#FEFEFE" d="m108.075 22.742l3.779-2.441l-3.861-4.008H26.156l-4.158 4.164v15.75l4.61 4.616l2.199-4.616l-2.892-2.897V22.207l2.169-1.931l77.264.095z"></path><path fill="#FEFEFE" d="M41.458 35.833v184.334l2.592 2.468l-2.077 3.925l-5.451-5.369V40.612z"></path><path fill="gray" d="m28.236 35.833l-1.628 4.99h9.886l5.719-4.99z"></path><path fill="#FEFEFE" d="m166.531 35.897l-3.457-2.442v-9.896l3.616-3.621h75.449l2.893 3.862l4.117-3.249l-4.238-3.872h-81.114l-4.038 4.043v15.871l4.252 3.848m-65.615 76.31l-7.879 19.144l88.948-89.309l-.435-10.804z"></path><path fill="gray" d="m107.897 22.671l3.957-2.37v15.532l-4.517 4.523h-8.778l-.163 76.395l-7.849 19.1V35.833h14.659l2.727-2.219zm136.867.051l4.385-2.171v14.183L62.408 226.56H41.973l1.994-3.77l15.695.001L244.791 31.379zm-65.734 13.06l-4.548 4.569l-10.471.09l2.557-4.59z"></path><path fill="#CCC" d="m165.973 19.79l-2.89 2.893v10.624l2.531 2.534h13.372v10.265l-88.46 89.783V35.968h14.701l3.016-3.02V22.197l-2.784-2.154H28.093l-2.531 2.535V33.56l2.573 2.577h13.457v184.002l2.531 2.534h15.292L244.794 31.131v-8.448l-2.89-2.893z"></path><path fill="gray" d="M59.519 222.918H44.022l-2.674-2.678V36.381H28.034l-2.716-2.72V22.476l2.674-2.677h77.551l2.945 2.278v10.972l-3.159 3.163H90.77v99.081l87.972-89.288v-9.919h-13.229l-2.674-2.678V22.582l3.032-3.037h76.134l3.033 3.037v8.648l-.068.071zm-15.294-.489h15.087L244.55 31.033v-8.249l-2.747-2.75h-75.729l-2.747 2.75v10.422l2.388 2.391h13.516v10.609l-.07.071l-88.879 90.208V35.724h14.844l2.873-2.878V22.317l-2.623-2.03H28.194l-2.388 2.392v10.78l2.431 2.434h13.599v184.144z"></path><path fill="#CCC" d="M134.566 143.819a.834.834 0 0 0-.38.19l-3.585 3.083a.84.84 0 0 0-.232.359l-3.586 10.054a.835.835 0 0 0 .19.866l2.742 2.745a.835.835 0 0 0 .591.233h11.073a.83.83 0 0 0 .59-.233l2.89-2.914c.1-.1.172-.224.211-.359l3.08-10.582a.835.835 0 0 0-.211-.823l-2.384-2.387a.827.827 0 0 0-.59-.232h-10.23a.796.796 0 0 0-.169 0m-20.29 28.343a.833.833 0 0 0-.633.613l-1.371 5.449a.833.833 0 0 0 .801 1.035h6.518l-16.157 46.19a.833.833 0 0 0 .781 1.099h23.517a.834.834 0 0 0 .802-.571l1.54-4.963a.834.834 0 0 0-.802-1.077h-5.315l15.988-46.676a.833.833 0 0 0-.781-1.099h-24.72a.943.943 0 0 0-.168 0m74.835.169a.835.835 0 0 0-.465.275l-4.893 5.533h-7.783l-5.189-5.385a.828.828 0 0 0-.59-.254h-18.582a.832.832 0 0 0-.781.549l-1.708 5.112a.834.834 0 0 0 .78 1.098h4.978l-15.482 45.683a.835.835 0 0 0 .781 1.099h19.784a.833.833 0 0 0 .781-.549l1.518-4.457a.833.833 0 0 0-.78-1.098h-3.459l9.871-31.111h17.865l-11.263 36.138a.832.832 0 0 0 .801 1.077h19.088a.834.834 0 0 0 .76-.507l1.708-4.098a.832.832 0 0 0-.759-1.14h-3.459l10.04-31.639h17l-11.432 36.307a.833.833 0 0 0 .802 1.077h20.965a.835.835 0 0 0 .781-.528l1.708-4.457a.833.833 0 0 0-.78-1.119h-4.156l12.635-41.079a.836.836 0 0 0-.127-.761l-3.923-5.28a.832.832 0 0 0-.675-.317h-14.996a.829.829 0 0 0-.612.254l-4.725 5.195h-8.268l-4.893-5.364a.83.83 0 0 0-.612-.254h-12.086a.943.943 0 0 0-.168 0"></path><path d="M128.359 162.524c.523.504 1.207.78 1.901.78l.046-.001h11.039c.742.023 1.444-.263 2.013-.81l2.883-2.909c.334-.334.579-.751.706-1.195l3.079-10.58a2.785 2.785 0 0 0-.705-2.752l-2.409-2.413a2.713 2.713 0 0 0-1.947-.78h-10.16a2.756 2.756 0 0 0-.436.01l-.205.032c-.47.099-.909.318-1.252.62l-3.586 3.084l-.041.037c-.349.318-.612.72-.764 1.167l-3.578 10.031a2.81 2.81 0 0 0 .647 2.907zm16.154-16.751l1.575 1.577l-2.816 9.676l-2.346 2.368l-10.168.001l-1.897-1.9l3.257-9.13l3.014-2.592zm97.125 31.158l-3.923-5.28l-.035-.045a2.792 2.792 0 0 0-2.225-1.06h-14.948a2.763 2.763 0 0 0-2.049.848l-4.184 4.601h-6.541l-4.312-4.727l-.04-.043a2.818 2.818 0 0 0-2.016-.848h-12.016a2.759 2.759 0 0 0-.436.01l-.202.031a2.78 2.78 0 0 0-1.529.893l-4.31 4.874h-6.071l-4.615-4.79a2.81 2.81 0 0 0-1.995-.849h-18.588a2.796 2.796 0 0 0-2.612 1.837l-1.724 5.155a2.792 2.792 0 0 0 2.633 3.675h2.252l-14.61 43.11a2.794 2.794 0 0 0 1.757 3.528c.277.092.565.141.878.144h19.79a2.807 2.807 0 0 0 2.625-1.873l1.522-4.466a2.793 2.793 0 0 0-2.634-3.674h-.789l8.631-27.201H183.1l-10.476 33.611a2.791 2.791 0 0 0 1.847 3.48a3.1 3.1 0 0 0 .824.123H194.4a2.79 2.79 0 0 0 2.547-1.709l1.722-4.13a2.79 2.79 0 0 0-2.577-3.815h-.788l8.799-27.729h12.905l-10.637 33.782a2.792 2.792 0 0 0 2.657 3.601h20.967a2.817 2.817 0 0 0 2.619-1.783l1.719-4.485a2.791 2.791 0 0 0-2.616-3.745h-1.51l11.847-38.518a2.788 2.788 0 0 0-.416-2.533m-16.723 44.96h5.169l-.842 2.195h-18.676l11.772-37.383h-21.096l-11.28 35.548h4.432l-.765 1.835h-16.815l11.599-37.214h-21.952l-11.111 35.019h4.554l-.748 2.195H141.75l15.854-46.782h-6.137l.952-2.849h17.287l5.433 5.639h9.495l5.135-5.808l11.114-.001l5.124 5.619h9.996l4.955-5.449h13.97l3.236 4.356zm-94.819-3.786a3.01 3.01 0 0 0-.824-.123h-2.58l15.106-44.099a2.792 2.792 0 0 0-2.634-3.675h-24.65a2.771 2.771 0 0 0-.437.01l-.213.034a2.769 2.769 0 0 0-2.117 2.046l-1.372 5.454a2.794 2.794 0 0 0 2.034 3.38c.212.052.431.08.664.081h3.763l-15.255 43.615a2.792 2.792 0 0 0 2.634 3.674h23.53c1.204 0 2.263-.763 2.656-1.946l1.542-4.971a2.791 2.791 0 0 0-1.847-3.48m-24.292 6.488l16.541-47.289h-7.826l.802-3.187h22.264l-16.364 47.774h6.534l-.838 2.702z"></path>', 16);
const _hoisted_18 = [
  _hoisted_2$5
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_18);
}
const Vim = { name: "logos-vim", render: render$3 };
const _hoisted_1$4 = {
  viewBox: "0 0 256 332",
  width: "1em",
  height: "1em"
};
const _hoisted_2$4 = ["id"];
const _hoisted_3$4 = /* @__PURE__ */ createBaseVNode("stop", {
  offset: "0%",
  "stop-color": "#FF9700"
}, null, -1);
const _hoisted_4$3 = /* @__PURE__ */ createBaseVNode("stop", {
  offset: "53%",
  "stop-color": "#F48E00"
}, null, -1);
const _hoisted_5$2 = /* @__PURE__ */ createBaseVNode("stop", {
  offset: "100%",
  "stop-color": "#D06F00"
}, null, -1);
const _hoisted_6$2 = [
  _hoisted_3$4,
  _hoisted_4$3,
  _hoisted_5$2
];
const _hoisted_7$1 = ["fill"];
const _hoisted_8$1 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "#FF9800",
  d: "M0 164.291c0 3.887 2.865 7.95 6.397 9.071l242.53 76.902c3.531 1.12 6.397-1.127 6.397-5.007V166.66c0-3.88-2.866-7.944-6.397-9.064L6.397 80.694C2.865 79.574 0 81.814 0 85.7z"
}, null, -1);
const _hoisted_9$1 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "#FF9800",
  d: "M255.288 5.302c0-3.886-2.872-6.135-6.397-5.014L6.397 77.176C2.865 78.296 0 82.36 0 86.247v78.59c0 3.887 2.865 6.128 6.397 5.014l242.494-76.895c3.525-1.12 6.397-5.184 6.397-9.064z"
}, null, -1);
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, [
    createBaseVNode("defs", null, [
      createBaseVNode("linearGradient", {
        id: _ctx.idMap["logosSublimetextIcon0"],
        x1: "55.117%",
        x2: "63.68%",
        y1: "58.68%",
        y2: "39.597%"
      }, _hoisted_6$2, 8, _hoisted_2$4)
    ]),
    createBaseVNode("path", {
      fill: "url(#" + _ctx.idMap["logosSublimetextIcon0"] + ")",
      d: "M255.288 166.795c0-3.887-2.872-6.128-6.397-5.015L6.397 238.675C2.865 239.796 0 243.86 0 247.74v78.59c0 3.887 2.865 6.135 6.397 5.015l242.494-76.888c3.525-1.12 6.397-5.185 6.397-9.071z"
    }, null, 8, _hoisted_7$1),
    _hoisted_8$1,
    _hoisted_9$1
  ]);
}
const Sublime = { name: "logos-sublimetext-icon", render: render$2, data() {
  const __randId = () => Math.random().toString(36).substr(2, 10);
  const idMap = { "logosSublimetextIcon0": "uicons-" + __randId() };
  return { idMap };
} };
const _hoisted_1$3 = {
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em"
};
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M4 6h16v10H4m16 2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4c-1.11 0-2 .89-2 2v10a2 2 0 0 0 2 2H0v2h24v-2z"
}, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$3
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3$3);
}
const Computer = { name: "mdi-computer", render: render$1 };
const _hoisted_1$2 = {
  viewBox: "0 0 256 256",
  width: "1em",
  height: "1em"
};
const _hoisted_2$2 = ["id"];
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("stop", {
  offset: "0%",
  "stop-color": "#8381C5"
}, null, -1);
const _hoisted_4$2 = /* @__PURE__ */ createBaseVNode("stop", {
  offset: "56.639%",
  "stop-color": "#7E55B3",
  "stop-opacity": ".996"
}, null, -1);
const _hoisted_5$1 = /* @__PURE__ */ createBaseVNode("stop", {
  offset: "100%",
  "stop-color": "#A52ECB",
  "stop-opacity": ".992"
}, null, -1);
const _hoisted_6$1 = [
  _hoisted_3$2,
  _hoisted_4$2,
  _hoisted_5$1
];
const _hoisted_7 = ["id"];
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("stop", {
  offset: "0%",
  "stop-color": "#411F5D"
}, null, -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("stop", {
  offset: "100%",
  "stop-color": "#5B2A85"
}, null, -1);
const _hoisted_10 = [
  _hoisted_8,
  _hoisted_9
];
const _hoisted_11 = ["fill"];
const _hoisted_12 = ["fill"];
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "#FFF",
  d: "M85.23 217.573s10.536.745 24.091-.45c5.49-.484 26.331-2.53 41.913-5.948c0 0 18.999-4.066 29.163-7.811c10.635-3.92 16.422-7.246 19.027-11.96c-.114-.965.802-4.39-4.103-6.446c-12.538-5.26-27.08-4.308-55.855-4.918c-31.91-1.097-42.525-6.438-48.18-10.74c-5.422-4.364-2.695-16.437 20.539-27.072c11.703-5.663 57.582-16.114 57.582-16.114c-15.45-7.638-44.263-21.064-50.185-23.963c-5.195-2.543-13.507-6.372-15.31-11.004c-2.042-4.447 4.826-8.278 8.662-9.375c12.355-3.564 29.796-5.779 45.67-6.028c7.98-.125 9.274-.638 9.274-.638c11.01-1.826 18.257-9.359 15.238-21.288c-2.711-12.176-17.008-19.331-30.595-16.854c-12.795 2.332-43.633 11.29-43.633 11.29c38.118-.33 44.498.306 47.348 4.29c1.683 2.353-.765 5.579-10.93 7.24c-11.068 1.807-34.075 3.983-34.075 3.983c-22.07 1.311-37.617 1.399-42.28 11.27c-3.046 6.45 3.25 12.152 6.008 15.721c11.659 12.966 28.5 19.959 39.34 25.109c4.078 1.937 16.045 5.596 16.045 5.596c-35.167-1.934-60.535 8.864-75.415 21.297c-16.83 15.568-9.385 34.123 25.096 45.549c20.366 6.748 30.466 9.922 60.845 7.186c17.893-.964 20.714-.39 20.892 1.078c.251 2.067-19.874 7.202-25.369 8.787c-13.978 4.032-50.62 12.173-50.804 12.213"
}, null, -1);
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, [
    createBaseVNode("defs", null, [
      createBaseVNode("linearGradient", {
        id: _ctx.idMap["logosEmacs0"],
        x1: "25.141%",
        x2: "92.394%",
        y1: "20.136%",
        y2: "101.477%"
      }, _hoisted_6$1, 8, _hoisted_2$2),
      createBaseVNode("linearGradient", {
        id: _ctx.idMap["logosEmacs1"],
        x1: "90.716%",
        x2: "32.749%",
        y1: "79.092%",
        y2: "9.825%"
      }, _hoisted_10, 8, _hoisted_7)
    ]),
    createBaseVNode("path", {
      fill: "url(#" + _ctx.idMap["logosEmacs0"] + ")",
      d: "M253 128c0 69.036-55.964 125-125 125S3 197.036 3 128S58.964 3 128 3s125 55.964 125 125"
    }, null, 8, _hoisted_11),
    createBaseVNode("path", {
      fill: "url(#" + _ctx.idMap["logosEmacs1"] + ")",
      d: "M128 0C57.3 0 0 57.316 0 128s57.3 128 128 128s128-57.316 128-128S198.7 0 128 0m0 7.05c66.752 0 120.88 54.143 120.88 120.95S194.752 248.95 128 248.95S7.12 194.807 7.12 128S61.248 7.05 128 7.05"
    }, null, 8, _hoisted_12),
    _hoisted_13
  ]);
}
const Emacs = { name: "logos-emacs", render, data() {
  const __randId = () => Math.random().toString(36).substr(2, 10);
  const idMap = { "logosEmacs0": "uicons-" + __randId(), "logosEmacs1": "uicons-" + __randId() };
  return { idMap };
} };
const _hoisted_1$1 = { class: "flex items-center" };
const _hoisted_2$1 = {
  key: 0,
  class: "flex py-[16px] pb-[4px] items-center"
};
const _hoisted_3$1 = { class: "w-[400px]" };
const _hoisted_4$1 = {
  for: "customPath",
  class: "sr-only"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ChooseExternalEditor",
  props: {
    gql: null
  },
  emits: ["choseEditor"],
  setup(__props, { emit }) {
    const props = __props;
    const icons = {
      "code": VSCode,
      "webstorm": Webstorm,
      "atom": Atom,
      "sublimetext": Sublime,
      "sublimetext2": Sublime,
      "sublimetextdev": Sublime,
      "vim": Vim,
      "emacs": Emacs,
      "finder": Computer,
      "computer": Computer,
      "File Explorer": Computer,
      "File System": Computer,
      "custom": IconTerminal
    };
    const customEditor = { id: "custom", icon: IconTerminal, name: "Custom", binary: "custom" };
    const editorOptions = computed(() => {
      var _a;
      const editors = ((_a = props.gql.localSettings.availableEditors) == null ? void 0 : _a.map((x) => ({ ...x, icon: icons[x.id] }))) || [];
      editors.push(customEditor);
      return editors;
    });
    gql`
fragment ChooseExternalEditor on Query {
  localSettings {
    availableEditors {
      id
      name
      binary
    }

    preferences {
      preferredEditorBinary
    }
  }
}`;
    const { t } = useI18n();
    const selectedWellKnownEditor = props.gql.localSettings.availableEditors.find((editor) => {
      return editor.binary && editor.binary === props.gql.localSettings.preferences.preferredEditorBinary;
    });
    const customBinary = ref(
      selectedWellKnownEditor ? "" : props.gql.localSettings.preferences.preferredEditorBinary ?? ""
    );
    const editorToUse = ref(
      customBinary.value ? "custom" : "found"
    );
    const selectedEditor = ref(
      editorToUse.value === "custom" ? customEditor : selectedWellKnownEditor
    );
    watch(customBinary, (val) => {
      if (editorToUse.value !== "custom") {
        editorToUse.value = "custom";
      }
      emit("choseEditor", val);
    });
    const updateEditor = (editor) => {
      selectedEditor.value = editor;
      if (editor.id === "custom") {
        editorToUse.value = "custom";
        if (customBinary.value) {
          emit("choseEditor", customBinary.value);
        }
      } else {
        editorToUse.value = "found";
        emit("choseEditor", selectedEditor.value.binary);
      }
    };
    return (_ctx, _cache) => {
      const _component_i_cy_terminal_x16 = IconTerminal;
      const _component_i_cy_technology_command_line_x16 = __unplugin_components_1;
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$1, [
          createVNode(_sfc_main$4, {
            "model-value": selectedEditor.value,
            options: unref(editorOptions),
            "item-value": "name",
            "item-key": "id",
            placeholder: unref(t)("settingsPage.editor.noEditorSelectedPlaceholder"),
            class: "w-[400px]",
            "onUpdate:modelValue": updateEditor
          }, {
            "input-prefix": withCtx(({ value }) => [
              value ? (openBlock(), createBlock(_sfc_main$3, {
                key: 0,
                icon: icons[value.id],
                class: "text-md text-gray-500",
                "icon-class": "icon-dark-gray-500"
              }, null, 8, ["icon"])) : (openBlock(), createBlock(_component_i_cy_terminal_x16, {
                key: 1,
                class: "text-md icon-dark-gray-500"
              }))
            ]),
            "item-prefix": withCtx(({ value }) => [
              createVNode(_sfc_main$3, {
                icon: value.icon,
                class: "text-md"
              }, null, 8, ["icon"])
            ]),
            _: 1
          }, 8, ["model-value", "options", "placeholder"])
        ]),
        editorToUse.value === "custom" ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
          createBaseVNode("div", _hoisted_3$1, [
            createVNode(Input, {
              id: "customPath",
              modelValue: customBinary.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => customBinary.value = $event),
              "data-cy": "custom-editor",
              "input-classes": "text-sm text-gray-500",
              placeholder: unref(t)("settingsPage.editor.customPathPlaceholder")
            }, {
              prefix: withCtx(() => [
                createVNode(_component_i_cy_technology_command_line_x16, { class: "text-md icon-dark-gray-500" })
              ]),
              _: 1
            }, 8, ["modelValue", "placeholder"]),
            createBaseVNode("label", _hoisted_4$1, toDisplayString(unref(t)("settingsPage.editor.customPathPlaceholder")), 1)
          ])
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const _hoisted_1 = { class: "m-[24px]" };
const _hoisted_2 = { class: "font-normal text-sm text-gray-600 select-none" };
const _hoisted_3 = { class: "font-normal text-sm text-gray-600 select-none" };
const _hoisted_4 = {
  key: 0,
  class: "mt-[16px]"
};
const _hoisted_5 = {
  key: 1,
  class: "flex h-full items-center justify-center"
};
const _hoisted_6 = { class: "flex space-x-4" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ChooseExternalEditorModal",
  props: {
    open: { type: Boolean },
    gql: null
  },
  emits: ["selected", "close"],
  setup(__props, { emit }) {
    const props = __props;
    const { t } = useI18n();
    gql`
fragment ChooseExternalEditorModal on Query {
  ...ChooseExternalEditor
}`;
    gql`
mutation ChooseExternalEditorModal_SetPreferredEditorBinary ($value: String!) {
  setPreferences (value: $value, type: global) {
    localSettings {
      preferences {
        preferredEditorBinary
      }
    }
  }
}`;
    const setPreferredBinaryEditor = useMutation(ChooseExternalEditorModal_SetPreferredEditorBinaryDocument);
    const preferredEditor = ref("");
    function close() {
      preferredEditor.value = "";
      emit("close");
    }
    async function selectEditor() {
      await setPreferredBinaryEditor.executeMutation({
        value: JSON.stringify({ preferredEditorBinary: preferredEditor.value })
      });
      emit("selected");
    }
    return (_ctx, _cache) => {
      const _component_i18n_t = resolveComponent("i18n-t");
      const _component_i_cy_loading_x16 = __unplugin_components_0;
      return openBlock(), createBlock(_sfc_main$6, {
        "model-value": props.open,
        variant: "bare",
        "help-link": "https://on.cypress.io/file-opener-preference",
        "help-text": unref(t)("links.needHelp"),
        "data-cy": "choose-editor-modal",
        "onUpdate:modelValue": close
      }, {
        title: withCtx(() => [
          createTextVNode(toDisplayString(unref(t)("globalPage.externalEditorPreferences")), 1)
        ]),
        footer: withCtx(() => {
          var _a;
          return [
            createBaseVNode("div", _hoisted_6, [
              createVNode(_sfc_main$5, {
                disabled: !((_a = preferredEditor.value) == null ? void 0 : _a.length),
                onClick: selectEditor
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("globalPage.saveChanges")), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              createVNode(_sfc_main$5, {
                variant: "outline",
                onClick: close
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("globalPage.cancel")), 1)
                ]),
                _: 1
              })
            ])
          ];
        }),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", null, [
              createBaseVNode("p", _hoisted_2, [
                renderSlot(_ctx.$slots, "description", {}, () => [
                  createBaseVNode("span", null, toDisplayString(unref(t)("globalPage.externalEditorPreferencesDescription1")), 1)
                ])
              ]),
              createBaseVNode("p", _hoisted_3, [
                renderSlot(_ctx.$slots, "description", {}, () => [
                  createVNode(_component_i18n_t, {
                    scope: "global",
                    keypath: "globalPage.externalEditorPreferencesDescription2"
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("strong", null, toDisplayString(unref(t)("globalPage.settings")), 1)
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            props.gql.localSettings ? (openBlock(), createElementBlock("div", _hoisted_4, [
              createVNode(_sfc_main$2, {
                gql: props.gql,
                onChoseEditor: _cache[0] || (_cache[0] = (val) => preferredEditor.value = val ?? "")
              }, null, 8, ["gql"])
            ])) : (openBlock(), createElementBlock("div", _hoisted_5, [
              createVNode(_component_i_cy_loading_x16, { class: "animate-spin icon-dark-white icon-light-gray-400" })
            ]))
          ])
        ]),
        _: 3
      }, 8, ["model-value", "help-text"]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OpenFileInIDE",
  props: {
    line: null,
    column: null,
    filePath: null
  },
  setup(__props) {
    const props = __props;
    gql`
query OpenFileInIDE {
  localSettings {
    preferences {
      preferredEditorBinary
    }
  }
  ...ChooseExternalEditorModal
}
`;
    gql`
mutation OpenFileInIDE_Mutation ($input: FileDetailsInput!) {
  openFileInIDE (input: $input)
}
`;
    const query = useQuery({ query: OpenFileInIdeDocument, requestPolicy: "network-only" });
    const OpenFileInIDE = useMutation(OpenFileInIde_MutationDocument);
    const openFileInIDE = () => {
      OpenFileInIDE.executeMutation({
        input: {
          filePath: props.filePath,
          line: props.line ?? 1,
          column: props.column ?? 1
        }
      });
    };
    const openFile = () => {
      isChooseEditorOpen.value = false;
      openFileInIDE();
    };
    const maybeShowFileInIDE = () => {
      var _a, _b;
      if (query.fetching.value) {
        query.then(() => {
          maybeShowFileInIDE();
        });
        return;
      }
      if ((_b = (_a = query.data) == null ? void 0 : _a.value) == null ? void 0 : _b.localSettings.preferences.preferredEditorBinary) {
        openFileInIDE();
      } else {
        isChooseEditorOpen.value = true;
      }
    };
    const isChooseEditorOpen = ref(false);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        renderSlot(_ctx.$slots, "default", { onClick: maybeShowFileInIDE }),
        isChooseEditorOpen.value && unref(query).data.value ? (openBlock(), createBlock(_sfc_main$1, {
          key: 0,
          open: isChooseEditorOpen.value,
          gql: unref(query).data.value,
          onClose: _cache[0] || (_cache[0] = ($event) => isChooseEditorOpen.value = false),
          onSelected: openFile
        }, null, 8, ["open", "gql"])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
export {
  _sfc_main$1 as _,
  _sfc_main$2 as a,
  _sfc_main as b
};
