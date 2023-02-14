/*import EStyleSheet from 'react-native-extended-stylesheet';
// using EStyleSheet from - > import EStyleSheet from 'react-native-extended-stylesheet';
// global variables for react-native extended-stylesheet
useEffect(() => {
  const TESTING_DEVICE_WIDTH = 411;
  const rem = Dimensions.get('window').width / TESTING_DEVICE_WIDTH;
  EStyleSheet.build({
    $rem: rem,
  });
}, []);*/

import {Dimensions} from 'react-native';

const TESTING_DEVICE_WIDTH = 411;

export const rem = Dimensions.get('window').width / TESTING_DEVICE_WIDTH;
