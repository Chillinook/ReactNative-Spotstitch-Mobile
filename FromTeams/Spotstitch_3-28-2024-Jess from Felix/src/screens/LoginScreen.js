import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View, Image } from 'react-native'
import { Text } from 'react-native-paper'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import Icon from '../components/Icon'
import { socialIconList } from '../components/Icon/socialIconList'
import HorizontalLine from '../components/HorizontalLine'

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
          routes: [{ name: 'LoginOTPVerificationScreen' }],
        });
    };

    const onSignUpPressed = () => {       
        navigation.reset({
          index: 0,
          routes: [{ name: 'SignUpScreen' }],
        });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <View style={styles.container}>
            <Image source={require( '../assets/boxLogo.png' )} />

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

            <TextInput
                label="Password"
                returnKeyType="done"
                value={password.value}
                onChangeText={(text) => setPassword({ value: text, error: '' })}
                error={!!password.error}
                errorText={password.error}
                secureTextEntry={!showPassword}
            />
            
            <Button style={styles.signInButton} mode="contained" onPress={onLoginPressed}>
                <Text style={styles.signInText}>SIGN IN</Text>
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
                            type='font-awesome'
                        />
                    );
                })}
            </View>

            <View style={[styles.row, { marginTop: 20 }]}>
                <Text style={styles.signUpText}>No account? </Text>

                {/* <TouchableOpacity onPress={() => {console.log("Sign up")}}> */}
                <TouchableOpacity onPress={onSignUpPressed}>
                    <Text style={styles.link}>Sign up</Text>
                </TouchableOpacity>
            </View>
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

    row: {
        flexDirection: 'row',
        marginTop: 4,
    },

    icons: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        iconColor: 'green',
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
        backgroundColor: '#8CBDEB',
        width: 105,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1.5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5,
    },

    signInText: {
        color: "#FFFFFF",
        fontWeight: 'bold',
    },

    signUpText: {
        fontWeight: 'bold',
    },
})
