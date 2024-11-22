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
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'dashboard',
    routes: [
      { name: '分析页', path: '/dashboard/analysis' },
      { name: '监控页', path: '/dashboard/monitor' },
      { name: '工作台', path: '/dashboard/workplace' },
    ],
  },
  {
    path: '/form',
    name: '表单页',
    icon: 'form',
    routes: [
      { name: '基础表单', path: '/form/basic-form' },
      { name: '分步表单', path: '/form/step-form' },
      { name: '高级表单', path: '/form/advanced-form' },
    ],
  },
  {
    path: '/account',
    name: '个人页',
    icon: 'user',
    routes: [
      { name: '个人中心', path: '/account/center' },
      { name: '个人设置', path: '/account/settings' },
    ],
  },
];
