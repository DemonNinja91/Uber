import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import DestinationSearch from '../screens/DestinationSearch'
import SearchResults from '../screens/SearchResults'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator();
const HomeNavigator = () => {
  return (
    <NavigationContainer>
<Stack.Navigator
    screenOptions={{
        headerShown: false
    }}
    >
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='DestinationSearch' component={DestinationSearch} />
        <Stack.Screen name='SearchResults' component={SearchResults} />
    </Stack.Navigator>

    </NavigationContainer>
    
  )
}

export default HomeNavigator

const styles = StyleSheet.create({})