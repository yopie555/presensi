import React, { useState } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    ImageBackground,
    StatusBar,
    TextInput,
    TouchableOpacity
} from 'react-native';


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Fontisto';

import Logo from '../assets/presensi.png'
import Background from '../assets/background2.png'

const Login = ({ navigation }) => {
    const [nip, setNip] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <ImageBackground
                source={Background}
                style={styles.background}
            >
                <Image
                    source={Logo}
                    style={styles.logo}
                />
                <Text style={styles.text}>LOGIN</Text>
                <View style={styles.container1}>
                    <Icon
                        name='account'
                        size={25}
                        color={"#C9CACC"}
                        style={styles.icon}
                    />
                    <TextInput
                        style={styles.inputText}
                        onChangeText={(nip) => setNip(nip)}
                        value={nip}
                        placeholder="Masukkan NIP/NIK"
                    />
                    <Icon2
                        name='locked'
                        size={25}
                        color={"#C9CACC"}
                        style={styles.icon2}
                    />
                    <TextInput
                        style={styles.inputText}
                        secureTextEntry={true}
                        onChangeText={(password) => setPassword(password)}
                        value={password}
                        placeholder="Kata Sandi"
                    />
                    <TouchableOpacity
                        style={styles.loginBtn}
                        onPress={() => navigation.navigate("HomepageScreen")}>
                        <Text style={styles.textLogin}>Masuk</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container1: {
        height: 320,
        width: 320,
        backgroundColor: '#FFF',
        alignContent: 'center',
        justifyContent: 'center',
    },
    background: {
        width: '100%',
        height: null,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    logo: {
        width: '20%',
        height: null,
        aspectRatio: 0.83,
        marginBottom: 10,
    },
    text: {
        fontSize: 27,
        color: '#FFF',
        fontFamily: 'Poppins-SemiBold',
        marginBottom: 10
    },
    inputText: {
        width: '90%',
        borderRadius: 7,
        marginBottom: 10,
        borderColor: '#264384',
        borderWidth: 1,
        marginLeft: 17,
        paddingLeft: 33,
        fontSize: 22,
        fontFamily: 'Poppins-Regular'
    },
    icon: {
        position: 'absolute',
        left: 20,
        top: 66
    },
    icon2: {
        position: 'absolute',
        left: 23,
        top: 128
    },
    loginBtn: {
        width: '90%',
        borderRadius: 7,
        alignItems: 'center',
        padding: 10,
        marginTop: 35,
        borderWidth: 1,
        backgroundColor: '#264384',
        marginLeft: 17,
    },
    textLogin: {
        color: '#fff',
        fontSize: 22,
        fontFamily: 'Poppins-Regular'
    },
})
export default Login;
