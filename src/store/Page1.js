const page1 = {
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  actions: {
    increment({ commit }) {
      commit("increment");
    }
  },
  namespaced: true
};

export default page1;
