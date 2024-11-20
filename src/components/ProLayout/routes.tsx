export default [
  // {
  //   path: '/user',
  //   layout: false,
  //   routes: [{ name: '登录', path: '/user/login' }],
  // },
  { path: '/', name: '欢迎', icon: 'smile' },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
  },
  {
    path: '/list',
    icon: 'table',
    name: '列表页',
    routes: [
      {
        path: '/list/search',
        name: '搜索列表',
        routes: [
          { name: '搜索列表（文章）', path: '/list/search/articles' },
          { name: '搜索列表（项目）', path: '/list/search/projects' },
          { name: '搜索列表（应用）', path: '/list/search/applications' },
        ],
      },
      { name: '查询表格', path: '/list/table-list' },
      { name: '标准列表', path: '/list/basic-list' },
      { name: '卡片列表', path: '/list/card-list' },
    ],
  },
  {
    path: '/profile',
    name: '详情页',
    icon: 'profile',
    routes: [
      { name: '基础详情页', path: '/profile/basic' },
      { name: '高级详情页', path: '/profile/advanced' },
    ],
  },
  {
    path: '/result',
    name: '结果页',
    icon: 'CheckCircleOutlined',
    routes: [
      { name: '成功页', path: '/result/success' },
      { name: '失败页', path: '/result/fail' },
    ],
  },
  {
    path: '/exception',
    name: '异常页',
    icon: 'warning',
    routes: [
      { name: '403', path: '/exception/403' },
      { name: '404', path: '/exception/404' },
      { name: '500', path: '/exception/500' },
    ],
  },
];
