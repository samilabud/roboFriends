import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import ThunkMiddleware from 'redux-thunk'
import { logger } from 'redux-logger';
import App from './containers/App';
import './index.css';
import 'tachyons'
import * as serviceWorker from './serviceWorker';
import { searchRobots,requestRobots } from './reducers';

const rootReducer = combineReducers({searchRobots,requestRobots});
const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware, logger)); //Lo cambie por logger ya que no funcionaba el createLogger

ReactDOM.render(
  <Provider  store={store}>
    <App/>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
