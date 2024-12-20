import { createRouter } from '@umijs/tnf/router';
import { Client } from '@umijs/tnf/ssr';
import { Spin } from 'antd';
import { routeTree } from '../.tnf/routeTree.gen';
import './i18n/config';

export function createApp() {
  const router = createRouter({
    routeTree,
    defaultPreload: 'intent',
    defaultPreloadDelay: 50,
    defaultPendingComponent: () => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Spin />
      </div>
    ),
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
