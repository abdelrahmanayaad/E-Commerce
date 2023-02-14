import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import CartItem from '../../components/CartItem';
import MainButton from '../../components/MainButton';
import {DummyProducts} from '../../utils/DummyData';
import {CURRENCY} from '../../constants/Constants';
import styles from './CartScreenStyle';

export default function CartScreen() {
  const renderCartItem = ({item}) => {
    return <CartItem style={styles.cartItem} cartItem={item} />;
  };
  const renderCartItems = cartItems => {
    return <FlatList data={cartItems} renderItem={renderCartItem} />;
  };
  return (
    <View style={styles.container}>
      {renderCartItems(DummyProducts)}
      <View style={styles.footer}>
        <View style={styles.footerContentView}>
          <Text style={styles.price}>Total = 140 {CURRENCY}</Text>
          <MainButton title="CHECKOUT" style={styles.button} />
        </View>
      </View>
    </View>
  );
}
