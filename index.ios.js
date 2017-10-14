// Import a library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';


// Create a component (react)
const App = () => (
  <Text>Some text</Text>
);

// Render component to device (react-native)
AppRegistry.registerComponent('albums', () => App);
