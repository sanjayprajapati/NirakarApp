/**
 * @format
 */

import {AppRegistry} from 'react-native';
import './i18'; // add this at top
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
