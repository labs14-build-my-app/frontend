import * as serviceWorker from "./serviceWorker";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "./reducers";
import { BrowserRouter as Router } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
//TODO: DO CONDITIONAL MAGIC TO MAKE THIS ENABLE DURING PRODUCTION AND DEVELOPMENT

//REMOVE DURING PRODUCTION
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

//ENABLE DURING PRODUCTION
// const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App history={createHistory()} />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
