import JoinLayerScreen from './src/JoinLayerScreen';
import SelectTopic from './src/SelectTopic';
import AddBannerPhoto from './src/AddBannerPhoto';
import AddProfilePhoto from './src/AddProfilePhoto';
import { Provider } from 'react-native-paper'
import { theme } from './src/theme';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoadingScreen from './src/LoadingScreen'
import LoginScreen from './src/LoginScreen'
import SignUpScreen from './src/SignUpScreen'
import ConfirmationScreen from './src/ConfirmationScreen';
import TwoFAOptInScreen from './src/TwoFAOptInScreen';
import React, { useState } from 'react';
import SignUpTwoFA from './src/SignUpTwoFA';
import CreateBio from './src/CreateBio';
import ConnectSocials from './src/ConnectSocials';
import SignInTwoFA from './src/SignInTwoFA';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TwoFactorAuthScreen from './src/TwoFactorAuthScreen'
import CreateBioScreen from './src/CreateBioScreen'
import RegisterScreen from './src/RegisterScreen';
import AccountVerificationScreen from './src/AccountVerificationScreen';
import SocialMediaConnectScreen from './src/SocialMediaConnectScreen';

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
          <Stack.Screen name="SignInTwoFA" component={SignInTwoFA} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="ConfirmationScreen" component={ConfirmationScreen} />
          <Stack.Screen name="TwoFAOptInScreen" component={TwoFAOptInScreen} />
          <Stack.Screen name="SignUpTwoFA" component={SignUpTwoFA} />
          <Stack.Screen name="CreateBio" component={CreateBio} />
          <Stack.Screen name="ConnectSocials" component={ConnectSocials} />
          <Stack.Screen name="AddProfileScreen" component={AddProfilePhoto} />      
          <Stack.Screen name="AddBannerPhoto" component={AddBannerPhoto} />
          <Stack.Screen name="SelectTopic" component={SelectTopic} />
          <Stack.Screen name="JoinLayerScreen" component={JoinLayerScreen} />


          {/* <Stack.Screen name="AccountVerificationScreen" component={AccountVerificationScreen} /> */}
          {/* <Stack.Screen name="RegisterScreen" component={RegisterScreen} /> */}
          {/* <Stack.Screen name="TwoFactorAuthScreen" component={TwoFactorAuthScreen} /> */}
          {/* <Stack.Screen name="CreateBioScreen" component={CreateBioScreen} /> */}
          {/* <Stack.Screen name="SocialMediaConnectScreen" component={SocialMediaConnectScreen} /> */}

          {/* <SelectTopic/> */}
          {/* // <AddBannerPhoto/> */}
          {/* // <JoinLayerScreen/> */} 
          {/* <AddProfilePhoto/> */}

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
 
    );
};

