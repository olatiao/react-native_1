/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import AppNav from './App/Container/AppContainer';
import {Provider} from 'react-redux';
import createStore from './App/Store';

const store = createStore()

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <AppNav />
      </Provider>
    );
  }
}
