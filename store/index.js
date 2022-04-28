export const state = () => ({
  users: []
});

export const getters = {
  currentUsers(state) {
    return state.users;
  }
};

export const actions = {
  setUser({ commit }, user) {
    commit('SET_USER', user);
  }
};

export const mutations = {
  SET_USER(state, user) {
    state.users.push(user);
    // console.log(state.users);
  }
};
