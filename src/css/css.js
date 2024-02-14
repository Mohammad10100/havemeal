import { StyleSheet, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

module.exports = StyleSheet.create({
    baseColor:'#E91E59',
    baseLinear1:'#F56178',
    baseLinear2:'#E71989',
    baseBackground:{
      backgroundColor: '#E91E59'
    },
    whiteBackground:{
      backgroundColor: 'white'
    },
    baseTextColor:{
      color: 'white'
    },
    textBlack:{
      color: 'black'
    },
    textWhite:{
      color: 'white'
    },
    heading2:{
      fontFamily:'Poppins',
      fontWeight:'bold',
      fontSize:14
    },
    secondaryText:{
      fontFamily:'Poppins',
      fontSize:12
    },
    full:{
      width:'100%',
      height:'100%',
    },
    fullViewPort:{
      width:windowWidth,
      height:windowHeight,
    },
    flexC:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    spacebtw:{
      justifyContent:'space-evenly'
    },
    screen:{
      backgroundColor: '#E91E59'
    },
    textC:{
      textAlign:'center',
    },
    textBlack:{
      color:'black',
    },
    gradientButton:{
      color:'black',
    },
    inputStyle:{
      backgroundColor:'#d9d9d9',
      borderRadius:100,
      padding:20,
      lineHeight:20,
      fontSize:17,
      color:'#4E4E4E'
    },
    borderblacktest:{
    borderWidth:4,
    borderBlockColor:'black'
  }
})
