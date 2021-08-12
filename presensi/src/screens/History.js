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
    Button,
    TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import DateTimePicker from '@react-native-community/datetimepicker';

import Logo2 from '../assets/umrah.png'
import Background from '../assets/background3.png'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const History = () => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('Empty')
    const [date2, setDate2] = useState(new Date());
    const [mode2, setMode2] = useState('date');
    const [show2, setShow2] = useState(false);
    const [text2, setText2] = useState('Empty')

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
                <TextInput
                    style={styles.inputText}
                    onChangeText={(date) => setDate(date)}
                    value={text}
                    placeholder="Masukkan NIP/NIK"
                />
                <Text>{text}</Text>
                <Button onPress={() => showMode('date')} title="DatePicker" />
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
                <Text>{text2}</Text>
                <Button onPress={() => showMode2('date')} title="DatePicker" />
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
    background: {
        width: wp('100%'),
        // height: null,
        // alignItems: 'center',
        // justifyContent: 'center',
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
})

export default History;
