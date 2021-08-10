import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import Img from '../assets/berhasil.png'

const PresensiBerhasil = (props) => {
    setTimeout(() => {
        props.setBerhasilVisible(false)
    }, 2500);
    return (
        <View style={styles.container}>
            <Image
                source={Img}
                style={styles.img}
            />
            <Text style={styles.text}>PRESENSI BERHASIL</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 5,
        marginVertical: '90%',
        height: 200,
        width: 300,
        borderWidth: 1
    },
    img: {
        height: 100,
        width: 200,
        marginTop: 30,
        marginBottom: 15
    },
    text: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 18,
        color: '#264384'
    },

})

export default PresensiBerhasil;
