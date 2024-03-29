import { createRouter, createWebHistory } from 'vue-router';
import generator from '../views/generator.vue';
import home from '../views/home.vue';
import search from '../views/search.vue';
import login from '../views/login.vue';
import register from '../views/register.vue';
import validMail from '../views/valid-mail.vue';
import user from '../views/user.vue';
import create from '../views/create.vue';
import createDescription from '../views/createDescri.vue';
import seePicture from '../views/seePicture.vue';
import seeDescription from '../views/seeDescri.vue';


const routes = [
  {
    path: '/',
    component: home
  },
  {
    path: '/generator',
    name: 'generator',
    component: generator
  },
  {
    path: '/search', 
    name: 'search',
    component: search
  },
  {
    path: '/login', 
    name: 'login',
    component: login
  },
  {
    path: '/register', 
    name: 'register',
    component: register
  },
  {
    path: '/validation/:id/:token',
    name: 'validMail', 
    component: validMail
  },
  {
    path: '/user', 
    name: 'user',
    component: user
  },
  {
    path: '/create', 
    name: 'create',
    component: create
  },
  {
    path: '/picture/:idPicture', 
    name: 'picture', 
    component: seePicture
 },
 {
  path: '/description/:idDescription', 
  name: 'description', 
  component: seeDescription
},
{
  path: '/description/create/:idDescription', 
  name: 'createDescription', 
  component: createDescription
},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
