// BhajanStack.js
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BhajanListScreen from './BhajanDetailScreen'
import BhajanDetailScreen from "./";

const Stack = createNativeStackNavigator();

const BhajanStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="BhajanList" component={BhajanListScreen} options={{ title: "भजन माला" }} />
    <Stack.Screen name="BhajanDetail" component={BhajanDetailScreen} options={{ title: "भजन विवरण" }} />
  </Stack.Navigator>
);

export default BhajanStack;