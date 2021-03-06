import DatePicker from "../DatePicker";
import addDays from "../../utils/addDays";

class DatePickerWeather extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    const { setDate } = this.props;
    setDate(date);
  }

  render() {
    return (
      <DatePicker
        onChange={this.handleChange}
        minDate={new Date()}
        maxDate={addDays(new Date(), 4)}
      />
    );
  }
}

export default DatePickerWeather;
