/*
 * @Author: your name
 * @Date: 2022-03-04 09:01:31
 * @LastEditTime: 2022-03-08 09:17:13
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \learn\app\src\router\routers.js
 */

import HelloWorld from "./../components/HelloWorld.vue";
import Computed from "./../components/computed/Computed.vue";
import KeySame from "./../components/KeySame.vue";
import Is from "./../components/Is.vue"
const preUrl = "";
const routes = [
  {
    path: preUrl + "/",
    component: HelloWorld,
    children: [
      {
        path: preUrl + "computed1",
        component: Computed,
      },
      {
        path: preUrl + "KeySame",
        component: KeySame,
      },
      {
        path: preUrl + "Is",
        component: Is,
      },
    ],
  },
];

export default routes;
