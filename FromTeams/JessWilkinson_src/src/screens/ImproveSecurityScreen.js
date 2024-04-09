import React from 'react';
import { StyleSheet, TextInput, View, Text, Image} from 'react-native';
import BackButton from '../components/BackButton';
import SkipButton from '../components/SkipButton';
import NextButton from '../components/NextButton';


function ImproveSecurityScreen() {

    return (
        <View style={styles.container}>
            <View style={styles.feedback}>
                <Image style={styles.icon} source={require('../assets/images/check_circle.png')} />
                <Text>Your account has been verified</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.header}>Improve your security.</Text>
                <Text style={styles.subheader}>Activate 2 factor authentication for better account security.</Text>
                <Text style={styles.codeSent}>A sign in code will be sent to your phone number before you can continue.</Text>
            </View>
            <View style={styles.phoneInputContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Phone number</Text>
                    <TextInput style={styles.input} inputMode='numeric' />
                </View>
            </View>
            <View style={styles.backButton}>
                <BackButton/>
            </View>
            <View style={styles.skipButton}>
                <SkipButton />
            </View>
            <View style={styles.nextButton}>
                <NextButton />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    backButton:{
        position: 'absolute',
        bottom: 55,
        left: 35,
    },
    
    codeSent:{
        fontFamily: 'poppins',
        fontSize: 16,
        fontWeight: 'light',
        textAlign: 'center',
        margin: 10,
        width:'100%',
    },

    container:{
        flex: 1,
        position: 'relative',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'top',
        padding: 25,
    },

    feedback:{
        flexDirection: 'row',
        marginTop: 25,
        marginBottom: 10,
    },

    header:{
        marginTop: 22,
        margin: 20,
        fontFamily: 'poppins',
        fontSize: 36,
        fontWeight: 'bold',
        lineHeight: '45%',
        textAlign: 'center',
    },

    input:{
        width: '100%',
        height: 40,
        paddingLeft: 10,
        borderColor: 'black',
        fontFamily: 'poppins',
    },

    inputContainer:{
        flexDirection: 'row',
        borderWidth: 1,
        borderBottomColor: 'black',
        margin: 12,
        borderRadius: 3,
    },

    inputLabel:{
        position: 'absolute',
        top: -10,
        left: 10,
        backgroundColor: 'white',
        paddingHorizontal: 3,
        color: 'black',
        fontFamily: 'poppins',
        fontSize: 12,
    },

    nextButton:{
        position: 'absolute',
        bottom: 45,
        right: 35,
    },

    phoneInputContainer:{
        marginTop: 30,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    skipButton:{
        position: 'absolute',
        bottom: 55,
        right: 140,
    },

    subheader:{
        fontFamily: 'poppins',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
        width:'100%',
    },

    textContainer:{
        alignItems: 'center',
        width: '100%',
    }
})

export default ImproveSecurityScreen;