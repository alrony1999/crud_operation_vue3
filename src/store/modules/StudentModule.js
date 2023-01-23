const studentModule = {
  namespaced: true,
  state: {
    count: 200,
  },
  mutations: {
    increment(state, value) {
      state.count += value;
    },
  },
  getters: {
    countstudent(state) {
      return state.count;
    },
    rootCountValue(state, getters, rootState) {
      return getters.countindex;
    },
  },
  actions: {
    increment({ commit }, value) {
      commit("increment", value);
      //   commit("increment", value, { root: true });
      //   commit("student/increment", value, { root: true });
    },
  },
};
export default studentModule;
