// navigation.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from '../screens/Home';
import EventsScreen from '../screens/Events';
import VideosScreen from '../screens/Videos';
import QuotesScreen from '../screens/Quotes';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';


import { Text } from "react-native";

const Tab = createBottomTabNavigator();
const isHindi = true;

export default function AppNavigator() {
  return (
    <NavigationContainer>
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
          component={VideosScreen}
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
    </NavigationContainer>
  );
}
