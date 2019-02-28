import Cities from "../Cities";
import Accordion from "../../decorators/Accordion";

const Country = ({ title, cities, isOpen, toggleOpen }) => {
  return (
    <li className="country">
      <span onClick={toggleOpen}>{title}</span>
      {cities && isOpen && <Cities items={cities} />}
    </li>
  );
};

export default Accordion(Country);
