import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
const Stack = createNativeStackNavigator();


// Screens
import OnBoardingScreen from './screens/OnBoardingScreen';

export default function MainApp() {
  return (
      <Stack.Navigator 
      screenOptions={{ headerShown: false }} >
        <Stack.Screen
          name="OnBoarding"
          component={OnBoardingScreen}
        />
      </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})