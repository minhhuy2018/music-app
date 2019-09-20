import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 1、先引用了 axios 模块
import axios from "axios"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Heardernav from "@/components/Heardernav.vue";

Vue.use(ElementUI);

Vue.component("header-nav",Heardernav);
Vue.config.productionTip = false

axios.defaults.baseURL="http://localhost:8881";
// 2、把模块挂载到vue原型上 axios 就是个http 请求模块 底层就是Ajax
Vue.prototype.axios=axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
