import Countries from "../../containers/Countries";
import "./style.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1>Sidebar</h1>
      <Countries />
    </div>
  );
};

export default Sidebar;
