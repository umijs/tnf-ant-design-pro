import React from 'react';
import { createFileRoute } from '@umijs/tnf/router';

const ResultFail: React.FC = () => {};

export const Route = createFileRoute('/result/fail')({
  component: ResultFail,
});
