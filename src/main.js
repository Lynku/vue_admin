// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import SimpleVueValidation from 'simple-vue-validator';
import VueTrix from "vue-trix";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'
import App from "./App";
import "@blexar/framework";
import store from "./store";
import router from "./router";

Vue.use(VueTrix);
Vue.use(ElementUI, { locale });
Vue.use(SimpleVueValidation);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: "#app",
  components: { App },
  render: h => h(App)
});
