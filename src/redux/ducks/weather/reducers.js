import * as types from "./types";
import { combineReducers } from "redux";

const initialState = {
  weather: null,
  date: +new Date(),
  isFetching: false,
  countDate: 5
};

const weather = (state = initialState.weather, action) => {
  switch (action.type) {
    case types.FETCH_CITY_WEATHER_SUCCESS:
      return action.payload.weather;
    default:
      return state;
  }
};

const date = (state = initialState.date, action) => {
  switch (action.type) {
    case types.SET_DATE:
      return action.payload.date;
    default:
      return state;
  }
};

const isFetching = (state = initialState.isFetching, action) => {
  switch (action.type) {
    case types.FETCH_CITY_WEATHER_REQUEST:
      return true;
    case types.FETCH_CITY_WEATHER_SUCCESS:
    case types.FETCH_CITY_WEATHER_FAILURE:
      return false;
    default:
      return state;
  }
};

const countDate = (state = initialState.countDate, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({ weather, date, isFetching, countDate });
