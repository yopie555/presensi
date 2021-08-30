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
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { removeValue } from '../helper';
import { logoutAction } from '../actions/authAction';

const Header = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth);
    const profile = useSelector((state) => state.profile)
    const presensi = useSelector((state) => state.presensi)
    return (
        <View style={styles.container}>
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
                onPress={() => navigation.navigate("ResetScreen")}
            >
                <Icon
                    name='key-variant'
                    size={28}
                    color={"#fff"}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btn2}
                onPress={async () => {
                    removeValue();
                    await dispatch(logoutAction());
                }}
            >
                <Icon
                    name='logout'
                    size={28}
                    color={"#fff"}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: '#264384',
        fontFamily: 'Serifa-BT'
    },
    container: {
        width: '100%',
        height: 100,
        marginTop: 160,
        backgroundColor: '#DAC34D',
        borderRadius: 8,
        alignItems: 'center',
        flexDirection: 'row'
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
export default Header;