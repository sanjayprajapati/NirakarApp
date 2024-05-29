import * as React from 'react';
import { View, Text , Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import {store} from './src/store'
import HomeScreen from './src/screens/Home';
import Videos from './src/screens/Videos'


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



function App(){
  
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Videos" component={Videos} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}



export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
