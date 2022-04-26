import React from 'react';
import { Image, View, Text, StyleSheet} from 'react-native';
import logo from '../assets/estacio-logo.png';

export default function Header(properties) {
    return (
        <View style={styles.header}>
            <Image style={styles.logo} source={logo}/>
            <Text styles={styles.displayName}>
                {properties.headerDisplayName}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 50,
        height: 50
    },
    displayName: {
        fontFamily: 'Inter'
    }
})