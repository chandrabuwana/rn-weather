import { combineReducers } from "redux";
import { ActionTypes } from "../actions";

const initialState = {
  weather: null,
  weatherLoading: false,
  weatherError: null,
  weatherLongLat: null,
  weatherLongLatLoading: false,
  weatherLongLatError: null,
  location: null,
  loading: false,
  error: null,
};
const weatherReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.FETCH_WEATHER:
      return {
        ...state,
        weatherLoading: true,
        weatherError: null,
      };
    case ActionTypes.FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        weatherLoading: false,
        weather: action.payload,
      };
    case ActionTypes.FETCH_WEATHER_ERROR:
      return {
        ...state,
        weatherLoading: false,
        weatherError: action.payload,
      };
    case ActionTypes.FETCH_WEATHER_LONG_LAT:
      return {
        ...state,
        weatherLongLatLoading: true,
        weatherLongLatError: null,
      };
    case ActionTypes.FETCH_WEATHER_LONG_LAT_SUCCESS:
      return {
        ...state,
        weatherLongLatLoading: false,
        weatherLongLat: action.payload,
      };
    case ActionTypes.FETCH_WEATHER_LONG_LAT_ERROR:
      return {
        ...state,
        weatherLongLatLoading: false,
        weatherLongLatError: action.payload,
      };
    case ActionTypes.FETCH_LOCATION:
      return { ...state, loading: true };
    case ActionTypes.FETCH_LOCATION_SUCCESS:
      return { ...state, location: action.payload, loading: false };
    case ActionTypes.FETCH_LOCATION_ERROR:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  weather: weatherReducer,
});

export default rootReducer;
