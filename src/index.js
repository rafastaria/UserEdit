import React, { Component } from 'react';
import { Platform, StyleSheet, Text, Form, Input, View } from 'react-native';

//* COMPONENTS *//
import UserEdit from './components/UserEdit/UserEdit';
import NewPass from './components/UserEdit/NewPass';

//* REDUX *//
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <NewPass />
  </Provider>
)

export default App;
