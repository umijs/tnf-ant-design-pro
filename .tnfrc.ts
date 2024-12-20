export default {
  router: {
    defaultPreload: 'intent',
    convention: {
      routeFileIgnorePattern: '.style.ts',
    },
  },
  mock: {
    delay: '500-1000',
  },
  clickToComponent: {
    editor: 'cursor',
  },
};
