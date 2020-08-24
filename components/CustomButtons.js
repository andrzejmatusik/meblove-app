import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export function GoldenButton({ text, onPress }) {
    return (
        <TouchableOpacity style={styles.goldenButton} onPress={onPress}>
            <Text style={styles.goldenText}>{ text }</Text>
        </TouchableOpacity>
    );
};

export function WhiteButton({ text, onPress }) {
    return (
        <TouchableOpacity style={styles.whiteButton} onPress={onPress}>
            <Text style={styles.whiteText}>{ text }</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    goldenButton: {
        backgroundColor: '#c9a586',
        borderRadius: 5,
        marginBottom: 17.5,
        padding: 17.5,
        width: 310,
    },
    goldenText: {
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    whiteButton: {
        backgroundColor: '#fff',
        borderRadius: 5,
        marginBottom: 17.5,
        padding: 17.5,
        width: 310,
    },
    whiteText: {
        fontWeight: 'bold',
        color: '#222',
        textAlign: 'center',
    },
});