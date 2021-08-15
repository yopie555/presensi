import React, { useState, useEffect } from 'react';
import { Alert, Button, Text, View, StyleSheet, Image } from 'react-native';
import moment from 'moment';
import GetLocation from 'react-native-get-location'
import { launchCamera } from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { addressAction } from '../actions/addressAction'

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
    console.log('ini cuy', thisAddress.address);


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
        <View style={style.container}>
            <Text>presensi Datang</Text>
            <Text>Jam Server : {CurrentTime}</Text>
            <Image
                source={{ uri: imageUri }}
                style={style.image}
            />
            <Button title="Ambil Foto" onPress={() => {
                opencamera()
            }} />
            <Text>
                Lokasi Anda : <Text>
                    {lat},{long}
                    {'\n'}
                    {thisAddress.address.place_name}
                </Text>
            </Text>
            <Button onPress={async () => {
                await getGeo();
            }}
                title="Get Your Location" />
            <Button onPress={() => {
                address();
            }}
                title="Get Your Address" />
        </View>

    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: 150,
        width: 150,
        borderRadius: 80,
        borderWidth: 2,
        borderColor: 'black'
    }
})
export default presensi;
