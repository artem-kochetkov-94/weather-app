import Country from "../../containers/Country";
import PropTypes from "prop-types";

const Countries = ({ items }) => {
  if (!items) return null;

  return (
    console.log("---render--- COUNTRIES"),
    (
      <ul className="countries">
        {items.map(id => (
          <Country key={id} id={id} />
        ))}
      </ul>
    )
  );
};

Countries.propTypes = {
  items: PropTypes.array.isRequired
};

export default Countries;
