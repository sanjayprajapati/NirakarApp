import * as React from 'react';


import { Provider } from 'react-redux';
import {store} from './src/store'

import AppNavigator from './src/navigations/AppNavigator';




function App(){
  
  return (
    <AppNavigator />
  );
}



export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
