import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home';
import Topten from '../components/Topten';
import Cast from '../components/Cast';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/topten',
        name: 'topten',
        component: Topten
      },
      {
        path: '/cast',
        name: 'cast',
        component: Cast
      }
    ]
  })