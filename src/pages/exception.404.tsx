import React from 'react';
import { createFileRoute } from '@umijs/tnf/router';

const Exception404: React.FC = () => {};

export const Route = createFileRoute('/exception/404')({
  component: Exception404,
});
