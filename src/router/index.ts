import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { Home, SystemMange } from './types';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login',
    meta: {
      show: false
    }
  },
  {
    path: '/login',
    component: () => import('../views/login/index.vue'),
    meta: {
      show: false
    }
  },
  Home,
  SystemMange
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
