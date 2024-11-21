import React from 'react';
import { Outlet, createFileRoute } from '@umijs/tnf/router';
import { PageContainer } from '@ant-design/pro-components';
import { Input } from 'antd';

const tabList = [
  {
    key: 'articles',
    tab: '文章',
  },
  {
    key: 'projects',
    tab: '项目',
  },
  {
    key: 'applications',
    tab: '应用',
  },
];

export const Route = createFileRoute('/list/_search/search')({
  component: () => {
    const handleTabChange = (key: string) => {};
    const handleFormSubmit = (value: string) => {};
    const getTabKey = () => {
      return 'articles';
    };
    return (
      <PageContainer
        content={
          <div style={{ textAlign: 'center' }}>
            <Input.Search
              placeholder="请输入"
              enterButton="搜索"
              size="large"
              onSearch={handleFormSubmit}
              style={{ maxWidth: 522, width: '100%' }}
            />
          </div>
        }
        tabList={tabList}
        tabActiveKey={getTabKey()}
        onTabChange={handleTabChange}
      >
        <Outlet />
      </PageContainer>
    );
  },
});
