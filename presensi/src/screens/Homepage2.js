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
    Button,
    ActivityIndicator,
    RefreshControl
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Header from '../components/Header';
import WelcomeModal from '../components/WelcomeModal';
import PresensiModal from '../components/PresensiModal';
import { useDispatch, useSelector } from 'react-redux';
import { profileAction } from '../actions/profileAction';
import { presensiAction } from '../actions/presensiAction';
import { timeAction } from '../actions/timeAction';
import { BASE_URL } from '../constants/general';

import Logo2 from '../assets/umrah.png'
import Background from '../assets/background3.png'



const HomePage = ({ navigation }) => {

    const [welcomeVisible, setWelcomeVisible] = useState(true);
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth);
    const profile = useSelector((state) => state.profile)
    const presensi = useSelector((state) => state.presensi)
    const time = useSelector((state) => state.time)
    const [profileVisible, setProfileVisible] = useState(false);
    const [profileVisible2, setProfileVisible2] = useState(false);
    const [loading, setLoading] = useState(true)
    const [refreshing, setRefreshing] = React.useState(false);

    const absen = async () => {
        await dispatch(presensiAction({ token: user.auth.token, nip: user.auth.nip })).then(() => setLoading(false));
    }

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    useEffect(() => {
        dispatch(profileAction({ token: user.auth.token, nip: user.auth.nip }));
    }, []);

    useEffect(() => {
        (async () => {
            setLoading(true)
            absen();
        })
        setLoading(false)
    }, []);

    useEffect(() => {
        dispatch(timeAction({ token: user.auth.token, nip: user.auth.nip }));
    }, []);

    if (loading == true) {
        return (
            <View style={styles.loading}>
                <ActivityIndicator size="large" color="#DAC34D" />
            </View>
        );
    }

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

            <Modal
                animationType="slide"
                transparent={true}
                visible={profileVisible}
                onRequestClose={() => {
                    setProfileVisible(false);
                }}>
                <View style={styles.modalContainerImage}>
                    <Image
                        style={styles.modalImage}
                        source={{ uri: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png' || `${BASE_URL}/${presensi.presensi.Foto_plg}` }}
                    />
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={profileVisible2}
                onRequestClose={() => {
                    setProfileVisible2(false);
                }}>
                <View style={styles.modalContainerImage}>
                    <Image
                        style={styles.modalImage}
                        source={{ uri: `${BASE_URL}/${presensi.presensi.Foto_dtg}` }}
                    />
                </View>
            </Modal>
            <ImageBackground
                source={Background}
                style={styles.background}>
                <Image
                    source={Logo2}
                    style={styles.logo2} />
                <Header />
                <View style={styles.container4}>
                    <Text style={styles.header}>
                        PRESENSI HARI INI
                    </Text>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={absen}
                        />
                    }
                >
                    <View style={styles.container8}>
                        <Text style={styles.descriptionText}>Jam Datang</Text>
                        {/* {presensi.presensi.ScanIn == null ? <Text style={styles.detailsText}>-</Text> : <Text style={styles.detailsText}>{presensi.presensi.ScanIn}</Text>} */}
                        <Text style={styles.detailsText}>{presensi.presensi.ScanIn}</Text>
                        <Text style={styles.descriptionText}>Lokasi Datang</Text>
                        <Text style={styles.detailsText}>{presensi.presensi.SN_IN}</Text>
                        <Text style={styles.descriptionText}>Rencana Kerja</Text>
                        <Text style={styles.detailsText}>{presensi.presensi.Rencana_kerja}</Text>
                        <Button
                            title={"lihat Foto"}
                            onPress={() => {
                                setProfileVisible2(true)
                            }}
                            color={"#264384"}
                        />
                    </View>
                    <View style={styles.container8}>
                        <Text style={styles.descriptionText}>Jam Pulang</Text>
                        <Text style={styles.detailsText}>{presensi.presensi.ScanOut}</Text>
                        <Text style={styles.descriptionText}>Lokasi Pulang</Text>
                        <Text style={styles.detailsText}>{presensi.presensi.SN_OUT}</Text>
                        <Text style={styles.descriptionText}>Realisasi Kerja</Text>
                        <Text style={styles.detailsText}>{presensi.presensi.Realisasi_kerja}</Text>
                        <Button
                            title={"lihat Foto"}
                            onPress={() => {
                                setProfileVisible(true)
                            }}
                            color={"#264384"}
                        />
                    </View>
                </ScrollView>
                <View style={styles.container9}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("PresensiScreen")}
                        style={time.time.cek_dtg == 0 || presensi.presensi.SN_IN != null ? styles.disabledButton : styles.datangButton}
                        disabled={time.time.cek_dtg == 0 || presensi.presensi.SN_IN != null ? true : false}
                    >
                        <Text>Presensi Datang</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("PresensiScreen2")}
                        style={time.time.cek_plg == 0 || presensi.presensi.SN_OUT != null ? styles.disabledButton : styles.pulangButton}
                        disabled={time.time.cek_plg == 0 || presensi.presensi.SN_OUT != null ? true : false}
                    >
                        <Text>Presensi Pulang</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#264384',
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
        marginVertical: 5
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
        width: wp('45%'),
        backgroundColor: '#66C57A',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 7,
        borderRadius: 7
    },
    pulangButton: {
        width: wp('45%'),
        backgroundColor: '#EE9D52',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 7,
        borderRadius: 7
    },
    disabledButton: {
        width: wp('45%'),
        backgroundColor: '#c4c4c4',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 7,
        borderRadius: 7
    },
    datangText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    modalContainerImage: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#264384',
    },
    modalImage: {
        width: '100%',
        height: null,
        aspectRatio: 1,
    },
})

export default HomePage;
