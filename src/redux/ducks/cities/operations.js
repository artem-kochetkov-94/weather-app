import * as actions from "./actions";

export const getCityWeather = id => dispatch => {
  dispatch(actions.getCityWeatherRequest(id));

  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=28eeeb2e3db34c6fcd69a3fe631c21a4`
  )
    .then(response => response.json())
    .then(data => {
      console.log(data);
      dispatch(actions.getCityWeatherSuccess(data));
    })
    .catch(response => dispatch(actions.getCityWeatherFailure(response)));
};
