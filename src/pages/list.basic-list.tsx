import React from 'react';
import { createFileRoute } from '@umijs/tnf/router';

const BasicList: React.FC = () => {};

export const Route = createFileRoute('/list/basic-list')({
  component: BasicList,
});
