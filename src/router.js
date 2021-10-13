import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const useComponent = component => () =>
  import(`./pages/${component}.vue`);
/*
export const routes = [
  {
    path: '/',
    component: useComponent('Home'),
    meta: {
      title: 'VeeValidate Examples',
      description:
        'This is a collection of examples to showcase the features of VeeValidate'
    }
  },
  {
    path: '/basic',
    component: useComponent('Basic'),
    meta: {
      title: 'Basic Example',
      description: 'This is the minimum code to get validation working.'
    }
  },


  {
    path: '/backend',
    component: useComponent('Backend'),
    meta: {
      title: 'Async Validation',
      description:
        'A simple backend validation example with unique email validator'
    }
  },
  {
    path: '/initial',
    component: useComponent('Initial'),
    meta: {
      title: 'Validating Initial Values',
      description: 'Validating pre-populated inputs'
    }
  },
  {
    path: '/debounce',
    component: useComponent('Delay'),
    meta: {
      title: 'Delayed (Debounced) Validation',
      description: 'Debounce the validation rate of vee-validate'
    }
  },
  {
    path: '/flags',
    component: useComponent('Flags'),
    meta: {
      title: 'Flags Example',
      description: 'The various flags provided by vee-valdiate'
    }
  },
  {
    path: '/custom',
    component: useComponent('Custom'),
    meta: {
      title: 'Custom Component Example',
      description: 'Validating custom vue components'
    }
  },
  {
    path: '/form',
    component: useComponent('Form'),
    meta: {
      title: 'Validating Forms',
      description: 'Validate forms before submission.'
    }
  },
  {
    path: '/locale',
    component: useComponent('Locale'),
    meta: {
      title: 'Localization',
      description: 'Switching locales dynamically'
    }
  },
 
  {
    path: '/scopes',
    component: useComponent('Scopes'),
    meta: {
      title: 'Scoped Validation',
      description: 'Limiting validation to specific scopes or groups of inputs'
    }
  },
  
  {
    path: '/vuex',
    component: useComponent('Vuex'),
    meta: {
      title: 'Validating Vuex State',
      description: 'Using setters on computed properties to validate vuex state'
    }
  },
  {
    path: '/infer',
    component: useComponent('Infer'),
    meta: {
      title: 'Inferred Rules',
      description: 'Using HTML5 Attributes to validate'
    }
  }
];*/
export const routes = [
  {
    path: '/',
    component: useComponent('Dashboard'),
    meta: {
      title: 'Dashboard'
    }
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
