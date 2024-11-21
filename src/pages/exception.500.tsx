import React from 'react';
import { Link, createFileRoute } from '@umijs/tnf/router';
import { Button, Result } from 'antd';

const Exception500: React.FC = () => (
  <Result
    status="500"
    title="500"
    subTitle="Sorry, something went wrong."
    extra={
      <Link to="/">
        <Button type="primary">Back Home</Button>
      </Link>
    }
  />
);

export const Route = createFileRoute('/exception/500')({
  component: Exception500,
});
