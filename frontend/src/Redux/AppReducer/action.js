import axios from "axios";
// import { data } from "jquery";
import * as types from "./actionTypes";

const getTrendingData = (dispatch) => {
  dispatch({ type: types.GET_TRENDING_DATA_REQUEST });
  return axios
    .get("https://troubled-slip-lion.cyclic.app/premium")
    .then((res) =>
      dispatch({ type: types.GET_TRENDING_DATA_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: types.GET_TRENDING_DATA_FAILURE, payload: err })
    );
};

//for current data

const getCurrentData = (dispatch) => {
  dispatch({ type: types.GET_CURRENT_DATA_REQUEST });
  return axios
    .get("https://troubled-slip-lion.cyclic.app/current")
    .then((res) =>
      dispatch({ type: types.GET_CURRENT_DATA_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: types.GET_CURRENT_DATA_FAILURE, payload: err })
    );
};
//for coemdy data

const getComedyData = (dispatch) => {
  dispatch({ type: types.GET_COMEDY_DATA_REQUEST });
  return axios
    .get("https://troubled-slip-lion.cyclic.app/comedy")
    .then((res) =>
      dispatch({ type: types.GET_COMEDY_DATA_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: types.GET_COMEDY_DATA_FAILURE, payload: err })
    );
};

//for future released

const getFeatureReleasedData = (dispatch) => {
  dispatch({ type: types.GET_FEATURED_DATA_REQUEST });
  return axios
    .get("https://troubled-slip-lion.cyclic.app/featured")
    .then((res) =>
      dispatch({ type: types.GET_FEATURED_DATA_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: types.GET_FEATURED_DATA_FAILURE, payload: err })
    );
};

//for historical data

const getHistoricalData = (dispatch) => {
  dispatch({ type: types.GET_HISTORICAL_DATA_REQUEST });
  return axios
    .get("https://troubled-slip-lion.cyclic.app/historical")
    .then((res) =>
      dispatch({ type: types.GET_HISTORICAL_DATA_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: types.GET_HISTORICAL_DATA_FAILURE, payload: err })
    );
};
//for Popular data
const getPopularData = (dispatch) => {
  dispatch({ type: types.GET_POPULAR_DATA_REQUEST });
  return axios
    .get("https://troubled-slip-lion.cyclic.app/popular")
    .then((res) =>
      dispatch({ type: types.GET_POPULAR_DATA_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: types.GET_POPULAR_DATA_FAILURE, payload: err })
    );
};

//for Original data

const getOriginalData = (dispatch) => {
  dispatch({ type: types.GET_ORIGINAL_DATA_REQUEST });
  return axios
    .get("https://troubled-slip-lion.cyclic.app/original")
    .then((res) =>
      dispatch({ type: types.GET_ORIGINAL_DATA_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: types.GET_ORIGINAL_DATA_FAILURE, payload: err })
    );
};

//for kids data
const getKidsData = (dispatch) => {
  dispatch({ type: types.GET_KIDS_DATA_REQUEST });
  return axios
    .get("https://troubled-slip-lion.cyclic.app/kid")
    .then((res) =>
      dispatch({ type: types.GET_KIDS_DATA_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: types.GET_KIDS_DATA_FAILURE, payload: err })
    );
};
// for drama
const getdramaData = (dispatch) => {
  dispatch({ type: types.GET_DRAMA_DATA_REQUEST });
  return axios
    .get("https://troubled-slip-lion.cyclic.app/drama")
    .then((res) =>
      dispatch({ type: types.GET_DRAMA_DATA_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: types.GET_DRAMA_DATA_FAILURE, payload: err })
    );
};
// for clitter
const getclitterData = (dispatch) => {
  dispatch({ type: types.GET_CLITTER_DATA_REQUEST });
  return axios
    .get("https://troubled-slip-lion.cyclic.app/clitter")
    .then((res) =>
      dispatch({ type: types.GET_CLITTER_DATA_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: types.GET_CLITTER_DATA_FAILURE, payload: err })
    );
};
// for music data

const getmusicData = (dispatch) => {
  dispatch({ type: types.GET_MUSIC_DATA_REQUEST });
  return axios
    .get("https://troubled-slip-lion.cyclic.app/music")
    .then((res) =>
      dispatch({ type: types.GET_MUSIC_DATA_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: types.GET_MUSIC_DATA_FAILURE, payload: err })
    );
};

export {
  getTrendingData,
  getCurrentData,
  getComedyData,
  getFeatureReleasedData,
  getHistoricalData,
  getOriginalData,
  getPopularData,
  getKidsData,
  getdramaData,
  getclitterData,
  getmusicData,
};
