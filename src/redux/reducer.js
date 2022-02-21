import { combineReducers } from 'redux';

const initialState = {
    response: []
}

const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case "WEATHER_FETCHING_ATTEMPT":
      return {
          ...state,
       isFetching: true,
       isError: false
      };
      case "WEATHER_FETCHING_SUCCESS":
      return {
          ...state,
       isFetching: false,
       isError: false,
       response: action.payload
      };
      case "WEATHER_FETCHING_ERROR":
      return {
          ...state,
       isFetching: false,
       isError: true
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
    appReducer: appReducer
});

export default rootReducer;