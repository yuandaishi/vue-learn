import Vue from "vue";
import Vuex from "vuex";
// vuex是用在store这里的
Vue.use(Vuex);
const Store = new Vuex.Store({
    state: {
        count: 0,
        me: {
            name: "YDS",
            age: 35,
            sex: "man"
        }
    },
    mutations: {
        increment(state) {
            state.count++
        },
        changeAge(state) {
            state.me.age++;
        }
    },
    getters: {
        self: function (state) {
            return state.me.name + state.me.age + state.me.sex;
        }
    }
})

export default Store;