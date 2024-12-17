import {
  useLoaderData,
  useNavigate,
  useRouterState,
  useSearch,
} from '@umijs/tnf/router';

const useRules = () => {
  const { data, total } = useLoaderData({ from: '/list/table-list' });
  const search = useSearch({ from: '/list/table-list' });
  const navigate = useNavigate();
  const loading = useRouterState({ select: (s) => s.isLoading });

  return { data, total, loading, search, navigate };
};

export default useRules;
