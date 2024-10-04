import { d as defineComponent, l as computed, o as openBlock, i as createElementBlock, m as renderSlot, n as normalizeClass } from "./index-DnMqUly2.js";
const h = {
  link: "text-indigo-600 border-transparent ring-transparent hover:underline disabled:text-gray-500 disabled:hocus:shadow-none disabled:no-underline hocus:shadow-transparent focus-visible:ring-gray-100 focus-visible:underline",
  white: "text-indigo-500 bg-white border-gray-100 hover:border-gray-200 disabled:hocus:shadow-none hocus:shadow-gray-50 disabled:text-gray-500 focus:ring-gray-200",
  disabled: "text-white bg-gray-500 border-gray-500",
  // outline variants
  "outline-indigo": "border-indigo-500 text-indigo-500 disabled:hocus:shadow-none hocus:shadow-indigo-300/[.35] disabled:text-gray-500 focus:ring-indigo-600",
  "outline-purple": "text-purple-500 border-purple-500 disabled:hocus:shadow-none hocus:shadow-purple-100 disabled:text-gray-500 focus:ring-purple-600",
  "outline-gray": "text-gray-1000 border-gray-1000 disabled:hocus:shadow-none hocus:shadow-gray-100 disabled:text-gray-500 focus:ring-gray-1000",
  "outline-light": "text-indigo-500 border-gray-100 hocus:border-gray-200 disabled:border-gray-100 disabled:hocus:shadow-none hocus:shadow-gray-50 disabled:text-gray-500 focus:ring-gray-200",
  "outline-dark": "text-white border-white/20 hocus:border-white/60 disabled:hocus:shadow-none hocus:shadow-white/20 disabled:border-white/20 disabled:hover:border-white/20 disabled:text-white/50 focus:ring-gray-200",
  // light variants
  "indigo-light": "text-indigo-500 bg-indigo-50 border-indigo-50 hocus:border-indigo-200 disabled:hocus:shadow-none hocus:shadow-indigo-50 focus:ring-transparent",
  "jade-light": "text-teal-600 bg-jade-200 border-transparent hocus:border-jade-300 disabled:hocus:shadow-none hocus:shadow-jade-50 focus:ring-transparent",
  // dark variants
  "jade-dark": "text-white bg-jade-500 border-jade-500 disabled:hocus:shadow-none hocus:shadow-jade-100 focus:ring-transparent focus:border-jade-600 focus:bg-jade-600",
  "indigo-dark": "text-white bg-indigo-500 border-indigo-500 disabled:hocus:shadow-none hocus:shadow-indigo-100 focus:bg-indigo-600 focus:border-indigo-600 focus:ring-transparent",
  "teal-dark": "text-white bg-teal-500 border-teal-500 disabled:hocus:shadow-none hocus:shadow-teal-100 focus:bg-teal-600 focus:bg-teal-600 focus:border-teal-600 focus:ring-transparent",
  "purple-dark": "text-white bg-purple-500 border-purple-500 disabled:hocus:shadow-none hocus:shadow-purple-100 focus:bg-purple-600 focus:border-purple-600 focus:ring-transparent",
  "red-dark": "text-white bg-red-500 border-red-500 disabled:hocus:shadow-none hocus:shadow-red-100 focus:bg-red-600 focus:border-red-600 focus:ring-transparent",
  "gray-dark": "text-white bg-gray-800 border-gray-800 disabled:hocus:shadow-none hocus:shadow-gray-100 focus:bg-gray-900 focus:border-gray-900 focus:ring-transparent",
  "gray-darkest": "text-white bg-gray-1000 border-gray-1000 disabled:hocus:shadow-none hocus:shadow-gray-100 focus:bg-gray-900 focus:border-gray-900 focus:ring-transparent"
}, c = "indigo-dark", p = {
  20: "px-[4px] py-0 text-[14px] leading-[20px]",
  24: "px-[8px] py-[2px] text-[14px] leading-[20px]",
  32: "px-[12px] py-[6px] text-[14px] leading-[20px]",
  40: "px-[16px] py-[8px] text-[16px] leading-[24px]",
  48: "px-[20px] py-[12px] text-[16px] leading-[24px]"
}, f = "40", y = "border border-solid rounded rounded-[4px] flex cy-button-width font-medium items-center transition duration-150 hover:shadow-ring-hover focus:shadow-ring-focus active:shadow-ring-focus disabled:cursor-not-allowed focus-visible:ring-1 focus-visible:ring-offset-0 focus-visible:outline-none", w = defineComponent({
  emits: {
    click(e) {
      return !!e;
    }
  },
  props: {
    variant: {
      type: String,
      default: c
    },
    size: {
      type: String,
      default: f
    },
    disabled: {
      type: Boolean,
      default: false
    },
    href: {
      type: String
    },
    type: {
      type: String,
      default: "button"
    }
  },
  setup(e) {
    const o = computed(
      () => e.disabled && !["outline-dark", "outline-light", "link"].includes(e.variant) ? "disabled" : e.variant
    ), s = computed(
      () => e.disabled || e.variant === "disabled"
    ), r = computed(
      () => h[o.value]
    ), d = computed(() => p[e.size]), i = computed(() => [
      y,
      r.value,
      d.value
    ]);
    return {
      href: computed(() => e.href),
      type: computed(() => e.type),
      finalDisabled: s,
      allClasses: i
    };
  }
}), x = (e, o) => {
  const s = e.__vccOpts || e;
  for (const [r, d] of o)
    s[r] = d;
  return s;
}, k = ["href", "aria-disabled"], v = ["disabled", "type"];
function m(e, o, s, r, d, i) {
  return e.href ? (openBlock(), createElementBlock("a", {
    key: 0,
    href: e.href,
    class: normalizeClass(e.allClasses),
    "aria-disabled": e.finalDisabled ? "true" : void 0,
    onClick: o[0] || (o[0] = (t) => e.$emit("click", t))
  }, [
    renderSlot(e.$slots, "default")
  ], 10, k)) : (openBlock(), createElementBlock("button", {
    key: 1,
    class: normalizeClass(e.allClasses),
    disabled: e.finalDisabled,
    type: e.type,
    onClick: o[1] || (o[1] = (t) => e.$emit("click", t))
  }, [
    renderSlot(e.$slots, "default")
  ], 10, v));
}
const j = /* @__PURE__ */ x(w, [["render", m]]);
export {
  j
};
