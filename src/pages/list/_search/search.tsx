import React, { useState } from 'react';
import { Outlet, createFileRoute, useNavigate } from '@umijs/tnf/router';
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
    const [tabActiveKey, setTabKey] = useState('articles');
    const navigate = useNavigate();
    const handleTabChange = (key: string) => {
      setTabKey(key);
      switch (key) {
        case 'articles':
          navigate({ to: '/list/search/articles/' });
          break;
        case 'applications':
          navigate({ to: '/list/search/applications/' });
          break;
        case 'projects':
          navigate({ to: '/list/search/projects/' });
          break;
        default:
          break;
      }
    };
    const handleFormSubmit = (value: string) => {};

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
        tabActiveKey={tabActiveKey}
        onTabChange={handleTabChange}
      >
        <Outlet />
      </PageContainer>
    );
  },
});
