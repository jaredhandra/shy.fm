// initial state
const state = () => ({
  spotifyUserToken: "",
});

// getters
const getters = {};

// actions
const actions = {
  setSpotifyUserToken({ commit }, payload) {
    commit("SET_SPOTIFY_USER_TOKEN", payload);
  },
};

// mutations
const mutations = {
  SET_SPOTIFY_USER_TOKEN(state, payload) {
    state.spotifyUserToken = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
