import { StyleSheet, Text, View, Image, Dimensions, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const global = require('../../css/css')
import Logo from '../../Components/common/Logo';
import GradientButton from '../../Components/common/GradientButton'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function Index() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // useEffect(() => {
    //     const checkAuthentication = async () => {
    //         try {
    //             const userToken = await AsyncStorage.getItem('@userToken');
    //             if (userToken == null) {
    //                 navigation.navigate('Authentication')
    //             } else {
    //                 navigation.navigate('HomeScreen')
    //             }
    //             setIsLoggedIn(!!userToken); // Convert userToken to boolean
    //         } catch (error) {
    //             console.error('Error checking authentication:', error);
    //             navigation.navigate('Authentication')
    //         }
    //     };

    //     checkAuthentication();
    // }, []);
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.innerContainer}>
                    <Image
                        source={require('../../images/BackgroundElements.png')}
                        style={styles.image} />
                </View>
                <View style={styles.logo}>
                    <Logo />
                </View>
            </View>
            <View style={[styles.bottomView]}>
                <Text style={[global.textBlack, global.secondaryText, styles.qoute]} >Discover the best foods from restaurants and get fast delivery to your doorstep</Text>
                <Pressable
                    onPress={ ()=>{ console.log('Login Clicked')}}
                    style={styles.button}>
                    <GradientButton 
                    name={'Login'} />
                </Pressable>
                <Pressable
                    onPress={ ()=>{ console.log('Create Account Clicked')}}
                    style={styles.button}>
                    <GradientButton 
                    name={'Create an Account'}
                    empty={true} />
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        height:windowHeight
    },
    innerContainer: {
        height: windowHeight / 100 * 50,
    },
    image: {
        width: windowWidth,
        height: windowHeight / 100 * 50
    },
    logo: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: windowHeight / 100 * 50,
        width: windowWidth,
        bottom: -windowWidth / 100 * 15

    },
    qoute: {
        textAlign: 'center',
        height: windowHeight / 100 * 5,
        width:windowWidth/100*80,
    },
    bottomView: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        position: 'absolute',
        bottom: windowHeight / 100 * 10
    },
    button:{
        width:windowWidth/100*80,
    }
})