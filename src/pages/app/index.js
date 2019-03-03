import Header from "../../components/Header";
import Content from "../../components/Content";
import Sidebar from "../../components/Sidebar";

import "./style.scss";

export default class App extends React.PureComponent {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app__content">
          <Content />
          <Sidebar />
        </div>
      </div>
    );
  }
}
