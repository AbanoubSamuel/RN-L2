import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Flex from './screens/Flex';
import Login from './screens/Login';
import Todo from './screens/Todo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tab from './screens/Tab';
import Product from './screens/Product';
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function App()
{
    var initialRouteName;
    useEffect(() =>
    {
        const token = AsyncStorage.getItem('token')

        if (token)
        {
            initialRouteName = 'Home'
        } else
        {
            initialRouteName = 'Login'
        }
    }, [])



    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={initialRouteName}
                screenOptions={{
                }}>
                <Stack.Screen name='Home' component={Tab} options={{
                    headerBackVisible: false,
                    headerShown: false
                }}></Stack.Screen>
                <Stack.Screen name='Login' component={Login}></Stack.Screen>
                <Stack.Screen name='Product' component={Product} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        backgroundColor: '#fff',
    },
});
