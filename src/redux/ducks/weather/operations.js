import * as actions from "./actions";

export const getCityWeather = id => (dispatch, getState) => {
  const { weather } = getState();
  const { isFetching } = weather;

  if (isFetching) return Promise.resolve();

  dispatch(actions.getCityWeatherRequest(id));

  fetch(
    `http://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=35d82edac62a9f06a197cbeaf62eaf8d`
  )
    .then(response => response.json())
    .then(data => dispatch(actions.getCityWeatherSuccess(data)))
    .catch(response => dispatch(actions.getCityWeatherFailure(response)));
};
