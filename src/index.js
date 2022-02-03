import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppRouter from "./AppRouter";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {console.log(store)}
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
