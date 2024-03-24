export const ActionTypes = {
  FETCH_WEATHER: "FETCH_WEATHER",
  FETCH_WEATHER_SUCCESS: "FETCH_WEATHER_SUCCESS",
  FETCH_WEATHER_ERROR: "FETCH_WEATHER_ERROR",
  FETCH_WEATHER_LONG_LAT: "FETCH_WEATHER_LONG_LAT",
  FETCH_WEATHER_LONG_LAT_SUCCESS: "FETCH_WEATHER_LONG_LAT_SUCCESS",
  FETCH_WEATHER_LONG_LAT_ERROR: "FETCH_WEATHER_LONG_LAT_ERROR",
  FETCH_LOCATION: "FETCH_LOCATION",
  FETCH_LOCATION_SUCCESS: "FETCH_LOCATION_SUCCESS",
  FETCH_LOCATION_ERROR: "FETCH_LOCATION_ERROR",
};
export const fetchWeather = (city: string) => ({
  type: ActionTypes.FETCH_WEATHER,
  payload: city,
});
export const fetchWeatherLonglat = () => {
  return {
    type: ActionTypes.FETCH_WEATHER_LONG_LAT,
  };
};

export const fetchLocation = () => {
  return {
    type: ActionTypes.FETCH_LOCATION,
  };
};

export const fetchLocationSuccess = (location) => {
  return {
    type: ActionTypes.FETCH_LOCATION_SUCCESS,
    payload: location,
  };
};

export const fetchLocationError = (error) => {
  return {
    type: ActionTypes.FETCH_LOCATION_ERROR,
    payload: error,
  };
};
