import Country from "../../containers/Country";
import PropTypes from "prop-types";

const Countries = ({ items }) => {
  if (!items) return null;

  return (
    <ul className="countries">
      {items.map(id => (
        <Country key={id} id={id} />
      ))}
    </ul>
  );
};

Countries.propTypes = {
  items: PropTypes.array.isRequired
};

Countries.defaultProps = {
  items: []
};

export default Countries;
