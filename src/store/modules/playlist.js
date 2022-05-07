import { orderBy } from "lodash";

// initial state
const state = () => ({
  playlistUrl: "",
  tracks: [],
  uniqueArtists: [],
});

// getters
const getters = {
  getArtistsByAppearance: (state) => {
    return orderBy(state.uniqueArtists, ["count"], ["desc"]);
  },
};

// actions
const actions = {
  addToJamsPlaylist({ commit }, payload) {
    commit("ADD_TRACKS", payload);
  },
  determineUniqueArtists({ commit, state }) {
    let uniqueArtists = [];
    state.tracks.forEach((track) => {
      track.track.artists.forEach((artist) => {
        let artistIndex = uniqueArtists.findIndex(
          (x) => x.artist === artist.name
        );
        artistIndex === -1
          ? uniqueArtists.push({ artist: artist.name, count: 1 })
          : uniqueArtists[artistIndex].count++;
      });
    });
    commit("SET_UNIQUE_ARTISTS", uniqueArtists);
  },
};

// mutations
const mutations = {
  ADD_TRACKS(state, payload) {
    state.tracks.push(...payload);
  },
  SET_UNIQUE_ARTISTS(state, payload) {
    state.uniqueArtists = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
