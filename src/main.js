/*
 * @Author: your name
 * @Date: 2022-03-04 08:53:11
 * @LastEditTime: 2022-03-04 13:54:18
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \learn\app\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from "./router/router";
import Store from "./store/store"

Vue.config.productionTip = false;
Vue.use(ElementUI);


new Vue({
  router,
  store: Store, //注入store，之后的vue组件可以通过this.$store获取
  render: (h) => h(App),
}).$mount("#app");