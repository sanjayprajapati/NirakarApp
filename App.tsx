import * as React from 'react';


import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import {store} from './src/store';
import { AuthProvider } from './src/context/Authcontext'; // adjust path as needed
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AppNavigator from './src/navigations/AppNavigator';


import './i18';
function App(){
  
  return (
   
    <AppNavigator />
   
  );
}



export default () => {
  return (
    <AuthProvider>
       <PaperProvider settings={{
        icon: (props) => <MaterialCommunityIcons {...props} />,
      }}>
         <App />
      </PaperProvider>
    </AuthProvider>
  );
};
