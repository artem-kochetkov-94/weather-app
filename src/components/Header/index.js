import DatePickerWeather from "../../containers/DatePickerWeather";
import "./style.scss";

const Header = () => {
  return (
    console.log("---render--- HEADER"),
    (
      <header className="header">
        <DatePickerWeather />
      </header>
    )
  );
};

export default Header;
