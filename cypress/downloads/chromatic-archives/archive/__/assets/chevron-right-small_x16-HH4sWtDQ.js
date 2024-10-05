import { d as defineComponent, l as computed, o as openBlock, i as createElementBlock, t as toDisplayString, j as createCommentVNode, a as createBaseVNode, c as createBlock, n as normalizeClass, b as unref, E as resolveDynamicComponent, m as renderSlot, V as createTextVNode, _ as _export_sfc } from "./index-DnMqUly2.js";
const _hoisted_1$1 = {
  key: 0,
  class: "absolute top-0 right-0 text-teal-600 ribbon",
  "aria-hidden": "true"
};
const _hoisted_2$1 = ["disabled"];
const _hoisted_3$1 = { class: "tracking-tight text-gray-600 text-[14px] leading-[20px]" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Card",
  props: {
    title: null,
    description: null,
    icon: null,
    hoverIcon: { default: void 0 },
    variant: null,
    iconSize: null,
    disabled: { type: Boolean, default: false },
    badgeText: { default: "" }
  },
  emits: ["click"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const classMap = {
      indigo: "icon-dark-indigo-400 icon-light-indigo-100 icon-light-secondary-jade-200 icon-dark-secondary-jade-400",
      jade: "icon-dark-jade-400 icon-light-jade-100"
    };
    const iconDimensions = computed(() => {
      return props.iconSize === 48 ? `w-[48px] h-[48px]` : `w-[64px] h-[64px]`;
    });
    const classes = computed(() => {
      const iconMargin = props.iconSize === 64 ? "mb-[32px]" : "mb-[8px]";
      return [iconDimensions.value, iconMargin];
    });
    const iconClass = computed(() => {
      const colorClass = props.disabled ? "icon-dark-gray-600 icon-light-gray-100 icon-dark-secondary-gray-600 icon-light-secondary-gray-300" : classMap[props.variant];
      return [iconDimensions.value, colorClass].join(" ");
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["relative block h-auto text-center border border-gray-100 rounded outline-none group children:hyphens-manual", {
          "bg-gray-50 cursor-default": __props.disabled,
          "cursor-pointer focus-within-default hocus-default": !__props.disabled
        }]),
        "data-cy": "card",
        onClick: _cache[0] || (_cache[0] = ($event) => !__props.disabled && emits("click"))
      }, [
        __props.badgeText ? (openBlock(), createElementBlock("div", _hoisted_1$1, toDisplayString(__props.badgeText), 1)) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: normalizeClass(["mx-auto children:transition-all children:duration-300", unref(classes)])
        }, [
          __props.hoverIcon ? (openBlock(), createBlock(resolveDynamicComponent(__props.hoverIcon), {
            key: 0,
            class: normalizeClass(["absolute opacity-0", [unref(iconClass), { "group-hover:opacity-100 group-focus:opacity-100": !__props.disabled }]]),
            "data-cy": "card-icon"
          }, null, 8, ["class"])) : createCommentVNode("", true),
          (openBlock(), createBlock(resolveDynamicComponent(__props.icon), {
            class: normalizeClass([
              "opacity-100",
              [
                __props.hoverIcon && !__props.disabled ? "group-hover:opacity-0" : void 0,
                unref(iconClass)
              ]
            ]),
            "data-cy": "card-icon"
          }, null, 8, ["class"]))
        ], 2),
        createBaseVNode("button", {
          class: normalizeClass(["font-medium mx-[8px] mb-[8px] text-[18px] leading-[24px] focus:outline-transparent", {
            "text-gray-700 cursor-default": __props.disabled,
            "text-indigo-500": !__props.disabled
          }]),
          disabled: __props.disabled
        }, toDisplayString(__props.title), 11, _hoisted_2$1),
        createBaseVNode("p", _hoisted_3$1, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(__props.description), 1)
          ], true)
        ]),
        renderSlot(_ctx.$slots, "footer", {}, void 0, true)
      ], 2);
    };
  }
});
const Card = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b9303bc9"]]);
const _hoisted_1 = {
  style: { "min-width": "16px", "min-height": "16px" },
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M6 12L10 8L6 4",
  stroke: "#1B1E2E",
  class: "icon-dark",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
}
const __unplugin_components_0 = { name: "cy-chevron-right-small_x16", render };
export {
  Card as C,
  __unplugin_components_0 as _
};
