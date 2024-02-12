import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
const Stack = createNativeStackNavigator();


// Screens
import OnBoardingScreen from './screens/OnBoardingScreen';
import HomeScreen from './screens/HomeScreen';

export default function MainApp({navigation}) {
  const [visitedCount, setVisitedCount] = useState(0)
  // check if already visited
  useEffect(() => {
    const checkVisited = async () => {
        const value = await AsyncStorage.getItem('@visited');
        value==1?navigation.navigate('HomeScreen')
        :navigation.navigate('OnBoarding')
    };

    checkVisited();
  }, []);
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }} >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          name="OnBoarding"
          component={OnBoardingScreen}
        />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})