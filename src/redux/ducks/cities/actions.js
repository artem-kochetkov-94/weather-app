import * as types from "./types";

export const getCityWeatherRequest = () => ({
  type: types.FETCH_CITY_WEATHER_REQUEST
});

export const getCityWeatherSuccess = weather => ({
  type: types.FETCH_CITY_WEATHER_SUCCESS,
  payload: { weather }
});

export const getCityWeatherFailure = response => ({
  type: types.FETCH_CITY_WEATHER_FAILURE,
  payload: { response }
});
