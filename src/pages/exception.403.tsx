import React from 'react';
import { Link, createFileRoute } from '@umijs/tnf/router';
import { Button, Result } from 'antd';

const Exception403: React.FC = () => (
  <Result
    status="403"
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={
      <Link to="/">
        <Button type="primary">Back to home</Button>
      </Link>
    }
  />
);

export const Route = createFileRoute('/exception/403')({
  component: Exception403,
});
