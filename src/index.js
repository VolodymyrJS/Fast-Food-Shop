import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer';

const logger = store => {
  return next => {
    return action => {
      console.log('[Middleware] Dispatching => ', action);
      const result = next(action);
      console.log('[Middleware] next state => ', store.getState());
      return result;
    }
  }
}

const store = createStore(reducer, applyMiddleware(logger));

const app = (
  <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
serviceWorker.unregister();
