import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import DatePickerWeather from "../components/DatePickerWeather";
import { citiesSelectors, citiesOperations } from "../redux/ducks/cities";

const mapStateToProps = state => {
  return {
    city: citiesSelectors.getCityById(state.cities, state.cities.active.id)
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(citiesOperations, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DatePickerWeather);
