import React from 'react';
import { createFileRoute, useNavigate } from '@umijs/tnf/router';
import { Button, Result } from 'antd';

const NoFoundPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Result
      status="404"
      title="404"
      subTitle={'抱歉，您访问的页面不存在。'}
      extra={
        <Button
          type="primary"
          onClick={() =>
            navigate({
              to: '/',
            })
          }
        >
          {'返回首页'}
        </Button>
      }
    />
  );
};
export const Route = createFileRoute('/404')({
  component: NoFoundPage,
});
