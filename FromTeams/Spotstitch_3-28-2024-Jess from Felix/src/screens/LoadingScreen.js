import React, { useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text } from 'react-native-paper';

export default function LoadingScreen({ navigation }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('LoginScreen');
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
            <Image source={require( '../assets/roundLogo.png' )} />

            <Text style={styles.text}>SPOTSTITCH</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        width: '100%',
        maxWidth: 340,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        fontSize: 30,
        lineHeight: 100,
        textAlign: 'center',
        fontWeight: 'bold',
      },
  })
