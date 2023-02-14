import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AuthStack from './AuthStack';
import HomeTabs from './HomeTabs';

const AppContainer = props => {
  const {isAuth} = props;
  return (
    <NavigationContainer>
      {isAuth ? <HomeTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppContainer;
