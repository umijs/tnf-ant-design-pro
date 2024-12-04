import type { TagType } from '@/types/dashboard/monitor';
import { request } from '@/utils/request';

export async function queryTags(): Promise<{ data: { list: TagType[] } }> {
  return request('/api/tags');
}
