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
