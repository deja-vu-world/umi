import { defineConfig } from 'umi';

export default defineConfig({
  base: '/docs/',
  publicPath: '/static/',
  hash: true,
  history: {
    type: "hash"
  },

  nodeModulesTransform: {
    type: 'none',
  },
  layout: {},
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
});
