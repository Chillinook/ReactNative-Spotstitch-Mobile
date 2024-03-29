import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from './components/Background'
import Logo from './components/Logo'
import Header from './components/Header'
import Button from './components/Button'
import TextInput from './components/TextInput'
import BackButton from './components/BackButton'
import { theme } from './theme'
import { emailValidator } from './helpers/emailValidator'
import { passwordValidator } from './helpers/passwordValidator'
import Icon from './components/Icon'
import { socialIconList } from './components/Icon/socialIconList'
import HorizontalLine from './components/HorizontalLine'

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [showPassword, setShowPassword] = useState(false);

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    navigation.reset({
      index: 0,
      // routes: [{ name: 'LoginOTPVerificationScreen' }],
      routes: [{ name: "TwoFactorAuthScreen" }],
      
    });
  };


  const onSignupPressed = () => { 
    navigation.reset({
      index: 0,
      // routes: [{ name: 'LoginOTPVerificationScreen' }],
      // routes: [{ name: "SignUpScreen" }],
      routes: [{ name: "JoinLayerScreen" }],
      
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Background>
      {/* <BackButton goBack={navigation.goBack} /> */}
      <Logo />
      <Header>Welcome to Spotstitch!</Header>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          label="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: '' })}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry={!showPassword}
          style={{ flex: 1 }}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Text style={{ fontSize: 16, color: 'blue', marginLeft: 10 }}>
            {showPassword ? 'Hide' : 'Show'}
          </Text>
        </TouchableOpacity>
      </View>
      <Button style={styles.signInButton} mode="contained" onPress={onLoginPressed}>
        <Text style={styles.signInText}>Sign in</Text>
      </Button>
      <HorizontalLine text="Or sign in with social media" />
      <View style={[styles.row, styles.icons]}>
        {socialIconList.map((item) => {
          return (
            <Icon
              key={item.name}
              name={item.name}
              containerStyle={styles.iconContainer}
              onPress={item.onPress}
            />
          );
        })}
      </View>
      <View style={[styles.row, { marginTop: 20 }]}>
        <Text style={styles.signUpText}>No account? </Text>
        <TouchableOpacity onPress={ ()=> navigation.push('SignUpScreen')} >  
        {/* <TouchableOpacity onPress={ () => navigation.navigate('JoinLayerScreen')} >   */}
        {/* <TouchableOpacity onPress={() =>  navigation.replace('SignUpScreen')}>  */}
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  icons: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.link,
  },
  iconContainer: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  signInButton: {
    marginTop: 20,
    width: '40%',
    // backgroundColor: theme.colors.gray,
    backgroundColor: '#8CBDEB'
  },
  signInText: {
    // color: theme.colors.text,
    color: 'white',
    fontWeight: 'bold',
  },
  signUpText: {
    fontWeight: 'bold',
  },
})
