import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import TextInput from './components/TextInput'
import { Image, Platform, StatusBar, Text } from 'react-native';

export default function TwoFAOptInScreen({ navigation }) {
    const [phoneNumber, setPhoneNumber] = React.useState('')
    const userPhoneNumber = '000-000-0000' // route.params

    const [test,setTest] = useState({ gg:'kk' , ff:'gg'})

    return (
        < View style={ styles.container}>
            <View >
                <Image source={require( './images/accountVerified.png' )} />
            </View>

            <View style={ styles.mainText}>
                <Image source={require( './images/improveSecurity.png' )} />
            </View>

            <View style={ styles.subText}>
                <Image source={require( './images/activate2F.png' )} />
            </View>

            <View >
                <Image source={require( './images/signinCode.png' )} />
            </View>

            <View style={ styles.phoneContainer}>
                <TextInput
                    label="Phone number"
                    returnKeyType="done"
                    value={phoneNumber}
                    onChangeText={(text) => setPhoneNumber(text)}
                    error={false}
                    autoCapitalize="none"
                    autoCompleteType="tel"
                    textContentType="telephoneNumber"
                    keyboardType="phone-pad"
                />
            </View>

            <View style={ styles.lastRow } >
                <TouchableOpacity onPress={() => navigation.goBack()  } >
                    <Image source={require( '../assets/back2.png')}/>    
                </TouchableOpacity>  

                <View style={{ flexDirection:'row', alignItems:'center' , columnGap:20}}>
                    <TouchableOpacity onPress={() => navigation.navigate('AddProfileScreen')} >
                        <Image source={require( '../assets/skipBtn.png')} />    
                    </TouchableOpacity >

                    <TouchableOpacity onPress={() => navigation.navigate('AddProfileScreen', {test} )} >
                        <Image source={require( '../assets/nextBtn.png')} />    
                    </TouchableOpacity >    
                </View>
            </View> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: Platform.OS === 'android'? StatusBar.currentHeight*3:'20%',
        backgroundColor: 'white',
    },

    mainText:{
        justifyContent:'center',
        height:'20%',    
        marginBottom: 20,  
    },

    subText:{  
        marginBottom: 20,  
    },

    lastRow:{
        position:'absolute',
        flexDirection:'row',
        alignItems:'center',   
        columnGap: 160,
        bottom:'5%'
    },

    phoneContainer: {
        width: '100%',
        maxWidth: 340,
    },
})