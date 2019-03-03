import Cities from "../Cities";
import Accordion from "../../decorators/Accordion";
import PropTypes from "prop-types";

const Country = ({ title, cities, isOpen, toggleOpen }) => {
  return (
    <li className="country">
      <span onClick={toggleOpen}>{title}</span>
      {cities && isOpen && <Cities items={cities} />}
    </li>
  );
};

Country.propTypes = {
  title: PropTypes.string.isRequired,
  cities: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired
};

export default Accordion(Country);
