import Home from '../templates/Home.vue';
import About from '../templates/About.vue';
import NotFound from '../templates/NotFound.vue';

export default [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '*', name: 'not-found', component: NotFound }
];