import type { CurrentUser, ListItemDataType } from '@/types/account/center';
import { request } from '@/utils/request';

export async function queryCurrent(): Promise<{ data: CurrentUser }> {
  return request('/api/currentUserDetail');
}

export async function queryFakeList(params: {
  count: number;
}): Promise<{ data: { list: ListItemDataType[] } }> {
  return request('/api/fake_list_Detail', {
    params,
  });
}
