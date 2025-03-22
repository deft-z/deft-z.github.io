import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue'; // 假设存在 Home 组件

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;