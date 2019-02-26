import Countries from "../../containers/Countries";

import "./style.scss";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h1>Sidebar</h1>
      <Countries />
    </div>
  );
}
