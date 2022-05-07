import axios from "axios";
import qs from "qs";

const jamsPlaylistId = "2pXKzmzb91RdzsISETs8jv";

export const getAuth = async () => {
  const clientId = process.env.VUE_APP_BASIC_CLIENT_ID;
  const clientSecret = process.env.VUE_APP_BASIC_CLIENT_SECRET;

  const headers = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    auth: {
      username: clientId,
      password: clientSecret,
    },
  };
  const data = {
    grant_type: "client_credentials",
  };

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      qs.stringify(data),
      headers
    );
    return response.data.access_token;
  } catch (error) {
    console.log(error);
  }
};

export const getPlaylistInfo = async (userToken) => {
  const playlistUrl = `https://api.spotify.com/v1/playlists/${jamsPlaylistId}`;
  try {
    const response = await axios.get(playlistUrl, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPlaylistTracks = async (userToken, nextUrl) => {
  try {
    const response = await axios.get(nextUrl, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
