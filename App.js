import React from 'react';
// import { Button, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Map from './components/Map'
import List from './components/List'
import DetailsScreen from './components/Details'

const MapStack = createStackNavigator({
  Home: { screen: Map },
  Details: { screen: DetailsScreen },
});

const ListStack = createStackNavigator({
  Settings: { screen: List },
  Details: { screen: DetailsScreen },
});

export default createBottomTabNavigator(
  {
    Home: { screen: MapStack },
    Settings: { screen: ListStack },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
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
