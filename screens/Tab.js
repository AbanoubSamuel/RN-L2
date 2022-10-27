import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Flex from './Flex';
import Todo from './Todo';
import Cart from './Cart';

const Tab = () => {
    const Tab=createBottomTabNavigator();
  return (
   <Tab.Navigator
   screenOptions={{tabBarActiveTintColor:"red",
tabBarInactiveTintColor:"grey",
}}
   >
    <Tab.Screen name='Flex' component={Flex}></Tab.Screen>
    <Tab.Screen name='Todo' component={Todo}></Tab.Screen>
    <Tab.Screen name='Cart' component={Cart}/>
   </Tab.Navigator>
  )
}

export default Tab

const styles = StyleSheet.create({})