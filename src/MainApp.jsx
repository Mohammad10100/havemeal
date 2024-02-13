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
import Authentication from './screens/Authentication/Index';

export default function MainApp({navigation}) {
  const [visitedCount, setVisitedCount] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check user authentication status
  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const userToken = await AsyncStorage.getItem('@userToken');
        if(userToken == null){
          navigation.navigate('Authentication')
        }else{
          navigation.navigate('HomeScreen')
        }
        setIsLoggedIn(!!userToken); // Convert userToken to boolean
      } catch (error) {
        console.error('Error checking authentication:', error);
        navigation.navigate('Authentication')
      }
    };

    checkAuthentication();
  }, []);
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }} >
        <Stack.Screen
          name="Authentication"
          component={Authentication}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})