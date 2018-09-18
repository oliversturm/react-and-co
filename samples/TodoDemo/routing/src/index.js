import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import registerServiceWorker from './registerServiceWorker';
import Immutable from 'seamless-immutable';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createTodoReducer } from './reducers/todoReducer';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { connectRoutes } from 'redux-first-router';

const todoReducer = createTodoReducer(
  Immutable([
    { done: true, text: 'Attend Basta' },
    { done: false, text: 'Learn about React' }
  ])
);

const routes = {
  TODOS: '/todos',
  OTHERFUNC: '/other'
};

const routerInfo = connectRoutes(createHistory(), routes);

const reducers = combineReducers({
  todos: todoReducer,
  location: routerInfo.reducer
});

const middlewares = applyMiddleware(routerInfo.middleware);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(routerInfo.enhancer, middlewares)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
