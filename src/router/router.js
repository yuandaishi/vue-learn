/*
 * @Author: your name
 * @Date: 2022-03-04 08:55:38
 * @LastEditTime: 2022-03-04 16:45:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \learn\app\src\router\router.js
 */

import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    //如果未匹配到路由
    from.name ? next({ name: from.name }) : next("/"); //如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
  } else {
    next(); //如果匹配到正确跳转
  }
});

export default router;
