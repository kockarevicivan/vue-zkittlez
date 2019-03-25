import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
      users: []
    },
    mutations: {
      addUser (state, payload) {
        state.users.push(value);
      }
    },
    actions: {
        addUser(context, payload) {
            context.commit('addUser', payload);
        }
    },
    getters: {
        users: (state) => {
            return () => {
                return state.users;
            }
        }
    }
});

export default store;