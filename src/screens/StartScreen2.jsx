import React from 'react'
import {
  SafeAreaView, 
  StatusBar,
  StyleSheet, 
  Text, 
  View,
  Svg,
  Dimensions, 
  Image} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
const global = require('../css/css')

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const img = require('../images/Havemeal@X5.png')


export default function StartScreen() {
  return (
    <SafeAreaView style={[global.flexC, styles.container, styles.safeArea]}>
        {/* <Image style={styles.image} source={basketImageSrc} /> */}
        {/* <Image style={styles.image} source={img} />
         */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: windowWidth,
    aspectRatio:1
  }
})

