import React from 'react';
import {Text, View} from 'react-native';
import Product from '../../components/Product';
import {DummyProductWithDiscount} from '../../utils/DummyData';
import styles from './CategoryScreenStyle';

export default function CategoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <Product product={DummyProductWithDiscount} />
    </View>
  );
}
