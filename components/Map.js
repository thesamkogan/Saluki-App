import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import {MapView} from 'expo'

// Mapbox.setAccessToken('pk.eyJ1Ijoic2FtdWVsa29nYW4iLCJhIjoiY2plenUzcWl1MGU1YTJxcW9taXIwNDZvbiJ9.1Qc8pFKMtJc9ngRunOw1Fg');

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
       (position) => {
         console.log("wokeeey");
         console.log(position);
         this.setState({
           latitude: position.coords.latitude,
           longitude: position.coords.longitude,
           error: null,
         });
       },
       (error) => this.setState({ error: error.message }),
       { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
     );
   }

   getInitialState() {
    return {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    return (
      <MapView
        region={this.state.region}
        onRegionChange={this.onRegionChange}
      >
      </MapView>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
});
