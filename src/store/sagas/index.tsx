import { put, takeEvery, takeLatest, call } from "redux-saga/effects";
import { ActionTypes } from "../actions";

let nextTaskId = 0;
const API_KEY = process.env.EXPO_PUBLIC_APP_API_KEY;
const API_URL = process.env.EXPO_PUBLIC_ENV_WEATHER_API;
interface Position {
  coords: {
    latitude: number;
    longitude: number;
  };
}

interface GeolocationError {
  code: number;
  message: string;
}
function* fetchWeatherSaga(action: any): Generator {
  try {
    const city = action.payload;
    const response = yield call(
      fetch,
      `${API_URL}weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = yield response.json();
    if (response.ok) {
      yield put({ type: ActionTypes.FETCH_WEATHER_SUCCESS, payload: data });
    } else {
      throw new Error(data.message || "Error fetching weather data");
    }
  } catch (error) {
    yield put({
      type: ActionTypes.FETCH_WEATHER_ERROR,
      payload: error.message,
    });
  }
}

function* fetchWeatherLongLatSaga(action: any): Generator {
  try {
    const response = yield call(
      fetch,
      `${API_URL}forecast?lat=-6.358405&lon=106.698751&exclude=hourly,minutely&units=metric&appid=${API_KEY}`
    );
    const data = yield response.json();
    console.log('datadata-->', data)
    if (response.ok) {
      yield put({ type: ActionTypes.FETCH_WEATHER_LONG_LAT_SUCCESS, payload: data });
    } else {
      throw new Error(data.message || "Error fetching weather data");
    }
  } catch (error) {
    yield put({
      type: ActionTypes.FETCH_WEATHER_LONG_LAT_ERROR,
      payload: error.message,
    });
  }
}
function* fetchLocationSaga(action: FetchLocationAction) {

  try {
    const position: Position = yield call(getCurrentPosition);
    yield put({
      type: ActionTypes.FETCH_LOCATION_SUCCESS,
      payload: position
    });

  } catch (error) {
    yield put({
      type: ActionTypes.FETCH_LOCATION_ERROR,
      payload: error as GeolocationError
    });
  }

}

function getCurrentPosition() {
  return new Promise<Position>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (error) => reject(error)
    );
  });
}
function* rootSaga() {
  yield takeLatest(ActionTypes.FETCH_WEATHER, fetchWeatherSaga);
  yield takeLatest(ActionTypes.FETCH_LOCATION, fetchLocationSaga);
  yield takeLatest(ActionTypes.FETCH_WEATHER_LONG_LAT, fetchWeatherLongLatSaga);
}

export default rootSaga;
