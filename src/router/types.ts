import { RouteRecordRaw } from 'vue-router';

export const Home: RouteRecordRaw = {
  path: '/dashboard',
  component: () => import('../components/layout/index.vue'),
  meta: {
    show: true,
    title: '系统总览',
    icon: 'el-icon-monitor'
  },
  children: [
    {
      path: 'mannger',
      component: () => import('../components/layout/index.vue'),
      meta: {
        show: true,
        title: '测试路由'
      }
    }
  ]
};

export const SystemMange: RouteRecordRaw = {
  path: '/dashboard',
  component: () => import('../components/layout/index.vue'),
  meta: {
    show: true,
    title: '系统管理',
    icon: 'el-icon-setting'
  },
  children: [
    {
      path: 'user',
      component: () => import('../components/layout/index.vue'),
      meta: {
        show: true,
        title: '用户管理'
      }
    },
    {
      path: 'department',
      component: () => import('../components/layout/index.vue'),
      meta: {
        show: true,
        title: '部门管理'
      }
    },
    {
      path: 'menu',
      component: () => import('../components/layout/index.vue'),
      meta: {
        show: true,
        title: '菜单管理'
      }
    },
    {
      path: 'role',
      component: () => import('../components/layout/index.vue'),
      meta: {
        show: true,
        title: '角色管理'
      }
    }
  ]
};
