import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function HomeScreen() {
  const [token, setToken] = useState('')
  useEffect( ()=>{
    const getToken = async()=>{
      console.log('something');
      console.log(await AsyncStorage.getItem('token'))
      console.log(JSON.parse(await AsyncStorage.getItem('user')).email)
      // console.log(await AsyncStorage.removeItem('token'))
    }

    getToken()
  },[token])

  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})