import React from 'react';
import { Button, Text, View } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl'

Mapbox.setAccessToken('pk.eyJ1Ijoic2FtdWVsa29nYW4iLCJhIjoiY2plenUzcWl1MGU1YTJxcW9taXIwNDZvbiJ9.1Qc8pFKMtJc9ngRunOw1Fg');

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Mapbox.MapView
            styleURL={Mapbox.StyleURL.Street}
            zoomLevel={15}
            centerCoordinate={[11.256, 43.770]}
            style={styles.container}>
        </Mapbox.MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
