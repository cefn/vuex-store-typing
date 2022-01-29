import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

interface RootState {
  message: string;
}

const state: RootState = {
  message: "olleH",
};

export default new Vuex.Store({
  state,
  mutations: {},
  actions: {},
  modules: {},
});
