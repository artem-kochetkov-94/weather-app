import { connect } from "react-redux";
import { weatherSelectors } from "../redux/ducks/weather";
import Weather from "../components/Weather";
import Loading from "../components/Loading";
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

  const tempArray = compose(
    weatherSelectors.getWeatherByDate,
    weatherSelectors.getTempArray
  )(state.weather);

  return {
    weather,
    cityName: weather.city.name,
    tempArray,
    isFetching
  };
};

class WeatherContainer extends React.PureComponent {
  render() {
    console.log("---render--- WEATHER-CONTAINER");
    const { isFetching, weather } = this.props;

    if (isFetching) return <Loading />;

    if (!weather) return null;

    return <Weather {...this.props} />;
  }
}

export default connect(
  mapStateToProps,
  {}
)(WeatherContainer);

// export default connect(
//   mapStateToProps,
//   {}
// )(Weather);
