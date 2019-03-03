import PropTypes from "prop-types";

const City = ({ title, getCityWeather }) => {
  return (
    <li className="city" onClick={getCityWeather}>
      {title}
    </li>
  );
};

City.propTypes = {
  title: PropTypes.string.isRequired,
  getCityWeather: PropTypes.func.isRequired
};

City.defaultProps = {
  title: "",
  getCityWeather: x => x
};

export default City;
