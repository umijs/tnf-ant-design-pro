import { Link, Outlet, createFileRoute, useLocation } from '@umijs/tnf/router';
import { PageContainer } from '@ant-design/pro-components';
import { Input } from 'antd';

const tabList = [
  {
    key: 'articles',
    tab: <Link to="/list/search/articles">文章</Link>,
  },
  {
    key: 'projects',
    tab: <Link to="/list/search/projects">项目</Link>,
  },
  {
    key: 'applications',
    tab: <Link to="/list/search/applications">应用</Link>,
  },
];

export const Route = createFileRoute('/list/search')({
  component: () => {
    const { pathname } = useLocation();
    const tabActiveKey = pathname.split('/').pop() as string;

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
      >
        <Outlet />
      </PageContainer>
    );
  },
});
