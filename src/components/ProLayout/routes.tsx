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
  { name: '查询表格', icon: 'table', path: '/list/table-list' },
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
