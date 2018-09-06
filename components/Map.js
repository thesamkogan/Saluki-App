import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
// import Mapbox from '@mapbox/react-native-mapbox-gl'

// Mapbox.setAccessToken('pk.eyJ1Ijoic2FtdWVsa29nYW4iLCJhIjoiY2plenUzcWl1MGU1YTJxcW9taXIwNDZvbiJ9.1Qc8pFKMtJc9ngRunOw1Fg');

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>MAP DATA</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

