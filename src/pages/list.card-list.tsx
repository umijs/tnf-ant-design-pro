import React from 'react';
import { createFileRoute } from '@umijs/tnf/router';

const CardList: React.FC = () => {};

export const Route = createFileRoute('/list/card-list')({
  component: CardList,
});
