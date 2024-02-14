import { StyleSheet, Text, TextInput, View, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import GradientButton from '../../Components/common/GradientButton'
const global = require('../../css/css')

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SignUpScreen({navigation}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    address: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (name, value) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleSignup = () => {
    // Validation
    // TODO: password validation 
    if (
      !formData.name ||
      !formData.email ||
      !formData.mobileNumber ||
      !formData.address ||
      !formData.password ||
      !formData.confirmPassword) {
      alert('Please Fill All The Details');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // TODO: API Call and Handling 

    console.log('Signup form data:', formData);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View>
        <Text style={[global.textBlack, global.heading2, global.textC, styles.heading]}>
          Sign Up
        </Text>
        <Text style={[global.textBlack, global.secondaryText, styles.qoute]}>
          Enter you details to sign up
        </Text>
        </View>
        <TextInput
          style={[global.textC, global.inputStyle, styles.input]}
          placeholder="Name"
          value={formData.name}
          onChangeText={text => handleChange('name', text)}
        />
        <TextInput
          style={[global.textC, global.inputStyle, styles.input]}
          placeholder="Email"
          onChangeText={text => handleChange('email', text)}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={[global.textC, global.inputStyle, styles.input]}
          placeholder="Mobile Number"
          value={formData.mobileNumber}
          onChangeText={text => handleChange('mobileNumber', text)}
          keyboardType="number"
        />
        <TextInput
          style={[global.textC, global.inputStyle, styles.input]}
          placeholder="Address"
          value={formData.address}
          onChangeText={text => handleChange('address', text)}
          autoCapitalize="none"
        />
        <TextInput
          style={[global.textC, global.inputStyle, styles.input]}
          placeholder="Password"
          value={formData.password}
          onChangeText={text => handleChange('password', text)}
          secureTextEntry
        />
        <TextInput
          style={[global.textC, global.inputStyle, styles.input]}
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChangeText={text => handleChange('confirmPassword', text)}
          secureTextEntry
        />
        <TouchableOpacity
          onPress={handleSignup}
          style={styles.button}>
          <GradientButton name={'Sign Up'} />
        </TouchableOpacity>
        <Text style={[global.textBlack, global.secondaryText, styles.qoute]}>
          Already have an Account? 
          <TouchableOpacity
          onPress={()=>{navigation.replace('LogIn')}}>
          <Text>Login</Text>
        </TouchableOpacity>
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth,
    height: windowHeight,
    top: 0,
    marginBottom: 12,
  },
  innerContainer: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: windowWidth,
    height: windowHeight/100*80,

  },
  heading: {
    fontSize: 30,
    top: 0,
    marginBottom: 12,
  },
  qoute: {
    textAlign: 'center',
    height: windowHeight / 100 * 5,
  },
  input: {
    width: windowWidth / 100 * 80,
    textAlign: 'left',
    paddingHorizontal: 30,
  },
  button: {
    width: windowWidth / 100 * 80
  },
})