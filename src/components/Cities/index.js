import City from "../../containers/City";
import PropTypes from "prop-types";

const Cities = ({ items }) => {
  if (!items) return null;

  return (
    <ul className="cities">
      {items.map(id => (
        <City key={id} id={id} />
      ))}
    </ul>
  );
};

Cities.propTypes = {
  items: PropTypes.array.isRequired
};

export default Cities;
