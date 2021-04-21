import React, { Component } from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';
import Transaction from './screens/Transaction'
import Search from './screens/Search'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'


export default class App extends Component {
  render() {
    return (

      <AppContainer />

    );
  }
}
const TabNavigator = createBottomTabNavigator({
 
  screen2: { screen: Transaction },
  screen1: { screen: Search }
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
       // console.log(routeName);
        if (routeName === "screen1") {
          return (
            <Image
              source={require("./assets/searchingbook.png")}
              style={{ width: 40, height: 40 }} />
          )
        }
        else if (routeName === "screen2") {
          return (
            <Image source={require("./assets/transactionImg.png")}
              style={{ width: 40, height: 40 }} />
          )
        }
      }
    })
  }
);

const AppContainer = createAppContainer(TabNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
