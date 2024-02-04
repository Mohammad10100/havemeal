import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  SafeAreaView
 } from 'react-native'
 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
const global = require('./css/css')

// Screens
import StartScreen from './screens/StartScreen';
import StartScreen2 from './screens/StartScreen2';

const Stack = createNativeStackNavigator();

// TODO: Status bar
{/* <StatusBar
  animated={true}
  backgroundColor={global.baseBackground.backgroundColor}
/> */}
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='StartScreen2'> 
      <Stack.Screen name="StartScreen2" component={StartScreen2} />
      <Stack.Screen name="Home" component={StartScreen} />

    </Stack.Navigator> 
    </NavigationContainer>
  )
}