import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import logger from "redux-logger";
import reducer from "./reducer";
import promise from "redux-promise-middleware";

const allExtensions = composeWithDevTools(
  applyMiddleware(thunk, promise, logger)
);

const myStore = createStore(reducer, allExtensions);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
