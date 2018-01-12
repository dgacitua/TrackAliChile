import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMaterial from 'vue-material';

import 'vue-material/dist/vue-material.css';
import 'vue-material/dist/theme/default.css';

import App from './templates/App.vue';
import Routes from './modules/routes.js';

Vue.use(VueRouter);
Vue.use(VueMaterial);

const router = new VueRouter({
  mode: 'history',
  routes: Routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});