import React, { Component } from 'react';
import { Platform, StyleSheet, Text, Form, Input, View } from 'react-native';

//* COMPONENTS *//
import UserEdit from './components/UserEdit/UserEdit';

//* REDUX *//
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <UserEdit/>
  </Provider>
)

export default App;
