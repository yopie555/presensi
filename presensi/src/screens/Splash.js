import React, { useEffect } from 'react';
import { Text, View, Image, StyleSheet, ImageBackground, StatusBar } from 'react-native';

import Logo from '../assets/presensi.png'
import Background from '../assets/background.png'

function SplashScreen({ navigation }) {
    setTimeout(() => {
        navigation.replace('LoginScreen');
    }, 3000);
    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <ImageBackground
                source={Background}
                style={styles.background}
            >
                <View style={styles.subContainer}>

                    <Image style={styles.image} source={Logo} />
                    <Text style={styles.text}>SISTEM INFORMASI</Text>
                    <Text style={styles.text}>PRESENSI UMRAH</Text>
                </View>
            </ImageBackground>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FAFAFF',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    subContainer: {
        top: '41%',
        position: 'absolute',
        width: '100%',
        alignItems: 'center',
    },
    image: {
        width: 150,
        height: 180,
        marginBottom: 30,
    },
    background: {
        width: '100%',
        height: null,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    text: {
        color: '#FFF',
        fontSize: 22,
        fontFamily: 'Poppins-Regular'
    }
})

export default SplashScreen;