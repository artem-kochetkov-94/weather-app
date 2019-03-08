import { weatherOperations } from "./ducks/weather";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([weatherOperations.getCityWeather()]);
}
