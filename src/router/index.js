import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import LessonPage from '../views/LessonPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/lesson/interpolation',
    name: 'Interpolation',
    component: LessonPage,
    meta: {
      title: '文本插值',
      component: 'InterpolationDemo',
    },
  },
  {
    path: '/lesson/reactive',
    name: 'Reactive',
    component: LessonPage,
    meta: {
      title: '响应式基础',
      component: 'ReactiveDemo',
    },
  },
  {
    path: '/lesson/event',
    name: 'Event',
    component: LessonPage,
    meta: {
      title: '事件处理',
      component: 'EventDemo',
    },
  },
  {
    path: '/lesson/conditional',
    name: 'Conditional',
    component: LessonPage,
    meta: {
      title: '条件渲染',
      component: 'ConditionalDemo',
    },
  },
  {
    path: '/lesson/list',
    name: 'List',
    component: LessonPage,
    meta: {
      title: '列表渲染',
      component: 'ListDemo',
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
