import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {
    LoadingScreen,
    LoginScreen,
    SignUpScreen,
    ConfirmationScreen,
    TwoFAOptInScreen,
    JoinLayerScreen,
    SelectTopic,
    AddBannerPhoto,
    AddProfilePhoto,
} from './src/screens'
import LoginOTPVerificationScreen from './src/screens/LoginOTPVerification'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Stack = createStackNavigator()

export default function App() {
    return (
        <Provider theme={theme}>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="LoadingScreen"
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
                    <Stack.Screen name="LoginScreen" component={LoginScreen} />
                    <Stack.Screen name="LoginOTPVerificationScreen" component={LoginOTPVerificationScreen} />

                    <Stack.Screen name='SignUpScreen' component={SignUpScreen}/>
                    <Stack.Screen name='ConfirmationScreen' component={ConfirmationScreen}/>
                    <Stack.Screen name='TwoFAOptInScreen' component={TwoFAOptInScreen} />

                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}