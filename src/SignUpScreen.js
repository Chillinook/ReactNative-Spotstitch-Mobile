import React from 'react';
import { StyleSheet, Image, View, Text, TextInput } from 'react-native';
// import { Poppins_100Thin_Italic } from "@expo-google-fonts/poppins";
import SignUpButton from './SignUpButton';

function SignUpScreen() {

    const submitUserInfo = () => {
        // console.log('Authen')
        navigation.navigate('AddProfileScreen')
    }

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('./images/rectangle_99.png')}/>
            <Text style={styles.header}>Sign up with social media</Text>
            <View style={styles.iconsContainer}>
                <Image style={styles.icon} source={require('./images/facebook.png')}/>
                <Image style={styles.icon} source={require('./images/twitter.png')}/>
                <Image style={styles.icon} source={require('./images/instagram.png')}/>
                <Image style={styles.icon} source={require('./images/google.png')}/>
            </View>

            <View style={styles.separator}>
                <View style={styles.separatorLine} />
                    <Text style={styles.orText}>Or use your email</Text>
                <View style={styles.separatorLine} />
            </View>

            <View style={styles.userInputContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Full name</Text>
                    <TextInput style={styles.input} inputMode='text' autoComplete='name' />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Email</Text>
                    <TextInput style={styles.input} inputMode='email' />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Username</Text>
                    <TextInput style={styles.input} autoComplete='username' />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Password</Text>
                    <TextInput style={styles.input} autoComplete='current-password' secureTextEntry={true} />
                </View>
                <SignUpButton onPress={submitUserInfo} /> 
                {/* {/* <SignUpButton onPress={ ()=> console.log('submit')} /> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },

    header:{
        marginTop: 30,
        // fontFamily: 'poppins',
        fontSize: 20,
        fontWeight: 'bold',
    },

    icon:{
        marginHorizontal: 12,
        width: 50,
        height: 50,
    },

    iconsContainer:{
        flexDirection: 'row',
        marginTop: 25,
        marginBottom: 10,
    },

    input:{
        width: '100%',
        height: 40,
        paddingLeft: 10,
        borderColor: 'black',
        // fontFamily: 'poppins',
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
        // fontFamily: 'poppins',
        fontSize: 12,
    },

    logo:{
        margin: 20,
        width: 110,
        height: 110,
    },

    orText:{
        marginHorizontal: 10,
        // fontFamily: 'poppins',
        fontSize: 13,
        color: 'black',
    },

    separator:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
      
    separatorLine:{
        flex: 1,
        height: 1,
        backgroundColor: 'lightgrey',
        height: 1.5,
    },

    userInputContainer:{
        marginTop: 30,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default SignUpScreen;