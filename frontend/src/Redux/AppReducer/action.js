import axios from "axios";
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

export { getTrendingData, getCurrentData, getComedyData };
