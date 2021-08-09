import React, { useState } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    ImageBackground,
    StatusBar,
    TouchableOpacity,
    ScrollView,
    Modal
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import WelcomeModal from '../components/WelcomeModal';
import PresensiModal from '../components/PresensiModal';

import Logo2 from '../assets/umrah.png'
import Background from '../assets/background3.png'

const Homepage = () => {
    const [welcomeVisible, setWelcomeVisible] = useState(true);
    const [presensiVisible, setPresensiVisible] = useState(false)
    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <Modal
                animationType="fade"
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
                animationType="fade"
                transparent={true}
                visible={presensiVisible}
                onRequestClose={() => {
                    setPresensiVisible(false);
                }}>
                <View style={styles.welcomeModal}>
                    <PresensiModal setPresensiVisible={setPresensiVisible} />
                </View>
            </Modal>
            <ImageBackground
                source={Background}
                style={styles.background}
            >
                <Image
                    source={Logo2}
                    style={styles.logo2}
                />
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
                <View style={styles.container9}>
                    <TouchableOpacity
                        style={styles.datangButton}
                        onPress={() => {
                            setPresensiVisible(true)
                        }}>
                        <Text style={styles.datangText}>Presensi Datang</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container3}>
                    <View style={styles.container4}>
                        <Text style={styles.header}>
                            PRESENSI HARI INI
                        </Text>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {/* <View style={styles.container5}>
                    <Text style={styles.text1}>
                        Jam Datang
                        {'\n'}
                        <Text style={styles.text2}>
                            03:05:88
                        </Text>
                    </Text>
                    <View style={styles.container6}>

                    </View>
                    <Text style={styles.text1}>
                        Jam Pulang
                        {'\n'}
                        <Text style={styles.text2}>
                            00:00:00
                        </Text>
                    </Text>
                </View>
                <View style={styles.container7}>

                </View> */}


                        <View style={styles.container8}>
                            <Text style={styles.descriptionText}>Jam Datang</Text>
                            <Text style={styles.detailsText}>00:00:00</Text>
                            <Text style={styles.descriptionText}>Lokasi Datang</Text>
                            <Text style={styles.detailsText}>Aplikasi</Text>
                            <Text style={styles.descriptionText}>Rencana Kerja</Text>
                            <Text style={styles.detailsText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                        </View>
                        <View style={styles.container8}>
                            <Text style={styles.descriptionText}>Jam Datang</Text>
                            <Text style={styles.detailsText}>00:00:00</Text>
                            <Text style={styles.descriptionText}>Lokasi Datang</Text>
                            <Text style={styles.detailsText}>Aplikasi</Text>
                            <Text style={styles.descriptionText}>Rencana Kerja</Text>
                            <Text style={styles.detailsText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                        </View>
                    </ScrollView>
                </View>
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
        top: '23%',
        position: 'absolute',
        backgroundColor: '#DAC34D',
        borderRadius: 8,
        alignItems: 'center',
        flexDirection: 'row'
    },
    container3: {
        width: '95%',
        borderWidth: 1,
        borderColor: '#c4c4c4',
        // marginTop: 300
    },
    container4: {
        backgroundColor: "#c9cacc"
    },
    container5: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-evenly',
    },
    container6: {
        borderRightColor: "#264384",
        borderRightWidth: 1,
        marginVertical: 5,
    },
    container7: {
        borderBottomWidth: 1,
        borderBottomColor: '#264384',
        marginVertical: 3,
        // width: '85%',
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center'
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
        marginTop: '130%',
        width: '98%',
        alignItems: 'center'
    },
    welcomeModal: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: '15%'
    },
    background: {
        width: '100%',
        height: null,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    logo2: {
        position: 'absolute',
        width: 165,
        height: 50,
        top: 15,
        right: 5
    },
    text: {
        color: '#264384',
        fontFamily: 'Poppins-SemiBold'
    },
    text1: {
        color: '#264384',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 14,
        textAlign: 'center'
    },
    text2: {
        color: '#264384',
        fontFamily: 'Poppins-SemiBold',
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
    header: {
        color: '#264384',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 22,
        textAlign: 'center'
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
        width: '90%',
        borderRadius: 7,
        backgroundColor: '#28df99',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        borderColor: '#28df99',
        borderWidth: 1,
    },
    datangText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
})

export default Homepage;
