// NOTE: DO NOT MODIFY the intial state structure in this file.
import * as types from "./actionTypes";

const initialState = {
  Trending: [],
  Current: [],
  Comedy: [],
  Featured: [],
  Historical: [],
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
    case types.GET_CURRENT_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_CURRENT_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        Current: payload,
      };
    case types.GET_CURRENT_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        Current: [],
      };
    case types.GET_COMEDY_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_COMEDY_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        Comedy: payload,
      };
    case types.GET_COMEDY_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        Comedy: [],
      };
    case types.GET_FEATURED_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_FEATURED_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        Featured: payload,
      };
    case types.GET_FEATURED_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        Featured: [],
      };

    case types.GET_HISTORICAL_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_HISTORICAL_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        Historical: payload,
      };
    case types.GET_HISTORICAL_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        Historical: [],
      };
    default:
      return state;
  }
};

export { reducer };
