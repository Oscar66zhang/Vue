import { createRouter, createWebHistory } from 'vue-router';
import UserList from '../components/UserList.vue'; 
import UserDetail from '../components/UserDetail.vue'; 

const routes = [
  {
    path: '/',
    name: 'userList',
    component: UserList
  },
  {
    path: '/user/:id',
    name: 'userDetail',
    component: UserDetail
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
