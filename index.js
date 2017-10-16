// Import a library to help create a component.  Use destructured imports.
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component (react)
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);


// Render component to device (react-native)
AppRegistry.registerComponent('albums', () => App);
