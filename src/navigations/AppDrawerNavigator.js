import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabs from "./BottomTabs";
import EventsScreen from "../screens/Events";

const Drawer = createDrawerNavigator();

const AppDrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="HomeTabs">
      <Drawer.Screen name="HomeTabs" component={BottomTabs} options={{ title: 'मुख्य पृष्ठ' }} />
      <Drawer.Screen name="Profile" component={EventsScreen} options={{ title: 'प्रोफ़ाइल' }} />
      <Drawer.Screen name="Settings" component={EventsScreen} options={{ title: 'सेटिंग्स' }} />
      <Drawer.Screen name="About" component={EventsScreen} options={{ title: 'हमारे बारे में' }} />
    </Drawer.Navigator>
  );
};

export default AppDrawerNavigator;