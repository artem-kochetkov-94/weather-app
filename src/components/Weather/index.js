import PropTypes from "prop-types";

const Weather = ({ tempArray, cityName, countryName }) => {
  return (
    <div className="weather">
      <p>страна: {countryName}</p>
      <p>город: {cityName}</p>
      {tempArray &&
        tempArray.map(item => (
          <p key={item.date}>
            {item.date} : {item.temp} по цельсию
          </p>
        ))}
    </div>
  );
};

Weather.propTypes = {
  tempArray: PropTypes.array.isRequired,
  cityName: PropTypes.string.isRequired
};

Weather.defaultProps = {
  tempArray: [],
  cityName: ""
};

export default Weather;
