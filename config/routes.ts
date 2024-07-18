export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user', routes: [
          {name: '登录', path: '/user/login', component: './user/Login'},
          {name: '注册', path: '/user/register', component: './user/Register'}
        ]
      },
      {component: './404'},
    ],
  },
  {path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome'},
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {path: '/admin/user-manage', name: '用户管理', icon: 'smile', component: './Admin/UserManage'},
      {component: './404'},
    ],
  },
  {name: '图片展览', icon: 'table', path: '/list', component: './TableList/index.tsx'},
  {name: '买票', icon: 'table', path: '/buy', component: './TableList/buy.tsx'},
  {name: '开心开心开心', icon: 'table', path: '/buy', component: './TableList/123.tsx'},
  {path: '/', redirect: '/welcome'},
  {component: './404'},
];
