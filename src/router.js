import Vue from 'vue';
import VueRouter from 'vue-router';
import icons from './assets/svg';
Vue.use(VueRouter);

const useComponent = component => () =>
  import(`./pages/${component}.vue`);

export let routes = [
  {
    path: '/',
    component: useComponent('Dashboard'),
    meta: {
      title: 'Dashboard',
      position: 'top',
      icon: icons.home
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
    path: '/type/:id',
    component: useComponent('EditType'),
    meta: {}
  },
  {
    path: '/type_new',
    component: useComponent('EditType'),
    meta: {}
  },
  
  {
    path: '/users',
    component: useComponent('Users'),
    meta: {
      title: 'Users',
      position: 'bottom',
      icon: icons.users
    }
  },
  {
    path: '/user/:id',
    component: useComponent('EditUser'),
    meta: {}
  },
  {
    path: '/user_new',
    component: useComponent('EditUser'),
    meta: {}
  },
  {
    path: '/types',
    component: useComponent('Types'),
    meta: {
      title: 'Types',
      position: 'bottom',
      icon: icons.types
    }
  },
  {
    path: '/settings',
    component: useComponent('Settings'),
    meta: {
      title: 'Settings',
      position: 'bottom',
      icon: icons.settings
    }
  }
];



export const router = new VueRouter({
  routes,
  mode: 'history'
});


export default router;