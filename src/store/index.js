import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isplay: false,
  },
  getters: {
    isplay: (state) => state.isplay,
  },
  mutations: {
    SET_PLAY(state, payload) {
      state.isplay = payload;
    },
  },
  actions: {
    setPlay({ commit }) {
      commit("SET_PLAY", true);
    },
  },
});
