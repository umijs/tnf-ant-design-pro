import React from 'react';
import { createFileRoute } from '@umijs/tnf/router';

const Exception403: React.FC = () => {};

export const Route = createFileRoute('/exception/403')({
  component: Exception403,
});
