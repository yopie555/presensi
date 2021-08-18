import React, { useState, useEffect } from 'react';
import { Alert, Text, View, StyleSheet, Image, StatusBar, ImageBackground, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import moment from 'moment';
import GetLocation from 'react-native-get-location'
import { launchCamera } from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { addressAction } from '../actions/addressAction'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Logo2 from '../assets/umrah.png'
import Background from '../assets/background3.png'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const presensi = ({ navigation }) => {

    const [CurrentTime, setCurrentTime] = useState('');
    const [long, setLong] = useState('');
    const [lat, setLat] = useState('');
    const [imageUri, setimageUri] = useState(null)


    const dispatch = useDispatch();
    const address = () => {
        dispatch(addressAction({ latitude: lat, longitude: long }))
    }
    useEffect(() => {

    }, [])
    const thisAddress = useSelector((state) => state.address);
    // console.log('ini cuy', thisAddress.address);


    setInterval(() => {
        var timeMoment = moment().format('LTS');
        setCurrentTime(timeMoment)
    }, 1000);

    const opencamera = () => {
        let options = {

            mediaType: 'photo',
            includeBase64: false,

            // includeBase64: true
        };
        launchCamera(options, response => {
            console.log('response =', response);
            if (response.didCancel) {
                console.log('user cancelled image picker');
            } else if (response.error) {
                console.log('image picker error : ', response.error);
            } else if (response.customButton) {
                console.log('user tap custom button :', response.customButton);
            } else {
                const source = response.assets[0].uri
                setimageUri(source)
                console.log('respone..', response.assets[0].uri);

            }
        });
    }
    const getGeo = () => GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
    })
        .then(location => {
            console.log(location);
            setLong(location.longitude);
            setLat(location.latitude)
        })
        .catch(error => {
            const { code, message } = error;
            console.warn(code, message);
            Alert.alert('Turn On Your Location')
        })

    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <ImageBackground
                source={Background}
                style={styles.background}>
                <Image
                    source={Logo2}
                    style={styles.logo2} />

                <View style={styles.container2}>
                    <Icon
                        name='account-circle-outline'
                        size={90}
                        color={"#264384"}
                    />
                    <Text style={styles.text}>
                        Ardiansyah
                        {'\n'}
                        NIP : 01234567890
                        {'\n'}
                        Tenaga Dalam
                    </Text>
                    <TouchableOpacity
                        style={styles.btn1}
                    >
                        <Icon
                            name='key-variant'
                            size={28}
                            color={"#fff"}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btn2}
                    >
                        <Icon
                            name='logout'
                            size={28}
                            color={"#fff"}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.container3}>
                    <Text style={styles.textTitle}>Presensi Datang</Text>
                    <Text>Jam Server : {CurrentTime}</Text>
                </View>
                <View style={styles.container4}>
                    <Image
                        source={{ uri: imageUri }}
                        style={styles.image}
                    />

                    <TouchableOpacity
                        style={styles.btn3}
                        onPress={() => {
                            opencamera()
                        }}>
                        <Icon
                            name="camera"
                            size={35}
                            color="black"
                        />
                    </TouchableOpacity>
                </View>
                <Text>
                    Lokasi Anda : {long},{lat}
                </Text>
                <Button onPress={async () => {
                    await getGeo();
                }}
                    title="Get Your Location" />
                <Text>
                    {thisAddress.address.place_name}
                </Text>
                <Button onPress={() => {
                    address();
                }}
                    title="Get Your Address" />
            </ImageBackground>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    container2: {
        width: '100%',
        height: 100,
        marginTop: 160,
        backgroundColor: '#DAC34D',
        borderRadius: 8,
        alignItems: 'center',
        flexDirection: 'row'
    },
    container3: {
        alignItems: 'center',
        width: '95%',
        justifyContent: 'center',
        // height: 40,
        backgroundColor: '#c4c4c4'
    },
    text: {
        color: '#264384',
        fontFamily: 'Serifa-BT',
        fontSize: 16
    },
    textTitle: {
        fontFamily: 'Serifa-BT',
        fontSize: 24
    },
    btn1: {
        backgroundColor: '#264384',
        borderRadius: 5,
        position: 'absolute',
        top: 8,
        right: 50
    },
    btn2: {
        backgroundColor: '#264384',
        borderRadius: 5,
        position: 'absolute',
        top: 8,
        right: 13
    },
    btn3: {
        alignItems: 'center'
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 80,
        borderWidth: 2,
        borderColor: 'black'
    },
    background: {
        width: wp('100%'),
        alignItems: 'center',
        // height: null,
        // alignItems: 'center',
        // justifyContent: 'center',
        flex: 1
    },
    logo2: {
        position: 'absolute',
        width: 45,
        height: 55,
        top: 0,
        right: 8
    },
})
export default presensi;
