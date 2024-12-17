import type { RangePickerProps } from 'antd/es/date-picker';
import type { PickerProps } from 'antd/es/date-picker/generatePicker';
import type dayjs from 'dayjs';

export type BasicGood = {
  id: string;
  name?: string;
  barcode?: string;
  price?: string;
  num?: string | number;
  amount?: string | number;
};

export type BasicProgress = {
  key: string;
  time: string;
  rate: string;
  status: string;
  operator: string;
  cost: string;
};

export type AdvancedOperation1 = {
  key: string;
  type: string;
  name: string;
  status: string;
  updatedAt: string;
  memo: string;
};

export type AdvancedOperation2 = {
  key: string;
  type: string;
  name: string;
  status: string;
  updatedAt: string;
  memo: string;
};

export type AdvancedOperation3 = {
  key: string;
  type: string;
  name: string;
  status: string;
  updatedAt: string;
  memo: string;
};

export interface AdvancedProfileData {
  advancedOperation1?: AdvancedOperation1[];
  advancedOperation2?: AdvancedOperation2[];
  advancedOperation3?: AdvancedOperation3[];
}

export type Member = {
  avatar: string;
  name: string;
  id: string;
};

export interface Params {
  count: number;
}

export interface ListItemDataType {
  id: string;
  owner: string;
  title: string;
  avatar: string;
  cover: string;
  status: 'normal' | 'exception' | 'active' | 'success';
  percent: number;
  logo: string;
  href: string;
  body?: any;
  updatedAt: number;
  createdAt: number;
  subDescription: string;
  description: string;
  activeUser: number;
  newUser: number;
  star: number;
  like: number;
  message: number;
  content: string;
  members: Member[];
}

export type BasicListItemDataType = {
  id: string;
  owner: string;
  title: string;
  avatar: string;
  cover: string;
  status: 'normal' | 'exception' | 'active' | 'success';
  percent: number;
  logo: string;
  href: string;
  body?: any;
  updatedAt: number;
  createdAt: number;
  subDescription: string;
  description: string;
  activeUser: number;
  newUser: number;
  star: number;
  like: number;
  message: number;
  content: string;
  members: Member[];
};

export type CardListItemDataType = {
  id: string;
  owner: string;
  title: string;
  avatar: string;
  cover: string;
  status: 'normal' | 'exception' | 'active' | 'success';
  percent: number;
  logo: string;
  href: string;
  body?: any;
  updatedAt: number;
  createdAt: number;
  subDescription: string;
  description: string;
  activeUser: number;
  newUser: number;
  star: number;
  like: number;
  message: number;
  content: string;
  members: Member[];
};

export type tabKeyType = 'articles' | 'applications' | 'projects';
export interface TagType {
  key: string;
  label: string;
}

export type NoticeType = {
  id: string;
  title: string;
  logo: string;
  description: string;
  updatedAt: string;
  member: string;
  href: string;
  memberLink: string;
};

export type CurrentUser = {
  name: string;
  avatar: string;
  userid: string;
  notice: NoticeType[];
  email: string;
  signature: string;
  title: string;
  group: string;
  tags: TagType[];
  notifyCount: number;
  unreadCount: number;
  country: string;
  geographic: GeographicType;
  address: string;
  phone: string;
};

export type GeographicItemType = {
  name: string;
  id: string;
};

export type GeographicType = {
  province: {
    label: string;
    key: string;
  };
  city: {
    label: string;
    key: string;
  };
};

export interface VisitDataType {
  x: string;
  y: number;
}

export type SearchDataType = {
  index: number;
  keyword: string;
  count: number;
  range: number;
  status: number;
};

export interface OfflineChartData {
  date: number;
  type: number;
  value: number;
}

export type RadarData = {
  name: string;
  label: string;
  value: number;
};

export interface AnalysisData {
  visitData: any[];
  visitData2: any[];
  salesData: any[];
  searchData: any[];
  offlineData: OfflineDataType[];
  offlineChartData: any[];
  salesTypeData: any[];
  salesTypeDataOnline: any[];
  salesTypeDataOffline: any[];
  radarData: RadarData[];
}

export type MonitorTagType = {
  name: string;
  value: number;
  type: string;
};

export interface TagType {
  key: string;
  label: string;
}

export type OfflineDataType = {
  name: string;
  cvr: number;
};

export type ActivitiesType = {
  id: string;
  updatedAt: string;
  user: {
    link?: string;
    name: string;
    avatar: string;
  };
  group: {
    name: string;
    link: string;
  };
  project: {
    name: string;
    link: string;
  };

  template: string;
};

export type RadarDataType = {
  label: string;
  name: string;
  value: number;
};

export interface StepDataType {
  payAccount: string;
  receiverAccount: string;
  receiverName: string;
  amount: string;
  receiverMode: string;
}

export type CurrentTypes = 'base' | 'confirm' | 'result';
export type RangePickerValue = RangePickerProps['value'];
