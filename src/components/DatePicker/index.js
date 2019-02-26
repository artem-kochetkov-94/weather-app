import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });

    this.props.onChange(date);
  }

  render() {
    return (
      <ReactDatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    );
  }
}

export default DatePicker;
