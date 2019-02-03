import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import AppNavigator from './navigation/AppNavigator';

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./redux/reducer";

import Login from './components/Login'

let store = createStore(reducer);

console.log(store.getState());

//<Login />
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />      
      </Provider>
    );
  }
}
