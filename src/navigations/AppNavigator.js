// navigation.js
import React from "react";
import { Text ,ActivityIndicator, View} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from '../context/Authcontext';
import BottomTabs from "./BottomTabs";
import AuthStack from "./AuthStack";

//const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();





export default function AppNavigator() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }


  return (
    <NavigationContainer>
      
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!user ? (
        // Guest Stack
        <>
          <AuthStack />
          <Stack.Screen name="MainApp" component={BottomTabs} />
        </>
      ) : (
        // Authenticated Stack
        <>
          <Stack.Screen name="MainApp" component={BottomTabs} />
        </>
      )}
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
