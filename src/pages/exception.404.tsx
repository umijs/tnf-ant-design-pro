import React from 'react';
import { Link, createFileRoute } from '@umijs/tnf/router';
import { Button, Result } from 'antd';

const Exception404: React.FC = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={
      <Link to="/">
        <Button type="primary">Back Home</Button>
      </Link>
    }
  />
);

export const Route = createFileRoute('/exception/404')({
  component: Exception404,
});
