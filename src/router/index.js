import Vue from 'vue'
import Router from 'vue-router'
import vhome from '@/pages/home/vhome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: vhome
    },
  ],
  mode: 'history'
})
