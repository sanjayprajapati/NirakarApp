// navigation.js
import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import EventsScreen from '../screens/Events';
import VideoStack from '../screens/Videos/VideoStack';
import QuotesScreen from '../screens/Quotes';
import BhajanStack from '../screens/Bhajan/BhajanStack';
import HomeStack from '../screens/Home/HomeStack';
import ReflectionFeedScreen from '../screens/Reflections/ReflectionFeedScreen';
const Tab = createBottomTabNavigator();
const isHindi = true;

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#ddd',
          height: 65,
          paddingBottom: 8,
          paddingTop: 6,
          shadowColor: '#000',
          shadowOpacity: 0.05,
          shadowOffset: {width: 0, height: -2},
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        tabBarActiveTintColor: '#2E8B57', // Green shade (match with logo)
        tabBarInactiveTintColor: '#999',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? '#E53935' : '#900', // red theme
                fontWeight: focused ? 'bold' : 'normal',
                fontSize: 12,
              }}>
              {isHindi ? 'होम' : 'Home'}
            </Text>
          ),
          tabBarIcon: ({color, size, focused}) => (
            <MaterialCommunityIcons
              name="human-greeting-variant"
              color={focused ? '#E53935' : '#900'}
              size={22}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Events"
        component={EventsScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? '#E53935' : '#900', // red theme
                fontWeight: focused ? 'bold' : 'normal',
                fontSize: 12,
              }}>
              {isHindi ? 'कार्यक्रम' : 'Events'}
            </Text>
          ),
          tabBarIcon: ({color, size, focused}) => (
            <Ionicons
              name="calendar-outline"
              color={focused ? '#E53935' : '#900'}
              size={22}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Reflections"
        component={ReflectionFeedScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? '#E53935' : '#900', // red theme
                fontWeight: focused ? 'bold' : 'normal',
                fontSize: 12,
              }}>
              {isHindi ? 'चिंतन' : 'Reflections'}
            </Text>
          ),
          tabBarIcon: ({color, size, focused}) => (
            <MaterialCommunityIcons
              name="brain"
              color={focused ? '#E53935' : '#900'}
              size={22}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Videos"
        component={VideoStack}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? '#E53935' : '#900', // red theme
                fontWeight: focused ? 'bold' : 'normal',
                fontSize: 12,
              }}>
              {isHindi ? 'वीडियो' : 'Video'}
            </Text>
          ),
          tabBarIcon: ({color, size, focused}) => (
            <Entypo
              name="video"
              color={focused ? '#E53935' : '#900'}
              size={22}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Bhajan"
        component={BhajanStack}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? '#E53935' : '#900', // red theme
                fontWeight: focused ? 'bold' : 'normal',
                fontSize: 12,
              }}>
              {isHindi ? 'भजन' : 'Bhajan'}
            </Text>
          ),
          tabBarIcon: ({color, size, focused}) => (
            <FontAwesome5
              name="book"
              color={focused ? '#E53935' : '#900'}
              size={22}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Quotes"
        component={QuotesScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? '#E53935' : '#900', // red theme
                fontWeight: focused ? 'bold' : 'normal',
                fontSize: 12,
              }}>
              {isHindi ? 'उद्धरण' : 'Quote'}
            </Text>
          ),
          tabBarIcon: ({color, size, focused}) => (
            <MaterialCommunityIcons
              name="comment-quote-outline"
              color={focused ? '#E53935' : '#900'}
              size={22}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
