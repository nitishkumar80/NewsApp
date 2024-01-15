// index.js or App entry point
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import ToastContainer from '.component/ToastContainer'; // Import the ToastContainer
export { default as ToastContainer } from './ToastContainer';

const Root = () => (
  <>
    <App />
    <ToastContainer /> Render the ToastContainer outside the NavigationContainer
  </>
);

AppRegistry.registerComponent('LOGINAPP', () => Root);
