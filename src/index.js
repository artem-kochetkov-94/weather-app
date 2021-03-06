import App from "./pages/app";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./style/main.scss";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
