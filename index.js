/**
 * @format
 */
import './global';
import {AppRegistry} from 'react-native';
import App from './src/screens/load3dModel';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
