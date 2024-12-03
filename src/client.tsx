import { createRouter } from '@umijs/tnf/router';
import { Client } from '@umijs/tnf/ssr';
import { Spin } from 'antd';
import { routeTree } from '../.tnf/routeTree.gen';

export function createApp() {
  const router = createRouter({
    routeTree,
    defaultPreload: 'intent',
    defaultPreloadDelay: 50,
    defaultPendingComponent: () => <Spin />,
    defaultPendingMs: 0,
    defaultGcTime: 1000 * 60 * 5,
    defaultStaleTime: 1000 * 60 * 2,
  });
  return {
    Root: function Root() {
      return <Client router={router} />;
    },
    router,
  };
}
