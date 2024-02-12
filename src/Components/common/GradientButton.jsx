import { View, Text, SafeAreaView, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
const global = require('../../css/css')



const windowWidth = Dimensions.get('window').width;


export default function GradientButton(props) {

  return (
    <LinearGradient 
    colors={[global.baseLinear2, global.baseLinear1] }
    style={styles.margin10} start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}>
        <View style={styles.btn}>
          <Text style={[global.textBlack, global.textC, global.textWhite]} >{props.name?props.name:null}</Text>
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
  },
  // width:{
  //   width:windowWidth/1.9,
  // }
});