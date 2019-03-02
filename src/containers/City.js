import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import City from "../components/City";
import { citiesSelectors } from "../redux/ducks/cities";
import { weatherOperations } from "../redux/ducks/weather";

const mapStateToProps = state => {
  return {
    cities: state.cities
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(weatherOperations, dispatch);
};

class CityContainer extends React.PureComponent {
  render() {
    const { cities, id, getCityWeather } = this.props;
    const city = citiesSelectors.getCityById(cities, id);
    return <City {...city} getCityWeather={() => getCityWeather(id)} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CityContainer);
