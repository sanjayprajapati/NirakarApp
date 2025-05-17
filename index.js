/**
 * @format
 */

import {AppRegistry} from 'react-native';
import './i18'; // add this at top
import App from './App';
import {name as appName} from './app.json';
import TrackPlayer from 'react-native-track-player';
import playbackService from './services'// adjust path as needed



AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => playbackService);