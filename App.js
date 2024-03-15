import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
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
import TwoFactorAuthScreen from './src/TwoFactorAuthScreen'
import CreateBioScreen from './src/CreateBioScreen'

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
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        
          <Stack.Screen name="TwoFactorAuthScreen" component={TwoFactorAuthScreen} />
          <Stack.Screen name="CreateBioScreen" component={CreateBioScreen} />
          
          
          <Stack.Screen name="AddProfileScreen" component={AddProfilePhoto} />      
          <Stack.Screen name="SelectTopic" component={SelectTopic} />

      {/* // <SelectTopic/>
      // <AddBannerPhoto/>
      // <JoinLayerScreen/> */}
          {/* <AddProfilePhoto/> */}

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
 
    );
};


// export default function App() {
//   return (
//     <Provider theme={theme}>
//       <NavigationContainer>
//         <Stack.Navigator
//           initialRouteName="LoadingScreen"
//           screenOptions={{
//             headerShown: false,
//           }}
//         >
//           <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
//           <Stack.Screen name="StartScreen" component={StartScreen} />
//           <Stack.Screen name="LoginScreen" component={LoginScreen} />
//           <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
//           <Stack.Screen name="Dashboard" component={Dashboard} />
//           <Stack.Screen name="TrendingScreen" component={TrendingScreen} />
//           <Stack.Screen name="PostScreen" component={PostScreen} />
//           <Stack.Screen name="EventScreen" component={EventScreen} />
//           <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
//           <Stack.Screen name="LoginOTPVerificationScreen" component={LoginOTPVerificationScreen} />
//           <Stack.Screen name="AccountCreationScreen" component={AccountCreationScreen} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </Provider>
//   )
// }