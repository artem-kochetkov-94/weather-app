import * as actions from "./actions";
import * as citiesSelectors from "./selectors";

export const getCityWeather = (id, date) => (dispatch, getState) => {
  const { cities } = getState();
  const { isFetching } = cities.active;

  if (isFetching) return Promise.resolve();

  const city = citiesSelectors.getCityById(cities, id);

  dispatch(actions.getCityWeatherRequest(id));

  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${
      city.title
    }&appid=28eeeb2e3db34c6fcd69a3fe631c21a4`
  )
    .then(response => response.json())
    .then(data => dispatch(actions.getCityWeatherSuccess(data)))
    .catch(response => dispatch(actions.getCityWeatherFailure(response)));
};
