import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    ImageBackground,
    StatusBar,
    TouchableOpacity,
    ScrollView,
    Modal,
    Button
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import WelcomeModal from '../components/WelcomeModal';
import PresensiModal from '../components/PresensiModal';
import { useDispatch, useSelector } from 'react-redux';
import { profileAction } from '../actions/profileAction';
import { presensiAction } from '../actions/presensiAction';
import { timeAction } from '../actions/timeAction';

import Logo2 from '../assets/umrah.png'
import Background from '../assets/background3.png'



const HomePage = ({ navigation }) => {

    const [welcomeVisible, setWelcomeVisible] = useState(true);
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth);
    const profile = useSelector((state) => state.profile)
    const presensi = useSelector((state) => state.presensi)
    const time = useSelector((state) => state.time)
    console.log('user', time.time.cek_dtg);

    useEffect(() => {
        dispatch(profileAction({ token: user.auth.token, nip: user.auth.nip }));
    }, []);

    useEffect(() => {
        dispatch(presensiAction({ token: user.auth.token, nip: user.auth.nip }));
    }, []);

    useEffect(() => {
        dispatch(timeAction({ token: user.auth.token, nip: user.auth.nip }));
    }, []);


    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <Modal
                animationType="slide"
                transparent={true}
                visible={welcomeVisible}
                onRequestClose={() => {
                    setWelcomeVisible(false);
                }}>
                <View style={styles.welcomeModal}>
                    <WelcomeModal setWelcomeVisible={setWelcomeVisible} />
                </View>
            </Modal>

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
                        {profile.profile.Name}
                        {'\n'}
                        NIP : {user.auth.nip}
                        {'\n'}
                        {profile.profile.Unit}
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
                <View style={styles.container4}>
                    <Text style={styles.header}>
                        PRESENSI HARI INI
                    </Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.container8}>
                        <Text style={styles.descriptionText}>Jam Datang</Text>
                        <Text style={styles.detailsText}>{presensi.presensi.ScanIn}</Text>
                        <Text style={styles.descriptionText}>Lokasi Datang</Text>
                        <Text style={styles.detailsText}>{presensi.presensi.SN_IN}</Text>
                        <Text style={styles.descriptionText}>Rencana Kerja</Text>
                        <Text style={styles.detailsText}>{presensi.presensi.Rencana_kerja}</Text>
                    </View>
                    <View style={styles.container8}>
                        <Text style={styles.descriptionText}>Jam Datang</Text>
                        <Text style={styles.detailsText}>{presensi.presensi.ScanOut}</Text>
                        <Text style={styles.descriptionText}>Lokasi Datang</Text>
                        <Text style={styles.detailsText}>{presensi.presensi.SN_OUT}</Text>
                        <Text style={styles.descriptionText}>Rencana Kerja</Text>
                        <Text style={styles.detailsText}>{presensi.presensi.Realisasi_kerja}</Text>
                    </View>
                </ScrollView>
                <View style={styles.container9}>
                    {/* <TouchableOpacity
                        style={styles.datangButton}
                        onPress={() => {
                            navigation.navigate("PresensiScreen")
                        }}>
                        <Text style={styles.datangText}>Presensi Datang</Text>
                    </TouchableOpacity> */}
                    <Button
                        title={"Presensi Datang"}
                        onPress={() => navigation.navigate("PresensiScreen")}
                        style={styles.datangButton}
                        disabled={time.time.cek_dtg == 0 ? true : false}
                        color={'#66C57A'}
                    />
                    <Button
                        title={"Presensi Pulang"}
                        onPress={() => navigation.navigate("PresensiScreen2")}
                        style={styles.datangButton}
                        disabled={time.time.cek_plg == 0 ? true : false}
                        color={'#EE9D52'}
                    />
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    container4: {
        backgroundColor: "#c9cacc",
        // borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 10,
        marginBottom: 5
    },
    container8: {
        borderWidth: 1,
        backgroundColor: '#F3F3F3',
        marginHorizontal: '3%',
        marginBottom: 5,
        borderRadius: 5,
        borderColor: '#c4c4c4',
    },
    container9: {
        marginTop: 5,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 10
    },
    welcomeModal: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: '15%'
    },
    background: {
        width: wp('100%'),
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
    header: {
        color: '#264384',
        fontFamily: 'Serifa-BT',
        fontSize: 22,
        textAlign: 'center'
    },
    text: {
        color: '#264384',
        fontFamily: 'Serifa-BT'
    },
    text1: {
        color: '#264384',
        fontFamily: 'Serifa-BT',
        fontSize: 14,
        textAlign: 'center'
    },
    text2: {
        color: '#264384',
        fontFamily: 'Serifa-BT',
        fontSize: 24,
        textAlign: 'center'
    },
    descriptionText: {
        color: '#264384',
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 5,
        paddingHorizontal: '5%',
    },
    detailsText: {
        color: '#77797D',
        textAlign: 'justify',
        paddingHorizontal: '5%',
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
    datangButton: {
        width: wp('90%'),
    },
    datangText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
})

export default HomePage;
