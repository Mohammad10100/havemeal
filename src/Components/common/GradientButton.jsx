import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { StyleSheet } from 'nativewind';
const global = require('../../css/css')

export default function GradientButton(props) {

  return (
    <LinearGradient colors={[global.baseLinear2, global.baseLinear1]}
    style={styles.margin10}>
        <View style={styles.btn}>
          <Text style={[global.textBlack, global.textC, global.textWhite]} >{props.name}</Text>
        </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  btn: {
    padding:5,
    margin:3,
  },
  margin10:{
    margin:10
  }
});