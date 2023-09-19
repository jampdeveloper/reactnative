import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import Homescreen from '../Homescreen';
const Stack = createNativeStackNavigator();
  
const AuthNavigation = () => {
   return (
    <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name="welcompage"component={WelcomeScreen}
        options= {{
                headerShown: false
            }}
        />
        <Stack.Screen name="signup" component={SignupScreen}
        options= {{
            headerShown: false
        }}
        />
        <Stack.Screen name="login" component={LoginScreen}
        options= {{
            headerShown: false
        }}
   
        />
        <Stack.Screen name="home" component={Homescreen}
        options= {{
            headerShown: false
        }}
   
        />
    </Stack.Navigator>
  )
}
export default  AuthNavigation