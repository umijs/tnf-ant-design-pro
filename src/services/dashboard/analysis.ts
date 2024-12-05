import type { AnalysisData } from '@/types/dashboard/analysis';
import { request } from '@/utils/request';

export async function fakeChartData(): Promise<{ data: AnalysisData }> {
  return request('/api/fake_analysis_chart_data');
}
