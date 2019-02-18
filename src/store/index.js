import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import dataMiddleware from './middlewares/dataMiddleware';
import emptyMiddleware from './middlewares/emptyMiddleware';

import reducers from './reducers';
import { getGenresAction } from './actions';

const env = process.env.NODE_ENV;

const logger = env && env === 'development' ? createLogger() : emptyMiddleware;

const middleware = [thunkMiddleware, dataMiddleware, logger];

const store = createStore(
  reducers,
  undefined,
  compose(applyMiddleware(...middleware))
);

store.dispatch(getGenresAction());

export default store;
