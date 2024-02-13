import { View, Text, SafeAreaView, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
const global = require('../../css/css')



const windowWidth = Dimensions.get('window').width;


export default function GradientButton(props) {
  const empty = props.empty?true:false;

  return (
    <LinearGradient 
    colors={empty?['#fff', '#fff']:[global.baseLinear2, global.baseLinear1] }
    style={[styles.gradientView, styles.emptyView]} start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}>
        <View style={styles.btn}>
          <Text style={[global.textBlack, global.textC, empty?styles.emptyText:global.textWhite]} >{props.name?props.name:null}</Text>
        </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  btn: {
    padding:13,
    margin:3,
  },
  gradientView:{
    margin:10,
    borderRadius:100,

  },
  emptyView:{
    borderColor:global.baseLinear1,
    borderWidth:2,
  },
  emptyText:{
    color:global.baseLinear1
  },
  // width:{
  //   width:windowWidth/1.9,
  // }
});