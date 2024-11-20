import React from 'react';
import { createFileRoute } from '@umijs/tnf/router';

const ProfileAdvanced: React.FC = () => {};

export const Route = createFileRoute('/profile/advanced')({
  component: ProfileAdvanced,
});
