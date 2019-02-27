import { combineReducers } from "redux";
import * as types from "./types";

const initialState = {
  allIds: ["0", "1", "2", "3", "4", "5"],
  byIds: {
    "0": {
      id: "0",
      title: "Berlin"
    },
    "1": {
      id: "1",
      title: "Moscow"
    },
    "2": {
      id: "2",
      title: "Orenburg"
    },
    "3": {
      id: "3",
      title: "London"
    },
    "4": {
      id: "4",
      title: "Kazan"
    },
    "5": {
      id: "5",
      title: "Omsk"
    }
  },
  active: {
    id: null,
    weather: null,
    isFetching: false
  }
};

const allIds = (state = initialState.allIds, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const byIds = (state = initialState.byIds, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const active = (state = initialState.active, action) => {
  switch (action.type) {
    case types.FETCH_CITY_WEATHER_REQUEST:
      return {
        ...state,
        id: action.payload.id,
        isFetching: true
      };
    case types.FETCH_CITY_WEATHER_SUCCESS:
      return {
        ...state,
        weather: action.payload.weather,
        isFetching: false
      };
    case types.FETCH_CITY_WEATHER_FAILURE:
      return {
        ...state,
        isFetching: false
      };
    default:
      return state;
  }
};

export default combineReducers({ allIds, byIds, active });
