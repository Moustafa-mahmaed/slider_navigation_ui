/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
 
  View,
  Text,
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Drawer from "./drawer"
const App = () => {
  return (
    <NavigationContainer >
     <StatusBar hidden />
       <Drawer />
    </NavigationContainer>
  );
};

export default App;

