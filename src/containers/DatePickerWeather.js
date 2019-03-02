import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { weatherSelectors } from "../redux/ducks/weather";
import { setDate } from "../redux/ducks/weather/actions";
import DatePickerWeather from "../components/DatePickerWeather";

const mapStateToProps = state => {
  const countDate = weatherSelectors.getCountDate(state.weather);

  return {
    countDate
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setDate }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DatePickerWeather);
