import React from 'react';
import { createRootRoute } from '@umijs/tnf/router';
import { App, ConfigProvider } from 'antd';
import Layout from '../components/ProLayout/Layout';

export const Route = createRootRoute({
  component: () => (
    <ConfigProvider>
      <App>
        <Layout />
      </App>
    </ConfigProvider>
  ),
});
