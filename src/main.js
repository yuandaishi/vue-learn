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
import axios from "axios";
import VueAxios from "vue-axios";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from "./router/router";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueAxios, axios);

if (process.env.NODE_ENV === "development") {
  import("./mocks/browser").then(async ({ mocker: mocker }) => {
    //console.log(mocker)
    await mocker.start({
      // 对于没有 mock 的接口直接通过，避免异常
      onUnhandledRequest: "bypass",
    });
    new Vue({
      router,
      render: (h) => h(App),
    }).$mount("#app");
  });
  new Vue({
    router,
    render: (h) => h(App),
  }).$mount("#app");
} else {
  new Vue({
    router,
    data:function(){
      return {
        name:'root'
      }
    },
    render: (h) => h(App),
  }).$mount("#app");
}
