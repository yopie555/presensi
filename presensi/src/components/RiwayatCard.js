import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const RiwayatCard = (props) => {
    console.log('props', props);

    return (
        <View style={styles.container}>
            <View style={styles.containerT}>
                <Text>Tanggal              : </Text>
                <Text>{props.tgl}</Text>
            </View>
            <View style={styles.containerT}>
                <Text>Jam Datang      : </Text>
                <Text>{props.jamD}</Text>
            </View>
            <View style={styles.containerT}>
                <Text>Lokasi Datang  : </Text>
                <Text style={styles.isi} >{props.lokD}</Text>
            </View>
            <View style={styles.containerT}>
                <Text>Rencana Kerja  : </Text>
                <Text>{props.renK}</Text>
            </View>
            <View style={styles.containerT}>
                <Text>Jam Pulang      : </Text>
                <Text>{props.jamP}</Text>
            </View>
            <View style={styles.containerT}>
                <Text>Lokasi Pulang  : </Text>
                <Text>{props.lokP}</Text>
            </View>
            <View style={styles.containerT}>
                <Text>Realisasi Kerja : </Text>
                <Text>{props.relK}</Text>
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
    }
})

export default RiwayatCard;
