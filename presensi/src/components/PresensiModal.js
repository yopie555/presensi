import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Modal } from 'react-native';


import BerhasilModal from '../components/PresensiBerhasil';

const PresensiModal = (props) => {
    const [rencana, setRencana] = useState("");

    const [berhasilVisible, setBerhasilVisible] = useState(false);
    return (
        <View style={styles.container}>
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
            <Text style={styles.text1}>Server Time : <Text style={styles.text2}> 08:05:00</Text></Text>
            <TextInput
                style={styles.inputText}
                onChangeText={(rencana) => setRencana(rencana)}
                value={rencana}
                placeholder="Rencana Keja Hari Ini"
                multiline
            />
            <View style={styles.container2}>
                <TouchableOpacity
                    style={styles.datangButton}
                    onPress={() => {
                        props.setPresensiVisible(false)
                    }}>
                    <Text style={styles.datangText}>Tutup</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.datangButton2}
                    onPress={() => {
                        // props.setPresensiVisible(false)
                        setBerhasilVisible(true)
                    }}>
                    <Text style={styles.datangText}>Simpan</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 5,
        marginVertical: '90%',
        height: 300,
        width: 300
    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    inputText: {
        width: '80%',
        height: '65%',
        borderRadius: 7,
        marginBottom: 10,
        borderColor: '#264384',
        borderWidth: 1,
        marginLeft: 8,
        paddingHorizontal: 15,
        fontFamily: 'Poppins-Regular',
    },
    text1: {
        color: '#264384',
        fontSize: 18,
        marginVertical: 5,
        fontFamily: 'Poppins-SemiBold',
    },
    text2: {
        color: '#66C57A'
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
        fontWeight: 'bold',
        color: 'white',
    },
    welcomeModal: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: '15%'
    },
})

export default PresensiModal;
