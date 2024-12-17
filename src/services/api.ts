import type {
  ActivitiesType,
  AnalysisData,
  BasicGood,
  BasicListItemDataType,
  BasicProgress,
  CardListItemDataType,
  CurrentUser,
  GeographicItemType,
  ListItemDataType,
  MonitorTagType,
  NoticeType,
  Params,
} from '@/types';

const API_CONFIG = {
  endpoints: {
    currentUser: '/api/currentUser',
    outLogin: '/api/login/outLogin',
    login: '/api/login/account',
    rule: '/api/rule',
    profileBasic: '/api/profile/basic',
    profileAdvanced: '/api/profile/advanced',
    fakeList: '/api/fake_list',
    getList: '/api/get_list',
    postFakeList: '/api/post_fake_list',
    cardFakeList: '/api/card_fake_list',
    currentUserDetail: '/api/currentUserDetail',
    fakeListDetail: '/api/fake_list_Detail',
    accountSettingCurrentUser: '/api/accountSettingCurrentUser',
    geographicProvince: '/api/geographic/province',
    geographicCity: '/api/geographic/city',
    users: '/api/users',
    fakeAnalysisChartData: '/api/fake_analysis_chart_data',
    tags: '/api/tags',
    projectNotice: '/api/project/notice',
    activities: '/api/activities',
    fakeWorkplaceChartData: '/api/fake_workplace_chart_data',
    advancedForm: '/api/advancedForm',
    basicForm: '/api/basicForm',
  },
  headers: {
    JSON: {
      'Content-Type': 'application/json',
    },
  },
  methods: {
    POST: 'POST',
    GET: 'GET',
    PUT: 'PUT',
    DELETE: 'DELETE',
  },
};

const buildUrl = (endpoint: string, params?: Record<string, string>) => {
  if (!params) return endpoint;
  const query = new URLSearchParams(params).toString();
  return `${endpoint}?${query}`;
};

/** 获取当前的用户 GET /api/currentUser */
export async function currentUser(options?: { [key: string]: any }) {
  const response = await fetch(API_CONFIG.endpoints.currentUser, {
    method: API_CONFIG.methods.GET,
    ...(options || {}),
  });
  return await response.json();
}

/** 退出登录接口 POST /api/login/outLogin */
export async function outLogin(options?: { [key: string]: any }) {
  return fetch(API_CONFIG.endpoints.outLogin, {
    method: API_CONFIG.methods.POST,
    ...(options || {}),
  });
}

/** 登录接口 POST /api/login/account */
export async function login(
  body: API.LoginParams,
  options?: { [key: string]: any },
) {
  const response = await fetch(API_CONFIG.endpoints.login, {
    method: API_CONFIG.methods.POST,
    headers: API_CONFIG.headers.JSON,
    body: JSON.stringify(body),
    ...(options || {}),
  });
  return await response.json();
}

/** 获取规则列表 GET /api/rule */
export async function rule(
  params: {
    current?: number;
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  const response = await fetch(API_CONFIG.endpoints.rule, {
    method: API_CONFIG.methods.POST,
    headers: API_CONFIG.headers.JSON,
    body: JSON.stringify(params),
    ...(options || {}),
  });
  return await response.json();
}

/** 更新规则 PUT /api/rule */
export async function updateRule(options?: { [key: string]: any }) {
  return fetch(API_CONFIG.endpoints.rule, {
    method: API_CONFIG.methods.POST,
    headers: API_CONFIG.headers.JSON,
    body: JSON.stringify({
      method: 'update',
      ...(options || {}),
    }),
  });
}

/** 新建规则 POST /api/rule */
export async function addRule(options?: { [key: string]: any }) {
  return fetch(API_CONFIG.endpoints.rule, {
    method: API_CONFIG.methods.POST,
    headers: API_CONFIG.headers.JSON,
    body: JSON.stringify({
      method: 'post',
      ...(options || {}),
    }),
  });
}

/** 删除规则 DELETE /api/rule */
export async function removeRule(options?: { [key: string]: any }) {
  return fetch(API_CONFIG.endpoints.rule, {
    method: API_CONFIG.methods.POST,
    headers: API_CONFIG.headers.JSON,
    body: JSON.stringify({
      method: 'delete',
      ...(options || {}),
    }),
  });
}

export async function queryBasicProfile(): Promise<{
  data: {
    basicProgress: BasicProgress[];
    basicGoods: BasicGood[];
  };
}> {
  const response = await fetch(API_CONFIG.endpoints.profileBasic);
  return await response.json();
}

export async function queryAdvancedProfile() {
  const response = await fetch(API_CONFIG.endpoints.profileAdvanced);
  return await response.json();
}

export async function queryFakeList(
  params: Params,
): Promise<{ data: { list: ListItemDataType[] } }> {
  const url = buildUrl(API_CONFIG.endpoints.fakeList, {
    count: params.count.toString(),
  });
  const response = await fetch(url);
  return await response.json();
}

export async function queryBasicList(
  params: Params,
): Promise<{ data: { list: BasicListItemDataType[] } }> {
  const url = buildUrl(API_CONFIG.endpoints.getList, {
    count: params.count.toString(),
  });
  const response = await fetch(url);
  return await response.json();
}

type ParamsType = {
  count?: number;
} & Partial<BasicListItemDataType>;

export async function removeFakeList(
  params: ParamsType,
): Promise<{ data: { list: BasicListItemDataType[] } }> {
  const response = await fetch(API_CONFIG.endpoints.postFakeList, {
    method: API_CONFIG.methods.POST,
    headers: API_CONFIG.headers.JSON,
    body: JSON.stringify({
      ...params,
      method: 'delete',
    }),
  });
  return await response.json();
}

export async function addFakeList(
  params: ParamsType,
): Promise<{ data: { list: BasicListItemDataType[] } }> {
  const response = await fetch(API_CONFIG.endpoints.postFakeList, {
    method: API_CONFIG.methods.POST,
    headers: API_CONFIG.headers.JSON,
    body: JSON.stringify({
      ...params,
      method: 'post',
    }),
  });
  return await response.json();
}

export async function updateFakeList(
  params: ParamsType,
): Promise<{ data: { list: BasicListItemDataType[] } }> {
  const response = await fetch(API_CONFIG.endpoints.postFakeList, {
    method: API_CONFIG.methods.POST,
    headers: API_CONFIG.headers.JSON,
    body: JSON.stringify({
      ...params,
      method: 'update',
    }),
  });
  return await response.json();
}

export async function queryCardList(
  params: Params,
): Promise<{ data: { list: CardListItemDataType[] } }> {
  const url = buildUrl(API_CONFIG.endpoints.cardFakeList, {
    count: params.count.toString(),
  });
  const response = await fetch(url);
  return await response.json();
}

export async function queryAccountCenterCurrent(): Promise<{
  data: CurrentUser;
}> {
  const response = await fetch(API_CONFIG.endpoints.currentUserDetail);
  return await response.json();
}

export async function queryAccountCenterFakeList(
  params: Params,
): Promise<{ data: { list: ListItemDataType[] } }> {
  const url = buildUrl(API_CONFIG.endpoints.fakeListDetail, {
    count: params.count.toString(),
  });
  const response = await fetch(url);
  return await response.json();
}

export async function queryCurrent(): Promise<{ data: CurrentUser }> {
  const response = await fetch(API_CONFIG.endpoints.accountSettingCurrentUser);
  return await response.json();
}

export async function queryProvince(): Promise<{ data: GeographicItemType[] }> {
  const response = await fetch(API_CONFIG.endpoints.geographicProvince);
  return await response.json();
}

export async function queryCity(
  province: string,
): Promise<{ data: GeographicItemType[] }> {
  const url = `${API_CONFIG.endpoints.geographicCity}/${province}`;
  const response = await fetch(url);
  return await response.json();
}

export async function query() {
  const response = await fetch(API_CONFIG.endpoints.users);
  return await response.json();
}

export async function fakeDashboardAnalysisChartData(): Promise<{
  data: AnalysisData;
}> {
  const response = await fetch(API_CONFIG.endpoints.fakeAnalysisChartData);
  return await response.json();
}

export async function queryTags(): Promise<{
  data: { list: MonitorTagType[] };
}> {
  const response = await fetch(API_CONFIG.endpoints.tags);
  return await response.json();
}

export async function queryProjectNotice(): Promise<{ data: NoticeType[] }> {
  const response = await fetch(API_CONFIG.endpoints.projectNotice);
  return await response.json();
}

export async function queryActivities(): Promise<{ data: ActivitiesType[] }> {
  const response = await fetch(API_CONFIG.endpoints.activities);
  return await response.json();
}

export async function fakeChartData(): Promise<{ data: AnalysisData }> {
  const response = await fetch(API_CONFIG.endpoints.fakeWorkplaceChartData);
  return await response.json();
}

export async function fakeFormAdvancedSubmitForm(params: any) {
  const response = await fetch(API_CONFIG.endpoints.advancedForm, {
    method: API_CONFIG.methods.POST,
    body: JSON.stringify(params),
  });
  return await response.json();
}

export async function fakeSubmitForm(params: any) {
  const response = await fetch(API_CONFIG.endpoints.basicForm, {
    method: API_CONFIG.methods.POST,
    body: JSON.stringify(params),
  });
  return await response.json();
}
