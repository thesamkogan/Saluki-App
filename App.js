import React from 'react';
// import { Button, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Map from './components/Map'
import List from './components/List'
import DetailsScreen from './components/Details'

const MapStack = createStackNavigator({
  Map: { screen: Map },
  Details: { screen: DetailsScreen },
});

const ListStack = createStackNavigator({
  Comps: { screen: List },
  Details: { screen: DetailsScreen },
});

const DataStack = createStackNavigator({
  Data: { screen: List },
  Details: { screen: DetailsScreen },
});

export default createBottomTabNavigator(
  {
    Map: { screen: MapStack },
    Comps: { screen: ListStack },
    Data: { screen: DataStack }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Map') {
          iconName = `ios-compass${focused ? '' : '-outline'}`;
        } else if (routeName === 'Comps') {
          iconName = `ios-list-box${focused ? '' : '-outline'}`;
        } else if (routeName === 'Data') {
          iconName = `ios-trending-up${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);
