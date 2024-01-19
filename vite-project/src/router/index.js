import { createRouter, createWebHashHistory } from 'vue-router'
import ContactView from '@/views/ContactView.vue';
import AppelleView from '@/views/AppelleView.vue';
import HistorieView  from '@/views/HistorieView.vue';

const routes = [
  {
    path: '/',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/appelle',
    name: 'appelle',
    component: AppelleView
  },
  {
    path: '/historie',
    name: 'historie',
    component: HistorieView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
