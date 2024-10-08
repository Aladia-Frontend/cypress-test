import vue from "@vitejs/plugin-vue";

export default {
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  plugins: [vue()],
};
