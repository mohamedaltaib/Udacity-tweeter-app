import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import reducer from "./reduces";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import middlewares from "./middlewares";

const store = createStore(reducer, middlewares);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
