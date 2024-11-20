import React from 'react';
import { createFileRoute } from '@umijs/tnf/router';

const ProfileBasic: React.FC = () => {};

export const Route = createFileRoute('/profile/basic')({
  component: ProfileBasic,
});
