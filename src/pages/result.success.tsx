import React from 'react';
import { createFileRoute } from '@umijs/tnf/router';

const ResultSuccess: React.FC = () => {};

export const Route = createFileRoute('/result/success')({
  component: ResultSuccess,
});
