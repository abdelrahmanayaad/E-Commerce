import React from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import Category from '../../components/Category';
import Product from '../../components/Product';
import ProductList from '../../components/ProductList';
import {
  DummyCategories,
  DummyCategory,
  DummyProducts,
  DummyProductWithDiscount,
  DummyProductWithoutDiscount,
} from '../../utils/DummyData';
import styles from './HomeScreenStyle';

const renderCategory = ({item}) => (
  <Category style={styles.category} category={item} />
);

const renderCategoriesList = categories => (
  <FlatList
    data={categories}
    renderItem={renderCategory}
    horizontal
    showsHorizontalScrollIndicator={false}
  />
);
export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.componentView}>
        <Text style={styles.title}>Category</Text>
        {renderCategoriesList(DummyCategories)}
      </View>
      <View style={[styles.componentView, styles.productView]}>
        <Text style={styles.title}>Product</Text>
        <ProductList data={DummyProducts} />
      </View>
    </ScrollView>
  );
}
