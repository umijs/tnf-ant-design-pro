import { defineConfig } from '@umijs/tnf';

export default defineConfig({
  router: {
    defaultPreload: 'intent',
    convention: {
      routeFileIgnorePattern: '.style.ts',
    },
  },
  mock: {
    delay: '500-1000',
  },
});
