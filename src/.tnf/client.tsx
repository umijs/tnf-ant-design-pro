import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@umijs/tnf/router';
import { routeTree } from './routeTree.gen';

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultPreloadDelay: 50,
});
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
const TanStackRouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null
    : React.lazy(() =>
        import('@tanstack/router-devtools').then((res) => ({
          default: res.TanStackRouterDevtools,
        })),
      );
ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <RouterProvider router={router} />
    <TanStackRouterDevtools
      router={router}
      initialIsOpen={false}
      position="bottom-left"
    />
  </>,
);
