import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {MARGIN} from '../constants/Constants';
import Product from './Product';

export default function ProductList(props) {
  const renderProduct = ({item}) => {
    return <Product style={styles.image} product={item} />;
  };
  const {...rest} = props;
  return <FlatList {...rest} renderItem={renderProduct} numColumns={2} />;
}

const styles = StyleSheet.create({
  image: {
    marginEnd: MARGIN.xsMargin,
    marginBottom: MARGIN.lgMargin,
  },
});
