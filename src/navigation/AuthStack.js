import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import ConfirmationCodeScreen from '../screens/ConfirmationCodeScreen/ConfirmationCodeScreen';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ConfirmationCodeScreen"
        component={ConfirmationCodeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
