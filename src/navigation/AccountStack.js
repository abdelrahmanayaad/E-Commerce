import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AccountScreen from '../screens/AccountScreen/AccountScreen';
import AddAddressScreen from '../screens/AddAddressScreen/AddAddressScreen';
import UpdateProfileScreen from '../screens/UpdateProfileScreen/UpdateProfileScreen';
import OrderScreen from '../screens/OrderScreen/OrderScreen';

const Stack = createStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddAddressScreen"
        component={AddAddressScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UpdateProfileScreen"
        component={UpdateProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrderScreen"
        component={OrderScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
