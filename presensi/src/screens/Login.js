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

import Logo from '../assets/presensi.png'
import Logo2 from '../assets/umrah.png'
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
                    source={Logo2}
                    style={styles.logo2}
                />
                <Image
                    source={Logo}
                    style={styles.logo}
                />
                <Text style={styles.text}>LOGIN</Text>
                <View style={styles.container1}>
                    <View style={styles.textContainer}>
                        <Icon
                            name='account'
                            size={45}
                            color={"#C9CACC"}
                        />
                        <TextInput
                            style={styles.inputText}
                            onChangeText={(nip) => setNip(nip)}
                            value={nip}
                            placeholder="Masukkan NIP/NIK"
                        />
                    </View>
                    <View style={styles.textContainer}>
                        <Icon
                            name='lock-outline'
                            size={45}
                            color={"#C9CACC"}
                        />
                        <TextInput
                            style={styles.inputText}
                            secureTextEntry={true}
                            onChangeText={(password) => setPassword(password)}
                            value={password}
                            placeholder="Kata Sandi"
                        />
                    </View>
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
        borderRadius: 8
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
    logo2: {
        position: 'absolute',
        width: 165,
        height: 50,
        top: 15,
        right: 5
    },
    text: {
        fontSize: 27,
        color: '#FFF',
        fontFamily: 'Poppins-SemiBold',
        marginBottom: 10
    },
    inputText: {
        width: '80%',
        borderRadius: 7,
        marginBottom: 10,
        borderColor: '#264384',
        borderWidth: 1,
        marginLeft: 8,
        paddingLeft: 15,
        fontSize: 18,
        fontFamily: 'Poppins-Regular'
    },
    textContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10
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
