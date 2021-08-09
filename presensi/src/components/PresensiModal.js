import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const PresensiModal = () => {
    const [rencana, setRencana] = useState("");
    return (
        <View style={styles.container}>
            <Text style={styles.text1}>Server Time : <Text style={styles.text2}> 08:05:00</Text></Text>
            <TextInput
                style={styles.inputText}
                onChangeText={(rencana) => setRencana(rencana)}
                value={rencana}
                placeholder="Rencana Keja Hari Ini"
                multiline
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 5,
        marginVertical: '90%',
        height: 200,
        width: 300
    },
    inputText: {
        width: '80%',
        height: '80%',
        borderRadius: 7,
        marginBottom: 10,
        borderColor: '#264384',
        borderWidth: 1,
        marginLeft: 8,
        paddingHorizontal: 15,
        fontFamily: 'Poppins-Regular',
    },
})

export default PresensiModal;
