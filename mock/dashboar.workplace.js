const fakeChartData = {
  data: {
    visitData: [
      {
        x: '2024-11-27',
        y: 7,
      },
      {
        x: '2024-11-28',
        y: 5,
      },
      {
        x: '2024-11-29',
        y: 4,
      },
      {
        x: '2024-11-30',
        y: 2,
      },
      {
        x: '2024-12-01',
        y: 4,
      },
      {
        x: '2024-12-02',
        y: 7,
      },
      {
        x: '2024-12-03',
        y: 5,
      },
      {
        x: '2024-12-04',
        y: 6,
      },
      {
        x: '2024-12-05',
        y: 5,
      },
      {
        x: '2024-12-06',
        y: 9,
      },
      {
        x: '2024-12-07',
        y: 6,
      },
      {
        x: '2024-12-08',
        y: 3,
      },
      {
        x: '2024-12-09',
        y: 1,
      },
      {
        x: '2024-12-10',
        y: 5,
      },
      {
        x: '2024-12-11',
        y: 3,
      },
      {
        x: '2024-12-12',
        y: 6,
      },
      {
        x: '2024-12-13',
        y: 5,
      },
    ],
    visitData2: [
      {
        x: '2024-11-27',
        y: 1,
      },
      {
        x: '2024-11-28',
        y: 6,
      },
      {
        x: '2024-11-29',
        y: 4,
      },
      {
        x: '2024-11-30',
        y: 8,
      },
      {
        x: '2024-12-01',
        y: 3,
      },
      {
        x: '2024-12-02',
        y: 7,
      },
      {
        x: '2024-12-03',
        y: 2,
      },
    ],
    salesData: [
      {
        x: '1月',
        y: 627,
      },
      {
        x: '2月',
        y: 327,
      },
      {
        x: '3月',
        y: 374,
      },
      {
        x: '4月',
        y: 945,
      },
      {
        x: '5月',
        y: 1028,
      },
      {
        x: '6月',
        y: 969,
      },
      {
        x: '7月',
        y: 453,
      },
      {
        x: '8月',
        y: 287,
      },
      {
        x: '9月',
        y: 815,
      },
      {
        x: '10月',
        y: 770,
      },
      {
        x: '11月',
        y: 849,
      },
      {
        x: '12月',
        y: 835,
      },
    ],
    searchData: [
      {
        index: 1,
        keyword: '搜索关键词-0',
        count: 967,
        range: 83,
        status: 0,
      },
      {
        index: 2,
        keyword: '搜索关键词-1',
        count: 934,
        range: 91,
        status: 0,
      },
      {
        index: 3,
        keyword: '搜索关键词-2',
        count: 269,
        range: 29,
        status: 1,
      },
      {
        index: 4,
        keyword: '搜索关键词-3',
        count: 640,
        range: 46,
        status: 1,
      },
      {
        index: 5,
        keyword: '搜索关键词-4',
        count: 268,
        range: 1,
        status: 0,
      },
      {
        index: 6,
        keyword: '搜索关键词-5',
        count: 248,
        range: 84,
        status: 0,
      },
      {
        index: 7,
        keyword: '搜索关键词-6',
        count: 998,
        range: 38,
        status: 0,
      },
      {
        index: 8,
        keyword: '搜索关键词-7',
        count: 952,
        range: 46,
        status: 0,
      },
      {
        index: 9,
        keyword: '搜索关键词-8',
        count: 721,
        range: 49,
        status: 1,
      },
      {
        index: 10,
        keyword: '搜索关键词-9',
        count: 167,
        range: 53,
        status: 0,
      },
      {
        index: 11,
        keyword: '搜索关键词-10',
        count: 860,
        range: 83,
        status: 1,
      },
      {
        index: 12,
        keyword: '搜索关键词-11',
        count: 742,
        range: 42,
        status: 1,
      },
      {
        index: 13,
        keyword: '搜索关键词-12',
        count: 197,
        range: 78,
        status: 0,
      },
      {
        index: 14,
        keyword: '搜索关键词-13',
        count: 119,
        range: 3,
        status: 0,
      },
      {
        index: 15,
        keyword: '搜索关键词-14',
        count: 710,
        range: 55,
        status: 0,
      },
      {
        index: 16,
        keyword: '搜索关键词-15',
        count: 160,
        range: 67,
        status: 0,
      },
      {
        index: 17,
        keyword: '搜索关键词-16',
        count: 982,
        range: 40,
        status: 1,
      },
      {
        index: 18,
        keyword: '搜索关键词-17',
        count: 720,
        range: 16,
        status: 1,
      },
      {
        index: 19,
        keyword: '搜索关键词-18',
        count: 615,
        range: 44,
        status: 0,
      },
      {
        index: 20,
        keyword: '搜索关键词-19',
        count: 178,
        range: 41,
        status: 0,
      },
      {
        index: 21,
        keyword: '搜索关键词-20',
        count: 757,
        range: 92,
        status: 0,
      },
      {
        index: 22,
        keyword: '搜索关键词-21',
        count: 587,
        range: 33,
        status: 1,
      },
      {
        index: 23,
        keyword: '搜索关键词-22',
        count: 395,
        range: 5,
        status: 0,
      },
      {
        index: 24,
        keyword: '搜索关键词-23',
        count: 253,
        range: 93,
        status: 0,
      },
      {
        index: 25,
        keyword: '搜索关键词-24',
        count: 431,
        range: 37,
        status: 1,
      },
      {
        index: 26,
        keyword: '搜索关键词-25',
        count: 324,
        range: 12,
        status: 1,
      },
      {
        index: 27,
        keyword: '搜索关键词-26',
        count: 519,
        range: 1,
        status: 1,
      },
      {
        index: 28,
        keyword: '搜索关键词-27',
        count: 136,
        range: 46,
        status: 0,
      },
      {
        index: 29,
        keyword: '搜索关键词-28',
        count: 919,
        range: 34,
        status: 0,
      },
      {
        index: 30,
        keyword: '搜索关键词-29',
        count: 468,
        range: 52,
        status: 0,
      },
      {
        index: 31,
        keyword: '搜索关键词-30',
        count: 124,
        range: 85,
        status: 0,
      },
      {
        index: 32,
        keyword: '搜索关键词-31',
        count: 837,
        range: 37,
        status: 0,
      },
      {
        index: 33,
        keyword: '搜索关键词-32',
        count: 275,
        range: 29,
        status: 1,
      },
      {
        index: 34,
        keyword: '搜索关键词-33',
        count: 751,
        range: 42,
        status: 1,
      },
      {
        index: 35,
        keyword: '搜索关键词-34',
        count: 705,
        range: 55,
        status: 1,
      },
      {
        index: 36,
        keyword: '搜索关键词-35',
        count: 197,
        range: 80,
        status: 0,
      },
      {
        index: 37,
        keyword: '搜索关键词-36',
        count: 0,
        range: 18,
        status: 1,
      },
      {
        index: 38,
        keyword: '搜索关键词-37',
        count: 522,
        range: 80,
        status: 0,
      },
      {
        index: 39,
        keyword: '搜索关键词-38',
        count: 888,
        range: 96,
        status: 0,
      },
      {
        index: 40,
        keyword: '搜索关键词-39',
        count: 969,
        range: 14,
        status: 1,
      },
      {
        index: 41,
        keyword: '搜索关键词-40',
        count: 978,
        range: 90,
        status: 1,
      },
      {
        index: 42,
        keyword: '搜索关键词-41',
        count: 642,
        range: 20,
        status: 0,
      },
      {
        index: 43,
        keyword: '搜索关键词-42',
        count: 513,
        range: 3,
        status: 1,
      },
      {
        index: 44,
        keyword: '搜索关键词-43',
        count: 986,
        range: 7,
        status: 0,
      },
      {
        index: 45,
        keyword: '搜索关键词-44',
        count: 257,
        range: 98,
        status: 1,
      },
      {
        index: 46,
        keyword: '搜索关键词-45',
        count: 30,
        range: 39,
        status: 0,
      },
      {
        index: 47,
        keyword: '搜索关键词-46',
        count: 524,
        range: 77,
        status: 1,
      },
      {
        index: 48,
        keyword: '搜索关键词-47',
        count: 380,
        range: 82,
        status: 1,
      },
      {
        index: 49,
        keyword: '搜索关键词-48',
        count: 631,
        range: 78,
        status: 1,
      },
      {
        index: 50,
        keyword: '搜索关键词-49',
        count: 974,
        range: 40,
        status: 0,
      },
    ],
    offlineData: [
      {
        name: 'Stores 0',
        cvr: 0.8,
      },
      {
        name: 'Stores 1',
        cvr: 0.9,
      },
      {
        name: 'Stores 2',
        cvr: 0.9,
      },
      {
        name: 'Stores 3',
        cvr: 0.8,
      },
      {
        name: 'Stores 4',
        cvr: 0.6,
      },
      {
        name: 'Stores 5',
        cvr: 0.3,
      },
      {
        name: 'Stores 6',
        cvr: 0.1,
      },
      {
        name: 'Stores 7',
        cvr: 0.8,
      },
      {
        name: 'Stores 8',
        cvr: 0.6,
      },
      {
        name: 'Stores 9',
        cvr: 0.3,
      },
    ],
    offlineChartData: [
      {
        x: 1732700659373,
        y1: 48,
        y2: 77,
      },
      {
        x: 1732702459373,
        y1: 52,
        y2: 38,
      },
      {
        x: 1732704259373,
        y1: 12,
        y2: 31,
      },
      {
        x: 1732706059373,
        y1: 52,
        y2: 66,
      },
      {
        x: 1732707859373,
        y1: 45,
        y2: 59,
      },
      {
        x: 1732709659373,
        y1: 80,
        y2: 43,
      },
      {
        x: 1732711459373,
        y1: 62,
        y2: 63,
      },
      {
        x: 1732713259373,
        y1: 102,
        y2: 90,
      },
      {
        x: 1732715059373,
        y1: 104,
        y2: 16,
      },
      {
        x: 1732716859373,
        y1: 14,
        y2: 80,
      },
      {
        x: 1732718659373,
        y1: 52,
        y2: 25,
      },
      {
        x: 1732720459373,
        y1: 55,
        y2: 54,
      },
      {
        x: 1732722259373,
        y1: 44,
        y2: 85,
      },
      {
        x: 1732724059373,
        y1: 21,
        y2: 67,
      },
      {
        x: 1732725859373,
        y1: 103,
        y2: 44,
      },
      {
        x: 1732727659373,
        y1: 99,
        y2: 97,
      },
      {
        x: 1732729459373,
        y1: 98,
        y2: 41,
      },
      {
        x: 1732731259373,
        y1: 48,
        y2: 82,
      },
      {
        x: 1732733059373,
        y1: 53,
        y2: 79,
      },
      {
        x: 1732734859373,
        y1: 65,
        y2: 97,
      },
    ],
    salesTypeData: [
      {
        x: '家用电器',
        y: 4544,
      },
      {
        x: '食用酒水',
        y: 3321,
      },
      {
        x: '个护健康',
        y: 3113,
      },
      {
        x: '服饰箱包',
        y: 2341,
      },
      {
        x: '母婴产品',
        y: 1231,
      },
      {
        x: '其他',
        y: 1231,
      },
    ],
    salesTypeDataOnline: [
      {
        x: '家用电器',
        y: 244,
      },
      {
        x: '食用酒水',
        y: 321,
      },
      {
        x: '个护健康',
        y: 311,
      },
      {
        x: '服饰箱包',
        y: 41,
      },
      {
        x: '母婴产品',
        y: 121,
      },
      {
        x: '其他',
        y: 111,
      },
    ],
    salesTypeDataOffline: [
      {
        x: '家用电器',
        y: 99,
      },
      {
        x: '食用酒水',
        y: 188,
      },
      {
        x: '个护健康',
        y: 344,
      },
      {
        x: '服饰箱包',
        y: 255,
      },
      {
        x: '其他',
        y: 65,
      },
    ],
    radarData: [
      {
        name: '个人',
        label: '引用',
        value: 10,
      },
      {
        name: '个人',
        label: '口碑',
        value: 8,
      },
      {
        name: '个人',
        label: '产量',
        value: 4,
      },
      {
        name: '个人',
        label: '贡献',
        value: 5,
      },
      {
        name: '个人',
        label: '热度',
        value: 7,
      },
      {
        name: '团队',
        label: '引用',
        value: 3,
      },
      {
        name: '团队',
        label: '口碑',
        value: 9,
      },
      {
        name: '团队',
        label: '产量',
        value: 6,
      },
      {
        name: '团队',
        label: '贡献',
        value: 3,
      },
      {
        name: '团队',
        label: '热度',
        value: 1,
      },
      {
        name: '部门',
        label: '引用',
        value: 4,
      },
      {
        name: '部门',
        label: '口碑',
        value: 1,
      },
      {
        name: '部门',
        label: '产量',
        value: 6,
      },
      {
        name: '部门',
        label: '贡献',
        value: 5,
      },
      {
        name: '部门',
        label: '热度',
        value: 7,
      },
    ],
  },
};
const queryActivitiesData = {
  data: [
    {
      id: 'trend-1',
      updatedAt: '2024-11-27T10:11:47.672Z',
      user: {
        name: '曲丽丽',
        avatar:
          'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
      },
      group: {
        name: '高逼格设计天团',
        link: 'http://github.com/',
      },
      project: {
        name: '六月迭代',
        link: 'http://github.com/',
      },
      template: '在 @{group} 新建项目 @{project}',
    },
    {
      id: 'trend-2',
      updatedAt: '2024-11-27T10:11:47.672Z',
      user: {
        name: '付小小',
        avatar:
          'https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png',
      },
      group: {
        name: '高逼格设计天团',
        link: 'http://github.com/',
      },
      project: {
        name: '六月迭代',
        link: 'http://github.com/',
      },
      template: '在 @{group} 新建项目 @{project}',
    },
    {
      id: 'trend-3',
      updatedAt: '2024-11-27T10:11:47.672Z',
      user: {
        name: '林东东',
        avatar:
          'https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png',
      },
      group: {
        name: '中二少女团',
        link: 'http://github.com/',
      },
      project: {
        name: '六月迭代',
        link: 'http://github.com/',
      },
      template: '在 @{group} 新建项目 @{project}',
    },
    {
      id: 'trend-4',
      updatedAt: '2024-11-27T10:11:47.672Z',
      user: {
        name: '周星星',
        avatar:
          'https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png',
      },
      project: {
        name: '5 月日常迭代',
        link: 'http://github.com/',
      },
      template: '将 @{project} 更新至已发布状态',
    },
    {
      id: 'trend-5',
      updatedAt: '2024-11-27T10:11:47.672Z',
      user: {
        name: '朱偏右',
        avatar:
          'https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png',
      },
      project: {
        name: '工程效能',
        link: 'http://github.com/',
      },
      comment: {
        name: '留言',
        link: 'http://github.com/',
      },
      template: '在 @{project} 发布了 @{comment}',
    },
    {
      id: 'trend-6',
      updatedAt: '2024-11-27T10:11:47.672Z',
      user: {
        name: '乐哥',
        avatar:
          'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png',
      },
      group: {
        name: '程序员日常',
        link: 'http://github.com/',
      },
      project: {
        name: '品牌迭代',
        link: 'http://github.com/',
      },
      template: '在 @{group} 新建项目 @{project}',
    },
  ],
};
const queryProjectNoticeData = {
  data: [
    {
      id: 'xxx1',
      title: 'Alipay',
      logo: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
      description: '那是一种内在的东西，他们到达不了，也无法触及的',
      updatedAt: '2024-11-27T10:11:47.673Z',
      member: '科学搬砖组',
      href: '',
      memberLink: '',
    },
    {
      id: 'xxx2',
      title: 'Angular',
      logo: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
      description: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
      updatedAt: '2017-07-24T00:00:00.000Z',
      member: '全组都是吴彦祖',
      href: '',
      memberLink: '',
    },
    {
      id: 'xxx3',
      title: 'Ant Design',
      logo: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
      description: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
      updatedAt: '2024-11-27T10:11:47.673Z',
      member: '中二少女团',
      href: '',
      memberLink: '',
    },
    {
      id: 'xxx4',
      title: 'Ant Design Pro',
      logo: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
      description: '那时候我只会想自己想要什么，从不想自己拥有什么',
      updatedAt: '2017-07-23T00:00:00.000Z',
      member: '程序员日常',
      href: '',
      memberLink: '',
    },
    {
      id: 'xxx5',
      title: 'Bootstrap',
      logo: 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
      description: '凛冬将至',
      updatedAt: '2017-07-23T00:00:00.000Z',
      member: '高逼格设计天团',
      href: '',
      memberLink: '',
    },
    {
      id: 'xxx6',
      title: 'React',
      logo: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
      description: '生命就像一盒巧克力，结果往往出人意料',
      updatedAt: '2017-07-23T00:00:00.000Z',
      member: '骗你来学计算机',
      href: '',
      memberLink: '',
    },
  ],
};

module.exports = {
  'GET /api/fake_workplace_chart_data': (req, res) => {
    res.json(fakeChartData);
  },
  'GET /api/activities': (req, res) => {
    res.json(queryActivitiesData);
  },
  'GET /api/project/notice': (req, res) => {
    res.json(queryProjectNoticeData);
  },
};
