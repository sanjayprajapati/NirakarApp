// HomeStack.js
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './'

import JoinUsFormScreen from "./JoinUsFormScreen";
import SevaFormScreen from "./SevaFormScreen";

const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="HomeScreen"  component={HomeScreen} options={{ headerShown: false,}} />
    <Stack.Screen name="JoinForm" component={JoinUsFormScreen} options={{ title: "हमसे जुड़ें" }} />
    <Stack.Screen name="SevaForm" component={SevaFormScreen} options={{ title: "सेवा करें" }} />
  </Stack.Navigator>
);

export default HomeStack;