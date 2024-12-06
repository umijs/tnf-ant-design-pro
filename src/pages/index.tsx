import { createFileRoute, redirect } from '@umijs/tnf/router';

export const Route = createFileRoute('/')({
  loader: async () => redirect({ to: '/dashboard/analysis' }),
});
