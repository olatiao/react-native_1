/**
 * 日前：2020/4/29
 * 作者：liushun
 * 创建并配置 store
 * **/

import {applyMiddleware, createStore, compose} from 'redux';
import {combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import Reactotron from '../Config/ReactotronConfig';
import rootSaga from './sagas';

const sagaMonitor = Reactotron.createSagaMonitor();

const sagaMiddleware = createSagaMiddleware({sagaMonitor});

const rootReducer = combineReducers({
  UserReducer: require('./Reducer/UserReducer').reducer,
  IndexReducer: require('./Reducer/IndexReducer').reducer,
});

export default () => {
  const sagaMiddleware = createSagaMiddleware({
    sagaMonitor: Reactotron.createSagaMonitor(),
  });

  const store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware), Reactotron.createEnhancer()),
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
