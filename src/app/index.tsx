// import logo from "./../logo.svg";
import "./assets/scss/app.scss";
import { Provider } from "react-redux";
import store from "./store";
import { AppRoutes } from "../pages";

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
