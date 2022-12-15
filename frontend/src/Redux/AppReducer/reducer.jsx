// NOTE: DO NOT MODIFY the intial state structure in this file.
import * as types from "./actionTypes";

const initialState = {
  Trending: [],

  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_TRENDING_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_TRENDING_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        Trending: payload,
      };

    case types.GET_TRENDING_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        Trending: [],
        isError: true,
      };
    default:
      return state;
  }
};

export { reducer };
