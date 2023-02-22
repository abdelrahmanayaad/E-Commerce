import 'react-native-gesture-handler';
if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {configureAxios} from './src/utils/HelperFunctions';
import {Provider} from 'react-redux';
import store from './src/redux/Store';
configureAxios(); // ! Execution of baseURL in the first
const connectedApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => connectedApp);
