import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Order from '../../components/Order';
import {DummyOrders} from '../../utils/DummyData';
import styles from './OrderScreenStyle';
export default function OrderScreen() {
  const renderOrder = ({item}) => <Order order={item} style={styles.order} />;
  const renderOrders = orders => (
    <FlatList data={orders} renderItem={renderOrder} />
  );
  return <View style={styles.container}>{renderOrders(DummyOrders)}</View>;
}
