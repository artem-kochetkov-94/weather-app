import { connect } from "react-redux";
import { citiesSelectors } from "../redux/ducks/cities";
import Weather from "../components/Weather";
import kelvinToCelsium from "../utils/kelvin-to-celsius";

const mapStateToProps = state => {
  if (
    state.cities.active.isFetching &&
    state.cities.active.weather === null
  ) {
    return {
      isFetching: citiesSelectors.fetchWeatherStatus(state.cities)
    };
  }

  if (state.cities.active.weather === null) return {};

  const weather = citiesSelectors.getActiveCityWeather(state.cities);
  const temp = citiesSelectors.getWeatherTemp(state.cities);
  const tempCelsium = kelvinToCelsium(temp);
  const isFetching = citiesSelectors.fetchWeatherStatus(state.cities);

  return {
    weather,
    temp: tempCelsium,
    isFetching
  };
};

export default connect(
  mapStateToProps,
  {}
)(Weather);
