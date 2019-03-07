import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import City from "../components/City";
import { citiesSelectors } from "../redux/ducks/cities";
import { weatherActions } from "../redux/ducks/weather";

const mapStateToProps = state => {
  return {
    cities: state.cities
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(weatherActions, dispatch);
};

class CityContainer extends React.PureComponent {
  render() {
    const { cities, id, getCityWeatherRequest } = this.props;
    const city = citiesSelectors.getCityById(cities, id);
    return <City {...city} getCityWeather={() => getCityWeatherRequest(id)} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CityContainer);
