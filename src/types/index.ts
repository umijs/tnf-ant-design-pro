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
