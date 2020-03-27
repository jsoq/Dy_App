import Vue from 'vue'
import App from './App.vue'

import router from './router/index'

import './assets/font_image/iconfont.css'
import './assets/css/reset.css'
Vue.config.productionTip = false

import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style
import 'swiper/css/swiper.css'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VueAwesomeSwiper, )




new Vue({
  router,
  render: h => h(App),
}).$mount('#app')