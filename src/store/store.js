import Vue from "vue";
import Vuex from "vuex";
// vuex是用在store这里的
Vue.use(Vuex);

const FOO = function (foo) {
    foo();
}

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
            // // 这样并不算异步
            // setTimeout(() => {
            //     state.count++
            // }, 5000);

            //state.count++
            // 这样也不算异步函数
            FOO(() => {
                state.count++;
                console.log('abcdefg')
            });
        },
        changeAge(state) {
            state.me.age++;
        }
    },
    getters: {
        self: function (state) {
            return state.me.name + state.me.age + state.me.sex;
        }
    },
    actions: {
        increment(context) {
            context.commit('increment')
        }
    }
})

export default Store;