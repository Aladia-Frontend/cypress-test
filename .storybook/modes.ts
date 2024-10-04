export interface ChromaticMode {
  name?: string;
  viewport?:
    | number
    | { width?: number | string; height?: number | string }
    | string;
}

export const allModes: Record<string, ChromaticMode> = {
  mobile: {
    name: "Mobile",
    viewport: {
      width: 320,
      height: 568,
    },
  },
  desktop: {
    name: "Desktop",
    viewport: {
      width: 1200,
      height: 800,
    },
  },
};
