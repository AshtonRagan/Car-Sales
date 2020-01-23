import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { Reducer } from "./components/Reducer/Reducer";
import App from "./App";

import "bulma/css/bulma.css";
import "./styles.scss";

const store = createStore(Reducer);
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
