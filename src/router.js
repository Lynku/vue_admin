import Vue from 'vue';
import VueRouter from 'vue-router';
import http from './http';
Vue.use(VueRouter);

const useComponent = component => () =>
  import(`./pages/${component}.vue`);

export let routes = [
  {
    path: '/',
    component: useComponent('Dashboard'),
    meta: {
      title: 'Dashboard'
    }
  },
  {
    path: '/pages/:type',
    component: useComponent('Pages'),
    meta: {}
  },
  {
    path: '/page/:id',
    component: useComponent('EditPage'),
    meta: {}
  },
  {
    path: '/page/new/:type',
    component: useComponent('EditPage'),
    meta: {}
  },
  {
    path: '/users',
    component: useComponent('Users'),
    meta: {
      title: 'Users'
    }
  },
  {
    path: '/types',
    component: useComponent('Types'),
    meta: {
      title: 'Types'
    }
  },
  {
    path: '/settings',
    component: useComponent('Settings'),
    meta: {
      title: 'Settings'
    }
  }
];



export const router = new VueRouter({
  routes
});


export default router;