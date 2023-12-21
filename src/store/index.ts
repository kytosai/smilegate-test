import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showSidebar: false,
  },
  getters: {},
  mutations: {
    setShowSidebar(state, newState: boolean) {
      state.showSidebar = newState;
    },
  },
  actions: {
    setShowSidebar(context, newState) {
      if (newState === true) {
        document.body.classList.add("lock-scroll");
      } else {
        document.body.classList.remove("lock-scroll");
      }

      context.commit("setShowSidebar", newState);
    },
  },
  modules: {},
});
