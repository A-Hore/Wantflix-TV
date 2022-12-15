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

export { getTrendingData };
