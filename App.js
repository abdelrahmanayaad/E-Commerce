import React, {useState} from 'react';
import {View, Text} from 'react-native';
import OrderScreen from './src/screens/OrderScreen/OrderScreen';
import {
  DummyCategory,
  DummyOrder,
  DummyProduct,
  DummyProductWithDiscount,
  DummyProductWithoutDiscount,
} from './src/utils/DummyData';

export default function App() {
  return <OrderScreen />;
}
