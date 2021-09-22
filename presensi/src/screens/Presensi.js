import React, { useState, useEffect } from 'react';
import {
    Alert,
    Text,
    View,
    StyleSheet,
    Image,
    StatusBar,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    ScrollView,
    ToastAndroid,
    Modal,
    ActivityIndicator,
    KeyboardAvoidingView
} from 'react-native';
import moment from 'moment';
import GetLocation from 'react-native-get-location'
import { launchCamera } from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { addressAction } from '../actions/addressAction'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FormData from 'form-data';
import { datangAction } from '../actions/datangAction';
import { presensiAction } from '../actions/presensiAction';
import BerhasilModal from '../components/PresensiBerhasil'

import Logo2 from '../assets/umrah.png'
import Background from '../assets/background4.png'

const presensi = ({ navigation }) => {

    const [CurrentTime, setCurrentTime] = useState('');
    const [long, setLong] = useState('');
    const [lat, setLat] = useState('');
    const [imageUri, setimageUri] = useState(null)
    const [photo, setPhoto] = useState(null)
    const [rencana, setRencana] = useState("");
    const [loading, setLoading] = useState(false)
    const [berhasilVisible, setBerhasilVisible] = useState(false);
    const dispatch = useDispatch();
    const submitPresensiD = (latitude, longitude) => {
        const data = new FormData();
        data.append('file', { ...photo });
        data.append('username', user.auth.nip);
        data.append('lokasi_datang', thisAddress.address.place_name);
        data.append('rencana_kerja', rencana);
        data.append('longitude', long);
        data.append('latitude', lat);
        dispatch(datangAction({ data, token: user.auth.token }));
    };

    const address = (latitude, longitude) => {
        dispatch(addressAction({ latitude: latitude, longitude: longitude }))
    }
    // useEffect(() => {
    //     getGeo()
    // }, [])
    const thisAddress = useSelector((state) => state.address);
    const user = useSelector((state) => state.auth);


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
                const img = response.assets[0]
                setPhoto({
                    type: img.type,
                    name: img.fileName,
                    uri: img.uri
                })
                console.log('respone..', response.assets[0]);

            }
        });
    }
    const getGeo = () => GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
    })
        .then(location => {
            setLong(location.longitude);
            setLat(location.latitude)
            console.log('lok', location);
            return location
        })
        .catch(error => {
            const { code, message } = error;
            console.warn(code, message);
            Alert.alert('Turn On Your Location')
        })

    return (
        <KeyboardAvoidingView>
            <ScrollView bounces={false}>
                <View style={styles.container}>
                    {/* <StatusBar hidden={true} /> */}
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={berhasilVisible}
                        onRequestClose={() => {
                            setBerhasilVisible(false);
                        }}>
                        <View style={styles.welcomeModal}>
                            <BerhasilModal setBerhasilVisible={setBerhasilVisible} />
                        </View>
                    </Modal>
                    <ImageBackground
                        source={Background}
                        style={styles.background}>
                        <Image
                            source={Logo2}
                            style={styles.logo2} />

                        <View style={styles.container2}>

                            <View style={styles.container3}>
                                <Text style={styles.textTitle}>Presensi Datang</Text>
                            </View>
                            <View style={styles.container5}>
                                <Text style={styles.textJam}>Jam Server : {CurrentTime}</Text>
                            </View>
                            <View style={styles.container4}>
                                <Image
                                    source={{
                                        uri: imageUri ||
                                            'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'
                                    }}
                                    style={styles.image}
                                />
                                <TouchableOpacity
                                    style={styles.btn3}
                                    onPress={() => {
                                        opencamera()
                                    }}>
                                    <Icon
                                        name="camera"
                                        size={30}
                                        color="white"
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.container6}>
                                <Text style={styles.textTitle}>
                                    Foto Anda
                                </Text>
                                <View style={styles.container7}>
                                    <Text style={styles.textGeo}>
                                        {thisAddress.address.place_name}
                                    </Text>
                                    <TouchableOpacity
                                        style={styles.btn4}
                                        onPress={async () => {
                                            setLoading(true)
                                            let response_getGeo = await getGeo()
                                            if (response_getGeo) {
                                                address(response_getGeo.latitude, response_getGeo.longitude)
                                                // submitPresensiD(response_getGeo.latitude, response_getGeo.longitude)
                                            }
                                            console.log('qwe', response_getGeo);
                                            setLoading(false)
                                        }}
                                    >
                                        <Icon
                                            name="map-search-outline"
                                            size={30}
                                            color="white"
                                        />
                                        <Text style={{ color: 'white', fontFamily: "Poppins-Regular" }}>Alamat</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <ScrollView style={styles.container8}>
                                <Text style={styles.textTitle2}>
                                    Rencana Kinerja Hari Ini
                                </Text>
                                <TextInput
                                    style={styles.inputText2}
                                    onChangeText={(rencana) => setRencana(rencana)}
                                    value={rencana}
                                    placeholder="Rencana Keja Hari Ini"
                                    multiline
                                />
                                <View style={styles.container9}>
                                    <TouchableOpacity
                                        style={styles.datangButton}
                                        onPress={async () => {
                                            // setLoading(true)
                                            // await dispatch(presensiAction({ token: user.auth.token, nip: user.auth.nip }));
                                            // setLoading(false)
                                            navigation.navigate("HomepageScreen")
                                        }}>
                                        <Text style={styles.datangText}>Tutup</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.datangButton2}
                                        onPress={async () => {
                                            if (
                                                photo === null
                                            ) { ToastAndroid.show("Silahkan Ambil Gambar Terlebih Dahulu", 2000) }
                                            else if (
                                                thisAddress.address.place_name === ""
                                            ) { ToastAndroid.show("Silahkan Tekan Button Alamat Terlebih Dahulu", 2000) }
                                            else if (
                                                rencana === ""
                                            ) { ToastAndroid.show("Silahkan Isi Rencana Kinerja Terlebih Dahulu", 2000) }
                                            else {
                                                setLoading(true)
                                                await submitPresensiD()
                                                setLoading(false)
                                                setBerhasilVisible(true)
                                            }
                                        }}>
                                        <Text style={styles.datangText}>Simpan</Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </View>
                    </ImageBackground>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container2: {
        width: wp('95%'),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        borderWidth: 1,
        elevation: 3,
        borderColor: '#c4c4c4',
        // marginBottom: 55
    },
    container3: {
        alignItems: 'center',
        backgroundColor: '#c4c4c4',
        // borderRadius: 5,
        marginHorizontal: 10,
        // marginBottom: 10,
        width: wp('95%'),
        borderWidth: 1,
        borderColor: '#c4c4c4'
    },
    container5: {
        width: wp('95%'),
        alignItems: 'center',
        marginVertical: 5
    },
    container6: {
        width: wp('95%'),
        alignItems: 'center',
        borderColor: '#c4c4c4',
        marginBottom: 15
    },
    container7: {
        flexDirection: 'row',
        marginVertical: 5
    },
    container8: {
        borderWidth: 1,
        width: wp('87%'),
        borderColor: '#c4c4c4',
        marginBottom: 10
    },
    container9: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    text: {
        color: '#264384',
        fontFamily: 'Poppins-Regular',
        fontSize: 16
    },
    textTitle: {
        fontFamily: 'Poppins-Bold',
        fontSize: 24,
        color: '#264384',
        paddingVertical: 3
    },
    textTitle2: {
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        color: '#264384',
        // fontWeight: 'bold',
        paddingVertical: 3,
        borderWidth: 1,
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderColor: '#c4c4c4'
    },
    textJam: {
        fontFamily: 'Poppins-Bold',
        color: '#264384',
        paddingVertical: 3,
    },
    textGeo: {
        borderWidth: 1,
        width: wp('70%'),
        borderRadius: 5,
        paddingVertical: 14,
        paddingHorizontal: 10,
        fontSize: 18
    },
    inputText2: {
        width: '95%',
        // height: '65%',
        borderRadius: 7,
        marginVertical: 10,
        borderColor: '#264384',
        borderWidth: 1,
        marginLeft: 8,
        paddingHorizontal: 10,
        fontFamily: 'Poppins-Regular',
        color: "#000"
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
        alignItems: 'center',
        position: 'absolute',
        right: -2,
        bottom: 1,
        backgroundColor: '#264384',
        borderRadius: 50,
        padding: 3
    },
    btn4: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
        backgroundColor: '#264384',
        padding: 3,
        borderRadius: 8,
        width: wp('19%')
    },
    image: {
        height: 120,
        width: 120,
        borderRadius: 80,
        borderWidth: 1,
        borderColor: '#c4c4c4'
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
    datangButton: {
        width: '35%',
        borderRadius: 7,
        backgroundColor: '#B74545',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        borderColor: '#B74545',
        borderWidth: 1,
        marginHorizontal: 4
    },
    datangButton2: {
        width: '35%',
        borderRadius: 7,
        backgroundColor: '#264384',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        borderColor: '#264384',
        borderWidth: 1,
        marginHorizontal: 4
    },
    datangText: {
        fontSize: 16,
        // fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Poppins-Bold'
    },
    welcomeModal: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: '15%'
    },
})
export default presensi;
