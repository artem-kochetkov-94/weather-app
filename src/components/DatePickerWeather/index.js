import DatePicker from "../DatePicker";

class DatePickerWeather extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    const { getCityWeather, city } = this.props;
    getCityWeather(city.title, date);
  }

  render() {
    return <DatePicker onChange={this.handleChange} />;
  }
}

export default DatePickerWeather;
