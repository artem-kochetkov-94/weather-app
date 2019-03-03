import "./style.scss";
import Weather from "../../containers/Weather";

const MainContent = () => {
  return (
    console.log("---render--- CONTENT"),
    (
      <div className="content">
        <Weather />
      </div>
    )
  );
};

export default MainContent;
