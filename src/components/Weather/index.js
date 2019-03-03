import PropTypes from "prop-types";

const Weather = ({ tempArray, cityName }) => {
  return (
    <div className="weather">
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

export default Weather;
