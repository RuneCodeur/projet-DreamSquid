import { createRouter, createWebHistory } from 'vue-router';
import generator from '../views/generator.vue';
import search from '../views/search.vue';
const routes = [
  {
    path: '/', component: generator
  },
  {
    path: '/generator', component: generator
  },
  {
    path: '/search', component: search
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
