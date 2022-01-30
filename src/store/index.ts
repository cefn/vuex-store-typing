import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

interface RootState {
  message: string;
}

const state: RootState = {
  message: "olleH",
};

const store = new Vuex.Store({
  state,
  mutations: {},
  actions: {},
  modules: {},
});

export type HelloStore = typeof store;

export default store;
