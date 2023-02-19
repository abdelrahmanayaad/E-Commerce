import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {configureAxios} from './src/utils/HelperFunctions';
configureAxios(); // ! Execution of baseURL
AppRegistry.registerComponent(appName, () => App);
