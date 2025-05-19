// navigation/AuthStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EnterMobileScreen from '../screens/Login/EnterMobileScreen';
import OtpVerifyScreen from '../screens/Login/OtpVerifyScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={EnterMobileScreen} />
      <Stack.Screen name="Verify" component={OtpVerifyScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;