import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import moment from 'moment';

const presensi = () => {

    const [CurrentTime, setCurrentTime] = useState('');

    useEffect(() => {

    }, [])
    setInterval(() => {
        var timeMoment = moment().format('LTS');
        setCurrentTime(timeMoment)

    }, 1000);

    return (
        <View>
            <Text>presensi</Text>
            <Text>{CurrentTime}</Text>
        </View>
    );
}
export default presensi;
