import { connect } from "react-redux";
import { weatherSelectors } from "../redux/ducks/weather";
import Weather from "../components/Weather";
import compose from "../utils/compose";

const mapStateToProps = state => {
  const isFetching = weatherSelectors.isFetching(state.weather);
  const weather = weatherSelectors.getWeather(state.weather);

  if (isFetching && weather === null) {
    return {
      isFetching
    };
  }

  if (weather === null) return {};

  const tempMap = compose(
    weatherSelectors.getWeatherByDate,
    weatherSelectors.getTempMap
  )(state.weather);

  return {
    weather,
    cityName: weather.city.name,
    tempMap,
    isFetching
  };
};

export default connect(
  mapStateToProps,
  {}
)(Weather);
