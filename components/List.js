import React from 'react';
import { Button, Text, View } from 'react-native';

export default class List extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>List!</Text>
        <Button
          title="Go to Map"
          onPress={() => this.props.navigation.navigate('Map')}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}
