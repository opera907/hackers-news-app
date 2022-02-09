import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./AppRouter";
import { Provider } from "react-redux";
import { store } from "./store";
import { Reset } from "styled-reset";
import GlobalStyle from "./styles/GlobalStyle";
import "./services/fetcher";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
