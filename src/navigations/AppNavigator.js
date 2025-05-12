// navigation.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '../screens/Home';
import EventsScreen from '../screens/Events';
import VideoStack from '../screens/Videos/VideoStack'
import QuotesScreen from '../screens/Quotes';
import LoginScreen from '../screens/Login';
import VideoPlayerScreen  from "../screens/Videos/VideoPlayerScreen";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo';
import BhajanListScreen from '../screens/Bhajan';
import BhajanDetailScreen from '../screens/Bhajan/BhajanDetailScreen';

import { Text } from "react-native";
import BhajanStack from "../screens/Bhajan/BhajanStack";

const Tab = createBottomTabNavigator();
//const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const isHindi = true;


function BottomTabs() {
  return (
    <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#fff",
            borderTopWidth: 1,
            borderTopColor: "#ddd",
            height: 65,
            paddingBottom: 8,
            paddingTop: 6,
            shadowColor: "#000",
            shadowOpacity: 0.05,
            shadowOffset: { width: 0, height: -2 },
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "600",
          },
          tabBarActiveTintColor: "#2E8B57", // Green shade (match with logo)
          tabBarInactiveTintColor: "#999",
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: ({ focused }) => <Text style={{
                color: focused ? "#E53935" : "#900", // red theme
                fontWeight: focused ? "bold" : "normal",
                fontSize: 12,
              }}>{isHindi ? "होम" : "Home"}</Text>,
            tabBarIcon: ({ color, size, focused }) => (
                <MaterialCommunityIcons name="human-greeting-variant" color={focused ? '#E53935' : '#900'} size={22} />
              ),
          }}
        />
        <Tab.Screen
          name="Events"
          component={EventsScreen}
          options={{
            tabBarLabel: ({ focused }) => <Text style={{
                color: focused ? "#E53935" : "#900", // red theme
                fontWeight: focused ? "bold" : "normal",
                fontSize: 12,
              }}>{isHindi ? "कार्यक्रम" : "Events"}</Text>,
            tabBarIcon: ({ color, size, focused }) => (
                <Ionicons name="calendar-outline" color={focused ? '#E53935' : '#900'} size={22} />
              ),
          }}
        />
        <Tab.Screen
          name="Videos"
          component={VideoStack}
          options={{
            tabBarLabel: ({ focused }) => <Text style={{
                color: focused ? "#E53935" : "#900", // red theme
                fontWeight: focused ? "bold" : "normal",
                fontSize: 12,
              }} >{isHindi ? "वीडियो" : "Video"}</Text>,
            tabBarIcon: ({ color, size, focused }) => (
                <Entypo name="video" color={focused ? '#E53935' : '#900'} size={22} />
              ),
          }}
        />
        <Tab.Screen
          name="Bhajan"
          component={BhajanStack}
          options={{
            tabBarLabel: ({ focused }) => <Text style={{
                color: focused ? "#E53935" : "#900", // red theme
                fontWeight: focused ? "bold" : "normal",
                fontSize: 12,
              }}>{isHindi ? "भजन" : "Bhajan"}</Text>,
            tabBarIcon: ({ color, size,focused }) => (
                <FontAwesome5 name="book" color={focused ? '#E53935' : '#900'} size={22} />
              ),
          }}
        />
        <Tab.Screen
          name="Quotes"
          component={QuotesScreen}
          options={{
            tabBarLabel: ({ focused }) => <Text style={{
                color: focused ? "#E53935" : "#900", // red theme
                fontWeight: focused ? "bold" : "normal",
                fontSize: 12,
              }}>{isHindi ? "उद्धरण" : "Quote"}</Text>,
            tabBarIcon: ({ color, size,focused }) => (
                <MaterialCommunityIcons name="comment-quote-outline" color={focused ? '#E53935' : '#900'} size={22} />
              ),
          }}
        />
      </Tab.Navigator>
  );
}
function CustomDrawerContent({ navigation }) {
  return (
    <>
      {/* Add profile header here if needed */}
      <Text style={{ margin: 20, fontWeight: "bold" }}>Sanjay Kumar</Text>
      <Text style={{ marginLeft: 20 }}>sanjay.prajapati80@gmail.com</Text>

      {/* List of items */}
      <Text onPress={() => {}} style={{ margin: 20 }}>📂 Recorded Sessions</Text>
      <Text onPress={() => {}} style={{ margin: 20 }}>⬇️ My Downloads</Text>
      <Text onPress={() => {}} style={{ margin: 20 }}>📚 My Library</Text>
      <Text onPress={() => {}} style={{ margin: 20 }}>📖 All Books</Text>
      <Text onPress={() => {}} style={{ margin: 20 }}>🎞️ My Video Series</Text>
      <Text onPress={() => {}} style={{ margin: 20 }}>🎥 Video Series</Text>
      <Text onPress={() => {}} style={{ margin: 20 }}>🎓 Scholarship</Text>
      <Text onPress={() => {}} style={{ margin: 20 }}>🙏 Donate</Text>
      <Text onPress={() => {}} style={{ margin: 20 }}>🌐 Website</Text>
    </>
  );
}
export default function AppNavigator() {
  
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
          drawerPosition: "left",
          drawerType: "front",
        }}
      >
        <Drawer.Screen name="Main" component={BottomTabs} />
      </Drawer.Navigator> */}
      {/* <BottomTabs /> */}
      <Stack.Navigator screenOptions={{ headerShown: false }}>        
        <Stack.Screen name="MainApp" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
