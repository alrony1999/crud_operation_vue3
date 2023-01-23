import { createStore } from "vuex";
import state from "@/store/state.js";
import * as getters from "@/store/getters.js";
import * as actions from "@/store/actions.js";
import * as mutations from "@/store/mutations.js";
import studentModule from "@/store/modules/StudentModule.js";

// const store = createStore({
//   state,
//   getters,
//   actions,
//   mutations,
// });
const store = createStore({
  state: {
    count: 100,
  },
  mutations: {
    increment(state, value) {
      state.count += value;
    },
  },
  getters: {
    countindex(state) {
      return state.count;
    },
    studentCount(state) {
      return state.student.count;
    },
  },
  actions: {
    increment({ commit }, value) {
      commit("increment", value);
      // commit("student/increment", value);
    },
  },
  modules: {
    student: studentModule,
  },
});

export default store;
