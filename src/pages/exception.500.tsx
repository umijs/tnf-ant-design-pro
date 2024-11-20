import React from 'react';
import { createFileRoute } from '@umijs/tnf/router';

const Exception500: React.FC = () => {};

export const Route = createFileRoute('/exception/500')({
  component: Exception500,
});
