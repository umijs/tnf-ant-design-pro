import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRootRoute } from '@umijs/tnf/router';
import { App, ConfigProvider } from 'antd';
import Layout from '../components/ProLayout/Layout';

const queryClient = new QueryClient();

export const Route = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider>
        <App>
          <Layout />
        </App>
      </ConfigProvider>
    </QueryClientProvider>
  ),
});
