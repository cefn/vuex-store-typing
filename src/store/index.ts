import Vue from "vue";
import Vuex from "vuex";
import { mapTypedState } from "./util";

Vue.use(Vuex);

export interface RootState {
  message: string;
}

const state: RootState = {
  message: "olleH",
};

export function mapRootState(keys: (keyof RootState)[]) {
  return mapTypedState<RootState>(keys);
}

export default new Vuex.Store({
  state,
  mutations: {},
  actions: {},
  modules: {},
});
