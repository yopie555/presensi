import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    ImageBackground,
    StatusBar,
    TouchableOpacity,
    FlatList
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import RiwayatCard from '../components/RiwayatCard';
import Header from '../components/Header';
import Logo2 from '../assets/umrah.png'
import Background from '../assets/background3.png'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const Riwayat = ({ route }) => {
    const user = useSelector((state) => state.auth);
    const profile = useSelector((state) => state.profile);
    const history = useSelector((state) => state.history);

    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <ImageBackground
                source={Background}
                style={styles.background}>
                <Image
                    source={Logo2}
                    style={styles.logo2} />
                <Header />
                <View style={styles.container3}>
                    <Text style={styles.header}>
                        RIWAYAT PRESENSI
                    </Text>
                    <Text style={styles.header2}>
                        Priode : {route.params.text} - {route.params.text2}
                    </Text>
                </View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={history.history}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return (
                            <RiwayatCard
                                tgl={item.ScanDateIn}
                                jamD={item.ScanIn}
                                lokD={item.SN_IN}
                                renK={item.Rencana_kerja}
                                jamP={item.ScanOut}
                                lokP={item.SN_OUT}
                                relK={item.Realisasi_kerja}
                            />
                        )
                    }}

                />
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
    container3: {
        backgroundColor: "#c9cacc",
        // borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 10,
        marginVertical: 5,
        width: '95%',
        paddingVertical: 3
    },
    header: {
        color: '#264384',
        fontFamily: 'Serifa-BT',
        fontSize: 22,
        textAlign: 'center'
    },
    header2: {
        color: '#264384',
        fontFamily: 'Serifa-BT',
        fontSize: 18,
        textAlign: 'center'
    },
    background: {
        // alignItems: 'center',
        width: wp('100%'),
        flex: 1
    },
    logo2: {
        position: 'absolute',
        width: 45,
        height: 55,
        top: 0,
        right: 8
    },
    textTitle: {
        fontSize: 20,
        fontFamily: 'Serifa-Bold-BT',
        // fontWeight: 'bold',
        color: '#264384',
        marginVertical: 10
    },
    text: {
        color: '#264384',
        fontFamily: 'Serifa-BT'
    },
    text2: {
        fontSize: 20,
        fontFamily: 'Serifa-Bold-BT',
        color: '#c4c4c4',
        marginBottom: 8
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

})
export default Riwayat;