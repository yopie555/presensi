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
    Modal,
    TextInput
} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';

import DateTimePicker from '@react-native-community/datetimepicker';

import Logo2 from '../assets/umrah.png'
import Background from '../assets/background3.png'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const History = ({ navigation }) => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('dd/mm/yyyy')
    const [date2, setDate2] = useState(new Date());
    const [mode2, setMode2] = useState('date');
    const [show2, setShow2] = useState(false);
    const [text2, setText2] = useState('dd/mm/yyyy')

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        // Process the date values
        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        let fTime = 'Hours: ' + tempDate.getHours() + ' | Minutes: ' + tempDate.getMinutes()
        setText(fDate)

        // Log the Time & Date values
        console.log(fDate)
        // console.log(fTime)
        // console.log(tempDate)
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };
    const onChange2 = (event, selectedDate2) => {
        const currentDate2 = selectedDate2 || date2;
        setShow2(Platform.OS === 'ios');
        setDate2(currentDate2);

        // Process the date values
        let tempDate2 = new Date(currentDate2);
        let fDate2 = tempDate2.getDate() + '/' + (tempDate2.getMonth() + 1) + '/' + tempDate2.getFullYear();
        let fTime2 = 'Hours: ' + tempDate2.getHours() + ' | Minutes: ' + tempDate2.getMinutes()
        setText2(fDate2)

        // Log the Time & Date values
        console.log(fDate2)
    };

    const showMode2 = (currentMode2) => {
        setShow2(true);
        setMode2(currentMode2);
    };
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
                {/* <Calendar/> */}
                <View style={styles.container3}>
                    <Text style={styles.tectHistory}>
                        Masukkan tanggal awal dan akhir, lalu tekan tombol cari untuk menampilkan riwayat presensi
                    </Text>
                </View>
                <View style={styles.container5}>
                    <Text style={styles.textTitle}>Riwayat Presensi</Text>
                    <View style={styles.container4}>
                        <TextInput
                            style={styles.inputText}
                            onChangeText={(date) => setDate(date)}
                            value={text}
                        />
                        <TouchableOpacity
                            style={styles.calendar}
                            onPress={() => showMode('date')}
                        >
                            <Icon
                                name="calendar-month"
                                size={30}
                                color="white"
                                style={styles.btnCalendar}
                            />
                        </TouchableOpacity>
                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                display="default"
                                onChange={onChange}
                            />
                        )}
                    </View>
                    <Text style={styles.text2}>s.d</Text>
                    <View style={styles.container4}>
                        <TextInput
                            style={styles.inputText}
                            onChangeText={(date) => setDate2(date)}
                            value={text2}
                        />
                        <TouchableOpacity
                            style={styles.calendar}
                            onPress={() => showMode2('date')}
                        >
                            <Icon
                                name="calendar-month"
                                size={30}
                                color="white"
                                style={styles.btnCalendar}
                            />
                        </TouchableOpacity>
                        {show2 && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date2}
                                mode={mode2}
                                is24Hour={true}
                                display="default"
                                onChange={onChange2}
                            />
                        )}
                    </View>
                    <TouchableOpacity
                        style={styles.datangButton}
                        onPress={() => {
                            navigation.navigate("RiwayatScreen")
                        }}>
                        <Icon2
                            name="search"
                            size={30}
                            color="white"
                        />
                        <Text style={styles.datangText}>Cari RIwayat</Text>
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
        backgroundColor: '#28df99',
        padding: 10,
        width: '90%',
        borderRadius: 10,
        marginVertical: 10
    },
    container4: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    container5: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#c4c4c4'
    },
    background: {
        alignItems: 'center',
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
    textTitle: {
        fontSize: 20,
        fontFamily: 'Serifa-Bold-BT',
        fontWeight: 'bold',
        color: '#264384',
        marginVertical: 10
    },
    text: {
        color: '#264384',
        fontFamily: 'Poppins-SemiBold'
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
    btnCalendar: {
        backgroundColor: "#264384",
        margin: 8,
        padding: 3,
        borderRadius: 10
    },
    inputText: {
        width: '75%',
        borderRadius: 7,
        marginBottom: 10,
        // marginRight: 8,
        borderColor: '#264384',
        borderWidth: 1,
        marginLeft: 8,
        paddingLeft: 15,
        fontSize: 16,
        fontFamily: 'Poppins-Regular'
    },
    tectHistory: {
        textAlign: 'center'
    },
    datangButton: {
        flexDirection: 'row',
        width: '100%',
        borderRadius: 7,
        backgroundColor: '#264384',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        borderColor: '#264384',
        borderWidth: 1,
    },
    datangText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
})

export default History;
