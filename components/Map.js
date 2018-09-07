import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import {MapView} from 'expo'
import axios from 'axios'
// import XMLParser from 'react-xml-parser'

var TOKEN = process.env.REACT_APP_API_KEY;

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      region: {
          latitude: 37.7882,
          longitude: -122.432,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
    }
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
       (position) => {
         console.log(position);
         this.setState({ region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            error: null,
          }
         });
       },
       (error) => this.setState({ error: error.message }),
       { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
     );
   }

   async getData () {
    console.log(TOKEN)
    console.log("oops")
    try {
      let response = await axios.get(
        `https://www.zillow.com/webservice/GetRegionChildren.htm?${TOKEN}&state=il&city=chicago&childtype=neighborhood`
      );
      // let xml = new XMLParser().parseFromString(response)
      // console.log(response)
      // return xml
  } catch (error) {
    console.error(error);
  }
}


    // fetch('https://www.zillow.com/webservice/GetRegionChildren.htm?zws-id=X1-ZWz1gmui57kruz_3if65&state=il&city=chicago&childtype=neighborhood.json')
    // .then(res => {
    //   let xml = new XMLParser().parseFromString(res)
    //   console.log(xml)
    // })
  //  }

  render() {
    const {latitude, longitude} = this.state
    return (
      <MapView
        style={styles.map}
        region={this.state.region}
        onRegionChange={this.onRegionChange}

      >
      {!!this.state.region.latitude && !!this.state.region.longitude && <MapView.Marker
        coordinate={{"latitude":this.state.region.latitude,"longitude":this.state.region.longitude}}
        title={"Your Location"}
      />}

      <Button
      style={{ position: 'absolute', top:30, bottom: 50 }}
      title='Get'
      onPress={this.getData}
      >Get</Button>
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
});
