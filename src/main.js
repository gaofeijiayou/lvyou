// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'style/border.css'
import 'style/reset.css'
import './assets/ico/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import fastClick from 'fastclick'
//轮播图
//npm install vue-awesome-swiper --save
//npm install less less-loader --save-dev
// {
//   test: /\.less$/,
//   loader: "style-loader!css-loader!less-loader",
// },
Vue.config.productionTip = false
fastClick.attach(document.body)

Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
