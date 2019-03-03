import Countries from "../../containers/Countries";
import "./style.scss";

const Sidebar = () => {
  return (
    console.log("---render--- SIDEBAR"),
    (
      <div className="sidebar">
        <h1>Sidebar</h1>
        <Countries />
      </div>
    )
  );
};

export default Sidebar;
