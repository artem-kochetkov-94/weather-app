import * as actions from "./actions";
import * as types from "./types";
import { call, put, takeLatest } from "redux-saga/effects";
import "regenerator-runtime/runtime";

export function* getCityWeather() {
  yield takeLatest(types.FETCH_CITY_WEATHER_REQUEST, cityWeatherLoadSaga);
}

function* cityWeatherLoadSaga({ payload: { id } }) {
  try {
    const data = yield call(() =>
      fetch(
        `http://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=35d82edac62a9f06a197cbeaf62eaf8d`
      ).then(response => response.json())
    );

    if (data.cod === "404") throw new Error("Уупс!");

    yield put(actions.getCityWeatherSuccess(data));
  } catch (error) {
    yield put(actions.getCityWeatherFailure(error));
  }
}
