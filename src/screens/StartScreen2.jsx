import React from 'react'
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Svg,
  Dimensions,
  Image
} from 'react-native'
import GradientButton from '../Components/common/GradientButton'
const global = require('../css/css')

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const img = require('../images/Havemeal@X5.png')

const BasketImage = require('../images/BasketAndPhone@X5.png')

export default function StartScreen2() {
  return (
    <SafeAreaView style={[global.whiteBackground, global.flexC, global.fullViewPort]}>
      <Image source={BasketImage}
        style={[styles.img, styles.test]}
      />
      <View style={[global.flexC,styles.test]}>
        <View style={styles.qouteView}>
          <Text style={[global.textBlack, global.heading2, global.textC, styles.heading]}>Find Food You Love</Text>
          <Text style={[global.textBlack, global.secondaryText, styles.qoute]}>Discover the best foods from over 1,000 restaurants and fast delivery to your doorstep</Text>
          <GradientButton name={'Next'} />
        </View>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  img: {
    height: windowHeight /2.5,
    aspectRatio: 1
  },
  heading: {
    fontSize:30,
    marginBottom: 12,
  },
  qouteView: {
    marginHorizontal: 30,
  },
  qoute: {
    textAlign: 'center'
  },
  // test:{
  //   borderWidth:4,
  //   borderBlockColor:'black'
  // }
})