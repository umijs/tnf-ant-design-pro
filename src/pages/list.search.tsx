import React from 'react';
import {
  Outlet,
  createFileRoute,
  useLocation,
  useNavigate,
} from '@umijs/tnf/router';
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

export const Route = createFileRoute('/list/search')({
  component: () => {
    const { pathname } = useLocation();
    let tabActiveKey = pathname.split('/').pop() as string;
    const navigate = useNavigate();
    const handleTabChange = (key: string) => {
      tabActiveKey = key;
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

    return (
      <PageContainer
        content={
          <div style={{ textAlign: 'center' }}>
            <Input.Search
              placeholder="请输入"
              enterButton="搜索"
              size="large"
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
