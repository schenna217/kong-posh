import React, { useState } from 'react';
import { NavigationContainer, } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TabNavigationState } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text} from 'react-native';
import { Context } from '../Context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, Entypo, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import Home from '../screens/Home';
import Menu from '../screens/Menu';
import Cart from '../screens/Cart';
import Item from '../screens/Item';
import colors from '../config/colors';
import { FontAwesome5 } from '@expo/vector-icons';


//const {Tab, Screen, Navigator} = createBottomTabNavigator();
const Tab = createBottomTabNavigator();
const loggedInStack = createStackNavigator();

export default function UserStack() {
    const [context, setContext] = useState([]);
    return(
        <Tab.Navigator
          screenOptions={
            ({ route }) => ({
              tabBarIcon: ({ focused, }) => {
                let c = focused ? colors.primary: "black";
                let rn = route.name

                if (rn == "Home") {
                  return <Entypo name="home" size={24} color={c} />
                } else if (rn == "Cart") {
                  return <Entypo name="shopping-cart" size={24} color={c} />
                } else if (rn == "Menu") {
                  return <FontAwesome name="apple" size={24} color={c} />
                } 
              },
              tabBarShowLabel: false,
              headerShown: false,
            })
          }
        >


          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Menu" component={Menu}  />
          <Tab.Screen name="Cart" component={Cart} />
          <Tab.Screen name="Item" component={Item} options={{
            tabBarButton: () => undefined
          }}/>
        

        </Tab.Navigator>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });