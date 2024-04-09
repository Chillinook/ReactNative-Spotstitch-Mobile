import { Image,View, Text, TouchableOpacity ,StyleSheet,Platform,StatusBar} from 'react-native'
import React, { useState } from 'react'
import TextInput from './components/TextInput'
import { theme } from './theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import { twoFAValidator } from './helpers/twoFAValidator'

export default function SignUpTwoFA({ navigation, route }) {
  // const [phoneNumber, setPhoneNumber] = React.useState('')
  // const userPhoneNumber = '000-000-0000' // route.params
  const [twoFA, setTwoFA] = useState({ value:'', error:''})
  const {email,phoneNumber} = route.params 

  const onNextPressed = () => {             
    const twoFAError = twoFAValidator(twoFA.value);
    if (twoFAError) {
      setTwoFA({ ...twoFA, error: twoFAError });           
      return;
    }
    navigation.navigate('CreateBio', {email} )         
};
  
  return (
    <SafeAreaView style={styles.container}>      
      <View style={ styles.subText} >
        <Image source={require( '../assets/TwoFAauthen.png' )} />
      </View>
      <View style={ styles.subText} >
        <Image source={require( '../assets/2FAActivation.png' )} />
      </View>
      <View style={ styles.phoneContainer}>
        <Text style={styles.messageText}>An authentication code has been sent to 
        {" " + '***-***-' + phoneNumber.value.slice(-4)+ " "}     
           and will expire after 5 minutes.
        </Text>
      </View>       
      
      <View style={ styles.phoneContainer}>
      <TextInput
        label="6-digit code"
        returnKeyType="done"
        value={twoFA.value}
        onChangeText={(text) => setTwoFA({ value: text, error: '' })}
        error={!!twoFA.error}
        errorText={twoFA.error}
        maxLength={6}
        keyboardType="numeric"
        placeholder = "123456"
      />
       </View>
       <View style={ styles.lastRow } >
                <TouchableOpacity onPress={() => navigation.goBack()  } >
                    <Image source={require( '../assets/back2.png')}/>    
                </TouchableOpacity>                
                <TouchableOpacity onPress={onNextPressed} >
                    <Image source={require( '../assets/nextBtn.png')} />    
                </TouchableOpacity >                  
        </View> 
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingTop: Platform.OS === 'android'? StatusBar.currentHeight*3:'20%',
      backgroundColor: 'white',
    },

    emailContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        marginBottom: 30,
    },

    emailText: {
        fontWeight: 'bold',
        fontSize: 20,
    },

    messageText: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    row: {
        flexDirection: 'row',
    },

    codeText: {
        color: theme.colors.text,
        fontWeight: 'bold',
    },

    link: {
        fontWeight: 'bold',
        color: theme.colors.link,
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
      columnGap: 200,
      bottom:'5%'
  },

    imageText: {
        alignItems: 'left',
    },

    phoneContainer: {
      width: '100%',
      maxWidth: 340,
  },
})
      