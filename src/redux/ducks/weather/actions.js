import * as types from "./types";

export const setDate = date => ({
  type: types.SET_DATE,
  payload: { date: +date }
});

export const getCityWeatherRequest = id => ({
  type: types.FETCH_CITY_WEATHER_REQUEST,
  payload: { id }
});

export const getCityWeatherSuccess = weather => ({
  type: types.FETCH_CITY_WEATHER_SUCCESS,
  payload: { weather }
});

export const getCityWeatherFailure = response => ({
  type: types.FETCH_CITY_WEATHER_FAILURE,
  payload: { response }
});
