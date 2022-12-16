// NOTE: DO NOT MODIFY the intial state structure in this file.
import * as types from "./actionTypes";

const initialState = {
  Trending: [],
  Original:[],
  Popular:[],
  Current: [],
  Comedy: [],
  Featured: [],
  Historical: [],
  Kids:[],
  Clitter:[],
  Drama:[],
  Music:[],
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

      case types.GET_ORIGINAL_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_ORIGINAL_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        Original: payload,
      };
    case types.GET_ORIGINAL_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        Original: [],
      };
      
      //  POLPULAR DATA--------------------------------------------------- 
   
      case types.GET_POPULAR_DATA_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case types.GET_POPULAR_DATA_SUCCESS:
        return {
          ...state,
          isLoading: false,
          Popular: payload,
        };
  
      case types.GET_POPULAR_DATA_FAILURE:
        return {
          ...state,
          isLoading: false,
          Popular: [],
          isError: true,
        };
        //KIDS
      
        case types.GET_KIDS_DATA_REQUEST:
          return {
            ...state,
            isLoading: true,
          };
        case types.GET_KIDS_DATA_SUCCESS:
          return {
            ...state,
            isLoading: false,
            Kids: payload,
          };
    
        case types.GET_KIDS_DATA_FAILURE:
          return {
            ...state,
            isLoading: false,
            Kids: [],
            isError: true,
          };
      //DRAMA
      case types.GET_DRAMA_DATA_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case types.GET_DRAMA_DATA_SUCCESS:
        return {
          ...state,
          isLoading: false,
          Drama: payload,
        };
  
      case types.GET_DRAMA_DATA_FAILURE:
        return {
          ...state,
          isLoading: false,
          Drama:[],
          isError: true,
        };
    // for clitter
    case types.GET_CLITTER_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_CLITTER_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        Clitter: payload,
      };

    case types.GET_CLITTER_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        Clitter:[],
        isError: true,
      };
      // for music
      case types.GET_MUSIC_DATA_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case types.GET_MUSIC_DATA_SUCCESS:
        return {
          ...state,
          isLoading: false,
          Music: payload,
        };
  
      case types.GET_MUSIC_DATA_FAILURE:
        return {
          ...state,
          isLoading: false,
          Music:[],
          isError: true,
        };
    default:
      return state;
  }
};

export { reducer };
