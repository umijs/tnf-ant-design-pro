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
    path: '/account',
    name: '个人页',
    icon: 'user',
    routes: [
      { name: '个人中心', path: '/account/center' },
      { name: '个人设置', path: '/account/settings' },
    ],
  },
];
