import React, { Component } from 'react';
import './App.css';
import Routes from "./config/Routes";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';
import rootSaga from "./reducers/sagas";
import createSagaMiddleware from 'redux-saga'

class App extends Component {
  render() {

      // create the saga middleware
      const sagaMiddleware = createSagaMiddleware();
      const store = createStore(reducers, applyMiddleware(sagaMiddleware, logger));
      sagaMiddleware.run(rootSaga);

    return (
        <Provider store={store}>
        <Routes />
        </Provider>

    );
  }
}
export default App;
