
import * as serviceWorker from "./serviceWorker";

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './reducers';
//TODO: DO CONDITIONAL MAGIC TO MAKE THIS ENABLE DURING PRODUCTION AND DEVELOPMENT

//REMOVE DURING PRODUCTION
const store = createStore(rootReducer, applyMiddleware(thunk, logger)); 

//ENABLE DURING PRODUCTION
// const store = createStore(rootReducer, applyMiddleware(thunk));





ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
