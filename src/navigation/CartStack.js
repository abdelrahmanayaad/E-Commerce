import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CartScreen from '../screens/CartScreen/CartScreen';
import ProductScreen from '../screens/ProductScreen/ProductScreen';

const Stack = createStackNavigator();

export default function CartStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
