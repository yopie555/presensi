import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const RiwayatCard = (props) => {
    console.log('props', props);

    return (
        <View style={styles.container}>
            <View style={styles.containerT}>
                <Text style={styles.text}>Tanggal             : </Text>
                <Text style={styles.text}>{props.tgl}</Text>
            </View>
            <View style={styles.containerT}>
                <Text style={styles.text}>Jam Datang      : </Text>
                <Text style={styles.text}>{props.jamD}</Text>
            </View>
            <View style={styles.containerT}>
                <Text style={styles.text}>Lokasi Datang  : </Text>
                <Text style={styles.text} >{props.lokD}</Text>
            </View>
            <View style={styles.containerT}>
                <Text style={styles.text}>Rencana Kerja  : </Text>
                <Text style={styles.text}>{props.renK}</Text>
            </View>
            <View style={styles.containerT}>
                <Text style={styles.text}>Jam Pulang      : </Text>
                <Text style={styles.text}>{props.jamP}</Text>
            </View>
            <View style={styles.containerT}>
                <Text style={styles.text}>Lokasi Pulang  : </Text>
                <Text style={styles.text}>{props.lokP}</Text>
            </View>
            <View style={styles.containerT}>
                <Text style={styles.text}>Realisasi Kerja : </Text>
                <Text style={styles.text}>{props.relK}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e3e3e3',
        justifyContent: 'center',
        marginHorizontal: 10,
        padding: 8,
        borderRadius: 5,
        // borderWidth: 1,
        marginBottom: 5
    },
    containerT: {
        flexDirection: 'row',
        paddingRight: 90
    },
    isi: {
        // textAlign: 'auto'
    },
    text: {
        fontFamily: 'Serifa-BT'
    }
})

export default RiwayatCard;
