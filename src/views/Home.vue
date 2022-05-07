<template>
  <div class="home">
    <div class="home-screen">
      <div id="welcome-window" class="window" style="width: 320px">
        <div class="title-bar">
          <div class="title-bar-text">Welcome to shy.fm!</div>
        </div>
        <div class="window-body">
          <p>Shy.fm is a playlist of many names over the years. I started this playlist in 2014 and just kept adding songs that I kept coming back to. I hope you find something you like!</p>
        </div>
        <div class="status-bar">
          <p class="status-bar-field">Press F1 for help</p>
          <p class="status-bar-field">Slide 1</p>
          <p class="status-bar-field">CPU Usage: 14%</p>
        </div>
      </div>
      <div class="window" style="width: 300px">
        <div class="title-bar">
          <div class="title-bar-text">About</div>
          <div class="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div class="window-body">
          <a :href="playlistUrl" target="_blank">View playlist on Spotify</a><br />
          {{ playlistLength }} songs and growing<br />
          Tracks from {{ getArtistsByAppearance.length }} unique artists<br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { getAuth, getPlaylistInfo, getPlaylistTracks } from "@/api/spotify.js";

export default {
  name: "Home",
  data() {
    return {
      playlistLength: 0,
      playlistUrl: "",
      spotifyToken: "",
      nextUrl: "",
      tracksLoaded: false,
    };
  },
  mounted() {
    this.handlePlaylistRetrieval();
  },
  computed: {
    ...mapGetters(["getArtistsByAppearance"]),
  },
  watch: {
    nextUrl: function () {
      this.retrievePlaylistTracks();
    },
    tracksLoaded: function (val) {
      // only do calculations if tracks are done loading and we don't already have the array generated
      if (val && !this.getArtistsByAppearance.length)
        this.determineUniqueArtists();
    },
  },
  methods: {
    ...mapActions(["addToJamsPlaylist", "determineUniqueArtists"]),
    async retrieveSpotifyToken() {
      const token = await getAuth();
      this.spotifyToken = token;
    },
    async retrievePlaylistInfo() {
      this.tracksLoaded = false;
      const playlistInfo = await getPlaylistInfo(this.spotifyToken);
      this.playlistUrl = playlistInfo.external_urls.spotify;
      this.playlistLength = playlistInfo.tracks.total;
      // i know this playlist so i can assume the number of tracks
      this.nextUrl = playlistInfo.tracks.next;
      this.addToJamsPlaylist(playlistInfo.tracks.items);
    },
    async retrievePlaylistTracks() {
      const tracks = await getPlaylistTracks(this.spotifyToken, this.nextUrl);
      if (tracks.items) this.addToJamsPlaylist(tracks.items);
      tracks.next ? (this.nextUrl = tracks.next) : (this.tracksLoaded = true);
    },
    async handlePlaylistRetrieval() {
      if (!this.spotifyToken) {
        await this.retrieveSpotifyToken();
      }
      if (!this.playlistLength) {
        await this.retrievePlaylistInfo();
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
}
</style>