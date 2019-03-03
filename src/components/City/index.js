import PropTypes from "prop-types";

const City = ({ title, getCityWeather }) => {
  return (
    console.log("---render--- CITY"),
    (
      <li className="city" onClick={getCityWeather}>
        {title}
      </li>
    )
  );
};

City.propTypes = {
  title: PropTypes.string.isRequired,
  getCityWeather: PropTypes.func.isRequired
};

export default City;
