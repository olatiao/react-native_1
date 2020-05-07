/**
 * 日前：2020/4/29
 * 作者：liushun
 * Reactotron 配置
 * **/

import Reactotron, {asyncStorage} from 'reactotron-react-native';
import {AsyncStorage} from 'react-native';
import {reactotronRedux} from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure({}) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .use(reactotronRedux())
  .use(asyncStorage())
  .use(sagaPlugin())
  .connect(); // let's connect!

console.tron = Reactotron;

export default reactotron;
