import Main from '@/pages/Main';
import PostPage from '@/pages/PostPage';
import About from '@/pages/About';
import CurrentPost from '@/pages/CurrentPost';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/posts',
    component: PostPage,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/posts/:id',
    component: CurrentPost,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
